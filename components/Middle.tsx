import rome from "../components/images/rome.jpg";
import tokyo from "../components/images/tokyo.jpg";
import paris from "../components/images/paris.jpg";
import nyc from "../components/images/nyc.jpg";
import Image from "next/image";

interface Destination {
  img: any;
  name: string;
  description: string;
  stars: number;
}
const destinations: Destination[] = [
  {
    img: nyc,
    name: "New York City, USA",
    description:
      "A bustling metropolis with a vibrant culture, famous landmarks like Times Square, and diverse neighborhoods.",
    stars: 5,
  },
  {
    img: paris,
    name: "Paris, France",
    description:
      "Known for its iconic landmarks like the Eiffel Tower, Louvre Museum, and charming streets.",
    stars: 4.5,
  },
  {
    img: rome,
    name: "Rome, Italy",
    description:
      "Rich in history and home to ancient ruins like the Colosseum and the Roman Forum.",
    stars: 5,
  },
  {
    img: tokyo,
    name: "Tokyo, Japan",
    description:
      "A city of contrasts, offering a blend of traditional culture and modern technology.",
    stars: 4,
  },
];

const Middle = () => {
  return (
    <div className="bg-sky-50 p-10">
      <h1 className="font-bold text-4xl mb-10">Popular Destinations</h1>
      <div className="grid md:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <div className="">
            <Image className="rounded-md h-64 w-64" alt="" src={destination.img} />
            <h1 className="text-xl font-semibold">{destination.name}</h1>
            <p className="w-64">{destination.description}</p>
            <div className="font-semibold">{destination.stars}⭐</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
