"use client"

import Link from "next/link";


import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image from "next/image" if not already imported
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<any | null>(null); // Change the type to 'any' or a more specific type for providers

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);


  return (
    <div className="sm:flex hidden">
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" passHref={true}>
            <div className="black_btn">Create Post</div>
          </Link>

          <button
            type="button"
            onClick={() => {
              signOut();
            }}
            className="outline_btn"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider: any) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="black_btn"
              >
                Sign in
              </button>
            ))}
        </>
      )}

      <header className="bg-black p-2">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-white text-3xl font-bold">
              <span className="text-yellow-400">Get</span>By
            </h1>
          </Link>
          <nav className="space-x-4 md:space-x-6">
            <Link
              href="/discover"
              className="text-white hover:text-yellow-400 font-semibold"
            >
              Discover
            </Link>
            <button className="bg-yellow-400 border border-yellow-400 rounded-md p-1.5 font-semibold hover:bg-yellow-500">
              Start Your Journey
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;

