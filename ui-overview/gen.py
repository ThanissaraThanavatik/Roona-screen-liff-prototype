#!/usr/bin/env python3
"""Generate ROONA flow-overview artifacts from the built Storybook index.json:
  - README.md      : Markdown index (Mermaid flow map + per-screen state tables)
  - gallery.html   : browse every screen/state, preview each Storybook story
  - prototype.html : guided clickable prototype (LIFF phone frame, 6 flows)

Read-only against the repo except for writing into its own directory.
Regenerate:  pnpm --filter @roona/ui build-storybook && python3 docs/acceptance/ui-overview/gen.py
"""
import json, re, os, html, urllib.parse, collections

# Paths derived relative to this script so it stays portable inside the repo.
# Expected location: <repo>/docs/acceptance/ui-overview/gen.py
OUT = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.normpath(os.path.join(OUT, "../../.."))
IDX = os.path.join(REPO, "packages/ui/storybook-static/index.json")
SB_REL = "../../../packages/ui/storybook-static"  # relative path from OUT to storybook-static

# Thai title -> (SCR code, flow-order, one-line purpose). Order follows EXPERIENCE.md §8.
SCR = {
    "เข้าสู่ระบบ":       ("SCR-AUTH",  1, "เข้าสู่ระบบผ่าน LINE + สถานะบัญชี/สิทธิ์ (pre-login — ได้ hybrid visual ตาม ADR-0012)"),
    "หน้าหลัก":          ("SCR-HOME",  2, "แดชบอร์ดหลังล็อกอิน: เริ่มตรวจ, โควตา, รายการล่าสุด"),
    "แบบฟอร์มตรวจ":      ("SCR-FORM",  3, "กรอกข้อมูลผู้ถูกตรวจ + ติ๊กยินยอม PDPA ก่อนกดตรวจ"),
    "สแกนบัตร":          ("SCR-OCR",   4, "ถ่าย/อัปโหลดบัตร → OCR autofill เข้าฟอร์ม"),
    "ความยินยอม PDPA":   ("SCR-PDPA",  5, "หน้าแสดง/บันทึกความยินยอม PDPA"),
    "กำลังประมวลผล":     ("SCR-PROC",  6, "สถานะกำลังคัดกรอง (2 เฟส: skeleton → reassurance; timeout ไม่หักโควตา)"),
    "ผลไม่พบ":           ("SCR-RES",   7, "ผลลัพธ์ไม่พบ (no-hit) + เอกสารหลักฐาน"),
    "ผลพบ + ตัดสิน":     ("SCR-HIT",   8, "ผลพบ (hit) + โซนตัดสิน; บล็อกการนำทางจนกว่าจะปิดเคส"),
    "ประวัติการตรวจ":    ("SCR-HIST",  9, "ประวัติการตรวจทั้งหมด: ค้นหา/กรอง/เปิดเคสซ้ำ/หลักฐาน"),
    "โควตา/หมดสิทธิ์":   ("SCR-QUOTA", 10, "สถานะโควตา/overage/หมดสิทธิ์ (fail-closed gate ของทั้ง flow)"),
    "ลืมรหัสผ่าน (N/A)": ("SCR-PWD",   11, "placeholder — ยังไม่อยู่ในขอบเขต (N/A)"),
}
CODE2THAI = {v[0]: k for k, v in SCR.items()}

# ---------------------------------------------------------------- load index
d = json.load(open(IDX))
entries = d.get("entries") or {}
screens = collections.OrderedDict()
for k, v in entries.items():
    t = v.get("title", "")
    if not t.startswith("Screens/") or v.get("type") != "story":
        continue
    thai = t[len("Screens/"):].strip()
    code, order, purpose = SCR.get(thai, (thai, 99, ""))
    screens.setdefault(thai, {"thai": thai, "code": code, "order": order,
                              "purpose": purpose, "states": []})
    screens[thai]["states"].append({"id": v.get("id"), "name": v.get("name")})

scr = sorted(screens.values(), key=lambda s: s["order"])
total_states = sum(len(s["states"]) for s in scr)

# non-screen sections (building blocks) — indexed in gallery/README, not in the flow prototype
def _group(prefix):
    g = collections.OrderedDict()
    for k, v in entries.items():
        t = v.get("title", "")
        if v.get("type") != "story" or not t.startswith(prefix):
            continue
        g.setdefault(t, {"label": t.split("/", 1)[1], "states": []})["states"].append(
            {"id": v.get("id"), "name": v.get("name")})
    return list(g.values())

CATALOG = [
    ("Screening", "FLOW", "Screening/", "โมเลกุลระดับ flow ที่ประกอบอยู่ในหน้าจอ Screens/"),
    ("Components", "UI", "Components/", "primitives / molecules พื้นฐาน (atoms)"),
    ("Design System", "TOKEN", "Design System/", "token gallery"),
]
catalog = [(name, tag, desc, _group(prefix)) for name, tag, prefix, desc in CATALOG]
catalog_total = sum(len(st["states"]) for _, _, _, grp in catalog for st in grp)
grand_total = total_states + catalog_total

# id lookup: (thai, kebab(export)) -> story id, matched via id suffix
def kebab(s):
    s = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", "-", s)
    s = re.sub(r"(?<=[A-Z])(?=[A-Z][a-z])", "-", s)
    return re.sub(r"[^a-zA-Z0-9]+", "-", s).lower().strip("-")

by_suffix = {}
for s in screens.values():
    for st in s["states"]:
        by_suffix[(s["thai"], st["id"].rsplit("--", 1)[-1])] = st["id"]

def story_id(code, export):
    thai = CODE2THAI[code]
    sid = by_suffix.get((thai, kebab(export)))
    if not sid:
        raise SystemExit(f"! story not found: {code} ({thai}) / {export} -> {kebab(export)}")
    return sid

# role-differentiated states (operator=พนักงาน vs owner=เจ้าของ). Other screens are role-agnostic.
ROLE_LABEL_TH = {"operator": "พนักงาน", "owner": "เจ้าของ"}
ROLE_SPECS = [
    ("SCR-AUTH",  "UnboundOperator", "operator"), ("SCR-AUTH",  "UnboundOwner", "owner"),
    ("SCR-HOME",  "Default",         "operator"), ("SCR-HOME",  "OwnerRole",    "owner"),
    ("SCR-HIST",  "OperatorRole",    "operator"), ("SCR-HIST",  "Default",       "owner"),
    ("SCR-QUOTA", "EmptyOperator",   "operator"), ("SCR-QUOTA", "OverageOperator", "operator"),
    ("SCR-QUOTA", "EmptyOwner",      "owner"),    ("SCR-QUOTA", "Overage",       "owner"),
]
role_by_id = {story_id(c, e): r for c, e, r in ROLE_SPECS}
role_by_id_th = {sid: ROLE_LABEL_TH[r] for sid, r in role_by_id.items()}

# operator↔owner variant pairs per screen (for the prototype role-view toggle)
ROLE_PAIRS_SPEC = [
    ("SCR-HOME",  "Default",         "OwnerRole"),
    ("SCR-HIST",  "OperatorRole",    "Default"),
    ("SCR-QUOTA", "EmptyOperator",   "EmptyOwner"),
    ("SCR-QUOTA", "OverageOperator", "Overage"),
    ("SCR-AUTH",  "UnboundOperator", "UnboundOwner"),
]
_name_by_id = {st["id"]: st["name"] for s in screens.values() for st in s["states"]}
role_pairs = {}
sid_label = {}
for c, opx, owx in ROLE_PAIRS_SPEC:
    o, w = story_id(c, opx), story_id(c, owx)
    pair = {"operator": o, "owner": w}
    role_pairs[o] = pair; role_pairs[w] = pair
    sid_label[o] = _name_by_id.get(o, opx); sid_label[w] = _name_by_id.get(w, owx)

# how operator vs owner differ, per screen (for the README matrix)
ROLE_MATRIX = [
    ("SCR-AUTH",  "ยังไม่ผูกบัญชี: ข้อความ/วิธีผูกแบบพนักงาน (UnboundOperator)", "ยังไม่ผูกบัญชี: มุมเจ้าของ (UnboundOwner)"),
    ("SCR-HOME",  "\"ตรวจล่าสุด\" เฉพาะของตัวเอง · ซ่อนชื่อผู้ตรวจ (Default)", "\"ล่าสุด (ทั้งร้าน)\" · โชว์ \"โดย <ผู้ตรวจ>\" (OwnerRole)"),
    ("SCR-HIST",  "ซ่อนตัวกรอง \"ผู้ตรวจ\" · ไม่มีปุ่ม reopen (OperatorRole)", "มีตัวกรองผู้ตรวจ · reopen เคส \"พบ\" ได้ (Default)"),
    ("SCR-QUOTA", "ไม่เห็นตัวเลขเงิน · ปุ่มเดียว \"แจ้งเจ้าของ\" (EmptyOperator / OverageOperator)", "มิเตอร์ + \"เติมสิทธิ์/อัปเกรด\" เองได้ (EmptyOwner / Overage)"),
]

