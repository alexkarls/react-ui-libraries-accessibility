import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Quisque gravida nibh ac augue ornare vestibulum. 
Nunc eget porta nisl, vestibulum posuere ligula. 
Nunc mollis blandit ante, sed placerat risus ornare ac. 
Nunc tincidunt viverra tincidunt. Nullam sit amet massa nunc. 
Vivamus nec risus vel risus scelerisque mattis eget at justo. 
Ut tincidunt varius libero. 
Donec porta justo et lacus molestie, ac rhoncus eros fermentum. 
Nam sollicitudin blandit dolor et cursus. 
Proin euismod eros sed fermentum varius. 
Quisque vehicula egestas orci, ut pellentesque mauris lobortis vel. 
Duis neque felis, dictum in laoreet sit amet, mollis quis nunc.
`

const index = () => {
  return (
    <main>
      <section className='component-section'>
        <article className='component-article'>
        <Collapse accordion>
    <Panel header="This is panel header 1" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel>
  </Collapse>,
        </article>
      </section>
    </main>
  )
}

export default index
