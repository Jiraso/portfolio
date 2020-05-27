import React from 'react';
import {
    Container,
    Jumbotron,
    Row,
    Col,
} from 'reactstrap';

function Hero(props) {
    return (
        <React.Fragment>
            <Jumbotron className="bg-transparent jumbotron-fluid">
                <Container>
                    <Row className="justify-content-center py-5">
                        <Col md="8" sm="12" xs="12">
                            {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                            {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
                            {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Hero