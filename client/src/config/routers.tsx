import { BrowserRouter, Navigate } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import AuthenticatedGuard from '../guards/AuthenticatedGuard'
import PublicGuard from '../guards/PublicGuard'
import { lazy } from 'react'
import { PATH } from '../constants'
import MainLayout from '../layouts/MainLayout/MainLayout'

const Dashboard = lazy(() => import('../modules/dashboard/Dashboard'))
const Products = lazy(() => import('../modules/products/Products'))
const Customers = lazy(() => import('../modules/customers/Customers'))

const RouterConfig = () =>
  useRoutes([
    {
      path: PATH.HOME,
      element: (
        <AuthenticatedGuard>
          <MainLayout />
        </AuthenticatedGuard>
      ),
      children: [
        {
          path: PATH.HOME,
          element: <Navigate to={PATH.DASHBOARD} replace />
        },
        {
          path: PATH.DASHBOARD,
          element: <Dashboard />
        },
        {
          path: PATH.PRODUCTS,
          element: <Products />
        },
        {
          path: PATH.CUSTOMERS,
          element: <Customers />
        }
      ]
    },
    {
      path: PATH.LOGIN,
      element: (
        <PublicGuard>
          {/* <Login /> */}
          <p>Login</p>
        </PublicGuard>
      )
    },
    {
      path: PATH.REGISTER,
      element: (
        <PublicGuard>
          {/* <Register /> */}
          <p>reg</p>
        </PublicGuard>
      )
    },
    {
      path: PATH.FORGOT_PASSWORD,
      element: (
        <PublicGuard>
          {/* <ForgotPassword /> */}
          <p>ForgotPassword</p>
        </PublicGuard>
      )
    },
    {
      path: PATH.RESET_PASSWORD,
      element: (
        <PublicGuard>
          {/* <ResetPassword /> */}
          <p>ResetPassword</p>
        </PublicGuard>
      )
    },
    {
      path: PATH.ANY,
      element: <h1>404 NOT FOUND!!!</h1>
    }
  ])

export const RoutesManager = () => {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  )
}
