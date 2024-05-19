import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {Outlet} from 'react-router-dom'
function Layout() {
    return ( 
        <>
        <Navbar/>
        <div className="container mx-auto pt-[70px] ">
            <Outlet></Outlet>
        </div>
        <Footer/>
        </>
     );
}

export default Layout;