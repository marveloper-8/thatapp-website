import React from 'react'
// components
import Navigation from '../components/Navigation'
import Accordion from '../components/Accordion'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'
// widgets
import Button from '../widgets/buttons/Button'
// style
import './styles/pricing.scss'
// icons
import check2 from '../icons/check-mark2.svg'
import check3 from '../icons/check-mark3.svg'
// data
const faq = [
    {
        title: "What exactly is thatapp.io about?",
        text: "You can open a thatapp.io account from one of the links above and choose a suitable plan for you."
    },
    {
        title: "What can open a thatapp.io account?",
        text: "You can open a thatapp.io account from one of the links above and choose a suitable plan for you."
    },
    {
        title: "How do i open a thatapp.io account",
        text: "You can open a thatapp.io account from one of the links above and choose a suitable plan for you."
    },
    {
        title: "Does my subscription cover all the features",
        text: "You can open a thatapp.io account from one of the links above and choose a suitable plan for you."
    },
    {
        title: "Does thatapp.io have a free plan",
        text: "You can open a thatapp.io account from one of the links above and choose a suitable plan for you."
    },
    {
        title: "Can i cancel my subscription or switch to another plan anytime",
        text: "You can open a thatapp.io account from one of the links above and choose a suitable plan for you."
    }
]

const Pricing = () => {
    return <div class="pricing">
        <Navigation />
        <section class="landing">
            <div class="head">
                <div class="font-40 color-1">Choose the plan that’s right for you</div>
                <div class="color-black-2">Pay by month or the year, and cancel at any time.</div>
            </div>
            <div class="quadruple-container">
                <div class="item">
                    <div class="font-14 bg-4 popular">MOST POPULAR</div>
                    <div class="content">
                        <div class="font-24 bolder name">Starter</div>
                        <div class="font-14">For entrepreneurs and teams to start selling smarter.</div>
                        <div class="color-1 price">
                            <span class="font-50">$35</span>
                            <span class="font-24">/Month</span>
                        </div>
                        <Button 
                            text="Get Started"
                            styling="bg-bd1-1 full-input"
                        />
                        <div class="font-18 features">
                            <div><img src={check2} alt="check" /> <span>10 Projects</span></div>
                            <div><img src={check2} alt="check" /> <span>10 Pages</span></div>
                            <div><img src={check2} alt="check" /> <span>100 Mb Disk Space</span></div>
                        </div>
                    </div>
                </div>
                <div class="item popular-item">
                    <div class="font-14 bg-4 popular">MOST POPULAR</div>
                    <div class="content">
                        <div class="font-24 bolder name">Business</div>
                        <div class="font-14">For entrepreneurs and teams to start selling smarter.</div>
                        <div class="color-1 price">
                            <span class="font-50">$60</span>
                            <span class="font-24">/Month</span>
                        </div>
                        <Button 
                            text="Get Started"
                            styling="bg-bd1-1 full-input"
                        />
                        <div class="font-18 features">
                            <div><img src={check2} alt="check" /> <span>10 Projects</span></div>
                            <div><img src={check2} alt="check" /> <span>10 Pages</span></div>
                            <div><img src={check2} alt="check" /> <span>100 Mb Disk Space</span></div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="font-14 bg-4 popular">MOST POPULAR</div>
                    <div class="content">
                        <div class="font-24 bolder name">Enterprise</div>
                        <div class="font-14">For entrepreneurs and teams to start selling smarter.</div>
                        <div class="color-1 price">
                            <span class="font-50">$100</span>
                            <span class="font-24">/Month</span>
                        </div>
                        <Button 
                            text="Get Started"
                            styling="bg-bd1-1 full-input"
                        />
                        <div class="font-18 features">
                            <div><img src={check2} alt="check" /> <span>10 Projects</span></div>
                            <div><img src={check2} alt="check" /> <span>10 Pages</span></div>
                            <div><img src={check2} alt="check" /> <span>100 Mb Disk Space</span></div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="font-14 bg-4 popular">MOST POPULAR</div>
                    <div class="content">
                        <div class="font-24 bolder name">Data Reparo</div>
                        <div class="font-14">For entrepreneurs and teams to start selling smarter.</div>
                        <div class="color-1 price">
                            <span class="font-50">$250</span>
                            <span class="font-24">/Month</span>
                        </div>
                        <Button 
                            text="Get Started"
                            styling="bg-bd1-1 full-input"
                        />
                        <div class="font-18 features">
                            <div><img src={check2} alt="check" /> <span>10 Projects</span></div>
                            <div><img src={check2} alt="check" /> <span>10 Pages</span></div>
                            <div><img src={check2} alt="check" /> <span>100 Mb Disk Space</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="plan-details">
            <div class="head font-24 bolder">Compare plans in detail</div>
            <div class="plan-details-container">
                <div class="double-container-1-4">
                    <div class="features item">
                        <div class="inner">
                            <div class="bold">Features</div>
                            <div class="tab">Backing Up</div>
                            <div class="tab">Syncing</div>
                            <div class="tab">Access to portal</div>
                            <div class="tab">Activity reminders</div>
                            <div class="tab">Unlimited pipelines</div>
                            <div class="tab">Integrations</div>
                            <div class="tab">Disk Space</div>
                        </div>
                    </div>
                    <div class="quadruple-container2">
                        <div class="item">
                            <div class="inner bg-5">
                                <div class="bold">Starter</div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab">&nbsp;</div>
                                <div class="tab">&nbsp;</div>
                                <div class="tab">&nbsp;</div>
                                <div class="tab color-1">100</div>
                            </div>
                            <Button 
                                text="Get Started"
                                styling="bg-bd1-1 full-input"
                            />
                        </div>
                        <div class="item">
                            <div class="inner bg-5">
                                <div class="bold">Business</div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab">&nbsp;</div>
                                <div class="tab color-1">100</div>
                            </div>
                            <Button 
                                text="Get Started"
                                styling="bg-bd1-1 full-input"
                            />
                        </div>
                        <div class="item">
                            <div class="inner bg-5">
                                <div class="bold">Enterprise</div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab color-1">100</div>
                            </div>
                            <Button 
                                text="Get Started"
                                styling="bg-bd1-1 full-input"
                            />
                        </div>
                        <div class="item">
                            <div class="inner bg-5">
                                <div class="bold">Data Reparo</div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab"><img src={check3} alt="check" /></div>
                                <div class="tab color-1">100</div>
                            </div>
                            <Button 
                                text="Get Started"
                                styling="bg-bd1-1 full-input"
                            />
                        </div>
                    </div>
                </div>    
            </div>
        </section>
        <section class="faq bg-2">
            <div class="head">
                <div class="font-32 bolder">Frequently Asked Questions</div>
                <div class="font-24 color-black-2">Got questions? We got answeres to them.</div>
            </div>
            {
                faq.map(item => {
                    return <Accordion title={item.title} text={item.text} />
                })
            }
        </section>
        <GetStarted />
        <Footer />
    </div>
}

export default Pricing
