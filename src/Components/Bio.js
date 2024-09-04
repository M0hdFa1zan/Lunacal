import React from "react"
import "./Bio.css"

function Bio() {

    return (
        <div className='bio'>
            <div className='contain-bio'>
                <div className='row-one'>
                    <div className='icon-one'><img src='../Assets/Images/question.png' alt='' /></div>
                    <div className='tabs'>
                        <div className='option' tabIndex={1}>About Me</div>
                        <div className='option' tabIndex={2}>Experiences</div>
                        <div className='option' tabIndex={3}>Recommended</div>
                    </div>
                </div>
                <div className='row-two'>
                    <div className='icon-two'><img src='../Assets/Images/grid.png' alt='' /></div>
                    <div className='inp'>
                        <textarea className="custom-scrollbar" rows="6" cols="50" placeholder="Type your text here..."></textarea>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Bio
