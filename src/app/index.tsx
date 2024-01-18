import { pages } from '../pages'
import { Route } from 'react-router-dom'
import { WithRoutes } from './providers/WithRoutes'
import { Layout } from './providers/Layout'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const App = () => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <WithRoutes>
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<Layout>{page.element}</Layout>}
          />
        ))}
      </WithRoutes>
    </QueryClientProvider>
  )
}

export default App
