import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = ({ toggleSidebarPosition, sidebarOnLeft }: { toggleSidebarPosition: () => void, sidebarOnLeft: boolean }) => {
  return (
    <nav className="fixed z-50 flex justify-between items-center w-full bg-dark-1 px-6 py-4 lg:px-10 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="LearnMeet logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          LearnMeet
        </p>
      </Link>
      <div className="flex gap-5">
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" checked={!sidebarOnLeft} onChange={toggleSidebarPosition} />
            <div className="w-14 h-8 bg-gray-800 rounded-full peer dark:bg-gray-900 peer-checked:bg-blue-800 peer-focus:ring-4 peer-focus:ring-blue-600 dark:peer-focus:ring-blue-900">
              <div className={`dot absolute left-1 top-1 bg-blue-600 w-6 h-6 rounded-full transition flex items-center justify-center ${!sidebarOnLeft ? 'translate-x-6' : ''}`}>
                <span className="text-xs font-bold text-white">{!sidebarOnLeft ? 'R' : 'L'}</span>
              </div>
            </div>
          </label>
        </div>

        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
        <MobileNav />
        
      </div>
    </nav>
  );
};

export default Navbar;
