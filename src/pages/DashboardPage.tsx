import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function Dashboard(): JSX.Element {
    const user = useSelector((state: any) => state.user)
    const history = useNavigate();
    const navigateToRegister = () => history('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { if (user.email !== 'admin@admin.com') navigateToRegister() }, [])

    return <div className="flex">
        <Sidebar />
        <div className="grow">
            <Navbar />
            <h1 className="p-5 text-2xl"><b>Welcome Back Admin!</b></h1>
        </div>
    </div>
}