import Footer from "./footer";
import Meta from "./meta";
import Link from "./Link";
import path from "../lib/basePath";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
        integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
        crossOrigin="anonymous"
      />
      <div className="min-h-screen">
        <nav>
          <Link href={"/"}>
            <a className="pr-10 hover:underline hover:text-blue-800 cursor-pointer">
              Math note
            </a>
          </Link>
          <Link href={"/tags"}>
            <a className="pr-10 hover:underline hover:text-blue-800 cursor-pointer">
              Tags
            </a>
          </Link>
          <Link href={"/about"}>
            <a className="pr-10 hover:underline hover:text-blue-800 cursor-pointer">
              About
            </a>
          </Link>
        </nav>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
