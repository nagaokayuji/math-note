import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
import Link from "next/link";
import { POSTS_PER_PAGE } from "../lib/constants";
import PaginationType from "../types/pagination";
import Pagination from "../components/Pagination";

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

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "tags",
  ]);
  const pagePosts = allPosts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE),
    basePath: "/page",
    allCount: allPosts.length,
  };

  return {
    props: { allPosts, pagePosts, pagination },
  };
};
