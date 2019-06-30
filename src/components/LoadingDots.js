/** @jsx jsx */
import { jsx } from "theme-ui";
import { keyframes } from "@emotion/core";

const blink = keyframes`
    0% {
      opacity: 0.2;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  `;

export default function LoadingDots() {
  return (
    <span
      css={{
        "& > span": {
          animation: `${blink} 1.4s ease infinite`,
          /**
           * This makes sure that the starting style (opacity: .2)
           * of the animation is applied before the animation starts.
           * Otherwise we would see a short flash or would have
           * to set the default styling of the dots to the same
           * as the animation. Same applies for the ending styles.
           */
          animationFillMode: "both"
        },
        "& > span:nth-child(2)": {
          animationDelay: "0.2s"
        },
        "& > span:nth-child(3)": {
          animationDelay: "0.4s"
        }
      }}
    >
      <span>•</span>
      <span>•</span>
      <span>•</span>
    </span>
  );
}