def sb_embed(sid):
    return f"{SB_REL}/iframe.html?id={urllib.parse.quote(sid, safe='')}&viewMode=story"

def sb_full(sid):
    return f"{SB_REL}/index.html?path=/story/{urllib.parse.quote(sid, safe='')}"

# ---------------------------------------------------------------- flow spec
# node: (code, export, caption, [ (label, target_node) ... ])
FLOWS = [
 {"id": "f1", "title": "Flow 1 — คัดกรอง 'ไม่พบ'", "emoji": "✅", "start": "login", "nodes": {
   "login":     ("SCR-AUTH", "Login",         "เข้าสู่ระบบผ่าน LINE", [("เข้าสู่ระบบ", "home")]),
   "home":      ("SCR-HOME", "Default",        "หน้าหลัก — กดปุ่ม 'ตรวจ'", [("เริ่มตรวจ", "form")]),
   "form":      ("SCR-FORM", "Empty",          "เลือกประเภท (ไทย) แล้วสแกนบัตร", [("สแกนบัตร", "ocr_cap"), ("กรอกเอง", "form_ready")]),
   "ocr_cap":   ("SCR-OCR",  "Capture",        "ถ่าย/อัปโหลดบัตรประชาชน", [("ถ่ายภาพ", "ocr_prev")]),
   "ocr_prev":  ("SCR-OCR",  "Preview",        "ตรวจภาพก่อนส่ง OCR", [("ใช้ภาพนี้", "ocr_ok")]),
   "ocr_ok":    ("SCR-OCR",  "Success",        "OCR สำเร็จ ≥0.80 → autofill (ภาพบัตรถูกทิ้งทันที)", [("เข้าฟอร์ม", "form_auto")]),
   "form_auto": ("SCR-FORM", "OcrAutofilled",  "ฟอร์มถูกเติมชื่อ/นามสกุล/เลขบัตรอัตโนมัติ", [("ติ๊ก PDPA", "pdpa")]),
   "form_ready":("SCR-FORM", "ReadyToSubmit",  "กรอกครบพร้อมส่ง", [("ติ๊ก PDPA", "pdpa")]),
   "pdpa":      ("SCR-PDPA", "Default",        "อ่านความยินยอม PDPA [LEGAL-C1]", [("รับทราบ", "pdpa_ack"), ("โหลด notice ไม่สำเร็จ", "pdpa_err"), ("กำลังโหลด", "pdpa_load")]),
   "pdpa_err":  ("SCR-PDPA", "NoticeError",    "โหลดข้อความยินยอมไม่สำเร็จ — inline retry", [("ลองใหม่", "pdpa")]),
   "pdpa_load": ("SCR-PDPA", "Loading",        "กำลังโหลดความยินยอม", [("โหลดเสร็จ", "pdpa")]),
   "pdpa_ack":  ("SCR-PDPA", "Acknowledged",   "ยินยอมแล้ว — ปุ่ม 'ตรวจ' เปิดใช้งาน", [("กดตรวจ", "proc")]),
   "proc":      ("SCR-PROC", "Loading",        "กำลังประมวลผล (skeleton, ~5s)", [("ดูผล", "res")]),
   "res":       ("SCR-RES",  "NoHit",          "ผลไม่พบ — ดาวน์โหลดหลักฐาน, บันทึกอัตโนมัติ, quota −1", [("เสร็จ → หน้าหลัก", "home")]),
 }},
 {"id": "f2", "title": "Flow 2 — 'พบ' + ตัดสิน", "emoji": "⚖️", "start": "proc", "nodes": {
   "proc":      ("SCR-PROC", "Loading",        "กำลังประมวลผล", [("ผลออก", "hit")]),
   "hit":       ("SCR-HIT",  "MultiMatch",     "พบ! รายชื่อผู้ต้องสงสัย top-5 + คะแนน (เมนูถูกซ่อน — disposition-blocking)", [("ตรงทุก field", "hit_true"), ("ไม่ตรง (false positive)", "hit_fp")]),
   "hit_true":  ("SCR-HIT",  "TrueMatch",      "ตรงทุก field → การ์ดคำเตือนกฎหมาย [LEGAL-C2] (ระบบรายงาน ไม่สั่งระงับธุรกรรม)", [("รับทราบ + ปิดเป็น true match", "hit_closed")]),
   "hit_fp":    ("SCR-HIT",  "FalsePositive",  "ระบุเป็น false positive [LEGAL-C3]", [("ปิดเคส", "hit_closed")]),
   "hit_closed":("SCR-HIT",  "ClosedRecorded", "ปิดเคสแล้ว — quota −1, แจ้งเจ้าของ (email + badge, ไม่มี PII)", [("ดูประวัติ", "hist")]),
   "hist":      ("SCR-HIST", "Default",        "บันทึกอยู่ในประวัติ (เจ้าของเปิด/override ได้; ธุรกรรมไม่เคยถูกระบบบล็อก)", []),
 }},
 {"id": "quota", "title": "Quota — fail-closed", "emoji": "🚫", "start": "home", "nodes": {
   "home":       ("SCR-HOME",  "QuotaLow",        "โควตาใกล้หมด — แบนเนอร์เตือนที่ ≤20%", [("ฝืนกดตรวจ", "form")]),
   "form":       ("SCR-FORM",  "QuotaExhausted",  "โควตาหมด — ปุ่ม 'ตรวจ' ถูกบล็อก (fail-closed)", [("ดูสถานะโควตา", "q_loading")]),
   "q_loading":  ("SCR-QUOTA", "Loading",         "กำลังโหลดสถานะโควตา", [("โหลดเสร็จ", "q_op"), ("โหลดไม่สำเร็จ", "q_loaderr")]),
   "q_loaderr":  ("SCR-QUOTA", "LoadError",       "โหลดสถานะโควตาไม่สำเร็จ — retry", [("ลองใหม่", "q_loading")]),
   "q_op":       ("SCR-QUOTA", "EmptyOperator",   "มุมมองพนักงาน: ปุ่ม 'แจ้งเจ้าของ' (ไม่เห็นตัวเงิน)", [("ดูโควตาเหลือน้อย", "q_low"), ("มุมมองเจ้าของ", "q_owner")]),
   "q_low":      ("SCR-QUOTA", "Low",             "หน้าโควตา: เหลือน้อย (≤20%)", [("← กลับ", "q_op")]),
   "q_owner":    ("SCR-QUOTA", "EmptyOwner",      "มุมมองเจ้าของ: มิเตอร์ + 'เติมสิทธิ์ / อัปเกรดแพ็ก'", [("overage (เจ้าของ)", "q_over"), ("overage (พนักงาน)", "q_over_op"), ("overage ถึง cap", "q_over_cap"), ("trial หมด", "q_trial")]),
   "q_over":     ("SCR-QUOTA", "Overage",         "soft overage ต่อได้ถึง cap 50% (คิดรายรายการ)", [("← กลับ", "q_owner")]),
   "q_over_op":  ("SCR-QUOTA", "OverageOperator", "overage — มุมมองพนักงาน (ไม่เห็นตัวเงิน)", [("← กลับ", "q_owner")]),
   "q_over_cap": ("SCR-QUOTA", "OverageCap",      "overage ถึง cap 50% แล้ว → fail-closed", [("← กลับ", "q_owner")]),
   "q_trial":    ("SCR-QUOTA", "TrialEnd",        "ทดลองหมด — fail-closed ทันที ไม่มี grace", [("← กลับ", "q_owner")]),
 }},
 {"id": "hist", "title": "History / reopen", "emoji": "🗂️", "start": "home", "nodes": {
   "home":   ("SCR-HOME", "Default",           "หน้าหลัก", [("ดูประวัติ", "hist")]),
   "hist":   ("SCR-HIST", "Default",           "ประวัติการตรวจ — ค้นหา/กรอง", [("เปิดรายการ 'ไม่พบ'", "res"), ("เปิดรายการ 'พบ' ที่ปิดแล้ว", "reopen"), ("เผยชื่อเต็ม (audit)", "reveal"), ("งานค้าง", "action")]),
   "res":    ("SCR-RES",  "NoHit",             "เปิดดูผลเดิม — re-download ได้ PDF เดิม (frozen)", [("← กลับประวัติ", "hist")]),
   "reopen": ("SCR-HIST", "DecidedHitReopen",  "ขอเปิดเคส 'พบ' ที่ตัดสินแล้วใหม่", [("ติดโควตา", "rq"), ("ติด trial", "rt"), ("← กลับ", "hist")]),
   "rq":     ("SCR-HIST", "ReopenBlockedQuota","เปิดใหม่ไม่ได้ — โควตาหมด", [("← กลับ", "hist")]),
   "rt":     ("SCR-HIST", "ReopenBlockedTrial","เปิดใหม่ไม่ได้ — trial หมด", [("← กลับ", "hist")]),
   "reveal": ("SCR-HIST", "RevealFullName",    "เผยชื่อเต็ม (PII) — ลง audit log", [("← กลับ", "hist")]),
   "action": ("SCR-HIST", "ActionRequired",    "รายการที่ต้องดำเนินการ", [("← กลับ", "hist")]),
 }},
 {"id": "proc", "title": "B. Processing degraded", "emoji": "⏳", "start": "loading", "nodes": {
   "loading": ("SCR-PROC", "Loading",     "เฟส 1: skeleton (0–5 วิ)", [("รอเกิน 5 วิ", "slow"), ("จำลอง: แอปบูตไม่ขึ้น", "shell")]),
   "slow":    ("SCR-PROC", "Slow",        "เฟส 2: 'ยังประมวลผล… อาจช้ากว่าปกติ' (submit ปิด)", [("หมดเวลา", "timeout"), ("เน็ตหลุด", "network"), ("สำเร็จ", "res")]),
   "timeout": ("SCR-PROC", "Timeout",     "หมดเวลา — timeout ไม่หักโควตา", [("ลองอีกครั้ง", "loading")]),
   "network": ("SCR-PROC", "Network",     "เชื่อมต่อไม่ได้", [("ลองอีกครั้ง", "loading")]),
   "res":     ("SCR-RES",  "NoHit",       "สำเร็จ → ผลไม่พบ", []),
   "shell":   ("SCR-PROC", "ShellOffline","แอปบูตไม่ขึ้น (shell ล่ม, เต็มจอ ไม่มี header)", [("รีโหลดแอป", "loading")]),
 }},
 {"id": "auth", "title": "C. Auth blocked (11 states)", "emoji": "🔒", "start": "login", "nodes": {
   "login":   ("SCR-AUTH", "Login",   "หน้าเข้าสู่ระบบ (pre-login, hybrid visual — ADR-0012)", [("เข้าสู่ระบบ", "loading"), ("ลืมรหัสผ่าน (N/A)", "pwd")]),
   "pwd":     ("SCR-PWD",  "Info",    "ลืมรหัสผ่าน — placeholder N/A (นอกขอบเขต LIFF; owner reset ผ่าน merchant portal)", [("← กลับ Login", "login")]),
   "loading": ("SCR-AUTH", "Loading", "กำลังยืนยันตัวตน… เลือกผลลัพธ์ (SRS SCR-AUTH-01..11):", [
       ("พนักงานยังไม่ผูกบัญชี", "unbound_op"), ("เจ้าของยังไม่ผูกบัญชี", "unbound_owner"),
       ("สิทธิ์ถูกเพิกถอน", "revoked"), ("บัญชีถูกระงับ", "suspended"),
       ("ร้านค้างชำระ", "shop_dunning"), ("ร้านถูกแอดมินล็อก", "shop_admin_hard"),
       ("ผู้ใช้พร้อมกันเต็ม", "concurrency_full"), ("สลับเครื่อง (kick)", "single_device_kick"),
       ("LINE ล่ม", "line_outage"), ("เปิดนอก LINE", "outside_line"), ("OAuth ล้มเหลว", "oauth_error")]),
   "unbound_op":        ("SCR-AUTH", "UnboundOperator", "พนักงานยังไม่ถูกผูกกับร้าน — dead-end + วิธีผูก", [("← กลับ Login", "login")]),
   "unbound_owner":     ("SCR-AUTH", "UnboundOwner",    "เจ้าของยังไม่ผูกบัญชี", [("← กลับ Login", "login")]),
   "revoked":           ("SCR-AUTH", "Revoked",         "สิทธิ์ถูกเพิกถอน", [("← กลับ Login", "login")]),
   "suspended":         ("SCR-AUTH", "Suspended",       "บัญชีถูกระงับ", [("← กลับ Login", "login")]),
   "shop_dunning":      ("SCR-AUTH", "ShopDunning",     "ร้านค้างชำระ — เข้าได้แบบ 'ดูประวัติเดิมอย่างเดียว'", [("← กลับ Login", "login")]),
   "shop_admin_hard":   ("SCR-AUTH", "ShopAdminHard",   "ร้านถูกแอดมินล็อก (hard)", [("← กลับ Login", "login")]),
   "concurrency_full":  ("SCR-AUTH", "ConcurrencyFull", "ผู้ใช้พร้อมกันเต็มโควตา (limit 3)", [("← กลับ Login", "login")]),
   "single_device_kick":("SCR-AUTH", "SingleDeviceKick","สลับเครื่องเดียว — ในสตอรี่มีปุ่ม 'จำลอง: เข้าสู่ระบบจากอีกเครื่อง' เปิด dialog เตะเครื่องเดิม", [("← กลับ Login", "login")]),
   "line_outage":       ("SCR-AUTH", "LineOutage",      "LINE ล่ม — retry", [("← กลับ Login", "login")]),
   "outside_line":      ("SCR-AUTH", "OutsideLine",     "เปิดนอกแอป LINE", [("← กลับ Login", "login")]),
   "oauth_error":       ("SCR-AUTH", "OauthError",      "OAuth ล้มเหลว — retry", [("← กลับ Login", "login")]),
 }},
 {"id": "ocr", "title": "D. OCR ล้มเหลว → กรอกเอง", "emoji": "📷", "start": "cap", "nodes": {
   "cap":         ("SCR-OCR",  "Capture",         "ถ่าย/อัปโหลดบัตรประชาชน", [("ถ่ายภาพ", "loading"), ("สแกนพาสปอร์ต", "cap_pp"), ("กล้องถูกปฏิเสธ", "cam_denied"), ("ไม่มีกล้อง", "no_cam"), ("อัปโหลดล้มเหลว", "upload_err")]),
   "cap_pp":      ("SCR-OCR",  "CapturePassport", "โหมดพาสปอร์ต — ถ่ายหน้าข้อมูล", [("ถ่ายภาพ", "prev_pp")]),
   "prev_pp":     ("SCR-OCR",  "PreviewPassport", "ตรวจภาพพาสปอร์ต", [("ใช้ภาพนี้", "success_pp")]),
   "success_pp":  ("SCR-OCR",  "SuccessPassport", "อ่านพาสปอร์ตสำเร็จ → autofill", [("เข้าฟอร์ม", "form_auto")]),
   "loading":     ("SCR-OCR",  "Loading",         "กำลังอ่านบัตร", [("อ่านสำเร็จ", "success"), ("ความเชื่อมั่นต่ำ", "low_conf"), ("อ่านไม่ได้", "failed")]),
   "success":     ("SCR-OCR",  "Success",         "อ่านได้ ≥0.80 → autofill (ภาพถูกทิ้งทันที)", [("เข้าฟอร์ม", "form_auto")]),
   "low_conf":    ("SCR-OCR",  "LowConfidence",   "ความเชื่อมั่นต่ำ — ให้ตรวจ/แก้ก่อนใช้", [("แก้เอง → ฟอร์ม", "form_manual"), ("ถ่ายใหม่", "cap")]),
   "failed":      ("SCR-OCR",  "OcrFailed",       "อ่านบัตรไม่สำเร็จ", [("กรอกเอง", "form_manual"), ("ลองใหม่", "cap")]),
   "cam_denied":  ("SCR-OCR",  "CameraDenied",    "กล้องถูกปฏิเสธสิทธิ์", [("กรอกเอง", "form_manual"), ("ลองใหม่", "cap")]),
   "no_cam":      ("SCR-OCR",  "NoCamera",        "ไม่มีกล้อง (เช่น เดสก์ท็อป) — กรอกเองเท่านั้น", [("กรอกเอง", "form_manual")]),
   "upload_err":  ("SCR-OCR",  "UploadError",     "อัปโหลดรูปล้มเหลว", [("ลองใหม่", "cap"), ("กรอกเอง", "form_manual")]),
   "form_auto":   ("SCR-FORM", "OcrAutofilled",   "ฟอร์มถูกเติมอัตโนมัติ (สำเร็จ)", []),
   "form_manual": ("SCR-FORM", "Empty",           "fallback: กรอกข้อมูลเองในฟอร์ม", []),
 }},
 {"id": "form", "title": "E. Form — ประเภท + validation", "emoji": "📝", "start": "empty", "nodes": {
   "empty":       ("SCR-FORM", "Empty",           "เลือกประเภทผู้ถูกตรวจ", [("ไทย", "thai"), ("ต่างชาติ", "foreigner"), ("นิติบุคคล", "entity"), ("โควตาเหลือน้อย (เตือน)", "q_low")]),
   "q_low":       ("SCR-FORM", "QuotaLow",        "โควตาเหลือน้อย — แบนเนอร์เตือนบนฟอร์ม (≤20%)", [("← กลับ", "empty")]),
   "thai":        ("SCR-FORM", "Thai",            "บุคคลไทย — เลขบัตร 13 หลัก", [("กรอกบางส่วน", "partial"), ("เปลี่ยนประเภท", "type_change")]),
   "foreigner":   ("SCR-FORM", "Foreigner",       "ต่างชาติ — เลขพาสปอร์ต", [("กรอกบางส่วน", "partial"), ("เปลี่ยนประเภท", "type_change")]),
   "entity":      ("SCR-FORM", "Entity",          "นิติบุคคล — เลขทะเบียน 13 หลัก", [("กรอกบางส่วน", "partial"), ("เปลี่ยนประเภท", "type_change")]),
   "partial":     ("SCR-FORM", "PartiallyFilled", "กรอกบางส่วน", [("checksum เตือน", "checksum"), ("กรอกครบ", "ready")]),
   "checksum":    ("SCR-FORM", "ChecksumWarning", "เลขบัตร checksum ไม่ผ่าน (เตือน ไม่บล็อก)", [("แก้ไข → ครบ", "ready")]),
   "ready":       ("SCR-FORM", "ReadyToSubmit",   "พร้อมส่ง (ติ๊ก PDPA แล้ว)", [("กดทั้งที่ยังไม่ครบ", "validation"), ("ส่งตรวจ", "sent")]),
   "validation":  ("SCR-FORM", "ValidationError", "ฟิลด์ไม่ครบ/ผิด — error ผูกกับฟิลด์ (SC 3.3.1)", [("แก้ไข", "ready")]),
   "type_change": ("SCR-FORM", "TypeChangeConfirm","ยืนยันเปลี่ยนประเภท (ล้างข้อมูลเดิม)", [("ยืนยัน", "empty")]),
   "sent":        ("SCR-PROC", "Loading",         "ส่งตรวจแล้ว → ประมวลผล (ต่อใน Flow 1/2)", []),
 }},
 {"id": "evid", "title": "F. Evidence pack", "emoji": "📄", "start": "res", "nodes": {
   "res":        ("SCR-RES", "NoHit",             "ผลไม่พบ — มีปุ่มดาวน์โหลดหลักฐาน", [("ดาวน์โหลด (กำลังสร้าง)", "loading"), ("ชื่อยาว", "longname"), ("ดูฝั่งผลพบ (ViewFull)", "hit_view")]),
   "loading":    ("SCR-RES", "EvidenceLoading",   "กำลังสร้าง Evidence PDF", [("สำเร็จ", "redownload"), ("สร้างไม่สำเร็จ", "genfail")]),
   "redownload": ("SCR-RES", "EvidenceRedownload","ดาวน์โหลดซ้ำได้ PDF เดิม (frozen) + footer เวลา/ผู้ทำ, watermark, ไม่มี share/copy", []),
   "genfail":    ("SCR-RES", "GenFail",           "สร้าง PDF ล้มเหลว — ลองใหม่ได้ (ไม่กระทบผลตรวจ/โควตา)", [("ลองใหม่", "loading")]),
   "longname":   ("SCR-RES", "EvidenceLongName",  "ชื่อยาวมาก — layout ไม่แตก", [("← กลับ", "res")]),
   "hit_view":   ("SCR-HIT", "ViewFull",          "ผลพบ: ดูรายละเอียดเต็มผ่าน progressive-disclosure Sheet", [("← กลับ", "res")]),
 }},
 {"id": "home", "title": "G. Home — role/offline", "emoji": "🏠", "start": "default", "nodes": {
   "default":  ("SCR-HOME", "Default",         "หน้าหลัก (พนักงาน, ค่าเริ่มต้น) — เลือกดูมุมมอง/สถานะ:", [
       ("มุมมองเจ้าของ", "owner"), ("ครั้งแรก (ยังไม่มีรายการ)", "empty"), ("รายการเยอะ", "many"),
       ("ชื่อยาว", "longnames"), ("กำลังโหลด", "loading"), ("ยืนยันตัวตนผิดพลาด", "identity"),
       ("ออฟไลน์", "offline"), ("ป้าย UAT", "uat"), ("หัวข้อหน้าย่อย", "subheader"), ("โควตาหมด", "qempty")]),
   "qempty":    ("SCR-HOME", "QuotaEmpty",      "โควตาหมด (มุมมองหน้าหลัก)", [("← กลับ", "default")]),
   "owner":     ("SCR-HOME", "OwnerRole",       "มุมมองเจ้าของร้าน (เห็นโควตา/บิล)", [("← กลับ", "default")]),
   "empty":     ("SCR-HOME", "Empty",           "ครั้งแรก — ยังไม่มีประวัติ (Value → Action)", [("← กลับ", "default")]),
   "many":      ("SCR-HOME", "ManyRecords",     "รายการล่าสุดจำนวนมาก", [("← กลับ", "default")]),
   "longnames": ("SCR-HOME", "LongNames",       "ชื่อยาว — ไม่ล้น layout", [("← กลับ", "default")]),
   "loading":   ("SCR-HOME", "Loading",         "กำลังโหลด — skeleton", [("← กลับ", "default")]),
   "identity":  ("SCR-HOME", "IdentityError",   "โหลดตัวตนผิดพลาด — inline retry", [("← กลับ", "default")]),
   "offline":   ("SCR-HOME", "Offline",         "ออฟไลน์", [("← กลับ", "default")]),
   "uat":       ("SCR-HOME", "UatBadge",        "ป้าย UAT (สภาพแวดล้อมทดสอบ)", [("← กลับ", "default")]),
   "subheader": ("SCR-HOME", "SubScreenHeader", "หัวข้อหน้าย่อย (sub-screen header)", [("← กลับ", "default")]),
 }},
 {"id": "hitedge", "title": "H. HIT — รูปแบบผลพบ", "emoji": "🎯", "start": "entry", "nodes": {
   "entry":     ("SCR-HIT", "Default",           "พบ 1 รายการ (single match) — เลือกดูรูปแบบผลลัพธ์:", [
       ("หลายราย (MultiMatch)", "multi"), ("เกินจำนวนแสดง (Overflow)", "overflow"),
       ("Generic cap", "generic"), ("นิติบุคคลจับคู่ 2 ราย (EntityDual)", "entity"),
       ("ชื่อผู้ต้องสงสัยยาว", "longname"), ("รอผลตัดสิน (Pending)", "pending"),
       ("ตัดสิน → ปิดเคส", "closed")]),
   "multi":     ("SCR-HIT", "MultiMatch",        "พบหลายราย — candidate top-5 + คะแนน", [("← กลับ", "entry")]),
   "overflow":  ("SCR-HIT", "Overflow",          "ผลเกินจำนวนที่แสดง (overflow)", [("← กลับ", "entry")]),
   "generic":   ("SCR-HIT", "GenericCap",        "ถึงเพดาน generic (ผลคะแนนต่ำจำนวนมาก)", [("← กลับ", "entry")]),
   "entity":    ("SCR-HIT", "EntityDual",        "นิติบุคคล — จับคู่ 2 ราย", [("← กลับ", "entry")]),
   "longname":  ("SCR-HIT", "LongCandidateName", "ชื่อผู้ต้องสงสัยยาวมาก — layout ไม่แตก", [("← กลับ", "entry")]),
   "pending":   ("SCR-HIT", "Pending",           "รอผลตัดสิน (disposition pending — เคสค้าง)", [("← กลับ", "entry")]),
   "closed":    ("SCR-HIT", "ClosedRecorded",    "ปิดเคสแล้ว — บันทึกในประวัติ", []),
 }},
 {"id": "histstates", "title": "I. History — list/filter states", "emoji": "📋", "start": "entry", "nodes": {
   "entry":     ("SCR-HIST", "Default",           "ประวัติการตรวจ — เลือกดูสถานะรายการ/ตัวกรอง:", [
       ("ครั้งแรก (ว่าง)", "empty"), ("ข้อมูลจำนวนมาก", "large"), ("มีตัวกรองทำงาน", "filters"),
       ("กำลังโหลด", "loading"), ("กรองแล้วว่าง", "filtered_empty"), ("โหลดผิดพลาด", "error"),
       ("มุมมองพนักงาน", "operator"), ("เรียงตามชื่อ", "sort"), ("จัดกลุ่มความเสี่ยง", "risk"),
       ("ออฟไลน์", "offline"), ("สถานะชุดหลักฐาน", "evidence"), ("ข้อมูลชนกัน (stale)", "stale"),
       ("โหลดเพิ่มผิดพลาด", "loadmore")]),
   "empty":          ("SCR-HIST", "Empty",             "ยังไม่มีรายการ (first-use — Value → Action)", [("← กลับ", "entry")]),
   "large":          ("SCR-HIST", "LargeDataset",      "ข้อมูลจำนวนมาก (virtualized/paginate)", [("← กลับ", "entry")]),
   "filters":        ("SCR-HIST", "WithActiveFilters", "มีตัวกรองทำงานอยู่ (chips)", [("← กลับ", "entry")]),
   "loading":        ("SCR-HIST", "Loading",           "กำลังโหลด — skeleton", [("← กลับ", "entry")]),
   "filtered_empty": ("SCR-HIST", "FilteredEmpty",     "กรองแล้วไม่พบผล (cleared-empty — reassure)", [("← กลับ", "entry")]),
   "error":          ("SCR-HIST", "ErrorState",        "โหลดรายการผิดพลาด — inline retry", [("← กลับ", "entry")]),
   "operator":       ("SCR-HIST", "OperatorRole",      "มุมมองพนักงาน (เห็นเฉพาะของตน)", [("← กลับ", "entry")]),
   "sort":           ("SCR-HIST", "SortByName",        "เรียงตามชื่อ", [("← กลับ", "entry")]),
   "risk":           ("SCR-HIST", "RiskGroups",        "จัดกลุ่มตามความเสี่ยง", [("← กลับ", "entry")]),
   "offline":        ("SCR-HIST", "Offline",           "ออฟไลน์ — แสดงแคช", [("← กลับ", "entry")]),
   "evidence":       ("SCR-HIST", "EvidencePackStates","สถานะชุดหลักฐานต่อรายการ (พร้อม/กำลังสร้าง/ล้มเหลว)", [("← กลับ", "entry")]),
   "stale":          ("SCR-HIST", "StaleConflict",     "ข้อมูลชนกัน (มีคนอื่นแก้ — stale) ต้องรีเฟรช", [("← กลับ", "entry")]),
   "loadmore":       ("SCR-HIST", "LoadMoreError",     "โหลดหน้าถัดไปผิดพลาด — retry", [("← กลับ", "entry")]),
 }},
 {"id": "role", "title": "Role: พนักงาน vs เจ้าของ", "emoji": "👥", "start": "home_op", "nodes": {
   "home_op":  ("SCR-HOME",  "Default",         "🏠 HOME · 👤 พนักงาน — 'ตรวจล่าสุด' เฉพาะของตัวเอง, ซ่อนชื่อผู้ตรวจ", [("เทียบมุมเจ้าของ →", "home_ow")]),
   "home_ow":  ("SCR-HOME",  "OwnerRole",       "🏠 HOME · 👑 เจ้าของ — 'ล่าสุด (ทั้งร้าน)' + โชว์ 'โดย <ผู้ตรวจ>'", [("จอถัดไป: ประวัติ", "hist_op")]),
   "hist_op":  ("SCR-HIST",  "OperatorRole",    "🗂️ HIST · 👤 พนักงาน — ซ่อนตัวกรอง 'ผู้ตรวจ' + ไม่มีปุ่ม reopen", [("เทียบมุมเจ้าของ →", "hist_ow")]),
   "hist_ow":  ("SCR-HIST",  "Default",         "🗂️ HIST · 👑 เจ้าของ — มีตัวกรองผู้ตรวจ + reopen เคส 'พบ' ได้", [("จอถัดไป: โควตา", "quota_op")]),
   "quota_op": ("SCR-QUOTA", "EmptyOperator",   "🚫 QUOTA · 👤 พนักงาน — ไม่เห็นตัวเลขเงิน, ปุ่มเดียว 'แจ้งเจ้าของ'", [("เทียบมุมเจ้าของ →", "quota_ow")]),
   "quota_ow": ("SCR-QUOTA", "EmptyOwner",      "🚫 QUOTA · 👑 เจ้าของ — มิเตอร์ + 'เติมสิทธิ์/อัปเกรด' เองได้", [("จอถัดไป: เข้าสู่ระบบ", "auth_op")]),
   "auth_op":  ("SCR-AUTH",  "UnboundOperator", "🔒 AUTH · 👤 พนักงาน — ยังไม่ผูกบัญชี (มุมพนักงาน)", [("เทียบมุมเจ้าของ →", "auth_ow")]),
   "auth_ow":  ("SCR-AUTH",  "UnboundOwner",    "🔒 AUTH · 👑 เจ้าของ — ยังไม่ผูกบัญชี (มุมเจ้าของ)", []),
 }},
]

