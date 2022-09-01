import Head from "next/head";
import { Card } from "../components/card";
import { parseCookies, setCookie, destroyCookie } from "nookies";

import { Navbar } from "../components/navbar";
import { CookieHandler } from "../components/cookie-handler";

import { useRouter } from "next/router";

export default function SlowConnection() {
  const router = useRouter();

  return (
    <div className="px-7 lg:px-32 min-h-screen">
      <Navbar />

      <Head>
        <title>Digitales Lernen: Verbindungswarnung</title>
        <meta
          name="description"
          content="Digitales Lernen an der Stadtteilschule Meiendorf"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <span>Digitales Lernen</span>
        <h1 className="text-4xl font-bold py-2">Verbindungswarnung</h1>

        <div className="pt-10">
          <p className="text-lg font-medium pb-2 lg:w-1/2">
            Deine Verbindung ist äußerst langsam. Dies kann zu Problemen und
            Verzögerung beim Bearbeiten von Kursen führen.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-5 pt-10">
          <div
            className="lg:w-1/4 w-full bg-blue-500 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer"
            onClick={() => {
              // Set slowConnection acknowledged cookie
              setCookie(null, "slowConnection", "acknowledged", {
                path: "/",
              });
              window.location.href = "/";
            }}
          >
            Weiter
          </div>
          <div
            className="lg:w-1/4 w-full bg-gray-500 transition-all text-center text-white font-medium py-3 rounded-lg cursor-pointer"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Erneut versuchen
          </div>
        </div>
      </main>
    </div>
  );
}
