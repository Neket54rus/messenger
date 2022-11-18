import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '../AppRouter'

import styles from './App.module.scss'

export const App: FC = () => {
	return (
		<div className={styles.App}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</div>
	)
}
