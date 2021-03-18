import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetails = (props) => {
    const {name,category} = props.product;
    const [ category,setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h6>This is CategoryDetails: {name} </h6>
        </div>
    );
};

export default CategoryDetails;