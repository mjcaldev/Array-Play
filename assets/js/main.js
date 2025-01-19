  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const currYear = new Date().getFullYear();
  const adult = people.some((person) => currYear - person.year >= 19);

  console.log(adult)
  // Array.prototype.every() // is everyone 19 or older?
  const allAdult = people.every((person) => currYear - person.year >= 19);

  console.log(allAdult)

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
  const id = comments.find((comment) => comment.id === 823423);
  
  console.log(id)
  // Array.prototype.findIndex()
  // Find the comment with this ID
  const index = comments.findIndex((comment) => comment.id === 823423);

  console.log(index)
  // delete the comment with the ID of 823423

  // const deleteThis = 823423;
  // const newComments = comments.filter((comment) => comment.id !== deleteThis);

  // console.log(newComments);

  const otherComment = comments.splice(index, 1);

  console.log(comments);

