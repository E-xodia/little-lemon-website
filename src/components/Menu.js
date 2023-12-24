import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

function Menu() {
  const handleOrder = (id) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your oder has been completed",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks Specials!!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button
                className="orderbtn"
                onClick={() => handleOrder(recipe.id)}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
