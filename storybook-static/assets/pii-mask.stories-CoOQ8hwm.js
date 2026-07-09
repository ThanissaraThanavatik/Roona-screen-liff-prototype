import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as s,E as u}from"./pii-mask-DzPhrbeW.js";import"./cn-BLSKlp9E.js";const g={title:"Components/PII Mask & Watermark",component:s,parameters:{docs:{description:{component:"PII masking shows only the trailing characters; the accessible name never exposes the full value. Evidence previews carry a diagonal operator/time watermark — decorative (aria-hidden), non-selectable, no copy/share affordance (EXPERIENCE.md §10)."}}}},r={args:{value:"1234567890123",tail:4}},a={render:()=>e.jsxs("div",{style:{fontSize:14},children:["เลขบัตร ",e.jsx(s,{value:"1234567890123"})," · โทร ",e.jsx(s,{value:"0812345678",tail:3})]})},n={render:()=>e.jsx(u,{operator:"สมหญิง (ผู้ตรวจ)",time:"3 ก.ค. 2569 14:32",style:{maxWidth:360},children:e.jsxs("div",{style:{border:"1px solid var(--color-border-default)",borderRadius:8,padding:18,background:"#fff"},children:[e.jsx("div",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:"Evidence Pack"}),e.jsxs("div",{style:{fontSize:14,lineHeight:1.6},children:["ผู้ถูกตรวจ: สมชาย ใจดี",e.jsx("br",{}),"เลขบัตร: ",e.jsx(s,{value:"1234567890123"}),e.jsx("br",{}),"ผลการตรวจ: ไม่พบรายชื่อในบัญชี sanctions / PEP"]})]})})};var t,i,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: "1234567890123",
    tail: 4
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    fontSize: 14
  }}>
      เลขบัตร <PiiMask value="1234567890123" /> · โทร <PiiMask value="0812345678" tail={3} />
    </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,v;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <EvidenceWatermark operator="สมหญิง (ผู้ตรวจ)" time="3 ก.ค. 2569 14:32" style={{
    maxWidth: 360
  }}>
      <div style={{
      border: "1px solid var(--color-border-default)",
      borderRadius: 8,
      padding: 18,
      background: "#fff"
    }}>
        <div style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 8
      }}>Evidence Pack</div>
        <div style={{
        fontSize: 14,
        lineHeight: 1.6
      }}>
          ผู้ถูกตรวจ: สมชาย ใจดี
          <br />
          เลขบัตร: <PiiMask value="1234567890123" />
          <br />
          ผลการตรวจ: ไม่พบรายชื่อในบัญชี sanctions / PEP
        </div>
      </div>
    </EvidenceWatermark>
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const h=["MaskedId","MaskedInline","Watermarked"];export{r as MaskedId,a as MaskedInline,n as Watermarked,h as __namedExportsOrder,g as default};
