import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import API from "../api/axiosConfig";

import Navbar from "../components/Navbar";

const EditProduct = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        price: "",
        quantity: ""
    });

    useEffect(() => {

        fetchProduct();

    }, []);

    const fetchProduct = async () => {

        try {

            const response = await API.get(
                `/products/${id}`
            );

            setProduct(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.put(
                `/products/${id}`,
                product
            );

            alert("Product Updated Successfully");

            navigate("/products");

        } catch (error) {

            alert("Update Failed");
        }
    };

    return (

        <div>

            <Navbar />

            <div style={{ padding: "20px" }}>

                <h1>Edit Product</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <input
                        type="number"
                        name="quantity"
                        value={product.quantity}
                        onChange={handleChange}
                    />

                    <br /><br />

                    <button type="submit">
                        Update Product
                    </button>

                </form>

            </div>

        </div>
    );
};

export default EditProduct;