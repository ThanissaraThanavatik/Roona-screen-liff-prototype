import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{N as o}from"./network-error-Bi-14o0K.js";import"./cn-BLSKlp9E.js";import"./button-Cj4DMzd2.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";import"./createLucideIcon-q2xymCcu.js";import"./state-panel-AwrGFuBi.js";import"./wifi-off-WBlfOpX_.js";import"./rotate-ccw-B69hVR-Z.js";const k={title:"Components/NetworkError",component:o,parameters:{layout:"padded",docs:{description:{component:"Reactive connection-failure surface with manual retry. `inline` for a single failed region; `full-page` for an app-shell/boot failure. Distinct from the passive offline banner (Alert warning, auto-reconnects)."}}}},e={render:()=>t.jsx("div",{style:{maxWidth:380},children:t.jsx(o,{variant:"inline",onRetry:()=>{}})})},r={render:()=>t.jsx(o,{variant:"full-page",onRetry:()=>{}}),parameters:{layout:"fullscreen",viewport:{defaultViewport:"liff"}}};var n,a,i,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 380
  }}>
      <NetworkError variant="inline" onRetry={() => {}} />
    </div>
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source},description:{story:"A single section failed to load.",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.description}}};var p,c,d,m,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <NetworkError variant="full-page" onRetry={() => {}} />,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "liff"
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"The app shell / boot failed — fills the viewport.",...(f=(m=r.parameters)==null?void 0:m.docs)==null?void 0:f.description}}};const b=["Inline","FullPage"];export{r as FullPage,e as Inline,b as __namedExportsOrder,k as default};
