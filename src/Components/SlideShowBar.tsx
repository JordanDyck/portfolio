type SlideShowBarProps = {
  projectInfo: {
    id: number
    name: string
    website: string
    description: React.JSX.Element
    image: string
  }[]
  currentProject: number
}

const SlideShowBar = ({projectInfo, currentProject}: SlideShowBarProps) => {
  const currentId = projectInfo[currentProject].id

  return (
    <div className="slide-show-bar">
      {projectInfo.map((_, index) => (
        <div
          className="progress-dot"
          key={index}
          style={{backgroundColor: index === currentId ? "#001f4d" : "transparent"}}
        ></div>
      ))}
    </div>
  )
}
export default SlideShowBar
