import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ne}from"./index-DURGLf5P.js";import{B as oe}from"./button-Cj4DMzd2.js";import"./badge-DR9D7Bxf.js";import"./card-CUv2tkzD.js";import"./result-card-CR6ZJj-u.js";import"./input-CnPVHnSS.js";import"./alert-DmPeCFP9.js";import"./skeleton-Tq2I7sTs.js";import"./empty-state-BXn8dCsG.js";import"./sticky-action-bar-B48YK0mA.js";import"./network-error-Bi-14o0K.js";import"./pii-mask-DzPhrbeW.js";import"./tabs-CKgSLarI.js";import"./checkbox-tyWI5K1o.js";import"./radio-group-BvCcC-mr.js";import"./select-l-h8_a0d.js";import"./sheet-4EsOYAOn.js";import"./dialog-DFelSSQb.js";import"./table-D7rfBOnA.js";import"./dropdown-menu-CM6ZlXGJ.js";import"./screening-form-B1OMbl68.js";import"./ocr-scan-BwHUUK6m.js";import"./pdpa-gate-Bkzz4uPW.js";import"./processing-view-BnlUVuiu.js";import"./candidate-picker-DChtDuIV.js";import"./disposition-zone-C5pZKOx3.js";import"./resume-banner-To8esUl-.js";import"./history-view-BUtlUSnj.js";import{A as r}from"./auth-states-DSGRmC7B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./createLucideIcon-q2xymCcu.js";import"./circle-check-CinDCBxF.js";import"./triangle-alert-CFv-IGbZ.js";import"./wifi-off-WBlfOpX_.js";import"./info-xmaNSMqE.js";import"./x-BRWzi90o.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./state-panel-AwrGFuBi.js";import"./rotate-ccw-B69hVR-Z.js";import"./check-D3fQhiZu.js";import"./user-search-Cw05bjCz.js";import"./globe-CacBOxks.js";import"./shield-check-Bp-ZJ52o.js";import"./external-link-DE-9q9oM.js";import"./history-CMuEQWGh.js";import"./search-BvLNQAdK.js";import"./clipboard-list-JLwa9ABu.js";const tr={title:"Screens/เข้าสู่ระบบ",parameters:{layout:"fullscreen",viewport:{defaultViewport:"liff"},docs:{description:{component:"หน้าเข้าสู่ระบบด้วย LINE และสถานะขอบทุกแบบ (SRS SCR-AUTH-01..11): กำลังเข้าสู่ระบบ, ยังไม่ผูกบัญชี (พนักงาน/เจ้าของ), เพิกถอนสิทธิ์, ถูกระงับ, ร้านค้างชำระ (อ่านอย่างเดียว), ร้านถูกล็อกโดยแอดมิน, ใช้งานเต็ม, LINE ล่ม, เปิดนอก LINE, OAuth ล้มเหลว, สลับเครื่องเดียว"}}}};function t({children:S}){return e.jsx("div",{className:"mx-auto w-[390px] min-h-[844px] bg-white",children:S})}const n={render:()=>e.jsx(t,{children:e.jsx(r,{state:"login"})})},o={render:()=>e.jsx(t,{children:e.jsx(r,{state:"loading"})})},s={render:()=>e.jsx(t,{children:e.jsx(r,{state:"unbound-operator"})})},a={render:()=>e.jsx(t,{children:e.jsx(r,{state:"unbound-owner"})})},c={render:()=>e.jsx(t,{children:e.jsx(r,{state:"revoked"})})},i={render:()=>e.jsx(t,{children:e.jsx(r,{state:"suspended"})})},m={render:()=>e.jsx(t,{children:e.jsx(r,{state:"shop-dunning",onViewHistory:()=>alert("เปิดประวัติเดิม (อ่านอย่างเดียว)")})})},p={render:()=>e.jsx(t,{children:e.jsx(r,{state:"shop-admin-hard"})})},u={render:()=>e.jsx(t,{children:e.jsx(r,{state:"concurrency-full",concurrencyLimit:3})})},d={render:()=>e.jsx(t,{children:e.jsx(r,{state:"line-outage"})})},h={render:()=>e.jsx(t,{children:e.jsx(r,{state:"outside-line"})})},l={render:()=>e.jsx(t,{children:e.jsx(r,{state:"oauth-error"})})},A={render:()=>{const[S,x]=ne.useState(!1);return e.jsxs(t,{children:[e.jsx(r,{state:"login",kickOpen:S,onKickOpenChange:x}),e.jsx("div",{className:"px-6",children:e.jsx(oe,{size:"block",variant:"secondary",onClick:()=>x(!0),children:"จำลอง: เข้าสู่ระบบจากอีกเครื่อง"})})]})}};var g,j,F;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="login" />
    </AuthFrame>
}`,...(F=(j=n.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var k,O,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="loading" />
    </AuthFrame>
}`,...(f=(O=o.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var v,L,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="unbound-operator" />
    </AuthFrame>
}`,...(b=(L=s.parameters)==null?void 0:L.docs)==null?void 0:b.source}}};var y,w,E;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="unbound-owner" />
    </AuthFrame>
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var K,C,N;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="revoked" />
    </AuthFrame>
}`,...(N=(C=c.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var H,R,U;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="suspended" />
    </AuthFrame>
}`,...(U=(R=i.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var B,D,I;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="shop-dunning" onViewHistory={() => alert("เปิดประวัติเดิม (อ่านอย่างเดียว)")} />
    </AuthFrame>
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var V,z,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="shop-admin-hard" />
    </AuthFrame>
}`,...(_=(z=p.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var T,q,G;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="concurrency-full" concurrencyLimit={3} />
    </AuthFrame>
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,M,P;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="line-outage" />
    </AuthFrame>
}`,...(P=(M=d.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var Q,W,X;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="outside-line" />
    </AuthFrame>
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <AuthFrame>
      <AuthScreen state="oauth-error" />
    </AuthFrame>
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [kickOpen, setKickOpen] = useState(false);
    return <AuthFrame>
        <AuthScreen state="login" kickOpen={kickOpen} onKickOpenChange={setKickOpen} />
        <div className="px-6">
          <Button size="block" variant="secondary" onClick={() => setKickOpen(true)}>
            จำลอง: เข้าสู่ระบบจากอีกเครื่อง
          </Button>
        </div>
      </AuthFrame>;
  }
}`,...(te=(re=A.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const nr=["Login","Loading","UnboundOperator","UnboundOwner","Revoked","Suspended","ShopDunning","ShopAdminHard","ConcurrencyFull","LineOutage","OutsideLine","OauthError","SingleDeviceKick"];export{u as ConcurrencyFull,d as LineOutage,o as Loading,n as Login,l as OauthError,h as OutsideLine,c as Revoked,p as ShopAdminHard,m as ShopDunning,A as SingleDeviceKick,i as Suspended,s as UnboundOperator,a as UnboundOwner,nr as __namedExportsOrder,tr as default};
