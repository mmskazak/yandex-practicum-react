import React from 'react';
import styles from './IngredientGroup.module.css'

class IngredientGroup extends React.Component {

    render() {
        return (
            <div>
                <h2 className={styles.titleIncidentGroup + " text text_type_main-medium mb-6"}>"this.props.title"</h2>
                {this.props.children}
            </div>
        );
    }
}

export default IngredientGroup;