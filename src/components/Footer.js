import React from 'react'
// icons
import logo from '../icons/logo.svg'
// style
import './style/footer.scss'

const Footer = () => {
    return <div class="footer bg-3">
        <div>
            <img src={logo} class="logo" alt="ThatApp" />
            <div class="about">It's our job to ensure that you're never lost in the clouds. Gain a refreshing perspective of your business processes and strategic initiatives.</div>
        </div>
        <div class="list triple-container">
            <div class="item-container">
                <div class="color-2">LEARN MORE</div>
                <div class="item">Features</div>
                <div class="item">Integrations</div>
                <div class="item">Pricing</div>
                <div class="item">Documentation</div>
            </div>
            <div class="item-container">
                <div class="color-2">RESOURCES</div>
                <div class="item">Support</div>
                <div class="item">Contact</div>
                <div class="item">Cookie settings</div>
            </div>
            <div class="item-container">
                <div class="color-2">LEGAL</div>
                <div class="item">Privacy Policy</div>
                <div class="item">Terms of Use</div>
                <div class="item">Cookie settings</div>
            </div>
        </div>
        <div class="copyright">&copy; 2021 Sync</div>
    </div>
}

export default Footer
