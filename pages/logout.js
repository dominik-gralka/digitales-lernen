import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useRouter } from 'next/router'

export default function Logout() {
    // Destroy cookie
    destroyCookie(null, 'fromClient', { path: '/' });
    // Redirect to login page
    const router = useRouter();
    
    router.push('/login');
}