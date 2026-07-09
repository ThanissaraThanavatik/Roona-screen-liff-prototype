import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./sticky-action-bar-B48YK0mA.js";import{B as a}from"./button-Cj4DMzd2.js";import{C as f}from"./card-CUv2tkzD.js";import{U as k}from"./user-search-Cw05bjCz.js";import"./cn-BLSKlp9E.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";import"./createLucideIcon-q2xymCcu.js";const z={title:"Components/StickyActionBar",component:s,parameters:{layout:"fullscreen",docs:{description:{component:"Pinned bottom action bar for LIFF working-screens. Full-bleed to the screen edges with an upward elevation shadow, so the primary action stays separated from the scrolling content on the sunken (gray-50) canvas. Reuse everywhere a screen pins a bottom action — one source of truth for the treatment."}}}},r={render:()=>e.jsxs("div",{style:{height:420,width:390},className:"mx-auto flex flex-col overflow-y-auto bg-[var(--color-surface-sunken)] p-4",children:[Array.from({length:4}).map((y,t)=>e.jsxs(f,{className:"mb-4 p-4",children:[e.jsxs("p",{className:"text-sm font-medium text-[var(--color-ink)]",children:["การ์ดเนื้อหา #",t+1]}),e.jsx("p",{className:"mt-1 text-xs text-[var(--color-ink-2)]",children:"เลื่อนขึ้น-ลงเพื่อดูว่าการ์ดขาวลอดใต้แถบ action โดยแยกชั้นด้วยเงา ไม่ใช่สี"})]},t)),e.jsx(s,{children:e.jsx(a,{size:"block",leftIcon:k,children:"ตรวจ"})})]})},o={render:()=>e.jsxs("div",{style:{height:420,width:390},className:"mx-auto flex flex-col overflow-y-auto bg-[var(--color-surface-sunken)] p-4",children:[Array.from({length:4}).map((y,t)=>e.jsx(f,{className:"mb-4 p-4",children:e.jsxs("p",{className:"text-sm text-[var(--color-ink-2)]",children:["การ์ดเนื้อหา #",t+1]})},t)),e.jsxs(s,{className:"flex gap-2",children:[e.jsx(a,{variant:"secondary",size:"block",children:"ยกเลิก"}),e.jsx(a,{size:"block",children:"ยืนยัน"})]})]})};var n,c,i,l,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 420,
    width: 390
  }} className="mx-auto flex flex-col overflow-y-auto bg-[var(--color-surface-sunken)] p-4">
      {Array.from({
      length: 4
    }).map((_, i) => <Card key={i} className="mb-4 p-4">
          <p className="text-sm font-medium text-[var(--color-ink)]">การ์ดเนื้อหา #{i + 1}</p>
          <p className="mt-1 text-xs text-[var(--color-ink-2)]">
            เลื่อนขึ้น-ลงเพื่อดูว่าการ์ดขาวลอดใต้แถบ action โดยแยกชั้นด้วยเงา ไม่ใช่สี
          </p>
        </Card>)}
      <StickyActionBar>
        <Button size="block" leftIcon={UserSearch}>ตรวจ</Button>
      </StickyActionBar>
    </div>
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"On the sunken canvas: white cards scroll UNDER the bar; the upward shadow keeps them separated.\nThe mock reproduces the LiffShell layout (gray-50 canvas + p-4 gutter) so `-mx-4` bleeds to the edges.",...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var d,p,h,u,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 420,
    width: 390
  }} className="mx-auto flex flex-col overflow-y-auto bg-[var(--color-surface-sunken)] p-4">
      {Array.from({
      length: 4
    }).map((_, i) => <Card key={i} className="mb-4 p-4">
          <p className="text-sm text-[var(--color-ink-2)]">การ์ดเนื้อหา #{i + 1}</p>
        </Card>)}
      <StickyActionBar className="flex gap-2">
        <Button variant="secondary" size="block">
          ยกเลิก
        </Button>
        <Button size="block">ยืนยัน</Button>
      </StickyActionBar>
    </div>
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"Two-action variant (e.g. ยืนยัน / ยกเลิก). Children control the layout inside the bar.",...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};const _=["OnSunkenCanvas","TwoActions"];export{r as OnSunkenCanvas,o as TwoActions,_ as __namedExportsOrder,z as default};
