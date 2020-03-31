import React from "react";
import { Button, Modal } from "react-bootstrap";
import './guia.css'

function MyVerticallyCenteredModal({ children, ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CollapsiblePanelParceiros({ children, ...props }) {
  const { title } = props;

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="icones">
      <button
        className="cor_branca" onClick={() => setModalShow(true)}
      >
        {title}
      </button>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}>
        {children}
      </MyVerticallyCenteredModal>
    </div>
  );
}

export default CollapsiblePanelParceiros;
