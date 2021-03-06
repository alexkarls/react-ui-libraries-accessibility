import React from 'react'
import {
  PanelGroup,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Input,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Slider,
  SelectPicker
} from 'rsuite'

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
  { name: 'input-1-name', text: 'This is input 1', disbaled: false },
  { name: 'input-2-name', text: 'This is input 2', disabled: true }
]

const checkboxes = [
  {
    text: 'This is checkbox 1',
    disabled: false
  },
  {
    text: 'This is checkbox 2',
    disabled: false
  },
  {
    text: 'This is checkbox 2',
    disabled: true
  }
]

const radios = [
  {
    text: 'This is radio 1',
    disabled: false
  },
  {
    text: 'This is radio 2',
    disabled: false
  },
  {
    text: 'This is radio 3',
    disabled: true
  }
]

const sliders = [
  {
    id: 'slider-1-id',
    name: 'slider-1-name',
    text: 'This is slider 1',
    disabled: false
  },
  {
    id: 'slider-2-id',
    name: 'slider-2-name',
    text: 'This is slider 1',
    disabled: true
  }
]

/* Based on: https://github.com/rsuite/rsuite/blob/master/docs/public/data/users-role.json */
// Options can be disabled in <SelectPicker>
const selectOptions = [
  { label: '0', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' }
]

const index = () => {
  return (
    <main>
      <section>
        {/* Accordion: https://rsuitejs.com/components/panel/ */}
        <article>
          <PanelGroup accordion defaultActiveKey={0} bordered>
            {accordionItems.map((item, index) => (
              <Panel key={index} header={item.header} eventKey={index}>
                <p>{item.text}</p>
              </Panel>
            ))}
          </PanelGroup>
        </article>
        <article>
          {/* Form: https://rsuitejs.com/components/form/ */}
          {/* Reading the documentation, <FormControl> seems like the best option to use for input inside a form. Also, the FormControl has more properties, such as name, that are relevant to accessibility */}
          <Form>
            {/* Input: https://rsuitejs.com/components/input */}
            {/* Also relevant (FormControl): https://rsuitejs.com/components/form/ */}
            {inputs.map((input, index) => (
              <FormGroup key={index}>
                <ControlLabel>{input.text}</ControlLabel>
                <FormControl
                  name={input.name}
                  accepter={Input}
                  disabled={input.disabled}
                ></FormControl>
              </FormGroup>
            ))}
            {/* Checkbox: https://rsuitejs.com/components/checkbox/ */}
            {/* Based on example: https://github.com/rsuite/rsuite/blob/master/docs/pages/components/form/en-US/read-only.md */}
            <FormGroup>
              <FormControl accepter={CheckboxGroup} name='checkboxes-1-name'>
                {checkboxes.map((checkbox, index) => (
                  <Checkbox
                    key={index}
                    value={index}
                    disabled={checkbox.disabled}
                  >
                    {checkbox.text}
                  </Checkbox>
                ))}
              </FormControl>
            </FormGroup>
            {/* Radio: https://rsuitejs.com/components/radio/ */}
            {/* Based on example: https://github.com/rsuite/rsuite/blob/master/docs/pages/components/form/en-US/read-only.md */}
            <FormGroup>
              <FormControl accepter={RadioGroup} name='checkboxes-1-name'>
                {radios.map((radio, index) => (
                  <Radio key={index} value={index} disabled={radio.disabled}>
                    {radio.text}
                  </Radio>
                ))}
              </FormControl>
            </FormGroup>
            {/* Slider: https://rsuitejs.com/components/slider/ */}
            {/* Note: Slider has no "id" or "name" props listed */}
            {/* Note: <FormControl accepter={Slider}> did not seem to work */}
            {sliders.map((slider, index) => (
              <FormGroup key={index} controlId={slider.id}>
                <ControlLabel>{slider.text}</ControlLabel>
                <Slider disabled={slider.disabled}></Slider>
              </FormGroup>
            ))}
            {/* Select: https://rsuitejs.com/components/select-picker/ */}
            {/* Note: No other properties such as id and htmlFor used in examples, could solve problems? */}
            {/* Also based on demo: https://github.com/rsuite/rsuite/blob/master/docs/pages/components/form/en-US/read-only.md */}
            <FormGroup controlId='select-1-id'>
              <ControlLabel>Select</ControlLabel>
              <FormControl
                name='select'
                accepter={SelectPicker}
                data={selectOptions}
                disabledItemValues={['2']}
              ></FormControl>
            </FormGroup>
          </Form>
        </article>
      </section>
    </main>
  )
}

export default index
