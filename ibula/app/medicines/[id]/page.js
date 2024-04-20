'use client'

//Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
// import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

// hooks
import { useEffect, useRef, useState } from "react"

// bootsrap
import { Button, Card, Col, Container, Row } from "react-bootstrap"

export default function Medicine({ params }) {
  const [medicine, setMedicine] = useState([])

  useEffect(() => {
    getMedicine()
  }, [])

  const getMedicine = async () => {
    try {
      const response = await fetch(`http://localhost:3000/data/${params.id}`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        }
      })
      
      const data = await response.json()
      console.log(data)
      setMedicine(data)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Container className="p-4">
      <Row>
        <Col lg={6}>
          <Card
            id={medicine.id}
            className="m-4 d-flex flex-column gap-4 justify-content-between"
            style={{ minHeight: '250px', maxHeight: '250px' }}
          >
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Title>{medicine.name}</Card.Title>
              <Card.Text>
                {medicine.published_at}
              </Card.Text>
              <Card.Text>
                {medicine.company}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}