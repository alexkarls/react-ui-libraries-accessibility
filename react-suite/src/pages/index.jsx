import React from 'react'

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

const index = () => {
  return (
    <main>
      <section className='component-section'>
        <article className='component-article'>placeholder</article>
      </section>
    </main>
  )
}

export default index
