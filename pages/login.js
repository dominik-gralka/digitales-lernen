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

  // Get error query from router
  const error = router.query.error;

  return (
    <div className="px-7 lg:px-32 min-h-screen">
      <Navbar />

      {/* Show error message if there is one */}
      {error == "user_not_found" ? (
            <div className="bg-red-500 text-red-500 font-semibold rounded-lg text-center py-4 bg-opacity-10">
              <p className='p-2'>Benutzer nicht gefunden - Bitte überprüfe deinen Anmeldecode.</p>
            </div>
          ) : null}

      <main>

        <div className="flex flex-col items-center lg:pt-10">

          <div className="pt-5 text-center flex flex-col items-center">
            <img src="/send-invite.svg" alt="Welcome Image" className="pb-10" />
            <h1 className="text-4xl font-bold py-2">Willkommen,</h1>
            <h2 className="text-lg pt-2 font-medium">bitte gebe deinen 6-stelligen Anmeldecode ein.</h2>
          </div>

          <form className="flex flex-col gap-4 pt-10 lg:w-1/4 w-full" onSubmit={(e) => {
            handleCookies(e.target.user.value)
            // Redirect to / and reload
            e.preventDefault()
            router.push('/api/verify_pin?user=' + e.target.user.value)
          }
          }>
            <input type="text" name="user" className="bg-slate-100 h-14 text-lg font-medium text-center rounded-lg" maxLength="6" minLength="6" placeholder="6-stelliger PIN" required />
            <button type="submit" className="text-white bg-blue-500 text-lg h-14 font-medium text-center rounded-lg">Anmelden</button>

          </form>

        </div>

      </main>

    </div>

  )
}