import React from 'react';
import { Card, Col, Row, Icon, Avatar, Badge } from 'antd';

const { Meta } = Card;

class TutoriaEstudiante extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const CardExample = ({ children }) => (
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
                <Meta
                    avatar={
                        <Badge
                            count={1}
                        >
                            <Avatar 
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                            />
                        </Badge>                    
                    }
                    title="Card title"
                    description="This is the description"
                />
                {children}
            </Card>
        );
        return (
            <Row gutter={16}>
                <Col sm={24} md={8} lg={8}>
                    <CardExample />
                </Col>
                <Col sm={24} md={8} lg={8}>
                    <CardExample />                    
                </Col>
                <Col sm={24} md={8} lg={8}>
                    <CardExample />
                </Col>
            </Row>
        )
    }
}

export default TutoriaEstudiante;