import type SportName from "@entities/SportName";
import type NavLink from "@entities/NavLink";

export const ACTIVE_TABS: Record<SportName, NavLink> = {
  football: "/",
  basketball: "/basketball",
  tenis: "/tenis",
  hokey: "/hokey",
  volleyball: "/valleyball",
  handball: "/handball",
};
