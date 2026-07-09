import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as s}from"./skeleton-Tq2I7sTs.js";import"./cn-BLSKlp9E.js";const j={title:"Components/Skeleton",component:s,parameters:{layout:"padded",docs:{description:{component:"Loading placeholder. Pulses by default and renders static under prefers-reduced-motion (toggle Reduce motion in your OS / DevTools rendering panel to verify). Decorative — set size/shape via className."}}}},l={render:()=>e.jsxs("div",{style:{maxWidth:320},className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-3/4"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-1/2"})]})},a={render:()=>e.jsx("div",{style:{maxWidth:360},className:"space-y-3",children:[0,1,2].map(f=>e.jsxs("div",{className:"flex items-center gap-3 rounded-lg border border-[var(--color-border-default)] bg-white p-3",children:[e.jsx(s,{className:"h-10 w-10 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"h-3.5 w-2/3"}),e.jsx(s,{className:"h-3 w-1/3"})]})]},f))})},r={render:()=>e.jsxs("div",{style:{maxWidth:360},className:"rounded-lg border border-[var(--color-border-default)] p-[18px]",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx(s,{className:"h-7 w-7 rounded-full"}),e.jsx(s,{className:"h-6 w-24"})]}),e.jsxs("div",{className:"mt-3 space-y-2",children:[e.jsx(s,{className:"h-3.5 w-full"}),e.jsx(s,{className:"h-3.5 w-4/5"})]})]}),parameters:{viewport:{defaultViewport:"liff"}}};var d,n,o;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 320
  }} className="space-y-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
}`,...(o=(n=l.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var t,c,i,m,p;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }} className="space-y-3">
      {[0, 1, 2].map(i => <div key={i} className="flex items-center gap-3 rounded-lg border border-[var(--color-border-default)] bg-white p-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3.5 w-2/3" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>)}
    </div>
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source},description:{story:"Home recent-list row (avatar + two lines), repeated.",...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var u,h,x,N,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }} className="rounded-lg border border-[var(--color-border-default)] p-[18px]">
      <div className="flex items-center gap-2.5">
        <Skeleton className="h-7 w-7 rounded-full" />
        <Skeleton className="h-6 w-24" />
      </div>
      <div className="mt-3 space-y-2">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-4/5" />
      </div>
    </div>,
  parameters: {
    viewport: {
      defaultViewport: "liff"
    }
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source},description:{story:"Screening result building its verdict card.",...(v=(N=r.parameters)==null?void 0:N.docs)==null?void 0:v.description}}};const S=["Line","Card","ResultLoading"];export{a as Card,l as Line,r as ResultLoading,S as __namedExportsOrder,j as default};
