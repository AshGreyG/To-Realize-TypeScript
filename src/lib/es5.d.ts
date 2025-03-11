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