# resolve story ids + build json for the browser engine
flows_json = []
for f in FLOWS:
    nodes = {}
    for nid, (code, export, cap, actions) in f["nodes"].items():
        nodes[nid] = {"code": code, "sid": story_id(code, export), "export": export,
                      "cap": cap, "actions": [{"label": l, "to": t} for l, t in actions]}
    flows_json.append({"id": f["id"], "title": f["title"], "emoji": f["emoji"],
                       "start": f["start"], "nodes": nodes, "embedBase": SB_REL})

# ---------------------------------------------------------------- README.md
md = []
md.append("# ROONA — Full-System Flow Overview\n")
md.append("> เอกสารอ้างอิงภาพรวม flow ทั้งระบบ (Screening LIFF) ประกอบจากทุกหน้าจอ + ทุก state ใน Storybook.\n"
          "> สร้างอัตโนมัติจาก `packages/ui/storybook-static/index.json` — อย่าแก้ด้วยมือ (ดู §การอัปเดต).\n")
md.append(f"- **หน้าจอ:** {len(scr)} หน้า · **states:** {total_states} · **+ catalog:** {catalog_total} → **รวม {grand_total} stories** (ทั้ง Storybook)\n"
          "- **Owner:** UX/UI + FE · **Phase:** 4-implementation · **Source:** `design/EXPERIENCE.md §8`\n")
