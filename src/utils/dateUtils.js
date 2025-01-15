import {formatDistance, parseISO} from "date-fns";
import {es} from "date-fns/locale";

export const formatDistanceToNowInSpanish = (date) => {
  const distance = formatDistance(date, new Date(), {
    addSuffix: true,
    locale: es,
  });

  return distance.replace("alrededor de", "");
};

export const parseISODate = (dateString) => {
  return parseISO(dateString);
};
