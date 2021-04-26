import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

class ReactBootstrap extends Component {
  render () {
    // NOTE: Require is used to import the CSS as component scoped
    require('bootstrap/dist/css/bootstrap.css')
    return (
      <main>
        <section className='component-section'>
          <article className='component-article'>
            <Accordion defaultActiveKey='0'>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>Hello! Im the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey='1'>
                  <Card.Body>Hello! Im another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </article>
        </section>
      </main>
    )
  }
}

export default ReactBootstrap
