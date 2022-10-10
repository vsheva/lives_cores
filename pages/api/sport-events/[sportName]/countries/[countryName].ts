import { eventsList } from "../index";

export default function handler(req, res) {
  res
    .status(200)
    .json(
      eventsList
        .filter(({ country }) => country === req.query.countryName)
        .map(({ id, name, isFavorite }) => ({ id, name, isFavorite }))
    );
}
