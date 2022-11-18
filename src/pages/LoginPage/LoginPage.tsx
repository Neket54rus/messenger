import { FC } from 'react'
import { Link } from 'react-router-dom'

import loginPageRightImage from '../../assets/image/Login/login-page-left-image.png'
import styles from './LoginPage.module.scss'

export const LoginPage: FC = () => {
	return (
		<div className={styles.LoginPage}>
			<div className={styles.LoginPageInner}>
				<div className={styles.LoginPageRight}>
					<p className={styles.LoginPageRightTitle}>Welcome back.</p>
					<img
						className={styles.LoginPageRightImage}
						src={loginPageRightImage}
						alt="icon page"
					/>
				</div>

				<form className={styles.LoginPageLeft}>
					<p className={styles.LoginPageLeftTitle}>Sign In</p>
					<input
						className={styles.LoginPageLeftEmail}
						type="email"
						placeholder="Email Address"
					/>
					<input
						className={styles.LoginPageLeftPassword}
						type="password"
						placeholder="Password"
					/>
					<button className={styles.LoginPageLeftButton} type="submit">
						Sign in
					</button>
					<Link className={styles.LoginPageLeftLink} to="/register">
						Don’t have an account?
					</Link>
				</form>
			</div>
		</div>
	)
}
