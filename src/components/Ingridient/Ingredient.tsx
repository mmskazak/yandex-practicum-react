import React from 'react';
import styles from './Ingredient.module.css'
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class Ingredient extends React.Component {

    render() {
        return (
            <div className={styles.ingredient}>
                <Counter count={1} size="default" />
                <img className="pr-4 pl-4 mb-1"  alt="n200i" width="240" height="120" />
                <p className={styles.ingredientPrice}>
                            <span className="text text_type_digits-default mr-2">
                             "this.props.price"
                            </span>
                    <CurrencyIcon type="primary" />
                </p>
                <h3 className={styles.ingredientTitle + " text text_type_main-default"}>
                    "this.props.title"
                </h3>
            </div>
        );
    }
}

export default Ingredient;