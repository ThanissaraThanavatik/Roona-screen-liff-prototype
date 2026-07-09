import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{P as N}from"./pdpa-gate-Bkzz4uPW.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./checkbox-tyWI5K1o.js";import"./check-D3fQhiZu.js";import"./createLucideIcon-q2xymCcu.js";import"./button-Cj4DMzd2.js";import"./index-EXTQMK5R.js";import"./skeleton-Tq2I7sTs.js";import"./sticky-action-bar-B48YK0mA.js";import"./empty-state-BXn8dCsG.js";import"./shield-check-Bp-ZJ52o.js";import"./rotate-ccw-B69hVR-Z.js";import"./external-link-DE-9q9oM.js";import"./user-search-Cw05bjCz.js";const I={title:"Screening/PdpaGate",component:N,parameters:{layout:"fullscreen",viewport:{defaultViewport:"liff"},docs:{description:{component:"PDPA acknowledgment gate (LEGAL-C1). The ตรวจ button is disabled until the รับทราบ box is checked. Notice copy is a placeholder marked [provisional] pending legal sign-off — it must not ship as final wording."}}},decorators:[L=>a.jsx("div",{className:"mx-auto flex min-h-[760px] w-[390px] flex-col bg-white p-4",children:a.jsx(L,{})})]},e={args:{initialAcknowledged:!1}},r={args:{initialAcknowledged:!0}},o={args:{noticeState:"error"}},t={args:{noticeState:"loading"}};var s,i,n,c,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    initialAcknowledged: false
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source},description:{story:"Unchecked — ตรวจ disabled.",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.description}}};var p,m,l,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initialAcknowledged: true
  }
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source},description:{story:"Acknowledged — ตรวจ enabled.",...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.description}}};var f,w,k,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    noticeState: "error"
  }
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source},description:{story:"Consent notice failed to load — NetworkError + retry; ตรวจ stays disabled.",...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var S,y,A,b,E;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    noticeState: "loading"
  }
}`,...(A=(y=t.parameters)==null?void 0:y.docs)==null?void 0:A.source},description:{story:"Consent notice loading — skeleton mirrors the layout to avoid CLS; ตรวจ disabled.",...(E=(b=t.parameters)==null?void 0:b.docs)==null?void 0:E.description}}};const J=["Default","Acknowledged","NoticeError","Loading"];export{r as Acknowledged,e as Default,t as Loading,o as NoticeError,J as __namedExportsOrder,I as default};
