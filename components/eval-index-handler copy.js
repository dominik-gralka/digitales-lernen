
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Loading } from '../components/loading'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const IndexHandler = () => {

    const router = useRouter()
    const pathname = router.pathname;
    const kurs = pathname.split("/")[2];
    const section = pathname.split("/")[4];
    const cookies = parseCookies();
    const client = cookies.fromClient;

    const { data, error } = useSWR('/api/get_eval_progress?user=' + client + "&kurs=" + kurs, fetcher);

    if (section == undefined) {
        if (!data) {
            return <Loading />
        }

        return (
            <>
                <Loading />
                {
                    client ? window.location.href = `/kurse/${data.kurs}/evaluation/${parseInt(data.section) + 1}` : window.location.href = `/login?error=no_user`
                }
            </>
        )
    } else {

        if (!data) {
            return <></>
        }

        if (section <= data.section) {
            return <>
                {
                    client ? window.location.href = `/kurse/${data.kurs}/evaluation/${parseInt(data.section) + 1}` : window.location.href = `/login?error=no_user`
                }
            </>
        }
    }
    
}