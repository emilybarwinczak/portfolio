import Projects from './Projects'
import ProjectImgs from './ProjectImgs'

export default function Project() {
    return (
        <div class="projectSection" id="projects">
            <h3>PROJECTS</h3>
            <div class="projectContainer">
                <ProjectImgs />
                {/* <Projects /> */}
            </div>
        </div>
    )
}