import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Landing/About";
import Roles from "./components/Landing/Roles";
import Footer from "./components/Landing/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar />
      <Hero />
      <About />
      <Roles />
      <Footer />
    </div>
  );
}
