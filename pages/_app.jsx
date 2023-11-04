
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider

      attribute="class"
      defaultTheme="light"
      // enableSystem
      disableTransitionOnChange
    >
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
