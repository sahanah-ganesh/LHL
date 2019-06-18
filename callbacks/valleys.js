function sockMerchant(ar) {
  let obj = {};
  let count = 0;

  for (let i = 0; i < ar.length; i++) {
    if (obj[ar[i]]) {
      count += 1;
      obj[ar[i]] = 0;
    } else {
      obj[ar[i]] = 1;
    }
  }
  return count;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]))