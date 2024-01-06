export default function Product( {params}: {
    params: {productId: string}} ) { // This is the Product page.
    return (
        <div>
        <h1>Product Details Page {params.productId}</h1>
        </div>
    );
    }

//www.youtube.com/watch?v=N4-EkNJ6RFM&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI&index=7