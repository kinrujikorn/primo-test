export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  let i = 0; // index ของ collection_1
  let j = collection_2.length - 1; // index ของ collection_2 (descending) เริ่มจากตัวสุดท้าย
  let k = 0; // index ของ collection_3

  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    // กรณีทุก array มีค่า
    if (
      i < collection_1.length &&
      (j < 0 || collection_1[i] <= collection_2[j]) &&
      (k >= collection_3.length || collection_1[i] <= collection_3[k])
    ) {
      result.push(collection_1[i]);
      i++;
    }

    // กรณี collection_2 เล็กที่สุด
    else if (
      j >= 0 &&
      (i >= collection_1.length || collection_2[j] <= collection_1[i]) &&
      (k >= collection_3.length || collection_2[j] <= collection_3[k])
    ) {
      result.push(collection_2[j]);
      j--;
    }

    // กรณี collection_3 เล็กที่สุด
    else if (k < collection_3.length) {
      result.push(collection_3[k]);
      k++;
    }
  }

  return result;
}
