import { Row } from "react-bootstrap";

export default function NotFound({text}) {
  return(
    <main className="full-wrapper">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h4>{text}</h4>
      </div>
    </main>
  )
}