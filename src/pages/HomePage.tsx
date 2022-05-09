import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import GreenButton from "../components/GreenButton";
import Navbar from "../components/Navbar";

export default function HomePage() {
    const user = useSelector((state: any) => state.user)
    const history = useNavigate();
    const navigateToRegister = () => history('/');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { if (!user.isLogged) navigateToRegister() }, [])


    const flexDisplay = `flex flex-col lg:flex-row gap-5 bg-backgroundGrey`;

    return <>
        <Navbar />
        <div className={flexDisplay}>
            <div className="ml-9 lg:ml-14 xl:ml-24 2xl:ml-48 my-16 lg:my-auto flex-1">
                <h2 className="text-4xl font-bold mb-4">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h2>
                <p className="max-w-md">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmuuntuk sewa mobil selama 24 jam.</p>
                <GreenButton text="Mulai Sewa Mobil" additionalStyles="mt-5" />
            </div>
            <img className="flex-1" src="./images/search_page_car.png" alt="Car" />
        </div>
    </>
}