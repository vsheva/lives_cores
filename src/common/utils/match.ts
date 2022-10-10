import type { Team } from "@entities/Match";

export const formatPart = (part?: Team["part"]) => !!part && `(${part || "-"})`;
