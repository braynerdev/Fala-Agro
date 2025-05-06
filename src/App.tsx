import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import './global.css';


export function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  )
}


