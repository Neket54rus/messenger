import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { privateRoutes, publicRoutes } from '../../router'

export const AppRouter: FC = () => {
	const isAuth = true

	const contentIfAuth = isAuth && (
		<Routes>
			{privateRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.component}
				/>
			))}
		</Routes>
	)

	const contentIfNotAuth = !isAuth && (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
					key={route.path}
					path={route.path}
					element={route.component}
				/>
			))}
		</Routes>
	)

	return (
		<>
			{contentIfAuth}
			{contentIfNotAuth}
		</>
	)
}
