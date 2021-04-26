import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

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
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {text}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {text}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </article>
      </section>
    </main>
  )
}

export default index
