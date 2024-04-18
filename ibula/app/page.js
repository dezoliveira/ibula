'use client'

import { useEffect, useState } from "react";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import NotFound from "./components/NotFound";

export default function Home() {
  
  const [medicines, setMedicines] = useState([])
  const [searchMedicine, setSearchMedicine] = useState("")
  const [filteredMedicines, setFilteredMedicine] = useState(medicines)

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
      setFilteredMedicine(data)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleInputChange = (e) => {
    const searchMedicine = e.target.value
    setSearchMedicine(searchMedicine)

    const filteredItems = medicines.filter((medicine) => {
      for(let i in medicines) {
        return medicine.name.toLowerCase().includes(searchMedicine.toLowerCase())
      }
    })

    console.log(filteredItems)

    setFilteredMedicine(filteredItems)
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
                onChange={handleInputChange}
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
          </Col>
          {/* <ul>
            {filteredMedicines.map(medicine => <li key={medicine.id}>{medicine.name}</li>)}
          </ul> */}
        </Row>
        <Row>
          {filteredMedicines && filteredMedicines.map((medicine) => (
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
                  <Button variant="danger">Visualizar</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col>
          {!filteredMedicines.length && 
            <NotFound />
          }
          </Col>
        </Row>
      </Container>
    </main>
  );
}
