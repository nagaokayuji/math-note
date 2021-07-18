import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Math note</title>
        </Head>
        <Container>
          <Intro />
        </Container>
      </Layout>
    </>
  );
};

export default Index;
