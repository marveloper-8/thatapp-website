import React from 'react'
// components
import Navigation from '../components/Navigation'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'
// widgets
import Text from '../widgets/inputs/Text'
import Button from '../widgets/buttons/Button'
// style
import './styles/home.scss'
// illustrations
import computer from '../illustrations/computer.svg'
import features from '../illustrations/features.svg'
import email from '../illustrations/email.svg'
// icons
import check from '../icons/check-mark.svg'
import quote from '../icons/open-quote.svg'

import google from '../icons/google.svg'
import airbnb from '../icons/airbnb.svg'
import netflix from '../icons/netflix.svg'
import nike from '../icons/nike.svg'
import slack from '../icons/slack.svg'

const Home = () => {
    return <div class="home">
        <Navigation />
        <section class="landing bg-2 double-container">
            <div>
                <div class="font-48 color-1">Backup & Synchronize your Data Seamlessly</div>
                <div class="color-black-2">Gain a refreshing perspective of your business processes and strategic initiatives through the eyes of our skilled workflow architects and system integrators. </div>
                <form class="double-container-2-1">
                    <div>
                        <Text 
                            type="email"
                            placeholder="Email Address"
                            styling="double-elem"
                        />
                    </div>
                    <div>
                        <Button 
                            text="Try for free"
                            styling="double-elem bg-bd1-1"
                        />
                    </div>
                </form>
            </div>
            <div class="mobile-alt"><img src={computer} alt="computer" /></div>
        </section>
        <section class="join-companies">
            <div class="inner">
                <div class="font-18">Join leading companies and startups in backing up and syncing their data with Sync</div>
                <div class="icons">
                    <img src={google} alt="google" />
                    <img src={airbnb} alt="airbnb" />
                    <img src={netflix} alt="netflix" />
                    <img src={slack} alt="slack" />
                    <img src={nike} alt="nike" />
                </div>
            </div>
        </section>
        <section class="cognitive-features double-container">
            <div>
                <div class="head">
                    <div class="font-38 bolder">Gain an unfair advantage with cognitive features</div>
                    <div class="color-black-2">It's our job to ensure that you're never lost in the clouds. Gain a refreshing perspective of your business processes and strategic initiatives.</div>
                </div>
                <div class="list double-container">
                    <div class="item">
                        <div class="font-18 color-1 bolder">
                            Tools for every stack
                        </div>
                        <div>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</div>
                        <div class="action color-1">Learn More &gt;</div>
                    </div>
                    <div class="item">
                        <div class="font-18 color-1 bolder">
                            Tools for every stack
                        </div>
                        <div>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</div>
                        <div class="action color-1">Learn More &gt;</div>
                    </div>
                    <div class="item">
                        <div class="font-18 color-1 bolder">
                            Tools for every stack
                        </div>
                        <div>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</div>
                        <div class="action color-1">Learn More &gt;</div>
                    </div>
                    <div class="item">
                        <div class="font-18 color-1 bolder">
                            Tools for every stack
                        </div>
                        <div>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</div>
                        <div class="action color-1">Learn More &gt;</div>
                    </div>
                </div>
            </div>
            <div class="image"><img src={features} alt="cognitive features" /></div>
        </section>
        <section class="innovative-approach bg-2">
            <div class="double-container">
                <div>
                    <div class="font-30 color-1">An innovative approach to backing up and synchronizing your data</div>
                    <div>We agonize over the right distractions so your teams don't need to stitch together disparate systems or spend months integrating payments functionality.</div>
                </div>
                <div class="list">
                    <div class="item">
                        <div><img src={check} alt="check" /></div> 
                        <div>Measure the effectiveness of your customer communication and find the best time and channel to reach out to your customers</div>
                    </div>
                    <div class="item">
                        <div><img src={check} alt="check" /></div> 
                        <div>We release hundreds of features and improvements each year to help you stay ahead of industry shifts.</div>
                    </div>
                    <div class="item">
                        <div><img src={check} alt="check" /></div> 
                        <div>Our systems operate with 99.9%+ uptime and are highly scalable and redundant</div>
                    </div>
                    <div class="item">
                        <div><img src={check} alt="check" /></div> 
                        <div>Automate every aspect of your business and cut out time-intensive, repititive tasks</div>
                    </div>
                </div>
            </div>
            <div class="email-image"><img src={email} alt="email" /></div>
        </section>
        <section class="testimonial">
            <div class="head">
                <div class="font-32 bolder">Here’s what people are saying about sync</div>
                <div class="color-black-2">From Ceo’s to Head of operations people love using Sync</div>
            </div>
            <div class="triple-container">
                <div class="item">
                    <img src={quote} alt="open quote" />
                    <div class="text">First and foremost, customer service is awesome. The company culture is much more appreciative of a small business and will treat you with respect and dignity, I'm literally blown away. This is the answer we've all been looking for.</div>
                    <div class="person">
                        <div class="image"></div>
                        <div class="info">
                            <div class="bold">Arnold Foster</div>
                            <div class="font-12">Head of Operations, TalentPool</div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src={quote} alt="open quote" />
                    <div class="text">First and foremost, customer service is awesome. The company culture is much more appreciative of a small business and will treat you with respect and dignity, I'm literally blown away. This is the answer we've all been looking for.</div>
                    <div class="person">
                        <div class="image"></div>
                        <div class="info">
                            <div class="bold">Arnold Foster</div>
                            <div class="font-12">Head of Operations, TalentPool</div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src={quote} alt="open quote" />
                    <div class="text">First and foremost, customer service is awesome. The company culture is much more appreciative of a small business and will treat you with respect and dignity, I'm literally blown away. This is the answer we've all been looking for.</div>
                    <div class="person">
                        <div class="image"></div>
                        <div class="info">
                            <div class="bold">Arnold Foster</div>
                            <div class="font-12">Head of Operations, TalentPool</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <GetStarted />
        <Footer />
    </div>
}

export default Home
