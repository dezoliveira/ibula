'use client'

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faIndustry, faFlask, faFilePdf, faPills } from '@fortawesome/free-solid-svg-icons'

// bootsrap
import { Button, Card, Col, Container, Row } from "react-bootstrap"

// react hooks
import { useState } from "react"

// next
import Link from "next/link"

export default function Medicine({ data }) {
  const [medicine, setMedicine] = useState(data)
  const [isShowPDF, setIsShowPDF] = useState(false)
  const [showViewer, setShowViewer] = useState(false)
  const [showDownload, setShowDownload] = useState(false)

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

  const formDateTime = (date) => {
    if (date) {
      const newDate = new Date(date).toLocaleDateString()
      const newTime = new Date(date).toLocaleTimeString()
      return `Criado em ${newDate} ás ${newTime}`
    }
  }

  return (
      <>
          <Card
            id={medicine.id}
            className="medicine-card m-4 gap-4"
          >
            <Card.Header className="d-flex gap-2 align-items-center text-bg-primary">
              <FontAwesomeIcon icon={faPills} />
              <Card.Title className="m-0">{medicine.name}</Card.Title>
            </Card.Header>
            <Card.Body className="d-flex flex-column justify-content-between">
              <Card.Text className="d-flex align-items-center gap-1">
                <FontAwesomeIcon fontSize={16} icon={faClock} />
                {formDateTime(medicine.published_at)}
              </Card.Text>
              <Card.Text className="d-flex align-items-center gap-1">
                <FontAwesomeIcon icon={faIndustry} />
                {medicine.company}
              </Card.Text>
              <div>
                <Card.Subtitle>
                  <strong>Princípio Ativo:</strong>
                </Card.Subtitle>
                <Card.Text className="d-flex align-items-center gap-1">
                  <FontAwesomeIcon icon={faFlask} />
                  {medicine.active_principles ? medicine.active_principles[0].name : ''}
                </Card.Text>
              </div>
              <div className="py-2 d-flex gap-2">
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
              <Card.Header className="text-bg-success">
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
  </>
  )
}