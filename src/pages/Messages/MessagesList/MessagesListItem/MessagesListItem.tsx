import { FC } from 'react'
import { Link } from 'react-router-dom'

import messagesListItemPhoto from '../../../../assets/image/messages/photo.jpg'
import styles from './MessagesListItem.module.scss'

const message =
	'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'

export const MessagesListItem: FC = () => {
	const formatingMessage = (text: string): string => {
		return text.length < 54 ? text : `${text.substring(0, 53)}...`
	}

	return (
		<li className={styles.MessagesListItem}>
			<Link className={styles.MessagesListItemLink} to="/">
				<img
					className={styles.MessagesListItemPhoto}
					src={messagesListItemPhoto}
					alt="profile icon"
				/>
				<div className={styles.MessagesListItemText}>
					<div className={styles.MessagesListItemTop}>
						<p className={styles.MessagesListItemTopName}>
							Никита Евдокимов
						</p>
						<p className={styles.MessagesListItemTopTime}>18:13</p>
					</div>
					<div className={styles.MessagesListItemBottom}>
						<p className={styles.MessagesListItemBottomMessage}>
							{formatingMessage(message)}
						</p>
					</div>
				</div>
			</Link>
		</li>
	)
}
