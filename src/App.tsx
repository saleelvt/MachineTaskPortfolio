import React, { Suspense, lazy, useState } from "react";
import Spinner from "./Spinner/spinner";
import "./globals.css";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Banner = lazy(() => import("./components/Banner"));
const Services = lazy(() => import("./components/Services"));
const AboutMe = lazy(() => import("./components/AboutMe"));
const ProjectSession = lazy(() => import("./components/ProjectSession"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export const App: React.FC = React.memo(() => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  return (
    <Suspense fallback={<Spinner />}>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-white text-sm font-quicksand dark:bg-gray-900 dark:text-white">
          <Suspense fallback={<Spinner />}>
            <Navbar darkModeOn={darkMode} setDarkMode={setDarkMode} />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <Banner darkModeOn={darkMode} />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <Services />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <AboutMe />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <ProjectSession />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </Suspense>
  );
});
