import { Spinner } from "react-bootstrap";

export default function Loading() {
  return(
    <div className="full-wrapper d-flex justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}