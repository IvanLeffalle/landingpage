import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative">
      {/* Sutil glow en el fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-10 w-52 h-52 bg-pink-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-60 h-60 bg-purple-600 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div
        className={`max-w-xl mx-auto text-center transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Logo / Brand */}
        <div className="mb-10 flex flex-col items-center">
          <img
            src={logo}
            alt="Alelí Logo"
            className="w-24 h-24 mb-5 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-2">
            Alelí
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-gray-400 uppercase tracking-widest">
            Vestidos Modestos
          </h2>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Algo hermoso se <span className="text-pink-500">aproxima</span>...
          </h3>
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            Estamos preparando algo único para vos...
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mb-10">
          <div className="flex justify-center items-center space-x-3">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-3 h-3 bg-fuchsia-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>

        {/* Social / Contact Info */}
        <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-800">
          <p className="text-gray-400 mb-5 text-base">
            Mantente conectada para no perderte el gran lanzamiento.
          </p>

          <div className="flex justify-center gap-6 text-gray-500">
            <a
              href="https://www.instagram.com/vestidosaleli/"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775...z" />
              </svg>
              <span>@alelivestidos</span>
            </a>

            <a
              href="https://www.facebook.com/AleliVestidos"
              className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367...z" />
              </svg>
              <span>Facebook</span>
            </a>
          </div>

          <div className="mt-5 pt-5 border-t border-gray-700">
            <p className="text-xs text-gray-500">
              © 2025 Alelí Vestidos Modestos · Elegancia y modestia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
