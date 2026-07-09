import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as Le}from"./index-DURGLf5P.js";import{B as a}from"./button-Cj4DMzd2.js";import{D as Re,S as Te}from"./search-BvLNQAdK.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-EXTQMK5R.js";import"./cn-BLSKlp9E.js";import"./createLucideIcon-q2xymCcu.js";const Pe={title:"Components/Button",component:a,parameters:{docs:{description:{component:"Primary fill = emerald-500 #10b981 + white = 2.43:1 — a logged WCAG AA exception (ADR-0007). Focus ring = emerald-700 (AA-safe). hover = emerald-600, active = emerald-700. Elevation: filled buttons lift with a neutral shadow — rest elevation.sm → hover elevation.md (+1px lift, motion-reduce cancels the lift) → active inner.sm (pressed); ghost stays flat. Disabled = gray-100 fill + a visible gray-300 border + gray-400 text + elevation.sm, so it stays perceivable on white while reading as inactive (WCAG-exempt but kept visible for usability). The Hover / Active / Focus / AllStates stories force pseudo-states via storybook-addon-pseudo-states (toggle them in the toolbar too)."}}},args:{children:"ตรวจ"}},m={args:{variant:"primary"}},u={args:{variant:"secondary",children:"บันทึก"}},v={args:{variant:"ghost",children:"ยกเลิก"}},y={args:{variant:"destructive",children:"ปิดเคส"}},s={args:{variant:"line",children:"เพิ่มเพื่อนใน LINE"}},g={args:{variant:"primary",disabled:!0}},h={args:{variant:"primary",loading:!0,children:"กำลังตรวจ…"}},f={args:{variant:"secondary",size:"sm",children:"ลองอีกครั้ง"}},x={args:{variant:"primary",size:"block",leftIcon:Re,children:"ดาวน์โหลด Evidence"},parameters:{layout:"padded"}},n={args:{variant:"primary",leftIcon:Te,children:"ตรวจ"}},d=["primary","secondary","ghost","destructive"],l={primary:"ตรวจ",secondary:"บันทึก",ghost:"ยกเลิก",destructive:"ปิดเคส"},p=({children:e})=>r.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"},children:e}),t={parameters:{layout:"padded",pseudo:{hover:!0}},render:()=>r.jsx(p,{children:d.map(e=>r.jsx(a,{variant:e,children:l[e]},e))})},o={parameters:{layout:"padded",pseudo:{active:!0}},render:()=>r.jsx(p,{children:d.map(e=>r.jsx(a,{variant:e,children:l[e]},e))})},i={parameters:{layout:"padded",pseudo:{focusVisible:!0}},render:()=>r.jsx(p,{children:d.map(e=>r.jsx(a,{variant:e,children:l[e]},e))})},B=[{key:"default",label:"default",cls:"",props:{}},{key:"hover",label:"hover",cls:"pseudo-hover",props:{}},{key:"active",label:"active",cls:"pseudo-active",props:{}},{key:"focus",label:"focus",cls:"pseudo-focus-visible",props:{}},{key:"disabled",label:"disabled",cls:"",props:{disabled:!0}},{key:"loading",label:"loading",cls:"",props:{loading:!0}}],c={parameters:{layout:"padded"},render:()=>r.jsxs("div",{style:{display:"grid",gridTemplateColumns:`120px repeat(${B.length}, auto)`,gap:12,alignItems:"center"},children:[r.jsx("span",{}),B.map(e=>r.jsx("span",{style:{fontSize:12,color:"#6b7280",fontFamily:"monospace",textAlign:"center"},children:e.label},e.key)),d.map(e=>r.jsxs(Le.Fragment,{children:[r.jsx("span",{style:{fontSize:12,color:"#6b7280",fontFamily:"monospace"},children:e}),B.map(b=>r.jsx("div",{style:{display:"flex",justifyContent:"center"},children:r.jsx(a,{variant:e,size:"sm",className:b.cls,...b.props,children:l[e]})},b.key))]},e))]})},A={parameters:{layout:"padded"},render:()=>r.jsxs(p,{children:[d.map(e=>r.jsx(a,{variant:e,children:l[e]},e)),r.jsx(a,{variant:"primary",disabled:!0,children:"ตรวจ"})]})},S={parameters:{layout:"padded"},render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:320},children:[r.jsxs(p,{children:[r.jsx(a,{size:"md",children:"md (44px)"}),r.jsx(a,{variant:"secondary",size:"sm",children:"sm"}),r.jsx(a,{variant:"destructive",size:"sm",children:"sm"})]}),r.jsx(a,{size:"block",children:"block (เต็มความกว้าง)"})]})};var k,j,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var z,E,I;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "บันทึก"
  }
}`,...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var L,R,T;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "ยกเลิก"
  }
}`,...(T=(R=v.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var D,F,N;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "ปิดเคส"
  }
}`,...(N=(F=y.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var C,V,W,G,H;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "line",
    children: "เพิ่มเพื่อนใน LINE"
  }
}`,...(W=(V=s.parameters)==null?void 0:V.docs)==null?void 0:W.source},description:{story:"LINE-brand green CTA — marketing surface only (bg = --color-line #06C755, white text).",...(H=(G=s.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var P,_,$;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    disabled: true
  }
}`,...($=(_=g.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,q,J;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    loading: true,
    children: "กำลังตรวจ…"
  }
}`,...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,M,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    size: "sm",
    children: "ลองอีกครั้ง"
  }
}`,...(Q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "block",
    leftIcon: Download,
    children: "ดาวน์โหลด Evidence"
  },
  parameters: {
    layout: "padded"
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re,ae,se;n.parameters={...n.parameters,docs:{...(Z=n.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    leftIcon: Search,
    children: "ตรวจ"
  }
}`,...(re=(ee=n.parameters)==null?void 0:ee.docs)==null?void 0:re.source},description:{story:"leftIcon — decorative leading icon (20px, currentColor), hidden while loading.",...(se=(ae=n.parameters)==null?void 0:ae.docs)==null?void 0:se.description}}};var ne,te,oe,ie,ce;t.parameters={...t.parameters,docs:{...(ne=t.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    pseudo: {
      hover: true
    }
  },
  render: () => <Row>
      {VARIANTS.map(v => <Button key={v} variant={v}>
          {LABEL[v]}
        </Button>)}
    </Row>
}`,...(oe=(te=t.parameters)==null?void 0:te.docs)==null?void 0:oe.source},description:{story:"All variants forced into :hover.",...(ce=(ie=t.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var de,le,pe,me,ue;o.parameters={...o.parameters,docs:{...(de=o.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    pseudo: {
      active: true
    }
  },
  render: () => <Row>
      {VARIANTS.map(v => <Button key={v} variant={v}>
          {LABEL[v]}
        </Button>)}
    </Row>
}`,...(pe=(le=o.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:"All variants forced into :active (pressed). primary deepens to emerald-700.",...(ue=(me=o.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};var ve,ye,ge,he,fe;i.parameters={...i.parameters,docs:{...(ve=i.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    layout: "padded",
    pseudo: {
      focusVisible: true
    }
  },
  render: () => <Row>
      {VARIANTS.map(v => <Button key={v} variant={v}>
          {LABEL[v]}
        </Button>)}
    </Row>
}`,...(ge=(ye=i.parameters)==null?void 0:ye.docs)==null?void 0:ge.source},description:{story:"All variants forced into :focus-visible — emerald-700 ring (AA-safe).",...(fe=(he=i.parameters)==null?void 0:he.docs)==null?void 0:fe.description}}};var xe,Ae,Se,be,Be;c.parameters={...c.parameters,docs:{...(xe=c.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: \`120px repeat(\${STATES.length}, auto)\`,
    gap: 12,
    alignItems: "center"
  }}>
      <span />
      {STATES.map(s => <span key={s.key} style={{
      fontSize: 12,
      color: "#6b7280",
      fontFamily: "monospace",
      textAlign: "center"
    }}>
          {s.label}
        </span>)}
      {VARIANTS.map(v => <Fragment key={v}>
          <span style={{
        fontSize: 12,
        color: "#6b7280",
        fontFamily: "monospace"
      }}>{v}</span>
          {STATES.map(s => <div key={s.key} style={{
        display: "flex",
        justifyContent: "center"
      }}>
              <Button variant={v} size="sm" className={s.cls} {...s.props}>
                {LABEL[v]}
              </Button>
            </div>)}
        </Fragment>)}
    </div>
}`,...(Se=(Ae=c.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source},description:{story:`Every variant × every state, shown statically. hover / active / focus use the addon's
per-element pseudo classes; disabled / loading use real props.`,...(Be=(be=c.parameters)==null?void 0:be.docs)==null?void 0:Be.description}}};var ke,je,we;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <Row>
      {VARIANTS.map(v => <Button key={v} variant={v}>
          {LABEL[v]}
        </Button>)}
      <Button variant="primary" disabled>
        ตรวจ
      </Button>
    </Row>
}`,...(we=(je=A.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};var ze,Ee,Ie;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  parameters: {
    layout: "padded"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12,
    maxWidth: 320
  }}>
      <Row>
        <Button size="md">md (44px)</Button>
        <Button variant="secondary" size="sm">
          sm
        </Button>
        <Button variant="destructive" size="sm">
          sm
        </Button>
      </Row>
      <Button size="block">block (เต็มความกว้าง)</Button>
    </div>
}`,...(Ie=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};const _e=["Primary","Secondary","Ghost","Destructive","Line","Disabled","Loading","Small","Block","WithIcon","Hover","Active","Focus","AllStates","AllVariants","AllSizes"];export{o as Active,S as AllSizes,c as AllStates,A as AllVariants,x as Block,y as Destructive,g as Disabled,i as Focus,v as Ghost,t as Hover,s as Line,h as Loading,m as Primary,u as Secondary,f as Small,n as WithIcon,_e as __namedExportsOrder,Pe as default};
