import React, { Fragment, useState } from 'react'
import {
  Collapse,
  Form,
  Input,
  Radio,
  Checkbox,
  Slider,
  Select
} from 'antd'

const { Panel } = Collapse
const { Option } = Select

// This text is used in other components as seen in "accordionItems"
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam elit orci, placerat non libero ac, dignissim consectetur tortor. 
Etiam at rutrum ipsum, gravida maximus enim. 
Donec eros lorem, pellentesque a magna quis, vestibulum eleifend ex. 
In pretium auctor enim sit amet mollis. 
Nulla risus eros, facilisis vel nulla quis, semper.
`

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

const selectOptions = [
  { value: 0, disabled: false },
  { value: 1, disabled: false },
  { value: 2, disabled: true }
]

const sliders = [
  { name: 'slider-1-name', text: 'This is slider 1', disabled: false },
  { name: 'slider-2-name', text: 'This is slider 1', disabled: true }
]

const index = () => {
  // State required for components
  const [radioValue, setRadioValue] = useState(0)

  const handleRadio = (event) => {
    console.log(event.target.value)
    setRadioValue(event.target.value)
  }

  return (
    <main>
      <section>
        {/* Accordion implementation: https://ant.design/components/collapse/ */}
        <article>
          <Collapse accordion>
            {accordionItems.map((item, index) => (
              <Panel header={item.header} key={index}>
                <p>{item.text}</p>
              </Panel>
            ))}
          </Collapse>
        </article>
        {/* Form: https://ant.design/components/form/ */}
        <article>
          <Form>
            {/* Input: https://ant.design/components/input/ */}
            {inputs.map((input, index) => (
              <Fragment key={index}>
                <Form.Item name={input.name} label={input.text}>
                  <Input disabled={input.disabled} />
                </Form.Item>
              </Fragment>
            ))}
            {/* Checkbox: https://ant.design/components/checkbox/ */}
            {/* Also tested without <Checkbox.Group>, does not seem to be a difference in behavior */}
            {/* Added the attribute "name" (not present in examples, but included in API) */}
            <Checkbox.Group name='checkboxes-1'>
              {checkboxes.map((checkbox, index) => (
                <Checkbox
                  key={index}
                  value={index}
                  disabled={checkbox.disabled}
                >
                  {checkbox.text}
                </Checkbox>
              ))}
            </Checkbox.Group>
            {/* Radio: https://rsuitejs.com/components/radio/ */}
            {/* Added the attribute "name" (not present in examples, but included in API) */}
            <Radio.Group
              name='radios-1'
              value={radioValue}
              onChange={handleRadio}
            >
              {radios.map((radio, index) => (
                <Radio key={index} value={index} disabled={radio.disabled}>
                  {radio.text}
                </Radio>
              ))}
            </Radio.Group>
            {/* Slider: https://ant.design/components/slider/ */}
            {sliders.map((slider, index) => (
              <Form.Item key={index} name={slider.name} label={slider.text}>
                <Slider disabled={slider.disabled}></Slider>
              </Form.Item>
            ))}
            {/* Select: https://ant.design/components/select/ */}
            <Form.Item name='select-1' label='Select'>
              <Select defaultValue={selectOptions[0].value}>
                {selectOptions.map((option, index) => (
                  <Option key={index} value={option.value} disabled={option.disabled}>
                    {option.value}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </article>
      </section>
    </main>
  )
}

export default index
