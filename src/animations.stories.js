import React from "react";
import { storiesOf } from "@storybook/react";

import { motion } from "framer-motion";
import Box from "./components/Box";
import Button from "./components/Button";

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
      {storyFn()}
    </Box>
  );
}

storiesOf("Animations", module)
  .addDecorator(CenterDecorator)
  .add("lists", () => {
    const ul = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    };

    const li = {
      visible: i => ({
        opacity: 1,
        transition: { delay: i * 0.3 }
      }),
      hidden: { opacity: 0 }
    };

    const items = [
      "First item",
      "Second item",
      "Third item",
      "Fourth item",
      "Fifth item"
    ];

    return (
      <motion.ul initial="hidden" animate="visible" variants={ul}>
        {items.map((item, i) => (
          <motion.li custom={i} animate="visible" variants={li}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    );
  });
