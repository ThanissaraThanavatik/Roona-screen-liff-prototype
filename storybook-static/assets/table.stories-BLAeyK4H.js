import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T,a as c,b as a,c as s,d as h,e as t}from"./table-D7rfBOnA.js";import"./cn-BLSKlp9E.js";const b={title:"Components/Table",component:T,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Table primitives แบบ semantic สำหรับรายการประวัติการตรวจ (SCR-HIST). เป็น wrapper บาง ๆ บน native table (คงความหมายแถว + การผูก header ให้ screen reader). บน LIFF แคบจะ scroll แนวนอนในตัว."}}}},p=[{name:"สมชาย ใจดี",result:"ไม่พบ",time:"30 มิ.ย. 14:02",by:"พนักงาน A"},{name:"Somsak J.",result:"พบ",time:"30 มิ.ย. 13:48",by:"พนักงาน B"},{name:"บริษัท รุ่งเรือง จำกัด",result:"ไม่พบ",time:"30 มิ.ย. 11:15",by:"พนักงาน A"},{name:"John Smith",result:"พบ",time:"29 มิ.ย. 17:30",by:"เจ้าของร้าน"}],n={render:()=>e.jsx("div",{style:{maxWidth:360},children:e.jsxs(T,{children:[e.jsx(c,{children:e.jsxs(a,{children:[e.jsx(s,{children:"ชื่อ"}),e.jsx(s,{children:"ผล"}),e.jsx(s,{children:"เวลา"}),e.jsx(s,{children:"ผู้ตรวจ"})]})}),e.jsx(h,{children:p.map(r=>e.jsxs(a,{children:[e.jsx(t,{children:r.name}),e.jsx(t,{children:r.result}),e.jsx(t,{children:r.time}),e.jsx(t,{children:r.by})]},`${r.name}-${r.time}`))})]})})};var d,i,o,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }}>
      <Table>
        <THead>
          <Tr>
            <Th>ชื่อ</Th>
            <Th>ผล</Th>
            <Th>เวลา</Th>
            <Th>ผู้ตรวจ</Th>
          </Tr>
        </THead>
        <TBody>
          {ROWS.map(r => <Tr key={\`\${r.name}-\${r.time}\`}>
              <Td>{r.name}</Td>
              <Td>{r.result}</Td>
              <Td>{r.time}</Td>
              <Td>{r.by}</Td>
            </Tr>)}
        </TBody>
      </Table>
    </div>
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source},description:{story:"ประวัติการตรวจ — ชื่อ / ผล / เวลา / ผู้ตรวจ.",...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.description}}};const u=["HistoryRows"];export{n as HistoryRows,u as __namedExportsOrder,b as default};
