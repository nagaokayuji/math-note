import Link from "next/link";
import path from "../lib/basePath";
type Props = {
  text: string;
};

const Tag = ({ text }: Props) => {
  return (
    <Link href={path(`/tags/${text}`)}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {text}
      </a>
    </Link>
  );
};

export default Tag;
