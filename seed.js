const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Framework = require("./models/Framework");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected for seeding"))
  .catch((err) => console.log(err));

const frameworks = [
  // UI Libraries
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    ratings: [],
  },
  {
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    ratings: [],
  },
  {
    name: "Vue.js",
    description: "The Progressive JavaScript Framework.",
    ratings: [],
  },
  {
    name: "Svelte",
    description: "Cybernetically enhanced web apps.",
    ratings: [],
  },
  {
    name: "Ember.js",
    description: "A framework for ambitious web developers.",
    ratings: [],
  },

  // Additional UI Libraries
  {
    name: "Preact",
    description: "A fast 3kB alternative to React with the same modern API.",
    ratings: [],
  },
  {
    name: "Inferno",
    description:
      "An extremely fast, React-like JavaScript library for building user interfaces.",
    ratings: [],
  },
  {
    name: "Mithril",
    description:
      "A modern client-side JavaScript framework for building Single Page Applications.",
    ratings: [],
  },
  {
    name: "Aurelia",
    description: "A framework for building next-generation web applications.",
    ratings: [],
  },
  {
    name: "Backbone.js",
    description: "Provides the minimal structure needed for web applications.",
    ratings: [],
  },

  // Full-Stack Frameworks
  {
    name: "Next.js",
    description:
      "A React framework for server-side rendering and static site generation.",
    ratings: [],
  },
  {
    name: "Nuxt.js",
    description:
      "A framework based on Vue.js for creating server-rendered applications.",
    ratings: [],
  },
  {
    name: "Gatsby",
    description: "A React-based, GraphQL powered, static site generator.",
    ratings: [],
  },
  {
    name: "NestJS",
    description:
      "A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.",
    ratings: [],
  },
  {
    name: "Meteor",
    description:
      "A full-stack platform for building web and mobile apps in pure JavaScript.",
    ratings: [],
  },

  // Mobile Frameworks
  {
    name: "React Native",
    description: "A framework for building native apps using React.",
    ratings: [],
  },
  {
    name: "Ionic",
    description:
      "A cross-platform UI toolkit for building web, mobile, and desktop apps.",
    ratings: [],
  },
  {
    name: "NativeScript",
    description:
      "A framework for building native mobile apps using JavaScript and TypeScript.",
    ratings: [],
  },
  {
    name: "Quasar Framework",
    description:
      "A Vue.js framework for building high-performance web, mobile, and desktop apps.",
    ratings: [],
  },

  // Other Frameworks and Libraries
  {
    name: "D3.js",
    description:
      "A JavaScript library for producing dynamic, interactive data visualizations in web browsers.",
    ratings: [],
  },
  {
    name: "Three.js",
    description:
      "A JavaScript library that makes creating 3D graphics on the web easier.",
    ratings: [],
  },
  {
    name: "Chart.js",
    description: "A simple yet flexible JavaScript charting library.",
    ratings: [],
  },
  {
    name: "Redux",
    description: "A predictable state container for JavaScript apps.",
    ratings: [],
  },
  {
    name: "RxJS",
    description: "A library for reactive programming using Observables.",
    ratings: [],
  },
  {
    name: "Lodash",
    description:
      "A modern JavaScript utility library delivering modularity, performance, & extras.",
    ratings: [],
  },
  {
    name: "Underscore.js",
    description:
      "A JavaScript library that provides functional programming helpers.",
    ratings: [],
  },
  {
    name: "JQuery",
    description: "A fast, small, and feature-rich JavaScript library.",
    ratings: [],
  },
  {
    name: "Aphrodite",
    description: "A CSS-in-JS library for styling React components.",
    ratings: [],
  },
  {
    name: "Emotion",
    description: "A library for writing CSS styles with JavaScript.",
    ratings: [],
  },
  {
    name: "Styled Components",
    description:
      "A library for styling React components using tagged template literals.",
    ratings: [],
  },
  {
    name: "xState",
    description:
      "A library for managing state using finite state machines and statecharts.",
    ratings: [],
  },
  {
    name: "MobX",
    description:
      "A library for managing and propagating state in JavaScript applications.",
    ratings: [],
  },
  {
    name: "Apollo Client",
    description:
      "A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.",
    ratings: [],
  },
];

const seedDB = async () => {
  await Framework.deleteMany({});
  await Framework.insertMany(frameworks);
  console.log("Database seeded with frameworks!");
};

seedDB().then(() => {
  mongoose.connection.close();
});
