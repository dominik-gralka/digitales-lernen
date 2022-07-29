import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { Navbar } from '../components/navbar'
import { useRouter } from 'next/router'
import { useEffect } from 'react';

function handleCookies(user) {

  // Set
  setCookie(null, 'fromClient', user, {
    path: '/',
  })


  // Destroy
  // destroyCookie(null, 'cookieName')
}

const cookies = parseCookies()

export default function Login() {

  const router = useRouter();

  return (
    <div className="px-10 lg:px-32 min-h-screen">
      <Navbar />

      <main>

        <div className="flex flex-col items-center lg:pt-10">

          <div className="pt-5 text-center flex flex-col items-center">
            <img src="/icon01.png" alt="Welcome Image" className="pb-10" />
            <h1 className="text-4xl font-bold py-2">Willkommen,</h1>
            <h2 className="text-lg pt-2 font-medium">bitte geben Sie Ihren 6-stelligen Anmeldecode ein.</h2>
          </div>

          <form className="flex flex-col gap-4 pt-10 lg:w-1/4 w-full" onSubmit={(e) => {
            handleCookies(e.target.user.value)
            // Redirect to / and reload
            router.push('/')
          }
          }>
            <input type="text" name="user" className="bg-slate-100 h-14 text-xl font-medium text-center rounded-lg" maxLength="6" minLength="6" placeholder="6-stelliger PIN" required />
            <button type="submit" className="text-white bg-blue-500 h-14 text-xl font-medium text-center rounded-lg">Anmelden</button>

          </form>

        </div>

      </main>

    </div>

  )
}