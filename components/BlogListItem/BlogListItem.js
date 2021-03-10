import Link from "next/link";
import BlogListItemStyles from "./BlogListItem.module.scss";
export default function BlogListItem({ post }) {
  const { title, slug, excerpt, date, author, coverImage } = post;

  return (
    <section key={slug} className={BlogListItemStyles.preview}>
      <img src={coverImage.url} />
      <div>
        <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
          {title}
        </Link>
        <p>{excerpt}</p>{" "}
        <div>
          <img src={author.picture.url} />
          <div>
            <p>{author.name}</p>
            <p>{date}</p>
          </div>
        </div>{" "}
      </div>
      <hr></hr>
    </section>
  );
}
