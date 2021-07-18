import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../types/post";
import { POSTS_PER_PAGE } from "../../lib/constants";
import PaginationType from "../../types/pagination";
import Pagination from "../../components/Pagination";

type Props = {
  allPosts: Post[];
  pagination: PaginationType;
};

const Index = ({ allPosts, pagination }: Props) => {
  console.log(JSON.stringify(pagination));
  return (
    <>
      <Layout>
        <Head>
          <title>Math note</title>
        </Head>
        <Container>
          <Intro />
          {<MoreStories posts={allPosts} pagination={pagination} />}
        </Container>
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </Layout>
    </>
  );
};

export default Index;

type Params = {
  params: {
    page: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  console.log(`page: ${params}`);
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "tags",
  ]);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
  };

  return {
    props: { allPosts, pagination },
  };
};

/** pages/[page] ページ作成 */
export async function getStaticPaths() {
  const totalPosts = getAllPosts(["slug"]);
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
