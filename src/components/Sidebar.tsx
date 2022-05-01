import { Link } from "react-router-dom";

export default function Sidebar(): JSX.Element {
   const sidebarItem: string = `w-full p-1 text-center text-white hover:bg-blue-700`;
   const sidebarWidth: string = `w-20 bg-darkblue`;

   return <div className={sidebarWidth}>
      <nav className={`fixed h-screen z-50 flex flex-col gap-3 items-center text-lg ${sidebarWidth}`}>
         <Link to={"/dashboard"} className="py-3">
            <img className="mx-auto" src="images/logo1.png" alt="logo1" />
         </Link>
         <Link to={"/dashboard"} className={sidebarItem}>
            <img className="mx-auto" src="images/icons/home.svg" alt="Dashboard" />
            <span><small><b>Dashboard</b></small></span>
         </Link>
         <Link to={"/dashboard"} className={sidebarItem}>
            <img className="mx-auto" src="images/icons/fi_truck.svg" alt="Cars" />
            <span><small><b>Cars</b></small></span>
         </Link>
      </nav>
      <div className={sidebarWidth}></div>
   </div>
}