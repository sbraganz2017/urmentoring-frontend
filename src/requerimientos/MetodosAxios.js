import axios from 'axios';

export default class MetodosAxios {
    static instanceAxios = axios.create({
        // baseURL: 'http://localhost:8000/api'
        baseURL: 'https://reqres.in/api'
      });

    static login = (id) => {
        return MetodosAxios.instanceAxios.get(`/users/${id}`);
    }

    //   static obtener_autores = () => {
    //       return MetodosAxios.instanceAxios.get('/autores/');
    //   }

    //   static obtener_libroautores = () => {
    //       return MetodosAxios.instanceAxios.get('/libroautores/');
    //   }

    //   static obtener_libros = () => {
    //       return MetodosAxios.instanceAxios.get('/libros/');
    //   }

    //   static obtener_libros_calificados = () => {
    //       return MetodosAxios.instanceAxios.get('/calificaciones/');
    //   }
    //   static obtener_historico = (nombre_autor) => {
    //       return MetodosAxios.instanceAxios.get(`/historico/${nombre_autor}`);
    //   }
}