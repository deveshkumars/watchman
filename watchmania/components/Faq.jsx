'use client'

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div className="w-full pt-12 mb-6 xl:mb-24">
                <h2 className="section-title mb-12 text-center mx-auto">
                    World's Number One Watch Trading Platform
                </h2>
                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    01. Why would I use this platform?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                In a world of rolex fakes, it's paramount that watch buyers with thousands of dollars to blow are able to not get scammed. They need a platform that they trust. Which is us. Duh.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    02. Do you take a commission?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                Maybe, maybe not. I wouldn't worry about. Woah look over there, is that a Audemars Piguet!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div>
                    <Accordion type='single' collapsible className='w-full'>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className='ms-3'>
                                    03. Can I get a refund?
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                No dawg.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq