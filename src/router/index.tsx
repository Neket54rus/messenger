import { Navigate } from 'react-router-dom'

import { Messages, Auth } from '../pages'

export const privateRoutes = [
	{ path: '/messages', component: <Messages /> },
	// { path: '/news', component: <News /> },
	// { path: '/profile', component: <Profile /> },
	// { path: '/friends', component: <Friends /> },
	{ path: '*', component: <Navigate to="/messages" replace /> },
]

export const publicRoutes = [
	{ path: '/auth', component: <Auth /> },
	{ path: '*', component: <Navigate to="/auth" replace /> },
]
