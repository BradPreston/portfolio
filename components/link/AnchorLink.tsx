import ILink from '../../interfaces/Link';
import Link from 'next/link';
import styles from './AnchorLink.module.scss';

const AnchorLink = ({
  href,
  content,
  title,
  target,
  next,
  children
}: ILink) => {
  return (
    <>
      {next ? (
        <Link href={href}>
          <a title={title} className={styles.link}>
            {content}
            {children}
          </a>
        </Link>
      ) : (
        <a href={href} title={title} target={target} className={styles.link}>
          {content}
        </a>
      )}
    </>
  );
};

export default AnchorLink;
