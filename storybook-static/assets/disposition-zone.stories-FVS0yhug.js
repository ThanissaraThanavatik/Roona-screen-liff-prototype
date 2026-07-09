import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-DURGLf5P.js";import{D as r}from"./disposition-zone-C5pZKOx3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./button-Cj4DMzd2.js";import"./index-EXTQMK5R.js";import"./createLucideIcon-q2xymCcu.js";import"./card-CUv2tkzD.js";import"./checkbox-tyWI5K1o.js";import"./check-D3fQhiZu.js";import"./select-l-h8_a0d.js";const G={title:"Screening/Disposition Zone",component:r,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Forced case-closure zone ใต้ผล 'พบ' (SCR-HIT, P11). เป็น terminal — nav ถูกระงับโดย caller จนกว่าจะปิดเคส. default: ปุ่มถูก disable จนเลือกรายที่ตรง; true-match: legal ack [LEGAL-C2] + รับทราบ; false-positive: เหตุผล [LEGAL-C3] (จำเป็น); entity-dual: ต้องตัดสินทั้งบริษัทและผู้ทำรายการก่อนปิดเคส."}}}},c=({children:t})=>e.jsx("div",{style:{maxWidth:380},children:t}),o={render:()=>{const[t,F]=b.useState(!1);return e.jsxs(c,{children:[e.jsxs("label",{style:{display:"flex",gap:8,marginBottom:12,fontSize:13},children:[e.jsx("input",{type:"checkbox",checked:t,onChange:i=>F(i.currentTarget.checked)}),"จำลองว่าเลือกรายที่ตรงแล้ว (candidateSelected)"]}),e.jsx(r,{candidateSelected:t,onClose:i=>console.log("close",i)})]})}},s={render:()=>e.jsx(c,{children:e.jsx(r,{initialMode:"true-match",candidateSelected:!0,onClose:t=>console.log("close",t)})})},a={render:()=>e.jsx(c,{children:e.jsx(r,{initialMode:"false-positive",candidateSelected:!0,onClose:t=>console.log("close",t)})})},n={render:()=>e.jsx(c,{children:e.jsx(r,{initialMode:"entity-dual",candidateSelected:!0,onClose:t=>console.log("close",t)})})};var l,d,p,m,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(false);
    return <Frame>
        <label style={{
        display: "flex",
        gap: 8,
        marginBottom: 12,
        fontSize: 13
      }}>
          <input type="checkbox" checked={selected} onChange={e => setSelected(e.currentTarget.checked)} />
          จำลองว่าเลือกรายที่ตรงแล้ว (candidateSelected)
        </label>
        <DispositionZone candidateSelected={selected} onClose={r => console.log("close", r)} />
      </Frame>;
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source},description:{story:"Default — actions disabled until a candidate is picked. Toggle to see the enabled state.",...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.description}}};var g,S,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Frame>
      <DispositionZone initialMode="true-match" candidateSelected onClose={r => console.log("close", r)} />
    </Frame>
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Frame>
      <DispositionZone initialMode="false-positive" candidateSelected onClose={r => console.log("close", r)} />
    </Frame>
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,C,D;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Frame>
      <DispositionZone initialMode="entity-dual" candidateSelected onClose={r => console.log("close", r)} />
    </Frame>
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const R=["Default","TrueMatch","FalsePositive","EntityDual"];export{o as Default,n as EntityDual,a as FalsePositive,s as TrueMatch,R as __namedExportsOrder,G as default};
