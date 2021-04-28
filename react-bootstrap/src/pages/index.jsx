import React from 'react'
import {
  Accordion,
  Card,
  Button,
  Tabs,
  Tab,
  Table,
  Form
} from 'react-bootstrap'

// This text is used in other components as seen in the Accordions and Tabs below
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam elit orci, placerat non libero ac, dignissim consectetur tortor. 
Etiam at rutrum ipsum, gravida maximus enim. 
Donec eros lorem, pellentesque a magna quis, vestibulum eleifend ex. 
In pretium auctor enim sit amet mollis. 
Nulla risus eros, facilisis vel nulla quis, semper.
`

const accordions = [
  { header: 'This is accordion header 1', text: text },
  { header: 'This is accordion header 2', text: text + text },
  { header: 'This is accordion header 3', text: text + text + text }
]

const tabs = [
  { title: 'This is tab 1', eventKey: 'tab-1', text: text, disabled: false },
  {
    title: 'This is tab 2',
    eventKey: 'tab-2',
    text: text + text,
    disabled: false
  },
  { title: 'This is tab 3', eventKey: 'tab-3', text: null, disabled: true }
]

const tableItems = [
  {
    header: 'This is table header 1',
    data: [
      'Header 1 data on row 1',
      'Header 1 data on row 2',
      'Header 1 data on row 3'
    ]
  },
  {
    header: 'This is table header 2',
    data: [
      'Header 2 data on row 1',
      'Header 2 data on row 2',
      'Header 2 data on row 3'
    ]
  },
  {
    header: 'This is table header 3',
    data: [
      'Header 3 data on row 1',
      'Header 3 data on row 3',
      'Header 3 data on row 3'
    ]
  }
]

const inputs = [
  { labelText: 'This is input 1', controlId: 'inputControl1', disbaled: false },
  { labelText: 'This is input 2', controlId: 'inputControl2', disabled: false },
  { labelText: 'This is input 3', controlId: 'inputControl3', disabled: true }
]

const checkboxes = [
  {
    name: 'check-1',
    id: 'checkbox-1',
    label: 'This is checkbox 1',
    disabled: false
  },
  {
    name: 'check-2',
    id: 'checkbox-2',
    label: 'This is checkbox 2',
    disabled: false
  },
  {
    name: 'check-3',
    id: 'checkbox-3',
    label: 'This is checkbox 3',
    disabled: true
  }
]

const radios = [
  {
    name: 'radio-1',
    id: 'radio-1',
    label: 'This is radio 1',
    disabled: false
  },
  {
    name: 'radio-2',
    id: 'radio-2',
    label: 'This is radio 2',
    disabled: false
  },
  {
    name: 'radio-3',
    id: 'radio-3',
    label: 'This is radio 3',
    disabled: true
  }
]

const selectOptions = [{ value: 1, disabled: false }, { value: 2, disabled: false }, { value: 3, disabled: true }]

const index = () => {
  return (
    <main>
      <section className='component-section'>
        {/* Accordion implementation: https://react-bootstrap.github.io/components/accordion/ */}
        <article className='component-article'>
          <Accordion>
            {accordions.map((accordion, index) => {
              return (
                <div key={index}>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle
                        as={Button}
                        variant='link'
                        eventKey={`${index}`}
                      >
                        {accordion.header}
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={`${index}`}>
                      <Card.Body>{accordion.text}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </div>
              )
            })}
          </Accordion>
        </article>
        {/* Tab implementation: https://react-bootstrap.github.io/components/tabs/ */}
        {/* Note: Abstract class, unable to use map() */}
        <article className='component-article'>
          <Tabs defaultActiveKey={tabs[0].eventKey} id='tab-test-uncontrolled'>
            <Tab
              eventKey={tabs[0].eventKey}
              title={tabs[0].title}
              disabled={tabs[0].disabled}
            >
              <p>{tabs[0].text}</p>
            </Tab>
            <Tab
              eventKey={tabs[1].eventKey}
              title={tabs[1].title}
              disabled={tabs[1].disabled}
            >
              <p>{tabs[1].text}</p>
            </Tab>
            <Tab
              eventKey={tabs[2].eventKey}
              title={tabs[2].title}
              disabled={tabs[2].disabled}
            >
              <p>{tabs[2].text}</p>
            </Tab>
          </Tabs>
        </article>
        {/* Table implementation: https://react-bootstrap.github.io/components/table/ */}
        <article className='component-article'>
          <Table>
            <thead>
              <tr>
                <th>{tableItems[0].header}</th>
                <th>{tableItems[1].header}</th>
                <th>{tableItems[2].header}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{tableItems[0].data[0]}</td>
                <td>{tableItems[1].data[0]}</td>
                <td>{tableItems[2].data[0]}</td>
              </tr>
              <tr>
                <td>{tableItems[0].data[1]}</td>
                <td>{tableItems[1].data[1]}</td>
                <td>{tableItems[2].data[1]}</td>
              </tr>
              <tr>
                <td>{tableItems[0].data[2]}</td>
                <td>{tableItems[1].data[2]}</td>
                <td>{tableItems[2].data[2]}</td>
              </tr>
            </tbody>
          </Table>
        </article>
        {/* Form implementation: https://react-bootstrap.github.io/components/forms/ */}
        <article className='component-article'>
          <Form>
            {/* Input */}
            {inputs.map((input, index) => {
              return (
                <div key={index}>
                  <Form.Group controlId={input.controlId}>
                    <Form.Label>{input.labelText}</Form.Label>
                    <Form.Control
                      type='text'
                      disabled={input.disabled}
                    ></Form.Control>
                  </Form.Group>
                </div>
              )
            })}
            {/* Checkbox */}
            <Form.Group controlId='checkboxControl'>
              {checkboxes.map((checkbox, index) => {
                return (
                  <div key={index}>
                    <Form.Check
                      id={checkbox.id}
                      name={checkbox.name}
                      label={checkbox.label}
                      disabled={checkbox.disabled}
                    />
                  </div>
                )
              })}
            </Form.Group>
            {/* Radio */}
            <Form.Group controlId='radioControl'>
              {radios.map((radio, index) => {
                return (
                  <div key={index}>
                    <Form.Check
                      id={radio.id}
                      name={radio.name}
                      label={radio.label}
                      disabled={radio.disabled}
                    />
                  </div>
                )
              })}
            </Form.Group>
            {/* Select */}
            <Form.Group controlId="selectControl">
              <Form.Label>Select</Form.Label>
              <Form.Control as="select" custom>
                {selectOptions.map((option, index) => <option key={index}>{option.value}</option>)}
              </Form.Control>
            </Form.Group>
          </Form>
        </article>
      </section>
    </main>
  )
}

export default index
