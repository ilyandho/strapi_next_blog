import { getAllPostsForHome } from "../lib/api";
import BlogPostsList from "../components/blogPostsList/BlogPostsList";
import Header from "@/components/Header/Header";
import HomeStyles from "./index.module.scss";
import Aside from "@/components/Aside/Aside";

export default function Home({ allPosts, preview }) {
  return (
    <div>
      <Header />
      <main className={HomeStyles.container}>
        <Aside />
        <section className={HomeStyles.blogList}>
          <BlogPostsList posts={allPosts} />
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];

  return {
    props: {
      allPosts,
      preview,
    },
  };
}
