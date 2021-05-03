import React from 'react'
import { Accordion, Card, Button, Form } from 'react-bootstrap'

// This text is used in other components as seen in "accordionItems"
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam elit orci, placerat non libero ac, dignissim consectetur tortor. 
Etiam at rutrum ipsum, gravida maximus enim. 
Donec eros lorem, pellentesque a magna quis, vestibulum eleifend ex. 
In pretium auctor enim sit amet mollis. 
Nulla risus eros, facilisis vel nulla quis, semper.
`

/*
The following data below is to be implemented in the following components:
- Accordion
- Form
  - Input
  - Checkbox
  - Radio
  - Slider
  - Select
Note: Some component attributes can in some cases be added directly to a component depending on convenience.
*/

const accordionItems = [
  { header: 'This is accordion header 1', text: text },
  { header: 'This is accordion header 2', text: text + text },
  { header: 'This is accordion header 3', text: text + text + text }
]

const inputs = [
  { text: 'This is input 1', controlId: 'input-id-1', disbaled: false },
  { text: 'This is input 2', controlId: 'input-id-2', disabled: true }
]

const checkboxes = [
  {
    name: 'checkbox-1-name',
    id: 'checkbox-1-id',
    text: 'This is checkbox 1',
    disabled: false
  },
  {
    name: 'checkbox-2-name',
    id: 'checkbox-2-id',
    text: 'This is checkbox 2',
    disabled: false
  },
  {
    name: 'checkbox-3-name',
    id: 'checkbox-3-id',
    text: 'This is checkbox 3',
    disabled: true
  }
]

const radios = [
  {
    name: 'radio-1-name',
    id: 'radio-1-id',
    text: 'This is radio 1',
    disabled: false
  },
  {
    name: 'radio-2-name',
    id: 'radio-2-id',
    text: 'This is radio 2',
    disabled: false
  },
  {
    name: 'radio-3-name',
    id: 'radio-3-id',
    text: 'This is radio 3',
    disabled: true
  }
]

const sliders = [
  { id: 'slider-1-id', label: 'This is slider 1', disabled: false },
  { id: 'slider-2-id', label: 'This is slider 2', disabled: true }
]

const selectOptions = [
  { value: 0, disabled: false },
  { value: 1, disabled: false },
  { value: 2, disabled: true }
]

const index = () => {
  return (
    <main>
      <section>
        {/* Accordion: https://react-bootstrap.github.io/components/accordion/ */}
        <article>
          <Accordion>
            {accordionItems.map((item, index) => (
              <div key={index}>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant='link'
                      eventKey={`${index}`}
                    >
                      {item.header}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body>{item.text}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            ))}
          </Accordion>
        </article>
        {/* Form: https://react-bootstrap.github.io/components/forms/ */}
        <article>
          <Form>
            {/* Input */}
            {inputs.map((input, index) => (
              <Form.Group key={index} controlId={input.controlId}>
                <Form.Label>{input.text}</Form.Label>
                <Form.Control
                  type='text'
                  disabled={input.disabled}
                ></Form.Control>
              </Form.Group>
            ))}
            {/* Checkbox */}
            <Form.Group controlId='checkboxControl'>
              {checkboxes.map((checkbox, index) => (
                <Form.Check
                  key={index}
                  id={checkbox.id}
                  name={checkbox.name}
                  label={checkbox.text}
                  disabled={checkbox.disabled}
                />
              ))}
            </Form.Group>
            {/* Radio */}
            {/* Works as React Boostrap's form documentation, multiple radio's can be checked */}
            <Form.Group controlId='radioControl'>
              {radios.map((radio, index) => (
                <Form.Check
                  key={index}
                  id={radio.id}
                  name={radio.name}
                  label={radio.text}
                  disabled={radio.disabled}
                />
              ))}
            </Form.Group>
            {/* Slider */}
            {sliders.map((slider) => (
              <Form.Group key={index} controlId={slider.id}>
                <Form.Label>{slider.text}</Form.Label>
                <Form.Control
                  type='range'
                  disabled={slider.disabled}
                ></Form.Control>
              </Form.Group>
            ))}
            {/* Select */}
            <Form.Group controlId='selectControl'>
              <Form.Label>Select</Form.Label>
              <Form.Control
                as='select'
                defaultValue={selectOptions[0].value}
                custom
              >
                {selectOptions.map((option, index) => (
                  <option key={index} disabled={option.disabled}>
                    {option.value}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </article>
      </section>
    </main>
  )
}

export default index
