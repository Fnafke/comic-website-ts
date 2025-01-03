import { FormEvent, useState } from "react";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    //Errors
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let result = true;

        if (email.trim() == "") {
            setEmailError("Email cannot be empty.");
            result = false;
        }

        if (password.trim() == "") {
            setPasswordError("Password cannot be empty.")
            result = false;
        }

        return result;
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        clearErrors()
        if (!validate()) return;
    }

    return (
        <>
        <div className="pt-44">
            <form onSubmit={(e) => handleLogin(e)} className="flex flex-col justify-center text-center w-1/3 m-auto p-6 bg-blue-400 rounded-lg shadow-md">
                <label className="mb-2 text-white">Email</label>
                <input type="text" className="mb-4 p-2 rounded border border-gray-300" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label className="mb-2 text-white">Password</label>
                <input type="password" className="mb-4 p-2 rounded border border-gray-300" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
                {emailError && <p className="text-red-600">{emailError}</p>}
                {passwordError && <p className="text-red-600">{passwordError}</p>}
            </form>
        </div>
        </>
    );
}

export default LoginForm;