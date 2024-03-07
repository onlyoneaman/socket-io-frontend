import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

const Layout = ({children}) => {

  return (
    <div
      className="min-h-screen flex flex-col justify-between bg-gray-100"
    >
      <Header/>
      <main className="grow p-3 md:p-6 container mx-auto">
        {children}
      </main>
      <Footer/>
    </div>
  )
};

export default Layout;
