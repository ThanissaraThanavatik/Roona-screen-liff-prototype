import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as l}from"./button-Cj4DMzd2.js";import{B as C}from"./badge-DR9D7Bxf.js";import{C as ye}from"./card-CUv2tkzD.js";import"./result-card-CR6ZJj-u.js";import"./input-CnPVHnSS.js";import{Q as j,A as Ce}from"./alert-DmPeCFP9.js";import{S as r}from"./skeleton-Tq2I7sTs.js";import{E as Ge}from"./empty-state-BXn8dCsG.js";import"./sticky-action-bar-B48YK0mA.js";import"./network-error-Bi-14o0K.js";import{P as Be}from"./pii-mask-DzPhrbeW.js";import"./tabs-CKgSLarI.js";import"./checkbox-tyWI5K1o.js";import"./radio-group-BvCcC-mr.js";import"./select-l-h8_a0d.js";import"./sheet-4EsOYAOn.js";import"./dialog-DFelSSQb.js";import"./table-D7rfBOnA.js";import"./dropdown-menu-CM6ZlXGJ.js";import"./screening-form-B1OMbl68.js";import"./ocr-scan-BwHUUK6m.js";import"./pdpa-gate-Bkzz4uPW.js";import"./processing-view-BnlUVuiu.js";import"./candidate-picker-DChtDuIV.js";import"./disposition-zone-C5pZKOx3.js";import"./resume-banner-To8esUl-.js";import"./history-view-BUtlUSnj.js";import"./auth-states-DSGRmC7B.js";import{c as i}from"./cn-BLSKlp9E.js";import{L as t,S as d,a as Ue}from"./_shell-yRg9P5Qt.js";import{U as c}from"./user-search-Cw05bjCz.js";import{C as Ie}from"./clipboard-list-JLwa9ABu.js";import{c as Me}from"./createLucideIcon-q2xymCcu.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";import"./circle-check-CinDCBxF.js";import"./triangle-alert-CFv-IGbZ.js";import"./wifi-off-WBlfOpX_.js";import"./info-xmaNSMqE.js";import"./x-BRWzi90o.js";import"./ban-DfFj1w-z.js";import"./users-C2qT2esw.js";import"./state-panel-AwrGFuBi.js";import"./rotate-ccw-B69hVR-Z.js";import"./check-D3fQhiZu.js";import"./globe-CacBOxks.js";import"./shield-check-Bp-ZJ52o.js";import"./external-link-DE-9q9oM.js";import"./history-CMuEQWGh.js";import"./search-BvLNQAdK.js";import"./log-out-_X09NQjM.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=Me("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),Xr={title:"Screens/หน้าหลัก",parameters:{layout:"fullscreen",viewport:{defaultViewport:"liff"},docs:{description:{component:"หน้าหลักของพนักงาน: แถบโควตา, ปุ่มตรวจหลัก, และรายการตรวจล่าสุด"}}}},ke=[{id:"r1",name:"สมชาย ใจดี",result:"clear",time:"14:32",by:"พนง. มานะ"},{id:"r2",name:"นภาพร แสงทอง",result:"clear",time:"13:10",by:"พนง. สุดา"},{id:"r3",name:"ปรีชา มั่นคง",result:"hit",time:"11:48",by:"พนง. มานะ"}],Oe=10,Ae=[{id:"o1",name:"สมชาย ใจดี",result:"clear",time:"14:32",by:"พนง. มานะ"},{id:"o2",name:"นภาพร แสงทอง",result:"clear",time:"13:10",by:"พนง. สุดา"},{id:"o3",name:"ปรีชา มั่นคง",result:"hit",time:"11:48",by:"พนง. มานะ"},{id:"o4",name:"วิไล ทองสุข",result:"clear",time:"11:20",by:"คุณวิภา"}],_e=Array.from({length:40},(o,s)=>({id:`m${s}`,name:`ผู้รับการตรวจ คนที่ ${s+1}`,result:s%5===0?"hit":"clear",time:`${String(9+s%8).padStart(2,"0")}:${String(s*7%60).padStart(2,"0")}`}));function ze({result:o}){return o==="hit"?e.jsx(C,{variant:"hit",children:"พบ"}):e.jsx(C,{variant:"success",children:"ไม่พบ"})}function a({rows:o=ke,heading:s="ตรวจล่าสุด",showChecker:Ee=!1,onSeeAll:Re}){const He=o.slice(0,Oe);return e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("h2",{className:"text-sm font-semibold text-[var(--color-ink)]",children:s}),e.jsxs("button",{type:"button",onClick:Re,className:"inline-flex items-center gap-0.5 rounded px-1 text-sm font-semibold text-[var(--color-primary-700)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]",children:["ดูทั้งหมด",e.jsx(Te,{"aria-hidden":"true",size:16})]})]}),He.map(n=>e.jsxs(ye,{className:"flex items-center justify-between gap-3 p-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx(Be,{value:n.name,className:"line-clamp-2 break-words font-medium"}),Ee&&n.by&&e.jsxs("span",{className:"mt-0.5 block text-xs text-[var(--color-ink-2)]",children:["โดย ",n.by]})]}),e.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[e.jsx(ze,{result:n.result}),e.jsx("span",{className:"text-xs text-[var(--color-ink-2)]",children:n.time})]})]},n.id))]})}const L={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณสมชาย",bannerGradient:!0,hero:e.jsx(j,{state:"ok",used:200,limit:500,concurrent:1,concurrentLimit:3,resetLabel:"รีเซ็ต 1 ส.ค."}),heroCta:e.jsx(l,{size:"block",leftIcon:c,className:"shadow-elevation-xl hover:shadow-elevation-2xl",children:"ตรวจ"}),children:e.jsx(a,{})})},v={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณสมชาย",bannerGradient:!0,hero:e.jsx(j,{state:"ok",used:0,limit:500,concurrent:1,concurrentLimit:3,resetLabel:"รีเซ็ต 1 ส.ค."}),heroCta:e.jsx(l,{size:"block",leftIcon:c,className:"shadow-elevation-xl hover:shadow-elevation-2xl",children:"ตรวจ"}),children:e.jsx(Ge,{icon:Ie,title:"ยังไม่มีรายการตรวจ",action:e.jsx(l,{leftIcon:c,children:"ตรวจ"}),children:"เมื่อคุณเริ่มตรวจชื่อ ประวัติและหลักฐานจะแสดงที่นี่"})})},g={render:()=>e.jsxs(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณสมชาย",bannerGradient:!0,hero:e.jsx(j,{state:"warning",used:460,limit:500,concurrent:2,concurrentLimit:3,hint:"แจ้งเจ้าของ / เติมสิทธิ์"}),heroCta:e.jsx(l,{size:"block",leftIcon:c,className:"shadow-elevation-xl hover:shadow-elevation-2xl",children:"ตรวจ"}),children:[e.jsx(Ce,{variant:"warning",title:"โควตาเหลือน้อย (12)",children:"ใกล้ครบโควตาเดือนนี้ — แจ้งเจ้าของร้านให้เติมหรืออัปเกรดแพ็ก"}),e.jsx(a,{})]})},y={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณสมชาย",bannerGradient:!0,hero:e.jsx(j,{state:"overage-cap",used:500,limit:500,concurrent:2,concurrentLimit:3,hint:"ต้องอัปเกรด/เติมก่อน"}),heroCta:e.jsx(l,{size:"block",leftIcon:c,disabled:!0,className:"shadow-elevation-xl hover:shadow-elevation-2xl",children:"ตรวจ"}),children:e.jsx(Ce,{variant:"error",title:"โควตาหมด",children:"เดือนนี้ใช้ครบโควตาแล้ว — แจ้งเจ้าของร้านให้เติม/อัปเกรดก่อนตรวจต่อ"})})},m=e.jsx(j,{state:"ok",used:200,limit:500,concurrent:1,concurrentLimit:3,resetLabel:"รีเซ็ต 1 ส.ค."}),w=e.jsx(l,{size:"block",leftIcon:c,className:"shadow-elevation-xl hover:shadow-elevation-2xl",children:"ตรวจ"}),Qe=e.jsxs("div",{"aria-busy":"true","aria-label":"กำลังโหลดโควตา",className:"rounded-lg border border-white/25 px-3.5 py-3",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between gap-2.5",children:[e.jsx(r,{className:i("h-4 w-24",d)}),e.jsx(r,{className:i("h-6 w-16 rounded-full",d)})]}),e.jsx("div",{className:"mb-2.5",children:e.jsx(r,{className:i("h-9 w-28",Ue)})}),e.jsx(r,{className:i("h-2 w-full rounded-full",d)}),e.jsxs("div",{className:"mt-2 flex items-center justify-between gap-2",children:[e.jsx(r,{className:i("h-3 w-20",d)}),e.jsx(r,{className:i("h-3 w-16",d)})]})]}),Pe=e.jsx(r,{className:"h-11 w-full rounded-md"});function Xe(){return e.jsxs("div",{className:"space-y-2","aria-busy":"true","aria-label":"กำลังโหลดรายการตรวจล่าสุด",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(r,{className:"h-4 w-24"}),e.jsx(r,{className:"h-4 w-16"})]}),[0,1,2].map(o=>e.jsxs(ye,{className:"flex items-center justify-between gap-3 p-3",children:[e.jsx(r,{className:"h-4 w-32"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{className:"h-6 w-14 rounded-full"}),e.jsx(r,{className:"h-3 w-10"})]})]},o))]})}const h={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณวิภา",role:"owner",bannerGradient:!0,hero:m,heroCta:w,onManageShop:()=>alert("เปิด Merchant Portal (เว็บ) — จัดการร้าน"),children:e.jsx(a,{heading:"ล่าสุด (ทั้งร้าน)",showChecker:!0,rows:Ae})})},p={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณสมชาย",bannerGradient:!0,hero:m,heroCta:w,children:e.jsx(a,{rows:_e})})},u={render:()=>e.jsx(t,{shopName:"ห้างทองแม่ทองสุกเยาวราชสาขาใหญ่พลาซ่า",userName:"คุณกิตติศักดิ์ เจริญรุ่งเรืองทรัพย์เจริญพงศ์",bannerGradient:!0,hero:m,heroCta:w,children:e.jsx(a,{rows:[{id:"l1",name:"ประเสริฐศักดิ์ วัฒนโรจน์เจริญพงศ์ไพบูลย์รุ่งเรือง",result:"hit",time:"15:07"},{id:"l2",name:"อัครเดชานุวัฒน์ ศรีสุวรรณวงศ์ไพโรจน์กุล",result:"clear",time:"14:55"},...ke]})})},f={render:()=>e.jsx(t,{identityState:"loading",bannerGradient:!0,hero:Qe,heroCta:Pe,children:e.jsx(Xe,{})})},x={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",identityState:"error",bannerGradient:!0,hero:m,heroCta:w,children:e.jsx(a,{})})},N={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณสมชาย",connectivity:"offline",bannerGradient:!0,hero:m,children:e.jsx(a,{})})},S={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",userName:"คุณสมชาย",envLabel:"UAT",bannerGradient:!0,hero:m,heroCta:w,children:e.jsx(a,{})})},b={render:()=>e.jsx(t,{shopName:"ร้านทองเฮงเฮง",pageTitle:"ผลการตรวจ",onBack:()=>{},children:e.jsx(a,{})})};var k,E,R;L.parameters={...L.parameters,docs:{...(k=L.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณสมชาย" bannerGradient hero={<QuotaStrip state="ok" used={200} limit={500} concurrent={1} concurrentLimit={3} resetLabel="รีเซ็ต 1 ส.ค." />} heroCta={<Button size="block" leftIcon={UserSearch} className="shadow-elevation-xl hover:shadow-elevation-2xl">
          ตรวจ
        </Button>}>
      <RecentList />
    </LiffShell>
}`,...(R=(E=L.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var H,G,B;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณสมชาย" bannerGradient hero={<QuotaStrip state="ok" used={0} limit={500} concurrent={1} concurrentLimit={3} resetLabel="รีเซ็ต 1 ส.ค." />} heroCta={<Button size="block" leftIcon={UserSearch} className="shadow-elevation-xl hover:shadow-elevation-2xl">
          ตรวจ
        </Button>}>
      <EmptyState icon={ClipboardList} title="ยังไม่มีรายการตรวจ" action={<Button leftIcon={UserSearch}>ตรวจ</Button>}>
        เมื่อคุณเริ่มตรวจชื่อ ประวัติและหลักฐานจะแสดงที่นี่
      </EmptyState>
    </LiffShell>
}`,...(B=(G=v.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var U,I,M;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณสมชาย" bannerGradient hero={<QuotaStrip state="warning" used={460} limit={500} concurrent={2} concurrentLimit={3} hint="แจ้งเจ้าของ / เติมสิทธิ์" />} heroCta={<Button size="block" leftIcon={UserSearch} className="shadow-elevation-xl hover:shadow-elevation-2xl">
          ตรวจ
        </Button>}>
      <Alert variant="warning" title="โควตาเหลือน้อย (12)">
        ใกล้ครบโควตาเดือนนี้ — แจ้งเจ้าของร้านให้เติมหรืออัปเกรดแพ็ก
      </Alert>
      <RecentList />
    </LiffShell>
}`,...(M=(I=g.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,O,A;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณสมชาย" bannerGradient hero={<QuotaStrip state="overage-cap" used={500} limit={500} concurrent={2} concurrentLimit={3} hint="ต้องอัปเกรด/เติมก่อน" />} heroCta={<Button size="block" leftIcon={UserSearch} disabled className="shadow-elevation-xl hover:shadow-elevation-2xl">
          ตรวจ
        </Button>}>
      <Alert variant="error" title="โควตาหมด">
        เดือนนี้ใช้ครบโควตาแล้ว — แจ้งเจ้าของร้านให้เติม/อัปเกรดก่อนตรวจต่อ
      </Alert>
    </LiffShell>
}`,...(A=(O=y.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var _,z,Q,P,X;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณวิภา" role="owner" bannerGradient hero={HomeHero} heroCta={HomeCta}
  // "จัดการร้าน" เป็น deep-link ออกไป Merchant Portal (เว็บ) — ไม่ใช่หน้าใน LIFF
  // (SRS §3.B · MERCH-SET-01; grill-log-merchant-portal M-UX-09 "portal manage-only").
  // Runtime จริงเรียก liff.openWindow; ใน story จำลองด้วย alert (pattern เดียวกับ history-view.stories).
  onManageShop={() => alert("เปิด Merchant Portal (เว็บ) — จัดการร้าน")}>
      <RecentList heading="ล่าสุด (ทั้งร้าน)" showChecker rows={OWNER_RECENT} />
    </LiffShell>
}`,...(Q=(z=h.parameters)==null?void 0:z.docs)==null?void 0:Q.source},description:{story:`เจ้าของร้าน — role chip = "เจ้าของร้าน" + เมนูบัญชีมี "จัดการร้าน" (role-aware; deep-link ออก Merchant Portal).
รายการล่าสุด = ทั้งร้าน ("ล่าสุด (ทั้งร้าน)") + โชว์ผู้ตรวจต่อแถว (spec §6 · wireframe line 539).`,...(X=(P=h.parameters)==null?void 0:P.docs)==null?void 0:X.description}}};var $,F,W,q,D;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณสมชาย" bannerGradient hero={HomeHero} heroCta={HomeCta}>
      <RecentList rows={MANY_RECENT} />
    </LiffShell>
}`,...(W=(F=p.parameters)==null?void 0:F.docs)==null?void 0:W.source},description:{story:`รายการเยอะ (40 record) — พิสูจน์ progressive disclosure: list ยังโชว์แค่ 10 ล่าสุด + ลิงก์ "ดูทั้งหมด"
(spec §SCR-HOME ข้อ 2). หน้าหลักไม่ยืดยาวไม่รู้จบ — ปริมาณจริงไปจัดการที่ SCR-HIST.`,...(D=(q=p.parameters)==null?void 0:q.docs)==null?void 0:D.description}}};var K,Y,V,J,Z;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ห้างทองแม่ทองสุกเยาวราชสาขาใหญ่พลาซ่า" userName="คุณกิตติศักดิ์ เจริญรุ่งเรืองทรัพย์เจริญพงศ์" bannerGradient hero={HomeHero} heroCta={HomeCta}>
      <RecentList rows={[{
      id: "l1",
      name: "ประเสริฐศักดิ์ วัฒนโรจน์เจริญพงศ์ไพบูลย์รุ่งเรือง",
      result: "hit",
      time: "15:07"
    }, {
      id: "l2",
      name: "อัครเดชานุวัฒน์ ศรีสุวรรณวงศ์ไพโรจน์กุล",
      result: "clear",
      time: "14:55"
    }, ...RECENT]} />
    </LiffShell>
}`,...(V=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:V.source},description:{story:`ชื่อยาวทุกจุด (เคสรวม) — เห็นการตัด 2 บรรทัดครบทั้ง 3 จุดในหน้าเดียว:
 1. ชื่อร้าน — ขยายได้สูงสุด 2 บรรทัดแล้วตัด … (line-clamp-2)
 2. ชื่อพนักงาน/ผู้ตรวจ — inline-flow: ชื่อ wrap เต็มความกว้าง แล้ว "· [role]" ต่อท้ายคำสุดท้าย (เคสชื่อสั้นอยู่บรรทัดเดียว)
 3. ชื่อคนถูกตรวจ (รายการตรวจล่าสุด) — ตัด 2 บรรทัดแล้ว … โดยไม่ดัน badge "พบ/ไม่พบ" + เวลา
