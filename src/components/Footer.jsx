import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-gray-400 w-56">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              sodales elit vel dui dignissim, a dignissim lectus faucibus.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Categories</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Men's Clothing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Electronics
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  Jewelry
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">
                Women's clothing
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400">
              Email: info@example.com
              <br />
              Phone: 123-456-7890
              <br />
              Address: 123 Street, City
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex">
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white mr-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
