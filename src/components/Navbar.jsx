import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (

        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 30px",
                backgroundColor: "#111827",
                color: "white"
            }}
        >

            <h2>
                Product Management System
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center"
                }}
            >

                <Link
                    to="/dashboard"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    Dashboard
                </Link>

                <Link
                    to="/products"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    Products
                </Link>

                {
                    role === "ADMIN" && (

                        <Link
                            to="/add-product"
                            style={{
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Add Product
                        </Link>
                    )
                }

                <button
                    onClick={logout}
                    style={{
                        padding: "8px 15px",
                        cursor: "pointer"
                    }}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
};

export default Navbar;