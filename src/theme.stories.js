import React from "react";
import { storiesOf } from "@storybook/react";
import theme from "./theme";

import Box from "./components/Box";

function CenterDecorator(storyFn) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box sx={{ width: "3/5" }}>{storyFn()}</Box>
    </Box>
  );
}

storiesOf("theme", module)
  .addDecorator(CenterDecorator)
  .add("colors", () => {
    function Wrapper({ color, colorName }) {
      return (
        <Box
          sx={{
            p: "5",
            width: ["1/3", "1/5"]
          }}
        >
          <Box
            sx={{ bg: color, height: "20", mb: "3", boxShadow: "default" }}
          />
          <Box>{colorName}</Box>
        </Box>
      );
    }

    return (
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {Object.entries(theme.colors).map(([colorName, colorValues]) => {
          if (typeof colorValues == "string") {
            return (
              <Wrapper
                key={colorName}
                colorName={colorName}
                color={colorValues}
              />
            );
          }

          return Object.entries(colorValues).map(([key, value]) => (
            <Wrapper
              key={`${colorName}.${key}`}
              color={`${colorName}.${key}`}
              colorName={`${colorName}.${key}`}
            />
          ));
        })}
      </Box>
    );
  })
  .add("border radius", () => (
    <>
      {Object.entries(theme.radii).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            my: "5",
            p: "5",
            borderRadius: value,
            bg: "gray.200"
          }}
        >
          {key} = {value}
        </Box>
      ))}
    </>
  ))
  .add("border widths", () => (
    <>
      {Object.entries(theme.borderWidths).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            bg: "gray.200",
            my: "5",
            p: "5",
            borderWidth: value,
            borderStyle: "solid"
          }}
        >
          {key} = {value}
        </Box>
      ))}
    </>
  ))
  .add("shadows", () => (
    <>
      {Object.entries(theme.shadows).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            my: "10",
            p: "5",
            boxShadow: value,
            bg: "gray.200"
          }}
        >
          {key} = {value}
        </Box>
      ))}
    </>
  ))
  .add("sizes", () => {
    const { screen, ...rest } = theme.sizes;
    return (
      <>
        {Object.entries(rest).map(([key, value]) => (
          <Box
            key={key}
            sx={{
              my: "5",
              bg: "gray.500",
              width: value
            }}
          >
            {key} = {value}
          </Box>
        ))}
      </>
    );
  })
  .add("spaces", () => (
    <>
      {Object.entries(theme.space).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            my: "5",
            p: value,
            bg: "gray.500"
          }}
        >
          {key} = {value}
        </Box>
      ))}
    </>
  ));
