'use client'

// bootsrap
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap"

// font awesoe
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faIndustry, faFlask, faPills } from '@fortawesome/free-solid-svg-icons'

// next
import Link from "next/link"

// react hooks
import { useEffect, useRef, useState } from "react"


// components
import Loading from "@/app/components/elements/Loading"
import Pagination from "@/app/components/elements/Pagination"

export default function MedicineList() {
  const [medicines, setMedicines] = useState([])
  const [searchMedicine, setSearchMedicine] = useState("")
  const [filteredMedicines, setFilteredMedicine] = useState(medicines)

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const totalItems = filteredMedicines.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMedicines.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getMedicines()
  }, [])

  const getMedicines = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000))
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

  const formatDATA = (date) => {
    if (date) {
      const newDate = new Date(date).toLocaleDateString()
      const newTime = new Date(date).toLocaleTimeString()
      return `Criado em ${newDate} ás ${newTime}`
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
                onChange={handleInputChange}
              />
              <Button variant="success">Pesquisar</Button>
            </Form>
          </Col>
        </Row>
        <Row>
          {currentItems && currentItems.map((medicine) => (
            <Col lg={6} md={6} sm={12} key={medicine.id}>
              <Link href={`/medicines/${medicine.id}`} className={"text-decoration-none "}>
                <Card
                  key={medicine.id}
                  id={medicine.id}
                  className="medicine-card m-4 gap-4">
                  <Card.Header className="d-flex gap-2 align-items-center text-bg-primary">
                    <FontAwesomeIcon icon={faPills} />
                    <Card.Title className="m-0">{medicine.name}</Card.Title>
                  </Card.Header>
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Text className="d-flex align-items-center gap-1">
                      <FontAwesomeIcon fontSize={16} icon={faClock} />
                      {formatDATA(medicine.published_at)}
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
                        {medicine.active_principles[0].name}
                      </Card.Text>
                    </div>
                    <div className="py-2">
                      <Button variant="success">Ver Mais</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
          <Col>
          {!filteredMedicines.length && 
            <Loading />
          }
          </Col>
        </Row>
        <Row className="p-4">
          <Col lg={12} md={12} sm={12}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    </main>
  )
}