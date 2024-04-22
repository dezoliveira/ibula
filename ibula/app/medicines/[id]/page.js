'use client'

import Link from "next/link"
//Font Awesome
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

// hooks
import { useEffect, useRef, useState } from "react"

// bootsrap
import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Medicine({ params }) {
  const [medicine, setMedicine] = useState([])
  const [isShowPDF, setIsShowPDF] = useState(false)
  const [showViewer, setShowViewer] = useState(false)
  const [showDownload, setShowDownload] = useState(false)

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

  const handleShowPDF = (e) => {
    e.preventDefault()

    setIsShowPDF(true)
    
    let label = e.target.name

    if (label === 'download') {
      setShowDownload(true)
      setShowViewer(false)
    }

    if (label === 'viewer') {
      setShowViewer(true)
      setShowDownload(false)
    }
  }

  return (
    <Container className="p-4">
      <Row className="d-flex align-items-center justify-content-center ">
        <Col lg={6} md={6} sd={6}>
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
              <Card.Text>
                {medicine.active_principles[0].name}
              </Card.Text>
              <div className="d-flex gap-2">
                <Button
                  variant="success"
                  onClick={(e) => handleShowPDF(e)}
                  name="download"
                >
                  Baixar
                </Button>
                <Button
                  variant="info"
                  className="text-white"
                  onClick={(e) => handleShowPDF(e)}
                  name="viewer"
                >
                  Visualizar
                </Button>
              </div>
            </Card.Body>
          </Card>
          {isShowPDF && (
            <Card>
              <Card.Header>
                <Card.Title className="m-0">
                  {(showDownload ? 'Baixar' : 'Visualizar') + ' Bula'}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                {showDownload && (
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex gap-2">
                      Médico:
                      <a href="" download={medicine.documents ? medicine.documents[0].url : ''}>
                        <FontAwesomeIcon fontSize={24} color="red" icon={faFilePdf} />
                      </a>
                    </div>
                    <div className="d-flex gap-2">
                      Paciente:
                      <a href="" download={medicine.documents ? medicine.documents[1].url : ''}>
                        <FontAwesomeIcon fontSize={24} color="green" icon={faFilePdf} />
                      </a>
                    </div>
                  </div>
                )}
                {showViewer && (
                  <div className="d-flex align-items-center gap-4">
                    <div className="d-flex gap-2">
                      Médico:
                      <Link href={medicine.documents ? medicine.documents[0].url : ''}>Link</Link>
                    </div>
                    <Card.Text className="d-flex gap-2">
                      Paciente:
                      <Link href={medicine.documents ? medicine.documents[1].url : ''}>Link</Link>
                    </Card.Text>
                  </div>
                )}
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}