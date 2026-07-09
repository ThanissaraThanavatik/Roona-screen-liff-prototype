import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-DURGLf5P.js";import{C as P}from"./checkbox-tyWI5K1o.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./check-D3fQhiZu.js";import"./createLucideIcon-q2xymCcu.js";const O={title:"Components/Checkbox",component:P,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Checkbox สำหรับ consent/ack gate (PDPA-C1, hit-C2). กล่อง 24px; ป้ายผูกกับ input ทั้งแถวเป็น hit area; เครื่องหมายถูกเป็น decorative (aria-hidden) ป้ายเป็นตัวสื่อความหมาย."}}}},e={args:{label:"ฉันได้แจ้งวัตถุประสงค์การตรวจให้ลูกค้าทราบแล้ว"}},a={args:{label:"ฉันได้แจ้งวัตถุประสงค์การตรวจให้ลูกค้าทราบแล้ว",defaultChecked:!0}},t={args:{label:"ตัวเลือกนี้ถูกล็อกไว้",disabled:!0}},r={render:()=>{const[D,S]=y.useState(!1);return s.jsx("div",{style:{maxWidth:360},children:s.jsx(P,{checked:D,onChange:v=>S(v.target.checked),label:"ฉันได้รับความยินยอมจากลูกค้าให้ตรวจสอบรายชื่อกับบัญชี sanctions / PEP ตามนโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) และเข้าใจว่าผลการตรวจจะถูกบันทึกเป็นหลักฐาน"})})}};var o,c,n,d,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: "ฉันได้แจ้งวัตถุประสงค์การตรวจให้ลูกค้าทราบแล้ว"
  }
}`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source},description:{story:"ยังไม่ติ๊ก + ป้ายกำกับ.",...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.description}}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "ฉันได้แจ้งวัตถุประสงค์การตรวจให้ลูกค้าทราบแล้ว",
    defaultChecked: true
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,h,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "ตัวเลือกนี้ถูกล็อกไว้",
    disabled: true
  }
}`,...(k=(h=t.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,g,C,x,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      maxWidth: 360
    }}>
        <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} label="ฉันได้รับความยินยอมจากลูกค้าให้ตรวจสอบรายชื่อกับบัญชี sanctions / PEP ตามนโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) และเข้าใจว่าผลการตรวจจะถูกบันทึกเป็นหลักฐาน" />
      </div>;
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source},description:{story:"ป้ายยาวแบบ PDPA ack ควบคุมด้วย useState.",...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};const R=["Default","Checked","Disabled","WithLongLabel"];export{a as Checked,e as Default,t as Disabled,r as WithLongLabel,R as __namedExportsOrder,O as default};
