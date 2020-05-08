import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";

function CollapsiblePanel({ children, ...props }) {
  const { title, collapse } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-down");

  //Para expandir informações extras
  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIsOpen(!isOpen);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  //Animar
  const animate = collapse => {
    setIsCollapse(collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  //Iniciar animação
  useEffect(() => {
    animate(!collapse);
  }, [collapse]);

  return (
    <div className="p-3 col-12">
      <div className="row" onClick={() => toggle()}>
         {title}
      </div>
      <Collapse className="border text-left p-2" isOpen={isOpen}> {children} </Collapse>
    </div>
  );
}

CollapsiblePanel.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsiblePanel;
