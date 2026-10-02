// Technical utilities- used for string/hash manipulations etc.

export const cucumberTableParser = (tableHashes) => {
  for (const pair of tableHashes) {
    if (pair['value'] === 'true' || pair['value'] === 'false') {
      pair['value'] = pair['value'] === 'true';
    }
  }
  return tableHashes;
};
