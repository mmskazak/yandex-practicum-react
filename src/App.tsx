import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import {data} from "./utils/data.js";

function App() {
    console.log(data);
    return (
        <div className="App">
            <div className="container">
                <AppHeader />
                <main className="main">
                    <BurgerIngredients ingredients={data} />
                    <BurgerConstructor />
                </main>
            </div>
        </div>
    );
}

export default App;
