import { Link } from "react-router-dom";

const Home = () => {

    return (

        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f3f4f6"
            }}
        >

            <h1
                style={{
                    fontSize: "40px",
                    marginBottom: "40px",
                    color: "#111827"
                }}
            >
                Product Management System
            </h1>

            <div
                style={{
                    display: "flex",
                    gap: "20px"
                }}
            >

                <Link to="/register">

                    <button
                        style={{
                            padding: "12px 25px",
                            backgroundColor: "#2563eb",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "5px"
                        }}
                    >
                        Register
                    </button>

                </Link>

                <Link to="/login">

                    <button
                        style={{
                            padding: "12px 25px",
                            backgroundColor: "#111827",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                            borderRadius: "5px"
                        }}
                    >
                        Login
                    </button>

                </Link>

            </div>

        </div>
    );
};

export default Home;