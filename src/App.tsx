import "./styles/main.scss"
import ProjectInfo from "./Components/ProjectInfo"
import me from "./assets/me.png"
import dnd from "./assets/dnd.png"
import pokebuddy from "./assets/Pokebuddy.png"
import css_generator from "./assets/css_generator.png"
import data from "./Components/Description"

function App() {
  const images = [dnd, pokebuddy, css_generator]

  return (
    <div className="App">
      <header>JORDAN</header>
      <div className="welcome">
        <h1 className="intro-text">
          I'm Jordan, a Calgary based junior front-end web developer with over 3 years of experience
          in Reactjs & TypeScript.
          <br />I enjoy working with a team and pushing the limits of what can be done. I focus my
          sites on accessibility and ease of use. theres no need to make a site too complicated.
        </h1>
        <img className="self-image" src={me} alt="jordan image" />
        <div className="links">
          <a href="https://github.com/JordanDyck" target="_blank" rel="noopener noreferrer">
            <button className="github-btn">GitHub</button>
          </a>
          <p className="email">Email: jordandyck777@hotmail.com</p>
        </div>
      </div>
      <div className="container">
        {Object.entries(data).map((project, i) => (
          <ProjectInfo
            projectImage={images[i]}
            name={project[0]}
            info={project[1].info}
            key={project[0]}
            link={project[1].url}
          />
        ))}
      </div>
    </div>
  )
}

export default App
