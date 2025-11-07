import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { initGA, usePageTracking } from "./utils/analytics";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })));
const ArcadiaX = lazy(() => import("./pages/ArcadiaX").then(module => ({ default: module.ArcadiaX })));
const Gallery = lazy(() => import("./pages/Gallery").then(module => ({ default: module.Gallery })));
const Contact = lazy(() => import("./pages/Contact").then(module => ({ default: module.Contact })));
const Locations = lazy(() => import("./pages/Locations").then(module => ({ default: module.Locations })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  // Track page views
  usePageTracking();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  // Initialize Google Analytics on mount
  useEffect(() => {
    const gaId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (gaId) {
      initGA(gaId);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <main className="pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/arcadiax" element={<ArcadiaX />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/locations" element={<Locations />} />
              {/* Keep old route for backwards compatibility */}
              <Route path="/experience" element={<ArcadiaX />} />
              {/* 404 catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </Suspense>
        <Footer />
        <BackToTop />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