avatar/เมนู kebab ไม่ขยับ, layout ไม่ล้นขอบ 390px (UX ข้อ 3).`,...(Z=(J=u.parameters)==null?void 0:J.docs)==null?void 0:Z.description}}};var ee,re,te,ae,se;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <LiffShell identityState="loading" bannerGradient hero={HomeHeroSkeleton} heroCta={HomeCtaSkeleton}>
      <RecentListSkeleton />
    </LiffShell>
}`,...(te=(re=f.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:`SCR-HOME state=loading — full-page skeleton (ตรงกับ screen-state-matrix SCR-HOME-01 + spec "skeleton ทั้งหน้า").
ทุก region ผูกกับ atomic post-login load จึงเป็น skeleton ทั้งหมด: identity (หัว), quota, ปุ่ม, หัวข้อ, รายการ;
คง static chrome (banner + เมนู) ไว้ตามหลัก "skeleton ห้ามจอดำ" · mirror layout จริงกัน CLS.
ไม่ส่ง shopName เพื่อพิสูจน์ว่าหัว render ตอน cold start (identityState="loading").`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var oe,ne,ie,le,ce;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" identityState="error" bannerGradient hero={HomeHero} heroCta={HomeCta}>
      <RecentList />
    </LiffShell>
}`,...(ie=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"โหลดข้อมูลบัญชีไม่สำเร็จ — error state + ปุ่มลองใหม่ (ไม่ใช่ skeleton ค้าง, UX เคส F).",...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.description}}};var me,de,he,pe,ue;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณสมชาย" connectivity="offline" bannerGradient hero={HomeHero}>
      <RecentList />
    </LiffShell>
}`,...(he=(de=N.parameters)==null?void 0:de.docs)==null?void 0:he.source},description:{story:"เน็ตหลุด — แถบแยกใต้ header ไม่รบกวน identity row (UX ข้อ 6).",...(ue=(pe=N.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var fe,xe,Ne,Se,be;S.parameters={...S.parameters,docs:{...(fe=S.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" userName="คุณสมชาย" envLabel="UAT" bannerGradient hero={HomeHero} heroCta={HomeCta}>
      <RecentList />
    </LiffShell>
}`,...(Ne=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:Ne.source},description:{story:"โหมดทดสอบ (non-prod) — ริบบิ้นเตือนเหนือ header กันตรวจจริงในเครื่อง test (UX ข้อ 5).",...(be=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:be.description}}};var je,we,Le,ve,ge;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <LiffShell shopName="ร้านทองเฮงเฮง" pageTitle="ผลการตรวจ" onBack={() => {}}>
      <RecentList />
    </LiffShell>
}`,...(Le=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Le.source},description:{story:"หน้า sub-screen — header เป็น [←] + ชื่อหน้า แทน identity (UX ข้อ 1, Nielsen #3).",...(ge=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ge.description}}};const $r=["Default","Empty","QuotaLow","QuotaEmpty","OwnerRole","ManyRecords","LongNames","Loading","IdentityError","Offline","UatBadge","SubScreenHeader"];export{L as Default,v as Empty,x as IdentityError,f as Loading,u as LongNames,p as ManyRecords,N as Offline,h as OwnerRole,y as QuotaEmpty,g as QuotaLow,b as SubScreenHeader,S as UatBadge,$r as __namedExportsOrder,Xr as default};
