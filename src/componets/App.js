import { ReduxProvider } from '../redux'
import { Router } from '../router'

export const App = () => (
  <ReduxProvider>
    <Router />
  </ReduxProvider>
)
