import { countries } from "../index";

export default function handler(req, res) {
  res.status(200).json(countries);
}
