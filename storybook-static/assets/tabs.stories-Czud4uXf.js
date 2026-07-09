import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./index-DURGLf5P.js";import{T as u,a as b,b as s,c as r}from"./tabs-CKgSLarI.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";const x={title:"Components/Tabs",component:u,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Tablist สลับประเภทการตรวจ (ไทย / ต่างชาติ / นิติบุคคล) ของฟอร์ม Screening. แท็บที่เลือกมีเส้นใต้ emerald + aria-selected; focus ring มองเห็นชัด (AA-safe)."}}}},a={render:()=>{const[c,T]=d.useState("thai");return e.jsxs(u,{value:c,onValueChange:T,style:{maxWidth:360},children:[e.jsxs(b,{"aria-label":"ประเภทการตรวจ",children:[e.jsx(s,{value:"thai",children:"ไทย"}),e.jsx(s,{value:"foreign",children:"ต่างชาติ"}),e.jsx(s,{value:"entity",children:"นิติบุคคล"})]}),e.jsx(r,{value:"thai",children:"ชื่อ-นามสกุล (ภาษาไทย) ของผู้ทำรายการ"}),e.jsx(r,{value:"foreign",children:"ชื่อ-นามสกุล (อักษรโรมัน) ตามหนังสือเดินทาง"}),e.jsx(r,{value:"entity",children:"ชื่อนิติบุคคล / บริษัทตามทะเบียน"})]})}};var n,t,i,l,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("thai");
    return <Tabs value={value} onValueChange={setValue} style={{
      maxWidth: 360
    }}>
        <TabsList aria-label="ประเภทการตรวจ">
          <TabsTrigger value="thai">ไทย</TabsTrigger>
          <TabsTrigger value="foreign">ต่างชาติ</TabsTrigger>
          <TabsTrigger value="entity">นิติบุคคล</TabsTrigger>
        </TabsList>
        <TabsPanel value="thai">ชื่อ-นามสกุล (ภาษาไทย) ของผู้ทำรายการ</TabsPanel>
        <TabsPanel value="foreign">ชื่อ-นามสกุล (อักษรโรมัน) ตามหนังสือเดินทาง</TabsPanel>
        <TabsPanel value="entity">ชื่อนิติบุคคล / บริษัทตามทะเบียน</TabsPanel>
      </Tabs>;
  }
}`,...(i=(t=a.parameters)==null?void 0:t.docs)==null?void 0:i.source},description:{story:"3 แท็บประเภทการตรวจ พร้อม TabsPanel ต่อแท็บ ควบคุมด้วย useState.",...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.description}}};const f=["ScreeningTypes"];export{a as ScreeningTypes,f as __namedExportsOrder,x as default};
