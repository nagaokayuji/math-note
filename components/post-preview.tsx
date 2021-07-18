import DateFormatter from "./date-formatter";
import Link from "next/link";
import path from "../lib/basePath";
import Tag from "./Tag";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
};

const PostPreview = ({ title, date, excerpt, slug, tags }: Props) => {
  return (
    <div key={slug} className="container mx-auto">
      <Link href={{ pathname: path(`/posts/${slug}`) }}>
        <div className="text-2xl mt-20 hover:underline hover:text-blue-800 cursor-pointer">
          {title}
        </div>
      </Link>
      <div className="mt-8 mb-10 text-justify">{excerpt}</div>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <Link href={{ pathname: path(`/posts/${slug}`) }}>
        <a className="underline hover:text-blue-800">続きを読む</a>
      </Link>
    </div>
  );
};

export default PostPreview;
