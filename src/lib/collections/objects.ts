type UnknownObject = Partial<Readonly<Record<string, unknown>>>;

export const isUnknownObject = (value: unknown): value is UnknownObject => (
  typeof value === 'object' &&
  value != null
);
