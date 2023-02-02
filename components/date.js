import { parseISO, format } from "date-fns";


export default function DateDisplay({ dateString }) {
  const date = parseISO(dateString);
  return <time className="text-sm" dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}