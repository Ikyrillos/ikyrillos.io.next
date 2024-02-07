/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export const colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */
export const info = {
  avatar:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-4b69b.appspot.com/o/417187035_7075730672509823_2675574763314932070_n.jpg?alt=media&token=3dc79505-dad1-4d8a-a8ec-9e6bbfb90e52", // the path to your image. I recommend importing it at the top of this file.
  firstName: "Kyrillos",
  lastName: "Maher",
  initials: "KM", // the example uses first and last, but feel free to use three or more if you like.
  position: "A Flutter Developer & instructor | React Developer",
  completedProjects: 6,
  yeasOfExperience: 2,
  // selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  cv: "https://drive.google.com/file/d/1iXT1udGVY1-rT2l1HmtRDpolS-P25EUQ/view?usp=sharing",
  email: "kyrillosmaherfekri@gmail.com",
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "💻",
      text: "Flutter Developer @ InCode",
    },
    {
      emoji: "🇪🇬",
      text: "Based in Egypt",
    },
    {
      emoji: "✉️",
      text: "kyrillosmaherfekri@gmail.com",
    },
    {
      emoji: "🧑‍💻",
      text: "Passionate about teaching and sharing knowledge",
    },
  ],
  socials: [
    {
      link: "https://www.facebook.com/IKyrillosMaher/",
      icon: "fa fa-facebook",
      label: "facebook",
    },

    {
      link: "https://github.com/Ikyrillos",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/kyrillosmaher/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm a passionate mobile app developer specializing in Flutter, Dart and React. I've crafted innovative solutions at InCode, integrating RESTful APIs with custom UIs. Committed to continuous learning, I stay updated on the latest trends to deliver exceptional mobile applications. Excited to grow and exceed expectations in the dynamic world of app development!",
  skills: {
    proficientWith: [
      "Flutter",
      "Dart",
      "redux",
      "react",
      "git",
      "github",
      "html5",
      "figma",
    ],
    exposedTo: [
      "css",
      "tailwind",
      "nodejs",
      "python",
      "Linux",
      "firebase",
      "Sql",
      "noSql",
    ],
  },
  hobbies: [
    {
      label: "Poetry",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "Coding",
      emoji: "💻",
    },
    {
      label: "writing",
      emoji: "✍️",
    },
    {
      label: "learning",
      emoji: "📚",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
};
