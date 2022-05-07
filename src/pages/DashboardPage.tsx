import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function Dashboard(): JSX.Element {
    // const history = useNavigate();
    // const navigateToLogin = () => history('/');

    // const checkUser = () => {
    //     const token = localStorage.getItem('token')
    //     if (!token) { navigateToLogin() }
    // }

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(() => checkUser(), [])

    return <div className="flex">
        <Sidebar />
        <div className="grow">
            <Navbar />
            <h1 className="p-5 text-2xl"><b>Welcome Back Admin!</b></h1>
        </div>
    </div>
}