import { Competencia } from "../models/Competencia";
import { RepositorioCompetencias } from "../repositories/RepositorioCompetencias";

export const instanciarCompetencias = (): Competencia[] => {

  const repositorioCompetencias = new RepositorioCompetencias();

  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'HTML' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'CSS' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'JavaScript' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'HTML' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'CSS' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'JavaScript' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'React' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Node.js' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Python' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Java' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Ruby' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'C#' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'PHP' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Swift' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Kotlin' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Angular' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Vue.js' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Express.js' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Django' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Spring Boot' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Ruby on Rails' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Unity' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Machine Learning' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Data Science' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'DevOps' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Cybersecurity' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'UI/UX Design' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Digital Marketing' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Content Writing' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Project Management' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Product Management' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Agile Methodology' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Scrum' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Kubernetes' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'AWS' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Azure' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Google Cloud' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Blockchain' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'AR/VR Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Mobile App Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Web Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Database Management' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Front-End Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Back-End Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Full-Stack Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Cloud Computing' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Big Data' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Artificial Intelligence' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Natural Language Processing' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Computer Vision' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Quantum Computing' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Internet of Things (IoT)' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Blockchain Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Game Development' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'UI/UX Research' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Product Design' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Agile Coaching' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Business Analysis' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Sales' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Customer Service' }));
  repositorioCompetencias.adicionarCompetencia(new Competencia({ nome: 'Human Resources' }));

  return repositorioCompetencias.listarCompetencias();
};
