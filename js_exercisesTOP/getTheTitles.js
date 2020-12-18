const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = (input, key) => {
  const output = [];
  for (i = 0; i < input.length; ++i) output.push(input[i][key]);
  return output;
};

getTheTitles(books, "title");
