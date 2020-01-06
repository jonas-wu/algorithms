// 笔试题 2020/1/6

interface NameProps {
  firstName: string;
  lastName: string;
  ext: string;
  extType: "DigitalUser" | "VirtualUser" | "FaxUser" | "Dept" | "AO";
}

const extTypes = {
  DigitalUser: 0,
  VirtualUser: 1,
  FaxUser: 2,
  AO: 3,
  Dept: 4
};

function compare(a: string | number, b: string | number, asc: boolean = true) {
  if (typeof a === "number" && typeof b === "number") {
    return asc ? a - b : b - a;
  }

  if (a < b) return asc ? -1 : 1;
  if (a > b) return asc ? 1 : -1;
  return 0;
}

/**
  extensions is an Array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO".
**/

/**
  Question 1: sort extensions by "firstName" + "lastName" + "ext" ASC
**/
function sortExtensionsByName(extensions: NameProps[]): void {
  extensions.sort((a, b) => {
    let result = compare(a.firstName, b.firstName);
    if (result != 0) return result;

    result = compare(a.lastName, b.lastName);
    if (result != 0) return result;

    return compare(a.ext, b.ext);
  });
}

/**
  Question 2: sort extensions by extType follow these orders ASC
  DigitalUser < VitrualUser < FaxUser < AO < Dept.
**/
function sortExtensionsByExtType(extensions: NameProps[]) {
  extensions.sort((a, b) => {
    return compare(extTypes[a.extType], extTypes[b.extType]);
  });
}

const extensions: NameProps[] = [
  { firstName: "a1", lastName: "b1", ext: "c", extType: "AO" },
  { firstName: "a2", lastName: "b0", ext: "c", extType: "VirtualUser" }
];

sortExtensionsByName(extensions);
console.log(extensions);

sortExtensionsByExtType(extensions);
console.log(extensions);

/**
  saleItems is an Array has each item has such format:
  {
	month: n, //[1-12],
	date: n, //[1-31],
	transationId: "xxx",
	salePrice: number
  }
**/
interface SaleItem {
  month: number;
  date: number;
  transationId: string;
  salePrice: number;
}

interface QuarterSum {
  quarter: number;
  transactionNums: number;
  totalPrices: number;
}

interface QuarterAverage {
  quarter: number;
  transactionNums: number;
  averagePrices: number;
}

/**
  Question 3: write a function to calculate and return a list of total sales (sum) for each quarter, expected result like:
  [
  	{quarter: 1, totalPrices: xxx, transactionNums: n},
  	{....}
  ]
**/
function sumByQuarter(saleItems: SaleItem[]): QuarterSum[] {
  const result: QuarterSum[] = Array(4)
    .fill(0)
    .map((_, index) => ({
      quarter: index + 1,
      totalPrices: 0,
      transactionNums: 0
    }));

  for (let item of saleItems) {
    const index = Math.floor((item.month - 1) / 3);
    const quarterItem = result[index];
    quarterItem.totalPrices += item.salePrice;
    quarterItem.transactionNums++;
  }

  return result;
}

/**
  Question 4: write a function to calculate and return a list of average sales for each quarter, expected result like:
  [
    {quarter: 1, averagePrices: xxx, transactionNums: n},
    {....}
  ]
**/
function averageByQuarter(saleItems: SaleItem[]) {
  const result: QuarterAverage[] = Array(4)
    .fill(0)
    .map((_, index) => ({
      quarter: index + 1,
      averagePrices: 0,
      transactionNums: 0
    }));

  for (let item of saleItems) {
    const index = Math.floor((item.month - 1) / 3);
    const quarterItem = result[index];
    quarterItem.averagePrices += item.salePrice;
    quarterItem.transactionNums++;
  }

  for (let item of result) {
    if (item.transactionNums > 0) {
      item.averagePrices /= item.transactionNums;
    }
  }

  return result;
}

const saleItems: SaleItem[] = [
  { month: 1, date: 1, salePrice: 12, transationId: "123" },
  { month: 1, date: 1, salePrice: 12, transationId: "123" },
  { month: 3, date: 1, salePrice: 14, transationId: "123" },
  { month: 12, date: 1, salePrice: 12, transationId: "123" }
];

console.log(sumByQuarter(saleItems));
console.log(averageByQuarter(saleItems));

/**
  Question 5: please create a tool to generate Sequence
  Expected to be used like:
  var sequence1 = new Sequence();
  sequence1.next() --> return 1;
  sequence1.next() --> return 2;
  
  in another module:
  var sequence2 = new Sequence();
  sequence2.next() --> 3;
  sequence2.next() --> 4;
**/
class Sequence {
  static index: number = 1;
  next(): number {
    return Sequence.index++;
  }
}

const seq1 = new Sequence();
console.log(seq1.next());
console.log(seq1.next());

const seq2 = new Sequence();
console.log(seq2.next());
console.log(seq2.next());

/**
    Question 6:
    AllKeys: 0-9;
    usedKeys: an array to store all used keys like [2,3,4];
    We want to get an array which contains all the unused keys,in this example it would be: [0,1,5,6,7,8,9]
**/
function getUnUsedKeys(
  allKeys: number[] = [],
  usedKeys: number[] = []
): number[] {
  const map = new Map();
  usedKeys.forEach(x => map.set(x, true));
  return allKeys.filter(x => !map.has(x));
}

console.log(getUnUsedKeys([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [6, 7, 8, 9]));
