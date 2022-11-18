import { FC } from 'react'

import { MessagesForm } from './MessagesForm'
import { MessagesList } from './MessagesList'

import styles from './Messages.module.scss'

export const Messages: FC = () => {
	return (
		<section className={styles.Messages}>
			<MessagesForm />
			<MessagesList />
		</section>
	)
}
