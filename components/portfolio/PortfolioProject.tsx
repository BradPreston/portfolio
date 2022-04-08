import Project from '../../interfaces/Project';
import Image from 'next/image';
import styles from './Project.module.scss';
import AnchorLink from '../link/AnchorLink';
import { useEffect } from 'react';

export default function PortfolioProject({ name, link, image }: Project) {
  useEffect(() => {
    var projects = document.querySelectorAll('#projectLinks a');
    projects.forEach(project => {
      project.classList.add('projectCard');
    });
  });
  return (
    <AnchorLink href={link} next={true}>
      <span className={styles.project}>
        <div className={styles.img}>
          <Image src={image} layout="responsive" alt={name} title={name} />
        </div>
        <h3>{name}</h3>
      </span>
    </AnchorLink>
  );
}
