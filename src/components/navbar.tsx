import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 h-14 flex justify-between px-8 items-center gap-7 ">
      <Link href={"/"}>
        <h1 className="font-bold text-white text-xl">MovieID</h1>
      </Link>

      <div className="flex items-center w-1/2 gap-2">
        <Input type="email" placeholder="Search" className="focus-visible:ring-transparent h-9" />
      </div>

      <div className="flex gap-6 items-center">
        <ol className="text-white font-sans">Upcoming</ol>
        <ol className="text-white font-sans">Genre</ol>
        <Button className="text-white font-sans size-auto bg-violet-800 hover:bg-indigo-500">
          <LogIn className="mr-2 h-4 w-4" /> Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
