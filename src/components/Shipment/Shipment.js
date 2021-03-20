import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div>
            <h1>This is Shipment and value:{category}</h1>
        </div>
    );
};

export default Shipment;