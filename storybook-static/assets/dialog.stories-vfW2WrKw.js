import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./index-DURGLf5P.js";import{D as a}from"./dialog-DFelSSQb.js";import{B as t}from"./button-Cj4DMzd2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./x-BRWzi90o.js";import"./createLucideIcon-q2xymCcu.js";import"./index-EXTQMK5R.js";const z={title:"Components/Dialog",component:a,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Modal กึ่งกลางจอ — คู่ของ Sheet สำหรับ prompt ที่ไม่ยึดด้านล่าง (เช่น session timeout / re-auth). ควบคุมด้วย open/onOpenChange; Escape + คลิกฉากหลังปิด; title เป็นชื่อที่ screen reader อ่าน. hideClose บังคับให้ตัดสินใจผ่านปุ่ม footer."}}}},o={render:()=>{const[s,n]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!0),children:"จำลอง session หมดอายุ"}),e.jsx(a,{open:s,onOpenChange:n,title:"เซสชันหมดอายุ",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"block",onClick:()=>n(!1),children:"เข้าสู่ระบบอีกครั้ง"}),e.jsx(t,{variant:"ghost",size:"block",onClick:()=>n(!1),children:"ภายหลัง"})]}),children:"คุณไม่ได้ใช้งานเป็นเวลานาน เพื่อความปลอดภัย กรุณาเข้าสู่ระบบอีกครั้งก่อนทำรายการต่อ"})]})}},r={render:()=>{const[s,n]=k.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!0),children:"จำลองการตัดสินที่บังคับ"}),e.jsx(a,{open:s,onOpenChange:n,hideClose:!0,title:"ต้องยอมรับเงื่อนไขก่อนใช้งาน",footer:e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",size:"block",onClick:()=>n(!1),children:"ยอมรับและดำเนินการต่อ"}),e.jsx(t,{variant:"destructive",size:"block",onClick:()=>n(!1),children:"ปฏิเสธและออก"})]}),children:"มีการอัปเดตข้อกำหนดการใช้งาน กรุณาเลือกดำเนินการเพื่อใช้งานต่อ — ปิดหน้าต่างนี้ไม่ได้จนกว่าจะเลือก"})]})}};var i,c,p,l,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          จำลอง session หมดอายุ
        </Button>
        <Dialog open={open} onOpenChange={setOpen} title="เซสชันหมดอายุ" footer={<>
              <Button variant="primary" size="block" onClick={() => setOpen(false)}>
                เข้าสู่ระบบอีกครั้ง
              </Button>
              <Button variant="ghost" size="block" onClick={() => setOpen(false)}>
                ภายหลัง
              </Button>
            </>}>
          คุณไม่ได้ใช้งานเป็นเวลานาน เพื่อความปลอดภัย กรุณาเข้าสู่ระบบอีกครั้งก่อนทำรายการต่อ
        </Dialog>
      </>;
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"Session timeout — ยืนยันตัวตนใหม่ มีปุ่ม footer.",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var m,u,f,h,C;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          จำลองการตัดสินที่บังคับ
        </Button>
        <Dialog open={open} onOpenChange={setOpen} hideClose title="ต้องยอมรับเงื่อนไขก่อนใช้งาน" footer={<>
              <Button variant="primary" size="block" onClick={() => setOpen(false)}>
                ยอมรับและดำเนินการต่อ
              </Button>
              <Button variant="destructive" size="block" onClick={() => setOpen(false)}>
                ปฏิเสธและออก
              </Button>
            </>}>
          มีการอัปเดตข้อกำหนดการใช้งาน กรุณาเลือกดำเนินการเพื่อใช้งานต่อ — ปิดหน้าต่างนี้ไม่ได้จนกว่าจะเลือก
        </Dialog>
      </>;
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source},description:{story:"Forced — ซ่อนปุ่มปิด ต้องเลือกปุ่ม footer เท่านั้น.",...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.description}}};const D=["SessionTimeout","Forced"];export{r as Forced,o as SessionTimeout,D as __namedExportsOrder,z as default};
