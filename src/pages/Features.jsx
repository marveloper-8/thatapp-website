import React from 'react'
// components
import Navigation from '../components/Navigation'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'
// widgets
import Button from '../widgets/buttons/Button'
import ButtonImage from '../widgets/buttons/ButtonImage'
// style
import './styles/features.scss'
// illustrations
import features_landing from '../illustrations/features-landing.svg'
import features1 from '../illustrations/features1.svg'
import features2 from '../illustrations/features2.svg'
// icons
import iris from '../icons/iris.svg'
import hooks from '../icons/hooks.svg'
import app_builder from '../icons/app-builder.svg'
import raw_data from '../icons/raw-data.svg'
import users from '../icons/users.svg'
import gdpr from '../icons/gdpr.svg'
import button_arrow from '../icons/arrow-bottom.svg'
import quote from '../icons/open-quote2.svg'

const Features = () => {
    return <div class="features">
        <Navigation />
        <section class="landing bg-2 double-container">
            <div class="text">
                <div class="font-48 color-1">A data-driven platform, purposely engineered for you</div>
                <div class="color-black-2">Gain a refreshing perspective of your business processes and strategic initiatives through the eyes of our skilled workflow architects and system integrators. </div>
                <div class="double-container">
                    <div>
                        <Button 
                            text="Try for free"
                            styling="double-elem bg-bd1-1"
                        />
                    </div>
                    <div>
                        <ButtonImage 
                            text="See all Features"
                            img={button_arrow}
                            styling="double-elem bg-bd0-none color-1 button-3"
                        />
                    </div>
                </div>
            </div>
            <div class="image"><img src={features_landing} alt="features" /></div>
        </section>
        <section class="automate">
            <div class="head">
                <div class="font-32 bolder">Features to automate your workflow seamlessly</div>
                <div class="color-black-2">It's our job to ensure that you're never lost in the clouds. Gain a refreshing perspective of your business processes and strategic initiatives.</div>
            </div>
            <div class="double-container">
                <div class="text">
                    <div class="font-24 bolder">Backup and Restore Data</div>
                    <div class="sub-text">You can back up and restore your data for various platforms such as Podio, shopify(coming soon) and Salesforce(coming soon). You have the ability to completely restore any lost data and have access to it</div>
                </div>
                <div><img src={features1} alt="features one" /></div>
            </div>
            <div class="double-container">
                <div class="text">
                    <div class="font-24 bolder">Audit Feature</div>
                    <div class="sub-text">You can audit your apps and spaces on your CRM, access features such as access control and even restoration of lost data on space/app level within Podio. Other platform integrations are coming soon.</div>
                </div>
                <div><img src={features2} alt="features two" /></div>
            </div>
        </section>
        <section class="work-easily bg-2">
            <div class="head">
                <div class="font-32 bolder">Features to automate your workflow seamlessly</div>
                <div class="color-black-2">It's our job to ensure that you're never lost in the clouds. Gain a refreshing perspective of your business processes and strategic initiatives.</div>
            </div>
            <div class="triple-container">
                <div class="item">
                    <img src={iris} alt="iris" />
                    <div class="font-18 bold">IRIS</div>
                    <div>For data visualization, see where your data originates from and gain better understanding of your data</div>
                </div>
                <div class="item">
                    <img src={hooks} alt="hooks" />
                    <div class="font-18 bold">Hooks Management</div>
                    <div>Manage your hooks easily and remove hooks that are redundant. Have more control of your Data</div>
                </div>
                <div class="item">
                    <img src={app_builder} alt="app builder" />
                    <div class="font-18 bold">App Builder</div>
                    <div>We have extended the ability to build your app easily with different layouts. Innovate clearly and easily.</div>
                </div>
                <div class="item">
                    <img src={raw_data} alt="raw data" />
                    <div class="font-18 bold">Raw Data</div>
                    <div>Have access to a JSON response of your data and control it however way you want.</div>
                </div>
                <div class="item">
                    <img src={users} alt="users" />
                    <div class="font-18 bold">User Management</div>
                    <div>Add and remove members of your organisation to your backup data</div>
                </div>
                <div class="item">
                    <img src={gdpr} alt="gdpr" />
                    <div class="font-18 bold">GDPR</div>
                    <div>We are GDPR complainant, manage the when you want you data completely removed from our platform</div>
                </div>
            </div>
        </section>
        <section class="testimonial">
            <div class="inner">
                <img src={quote} alt="quote" />
                <div class="font-18">We have been using Sync for more than 2 years and now I can say for sure that we need it and only Sync, nothing else. I do not want another window on my computer, I want it to be linked with my Data and it is perfect and simple.</div>
                <div class="person">
                    <div class="image"></div>
                    <div class="info">
                        <div class="bold">Arnold Foster</div>
                        <div class="font-12">Head of Operations, TalentPool</div>
                    </div>
                </div>
            </div>
        </section>
        <GetStarted />
        <Footer />
    </div>
}

export default Features
