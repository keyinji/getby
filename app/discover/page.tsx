import React from "react";
import Image from "next/image";
import travel from "../../components/images/travel.jpg";

const destinations = [
  {
    id: 1,
    destination: "Paris, France",
    description:
      "Paris, the City of Lights, is renowned for its iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Explore charming streets, enjoy world-class cuisine, and visit historic sites like the Palace of Versailles. Known for art, fashion, and romance, Paris is a dream destination for travelers.",
  },
  {
    id: 2,
    destination: "Rome, Italy",
    description:
      "Rome, the Eternal City, beckons with ancient ruins like the Colosseum and Roman Forum. Delight in Italian cuisine, toss a coin at the Trevi Fountain, and visit the Vatican City for St. Peter's Basilica and the Sistine Chapel's frescoes. Experience the rich history and art of Rome.",
  },
  {
    id: 3,
    destination: "Barcelona, Spain",
    description:
      "Barcelona offers unique architecture by Antoni Gaudí, including the Sagrada Família and Park Güell. Wander through the Gothic Quarter, relax on sandy beaches, and indulge in tapas and sangria. This vibrant city blends art, culture, and seaside charm.",
  },
  {
    id: 4,
    destination: "New York City, USA",
    description:
      "New York City, the Big Apple, is a bustling metropolis with iconic attractions like Times Square, Central Park, and the Statue of Liberty. Enjoy Broadway shows, diverse cuisine, and cultural hotspots. From museums to skyscrapers, NYC never ceases to amaze.",
  },
  {
    id: 5,
    destination: "Tokyo, Japan",
    description:
      "Tokyo, the futuristic capital of Japan, captivates with a blend of tradition and modernity. Explore ancient temples, bustling markets, and high-tech districts like Akihabara. Savor sushi and ramen, witness cherry blossoms, and embrace the unique Japanese culture.",
  },
  {
    id: 6,
    destination: "London, United Kingdom",
    description:
      "London, the British capital, offers a mix of history, royalty, and contemporary culture. Visit Buckingham Palace, the Tower of London, and the British Museum. Enjoy West End theater, explore charming neighborhoods, and experience the diverse London lifestyle.",
  },
  {
    id: 7,
    destination: "Dubai, United Arab Emirates",
    description:
      "Dubai, a dazzling desert city, boasts stunning skyscrapers like the Burj Khalifa and luxurious shopping at the Dubai Mall. Experience the Arabian hospitality, venture into the desert dunes, and enjoy thrilling attractions at Dubai Parks and Resorts.",
  },
  {
    id: 8,
    destination: "Istanbul, Turkey",
    description:
      "Istanbul, where East meets West, offers the Hagia Sophia, Blue Mosque, and Topkapi Palace, reflecting its rich history. Explore the Grand Bazaar, take a cruise on the Bosphorus, and taste Turkish delights in this enchanting city.",
  },
  {
    id: 9,
    destination: "Bangkok, Thailand",
    description:
      "Bangkok, Thailand's vibrant capital, entices with ornate temples, bustling markets, and bustling street life. Indulge in delicious street food, visit the Grand Palace, and cruise along the Chao Phraya River for a glimpse of Bangkok's diverse culture.",
  },
  {
    id: 10,
    destination: "Singapore",
    description:
      "Singapore, the modern city-state, offers a harmonious blend of culture, cuisine, and architecture. Visit Gardens by the Bay, Marina Bay Sands, and Sentosa Island's attractions. Immerse yourself in the multicultural experience of Singapore's diverse neighborhoods.",
  },
  {
    id: 11,
    destination: "Sydney, Australia",
    description:
      "Sydney, Australia's harbor city, delights with the Sydney Opera House, Sydney Harbour Bridge, and Bondi Beach. Embrace the laid-back Aussie lifestyle, enjoy world-class dining, and explore the beauty of the Blue Mountains nearby.",
  },
  {
    id: 12,
    destination: "Amsterdam, Netherlands",
    description:
      "Amsterdam charms with its picturesque canals, historic architecture, and world-class museums like the Rijksmuseum and Van Gogh Museum. Experience the vibrant nightlife, visit Anne Frank House, and explore the rich cultural heritage of the Netherlands.",
  },
  {
    id: 13,
    destination: "Bali, Indonesia",
    description:
      "Bali, the Island of the Gods, offers stunning beaches, lush rice terraces, and ancient temples like Uluwatu and Tanah Lot. Discover Balinese art and dance, relax in luxury resorts, and experience the serenity of Bali's natural beauty.",
  },
  {
    id: 14,
    destination: "Rio de Janeiro, Brazil",
    description:
      "Rio de Janeiro, the Marvelous City, captivates with its famous Copacabana and Ipanema beaches, Sugarloaf Mountain, and Christ the Redeemer statue. Immerse yourself in samba rhythms, indulge in Brazilian cuisine, and experience the vibrant carnival atmosphere.",
  },
  {
    id: 15,
    destination: "Cairo, Egypt",
    description:
      "Cairo, the bustling capital of Egypt, houses the iconic Pyramids of Giza, Sphinx, and the Egyptian Museum. Discover ancient pharaohs' history, sail on the Nile River, and immerse yourself in Cairo's rich culture and traditions.",
  },
  {
    id: 16,
    destination: "Cape Town, South Africa",
    description:
      "Cape Town, nestled between Table Mountain and the ocean, offers breathtaking landscapes, like Cape Point and Robben Island. Enjoy vineyards in Stellenbosch, encounter wildlife in Kruger National Park, and experience the multicultural vibe of Cape Town.",
  },
  {
    id: 17,
    destination: "Vienna, Austria",
    description:
      "Vienna, Austria's imperial capital, boasts magnificent palaces like Schönbrunn and Hofburg. Indulge in classical music concerts, visit the State Opera House, and savor Viennese coffeehouse culture and delicious pastries.",
  },
  {
    id: 18,
    destination: "Prague, Czech Republic",
    description:
      "Prague, the City of a Hundred Spires, captivates with its fairytale-like architecture, including Prague Castle and Charles Bridge. Discover the Astronomical Clock, wander through cobbled streets, and enjoy Czech beer and traditional cuisine.",
  },
  {
    id: 19,
    destination: "Athens, Greece",
    description:
      "Athens, the cradle of Western civilization, offers iconic landmarks like the Acropolis and Parthenon. Stroll through Plaka, the old town, indulge in Greek delicacies, and experience the blend of history and modernity in Athens.",
  },
  {
    id: 20,
    destination: "San Francisco, USA",
    description:
      "San Francisco, a hilly city by the bay, entices with the Golden Gate Bridge, Alcatraz Island, and Fisherman's Wharf. Explore the vibrant neighborhoods, ride the iconic cable cars, and experience San Francisco's bohemian culture.",
  },
  {
    id: 21,
    destination: "Los Angeles, USA",
    description:
      "Los Angeles, the entertainment capital, offers Hollywood glamour, Santa Monica Pier, and Universal Studios. Explore art at the Getty Center, shop on Rodeo Drive, and experience the diverse cultural scenes of LA.",
  },
  {
    id: 22,
    destination: "Las Vegas, USA",
    description:
      "Las Vegas, the city of entertainment, dazzles with its iconic casinos, themed resorts, and extravagant shows. Experience the Las Vegas Strip's glitz, visit the Grand Canyon nearby, and enjoy the vibrant nightlife of Sin City.",
  },
  {
    id: 23,
    destination: "Hong Kong",
    description:
      "Hong Kong, a dynamic metropolis, impresses with its impressive skyline, Victoria Peak, and bustling street markets. Enjoy traditional dim sum, take a boat ride in Victoria Harbour, and embrace the fusion of East and West cultures.",
  },
  {
    id: 24,
    destination: "Macau, China",
    description:
      "Macau, the 'Las Vegas of Asia,' delights with its grand casinos, Senado Square, and the Ruins of St. Paul's. Explore the unique blend of Portuguese and Chinese influences and savor Macanese cuisine.",
  },
  {
    id: 25,
    destination: "Shanghai, China",
    description:
      "Shanghai, China's modern metropolis, boasts futuristic skyscrapers like the Oriental Pearl Tower and the historic Bund. Shop on Nanjing Road, experience traditional Yu Garden, and savor authentic Shanghainese dishes.",
  },
  {
    id: 26,
    destination: "Beijing, China",
    description:
      "Beijing, China's capital, is home to the Great Wall, Forbidden City, and Tiananmen Square. Experience traditional hutongs, enjoy Peking duck, and explore the ancient wonders of Beijing's imperial past.",
  },
  {
    id: 27,
    destination: "Seoul, South Korea",
    description:
      "Seoul, the dynamic capital of South Korea, offers ancient palaces like Gyeongbokgung, futuristic architecture, and vibrant street markets. Savor Korean barbecue, embrace K-pop culture, and relax in traditional jjimjilbang spas.",
  },
  {
    id: 28,
    destination: "Mumbai, India",
    description:
      "Mumbai, India's financial capital, pulsates with Bollywood glamour, historical sites like the Gateway of India, and bustling markets. Explore Elephanta Caves, taste flavorful street food, and immerse yourself in the vibrant spirit of Mumbai.",
  },
  {
    id: 29,
    destination: "Delhi, India",
    description:
      "Delhi, India's capital, boasts historical landmarks like the Red Fort, India Gate, and Qutub Minar. Discover the spiritual ambiance at Lotus Temple and Akshardham Temple. Indulge in Delhi's diverse street food and shop at bustling bazaars.",
  },
  {
    id: 30,
    destination: "Marrakech, Morocco",
    description:
      "Marrakech, Morocco's vibrant city, allures with its bustling souks, historic medina, and the iconic Jardin Majorelle. Sip mint tea at a riad, experience Moroccan hammams, and explore the cultural richness of Marrakech.",
  },
  {
    id: 31,
    destination: "Moscow, Russia",
    description:
      "Moscow, Russia's capital, boasts grand architecture like the Kremlin, Red Square, and St. Basil's Cathedral. Visit the Bolshoi Theatre, explore GUM Department Store, and experience the mix of history and modernity in Moscow.",
  },
  {
    id: 32,
    destination: "St. Petersburg, Russia",
    description:
      "St. Petersburg, Russia's cultural gem, captivates with the State Hermitage Museum, Winter Palace, and the Peter and Paul Fortress. Stroll along Nevsky Prospekt, enjoy a boat tour along the canals, and revel in St. Petersburg's artistic heritage.",
  },
  {
    id: 33,
    destination: "Budapest, Hungary",
    description:
      "Budapest, Hungary's capital, impresses with the stunning Parliament Building, Buda Castle, and Széchenyi Thermal Bath. Take a cruise on the Danube River, savor Hungarian goulash, and experience the charm of Budapest's historic sites.",
  },
  {
    id: 34,
    destination: "Berlin, Germany",
    description:
      "Berlin, Germany's vibrant capital, offers historical sites like the Brandenburg Gate, Berlin Wall, and Museum Island. Experience Berlin's street art, relax in Tiergarten Park, and embrace the city's eclectic arts and culture scene.",
  },
  {
    id: 35,
    destination: "Munich, Germany",
    description:
      "Munich, Germany's charming city, captivates with the Marienplatz, Nymphenburg Palace, and the Oktoberfest celebration. Enjoy traditional beer gardens, visit the BMW Museum, and experience the Bavarian hospitality and culture of Munich.",
  },
  {
    id: 36,
    destination: "Hamburg, Germany",
    description:
      "Hamburg, Germany's maritime city, offers stunning architecture like the Elbphilharmonie, vibrant neighborhoods, and the historic Speicherstadt. Enjoy a harbor boat tour, indulge in fresh seafood, and experience Hamburg's lively music and theater scene.",
  },
  {
    id: 37,
    destination: "Jerusalem, Israel",
    description:
      "Jerusalem, a holy city for three major religions, captivates with religious sites like the Western Wall, Dome of the Rock, and Church of the Holy Sepulchre. Explore the Old City's narrow alleys, savor Middle Eastern cuisine, and experience the spiritual ambiance of Jerusalem.",
  },
  {
    id: 38,
    destination: "Petra, Jordan",
    description:
      "Petra, the Rose City, amazes with its ancient rock-cut architecture, including the Treasury and Monastery. Walk through the Siq canyon, hike to the High Place of Sacrifice, and discover the archaeological wonders of Petra.",
  },
  {
    id: 39,
    destination: "Cusco, Peru",
    description:
      "Cusco, Peru's historic gem, was once the capital of the Inca Empire. Visit the ancient ruins of Machu Picchu, explore the Sacred Valley, and immerse yourself in the vibrant Andean culture and traditions of Cusco.",
  },
  {
    id: 40,
    destination: "Rio de Janeiro, Brazil",
    description:
      "Rio de Janeiro, the Marvelous City, captivates with its famous Copacabana and Ipanema beaches, Sugarloaf Mountain, and Christ the Redeemer statue. Immerse yourself in samba rhythms, indulge in Brazilian cuisine, and experience the vibrant carnival atmosphere.",
  },
  {
    id: 41,
    destination: "Buenos Aires, Argentina",
    description:
      "Buenos Aires, Argentina's capital, exudes European charm with elegant architecture, tango dancing, and bustling markets. Enjoy a tango show, visit the historic Recoleta Cemetery, and savor Argentine steak and Malbec wine.",
  },
  {
    id: 42,
    destination: "Santiago, Chile",
    description:
      "Santiago, Chile's modern capital, impresses with the Andes Mountain backdrop, historic Plaza de Armas, and the bustling Mercado Central. Taste Chilean wine in nearby vineyards, explore the neighborhoods, and experience Santiago's vibrant cultural scene.",
  },
  {
    id: 43,
    destination: "Vancouver, Canada",
    description:
      "Vancouver, a picturesque city on the Pacific coast, offers stunning nature, like Stanley Park, Granville Island, and Grouse Mountain. Explore diverse neighborhoods, enjoy outdoor activities, and experience the West Coast's relaxed lifestyle.",
  },
  {
    id: 44,
    destination: "Toronto, Canada",
    description:
      "Toronto, Canada's diverse metropolis, impresses with the CN Tower, Royal Ontario Museum, and vibrant Distillery District. Explore the multicultural neighborhoods, taste diverse cuisine, and experience Toronto's lively arts and entertainment scene.",
  },
  {
    id: 45,
    destination: "Montreal, Canada",
    description:
      "Montreal, Canada's cultural hub, entices with historic architecture, like Notre-Dame Basilica and Old Montreal. Experience Montreal's festivals, indulge in French cuisine, and embrace the city's artistic and bilingual flair.",
  },
  {
    id: 46,
    destination: "Dubai, UAE",
    description:
      "Dubai, a dazzling desert city, boasts stunning skyscrapers like the Burj Khalifa and luxurious shopping at the Dubai Mall. Experience the Arabian hospitality, venture into the desert dunes, and enjoy thrilling attractions at Dubai Parks and Resorts.",
  },
  {
    id: 47,
    destination: "Abu Dhabi, UAE",
    description:
      "Abu Dhabi, the UAE's capital, offers grand architecture like the Sheikh Zayed Grand Mosque and luxurious resorts on Yas Island. Visit Louvre Abu Dhabi, experience Arabian traditions, and immerse yourself in the opulent charm of Abu Dhabi.",
  },
  {
    id: 48,
    destination: "Bangkok, Thailand",
    description:
      "Bangkok, Thailand's vibrant capital, entices with ornate temples, bustling markets, and bustling street life. Indulge in delicious street food, visit the Grand Palace, and cruise along the Chao Phraya River for a glimpse of Bangkok's diverse culture.",
  },
  {
    id: 49,
    destination: "Phuket, Thailand",
    description:
      "Phuket, Thailand's tropical paradise, boasts stunning beaches, vibrant nightlife, and water activities like snorkeling and island hopping. Relax on Patong Beach, visit Big Buddha, and experience the lively atmosphere of Phuket's beach towns.",
  },
  {
    id: 50,
    destination: "Chiang Mai, Thailand",
    description:
      "Chiang Mai, Thailand's cultural gem in the north, captivates with ancient temples, lush nature, and vibrant night markets. Explore Doi Suthep Temple, participate in a cooking class, and immerse yourself in the warm hospitality of Chiang Mai.",
  },
];

const Page = () => {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <h1 className="p-10 text-4xl font-bold text-white">
        Explore Our Most Popular Destinations
      </h1>
      {destinations.map((destination) =>
        destination.id % 2 != 0 ? (
          <div className="flex items-center justify-center p-10">
            <Image className=" border bg-white p-1 max-w-md" src={travel} alt="" />
            <div className="flex-col text-white max-w-lg p-4">
              <h1 className="text-xl font-bold">{destination.destination}</h1>
              <p>{destination.description}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center p-10">
            <div className="flex-col text-white max-w-lg p-4">
              <h1 className="text-xl font-bold">{destination.destination}</h1>
              <p>{destination.description}</p>
            </div>
            <Image className=" border bg-white p-1 max-w-md" src={travel} alt="" />
          </div>
        )
      )}
    </div>
  );
};

export default Page;
