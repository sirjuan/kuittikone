export type Item = {
  str: string,
  width: number
};

export type ReceiptAccumulator = {
  bonus?: number,
  total?: number,
  date?: Date,
  items: {},
  itemNames: string[]
}
