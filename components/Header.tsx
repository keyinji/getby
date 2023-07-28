import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-3xl font-bold">
            <span className="text-yellow-400">Get</span>By
          </h1>
        </Link>
        <nav className="space-x-4 md;space-x-6">
          <Link href="/discover" className="text-white hover:text-yellow-400 font-semibold">
            Discover
          </Link>
          <button className="bg-yellow-400 border border-yellow-400 rounded-md p-1.5 font-semibold hover:bg-yellow-500">
            Start Your Journey
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
