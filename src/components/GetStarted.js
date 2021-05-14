import React from 'react'
// widgets
import Button from '../widgets/buttons/Button'
// style
import './style/get-started.scss'

const GetStarted = () => {
    return <section class="get-started">
        <div class="bg-3">
            <div class="inner">
                <div class="font-32 color-1 bold">Ready to get started?</div>
                <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div>
                    <Button 
                        text="Get started for free"
                        styling="bg-bd1-1"
                    />
                </div>
            </div>
        </div>
    </section>
}

export default GetStarted
