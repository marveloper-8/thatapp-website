import React from 'react'
// components
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
// widgets
import ButtonImage from '../widgets/buttons/ButtonImage'
// style
import './styles/integrations.scss'
// illustrations
import integrations from '../illustrations/integrations.svg'
// icons
import button_arrow from '../icons/arrow-bottom.svg'
import arrow_right from '../icons/arrow-right2.svg'

import podio from '../icons/podio.svg'
import salesforce from '../icons/salesforce.svg'
import shopify from '../icons/shopify.svg'
import quickbooks from '../icons/quickbooks.svg'
import dropbox from '../icons/dropbox.svg'

const Integrations = () => {
    return <div class="integrations">
        <Navigation />
        <section class="landing bg-2 double-container">
            <div>
                <div class="font-48 color-1">With app integrations, you get more control</div>
                <div class="color-black-2">Gain a refreshing perspective of your business processes and strategic initiatives through the eyes of our skilled workflow architects and system integrators. </div>
                <ButtonImage 
                    text="See all Features"
                    img={button_arrow}
                    styling="bg-bd0-none color-1 button-3"
                />
            </div>
            <div><img src={integrations} alt="integrations" /></div>
        </section>
        <section class="features">
            <div>
                <div class="head">
                    <div class="font-32 bolder">Features to automate your workflow seamlessly</div>
                    <div class="color-black-2 subtitle">It's our job to ensure that you're never lost in the clouds. Gain a refreshing perspective of your business processes and strategic initiatives.</div>
                </div>
                <div class="quadruple-container">
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={salesforce} class="client" alt="salesforce" />
                        <div class="text">
                            <div class="name bold">
                                <span>Salesforce</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={shopify} class="client" alt="shopify" />
                        <div class="text">
                            <div class="name bold">
                                <span>Shopify</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={quickbooks} class="client" alt="quickbooks" />
                        <div class="text">
                            <div class="name bold">
                                <span>Quickbooks</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-6 color-3 font-12">Available</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={dropbox} class="client" alt="dropbox" />
                        <div class="text">
                            <div class="name bold">
                                <span>Dropbox</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-7 color-1 font-12">Coming Soon</span>
                        </div>
                    </div>
                    <div class="item">
                        <img src={podio} class="client" alt="podio" />
                        <div class="text">
                            <div class="name bold">
                                <span>Podio</span>
                                <img src={arrow_right} alt="arrow" />
                            </div>
                            <span class="tag bg-7 color-1 font-12">Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
}

export default Integrations