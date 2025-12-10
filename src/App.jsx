import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection"; // added
import ChefRecommended from "./components/ChefRecommended";
import UpcomingEvent from "./components/UpcomingEvent";
import Footer from "./components/Footer";
import { MenuItems } from "./Page/MenuItems";
import OrderSummary from "./Page/OrderSummary";
import { Reservation } from "./Page/Reservation";
import OrderHistory from "./Page/OrderHistory";
import About from "./Page/About";
import Events from "./Page/Events";
import Contact from "./Page/Contact";

import { AuthProvider } from "./context/AuthContext";
import Login from "./Page/Login";
import Register from "./Page/Register";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  return (
    <Router>
      <AuthProvider>
        <Navbar cartCount={cartItems.length} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <ChefRecommended />
                <UpcomingEvent />
              </>
            }
          />
          <Route path="/menu" element={<MenuItems onAddToCart={handleAddToCart} />} />
          <Route
            path="/order"
            element={<OrderSummary items={cartItems} setItems={setCartItems} />}
          />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
