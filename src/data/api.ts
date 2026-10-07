const API_URL = "https://dummyjson.com/products";
interface DummyProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    thumbnail: string;
    images: string[];
}
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}
export async function getProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.products.map((product: DummyProduct) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.thumbnail,
    }));
}