import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{E as t}from"./empty-state-BXn8dCsG.js";import{B as c}from"./button-Cj4DMzd2.js";import{c as d}from"./createLucideIcon-q2xymCcu.js";import{C as w}from"./clipboard-list-JLwa9ABu.js";import{U as A}from"./user-search-Cw05bjCz.js";import{U}from"./users-C2qT2esw.js";import"./cn-BLSKlp9E.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=d("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=d("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=d("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),$={title:"Components/EmptyState",component:t,parameters:{layout:"padded",docs:{description:{component:"Empty / no-match placeholder. Value (reassurance) + Action (next step). Icon is decorative; the headline carries meaning, never color. Covers the empty states across Screening, Merchant, and Admin."}}}},i=({children:O})=>e.jsx("div",{style:{maxWidth:420},children:O}),r={render:()=>e.jsx(i,{children:e.jsx(t,{icon:w,title:"ยังไม่มีรายการตรวจ",action:e.jsx(c,{leftIcon:A,children:"ตรวจรายการแรก"}),children:"เมื่อคุณเริ่มตรวจชื่อ ประวัติและหลักฐานจะแสดงที่นี่"})})},a={render:()=>e.jsx(i,{children:e.jsx(t,{icon:U,title:"ยังไม่มีพนักงานในร้าน",action:e.jsx(c,{children:"เชิญพนักงาน"}),children:"เชิญพนักงานผ่านลิงก์ LINE เพื่อให้ช่วยตรวจชื่อที่หน้าเคาน์เตอร์ได้"})})},o={render:()=>e.jsx(i,{children:e.jsx(t,{icon:T,title:"ไม่พบรายการตามตัวกรอง",action:e.jsx(c,{variant:"secondary",size:"sm",children:"ล้างตัวกรอง"}),children:"ลองปรับช่วงวันที่หรือเงื่อนไขการค้นหาใหม่"})})},n={render:()=>e.jsx(i,{children:e.jsx(t,{icon:z,title:"ยินดีต้อนรับสู่ ROONA",action:e.jsx(c,{children:"เริ่มต้นตั้งค่าร้าน"}),children:"ตั้งค่าร้านและเชิญพนักงานให้เสร็จ แล้วสถิติการตรวจจะเริ่มแสดงที่แดชบอร์ดนี้"})})},s={render:()=>e.jsx(i,{children:e.jsx(t,{icon:q,title:"ไม่มีข้อมูลในช่วงเวลาที่เลือก",children:"ยังไม่มีรายการตรวจในช่วงนี้ — เลือกช่วงเวลาอื่นเพื่อดูรายงานและส่งออกไฟล์"})})};var p,m,h,l,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Frame>
      <EmptyState icon={ClipboardList} title="ยังไม่มีรายการตรวจ" action={<Button leftIcon={UserSearch}>ตรวจรายการแรก</Button>}>
        เมื่อคุณเริ่มตรวจชื่อ ประวัติและหลักฐานจะแสดงที่นี่
      </EmptyState>
    </Frame>
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"SCR-HIST — no screenings yet.",...(y=(l=r.parameters)==null?void 0:l.docs)==null?void 0:y.description}}};var u,x,S,E,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Frame>
      <EmptyState icon={Users} title="ยังไม่มีพนักงานในร้าน" action={<Button>เชิญพนักงาน</Button>}>
        เชิญพนักงานผ่านลิงก์ LINE เพื่อให้ช่วยตรวจชื่อที่หน้าเคาน์เตอร์ได้
      </EmptyState>
    </Frame>
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source},description:{story:"MERCH-OPR — no operators invited.",...(j=(E=a.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};var k,F,g,N,f;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Frame>
      <EmptyState icon={SearchX} title="ไม่พบรายการตามตัวกรอง" action={<Button variant="secondary" size="sm">
            ล้างตัวกรอง
          </Button>}>
        ลองปรับช่วงวันที่หรือเงื่อนไขการค้นหาใหม่
      </EmptyState>
    </Frame>
}`,...(g=(F=o.parameters)==null?void 0:F.docs)==null?void 0:g.source},description:{story:"ADMIN-AUDIT — filter returned nothing.",...(f=(N=o.parameters)==null?void 0:N.docs)==null?void 0:f.description}}};var M,v,R,B,D;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Frame>
      <EmptyState icon={LayoutDashboard} title="ยินดีต้อนรับสู่ ROONA" action={<Button>เริ่มต้นตั้งค่าร้าน</Button>}>
        ตั้งค่าร้านและเชิญพนักงานให้เสร็จ แล้วสถิติการตรวจจะเริ่มแสดงที่แดชบอร์ดนี้
      </EmptyState>
    </Frame>
}`,...(R=(v=n.parameters)==null?void 0:v.docs)==null?void 0:R.source},description:{story:"MERCH-DASH — brand-new shop, first run.",...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var b,C,I,H,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Frame>
      <EmptyState icon={FileSpreadsheet} title="ไม่มีข้อมูลในช่วงเวลาที่เลือก">
        ยังไม่มีรายการตรวจในช่วงนี้ — เลือกช่วงเวลาอื่นเพื่อดูรายงานและส่งออกไฟล์
      </EmptyState>
    </Frame>
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:"MERCH-RPT — no data in the selected range.",...(L=(H=s.parameters)==null?void 0:H.docs)==null?void 0:L.description}}};const ee=["NoHistory","NoOperators","FilterNoMatch","NewShopDashboard","NoReportData"];export{o as FilterNoMatch,n as NewShopDashboard,r as NoHistory,a as NoOperators,s as NoReportData,ee as __namedExportsOrder,$ as default};
