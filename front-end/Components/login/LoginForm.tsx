import userService from "@/services/UserService";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { json } from "stream/consumers";

const LoginForm: React.FC = () => {
    const router = useRouter();
    //Variables
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    //Errors
    const [usernameError, setUsernameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    //Switch between login and register
    //If isLogin == true => it's the login page.
    //If isLogin == false => it's the register page.
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const validateLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let result = true;

        if (email.trim() == "" && emailRegex.test(email)) {
            setEmailError("Email cannot be empty.");
            result = false;
        }

        if (password.trim() == "") {
            setPasswordError("Password cannot be empty.")
            result = false;
        }

        return result;
    }

    const validateRegister = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let result = true;

        if (username.trim() == "") {
            setUsernameError("Username cannot be empty.")
            result = false;
        }

        if (email.trim() == "" || !emailRegex.test(email)) {
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

    const handleLogin = async(e: FormEvent) => {
        e.preventDefault();

        clearErrors()
        if (!validateLogin()) return;

        const response = await userService.logIn(email, password);
        if (!response || response.status) {
            setEmailError("Email or password is wrong.");
            return;
        }

        localStorage.setItem('loggedInUser', JSON.stringify({
            token: response.token,
            username: response.username,
            email: response.email,
            role: response.role
        }));

        setStatus(`Succesfully logged in! Redirecting you to the homepage in 2 seconds...`);
        setTimeout(() => {
            setStatus(`Succesfully logged in! Redirecting you to the homepage in 1 second...`);
        }, 1000);
        setTimeout(()=> {
            router.push('/');
        }, 2000);

    }

    const handleRegister = async(e: FormEvent) => {
        e.preventDefault();

        clearErrors();
        if (!validateRegister()) return;

        const response = await userService.createUser(username, email, password);
        if (!response) {
            setEmailError("A user already exists with this email.");
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify({
            token: response.token,
            username: response.username,
            email: response.email,
            role: response.role
          }));

          setStatus(`Succesfully registered! Redirecting you to the homepage in 2 seconds...`);
          setTimeout(() => {
              setStatus(`Succesfully registered! Redirecting you to the homepage in 1 second...`);
          }, 1000);
          setTimeout(()=> {
              router.push('/');
          }, 2000);

    }

    return (
        <>
        {isLogin && <div className="pt-44">
            <form onSubmit={(e) => handleLogin(e)} className="flex flex-col justify-center text-center w-1/3 m-auto p-6 bg-black outline outline-white rounded-lg shadow-md max-lg:w-4/5">
                <label className="mb-2 text-white">
                    Email
                </label>
                <input type="text" className="mb-4 p-2 rounded border border-gray-300" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label className="mb-2 text-white">
                    Password
                </label>
                <input type="password" className="mb-4 p-2 rounded border border-gray-300" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' className="p-2 bg-blue-800 text-white rounded hover:bg-blue-900">Login</button>
                
                <div className="flex gap-2 justify-center p-3">
                    <p className="mt-auto ml-auto mb-auto mr-2 text-white">
                        Don't have an account?
                    </p>
                    <button onClick={() => setIsLogin(false)} className="mt-auto ml-2 mr-auto mb-auto p-2 bg-blue-800 text-white rounded hover:bg-blue-900">
                        Register
                    </button>
                </div>
                {emailError && <p className="text-red-600">{emailError}</p>}
                {passwordError && <p className="text-red-600">{passwordError}</p>}
                {status && <p className="text-green-600 text-sm">{status}</p>}
            </form>
        </div>}
        
        {!isLogin && <div className="pt-36">
            <form 
                onSubmit={(e) => handleRegister(e)} 
                className="flex flex-col justify-center text-center w-1/3 m-auto p-6 bg-black outline outline-white rounded-lg shadow-md max-lg:w-4/5">
                <label className="mb-2 text-white">
                    Username
                </label>
                <input type="text" className="mb-4 p-2 rounded border border-gray-300" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <label className="mb-2 text-white">
                    Email
                </label>
                <input type="text" className="mb-4 p-2 rounded border border-gray-300" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label className="mb-2 text-white">
                    Password
                </label>
                <input type="password" className="mb-4 p-2 rounded border border-gray-300" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' className="p-2 bg-blue-800 text-white rounded hover:bg-blue-900">Register</button>
                <div className="flex gap-2 justify-center p-3">
                    <p className="mt-auto ml-auto mb-auto mr-2 text-white">
                        Already have an account?
                    </p>
                    <button onClick={() => setIsLogin(true)} className="mt-auto ml-2 mr-auto mb-auto p-2 bg-blue-800 text-white rounded hover:bg-blue-900">
                        Login
                    </button>
                </div>
                {usernameError && <p className="text-red-600">{usernameError}</p>}
                {emailError && <p className="text-red-600">{emailError}</p>}
                {passwordError && <p className="text-red-600">{passwordError}</p>}
                {status && <p className="text-green-600 text-sm">{status}</p>}
            </form>
        </div>}
        </>
    );
}

export default LoginForm;