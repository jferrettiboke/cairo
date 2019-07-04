/** @jsx jsx */
import { jsx } from "theme-ui";

const placeholderStyle = {
  color: "gray.400",
  opacity: 1
};

function Textarea({ sx, ...rest }) {
  return (
    <textarea
      sx={{
        appearance: "none",
        backgroundColor: "white",
        border: "1px solid",
        borderColor: "gray.400",
        borderRadius: "default",
        boxSizing: "border-box",
        color: "black",
        fontFamily: "sans",
        fontWeight: "normal",
        fontSize: "base",
        lineHeight: "normal",
        outline: "none",
        py: "3",
        px: "4",
        width: "full",
        "&:focus": {
          borderColor: "black"
        },
        "&:read-only": {
          borderColor: "gray.200",
          color: "gray.500"
        },
        "&:disabled": {
          borderColor: "gray.200",
          color: "gray.400",
          cursor: "not-allowed"
        },
        "&::-webkit-input-placeholder": placeholderStyle,
        "&::-moz-placeholder": placeholderStyle,
        "&:-ms-input-placeholder": placeholderStyle,
        ...sx
      }}
      {...rest}
    />
  );
}

export default Textarea;
