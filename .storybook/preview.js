import anysort from "anysort";
import "../src/tailwind.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  staticDirs: ["../assets"],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (previous, next) => {
      const [previousStory, previousMeta] = previous;
      const [nextStory, nextMeta] = next;
      return anysort(previousMeta.kind, nextMeta.kind, [
        "Readme/Introduction",
        "Readme/Getting Started",
        "Readme/Create a Component",
        "Readme/Test and Lint",
        "Readme/Build and Deploy",
        "Readme/Contributing",
        "Atoms/Icon",
        "Atoms/Badges/Badge",
        "Atoms/Badges/Badge Gradient",
        "Atoms/Spinners/Spinner",
        "Atoms/Spinners/Spinner Gradient",
        "Components/Buttons/Button",
        "Components/Buttons/Button Icon",
        "Components/Buttons/Gradient Monochrome",
        "Components/Buttons/Gradient Duotone",
      ]);
    },
  },
};
