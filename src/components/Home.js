import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MdEmail  } from 'react-icons/md'
import { GrLinkedin, GrGithub } from 'react-icons/gr'

import '../css/homeStyle.css'

class Home extends Component {
    render() {
        return(
        <div>
            <Container id = "homeContainer" fluid="true">
                <Row>
                    <div>
                        <Col>
                            <p id = "homeName">
                                Mikhail Francesco D. Lukban
                            </p>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <a href ="mailto:mikoi.lukban@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MdEmail size = {64}/>
                        </a>
                    </Col>
                    <Col>
                        <a href ="https://github.com/KoboldM2/" target="_blank" rel="noopener noreferrer">
                            <GrGithub size = {64}/>
                        </a>
                    </Col>
                    <Col>
                        <a href ="https://www.linkedin.com/in/mikoilukban/" target="_blank" rel="noopener noreferrer">
                            <GrLinkedin size = {64}/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default Home