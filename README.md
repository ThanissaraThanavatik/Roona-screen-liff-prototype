# Roona-screen-liff-prototype

ภาพรวม flow ทั้งระบบของ **ROONA Screening LIFF** — prototype คลิกได้ + gallery ดูทุกหน้า/ทุก state
ประกอบจากทุกหน้าจอ + ทุก state ใน Storybook (11 หน้า · 103 states)

## ไฟล์ในชุดนี้ (`ui-overview/`)

| ไฟล์ | คำอธิบาย |
|------|----------|
| [`prototype.html`](./ui-overview/prototype.html) | 🎬 **prototype คลิกได้** — กรอบมือถือ LIFF เดินทีละ flow, สลับมุมมอง role (พนักงาน/เจ้าของ) |
| [`gallery.html`](./ui-overview/gallery.html) | 🖼️ **gallery** — ดูทุกหน้า/ทุก state พร้อมพรีวิว |
| [`README.md`](./ui-overview/README.md) | flow map (mermaid) + ตาราง state ทั้งหมด (อ่านได้บน GitHub ทันที) |
| `gen.py` | generator — สร้าง prototype/gallery จาก Storybook index |

## วิธีเปิดใช้งาน

> ⚠️ **สำคัญ:** prototype/gallery โหลดจอมือถือผ่าน iframe จาก Storybook build (`packages/ui/storybook-static/`)
> ซึ่ง **ไม่รวม** อยู่ใน repo นี้ (ถูก gitignore) — ต้อง build เองก่อน ไม่งั้นจอมือถือจะว่างเปล่า

```bash
# 1) build Storybook ก่อน (ครั้งเดียว)
pnpm --filter @roona/ui build-storybook

# 2) เปิดผ่าน http server (ไม่ใช่ file:// — เลี่ยง CORS ของ iframe)
python3 -m http.server 8777
# แล้วเปิด: http://localhost:8777/ui-overview/prototype.html
```

- **README** (ทั้ง root และ `ui-overview/`) อ่านได้ทันทีบน GitHub ไม่ต้อง build
- **prototype.html / gallery.html** = ชั้น interactive — ต้อง build Storybook + เปิดผ่าน http ก่อน

## การอัปเดต

เมื่อ story เปลี่ยน ให้ rerun generator แทนแก้ HTML ด้วยมือ:

```bash
pnpm --filter @roona/ui build-storybook && python3 ui-overview/gen.py
```

ดูรายละเอียด flow map, ตาราง state ทั้ง 103 states และหมายเหตุ role/visual ได้ที่ [`ui-overview/README.md`](./ui-overview/README.md)
