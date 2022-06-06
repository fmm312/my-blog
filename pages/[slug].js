import ReactMarkdown from "react-markdown";
import Link from "next/link";

import getPosts from "../lib/posts";

import styles from '././../styles/app.module.css';

const Post = ({ title, date, markdown, time }) => (
  <article className={styles.article}>
    <h1 className={styles.acticleTitle}>{title}</h1>
    <time className={styles.postDate}>
      {`${date} | ${time} minutos de leitura`}
    </time>

    <div className={styles.spacing} />

    <ReactMarkdown>{markdown}</ReactMarkdown>

    <div className={styles.spacing} />
    
    <Link href="/">
      <a className={styles.goBackLink}> 
        Voltar para home
      </a>
    </Link>
  </article>
);

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => `/${post.slug}`),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { slug },
}) => {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);

  return { props: post };
};

export default Post;
