import type SportNameId from "@entities/SportNameId";
import type NavLink from "@entities/NavLink";

export const ACTIVE_TABS: Record<SportNameId, NavLink> = {
  football: "/",
  basketball: "/basketball",
  tenis: "/tenis",
  hokey: "/hokey",
  volleyball: "/valleyball",
  handball: "/handball",
};
