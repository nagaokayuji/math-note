import DateFormatter from "./date-formatter";
import Link from "./Link";
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
    <li key={slug} className="py-4">
      <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
        <dl>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <DateFormatter dateString={date} />
          </dd>
        </dl>
        <div className="space-y-3 xl:col-span-3">
          <div>
            <h3 className="text-2xl font-bold leading-8 tracking-tight hover:underline hover:text-blue-800 cursor-pointer">
              <Link
                href={`/posts/${slug}`}
                className="text-gray-900 dark:text-gray-100"
              >
                {title}
              </Link>
            </h3>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div className="prose text-gray-500 max-w-none dark:text-gray-400">
            {excerpt}
          </div>
        </div>
      </article>
    </li>
  );
};

export default PostPreview;
