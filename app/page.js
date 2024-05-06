'use client'

import { Container, Row, Col, Button, Navbar, Nav, NavbarText } from "react-bootstrap"
import Lottie from "lottie-react";
import animationData from '@/app/lotties/searching-man.json'
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main>
      <Container className="full-wrapper d-flex align-items-center justify-content-center">
        <Col lg={8} md={8} sm={12}>
          <Row>
            <Lottie className="d-sm-block d-none"
              style={{width: '1800px', height: '600px'}}
              animationData={animationData}
            />
          </Row>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <Row className="d-sm-none d-flex align-items-center justify-content-center p-4">
            <Navbar.Brand>
              <Link href="/" className='link text-decoration-none'>
                <Nav className='logo gap-1 d-flex aligin-items-center justify-content-center'>
                  <NavbarText className='text-dark' style={{fontSize: '40px'}}>iBula</NavbarText>
                  <FontAwesomeIcon color={"#f3425"} icon={faPrescriptionBottle} />
                </Nav>
              </Link>
            </Navbar.Brand>
             {/* <Lottie
              style={{width: '250px', height: '250px'}}
              animationData={animationData}
             /> */}
          </Row>
          <Row>
            <h1>Está precisando de uma bula ?</h1><br/>
            <h4>Sua solução está aqui</h4>
          </Row>
          <Link href="/medicines">
            <Button>Começar</Button>  
          </Link>
        </Col>
      </Container>
    </main>
  )
}
