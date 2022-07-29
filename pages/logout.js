import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Logout() {
    // Destroy cookie
    destroyCookie(null, 'fromClient', { path: '/' });
    // Redirect to login page
    const router = useRouter();
    
    useEffect(() => {
        router.push('/login');
    }, [])
}