import dnd from "../assets/dnd.png"
import pokebuddy from "../assets/Pokebuddy.png"
import css_generator from "../assets/css_generator.png"
import myturnorder from "../assets/myturnorder.png"
import download_estimator from "../assets/download_estimator.png"

export const projectInfo = [
  {
    id: 0,
    name: "My DnD",
    website: "https://jordandyck.github.io/My-DnD/",
    description: (
      <p>
        An interactive Dungeons & Dragons character sheet that allows users to create and manage
        their characters, track <span>stats</span>, <span>abilities</span>, <span>levels</span>,{" "}
        <span>inventory</span>, and export them to share on other devices. you can use premade
        classes/races, or create your own custom character. I spent over 2 years trying to make the
        most user friendly character manager I could. No confusing menus and easy to read
        descriptions.
      </p>
    ),
    image: dnd,
  },
  {
    id: 1,
    name: "Pokebuddy",
    website: "https://jordandyck.github.io/pokebuddy/",
    description: (
      <p>
        This site makes it easy for new players to get into pokemon as the game does not have a way
        to know the advantages and disadvantages of each pokemon, and looking up the type chart for
        each pokemon can be confusing and time consuming. With this site, everything is{" "}
        <span>simple to read</span>, with <span>clear visuals</span>.
      </p>
    ),
    image: pokebuddy,
  },
  {
    id: 2,
    name: "CSS Generator",
    website: "https://jordandyck.github.io/CSS-Generator/",
    description: (
      <p>
        A css generator that allows new programers to see the differents between{" "}
        <span>padding</span>,<span> margin</span>, and <span>border</span>. you can also use it to
        generate a box-shadow & border radius and copy the code to your own project.
      </p>
    ),
    image: css_generator,
  },
  {
    id: 3,
    name: "My Turn Order",
    website: "https://jordandyck.github.io/MyTurnOrder/",
    description: (
      <p>
        A turn order tracker for Dungeons & Dragons. It allows you to easily keep track of the turn
        order of combatants during combat. You can add players and enemies, and the site will
        automatically sort them by initiative. You can also add debuffs to each combatant that
        includes definitions. This site makes combat easier for the DM, as keeping track of turn
        order and conditions can be a hassle during combat.
      </p>
    ),
    image: myturnorder,
  },
  {
    id: 4,
    name: "Download Estimator",
    website: "https://jordandyck.github.io/Download-Estimator/",
    description: (
      <p>
        Allows users to estimate the time it will take to download a file based on their internet
        speed. Users can input the file size and their internet speed, and the site will calculate
        the estimated download time in a user-friendly format. It also explains the math behind the
        calculations.
      </p>
    ),
    image: download_estimator,
  },
]
