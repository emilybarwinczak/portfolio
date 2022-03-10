import css from '../logos/css.png'
import db from '../logos/db.png'
import django from '../logos/django.png'
import html from '../logos/html.png'
import javascript from '../logos/javascript.png'
import node from '../logos/node.png'
import postgres from '../logos/postgres.png'
import python from '../logos/python.png'
import react from '../logos/react.png'

export default function Logos() {
    return (
        <div>
            <h3>SKILLS</h3>
            <div className="row">
                <div className="col-sm-3">
                    <img className="logo" src={javascript}></img><br></br><br></br><b>JavaScript</b>
                </div><br></br><br></br><br></br>
                <div className="col-sm-3">
                    <img className="logo" src={python}></img><br></br><br></br><b>Python</b>
                </div>
                <div className="col-sm-3">
                    <img className="logo" src={postgres}></img><br></br><br></br><b>PostgreSQL</b>
                </div><br></br><br></br><br></br>
                <div className="col-sm-3">
                    <img className="logo" src={css}></img><br></br><br></br><b>CSS</b>
                </div>
                <div className="col-sm-3">
                    <img className="logo" src={react}></img><br></br><br></br><b>React</b>
                </div><br></br><br></br><br></br>
                <div className="col-sm-3">
                    <img className="logo" src={node}></img><br></br><br></br><b>Node</b>
                </div>
                <div className="col-sm-3">
                    <img className="logo" src={html}></img><br></br><br></br><b>HTML</b>
                </div><br></br><br></br><br></br>
                <div className="col-sm-3">
                    <img className="logo" src={db}></img><br></br><br></br><b>MongoDB</b>
                </div>
                {/* <div className="col-sm-3">
            <img className="logo" src={django}></img><br></br><b>Django</b>
        </div> */}
            </div>
        </div>
    )
}