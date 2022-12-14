import React, { useContext } from 'react';
import FridgeContent from './components/FridgeContent/FridgeContent';
import SignIn from './components/SignIn/SignIn';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './styles.css';
import UserContext from '../../contexts/userContext';
import Recipe from './components/Recipe/Recipe';

function Home() {
    const userContext = useContext(UserContext);

    return (
        <div className="main-content">
            {
                userContext.user ?
                <Container>
                    <Row>
                        <Col><SignIn /></Col>
                    </Row>
                    <Row>
                        <Col><Recipe /></Col>
                    </Row>
                    <Row>
                        <Col><FridgeContent /></Col>
                    </Row>
                </Container> :
                <Container>
                    <Row>
                        <Col><SignIn /></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                    </Row>
                </Container>
            }
            
        </div>
    );
}

export default Home;