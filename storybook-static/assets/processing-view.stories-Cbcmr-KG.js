import{P as b}from"./processing-view-BnlUVuiu.js";import"./jsx-runtime-D_zvdyIk.js";import"./cn-BLSKlp9E.js";import"./skeleton-Tq2I7sTs.js";import"./alert-DmPeCFP9.js";import"./wifi-off-WBlfOpX_.js";import"./createLucideIcon-q2xymCcu.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./triangle-alert-CFv-IGbZ.js";import"./circle-check-CinDCBxF.js";import"./info-xmaNSMqE.js";import"./x-BRWzi90o.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./button-Cj4DMzd2.js";import"./index-EXTQMK5R.js";import"./state-panel-AwrGFuBi.js";import"./rotate-ccw-B69hVR-Z.js";const J={title:"Screening/ProcessingView",component:b,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Async wait + result-pending surface after submitting a screening (SCR-PROCESSING). loading/slow share a centered spinner in a role=status aria-live region (the message swap is announced). timeout/network retry is idempotent and does not consume quota. list-empty fails closed (block); stale-list is a non-blocking warning. Status is always icon + Thai text."}}}},e={args:{state:"loading"}},t={args:{state:"slow"}},r={args:{state:"timeout",onRetry:()=>{}}},s={args:{state:"network",onRetry:()=>{}}},a={args:{state:"list-empty"}},o={args:{state:"stale-list"}};var n,i,m;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    state: "slow"
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    state: "timeout",
    onRetry: () => {}
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var w,S,y;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    state: "network",
    onRetry: () => {}
  }
}`,...(y=(S=s.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,k,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    state: "list-empty"
  }
}`,...(L=(k=a.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var R,E,P;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    state: "stale-list"
  }
}`,...(P=(E=o.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const K=["Loading","Slow","Timeout","Network","ListEmpty","StaleList"];export{a as ListEmpty,e as Loading,s as Network,t as Slow,o as StaleList,r as Timeout,K as __namedExportsOrder,J as default};
