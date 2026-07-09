import{j as g}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./index-DURGLf5P.js";import{O as y}from"./ocr-scan-BwHUUK6m.js";import{T as $,P as ee}from"./specimen-docs-CTeWDzEZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./skeleton-Tq2I7sTs.js";import"./button-Cj4DMzd2.js";import"./index-EXTQMK5R.js";import"./createLucideIcon-q2xymCcu.js";import"./tabs-CKgSLarI.js";import"./sticky-action-bar-B48YK0mA.js";import"./state-panel-AwrGFuBi.js";import"./alert-DmPeCFP9.js";import"./wifi-off-WBlfOpX_.js";import"./triangle-alert-CFv-IGbZ.js";import"./circle-check-CinDCBxF.js";import"./info-xmaNSMqE.js";import"./x-BRWzi90o.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./globe-CacBOxks.js";import"./shield-check-Bp-ZJ52o.js";import"./rotate-ccw-B69hVR-Z.js";import"./check-D3fQhiZu.js";const re=[{label:"เลขหนังสือเดินทาง",value:"AB 1234567"},{label:"ชื่อ-นามสกุล",value:"SOMCHAI JAIDEE"},{label:"สัญชาติ",value:"ไทย (THA)"},{label:"วันเกิด",value:"1 ม.ค. 2530"}],Oe={title:"Screening/OcrScan",component:y,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"ID-card scan fill-aid (SCR-OCR). Pre-fills the screening form from the card; the image is deleted right after extraction. capture picks the doc type (navy segmented) then shoots or uploads (bad file → inline UploadError); preview confirms the shot before OCR runs (spec §2 flow). 'พิมพ์เอง' stays visible because the aid is non-blocking. Every state carries an icon + Thai text (never color alone); loading announces via aria-live polite. low-confidence (partial read) / ocr-failed (unreadable) / camera-denied / no-camera all fall back to manual typing."}}}},a={render:()=>{const[e,r]=S.useState("thai");return g.jsx(y,{state:"capture",docType:e,onDocTypeChange:r,onCapture:()=>{},onUpload:()=>{},onManualEntry:()=>{}})}},o={render:()=>{const[e,r]=S.useState("passport");return g.jsx(y,{state:"capture",docType:e,onDocTypeChange:r,onCapture:()=>{},onUpload:()=>{},onManualEntry:()=>{}})}},s={render:()=>{const[e,r]=S.useState("thai");return g.jsx(y,{state:"capture",docType:e,onDocTypeChange:r,onCapture:()=>{},onUpload:()=>{},onManualEntry:()=>{},uploadError:"ไฟล์ใหญ่เกิน 10MB — เลือกภาพที่เล็กกว่า หรือถ่ายใหม่"})}},t={args:{state:"preview",previewSrc:$,onRetake:()=>{},onConfirmPreview:()=>{}}},n={args:{state:"preview",docType:"passport",previewSrc:ee,onRetake:()=>{},onConfirmPreview:()=>{}}},c={args:{state:"loading"}},p={args:{state:"success"}},i={args:{state:"success",fields:re}},d={args:{state:"low-confidence",onManualEntry:()=>{}}},m={args:{state:"ocr-failed",onRetake:()=>{},onManualEntry:()=>{}}},u={args:{state:"camera-denied",onManualEntry:()=>{}}},l={args:{state:"no-camera",onManualEntry:()=>{}}};var T,E,C;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [docType, setDocType] = useState<OcrDocType>("thai");
    return <OcrScan state="capture" docType={docType} onDocTypeChange={setDocType} onCapture={() => {}} onUpload={() => {}} onManualEntry={() => {}} />;
  }
}`,...(C=(E=a.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var f,v,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [docType, setDocType] = useState<OcrDocType>("passport");
    return <OcrScan state="capture" docType={docType} onDocTypeChange={setDocType} onCapture={() => {}} onUpload={() => {}} onManualEntry={() => {}} />;
  }
}`,...(P=(v=o.parameters)==null?void 0:v.docs)==null?void 0:P.source}}};var D,w,h;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [docType, setDocType] = useState<OcrDocType>("thai");
    return <OcrScan state="capture" docType={docType} onDocTypeChange={setDocType} onCapture={() => {}} onUpload={() => {}} onManualEntry={() => {}} uploadError="ไฟล์ใหญ่เกิน 10MB — เลือกภาพที่เล็กกว่า หรือถ่ายใหม่" />;
  }
}`,...(h=(w=s.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var M,O,R;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    state: "preview",
    previewSrc: THAI_ID_SPECIMEN,
    onRetake: () => {},
    onConfirmPreview: () => {}
  }
}`,...(R=(O=t.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var I,b,x;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    state: "preview",
    docType: "passport",
    previewSrc: PASSPORT_SPECIMEN,
    onRetake: () => {},
    onConfirmPreview: () => {}
  }
}`,...(x=(b=n.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var A,_,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var U,L,N;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    state: "success"
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var j,F,H;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    state: "success",
    fields: PASSPORT_FIELDS
  }
}`,...(H=(F=i.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var B,J,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    state: "low-confidence",
    onManualEntry: () => {}
  }
}`,...(V=(J=d.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var q,z,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    state: "ocr-failed",
    onRetake: () => {},
    onManualEntry: () => {}
  }
}`,...(G=(z=m.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,Q,W;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    state: "camera-denied",
    onManualEntry: () => {}
  }
}`,...(W=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    state: "no-camera",
    onManualEntry: () => {}
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Re=["Capture","CapturePassport","UploadError","Preview","PreviewPassport","Loading","Success","SuccessPassport","LowConfidence","OcrFailed","CameraDenied","NoCamera"];export{u as CameraDenied,a as Capture,o as CapturePassport,c as Loading,d as LowConfidence,l as NoCamera,m as OcrFailed,t as Preview,n as PreviewPassport,p as Success,i as SuccessPassport,s as UploadError,Re as __namedExportsOrder,Oe as default};
