import "./styles/main.scss"
import ProjectInfo from "./Components/ProjectInfo"
import me from "./assets/me.png"

function App() {
  return (
    <div className="App">
      <header>JORDAN</header>
      <div className="welcome">
        <img className="self-image" src={me} alt="jordan image" />
        <div className="intro-text">
          <h1 className="name">{`<I'm JORDAN>`}</h1>
          <h1 className="carreer">
            {`<Junior Front-End`} <span>Reactjs/TypeScript</span> {`developer>`}
          </h1>
          <h1 className="experience">{`<Over 3 years of experience>`}</h1>
          <h1 className="about">
            I started programming because I wanted to know how websites work, which quickly grew
            into a passion for building sites myself. I'm a <span>dedicated problem-solver</span>{" "}
            who enjoys the challenge of transforming ideas into functional, user-friendly web
            applications.
          </h1>
        </div>
        <div className="links">
          <a href="https://github.com/JordanDyck" target="_blank" rel="noopener noreferrer">
            <button className="github-btn">GitHub</button>
          </a>
          <p className="email">Email: jordandyck777@hotmail.com</p>
        </div>
      </div>
      <div className="container">
        <header className="projects-header">Some of my projects:</header>
        <ProjectInfo />
      </div>
    </div>
  )
}

export default App
