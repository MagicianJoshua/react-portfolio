import image from "../../public/FourCatering.png";
import jateimg from "../../public/JATE.png";
import dailyPlanner from "../../public/daily-planner.png";
import moodMusic from "../../public/MoodMusic.png";

const ProjectInfo = [
  {
    title: "MoodMusic.com",
    desc: "A app that gives you a playlist depending on your current weather.",
    link: "https://magicianjoshua.github.io/weatherMusic/",
    gitRepo: "https://github.com/MagicianJoshua/weatherMusic",
    img: moodMusic,
    id: 1,
  },
  {
    title: "Four-Catering",
    desc: "A mock Catering website",
    link: "https://four-catering-cb97eed1384a.herokuapp.com/",
    gitRepo: "https://github.com/Valleyleaf/Catering-Application",
    img: image,
    id: 2,
  },

  {
    title: "TechBlog",
    desc: "A basic blog website that i will be adding more functionality too in the future",
    link: "https://handlebars-tech-blog-ef34a42dfcae.herokuapp.com/",
    gitRepo: "https://github.com/MagicianJoshua/Tech-Blog-Handlebars",
    img: "https://github.com/MagicianJoshua/Tech-Blog-Handlebars/blob/main/Techblog.png?raw=true",
    id: 3,
  },

  {
    title: "Weather App",
    desc: "A basic Weather app.",
    link: "https://magicianjoshua.github.io/weather-app-challenge/",
    gitRepo: "https://github.com/MagicianJoshua/weather-app-challenge",
    img: "https://github.com/MagicianJoshua/weather-app-challenge/raw/main/Assets/Images/WeatherReport.png",
    id: 4,
  },
  {
    title: "Just another text editor",
    desc: "This app was created in order for me to test my PWA development skills, and can be downloaded on your pc. It is just a simple text editor app that saves what you write on the site with IndexDB",
    link: "https://text-editor-pwa-jate-596bdba3175e.herokuapp.com/",
    gitRepo: "https://github.com/MagicianJoshua/Text-Editor-PWA",
    img: jateimg,
    id: 5,
  },
  {
    title: "Daily Planner",
    desc: "An app you can use to plan out your day!",
    link: "https://magicianjoshua.github.io/daily-planner/",
    gitRepo: "https://github.com/MagicianJoshua/daily-planner",
    img: dailyPlanner,
    id: 6,
  },
];

export { ProjectInfo };
