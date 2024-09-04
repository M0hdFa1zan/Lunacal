import React from 'react'
import "./Homepage.css"
import Bio from '../Components/Bio'
import Gallery from '../Components/Gallery'

function Homepage() {
    return (
        <div className='homepage'>
            <div className='contain-home'>
                <div className='widgets'>
                    <div className='widget-one'>
                        <Bio />
                        <div className='bar'><hr></hr></div>
                    </div>
                    <div className='widget-two'>
                        <Gallery />
                        <div className='bar'><hr></hr></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
