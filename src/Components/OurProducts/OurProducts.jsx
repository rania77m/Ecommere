import React, { useState, useEffect, useContext } from 'react';  
import axios from 'axios';  
import style from './OurProducts.module.css'; 
import { Link } from 'react-router-dom';  
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';
export default function OurProducts() {  
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState('');  
  const [visibleProducts, setVisibleProducts] = useState(8);  
  const navigate = useNavigate();  

  const { addToCart } = useContext(CartContext);

  useEffect(() => {  
    const fetchProducts = async () => {  
      try {  
        const response = await axios.get('https://api.escuelajs.co/api/v1/products');  
        setProducts(response.data);  
      } catch (err) {  
        setError(err.response ? err.response.data.message : 'Error fetching products');  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchProducts();  
  }, []);  

  const handleShowMore = () => {  
    setVisibleProducts(prev => prev + 8);  
  };  

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} has been added to your cart!`);
    navigate('/shopcart');  

  };

  return (  
    <>  
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : error ? (
        <div className="d-flex justify-content-center my-5">
          <p className="text-danger">{error}</p>
        </div>
      ) : (
        <div className="container my-4">
          <div className="row gy-4">
            {products.slice(0, visibleProducts).map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
                <div className={`${style.productCard} card h-100`}>
                  <Link to={`/productsdetails/${product.id}`} className="text-decoration-none text-dark">
                    <img
                      src={Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : '/placeholder.png'}
                      alt={product.title}
                      className="card-img-top img-fluid"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className={`${style.cardcover}`}>
                      <span className="font-sm text-main">
                        {product.category?.name || "Uncategorized"}
                      </span>
                      <h5 className="card-title">
                        {product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="font-sm">{product.price} EGP</span>
                        <span className="font-sm">
                          <i className="fa fa-star rating-color me-2">
                            {product.rating?.rate || product.ratingsAverage || 0}
                          </i>
                        </span>
                      </div>
                    </div>
                    <div className="card-footer bg-white border-0">
                 
                 
               </div>
                  </Link>
                  <button 
                   onClick={() => handleAddToCart(product)} 
                   className="btn bg-main text-main-light w-100"
                 >
                   Add to Cart
                 </button>
                </div>
              </div>
            ))}
          </div>

          {visibleProducts < products.length && (
            <div className="text-center my-4">
              <button className="btn btn-primary" onClick={handleShowMore}> 
                Show More
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
