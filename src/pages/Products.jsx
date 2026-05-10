import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api/axiosConfig";
import Navbar from "../components/Navbar";

const Products = () => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const response = await API.get("/products");

            setProducts(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const deleteProduct = async (id) => {

        try {

            await API.delete(`/products/${id}`);

            alert("Product Deleted Successfully");

            fetchProducts();

        } catch (error) {

            alert("Delete Failed");
        }
    };

    return (

        <div>

            <Navbar />

            <div style={{ padding: "20px" }}>

                <h1>All Products</h1>

                {
                    products.length === 0 ? (

                        <h3>No Products Found</h3>

                    ) : (

                        products.map((product) => (

                            <div
                                key={product.id}
                                style={{
                                    border: "1px solid #ccc",
                                    borderRadius: "10px",
                                    padding: "20px",
                                    marginBottom: "20px",
                                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
                                }}
                            >

                                <h2>{product.name}</h2>

                                <p>
                                    <strong>Price:</strong>
                                    ₹{product.price}
                                </p>

                                <p>
                                    <strong>Quantity:</strong>
                                    {product.quantity}
                                </p>

                                {
                                    role === "ADMIN" && (

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                marginTop: "15px"
                                            }}
                                        >

                                            <button
                                                onClick={() =>
                                                    navigate(`/edit-product/${product.id}`)
                                                }
                                                style={{
                                                    padding: "8px 15px",
                                                    backgroundColor: "#2563eb",
                                                    color: "white",
                                                    border: "none",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Update
                                            </button>

                                            <button
                                                onClick={() =>
                                                    deleteProduct(product.id)
                                                }
                                                style={{
                                                    padding: "8px 15px",
                                                    backgroundColor: "red",
                                                    color: "white",
                                                    border: "none",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    )
                                }

                            </div>
                        ))
                    )
                }

            </div>

        </div>
    );
};

export default Products;