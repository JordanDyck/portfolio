interface Tinfo {
  name: string
  projectImage: React.ImgHTMLAttributes<HTMLImageElement>["src"]
  info: string[]
  link: string
}

const ProjectInfo = ({name, projectImage, info, link}: Tinfo) => {
  return (
    <div className="project-info-container">
      <div className="info">
        <h1>{name.replace("_", " ")}</h1>
        {info.map((par, i) => (
          <p key={`${name}_par_${i}`}>{par}</p>
        ))}
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={projectImage} alt="project image" />
      </a>
    </div>
  )
}
export default ProjectInfo
