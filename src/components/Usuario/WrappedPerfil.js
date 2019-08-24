import React from 'react'
import 'antd/dist/antd.css';
import { Button, Row, Col, Select, Form, Input, Checkbox, DatePicker, Typography  } from 'antd';
// import Header from './Header';

const { Title } = Typography;

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};

class Perfil extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });    
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        {/* <Header /> */}
        <Title>Perfil Usuario</Title>
        <Form onSubmit={this.handleSubmit} {...formItemLayout}
        style={{ marginTop: 16 }}>
          <Form.Item label="Nombres" >
            {getFieldDecorator('nombres', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, ingrese sus nombres',
                },
              ],
            })(<Input placeholder="Por favor, ingrese sus nombres" />)}
          </Form.Item>
          <Form.Item label="Apellidos" >
            {getFieldDecorator('apellidos', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, ingrese sus apellidos',
                },
              ],
            })(<Input placeholder="Por favor, ingrese sus apellidos" />)}
          </Form.Item>
          <Form.Item label="Cedula" >
            {getFieldDecorator('cedula', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, ingrese su cedula',
                },
              ],
            })(<Input placeholder="Por favor, ingrese su cedula" />)}
          </Form.Item>
          <Form.Item label="Correo" >
            {getFieldDecorator('correo', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, ingrese su correo',
                },
              ],
            })(<Input placeholder="Por favor, ingrese su correo" />)}
          </Form.Item>
          <Form.Item label="Fecha de Nacimiento" >
            {getFieldDecorator('fecha_nac', {
              rules: [
                {
                  required: true,
                  message: 'Por favor, ingrese su fecha de nacimiento',
                },
              ],
            })(<DatePicker placeholder="Por favor, ingrese su fecha de nacimiento" />)}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export const WrappedPerfil = Form.create({ name: 'perfil' })(Perfil);