import MainLayout from '@comps/MainLayout'
import Home from '@pages/Home'
import { lazy } from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

const Monitor = lazy(() => import('@pages/monit/Monitor'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ index: true, element: <Navigate replace to={'home'} /> },
			{
				path: 'home',
				element: <Home />,
			},
			{
				path: 'monitor',
				element: <Monitor />,
			},
		],
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
