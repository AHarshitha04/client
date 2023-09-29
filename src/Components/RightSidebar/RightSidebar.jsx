import React from 'react'

import './RightSidebar.css'





const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

const renderList = buttons.map((item, index) =>
    <div key={index}><button className='quesAns-btn'>{item}</button></div>
)


const RightSidebar = () => {
    return (

        <div className='right-side-bar'>
            <div className='rightSidebar-topHeader'><p>Name of the person</p>
            <p>Remaining Time: 1:10:30</p>
            </div>
            <div className='sidebar-header'>
                <p className='header-para'>You are viewing <span className='subject'>Mathematics</span> Section Question Palette</p>
            </div>

            <div className='ques-btn'>
                <ul className='btn-ul'>{renderList}</ul>
            </div>

            <div className='sidebar-footer'>
                <h4 className='sidebar-footer-header'>Legend</h4>
                <div className='footer-btns'>
                    <div className='inst-btns'><button className='instruction-btn1'>1</button><p>Answerd</p><br /></div><br />
                    <div className='inst-btns'><button className='instruction-btn2'>0</button><p>Not Answered</p><br /></div><br />
                    <div className='inst-btns'><button className='instruction-btn3'>2</button><p>Marked</p><br /></div><br />
                    <div className='inst-btns'><button className='instruction-btn4'>1</button><p>Not Visited</p></div>
                </div>
            </div>

        </div>
    )
}


export default RightSidebar
