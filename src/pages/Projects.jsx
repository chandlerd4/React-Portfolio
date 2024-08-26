import projectData from '../assets/projects.json'

export default function Projects() {
    return (
        <div className='d-flex flex-wrap justify-content-center'>
            {projectData.map((project) => (
                <div className="card m-3" style={{ width: '30rem' }}>
                    <img src={project.image} alt="" className="card-img-top" />
                    <div className="card-body">
                        <h3 className="card-title">{project.title}</h3>
                        <p className="card-text">{project.description}</p>

                        <a href={project.deployed} className='btn btn-secondary mx-2'>Site</a>
                        <a href={project.repo} className='btn btn-secondary '>Repo</a>
                    </div>

                </div>
            ))}
        </div>
    );
}
