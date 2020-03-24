import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import './guia.css'

function CollapsiblePanel({ children, ...props }) {
  const { title, collapse, color } = props;
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-down");
  const toggle = () => {
    setIsCollapse(!isCollapse);
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

    //Auxilia no efeito Zebra
    const check = (i) =>{
        return (i%2 === 0) ? 1 : 0
    }

  return (
    <div className="coll-panel">
      <button
        type="button"
        className={(check(color)) ? 'c1 coll-panel-btn btn-block text-left' : 'c2 coll-panel-btn btn-block text-left'}
        onClick={() => toggle()}
      >
         {title}
      </button>
      <Collapse className="border text-left p-2" isOpen={isCollapse}>
        {children}
      </Collapse>
    </div>
  );
}

CollapsiblePanel.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsiblePanel;
