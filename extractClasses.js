function extractClasses(text) {
  const allClasses = [];
  const lines = text.split('\n');

  for (const line of lines) {
    const matches = line.match(/class="([^"]+)"/g);

    if (matches) {
      for (const match of matches) {
        const extractedClass = match.slice(7, -1);
        const separatedClasses = extractedClass.split(/\s+/);
        allClasses.push(...separatedClasses);
      }
    }
  }

  const uniqueClasses = [...new Set(allClasses)].sort(); // Ordenar en orden ascendente
  return uniqueClasses;
}
