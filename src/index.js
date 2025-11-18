export function capitalize(word) {
  const firstLetter = word.slice(0, 1).toUpperCase();
  return firstLetter.concat('', word.slice(1));
}
