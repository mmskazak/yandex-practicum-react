import React from 'react';
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './HeaderStyles.module.css'

class AppHeader extends React.Component {

    render() {
        return (
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.navMenu} style={{flex: 1}}>
                        <a href="#" className="m-5">
                        <span className="mr-2">
                            <BurgerIcon type="primary" />
                        </span>
                            Конструктор
                        </a>
                        <a href="#" className="m-5" style={{color: '#8585AD'}}>
                        <span className="mr-2">
                        <ListIcon type="secondary" />
                    </span>
                            Лента заказов
                        </a>
                    </div>
                    <div style={{flex: 1}}>
                        <Logo />
                    </div>
                    <div className={styles.auth} style={{flex: 1}}>
                        <a href="#" className="m-5" style={{color: '#8585AD'}}>
                        <span className="mr-2">
                            <ProfileIcon type="secondary" />
                        </span>
                            Личный кабинет
                        </a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default AppHeader;