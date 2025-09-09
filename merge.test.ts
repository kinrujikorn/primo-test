import { merge } from "./merge";

describe("merge", () => {
  test("merges three arrays into ascending order", () => {
    const collection_1 = [1, 4, 7];
    const collection_2 = [8, 5, 3, 2]; // descending
    const collection_3 = [6, 9];
    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  test("merges three arrays with duplicates", () => {
    const collection_1 = [2, 2, 2];
    const collection_2 = [4, 3, 3, 2]; // descending
    const collection_3 = [4, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      2, 2, 2, 2, 3, 3, 4, 4, 5,
    ]);
  });

  test("merges three arrays with some empty", () => {
    expect(merge([], [3, 2, 1], [4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(merge([], [], [])).toEqual([]);
  });
});
