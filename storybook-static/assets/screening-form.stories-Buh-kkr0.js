import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DURGLf5P.js";import{S as Z}from"./screening-form-B1OMbl68.js";import{S as te}from"./sheet-4EsOYAOn.js";import{B as g}from"./button-Cj4DMzd2.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./tabs-CKgSLarI.js";import"./input-CnPVHnSS.js";import"./select-l-h8_a0d.js";import"./createLucideIcon-q2xymCcu.js";import"./checkbox-tyWI5K1o.js";import"./check-D3fQhiZu.js";import"./alert-DmPeCFP9.js";import"./wifi-off-WBlfOpX_.js";import"./triangle-alert-CFv-IGbZ.js";import"./circle-check-CinDCBxF.js";import"./info-xmaNSMqE.js";import"./x-BRWzi90o.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./card-CUv2tkzD.js";import"./sticky-action-bar-B48YK0mA.js";import"./user-search-Cw05bjCz.js";import"./index-EXTQMK5R.js";const Ae={title:"Screening/ScreeningForm",component:Z,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"The 3-type screening entry form (ไทย / ต่างชาติ / นิติบุคคล). The ตรวจ button stays disabled until every required field for the active type is filled. Field errors pair <Input invalid> with red Thai error text (aria-describedby) — never color alone. Checksum is a non-blocking amber Alert; type-switch defers to a confirm Sheet."}}}},o={args:{initialType:"thai"}},l={args:{initialType:"thai",initialValues:{firstName:"สมชาย",lastName:"ใจดี",nationalId:"1100700000000"}}},p={args:{initialType:"foreigner",initialValues:{firstName:"JOHN",lastName:"SMITH",passportNo:"A1234567",nationality:"สหรัฐอเมริกา"}}},c={args:{initialType:"entity",initialValues:{companyName:"บริษัท ใจดี จำกัด",performedBy:"สมหญิง กรรมการ"}}},t={args:{initialType:"thai",initialValues:{firstName:"",lastName:"ใจดี"},errorField:"firstName"}},i={args:{initialType:"thai",initialValues:{firstName:"สมชาย",lastName:"ใจดี",nationalId:"1100700000001"},checksumWarning:!0}},n={args:{initialType:"thai",initialValues:{firstName:"สมชาย",lastName:"ใจดี"},quotaRemaining:300,quotaLimit:500,requireAck:!0}},a={args:{initialType:"thai",initialValues:{firstName:"สมชาย",lastName:"ใจดี"},quotaRemaining:0,quotaLimit:500,requireAck:!0}},r={render:()=>{const[$,ee]=d.useState("thai"),[m,s]=d.useState("foreigner");return e.jsxs(e.Fragment,{children:[e.jsx(Z,{initialType:$,initialValues:{firstName:"สมชาย",lastName:"ใจดี"},onRequestTypeChange:u=>s(u)}),e.jsx(te,{open:m!==null,onOpenChange:u=>!u&&s(null),title:"สลับประเภท",footer:e.jsxs(e.Fragment,{children:[e.jsx(g,{size:"block",onClick:()=>{m&&ee(m),s(null)},children:"ยืนยัน"}),e.jsx(g,{variant:"secondary",size:"block",onClick:()=>s(null),children:"ยกเลิก"})]}),children:"การสลับประเภทจะล้างข้อมูลที่กรอกไว้ — ยืนยันหรือไม่"})]})}};var y,h,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    initialType: "thai"
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var N,T,S;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    initialType: "thai",
    initialValues: {
      firstName: "สมชาย",
      lastName: "ใจดี",
      nationalId: "1100700000000"
    }
  }
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,q,b;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    initialType: "foreigner",
    initialValues: {
      firstName: "JOHN",
      lastName: "SMITH",
      passportNo: "A1234567",
      nationality: "สหรัฐอเมริกา"
    }
  }
}`,...(b=(q=p.parameters)==null?void 0:q.docs)==null?void 0:b.source}}};var C,V,x;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    initialType: "entity",
    initialValues: {
      companyName: "บริษัท ใจดี จำกัด",
      performedBy: "สมหญิง กรรมการ"
    }
  }
}`,...(x=(V=c.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var A,R,F,E,j;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    initialType: "thai",
    initialValues: {
      firstName: "",
      lastName: "ใจดี"
    },
    errorField: "firstName"
  }
}`,...(F=(R=t.parameters)==null?void 0:R.docs)==null?void 0:F.source},description:{story:"Required field empty + flagged: red border, red error text, ตรวจ stays disabled.",...(j=(E=t.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var v,w,B,P,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initialType: "thai",
    initialValues: {
      firstName: "สมชาย",
      lastName: "ใจดี",
      nationalId: "1100700000001"
    },
    checksumWarning: true
  }
}`,...(B=(w=i.parameters)==null?void 0:w.docs)==null?void 0:B.source},description:{story:"Non-blocking: เลขบัตร fails the checksum but the user can still ตรวจ.",...(I=(P=i.parameters)==null?void 0:P.docs)==null?void 0:I.description}}};var O,W,L,z,D;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    initialType: "thai",
    initialValues: {
      firstName: "สมชาย",
      lastName: "ใจดี"
    },
    quotaRemaining: 300,
    quotaLimit: 500,
    requireAck: true
  }
}`,...(L=(W=n.parameters)==null?void 0:W.docs)==null?void 0:L.source},description:{story:"Full SCR-FORM screen shape (T1, ADR-0013): optional compact quota row on top\n(`quotaRemaining`/`quotaLimit`) + inline PDPA acknowledgment (`requireAck`).\nตรวจ stays disabled until required fields are filled AND the ack is ticked AND quota > 0.",...(D=(z=n.parameters)==null?void 0:z.docs)==null?void 0:D.description}}};var H,M,Q,J,_;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    initialType: "thai",
    initialValues: {
      firstName: "สมชาย",
      lastName: "ใจดี"
    },
    quotaRemaining: 0,
    quotaLimit: 500,
    requireAck: true
  }
}`,...(Q=(M=a.parameters)==null?void 0:M.docs)==null?void 0:Q.source},description:{story:"quota 0 blocks submit (SCR-FORM-01) — compact quota shows the block + Alert.",...(_=(J=a.parameters)==null?void 0:J.docs)==null?void 0:_.description}}};var G,K,U,X,Y;r.parameters={...r.parameters,docs:{...(G=r.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [type, setType] = useState<ScreeningType>("thai");
    const [pending, setPending] = useState<ScreeningType | null>("foreigner");
    return <>
        <ScreeningForm initialType={type} initialValues={{
        firstName: "สมชาย",
        lastName: "ใจดี"
      }} onRequestTypeChange={next => setPending(next)} />
        <Sheet open={pending !== null} onOpenChange={open => !open && setPending(null)} title="สลับประเภท" footer={<>
              <Button size="block" onClick={() => {
          if (pending) setType(pending);
          setPending(null);
        }}>
                ยืนยัน
              </Button>
              <Button variant="secondary" size="block" onClick={() => setPending(null)}>
                ยกเลิก
              </Button>
            </>}>
          การสลับประเภทจะล้างข้อมูลที่กรอกไว้ — ยืนยันหรือไม่
        </Sheet>
      </>;
  }
}`,...(U=(K=r.parameters)==null?void 0:K.docs)==null?void 0:U.source},description:{story:"Switching type clears entered data — confirm via Sheet before applying.",...(Y=(X=r.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};const Re=["Empty","Thai","Foreigner","Entity","ValidationError","ChecksumWarning","WithQuotaAndConsent","QuotaExhausted","TypeChangeConfirm"];export{i as ChecksumWarning,o as Empty,c as Entity,p as Foreigner,a as QuotaExhausted,l as Thai,r as TypeChangeConfirm,t as ValidationError,n as WithQuotaAndConsent,Re as __namedExportsOrder,Ae as default};
