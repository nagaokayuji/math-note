import DateFormatter from "./date-formatter";
import Tag from "./Tag";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
};

const PostHeader = ({ title, coverImage, date, tags }: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-wrap">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default PostHeader;
