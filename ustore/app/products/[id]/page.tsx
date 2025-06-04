import { ProductProps } from "../../../types/ProductProps";
import { HeroCardDetailProduct } from "./_components/HeroCardDetailProduct";
import { HeroPassPage } from "./_components/HeroPassPage";


export default async function ProductPage({ params }: { params: { id: string } } | { params: Promise<{ id: string }> }) {
    const resolvedParams = await params as { id: string };
    const { id } = resolvedParams;
    // ...


    // Busca o produto atual
    const response = await fetch(
        `https://fakestoreapi.com/products/${id}`,
        { next: { revalidate: 60 } }
    );
    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    const product: ProductProps = await response.json();

    // Busca todos os produtos para saber o total e o índice do atual
    const allProductsRes = await fetch("https://fakestoreapi.com/products");
    const allProducts: ProductProps[] = await allProductsRes.json();
    const total = allProducts.length;

    // Procura o índice do produto atual
    const initialPage = allProducts.findIndex(p => p.id === product.id) + 1;

    return (
        <>
            <HeroCardDetailProduct
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
            />

            <div className="flex justify-center items-center my-6">
                <HeroPassPage initialPage={initialPage} total={total} />
            </div>
        </>
    );
}
