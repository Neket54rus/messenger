import { FC } from 'react'
import { Link } from 'react-router-dom'

import headerNewsIcon from '../../../assets/image/header/header-news-icon.svg'
import headerProfileIcon from '../../../assets/image/header/header-profile-icon.svg'
import headerFriendsIcon from '../../../assets/image/header/header-friends-icon.svg'
import headerMessegesIcon from '../../../assets/image/header/header-messeges-icon.svg'
import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
	return (
		<nav className={styles.Navbar}>
			<ul className={styles.NavbarList}>
				<li className={[styles.NavbarItem].join(' ')}>
					<Link className={styles.NavbarLink} to="/">
						<img
							className={styles.NavbarIcon}
							src={headerNewsIcon}
							alt="news"
						/>
					</Link>
				</li>

				<li className={styles.NavbarItem}>
					<Link className={styles.NavbarLink} to="/">
						<img
							className={styles.NavbarIcon}
							src={headerFriendsIcon}
							alt="friends"
						/>
					</Link>
				</li>

				<li className={[styles.NavbarItem, styles.Active].join(' ')}>
					<Link className={styles.NavbarLink} to="/">
						<img
							className={styles.NavbarIcon}
							src={headerMessegesIcon}
							alt="messeges"
						/>
					</Link>
				</li>

				<li className={styles.NavbarItem}>
					<Link className={styles.NavbarLink} to="/">
						<img
							className={styles.NavbarIcon}
							src={headerProfileIcon}
							alt="profile"
						/>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
