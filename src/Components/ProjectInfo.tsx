import dnd from "../assets/dnd.png"
import pokebuddy from "../assets/Pokebuddy.png"
import css_generator from "../assets/css_generator.png"
const ProjectInfo = () => {
  return (
    <>
      <div className="project-info-container my-dnd">
        <div className="info">
          <h1>My DnD</h1>
          <p>My biggest project.</p>
          <p>
            An interactive Dungeons & Dragons character sheet that allows users to create and manage
            their characters, track <span>stats</span>, <span>abilities</span>, <span>levels</span>,{" "}
            <span>inventory</span>, and export them to share on other devices. you can use premade
            classes/races, or create your own custom character. I spent over 2 years trying to make
            the easiest to use character manager I could. no confusing menus and easy to read
            descriptions.
          </p>
        </div>
        <a href={"https://jordandyck.github.io/My-DnD/"} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={dnd} alt="project image" />
        </a>
      </div>
      <div className="project-info-container pokebuddy">
        <div className="info">
          <h1>pokebuddy</h1>
          <p>Search and manage your team of pokemon.</p>
          <p>
            This site makes it easy for new players to get into pokemon as the game does not have a
            way to know the advantages and disadvantages of each pokemon, and looking up the type
            chart for each pokemon can be confusing and time consuming. Now everything is in one
            place, making it easy to find the information you need.
          </p>
        </div>
        <a
          href={"https://jordandyck.github.io/Pokebuddy/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="project-image" src={pokebuddy} alt="project image" />
        </a>
      </div>
      <div className="project-info-container css-generator">
        <div className="info">
          <h1>CSS Generator</h1>
          <p>
            A css generator that allows new programers to see the differents between padding,
            margin, and border. you can also use it to generate a box-shadow and copy the code to
            your own project.
          </p>
        </div>
        <a
          href={"https://jordandyck.github.io/CSS-Generator/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="project-image" src={css_generator} alt="project image" />
        </a>
      </div>
    </>
  )
}
export default ProjectInfo
