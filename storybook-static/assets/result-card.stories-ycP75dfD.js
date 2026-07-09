import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as t}from"./result-card-CR6ZJj-u.js";import{B as u}from"./badge-DR9D7Bxf.js";import{T as x}from"./triangle-alert-CFv-IGbZ.js";import"./cn-BLSKlp9E.js";import"./circle-check-CinDCBxF.js";import"./createLucideIcon-q2xymCcu.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";const T={title:"Components/Result Card",component:t,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"The screening verdict surface. Verdict = icon + text + shape (color reinforces only); reads in grayscale and to a screen reader. Status icon is aria-hidden; the Thai headline is the accessible name."}}}},g=e.jsxs(e.Fragment,{children:["ไม่พบชื่อตรงกับรายการ ณ เวลาที่ตรวจ",e.jsx("span",{className:"mt-0.5 block font-normal text-[var(--color-success-text)]",children:"— ไม่ใช่การรับรองความบริสุทธิ์"})]}),r={args:{variant:"clear",headline:"ไม่พบ",subline:g}},n={render:()=>e.jsx(t,{variant:"hit",headline:"พบ",subline:"พบชื่อใกล้เคียงในบัญชีเฝ้าระวัง โปรดตรวจสอบและบันทึกผล",style:{maxWidth:360},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:13},children:[e.jsx("span",{children:"สมชาย ใจดี · UN Consolidated"}),e.jsx("strong",{children:"97%"})]})})},a={render:()=>e.jsxs(t,{variant:"hit",headline:"พบ",subline:"พบชื่อใกล้เคียงในบัญชีเฝ้าระวัง โปรดตรวจสอบและบันทึกผล",style:{maxWidth:360},children:[e.jsx("div",{style:{marginBottom:8},children:e.jsxs(u,{variant:"hit",children:[e.jsx(x,{size:13,"aria-hidden":"true"}),"ต้องตัดสิน"]})}),"ปิดเคสก่อนทำรายการอื่น"]})};var s,i,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: "clear",
    headline: "ไม่พบ",
    subline: ClearSubline
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ResultCard variant="hit" headline="พบ" subline="พบชื่อใกล้เคียงในบัญชีเฝ้าระวัง โปรดตรวจสอบและบันทึกผล" style={{
    maxWidth: 360
  }}>
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13
    }}>
        <span>สมชาย ใจดี · UN Consolidated</span>
        <strong>97%</strong>
      </div>
    </ResultCard>
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ResultCard variant="hit" headline="พบ" subline="พบชื่อใกล้เคียงในบัญชีเฝ้าระวัง โปรดตรวจสอบและบันทึกผล" style={{
    maxWidth: 360
  }}>
      <div style={{
      marginBottom: 8
    }}>
        <Badge variant="hit">
          <TriangleAlert size={13} aria-hidden="true" />
          ต้องตัดสิน
        </Badge>
      </div>
      ปิดเคสก่อนทำรายการอื่น
    </ResultCard>
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const w=["Clear","Hit","HitWithBadge"];export{r as Clear,n as Hit,a as HitWithBadge,w as __namedExportsOrder,T as default};
