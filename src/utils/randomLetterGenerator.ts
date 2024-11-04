export const randomLetterGenerator = (length: number): string[] => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  return Array.from({length}, () =>
    Array.from({length: 3}, () =>
      characters.charAt(Math.floor(Math.random() * characters.length)),
    ).join(''),
  );
};