md.append("\n**ไฟล์ในชุดนี้:**\n"
          "- [`prototype.html`](./prototype.html) — 🎬 **prototype คลิกได้** (กรอบมือถือ LIFF, เดินทีละ flow)\n"
          "- [`gallery.html`](./gallery.html) — 🖼️ gallery ดูทุกหน้า/ทุก state พร้อมพรีวิว\n"
          "- `README.md` (ไฟล์นี้) — flow map + ตาราง state (อ่านได้บน GitLab ทันที)\n")

md.append("\n## 1. Flow map ทั้งระบบ\n")
md.append("ที่มา: `design/EXPERIENCE.md §8 Key Flows` (UJ-1/2/3). ลูกศร = เส้นทางหลัก; QUOTA เป็น fail-closed gate.\n")
md.append("""```mermaid
flowchart TD
    AUTH["SCR-AUTH<br/>เข้าสู่ระบบ"] --> HOME["SCR-HOME<br/>หน้าหลัก"]
    HOME --> FORM["SCR-FORM<br/>แบบฟอร์มตรวจ"]
    FORM -.->|ถ่ายบัตร| OCR["SCR-OCR<br/>สแกนบัตร"]
    OCR -.->|autofill| FORM
    FORM -->|ติ๊กยินยอม PDPA| PDPA["SCR-PDPA<br/>ความยินยอม"]
    PDPA --> PROC["SCR-PROC<br/>กำลังประมวลผล"]
    PROC -->|ไม่พบ| RES["SCR-RES<br/>ผลไม่พบ"]
    PROC -->|พบ| HIT["SCR-HIT<br/>ผลพบ + ตัดสิน"]
    HIT ==>|ปิดเคส| CLOSE(["บันทึก + แจ้งเจ้าของ"])
    RES --> HOME
    CLOSE --> HOME
    HOME --> HIST["SCR-HIST<br/>ประวัติการตรวจ"]
    HIST -.->|เปิดดู| RES
    HIST -.->|เปิดดู| HIT
    QUOTA["SCR-QUOTA<br/>โควตา/หมดสิทธิ์"] -. "fail-closed gate" .-> FORM
    HIT -. "disposition-blocking: บล็อกนำทางจนปิดเคส" .- HIT
```
""")
md.append("**กฎ flow สำคัญ** (EXPERIENCE.md): ไม่มี bottom tab bar · หลังผล \"พบ\" บล็อกการนำทางจนกว่าจะปิดเคส · "
          "โควตา fail-closed, timeout ระหว่างประมวลผลไม่หักโควตา · session timeout ต่าง role กัน.\n")

