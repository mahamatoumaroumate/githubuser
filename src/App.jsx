import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthWrapper, Login, Error, Dashboard, PrivateRoute } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
])
const App = () => {
  return (
    <AuthWrapper>
      <RouterProvider router={router}></RouterProvider>
    </AuthWrapper>
  )
}
export default App
