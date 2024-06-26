'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescriptionBottle } from '@fortawesome/free-solid-svg-icons'

import { Navbar, Nav, Container, NavbarText } from 'react-bootstrap';
import Link from 'next/link';

export default function TopNavbar() {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link href="/" className='link'>
              <Nav className='logo gap-1'>
                <NavbarText className='text-white'>iBula</NavbarText>
                <FontAwesomeIcon color={"#f3425"} icon={faPrescriptionBottle} />
              </Nav>
            </Link>
          </Navbar.Brand>
          <Nav className="d-flex me-auto gap-2">
            <Link href="/" className='link'>Home</Link>
            <label className='text-white'>/</label>
            <Link href="/medicines" className='link'>Medicamentos</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}