import React from 'react'
// import Projects from './Projects'
import allergy1 from './imgs/allergy1.png'
import allergy2 from './imgs/allergy2.png'
import crypto1 from './imgs/crypto1.png'
import gaycation1 from './imgs/gaycation1.png'

export default function ProjectImgs() {
    // setTimeout(()=>{require('./Projects')},10)
    return (
        <div>
            <div class="mySlides">
                <div class="images">
                    <img className="projectimg" src={gaycation1} alt="gaycation1"></img>
                </div>
                <div class="projectDescription">
                    <h4>Gaycation</h4><br></br>
                    <p><b>January 2022</b></p>
                    <p>Humans who identify as part of the LGBTQIA+ community, especially if they are “visually queer”, don’t always feel safe going on vacation. There are still many places around the world where LGBTQIA+ people are not accepted and may face discrimination. The Gaycation app allows users to rate and review locations so that people can refer to the site and see what kind of experience others have had there. Plans for more in the future. </p><br></br>
                    <p>Tech Stack: MongoDB, Express, React, Node</p><br></br>
                    <a href="https://client-gaycation.herokuapp.com/">Deployed Link</a>
                </div>
            </div>
            <div class="mySlides">
                <div class="images">
                    <img className="projectimg" src={crypto1} alt="crypto1"></img>
                </div>
                <div class="projectDescription">
                    <h4>Crypto/Bytes</h4><br></br>
                    <b>December 2021</b>
                    <p>Cryptocurrency based website that displays cryptocurrencies and attributes of each coin. Making requests from the Coincap API. Able to create an account with a username/password/email. With an account you can save specific cryptos to a list and also add a footnote under each saved crypto(ex: your personal thoughts on a crypto or market predictions). Upon clicking a crypto be led to a new page displaying more information and history of the coin/a line graph depicting price history.</p><br></br>
                    <p>Tech Stack: MongoDB, Mongoose, Node, React, Express, Bootstrap</p><br></br>
                    <a href="http://cryptobyte.herokuapp.com/">Deployed Link</a>
                </div>
            </div>
            <div class="mySlides">
                <div class="images">
                    <img className="projectimg" src={allergy2} alt="allergy2"></img>
                </div>
                <div class="projectDescription">
                    <h4>Allergy Child</h4><br></br>
                    <p><b>October 2021</b></p>
                    <p>Game application built for the first assigned project of the Software Engineering Bootcamp. Used basic HTML, CSS, and JavaScript to create this project.</p><br></br>
                    <a href="https://emilybarwinczak.github.io/allergy-child/">Deployed Link</a>
                </div>
            </div>
        </div>
    )
}








// <div class="carousel">

//     <div class="container">
//         <div class="carouselTackContainer">

//             <ul class="carouselTrack">
//                 <li class="carouselSlide current-slide">
//                     <div class="mySlides">
//                         <img className="projectimg" src={allergy1} alt="allergy1"></img>
//                     </div>
//                     <h5>Allergy Child Game</h5>
//                 </li>
//                 <li class="carouselSlide">
//                     <div class="mySlides">
//                         <img className="projectimg" src={allergy2} alt="allergy2"></img>
//                     </div>
//                     <h5>Allergy Child Game</h5>
//                 </li>
//             </ul>

//         </div>
//     </div>

// </div>