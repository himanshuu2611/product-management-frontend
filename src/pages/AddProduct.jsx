import { useState } from "react";
import API from "../api/axiosConfig";
import Navbar from "../components/Navbar";

const AddProduct = () => {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        quantity: ""
    });

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/products", product);

            alert("Product Added Successfully");

            setProduct({
                name: "",
                price: "",
                quantity: ""
            });

        } catch (error) {

            alert("Failed To Add Product");
        }
    };

    return (
        <div>

            <Navbar />

            <div style={{ padding: "20px" }}>

                <h1>Add Product</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={product.name}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        type="number"
                        name="price"
                        placeholder="Product Price"
                        value={product.price}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        type="number"
                        name="quantity"
                        placeholder="Product Quantity"
                        value={product.quantity}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <button type="submit">
                        Add Product
                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddProduct;