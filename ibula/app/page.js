'use client'

import { useEffect, useState } from "react";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";

export default function Home() {
  
  const [medicines, setMedicines] = useState([])
  const [searchMedicine, setSearchMedicine] = useState("")

  useEffect(() => {
    getMedicines()
  }, [])

  const getMedicines = async () => {
    try {
      const response = await fetch('http://localhost:3000/data', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      
      const data = await response.json()
      setMedicines(data)
    } catch (error) {
      console.error("Error:", error);
    }
  }  

  return (
    <main>
      <Container className="p-4">
        <Row className="p-4 d-flex align-items-center justify-content-center">
          <Col lg={4} md={4} sm={12}>
          <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Pesquisar Bula"
                className="me-2"
                aria-label="Bula"
                value={searchMedicine}
                onChange={(e) => setSearchMedicine(e.target.value)}
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          {medicines && medicines.map((medicine) => (
            <Col lg={6} md={6} sm={12}>
              <Card
                id={medicine.id}
                className="m-4 d-flex flex-column gap-4" style={{ minHeight: '300px' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{medicine.name}</Card.Title>
                  <Card.Text>
                    {medicine.published_at}
                  </Card.Text>
                  <Card.Text>
                    {medicine.company}
                  </Card.Text>
                  <Button variant="danger">Baixar Bula</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
