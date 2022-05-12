import { signInWithPopup, UserCredential } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/user/userAction";
import { auth, googleAuthProvider } from "../services/firebase";

export default function LoginPage(): JSX.Element {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const handleEmailChange = (event: any) => { setEmail(event.target.value) }

    const history = useNavigate();
    const navigateToDashboard = () => history('/admin');
    const navigateToHome = () => history('/home');

    const signInWithGoogle = async () => {
        try {
            const response: UserCredential = await signInWithPopup(auth, googleAuthProvider);
            dispatch(addUser(response.user.email));
            navigateToHome();
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (email === `admin@admin.com`) {
            dispatch(addUser(email));
            navigateToDashboard();
        } else {
            dispatch(addUser(email));
            navigateToHome();
        }
    }

    const tailwindTransition = `transition-all duration-300 ease-in-out`;
    const inputStyle = "border border-gray-300 rounded block w-full p-2.5 mt-2";

    return <div className="flex flex-col lg:flex-row lg:items-center bg-white">
        <img className="lg:w-8/12 lg:h-screen" src="images/car_login.png" alt="Cars" />
        <div className={`grow p-14`}>
            <img className="w-36" src="images/logo2.png" alt="logo2" />
            <h3 className="my-12 text-3xl"><b>Welcome, BCR Renters</b></h3>

            <form onSubmit={handleSubmit} className={`flex flex-col`}>
                <div className="mb-6">
                    <label className="text-lg">Email</label>
                    <input type="email" className={inputStyle} placeholder="Contoh: johndee@gmail.com" required onChange={handleEmailChange}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must formatted as an Email. Example : myemail@laptop.com" />
                </div>
                <div className="mb-6">
                    <label className="text-lg">Password</label>
                    <input type="password" className={inputStyle} placeholder="6+ karakter" required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least One number and One uppercase and lowercase letter, and at least 6 or more characters" />
                </div>
                <button type="submit" className={`mt-5 p-3 text-white bg-darkblue rounded cursor-pointer hover:text-xl ${tailwindTransition}`}>Sign In</button>
                <hr className="mt-8" />
            </form>
            <button onClick={signInWithGoogle} className={`mx-auto flex mt-3 p-3 font-semibold cursor-pointer hover:text-xl ${tailwindTransition}`}><img className="inline-block mr-3" src="images/icons/google-logo.svg" alt="Google Logo" />Login with Google</button>
        </div>
    </div>
}