import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = ({ loggedIn, setLoggedIn, selectedProductCount }) => {
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-8 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">
          <Link to="/">Fake-Store</Link>
        </h1>
        <nav>
          <ul className="flex items-center">
            <li className="mr-4">
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                {selectedProductCount > 0 && (
                  <span className="text-xs bg-red-500 text-white px-1 rounded-full ml-1">
                    {selectedProductCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
