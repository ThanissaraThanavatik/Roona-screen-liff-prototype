import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./badge-DR9D7Bxf.js";import{T as E}from"./triangle-alert-CFv-IGbZ.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./createLucideIcon-q2xymCcu.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";const F={title:"Components/Badge & Status Chip",component:e,parameters:{docs:{description:{component:"Pill labels for domain status (Thai). Status is never color-only — the 'พบ' chip pairs an icon with the label. Toggle `appearance` (solid / outline) in the Controls panel."}}},argTypes:{variant:{control:"select",options:["neutral","primary","success","warning","error","hit"]},appearance:{control:"inline-radio",options:["solid","outline"],description:"Filled pill (solid) or transparent pill with colored border (outline)."}}},n={render:()=>r.jsxs(e,{variant:"hit",children:[r.jsx(E,{size:13,"aria-hidden":"true"}),"พบ"]})},s={render:()=>r.jsx(e,{variant:"error",children:"ปฏิเสธ"})},c=({appearance:a})=>r.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[r.jsxs(e,{variant:"hit",appearance:a,children:[r.jsx(E,{size:13,"aria-hidden":"true"}),"พบ"]}),r.jsx(e,{variant:"success",appearance:a,children:"ผูกแล้ว"}),r.jsx(e,{variant:"success",appearance:a,children:"ใช้งานอยู่"}),r.jsx(e,{variant:"warning",appearance:a,children:"รอผูก"}),r.jsx(e,{variant:"hit",appearance:a,children:"ระงับ"}),r.jsx(e,{variant:"primary",appearance:a,children:"primary"}),r.jsx(e,{variant:"neutral",appearance:a,children:"neutral"})]}),i={render:()=>r.jsx(c,{appearance:"solid"})},t={name:"Status Chips — Outline",render:()=>r.jsx(c,{appearance:"outline"})},o={name:"Solid vs Outline",render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(c,{appearance:"solid"}),r.jsx(c,{appearance:"outline"})]})},l={args:{variant:"hit",appearance:"outline",children:"ระงับ"}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Badge variant="hit">
      <TriangleAlert size={13} aria-hidden="true" />
      พบ
    </Badge>
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,h,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Badge variant="error">ปฏิเสธ</Badge>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,v,j;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ChipRow appearance="solid" />
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,y,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Status Chips — Outline",
  render: () => <ChipRow appearance="outline" />
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,w,O;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Solid vs Outline",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <ChipRow appearance="solid" />
      <ChipRow appearance="outline" />
    </div>
}`,...(O=(w=o.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var B,R,T;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: "hit",
    appearance: "outline",
    children: "ระงับ"
  }
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const W=["Hit","Error","StatusChips","Outline","SolidVsOutline","Playground"];export{s as Error,n as Hit,t as Outline,l as Playground,o as SolidVsOutline,i as StatusChips,W as __namedExportsOrder,F as default};
