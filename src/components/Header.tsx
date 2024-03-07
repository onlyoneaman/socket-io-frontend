import {Link} from "react-router-dom";

const Header = () => {

  return (
    <header
      className="bg-white shadow-sm"
    >
      <div>
        <div
          className="container mx-auto"
        >
          <div
            className="flex justify-center items-center py-4"
          >
            <div>
              <Link to={"/"}>
                <h1
                  className=" font-bold"
                >
                  Home
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
