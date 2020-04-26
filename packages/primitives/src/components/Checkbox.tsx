import React from "react";
import { Box } from "./Box";
// export { Checkbox, CheckboxProps } from "theme-ui";

export function Checkbox(props: any) {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        display: "inline-block",
        verticalAlign: "middle",
        position: "relative",
        '& > input:checked + [data-part-id="checkbox"]': {
          backgroundColor: "rgb(3, 136, 252)",
          boxShadow: "none",
        },
        '& > input:checked + [data-part-id="checkbox"] > [data-part-id="icon"]': {
          opacity: 1,
        },
      }}
    >
      <Box
        as="input"
        type="checkbox"
        {...props}
        sx={{
          boxSizing: "border-box",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          WebkitAppearance: "none",
          backgroundColor: "transparent",
          color: "inherit",
          fontFamily: "inherit",
          fontSize: "inherit",
          fontWeight: "normal",
          verticalAlign: "middle",
          width: "100%",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          zIndex: "1",
          opacity: "0",
          borderWidth: "initial",
          borderStyle: "none",
          borderColor: "initial",
          borderImage: "initial",
          borderRadius: "0px",
          margin: "0px",
          padding: "0px",
        }}
      />
      <Box
        data-part-id="checkbox"
        sx={{
          boxSizing: "border-box",
          position: "relative",
          zIndex: "0",
          width: "20px",
          height: "20px",
          boxShadow: "rgb(213, 217, 221) 0px 0px 0px 1px inset",
          borderRadius: "3px",
          borderWidth: "0px",
          borderStyle: "initial",
          borderColor: "initial",
          borderImage: "initial",
        }}
      >
        <Box
          data-part-id="icon"
          sx={{
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            opacity: "0",
            color: "rgb(255, 255, 255)",
          }}
        >
          <svg
            width="15"
            height="15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path
              d="M11.467 3.72686C11.7559 3.91576 11.8369 4.30309 11.648 4.592L7.39803 11.092C7.29787 11.2452 7.1356 11.3468 6.95405 11.3699C6.77251 11.3931 6.58992 11.3355 6.4545 11.2124L3.7045 8.71243C3.44909 8.48024 3.43027 8.08496 3.66246 7.82954C3.89465 7.57413 4.28993 7.55531 4.54534 7.7875L6.75295 9.79442L10.6018 3.90793C10.7907 3.61903 11.178 3.53796 11.467 3.72686Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
}
