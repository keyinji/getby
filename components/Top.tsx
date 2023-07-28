import React from "react";
import Image from "next/image";
import photo1 from "../components/images/photo1.jpg";
import photo2 from "../components/images/photo2.jpg";
import photo3 from "../components/images/photo3.jpg";

type Props = {};

const Top = (props: Props) => {
  return (
    <div className="container mx-auto flex justify-between items-center w-full">
    <section className="w-1/2">
        <h1>Travel The World!</h1>
        <p>cool </p>
    </section>
      <div className="columns-2 w-1/2 gap-3 m-2 p-10 justify-center items-center">
        <Image className="rounded-md mb-4" alt="" src={photo1} />
        <Image className="rounded-md mb-4" alt="" src={photo2} />
        <Image className="rounded-md mb-4" alt="" src={photo3} />
      </div>
    </div>
  );
};

export default Top;
