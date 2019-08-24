import React from 'react';
import {
  PageHeader,
  Typography,
  Row, Col,
} from 'antd';

const { Title, Text, Paragraph } = Typography;
const routes = [
  {
    path: 'index',
    breadcrumbName: 'Estudiante',
  },
  {
    path: 'first',
    breadcrumbName: 'Inicio',
  },
];

class PrincipalEstudiante extends React.Component {
  render() {
    return (
      <div>
        <br />
        <section>
          <div class="container">
            <h3 class="title">Beneficios como estudiante</h3>
            <p>En esta sección usted tendrá varias facilidades al tomar una tutoría. Los beneficios de haber ingresado como estudiante son: </p>
          </div>
        </section>
      </div>
    )
  }
}

export default PrincipalEstudiante;