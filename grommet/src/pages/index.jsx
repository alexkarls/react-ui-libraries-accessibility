import React from 'react'
import { Accordion, AccordionPanel, Box, Text, Tabs, Tab } from 'grommet'

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
          {/* Tabs implementation: https://v2.grommet.io/accordion */}
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
      </section>
    </main>
  )
}

export default index
