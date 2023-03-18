import React from 'react';
import { Form, Input, Button } from 'antd';

function ContactForm() {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form layout='horizontal' onFinish={onFinish} labelCol={{span: 4}} wrapperCol={{span: 16}}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Message" name="message" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button className='float-end' type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ContactForm;
