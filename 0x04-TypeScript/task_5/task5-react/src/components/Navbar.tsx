import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Michael Muriungi</h1>
    <ul className="flex space-x-6 text-lg font-medium">
      <li>
        <Link to="/" className="hover:text-green-300">Home</Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-green-300">About Us</Link>
      </li>
      <li>
        <Link to="/showcase" className="hover:text-green-300">Showcase</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
