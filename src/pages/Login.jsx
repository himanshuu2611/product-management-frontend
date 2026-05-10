import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://product-management-himanshu.onrender.com/api/v1/auth/login",
                formData
            );

            // Save JWT Token
            localStorage.setItem(
                "token",
                response.data.token
            );

            // Save Role
            localStorage.setItem(
                "role",
                response.data.role
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Credentials");
        }
    };

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f3f4f6"
            }}
        >

            <div
                style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "10px",
                    width: "350px",
                    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
                }}
            >

                <h2
                    style={{
                        textAlign: "center",
                        marginBottom: "25px"
                    }}
                >
                    Login
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "15px"
                        }}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "20px"
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#2563eb",
                            color: "white",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        Login
                    </button>

                </form>

                <p
                    style={{
                        marginTop: "15px",
                        textAlign: "center"
                    }}
                >
                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Login;