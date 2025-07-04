"use client";

export default function Navbar() {
  return (
    <nav className="w-full h-full bg-transparent px-4 py-3 flex items-center justify-between">
      <div className="text-3xl font-semibold pl-2">Ethan's Website</div>
      <ul className="flex text-lg space-x-8 pr-4">
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
