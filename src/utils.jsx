export default function calculateNewPrice(product) {
  const { price, discount } = product;
  const discountAmount = (price * discount) / 100;
  return (price - discountAmount).toFixed(2);
}

export function generateRatingArray(count) {
  let ratingArray = [];
  for (let i = 0; i < 5; i++) {
    let type = "empty";
    if (count >= 1) {
      type = "solid";
    } else if (count > 0) {
      type = "half-solid";
    }
    count -= 1;
    ratingArray.push(type);
  }
  return ratingArray;
}
