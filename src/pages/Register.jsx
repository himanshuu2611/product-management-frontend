import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER"
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

            await axios.post(
                "https://your-backend-name.onrender.com/api/v1/auth/register",
                formData
            );

            alert("Registration Successful");

            navigate("/login");

        } catch (error) {

            alert("Registration Failed");
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
                    Register
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "15px"
                        }}
                    />

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
                            marginBottom: "15px"
                        }}
                    />

                    <select
                        name="role"
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginBottom: "20px"
                        }}
                    >

                        <option value="USER">
                            USER
                        </option>

                    </select>

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
                        Register
                    </button>

                </form>

                <p
                    style={{
                        marginTop: "15px",
                        textAlign: "center"
                    }}
                >
                    Already have an account?

                    <Link to="/login">
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
};

export default Register;