declare type PropertyKey = string | number | symbol;

interface Object {
  /** The initial value of Object.prototype.constructor is the standard built-in Object constructor */
  constructor: Function;

  /** Returns a string representation of an object */
  toString(): string;

  /** Returns a date converted to a string using the current locale */
  toLocaleString(): string;
}

/**
 * Creates a new function.
 */
interface Function {
  /**
   * @description Calls the function, substituting the specified object
   * for the this value of the function, and the specified array for the
   * arguments of the function.
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   * @returns {any} The result is determined by this function.
   * 
   * This function is almost identical to `call()`, except that the function
   * arguments are passed to `call()` individually as a list, while for `apply()`
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
   */
  apply(this: Function, thisArg: any, argArray?: any): any;
  /**
   * @description Calls a method of an object, substituting another object for
   * the current object.
   * @param thisArg The object to be used as the this object.
   * @param argArray A set of arguments to be passed to the function.
   * @returns {any} The result is determined by this function.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
   */
  call(this: Function, thisArg: any, ...argArray: any[]): any;
}

interface RegExpMatchArray extends Array<string> {
  /** The index of the search at which the result was found. */
  index?: number;
  /** A copy of the search string. */
  input?: string;
  /** The first match. This will always be present because `null` will be returned if there are no matches */
  0: string;
}

interface RegExp {

}

interface String {
  /**
   * Returns the character at the specified index
   * @param pos The zero-based index of the desired character.
   */
  charAt(pos: number): string;

  /**
   * Returns a string that contains the concatenation of two or more strings.
   * @param strings The strings to append to the end of the string.
   */
  concat(...strings: string[]): string;
}

interface StringConstructor {
  new (value?: any): String;

  (value?: any): string;

  readonly prototype: String;

  /**
   * @description The `String.fromCharCode()` static method returns a
   * string created from the specified sequence of UTF-16 code units.
   * @param codes Numbers between 0 and 65535(0xFFFF)
   * representing a UTF-16 code unit. Numbers greater than 0xFFFF are
   * truncated to the last 16 bits. No validity checks are performed.
   * @returns {string} A string of length of `codes` (denoted as `N`) 
   * consisting `N` specified UTF-16 code units.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
   */
  fromCharCode(...codes: number[]): string;

  // `(value?: any): string` is a call signature, we can call with
  // `StringConstructor()`.
}

/**
 * Allows manipulation and formatting of text strings and determination
 * and location of substrings within strings.
 */
declare var String: StringConstructor;

interface Boolean {
  /**
   * @description The `valueOf()` method of `Boolean` values returns the
   * primitive value of `Boolean` object.
   * @returns {boolean} The primitive value of the given `Boolean` object.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf)
   */
  valueOf(): boolean;
}

interface BooleanConstructor {
  new (value?: any): Boolean;

  <T>(value?: T): boolean;

  readonly prototype: Boolean;
}

declare var Boolean: BooleanConstructor;

interface ConcatArray<T> {
  readonly length: number;
  readonly [n: number]: T;
  join(separator?: string): string;
  slice(start?: number, end?: number): T[];
}

