import { Spinner } from "react-bootstrap";

export default function NotFound() {
  return(
    <main className="full-wrapper d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </main>
  )
}