import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const allProducts = [
    { name: 'Lenovo', category: 'laptop' }, { name: 'Asus', category: 'laptop' }, { name: 'Dell', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' }, { name: 'Oppo', category: 'mobile' }, { name: 'Apple', category: 'Mobile' },
    { name: 'nikkon', category: 'camera' }, { name: 'Canon', category: 'camera' }, { name: 'Sony', category: 'camera' }
]



const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const matchProducts = allProducts.filter(pd => pd.category.toLowerCase() === category && category.toLowerCase());
        setProducts(matchProducts);

    }, [category])

    return (
        <div>
            <h4>This is Category</h4>
            {
                products.map((pd) => <CategoryDetails product={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;