interface Array<T> {
  /**
   * Gets or sets the length of the array. This is a number one higher than the highest index in
   * the array.
   */
  length: number;
  /**
   * @description Returns a string representation of an array.
   * @returns {string} A string representation of an array
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)
   */
  toString(): string;
  /**
   * @description Returns a string representation of an array. The elements are converted to string using
   * their `toLocaleString` method.
   * @returns {string} A string representation of an array using `toLocaleString` method.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
   */
  toLocaleString(): string;
  /**
   * @description Removes the last element from an array and returns it.
   * If the array is empty, `undefined` is returned and the array is not modified.
   * @returns {T | undefined} The last element or nothing.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
   */
  pop(): T | undefined;
  /**
   * @description Appends the new element to the end of an array, and returns the new length
   * of the array.
   * @param items New elements to add to the array.
   * @returns Length of new array
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
   */
  push(...items: T[]): number;
  /**
   * @description Combines two or more arrays. This method returns a new array
   * without modifying any existing arrays.
   * @param items Additional arrays and / or items to add to the end of the array
   * @returns New array after concatting.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
   */
  concat(...items: (T | ConcatArray<T>)[]): T[];
  /**
   * @description Adds all the elements of an array into a string, separated by the specified
   * separator string.
   * @param separator A string used to separate one element of the array.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
   */
  join(separator?: string): string;
  /**
   * @description Reverses the elements in an array in place. This method mutates the array 
   * and returns a reference to the same array.
   * @returns {T[]} The reference to the same array, but reversed.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
   */
  reverse(): T[];
  /**
   * @description Removes the first element from an array an returns it. If the array is empty
   * , `undefined` is returned and the array is not modified.
   * @returns {T | undefined} The first element or nothing.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
   */
  shift(): T | undefined;
  /**
   * @description Returns a copy of a section of an array.
   * For both start and end, a negative index can be used to indicate an offset from the end of
   * the array. For example, -2 refers to the second to lase element of the array.
   * @param start The beginning index of the specified portion of the array. If `start` is 
   * undefined, then the slice begins at index 0.
   * @param end The end index of the specified portion of the array. This is exclusive of the
   * element at the index `end`, If `end` is undefined, then the slice extends to the end of 
   * the array.
   * @returns {T[]} A copy of a section of an array.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
   */
  slice(start?: number, end?: number): T[];
}

interface ArrayConstructor {
  new (arrayLength?: number): any[];
  new <T>(arrayLength?: number): T[];
  new <T>(...items: T[]): T[];

  (arrayLength?: number): any[];
  <T>(arrayLength?: number): T[];
  <T>(...items: T[]): T[];

  isArray(arg: any): arg is any[];
  readonly prototype: any[];
}

declare var Array: ArrayConstructor;

// ------------------ Utility Types ------------------

/**
 * @description Constructs a type with all properties of `T` set to optional,
 * this utility will return a type that represents all subsets of a given type.
 * @example
 * 
 * ``` typescript
 * interface Todo {
 *   title: string;
 *   description: string;
 * }
 * 
 * function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
 *   return { ...todo, ...fieldsToUpdate };
 * }
 * ```
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
}

/**
 * @description Constructs a type consisting of all properties of `T` set
 * to required. The opposite of `Partial<T>`.
 * @example
 * 
 * ``` typescript
 * interface Props {
 *   a?: number;
 *   b?: string;
 * }
 * 
 * const obj: Required<Props> = {
 *   a: 5,
 *   b: "These two properties are required"
 * }
 * ```
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
}

/**
 * @description Constructs a type with all properties of `T` set to `readonly`,
 * meaning the properties of the constructed type cannot be reassigned.
 * @example
 * 
 * ``` typescript
 * interface Todo {
 *   title: string;
 * }
 * 
 * const TODO: Readonly<Todo> = {
 *   title: "Delete inactive users",
 * };
 * 
 * // TODO.title = "hello"; // uncomment here
 * //      ^^^^^
 * // Cannot assign to 'title' because it is a read-only property
 * ```
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

/**
 * @description Constructs an object type whose property keys are `k` and
 * whose property values are `T`. This utility can be used to map the
 * properties of a type to another type.
 * @example
 * 
 * ``` typescript
 * type TestName =
 *   | "a"
 *   | "b"
 *   | "c";
 * 
 * interface TestInfo {
 *   age: number;
 *   breed: string;
 * }
 * 
 * type Test: Record<TestName, TestInfo>;
 * // type Test = {
 * //   a: TestInfo;
 * //   b: TestInfo;
 * //   c: TestInfo;
 * // }
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
}

/**
 * @description Constructs a type by excluding from `T` all union members that
 * are assignable to `U`.
 * @example
 * 
 * ``` typescript
 * type T = Exclude<"a" | "b" | "c", "a">;  // type T = "b" | "c"
 * ```
 */
type Exclude<T, U> = T extends U ? never : T;

/**
 * @description Constructs a type by picking the set of properties `K` (string
 * literals or union of string literals) from `T`
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}

type Uppercase<S extends string> = intrinsic;