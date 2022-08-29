
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const IndexHandler = () => {

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const cookies = parseCookies();
    const client = cookies.fromClient;

    const { data, error } = useSWR('/api/get_eval_progress?user=' + client + "&kurs=" + kurs, fetcher);

    return (
        <>
            {
                /* Redirect to /1 if cookie is set */
                client ? useEffect(() => {
                    window.location.href = `/kurse/${kurs}/evaluation/1`
                }) : useEffect(() => {
                    window.location.href = `/login?error=no_user`
                })
            }
        </>
    )
}