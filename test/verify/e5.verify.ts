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

type PropsForRequired = {
  a?: number;
  b?: string;
  c: boolean;
}
type ResultForRequired = Required<PropsForRequired>;
// type ResultForRequired = {
//   a: number;
//   b: string;
//   c: boolean;
// }

type PropsForReadonly = {
  a: number;
  b: string;
}
type ResultForReadonly = Readonly<PropsForReadonly>;
// type ResultForReadonly = {
//   readonly a: number;
//   readonly b: string;
// }

type PropsForRecord = 
  | "key1"
  | "key2"
  | "key3";
type ResultForRecord = Record<PropsForRecord, number>;
// type ResultForRecord = {
//   key1: number;
//   key2: number;
//   key3: number;
// }

type PropsTForExclude = 
  | "a"
  | "b"
  | "c";
type PropsUForExclude = "a";
type ResultForExclude = Exclude<PropsTForExclude, PropsUForExclude>;
// type ResultForExclude = "b" | "c";