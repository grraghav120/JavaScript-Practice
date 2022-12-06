let dist = new Set();

dist.add(5);
dist.add(4);
dist.add(2);
dist.add(1);
dist.add(10);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.forEach((x) => {
  dist.add(x);
});

console.log(dist);
