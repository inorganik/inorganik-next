import { parseISO, format } from "date-fns";


export default function DateDisplay({ dateString }) {
  const date = parseISO(dateString);
  return <p className="text-sm mt-0" dateTime={dateString}>{format(date, "LLLL d, yyyy")}</p>;
}