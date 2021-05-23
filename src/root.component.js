import React, {useState} from "react";
import Accordion from 'react-bootstrap/Accordion';
import AccordianUI from './AccordianUI';
import data from './data.json';

const styles={
  float: 'right',
    width: 'auto',
    fontSize: '11px',
    fontStyle: 'italic'
}

export default function Root(props) {
  const [state, setState] = useState([...data]);
  return (
    <div className="container">
    <h1> Posts <span style={styles}>React 17.0.1</span></h1>
    <Accordion defaultActiveKey="1">
    {state.map(elm => <AccordianUI key={elm.id} data={elm} />)}
    </Accordion>
  </div>)
}
