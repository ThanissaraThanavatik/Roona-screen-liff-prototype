import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as oe}from"./index-DURGLf5P.js";import{A as se}from"./auth-states-DSGRmC7B.js";import{B as ae}from"./button-Cj4DMzd2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./sheet-4EsOYAOn.js";import"./x-BRWzi90o.js";import"./createLucideIcon-q2xymCcu.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./globe-CacBOxks.js";import"./rotate-ccw-B69hVR-Z.js";import"./external-link-DE-9q9oM.js";import"./index-EXTQMK5R.js";const ve={title:"Screening/AuthScreen",component:se,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"SCR-AUTH — LINE login + all entry states for the Screening LIFF (SRS SCR-AUTH-01..11). One panel per state; every non-login state leads with an icon + Thai text (never color-only). Revoked ≠ suspended ≠ shop-admin-hard (distinct copy). Shop-dunning is read-only (view old Evidence). Single-device-kick is a Sheet. LINE outage falls back to owner web+password (R-17)."}}}},s={args:{state:"login"}},n={args:{state:"loading"}},o={args:{state:"unbound-operator"}},a={args:{state:"unbound-owner"}},t={args:{state:"revoked"}},c={args:{state:"suspended"}},i={args:{state:"shop-dunning",onViewHistory:()=>alert("เปิดประวัติเดิม (อ่านอย่างเดียว)")}},p={args:{state:"shop-admin-hard"}},d={args:{state:"concurrency-full",concurrencyLimit:3}},u={args:{state:"line-outage"}},m={args:{state:"outside-line"}},g={args:{state:"oauth-error",onRetry:()=>alert("ลองเข้าสู่ระบบอีกครั้ง")}},e={render:()=>{const[ne,l]=oe.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsx(ae,{size:"sm",onClick:()=>l(!0),children:"เปิด Sheet อีกครั้ง"}),r.jsx(se,{state:"login",kickOpen:ne,onKickOpenChange:l,onKickConfirm:()=>alert("ออกจากเครื่องเดิม"),onKickCancel:()=>alert("ยกเลิก")})]})}};var S,h,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    state: "login"
  }
}`,...(k=(h=s.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var O,y,f;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,w,L;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    state: "unbound-operator"
  }
}`,...(L=(w=o.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var C,b,R;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    state: "unbound-owner"
  }
}`,...(R=(b=a.parameters)==null?void 0:b.docs)==null?void 0:R.source}}};var x,A,E;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    state: "revoked"
  }
}`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var K,H,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    state: "suspended"
  }
}`,...(U=(H=c.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var j,F,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    state: "shop-dunning",
    onViewHistory: () => alert("เปิดประวัติเดิม (อ่านอย่างเดียว)")
  }
}`,...(B=(F=i.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var D,I,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: "shop-admin-hard"
  }
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var V,z,N;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    state: "concurrency-full",
    concurrencyLimit: 3
  }
}`,...(N=(z=d.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var _,q,G;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    state: "line-outage"
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,M,P;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    state: "outside-line"
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,W,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    state: "oauth-error",
    onRetry: () => alert("ลองเข้าสู่ระบบอีกครั้ง")
  }
}`,...(X=(W=g.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$,ee,re;e.parameters={...e.parameters,docs:{...(Y=e.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <>
        <Button size="sm" onClick={() => setOpen(true)}>
          เปิด Sheet อีกครั้ง
        </Button>
        <AuthScreen state="login" kickOpen={open} onKickOpenChange={setOpen} onKickConfirm={() => alert("ออกจากเครื่องเดิม")} onKickCancel={() => alert("ยกเลิก")} />
      </>;
  }
}`,...($=(Z=e.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Single-device-kick confirm Sheet (opened over the login panel).",...(re=(ee=e.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};const we=["Login","Loading","UnboundOperator","UnboundOwner","Revoked","Suspended","ShopDunning","ShopAdminHard","ConcurrencyFull","LineOutage","OutsideLine","OauthError","SingleDeviceKick"];export{d as ConcurrencyFull,u as LineOutage,n as Loading,s as Login,g as OauthError,m as OutsideLine,t as Revoked,p as ShopAdminHard,i as ShopDunning,e as SingleDeviceKick,c as Suspended,o as UnboundOperator,a as UnboundOwner,we as __namedExportsOrder,ve as default};
