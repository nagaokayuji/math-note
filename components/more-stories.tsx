import PostPreview from "./post-preview";
import Post from "../types/post";
import PaginationType from "../types/pagination";

type Props = {
  posts: Post[];
  pagination: PaginationType;
};

const MoreStories = ({ posts, pagination }: Props) => {
  return (
    <section>
      <ul>
        <div className="container mx-auto">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              date={post.date}
              slug={post.slug}
              excerpt={post.excerpt}
              tags={post.tags}
            />
          ))}
        </div>
      </ul>
    </section>
  );
};

export default MoreStories;
