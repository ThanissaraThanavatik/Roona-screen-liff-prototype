import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./index-DURGLf5P.js";import{S as a}from"./sheet-4EsOYAOn.js";import{B as t}from"./button-Cj4DMzd2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./x-BRWzi90o.js";import"./createLucideIcon-q2xymCcu.js";import"./index-EXTQMK5R.js";const z={title:"Components/Sheet",component:a,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Bottom sheet สำหรับ LIFF mobile. ใช้ยืนยันก่อนทำสิ่งที่ลบข้อมูล (สลับประเภทฟอร์ม) และ prompt เตะอุปกรณ์เดียว. ควบคุมด้วย open/onOpenChange; Escape + คลิกฉากหลังปิดได้; title เป็นชื่อที่ screen reader อ่าน."}}}},o={render:()=>{const[s,n]=C.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!0),children:"สลับประเภทการตรวจ"}),e.jsx(a,{open:s,onOpenChange:n,title:"สลับประเภท จะล้างข้อมูล",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"destructive",size:"block",onClick:()=>n(!1),children:"ยืนยัน สลับและล้างข้อมูล"}),e.jsx(t,{variant:"ghost",size:"block",onClick:()=>n(!1),children:"ยกเลิก"})]}),children:"การเปลี่ยนประเภทการตรวจจะล้างชื่อที่กรอกไว้ทั้งหมด ต้องการดำเนินการต่อหรือไม่?"})]})}},r={render:()=>{const[s,n]=C.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!0),children:"เข้าสู่ระบบ"}),e.jsx(a,{open:s,onOpenChange:n,title:"เข้าสู่ระบบที่นี่แทน?",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"block",onClick:()=>n(!1),children:"เข้าสู่ระบบที่นี่"}),e.jsx(t,{variant:"ghost",size:"block",onClick:()=>n(!1),children:"ยกเลิก"})]}),children:"บัญชีนี้กำลังใช้งานอยู่บนอีกอุปกรณ์หนึ่ง หากเข้าสู่ระบบที่นี่ อุปกรณ์เดิมจะถูกออกจากระบบทันที"})]})}};var i,c,p,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          สลับประเภทการตรวจ
        </Button>
        <Sheet open={open} onOpenChange={setOpen} title="สลับประเภท จะล้างข้อมูล" footer={<>
              <Button variant="destructive" size="block" onClick={() => setOpen(false)}>
                ยืนยัน สลับและล้างข้อมูล
              </Button>
              <Button variant="ghost" size="block" onClick={() => setOpen(false)}>
                ยกเลิก
              </Button>
            </>}>
          การเปลี่ยนประเภทการตรวจจะล้างชื่อที่กรอกไว้ทั้งหมด ต้องการดำเนินการต่อหรือไม่?
        </Sheet>
      </>;
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"ยืนยันสลับประเภทฟอร์ม — จะล้างข้อมูลที่กรอก.",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var m,u,h,f,k;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          เข้าสู่ระบบ
        </Button>
        <Sheet open={open} onOpenChange={setOpen} title="เข้าสู่ระบบที่นี่แทน?" footer={<>
              <Button variant="primary" size="block" onClick={() => setOpen(false)}>
                เข้าสู่ระบบที่นี่
              </Button>
              <Button variant="ghost" size="block" onClick={() => setOpen(false)}>
                ยกเลิก
              </Button>
            </>}>
          บัญชีนี้กำลังใช้งานอยู่บนอีกอุปกรณ์หนึ่ง หากเข้าสู่ระบบที่นี่ อุปกรณ์เดิมจะถูกออกจากระบบทันที
        </Sheet>
      </>;
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source},description:{story:"เตะอุปกรณ์เดิม — single-device session.",...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.description}}};const F=["ConfirmSwitch","DeviceKick"];export{o as ConfirmSwitch,r as DeviceKick,F as __namedExportsOrder,z as default};
