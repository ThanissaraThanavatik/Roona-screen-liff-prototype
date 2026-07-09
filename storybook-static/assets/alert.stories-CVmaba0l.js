import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{A as a,D as Vr,Q as t}from"./alert-DmPeCFP9.js";import{B as n}from"./button-Cj4DMzd2.js";import{R as w}from"./rotate-ccw-B69hVR-Z.js";import"./cn-BLSKlp9E.js";import"./wifi-off-WBlfOpX_.js";import"./createLucideIcon-q2xymCcu.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./triangle-alert-CFv-IGbZ.js";import"./circle-check-CinDCBxF.js";import"./info-xmaNSMqE.js";import"./x-BRWzi90o.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./index-EXTQMK5R.js";const ne={title:"Components/Alerts",component:a,parameters:{layout:"padded",docs:{description:{component:"Inline feedback (info / success / warning / error) plus the Quota Strip and Disposition Banner variants. Every state pairs an icon + text — never color alone. `error` is assertive (role=alert); the rest are polite (role=status). Error copy follows What → Why → How."}}}},e=({children:Tr})=>r.jsx("div",{style:{maxWidth:380},children:Tr}),s={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"info",children:"ระบบกำลังอัปเดตรายชื่อ — ผลการตรวจอาจช้ากว่าปกติเล็กน้อย"})})},o={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"success",children:"บันทึกการตั้งค่าเรียบร้อยแล้ว"})})},i={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"warning",children:"รายชื่อชุดนี้อัปเดตล่าสุดเกิน 24 ชั่วโมง — ตรวจต่อได้ แต่โปรดทราบ"})})},c={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",children:"เกิดข้อผิดพลาด ไม่สามารถทำรายการได้"})})},d={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",title:"สร้าง Evidence ไม่สำเร็จ",action:r.jsx(n,{variant:"secondary",size:"sm",leftIcon:w,children:"ลองอีกครั้ง"}),children:"ระบบสร้างไฟล์หลักฐานไม่สำเร็จ ข้อมูลการตรวจถูกบันทึกแล้ว — ลองสร้างไฟล์ใหม่อีกครั้ง"})})},m={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"info",onDismiss:()=>{},children:"เปิดใช้งานการแจ้งเตือนในแอปแล้ว"})})},l={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",children:"กรุณากรอกชื่อและนามสกุลให้ครบก่อนกดตรวจ"})})},u={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",title:"โหลดข้อมูลไม่สำเร็จ",action:r.jsx(n,{variant:"secondary",size:"sm",leftIcon:w,children:"ลองอีกครั้ง"}),children:"การเชื่อมต่อขัดข้องชั่วคราว"})})},p={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"offline",children:"ออฟไลน์อยู่ — จะเชื่อมต่อใหม่ให้อัตโนมัติเมื่อกลับมาออนไลน์"})})},v={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",title:"ตัดชำระเงินไม่สำเร็จ",action:r.jsx(n,{variant:"secondary",size:"sm",children:"อัปเดตวิธีชำระเงิน"}),children:"ระบบจะลองตัดเงินอีกครั้งใน 3 วัน หากยังไม่สำเร็จบัญชีจะถูกจำกัดเป็นอ่านอย่างเดียว"})})},h={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",title:"สร้างร้านไม่สำเร็จ",action:r.jsx(n,{variant:"secondary",size:"sm",leftIcon:w,children:"ลองอีกครั้ง"}),children:"อนุมัติแล้วแต่สร้างบัญชีร้านไม่สำเร็จ — กดลองใหม่ได้ ระบบจะไม่สร้างซ้ำ"})})},x={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"warning",title:"ข้อมูลถูกแก้ไขโดยผู้ดูแลคนอื่น",action:r.jsx(n,{variant:"secondary",size:"sm",children:"โหลดใหม่"}),children:"โปรดโหลดข้อมูลล่าสุดก่อนทำรายการต่อ"})})},j={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",children:"เปิดเอกสารแนบไม่ได้ — ลองดาวน์โหลดไฟล์เพื่อเปิดดูแทน"})})},g={render:()=>r.jsx(e,{children:r.jsx(a,{variant:"error",title:"ระบบยังไม่พร้อมให้ตรวจ",children:"ฐานข้อมูลรายชื่อยังไม่พร้อมใช้งาน ระบบแจ้งผู้ดูแลแล้ว — โปรดลองอีกครั้งภายหลัง"})})},F={render:()=>r.jsx(e,{children:r.jsx(t,{state:"ok",used:200,limit:500,concurrent:2,concurrentLimit:5,resetLabel:"รีเซ็ต 1 ส.ค."})})},A={render:()=>r.jsx(e,{children:r.jsx(t,{state:"warning",used:460,limit:500,concurrent:4,concurrentLimit:5,hint:"แจ้งเจ้าของ / เติมสิทธิ์"})})},S={render:()=>r.jsx(e,{children:r.jsx(t,{state:"overage",used:540,limit:500,concurrent:2,concurrentLimit:5,hint:"คิดเพิ่มต่อรายการ (เจ้าของ)"})})},f={render:()=>r.jsx(e,{children:r.jsx(t,{state:"overage-cap",used:500,limit:500,concurrent:5,concurrentLimit:5,hint:"อัปเกรดแพ็กเพื่อตรวจต่อ"})})},Q={render:()=>r.jsx(e,{children:r.jsx(t,{statusPill:!0,state:"warning",used:188,limit:200,hint:"รีเซ็ต 1 ส.ค."})})},y={render:()=>r.jsx(e,{children:r.jsx(t,{statusPill:!0,state:"overage",used:212,limit:200,cap:260,hint:"สรุปในบิลถัดไป"})})},D={render:()=>r.jsx(e,{children:r.jsx(t,{statusPill:!0,state:"overage-cap",used:260,limit:200,cap:260,hint:"ปรับเพดาน/อัปเกรด"})})},B={render:()=>r.jsx(e,{children:r.jsx(Vr,{children:"ต้องปิดเคสนี้ก่อนทำรายการอื่น"})})};var O,E,L;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="info">ระบบกำลังอัปเดตรายชื่อ — ผลการตรวจอาจช้ากว่าปกติเล็กน้อย</Alert>
    </Frame>
}`,...(L=(E=s.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var P,C,I;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="success">บันทึกการตั้งค่าเรียบร้อยแล้ว</Alert>
    </Frame>
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var z,W,k;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="warning">รายชื่อชุดนี้อัปเดตล่าสุดเกิน 24 ชั่วโมง — ตรวจต่อได้ แต่โปรดทราบ</Alert>
    </Frame>
}`,...(k=(W=i.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var R,b,N;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error">เกิดข้อผิดพลาด ไม่สามารถทำรายการได้</Alert>
    </Frame>
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var T,V,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error" title="สร้าง Evidence ไม่สำเร็จ" action={<Button variant="secondary" size="sm" leftIcon={RotateCcw}>
            ลองอีกครั้ง
          </Button>}>
        ระบบสร้างไฟล์หลักฐานไม่สำเร็จ ข้อมูลการตรวจถูกบันทึกแล้ว — ลองสร้างไฟล์ใหม่อีกครั้ง
      </Alert>
    </Frame>
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var H,q,G;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="info" onDismiss={() => {}}>
        เปิดใช้งานการแจ้งเตือนในแอปแล้ว
      </Alert>
    </Frame>
}`,...(G=(q=m.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,M;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error">กรุณากรอกชื่อและนามสกุลให้ครบก่อนกดตรวจ</Alert>
    </Frame>
}`,...(M=(K=l.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error" title="โหลดข้อมูลไม่สำเร็จ" action={<Button variant="secondary" size="sm" leftIcon={RotateCcw}>
            ลองอีกครั้ง
          </Button>}>
        การเชื่อมต่อขัดข้องชั่วคราว
      </Alert>
    </Frame>
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="offline">ออฟไลน์อยู่ — จะเชื่อมต่อใหม่ให้อัตโนมัติเมื่อกลับมาออนไลน์</Alert>
    </Frame>
}`,...(rr=($=p.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,ar,tr;v.parameters={...v.parameters,docs:{...(er=v.parameters)==null?void 0:er.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error" title="ตัดชำระเงินไม่สำเร็จ" action={<Button variant="secondary" size="sm">
            อัปเดตวิธีชำระเงิน
          </Button>}>
        ระบบจะลองตัดเงินอีกครั้งใน 3 วัน หากยังไม่สำเร็จบัญชีจะถูกจำกัดเป็นอ่านอย่างเดียว
      </Alert>
    </Frame>
}`,...(tr=(ar=v.parameters)==null?void 0:ar.docs)==null?void 0:tr.source}}};var nr,sr,or;h.parameters={...h.parameters,docs:{...(nr=h.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error" title="สร้างร้านไม่สำเร็จ" action={<Button variant="secondary" size="sm" leftIcon={RotateCcw}>
            ลองอีกครั้ง
          </Button>}>
        อนุมัติแล้วแต่สร้างบัญชีร้านไม่สำเร็จ — กดลองใหม่ได้ ระบบจะไม่สร้างซ้ำ
      </Alert>
    </Frame>
}`,...(or=(sr=h.parameters)==null?void 0:sr.docs)==null?void 0:or.source}}};var ir,cr,dr;x.parameters={...x.parameters,docs:{...(ir=x.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="warning" title="ข้อมูลถูกแก้ไขโดยผู้ดูแลคนอื่น" action={<Button variant="secondary" size="sm">
            โหลดใหม่
          </Button>}>
        โปรดโหลดข้อมูลล่าสุดก่อนทำรายการต่อ
      </Alert>
    </Frame>
}`,...(dr=(cr=x.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var mr,lr,ur;j.parameters={...j.parameters,docs:{...(mr=j.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error">เปิดเอกสารแนบไม่ได้ — ลองดาวน์โหลดไฟล์เพื่อเปิดดูแทน</Alert>
    </Frame>
}`,...(ur=(lr=j.parameters)==null?void 0:lr.docs)==null?void 0:ur.source}}};var pr,vr,hr;g.parameters={...g.parameters,docs:{...(pr=g.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  render: () => <Frame>
      <Alert variant="error" title="ระบบยังไม่พร้อมให้ตรวจ">
        ฐานข้อมูลรายชื่อยังไม่พร้อมใช้งาน ระบบแจ้งผู้ดูแลแล้ว — โปรดลองอีกครั้งภายหลัง
      </Alert>
    </Frame>
}`,...(hr=(vr=g.parameters)==null?void 0:vr.docs)==null?void 0:hr.source}}};var xr,jr,gr;F.parameters={...F.parameters,docs:{...(xr=F.parameters)==null?void 0:xr.docs,source:{originalSource:`{
  render: () => <Frame>
      <QuotaStrip state="ok" used={200} limit={500} concurrent={2} concurrentLimit={5} resetLabel="รีเซ็ต 1 ส.ค." />
    </Frame>
}`,...(gr=(jr=F.parameters)==null?void 0:jr.docs)==null?void 0:gr.source}}};var Fr,Ar,Sr;A.parameters={...A.parameters,docs:{...(Fr=A.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  render: () => <Frame>
      <QuotaStrip state="warning" used={460} limit={500} concurrent={4} concurrentLimit={5} hint="แจ้งเจ้าของ / เติมสิทธิ์" />
    </Frame>
}`,...(Sr=(Ar=A.parameters)==null?void 0:Ar.docs)==null?void 0:Sr.source}}};var fr,Qr,yr;S.parameters={...S.parameters,docs:{...(fr=S.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  render: () => <Frame>
      <QuotaStrip state="overage" used={540} limit={500} concurrent={2} concurrentLimit={5} hint="คิดเพิ่มต่อรายการ (เจ้าของ)" />
    </Frame>
}`,...(yr=(Qr=S.parameters)==null?void 0:Qr.docs)==null?void 0:yr.source}}};var Dr,Br,wr;f.parameters={...f.parameters,docs:{...(Dr=f.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  render: () => <Frame>
      <QuotaStrip state="overage-cap" used={500} limit={500} concurrent={5} concurrentLimit={5} hint="อัปเกรดแพ็กเพื่อตรวจต่อ" />
    </Frame>
}`,...(wr=(Br=f.parameters)==null?void 0:Br.docs)==null?void 0:wr.source}}};var Or,Er,Lr;Q.parameters={...Q.parameters,docs:{...(Or=Q.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  render: () => <Frame>
      <QuotaStrip statusPill state="warning" used={188} limit={200} hint="รีเซ็ต 1 ส.ค." />
    </Frame>
}`,...(Lr=(Er=Q.parameters)==null?void 0:Er.docs)==null?void 0:Lr.source}}};var Pr,Cr,Ir;y.parameters={...y.parameters,docs:{...(Pr=y.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  render: () => <Frame>
      <QuotaStrip statusPill state="overage" used={212} limit={200} cap={260} hint="สรุปในบิลถัดไป" />
    </Frame>
}`,...(Ir=(Cr=y.parameters)==null?void 0:Cr.docs)==null?void 0:Ir.source}}};var zr,Wr,kr;D.parameters={...D.parameters,docs:{...(zr=D.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  render: () => <Frame>
      <QuotaStrip statusPill state="overage-cap" used={260} limit={200} cap={260} hint="ปรับเพดาน/อัปเกรด" />
    </Frame>
}`,...(kr=(Wr=D.parameters)==null?void 0:Wr.docs)==null?void 0:kr.source}}};var Rr,br,Nr;B.parameters={...B.parameters,docs:{...(Rr=B.parameters)==null?void 0:Rr.docs,source:{originalSource:`{
  render: () => <Frame>
      <DispositionBanner>ต้องปิดเคสนี้ก่อนทำรายการอื่น</DispositionBanner>
    </Frame>
}`,...(Nr=(br=B.parameters)==null?void 0:br.docs)==null?void 0:Nr.source}}};const se=["InfoAlert","SuccessAlert","WarningAlert","ErrorAlert","WithTitleAndAction","Dismissible","ValidationError","NetworkInline","OfflineBanner","PaymentFailed","ProvisionFail","Conflict","DocFail","ListEmpty","QuotaOk","QuotaWarning","QuotaOverage","QuotaOverageCap","QuotaDetailedStatusPill","QuotaDetailedOverage","QuotaDetailedOverageCap","Disposition"];export{x as Conflict,m as Dismissible,B as Disposition,j as DocFail,c as ErrorAlert,s as InfoAlert,g as ListEmpty,u as NetworkInline,p as OfflineBanner,v as PaymentFailed,h as ProvisionFail,y as QuotaDetailedOverage,D as QuotaDetailedOverageCap,Q as QuotaDetailedStatusPill,F as QuotaOk,S as QuotaOverage,f as QuotaOverageCap,A as QuotaWarning,o as SuccessAlert,l as ValidationError,i as WarningAlert,d as WithTitleAndAction,se as __namedExportsOrder,ne as default};
