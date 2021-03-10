import markdownToHtml from "../../lib/markdownToHtml";
import { getPostAndMorePosts, getAllPostsWithSlug } from "../../lib/api";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import html from "remark-html";

export default function Slug({ post, morePosts, preview }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        <h5>Fetching data ...</h5>
      ) : (
        <>
          <h3>{post.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <hr></hr>
          <h5>More Stories</h5>
          {morePosts.map((post) => (
            <div key={post.slug}>
              {" "}
              <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                {post.title}
              </Link>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data?.posts[0]?.content || "");

  return {
    props: {
      preview,
      post: {
        ...data?.posts[0],
        content,
      },
      morePosts: data?.morePosts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map((post) => `/posts/${post.slug}`) || [],
    fallback: true,
  };
}
