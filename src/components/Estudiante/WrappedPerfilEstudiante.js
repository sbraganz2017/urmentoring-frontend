import React from 'react';
import {
    Typography,
    Row,
    Col,
    Form,
    Input,
    Button,
    Radio,
    Select,
    Icon,
    Tooltip,    
    DatePicker,
    Cascader,
    Checkbox,
    Card,
    Avatar,
    Rate,
} from 'antd';
import NumericInput from '../../extras/NumericInput';

const { Title, Text } = Typography;
const { Option } = Select;
const { Meta } = Card;

const residencias = [
    {
        value: 'guayas',
        label: 'Guayas',
        children: [
            {
                value: 'guayaquil',
                label: 'Guayaquil',
                children: [
                    {
                        value: 'febres-cordero',
                        label: 'Febres Cordero',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

class PerfilEstudiante extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }    

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        return false;
    };

    render() {

        const { getFieldDecorator } = this.props.form;
        
        

        // Grid settings
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 24 },
                lg: { span: 24 },
                xl: { span: 24 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md: { span: 20 },
                lg: { span: 20 },
                xl: { span: 20 },
            },
        }

        const buttonItemLayout = {
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
                offset: 4,
            }
        }

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '593',
        })(
            <Select style={{ width: 70 }}>
                <Option value="593">+593</Option>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        // DatePicker setup
        const config = {
            rules: [
                {
                    type: 'object',
                    required: true,
                    message: 'Por favor, seleccione una fecha'
                }
            ],
        };

        return (
            <div >
                <Title level={2}>Información Básica</Title>
                <Row type="flex" justify="center" className="foto-perfil-estudiante">                    
                    <Col sm={24} md={24} lg={24}>
                        <Card
                            cover={
                                <img
                                    alt="estudiante"
                                    src="https://www.lapi.com.mx/image.ashx?s=57067&im=97321&t=p"
                                />
                            }
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<Rate value={4} />}
                                description="Estudiante de Universidad"
                            />
                        </Card>
                    </Col>
                </Row>
                <br />
                <Form
                    {...formItemLayout}
                    layout="vertical"
                    onSubmit={this.handleSubmit}
                    labelAlign="left"
                >
                    <Row>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Nombres" 
                                // validateStatus={nombresError ? 'error' : ''} 
                                // help={nombresError || ''}
                            >
                                {getFieldDecorator('nombres', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese su(s) nombres',
                                            whitespace: true
                                        },
                                    ],
                                })(
                                    <Input 
                                        placeholder="input placeholder" 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Apellidos:"
                                // validateStatus={apellidosError ? 'error' : ''} 
                                // help={apellidosError || ''}
                            >
                                {getFieldDecorator('apellidos', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese su(s) apellidos',
                                            whitespace: true
                                        }
                                    ],
                                })(
                                    <Input 
                                        placeholder="input placeholder" 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Fecha de Nacimiento:"
                                // validateStatus={fecha_nacError ? 'error' : ''} 
                                // help={fecha_nacError || ''}
                            >
                                {getFieldDecorator('fecha_nac', config
                                )(
                                    <DatePicker 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item
                                label={
                                    <span>
                                        Nickname:&nbsp;
                                        <Tooltip title="¿Cómo quieres que otras personas te llamen?">
                                            <Icon type="question-circle-o" />
                                        </Tooltip>
                                    </span>
                                }
                                // validateStatus={nicknameError ? 'error' : ''} 
                                // help={nicknameError || ''}
                            >
                                {getFieldDecorator('nickname', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese su nickname',
                                            whitespace: true
                                        },
                                    ],
                                })(
                                    <Input 
                                        placeholder="input placeholder" 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Residencia Actual:"
                                // validateStatus={residenciaError ? 'error' : ''} 
                                // help={residenciaError || ''}
                            >
                                {getFieldDecorator('residencia', {
                                    initialValue: [
                                        'guayas',
                                        'guayaquil',
                                        'febres-cordero'
                                    ],
                                    rules: [
                                        {
                                            type: 'array',
                                            required: true,
                                            message: 'Por favor, seleccione su residencia actual'
                                        },
                                    ],
                                })(
                                    <Cascader
                                        options={residencias} 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label={
                                    <span>
                                        Número de Celular:&nbsp;
                                            <Tooltip title="Sólo se admiten campos numéricos">
                                            <Icon type="info-circle-o" />
                                        </Tooltip>
                                    </span>                                
                                }
                                // validateStatus={num_celularError ? 'error' : ''} 
                                // help={num_celularError || ''}
                            >
                                {getFieldDecorator('num_celular', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese su número de celular',
                                            initialValue: '0000000000'
                                        }
                                    ],
                                })(
                                    <NumericInput 
                                        addonBefore={prefixSelector} 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="E-mail:"
                                // validateStatus={emailError ? 'error' : ''} 
                                // help={emailError || ''}
                            >
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                            type: 'email',
                                            message: 'El correo ingresado no es válido',
                                        },
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese su correo',
                                        },
                                    ],
                                })(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Dirección:"
                                // validateStatus={direccionError ? 'error' : ''} 
                                // help={direccionError || ''}
                            >
                                {getFieldDecorator('direccion', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese su dirección'
                                        }
                                    ],
                                })(
                                    <Input 
                                        placeholder="input placeholder" 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Forma de Pago:"
                                // validateStatus={forma_pagoError ? 'error' : ''} 
                                // help={forma_pagoError || ''}
                            >
                                {getFieldDecorator('forma_pago', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, seleccione una forma de pago'
                                        },
                                    ],
                                })(
                                    <Radio.Group>
                                        <Row xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Radio value="0">Tarjeta de Crédito</Radio>
                                        </Row>
                                        <Row xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Radio value="1">Tarjeta de Débito</Radio>
                                        </Row>
                                        <Row xs={24} sm={24} md={24} lg={24} xl={24}>
                                            <Radio value="2">PayPal</Radio>
                                        </Row>
                                    </Radio.Group>
                                )}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Nombre del Titular de la Tarjeta:"
                                // validateStatus={nombre_titularError ? 'error' : ''} 
                                // help={nombre_titularError || ''}
                            >
                                {getFieldDecorator('nombre_titular', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese el nombre del titular de la tarjeta',
                                            whitespace: true
                                        }
                                    ],
                                })(
                                    <Input 
                                        placeholder="input placeholder" 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Fecha de Expiración de la Tarjeta:"
                                // validateStatus={fecha_expiracionError ? 'error' : ''} 
                                // help={fecha_expiracionError || ''}
                            >
                                {getFieldDecorator('fecha_expiracion', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, seleccione la fecha de expiración de la tarjeta',
                                            whitespace: true
                                        },
                                    ],
                                })(
                                    <DatePicker 
                                    />
                                )}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label={
                                    <span>
                                        CVV de la Tarjeta:&nbsp;
                                        <Tooltip title="Sólo se admiten campos numéricos">
                                            <Icon type="info-circle-o" />
                                        </Tooltip>
                                    </span>
                                }
                                // validateStatus={cvvError ? 'error' : ''} 
                                // help={cvvError || ''}
                            >
                                {getFieldDecorator('cvv', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese el CVV de la tarjeta',
                                            whitespace: true
                                        }
                                    ],
                                })(
                                    <NumericInput placeholder="input placeholder" />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Materias:"
                                // validateStatus={materiasError ? 'error' : ''} 
                                // help={materiasError || ''}
                            >
                                {getFieldDecorator('materias', {
                                    initialValue: "mat-100",
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese una(s) materia(s)',
                                            whitespace: true
                                        }
                                    ],
                                })(
                                    <Select
                                        style={{width: '50%'}}
                                        // onChange={this.handleChangeMaterias}
                                        allowClear
                                        mode="tags"
                                    >
                                        <Option value="mat-100">Cálculo Diferencial</Option>
                                        <Option value="fis-100">Física</Option>
                                        <Option value="quim-100">Química</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Tipo de Usuario:"
                                // validateStatus={tipo_usuarioError ? 'error' : ''} 
                                // help={tipo_usuarioError || ''}
                            >
                                {getFieldDecorator('tipo_usuario', {
                                    initialValue: "estudiante_escuela",
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese el CVV de la tarjeta',
                                            whitespace: true
                                        },
                                    ],
                                })(
                                    <Select
                                        style={{width: '50%'}}
                                        // onChange={this.handleChangeTipoUsuario}
                                        allowClear                                        
                                    >
                                        <Option value="estudiante_escuela">Estudiante de Escuela</Option>
                                        <Option value="estudiante_colegio">Estudiante de Colegio</Option>
                                        <Option value="estudiante_universidad">Estudiante Universitario</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row
                        type="flex" 
                        justify="space-around" 
                        align="middle"
                    >
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Captcha:"
                                extra="Debemos asegurarnos que es humano"
                                // validateStatus={captchaError ? 'error' : ''} 
                                // help={captchaError || ''}
                            >
                                {getFieldDecorator("captcha:", {
                                    rules: [
                                        {
                                            required: true,
                                            message: "Por favor, ingrese el captcha que obtuvo"
                                        },
                                    ],
                                })(
                                    <Row>
                                        <Col sm={24} md={12} lg={12}>
                                            <Input />
                                        </Col>
                                        <Col sm={24} md={4} lg={4} offset={1}>
                                            <Button>captcha</Button>
                                        </Col>
                                    </Row>
                                )}
                            </Form.Item>
                        </Col>
                        <Col sm={24} md={12} lg={12}>
                            <Form.Item 
                                label="Acuerdo:"
                                // validateStatus={acuerdoError ? 'error' : ''} 
                                // help={acuerdoError || ''}
                            >
                                {getFieldDecorator("acuerdo", {
                                    valuePropName: "checked",
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Por favor, ingrese el CVV de la tarjeta',
                                            whitespace: true
                                        },
                                    ],
                                })(
                                    <Checkbox>
                                        He leído y acepto los siguientes <a href="#"><Text strong>Términos</Text></a>
                                    </Checkbox>
                                )}
                            </Form.Item>
                        </Col>
                    </Row>                    
                    <Row>
                        <Form.Item>
                            <Col sm={24} md={24} lg={24}>
                                <Row type="flex" justify="center">
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size='large'
                                    >
                                        Guardar
                                </Button>
                                </Row>
                            </Col>
                        </Form.Item>
                    </Row>
                </Form>
            </div>
        )
    }
}

const WrappedPerfilEstudiante = Form.create({ name: 'register' })(PerfilEstudiante);
export default WrappedPerfilEstudiante;