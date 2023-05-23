import "../src/styles/globals.css";
import Providers from "../src/components/providers";
import type { Preview } from "@storybook/react";

import React from 'react';

// export const decorators = [
//   (Story) => (
//     <Providers>
//       <Story />
//     </Providers>
//   ),
// ];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout : "fullscreen",
    nextjs : {
      appDirectory : true,
    }
  },
};

export default preview;
