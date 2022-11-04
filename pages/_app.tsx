import {CacheProvider} from "@emotion/react";
import '../styles/global.css'
import {AppProps} from "next/app";
import createEmotionCache from '../utils/createEmotionCache';
import {CssBaseline, ThemeProvider} from "@mui/material";
import lightTheme from '../styles/theme/lightTheme';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component,  pageProps }) {
    const emotionCache = clientSideEmotionCache

    return (
    <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    </CacheProvider>
    )
}