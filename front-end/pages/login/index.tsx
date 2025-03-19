import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import LoginForm from "@/Components/login/LoginForm";

const Login: React.FC = () => {
    return (
        <>
        <title>Login | Subvero</title>
        <Header/>
        <LoginForm/>
        <Footer/>
        </>
    );
}

export default Login;