type DatedObject = {
  date?: string;
};

export function byDescendingDate(a: DatedObject, b: DatedObject): number {
  if (!a.date || !b.date) {
    return -1;
  }
  return b.date < a.date ? -1 : 1;
}
