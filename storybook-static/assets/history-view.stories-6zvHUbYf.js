import{j as A}from"./jsx-runtime-D_zvdyIk.js";import{H as zr}from"./history-view-BUtlUSnj.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./table-D7rfBOnA.js";import"./input-CnPVHnSS.js";import"./select-l-h8_a0d.js";import"./createLucideIcon-q2xymCcu.js";import"./button-Cj4DMzd2.js";import"./index-EXTQMK5R.js";import"./badge-DR9D7Bxf.js";import"./dropdown-menu-CM6ZlXGJ.js";import"./sheet-4EsOYAOn.js";import"./x-BRWzi90o.js";import"./skeleton-Tq2I7sTs.js";import"./pii-mask-DzPhrbeW.js";import"./empty-state-BXn8dCsG.js";import"./network-error-Bi-14o0K.js";import"./state-panel-AwrGFuBi.js";import"./wifi-off-WBlfOpX_.js";import"./rotate-ccw-B69hVR-Z.js";import"./search-BvLNQAdK.js";import"./triangle-alert-CFv-IGbZ.js";import"./check-D3fQhiZu.js";import"./clipboard-list-JLwa9ABu.js";import"./user-search-Cw05bjCz.js";const Bo={title:"Screening/HistoryView",component:zr,decorators:[r=>A.jsx("div",{className:"min-h-screen bg-[var(--color-surface-sunken)] p-4",children:A.jsx(r,{})})],parameters:{layout:"fullscreen",viewport:{defaultViewport:"liff"},docs:{description:{component:"SCR-HIST — the screening history list. Search (ชื่อ) + a 1-tap 'ผล' segmented quick-filter are inline; วันที่/ผู้ตรวจ/disposition live behind the 'ตัวกรอง' Sheet (count badge + removable chips + result count). Filtering is real (client-side). Verdict is an icon+text Badge (never color-only). Tapping ANY row opens a detail drawer (spec §5); owners reopen a 'พบ' case from inside it (onReopenRow). In the card list the day heading is sticky while scrolling a long group. First-use empty is distinct from filtered-to-zero empty."}}}},t=[{id:"h1",name:"สมชาย ใจดี",result:"hit",time:"30 มิ.ย. 2569 · 14:32",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"UN Consolidated",riskGroups:["Sanctions"],disposition:"ปฏิเสธรายการ"},{id:"h2",name:"นภาพร แสงทอง",result:"clear",time:"30 มิ.ย. 2569 · 13:10",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"OFAC SDN",disposition:"—"},{id:"h3",name:"ธนกร วงศ์ไทย",result:"clear",time:"30 มิ.ย. 2569 · 11:48",performedBy:"เจ้าของร้าน",performedByRole:"owner",source:"EU Consolidated",disposition:"—"},{id:"h4",name:"ปรีชา มั่นคง",result:"hit",time:"29 มิ.ย. 2569 · 16:05",performedBy:"เจ้าของร้าน",performedByRole:"owner",source:"UN Consolidated",riskGroups:["Sanctions","PEP"],disposition:"ยืนยันทำรายการ"},{id:"h5",name:"วิภาดา ทองแท้",result:"clear",time:"29 มิ.ย. 2569 · 10:22",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"UN Consolidated",disposition:"—"},{id:"h6",name:"อนุชา พรหมมา",result:"hit",time:"22 มิ.ย. 2569 · 09:05",performedBy:"เจ้าของร้าน",performedByRole:"owner",source:"OFAC SDN",riskGroups:["ปปง."],disposition:"ปฏิเสธรายการ"}],e={onReopenRow:r=>alert(`เปิดเคสอีกครั้ง: ${r.name}`),onViewRow:r=>console.log(`[audit] viewed record: ${r.id} (${r.name})`),onRevealName:r=>console.log(`[audit] revealed full PII: ${r.id} (${r.name})`),onDownloadEvidence:r=>alert(`ดาวน์โหลดหลักฐาน: ${r.name}`),onRetryEvidence:r=>alert(`สร้างหลักฐานใหม่: ${r.name}`)},s={args:{state:"default",layout:"cards",rows:t,...e}},a={args:{state:"default",layout:"cards",rows:t,...e}},n={args:{state:"default",layout:"cards",rows:[{id:"p1",name:"สมชาย ใจดี",result:"hit",time:"30 มิ.ย. 2569 · 14:32",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"UN Consolidated",riskGroups:["Sanctions"],disposition:"—"},{id:"p2",name:"ปรีชา มั่นคง",result:"hit",time:"30 มิ.ย. 2569 · 11:20",performedBy:"เจ้าของร้าน",performedByRole:"owner",source:"OFAC SDN",riskGroups:["ปปง.","Sanctions"],disposition:"ปฏิเสธรายการ"},{id:"p3",name:"นภาพร แสงทอง",result:"clear",time:"30 มิ.ย. 2569 · 10:05",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"EU Consolidated",disposition:"—"}],...e}},i={args:{state:"default",layout:"cards",rows:[{id:"l1",name:"ประเสริฐศักดิ์ วัฒนโรจน์เจริญรุ่งเรืองพิพัฒน์มงคลชัยพาณิชย์",result:"hit",time:"30 มิ.ย. 2569 · 14:32",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"UN Consolidated",disposition:"ปฏิเสธรายการ"},{id:"l2",name:"นภาพร แสงทอง",result:"clear",time:"30 มิ.ย. 2569 · 13:10",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"OFAC SDN",disposition:"—"}],...e}},d={args:{state:"default",layout:"cards",rows:t,initialFilters:{result:"hit",date:"7d"},...e}},c={args:{state:"default",layout:"cards",role:"operator",rows:t,...e}},l={args:{state:"default",layout:"cards",rows:t,initialFilters:{query:"ไม่มีใครชื่อนี้"},...e}},p={args:{state:"empty",onScreen:()=>alert("ไปหน้าตรวจชื่อ")}},m={args:{state:"loading",layout:"cards"}},u={args:{state:"error",onRetry:()=>alert("กำลังลองใหม่…")}},y={args:{state:"default",layout:"cards",rows:t,...e}},f={args:{state:"default",layout:"cards",role:"operator",rows:t,...e}},D=["สมชาย ใจดี","นภาพร แสงทอง","ธนกร วงศ์ไทย","ปรีชา มั่นคง","วิภาดา ทองแท้","อนุชา พรหมมา","กมล ศรีสุข","จิราภา ทองคำ"],U=[{by:"อรทัย (พนักงาน)",role:"operator"},{by:"มานะ (พนักงาน)",role:"operator"},{by:"เจ้าของร้าน",role:"owner"}],G=["UN Consolidated","OFAC SDN","EU Consolidated"];function Vr(r){return Array.from({length:r},(jr,o)=>{const xr=30-Math.floor(o/18),Hr=String(9+o%9).padStart(2,"0"),qr=String(o*13%60).padStart(2,"0"),k=U[o%U.length],O=o%7===0;return{id:`L${o}`,name:`${D[o%D.length]} ${o+1}`,result:O?"hit":"clear",time:`${xr} มิ.ย. 2569 · ${Hr}:${qr}`,performedBy:k.by,performedByRole:k.role,source:G[o%G.length],riskGroups:O?o%14===0?["Sanctions","PEP"]:o%21===0?["ปปง."]:["Sanctions"]:void 0,disposition:O?o%2?"ปฏิเสธรายการ":"ยืนยันทำรายการ":"—"}})}const E=Vr(248),h={args:{state:"default",layout:"cards",rows:E,...e}},g={args:{state:"default",layout:"cards",pageSize:5,rows:E,...e}},w={args:{state:"offline",onRetry:()=>alert("กำลังลองเชื่อมต่อใหม่…")}},S={args:{state:"default",layout:"cards",rows:[{id:"e1",name:"สมชาย ใจดี",result:"hit",time:"30 มิ.ย. 2569 · 14:32",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"UN Consolidated",disposition:"ปฏิเสธรายการ",evidenceStatus:"ready"},{id:"e2",name:"นภาพร แสงทอง",result:"clear",time:"30 มิ.ย. 2569 · 13:10",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"OFAC SDN",disposition:"—",evidenceStatus:"generating"},{id:"e3",name:"ปรีชา มั่นคง",result:"hit",time:"29 มิ.ย. 2569 · 16:05",performedBy:"เจ้าของร้าน",performedByRole:"owner",source:"UN Consolidated",disposition:"ยืนยันทำรายการ",evidenceStatus:"failed"}],...e}},R={args:{state:"default",layout:"cards",pageSize:5,rows:E,loadMoreState:"error",onLoadMore:()=>alert("กำลังโหลดหน้าถัดไปอีกครั้ง…"),...e}},B={args:{state:"default",layout:"cards",role:"owner",rows:t,reopenBlock:"quota",onManageBilling:()=>alert("ไปหน้าการเรียกเก็บเงิน (Merchant Portal)"),...e}},C={args:{state:"default",layout:"cards",rows:t,...e}},v={args:{state:"default",layout:"cards",role:"owner",rows:[{id:"s1",name:"สมชาย ใจดี",result:"hit",time:"30 มิ.ย. 2569 · 14:32",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"UN Consolidated",disposition:"ปฏิเสธรายการ",stale:!0},{id:"s2",name:"ปรีชา มั่นคง",result:"hit",time:"29 มิ.ย. 2569 · 16:05",performedBy:"เจ้าของร้าน",performedByRole:"owner",source:"UN Consolidated",disposition:"—"}],onRefreshRow:r=>alert(`โหลดข้อมูลล่าสุด: ${r.id}`),...e}},N={args:{state:"default",layout:"cards",rows:[{id:"rg1",name:"สมชาย ใจดี",result:"hit",time:"30 มิ.ย. 2569 · 14:32",performedBy:"เจ้าของร้าน",performedByRole:"owner",source:"UN Consolidated",riskGroups:["Sanctions","PEP","ปปง."],disposition:"ปฏิเสธรายการ"},{id:"rg2",name:"ปรีชา มั่นคง",result:"hit",time:"30 มิ.ย. 2569 · 11:20",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"OFAC SDN",riskGroups:["Debarment"],disposition:"—"},{id:"rg3",name:"นภาพร แสงทอง",result:"clear",time:"30 มิ.ย. 2569 · 10:05",performedBy:"อรทัย (พนักงาน)",performedByRole:"operator",source:"EU Consolidated",disposition:"—"}],...e}},b={args:{state:"default",layout:"cards",rows:E,initialSort:"name-asc",...e}},F={parameters:{viewport:{defaultViewport:"desktop"}},args:{state:"default",layout:"table",rows:t,...e}};var L,P,M,T,I;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: ROWS,
    ...handlers
  }
}`,...(M=(P=s.parameters)==null?void 0:P.docs)==null?void 0:M.source},description:{story:"Full sample log (card list — the primary SCR-HIST surface). Hit rows are tappable to reopen the case.",...(I=(T=s.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};var $,W,x,H,q;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: ROWS,
    ...handlers
  }
}`,...(x=(W=a.parameters)==null?void 0:W.docs)==null?void 0:x.source},description:{story:`Card list (SCR-HIST mobile / LIFF 390px) — the primary surface. Search + 'ผล' segmented
inline; tap 'ตัวกรอง' to open the secondary-filter Sheet.`,...(q=(H=a.parameters)==null?void 0:H.docs)==null?void 0:q.description}}};var z,V,j,_,Q;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: [{
      id: "p1",
      name: "สมชาย ใจดี",
      result: "hit",
      time: "30 มิ.ย. 2569 · 14:32",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "UN Consolidated",
      riskGroups: ["Sanctions"],
      disposition: "—"
    }, {
      id: "p2",
      name: "ปรีชา มั่นคง",
      result: "hit",
      time: "30 มิ.ย. 2569 · 11:20",
      performedBy: "เจ้าของร้าน",
      performedByRole: "owner",
      source: "OFAC SDN",
      riskGroups: ["ปปง.", "Sanctions"],
      disposition: "ปฏิเสธรายการ"
    }, {
      id: "p3",
      name: "นภาพร แสงทอง",
      result: "clear",
      time: "30 มิ.ย. 2569 · 10:05",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "EU Consolidated",
      disposition: "—"
    }],
    ...handlers
  }
}`,...(j=(V=n.parameters)==null?void 0:V.docs)==null?void 0:j.source},description:{story:`Action-required — a "พบ" still awaiting a decision (disposition "—") gets an amber "ต้องทบทวน" strip
+ a primary "ดูรายละเอียด" CTA. Review-first: the decision is made inside the detail drawer (owner-gated
reopen → SCR-HIT), never straight from the list. A decided "พบ" stays quiet with a neutral disposition
pill; a "ไม่พบ" row is plain. Deciding from the list would risk an uninformed AML disposition.`,...(Q=(_=n.parameters)==null?void 0:_.docs)==null?void 0:Q.description}}};var Y,K,X,Z,J;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: [{
      id: "l1",
      name: "ประเสริฐศักดิ์ วัฒนโรจน์เจริญรุ่งเรืองพิพัฒน์มงคลชัยพาณิชย์",
      result: "hit",
      time: "30 มิ.ย. 2569 · 14:32",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "UN Consolidated",
      disposition: "ปฏิเสธรายการ"
    }, {
      id: "l2",
      name: "นภาพร แสงทอง",
      result: "clear",
      time: "30 มิ.ย. 2569 · 13:10",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "OFAC SDN",
      disposition: "—"
    }],
    ...handlers
  }
}`,...(X=(K=i.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"ชื่อยาวมาก (masked) — เซลล์ชื่อ wrap ได้ ไม่ดันคอลัมน์อื่น.",...(J=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:J.description}}};var ee,re,oe,te,se;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: ROWS,
    initialFilters: {
      result: "hit",
      date: "7d"
    },
    ...handlers
  }
}`,...(oe=(re=d.parameters)==null?void 0:re.docs)==null?void 0:oe.source},description:{story:"Filters pre-applied — shows the count badge, removable chips, and result count on load.",...(se=(te=d.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var ae,ne,ie,de,ce;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    role: "operator",
    rows: ROWS,
    ...handlers
  }
}`,...(ie=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:'Operator view — the "ผู้ตรวจ" filter is hidden (performed_by filtering is owner-only, RBAC).',...(ce=(de=c.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var le,pe,me,ue,ye;l.parameters={...l.parameters,docs:{...(le=l.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: ROWS,
    initialFilters: {
      query: "ไม่มีใครชื่อนี้"
    },
    ...handlers
  }
}`,...(me=(pe=l.parameters)==null?void 0:pe.docs)==null?void 0:me.source},description:{story:"Data exists but the active filters match nothing — distinct copy from first-use empty.",...(ye=(ue=l.parameters)==null?void 0:ue.docs)==null?void 0:ye.description}}};var fe,he,ge,we,Se;p.parameters={...p.parameters,docs:{...(fe=p.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    state: "empty",
    onScreen: () => alert("ไปหน้าตรวจชื่อ")
  }
}`,...(ge=(he=p.parameters)==null?void 0:he.docs)==null?void 0:ge.source},description:{story:'No screenings yet — first-use reassurance + "ตรวจ" CTA (toolbar hidden).',...(Se=(we=p.parameters)==null?void 0:we.docs)==null?void 0:Se.description}}};var Re,Be,Ce,ve,Ne;m.parameters={...m.parameters,docs:{...(Re=m.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    state: "loading",
    layout: "cards"
  }
}`,...(Ce=(Be=m.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source},description:{story:"Fetching the log — skeleton toolbar + rows (shimmer drops under prefers-reduced-motion).",...(Ne=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:Ne.description}}};var be,Fe,Ee,Oe,ke;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    state: "error",
    onRetry: () => alert("กำลังลองใหม่…")
  }
}`,...(Ee=(Fe=u.parameters)==null?void 0:Fe.docs)==null?void 0:Ee.source},description:{story:"The fetch failed — retry surface (distinct from empty: the records aren't gone, they didn't load).",...(ke=(Oe=u.parameters)==null?void 0:Oe.docs)==null?void 0:ke.description}}};var Ae,De,Ue,Ge,Le;y.parameters={...y.parameters,docs:{...(Ae=y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: ROWS,
    ...handlers
  }
}`,...(Ue=(De=y.parameters)==null?void 0:De.docs)==null?void 0:Ue.source},description:{story:`Row detail drawer — แตะแถวใดก็ได้ (พบ/ไม่พบ) เพื่อเปิด Sheet รายละเอียดเต็ม (spec §5/§7).
แถว "พบ" (owner) จะมีปุ่มหลัก "เปิดเคสอีกครั้งเพื่อตัดสิน"; ปิด drawer แล้ว focus กลับไปแถวเดิม.`,...(Le=(Ge=y.parameters)==null?void 0:Ge.docs)==null?void 0:Le.description}}};var Pe,Me,Te,Ie,$e;f.parameters={...f.parameters,docs:{...(Pe=f.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    role: "operator",
    rows: ROWS,
    ...handlers
  }
}`,...(Te=(Me=f.parameters)==null?void 0:Me.docs)==null?void 0:Te.source},description:{story:'Operator เปิด detail ของแถว "พบ" — ไม่มีปุ่ม reopen (RBAC: reopen เป็นสิทธิ์ owner).',...($e=(Ie=f.parameters)==null?void 0:Ie.docs)==null?void 0:$e.description}}};var We,xe,He,qe,ze;h.parameters={...h.parameters,docs:{...(We=h.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: LARGE,
    ...handlers
  }
}`,...(He=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:He.source},description:{story:`รายการเยอะ (248 แถว) — card list / LIFF 390px. โชว์ 20 แถวแรก + "แสดง 20 จาก 248 รายการ"
แล้วปุ่ม "โหลดเพิ่ม 20" (NN/g: load-more > infinite scroll). กดแล้ว focus ย้ายไปแถวใหม่แถวแรก;
เปลี่ยน search/ตัวกรอง → กลับหน้าแรก. ลองพิมพ์ค้นหา/เปิดตัวกรอง เพื่อดูว่านับ + reset ถูกต้อง.`,...(ze=(qe=h.parameters)==null?void 0:qe.docs)==null?void 0:ze.description}}};var Ve,je,_e,Qe,Ye;g.parameters={...g.parameters,docs:{...(Ve=g.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    pageSize: 5,
    rows: LARGE,
    ...handlers
  }
}`,...(_e=(je=g.parameters)==null?void 0:je.docs)==null?void 0:_e.source},description:{story:"pageSize เล็ก (5) — เห็นการแบ่งหน้าเร็วขึ้นบนเดตาเซ็ตเล็ก (ปรับ prop ได้ตาม caller).",...(Ye=(Qe=g.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.description}}};var Ke,Xe,Ze,Je,er;w.parameters={...w.parameters,docs:{...(Ke=w.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    state: "offline",
    onRetry: () => alert("กำลังลองเชื่อมต่อใหม่…")
  }
}`,...(Ze=(Xe=w.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source},description:{story:`Offline — the device lost its connection (LIFF on mobile). Distinct from the server-error surface:
same shape, "reconnect" copy, neutral offline tone (a transient environment state, not a fault).
ประวัติที่บันทึกไว้ไม่หาย.`,...(er=(Je=w.parameters)==null?void 0:Je.docs)==null?void 0:er.description}}};var rr,or,tr,sr,ar;S.parameters={...S.parameters,docs:{...(rr=S.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: [{
      id: "e1",
      name: "สมชาย ใจดี",
      result: "hit",
      time: "30 มิ.ย. 2569 · 14:32",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "UN Consolidated",
      disposition: "ปฏิเสธรายการ",
      evidenceStatus: "ready"
    }, {
      id: "e2",
      name: "นภาพร แสงทอง",
      result: "clear",
      time: "30 มิ.ย. 2569 · 13:10",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "OFAC SDN",
      disposition: "—",
      evidenceStatus: "generating"
    }, {
      id: "e3",
      name: "ปรีชา มั่นคง",
      result: "hit",
      time: "29 มิ.ย. 2569 · 16:05",
      performedBy: "เจ้าของร้าน",
      performedByRole: "owner",
      source: "UN Consolidated",
      disposition: "ยืนยันทำรายการ",
      evidenceStatus: "failed"
    }],
    ...handlers
  }
}`,...(tr=(or=S.parameters)==null?void 0:or.docs)==null?void 0:tr.source},description:{story:`Evidence Pack states (A · SCR-RES GR-UX05a) — the screening record is always intact; only the PDF
artifact varies. Row 1 "ready" (download), row 2 "generating" (disabled spinner), row 3 "failed"
("สร้างหลักฐานใหม่" rebuild). Applies in the card list, table, and detail drawer alike.`,...(ar=(sr=S.parameters)==null?void 0:sr.docs)==null?void 0:ar.description}}};var nr,ir,dr,cr,lr;R.parameters={...R.parameters,docs:{...(nr=R.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    pageSize: 5,
    rows: LARGE,
    loadMoreState: "error",
    onLoadMore: () => alert("กำลังโหลดหน้าถัดไปอีกครั้ง…"),
    ...handlers
  }
}`,...(dr=(ir=R.parameters)==null?void 0:ir.docs)==null?void 0:dr.source},description:{story:`Load-more fetch failed (C) — the next page didn't load, but the rows already shown stay put. Retry
re-fetches just that page. Uses server-side paging (onLoadMore + loadMoreState="error").`,...(lr=(cr=R.parameters)==null?void 0:cr.docs)==null?void 0:lr.description}}};var pr,mr,ur,yr,fr;B.parameters={...B.parameters,docs:{...(pr=B.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    role: "owner",
    rows: ROWS,
    reopenBlock: "quota",
    onManageBilling: () => alert("ไปหน้าการเรียกเก็บเงิน (Merchant Portal)"),
    ...handlers
  }
}`,...(ur=(mr=B.parameters)==null?void 0:mr.docs)==null?void 0:ur.source},description:{story:`Reopen blocked (D) — owner opens a "พบ" case, but reopening re-runs the check and screening capacity
is exhausted (quota / overage cap). Detail footer replaces the reopen button with a block notice +
a Billing CTA. Open the "พบ" row (สมชาย/ปรีชา) to see it. ("trial" swaps the copy.)`,...(fr=(yr=B.parameters)==null?void 0:yr.docs)==null?void 0:fr.description}}};var hr,gr,wr,Sr,Rr;C.parameters={...C.parameters,docs:{...(hr=C.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: ROWS,
    ...handlers
  }
}`,...(wr=(gr=C.parameters)==null?void 0:gr.docs)==null?void 0:wr.source},description:{story:`Full-PII reveal (B · SCR-HIT edge:view-full) — open a "พบ" row's detail, then "ดูชื่อเต็ม" unmasks the
name and fires a separate, higher-sensitivity audit event (onRevealName in the console) plus a
"ถูกบันทึกไว้เพื่อการตรวจสอบ" note. Reveal resets each time the drawer reopens.`,...(Rr=(Sr=C.parameters)==null?void 0:Sr.docs)==null?void 0:Rr.description}}};var Br,Cr,vr,Nr,br;v.parameters={...v.parameters,docs:{...(Br=v.parameters)==null?void 0:Br.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    role: "owner",
    rows: [{
      id: "s1",
      name: "สมชาย ใจดี",
      result: "hit",
      time: "30 มิ.ย. 2569 · 14:32",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "UN Consolidated",
      disposition: "ปฏิเสธรายการ",
      stale: true
    }, {
      id: "s2",
      name: "ปรีชา มั่นคง",
      result: "hit",
      time: "29 มิ.ย. 2569 · 16:05",
      performedBy: "เจ้าของร้าน",
      performedByRole: "owner",
      source: "UN Consolidated",
      disposition: "—"
    }],
    onRefreshRow: (row: HistoryRow) => alert(\`โหลดข้อมูลล่าสุด: \${row.id}\`),
    ...handlers
  }
}`,...(vr=(Cr=v.parameters)==null?void 0:Cr.docs)==null?void 0:vr.source},description:{story:`Concurrency conflict (K · ADR-0001) — another owner re-dispositioned this case since the view loaded.
Open the "พบ" row: the detail drawer shows a "รายการนี้ถูกอัปเดตแล้ว" banner + "โหลดข้อมูลล่าสุด", and
the reopen button is suppressed until the row is refreshed. Row 1 is stale.`,...(br=(Nr=v.parameters)==null?void 0:Nr.docs)==null?void 0:br.description}}};var Fr,Er,Or,kr,Ar;N.parameters={...N.parameters,docs:{...(Fr=N.parameters)==null?void 0:Fr.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: [{
      id: "rg1",
      name: "สมชาย ใจดี",
      result: "hit",
      time: "30 มิ.ย. 2569 · 14:32",
      performedBy: "เจ้าของร้าน",
      performedByRole: "owner",
      source: "UN Consolidated",
      riskGroups: ["Sanctions", "PEP", "ปปง."],
      disposition: "ปฏิเสธรายการ"
    }, {
      id: "rg2",
      name: "ปรีชา มั่นคง",
      result: "hit",
      time: "30 มิ.ย. 2569 · 11:20",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "OFAC SDN",
      riskGroups: ["Debarment"],
      disposition: "—"
    }, {
      id: "rg3",
      name: "นภาพร แสงทอง",
      result: "clear",
      time: "30 มิ.ย. 2569 · 10:05",
      performedBy: "อรทัย (พนักงาน)",
      performedByRole: "operator",
      source: "EU Consolidated",
      disposition: "—"
    }],
    ...handlers
  }
}`,...(Or=(Er=N.parameters)==null?void 0:Er.docs)==null?void 0:Or.source},description:{story:`Risk Group per result (SRS SCR-HIST-01 · G17) — a hit shows the matched list *categories*
(Sanctions / PEP / Debarment / ปปง.) as flat outline multi-badges. An entity on lists across
several groups shows all of them on the one row (G17: รวมแถวเดียว · multi-badge · ไม่แตกซ้ำ); a
"ไม่พบ" row has none. Shown in the card, the table, and the detail drawer.
NOTE: filtering BY risk group (+ the "ปปง." preset) is Phase 2 (G21 · deferred) — MVP only displays.`,...(Ar=(kr=N.parameters)==null?void 0:kr.docs)==null?void 0:Ar.description}}};var Dr,Ur,Gr,Lr,Pr;b.parameters={...b.parameters,docs:{...(Dr=b.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    state: "default",
    layout: "cards",
    rows: LARGE,
    initialSort: "name-asc",
    ...handlers
  }
}`,...(Gr=(Ur=b.parameters)==null?void 0:Ur.docs)==null?void 0:Gr.source},description:{story:`Sort control (research §B) — reorder, separate from Filter. Default is "เวลา · ใหม่→เก่า"; this story
opens on "ชื่อ · ก-ฮ", which flattens the day-grouped list into one A–Z run (day headers drop, since
they'd fight the name order). The current order is echoed on the trigger (top-right of the count row).`,...(Pr=(Lr=b.parameters)==null?void 0:Lr.docs)==null?void 0:Pr.description}}};var Mr,Tr,Ir,$r,Wr;F.parameters={...F.parameters,docs:{...(Mr=F.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  },
  args: {
    state: "default",
    layout: "table",
    rows: ROWS,
    ...handlers
  }
}`,...(Ir=(Tr=F.parameters)==null?void 0:Tr.docs)==null?void 0:Ir.source},description:{story:`Table layout (wide / owner / Merchant Portal) — the same data + a11y as the card list, rendered as the
dense 7-column semantic table. Risk Group badges sit under the แหล่งลิสต์ column. (SCR-HIST on LIFF uses
the card list; the table is for wide surfaces.)`,...(Wr=($r=F.parameters)==null?void 0:$r.docs)==null?void 0:Wr.description}}};const Co=["Default","Cards","ActionRequired","LongName","WithActiveFilters","OperatorRole","FilteredEmpty","Empty","Loading","ErrorState","RowDetail","RowDetailOperator","LargeDataset","SmallPageSize","Offline","EvidenceStates","LoadMoreError","ReopenBlockedQuota","RevealFullName","StaleConflict","RiskGroups","SortByName","TableLayout"];export{n as ActionRequired,a as Cards,s as Default,p as Empty,u as ErrorState,S as EvidenceStates,l as FilteredEmpty,h as LargeDataset,R as LoadMoreError,m as Loading,i as LongName,w as Offline,c as OperatorRole,B as ReopenBlockedQuota,C as RevealFullName,N as RiskGroups,y as RowDetail,f as RowDetailOperator,g as SmallPageSize,b as SortByName,v as StaleConflict,F as TableLayout,d as WithActiveFilters,Co as __namedExportsOrder,Bo as default};
