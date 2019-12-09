import React from "react";
import { storiesOf } from "@storybook/react";
import {
  FaRegPaperPlane,
  FaRegHeart,
  FaRegMap,
  FaRegCommentAlt,
  FaRegUserCircle
} from "react-icons/fa";

import { BottomNav, BottomNavLink } from "./BottomNav";

storiesOf("Labs/BottomNav", module).add("default", () => (
  <BottomNav sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
    <BottomNavLink href="#" icon={<FaRegPaperPlane />}>
      Explore
    </BottomNavLink>
    <BottomNavLink href="#" icon={<FaRegHeart />}>
      Saved
    </BottomNavLink>
    <BottomNavLink href="#" icon={<FaRegMap />}>
      Trips
    </BottomNavLink>
    <BottomNavLink href="#" icon={<FaRegCommentAlt />}>
      Inbox
    </BottomNavLink>
    <BottomNavLink href="#" icon={<FaRegUserCircle />}>
      Profile
    </BottomNavLink>
  </BottomNav>
));
