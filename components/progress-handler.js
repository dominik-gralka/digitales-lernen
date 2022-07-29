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

    useEffect(() => {
        const fetchData = async () => {
          const { data } = await axios.get('/api/update_progress?user=' + client + '&kurs=' + kurs + '&section=' + section);
          // ... do something with data like setData
          console.log(data)
        };
        fetchData();
    }, []);

    return(
        <></>
    )

}

