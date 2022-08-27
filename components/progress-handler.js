import { parseCookies, setCookie, destroyCookie } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const ProgressHandler = () => {

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[3];
    const client = parseCookies().fromClient;

    if (!client) {
        useEffect(() => {
            router.push('/login?error=no_user')
        } , [])
    }

    useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios.get('/api/update_progress?user=' + client + '&kurs=' + kurs + '&section=' + section);
          console.log(data)
        };
        fetchData();
    }, []);

    return(
        <></>
    )

}

