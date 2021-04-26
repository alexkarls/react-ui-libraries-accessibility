import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Quisque gravida nibh ac augue ornare vestibulum. 
Nunc eget porta nisl, vestibulum posuere ligula. 
Nunc mollis blandit ante, sed placerat risus ornare ac. 
Nunc tincidunt viverra tincidunt. Nullam sit amet massa nunc. 
Vivamus nec risus vel risus scelerisque mattis eget at justo. 
Ut tincidunt varius libero. 
Donec porta justo et lacus molestie, ac rhoncus eros fermentum. 
Nam sollicitudin blandit dolor et cursus. 
Proin euismod eros sed fermentum varius. 
Quisque vehicula egestas orci, ut pellentesque mauris lobortis vel. 
Duis neque felis, dictum in laoreet sit amet, mollis quis nunc.
`

const index = () => {
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
                <Card.Body>{text}</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>{text}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </article>
      </section>
    </main>
  )
}

export default index
