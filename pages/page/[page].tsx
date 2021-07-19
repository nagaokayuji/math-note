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
  pagePosts: Post[];
  pagination: PaginationType;
};

const Index = ({ allPosts, pagePosts, pagination }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Math note</title>
        </Head>
        <Container>
          <Intro />
          {
            <MoreStories
              posts={allPosts}
              pagePosts={pagePosts}
              pagination={pagination}
            />
          }
        </Container>
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
  const pageNumber = parseInt(params.page);
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  const pagePosts = allPosts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "/page",
    allCount: allPosts.length,
  };

  return {
    props: { allPosts, pagePosts, pagination },
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
