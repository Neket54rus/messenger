import { FC } from 'react'

import { MessagesListItem } from './MessagesListItem'

import styles from './MessagesList.module.scss'

// TODO: 1) create castom sroll

export const MessagesList: FC = () => {
	return (
		<ul className={styles.MessagesList}>
			<MessagesListItem />
			<MessagesListItem />
			<MessagesListItem />
		</ul>
	)
}
