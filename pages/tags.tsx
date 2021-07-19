import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllTags } from "../lib/api";
import Head from "next/head";
import Link from "../components/Link";
import Tag from "../components/Tag";

type Props = {
  tags: { [key: string]: number };
};

export const getStaticProps = async () => {
  const tags = getAllTags();
  return {
    props: { tags },
  };
};

export default function Tags({ tags }: Props) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);

  return (
    <>
      <Layout>
        <Head>
          <title>Tags</title>
        </Head>
        <Container>
          <Intro />
          <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
            <div className="pt-6 pb-8 space-x-2 md:space-y-5">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
                Tags
              </h1>
            </div>
            <div className="flex flex-wrap max-w-lg">
              {Object.keys(tags).length === 0 && "No tags found."}
              {sortedTags.map((tag) => {
                return (
                  <div key={tag} className="mt-2 mb-2 mr-5">
                    <Tag text={tag} />
                    <Link
                      href={`/tags/${tag}`}
                      className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                    >
                      {` (${tags[tag]})`}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
