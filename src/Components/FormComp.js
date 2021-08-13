import React, { useState } from 'react';
import { Form, Row, Col, Input } from 'antd';
import '../App.css';
const FormComp = () => {
    const [expand, setExpand] = useState(false);
    const [form] = Form.useForm();
  
    const getFields = () => {
      const count = expand ? 10 : 6;
      const children = [];
      for (let i = 0; i < count; i++) {
        children.push(
          <Col align="center" key={i}>
            <Form.Item
              name={`field-${i}`}
              label={`Field ${i}`}
              rules={[
                {
                  required: true,
                  message: 'Input something!',
                },
              ]}
            >
              <Input placeholder="placeholder" />
            </Form.Item>
          </Col>,
        );
      }
      return children;
    };
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };


  
    return (
    <div className="container-fluid form-div">
        <h1 style={{textAlign:"center"}}>Popup Content</h1>
         <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24}>{getFields()}</Row>
      </Form>
       
    </div>
    )
}


export default FormComp;