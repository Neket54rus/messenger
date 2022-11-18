import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Navbar } from './Navbar'
import { Form } from './Form'
import headerLogo from '../../assets/image/header/headerj-logo.svg'
import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<header className={styles.Header}>
			<div className={`container ${styles.HeaderContainer}`}>
				<Link className={styles.HeaderLogo} to="/">
					<img
						className={styles.HeaderLogoIcon}
						src={headerLogo}
						alt="logo"
					/>
				</Link>
				<Navbar />
				<Form />
			</div>
		</header>
	)
}
