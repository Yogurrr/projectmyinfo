import Layout from "./layout/Layout";
import '../public/css/index.css';
import '../public/css/Nav.css';
import '../public/css/MainCommon.css';
import '../public/css/likes.css';
import '../public/css/myinfo.css';
import '../public/css/bootstrap.min.css'
import '../public/css/bootstrap-datepicker.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp