import React from 'react';
import {
  Table,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  message,
  Rate,
  Dropdown,
  Menu,
  Icon,
  Popconfirm,
  Divider,
} from "antd";
import MetodosAxios from '../../requerimientos/MetodosAxios';

const FormItem = Form.Item;
const { SubMenu } = Menu;

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Editar</Menu.Item>
    <Menu.Item key="2">Eliminar</Menu.Item>
  </Menu>
);

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      libros: [],
      libroautores: [],
      calificaciones: [],
      editingKey: "",
      loading: true,
      rating: -1,
    }
    this.handleChangeRating = this.handleChangeRating.bind(this);
  }

  handleChangeRating = rating => {
    this.setState({
      rating: rating,
    }, () => {
      console.log('this.state.rating', this.state.rating);
    });
  }

  obtener_libros = () => {
    let libros = [];
    MetodosAxios.obtener_libros().then(res => {
      // console.log(res)
      res.data.map(registro => {
        let libro = {
          titulo: registro.titulo,
          isbn: registro.isbn,
          rating: 0,
        };
        libros.push(libro);
      });
      // console.log('libros', libros);
      this.setState({
        libros: libros,
      }, () => {
        console.log('this.state.libros', this.state.libros);
        // this.obtener_libroautores(parseInt(this.props.autor_seleccionado.id));
        this.obtener_historico(this.props.autor_seleccionado.nombres);
      });
    });
  }

  obtener_libroautores = (id_autor_seleccionado) => {
    let libroautores = [];
    MetodosAxios.obtener_libroautores().then(libros_del_autor => {
      // console.log('libros_del_autor', libros_del_autor);
      libros_del_autor.data.map(libroautor => {
        let id_autor = libroautor.id;
        // console.log('id_autor_seleccionado, id_autor', id_autor_seleccionado, id_autor);
        if (id_autor_seleccionado === id_autor) {
          // console.log('autores iguales');
          this.state.libros.map(libro => {
            // console.log('libroautor.isbn, libro.isbn', libroautor.isbn, libro.isbn);
            if (libroautor.isbn === libro.isbn) {
              // console.log('libros iguales');              
              libro.key = `id_autor-${id_autor}-id_libro-${libro.isbn}`;
              libro.isEditing = false;
              // console.log('libro', libro);
              libroautores.push(libro);
            }
          });
        }
      });
      /**
      * Aqui terminan los dos lazos
      */
      // console.log('libroautores', libroautores);
      this.setState({
        data: libroautores,
        loading: false,
      }, () => {
        console.log('this.state.data', this.state.data);
      });
    });
  }

  obtener_historico = (nombre_autor) => {
    let libros_del_autor = [];
    MetodosAxios.obtener_historico(nombre_autor).then(historico => {
      // console.log('historico', historico);
      historico.data.map(libro => {
        let libro_del_autor = {
          key: libro.isbn,
          titulo: libro.titulo,
          isbn: libro.isbn,
          rating: 0,
          isEditing: false,
        };
        libros_del_autor.push(libro_del_autor);
      })
      console.log(libros_del_autor);
      this.setState({
        data: libros_del_autor,
        loading: false,
      }, () => {
        console.log('this.state.data', this.state.data);
        console.log('this.state.loading', this.state.loading);
      });
    });
  }

  componentDidMount = () => {
    this.obtener_libros();
  }

  isEditing = record => {
    return record.key === this.state.editingKey;
  };

  delete(key) {
    let rows = this.state.data;
    // console.log('rows', rows);
    console.log('ANTES DE ELIMINAR UNA FILA: this.state.data', this.state.data);
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].key === key)
        rows.splice(i, 1)
    }
    // console.log('rows', rows);
    this.setState({
      data: rows,
    }, () => {
      console.log('DESPUES DE ELIMINAR UNA FILA: this.state.data', this.state.data);
    })
  }

  edit(key) {
    let rows = [];
    this.state.data.map(obj => {
      if (obj.key === key)
        obj.isEditing = true
      else
        obj.isEditing = false
      rows.push(obj)
    })
    this.setState({ editingKey: key, data: rows });
  }


  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, row) => {
      if (err)
        return
      console.log('row', row);

      let item = undefined;
      this.state.data.map(registro => {
        if (registro.key === this.state.editingKey) {
          item = registro;
        }
      });
      console.log('item', item);

      let rows = this.state.data;
      rows.map(obj => {
        console.log('obj.key, item.key', obj.key, item.key);
        if (obj.key === item.key) {
          /**
           * Edito unicamente el rating 
           */
          obj.rating = row.rating;
          console.log('ENVIO FORMULARIO', obj);
          this.setState({
            data: rows,
          }, () => {
            console.log('this.state.data', this.state.data);
          });
        }
      });


    })

    // INICIO cerrar la edicion
    let rows = [];
    this.state.data.map(obj => {
      obj.isEditing = false
      rows.push(obj)
    })
    this.setState({ editingKey: "", data: rows });
    // FIN cerrar la edicion
  }

  cancel = () => {
    let rows = [];
    this.state.data.map(obj => {
      obj.isEditing = false
      rows.push(obj)
    })
    this.setState({ editingKey: "", data: rows });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Table
          dataSource={this.state.data}
          columns={[
            {
              title: 'Titulo',
              dataIndex: 'titulo',
              editable: false,
              render: (text, record) => {
                return <span>{text}</span>
              }
            },
            {
              title: 'ISBN',
              dataIndex: 'isbn',
              key: 'isbn',
              editable: false,
              render: (text, record) => {
                return <span>{text}</span>
              }
            },
            {
              title: 'Rating',
              key: 'rating',
              dataIndex: 'rating',
              editable: false,
              render: (text, record) => {
                if (record.isEditing) {
                  return <FormItem>
                    {getFieldDecorator('rating', {
                      rules: [
                        {
                          required: true,
                          message: `Por favor ingrese el rating!`
                        }
                      ],
                      initialValue: record.rating
                    })(
                      <Rate />
                    )}
                  </FormItem>
                } else
                  return <Rate disabled defaultValue={record.rating} />
              }
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => {
                return (
                  <div>
                    {
                      record.isEditing == false &&
                      <span>
                        <a onClick={() => this.edit(record.key)}>Editar</a>
                        <Divider type="vertical" />
                        <a onClick={() => this.delete(record.key)}>Eliminar</a>
                      </span>
                    }
                    {
                      record.isEditing &&
                      <span>
                        <Button htmlType="submit">Aceptar</Button>
                        {/*<Popconfirm title="¿Seguro de Aceptar?" onConfirm={() => this.handleSubmit(record)}>
                          <a>Aceptar</a>
                        </Popconfirm>*/}
                        <Divider type="vertical" />
                        <Popconfirm title="¿Seguro de Cancelar?" onConfirm={() => this.cancel(record.key)}>
                          <a>Cancelar</a>
                        </Popconfirm>
                      </span>
                    }
                  </div>
                )
              }
            },
          ]}
          bordered
          loading={this.state.loading}
          rowClassName="editable-row"
          title={() => `Autor:  ${this.props.autor_seleccionado.nombres}`}
          footer={() => `Número de libros encontrados: ${this.state.data.length}`}
        // showHeader
        />
      </Form>
    )
  }
}

const WrappedEditableTable = Form.create({})(EditableTable);
export default WrappedEditableTable;