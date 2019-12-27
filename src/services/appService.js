const words_list = [
  "armoire",
  "boucle",
  "buisson",
  "bureau",
  "chaise",
  "carton",
  "couteau",
  "fichier",
  "garage",
  "glace",
  "journal",
  "kiwi",
  "lampe",
  "liste",
  "montagne",
  "remise",
  "sandale",
  "taxi",
  "vampire",
  "volant"
];

export function getListOfWords() {
  return words_list;
}

export function generateAlphabets() {
  let start = "a".charCodeAt(0);
  const last = "z".charCodeAt(0);
  const alphabets = [];

  while (start <= last) {
    alphabets.push(String.fromCharCode(start));
    start++;
  }

  return alphabets;
}
