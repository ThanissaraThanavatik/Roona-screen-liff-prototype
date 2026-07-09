# Roona-screen-liff-prototype

ภาพรวม flow ทั้งระบบของ **ROONA Screening LIFF** — prototype คลิกได้
ประกอบจากทุกหน้าจอ + ทุก state ใน Storybook (11 หน้า · 103 states)

## ไฟล์ในชุดนี้

| ไฟล์ | คำอธิบาย |
|------|----------|
| [`index.html`](./index.html) | หน้า landing — ลิงก์เข้า prototype |
| [`ui-overview/prototype.html`](./ui-overview/prototype.html) | 🎬 **prototype คลิกได้** — กรอบมือถือ LIFF เดินทีละ flow, สลับมุมมอง role (พนักงาน/เจ้าของ) |
| [`ui-overview/README.md`](./ui-overview/README.md) | flow map (mermaid) + ตาราง state ทั้งหมด (อ่านได้บน GitHub ทันที) |
| `ui-overview/gen.py` | generator — สร้าง prototype จาก Storybook index |
| `storybook-static/` | Storybook build ที่ prototype ใช้โหลดจอมือถือ (bundle มาแล้ว) |

## วิธีเปิดใช้งาน

Storybook build รวมอยู่ใน repo แล้ว (`storybook-static/`) — เปิดได้ทันทีไม่ต้อง build เอง
แค่เปิดผ่าน http server (ไม่ใช่ `file://` — เลี่ยง CORS ของ iframe):

```bash
python3 -m http.server 8777
# แล้วเปิด: http://localhost:8777/  (หรือ /ui-overview/prototype.html)
```

Deploy บน Vercel เข้า URL หลักได้เลย

## การอัปเดต

เมื่อ story เปลี่ยน ให้ rerun generator แทนแก้ HTML ด้วยมือ แล้ว copy build ใหม่เข้า `storybook-static/`:

```bash
pnpm --filter @roona/ui build-storybook && python3 ui-overview/gen.py
```

ดูรายละเอียด flow map, ตาราง state ทั้ง 103 states และหมายเหตุ role/visual ได้ที่ [`ui-overview/README.md`](./ui-overview/README.md)
