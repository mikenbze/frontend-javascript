import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Declare the lightbox property on the global window object.
 */
declare global {
  interface Window {
    lightbox: {
      option(options: {
        resizeDuration?: number;
        wrapAround?: boolean;
        fadeDuration?: number;
        imageFadeDuration?: number;
        maxWidth?: number;
        maxHeight?: number;
      }): void;
    };
  }
}

export default function Showcase() {
  useEffect(() => {
    if (window.lightbox) {
      window.lightbox.option({
        resizeDuration: 200,
        wrapAround: true,
        fadeDuration: 300,
        imageFadeDuration: 300,
        maxWidth: 800,
        maxHeight: 600,
      });
    }
  }, []);

  const projects = [
    {
      src: "/images/showcase1.jpg",
      title: "Creative Dashboard Design",
    },
    {
      src: "/images/showcase2.jpg",
      title: "Modern UI Kit Sample",
    },
    {
      src: "/images/showcase3.jpg",
      title: "Team Collaboration Tool",
    },
    {
      src: "/images/showcase4.jpg",
      title: "Mobile App Interface",
    },
    {
      src: "/images/showcase5.jpg",
      title: "Custom Web Form Layout",
    },
    {
      src: "/images/showcase6.jpg",
      title: "Dynamic Chart Visualization",
    },
  ];

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
            Showcase
          </h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow py-12 px-6 max-w-7xl mx-auto">
        <p className="text-center text-white text-lg mb-10">
          Explore some of our creative work and projects below!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
            >
              <a
                href={item.src}
                data-lightbox="gallery"
                data-title={item.title}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
              </a>
              <div className="p-4 text-center text-green-900 font-medium">
                {item.title}
              </div>
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
