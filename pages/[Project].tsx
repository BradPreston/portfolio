// import Project from '../interfaces/Project';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Projects from '../components/portfolio/Projects';
import styles from '../styles/Project.module.scss';
import AnchorLink from '../components/link/AnchorLink';

const ProjectPage = () => {
  const router = useRouter();
  const projectId = router.query.Project;
  return (
    <div className={styles.container}>
      {Projects.map(project => {
        if (project.name.replaceAll(' ', '-') == projectId)
          return (
            <main className={styles.project}>
              <Head>
                <title>{project.name} | Brad Preston</title>
                <meta name="description" content={project.bio} />
                <link rel="icon" href="/favicon.png" />
              </Head>
              <AnchorLink href="/" content="Go back home" next={true} />
              <h1>{project.name}</h1>

              <div className={styles.img}>
                <Image
                  src={project.image}
                  alt={project.name}
                  title={project.name}
                  layout="responsive"
                />
              </div>

              <h2>About {project.name}:</h2>
              <p>{project.bio}</p>

              <h2>My Role in the project:</h2>
              <p>{project.part}</p>

              <h2>Challenges I overcame:</h2>
              <p>{project.challenges}</p>

              <h2>Tech stack for this project:</h2>
              <ul>
                {project.stack?.map(tech => {
                  return <li key={tech}>{tech}</li>;
                })}
              </ul>
              <AnchorLink
                href={project.link}
                target="_blank"
                title={`Link to ${project.name}`}
                content={`Visit ${project.name}`}
              />
            </main>
          );
      })}
    </div>
  );
};

export default ProjectPage;
