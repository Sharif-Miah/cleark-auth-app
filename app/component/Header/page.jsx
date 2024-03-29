import Link from "next/link";
import {UserButton, auth } from "@clerk/nextjs";


const Header = () => {
    const {userId} = auth();
    console.log(userId)

  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-blue-700">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg font-bold text-white uppercase">
              Clerk App
            </div>
          </Link>
        </div>
        <div className="flex items-center text-white">
          {
            !userId && (
                <>
            <Link
              href="/sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign Up
            </Link>
          </>
            )
          }
          {
            userId && (
                <Link href="/profile" className="mr-6">
                    Profile
                </Link>
            )
          }
          <div>
            <UserButton afterSignOutUrl='/'/>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