md.append("\n## 2. Interactive prototype — flows ที่เดินได้\n")
md.append("เปิด [`prototype.html`](./prototype.html) เพื่อคลิกเดินแต่ละ flow ในกรอบมือถือ:\n")
for f in FLOWS:
    md.append(f"- **{f['emoji']} {f['title']}** ({len(f['nodes'])} จุด)\n")

md.append("\n## 3. หน้าจอ + ทุก state\n")
md.append("แต่ละ state ลิงก์เข้า Storybook (ต้อง build ก่อน — ดู §การเปิดใช้). `SCR-PWD` = N/A (placeholder).\n")
for s in scr:
    md.append(f"\n### {s['code']} — {s['thai']}  ·  {len(s['states'])} states")
    if s["purpose"]:
        md.append(f"\n{s['purpose']}\n")
    md.append("\n| # | State | Storybook |")
    md.append("\n|---|-------|-----------|")
    for i, st in enumerate(s["states"], 1):
        md.append(f"\n| {i} | {st['name']} | [`{st['id']}`]({sb_full(st['id'])}) |")
    md.append("\n")

md.append("\n## 4. การเปิดใช้ (prerequisite)\n")
md.append("Storybook build (`storybook-static/`) ถูก **gitignore** — ต้อง build เองก่อนหนึ่งครั้ง แล้ว prototype/gallery จะทำงาน:\n")
md.append("```bash\npnpm --filter @roona/ui build-storybook\n# เปิดผ่าน server (แนะนำ ให้ iframe โหลด Storybook ได้):\npython3 -m http.server 8777   # แล้วเปิด http://localhost:8777/docs/acceptance/ui-overview/prototype.html\n```\n")
md.append("- **README นี้** อ่านได้ทันทีบน GitLab ไม่ต้อง build\n")
md.append("- **prototype.html / gallery.html** = ชั้น interactive — ต้อง build ก่อน (เปิดผ่าน http เพื่อเลี่ยง CORS ของ file://)\n")

