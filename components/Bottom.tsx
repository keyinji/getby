"use client";

import React, { useState } from "react";
import Image from "next/image";
import pfp1 from "../components/images/pfp1.jpg";
import pfp2 from "../components/images/pfp2.jpg";
import pfp3 from "../components/images/pfp3.jpg";

const customers = [
  {
    id: 1,
    img: pfp1,
    name: "John Doe",
    review:
      "What an incredible travel app! It's like having a personal travel assistant in my pocket. The seamless itinerary planning, local insights, and easy-to-use interface made my trip a breeze. Highly recommended!",
  },
  {
    id: 2,
    img: pfp2,
    name: "Jane Smith",
    review:
      "I can't believe how much this travel app enhanced my vacation. From finding hidden gems to connecting with fellow travelers, it truly enriched my travel experience. Thanks to this app, I had the time of my life!",
  },
  {
    id: 3,
    img: pfp3,
    name: "Alice Johnson",
    review:
      "As a frequent traveler, I've tried various travel apps, but this one stands out from the rest. It exceeded my expectations with its personalized recommendations, real-time updates, and user-friendly features. I'm hooked and will be using it for all my future trips!",
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % customers.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + customers.length) % customers.length);
  };

  return (
    <div className="slider-container p-16">
      <div
        className="slider"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {customers.map((customer) => (
          <div key={customer.id} className="slide">
            <div className="w-full p-4 rounded flex justify-center items-center mx-auto">
              <Image
                alt=""
                className="rounded-full object-cover h-72 w-72 border-4 border-yellow-400"
                src={customer.img}
              />
              <div className="flex-col p-4">
                <h2 className="text-xl font-bold mb-2">{customer.name}</h2>
                <p className="w-80">{customer.review}</p>
                <div className="flex items-center py-2 space-x-1">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevSlide}
          type="button"
          className=" bg-gray-100 hover:bg-gray-200  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 origin-center rotate-180"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
        <button
          onClick={handleNextSlide}
          type="button"
          className=" bg-gray-100 hover:bg-gray-200  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
