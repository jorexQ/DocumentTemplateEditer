//
type NullOrUnderfined = null | undefined;

/**
 *
 *
 * @export
 * @template T
 * @param {*} obj
 * @returns {obj is Promise<T>}
 */
export function isPromise<T>(obj: any): obj is Promise<T> {
  return obj && obj.then && obj.then instanceof Function;
}

/**
 *
 *
 * @export
 * @param {*} obj
 * @returns {obj is NullOrUnderfined}
 */
export function isNullOrUnderfined(obj: any): obj is NullOrUnderfined {
  return obj === null || obj === undefined;
}

export function nameof<T>(nameFunction: { new (...params: any[]): T }): string {
  var fnStr = nameFunction.toString();
  // Class name (es6).
  // class MyClass { ... }
  var classString = "class ";
  var classIndex = fnStr.indexOf(classString);
  if (classIndex === 0) {
    var notMinified1 = fnStr.indexOf(" extends");
    if (notMinified1 > -1) {
      return fnStr.substring(classString.length, notMinified1);
    }

    var minified1 = fnStr.indexOf("extends");
    if (minified1 > -1) {
      return fnStr.substring(classString.length, minified1);
    }

    var notMinified = fnStr.indexOf(" {");
    if (notMinified > -1) {
      return fnStr.substring(classString.length, notMinified);
    }

    var minified = fnStr.indexOf("{");
    if (minified > -1) {
      return fnStr.substring(classString.length, minified);
    }
  }

  // Property accessor function.
  var dotIndex = fnStr.indexOf(".");
  if (dotIndex > -1) {
    // ES5
    // "function(x) { return x.prop; }"
    // or
    // "function(x) { return x.prop }"
    // or
    // "function(x) {return x.prop}"
    if (fnStr.indexOf("{") > -1) {
      var endsWithSemicolon = fnStr.lastIndexOf(";");
      if (endsWithSemicolon > -1) {
        return fnStr.substring(dotIndex + 1, endsWithSemicolon);
      }
      var endsWithSpace = fnStr.lastIndexOf(" }");
      if (endsWithSpace > -1) {
        return fnStr.substring(dotIndex + 1, endsWithSpace);
      }
      var endsWithBrace = fnStr.lastIndexOf("}");
      if (endsWithBrace > -1) {
        return fnStr.substring(dotIndex + 1, endsWithBrace);
      }
    } else {
      return fnStr.substr(dotIndex + 1);
    }
  }
  // Class name (es5).
  // function MyClass(...) { ... }
  var functionString = "function ";
  var functionIndex = fnStr.indexOf(functionString);
  if (functionIndex === 0) {
    var parenIndex = fnStr.indexOf("(");
    if (parenIndex > -1) {
      return fnStr.substring(functionString.length, parenIndex);
    }
  }

  // Invalid function.
  throw new Error("nameof: Invalid function syntax.");
}
