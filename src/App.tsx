import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import './global.css';
import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';
export function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
      <Notifications position="top-right" zIndex={9999} />
        <Router />
      </BrowserRouter>
    </MantineProvider>
  )
}


