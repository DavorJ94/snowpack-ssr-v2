function IdGenerator(input) {
  let currentIds = input.map((item) => {
    return item.id;
  });

  let i = 1;
  while (true) {
    if (currentIds.includes(i)) i++;
    else break;
  }
  return i;
}

export default IdGenerator;
