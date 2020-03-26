import React from "react";
import { Row, Container } from "react-bootstrap";
import ProdutosPessoaFisica from "./produtos_pessoas_fisicas.js";
import Presetation from "./apresentacao.js";
import "./vantagens.css";

export default function Vantagens() {
  return (
    <div>
      <Container fluid>
        <Row className="">
          <Presetation />
        </Row>
      </Container>
      <Container fluid>
        <Row className="">
          <ProdutosPessoaFisica />
        </Row>
      </Container>
    </div>
  );
}
