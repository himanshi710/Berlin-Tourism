import { Routes, Route, Link } from "react-router-dom";

// Global Components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import Packages from "./pages/Packages";
import Vehicles from "./pages/Vehicles";
import Hotels from "./pages/Hotels";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop />

      <TopBar />

      <Navbar />

      <main className="site-main">
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* DESTINATIONS */}
          <Route
            path="/destinations"
            element={<Destinations />}
          />

          <Route
            path="/destinations/:slug"
            element={<DestinationDetail />}
          />

          {/* TOURS */}
          <Route
            path="/tours"
            element={<Tours />}
          />

          <Route
            path="/tours/:slug"
            element={<TourDetail />}
          />

          {/* PACKAGES */}
          <Route
            path="/packages"
            element={<Packages />}
          />

          {/* VEHICLES */}
          <Route
            path="/vehicles"
            element={<Vehicles />}
          />

          {/* HOTELS */}
          <Route
            path="/hotels"
            element={<Hotels />}
          />

          {/* EXPERIENCES */}
          <Route
            path="/experiences"
            element={<Experiences />}
          />

          {/* GALLERY */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />

          {/* BLOG */}
          <Route
            path="/blog"
            element={<Blog />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="not-found-page">
                <div className="container text-center">
                  <span className="eyebrow">
                    BERLIN / 404
                  </span>

                  <h1>
                    Lost in Berlin.
                  </h1>

                  <p>
                    The page you're looking for doesn't exist.
                  </p>

                  <Link
                    to="/"
                    className="btn-noir"
                  >
                    Back Home
                  </Link>
                </div>
              </div>
            }
          />

        </Routes>
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}

export default App;