md.append("\n## 5. การอัปเดต\n")
md.append("generate จาก Storybook index — เมื่อ story เปลี่ยน rerun แทนแก้มือ:\n")
md.append("```bash\npnpm --filter @roona/ui build-storybook && python3 docs/acceptance/ui-overview/gen.py\n```\n")
md.append("_generator: `docs/acceptance/ui-overview/gen.py` (portable). flow spec / SCR map อยู่ในตัว script (dict `SCR`, list `FLOWS`)._\n")

md.append("\n## 6. หมายเหตุ visual (ADR-0012)\n")
md.append("- หน้า **post-login** = type + Lucide เท่านั้น ไม่มี gradient/wash/soft-3D\n")
md.append("- **SCR-AUTH (pre-login)** = ข้อยกเว้น hybrid visual (auth wash + ShieldMark) ตาม `docs/adr/ADR-0012-scr-auth-hybrid-visual-language.md`\n")

md.append("\n## 7. Components & building blocks (Storybook catalog)\n")
md.append(f"prototype/flow ครอบ Screens/ ({len(scr)} จอ / {total_states} states) 100%. ส่วนต่อไปนี้เป็น"
          f" **ชิ้นส่วนที่ประกอบอยู่ในจอ** ({catalog_total} states) — ดูแบบคลิกได้ใน [`gallery.html`](./gallery.html):\n")
for name, tag, desc, grp in catalog:
    tot = sum(len(g["states"]) for g in grp)
    md.append(f"\n**{name}** — {len(grp)} รายการ / {tot} states · {desc}\n")
    for g in grp:
        md.append(f"- {g['label']} ({len(g['states'])})\n")

md.append("\n## 8. Role — พนักงาน (operator) vs เจ้าของ (owner)\n")
md.append("ไม่มีชุดหน้าจอแยกต่อ role — ใช้จอเดียวกันแต่ต่างที่ **state** ใน 4 จอนี้ (ที่เหลือ role-agnostic). "
          "แหล่งกฎ: `design/EXPERIENCE.md §11 RBAC` (merchant portal = owner-only; operator ไม่เข้า portal).\n")
md.append("\n| จอ | 👤 พนักงาน (operator) | 👑 เจ้าของ (owner) |")
md.append("\n|----|----------------------|--------------------|")
for code, op, ow in ROLE_MATRIX:
    md.append(f"\n| {code} | {op} | {ow} |")
md.append("\n\n_ป้าย 🔵 พนักงาน / 🟡 เจ้าของ กำกับ state เหล่านี้ใน `gallery.html` และมีโน้ต role ใน `prototype.html`._\n")

open(os.path.join(OUT, "README.md"), "w").write("".join(md))

# ---------------------------------------------------------------- gallery.html
def esc(x): return html.escape(str(x))

def _chips(states):
    out = []
    for st in states:
        r = role_by_id.get(st["id"])
        badge = f'<span class="rb {r}">{ROLE_LABEL_TH[r]}</span>' if r else ""
        out.append(f'<a class="chip" target="sbframe" href="{esc(sb_embed(st["id"]))}" '
                   f'data-full="{esc(sb_full(st["id"]))}">{esc(st["name"])}{badge}</a>')
    return "".join(out)

def _card(code, label, purpose, states):
    p = f'<p class="purpose">{esc(purpose)}</p>' if purpose else ""
    return (f'    <section class="card"><header><span class="code">{esc(code)}</span>'
            f'<h2>{esc(label)}</h2><span class="count">{len(states)} states</span></header>'
            f'{p}<div class="chips">{_chips(states)}</div></section>')

parts = [f'<h3 class="section">หน้าจอ · Screens ({len(scr)})</h3>']
for s in scr:
    parts.append(_card(s["code"], s["thai"], s["purpose"], s["states"]))
for name, tag, desc, grp in catalog:
    total = sum(len(g["states"]) for g in grp)
    parts.append(f'<h3 class="section">{esc(name)} ({len(grp)} · {total} states)</h3>')
    for g in grp:
        parts.append(_card(tag, g["label"], "", g["states"]))
list_html = "\n".join(parts)
flow_order = " → ".join(s["code"] for s in scr if s["code"] != "SCR-PWD")

