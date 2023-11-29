
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Axios from 'axios'
import { AuthProvider } from '../context/auth';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';

 function App({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  Axios.defaults.withCredentials = true;

  const {pathname} = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  return <AuthProvider>
   {!authRoute && <NavBar />}
   <div className={authRoute ? "" : "pt-12 bg-gray-200 min-h-screen"}>
   <Component {...pageProps} />
   </div> 
   </AuthProvider>
}
export default App   