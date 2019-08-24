import React from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Divider,
  Row,
  Col,
  Typography
} from 'antd';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch,
  NavLink,
} from "react-router-dom";

import WrappedPerfilEstudiante from '../components/Estudiante/WrappedPerfilEstudiante';
import PrincipalEstudiante from '../components/Estudiante/PrincipalEstudiante';
import ChatEstudiante from '../components/Estudiante/ChatEstudiante';
import TutoriaEstudiante from '../components/Estudiante/TutoriaEstudiante';
import LoginPage from '../views/LoginPage';
import logo from '../img/logo.png';
// INICIO VISTAS TALLER 5
import { WrappedPerfil } from "../components/Usuario/WrappedPerfil";
import Autores from "../components/Usuario/Autores";
import LibrosCalificados from "../components/Usuario/LibrosCalificados";
// FIN VISTAS TALLER 5

const { Header, Content, Footer } = Layout;
const { Title } = Typography;


const MyLayout = ({ history }) => {
  return (
    <div>
      <div style={{ position: 'fixed', zIndex: 1, background: '#001529', marginTop: 0, width: '100%' }}>
        <div className="container">
          <img src={logo} height={50} style={{ paddingTop: 10, paddingBottom: 10 }} />
        </div>
      </div>
      <Router>
        <Layout
          className="layout"
        >
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'white', marginTop: 50 }}>
            <div className="logo" />
            <Menu
              className="container"
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '50px', margin: 'auto' }}

            >
              <Menu.Item key="1">
                INICIO
                <NavLink to="/estudiante/" />
              </Menu.Item>
              <Menu.Item key="2">
                PERFIL
                            <NavLink to="/estudiante/perfil-estudiante" />
              </Menu.Item>
              <Menu.Item key="3">
                TUTORIA
                            <NavLink to="/estudiante/tutoria-estudiante" />
              </Menu.Item>
              <Menu.Item key="4">
                CHAT
                            <NavLink to="/estudiante/chat-estudiante" />
              </Menu.Item>
              <Menu.Item key="5">
                CERRAR SESION
                            <NavLink to="/" />
              </Menu.Item>
              {/* INICIO RUTAS TALLER 5 */}
              {/* <Menu.Item key="6" >
                            PERFIL USUARIO                            
                            <NavLink to="/estudiante/perfil-usuario" />
                        </Menu.Item>
                        <Menu.Item key="7">
                            AUTORES
                            <NavLink exact to="/estudiante/autores/" />
                        </Menu.Item>
                        <Menu.Item key="8">
                            LIBROS CALIFICADOS
                            <NavLink to="/estudiante/libros-calificados/" />
                        </Menu.Item> */}
              {/* FIN RUTAS TALLER 5 */}
            </Menu>
          </Header>
          <Content style={{ marginTop: 80, background: '#fff' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>
              {/* Aqui si no esta primero perfil estudiante, y luego estudiante NO ME VALE */}
              {/* Segun la logica, se deben de agregar las paginas al reves a como se las agrega arriba */}
              <Switch>
                {/* INICIO RUTAS TALLER 5 */}
                <Route path="/estudiante/perfil-usuario/" component={WrappedPerfil} />
                <Route path="/estudiante/autores/" component={Autores} />
                <Route path="/estudiante/libros-calificados/" component={LibrosCalificados} />
                {/* FIN RUTAS TALLER 5 */}
                <Route path="/estudiante/tutoria-estudiante/" component={TutoriaEstudiante} />
                <Route path="/estudiante/chat-estudiante/" component={ChatEstudiante} />
                <Route path="/estudiante/perfil-estudiante/" component={WrappedPerfilEstudiante} />
                <Route path="/estudiante/" component={PrincipalEstudiante} />
                <Route path="/" component={LoginPage} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Row>
              <Col sm={8} md={8} lg={8}>
                {/* <h4>Contáctanos</h4> */}
                <Title level={4}>Contáctanos</Title>
                <p>support@urmentoring.com</p>
                <p>1800-URMENTORING</p>
              </Col>
              <Col sm={8} md={8} lg={8}>
                {/* <h4>Nuestra Empresa</h4> */}
                <Title level={4}>Nuestra Empresa</Title>
                <p>Acerca de Nosotros</p>
                <p>Politicas de Privacidad</p>
                <p>Términos de Servicio</p>
              </Col>
              <Col sm={8} md={8} lg={8}>
                {/* <h4>Enlaces de Interés</h4> */}
                <Title level={4}>Enlaces de Interés</Title>
                <p>Preguntas Frecuentes</p>
                <p>Mapa Web</p>
              </Col>
            </Row>
            <Row>

            </Row>
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default MyLayout