import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CurrencyConverter from "../components/CurrencyConverter";
import ScrollToTopOnMount from "../hooks/ScrollToTopOnMount";

const ProductDetails = ({ products, addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [commentName, setCommentName] = useState("");
  const [comment, setComment] = useState("");

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleNameChange = (e) => {
    setCommentName(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", commentName);
    console.log("Your feedback:", comment);
    alert(`${commentName}, Your feedback: "${comment}" added successfully!`);
    setComment("");
    setCommentName("");
  };

  return (
    <>
    <ScrollToTopOnMount />
    <div className="flex flex-col items-center mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-3xl mb-6 px-6 font-bold text-gray-800">
            {product.title}
          </h2>
          <img
            className="w-72 h-72 mx-auto object-contain rounded-lg mb-8"
            src={product.image}
            alt={product.title}
          />
          <p className="text-gray-700 text-lg mb-4 px-6">
            <span className="font-bold">About product:</span>{" "}
            {product.description}
          </p>
        </div>
        <div className="px-6">
          <p className="text-gray-700 text-lg mb-4">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="text-gray-700 text-lg mb-12">
            <span className="font-bold">Rating:</span> {product.rating.rate} (
            {product.rating.count} reviews)
          </p>
          <CurrencyConverter price={product.price} />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <form onSubmit={handleCommentSubmit} className="max-w-sm mx-auto px-6">
        <h3 className="text-xl mb-6 text-center font-bold text-gray-800">Leave a comment:</h3>
        <label htmlFor="name" className="text-lg font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={commentName}
          onChange={handleNameChange}
          className="border border-gray-400 p-2 mb-4 rounded focus:outline-none focus:border-blue-500 w-full"
          required
        />

        <label htmlFor="comment" className="text-lg font-bold mb-2">
          Add a Comment:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          className="border border-gray-400 p-2 mb-4 rounded resize-none focus:outline-none focus:border-blue-500 w-full"
          rows="4"
          cols="50"
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};

export default ProductDetails;