gallery = f'''<!doctype html>
<html lang="th"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>ROONA — Flow Overview Gallery</title>
<style>
  :root {{ --fg:#111; --muted:#666; --line:#e5e7eb; --accent:#10b981; --bg:#fff; --chip:#f3f4f6; }}
  * {{ box-sizing:border-box; }}
  body {{ margin:0; font-family:"IBM Plex Sans Thai","IBM Plex Sans",-apple-system,system-ui,sans-serif; color:var(--fg); background:var(--bg); }}
  header.top {{ padding:20px 24px; border-bottom:1px solid var(--line); }}
  header.top h1 {{ margin:0 0 4px; font-size:20px; }}
  header.top p {{ margin:0; color:var(--muted); font-size:13px; }}
  header.top a {{ color:var(--accent); }}
  .flowline {{ padding:12px 24px; font-size:13px; color:var(--muted); border-bottom:1px solid var(--line); overflow-x:auto; white-space:nowrap; }}
  .flowline b {{ color:var(--accent); }}
  .layout {{ display:grid; grid-template-columns:minmax(320px,1fr) minmax(360px,540px); height:calc(100vh - 140px); }}
  .list {{ overflow-y:auto; padding:16px 24px; border-right:1px solid var(--line); }}
  .list h3.section {{ position:sticky; top:0; background:#fff; z-index:1; margin:20px 0 4px; padding:6px 0; font-size:11px; letter-spacing:.06em; text-transform:uppercase; color:var(--muted); border-bottom:1px solid var(--line); }}
  .list h3.section:first-child {{ margin-top:0; }}
  .card {{ padding:14px 0; border-bottom:1px solid var(--line); }}
  .card header {{ display:flex; align-items:baseline; gap:8px; }}
  .card .code {{ font-size:11px; font-weight:700; letter-spacing:.04em; color:var(--accent); }}
  .card h2 {{ margin:0; font-size:15px; font-weight:600; }}
  .card .count {{ margin-left:auto; font-size:11px; color:var(--muted); }}
  .card .purpose {{ margin:4px 0 8px; font-size:12px; color:var(--muted); line-height:1.5; }}
  .chips {{ display:flex; flex-wrap:wrap; gap:6px; }}
  .chip {{ font-size:12px; padding:3px 9px; border-radius:9999px; background:var(--chip); color:var(--fg); text-decoration:none; border:1px solid transparent; cursor:pointer; }}
  .chip:hover {{ border-color:var(--accent); }} .chip.active {{ background:var(--accent); color:#fff; }}
  .chip .rb {{ margin-left:5px; font-size:9px; padding:1px 5px; border-radius:6px; vertical-align:middle; }}
  .chip .rb.operator {{ background:#e0f2fe; color:#075985; }}
  .chip .rb.owner {{ background:#fef3c7; color:#92400e; }}
  .preview {{ display:flex; flex-direction:column; }}
  .preview .bar {{ padding:8px 12px; font-size:12px; color:var(--muted); border-bottom:1px solid var(--line); display:flex; gap:12px; align-items:center; }}
  .preview .bar a {{ color:var(--accent); }}
  iframe {{ flex:1; width:100%; border:0; background:#fafafa; }}
  .empty {{ padding:40px; color:var(--muted); font-size:13px; text-align:center; }}
  @media (max-width:820px) {{ .layout {{ grid-template-columns:1fr; height:auto; }} .list {{ border-right:0; }} iframe {{ min-height:520px; }} }}
</style></head>
<body>
<header class="top">
  <h1>ROONA — Full-System Flow Overview</h1>
  <p>{len(scr)} หน้าจอ / {total_states} states + catalog {catalog_total} = {grand_total} stories · <a href="./prototype.html">🎬 เปิด prototype คลิกได้ →</a></p>
</header>
<div class="flowline">Flow หลัก: <b>{esc(flow_order)}</b> &nbsp;·&nbsp; QUOTA = fail-closed gate &nbsp;·&nbsp; หลัง "พบ" บล็อกนำทางจนปิดเคส</div>
<div class="layout">
  <div class="list">
{list_html}
  </div>
  <div class="preview">
    <div class="bar"><span id="label">เลือก state จากซ้ายเพื่อพรีวิว</span>
      <a id="openfull" href="#" target="_blank" style="margin-left:auto; display:none;">เปิดใน Storybook เต็ม ↗</a></div>
    <iframe name="sbframe" title="Storybook preview"></iframe>
    <div class="empty" id="hint">หากพรีวิวว่าง ให้รัน <code>pnpm --filter @roona/ui build-storybook</code> และเปิดผ่าน http server</div>
  </div>
</div>
<script>
  const chips=[...document.querySelectorAll('.chip')], label=document.getElementById('label'),
        full=document.getElementById('openfull'), hint=document.getElementById('hint');
  chips.forEach(c=>c.addEventListener('click',()=>{{
    chips.forEach(x=>x.classList.remove('active')); c.classList.add('active');
    const card=c.closest('.card');
    label.textContent=card.querySelector('.code').textContent+' · '+c.textContent;
    full.href=c.dataset.full; full.style.display='inline'; hint.style.display='none';
  }}));
</script>
</body></html>'''
open(os.path.join(OUT, "gallery.html"), "w").write(gallery)

