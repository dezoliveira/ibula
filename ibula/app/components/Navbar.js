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
          <Nav className="me-auto">
            <Nav.Link>
              <Link href="/" className='link'>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/" className='link'>List</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/" className='link'>Create</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}