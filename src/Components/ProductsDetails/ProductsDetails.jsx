import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { useParams, useNavigate, Link } from "react-router-dom";
import Slider from "react-slick";
import { CartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import style from "./ProductsDetails.module.css";
import Group107 from "../../Assets/Group107.png";
import Group106 from "../../Assets/Group106.png";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleShowMore = () => {  
    setVisibleProducts(prev => prev + 8);  
  };  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div  className={`${style.Related1} `}>
      <h1>Related Products</h1>
      <br />
      <div  className={`${style.Related} `}>
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px" }}
            />

            {product.title.length > 20
              ? `${product.title.substring(0, 20)}...`
              : product.title}
            <p>Price: ${product.price}</p>
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
  );
};

export default function ProductsDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        toast.error("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
    navigate("/shopcart");
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      <div className={`${style.topdetails} `}>
        <Link to={"/"} className={`${style.link}`}> Home </Link> &gt; <Link to={"shop"}>Shop </Link> &gt;{" "}
        {product.title}
      </div>

      <div className={`${style.father} d-flex`}>
        <div className={`${style.one} me-3`}>
          <div className={`${style.contslide}`}>
            <Slider {...settings} className={`${style.Slider}`}>
              {product.images &&
                product.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={product.title}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </div>

        <div
          className={`${style.largeImage} d-flex justify-content-center align-items-center`}
        >
          {product.images && product.images.length > 0 && (
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: "400px", height: "auto", borderRadius: "8px" }}
            />
          )}
        </div>

        <div className="col-md-4">
          <div className="details">
            <h3 className="h5">{product.title || "Product Title"}</h3>
            <p>{product.description || "Product Description"}</p>
            <span className="font-sm">
              {product.category?.name || "Category"}
            </span>
            <div className="d-flex py-3 justify-content-between align-items-center">
              <span className="font-sm text-main">
                {product.price ? `${product.price} EGP` : "Price"}
              </span>
              <span className="font-sm">
                <i className="fa fa-star rating-color me-2">
                  {product.ratingsAverage || 0}
                </i>
              </span>
            </div>
          </div>

          <div className="size-color-selection">
            <p>Size</p>
            <div className={`${style.large1}`}>
              <button className={`${style.large}`}> L</button>
              <button className={`${style.xl}`}> XL</button>
              <button className={`${style.xs}`}> XS</button>
            </div>

            <p>Color</p>
            <div className={`${style.circls}`}>
              <div className={`${style.cir1}`}></div>
              <div className={`${style.cir2}`}></div>
              <div className={`${style.cir3}`}></div>
            </div>
          </div>

          <div className={`${style.buttons}`}>
            <button className={`${style.addbtn1}`}>- 1 +</button>
            <button onClick={handleAddToCart} className={`${style.addbtn}`}>
              Add to cart
            </button>
            <button className={`${style.addbtn}`}>Compare</button>
          </div>
        </div>
      </div>
     
      <div className={`${style.leftside}`}>
<h3> EGP : {product.price}</h3>
<h3> Category :{product.id}</h3>
<h3> Tags :{product.title}</h3>
<h3> Share : </h3>


</div>


      <div className={`${style.Description}`}>
        <span>
          <p> <strong> Description </strong>    Additional Information     Reviews [5] </p>
        </span>
        <p>{product.description || "No description available."}</p>
      </div>

      <div  className={`${style.double}`}>
        <img className={`${style.Group107}`} src={Group107} alt="Group107" />
        <img className={`${style.Group106}`} src={Group106} alt="Group106" />
      </div>

      <div className="Related">
        <ProductList />
      </div>
    </>
  );
}
