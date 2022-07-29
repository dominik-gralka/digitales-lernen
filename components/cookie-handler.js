import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useRouter } from "next/router";
import { useState } from 'react'
import { useEffect } from 'react'

const cookies = parseCookies()

export const CookieHandler = () => {

    const router = useRouter();

    if (!cookies.fromClient) {
        // Redirect to login page in anonymous function
        useEffect(() => {
            router.push('/login')
        }, [])
    }

    return(<></>)

}