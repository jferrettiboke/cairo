/** @jsx jsx */
import { jsx } from "theme-ui";

function ToggleSwitch({ checked }) {
  return (
    <label
      sx={{
        position: "relative",
        display: "inline-block",
        width: 60,
        height: 34,
        "& > input": {
          opacity: 0,
          width: 0,
          height: 0
        },
        "& > span": {
          // Theme
          backgroundColor: "gray.400",
          // Raw
          position: "absolute",
          cursor: "pointer",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          WebkitTransition: ".4s",
          transition: ".4s",
          borderRadius: 34
        },
        "& > span:before": {
          // Raw
          position: "absolute",
          content: '""',
          height: 26,
          width: 26,
          left: 1,
          bottom: 1,
          backgroundColor: "white",
          WebkitTransition: ".4s",
          transition: ".4s",
          borderRadius: "50%"
        },
        "& > input:checked + span": {
          // Theme
          backgroundColor: "gray.800"
        },
        "& > input:focus + span": {
          // boxShadow: "0 0 1px #2196F3"
        },
        "& > input:checked + span:before": {
          WebkitTransform: "translateX(26px)",
          msTransform: "translateX(26px)",
          transform: "translateX(26px)"
        }
      }}
    >
      <input type="checkbox" checked={checked} />
      <span />
    </label>
  );
}

export default ToggleSwitch;
