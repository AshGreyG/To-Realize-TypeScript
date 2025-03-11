let testString1 = String("1234");
// var String: StringConstructor
// (value?: any) => string

let testString2 = String.fromCharCode(222, 21);

// ------------ Boolean methods ------------

let testBoolean1 = Boolean<number>(12);
let testBoolean1Value = testBoolean1.valueOf();

// ------------ Utility Types ------------

type PropsForPartial = {
  a: string;
  b: number;
}

type ResultForPartial = Partial<PropsForPartial>;
// type ResultForPartial = {
//   a?: string;
//   b?: number;
// }