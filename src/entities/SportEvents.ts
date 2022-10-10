import SportEvent from "@entities/SportEvent";
import Country from "@entities/Country";

type SportEvents = {
  eventsList: SportEvent[];
  countries?: Country[];
};

export default SportEvents;
