import { MouseEvent, ChangeEvent, FC, useState } from 'react'

import headerFormIcon from '../../../assets/image/header/header-search-icon.svg'
import styles from './Form.module.scss'

export const Form: FC = () => {
	const [searchInputValue, setSearchInputValue] = useState('')

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setSearchInputValue(event.target.value)
	}

	const onSubmit = (event: MouseEvent<HTMLFormElement>): void => {
		event.preventDefault()
	}

	return (
		<form className={styles.Form} onSubmit={onSubmit}>
			<input
				className={styles.Input}
				type="text"
				value={searchInputValue}
				onChange={onChange}
				placeholder="Поиск друзей"
			/>
			<button className={styles.FormButton} type="submit">
				<img
					className={styles.FormIcon}
					src={headerFormIcon}
					alt="search icon"
				/>
			</button>
		</form>
	)
}
