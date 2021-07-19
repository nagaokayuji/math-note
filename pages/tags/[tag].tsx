import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts, getAllTags } from "../../lib/api";
import Head from "next/head";
import Post from "../../types/post";

type Props = {
  allPosts: Post[];
  tag: string;
};

export async function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

type Params = {
  params: {
    tag: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const tag = params.tag;
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "tags",
  ]).filter((post) => post.tags.includes(tag));

  return {
    props: { allPosts, tag },
  };
}

export default function Tag({ allPosts, tag }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{tag}</title>
        </Head>
        <Container>
          <Intro />
          {<MoreStories posts={allPosts} pagePosts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}
