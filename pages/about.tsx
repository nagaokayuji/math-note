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
          <h3>todo:</h3>
          <ul>
            <li>pagination</li>
            <li>search by free words</li>
            <li>search by tags</li>
          </ul>
        </Container>
      </Layout>
    </>
  );
};

export default Index;
