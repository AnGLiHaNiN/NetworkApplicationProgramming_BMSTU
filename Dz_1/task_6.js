function anagram(words) {
    const groups = {};
  
    for (const word of words) {
      const sorted = word.split('').sort().join('');
  
      if (!groups[sorted]) {
        groups[sorted] = [];
      }
  
      groups[sorted].push(word);
    }
  
    const result = [];
    for (const group in groups) {
      const words = groups[group];
  
      if (words.length > 1) {
        result.push(words.sort());
      }
    }
  
    return result;
  }

  
const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

const anagramGroups = anagram(words);

console.log(anagramGroups);
