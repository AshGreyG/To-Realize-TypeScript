interface String {
  
}

interface StringConstructor {
  new (value?: any): String;
  (value?: any): string;
  readonly prototype: String;

  /**
   * @description The `String.fromCharCode()` static method returns a
   * string created from the specified sequence of UTF-16 code units.
   * @param {...number} codes Numbers between 0 and 65535(0xFFFF)
   * representing a UTF-16 code unit. Numbers greater than 0xFFFF are
   * truncated to the last 16 bits. No validity checks are performed.
   * @returns {string} A string of length of `codes` (denoted as `N`) 
   * consisting `N` specified UTF-16 code units.
   * 
   * [Mozilla Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
   */
  fromCharCode: (...codes: number[]) => string;

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
  valueOf: () => boolean;
}

interface BooleanConstructor {
  new (value?: any): Boolean;
  <T>(value?: T): boolean;
  readonly prototype: Boolean;
}

declare var Boolean: BooleanConstructor;

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
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
}