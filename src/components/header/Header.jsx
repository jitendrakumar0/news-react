import React from "react";
// import TopHeader from './TopHeader'
import BottomHeader from "./BottomHeader";
import Sidebar from "./Sidebar";

const Header = () => {
    return (
        <>
            <Sidebar />
            <header className="navbar-light navbar-sticky header-static">
                {/* <TopHeader/> */}
                <BottomHeader />
            </header>
        </>
    );
};

export default Header;
