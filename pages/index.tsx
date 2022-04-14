import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import SpotifyLinks from '../components/spotify/SpotifyLinks';
import Projects from '../components/portfolio/Projects';
import PortfolioProject from '../components/portfolio/PortfolioProject';
import { useEffect } from 'react';
import AnchorLink from '../components/link/AnchorLink';

const date = new Date();
const birthday = new Date('May 3, 1993');
const practice = date.getFullYear() - 2017;
const professionalExp = date.getFullYear() - 2021;
let age: number;
date > birthday
  ? (age = date.getFullYear() - birthday.getFullYear() - 1)
  : date.getFullYear() - birthday.getFullYear();

const Home: NextPage = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const heading = document.querySelector('#heading')!;
    const leftArrow = document.querySelector('#left')!;
    const rightArrow = document.querySelector('#right')!;
    const projects = document.querySelector('#projectLinks')!;
    const headerBackground = document.querySelector('#headerBackground')!;
    const addStickyHeader = () => {
      if (heading.getBoundingClientRect().top <= 0) {
        heading.classList.add('stickyHeader');
        headerBackground.classList.add('headerBackground');
      } else {
        heading.classList.remove('stickyHeader');
        headerBackground.classList.remove('headerBackground');
      }
    };

    window.onscroll = () => {
      addStickyHeader();
    };
    addStickyHeader();

    rightArrow.addEventListener('click', () => {
      projects.scrollLeft += 200;
    });
    leftArrow.addEventListener('click', () => {
      projects.scrollLeft -= 200;
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Brad Preston</title>
        <meta
          name="description"
          content="Professional web development portfolio for Brad Preston."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div id="headerBackground"></div>

      <main className={styles.main}>
        <h1 id="heading" onClick={scrollTop}>
          Brad Preston
        </h1>
        <section className={styles.aboutme}>
          <p>
            I am a {age} year old web developer from Kalamazoo, MI. I have a
            focus on Next JS, SASS, and TypeScript with {practice} years of
            practice and {professionalExp}{' '}
            {professionalExp <= 1 ? 'year' : 'years'} of professional
            experience.
          </p>
        </section>

        <section className={styles.hobbies}>
          <h2>My Hobbies</h2>
          <p>When I'm not sitting at my computer, you can find me:</p>
          <ul>
            <li key="reading">Reading on the couch</li>
            <li key="skateboarding">Cruising on my skateboard</li>
            <li key="hiking">Hiking in the woods</li>
            <li key="yoga">Practicing Yoga</li>
            <li key="guitar">Playing guitar</li>
          </ul>
        </section>

        <section className={styles.playlists}>
          <h2>My Favorite Playlists</h2>
          <div className={styles.links}>
            {SpotifyLinks.map(link => {
              return (
                <AnchorLink
                  href={link.href}
                  title={link.title}
                  content={link.content}
                  target="_blank"
                  key={link.title}
                />
              );
            })}
          </div>
        </section>

        <section id="work" className={styles.work}>
          <h2>My Work</h2>
          <div id="projectLinks" className={styles.projectLinks}>
            {Projects.map(project => {
              return (
                <PortfolioProject
                  name={project.name}
                  link={`/${project.slug}`}
                  image={project.image}
                  key={project.name}
                />
              );
            })}
          </div>
          <div className={styles.arrows}>
            <button
              id="left"
              className={`${styles.arrow} ${styles.left}`}
              onClick={() => {
                document.querySelector('#projectLinks')!.scrollLeft -= 320;
              }}
            ></button>
            <button
              id="right"
              className={`${styles.arrow} ${styles.right}`}
              onClick={() => {
                document.querySelector('#projectLinks')!.scrollLeft += 320;
              }}
            ></button>
          </div>
        </section>

        <section className={styles.tech}>
          <h2>My skills</h2>
          <div className={styles.stackWrapper}>
            <div className={styles.stack}>
              <h3>Preferred stack:</h3>
              <ul>
                <li key="next">Next JS</li>
                <li key="typescript">TypeScript</li>
                <li key="sass">Sass</li>
                <li key="graph">GraphQL</li>
                <li key="mongodb">MongoDB</li>
              </ul>
            </div>
            <div className={styles.stack}>
              <h3>Tech I've used:</h3>
              <ul>
                <li key="react">React</li>
                <li key="svelte">Svelte</li>
                <li key="express">Express JS</li>
                <li key="rest">REST API</li>
                <li key="node">Node JS</li>
                <li key="php">PHP</li>
                <li key="laravel">Laravel</li>
              </ul>
            </div>
          </div>
          <AnchorLink
            href="/Brad-Preston-Resume.pdf"
            title="Download my resume"
            target="_blank"
            content="Download my resume"
            key="download"
          />
        </section>

        <section className={styles.contact}>
          <h2>Contact Me</h2>
          <div className={styles.contactButtons}>
            <AnchorLink
              href="mailto:bap5393@gmail.com"
              target="_blank"
              title="Link to Email"
              content="Email"
              key="email"
            />
            <AnchorLink
              href="https://twitter.com/BradDoesCoding"
              target="_blank"
              title="Link to Twitter"
              content="Twitter"
              key="twitter"
            />
            <AnchorLink
              href="https://www.linkedin.com/in/brad-preston/"
              target="_blank"
              title="Link to LinkedIn"
              content="Linkedin"
              key="linkedin"
            />
            <AnchorLink
              href="https://github.com/BradPreston"
              target="_blank"
              title="Link to GitHub"
              content="GitHub"
              key="github"
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Handcrafted by Me | {date.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Home;
