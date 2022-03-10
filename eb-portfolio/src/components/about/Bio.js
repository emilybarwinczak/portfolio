import Resume from './EmilyBarwinczakResume.pdf'
import React from 'react'

export default function Bio() {
    return (
        <div class="about">
        <h2>ABOUT ME</h2><br></br>
            <div className="body">
                Non-profit programs manager turned software engineer who is dedicated to producing clear and concise products and solutions. My career change was driven by my desire to continue learning and growing professionally as well as personally. I am an organized, detail-oriented, and dedicated worker who is willing to go the extra mile to make sure all needs are met.
                <h5><a href="https://github.com/emilybarwinczak">GitHub</a> | <a href="https://www.linkedin.com/in/emilybarwinczak/">LinkedIn</a> | <a href={Resume} download>Resume</a></h5>
                </div>
    </div>
    )
}
