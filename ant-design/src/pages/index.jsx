import React, { Fragment, useState } from 'react'
import {
  Modal,
  Button,
  Collapse,
  Tabs,
  Form,
  Input,
  Radio,
  Checkbox,
  Slider,
  Select
} from 'antd'

const { Panel } = Collapse
const { TabPane } = Tabs
const { Option } = Select

// This text is used in other components as seen in the Accordions and Tabs below
const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Etiam elit orci, placerat non libero ac, dignissim consectetur tortor. 
Etiam at rutrum ipsum, gravida maximus enim. 
Donec eros lorem, pellentesque a magna quis, vestibulum eleifend ex. 
In pretium auctor enim sit amet mollis. 
Nulla risus eros, facilisis vel nulla quis, semper.
`

const modal = {
  buttonText: 'Show modal',
  header: 'This is the modal',
  text: text + text + text
}

const accordionItems = [
  { header: 'This is accordion header 1', text: text },
  { header: 'This is accordion header 2', text: text + text },
  { header: 'This is accordion header 3', text: text + text + text }
]

const tabsItems = [
  { header: 'This is tab 1', text: text, disabled: false },
  {
    header: 'This is tab 2',
    text: text + text,
    disabled: false
  },
  { header: 'This is tab 3', text: null, disabled: true }
]

const inputs = [
  { name: 'input-1', text: 'This is input 1', disbaled: false },
  { name: 'input-2', text: 'This is input 2', disabled: true }
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
  { value: 1, disabled: false },
  { value: 2, disabled: false },
  { value: 3, disabled: true }
]

const sliders = [
  { name: 'slider-1', text: 'This is slider 1', disabled: false },
  { name: 'slider-2', text: 'This is slider 1', disabled: true }
]

const index = () => {
  // State required for components
  const [showModal, setShowModal] = useState(false)
  const [radioValue, setRadioValue] = useState(0)

  const handleRadio = (event) => {
    console.log(event.target.value)
    setRadioValue(event.target.value)
  }

  return (
    <main>
      <section className='component-section'>
        {/* Modal implementation: https://ant.design/components/modal/ */}
        <article className='component-article'>
          <Button onClick={() => setShowModal(true)}>{modal.buttonText}</Button>
          <Modal
            title={modal.header}
            visible={showModal}
            onOk={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
          >
            <p>{modal.text}</p>
          </Modal>
        </article>
        {/* Accordion implementation: https://ant.design/components/collapse/ */}
        <article className='component-article'>
          <Collapse accordion>
            {accordionItems.map((item, index) => {
              return (
                <Panel header={item.header} key={index}>
                  <p>{item.text}</p>
                </Panel>
              )
            })}
          </Collapse>
        </article>
        {/* Tabs implementation: https://ant.design/components/tabs/ */}
        <article className='component-article'>
          <Tabs defaultActiveKey='0'>
            {tabsItems.map((item, index) => {
              return (
                <TabPane tab={item.header} key={index} disabled={item.disabled}>
                  {item.text}
                </TabPane>
              )
            })}
          </Tabs>
        </article>
        {/* Form impelementation: https://ant.design/components/form/ */}
        <article className='component-article'>
          <Form>
            {/* Input */}
            {inputs.map((input, index) => {
              return (
                <Fragment key={index}>
                  <Form.Item name={input.name} label={input.text}>
                    <Input disabled={input.disabled} />
                  </Form.Item>
                </Fragment>
              )
            })}
            {/* Checkbox */}
            {checkboxes.map((checkbox, index) => {
              return (
                <Fragment key={index}>
                  <Checkbox value={index} disabled={checkbox.disabled}>
                    {checkbox.text}
                  </Checkbox>
                </Fragment>
              )
            })}
            {/* Radio */}
            {radios.map((radio, index) => {
              return (
                <Radio.Group
                  key={index}
                  value={radioValue}
                  onChange={handleRadio}
                >
                  <Radio value={index} disabled={radio.disabled}>
                    {radio.text}
                  </Radio>
                </Radio.Group>
              )
            })}
            {/* Sliders */}
            {sliders.map((slider, index) => {
              return (
                <Form.Item key={index} name={slider.name} label={slider.text}>
                  <Slider disabled={slider.disabled}></Slider>
                </Form.Item>
              )
            })}
            {/* Select */}
            <Form.Item name='select-1' label='Select'>
              <Select defaultValue={selectOptions[0].value}>
                {selectOptions.map((option, index) => (
                  <Option key={index} value={option.value}>
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
