// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Jasmine Spies And Rewire
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to mock functions in ES Modules?
          </Text>
        </Slide>
        <CodeSlide
          textSize="0.8em"
          lang="js"
          code={require("!raw-loader!../assets/code-examples/accounts-service")}
          ranges={[
            { title: "accounts-service.js" },
            { loc: [0, 1] },

            { loc: [2, 3] },
            { loc: [3, 6] },
            { loc: [2, 7] },

            { loc: [8, 9] },
            { loc: [9, 12] },
            { loc: [8, 13] },

            { loc: [14, 15] },
            { loc: [15, 16] },
            { loc: [16, 19] },
            { loc: [14, 20] },
            { loc: [14, 20], title: "How to unit test it?" }
          ]}
        />
      </Deck>
    );
  }
}
