import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-green-400 to-green-700 min-h-screen flex flex-col font-sans">
      
      {/* NAVIGATION */}
      <nav className="bg-green-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Michael Muriungi</h1>
        <ul className="flex space-x-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-green-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/showcase" className="hover:text-green-300">
              Showcase
            </Link>
          </li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <header className="relative h-[53vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Welcome to Software Engineering
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white max-w-xl mx-auto">
            Exploring TypeScript, Tailwind CSS, and the joy of coding.
          </p>
          <a
            href="#main-content"
            className="mt-8 inline-block bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main
        id="main-content"
        className="flex-grow py-12 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white bg-opacity-80 rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 text-center"
            >
              <img
                src="/images/michael.jpg"
                alt="Michael"
                className="mx-auto mb-4 rounded-full shadow-lg w-40 h-40 object-cover"
              />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                SOFTWARE ENGINEERING IS FUN
              </h3>
              <h4 className="text-xl text-green-700 mb-2">
                What do you have to say Michael
              </h4>
              <p className="text-green-800 text-lg">
                Absolutely! I must say it is indeed fun!!
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white py-6 text-center">
        &copy; 2025 Michael Muriungi. All rights reserved.
      </footer>
    </div>
  );
}
