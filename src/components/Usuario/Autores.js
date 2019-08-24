import React from 'react';
import {
  Typography, Card, Descriptions, Row, Col, Rate, Menu, Icon, Table, Divider,
  Tag, Button, Dropdown, Label, InputNumber, Popconfirm, Form, Input
} from 'antd';
// import Header from './Header';
import WrappedEditableTable from './WrappedEditableTable'
import MetodosAxios from '../../requerimientos/MetodosAxios';

const { Title } = Typography;
const { SubMenu } = Menu;

export default class Autores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: [],      
      autor_seleccionado: undefined,
      carga_tabla: false,
    };
    this.wrappedEditableTableElement = React.createRef();
  }

  obtener_autor = (id_autor_seleccionado) => {    
    this.state.autores.map( autor => {      
      if (autor.id === id_autor_seleccionado) {
        this.setState({
          autor_seleccionado: autor,
        }, () => {
          console.log('this.state.autor_seleccionado', this.state.autor_seleccionado);
        });
      }
    });
  }

  handleClick = e => {
    let id_autor_seleccionado = parseInt(e.key);  
    /**
     * Llamo a una funcion del hijo
     */
    // this.childRef.current.showAlert();

    this.obtener_autor(id_autor_seleccionado);
    this.setState({
      carga_tabla: true,
    }, () => {
      console.log('this.state.carga_tabla', this.state.carga_tabla);
    });
  };

  generar_autores = () => {
    let autores = [];
    for (let i = 0; i < 5; i++) {
      let autor = {
        id: i,
        nombre: `Autor ${i}`
      }
      autores.push(autor);
    }
    this.setState({
      autores: autores,
    }, () => {
      // console.log('this.state.autores', this.state.autores);
    })
  }  

  obtener_autores = () => {
    let autores = [];
    MetodosAxios.obtener_autores().then( res => {
      // console.log(res);
      this.setState({
        autores: res.data,
      }, () => {
        console.log('this.state.autores', this.state.autores);
      });
    });
  }  

  componentDidMount = () => {
    this.obtener_autores();
    // this.generar_autores();
  }
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Title>Autores</Title>
        <Row>
          {/*INICIO MENU*/}
          <Col lg={{ span: 4 }} md={{ span: 4 }}>
            <Menu
              onClick={this.handleClick}
              // style={{ width: 256 }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['submenu']}
              mode="inline"
            >
              <SubMenu
                key="submenu"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Autores</span>
                  </span>
                }
              >

                {
                  this.state.autores &&
                  this.state.autores.map(autor => {
                    return (
                      <Menu.Item
                        key={autor.id}                      
                      >
                        {autor.nombres}
                      </Menu.Item>
                    )
                  })
                }
              </SubMenu>
            </Menu>
          </Col>
          {/*FIN MENU*/}
          <Col lg={{ span: 16, offset: 2 }} md={{ span: 16, offset: 2 }}>
            {
              this.state.carga_tabla &&
              <WrappedEditableTable
                key={Math.random()}
                ref={this.wrappedEditableTableElement}
                autor_seleccionado ={this.state.autor_seleccionado}
              />
            }            
          </Col>
        </Row>
      </div>
    );
  }
}