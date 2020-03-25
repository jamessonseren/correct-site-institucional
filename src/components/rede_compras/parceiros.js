import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { Container, Button } from "react-bootstrap";
import './guia.css'

function CollapsiblePanelParceiros({ children, ...props }) {
  const { title, collapse } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-down");
  let i = 0;

  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIsOpen(!isOpen);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  const animate = collapse => {
    setIsCollapse(collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  useEffect(() => {
    animate(!collapse);
  }, [collapse]);


  return (
    <div className="coll-panel">
      <button
        type="button"
        className='c1 coll-panel-btn btn-block'
        onClick={() => toggle()}
      >
         {title}
      </button>
      <Collapse className="border text-left p-2 estabInfo" isOpen={isOpen}>
        {children}
      </Collapse>
    </div>
  );
}

CollapsiblePanelParceiros.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsiblePanelParceiros;
