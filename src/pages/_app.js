import '../styles/globals.css'; // Import Tailwind CSS
import '../styles/custom.css'; // Import custom CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
