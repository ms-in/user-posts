import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function AccordianUI({ data }) {
    return (
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={data.id}>  {data.id}. {data.title} </Accordion.Toggle>
            <Accordion.Collapse eventKey={data.id}>
                <Card.Body>{data.body}</Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
