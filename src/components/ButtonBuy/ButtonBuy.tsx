import React from 'react';
import styles from './ButtonBuy.module.css'
import {Button, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

class ButtonBuy extends React.Component {

    render() {
        return (
            <div className={styles.buttonBuy + " mt-4"}>
                <p className="text text_type_digits-medium mr-5">
                    <span className="mr-2">610</span>
                    <CurrencyIcon type="primary" />
                </p>

                <Button type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        );
    }
}

export default ButtonBuy;