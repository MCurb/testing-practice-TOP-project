export function capitalize(word) {
  const firstLetter = word.slice(0, 1).toUpperCase();
  const rest = word.slice(1);
  return firstLetter.concat('', rest);
}
