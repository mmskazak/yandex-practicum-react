import React from 'react';
import styles from './BurgerIngredients.module.css'
import {Counter, CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import n200i from '../../images/n200i.png'
import R2D3 from '../../images/R2D3.png'

class BurgerIngredients extends React.Component {

    render() {
        return (
            <div className={styles.layer}>
                <h1 className={styles.title + "text text_type_main-large"}>
                    Соберите бургер
                </h1>
                <div style={{display: 'flex'}}>
                    <Tab value="one" active={true} onClick={() => {
                    }}>
                        Булки
                    </Tab>
                    <Tab value="two" active={false} onClick={() => {
                    }}>
                        Соусы
                    </Tab>
                    <Tab value="three" active={false} onClick={() => {
                    }}>
                        Начинки
                    </Tab>
                </div>
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <div>
                        <h2 className={styles.title + " text text_type_main-medium mb-6"}> Булки </h2>
                        <div className={styles.rowItems}>
                            <div className={styles.item}>
                                <Counter count={1} size="default" />
                                <img className="pr-4 pl-4 mb-1" src={n200i} alt="n200i" width="240" height="120" />
                                <p className={styles.itemPrice}>
                            <span className="text text_type_digits-default mr-2">
                             20
                            </span>
                                    <CurrencyIcon type="primary" />
                                </p>
                                <h3 className={styles.titleCenter + " text text_type_main-default"}>
                                    Краторная булка N-200i
                                </h3>
                            </div>
                            <div className={styles.item}>
                                <Counter count={1} size="default" />
                                <img className="pr-4 pl-4 mb-1" src={R2D3} alt="R2D3" width="240" height="120" />
                                <p className={styles.itemPrice}>
                            <span className="text text_type_digits-default mr-2">
                             20
                            </span>{" "}
                                    <CurrencyIcon type="primary" />
                                </p>
                                <h3 className={styles.titleCenter + " text text_type_main-default"}>
                                    Флюоресцентная булка R2-D3
                                </h3>
                            </div>
                        </div>
                        <div className={styles.rowItems}>
                            <div className={styles.item}>
                                <Counter count={1} size="default" />
                                <img className="pr-4 pl-4 mb-1" src={n200i} alt="n200i" width="240" height="120" />
                                <p className={styles.itemPrice}>
                            <span className="text text_type_digits-default mr-2">
                             20
                            </span>
                                    <CurrencyIcon type="primary" />
                                </p>
                                <h3 className={styles.titleCenter + " text text_type_main-default"}>
                                    Краторная булка N-200i
                                </h3>
                            </div>
                            <div className={styles.item}>
                                <Counter count={1} size="default" />
                                <img className="pr-4 pl-4 mb-1" src={R2D3} alt="R2D3" width="240" height="120" />
                                <p className={styles.itemPrice}>
                            <span className="text text_type_digits-default mr-2">
                             20
                            </span>{" "}
                                    <CurrencyIcon type="primary" />
                                </p>
                                <h3 className={styles.titleCenter + " text text_type_main-default"}>
                                    Флюоресцентная булка R2-D3
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={styles.title + " text text_type_main-medium mb-6"}> Соусы </h2>
                        <div className={styles.rowItems}>
                            <div className={styles.item}>
                                <Counter count={1} size="default" />
                                <img className="pr-4 pl-4 mb-1" src={n200i} alt="n200i" width="240" height="120" />
                                <p className={styles.itemPrice}>
                            <span className="text text_type_digits-default mr-2">
                             20
                            </span>
                                    <CurrencyIcon type="primary" />
                                </p>
                                <h3 className={styles.titleCenter + " text text_type_main-default"}>
                                    Краторная булка N-200i
                                </h3>
                            </div>
                            <div className={styles.item}>
                                <Counter count={1} size="default" />
                                <img className="pr-4 pl-4 mb-1" src={R2D3} alt="R2D3" width="240" height="120" />
                                <p className={styles.itemPrice}>
                            <span className="text text_type_digits-default mr-2">
                             20
                            </span>{" "}
                                    <CurrencyIcon type="primary" />
                                </p>
                                <h3 className={styles.titleCenter + " text text_type_main-default"}>
                                    Флюоресцентная булка R2-D3
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BurgerIngredients;