# ---------------------------------------------------------------- prototype.html
proto = '''<!doctype html>
<html lang="th"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>ROONA — Clickable Prototype</title>
<style>
  :root { --fg:#111; --muted:#666; --line:#e5e7eb; --accent:#10b981; --bg:#f6f7f8; --panel:#fff; }
  * { box-sizing:border-box; }
  body { margin:0; font-family:"IBM Plex Sans Thai","IBM Plex Sans",-apple-system,system-ui,sans-serif; color:var(--fg); background:var(--bg); }
  header.top { padding:14px 20px; background:var(--panel); border-bottom:1px solid var(--line); }
  header.top h1 { margin:0 0 8px; font-size:17px; }
  header.top h1 a { font-size:12px; font-weight:400; color:var(--accent); margin-left:8px; }
  .flows { display:flex; flex-wrap:wrap; gap:8px; }
  .flowtab { font-size:13px; padding:6px 12px; border-radius:9999px; border:1px solid var(--line); background:#fff; cursor:pointer; }
  .flowtab.active { background:var(--accent); color:#fff; border-color:var(--accent); }
  .rolebar { display:flex; flex-wrap:wrap; gap:8px; align-items:center; margin-top:10px; font-size:12px; color:var(--muted); }
  .rolebtn { font:inherit; font-size:12px; padding:4px 10px; border-radius:8px; border:1px solid var(--line); background:#fff; cursor:pointer; }
  .rolebtn.active { background:#111827; color:#fff; border-color:#111827; }
  .rb { font-size:10px; padding:1px 6px; border-radius:6px; }
  .rb.operator { background:#e0f2fe; color:#075985; } .rb.owner { background:#fef3c7; color:#92400e; }
  .legend { display:flex; gap:6px; align-items:center; }
  .rolesum { margin-left:auto; }
  .rolesum summary { cursor:pointer; color:var(--accent); }
  .rolesum table { border-collapse:collapse; margin-top:8px; font-size:12px; }
  .rolesum td, .rolesum th { border:1px solid var(--line); padding:6px 10px; text-align:left; vertical-align:top; }
  .rolesum th { background:#f9fafb; }
  .toolbar { display:flex; gap:6px; align-items:center; padding:8px 24px 0; font-size:12px; color:var(--muted); }
  .zoombtn { font:inherit; font-size:12px; padding:4px 10px; border-radius:8px; border:1px solid var(--line); background:#fff; cursor:pointer; }
  .zoombtn.active { background:var(--accent); color:#fff; border-color:var(--accent); }
  .stage { display:grid; grid-template-columns:auto minmax(280px,380px); gap:28px; justify-content:center; padding:10px 24px 24px; align-items:start; }
  .devicewrap { overflow:hidden; }
  /* flat 2D mobile: thin dark outline, phone-rounded corners, top notch, no shadow */
  .device { position:relative; width:394px; background:#fff; border:2px solid #111827; border-radius:34px; overflow:hidden; transform:translateZ(0); transform-origin:top left; }
  .device .notch { position:absolute; top:0; left:50%; transform:translateX(-50%); width:120px; height:18px; background:#111827; border-radius:0 0 12px 12px; z-index:2; }
  .device .screen { width:390px; height:844px; overflow:hidden; border-radius:31px; }
  .device iframe { width:390px; height:844px; border:0; display:block; border-radius:31px; background:#fff; }
  .panel { background:var(--panel); border:1px solid var(--line); border-radius:14px; padding:18px; }
  .panel .code { font-size:11px; font-weight:700; letter-spacing:.04em; color:var(--accent); }
  .panel h2 { margin:2px 0 2px; font-size:16px; }
  .panel .state { font-size:12px; color:var(--muted); margin-bottom:10px; }
  .panel .rolebadge { font-size:10px; padding:1px 6px; border-radius:6px; margin-left:6px; }
  .panel .rolebadge.role-op { background:#e0f2fe; color:#075985; }
  .panel .rolebadge.role-ow { background:#fef3c7; color:#92400e; }
  .panel .cap { font-size:14px; line-height:1.6; margin:0 0 16px; }
  .actions { display:flex; flex-direction:column; gap:8px; }
  .actions button { text-align:left; font:inherit; font-size:14px; padding:11px 14px; border-radius:10px; border:1px solid var(--accent); background:var(--accent); color:#fff; cursor:pointer; }
  .actions button.back { background:#fff; color:var(--fg); border-color:var(--line); }
  .actions button:hover { filter:brightness(.96); }
  .end { font-size:13px; color:var(--muted); padding:10px 0; }
  .nav { display:flex; gap:10px; align-items:center; margin-top:16px; padding-top:14px; border-top:1px solid var(--line); font-size:12px; color:var(--muted); }
  .nav button { font:inherit; font-size:12px; padding:5px 10px; border-radius:8px; border:1px solid var(--line); background:#fff; cursor:pointer; }
  .crumbs { margin-top:10px; font-size:11px; color:var(--muted); word-break:break-all; }
  .hint { max-width:760px; margin:0 auto 4px; padding:0 24px; font-size:12px; color:var(--muted); }
  @media (max-width:820px){ .stage{ grid-template-columns:1fr; } .device{ margin:0 auto; } }
</style></head>
<body>
<header class="top">
  <h1>ROONA — Clickable Prototype <a href="./gallery.html">🖼️ gallery</a> <a href="./README.md">📄 README</a></h1>
  <div class="flows" id="flows"></div>
  <div class="rolebar">
    <span>มุมมอง role:</span>
    <button class="rolebtn active" data-r="all">ทั้งหมด</button>
    <button class="rolebtn" data-r="operator">👤 พนักงาน</button>
    <button class="rolebtn" data-r="owner">👑 เจ้าของ</button>
    <span class="legend"><span class="rb operator">พนักงาน</span><span class="rb owner">เจ้าของ</span>= state ที่ต่างตาม role</span>
    <details class="rolesum"><summary>สรุปความต่าง role (4 จอ)</summary>
      <table><tr><th>จอ</th><th>👤 พนักงาน</th><th>👑 เจ้าของ</th></tr>__ROLE_MATRIX_ROWS__</table>
    </details>
  </div>
</header>
<p class="hint">คลิกปุ่มใต้จอเพื่อเดิน flow · ถ้าจอว่าง: รัน <code>pnpm --filter @roona/ui build-storybook</code> แล้วเปิดหน้านี้ผ่าน <code>http.server</code> (ไม่ใช่ file://)</p>
<div class="toolbar"><span>ซูมจอ:</span>
  <button class="zoombtn" data-z="fit">พอดีจอ</button>
  <button class="zoombtn" data-z="1">100%</button>
  <button class="zoombtn" data-z="0.75">75%</button>
  <button class="zoombtn" data-z="0.5">50%</button>
</div>
<div class="stage">
  <div class="devicewrap"><div class="device" id="device"><div class="notch"></div><div class="screen"><iframe id="sb" title="screen"></iframe></div></div></div>
  <div class="panel">
    <div class="code" id="p-code"></div>
    <h2 id="p-title"></h2>
    <div class="state" id="p-state"></div>
    <p class="cap" id="p-cap"></p>
    <div class="actions" id="p-actions"></div>
    <div class="nav"><button id="back">← ย้อนกลับ</button><button id="restart">↺ เริ่ม flow ใหม่</button><span id="p-step"></span></div>
    <div class="crumbs" id="p-crumbs"></div>
  </div>
</div>
<script>
const FLOWS = __FLOWS_JSON__;
const CODE_TITLE = __CODE_TITLE__;
const ROLE_BY_ID = __ROLE_JSON__;
const ROLE_PAIRS = __ROLE_PAIRS_JSON__;
const SID_LABEL = __SID_LABEL_JSON__;
let flow, node, hist=[], roleView="all";
const $=id=>document.getElementById(id);

function embedUrl(f, sid){ return f.embedBase + "/iframe.html?id=" + encodeURIComponent(sid) + "&viewMode=story"; }

function renderTabs(){
  $("flows").innerHTML="";
  FLOWS.forEach(f=>{
    const b=document.createElement("button");
    b.className="flowtab"+(f.id===flow.id?" active":"");
    b.textContent=f.emoji+" "+f.title;
    b.onclick=()=>selectFlow(f.id);
    $("flows").appendChild(b);
  });
}
function selectFlow(id){ flow=FLOWS.find(f=>f.id===id); hist=[]; node=null; go(flow.start,false); renderTabs(); }
function go(nid, push){
  if(push!==false && node) hist.push(node);
  node=nid;
  const n=flow.nodes[nid];
  let sid=n.sid, exportName=n.export;
  if(roleView!=="all" && ROLE_PAIRS[sid] && ROLE_PAIRS[sid][roleView]){ sid=ROLE_PAIRS[sid][roleView]; exportName=SID_LABEL[sid]||exportName; }
  $("sb").src=embedUrl(flow,sid);
  $("p-code").textContent=n.code;
  $("p-title").textContent=CODE_TITLE[n.code]||"";
  const _r=ROLE_BY_ID[sid];
  $("p-state").innerHTML="state: "+exportName+(_r?' <span class="rolebadge role-'+(_r==="พนักงาน"?"op":"ow")+'">'+_r+'</span>':'');
  $("p-cap").textContent=n.cap;
  const box=$("p-actions"); box.innerHTML="";
  if(n.actions.length===0){ const e=document.createElement("div"); e.className="end"; e.textContent="— ปลายทางของ flow นี้ —"; box.appendChild(e); }
  n.actions.forEach(a=>{
    const b=document.createElement("button");
    if(a.label.indexOf("←")===0) b.className="back";
    b.textContent=a.label; b.onclick=()=>go(a.to,true); box.appendChild(b);
  });
  $("p-step").textContent="ขั้นที่ "+(hist.length+1);
  $("p-crumbs").textContent=[...hist,node].map(x=>flow.nodes[x].code).join("  →  ");
}
$("back").onclick=()=>{ if(hist.length){ go(hist.pop(),false);} };
$("restart").onclick=()=>selectFlow(flow.id);
document.querySelectorAll(".rolebtn").forEach(b=>b.onclick=()=>{
  roleView=b.dataset.r;
  document.querySelectorAll(".rolebtn").forEach(x=>x.classList.toggle("active", x.dataset.r===roleView));
  go(node,false);
});

let zoom="fit";
function applyZoom(){
  const natW=394, natH=848, dev=$("device"), wrap=dev.parentElement;
  let s;
  if(zoom==="fit"){
    const top=wrap.getBoundingClientRect().top;
    const availH=window.innerHeight-top-24;
    const availW=wrap.parentElement.clientWidth-410; // reserve panel + gap
    s=availH/natH;
    if(availW>140 && s*natW>availW) s=availW/natW;
    s=Math.max(0.35, Math.min(1, s));
  } else s=parseFloat(zoom);
  dev.style.transform="scale("+s+")";
  wrap.style.width=(natW*s)+"px"; wrap.style.height=(natH*s)+"px";
  document.querySelectorAll(".zoombtn").forEach(b=>b.classList.toggle("active", b.dataset.z===zoom));
}
document.querySelectorAll(".zoombtn").forEach(b=>b.onclick=()=>{ zoom=b.dataset.z; applyZoom(); });
window.addEventListener("resize", ()=>{ if(zoom==="fit") applyZoom(); });

// hide the inner Storybook scrollbar when same-origin (served over http); no-op on file://
$("sb").addEventListener("load", ()=>{
  try {
    const doc=$("sb").contentDocument;
    if(doc && !doc.getElementById("__pp_noscroll")){
      const st=doc.createElement("style");
      st.id="__pp_noscroll";
      st.textContent="html{scrollbar-width:none} ::-webkit-scrollbar{width:0;height:0;display:none}";
      (doc.head||doc.documentElement).appendChild(st);
    }
  } catch(e){}
});

selectFlow(FLOWS[0].id);
applyZoom();
</script>
</body></html>'''
proto = proto.replace("__FLOWS_JSON__", json.dumps(flows_json, ensure_ascii=False))
proto = proto.replace("__CODE_TITLE__", json.dumps(CODE2THAI, ensure_ascii=False))
proto = proto.replace("__ROLE_JSON__", json.dumps(role_by_id_th, ensure_ascii=False))
proto = proto.replace("__ROLE_PAIRS_JSON__", json.dumps(role_pairs, ensure_ascii=False))
proto = proto.replace("__SID_LABEL_JSON__", json.dumps(sid_label, ensure_ascii=False))
proto = proto.replace("__ROLE_MATRIX_ROWS__",
    "".join(f"<tr><td>{esc(c)}</td><td>{esc(op)}</td><td>{esc(ow)}</td></tr>" for c, op, ow in ROLE_MATRIX))
open(os.path.join(OUT, "prototype.html"), "w").write(proto)

print("wrote README.md, gallery.html, prototype.html")
print("screens:", len(scr), "| states:", total_states, "| flows:", len(FLOWS),
      "| flow nodes:", sum(len(f["nodes"]) for f in FLOWS))
