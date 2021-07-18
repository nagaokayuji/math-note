import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About</title>
        </Head>
        <Container>
          <Intro />
          <h2>数学ノート</h2>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
