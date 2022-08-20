import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout/layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import '../styles/globals.css';

library.add(faPhone, faUser, faRightFromBracket);

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider >
  );
}

export default MyApp;
