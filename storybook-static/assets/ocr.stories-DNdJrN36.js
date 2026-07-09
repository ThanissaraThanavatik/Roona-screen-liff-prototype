import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./index-DURGLf5P.js";import"./button-Cj4DMzd2.js";import"./badge-DR9D7Bxf.js";import"./card-CUv2tkzD.js";import"./result-card-CR6ZJj-u.js";import"./input-CnPVHnSS.js";import"./alert-DmPeCFP9.js";import"./skeleton-Tq2I7sTs.js";import"./empty-state-BXn8dCsG.js";import"./sticky-action-bar-B48YK0mA.js";import"./network-error-Bi-14o0K.js";import"./pii-mask-DzPhrbeW.js";import"./tabs-CKgSLarI.js";import"./checkbox-tyWI5K1o.js";import"./radio-group-BvCcC-mr.js";import"./select-l-h8_a0d.js";import"./sheet-4EsOYAOn.js";import"./dialog-DFelSSQb.js";import"./table-D7rfBOnA.js";import"./dropdown-menu-CM6ZlXGJ.js";import"./screening-form-B1OMbl68.js";import{O as r}from"./ocr-scan-BwHUUK6m.js";import"./pdpa-gate-Bkzz4uPW.js";import"./processing-view-BnlUVuiu.js";import"./candidate-picker-DChtDuIV.js";import"./disposition-zone-C5pZKOx3.js";import"./resume-banner-To8esUl-.js";import"./history-view-BUtlUSnj.js";import"./auth-states-DSGRmC7B.js";import{T as le,P as de}from"./specimen-docs-CTeWDzEZ.js";import{L as a}from"./_shell-yRg9P5Qt.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./createLucideIcon-q2xymCcu.js";import"./circle-check-CinDCBxF.js";import"./triangle-alert-CFv-IGbZ.js";import"./wifi-off-WBlfOpX_.js";import"./info-xmaNSMqE.js";import"./x-BRWzi90o.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./state-panel-AwrGFuBi.js";import"./rotate-ccw-B69hVR-Z.js";import"./check-D3fQhiZu.js";import"./user-search-Cw05bjCz.js";import"./globe-CacBOxks.js";import"./shield-check-Bp-ZJ52o.js";import"./external-link-DE-9q9oM.js";import"./history-CMuEQWGh.js";import"./search-BvLNQAdK.js";import"./clipboard-list-JLwa9ABu.js";import"./log-out-_X09NQjM.js";const me=[{label:"เลขหนังสือเดินทาง",value:"AB 1234567"},{label:"ชื่อ-นามสกุล",value:"SOMCHAI JAIDEE"},{label:"สัญชาติ",value:"ไทย (THA)"},{label:"วันเกิด",value:"1 ม.ค. 2530"}],ur={title:"Screens/สแกนบัตร",parameters:{layout:"fullscreen",viewport:{defaultViewport:"liff"},docs:{description:{component:"หน้าสแกนบัตรช่วยกรอกฟอร์ม: เลือกชนิดบัตร+ถ่าย (capture), ไฟล์อัปโหลดผิด (inline), ยืนยันภาพก่อนสแกน (preview), กำลังสแกน, สำเร็จ, ไม่แน่ใจบางช่อง, อ่านไม่สำเร็จ, กล้องถูกปฏิเสธ, ไม่มีกล้อง"}}}},l={render:()=>{const[o,t]=y.useState("thai");return e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"capture",docType:o,onDocTypeChange:t,onCapture:()=>{},onUpload:()=>{},onManualEntry:()=>{}})})}},n={render:()=>{const[o,t]=y.useState("passport");return e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"capture",docType:o,onDocTypeChange:t,onCapture:()=>{},onUpload:()=>{},onManualEntry:()=>{}})})}},s={render:()=>{const[o,t]=y.useState("thai");return e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"capture",docType:o,onDocTypeChange:t,onCapture:()=>{},onUpload:()=>{},onManualEntry:()=>{},uploadError:"ไฟล์ใหญ่เกิน 10MB — เลือกภาพที่เล็กกว่า หรือถ่ายใหม่"})})}},c={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"preview",previewSrc:le,onRetake:()=>{},onConfirmPreview:()=>{}})})},d={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"preview",docType:"passport",previewSrc:de,onRetake:()=>{},onConfirmPreview:()=>{}})})},m={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"loading"})})},u={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"success"})})},p={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"success",fields:me})})},f={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"low-confidence",onManualEntry:()=>{}})})},i={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"ocr-failed",onRetake:()=>{},onManualEntry:()=>{}})})},S={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"camera-denied",onManualEntry:()=>{}})})},T={render:()=>e.jsx(a,{pageTitle:"สแกนบัตร",onBack:()=>{},children:e.jsx(r,{state:"no-camera",onManualEntry:()=>{}})})};var h,g,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [docType, setDocType] = useState<OcrDocType>("thai");
    return <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
        <OcrScan state="capture" docType={docType} onDocTypeChange={setDocType} onCapture={() => {}} onUpload={() => {}} onManualEntry={() => {}} />
      </LiffShell>;
  }
}`,...(C=(g=l.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var E,L,k,w,x;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [docType, setDocType] = useState<OcrDocType>("passport");
    return <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
        <OcrScan state="capture" docType={docType} onDocTypeChange={setDocType} onCapture={() => {}} onUpload={() => {}} onManualEntry={() => {}} />
      </LiffShell>;
  }
}`,...(k=(L=n.parameters)==null?void 0:L.docs)==null?void 0:k.source},description:{story:"Capture entry defaulting to พาสปอร์ต — shows the passport data-page placeholder (MRZ band) without toggling.",...(x=(w=n.parameters)==null?void 0:w.docs)==null?void 0:x.description}}};var B,P,j,O,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [docType, setDocType] = useState<OcrDocType>("thai");
    return <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
        <OcrScan state="capture" docType={docType} onDocTypeChange={setDocType} onCapture={() => {}} onUpload={() => {}} onManualEntry={() => {}} uploadError="ไฟล์ใหญ่เกิน 10MB — เลือกภาพที่เล็กกว่า หรือถ่ายใหม่" />
      </LiffShell>;
  }
}`,...(j=(P=s.parameters)==null?void 0:P.docs)==null?void 0:j.source},description:{story:"Bad upload (wrong format / >10MB) — inline error under the dropzone, capture stays put (non-blocking).",...(v=(O=s.parameters)==null?void 0:O.docs)==null?void 0:v.description}}};var D,M,R,I,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="preview" previewSrc={THAI_ID_SPECIMEN} onRetake={() => {}} onConfirmPreview={() => {}} />
    </LiffShell>
}`,...(R=(M=c.parameters)==null?void 0:M.docs)==null?void 0:R.source},description:{story:"Review-before-scan step (spec §2 flow: capture → preview → autofill). Shows a captured specimen (ตัวอย่าง — not a real document).",...(A=(I=c.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var _,b,U;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="preview" docType="passport" previewSrc={PASSPORT_SPECIMEN} onRetake={() => {}} onConfirmPreview={() => {}} />
    </LiffShell>
}`,...(U=(b=d.parameters)==null?void 0:b.docs)==null?void 0:U.source}}};var N,H,F;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="loading" />
    </LiffShell>
}`,...(F=(H=m.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var z,J,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="success" />
    </LiffShell>
}`,...(V=(J=u.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var Z,q,G,K,Q;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="success" fields={PASSPORT_FIELDS} />
    </LiffShell>
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Success with passport fields — verifies the summary renders the passport field set (no. + nationality).",...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};var W,X,Y;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="low-confidence" onManualEntry={() => {}} />
    </LiffShell>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,re,ae,oe;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="ocr-failed" onRetake={() => {}} onManualEntry={() => {}} />
    </LiffShell>
}`,...(re=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"Hard OCR failure (blur / glare / timeout) — unreadable, distinct from LowConfidence. Retake or type.",...(oe=(ae=i.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var te,ne,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="camera-denied" onManualEntry={() => {}} />
    </LiffShell>
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ce,pe,ie;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <LiffShell pageTitle="สแกนบัตร" onBack={() => {}}>
      <OcrScan state="no-camera" onManualEntry={() => {}} />
    </LiffShell>
}`,...(ie=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ie.source}}};const fr=["Capture","CapturePassport","UploadError","Preview","PreviewPassport","Loading","Success","SuccessPassport","LowConfidence","OcrFailed","CameraDenied","NoCamera"];export{S as CameraDenied,l as Capture,n as CapturePassport,m as Loading,f as LowConfidence,T as NoCamera,i as OcrFailed,c as Preview,d as PreviewPassport,u as Success,p as SuccessPassport,s as UploadError,fr as __namedExportsOrder,ur as default};
