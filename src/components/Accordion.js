import React, {useState} from 'react'
// icons
import icon from '../icons/plus-circle.svg'
// style
import './style/accordion.scss'

const Accordion = e => {
    const [accordion, setAccordion] = useState(false)
    return <section class="accordion">
    <div class="accordion-top bold font-24" onClick={() => setAccordion(!accordion)}>
        <span>{e.title}</span>
        <img src={icon} alt="arrow" class={accordion ? "active mobile-alt" : "mobile-alt"} />
    </div>
    <div class={accordion ? "accordion-content accordion-content-open" : "accordion-content"}>{e.text}</div>
    </section>
}

export default Accordion
