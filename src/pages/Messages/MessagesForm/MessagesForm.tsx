import { FC } from 'react'

import messagesFormIcon from '../../../assets/image/header/header-search-icon.svg'
import styles from './MessagesForm.module.scss'

export const MessagesForm: FC = () => {
	return (
		<form className={styles.MessagesForm}>
			<input
				className={styles.MessagesInput}
				placeholder="Поиск..."
				type="text"
			/>
			<button className={styles.MessagesFormBtn} type="button">
				<img
					className={styles.MessagesFromIcon}
					src={messagesFormIcon}
					alt="search icon"
				/>
			</button>
		</form>
	)
}
