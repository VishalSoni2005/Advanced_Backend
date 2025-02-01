import { Outlet } from "react-router-dom";
import Header from "./00_Header";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <h2>context load from here  </h2>
        <Outlet />{" "}
        
        {/* This is where the page content (Home, About, etc.) will appear */}
      <h2 className="text-center text-white">to here</h2>
      </div>
    </div>
  );
}

export default Layout;
