import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MenuItems.css";

export const MenuItems = ({ onAddToCart }) => {
  const menuData = {
    Appetizers: [
      { id: 1, name: "Bruschetta", price: 8, desc: "Grilled bread topped with tomatoes & basil.", img: "/image/Bruschetta.jpg" },
      { id: 2, name: "Garlic Bread", price: 6, desc: "Toasted bread with garlic and butter.", img: "/image/Garlic Bread.webp" },
      { id: 3, name: "Stuffed Mushrooms", price: 9, desc: "Cheese-stuffed mushrooms with herbs.", img: "/image/Stuffed Mushrooms.jpg" },
      { id: 4, name: "Mozzarella Sticks", price: 7, desc: "Crispy fried mozzarella with marinara.", img: "/image/Mozzarella Sticks.jpg" },
    ],
    "Main Course": [
      { id: 5, name: "Grilled Chicken", price: 15, desc: "Tender chicken breast with lemon butter sauce.", img: "/image/Grilled Chicken.jpg" },
      { id: 6, name: "Beef Steak", price: 18, desc: "Juicy grilled steak with peppercorn sauce.", img: "/image/Beef Steak.jpg" },
      { id: 7, name: "Pasta Alfredo", price: 13, desc: "Creamy Alfredo pasta with parmesan.", img: "/image/Pasta Alfredo.jpg" },
      { id: 8, name: "Vegetable Curry", price: 12, desc: "Mixed vegetables simmered in spicy curry.", img: "/image/Vegetable Curry.jpg" },
    ],
    Pizza: [
      { id: 9, name: "Margherita", price: 10, desc: "Classic pizza with mozzarella and basil.", img: "/image/Margherita.jpg" },
      { id: 10, name: "Pepperoni", price: 12, desc: "Loaded with pepperoni and cheese.", img: "/image/Pepperoni.jpg" },
      { id: 11, name: "BBQ Chicken", price: 13, desc: "BBQ sauce with grilled chicken.", img: "/image/BBQ Chicken.jpg" },
      { id: 12, name: "Veggie Delight", price: 11, desc: "Loaded with fresh vegetables.", img: "/image/Veggie Delight.jpg" },
    ],
    Drinks: [
      { id: 13, name: "Coca Cola", price: 3, desc: "Classic fizzy drink.", img: "/image/Coca Cola.jpg" },
      { id: 14, name: "Lemonade", price: 4, desc: "Freshly squeezed lemonade.", img: "/image/Lemonade.jpg" },
      { id: 15, name: "Iced Coffee", price: 5, desc: "Chilled coffee with milk.", img: "/image/Iced Coffee.jpg" },
      { id: 16, name: "Fruit Punch", price: 5, desc: "Blend of tropical fruits.", img: "/image/Fruit Punch.jpg" },
    ],
    Desserts: [
      { id: 17, name: "Cheesecake", price: 7, desc: "Creamy cheesecake with strawberry topping.", img: "/image/Cheesecake.jpeg" },
      { id: 18, name: "Chocolate Lava Cake", price: 8, desc: "Warm chocolate cake with molten center.", img: "/image/Chocolate Lava Cake.jpg" },
      { id: 19, name: "Ice Cream Sundae", price: 6, desc: "Vanilla ice cream with chocolate syrup.", img: "/image/Ice Cream Sundae.jpg" },
      { id: 20, name: "Brownie", price: 5, desc: "Rich chocolate brownie.", img: "/image/Brownie.jpg" },
    ],
  };

  return (
    <section className="menu-section py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">🍽️ View Our Menu</h2>
        <p className="text-muted mb-5">
          Discover our delicious selection crafted with passion by our chefs.
        </p>

        {Object.keys(menuData).map((category, index) => (
          <div key={index} className="menu-category mb-5">
            <h3 className="fw-semibold mb-4">{category}</h3>
            <div className="row">
              {menuData[category].map((item) => (
                <div key={item.id} className="col-md-3 mb-4">
                  <div className="card shadow-sm border-0 h-100">
                    <div className="img-wrapper">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="card-img-top rounded-top"
                      />
                      <span className="price-overlay">${item.price}</span>
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="text-muted small mb-3">{item.desc}</p>
                      <button
                        type="button"
                        className="btn btn-primary mt-auto"
                        onClick={() => onAddToCart && onAddToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
