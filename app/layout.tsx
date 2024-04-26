import "@mantine/core/styles.css";
import React from "react";
import {MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";

export const metadata = {
  title: "Baxture-react-assignment-vercelApp",
  description: "I am using Mantine Ui with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (

    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
