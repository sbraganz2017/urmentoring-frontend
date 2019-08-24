import React from 'react';
import LayoutLoginPage from "../extras/LayoutLoginPage";
import { Form, Icon, Input, Button, Alert } from 'antd';
import RedireccionRol from '../requerimientos/RedireccionRol';
import MetodosAxios from '../requerimientos/MetodosAxios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch,
    NavLink,
} from "react-router-dom";
import PrincipalEstudiante from '../components/Estudiante/PrincipalEstudiante';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingSubmit: false,
            mensajeError: undefined,
            loginError: false
        }
    }

    /*Manejar el submit del formulario*/
    envioCredenciales = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({ loadingSubmit: true })
                MetodosAxios.login(2)
                    .then(res => {
                        console.log(res.data.data);
                        res.data.data.perfil = 1;
                        RedireccionRol.redirectLogin(this.props.history, res.data.data.perfil);
                        localStorage.setItem('user', JSON.stringify(res.data.data));
                    }).catch(error => {
                        this.setState({
                            loadingSubmit: false,
                            mensajeError: error.message,
                            loginError: true
                        });
                    });
            }
        });
    }

    mostrarMensajeError = () => {
        this.setState({
            loginError: false
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Router>
                <LayoutLoginPage>
                    {this.state.loginError ? <Alert message={this.state.mensajeError} type="error" closable afterClose={this.mostrarMensajeError} showIcon /> : null}
                    <Form onSubmit={this.envioCredenciales} className="login-form">
                        <br></br>
                        <p className="titulo-login">Autenticación</p>
                        <br></br>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Por favor ingrese su email!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email..." autoComplete="off" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userpass', {
                                rules: [{ required: true, message: 'Por favor ingrese su contraseña!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña..." />
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button 
                                loading={this.state.loadingSubmit} 
                                type="primary" 
                                htmlType="submit" 
                                className="button-login"
                            >
                                Ingresar
                                <Route path="/estudiante/" component={PrincipalEstudiante} />
                                <NavLink to="/estudiante/" />
                            </Button>
                        </Form.Item>
                    </Form>
                </LayoutLoginPage>
            </Router>
        );
    }
}

const WrappedLogin = Form.create({ name: 'login' })(Login);

export default WrappedLogin;