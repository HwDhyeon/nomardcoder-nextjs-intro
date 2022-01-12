import Head from "next/head";
import NavBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>About | Next Movies</title>
      </Head>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
