import React, { useContext, useEffect } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {
    const { name, category } = props.product;

    return (
        <div>
            <h6>This is CategoryDetails: {category}:{name} </h6>
        </div>
    );
};

export default CategoryDetails;