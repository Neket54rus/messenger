import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from '../Header'
import { privateRoutes, publicRoutes } from '../../router'

import styles from './AppRouter.module.scss'

export const AppRouter: FC = () => {
	const isAuth = true

	const contentIfAuth = isAuth && (
		<main className={styles.Main}>
			<Header />
			<Routes>
				{privateRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={route.component}
					/>
				))}
			</Routes>
		</main>
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
