/* eslint-disable react/no-children-prop */
import React from 'react'
import {
  Accordion,
  AccordionPanel,
  Box,
  Text,
  Tabs,
  Tab,
  Form,
  FormField,
  TextInput,
  CheckBoxGroup,
  RadioButtonGroup,
  RangeInput,
  Select
} from 'grommet'

// This text is used in other components as seen in the Accordions and Tabs below
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
  {
    name: 'input-1-name',
    id: 'input-1-id',
    text: 'This is input 1',
    disbaled: false
  },
  {
    name: 'input-2-name',
    id: 'input-2-id',
    text: 'This is input 2',
    disabled: true
  }
]

const checkboxes = [
  {
    name: 'checkbox-1-name',
    text: 'This is checkbox 1',
    value: 0,
    disabled: false
  },
  {
    name: 'checkbox-2-name',
    text: 'This is checkbox 2',
    value: 1,
    disabled: false
  },
  {
    name: 'checkbox-3-name',
    text: 'This is checkbox 3',
    value: 2,
    disabled: true
  }
]

const radios = [
  {
    name: 'radio-1',
    text: 'This is radio 1',
    value: 0,
    disabled: false
  },
  {
    name: 'radio-2',
    text: 'This is radio 2',
    value: 1,
    disabled: false
  },
  {
    name: 'radio-3',
    text: 'This is radio 3',
    value: 2,
    disabled: true
  }
]

const sliders = [
  {
    name: 'slider-1-name',
    id: 'slider-1-id',
    label: 'This is slider 1',
    disabled: false
  },
  {
    name: 'slider-2-name',
    id: 'slider-2-id',
    label: 'This is slider 2',
    disabled: true
  }
]

const selectOptions = [1, 2, 3]

const index = () => {
  return (
    <main>
      <section className='component-section'>
        {/* Accordion implementation: https://v2.grommet.io/accordion */}
        <article className='component-article'>
          <Accordion>
            {accordionItems.map((item, index) => (
              <AccordionPanel key={index} label={item.header}>
                <Box>
                  <Text>{item.text}</Text>
                </Box>
              </AccordionPanel>
            ))}
          </Accordion>
        </article>
        <article className='component-article'>
          {/* Tabs implementation: https://v2.grommet.io/tabs */}
          <Tabs>
            {tabsItems.map((item, index) => (
              <Tab key={index} label={item.header} disabled={item.disabled}>
                <Box>
                  <Text>{item.text}</Text>
                </Box>
              </Tab>
            ))}
          </Tabs>
        </article>
        {/* Form implementation: https://v2.grommet.io/form */}
        <article className='component-article'>
          <Form>
            {inputs.map((input, index) => (
              <FormField
                key={index}
                name={input.name}
                htmlFor={input.id}
                label={input.text}
              >
                <TextInput id={input.id} name={input.name}></TextInput>
              </FormField>
            ))}
            {/* Checkboxes: https://v2.grommet.io/checkboxgroup */}
            {/* Also, each checkbox should have a "name" attribute when used in a <Form>: https://v2.grommet.io/checkbox */}
            <CheckBoxGroup
              options={[
                {
                  name: checkboxes[0].name,
                  label: checkboxes[0].text,
                  value: checkboxes[0].value,
                  disabled: checkboxes[0].disabled
                },
                {
                  name: checkboxes[1].name,
                  label: checkboxes[1].text,
                  value: checkboxes[1].value,
                  disabled: checkboxes[1].disabled
                },
                {
                  name: checkboxes[2].name,
                  label: checkboxes[2].text,
                  value: checkboxes[2].value,
                  disabled: checkboxes[2].disabled
                }
              ]}
            />
            {/* Radios: https://v2.grommet.io/radiobuttongroup */}
            <RadioButtonGroup
              name='radios-1'
              options={[
                {
                  label: radios[0].text,
                  value: radios[0].value,
                  disabled: radios[0].disabled
                },
                {
                  label: radios[1].text,
                  value: radios[1].value,
                  disabled: radios[1].disabled
                },
                {
                  label: radios[2].text,
                  value: radios[2].value,
                  disabled: radios[2].disabled
                }
              ]}
            ></RadioButtonGroup>
            {sliders.map((slider, index) => (
              <FormField
                key={index}
                name={slider.name}
                htmlFor={slider.id}
                label={slider.label}
              >
                <RangeInput
                  id={slider.id}
                  name={slider.name}
                  disabled={slider.disabled}
                />
              </FormField>
            ))}
            {/* Based on:  https://storybook.grommet.io/?path=/story/input-select-inside-a-formfield--inside-form-field */}
            <FormField name='select-1-name' label='Select'>
              {/* Note: Select does nost list an "id" attribute, hence its not included in FormField and Select */}
              {/* Note: "a11yTitle" attribute can solve issue: Form elements must have labels, however, it should not be needed inside a FormField that has a label? https://v2.grommet.io/select */}
              {/* Additional note: "a11yTitle" on FomField does not resolve issue https://v2.grommet.io/formfield */}
              <Select
                name='select-1-name'
                labelKey='select-1-label'
                options={selectOptions}
                defaultValue={selectOptions[0]}
                disabled={[2]}
              ></Select>
            </FormField>
          </Form>
        </article>
      </section>
    </main>
  )
}

export default index
