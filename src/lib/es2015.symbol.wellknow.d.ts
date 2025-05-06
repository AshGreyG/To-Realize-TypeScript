/// <reference lib="es2015.symbol" />

interface SymbolConstructor {
  /**
   * A regular expression method that matches the regular expression against a
   * string. Called by the `String.prototype.match` method.
   */
  readonly match: unique symbol;

  /**
   * A regular expression method that splits a string at the indices that matches
   * the regular expression. Called bt the `String.prototype.split` method.
   */
  readonly split: unique symbol;
}

interface Symbol {

}

interface String {
  /**
   * Split a string into substrings using the specified separator and return them
   * as an array.
   * @param splitter An object that can split a string.
   * @param limit A value used to limit the number of elements returned in the array.
   */
  split(splitter: { [Symbol.split](string: string, limit?: number): string[] }, limit?: number): string[]
}