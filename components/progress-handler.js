import { parseCookies, setCookie, destroyCookie } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Overview } from './overview'

export const ProgressHandler = () => {

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[3];

    const client = parseCookies().fromClient;
    const bypass = parseCookies().bypassRestriction;

    const enabled = Overview[kurs].enabled;

    if (!client) {
        if (typeof window !== 'undefined') {
            window.location.href = '/login?error=no_user';
        }
    }

    useEffect(() => {

        if (!enabled && !bypass) {
            if (typeof window !== 'undefined') {
                window.location.href = '/?status=restricted';
            }
        } else {

        const fetchData = async () => {
          const { data } = await axios.get('/api/update_progress?user=' + client + '&kurs=' + kurs + '&section=' + section);
        };
        fetchData();
        }
    }, []);

    return(
        <></>
    )

}

