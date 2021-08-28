const gcd = (a, b) => {
  const min = Math.min(a, b);
  for (let i = min; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
};
console.log(gcd(6, 36));
