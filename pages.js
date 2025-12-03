import { menu } from "./menu";

function setBodyClass(page) {
  document.body.className = ""; // reset all classes
  if (page) {
    document.body.classList.add(page); // only add if not empty
  }
}

function setDivClass(arg) {
  const content = document.getElementById("content");
  content.className = "";
  if (arg) {
    content.classList.add(arg); // only add if not empty
  }
}

// it takes "content" as an argument on the index.js
export const loadHome = (container) => {
  setBodyClass("home");
  setDivClass("")
  container.innerHTML = ``;
  container.innerHTML = `
            <section class="hero">
                <h1 class="hero-title">Food that speaks for itself.</h1>
                <!-- BIG text -->
                <p class="hero-subtitle">Fresh. Honest. Unforgettable.</p>
                <!-- SMALL text -->
                <button id="menu">Explore the Menu</button>
            </section>`;
  document.getElementById("menu").addEventListener('click', () => loadMenu(container));

}

export const loadMenu = (container) => {
  setBodyClass("");
  setDivClass("grid");
  container.innerHTML = ``;

  // loops through each objects 
  menu.forEach(dish => {
    container.innerHTML += `
    <div class="menu-card">
        <img src="images/${dish.img}" alt="${dish.name}" class="menu-image">
        <div class="menu-content">
          <div class="menu-header">
            <h3 class="menu-title">${dish.name}</h3>
            <span class="menu-price">$${dish.price}</span>
          </div>
          <p class="menu-description">
            ${dish.description}
          </p>
          <div class="accent-line"></div>
        </div>
      </div>
    `;
  });

}

export const loadAbout = (container) => {
  setBodyClass("about-body");
  setDivClass("about-content");
  container.innerHTML = ``;
  container.innerHTML = `
            <main class="about" role="main">
                <h1 class="h1-color">About Us</h1>
                <div class="underline"></div>
                <p>
                    Welcome to
                    <span class="highlight-text">Our Restaurant</span>
                    , where passion meets flavor. We are dedicated to bringing you the finest dishes crafted with fresh, locally sourced ingredients and a touch of culinary artistry.
                </p>
                <p>
                    Founded in 2010, our mission has always been to create a warm and inviting atmosphere where guests can enjoy exceptional food and memorable experiences. Our chefs blend traditional techniques with modern innovation to deliver a menu that delights every palate.
                </p>
                <p>
                    Whether you're joining us for a casual meal or a special occasion, we strive to provide outstanding service and a cozy ambiance that feels like home. Thank you for choosing us — we look forward to serving you soon!
                </p>
            </main>`;

}


export const loadContact = (container) => {
  setBodyClass("contact-body");
  setDivClass("contact-content");
  container.innerHTML = ``;
  container.innerHTML = `
            <div class="contact-card">
                <h2 class="contact-title">Contact Us</h2>
                <p class="contact-info">
                    📍 123 Flavor Street, Food City, 45678
                </p>
                <p class="contact-info">
                    📞 (123) 456-7890
                </p>
                <p class="contact-info">
                    ✉️ contact@yourrestaurant.com
                </p>
                <button class="contact-button">Send a Message</button>
            </div>`;

}