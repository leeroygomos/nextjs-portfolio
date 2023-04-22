import '../styles/global.css';
import Particles from "../components/particles";

export default function App({ Component, pageProps }) {
    return (
        <>
        <Particles></Particles>
        <Component {...pageProps} />
        </>
    );
}