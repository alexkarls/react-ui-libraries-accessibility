import React, { useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { TabView, TabPanel } from 'primereact/tabview'
import { InputText } from 'primereact/inputtext'
import { Checkbox } from 'primereact/checkbox'
import { RadioButton } from 'primereact/radiobutton'
import { Slider } from 'primereact/slider'
import { Dropdown } from 'primereact/dropdown'

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
  { header: 'This is tab 1', eventKey: 'tab-1', text: text, disabled: false },
  {
    header: 'This is tab 2',
    eventKey: 'tab-2',
    text: text + text,
    disabled: false
  },
  { header: 'This is tab 3', eventKey: 'tab-3', text: null, disabled: true }
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
    id: 'checkbox-1-id',
    name: 'checkbox-1-name',
    text: 'This is checkbox 1',
    value: 0,
    disabled: false
  },
  {
    id: 'checkbox-2-id',
    name: 'checkbox-2-name',
    text: 'This is checkbox 2',
    value: 1,
    disabled: false
  },
  {
    id: 'checkbox-3-id',
    name: 'checkbox-3-name',
    text: 'This is checkbox 3',
    value: 2,
    disabled: true
  }
]

const radios = [
  {
    id: 'radio-1-id',
    name: 'radio-1-name',
    text: 'This is radio 1',
    value: 0,
    disabled: false
  },
  {
    id: 'radio-2-id',
    name: 'radio-2-name',
    text: 'This is radio 2',
    value: 1,
    disabled: false
  },
  {
    id: 'radio-3-id',
    name: 'radio-3-name',
    text: 'This is radio 3',
    value: 2,
    disabled: true
  }
]

const sliders = [
  {
    id: 'slider-1-id',
    text: 'This is slider 1',
    disabled: false
  },
  {
    id: 'slider-2-id',
    text: 'This is slider 2',
    disabled: true
  }
]

// Based on documentation: https://github.com/primefaces/primereact/blob/master/src/showcase/dropdown/DropdownDemo.js
const selectOptions = [
  { label: '0', value: '0', disabled: false },
  { label: '1', value: '1', disabled: false },
  { label: '2', value: '2', disabled: true }
]

const index = () => {
  // State required for components
  const [selectedOption, setSelectedOption] = useState('0')
  const [checkedCheckboxes, setCheckedCheckboxes] = useState([])
  const [checkedRadio, setCheckedRadio] = useState(null)
  const [sliderOneValue, setSliderOneValue] = useState(null)
  const [sliderTwoValue, setSliderTwoValue] = useState(null)

  // Based on: https://github.com/primefaces/primereact/blob/master/src/showcase/checkbox/CheckboxDemo.js
  const handleCheckboxes = (event) => {
    const checkboxes = [...checkedCheckboxes]
    if (event.checked) {
      checkboxes.push(event.value)
    } else {
      checkboxes.splice(checkboxes.indexOf(event.value), 1)
    }
    setCheckedCheckboxes(checkboxes)
  }

  return (
    <main>
      <section className='component-section'>
        {/* Accordion: https://www.primefaces.org/primereact/showcase/#/accordion */}
        {/* Implementation based on demo: https://www.primefaces.org/primereact/showcase/#/accordion */}
        <article className='component-article'>
          <Accordion>
            {accordionItems.map((item, index) => (
              <AccordionTab key={index} header={item.header}>
                <p>{item.text}</p>
              </AccordionTab>
            ))}
          </Accordion>
        </article>
        {/* Tabs (TabView): https://primefaces.org/primereact/showcase/#/tabview */}
        {/* Implementation based on demo: https://github.com/primefaces/primereact/blob/master/src/showcase/tabview/TabViewDemo.js */}
        <article className='component-article'>
          <TabView>
            {tabsItems.map((item, index) => (
              <TabPanel
                key={index}
                header={item.header}
                disabled={item.disabled}
              >
                <p>{item.text}</p>
              </TabPanel>
            ))}
          </TabView>
        </article>
        {/* Form */}
        <article className='component-article'>
          {/* Has no Form component */}
          <form>
            {/* Input: https://www.primefaces.org/primereact/showcase/#/inputtext */}
            {/* Implementation based on demo: https://github.com/primefaces/primereact/blob/master/src/showcase/inputtext/InputTextDemo.js */}
            {/* Note: Prime React does not have a normal label component, however, it has something called a FloatLabel: https://www.primefaces.org/primereact/showcase/#/floatlabel */}
            {inputs.map((input, index) => (
              <span key={index} className='p-float-label'>
                <InputText id={input.id} disabled={input.disabled} />
                <label htmlFor={input.id}>{input.text}</label>
              </span>
            ))}
            {/* Checkbox: https://www.primefaces.org/primereact/showcase/#/checkbox */}
            {/* Implementation based on demo: https://github.com/primefaces/primereact/blob/master/src/showcase/checkbox/CheckboxDemo.js */}
            {/* Note: "ariaLabelledBy" exists, but does not seem to solve problem detected with Axe? Is used below as described in: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute */}
            {checkboxes.map((checkbox, index) => (
              <div key={index} className='p-field-checkbox'>
                <Checkbox
                  value={index}
                  inputId={checkbox.id}
                  name={checkbox.name}
                  disabled={checkbox.disabled}
                  onChange={handleCheckboxes}
                  checked={checkedCheckboxes.indexOf(index) !== -1}
                  ariaLabelledBy={`checkbox-label-${index}`}
                />
                <label id={`checkbox-label-${index}`} htmlFor={checkbox.id}>{checkbox.text}</label>
              </div>
            ))}
            {/* Radio: https://www.primefaces.org/primereact/showcase/#/radiobutton */}
            {/* Implementation based on demo: https://github.com/primefaces/primereact/blob/master/src/showcase/checkbox/CheckboxDemo.js */}
            {/* Note: "ariaLabelledBy" exists, but does not seem to solve problem detected with Axe? https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute */}
            {radios.map((radio, index) => (
              <div key={index} className='p-field-radiobutton'>
                <RadioButton
                  value={index}
                  inputId={radio.id}
                  name={radio.name}
                  disabled={radio.disabled}
                  onChange={(e) => setCheckedRadio(e.value)}
                  checked={checkedRadio === index}
                />
                <label htmlFor={radio.id}>{radio.text}</label>
              </div>
            ))}
          </form>
          {/* Slider: https://www.primefaces.org/primereact/showcase/#/slider */}
          {/* Implementation based on demo: https://github.com/primefaces/primereact/blob/master/src/showcase/slider/SliderDemo.js */}
          {/* Important: Made a standard HTML label element since its missing from PrimeReact documentation and Slider examples */}
          {/* Note: "ariaLabelledBy" exists, but does not seem to solve problem detected with Axe? https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute */}
          <label htmlFor={sliders[0].id}>{sliders[0].text}</label>
          <Slider
            id={sliders[0].id}
            disabled={sliders[0].disabled}
            value={sliderOneValue}
            onChange={(e) => setSliderOneValue(e.value)}
          />
          <label htmlFor={sliders[1].id}>{sliders[1].text}</label>
          <Slider
            id={sliders[1].id}
            disabled={sliders[1].disabled}
            value={sliderTwoValue}
            onChange={(e) => setSliderTwoValue(e.value)}
            ariaLabelledBy={sliders[1].id}
          />
          {/* Select (Dropdown): https://www.primefaces.org/primereact/showcase/#/dropdown */}
          {/* Implementation based on: https://github.com/primefaces/primereact/blob/master/src/showcase/dropdown/DropdownDemo.js */}
          {/* Important: Made a standard HTML label element since its missing from PrimeReact documentation and Slider examples */}
          {/* Note: "ariaLabel" attribute can solve potential issue detected with Axe */}
          <label htmlFor='select-1-id'>Select</label>
          <Dropdown
            id='select-1-id'
            name='select-1-name'
            value={selectedOption}
            options={selectOptions}
            onChange={(event) => setSelectedOption(event.target.value)}
          ></Dropdown>
        </article>
      </section>
    </main>
  )
}

export default index
