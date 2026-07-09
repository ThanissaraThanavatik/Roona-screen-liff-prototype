import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./select-l-h8_a0d.js";import"./index-DURGLf5P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./cn-BLSKlp9E.js";import"./createLucideIcon-q2xymCcu.js";const w={title:"Components/Select",component:t,parameters:{layout:"padded",viewport:{defaultViewport:"liff"},docs:{description:{component:"Native <select> ที่ปลอดภัยด้าน a11y บน LIFF mobile (ใช้ system picker). ใช้กับ dropdown เหตุผล false-positive (LEGAL-C3), สัญชาติ, ฟิลเตอร์ประวัติ. `invalid` ผูกกรอบกับสีแดง; ต้องมี <label> เสมอ."}}}},i={display:"block",marginBottom:6,fontSize:14,fontWeight:600},o={render:()=>e.jsxs("div",{style:{maxWidth:360},children:[e.jsx("label",{htmlFor:"reason-default",style:i,children:"เหตุผลที่ไม่ใช่คนเดียวกัน"}),e.jsxs(t,{id:"reason-default",defaultValue:"",children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกเหตุผล"}),e.jsx("option",{value:"dob",children:"วันเกิดไม่ตรงกัน"}),e.jsx("option",{value:"nationality",children:"สัญชาติไม่ตรงกัน"}),e.jsx("option",{value:"id",children:"เลขบัตรประชาชนไม่ตรงกัน"}),e.jsx("option",{value:"other",children:"อื่น ๆ"})]})]})},n={render:()=>e.jsxs("div",{style:{maxWidth:360},children:[e.jsx("label",{htmlFor:"reason-invalid",style:i,children:"เหตุผลที่ไม่ใช่คนเดียวกัน"}),e.jsxs(t,{id:"reason-invalid",invalid:!0,defaultValue:"",children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกเหตุผล"}),e.jsx("option",{value:"dob",children:"วันเกิดไม่ตรงกัน"}),e.jsx("option",{value:"nationality",children:"สัญชาติไม่ตรงกัน"}),e.jsx("option",{value:"id",children:"เลขบัตรประชาชนไม่ตรงกัน"})]}),e.jsx("p",{style:{marginTop:6,fontSize:13,color:"#ef4444"},children:"กรุณาเลือกเหตุผล"})]})},l={render:()=>e.jsxs("div",{style:{maxWidth:360},children:[e.jsx("label",{htmlFor:"reason-disabled",style:i,children:"เหตุผลที่ไม่ใช่คนเดียวกัน"}),e.jsx(t,{id:"reason-disabled",disabled:!0,defaultValue:"dob",children:e.jsx("option",{value:"dob",children:"วันเกิดไม่ตรงกัน"})})]})};var a,r,d,s,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }}>
      <label htmlFor="reason-default" style={labelStyle}>
        เหตุผลที่ไม่ใช่คนเดียวกัน
      </label>
      <Select id="reason-default" defaultValue="">
        <option value="" disabled>
          เลือกเหตุผล
        </option>
        <option value="dob">วันเกิดไม่ตรงกัน</option>
        <option value="nationality">สัญชาติไม่ตรงกัน</option>
        <option value="id">เลขบัตรประชาชนไม่ตรงกัน</option>
        <option value="other">อื่น ๆ</option>
      </Select>
    </div>
}`,...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source},description:{story:"มี <label> + ตัวเลือกเหตุผล.",...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.description}}};var c,u,m,v,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }}>
      <label htmlFor="reason-invalid" style={labelStyle}>
        เหตุผลที่ไม่ใช่คนเดียวกัน
      </label>
      <Select id="reason-invalid" invalid defaultValue="">
        <option value="" disabled>
          เลือกเหตุผล
        </option>
        <option value="dob">วันเกิดไม่ตรงกัน</option>
        <option value="nationality">สัญชาติไม่ตรงกัน</option>
        <option value="id">เลขบัตรประชาชนไม่ตรงกัน</option>
      </Select>
      <p style={{
      marginTop: 6,
      fontSize: 13,
      color: "#ef4444"
    }}>กรุณาเลือกเหตุผล</p>
    </div>
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"สถานะ invalid — กรอบแดง.",...(b=(v=n.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var h,x,y,f,j;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 360
  }}>
      <label htmlFor="reason-disabled" style={labelStyle}>
        เหตุผลที่ไม่ใช่คนเดียวกัน
      </label>
      <Select id="reason-disabled" disabled defaultValue="dob">
        <option value="dob">วันเกิดไม่ตรงกัน</option>
      </Select>
    </div>
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"ปิดใช้งาน.",...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.description}}};const z=["Default","Invalid","Disabled"];export{o as Default,l as Disabled,n as Invalid,z as __namedExportsOrder,w as default};
