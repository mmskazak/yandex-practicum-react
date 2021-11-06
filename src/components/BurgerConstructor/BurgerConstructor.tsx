import React from 'react';
import styles from './BurgerConstructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import n200i from '../../images/n200i.png'
import R2D3 from '../../images/R2D3.png'
import SpaceSauce from '../../images/SpaceSauce.png'
import six from '../../images/six.png'


class BurgerConstructor extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end'
                }}>
                    <div>
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text="Краторная булка N-200i (верх)"
                            price={200}
                            thumbnail={n200i}
                        />
                    </div>
                    <div>
                        <img className="mr-2" src={six} alt="" width="13" height="18" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={R2D3}
                        />
                    </div>
                    <div>
                        <img className="mr-2" src={six} alt="" width="13" height="18" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={R2D3}
                        />
                    </div>
                    <div>
                        <img className="mr-2" src={six} alt="" width="13" height="18" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={R2D3}
                        />
                    </div>
                    <div>
                        <img className="mr-2" src={six} alt="" width="13" height="18" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={R2D3}
                        />
                    </div>
                    <div>
                        <img className="mr-2" src={six} alt="" width="13" height="18" />
                        <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={R2D3}
                        />
                    </div>
                    <div>
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={SpaceSauce}
                        />
                    </div>
                    <div className="mt-4" style={{display: 'flex', alignItems: 'center'}}>
                        <p className="text text_type_digits-medium mr-5">
                            <span className="mr-2">610</span>
                            <CurrencyIcon type="primary" />
                        </p>

                        <Button type="primary" size="large">
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default BurgerConstructor;