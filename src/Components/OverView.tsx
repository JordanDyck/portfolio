import me from "../assets/me.png"
import {projectInfo} from "./ProjectInfo"

type props = {
  setCurrentProject: React.Dispatch<React.SetStateAction<number>>
  setShowWelcome: React.Dispatch<React.SetStateAction<boolean>>
  setDirection: React.Dispatch<React.SetStateAction<number>>
}

const OverView = ({setCurrentProject, setShowWelcome, setDirection}: props) => {
  return (
    <div className="welcome">
      <img className="self-image" src={me} alt="jordan image" />
      <div className="intro-text">
        <h1 className="name">{`<I'm JORDAN!/>`}</h1>
        <h1 className="career">
          {`<Junior Front-End`} <span>Reactjs/TypeScript</span> {`developer/>`}
        </h1>
        <h1 className="experience">{`<Over 4 years of website making experience/>`}</h1>
        <h1 className="about">
          I started programming because I wanted to know how websites work, and that quickly grew
          into a passion for building sites myself. I'm a dedicated <span>problem-solver</span> who
          enjoys the challenge of transforming ideas into functional, user-friendly web
          applications.
        </h1>
      </div>
      <div className="links">
        <a href="https://github.com/JordanDyck" target="_blank" rel="noopener noreferrer">
          <button className="github-btn">GitHub</button>
        </a>
        <button
          className="show-project-btn"
          onClick={() => {
            setCurrentProject((prev) => (prev + 1) % projectInfo.length)
            setShowWelcome(false)
            setDirection(1)
          }}
        >
          {"My projects"}
        </button>
        <p className="email">Email: jordandyck777@hotmail.com</p>
      </div>
    </div>
  )
}
export default OverView
