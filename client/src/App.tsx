import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary
} from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { RoutesManager } from './config'
import { useThemeStore } from './store/useThemeStore'
import { useMemo } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { CssBaseline } from '@mui/material'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false
    }
  }
})

const App = () => {
  const mode = useThemeStore().mode
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <div>
                There was an error!
                <button onClick={() => resetErrorBoundary()}>Try again</button>
              </div>
            )}
          >
            <ThemeProvider theme={theme}>
              <RoutesManager />
              <CssBaseline />
            </ThemeProvider>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  )
}

export default App
