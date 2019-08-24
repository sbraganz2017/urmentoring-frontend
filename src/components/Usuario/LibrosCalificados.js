import React from 'react';
import 'antd/dist/antd.css';
// import Header from './Header';
import MetodosAxios from '../../requerimientos/MetodosAxios';
import { Typography, Card, Rate, Descriptions, Table } from 'antd';

const { Title } = Typography;

export default class LibrosCalificados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libros: [],
      data: [],
      loading: true,
    }
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
        this.obtener_libros_calificados();
      });
    });
  }

  obtener_libros_calificados = () => {
    let libros_calificados = [];
    MetodosAxios.obtener_libros_calificados().then(calificaciones => {
      calificaciones.data.map(libro_calificado => {
        // console.log('libro_calificado', libro_calificado);
        this.state.libros.map(libro => {
          // console.log('libro.isbn, libro_calificado.isbn', libro.isbn, libro_calificado.isbn);
          if (libro.isbn === libro_calificado.isbn) {
            // console.log('libros iguales');
            libro.key = libro.isbn;
            libro.rating = libro_calificado.calificacion;
            // console.log(libro);  
            libros_calificados.push(libro);
          }
        });
      });
      /**
       * Aqui terminan los dos lazos
       */
      // console.log('libros_calificados', libros_calificados);
      this.setState({
        data: libros_calificados,
        loading: false,
      }, () => {
        console.log('this.state.data', this.state.data);
        console.log('this.state.loading', this.state.loading);
      });
    });
  }

  componentDidMount = () => {
    this.obtener_libros();
    // this.obtener_libros_calificados();
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Title>Libros Calificados</Title>
        <Table
          dataSource={this.state.data}
          columns={
            [
              {
                title: 'Titulo',
                dataIndex: 'titulo',
              },
              {
                title: 'ISBN',
                dataIndex: 'isbn',
              },
              {
                title: 'Rating',
                dataIndex: 'rating',
                render: (text, record) => {
                  return <Rate disabled defaultValue={record.rating} />
                }
              },
            ]
          }
          bordered
          loading={this.state.loading}
          rowClassName="editable-row"
          footer={() => `Número de libros encontrados: ${this.state.data.length}`}
        />
      </div>
    );
  }
}