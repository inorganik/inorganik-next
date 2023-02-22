import { parseISO, format } from "date-fns";


export default function DateDisplay({ dateString, shouldIndent = false }) {
  const date = parseISO(dateString);
  let classes = 'text-sm mt-0';
  if (shouldIndent) classes += ' indent-8';
  return <p className={classes} dateTime={dateString}>{format(date, "LLLL d, yyyy")}</p>;
}