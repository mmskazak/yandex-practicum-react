import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";

function App() {
    return (
        <div className="App">
            <div className="container">
                <AppHeader />
                <main className="main">
                    <BurgerIngredients />
                    <BurgerConstructor />
                </main>
            </div>
        </div>
    );
}

export default App;
