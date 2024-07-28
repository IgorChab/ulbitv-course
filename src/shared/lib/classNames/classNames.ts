type Mods = Record<string, string | boolean>;

export const classNames = (
  mainClass: string,
  mods: Mods = {},
  additional: Array<string | undefined | boolean> = []
): string => {
  return [
    mainClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => !!value)
      .map(([className]) => className)
  ].join(' ');
};
