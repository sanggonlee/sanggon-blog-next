type DatedObject = {
  date?: string;
};

export function byDescendingDate(a: DatedObject, b: DatedObject): number {
  if (!a.date || !b.date) {
    return 1;
  }
  return b.date < a.date ? -1 : 1;
}

export function formatDate(milliseconds: number): string {
  return new Date(milliseconds).toISOString().split('T')[0];
}
