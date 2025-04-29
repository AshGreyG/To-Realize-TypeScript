interface ObjectConstructor {
  /**
   * Copy the values of all of the enumerable own properties from one or more objects
   * to a target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source The source object from which to copy properties.
   */
  assign<T extends {}, U>(target: T, source: U): T & U;
  /**
   * Copy the values of all of the enumerable own properties from one or more objects
   * to a target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The 1st source object from which to copy properties.
   * @param source2 The 2nd source object from which to copy properties.
   */
  assign<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
  /**
   * Copy the values of all of the enumerable own properties from one or more objects
   * to a target object. Returns the target object.
   * @param target The target object to copy to.
   * @param source1 The 1st source object from which to copy properties.
   * @param source2 The 2nd source object from which to copy properties.
   * @param source3 The 3rd source object from which to copy properties.
   */
  assign<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3): T & U & V & W;
  /**
   * Copy the values of all of the enumerable own properties from one or more objects
   * to a target object. Returns the target object.
   * @param target The target object to copy to.
   * @param sources One or more objects from which to copy properties.
   */
  assign(target: object, ...sources: any[]): any;
}