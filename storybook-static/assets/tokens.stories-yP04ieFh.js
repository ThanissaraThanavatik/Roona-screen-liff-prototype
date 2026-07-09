import{j as e}from"./jsx-runtime-D_zvdyIk.js";const v={title:"Design System/Tokens",parameters:{layout:"fullscreen",docs:{description:{component:`Design Tokens — the code-true version of design/design-system/preview.html.
Swatches read live CSS variables from the imported roona-tokens.css theme.`}}}};function a({varName:n,label:r,note:t}){return e.jsxs("div",{style:{minWidth:120},children:[e.jsx("div",{style:{height:64,borderRadius:8,border:"1px solid #e5e7eb",background:`var(${n})`}}),e.jsx("div",{style:{fontSize:12,marginTop:6,fontWeight:600},children:r}),e.jsx("code",{style:{fontSize:11,color:"#4b5563"},children:n}),t?e.jsx("div",{style:{fontSize:11,color:"#0b835c"},children:t}):null]})}function o({varName:n,label:r,note:t}){return e.jsxs("div",{style:{minWidth:120},children:[e.jsx("div",{style:{height:64,borderRadius:8,background:"#ffffff",boxShadow:`var(${n})`}}),e.jsx("div",{style:{fontSize:12,marginTop:6,fontWeight:600},children:r}),e.jsx("code",{style:{fontSize:11,color:"#4b5563"},children:n}),t?e.jsx("div",{style:{fontSize:11,color:"#0b835c"},children:t}):null]})}function l({title:n,children:r}){return e.jsxs("section",{style:{marginBottom:28},children:[e.jsx("h3",{style:{fontSize:13,textTransform:"uppercase",letterSpacing:".06em",color:"#6b7280"},children:n}),e.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginTop:10},children:r})]})}const s={render:()=>e.jsxs("div",{style:{padding:32,fontFamily:"var(--font-sans, system-ui)"},children:[e.jsx("h2",{style:{fontSize:24,fontWeight:700},children:"ROONA Design Tokens"}),e.jsxs("p",{style:{color:"#4b5563",maxWidth:"60ch",marginTop:6},children:["Rendered live from ",e.jsx("code",{children:"design/tokens/roona-tokens.css"}),". Brand emerald-500 is the identity hue; emerald-700 is the AA-safe interactive shade (focus ring). Primary button uses emerald-500 + white (2.43:1) under a logged WCAG exception (ADR-0007)."]}),e.jsxs("div",{style:{marginTop:24},children:[e.jsxs(l,{title:"Brand",children:[e.jsx(a,{varName:"--color-primary",label:"Primary",note:"● identity #10b981"}),e.jsx(a,{varName:"--color-primary-700",label:"Primary-700",note:"◌ ring / AA-safe"}),e.jsx(a,{varName:"--color-secondary",label:"Secondary",note:"● navy #121b37"})]}),e.jsxs(l,{title:"Feedback (semantic)",children:[e.jsx(a,{varName:"--color-success-icon",label:"Success"}),e.jsx(a,{varName:"--color-warning-icon",label:"Warning"}),e.jsx(a,{varName:"--color-error-icon",label:"Error"}),e.jsx(a,{varName:"--color-info-icon",label:"Info (non-brand)"})]}),e.jsxs(l,{title:"Surface & line",children:[e.jsx(a,{varName:"--color-surface-sunken",label:"Sunken"}),e.jsx(a,{varName:"--color-border-default",label:"Border"}),e.jsx(a,{varName:"--color-ink",label:"Ink"})]}),e.jsxs(l,{title:"Disabled (button)",children:[e.jsx(a,{varName:"--color-surface-disabled",label:"Disabled fill",note:"● gray-100"}),e.jsx(a,{varName:"--color-border-disabled",label:"Disabled border",note:"● gray-300 (visible)"}),e.jsx(a,{varName:"--color-text-placeholder",label:"Disabled text",note:"● gray-400"})]}),e.jsxs(l,{title:"Elevation (neutral — shadows.json)",children:[e.jsx(o,{varName:"--shadow-elevation-sm",label:"elevation.sm",note:"● Button rest"}),e.jsx(o,{varName:"--shadow-elevation-md",label:"elevation.md",note:"● Button hover"}),e.jsx(o,{varName:"--shadow-inner-sm",label:"inner.sm",note:"● Button active (pressed)"}),e.jsx(o,{varName:"--shadow-elevation-xl",label:"elevation.xl",note:"◌ overlays / float CTA"}),e.jsx(o,{varName:"--shadow-elevation-2xl",label:"elevation.2xl",note:"◌ toasts"}),e.jsx(o,{varName:"--shadow-elevation-sticky",label:"elevation.sticky",note:"↑ StickyActionBar + bottom Sheet"})]})]})]})};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 32,
    fontFamily: "var(--font-sans, system-ui)"
  }}>
      <h2 style={{
      fontSize: 24,
      fontWeight: 700
    }}>ROONA Design Tokens</h2>
      <p style={{
      color: "#4b5563",
      maxWidth: "60ch",
      marginTop: 6
    }}>
        Rendered live from <code>design/tokens/roona-tokens.css</code>. Brand emerald-500 is the identity hue;
        emerald-700 is the AA-safe interactive shade (focus ring). Primary button uses emerald-500 + white
        (2.43:1) under a logged WCAG exception (ADR-0007).
      </p>

      <div style={{
      marginTop: 24
    }}>
        <Row title="Brand">
          <Swatch varName="--color-primary" label="Primary" note="● identity #10b981" />
          <Swatch varName="--color-primary-700" label="Primary-700" note="◌ ring / AA-safe" />
          <Swatch varName="--color-secondary" label="Secondary" note="● navy #121b37" />
        </Row>
        <Row title="Feedback (semantic)">
          <Swatch varName="--color-success-icon" label="Success" />
          <Swatch varName="--color-warning-icon" label="Warning" />
          <Swatch varName="--color-error-icon" label="Error" />
          <Swatch varName="--color-info-icon" label="Info (non-brand)" />
        </Row>
        <Row title="Surface & line">
          <Swatch varName="--color-surface-sunken" label="Sunken" />
          <Swatch varName="--color-border-default" label="Border" />
          <Swatch varName="--color-ink" label="Ink" />
        </Row>
        <Row title="Disabled (button)">
          <Swatch varName="--color-surface-disabled" label="Disabled fill" note="● gray-100" />
          <Swatch varName="--color-border-disabled" label="Disabled border" note="● gray-300 (visible)" />
          <Swatch varName="--color-text-placeholder" label="Disabled text" note="● gray-400" />
        </Row>
        <Row title="Elevation (neutral — shadows.json)">
          <ElevationSwatch varName="--shadow-elevation-sm" label="elevation.sm" note="● Button rest" />
          <ElevationSwatch varName="--shadow-elevation-md" label="elevation.md" note="● Button hover" />
          <ElevationSwatch varName="--shadow-inner-sm" label="inner.sm" note="● Button active (pressed)" />
          <ElevationSwatch varName="--shadow-elevation-xl" label="elevation.xl" note="◌ overlays / float CTA" />
          <ElevationSwatch varName="--shadow-elevation-2xl" label="elevation.2xl" note="◌ toasts" />
          <ElevationSwatch varName="--shadow-elevation-sticky" label="elevation.sticky" note="↑ StickyActionBar + bottom Sheet" />
        </Row>
      </div>
    </div>
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Overview"];export{s as Overview,h as __namedExportsOrder,v as default};
