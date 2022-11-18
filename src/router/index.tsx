import { Navigate } from 'react-router-dom'

import { Messages, LoginPage, DialogPage } from '../pages'

export enum RoutesLink {
	messages = '/messages',
	dialog = '/messages/:id',
	profile = '/profile',
	news = '/news',
	friends = '/friends',
	login = '/login',
}

export const privateRoutes = [
	{ path: RoutesLink.messages, component: <Messages /> },
	{ path: RoutesLink.dialog, component: <DialogPage /> },
	// { path: RoutesLink.news, component: <News /> },
	// { path: RoutesLink.profile, component: <Profile /> },
	// { path: RoutesLink.friends, component: <Friends /> },
	{ path: '*', component: <Navigate to="/messages" replace /> },
]

export const publicRoutes = [
	{ path: RoutesLink.login, component: <LoginPage /> },
	{ path: '*', component: <Navigate to="/login" replace /> },
]
