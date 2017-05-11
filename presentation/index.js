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
  Image,
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
  jasmine1: require("../assets/jasmine-1.jpg"),
  jasmine2: require("../assets/jasmine-2.jpg"),
  jasmine3: require("../assets/jasmine-3.jpg"),
  jasmine4: require("../assets/jasmine-4.jpg"),
  promise: require("../assets/promise.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#4F2022",
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
        <Slide transition={["fade"]}>
          <Heading>Babel</Heading>
          <Image src={images.jasmine1} />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading>Jasmine</Heading>
          <Image src={images.jasmine2} />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading>Jasmine Spy</Heading>
          <Image src={images.jasmine3} />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading>Rewire</Heading>
          <Image src={images.jasmine4} />
        </Slide>
        <Slide transition={["fade"]}>
          <Image src={images.promise} />
        </Slide>
        <CodeSlide
          textSize="0.8em"
          lang="js"
          code={require("!raw-loader!../assets/code-examples/accounts-service")}
          ranges={[
            { loc: [0, 0], title: "accounts-service.js" },

            { loc: [2, 3] },
            { loc: [8, 9] },
            { loc: [14, 15] },

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
            { loc: [0, 20] },
            { loc: [14, 20], title: "How to unit test it?" }
          ]}
        />
        <CodeSlide
          textSize="0.8em"
          lang="js"
          code={require("!raw-loader!../assets/code-examples/accounts-service.spec")}
          ranges={[
            { loc: [0, 0], title: "accounts-service.spec.js" },
            { loc: [130, 131] },
            { loc: [131, 132] },
            { loc: [130, 145] },

            { loc: [5, 6], title: "Success flow" },
            { loc: [41, 42] },
            { loc: [45, 46] },
            { loc: [55, 56] },
            { loc: [62, 63] },
            { loc: [75, 76] },
            { loc: [76, 77] },

            { loc: [0, 4] },
            { loc: [5, 6] },
            { loc: [6, 7] },
            { loc: [7, 9] },
            { loc: [9, 11] },

            { loc: [12, 13] },

            { loc: [14, 15] },
            { loc: [15, 17] },
            { loc: [17, 19] },
            { loc: [19, 22] },
            { loc: [13, 22] },

            { loc: [24, 25] },
            { loc: [25, 27] },
            { loc: [27, 29] },
            { loc: [29, 32] },
            { loc: [23, 32] },

            { loc: [33, 34] },

            { loc: [36, 40] },

            { loc: [41, 44] },

            { loc: [45, 46] },
            { loc: [46, 47] },
            { loc: [48, 49] },
            { loc: [49, 50] },
            { loc: [50, 52] },
            { loc: [52, 53] },
            { loc: [45, 54] },

            { loc: [55, 61] },

            { loc: [62, 63] },
            { loc: [63, 64] },
            { loc: [65, 66] },
            { loc: [66, 70] },
            { loc: [70, 72] },
            { loc: [72, 73] },
            { loc: [62, 74] },

            { loc: [75, 76] },
            { loc: [76, 77] },
            { loc: [77, 78] },
            { loc: [78, 80] },
            { loc: [80, 81] },
            { loc: [75, 84] },

            { loc: [108, 109], title: "Error flow #1" },

            { loc: [5, 6] },
            { loc: [41, 42] },
            { loc: [108, 109] },
            { loc: [118, 119] },
            { loc: [119, 120] },

            { loc: [108, 109] },
            { loc: [109, 110] },
            { loc: [111, 112] },
            { loc: [112, 113] },
            { loc: [113, 115] },
            { loc: [115, 116] },
            { loc: [108, 117] },

            { loc: [118, 119] },
            { loc: [119, 120] },
            { loc: [120, 121] },
            { loc: [121, 123] },
            { loc: [123, 124] },
            { loc: [118, 127] },


            { loc: [86, 87], title: "Error flow #2" },

            { loc: [5, 6] },
            { loc: [41, 42] },
            { loc: [45, 46] },
            { loc: [55, 56] },
            { loc: [86, 87] },
            { loc: [96, 97] },
            { loc: [97, 98] },

            { loc: [86, 87] },
            { loc: [87, 88] },
            { loc: [89, 90] },
            { loc: [90, 91] },
            { loc: [91, 93] },
            { loc: [93, 94] },
            { loc: [86, 95] },

            { loc: [96, 97] },
            { loc: [97, 98] },
            { loc: [98, 99] },
            { loc: [99, 101] },
            { loc: [101, 102] },
            { loc: [96, 105] }
          ]}
        />
         <CodeSlide
          textSize="0.8em"
          lang="js"
          code={require("!raw-loader!../assets/code-examples/karma.conf")}
          ranges={[
            { loc: [0, 0], title: "karma.conf.js" },
            { loc: [28, 31] },
            { loc: [33, 34] },
            { loc: [38, 40] },
            { loc: [40, 46] }
          ]}
        />
        <Slide>
          <Heading size={1}>Thank you!</Heading>
          <Heading size={2}>Questions?</Heading>
        </Slide>
      </Deck>
    );
  }
}
