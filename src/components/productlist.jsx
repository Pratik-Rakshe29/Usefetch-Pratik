import useFetch from "../hooks/useFetch";

  function ProductList() {

    // using custom hook
  const { data, loading } = useFetch("https://api.escuelajs.co/api/v1/products");

   // loading message
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-container">
      {data.map((product) => (
        <div className="product-card" key={product.id}>

          <h3>{product.title}</h3>
          <img src={product.images[0]} />
          <p>Price: ${product.price}</p>

        </div>
      ))}
      </div>
    </div>
  );
}

export default ProductList;
