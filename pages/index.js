import Link from "next/link";

import getPosts from "../lib/posts";

import styles from '././../styles/app.module.css';

const Blog = ({ posts }) => {
  return (
    <>
      <ul className={styles.postList}>
        {posts.map(({ slug, title, time, date, description }) => (
          <li key={slug}>
            <Link href={`/${slug}`}>
              <a className={styles.postTitle}>{title}</a>
            </Link>

            <p className={styles.postDate}>{`${date} | ${time} minutos de leitura`}</p>

            <p className={styles.postDescription}>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: await getPosts(),
    },
  };
}

export default Blog;
