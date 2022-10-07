import SportEvent from "@entities/SportEvent";
import Country from "@entities/Country";

type SportEvents = {
  sportEvents: SportEvent[];
  countries?: Country[];
};

export default SportEvents;
