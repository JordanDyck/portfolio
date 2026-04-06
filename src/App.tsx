import "./styles/main.scss"

import {useState} from "react"
import {projectInfo} from "./Components/ProjectInfo"
import {AnimatePresence, motion} from "motion/react"

import SlideShowBar from "./Components/SlideShowBar"
import OverView from "./Components/OverView"

function App() {
  const [currentProject, setCurrentProject] = useState(-1)
  const [showWelcome, setShowWelcome] = useState(true)
  const [direction, setDirection] = useState(0)

  const variants = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      }
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: {type: "spring" as const, stiffness: 500, damping: 30},
        opacity: {duration: 0.2},
      },
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -300 : 300,
        opacity: 0,
        transition: {
          x: {type: "spring" as const, stiffness: 500, damping: 30},
          opacity: {duration: 0.2},
        },
      }
    },
  }

  return (
    <div className="App">
      <header>JORDAN</header>

      {!showWelcome && <SlideShowBar projectInfo={projectInfo} currentProject={currentProject} />}
      <div className="container">
        {!showWelcome && (
          <button
            className="project-btn prev"
            onClick={() => {
              setCurrentProject((prev) => (prev - 1 + projectInfo.length) % projectInfo.length)
              setDirection(-1)
            }}
          >
            {"<<"}
          </button>
        )}
        {showWelcome && (
          <OverView
            setCurrentProject={setCurrentProject}
            setShowWelcome={setShowWelcome}
            setDirection={setDirection}
          />
        )}

        <>
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            {!showWelcome && (
              <motion.div
                className={`project-container ${projectInfo[currentProject].name}`}
                key={projectInfo[currentProject].id}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
              >
                <a
                  href={projectInfo[currentProject].website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project-image"
                    src={projectInfo[currentProject].image}
                    alt="project image"
                  />
                </a>
                <div className="info">
                  <h3>{projectInfo[currentProject].name}</h3>
                  {projectInfo[currentProject].description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
        {!showWelcome && (
          <button
            className="project-btn next"
            onClick={() => {
              setCurrentProject((prev) => (prev + 1) % projectInfo.length)
              setShowWelcome(false)
              setDirection(1)
            }}
          >
            {">>"}
          </button>
        )}
      </div>
      {!showWelcome && (
        <button
          className="back-btn"
          onClick={() => {
            setShowWelcome(true)
            setCurrentProject(-1)
          }}
        >
          Back to me!
        </button>
      )}
    </div>
  )
}

export default App
