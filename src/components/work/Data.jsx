import todo from "../../assets/to-do.png";
import weatherApp from "../../assets/weather-app.png";
import eShopper from "../../assets/e-shopper.png";

export const projectsData = [
  {
    id: 1,
    image: todo,
    title: "To-Do List",
    git: "https://github.com/selva1399/to-do-app",
    live: "https://your-app-todo.netlify.app/",
    category: "frontend",
  },
  {
    id: 2,
    image: weatherApp,
    title: "Weather App",
    git: "https://github.com/selva1399/weather-app",
    live: "https://yourforecast-web-app.netlify.app/",
    category: "frontend",
  },
  {
    id: 3,
    image: eShopper,
    title: "E - Shopper",
    git: "https://github.com/selva1399/e-commerce-app",
    live: "https://e-shopper-x9zi.onrender.com/",
    category: "full-stack",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "frontend",
  },
  {
    name: "full-stack",
  },
];
