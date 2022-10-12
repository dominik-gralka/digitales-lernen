import ErrorBoundary from '../components/error-boundary'
import { Fallback } from '../components/fallback'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}

export default MyApp
