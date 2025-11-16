document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Aromatica Coffee Roasters", img: "1.png", price: 20000 },
      { id: 2, name: "Arbica Blend", img: "2.png", price: 25000 },
      { id: 3, name: "Robusta Brazil", img: "3.png", price: 30000 },
      { id: 4, name: "Aceh Gayo", img: "4.png", price: 35000 },
      { id: 5, name: "Sumatra Mandhelling", img: "5.png", price: 40000 },
    ],
  }));
});
