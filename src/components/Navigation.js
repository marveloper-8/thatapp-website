import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// icons
import logo from '../icons/logo.svg'
import menu_icon from '../icons/menu.svg'
// widgets
import Button from '../widgets/buttons/Button'
// style
import './style/nav.scss'

const Navigation = () => {
    const [menu, setMenu] = useState(false)
    return <section class="navigation">
        <div class="desktop">
            <div class="inner">
                <div>
                    <Link class="link" to='/'><img src={logo} alt="ThatApp" class="logo" /></Link>
                    <Link class="link" to='/features'><span>Features</span></Link>
                    <Link class="link" to='/integrations'><span>Integrations</span></Link>
                    <Link class="link" to='/pricing'><span>Pricing</span></Link>
                    <span>Support</span>
                </div>
                <div>
                    <Button 
                        text="Try for free"
                        styling="bg-bd1-1"
                    />
                    <span class="color-2">Login</span>
                </div>
            </div>
        </div>
        
        <div class="mobile">
            <div class="inner">
                <div>
                    <Link class="link" to='/'><img src={logo} alt="ThatApp" class="logo" /></Link>
                </div>
                <div class="menu">
                    <img src={menu_icon} alt="menu" onClick={() => setMenu(!menu)} />
                </div>
            </div>
            <div class={menu ? "menu-container menu-container-open" : "menu-container"}>
                <div class="background"></div>
                <div class="menu-list">
                    <div class="close color-4 font-30" onClick={() => setMenu(!menu)}>&times;</div>
                    <Link class="link" to='/' onClick={() => setMenu(!menu)}><div>Home</div></Link>
                    <Link class="link" to='/features' onClick={() => setMenu(!menu)}><div>Features</div></Link>
                    <Link class="link" to='/integrations' onClick={() => setMenu(!menu)}><div>Integrations</div></Link>
                    <Link class="link" to='/pricing' onClick={() => setMenu(!menu)}><div>Pricing</div></Link>
                    <div>Support</div>
                    <div>
                        <Button 
                            text="Try for free"
                            styling="bg-bd1-1"
                        />
                    </div>
                    <div class="color-2">Login</div>
                </div>
            </div>
        </div>
    </section>
}

export default Navigation
