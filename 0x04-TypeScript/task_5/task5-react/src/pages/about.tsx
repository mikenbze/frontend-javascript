import { Link } from "react-router-dom";

export default function AboutUs() {
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
      <header className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center px-4">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow py-12 px-6 max-w-4xl mx-auto text-white text-lg">
        <p className="mb-6">
          Welcome to the About Us page! Here you can learn more about our
          journey, our passion for software engineering, and the technologies
          we love.
        </p>
        <p>
          We specialize in modern web development, exploring tools like
          TypeScript, Tailwind CSS, and innovative frameworks. Join us as we
          build amazing projects and share our knowledge.
        </p>
      </main>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white py-6 text-center">
        &copy; 2025 Michael Muriungi. All rights reserved.
      </footer>
    </div>
  );
}
