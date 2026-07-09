import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DURGLf5P.js";import{R as u,a}from"./radio-group-BvCcC-mr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";const D={title:"Components/Radio Group",component:u,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:'เลือกได้รายการเดียว ใช้เลือกรายชื่อที่ตรงในผล "พบ" (SCR-HIT). แต่ละแถวเต็มความกว้าง ≥44px; แถวที่เลือกมีกรอบ + จุด emerald (ไม่พึ่งสีอย่างเดียว). focus ring = --color-ring.'}}}},t={render:()=>{const[o,r]=d.useState();return e.jsxs(u,{value:o,onValueChange:r,"aria-label":"เลือกรายชื่อที่ตรงกัน",style:{maxWidth:360},children:[e.jsx(a,{value:"un",children:"สมชาย ใจดี · UN Consolidated · 97%"}),e.jsx(a,{value:"ofac",children:"สมชาย ใจดี · OFAC SDN · 91%"}),e.jsx(a,{value:"none",children:"ไม่ตรงกับรายชื่อใด"})]})}},n={render:()=>{const[o,r]=d.useState("un");return e.jsxs(u,{value:o,onValueChange:r,"aria-label":"เลือกรายชื่อที่ตรงกัน",style:{maxWidth:360},children:[e.jsx(a,{value:"un",children:"สมชาย ใจดี · UN Consolidated · 97%"}),e.jsx(a,{value:"ofac",children:"สมชาย ใจดี · OFAC SDN · 91%"}),e.jsx(a,{value:"none",children:"ไม่ตรงกับรายชื่อใด"})]})}},s={render:()=>{const[o,r]=d.useState("un");return e.jsxs(u,{value:o,onValueChange:r,"aria-label":"เลือกรายชื่อที่ตรงกัน",style:{maxWidth:360},children:[e.jsx(a,{value:"un",disabled:!0,children:"สมชาย ใจดี · UN Consolidated · 97%"}),e.jsx(a,{value:"ofac",disabled:!0,children:"สมชาย ใจดี · OFAC SDN · 91%"})]})}};var l,i,c,p,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>();
    return <RadioGroup value={value} onValueChange={setValue} aria-label="เลือกรายชื่อที่ตรงกัน" style={{
      maxWidth: 360
    }}>
        <RadioGroupItem value="un">สมชาย ใจดี · UN Consolidated · 97%</RadioGroupItem>
        <RadioGroupItem value="ofac">สมชาย ใจดี · OFAC SDN · 91%</RadioGroupItem>
        <RadioGroupItem value="none">ไม่ตรงกับรายชื่อใด</RadioGroupItem>
      </RadioGroup>;
  }
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"3 ตัวเลือกแบบรายชื่อผู้ต้องสงสัย ควบคุมด้วย useState.",...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.description}}};var v,R,G,h,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("un");
    return <RadioGroup value={value} onValueChange={setValue} aria-label="เลือกรายชื่อที่ตรงกัน" style={{
      maxWidth: 360
    }}>
        <RadioGroupItem value="un">สมชาย ใจดี · UN Consolidated · 97%</RadioGroupItem>
        <RadioGroupItem value="ofac">สมชาย ใจดี · OFAC SDN · 91%</RadioGroupItem>
        <RadioGroupItem value="none">ไม่ตรงกับรายชื่อใด</RadioGroupItem>
      </RadioGroup>;
  }
}`,...(G=(R=n.parameters)==null?void 0:R.docs)==null?void 0:G.source},description:{story:"มีตัวเลือกที่ถูกเลือกไว้แล้ว.",...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.description}}};var C,S,I,f,V;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>("un");
    return <RadioGroup value={value} onValueChange={setValue} aria-label="เลือกรายชื่อที่ตรงกัน" style={{
      maxWidth: 360
    }}>
        <RadioGroupItem value="un" disabled>
          สมชาย ใจดี · UN Consolidated · 97%
        </RadioGroupItem>
        <RadioGroupItem value="ofac" disabled>
          สมชาย ใจดี · OFAC SDN · 91%
        </RadioGroupItem>
      </RadioGroup>;
  }
}`,...(I=(S=s.parameters)==null?void 0:S.docs)==null?void 0:I.source},description:{story:"ตัวเลือกถูกปิดใช้งาน.",...(V=(f=s.parameters)==null?void 0:f.docs)==null?void 0:V.description}}};const O=["Default","Selected","Disabled"];export{t as Default,s as Disabled,n as Selected,O as __namedExportsOrder,D as default};
