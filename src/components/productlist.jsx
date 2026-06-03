import React from 'react'
import usefetch from '../hooks/useFetch';

const ProductList = () => {
   
    // using the custom hook to fetch data from the api
    const{
        data: products,
        isLoading,
        error
    } = usefetch('https://fakestoreapi.com/products');

    //msg to show in the loading state , otherwise  the error
    if(isLoading){
        return <h2>Loading products...</h2>;
    }
    if(error){
        return <h2>Error: {error}</h2>;
    }
    

  return (
    <div className= "container ">
        <h1>Product List</h1>

        <div className="product-grid">
              {/* taking first 10 products from the fetched data of api, and mapping through them to display */}
            {products.slice(0, 10).map((product) => (

                // using key here for unique identification
                <div className="card" key={product.id}>

                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                </div>
            ))}

        </div>
    </div>
      
  );
};

export default ProductList
