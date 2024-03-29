
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
        } else {
            if (data.section == 0) {
                return (
                    <>
                        <Loading />
                        {
                            client ? window.location.href = `/kurse/${data.kurs}/evaluation/1` : window.location.href = `/login?error=no_user`
                        }
                    </>
                )
            } else {
                return (
                    <>
                        <Loading />
                        {
                            client ? window.location.href = `/kurse/${data.kurs}/evaluation/${parseInt(data.section) + 1}` : window.location.href = `/login?error=no_user`
                        }
                    </>
                )
            }      
        }
    } else {

        if (!data) {
            return <></>
        }

        //if ((parseInt(data.section) + 1) !== parseInt(section)) {
        //    return <div className="hidden">
        //        {
        //            client ? window.location.href = `/kurse/${data.kurs}/evaluation/${parseInt(data.section) + 1}` : window.location.href = `/login?error=no_user`
        //        }
        //    </div>
        //}

        if (parseInt(data.section) >= parseInt(section)) {
            // Return warning that progress is not saved
            return <div className="bg-red-500 text-red-500 font-semibold rounded-lg text-center py-4 mb-5 bg-opacity-10">
                <p className="p-2">
                    Du hast diese Frage bereits beantwortet. Deine Antwort wird nicht überschrieben.
                </p>
            </div>
        }

    }
    
}