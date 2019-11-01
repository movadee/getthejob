"use strict";

import Home from "./pages/home.js";
import EmployeeVsContractor from "./pages/employee-vs-contractor.js";

import Navbar from "./components/navbar.js";

// List of supported routes
const routes = {
  "/": Home,
  "/employee-vs-contractor": EmployeeVsContractor
};

// The router code. Takes a URL, checks against the list of supported routes
// and then renders the corresponding content page
const router = async () => {
  // Lazy load view element:
  const navbar = null || document.getElementById("navbar");
  const content = null || document.getElementById("container");

  // Render the navbar of the page
  navbar.innerHTML = await Navbar.render();
  await Navbar.after_render();

  let parsedURL = location.hash.slice(1).toLowerCase() || "/";

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, send user to a home page instead
  let page = routes[parsedURL] ? routes[parsedURL] : Home;
  content.innerHTML = await page.render();
  await page.after_render();
};

// Listen on hash change:
window.addEventListener("hashchange", router);

// Listen on page load:
window.addEventListener("load", router);
