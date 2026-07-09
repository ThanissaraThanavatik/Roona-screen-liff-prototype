import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as a,a as n}from"./dropdown-menu-CM6ZlXGJ.js";import{H as d}from"./history-CMuEQWGh.js";import{c as x}from"./createLucideIcon-q2xymCcu.js";import{L as s,E as D}from"./log-out-_X09NQjM.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=x("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),E={title:"Components/Dropdown Menu",component:a,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"เมนู overflow มุมขวาบนของ header (kebab ⋮). role-aware: operator เห็น ประวัติ/ออกจากระบบ, owner เห็นเพิ่ม ตั้งค่า. ปิดด้วย Escape / คลิกนอก / เลือกรายการ."}}}},M=e.jsx("button",{type:"button","aria-label":"เมนู",className:"flex h-11 w-11 items-center justify-center rounded text-[var(--color-ink-2)] hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]",children:e.jsx(D,{"aria-hidden":"true",size:22})}),o={render:()=>e.jsx("div",{className:"flex justify-end",children:e.jsxs(a,{trigger:M,children:[e.jsx(n,{leftIcon:d,onSelect:()=>{},children:"ประวัติการตรวจ"}),e.jsx(n,{variant:"danger",leftIcon:s,onSelect:()=>{},children:"ออกจากระบบ"})]})})},t={render:()=>e.jsx("div",{className:"flex justify-end",children:e.jsxs(a,{trigger:M,children:[e.jsx(n,{leftIcon:d,onSelect:()=>{},children:"ประวัติการตรวจ"}),e.jsx(n,{leftIcon:h,onSelect:()=>{},children:"ตั้งค่า"}),e.jsx(n,{variant:"danger",leftIcon:s,onSelect:()=>{},children:"ออกจากระบบ"})]})})},r={render:()=>e.jsx("div",{className:"min-h-52",children:e.jsxs("div",{role:"menu","aria-label":"เมนู",className:"min-w-52 overflow-hidden rounded-lg border border-[var(--color-border-default)] bg-white py-1 shadow-lg",children:[e.jsx(n,{leftIcon:d,children:"ประวัติการตรวจ"}),e.jsx(n,{leftIcon:h,children:"ตั้งค่า"}),e.jsx(n,{variant:"danger",leftIcon:s,children:"ออกจากระบบ"})]})})};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex justify-end">
      <DropdownMenu trigger={KebabTrigger}>
        <DropdownMenuItem leftIcon={History} onSelect={() => {}}>
          ประวัติการตรวจ
        </DropdownMenuItem>
        <DropdownMenuItem variant="danger" leftIcon={LogOut} onSelect={() => {}}>
          ออกจากระบบ
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex justify-end">
      <DropdownMenu trigger={KebabTrigger}>
        <DropdownMenuItem leftIcon={History} onSelect={() => {}}>
          ประวัติการตรวจ
        </DropdownMenuItem>
        <DropdownMenuItem leftIcon={Settings} onSelect={() => {}}>
          ตั้งค่า
        </DropdownMenuItem>
        <DropdownMenuItem variant="danger" leftIcon={LogOut} onSelect={() => {}}>
          ออกจากระบบ
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,w,v,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="min-h-52">
      <div role="menu" aria-label="เมนู" className="min-w-52 overflow-hidden rounded-lg border border-[var(--color-border-default)] bg-white py-1 shadow-lg">
        <DropdownMenuItem leftIcon={History}>ประวัติการตรวจ</DropdownMenuItem>
        <DropdownMenuItem leftIcon={Settings}>ตั้งค่า</DropdownMenuItem>
        <DropdownMenuItem variant="danger" leftIcon={LogOut}>
          ออกจากระบบ
        </DropdownMenuItem>
      </div>
    </div>
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source},description:{story:"Menu items rendered open (no trigger interaction needed) for visual review.",...(I=(v=r.parameters)==null?void 0:v.docs)==null?void 0:I.description}}};const H=["OperatorMenu","OwnerMenu","Open"];export{r as Open,o as OperatorMenu,t as OwnerMenu,H as __namedExportsOrder,E as default};
