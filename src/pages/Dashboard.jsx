import Navbar from "../components/Navbar";

const Dashboard = () => {

    const role = localStorage.getItem("role");


    return (
        <div>

            <Navbar />

            <div style={{ padding: "20px" }}>

                <h1>Welcome To Dashboard</h1>

                <h2>Logged In As: {role}</h2>

            </div>

        </div>
    );
};

export default Dashboard;