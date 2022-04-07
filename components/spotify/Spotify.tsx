import ILink from '../../interfaces/Link';
import styles from './Spotify.module.scss';
import AnchorLink from '../link/AnchorLink';

export default function SpotifyLink({ href, content, title }: ILink) {
  return (
    // <a className={styles.link} href={href} target="_blank" title={title}>
    //   {content}
    // </a>
    <AnchorLink href={href} content={content} title={title} />
  );
}
