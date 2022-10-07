const internalData: any[] = [
  -3,
  -2,
  -1,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  "x",
  "y",
  "z",
  null,
  undefined,
  NaN,
  { a: 2, b: -2 },
  [-4, 5, [6]],
  { a: { x: "x", y: { y: 2 } } },
  [[[[[[[12]]]]]]],
  { array: [{ a: 8 }] },
];

export class GarbageFactory {
  constructor(private readonly callback: (value: any) => void) {}

  async startAsync(): Promise<void> {
    for (let i = 0; i < 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const value = internalData[i % internalData.length];
      this.callback(value);
    }
  }
}
