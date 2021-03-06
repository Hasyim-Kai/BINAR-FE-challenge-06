import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../redux/user/userAction";

export default function RegisterPage(): JSX.Element {
    const user = useSelector((state: any) => state.user)
    const dispatch = useDispatch();
   const history = useNavigate();
   const navigateToHome = () => history('/home');
   const navigateToDashboard = () => history('/admin');

   const [email, setEmail] = useState('')
   const handleEmailChange = (event: any) => { setEmail(event.target.value) }

   const handleSubmit = (event: any) => {
      event.preventDefault();
      navigateToHome();
      dispatch(addUser(email));
      alert('Register Success');
   }

   useEffect(() => {
      if (user.isLogged && user.email === 'admin@admin.com') {navigateToDashboard()} 
      else if (user.isLogged) navigateToHome() 
   }, [])
   
   const tailwindTransition = `transition-all duration-300 ease-in-out`;
   const inputStyle = "border border-gray-300 rounded block w-full p-2.5 mt-2";

   return <div className="flex flex-col lg:flex-row lg:items-center bg-white">
      <img className="lg:w-8/12 lg:h-full" src="images/car_login.png" alt="Cars" />
      <div className={`grow p-14`}>
         <img className="w-36 h-full" src="images/logo2.png" alt="logo2" />
         <h3 className="my-12 text-3xl"><b>Create new Account</b></h3>

         <form onSubmit={handleSubmit} className={`flex flex-col`}>
            <div className="mb-6">
               <label className="text-lg">Email</label>
               <input type="email" className={inputStyle} placeholder="Contoh: johndee@gmail.com" required onChange={handleEmailChange}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Must formatted as an Email. Example : myemail@laptop.com" />
            </div>
            <div className="mb-6">
               <label className="text-lg">Password</label>
               <input type="password" className={inputStyle} placeholder="6+ karakter" required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least One number and One uppercase and lowercase letter, and at least 8 or more characters" />
            </div>
            <button type="submit" className={`mt-5 p-3 text-white bg-darkblue rounded cursor-pointer hover:text-xl ${tailwindTransition}`}>Sign Up</button>
            <hr className="mt-8" />
            <Link className="mt-5 font-medium text-lg text-center hover:text-blue-500" to='login'>Already have an account ? Login</Link>
         </form>
      </div>
   </div>
}