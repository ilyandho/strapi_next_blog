import BlogListItem from "../BlogListItem/BlogListItem";
import BlogListStyles from "./BlogList.module.scss";
export default function BlogPostsList({ posts }) {
  return posts && posts.length > 0 ? (
    <div className={BlogListStyles.blogList}>
      {posts.map((post) => {
        return <BlogListItem post={post} key={post.slug} />;
      })}
    </div>
  ) : (
    <h2>No posts yet</h2>
  );
}
