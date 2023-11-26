import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";


const MainLayout = () => {
    const loc =useLocation();
    console.log(loc);
    useEffect(()=>
        {
            if(loc.pathname ==="/"){
                document.title= "PHONE HOME";
            }
            else{
                document.title =`Phone ${loc.pathname.replace("/", "-")}`;
            }
            if (loc.state) {
                document.title = ` ${loc.state}`;
            }
        },[loc.pathname]);
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;