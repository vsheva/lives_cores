import sportEvents from "@common/data/mock/sport-events.json";

export default function handler(req, res) {
  res
    .status(200)
    .json(
      sportEvents
        .filter(({ country }) => country === req.query.countryName)
        .map(({ id, name, isFavorite }) => ({ id, name, isFavorite }))
    );
}
