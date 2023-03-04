function sort(str) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i]
        .toLowerCase()
        .split('')
        .sort()
        .join('');
  
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.sort().join(' ');
  }

  
const str = 'Sorting letters in a sentence';

const result = sort(str);

console.log(result);

