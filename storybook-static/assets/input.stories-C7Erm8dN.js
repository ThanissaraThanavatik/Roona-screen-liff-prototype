import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as r}from"./input-CnPVHnSS.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";const k={title:"Components/Input",component:r,parameters:{layout:"padded",docs:{description:{component:"Focus the field — border + ring turn emerald-700 (AA-safe). Always paired with a <label>."}}}},a={render:n=>e.jsxs("label",{style:{display:"block",maxWidth:320},children:[e.jsx("span",{style:{display:"block",fontSize:14,fontWeight:500,marginBottom:6},children:"ชื่อ-นามสกุล"}),e.jsx(r,{...n,defaultValue:"สมชาย ใจดี"})]})},s={render:n=>e.jsxs("label",{style:{display:"block",maxWidth:320},children:[e.jsx("span",{style:{display:"block",fontSize:14,fontWeight:500,marginBottom:6},children:"เลขบัตรประชาชน"}),e.jsx(r,{...n,invalid:!0,placeholder:"x xxxx xxxxx xx x"}),e.jsx("span",{style:{display:"block",fontSize:12,color:"#991b1b",marginTop:6},children:"เลขบัตรไม่ถูกต้อง — กรอกให้ครบ 13 หลัก"})]})},t={render:n=>e.jsxs("label",{style:{display:"block",maxWidth:320},children:[e.jsx("span",{style:{display:"block",fontSize:14,fontWeight:500,marginBottom:6},children:"ชื่อร้าน (แก้ไขผ่านผู้ดูแลเท่านั้น)"}),e.jsx(r,{...n,disabled:!0,defaultValue:"ร้านทองเยาวราช"})]})};var l,o,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <label style={{
    display: "block",
    maxWidth: 320
  }}>
      <span style={{
      display: "block",
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 6
    }}>
        ชื่อ-นามสกุล
      </span>
      <Input {...args} defaultValue="สมชาย ใจดี" />
    </label>
}`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <label style={{
    display: "block",
    maxWidth: 320
  }}>
      <span style={{
      display: "block",
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 6
    }}>
        เลขบัตรประชาชน
      </span>
      <Input {...args} invalid placeholder="x xxxx xxxxx xx x" />
      <span style={{
      display: "block",
      fontSize: 12,
      color: "#991b1b",
      marginTop: 6
    }}>
        เลขบัตรไม่ถูกต้อง — กรอกให้ครบ 13 หลัก
      </span>
    </label>
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,x,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <label style={{
    display: "block",
    maxWidth: 320
  }}>
      <span style={{
      display: "block",
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 6
    }}>
        ชื่อร้าน (แก้ไขผ่านผู้ดูแลเท่านั้น)
      </span>
      <Input {...args} disabled defaultValue="ร้านทองเยาวราช" />
    </label>
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const j=["Default","Error","Disabled"];export{a as Default,t as Disabled,s as Error,j as __namedExportsOrder,k as default};
