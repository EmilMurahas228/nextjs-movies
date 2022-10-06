import axios from "axios";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <div>
      <Component {...pageProps} />

      <h1>kek</h1>
    </div>
  );
}

MyApp.getInitialProps = async ({ Component }) => {
  const pageProps = Component.getInitialProps;

  const { data } = await axios.get("http://localhost:3000/api/movies");
  console.log(data);

  return { pageProps: { ...pageProps, data } };
};

export default MyApp;
