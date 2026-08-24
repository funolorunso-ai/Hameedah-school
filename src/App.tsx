import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseOfferings from "./components/CourseOfferings";
import ShapeFuture from "./components/ShapeFuture";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CourseOfferings />
      <ShapeFuture />
      <Footer />
    </div>
  );
}
export default App;
