import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Select
} from '@chakra-ui/react'

// This text is used in other components as seen in the Accordions and Tabs below
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
    text: 'This is checkbox 3',
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
  { name: 'slider-1-name', text: 'This is slider 1', disabled: false },
  { name: 'slider-2-name', text: 'This is slider 1', disabled: true }
]

const selectOptions = [
  { value: 0, disabled: false },
  { value: 1, disabled: false },
  { value: 2, disabled: true }
]

const index = () => {
  // State required to switch radios: https://chakra-ui.com/docs/form/radio
  const [radioValue, setRadioValue] = useState(0)
  return (
    <main>
      <section className='component-section'>
        {/* Accordion implementation: https://chakra-ui.com/docs/disclosure/accordion */}
        <article className='component-article'>
          <Accordion>
            {accordionItems.map((item, index) => {
              return (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        {item.header}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{item.text}</AccordionPanel>
                </AccordionItem>
              )
            })}
          </Accordion>
        </article>
        {/* Tabs implementation: https://chakra-ui.com/docs/disclosure/tabs */}
        <article className='component-article'>
          <Tabs>
            <TabList>
              {tabsItems.map((item, index) => (
                <Tab key={index} isDisabled={item.disabled}>
                  {item.header}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {tabsItems.map((item, index) => (
                <TabPanel key={index}>{item.text}</TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </article>
        {/* Form implementation: https://chakra-ui.com/docs/form/form-control */}
        <article className='component-article'>
          <form>
            {/* Input: https://chakra-ui.com/docs/form/input and Form Control for label: https://chakra-ui.com/docs/form/form-control */}
            {inputs.map((input, index) => {
              return (
                <FormControl key={index} id={input.name} isDisabled={input}>
                  <FormLabel>{input.text}</FormLabel>
                  <Input />
                </FormControl>
              )
            })}
            {/* Checkbox (uncontrolled, no value): https://chakra-ui.com/docs/form/checkbox */}
            {/* Stack is included in docs, seem to be standard to use for stacking/spacing */}
            <CheckboxGroup>
              <Stack direction='row'>
                {checkboxes.map((checkbox, index) => (
                  <Checkbox key={index} isDisabled={checkbox.disabled}>
                    {checkbox.text}
                  </Checkbox>
                ))}
              </Stack>
            </CheckboxGroup>
            {/* Radio: https://chakra-ui.com/docs/form/radio */}
            {/* Stack is included in docs, seem to be standard to use for stacking/spacing */}
            <RadioGroup
              value={Number(radioValue)}
              onChange={(radioValue) => setRadioValue(radioValue)}
            >
              <Stack direction='row'>
                {radios.map((radio, index) => (
                  <Radio
                    key={index}
                    value={Number(index)}
                    isDisabled={radio.disabled}
                  >
                    {radio.text}
                  </Radio>
                ))}
              </Stack>
            </RadioGroup>
            {/* Slider: https://chakra-ui.com/docs/form/slider */}
            {/* Form Control docs for label: https://chakra-ui.com/docs/form/form-control (no other method to include text/label in the component documentation) */}
            {/* Note: Docs recommended aria-label */}
            {sliders.map((slider, index) => (
              <FormControl key={index} id={slider.name}>
                <FormLabel>{slider.text}</FormLabel>
                <Slider isDisabled={slider.disabled}>
                  <SliderTrack aria-label={slider.name}>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </FormControl>
            ))}
            {/* Select: */}
            {/* Form Control docs for label: https://chakra-ui.com/docs/form/form-control (no other method to include text/label in the component documentation) */}
            <FormControl id='select-1'>
              <FormLabel>Select</FormLabel>
              <Select defaultValue={selectOptions[0].value}>
                {selectOptions.map((option, index) => (
                  <option
                    key={index}
                    disabled={option.disabled}
                    value={option.value}
                  >
                    {option.value}
                  </option>
                ))}
              </Select>
            </FormControl>
          </form>
        </article>
      </section>
    </main>
  )
}

export default index
