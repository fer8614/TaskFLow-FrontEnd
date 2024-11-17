export function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const formatter = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formatter.format(date);
}
