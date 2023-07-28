import React from "react";
import Image from "next/image";
import photo1 from "../components/images/photo1.jpg";
import photo2 from "../components/images/photo2.jpg";
import photo3 from "../components/images/photo3.jpg";

type Props = {};

const Top = (props: Props) => {
  return (
    <div className="container mx-auto flex justify-between items-center w-full">
      <section className="w-1/2 flex flex-col justify-center p-10">
        <h1 className="text-7xl font-bold py-8 w-3/4">
          Journey with <span className="text-yellow-400">Get</span>By
        </h1>
        <p className="text-lg">
          Unleash Adventure: Explore, Connect, and Thrive. <span className="text-yellow-400">Get</span>By - Your
          Passport to Boundless Journeys. Tailored Itineraries, Captivating
          Memories. Fuel Wanderlust, Discover the World Together!
        </p>
      </section>
      <div className="flex w-1/2 gap-3 m-2 md:p-16 justify-center items-center">
        <div className="flex-col">
          <Image className="rounded-md mb-4" alt="" src={photo1} />
          <Image className="rounded-md mb-4" alt="" src={photo2} />
        </div>
        <div className="flex-col">
          <Image className="rounded-md mb-4" alt="" src={photo3} />
        </div>
      </div>
    </div>
  );
};

export default Top;
