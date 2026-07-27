import { useEffect, useState } from "react";
import { getProducts } from "../data/api";
import ProductCard from "../components/ProductCard";

function Categories({addToCart}){
    const [products, setProducts] = useState([])

    useEffect(()=> {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data);
        } 
        loadProducts();
    }, []);
    const groupedProducts = products.reduce((groups, product) =>{
        if(!groups[product.category]){
            groups[product.category] = [];
        }
        groups[product.category].push(product);
        return groups;
    }, {});

    return (

    <div className="categories-page">
        {Object.entries(groupedProducts).map(([category, items]) => (
            <div key={category}>
                <h2 className="category-title">
                    {category}
                </h2>
                <div className="products">
                    {items.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>
        ))}
    </div>
);
}

export default Categories;
