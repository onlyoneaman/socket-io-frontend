import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

const Layout = ({children}) => {

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-gray-100"
    >
      <Header/>
      <div className="grow p-3 md:p-6">
        {children}
      </div>
      <Footer/>
    </div>
  )
};

export default Layout;
