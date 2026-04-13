// http://localhost:3450/students
// http://localhost:3450/authors

const fetchAuthors = async () => {
  const res = await fetch("http://localhost:3450/authors");
  const authorsData = await res.json();
  const authorsCount = authorsData.map((author) => author + 1);
  console.log(authorsCount);
};

module.exports = fetchAuthors;
