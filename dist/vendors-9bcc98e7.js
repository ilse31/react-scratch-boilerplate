"use strict";
(self["webpackChunkreact_scratch_boilerplate"] = self["webpackChunkreact_scratch_boilerplate"] || []).push([[641],{

/***/ 6310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ry: () => (/* binding */ create$3),
/* harmony export */   Z_: () => (/* binding */ create$6)
/* harmony export */ });
/* unused harmony exports ArraySchema, BooleanSchema, DateSchema, MixedSchema, NumberSchema, ObjectSchema, Schema, StringSchema, TupleSchema, ValidationError, addMethod, array, bool, boolean, date, defaultLocale, getIn, isSchema, lazy, mixed, number, printValue, reach, ref, setLocale, tuple */
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5760);
/* harmony import */ var property_expr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(property_expr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9885);
/* harmony import */ var tiny_case__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tiny_case__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var toposort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4633);
/* harmony import */ var toposort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(toposort__WEBPACK_IMPORTED_MODULE_2__);




const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== 'undefined' ? Symbol.prototype.toString : () => '';
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val) return 'NaN';
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? '-0' : '' + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false) return '' + val;
  const typeOf = typeof val;
  if (typeOf === 'number') return printNumber(val);
  if (typeOf === 'string') return quoteStrings ? `"${val}"` : val;
  if (typeOf === 'function') return '[Function ' + (val.name || 'anonymous') + ']';
  if (typeOf === 'symbol') return symbolToString.call(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
  const tag = toString.call(val).slice(8, -1);
  if (tag === 'Date') return isNaN(val.getTime()) ? '' + val : val.toISOString(val);
  if (tag === 'Error' || val instanceof Error) return '[' + errorToString.call(val) + ']';
  if (tag === 'RegExp') return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;
  return JSON.stringify(value, function (key, value) {
    let result = printSimpleValue(this[key], quoteStrings);
    if (result !== null) return result;
    return value;
  }, 2);
}

function toArray(value) {
  return value == null ? [] : [].concat(value);
}

let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || 'this';
    if (path !== params.path) params = Object.assign({}, params, {
      path
    });
    if (typeof message === 'string') return message.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message === 'function') return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === 'ValidationError';
  }
  constructor(errorOrErrors, value, field, type) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this.name = 'ValidationError';
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach(err => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
  }
}

let mixed = {
  default: '${path} is invalid',
  required: '${path} is a required field',
  defined: '${path} must be defined',
  notNull: '${path} cannot be null',
  oneOf: '${path} must be one of the following values: ${values}',
  notOneOf: '${path} must not be one of the following values: ${values}',
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : '.';
    return type !== 'mixed' ? `${path} must be a \`${type}\` type, ` + `but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. ` + `The validated value was: \`${printValue(value, true)}\`` + castMsg;
  }
};
let string = {
  length: '${path} must be exactly ${length} characters',
  min: '${path} must be at least ${min} characters',
  max: '${path} must be at most ${max} characters',
  matches: '${path} must match the following: "${regex}"',
  email: '${path} must be a valid email',
  url: '${path} must be a valid URL',
  uuid: '${path} must be a valid UUID',
  trim: '${path} must be a trimmed string',
  lowercase: '${path} must be a lowercase string',
  uppercase: '${path} must be a upper case string'
};
let number = {
  min: '${path} must be greater than or equal to ${min}',
  max: '${path} must be less than or equal to ${max}',
  lessThan: '${path} must be less than ${less}',
  moreThan: '${path} must be greater than ${more}',
  positive: '${path} must be a positive number',
  negative: '${path} must be a negative number',
  integer: '${path} must be an integer'
};
let date = {
  min: '${path} field must be later than ${min}',
  max: '${path} field must be at earlier than ${max}'
};
let boolean = {
  isValue: '${path} field must be ${value}'
};
let object = {
  noUnknown: '${path} field has unspecified keys: ${unknown}'
};
let array = {
  min: '${path} field must have at least ${min} items',
  max: '${path} field must have less than or equal to ${max} items',
  length: '${path} must have ${length} items'
};
let tuple = {
  notType: params => {
    const {
      path,
      value,
      spec
    } = params;
    const typeLen = spec.types.length;
    if (Array.isArray(value)) {
      if (value.length < typeLen) return `${path} tuple value has too few items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
      if (value.length > typeLen) return `${path} tuple value has too many items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
    }
    return ValidationError.formatError(mixed.notType, params);
  }
};
var locale = Object.assign(Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});

const isSchema = obj => obj && obj.__isYupSchema__;

class Condition {
  static fromOptions(refs, config) {
    if (!config.then && !config.otherwise) throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
    let {
      is,
      then,
      otherwise
    } = config;
    let check = typeof is === 'function' ? is : (...values) => values.every(value => value === is);
    return new Condition(refs, (values, schema) => {
      var _branch;
      let branch = check(...values) ? then : otherwise;
      return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
    });
  }
  constructor(refs, builder) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    this.fn = builder;
  }
  resolve(base, options) {
    let values = this.refs.map(ref =>
    // TODO: ? operator here?
    ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn(values, base, options);
    if (schema === undefined ||
    // @ts-ignore this can be base
    schema === base) {
      return base;
    }
    if (!isSchema(schema)) throw new TypeError('conditions must return a schema object');
    return schema.resolve(options);
  }
}

const prefixes = {
  context: '$',
  value: '.'
};
function create$9(key, options) {
  return new Reference(key, options);
}
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== 'string') throw new TypeError('ref must be a string, got: ' + key);
    this.key = key.trim();
    if (key === '') throw new TypeError('ref must be a non-empty string');
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : '';
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.getter)(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter) result = this.getter(result || {});
    if (this.map) result = this.map(result);
    return result;
  }

  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: 'ref',
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}

// @ts-ignore
Reference.prototype.__isYupRef = true;

const isAbsent = value => value == null;

function createValidation(config) {
  function validate({
    value,
    path = '',
    options,
    originalValue,
    schema
  }, panic, next) {
    const {
      name,
      test,
      params,
      message,
      skipAbsent
    } = config;
    let {
      parent,
      context,
      abortEarly = schema.spec.abortEarly
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = Object.assign({
        value,
        originalValue,
        label: schema.spec.label,
        path: overrides.path || path,
        spec: schema.spec
      }, params, overrides.params);
      for (const key of Object.keys(nextParams)) nextParams[key] = resolve(nextParams[key]);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }
    const invalid = abortEarly ? panic : next;
    let ctx = {
      path,
      parent,
      type: name,
      from: options.from,
      createError,
      resolve,
      options,
      originalValue,
      schema
    };
    const handleResult = validOrError => {
      if (ValidationError.isError(validOrError)) invalid(validOrError);else if (!validOrError) invalid(createError());else next(null);
    };
    const handleError = err => {
      if (ValidationError.isError(err)) invalid(err);else panic(err);
    };
    const shouldSkip = skipAbsent && isAbsent(value);
    if (!options.sync) {
      try {
        Promise.resolve(!shouldSkip ? test.call(ctx, value, ctx) : true).then(handleResult, handleError);
      } catch (err) {
        handleError(err);
      }
      return;
    }
    let result;
    try {
      var _result;
      result = !shouldSkip ? test.call(ctx, value, ctx) : true;
      if (typeof ((_result = result) == null ? void 0 : _result.then) === 'function') {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` + `This test will finish after the validate call has returned`);
      }
    } catch (err) {
      handleError(err);
      return;
    }
    handleResult(result);
  }
  validate.OPTIONS = config;
  return validate;
}

function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;

  // root path: ''
  if (!path) return {
    parent,
    parentPath: path,
    schema
  };
  (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.forEach)(path, (_part, isBracket, isArray) => {
    let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    let isTuple = schema.type === 'tuple';
    let idx = isArray ? parseInt(part, 10) : 0;
    if (schema.innerType || isTuple) {
      if (isTuple && !isArray) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. ` + `because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = isTuple ? schema.spec.types[idx] : schema.innerType;
    }

    // sometimes the array index part of a path doesn't exist: "nested.arr.child"
    // in these cases the current part is the next schema and should be processed
    // in this iteration. For cases where the index signature is included this
    // check will fail and we'll handle the `child` part on the next iteration like normal
    if (!isArray) {
      if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. ` + `(failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? '[' + _part + ']' : '.' + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
function reach(obj, path, value, context) {
  return getIn(obj, path, value, context).schema;
}

class ReferenceSet extends Set {
  describe() {
    const description = [];
    for (const item of this.values()) {
      description.push(Reference.isRef(item) ? item.describe() : item);
    }
    return description;
  }
  resolveAll(resolve) {
    let result = [];
    for (const item of this.values()) {
      result.push(resolve(item));
    }
    return result;
  }
  clone() {
    return new ReferenceSet(this.values());
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.forEach(value => next.add(value));
    removeItems.forEach(value => next.delete(value));
    return next;
  }
}

// tweaked from https://github.com/Kelin2025/nanoclone/blob/0abeb7635bda9b68ef2277093f76dbe3bf3948e1/src/index.js
function clone(src, seen = new Map()) {
  if (isSchema(src) || !src || typeof src !== 'object') return src;
  if (seen.has(src)) return seen.get(src);
  let copy;
  if (src instanceof Date) {
    // Date
    copy = new Date(src.getTime());
    seen.set(src, copy);
  } else if (src instanceof RegExp) {
    // RegExp
    copy = new RegExp(src);
    seen.set(src, copy);
  } else if (Array.isArray(src)) {
    // Array
    copy = new Array(src.length);
    seen.set(src, copy);
    for (let i = 0; i < src.length; i++) copy[i] = clone(src[i], seen);
  } else if (src instanceof Map) {
    // Map
    copy = new Map();
    seen.set(src, copy);
    for (const [k, v] of src.entries()) copy.set(k, clone(v, seen));
  } else if (src instanceof Set) {
    // Set
    copy = new Set();
    seen.set(src, copy);
    for (const v of src) copy.add(clone(v, seen));
  } else if (src instanceof Object) {
    // Object
    copy = {};
    seen.set(src, copy);
    for (const [k, v] of Object.entries(src)) copy[k] = clone(v, seen);
  } else {
    throw Error(`Unable to clone ${src}`);
  }
  return copy;
}

class Schema {
  constructor(options) {
    this.type = void 0;
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this.internalTests = {};
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = Object.create(null);
    this._typeCheck = void 0;
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = options.type;
    this._typeCheck = options.check;
    this.spec = Object.assign({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      optional: true,
      coerce: true
    }, options == null ? void 0 : options.spec);
    this.withMutation(s => {
      s.nonNullable();
    });
  }

  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec) Object.assign(this.spec, spec);
      return this;
    }

    // if the nested value is a schema we can skip cloning, since
    // they are already immutable
    const next = Object.create(Object.getPrototypeOf(this));

    // @ts-expect-error this is readonly
    next.type = this.type;
    next._typeCheck = this._typeCheck;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.internalTests = Object.assign({}, this.internalTests);
    next.exclusiveTests = Object.assign({}, this.exclusiveTests);

    // @ts-expect-error this is readonly
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(Object.assign({}, this.spec, spec));
    return next;
  }
  label(label) {
    let next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this) return this;
    if (schema.type !== this.type && this.type !== 'mixed') throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = Object.assign({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);

    // manually merge the blacklist/whitelist (the other `schema` takes
    // precedence in case of conflicts)
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);

    // start with the current tests
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;

    // manually add the new tests to ensure
    // the deduping logic is consistent
    combined.withMutation(next => {
      schema.tests.forEach(fn => {
        next.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v) {
    if (v == null) {
      if (this.spec.nullable && v === null) return true;
      if (this.spec.optional && v === undefined) return true;
      return false;
    }
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  resolveOptions(options) {
    var _options$strict, _options$abortEarly, _options$recursive;
    return Object.assign({}, options, {
      from: options.from || [],
      strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
      abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
      recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive
    });
  }

  /**
   * Run the configured transform pipeline over an input value.
   */

  cast(value, options = {}) {
    let resolvedSchema = this.resolve(Object.assign({
      value
    }, options));
    let allowOptionality = options.assert === 'ignore-optionality';
    let result = resolvedSchema._cast(value, options);
    if (options.assert !== false && !resolvedSchema.isType(result)) {
      if (allowOptionality && isAbsent(result)) {
        return result;
      }
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || 'field'} could not be cast to a value ` + `that satisfies the schema type: "${resolvedSchema.type}". \n\n` + `attempted value: ${formattedValue} \n` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ''));
    }
    return result;
  }
  _cast(rawValue, options) {
    let value = rawValue === undefined ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
    if (value === undefined) {
      value = this.getDefault(options);
    }
    return value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      path,
      originalValue = _value,
      strict = this.spec.strict
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, Object.assign({
        assert: false
      }, options));
    }
    let initialTests = [];
    for (let test of Object.values(this.internalTests)) {
      if (test) initialTests.push(test);
    }
    this.runTests({
      path,
      value,
      originalValue,
      options,
      tests: initialTests
    }, panic, initialErrors => {
      // even if we aren't ending early we can't proceed further if the types aren't correct
      if (initialErrors.length) {
        return next(initialErrors, value);
      }
      this.runTests({
        path,
        value,
        originalValue,
        options,
        tests: this.tests
      }, panic, next);
    });
  }

  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(runOptions, panic, next) {
    let fired = false;
    let {
      tests,
      value,
      originalValue,
      path,
      options
    } = runOptions;
    let panicOnce = arg => {
      if (fired) return;
      fired = true;
      panic(arg, value);
    };
    let nextOnce = arg => {
      if (fired) return;
      fired = true;
      next(arg, value);
    };
    let count = tests.length;
    let nestedErrors = [];
    if (!count) return nextOnce([]);
    let args = {
      value,
      originalValue,
      path,
      options,
      schema: this
    };
    for (let i = 0; i < tests.length; i++) {
      const test = tests[i];
      test(args, panicOnce, function finishTestRun(err) {
        if (err) {
          nestedErrors = nestedErrors.concat(err);
        }
        if (--count <= 0) {
          nextOnce(nestedErrors);
        }
      });
    }
  }
  asNestedTest({
    key,
    index,
    parent,
    parentPath,
    originalParent,
    options
  }) {
    const k = key != null ? key : index;
    if (k == null) {
      throw TypeError('Must include `key` or `index` for nested validations');
    }
    const isIndex = typeof k === 'number';
    let value = parent[k];
    const testOptions = Object.assign({}, options, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: true,
      parent,
      value,
      originalValue: originalParent[k],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: undefined,
      // index: undefined,
      [isIndex ? 'index' : 'key']: k,
      path: isIndex || k.includes('.') ? `${parentPath || ''}[${value ? k : `"${k}"`}]` : (parentPath ? `${parentPath}.` : '') + key
    });
    return (_, panic, next) => this.resolve(testOptions)._validate(value, testOptions, panic, next);
  }
  validate(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      reject(error);
    }, (errors, validated) => {
      if (errors.length) reject(new ValidationError(errors, validated));else resolve(validated);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let result;
    schema._validate(value, Object.assign({}, options, {
      sync: true
    }), (error, parsed) => {
      if (ValidationError.isError(error)) error.value = parsed;
      throw error;
    }, (errors, validated) => {
      if (errors.length) throw new ValidationError(errors, value);
      result = validated;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, err => {
      if (ValidationError.isError(err)) return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err)) return false;
      throw err;
    }
  }
  _getDefault(options) {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === 'function' ? defaultValue.call(this, options) : clone(defaultValue);
  }
  getDefault(options
  // If schema is defaulted we know it's at least not undefined
  ) {
    let schema = this.resolve(options || {});
    return schema._getDefault(options);
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    return this.clone({
      strict: isStrict
    });
  }
  nullability(nullable, message) {
    const next = this.clone({
      nullable
    });
    next.internalTests.nullable = createValidation({
      message,
      name: 'nullable',
      test(value) {
        return value === null ? this.schema.spec.nullable : true;
      }
    });
    return next;
  }
  optionality(optional, message) {
    const next = this.clone({
      optional
    });
    next.internalTests.optionality = createValidation({
      message,
      name: 'optionality',
      test(value) {
        return value === undefined ? this.schema.spec.optional : true;
      }
    });
    return next;
  }
  optional() {
    return this.optionality(true);
  }
  defined(message = mixed.defined) {
    return this.optionality(false, message);
  }
  nullable() {
    return this.nullability(true);
  }
  nonNullable(message = mixed.notNull) {
    return this.nullability(false, message);
  }
  required(message = mixed.required) {
    return this.clone().withMutation(next => next.nonNullable(message).defined(message));
  }
  notRequired() {
    return this.clone().withMutation(next => next.nullable().optional());
  }
  transform(fn) {
    let next = this.clone();
    next.transforms.push(fn);
    return next;
  }

  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */

  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === 'function') {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === undefined) opts.message = mixed.default;
    if (typeof opts.test !== 'function') throw new TypeError('`test` is a required parameters');
    let next = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name) throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
    }
    if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter(fn => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive) return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
      }
      return true;
    });
    next.tests.push(validate);
    return next;
  }
  when(keys, options) {
    if (!Array.isArray(keys) && typeof keys !== 'string') {
      options = keys;
      keys = '.';
    }
    let next = this.clone();
    let deps = toArray(keys).map(key => new Reference(key));
    deps.forEach(dep => {
      // @ts-ignore readonly array
      if (dep.isSibling) next.deps.push(dep.key);
    });
    next.conditions.push(typeof options === 'function' ? new Condition(deps, options) : Condition.fromOptions(deps, options));
    return next;
  }
  typeError(message) {
    let next = this.clone();
    next.internalTests.typeError = createValidation({
      message,
      name: 'typeError',
      skipAbsent: true,
      test(value) {
        if (!this.schema._typeCheck(value)) return this.createError({
          params: {
            type: this.schema.type
          }
        });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next.internalTests.whiteList = createValidation({
      message,
      name: 'oneOf',
      skipAbsent: true,
      test(value) {
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: Array.from(valids).join(', '),
            resolved
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    let next = this.clone();
    enums.forEach(val => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next.internalTests.blacklist = createValidation({
      message,
      name: 'notOneOf',
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value)) return this.createError({
          params: {
            values: Array.from(invalids).join(', '),
            resolved
          }
        });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }

  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(options) {
    const next = (options ? this.resolve(options) : this).clone();
    const {
      label,
      meta,
      optional,
      nullable
    } = next.spec;
    const description = {
      meta,
      label,
      optional,
      nullable,
      default: next.getDefault(options),
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map(fn => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list) => list.findIndex(c => c.name === n.name) === idx)
    };
    return description;
  }
}
// @ts-expect-error
Schema.prototype.__isYupSchema__ = true;
for (const method of ['validate', 'validateSync']) Schema.prototype[`${method}At`] = function (path, value, options = {}) {
  const {
    parent,
    parentPath,
    schema
  } = getIn(this, path, value, options.context);
  return schema[method](parent && parent[parentPath], Object.assign({}, options, {
    parent,
    path
  }));
};
for (const alias of ['equals', 'is']) Schema.prototype[alias] = Schema.prototype.oneOf;
for (const alias of ['not', 'nope']) Schema.prototype[alias] = Schema.prototype.notOneOf;

const returnsTrue = () => true;
function create$8(spec) {
  return new MixedSchema(spec);
}
class MixedSchema extends Schema {
  constructor(spec) {
    super(typeof spec === 'function' ? {
      type: 'mixed',
      check: spec
    } : Object.assign({
      type: 'mixed',
      check: returnsTrue
    }, spec));
  }
}
create$8.prototype = MixedSchema.prototype;

function create$7() {
  return new BooleanSchema();
}
class BooleanSchema extends Schema {
  constructor() {
    super({
      type: 'boolean',
      check(v) {
        if (v instanceof Boolean) v = v.valueOf();
        return typeof v === 'boolean';
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (ctx.spec.coerce && !ctx.isType(value)) {
          if (/^(true|1)$/i.test(String(value))) return true;
          if (/^(false|0)$/i.test(String(value))) return false;
        }
        return value;
      });
    });
  }
  isTrue(message = boolean.isValue) {
    return this.test({
      message,
      name: 'is-value',
      exclusive: true,
      params: {
        value: 'true'
      },
      test(value) {
        return isAbsent(value) || value === true;
      }
    });
  }
  isFalse(message = boolean.isValue) {
    return this.test({
      message,
      name: 'is-value',
      exclusive: true,
      params: {
        value: 'false'
      },
      test(value) {
        return isAbsent(value) || value === false;
      }
    });
  }
  default(def) {
    return super.default(def);
  }
  defined(msg) {
    return super.defined(msg);
  }
  optional() {
    return super.optional();
  }
  required(msg) {
    return super.required(msg);
  }
  notRequired() {
    return super.notRequired();
  }
  nullable() {
    return super.nullable();
  }
  nonNullable(msg) {
    return super.nonNullable(msg);
  }
  strip(v) {
    return super.strip(v);
  }
}
create$7.prototype = BooleanSchema.prototype;

// Taken from HTML spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
let rEmail =
// eslint-disable-next-line
/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let rUrl =
// eslint-disable-next-line
/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

// eslint-disable-next-line
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = value => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$6() {
  return new StringSchema();
}
class StringSchema extends Schema {
  constructor() {
    super({
      type: 'string',
      check(value) {
        if (value instanceof String) value = value.valueOf();
        return typeof value === 'string';
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value)) return value;

        // don't ever convert arrays
        if (Array.isArray(value)) return value;
        const strValue = value != null && value.toString ? value.toString() : value;

        // no one wants plain objects converted to [Object object]
        if (strValue === objStringTag) return value;
        return strValue;
      });
    });
  }
  required(message) {
    return super.required(message).withMutation(schema => schema.test({
      message: message || mixed.required,
      name: 'required',
      skipAbsent: true,
      test: value => !!value.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation(schema => {
      schema.tests = schema.tests.filter(t => t.OPTIONS.name !== 'required');
      return schema;
    });
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: 'length',
      exclusive: true,
      params: {
        length
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: 'max',
      exclusive: true,
      message,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;
    if (options) {
      if (typeof options === 'object') {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || 'matches',
      message: message || string.matches,
      params: {
        regex
      },
      skipAbsent: true,
      test: value => value === '' && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: 'email',
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: 'url',
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: 'uuid',
      message,
      excludeEmptyString: false
    });
  }

  //-- transforms --
  ensure() {
    return this.default('').transform(val => val === null ? '' : val);
  }
  trim(message = string.trim) {
    return this.transform(val => val != null ? val.trim() : val).test({
      message,
      name: 'trim',
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform(value => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      skipAbsent: true,
      test: value => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform(value => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: 'string_case',
      exclusive: true,
      skipAbsent: true,
      test: value => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$6.prototype = StringSchema.prototype;

//
// String Interfaces
//

let isNaN$1 = value => value != +value;
function create$5() {
  return new NumberSchema();
}
class NumberSchema extends Schema {
  constructor() {
    super({
      type: 'number',
      check(value) {
        if (value instanceof Number) value = value.valueOf();
        return typeof value === 'number' && !isNaN$1(value);
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce) return value;
        let parsed = value;
        if (typeof parsed === 'string') {
          parsed = parsed.replace(/\s/g, '');
          if (parsed === '') return NaN;
          // don't use parseFloat to avoid positives on alpha-numeric strings
          parsed = +parsed;
        }

        // null -> NaN isn't useful; treat all nulls as null and let it fail on
        // nullability check vs TypeErrors
        if (ctx.isType(parsed) || parsed === null) return parsed;
        return parseFloat(parsed);
      });
    });
  }
  min(min, message = number.min) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(min);
      }
    });
  }
  max(max, message = number.max) {
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(max);
      }
    });
  }
  lessThan(less, message = number.lessThan) {
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        less
      },
      skipAbsent: true,
      test(value) {
        return value < this.resolve(less);
      }
    });
  }
  moreThan(more, message = number.moreThan) {
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        more
      },
      skipAbsent: true,
      test(value) {
        return value > this.resolve(more);
      }
    });
  }
  positive(msg = number.positive) {
    return this.moreThan(0, msg);
  }
  negative(msg = number.negative) {
    return this.lessThan(0, msg);
  }
  integer(message = number.integer) {
    return this.test({
      name: 'integer',
      message,
      skipAbsent: true,
      test: val => Number.isInteger(val)
    });
  }
  truncate() {
    return this.transform(value => !isAbsent(value) ? value | 0 : value);
  }
  round(method) {
    var _method;
    let avail = ['ceil', 'floor', 'round', 'trunc'];
    method = ((_method = method) == null ? void 0 : _method.toLowerCase()) || 'round';

    // this exists for symemtry with the new Math.trunc
    if (method === 'trunc') return this.truncate();
    if (avail.indexOf(method.toLowerCase()) === -1) throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
    return this.transform(value => !isAbsent(value) ? Math[method](value) : value);
  }
}
create$5.prototype = NumberSchema.prototype;

//
// Number Interfaces
//

/* eslint-disable */
/**
 *
 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
 * NON-CONFORMANT EDITION.
 * © 2011 Colin Snover <http://zetafleet.com>
 * Released under MIT license.
 */

//              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11],
    minutesOffset = 0,
    timestamp,
    struct;
  if (struct = isoReg.exec(date)) {
    // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
    for (var i = 0, k; k = numericKeys[i]; ++i) struct[k] = +struct[k] || 0;

    // allow undefined days and months
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;

    // allow arbitrary sub-second precision beyond milliseconds
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;

    // timestamps without timezone identifiers should be considered local time
    if ((struct[8] === undefined || struct[8] === '') && (struct[9] === undefined || struct[9] === '')) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);else {
      if (struct[8] !== 'Z' && struct[9] !== undefined) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === '+') minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else timestamp = Date.parse ? Date.parse(date) : NaN;
  return timestamp;
}

// @ts-ignore
let invalidDate = new Date('');
let isDate = obj => Object.prototype.toString.call(obj) === '[object Date]';
function create$4() {
  return new DateSchema();
}
class DateSchema extends Schema {
  constructor() {
    super({
      type: 'date',
      check(v) {
        return isDate(v) && !isNaN(v.getTime());
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        // null -> InvalidDate isn't useful; treat all nulls as null and let it fail on
        // nullability check vs TypeErrors
        if (!ctx.spec.coerce || ctx.isType(value) || value === null) return value;
        value = parseIsoDate(value);

        // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.
        return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
      });
    });
  }
  prepareParam(ref, name) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, 'min');
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    let limit = this.prepareParam(max, 'max');
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
create$4.prototype = DateSchema.prototype;
create$4.INVALID_DATE = invalidDate;

// @ts-expect-error
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = new Set();
  let excludes = new Set(excludedEdges.map(([a, b]) => `${a}-${b}`));
  function addNode(depPath, key) {
    let node = (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.split)(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`)) edges.push([key, node]);
  }
  for (const key of Object.keys(fields)) {
    let value = fields[key];
    nodes.add(key);
    if (Reference.isRef(value) && value.isSibling) addNode(value.path, key);else if (isSchema(value) && 'deps' in value) value.deps.forEach(path => addNode(path, key));
  }
  return toposort__WEBPACK_IMPORTED_MODULE_2___default().array(Array.from(nodes), edges).reverse();
}

function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii) => {
    var _err$path;
    if ((_err$path = err.path) != null && _err$path.includes(key)) {
      idx = ii;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys) {
  return (a, b) => {
    return findIndex(keys, a) - findIndex(keys, b);
  };
}

const parseJson = (value, _, ctx) => {
  if (typeof value !== 'string') {
    return value;
  }
  let parsed = value;
  try {
    parsed = JSON.parse(value);
  } catch (err) {
    /* */
  }
  return ctx.isType(parsed) ? parsed : value;
};

// @ts-ignore
function deepPartial(schema) {
  if ('fields' in schema) {
    const partial = {};
    for (const [key, fieldSchema] of Object.entries(schema.fields)) {
      partial[key] = deepPartial(fieldSchema);
    }
    return schema.setFields(partial);
  }
  if (schema.type === 'array') {
    const nextArray = schema.optional();
    if (nextArray.innerType) nextArray.innerType = deepPartial(nextArray.innerType);
    return nextArray;
  }
  if (schema.type === 'tuple') {
    return schema.optional().clone({
      types: schema.spec.types.map(deepPartial)
    });
  }
  if ('optional' in schema) {
    return schema.optional();
  }
  return schema;
}
const deepHas = (obj, p) => {
  const path = [...(0,property_expr__WEBPACK_IMPORTED_MODULE_0__.normalizePath)(p)];
  if (path.length === 1) return path[0] in obj;
  let last = path.pop();
  let parent = (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.getter)((0,property_expr__WEBPACK_IMPORTED_MODULE_0__.join)(path), true)(obj);
  return !!(parent && last in parent);
};
let isObject = obj => Object.prototype.toString.call(obj) === '[object Object]';
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter(key => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
function create$3(spec) {
  return new ObjectSchema(spec);
}
class ObjectSchema extends Schema {
  constructor(spec) {
    super({
      type: 'object',
      check(value) {
        return isObject(value) || typeof value === 'function';
      }
    });
    this.fields = Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);

    //should ignore nulls here
    if (value === undefined) return this.getDefault(options);
    if (!this._typeCheck(value)) return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = [].concat(this._nodes, Object.keys(value).filter(v => !this._nodes.includes(v)));
    let intermediateValue = {}; // is filled during the transform below
    let innerOptions = Object.assign({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = (prop in value);
      if (field) {
        let fieldValue;
        let inputValue = value[prop];

        // safe to mutate since this is fired in sequence
        innerOptions.path = (options.path ? `${options.path}.` : '') + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = field instanceof Schema ? field.spec : undefined;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec != null && fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ?
        // TODO: use _cast, this is double resolving
        field.cast(value[prop], innerOptions) : value[prop];
        if (fieldValue !== undefined) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, options = {}, panic, next) {
    let {
      from = [],
      originalValue = _value,
      recursive = this.spec.recursive
    } = options;
    options.from = [{
      schema: this,
      value: originalValue
    }, ...from];
    // this flag is needed for handling `strict` correctly in the context of
    // validation vs just casting. e.g strict() on a field is only used when validating
    options.__validating = true;
    options.originalValue = originalValue;
    super._validate(_value, options, panic, (objectErrors, value) => {
      if (!recursive || !isObject(value)) {
        next(objectErrors, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = [];
      for (let key of this._nodes) {
        let field = this.fields[key];
        if (!field || Reference.isRef(field)) {
          continue;
        }
        tests.push(field.asNestedTest({
          options,
          key,
          parent: value,
          parentPath: options.path,
          originalParent: originalValue
        }));
      }
      this.runTests({
        tests,
        value,
        originalValue,
        options
      }, panic, fieldErrors => {
        next(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
      });
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    next.fields = Object.assign({}, this.fields);
    next._nodes = this._nodes;
    next._excludedEdges = this._excludedEdges;
    next._sortErrors = this._sortErrors;
    return next;
  }
  concat(schema) {
    let next = super.concat(schema);
    let nextFields = next.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      nextFields[field] = target === undefined ? schemaOrRef : target;
    }
    return next.withMutation(s =>
    // XXX: excludes here is wrong
    s.setFields(nextFields, [...this._excludedEdges, ...schema._excludedEdges]));
  }
  _getDefault(options) {
    if ('default' in this.spec) {
      return super._getDefault(options);
    }

    // if there is no default set invent one
    if (!this._nodes.length) {
      return undefined;
    }
    let dft = {};
    this._nodes.forEach(key => {
      var _innerOptions;
      const field = this.fields[key];
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      dft[key] = field && 'getDefault' in field ? field.getDefault(innerOptions) : undefined;
    });
    return dft;
  }
  setFields(shape, excludedEdges) {
    let next = this.clone();
    next.fields = shape;
    next._nodes = sortFields(shape, excludedEdges);
    next._sortErrors = sortByKeyOrder(Object.keys(shape));
    // XXX: this carries over edges which may not be what you want
    if (excludedEdges) next._excludedEdges = excludedEdges;
    return next;
  }
  shape(additions, excludes = []) {
    return this.clone().withMutation(next => {
      let edges = next._excludedEdges;
      if (excludes.length) {
        if (!Array.isArray(excludes[0])) excludes = [excludes];
        edges = [...next._excludedEdges, ...excludes];
      }

      // XXX: excludes here is wrong
      return next.setFields(Object.assign(next.fields, additions), edges);
    });
  }
  partial() {
    const partial = {};
    for (const [key, schema] of Object.entries(this.fields)) {
      partial[key] = 'optional' in schema && schema.optional instanceof Function ? schema.optional() : schema;
    }
    return this.setFields(partial);
  }
  deepPartial() {
    const next = deepPartial(this);
    return next;
  }
  pick(keys) {
    const picked = {};
    for (const key of keys) {
      if (this.fields[key]) picked[key] = this.fields[key];
    }
    return this.setFields(picked);
  }
  omit(keys) {
    const fields = Object.assign({}, this.fields);
    for (const key of keys) {
      delete fields[key];
    }
    return this.setFields(fields);
  }
  from(from, to, alias) {
    let fromGetter = (0,property_expr__WEBPACK_IMPORTED_MODULE_0__.getter)(from, true);
    return this.transform(obj => {
      if (!obj) return obj;
      let newObj = obj;
      if (deepHas(obj, from)) {
        newObj = Object.assign({}, obj);
        if (!alias) delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }

  /** Parse an input JSON string to an object */
  json() {
    return this.transform(parseJson);
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow !== 'boolean') {
      message = noAllow;
      noAllow = true;
    }
    let next = this.test({
      name: 'noUnknown',
      exclusive: true,
      message: message,
      test(value) {
        if (value == null) return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(', ')
          }
        });
      }
    });
    next.spec.noUnknown = noAllow;
    return next;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn) {
    return this.transform(obj => {
      if (!obj) return obj;
      const result = {};
      for (const key of Object.keys(obj)) result[fn(key)] = obj[key];
      return result;
    });
  }
  camelCase() {
    return this.transformKeys(tiny_case__WEBPACK_IMPORTED_MODULE_1__.camelCase);
  }
  snakeCase() {
    return this.transformKeys(tiny_case__WEBPACK_IMPORTED_MODULE_1__.snakeCase);
  }
  constantCase() {
    return this.transformKeys(key => (0,tiny_case__WEBPACK_IMPORTED_MODULE_1__.snakeCase)(key).toUpperCase());
  }
  describe(options) {
    let base = super.describe(options);
    base.fields = {};
    for (const [key, value] of Object.entries(this.fields)) {
      var _innerOptions2;
      let innerOptions = options;
      if ((_innerOptions2 = innerOptions) != null && _innerOptions2.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      base.fields[key] = value.describe(innerOptions);
    }
    return base;
  }
}
create$3.prototype = ObjectSchema.prototype;

function create$2(type) {
  return new ArraySchema(type);
}
class ArraySchema extends Schema {
  constructor(type) {
    super({
      type: 'array',
      spec: {
        types: type
      },
      check(v) {
        return Array.isArray(v);
      }
    });

    // `undefined` specifically means uninitialized, as opposed to "no subtype"
    this.innerType = void 0;
    this.innerType = type;
  }
  _cast(_value, _opts) {
    const value = super._cast(_value, _opts);

    // should ignore nulls here
    if (!this._typeCheck(value) || !this.innerType) {
      return value;
    }
    let isChanged = false;
    const castArray = value.map((v, idx) => {
      const castElement = this.innerType.cast(v, Object.assign({}, _opts, {
        path: `${_opts.path || ''}[${idx}]`
      }));
      if (castElement !== v) {
        isChanged = true;
      }
      return castElement;
    });
    return isChanged ? castArray : value;
  }
  _validate(_value, options = {}, panic, next) {
    var _options$recursive;
    // let sync = options.sync;
    // let path = options.path;
    let innerType = this.innerType;
    // let endEarly = options.abortEarly ?? this.spec.abortEarly;
    let recursive = (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive;
    options.originalValue != null ? options.originalValue : _value;
    super._validate(_value, options, panic, (arrayErrors, value) => {
      var _options$originalValu2;
      if (!recursive || !innerType || !this._typeCheck(value)) {
        next(arrayErrors, value);
        return;
      }

      // #950 Ensure that sparse array empty slots are validated
      let tests = new Array(value.length);
      for (let index = 0; index < value.length; index++) {
        var _options$originalValu;
        tests[index] = innerType.asNestedTest({
          options,
          index,
          parent: value,
          parentPath: options.path,
          originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
        });
      }
      this.runTests({
        value,
        tests,
        originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
        options
      }, panic, innerTypeErrors => next(innerTypeErrors.concat(arrayErrors), value));
    });
  }
  clone(spec) {
    const next = super.clone(spec);
    // @ts-expect-error readonly
    next.innerType = this.innerType;
    return next;
  }

  /** Parse an input JSON string to an object */
  json() {
    return this.transform(parseJson);
  }
  concat(schema) {
    let next = super.concat(schema);

    // @ts-expect-error readonly
    next.innerType = this.innerType;
    if (schema.innerType)
      // @ts-expect-error readonly
      next.innerType = next.innerType ?
      // @ts-expect-error Lazy doesn't have concat and will break
      next.innerType.concat(schema.innerType) : schema.innerType;
    return next;
  }
  of(schema) {
    // FIXME: this should return a new instance of array without the default to be
    let next = this.clone();
    if (!isSchema(schema)) throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' + printValue(schema));

    // @ts-expect-error readonly
    next.innerType = schema;
    next.spec = Object.assign({}, next.spec, {
      types: schema
    });
    return next;
  }
  length(length, message = array.length) {
    return this.test({
      message,
      name: 'length',
      exclusive: true,
      params: {
        length
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length);
      }
    });
  }
  min(min, message) {
    message = message || array.min;
    return this.test({
      message,
      name: 'min',
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      // FIXME(ts): Array<typeof T>
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message) {
    message = message || array.max;
    return this.test({
      message,
      name: 'max',
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  ensure() {
    return this.default(() => []).transform((val, original) => {
      // We don't want to return `null` for nullable schema
      if (this._typeCheck(val)) return val;
      return original == null ? [] : [].concat(original);
    });
  }
  compact(rejector) {
    let reject = !rejector ? v => !!v : (v, i, a) => !rejector(v, i, a);
    return this.transform(values => values != null ? values.filter(reject) : values);
  }
  describe(options) {
    let base = super.describe(options);
    if (this.innerType) {
      var _innerOptions;
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[0]
        });
      }
      base.innerType = this.innerType.describe(innerOptions);
    }
    return base;
  }
}
create$2.prototype = ArraySchema.prototype;

// @ts-ignore
function create$1(schemas) {
  return new TupleSchema(schemas);
}
class TupleSchema extends Schema {
  constructor(schemas) {
    super({
      type: 'tuple',
      spec: {
        types: schemas
      },
      check(v) {
        const types = this.spec.types;
        return Array.isArray(v) && v.length === types.length;
      }
    });
    this.withMutation(() => {
      this.typeError(tuple.notType);
    });
  }
  _cast(inputValue, options) {
    const {
      types
    } = this.spec;
    const value = super._cast(inputValue, options);
    if (!this._typeCheck(value)) {
      return value;
    }
    let isChanged = false;
    const castArray = types.map((type, idx) => {
      const castElement = type.cast(value[idx], Object.assign({}, options, {
        path: `${options.path || ''}[${idx}]`
      }));
      if (castElement !== value[idx]) isChanged = true;
      return castElement;
    });
    return isChanged ? castArray : value;
  }
  _validate(_value, options = {}, panic, next) {
    let itemTypes = this.spec.types;
    super._validate(_value, options, panic, (tupleErrors, value) => {
      var _options$originalValu2;
      // intentionally not respecting recursive
      if (!this._typeCheck(value)) {
        next(tupleErrors, value);
        return;
      }
      let tests = [];
      for (let [index, itemSchema] of itemTypes.entries()) {
        var _options$originalValu;
        tests[index] = itemSchema.asNestedTest({
          options,
          index,
          parent: value,
          parentPath: options.path,
          originalParent: (_options$originalValu = options.originalValue) != null ? _options$originalValu : _value
        });
      }
      this.runTests({
        value,
        tests,
        originalValue: (_options$originalValu2 = options.originalValue) != null ? _options$originalValu2 : _value,
        options
      }, panic, innerTypeErrors => next(innerTypeErrors.concat(tupleErrors), value));
    });
  }
  describe(options) {
    let base = super.describe(options);
    base.innerType = this.spec.types.map((schema, index) => {
      var _innerOptions;
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[index]
        });
      }
      return schema.describe(innerOptions);
    });
    return base;
  }
}
create$1.prototype = TupleSchema.prototype;

function create(builder) {
  return new Lazy(builder);
}
class Lazy {
  constructor(builder) {
    this.type = 'lazy';
    this.__isYupSchema__ = true;
    this.spec = void 0;
    this._resolve = (value, options = {}) => {
      let schema = this.builder(value, options);
      if (!isSchema(schema)) throw new TypeError('lazy() functions must return a valid schema');
      if (this.spec.optional) schema = schema.optional();
      return schema.resolve(options);
    };
    this.builder = builder;
    this.spec = {
      meta: undefined,
      optional: false
    };
  }
  clone(spec) {
    const next = new Lazy(this.builder);
    next.spec = Object.assign({}, this.spec, spec);
    return next;
  }
  optionality(optional) {
    const next = this.clone({
      optional
    });
    return next;
  }
  optional() {
    return this.optionality(true);
  }
  resolve(options) {
    return this._resolve(options.value, options);
  }
  cast(value, options) {
    return this._resolve(value, options).cast(value, options);
  }
  asNestedTest(config) {
    let {
      key,
      index,
      parent,
      options
    } = config;
    let value = parent[index != null ? index : key];
    return this._resolve(value, Object.assign({}, options, {
      value,
      parent
    })).asNestedTest(config);
  }
  validate(value, options) {
    return this._resolve(value, options).validate(value, options);
  }
  validateSync(value, options) {
    return this._resolve(value, options).validateSync(value, options);
  }
  validateAt(path, value, options) {
    return this._resolve(value, options).validateAt(path, value, options);
  }
  validateSyncAt(path, value, options) {
    return this._resolve(value, options).validateSyncAt(path, value, options);
  }
  isValid(value, options) {
    return this._resolve(value, options).isValid(value, options);
  }
  isValidSync(value, options) {
    return this._resolve(value, options).isValidSync(value, options);
  }
  describe(options) {
    return options ? this.resolve(options).describe(options) : {
      type: 'lazy',
      meta: this.spec.meta,
      label: undefined
    };
  }
  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
}

function setLocale(custom) {
  Object.keys(custom).forEach(type => {
    // @ts-ignore
    Object.keys(custom[type]).forEach(method => {
      // @ts-ignore
      locale[type][method] = custom[type][method];
    });
  });
}

function addMethod(schemaType, name, fn) {
  if (!schemaType || !isSchema(schemaType.prototype)) throw new TypeError('You must provide a yup schema constructor function');
  if (typeof name !== 'string') throw new TypeError('A Method name must be provided');
  if (typeof fn !== 'function') throw new TypeError('Method function must be provided');
  schemaType.prototype[name] = fn;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSxPQUFPLDBDQUEwQztBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzRUFBc0U7QUFDdEU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsRUFBRSxnQ0FBZ0MsS0FBSyw2Q0FBNkMsS0FBSztBQUN0SDtBQUNBO0FBQ0EsaUdBQWlHLEVBQUUsa0JBQWtCLGtyQkFBa3JCLEVBQUUsa0JBQWtCLG9GQUFvRixFQUFFLGtCQUFrQiwyRkFBMkYsRUFBRSxrQkFBa0IsOEdBQThHLEVBQUUsa0JBQWtCOztBQUVwcEM7QUFDQSwwQkFBMEIsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUN4RjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3l1cC9pbmRleC5lc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0dGVyLCBmb3JFYWNoLCBzcGxpdCwgbm9ybWFsaXplUGF0aCwgam9pbiB9IGZyb20gJ3Byb3BlcnR5LWV4cHInO1xuaW1wb3J0IHsgY2FtZWxDYXNlLCBzbmFrZUNhc2UgfSBmcm9tICd0aW55LWNhc2UnO1xuaW1wb3J0IHRvcG9zb3J0IGZyb20gJ3RvcG9zb3J0JztcblxuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuY29uc3QgZXJyb3JUb1N0cmluZyA9IEVycm9yLnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHJlZ0V4cFRvU3RyaW5nID0gUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZztcbmNvbnN0IHN5bWJvbFRvU3RyaW5nID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgPyBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nIDogKCkgPT4gJyc7XG5jb25zdCBTWU1CT0xfUkVHRVhQID0gL15TeW1ib2xcXCgoLiopXFwpKC4qKSQvO1xuZnVuY3Rpb24gcHJpbnROdW1iZXIodmFsKSB7XG4gIGlmICh2YWwgIT0gK3ZhbCkgcmV0dXJuICdOYU4nO1xuICBjb25zdCBpc05lZ2F0aXZlWmVybyA9IHZhbCA9PT0gMCAmJiAxIC8gdmFsIDwgMDtcbiAgcmV0dXJuIGlzTmVnYXRpdmVaZXJvID8gJy0wJyA6ICcnICsgdmFsO1xufVxuZnVuY3Rpb24gcHJpbnRTaW1wbGVWYWx1ZSh2YWwsIHF1b3RlU3RyaW5ncyA9IGZhbHNlKSB7XG4gIGlmICh2YWwgPT0gbnVsbCB8fCB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSkgcmV0dXJuICcnICsgdmFsO1xuICBjb25zdCB0eXBlT2YgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZU9mID09PSAnbnVtYmVyJykgcmV0dXJuIHByaW50TnVtYmVyKHZhbCk7XG4gIGlmICh0eXBlT2YgPT09ICdzdHJpbmcnKSByZXR1cm4gcXVvdGVTdHJpbmdzID8gYFwiJHt2YWx9XCJgIDogdmFsO1xuICBpZiAodHlwZU9mID09PSAnZnVuY3Rpb24nKSByZXR1cm4gJ1tGdW5jdGlvbiAnICsgKHZhbC5uYW1lIHx8ICdhbm9ueW1vdXMnKSArICddJztcbiAgaWYgKHR5cGVPZiA9PT0gJ3N5bWJvbCcpIHJldHVybiBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbCkucmVwbGFjZShTWU1CT0xfUkVHRVhQLCAnU3ltYm9sKCQxKScpO1xuICBjb25zdCB0YWcgPSB0b1N0cmluZy5jYWxsKHZhbCkuc2xpY2UoOCwgLTEpO1xuICBpZiAodGFnID09PSAnRGF0ZScpIHJldHVybiBpc05hTih2YWwuZ2V0VGltZSgpKSA/ICcnICsgdmFsIDogdmFsLnRvSVNPU3RyaW5nKHZhbCk7XG4gIGlmICh0YWcgPT09ICdFcnJvcicgfHwgdmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiAnWycgKyBlcnJvclRvU3RyaW5nLmNhbGwodmFsKSArICddJztcbiAgaWYgKHRhZyA9PT0gJ1JlZ0V4cCcpIHJldHVybiByZWdFeHBUb1N0cmluZy5jYWxsKHZhbCk7XG4gIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gcHJpbnRWYWx1ZSh2YWx1ZSwgcXVvdGVTdHJpbmdzKSB7XG4gIGxldCByZXN1bHQgPSBwcmludFNpbXBsZVZhbHVlKHZhbHVlLCBxdW90ZVN0cmluZ3MpO1xuICBpZiAocmVzdWx0ICE9PSBudWxsKSByZXR1cm4gcmVzdWx0O1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgbGV0IHJlc3VsdCA9IHByaW50U2ltcGxlVmFsdWUodGhpc1trZXldLCBxdW90ZVN0cmluZ3MpO1xuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHJldHVybiByZXN1bHQ7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LCAyKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IFtdIDogW10uY29uY2F0KHZhbHVlKTtcbn1cblxubGV0IHN0clJlZyA9IC9cXCRcXHtcXHMqKFxcdyspXFxzKlxcfS9nO1xuY2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0aWMgZm9ybWF0RXJyb3IobWVzc2FnZSwgcGFyYW1zKSB7XG4gICAgY29uc3QgcGF0aCA9IHBhcmFtcy5sYWJlbCB8fCBwYXJhbXMucGF0aCB8fCAndGhpcyc7XG4gICAgaWYgKHBhdGggIT09IHBhcmFtcy5wYXRoKSBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBwYXJhbXMsIHtcbiAgICAgIHBhdGhcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSByZXR1cm4gbWVzc2FnZS5yZXBsYWNlKHN0clJlZywgKF8sIGtleSkgPT4gcHJpbnRWYWx1ZShwYXJhbXNba2V5XSkpO1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG1lc3NhZ2UocGFyYW1zKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuICBzdGF0aWMgaXNFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIGVyci5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJztcbiAgfVxuICBjb25zdHJ1Y3RvcihlcnJvck9yRXJyb3JzLCB2YWx1ZSwgZmllbGQsIHR5cGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSB2b2lkIDA7XG4gICAgdGhpcy5wYXRoID0gdm9pZCAwO1xuICAgIHRoaXMudHlwZSA9IHZvaWQgMDtcbiAgICB0aGlzLmVycm9ycyA9IHZvaWQgMDtcbiAgICB0aGlzLnBhcmFtcyA9IHZvaWQgMDtcbiAgICB0aGlzLmlubmVyID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3InO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnBhdGggPSBmaWVsZDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgdGhpcy5pbm5lciA9IFtdO1xuICAgIHRvQXJyYXkoZXJyb3JPckVycm9ycykuZm9yRWFjaChlcnIgPT4ge1xuICAgICAgaWYgKFZhbGlkYXRpb25FcnJvci5pc0Vycm9yKGVycikpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaCguLi5lcnIuZXJyb3JzKTtcbiAgICAgICAgdGhpcy5pbm5lciA9IHRoaXMuaW5uZXIuY29uY2F0KGVyci5pbm5lci5sZW5ndGggPyBlcnIuaW5uZXIgOiBlcnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZXJyb3JzLmxlbmd0aCA+IDEgPyBgJHt0aGlzLmVycm9ycy5sZW5ndGh9IGVycm9ycyBvY2N1cnJlZGAgOiB0aGlzLmVycm9yc1swXTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFZhbGlkYXRpb25FcnJvcik7XG4gIH1cbn1cblxubGV0IG1peGVkID0ge1xuICBkZWZhdWx0OiAnJHtwYXRofSBpcyBpbnZhbGlkJyxcbiAgcmVxdWlyZWQ6ICcke3BhdGh9IGlzIGEgcmVxdWlyZWQgZmllbGQnLFxuICBkZWZpbmVkOiAnJHtwYXRofSBtdXN0IGJlIGRlZmluZWQnLFxuICBub3ROdWxsOiAnJHtwYXRofSBjYW5ub3QgYmUgbnVsbCcsXG4gIG9uZU9mOiAnJHtwYXRofSBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczogJHt2YWx1ZXN9JyxcbiAgbm90T25lT2Y6ICcke3BhdGh9IG11c3Qgbm90IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczogJHt2YWx1ZXN9JyxcbiAgbm90VHlwZTogKHtcbiAgICBwYXRoLFxuICAgIHR5cGUsXG4gICAgdmFsdWUsXG4gICAgb3JpZ2luYWxWYWx1ZVxuICB9KSA9PiB7XG4gICAgY29uc3QgY2FzdE1zZyA9IG9yaWdpbmFsVmFsdWUgIT0gbnVsbCAmJiBvcmlnaW5hbFZhbHVlICE9PSB2YWx1ZSA/IGAgKGNhc3QgZnJvbSB0aGUgdmFsdWUgXFxgJHtwcmludFZhbHVlKG9yaWdpbmFsVmFsdWUsIHRydWUpfVxcYCkuYCA6ICcuJztcbiAgICByZXR1cm4gdHlwZSAhPT0gJ21peGVkJyA/IGAke3BhdGh9IG11c3QgYmUgYSBcXGAke3R5cGV9XFxgIHR5cGUsIGAgKyBgYnV0IHRoZSBmaW5hbCB2YWx1ZSB3YXM6IFxcYCR7cHJpbnRWYWx1ZSh2YWx1ZSwgdHJ1ZSl9XFxgYCArIGNhc3RNc2cgOiBgJHtwYXRofSBtdXN0IG1hdGNoIHRoZSBjb25maWd1cmVkIHR5cGUuIGAgKyBgVGhlIHZhbGlkYXRlZCB2YWx1ZSB3YXM6IFxcYCR7cHJpbnRWYWx1ZSh2YWx1ZSwgdHJ1ZSl9XFxgYCArIGNhc3RNc2c7XG4gIH1cbn07XG5sZXQgc3RyaW5nID0ge1xuICBsZW5ndGg6ICcke3BhdGh9IG11c3QgYmUgZXhhY3RseSAke2xlbmd0aH0gY2hhcmFjdGVycycsXG4gIG1pbjogJyR7cGF0aH0gbXVzdCBiZSBhdCBsZWFzdCAke21pbn0gY2hhcmFjdGVycycsXG4gIG1heDogJyR7cGF0aH0gbXVzdCBiZSBhdCBtb3N0ICR7bWF4fSBjaGFyYWN0ZXJzJyxcbiAgbWF0Y2hlczogJyR7cGF0aH0gbXVzdCBtYXRjaCB0aGUgZm9sbG93aW5nOiBcIiR7cmVnZXh9XCInLFxuICBlbWFpbDogJyR7cGF0aH0gbXVzdCBiZSBhIHZhbGlkIGVtYWlsJyxcbiAgdXJsOiAnJHtwYXRofSBtdXN0IGJlIGEgdmFsaWQgVVJMJyxcbiAgdXVpZDogJyR7cGF0aH0gbXVzdCBiZSBhIHZhbGlkIFVVSUQnLFxuICB0cmltOiAnJHtwYXRofSBtdXN0IGJlIGEgdHJpbW1lZCBzdHJpbmcnLFxuICBsb3dlcmNhc2U6ICcke3BhdGh9IG11c3QgYmUgYSBsb3dlcmNhc2Ugc3RyaW5nJyxcbiAgdXBwZXJjYXNlOiAnJHtwYXRofSBtdXN0IGJlIGEgdXBwZXIgY2FzZSBzdHJpbmcnXG59O1xubGV0IG51bWJlciA9IHtcbiAgbWluOiAnJHtwYXRofSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAke21pbn0nLFxuICBtYXg6ICcke3BhdGh9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4fScsXG4gIGxlc3NUaGFuOiAnJHtwYXRofSBtdXN0IGJlIGxlc3MgdGhhbiAke2xlc3N9JyxcbiAgbW9yZVRoYW46ICcke3BhdGh9IG11c3QgYmUgZ3JlYXRlciB0aGFuICR7bW9yZX0nLFxuICBwb3NpdGl2ZTogJyR7cGF0aH0gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicsXG4gIG5lZ2F0aXZlOiAnJHtwYXRofSBtdXN0IGJlIGEgbmVnYXRpdmUgbnVtYmVyJyxcbiAgaW50ZWdlcjogJyR7cGF0aH0gbXVzdCBiZSBhbiBpbnRlZ2VyJ1xufTtcbmxldCBkYXRlID0ge1xuICBtaW46ICcke3BhdGh9IGZpZWxkIG11c3QgYmUgbGF0ZXIgdGhhbiAke21pbn0nLFxuICBtYXg6ICcke3BhdGh9IGZpZWxkIG11c3QgYmUgYXQgZWFybGllciB0aGFuICR7bWF4fSdcbn07XG5sZXQgYm9vbGVhbiA9IHtcbiAgaXNWYWx1ZTogJyR7cGF0aH0gZmllbGQgbXVzdCBiZSAke3ZhbHVlfSdcbn07XG5sZXQgb2JqZWN0ID0ge1xuICBub1Vua25vd246ICcke3BhdGh9IGZpZWxkIGhhcyB1bnNwZWNpZmllZCBrZXlzOiAke3Vua25vd259J1xufTtcbmxldCBhcnJheSA9IHtcbiAgbWluOiAnJHtwYXRofSBmaWVsZCBtdXN0IGhhdmUgYXQgbGVhc3QgJHttaW59IGl0ZW1zJyxcbiAgbWF4OiAnJHtwYXRofSBmaWVsZCBtdXN0IGhhdmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7bWF4fSBpdGVtcycsXG4gIGxlbmd0aDogJyR7cGF0aH0gbXVzdCBoYXZlICR7bGVuZ3RofSBpdGVtcydcbn07XG5sZXQgdHVwbGUgPSB7XG4gIG5vdFR5cGU6IHBhcmFtcyA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aCxcbiAgICAgIHZhbHVlLFxuICAgICAgc3BlY1xuICAgIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgdHlwZUxlbiA9IHNwZWMudHlwZXMubGVuZ3RoO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA8IHR5cGVMZW4pIHJldHVybiBgJHtwYXRofSB0dXBsZSB2YWx1ZSBoYXMgdG9vIGZldyBpdGVtcywgZXhwZWN0ZWQgYSBsZW5ndGggb2YgJHt0eXBlTGVufSBidXQgZ290ICR7dmFsdWUubGVuZ3RofSBmb3IgdmFsdWU6IFxcYCR7cHJpbnRWYWx1ZSh2YWx1ZSwgdHJ1ZSl9XFxgYDtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiB0eXBlTGVuKSByZXR1cm4gYCR7cGF0aH0gdHVwbGUgdmFsdWUgaGFzIHRvbyBtYW55IGl0ZW1zLCBleHBlY3RlZCBhIGxlbmd0aCBvZiAke3R5cGVMZW59IGJ1dCBnb3QgJHt2YWx1ZS5sZW5ndGh9IGZvciB2YWx1ZTogXFxgJHtwcmludFZhbHVlKHZhbHVlLCB0cnVlKX1cXGBgO1xuICAgIH1cbiAgICByZXR1cm4gVmFsaWRhdGlvbkVycm9yLmZvcm1hdEVycm9yKG1peGVkLm5vdFR5cGUsIHBhcmFtcyk7XG4gIH1cbn07XG52YXIgbG9jYWxlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLCB7XG4gIG1peGVkLFxuICBzdHJpbmcsXG4gIG51bWJlcixcbiAgZGF0ZSxcbiAgb2JqZWN0LFxuICBhcnJheSxcbiAgYm9vbGVhblxufSk7XG5cbmNvbnN0IGlzU2NoZW1hID0gb2JqID0+IG9iaiAmJiBvYmouX19pc1l1cFNjaGVtYV9fO1xuXG5jbGFzcyBDb25kaXRpb24ge1xuICBzdGF0aWMgZnJvbU9wdGlvbnMocmVmcywgY29uZmlnKSB7XG4gICAgaWYgKCFjb25maWcudGhlbiAmJiAhY29uZmlnLm90aGVyd2lzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignZWl0aGVyIGB0aGVuOmAgb3IgYG90aGVyd2lzZTpgIGlzIHJlcXVpcmVkIGZvciBgd2hlbigpYCBjb25kaXRpb25zJyk7XG4gICAgbGV0IHtcbiAgICAgIGlzLFxuICAgICAgdGhlbixcbiAgICAgIG90aGVyd2lzZVxuICAgIH0gPSBjb25maWc7XG4gICAgbGV0IGNoZWNrID0gdHlwZW9mIGlzID09PSAnZnVuY3Rpb24nID8gaXMgOiAoLi4udmFsdWVzKSA9PiB2YWx1ZXMuZXZlcnkodmFsdWUgPT4gdmFsdWUgPT09IGlzKTtcbiAgICByZXR1cm4gbmV3IENvbmRpdGlvbihyZWZzLCAodmFsdWVzLCBzY2hlbWEpID0+IHtcbiAgICAgIHZhciBfYnJhbmNoO1xuICAgICAgbGV0IGJyYW5jaCA9IGNoZWNrKC4uLnZhbHVlcykgPyB0aGVuIDogb3RoZXJ3aXNlO1xuICAgICAgcmV0dXJuIChfYnJhbmNoID0gYnJhbmNoID09IG51bGwgPyB2b2lkIDAgOiBicmFuY2goc2NoZW1hKSkgIT0gbnVsbCA/IF9icmFuY2ggOiBzY2hlbWE7XG4gICAgfSk7XG4gIH1cbiAgY29uc3RydWN0b3IocmVmcywgYnVpbGRlcikge1xuICAgIHRoaXMuZm4gPSB2b2lkIDA7XG4gICAgdGhpcy5yZWZzID0gcmVmcztcbiAgICB0aGlzLnJlZnMgPSByZWZzO1xuICAgIHRoaXMuZm4gPSBidWlsZGVyO1xuICB9XG4gIHJlc29sdmUoYmFzZSwgb3B0aW9ucykge1xuICAgIGxldCB2YWx1ZXMgPSB0aGlzLnJlZnMubWFwKHJlZiA9PlxuICAgIC8vIFRPRE86ID8gb3BlcmF0b3IgaGVyZT9cbiAgICByZWYuZ2V0VmFsdWUob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy52YWx1ZSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wYXJlbnQsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuY29udGV4dCkpO1xuICAgIGxldCBzY2hlbWEgPSB0aGlzLmZuKHZhbHVlcywgYmFzZSwgb3B0aW9ucyk7XG4gICAgaWYgKHNjaGVtYSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgLy8gQHRzLWlnbm9yZSB0aGlzIGNhbiBiZSBiYXNlXG4gICAgc2NoZW1hID09PSBiYXNlKSB7XG4gICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG4gICAgaWYgKCFpc1NjaGVtYShzY2hlbWEpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdjb25kaXRpb25zIG11c3QgcmV0dXJuIGEgc2NoZW1hIG9iamVjdCcpO1xuICAgIHJldHVybiBzY2hlbWEucmVzb2x2ZShvcHRpb25zKTtcbiAgfVxufVxuXG5jb25zdCBwcmVmaXhlcyA9IHtcbiAgY29udGV4dDogJyQnLFxuICB2YWx1ZTogJy4nXG59O1xuZnVuY3Rpb24gY3JlYXRlJDkoa2V5LCBvcHRpb25zKSB7XG4gIHJldHVybiBuZXcgUmVmZXJlbmNlKGtleSwgb3B0aW9ucyk7XG59XG5jbGFzcyBSZWZlcmVuY2Uge1xuICBjb25zdHJ1Y3RvcihrZXksIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNDb250ZXh0ID0gdm9pZCAwO1xuICAgIHRoaXMuaXNWYWx1ZSA9IHZvaWQgMDtcbiAgICB0aGlzLmlzU2libGluZyA9IHZvaWQgMDtcbiAgICB0aGlzLnBhdGggPSB2b2lkIDA7XG4gICAgdGhpcy5nZXR0ZXIgPSB2b2lkIDA7XG4gICAgdGhpcy5tYXAgPSB2b2lkIDA7XG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdyZWYgbXVzdCBiZSBhIHN0cmluZywgZ290OiAnICsga2V5KTtcbiAgICB0aGlzLmtleSA9IGtleS50cmltKCk7XG4gICAgaWYgKGtleSA9PT0gJycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlZiBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuICAgIHRoaXMuaXNDb250ZXh0ID0gdGhpcy5rZXlbMF0gPT09IHByZWZpeGVzLmNvbnRleHQ7XG4gICAgdGhpcy5pc1ZhbHVlID0gdGhpcy5rZXlbMF0gPT09IHByZWZpeGVzLnZhbHVlO1xuICAgIHRoaXMuaXNTaWJsaW5nID0gIXRoaXMuaXNDb250ZXh0ICYmICF0aGlzLmlzVmFsdWU7XG4gICAgbGV0IHByZWZpeCA9IHRoaXMuaXNDb250ZXh0ID8gcHJlZml4ZXMuY29udGV4dCA6IHRoaXMuaXNWYWx1ZSA/IHByZWZpeGVzLnZhbHVlIDogJyc7XG4gICAgdGhpcy5wYXRoID0gdGhpcy5rZXkuc2xpY2UocHJlZml4Lmxlbmd0aCk7XG4gICAgdGhpcy5nZXR0ZXIgPSB0aGlzLnBhdGggJiYgZ2V0dGVyKHRoaXMucGF0aCwgdHJ1ZSk7XG4gICAgdGhpcy5tYXAgPSBvcHRpb25zLm1hcDtcbiAgfVxuICBnZXRWYWx1ZSh2YWx1ZSwgcGFyZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuaXNDb250ZXh0ID8gY29udGV4dCA6IHRoaXMuaXNWYWx1ZSA/IHZhbHVlIDogcGFyZW50O1xuICAgIGlmICh0aGlzLmdldHRlcikgcmVzdWx0ID0gdGhpcy5nZXR0ZXIocmVzdWx0IHx8IHt9KTtcbiAgICBpZiAodGhpcy5tYXApIHJlc3VsdCA9IHRoaXMubWFwKHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucy5jb250ZXh0XG4gICAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9ucy5wYXJlbnRcbiAgICovXG4gIGNhc3QodmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZSh2YWx1ZSwgb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wYXJlbnQsIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuY29udGV4dCk7XG4gIH1cbiAgcmVzb2x2ZSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBkZXNjcmliZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3JlZicsXG4gICAgICBrZXk6IHRoaXMua2V5XG4gICAgfTtcbiAgfVxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYFJlZigke3RoaXMua2V5fSlgO1xuICB9XG4gIHN0YXRpYyBpc1JlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5fX2lzWXVwUmVmO1xuICB9XG59XG5cbi8vIEB0cy1pZ25vcmVcblJlZmVyZW5jZS5wcm90b3R5cGUuX19pc1l1cFJlZiA9IHRydWU7XG5cbmNvbnN0IGlzQWJzZW50ID0gdmFsdWUgPT4gdmFsdWUgPT0gbnVsbDtcblxuZnVuY3Rpb24gY3JlYXRlVmFsaWRhdGlvbihjb25maWcpIHtcbiAgZnVuY3Rpb24gdmFsaWRhdGUoe1xuICAgIHZhbHVlLFxuICAgIHBhdGggPSAnJyxcbiAgICBvcHRpb25zLFxuICAgIG9yaWdpbmFsVmFsdWUsXG4gICAgc2NoZW1hXG4gIH0sIHBhbmljLCBuZXh0KSB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZSxcbiAgICAgIHRlc3QsXG4gICAgICBwYXJhbXMsXG4gICAgICBtZXNzYWdlLFxuICAgICAgc2tpcEFic2VudFxuICAgIH0gPSBjb25maWc7XG4gICAgbGV0IHtcbiAgICAgIHBhcmVudCxcbiAgICAgIGNvbnRleHQsXG4gICAgICBhYm9ydEVhcmx5ID0gc2NoZW1hLnNwZWMuYWJvcnRFYXJseVxuICAgIH0gPSBvcHRpb25zO1xuICAgIGZ1bmN0aW9uIHJlc29sdmUoaXRlbSkge1xuICAgICAgcmV0dXJuIFJlZmVyZW5jZS5pc1JlZihpdGVtKSA/IGl0ZW0uZ2V0VmFsdWUodmFsdWUsIHBhcmVudCwgY29udGV4dCkgOiBpdGVtO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVFcnJvcihvdmVycmlkZXMgPSB7fSkge1xuICAgICAgY29uc3QgbmV4dFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3JpZ2luYWxWYWx1ZSxcbiAgICAgICAgbGFiZWw6IHNjaGVtYS5zcGVjLmxhYmVsLFxuICAgICAgICBwYXRoOiBvdmVycmlkZXMucGF0aCB8fCBwYXRoLFxuICAgICAgICBzcGVjOiBzY2hlbWEuc3BlY1xuICAgICAgfSwgcGFyYW1zLCBvdmVycmlkZXMucGFyYW1zKTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG5leHRQYXJhbXMpKSBuZXh0UGFyYW1zW2tleV0gPSByZXNvbHZlKG5leHRQYXJhbXNba2V5XSk7XG4gICAgICBjb25zdCBlcnJvciA9IG5ldyBWYWxpZGF0aW9uRXJyb3IoVmFsaWRhdGlvbkVycm9yLmZvcm1hdEVycm9yKG92ZXJyaWRlcy5tZXNzYWdlIHx8IG1lc3NhZ2UsIG5leHRQYXJhbXMpLCB2YWx1ZSwgbmV4dFBhcmFtcy5wYXRoLCBvdmVycmlkZXMudHlwZSB8fCBuYW1lKTtcbiAgICAgIGVycm9yLnBhcmFtcyA9IG5leHRQYXJhbXM7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICAgIGNvbnN0IGludmFsaWQgPSBhYm9ydEVhcmx5ID8gcGFuaWMgOiBuZXh0O1xuICAgIGxldCBjdHggPSB7XG4gICAgICBwYXRoLFxuICAgICAgcGFyZW50LFxuICAgICAgdHlwZTogbmFtZSxcbiAgICAgIGZyb206IG9wdGlvbnMuZnJvbSxcbiAgICAgIGNyZWF0ZUVycm9yLFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgc2NoZW1hXG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVSZXN1bHQgPSB2YWxpZE9yRXJyb3IgPT4ge1xuICAgICAgaWYgKFZhbGlkYXRpb25FcnJvci5pc0Vycm9yKHZhbGlkT3JFcnJvcikpIGludmFsaWQodmFsaWRPckVycm9yKTtlbHNlIGlmICghdmFsaWRPckVycm9yKSBpbnZhbGlkKGNyZWF0ZUVycm9yKCkpO2Vsc2UgbmV4dChudWxsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gZXJyID0+IHtcbiAgICAgIGlmIChWYWxpZGF0aW9uRXJyb3IuaXNFcnJvcihlcnIpKSBpbnZhbGlkKGVycik7ZWxzZSBwYW5pYyhlcnIpO1xuICAgIH07XG4gICAgY29uc3Qgc2hvdWxkU2tpcCA9IHNraXBBYnNlbnQgJiYgaXNBYnNlbnQodmFsdWUpO1xuICAgIGlmICghb3B0aW9ucy5zeW5jKSB7XG4gICAgICB0cnkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoIXNob3VsZFNraXAgPyB0ZXN0LmNhbGwoY3R4LCB2YWx1ZSwgY3R4KSA6IHRydWUpLnRoZW4oaGFuZGxlUmVzdWx0LCBoYW5kbGVFcnJvcik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgdmFyIF9yZXN1bHQ7XG4gICAgICByZXN1bHQgPSAhc2hvdWxkU2tpcCA/IHRlc3QuY2FsbChjdHgsIHZhbHVlLCBjdHgpIDogdHJ1ZTtcbiAgICAgIGlmICh0eXBlb2YgKChfcmVzdWx0ID0gcmVzdWx0KSA9PSBudWxsID8gdm9pZCAwIDogX3Jlc3VsdC50aGVuKSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbGlkYXRpb24gdGVzdCBvZiB0eXBlOiBcIiR7Y3R4LnR5cGV9XCIgcmV0dXJuZWQgYSBQcm9taXNlIGR1cmluZyBhIHN5bmNocm9ub3VzIHZhbGlkYXRlLiBgICsgYFRoaXMgdGVzdCB3aWxsIGZpbmlzaCBhZnRlciB0aGUgdmFsaWRhdGUgY2FsbCBoYXMgcmV0dXJuZWRgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGVycik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZVJlc3VsdChyZXN1bHQpO1xuICB9XG4gIHZhbGlkYXRlLk9QVElPTlMgPSBjb25maWc7XG4gIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW4oc2NoZW1hLCBwYXRoLCB2YWx1ZSwgY29udGV4dCA9IHZhbHVlKSB7XG4gIGxldCBwYXJlbnQsIGxhc3RQYXJ0LCBsYXN0UGFydERlYnVnO1xuXG4gIC8vIHJvb3QgcGF0aDogJydcbiAgaWYgKCFwYXRoKSByZXR1cm4ge1xuICAgIHBhcmVudCxcbiAgICBwYXJlbnRQYXRoOiBwYXRoLFxuICAgIHNjaGVtYVxuICB9O1xuICBmb3JFYWNoKHBhdGgsIChfcGFydCwgaXNCcmFja2V0LCBpc0FycmF5KSA9PiB7XG4gICAgbGV0IHBhcnQgPSBpc0JyYWNrZXQgPyBfcGFydC5zbGljZSgxLCBfcGFydC5sZW5ndGggLSAxKSA6IF9wYXJ0O1xuICAgIHNjaGVtYSA9IHNjaGVtYS5yZXNvbHZlKHtcbiAgICAgIGNvbnRleHQsXG4gICAgICBwYXJlbnQsXG4gICAgICB2YWx1ZVxuICAgIH0pO1xuICAgIGxldCBpc1R1cGxlID0gc2NoZW1hLnR5cGUgPT09ICd0dXBsZSc7XG4gICAgbGV0IGlkeCA9IGlzQXJyYXkgPyBwYXJzZUludChwYXJ0LCAxMCkgOiAwO1xuICAgIGlmIChzY2hlbWEuaW5uZXJUeXBlIHx8IGlzVHVwbGUpIHtcbiAgICAgIGlmIChpc1R1cGxlICYmICFpc0FycmF5KSB0aHJvdyBuZXcgRXJyb3IoYFl1cC5yZWFjaCBjYW5ub3QgaW1wbGljaXRseSBpbmRleCBpbnRvIGEgdHVwbGUgdHlwZS4gdGhlIHBhdGggcGFydCBcIiR7bGFzdFBhcnREZWJ1Z31cIiBtdXN0IGNvbnRhaW4gYW4gaW5kZXggdG8gdGhlIHR1cGxlIGVsZW1lbnQsIGUuZy4gXCIke2xhc3RQYXJ0RGVidWd9WzBdXCJgKTtcbiAgICAgIGlmICh2YWx1ZSAmJiBpZHggPj0gdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWXVwLnJlYWNoIGNhbm5vdCByZXNvbHZlIGFuIGFycmF5IGl0ZW0gYXQgaW5kZXg6ICR7X3BhcnR9LCBpbiB0aGUgcGF0aDogJHtwYXRofS4gYCArIGBiZWNhdXNlIHRoZXJlIGlzIG5vIHZhbHVlIGF0IHRoYXQgaW5kZXguIGApO1xuICAgICAgfVxuICAgICAgcGFyZW50ID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHZhbHVlICYmIHZhbHVlW2lkeF07XG4gICAgICBzY2hlbWEgPSBpc1R1cGxlID8gc2NoZW1hLnNwZWMudHlwZXNbaWR4XSA6IHNjaGVtYS5pbm5lclR5cGU7XG4gICAgfVxuXG4gICAgLy8gc29tZXRpbWVzIHRoZSBhcnJheSBpbmRleCBwYXJ0IG9mIGEgcGF0aCBkb2Vzbid0IGV4aXN0OiBcIm5lc3RlZC5hcnIuY2hpbGRcIlxuICAgIC8vIGluIHRoZXNlIGNhc2VzIHRoZSBjdXJyZW50IHBhcnQgaXMgdGhlIG5leHQgc2NoZW1hIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkXG4gICAgLy8gaW4gdGhpcyBpdGVyYXRpb24uIEZvciBjYXNlcyB3aGVyZSB0aGUgaW5kZXggc2lnbmF0dXJlIGlzIGluY2x1ZGVkIHRoaXNcbiAgICAvLyBjaGVjayB3aWxsIGZhaWwgYW5kIHdlJ2xsIGhhbmRsZSB0aGUgYGNoaWxkYCBwYXJ0IG9uIHRoZSBuZXh0IGl0ZXJhdGlvbiBsaWtlIG5vcm1hbFxuICAgIGlmICghaXNBcnJheSkge1xuICAgICAgaWYgKCFzY2hlbWEuZmllbGRzIHx8ICFzY2hlbWEuZmllbGRzW3BhcnRdKSB0aHJvdyBuZXcgRXJyb3IoYFRoZSBzY2hlbWEgZG9lcyBub3QgY29udGFpbiB0aGUgcGF0aDogJHtwYXRofS4gYCArIGAoZmFpbGVkIGF0OiAke2xhc3RQYXJ0RGVidWd9IHdoaWNoIGlzIGEgdHlwZTogXCIke3NjaGVtYS50eXBlfVwiKWApO1xuICAgICAgcGFyZW50ID0gdmFsdWU7XG4gICAgICB2YWx1ZSA9IHZhbHVlICYmIHZhbHVlW3BhcnRdO1xuICAgICAgc2NoZW1hID0gc2NoZW1hLmZpZWxkc1twYXJ0XTtcbiAgICB9XG4gICAgbGFzdFBhcnQgPSBwYXJ0O1xuICAgIGxhc3RQYXJ0RGVidWcgPSBpc0JyYWNrZXQgPyAnWycgKyBfcGFydCArICddJyA6ICcuJyArIF9wYXJ0O1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBzY2hlbWEsXG4gICAgcGFyZW50LFxuICAgIHBhcmVudFBhdGg6IGxhc3RQYXJ0XG4gIH07XG59XG5mdW5jdGlvbiByZWFjaChvYmosIHBhdGgsIHZhbHVlLCBjb250ZXh0KSB7XG4gIHJldHVybiBnZXRJbihvYmosIHBhdGgsIHZhbHVlLCBjb250ZXh0KS5zY2hlbWE7XG59XG5cbmNsYXNzIFJlZmVyZW5jZVNldCBleHRlbmRzIFNldCB7XG4gIGRlc2NyaWJlKCkge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMudmFsdWVzKCkpIHtcbiAgICAgIGRlc2NyaXB0aW9uLnB1c2goUmVmZXJlbmNlLmlzUmVmKGl0ZW0pID8gaXRlbS5kZXNjcmliZSgpIDogaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgfVxuICByZXNvbHZlQWxsKHJlc29sdmUpIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMudmFsdWVzKCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHJlc29sdmUoaXRlbSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUmVmZXJlbmNlU2V0KHRoaXMudmFsdWVzKCkpO1xuICB9XG4gIG1lcmdlKG5ld0l0ZW1zLCByZW1vdmVJdGVtcykge1xuICAgIGNvbnN0IG5leHQgPSB0aGlzLmNsb25lKCk7XG4gICAgbmV3SXRlbXMuZm9yRWFjaCh2YWx1ZSA9PiBuZXh0LmFkZCh2YWx1ZSkpO1xuICAgIHJlbW92ZUl0ZW1zLmZvckVhY2godmFsdWUgPT4gbmV4dC5kZWxldGUodmFsdWUpKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxufVxuXG4vLyB0d2Vha2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL0tlbGluMjAyNS9uYW5vY2xvbmUvYmxvYi8wYWJlYjc2MzViZGE5YjY4ZWYyMjc3MDkzZjc2ZGJlM2JmMzk0OGUxL3NyYy9pbmRleC5qc1xuZnVuY3Rpb24gY2xvbmUoc3JjLCBzZWVuID0gbmV3IE1hcCgpKSB7XG4gIGlmIChpc1NjaGVtYShzcmMpIHx8ICFzcmMgfHwgdHlwZW9mIHNyYyAhPT0gJ29iamVjdCcpIHJldHVybiBzcmM7XG4gIGlmIChzZWVuLmhhcyhzcmMpKSByZXR1cm4gc2Vlbi5nZXQoc3JjKTtcbiAgbGV0IGNvcHk7XG4gIGlmIChzcmMgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgLy8gRGF0ZVxuICAgIGNvcHkgPSBuZXcgRGF0ZShzcmMuZ2V0VGltZSgpKTtcbiAgICBzZWVuLnNldChzcmMsIGNvcHkpO1xuICB9IGVsc2UgaWYgKHNyYyBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIC8vIFJlZ0V4cFxuICAgIGNvcHkgPSBuZXcgUmVnRXhwKHNyYyk7XG4gICAgc2Vlbi5zZXQoc3JjLCBjb3B5KTtcbiAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNyYykpIHtcbiAgICAvLyBBcnJheVxuICAgIGNvcHkgPSBuZXcgQXJyYXkoc3JjLmxlbmd0aCk7XG4gICAgc2Vlbi5zZXQoc3JjLCBjb3B5KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgY29weVtpXSA9IGNsb25lKHNyY1tpXSwgc2Vlbik7XG4gIH0gZWxzZSBpZiAoc3JjIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgLy8gTWFwXG4gICAgY29weSA9IG5ldyBNYXAoKTtcbiAgICBzZWVuLnNldChzcmMsIGNvcHkpO1xuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIHNyYy5lbnRyaWVzKCkpIGNvcHkuc2V0KGssIGNsb25lKHYsIHNlZW4pKTtcbiAgfSBlbHNlIGlmIChzcmMgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAvLyBTZXRcbiAgICBjb3B5ID0gbmV3IFNldCgpO1xuICAgIHNlZW4uc2V0KHNyYywgY29weSk7XG4gICAgZm9yIChjb25zdCB2IG9mIHNyYykgY29weS5hZGQoY2xvbmUodiwgc2VlbikpO1xuICB9IGVsc2UgaWYgKHNyYyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgIC8vIE9iamVjdFxuICAgIGNvcHkgPSB7fTtcbiAgICBzZWVuLnNldChzcmMsIGNvcHkpO1xuICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHNyYykpIGNvcHlba10gPSBjbG9uZSh2LCBzZWVuKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBFcnJvcihgVW5hYmxlIHRvIGNsb25lICR7c3JjfWApO1xuICB9XG4gIHJldHVybiBjb3B5O1xufVxuXG5jbGFzcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gdm9pZCAwO1xuICAgIHRoaXMuZGVwcyA9IFtdO1xuICAgIHRoaXMudGVzdHMgPSB2b2lkIDA7XG4gICAgdGhpcy50cmFuc2Zvcm1zID0gdm9pZCAwO1xuICAgIHRoaXMuY29uZGl0aW9ucyA9IFtdO1xuICAgIHRoaXMuX211dGF0ZSA9IHZvaWQgMDtcbiAgICB0aGlzLmludGVybmFsVGVzdHMgPSB7fTtcbiAgICB0aGlzLl93aGl0ZWxpc3QgPSBuZXcgUmVmZXJlbmNlU2V0KCk7XG4gICAgdGhpcy5fYmxhY2tsaXN0ID0gbmV3IFJlZmVyZW5jZVNldCgpO1xuICAgIHRoaXMuZXhjbHVzaXZlVGVzdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX3R5cGVDaGVjayA9IHZvaWQgMDtcbiAgICB0aGlzLnNwZWMgPSB2b2lkIDA7XG4gICAgdGhpcy50ZXN0cyA9IFtdO1xuICAgIHRoaXMudHJhbnNmb3JtcyA9IFtdO1xuICAgIHRoaXMud2l0aE11dGF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMudHlwZUVycm9yKG1peGVkLm5vdFR5cGUpO1xuICAgIH0pO1xuICAgIHRoaXMudHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgICB0aGlzLl90eXBlQ2hlY2sgPSBvcHRpb25zLmNoZWNrO1xuICAgIHRoaXMuc3BlYyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgc3RyaXA6IGZhbHNlLFxuICAgICAgc3RyaWN0OiBmYWxzZSxcbiAgICAgIGFib3J0RWFybHk6IHRydWUsXG4gICAgICByZWN1cnNpdmU6IHRydWUsXG4gICAgICBudWxsYWJsZTogZmFsc2UsXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICAgIGNvZXJjZTogdHJ1ZVxuICAgIH0sIG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuc3BlYyk7XG4gICAgdGhpcy53aXRoTXV0YXRpb24ocyA9PiB7XG4gICAgICBzLm5vbk51bGxhYmxlKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgZ2V0IF90eXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cbiAgY2xvbmUoc3BlYykge1xuICAgIGlmICh0aGlzLl9tdXRhdGUpIHtcbiAgICAgIGlmIChzcGVjKSBPYmplY3QuYXNzaWduKHRoaXMuc3BlYywgc3BlYyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgbmVzdGVkIHZhbHVlIGlzIGEgc2NoZW1hIHdlIGNhbiBza2lwIGNsb25pbmcsIHNpbmNlXG4gICAgLy8gdGhleSBhcmUgYWxyZWFkeSBpbW11dGFibGVcbiAgICBjb25zdCBuZXh0ID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0aGlzIGlzIHJlYWRvbmx5XG4gICAgbmV4dC50eXBlID0gdGhpcy50eXBlO1xuICAgIG5leHQuX3R5cGVDaGVjayA9IHRoaXMuX3R5cGVDaGVjaztcbiAgICBuZXh0Ll93aGl0ZWxpc3QgPSB0aGlzLl93aGl0ZWxpc3QuY2xvbmUoKTtcbiAgICBuZXh0Ll9ibGFja2xpc3QgPSB0aGlzLl9ibGFja2xpc3QuY2xvbmUoKTtcbiAgICBuZXh0LmludGVybmFsVGVzdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmludGVybmFsVGVzdHMpO1xuICAgIG5leHQuZXhjbHVzaXZlVGVzdHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmV4Y2x1c2l2ZVRlc3RzKTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdGhpcyBpcyByZWFkb25seVxuICAgIG5leHQuZGVwcyA9IFsuLi50aGlzLmRlcHNdO1xuICAgIG5leHQuY29uZGl0aW9ucyA9IFsuLi50aGlzLmNvbmRpdGlvbnNdO1xuICAgIG5leHQudGVzdHMgPSBbLi4udGhpcy50ZXN0c107XG4gICAgbmV4dC50cmFuc2Zvcm1zID0gWy4uLnRoaXMudHJhbnNmb3Jtc107XG4gICAgbmV4dC5zcGVjID0gY2xvbmUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zcGVjLCBzcGVjKSk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgbGFiZWwobGFiZWwpIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBuZXh0LnNwZWMubGFiZWwgPSBsYWJlbDtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICBtZXRhKC4uLmFyZ3MpIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiB0aGlzLnNwZWMubWV0YTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBuZXh0LnNwZWMubWV0YSA9IE9iamVjdC5hc3NpZ24obmV4dC5zcGVjLm1ldGEgfHwge30sIGFyZ3NbMF0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIHdpdGhNdXRhdGlvbihmbikge1xuICAgIGxldCBiZWZvcmUgPSB0aGlzLl9tdXRhdGU7XG4gICAgdGhpcy5fbXV0YXRlID0gdHJ1ZTtcbiAgICBsZXQgcmVzdWx0ID0gZm4odGhpcyk7XG4gICAgdGhpcy5fbXV0YXRlID0gYmVmb3JlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgY29uY2F0KHNjaGVtYSkge1xuICAgIGlmICghc2NoZW1hIHx8IHNjaGVtYSA9PT0gdGhpcykgcmV0dXJuIHRoaXM7XG4gICAgaWYgKHNjaGVtYS50eXBlICE9PSB0aGlzLnR5cGUgJiYgdGhpcy50eXBlICE9PSAnbWl4ZWQnKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBZb3UgY2Fubm90IFxcYGNvbmNhdCgpXFxgIHNjaGVtYSdzIG9mIGRpZmZlcmVudCB0eXBlczogJHt0aGlzLnR5cGV9IGFuZCAke3NjaGVtYS50eXBlfWApO1xuICAgIGxldCBiYXNlID0gdGhpcztcbiAgICBsZXQgY29tYmluZWQgPSBzY2hlbWEuY2xvbmUoKTtcbiAgICBjb25zdCBtZXJnZWRTcGVjID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZS5zcGVjLCBjb21iaW5lZC5zcGVjKTtcbiAgICBjb21iaW5lZC5zcGVjID0gbWVyZ2VkU3BlYztcbiAgICBjb21iaW5lZC5pbnRlcm5hbFRlc3RzID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZS5pbnRlcm5hbFRlc3RzLCBjb21iaW5lZC5pbnRlcm5hbFRlc3RzKTtcblxuICAgIC8vIG1hbnVhbGx5IG1lcmdlIHRoZSBibGFja2xpc3Qvd2hpdGVsaXN0ICh0aGUgb3RoZXIgYHNjaGVtYWAgdGFrZXNcbiAgICAvLyBwcmVjZWRlbmNlIGluIGNhc2Ugb2YgY29uZmxpY3RzKVxuICAgIGNvbWJpbmVkLl93aGl0ZWxpc3QgPSBiYXNlLl93aGl0ZWxpc3QubWVyZ2Uoc2NoZW1hLl93aGl0ZWxpc3QsIHNjaGVtYS5fYmxhY2tsaXN0KTtcbiAgICBjb21iaW5lZC5fYmxhY2tsaXN0ID0gYmFzZS5fYmxhY2tsaXN0Lm1lcmdlKHNjaGVtYS5fYmxhY2tsaXN0LCBzY2hlbWEuX3doaXRlbGlzdCk7XG5cbiAgICAvLyBzdGFydCB3aXRoIHRoZSBjdXJyZW50IHRlc3RzXG4gICAgY29tYmluZWQudGVzdHMgPSBiYXNlLnRlc3RzO1xuICAgIGNvbWJpbmVkLmV4Y2x1c2l2ZVRlc3RzID0gYmFzZS5leGNsdXNpdmVUZXN0cztcblxuICAgIC8vIG1hbnVhbGx5IGFkZCB0aGUgbmV3IHRlc3RzIHRvIGVuc3VyZVxuICAgIC8vIHRoZSBkZWR1cGluZyBsb2dpYyBpcyBjb25zaXN0ZW50XG4gICAgY29tYmluZWQud2l0aE11dGF0aW9uKG5leHQgPT4ge1xuICAgICAgc2NoZW1hLnRlc3RzLmZvckVhY2goZm4gPT4ge1xuICAgICAgICBuZXh0LnRlc3QoZm4uT1BUSU9OUyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb21iaW5lZC50cmFuc2Zvcm1zID0gWy4uLmJhc2UudHJhbnNmb3JtcywgLi4uY29tYmluZWQudHJhbnNmb3Jtc107XG4gICAgcmV0dXJuIGNvbWJpbmVkO1xuICB9XG4gIGlzVHlwZSh2KSB7XG4gICAgaWYgKHYgPT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuc3BlYy5udWxsYWJsZSAmJiB2ID09PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnNwZWMub3B0aW9uYWwgJiYgdiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3R5cGVDaGVjayh2KTtcbiAgfVxuICByZXNvbHZlKG9wdGlvbnMpIHtcbiAgICBsZXQgc2NoZW1hID0gdGhpcztcbiAgICBpZiAoc2NoZW1hLmNvbmRpdGlvbnMubGVuZ3RoKSB7XG4gICAgICBsZXQgY29uZGl0aW9ucyA9IHNjaGVtYS5jb25kaXRpb25zO1xuICAgICAgc2NoZW1hID0gc2NoZW1hLmNsb25lKCk7XG4gICAgICBzY2hlbWEuY29uZGl0aW9ucyA9IFtdO1xuICAgICAgc2NoZW1hID0gY29uZGl0aW9ucy5yZWR1Y2UoKHByZXZTY2hlbWEsIGNvbmRpdGlvbikgPT4gY29uZGl0aW9uLnJlc29sdmUocHJldlNjaGVtYSwgb3B0aW9ucyksIHNjaGVtYSk7XG4gICAgICBzY2hlbWEgPSBzY2hlbWEucmVzb2x2ZShvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHNjaGVtYTtcbiAgfVxuICByZXNvbHZlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdmFyIF9vcHRpb25zJHN0cmljdCwgX29wdGlvbnMkYWJvcnRFYXJseSwgX29wdGlvbnMkcmVjdXJzaXZlO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICBmcm9tOiBvcHRpb25zLmZyb20gfHwgW10sXG4gICAgICBzdHJpY3Q6IChfb3B0aW9ucyRzdHJpY3QgPSBvcHRpb25zLnN0cmljdCkgIT0gbnVsbCA/IF9vcHRpb25zJHN0cmljdCA6IHRoaXMuc3BlYy5zdHJpY3QsXG4gICAgICBhYm9ydEVhcmx5OiAoX29wdGlvbnMkYWJvcnRFYXJseSA9IG9wdGlvbnMuYWJvcnRFYXJseSkgIT0gbnVsbCA/IF9vcHRpb25zJGFib3J0RWFybHkgOiB0aGlzLnNwZWMuYWJvcnRFYXJseSxcbiAgICAgIHJlY3Vyc2l2ZTogKF9vcHRpb25zJHJlY3Vyc2l2ZSA9IG9wdGlvbnMucmVjdXJzaXZlKSAhPSBudWxsID8gX29wdGlvbnMkcmVjdXJzaXZlIDogdGhpcy5zcGVjLnJlY3Vyc2l2ZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1biB0aGUgY29uZmlndXJlZCB0cmFuc2Zvcm0gcGlwZWxpbmUgb3ZlciBhbiBpbnB1dCB2YWx1ZS5cbiAgICovXG5cbiAgY2FzdCh2YWx1ZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHJlc29sdmVkU2NoZW1hID0gdGhpcy5yZXNvbHZlKE9iamVjdC5hc3NpZ24oe1xuICAgICAgdmFsdWVcbiAgICB9LCBvcHRpb25zKSk7XG4gICAgbGV0IGFsbG93T3B0aW9uYWxpdHkgPSBvcHRpb25zLmFzc2VydCA9PT0gJ2lnbm9yZS1vcHRpb25hbGl0eSc7XG4gICAgbGV0IHJlc3VsdCA9IHJlc29sdmVkU2NoZW1hLl9jYXN0KHZhbHVlLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5hc3NlcnQgIT09IGZhbHNlICYmICFyZXNvbHZlZFNjaGVtYS5pc1R5cGUocmVzdWx0KSkge1xuICAgICAgaWYgKGFsbG93T3B0aW9uYWxpdHkgJiYgaXNBYnNlbnQocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgbGV0IGZvcm1hdHRlZFZhbHVlID0gcHJpbnRWYWx1ZSh2YWx1ZSk7XG4gICAgICBsZXQgZm9ybWF0dGVkUmVzdWx0ID0gcHJpbnRWYWx1ZShyZXN1bHQpO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIHZhbHVlIG9mICR7b3B0aW9ucy5wYXRoIHx8ICdmaWVsZCd9IGNvdWxkIG5vdCBiZSBjYXN0IHRvIGEgdmFsdWUgYCArIGB0aGF0IHNhdGlzZmllcyB0aGUgc2NoZW1hIHR5cGU6IFwiJHtyZXNvbHZlZFNjaGVtYS50eXBlfVwiLiBcXG5cXG5gICsgYGF0dGVtcHRlZCB2YWx1ZTogJHtmb3JtYXR0ZWRWYWx1ZX0gXFxuYCArIChmb3JtYXR0ZWRSZXN1bHQgIT09IGZvcm1hdHRlZFZhbHVlID8gYHJlc3VsdCBvZiBjYXN0OiAke2Zvcm1hdHRlZFJlc3VsdH1gIDogJycpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBfY2FzdChyYXdWYWx1ZSwgb3B0aW9ucykge1xuICAgIGxldCB2YWx1ZSA9IHJhd1ZhbHVlID09PSB1bmRlZmluZWQgPyByYXdWYWx1ZSA6IHRoaXMudHJhbnNmb3Jtcy5yZWR1Y2UoKHByZXZWYWx1ZSwgZm4pID0+IGZuLmNhbGwodGhpcywgcHJldlZhbHVlLCByYXdWYWx1ZSwgdGhpcyksIHJhd1ZhbHVlKTtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsdWUgPSB0aGlzLmdldERlZmF1bHQob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBfdmFsaWRhdGUoX3ZhbHVlLCBvcHRpb25zID0ge30sIHBhbmljLCBuZXh0KSB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGgsXG4gICAgICBvcmlnaW5hbFZhbHVlID0gX3ZhbHVlLFxuICAgICAgc3RyaWN0ID0gdGhpcy5zcGVjLnN0cmljdFxuICAgIH0gPSBvcHRpb25zO1xuICAgIGxldCB2YWx1ZSA9IF92YWx1ZTtcbiAgICBpZiAoIXN0cmljdCkge1xuICAgICAgdmFsdWUgPSB0aGlzLl9jYXN0KHZhbHVlLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgYXNzZXJ0OiBmYWxzZVxuICAgICAgfSwgb3B0aW9ucykpO1xuICAgIH1cbiAgICBsZXQgaW5pdGlhbFRlc3RzID0gW107XG4gICAgZm9yIChsZXQgdGVzdCBvZiBPYmplY3QudmFsdWVzKHRoaXMuaW50ZXJuYWxUZXN0cykpIHtcbiAgICAgIGlmICh0ZXN0KSBpbml0aWFsVGVzdHMucHVzaCh0ZXN0KTtcbiAgICB9XG4gICAgdGhpcy5ydW5UZXN0cyh7XG4gICAgICBwYXRoLFxuICAgICAgdmFsdWUsXG4gICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHRlc3RzOiBpbml0aWFsVGVzdHNcbiAgICB9LCBwYW5pYywgaW5pdGlhbEVycm9ycyA9PiB7XG4gICAgICAvLyBldmVuIGlmIHdlIGFyZW4ndCBlbmRpbmcgZWFybHkgd2UgY2FuJ3QgcHJvY2VlZCBmdXJ0aGVyIGlmIHRoZSB0eXBlcyBhcmVuJ3QgY29ycmVjdFxuICAgICAgaWYgKGluaXRpYWxFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBuZXh0KGluaXRpYWxFcnJvcnMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucnVuVGVzdHMoe1xuICAgICAgICBwYXRoLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb3JpZ2luYWxWYWx1ZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgdGVzdHM6IHRoaXMudGVzdHNcbiAgICAgIH0sIHBhbmljLCBuZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlcyBhIHNldCBvZiB2YWxpZGF0aW9ucywgZWl0aGVyIHNjaGVtYSwgcHJvZHVjZWQgVGVzdHMgb3IgYSBuZXN0ZWRcbiAgICogc2NoZW1hIHZhbGlkYXRlIHJlc3VsdC5cbiAgICovXG4gIHJ1blRlc3RzKHJ1bk9wdGlvbnMsIHBhbmljLCBuZXh0KSB7XG4gICAgbGV0IGZpcmVkID0gZmFsc2U7XG4gICAgbGV0IHtcbiAgICAgIHRlc3RzLFxuICAgICAgdmFsdWUsXG4gICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgcGF0aCxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gcnVuT3B0aW9ucztcbiAgICBsZXQgcGFuaWNPbmNlID0gYXJnID0+IHtcbiAgICAgIGlmIChmaXJlZCkgcmV0dXJuO1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgcGFuaWMoYXJnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBsZXQgbmV4dE9uY2UgPSBhcmcgPT4ge1xuICAgICAgaWYgKGZpcmVkKSByZXR1cm47XG4gICAgICBmaXJlZCA9IHRydWU7XG4gICAgICBuZXh0KGFyZywgdmFsdWUpO1xuICAgIH07XG4gICAgbGV0IGNvdW50ID0gdGVzdHMubGVuZ3RoO1xuICAgIGxldCBuZXN0ZWRFcnJvcnMgPSBbXTtcbiAgICBpZiAoIWNvdW50KSByZXR1cm4gbmV4dE9uY2UoW10pO1xuICAgIGxldCBhcmdzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgcGF0aCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzY2hlbWE6IHRoaXNcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRlc3QgPSB0ZXN0c1tpXTtcbiAgICAgIHRlc3QoYXJncywgcGFuaWNPbmNlLCBmdW5jdGlvbiBmaW5pc2hUZXN0UnVuKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgbmVzdGVkRXJyb3JzID0gbmVzdGVkRXJyb3JzLmNvbmNhdChlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgtLWNvdW50IDw9IDApIHtcbiAgICAgICAgICBuZXh0T25jZShuZXN0ZWRFcnJvcnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgYXNOZXN0ZWRUZXN0KHtcbiAgICBrZXksXG4gICAgaW5kZXgsXG4gICAgcGFyZW50LFxuICAgIHBhcmVudFBhdGgsXG4gICAgb3JpZ2luYWxQYXJlbnQsXG4gICAgb3B0aW9uc1xuICB9KSB7XG4gICAgY29uc3QgayA9IGtleSAhPSBudWxsID8ga2V5IDogaW5kZXg7XG4gICAgaWYgKGsgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdNdXN0IGluY2x1ZGUgYGtleWAgb3IgYGluZGV4YCBmb3IgbmVzdGVkIHZhbGlkYXRpb25zJyk7XG4gICAgfVxuICAgIGNvbnN0IGlzSW5kZXggPSB0eXBlb2YgayA9PT0gJ251bWJlcic7XG4gICAgbGV0IHZhbHVlID0gcGFyZW50W2tdO1xuICAgIGNvbnN0IHRlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgLy8gTmVzdGVkIHZhbGlkYXRpb25zIGZpZWxkcyBhcmUgYWx3YXlzIHN0cmljdDpcbiAgICAgIC8vICAgIDEuIHBhcmVudCBpc24ndCBzdHJpY3Qgc28gdGhlIGNhc3Rpbmcgd2lsbCBhbHNvIGhhdmUgY2FzdCBpbm5lciB2YWx1ZXNcbiAgICAgIC8vICAgIDIuIHBhcmVudCBpcyBzdHJpY3QgaW4gd2hpY2ggY2FzZSB0aGUgbmVzdGVkIHZhbHVlcyB3ZXJlbid0IGNhc3QgZWl0aGVyXG4gICAgICBzdHJpY3Q6IHRydWUsXG4gICAgICBwYXJlbnQsXG4gICAgICB2YWx1ZSxcbiAgICAgIG9yaWdpbmFsVmFsdWU6IG9yaWdpbmFsUGFyZW50W2tdLFxuICAgICAgLy8gRklYTUU6IHRlc3RzIGRlcGVuZCBvbiBgaW5kZXhgIGJlaW5nIHBhc3NlZCBhcm91bmQgZGVlcGx5LFxuICAgICAgLy8gICB3ZSBzaG91bGQgbm90IGxldCB0aGUgb3B0aW9ucy5rZXkvaW5kZXggYmxlZWQgdGhyb3VnaFxuICAgICAga2V5OiB1bmRlZmluZWQsXG4gICAgICAvLyBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgW2lzSW5kZXggPyAnaW5kZXgnIDogJ2tleSddOiBrLFxuICAgICAgcGF0aDogaXNJbmRleCB8fCBrLmluY2x1ZGVzKCcuJykgPyBgJHtwYXJlbnRQYXRoIHx8ICcnfVske3ZhbHVlID8gayA6IGBcIiR7a31cImB9XWAgOiAocGFyZW50UGF0aCA/IGAke3BhcmVudFBhdGh9LmAgOiAnJykgKyBrZXlcbiAgICB9KTtcbiAgICByZXR1cm4gKF8sIHBhbmljLCBuZXh0KSA9PiB0aGlzLnJlc29sdmUodGVzdE9wdGlvbnMpLl92YWxpZGF0ZSh2YWx1ZSwgdGVzdE9wdGlvbnMsIHBhbmljLCBuZXh0KTtcbiAgfVxuICB2YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucykge1xuICAgIGxldCBzY2hlbWEgPSB0aGlzLnJlc29sdmUoT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgdmFsdWVcbiAgICB9KSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHNjaGVtYS5fdmFsaWRhdGUodmFsdWUsIG9wdGlvbnMsIChlcnJvciwgcGFyc2VkKSA9PiB7XG4gICAgICBpZiAoVmFsaWRhdGlvbkVycm9yLmlzRXJyb3IoZXJyb3IpKSBlcnJvci52YWx1ZSA9IHBhcnNlZDtcbiAgICAgIHJlamVjdChlcnJvcik7XG4gICAgfSwgKGVycm9ycywgdmFsaWRhdGVkKSA9PiB7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCkgcmVqZWN0KG5ldyBWYWxpZGF0aW9uRXJyb3IoZXJyb3JzLCB2YWxpZGF0ZWQpKTtlbHNlIHJlc29sdmUodmFsaWRhdGVkKTtcbiAgICB9KSk7XG4gIH1cbiAgdmFsaWRhdGVTeW5jKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgbGV0IHNjaGVtYSA9IHRoaXMucmVzb2x2ZShPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICB2YWx1ZVxuICAgIH0pKTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHNjaGVtYS5fdmFsaWRhdGUodmFsdWUsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgIHN5bmM6IHRydWVcbiAgICB9KSwgKGVycm9yLCBwYXJzZWQpID0+IHtcbiAgICAgIGlmIChWYWxpZGF0aW9uRXJyb3IuaXNFcnJvcihlcnJvcikpIGVycm9yLnZhbHVlID0gcGFyc2VkO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSwgKGVycm9ycywgdmFsaWRhdGVkKSA9PiB7XG4gICAgICBpZiAoZXJyb3JzLmxlbmd0aCkgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihlcnJvcnMsIHZhbHVlKTtcbiAgICAgIHJlc3VsdCA9IHZhbGlkYXRlZDtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlzVmFsaWQodmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucykudGhlbigoKSA9PiB0cnVlLCBlcnIgPT4ge1xuICAgICAgaWYgKFZhbGlkYXRpb25FcnJvci5pc0Vycm9yKGVycikpIHJldHVybiBmYWxzZTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbiAgfVxuICBpc1ZhbGlkU3luYyh2YWx1ZSwgb3B0aW9ucykge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnZhbGlkYXRlU3luYyh2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChWYWxpZGF0aW9uRXJyb3IuaXNFcnJvcihlcnIpKSByZXR1cm4gZmFsc2U7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG4gIF9nZXREZWZhdWx0KG9wdGlvbnMpIHtcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gdGhpcy5zcGVjLmRlZmF1bHQ7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZS5jYWxsKHRoaXMsIG9wdGlvbnMpIDogY2xvbmUoZGVmYXVsdFZhbHVlKTtcbiAgfVxuICBnZXREZWZhdWx0KG9wdGlvbnNcbiAgLy8gSWYgc2NoZW1hIGlzIGRlZmF1bHRlZCB3ZSBrbm93IGl0J3MgYXQgbGVhc3Qgbm90IHVuZGVmaW5lZFxuICApIHtcbiAgICBsZXQgc2NoZW1hID0gdGhpcy5yZXNvbHZlKG9wdGlvbnMgfHwge30pO1xuICAgIHJldHVybiBzY2hlbWEuX2dldERlZmF1bHQob3B0aW9ucyk7XG4gIH1cbiAgZGVmYXVsdChkZWYpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2dldERlZmF1bHQoKTtcbiAgICB9XG4gICAgbGV0IG5leHQgPSB0aGlzLmNsb25lKHtcbiAgICAgIGRlZmF1bHQ6IGRlZlxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIHN0cmljdChpc1N0cmljdCA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5jbG9uZSh7XG4gICAgICBzdHJpY3Q6IGlzU3RyaWN0XG4gICAgfSk7XG4gIH1cbiAgbnVsbGFiaWxpdHkobnVsbGFibGUsIG1lc3NhZ2UpIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jbG9uZSh7XG4gICAgICBudWxsYWJsZVxuICAgIH0pO1xuICAgIG5leHQuaW50ZXJuYWxUZXN0cy5udWxsYWJsZSA9IGNyZWF0ZVZhbGlkYXRpb24oe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdudWxsYWJsZScsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IHRoaXMuc2NoZW1hLnNwZWMubnVsbGFibGUgOiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIG9wdGlvbmFsaXR5KG9wdGlvbmFsLCBtZXNzYWdlKSB7XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuY2xvbmUoe1xuICAgICAgb3B0aW9uYWxcbiAgICB9KTtcbiAgICBuZXh0LmludGVybmFsVGVzdHMub3B0aW9uYWxpdHkgPSBjcmVhdGVWYWxpZGF0aW9uKHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnb3B0aW9uYWxpdHknLFxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHRoaXMuc2NoZW1hLnNwZWMub3B0aW9uYWwgOiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIG9wdGlvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsaXR5KHRydWUpO1xuICB9XG4gIGRlZmluZWQobWVzc2FnZSA9IG1peGVkLmRlZmluZWQpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25hbGl0eShmYWxzZSwgbWVzc2FnZSk7XG4gIH1cbiAgbnVsbGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubnVsbGFiaWxpdHkodHJ1ZSk7XG4gIH1cbiAgbm9uTnVsbGFibGUobWVzc2FnZSA9IG1peGVkLm5vdE51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5udWxsYWJpbGl0eShmYWxzZSwgbWVzc2FnZSk7XG4gIH1cbiAgcmVxdWlyZWQobWVzc2FnZSA9IG1peGVkLnJlcXVpcmVkKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS53aXRoTXV0YXRpb24obmV4dCA9PiBuZXh0Lm5vbk51bGxhYmxlKG1lc3NhZ2UpLmRlZmluZWQobWVzc2FnZSkpO1xuICB9XG4gIG5vdFJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmNsb25lKCkud2l0aE11dGF0aW9uKG5leHQgPT4gbmV4dC5udWxsYWJsZSgpLm9wdGlvbmFsKCkpO1xuICB9XG4gIHRyYW5zZm9ybShmbikge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIG5leHQudHJhbnNmb3Jtcy5wdXNoKGZuKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGVzdCBmdW5jdGlvbiB0byB0aGUgc2NoZW1hJ3MgcXVldWUgb2YgdGVzdHMuXG4gICAqIHRlc3RzIGNhbiBiZSBleGNsdXNpdmUgb3Igbm9uLWV4Y2x1c2l2ZS5cbiAgICpcbiAgICogLSBleGNsdXNpdmUgdGVzdHMsIHdpbGwgcmVwbGFjZSBhbnkgZXhpc3RpbmcgdGVzdHMgb2YgdGhlIHNhbWUgbmFtZS5cbiAgICogLSBub24tZXhjbHVzaXZlOiBjYW4gYmUgc3RhY2tlZFxuICAgKlxuICAgKiBJZiBhIG5vbi1leGNsdXNpdmUgdGVzdCBpcyBhZGRlZCB0byBhIHNjaGVtYSB3aXRoIGFuIGV4Y2x1c2l2ZSB0ZXN0IG9mIHRoZSBzYW1lIG5hbWVcbiAgICogdGhlIGV4Y2x1c2l2ZSB0ZXN0IGlzIHJlbW92ZWQgYW5kIGZ1cnRoZXIgdGVzdHMgb2YgdGhlIHNhbWUgbmFtZSB3aWxsIGJlIHN0YWNrZWQuXG4gICAqXG4gICAqIElmIGFuIGV4Y2x1c2l2ZSB0ZXN0IGlzIGFkZGVkIHRvIGEgc2NoZW1hIHdpdGggbm9uLWV4Y2x1c2l2ZSB0ZXN0cyBvZiB0aGUgc2FtZSBuYW1lXG4gICAqIHRoZSBwcmV2aW91cyB0ZXN0cyBhcmUgcmVtb3ZlZCBhbmQgZnVydGhlciB0ZXN0cyBvZiB0aGUgc2FtZSBuYW1lIHdpbGwgcmVwbGFjZSBlYWNoIG90aGVyLlxuICAgKi9cblxuICB0ZXN0KC4uLmFyZ3MpIHtcbiAgICBsZXQgb3B0cztcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRzID0ge1xuICAgICAgICAgIHRlc3Q6IGFyZ3NbMF1cbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdHMgPSBhcmdzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDIpIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIG5hbWU6IGFyZ3NbMF0sXG4gICAgICAgIHRlc3Q6IGFyZ3NbMV1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wdHMgPSB7XG4gICAgICAgIG5hbWU6IGFyZ3NbMF0sXG4gICAgICAgIG1lc3NhZ2U6IGFyZ3NbMV0sXG4gICAgICAgIHRlc3Q6IGFyZ3NbMl1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChvcHRzLm1lc3NhZ2UgPT09IHVuZGVmaW5lZCkgb3B0cy5tZXNzYWdlID0gbWl4ZWQuZGVmYXVsdDtcbiAgICBpZiAodHlwZW9mIG9wdHMudGVzdCAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignYHRlc3RgIGlzIGEgcmVxdWlyZWQgcGFyYW1ldGVycycpO1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIGxldCB2YWxpZGF0ZSA9IGNyZWF0ZVZhbGlkYXRpb24ob3B0cyk7XG4gICAgbGV0IGlzRXhjbHVzaXZlID0gb3B0cy5leGNsdXNpdmUgfHwgb3B0cy5uYW1lICYmIG5leHQuZXhjbHVzaXZlVGVzdHNbb3B0cy5uYW1lXSA9PT0gdHJ1ZTtcbiAgICBpZiAob3B0cy5leGNsdXNpdmUpIHtcbiAgICAgIGlmICghb3B0cy5uYW1lKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeGNsdXNpdmUgdGVzdHMgbXVzdCBwcm92aWRlIGEgdW5pcXVlIGBuYW1lYCBpZGVudGlmeWluZyB0aGUgdGVzdCcpO1xuICAgIH1cbiAgICBpZiAob3B0cy5uYW1lKSBuZXh0LmV4Y2x1c2l2ZVRlc3RzW29wdHMubmFtZV0gPSAhIW9wdHMuZXhjbHVzaXZlO1xuICAgIG5leHQudGVzdHMgPSBuZXh0LnRlc3RzLmZpbHRlcihmbiA9PiB7XG4gICAgICBpZiAoZm4uT1BUSU9OUy5uYW1lID09PSBvcHRzLm5hbWUpIHtcbiAgICAgICAgaWYgKGlzRXhjbHVzaXZlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChmbi5PUFRJT05TLnRlc3QgPT09IHZhbGlkYXRlLk9QVElPTlMudGVzdCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgbmV4dC50ZXN0cy5wdXNoKHZhbGlkYXRlKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICB3aGVuKGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2V5cykgJiYgdHlwZW9mIGtleXMgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zID0ga2V5cztcbiAgICAgIGtleXMgPSAnLic7XG4gICAgfVxuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIGxldCBkZXBzID0gdG9BcnJheShrZXlzKS5tYXAoa2V5ID0+IG5ldyBSZWZlcmVuY2Uoa2V5KSk7XG4gICAgZGVwcy5mb3JFYWNoKGRlcCA9PiB7XG4gICAgICAvLyBAdHMtaWdub3JlIHJlYWRvbmx5IGFycmF5XG4gICAgICBpZiAoZGVwLmlzU2libGluZykgbmV4dC5kZXBzLnB1c2goZGVwLmtleSk7XG4gICAgfSk7XG4gICAgbmV4dC5jb25kaXRpb25zLnB1c2godHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicgPyBuZXcgQ29uZGl0aW9uKGRlcHMsIG9wdGlvbnMpIDogQ29uZGl0aW9uLmZyb21PcHRpb25zKGRlcHMsIG9wdGlvbnMpKTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICB0eXBlRXJyb3IobWVzc2FnZSkge1xuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIG5leHQuaW50ZXJuYWxUZXN0cy50eXBlRXJyb3IgPSBjcmVhdGVWYWxpZGF0aW9uKHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAndHlwZUVycm9yJyxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5zY2hlbWEuX3R5cGVDaGVjayh2YWx1ZSkpIHJldHVybiB0aGlzLmNyZWF0ZUVycm9yKHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuc2NoZW1hLnR5cGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICBvbmVPZihlbnVtcywgbWVzc2FnZSA9IG1peGVkLm9uZU9mKSB7XG4gICAgbGV0IG5leHQgPSB0aGlzLmNsb25lKCk7XG4gICAgZW51bXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgbmV4dC5fd2hpdGVsaXN0LmFkZCh2YWwpO1xuICAgICAgbmV4dC5fYmxhY2tsaXN0LmRlbGV0ZSh2YWwpO1xuICAgIH0pO1xuICAgIG5leHQuaW50ZXJuYWxUZXN0cy53aGl0ZUxpc3QgPSBjcmVhdGVWYWxpZGF0aW9uKHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnb25lT2YnLFxuICAgICAgc2tpcEFic2VudDogdHJ1ZSxcbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgbGV0IHZhbGlkcyA9IHRoaXMuc2NoZW1hLl93aGl0ZWxpc3Q7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IHZhbGlkcy5yZXNvbHZlQWxsKHRoaXMucmVzb2x2ZSk7XG4gICAgICAgIHJldHVybiByZXNvbHZlZC5pbmNsdWRlcyh2YWx1ZSkgPyB0cnVlIDogdGhpcy5jcmVhdGVFcnJvcih7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB2YWx1ZXM6IEFycmF5LmZyb20odmFsaWRzKS5qb2luKCcsICcpLFxuICAgICAgICAgICAgcmVzb2x2ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIG5vdE9uZU9mKGVudW1zLCBtZXNzYWdlID0gbWl4ZWQubm90T25lT2YpIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBlbnVtcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICBuZXh0Ll9ibGFja2xpc3QuYWRkKHZhbCk7XG4gICAgICBuZXh0Ll93aGl0ZWxpc3QuZGVsZXRlKHZhbCk7XG4gICAgfSk7XG4gICAgbmV4dC5pbnRlcm5hbFRlc3RzLmJsYWNrbGlzdCA9IGNyZWF0ZVZhbGlkYXRpb24oe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdub3RPbmVPZicsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIGxldCBpbnZhbGlkcyA9IHRoaXMuc2NoZW1hLl9ibGFja2xpc3Q7XG4gICAgICAgIGxldCByZXNvbHZlZCA9IGludmFsaWRzLnJlc29sdmVBbGwodGhpcy5yZXNvbHZlKTtcbiAgICAgICAgaWYgKHJlc29sdmVkLmluY2x1ZGVzKHZhbHVlKSkgcmV0dXJuIHRoaXMuY3JlYXRlRXJyb3Ioe1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdmFsdWVzOiBBcnJheS5mcm9tKGludmFsaWRzKS5qb2luKCcsICcpLFxuICAgICAgICAgICAgcmVzb2x2ZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICBzdHJpcChzdHJpcCA9IHRydWUpIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBuZXh0LnNwZWMuc3RyaXAgPSBzdHJpcDtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSBzZXJpYWxpemVkIGRlc2NyaXB0aW9uIG9mIHRoZSBzY2hlbWEgaW5jbHVkaW5nIHZhbGlkYXRpb25zLCBmbGFncywgdHlwZXMgZXRjLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyBQcm92aWRlIGFueSBuZWVkZWQgY29udGV4dCBmb3IgcmVzb2x2aW5nIHJ1bnRpbWUgc2NoZW1hIGFsdGVyYXRpb25zIChsYXp5LCB3aGVuIGNvbmRpdGlvbnMsIGV0YykuXG4gICAqL1xuICBkZXNjcmliZShvcHRpb25zKSB7XG4gICAgY29uc3QgbmV4dCA9IChvcHRpb25zID8gdGhpcy5yZXNvbHZlKG9wdGlvbnMpIDogdGhpcykuY2xvbmUoKTtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIG1ldGEsXG4gICAgICBvcHRpb25hbCxcbiAgICAgIG51bGxhYmxlXG4gICAgfSA9IG5leHQuc3BlYztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICAgIG1ldGEsXG4gICAgICBsYWJlbCxcbiAgICAgIG9wdGlvbmFsLFxuICAgICAgbnVsbGFibGUsXG4gICAgICBkZWZhdWx0OiBuZXh0LmdldERlZmF1bHQob3B0aW9ucyksXG4gICAgICB0eXBlOiBuZXh0LnR5cGUsXG4gICAgICBvbmVPZjogbmV4dC5fd2hpdGVsaXN0LmRlc2NyaWJlKCksXG4gICAgICBub3RPbmVPZjogbmV4dC5fYmxhY2tsaXN0LmRlc2NyaWJlKCksXG4gICAgICB0ZXN0czogbmV4dC50ZXN0cy5tYXAoZm4gPT4gKHtcbiAgICAgICAgbmFtZTogZm4uT1BUSU9OUy5uYW1lLFxuICAgICAgICBwYXJhbXM6IGZuLk9QVElPTlMucGFyYW1zXG4gICAgICB9KSkuZmlsdGVyKChuLCBpZHgsIGxpc3QpID0+IGxpc3QuZmluZEluZGV4KGMgPT4gYy5uYW1lID09PSBuLm5hbWUpID09PSBpZHgpXG4gICAgfTtcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gIH1cbn1cbi8vIEB0cy1leHBlY3QtZXJyb3JcblNjaGVtYS5wcm90b3R5cGUuX19pc1l1cFNjaGVtYV9fID0gdHJ1ZTtcbmZvciAoY29uc3QgbWV0aG9kIG9mIFsndmFsaWRhdGUnLCAndmFsaWRhdGVTeW5jJ10pIFNjaGVtYS5wcm90b3R5cGVbYCR7bWV0aG9kfUF0YF0gPSBmdW5jdGlvbiAocGF0aCwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB7XG4gICAgcGFyZW50LFxuICAgIHBhcmVudFBhdGgsXG4gICAgc2NoZW1hXG4gIH0gPSBnZXRJbih0aGlzLCBwYXRoLCB2YWx1ZSwgb3B0aW9ucy5jb250ZXh0KTtcbiAgcmV0dXJuIHNjaGVtYVttZXRob2RdKHBhcmVudCAmJiBwYXJlbnRbcGFyZW50UGF0aF0sIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICBwYXJlbnQsXG4gICAgcGF0aFxuICB9KSk7XG59O1xuZm9yIChjb25zdCBhbGlhcyBvZiBbJ2VxdWFscycsICdpcyddKSBTY2hlbWEucHJvdG90eXBlW2FsaWFzXSA9IFNjaGVtYS5wcm90b3R5cGUub25lT2Y7XG5mb3IgKGNvbnN0IGFsaWFzIG9mIFsnbm90JywgJ25vcGUnXSkgU2NoZW1hLnByb3RvdHlwZVthbGlhc10gPSBTY2hlbWEucHJvdG90eXBlLm5vdE9uZU9mO1xuXG5jb25zdCByZXR1cm5zVHJ1ZSA9ICgpID0+IHRydWU7XG5mdW5jdGlvbiBjcmVhdGUkOChzcGVjKSB7XG4gIHJldHVybiBuZXcgTWl4ZWRTY2hlbWEoc3BlYyk7XG59XG5jbGFzcyBNaXhlZFNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yKHNwZWMpIHtcbiAgICBzdXBlcih0eXBlb2Ygc3BlYyA9PT0gJ2Z1bmN0aW9uJyA/IHtcbiAgICAgIHR5cGU6ICdtaXhlZCcsXG4gICAgICBjaGVjazogc3BlY1xuICAgIH0gOiBPYmplY3QuYXNzaWduKHtcbiAgICAgIHR5cGU6ICdtaXhlZCcsXG4gICAgICBjaGVjazogcmV0dXJuc1RydWVcbiAgICB9LCBzcGVjKSk7XG4gIH1cbn1cbmNyZWF0ZSQ4LnByb3RvdHlwZSA9IE1peGVkU2NoZW1hLnByb3RvdHlwZTtcblxuZnVuY3Rpb24gY3JlYXRlJDcoKSB7XG4gIHJldHVybiBuZXcgQm9vbGVhblNjaGVtYSgpO1xufVxuY2xhc3MgQm9vbGVhblNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgIGNoZWNrKHYpIHtcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBCb29sZWFuKSB2ID0gdi52YWx1ZU9mKCk7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Jvb2xlYW4nO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMud2l0aE11dGF0aW9uKCgpID0+IHtcbiAgICAgIHRoaXMudHJhbnNmb3JtKCh2YWx1ZSwgX3JhdywgY3R4KSA9PiB7XG4gICAgICAgIGlmIChjdHguc3BlYy5jb2VyY2UgJiYgIWN0eC5pc1R5cGUodmFsdWUpKSB7XG4gICAgICAgICAgaWYgKC9eKHRydWV8MSkkL2kudGVzdChTdHJpbmcodmFsdWUpKSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgaWYgKC9eKGZhbHNlfDApJC9pLnRlc3QoU3RyaW5nKHZhbHVlKSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBpc1RydWUobWVzc2FnZSA9IGJvb2xlYW4uaXNWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdpcy12YWx1ZScsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6ICd0cnVlJ1xuICAgICAgfSxcbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGlzQWJzZW50KHZhbHVlKSB8fCB2YWx1ZSA9PT0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBpc0ZhbHNlKG1lc3NhZ2UgPSBib29sZWFuLmlzVmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnaXMtdmFsdWUnLFxuICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHZhbHVlOiAnZmFsc2UnXG4gICAgICB9LFxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gaXNBYnNlbnQodmFsdWUpIHx8IHZhbHVlID09PSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBkZWZhdWx0KGRlZikge1xuICAgIHJldHVybiBzdXBlci5kZWZhdWx0KGRlZik7XG4gIH1cbiAgZGVmaW5lZChtc2cpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVmaW5lZChtc2cpO1xuICB9XG4gIG9wdGlvbmFsKCkge1xuICAgIHJldHVybiBzdXBlci5vcHRpb25hbCgpO1xuICB9XG4gIHJlcXVpcmVkKG1zZykge1xuICAgIHJldHVybiBzdXBlci5yZXF1aXJlZChtc2cpO1xuICB9XG4gIG5vdFJlcXVpcmVkKCkge1xuICAgIHJldHVybiBzdXBlci5ub3RSZXF1aXJlZCgpO1xuICB9XG4gIG51bGxhYmxlKCkge1xuICAgIHJldHVybiBzdXBlci5udWxsYWJsZSgpO1xuICB9XG4gIG5vbk51bGxhYmxlKG1zZykge1xuICAgIHJldHVybiBzdXBlci5ub25OdWxsYWJsZShtc2cpO1xuICB9XG4gIHN0cmlwKHYpIHtcbiAgICByZXR1cm4gc3VwZXIuc3RyaXAodik7XG4gIH1cbn1cbmNyZWF0ZSQ3LnByb3RvdHlwZSA9IEJvb2xlYW5TY2hlbWEucHJvdG90eXBlO1xuXG4vLyBUYWtlbiBmcm9tIEhUTUwgc3BlYzogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5wdXQuaHRtbCN2YWxpZC1lLW1haWwtYWRkcmVzc1xubGV0IHJFbWFpbCA9XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi9eW2EtekEtWjAtOS4hIyQlJicqK1xcLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8oPzpcXC5bYS16QS1aMC05XSg/OlthLXpBLVowLTktXXswLDYxfVthLXpBLVowLTldKT8pKiQvO1xubGV0IHJVcmwgPVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vXigoaHR0cHM/fGZ0cCk6KT9cXC9cXC8oKCgoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KCVbXFxkYS1mXXsyfSl8WyFcXCQmJ1xcKFxcKVxcKlxcKyw7PV18OikqQCk/KCgoXFxkfFsxLTldXFxkfDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pXFwuKFxcZHxbMS05XVxcZHwxXFxkXFxkfDJbMC00XVxcZHwyNVswLTVdKVxcLihcXGR8WzEtOV1cXGR8MVxcZFxcZHwyWzAtNF1cXGR8MjVbMC01XSlcXC4oXFxkfFsxLTldXFxkfDFcXGRcXGR8MlswLTRdXFxkfDI1WzAtNV0pKXwoKChbYS16XXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpXFwuKSsoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoKFthLXpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSooW2Etel18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4/KSg6XFxkKik/KShcXC8oKChbYS16XXxcXGR8LXxcXC58X3x+fFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKXwoJVtcXGRhLWZdezJ9KXxbIVxcJCYnXFwoXFwpXFwqXFwrLDs9XXw6fEApKyhcXC8oKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCglW1xcZGEtZl17Mn0pfFshXFwkJidcXChcXClcXCpcXCssOz1dfDp8QCkqKSopPyk/KFxcPygoKFthLXpdfFxcZHwtfFxcLnxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCglW1xcZGEtZl17Mn0pfFshXFwkJidcXChcXClcXCpcXCssOz1dfDp8QCl8W1xcdUUwMDAtXFx1RjhGRl18XFwvfFxcPykqKT8oXFwjKCgoW2Etel18XFxkfC18XFwufF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KCVbXFxkYS1mXXsyfSl8WyFcXCQmJ1xcKFxcKVxcKlxcKyw7PV18OnxAKXxcXC98XFw/KSopPyQvaTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5sZXQgclVVSUQgPSAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7XG5sZXQgaXNUcmltbWVkID0gdmFsdWUgPT4gaXNBYnNlbnQodmFsdWUpIHx8IHZhbHVlID09PSB2YWx1ZS50cmltKCk7XG5sZXQgb2JqU3RyaW5nVGFnID0ge30udG9TdHJpbmcoKTtcbmZ1bmN0aW9uIGNyZWF0ZSQ2KCkge1xuICByZXR1cm4gbmV3IFN0cmluZ1NjaGVtYSgpO1xufVxuY2xhc3MgU3RyaW5nU2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBjaGVjayh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpIHZhbHVlID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLndpdGhNdXRhdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSgodmFsdWUsIF9yYXcsIGN0eCkgPT4ge1xuICAgICAgICBpZiAoIWN0eC5zcGVjLmNvZXJjZSB8fCBjdHguaXNUeXBlKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgIC8vIGRvbid0IGV2ZXIgY29udmVydCBhcnJheXNcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICAgIGNvbnN0IHN0clZhbHVlID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50b1N0cmluZyA/IHZhbHVlLnRvU3RyaW5nKCkgOiB2YWx1ZTtcblxuICAgICAgICAvLyBubyBvbmUgd2FudHMgcGxhaW4gb2JqZWN0cyBjb252ZXJ0ZWQgdG8gW09iamVjdCBvYmplY3RdXG4gICAgICAgIGlmIChzdHJWYWx1ZSA9PT0gb2JqU3RyaW5nVGFnKSByZXR1cm4gdmFsdWU7XG4gICAgICAgIHJldHVybiBzdHJWYWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHJlcXVpcmVkKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gc3VwZXIucmVxdWlyZWQobWVzc2FnZSkud2l0aE11dGF0aW9uKHNjaGVtYSA9PiBzY2hlbWEudGVzdCh7XG4gICAgICBtZXNzYWdlOiBtZXNzYWdlIHx8IG1peGVkLnJlcXVpcmVkLFxuICAgICAgbmFtZTogJ3JlcXVpcmVkJyxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0OiB2YWx1ZSA9PiAhIXZhbHVlLmxlbmd0aFxuICAgIH0pKTtcbiAgfVxuICBub3RSZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gc3VwZXIubm90UmVxdWlyZWQoKS53aXRoTXV0YXRpb24oc2NoZW1hID0+IHtcbiAgICAgIHNjaGVtYS50ZXN0cyA9IHNjaGVtYS50ZXN0cy5maWx0ZXIodCA9PiB0Lk9QVElPTlMubmFtZSAhPT0gJ3JlcXVpcmVkJyk7XG4gICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH0pO1xuICB9XG4gIGxlbmd0aChsZW5ndGgsIG1lc3NhZ2UgPSBzdHJpbmcubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ2xlbmd0aCcsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbGVuZ3RoXG4gICAgICB9LFxuICAgICAgc2tpcEFic2VudDogdHJ1ZSxcbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gdGhpcy5yZXNvbHZlKGxlbmd0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbWluKG1pbiwgbWVzc2FnZSA9IHN0cmluZy5taW4pIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWluJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtaW5cbiAgICAgIH0sXG4gICAgICBza2lwQWJzZW50OiB0cnVlLFxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID49IHRoaXMucmVzb2x2ZShtaW4pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1heChtYXgsIG1lc3NhZ2UgPSBzdHJpbmcubWF4KSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBuYW1lOiAnbWF4JyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbWF4XG4gICAgICB9LFxuICAgICAgc2tpcEFic2VudDogdHJ1ZSxcbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA8PSB0aGlzLnJlc29sdmUobWF4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtYXRjaGVzKHJlZ2V4LCBvcHRpb25zKSB7XG4gICAgbGV0IGV4Y2x1ZGVFbXB0eVN0cmluZyA9IGZhbHNlO1xuICAgIGxldCBtZXNzYWdlO1xuICAgIGxldCBuYW1lO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICh7XG4gICAgICAgICAgZXhjbHVkZUVtcHR5U3RyaW5nID0gZmFsc2UsXG4gICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH0gPSBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgPSBvcHRpb25zO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG5hbWU6IG5hbWUgfHwgJ21hdGNoZXMnLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCBzdHJpbmcubWF0Y2hlcyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICByZWdleFxuICAgICAgfSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0OiB2YWx1ZSA9PiB2YWx1ZSA9PT0gJycgJiYgZXhjbHVkZUVtcHR5U3RyaW5nIHx8IHZhbHVlLnNlYXJjaChyZWdleCkgIT09IC0xXG4gICAgfSk7XG4gIH1cbiAgZW1haWwobWVzc2FnZSA9IHN0cmluZy5lbWFpbCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMockVtYWlsLCB7XG4gICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGV4Y2x1ZGVFbXB0eVN0cmluZzogdHJ1ZVxuICAgIH0pO1xuICB9XG4gIHVybChtZXNzYWdlID0gc3RyaW5nLnVybCkge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMoclVybCwge1xuICAgICAgbmFtZTogJ3VybCcsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZXhjbHVkZUVtcHR5U3RyaW5nOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgdXVpZChtZXNzYWdlID0gc3RyaW5nLnV1aWQpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRjaGVzKHJVVUlELCB7XG4gICAgICBuYW1lOiAndXVpZCcsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZXhjbHVkZUVtcHR5U3RyaW5nOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLy8tLSB0cmFuc2Zvcm1zIC0tXG4gIGVuc3VyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0KCcnKS50cmFuc2Zvcm0odmFsID0+IHZhbCA9PT0gbnVsbCA/ICcnIDogdmFsKTtcbiAgfVxuICB0cmltKG1lc3NhZ2UgPSBzdHJpbmcudHJpbSkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2YWwgPT4gdmFsICE9IG51bGwgPyB2YWwudHJpbSgpIDogdmFsKS50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAndHJpbScsXG4gICAgICB0ZXN0OiBpc1RyaW1tZWRcbiAgICB9KTtcbiAgfVxuICBsb3dlcmNhc2UobWVzc2FnZSA9IHN0cmluZy5sb3dlcmNhc2UpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0odmFsdWUgPT4gIWlzQWJzZW50KHZhbHVlKSA/IHZhbHVlLnRvTG93ZXJDYXNlKCkgOiB2YWx1ZSkudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ3N0cmluZ19jYXNlJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0OiB2YWx1ZSA9PiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPT09IHZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICB9KTtcbiAgfVxuICB1cHBlcmNhc2UobWVzc2FnZSA9IHN0cmluZy51cHBlcmNhc2UpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0odmFsdWUgPT4gIWlzQWJzZW50KHZhbHVlKSA/IHZhbHVlLnRvVXBwZXJDYXNlKCkgOiB2YWx1ZSkudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ3N0cmluZ19jYXNlJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0OiB2YWx1ZSA9PiBpc0Fic2VudCh2YWx1ZSkgfHwgdmFsdWUgPT09IHZhbHVlLnRvVXBwZXJDYXNlKClcbiAgICB9KTtcbiAgfVxufVxuY3JlYXRlJDYucHJvdG90eXBlID0gU3RyaW5nU2NoZW1hLnByb3RvdHlwZTtcblxuLy9cbi8vIFN0cmluZyBJbnRlcmZhY2VzXG4vL1xuXG5sZXQgaXNOYU4kMSA9IHZhbHVlID0+IHZhbHVlICE9ICt2YWx1ZTtcbmZ1bmN0aW9uIGNyZWF0ZSQ1KCkge1xuICByZXR1cm4gbmV3IE51bWJlclNjaGVtYSgpO1xufVxuY2xhc3MgTnVtYmVyU2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBjaGVjayh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpIHZhbHVlID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiAhaXNOYU4kMSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy53aXRoTXV0YXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy50cmFuc2Zvcm0oKHZhbHVlLCBfcmF3LCBjdHgpID0+IHtcbiAgICAgICAgaWYgKCFjdHguc3BlYy5jb2VyY2UpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgbGV0IHBhcnNlZCA9IHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBwYXJzZWQgPSBwYXJzZWQucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgICBpZiAocGFyc2VkID09PSAnJykgcmV0dXJuIE5hTjtcbiAgICAgICAgICAvLyBkb24ndCB1c2UgcGFyc2VGbG9hdCB0byBhdm9pZCBwb3NpdGl2ZXMgb24gYWxwaGEtbnVtZXJpYyBzdHJpbmdzXG4gICAgICAgICAgcGFyc2VkID0gK3BhcnNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG51bGwgLT4gTmFOIGlzbid0IHVzZWZ1bDsgdHJlYXQgYWxsIG51bGxzIGFzIG51bGwgYW5kIGxldCBpdCBmYWlsIG9uXG4gICAgICAgIC8vIG51bGxhYmlsaXR5IGNoZWNrIHZzIFR5cGVFcnJvcnNcbiAgICAgICAgaWYgKGN0eC5pc1R5cGUocGFyc2VkKSB8fCBwYXJzZWQgPT09IG51bGwpIHJldHVybiBwYXJzZWQ7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHBhcnNlZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBtaW4obWluLCBtZXNzYWdlID0gbnVtYmVyLm1pbikge1xuICAgIHJldHVybiB0aGlzLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdtaW4nLFxuICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1pblxuICAgICAgfSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSB0aGlzLnJlc29sdmUobWluKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtYXgobWF4LCBtZXNzYWdlID0gbnVtYmVyLm1heCkge1xuICAgIHJldHVybiB0aGlzLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdtYXgnLFxuICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1heFxuICAgICAgfSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8PSB0aGlzLnJlc29sdmUobWF4KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBsZXNzVGhhbihsZXNzLCBtZXNzYWdlID0gbnVtYmVyLmxlc3NUaGFuKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ21heCcsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbGVzc1xuICAgICAgfSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IHRoaXMucmVzb2x2ZShsZXNzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtb3JlVGhhbihtb3JlLCBtZXNzYWdlID0gbnVtYmVyLm1vcmVUaGFuKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ21pbicsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbW9yZVxuICAgICAgfSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+IHRoaXMucmVzb2x2ZShtb3JlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwb3NpdGl2ZShtc2cgPSBudW1iZXIucG9zaXRpdmUpIHtcbiAgICByZXR1cm4gdGhpcy5tb3JlVGhhbigwLCBtc2cpO1xuICB9XG4gIG5lZ2F0aXZlKG1zZyA9IG51bWJlci5uZWdhdGl2ZSkge1xuICAgIHJldHVybiB0aGlzLmxlc3NUaGFuKDAsIG1zZyk7XG4gIH1cbiAgaW50ZWdlcihtZXNzYWdlID0gbnVtYmVyLmludGVnZXIpIHtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG5hbWU6ICdpbnRlZ2VyJyxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBza2lwQWJzZW50OiB0cnVlLFxuICAgICAgdGVzdDogdmFsID0+IE51bWJlci5pc0ludGVnZXIodmFsKVxuICAgIH0pO1xuICB9XG4gIHRydW5jYXRlKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2YWx1ZSA9PiAhaXNBYnNlbnQodmFsdWUpID8gdmFsdWUgfCAwIDogdmFsdWUpO1xuICB9XG4gIHJvdW5kKG1ldGhvZCkge1xuICAgIHZhciBfbWV0aG9kO1xuICAgIGxldCBhdmFpbCA9IFsnY2VpbCcsICdmbG9vcicsICdyb3VuZCcsICd0cnVuYyddO1xuICAgIG1ldGhvZCA9ICgoX21ldGhvZCA9IG1ldGhvZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tZXRob2QudG9Mb3dlckNhc2UoKSkgfHwgJ3JvdW5kJztcblxuICAgIC8vIHRoaXMgZXhpc3RzIGZvciBzeW1lbXRyeSB3aXRoIHRoZSBuZXcgTWF0aC50cnVuY1xuICAgIGlmIChtZXRob2QgPT09ICd0cnVuYycpIHJldHVybiB0aGlzLnRydW5jYXRlKCk7XG4gICAgaWYgKGF2YWlsLmluZGV4T2YobWV0aG9kLnRvTG93ZXJDYXNlKCkpID09PSAtMSkgdGhyb3cgbmV3IFR5cGVFcnJvcignT25seSB2YWxpZCBvcHRpb25zIGZvciByb3VuZCgpIGFyZTogJyArIGF2YWlsLmpvaW4oJywgJykpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2YWx1ZSA9PiAhaXNBYnNlbnQodmFsdWUpID8gTWF0aFttZXRob2RdKHZhbHVlKSA6IHZhbHVlKTtcbiAgfVxufVxuY3JlYXRlJDUucHJvdG90eXBlID0gTnVtYmVyU2NoZW1hLnByb3RvdHlwZTtcblxuLy9cbi8vIE51bWJlciBJbnRlcmZhY2VzXG4vL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKlxuICogRGF0ZS5wYXJzZSB3aXRoIHByb2dyZXNzaXZlIGVuaGFuY2VtZW50IGZvciBJU08gODYwMSA8aHR0cHM6Ly9naXRodWIuY29tL2Nzbm92ZXIvanMtaXNvODYwMT5cbiAqIE5PTi1DT05GT1JNQU5UIEVESVRJT04uXG4gKiDCqSAyMDExIENvbGluIFNub3ZlciA8aHR0cDovL3pldGFmbGVldC5jb20+XG4gKiBSZWxlYXNlZCB1bmRlciBNSVQgbGljZW5zZS5cbiAqL1xuXG4vLyAgICAgICAgICAgICAgMSBZWVlZICAgICAgICAgICAgICAgICAyIE1NICAgICAgICAzIEREICAgICAgICAgICAgICA0IEhIICAgICA1IG1tICAgICAgICA2IHNzICAgICAgICAgICAgNyBtc2VjICAgICAgICAgOCBaIDkgwrEgICAgMTAgdHpISCAgICAxMSB0em1tXG52YXIgaXNvUmVnID0gL14oXFxkezR9fFsrXFwtXVxcZHs2fSkoPzotPyhcXGR7Mn0pKD86LT8oXFxkezJ9KSk/KT8oPzpbIFRdPyhcXGR7Mn0pOj8oXFxkezJ9KSg/Ojo/KFxcZHsyfSkoPzpbLFxcLl0oXFxkezEsfSkpPyk/KD86KFopfChbK1xcLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8pPyk/JC87XG5mdW5jdGlvbiBwYXJzZUlzb0RhdGUoZGF0ZSkge1xuICB2YXIgbnVtZXJpY0tleXMgPSBbMSwgNCwgNSwgNiwgNywgMTAsIDExXSxcbiAgICBtaW51dGVzT2Zmc2V0ID0gMCxcbiAgICB0aW1lc3RhbXAsXG4gICAgc3RydWN0O1xuICBpZiAoc3RydWN0ID0gaXNvUmVnLmV4ZWMoZGF0ZSkpIHtcbiAgICAvLyBhdm9pZCBOYU4gdGltZXN0YW1wcyBjYXVzZWQgYnkg4oCcdW5kZWZpbmVk4oCdIHZhbHVlcyBiZWluZyBwYXNzZWQgdG8gRGF0ZS5VVENcbiAgICBmb3IgKHZhciBpID0gMCwgazsgayA9IG51bWVyaWNLZXlzW2ldOyArK2kpIHN0cnVjdFtrXSA9ICtzdHJ1Y3Rba10gfHwgMDtcblxuICAgIC8vIGFsbG93IHVuZGVmaW5lZCBkYXlzIGFuZCBtb250aHNcbiAgICBzdHJ1Y3RbMl0gPSAoK3N0cnVjdFsyXSB8fCAxKSAtIDE7XG4gICAgc3RydWN0WzNdID0gK3N0cnVjdFszXSB8fCAxO1xuXG4gICAgLy8gYWxsb3cgYXJiaXRyYXJ5IHN1Yi1zZWNvbmQgcHJlY2lzaW9uIGJleW9uZCBtaWxsaXNlY29uZHNcbiAgICBzdHJ1Y3RbN10gPSBzdHJ1Y3RbN10gPyBTdHJpbmcoc3RydWN0WzddKS5zdWJzdHIoMCwgMykgOiAwO1xuXG4gICAgLy8gdGltZXN0YW1wcyB3aXRob3V0IHRpbWV6b25lIGlkZW50aWZpZXJzIHNob3VsZCBiZSBjb25zaWRlcmVkIGxvY2FsIHRpbWVcbiAgICBpZiAoKHN0cnVjdFs4XSA9PT0gdW5kZWZpbmVkIHx8IHN0cnVjdFs4XSA9PT0gJycpICYmIChzdHJ1Y3RbOV0gPT09IHVuZGVmaW5lZCB8fCBzdHJ1Y3RbOV0gPT09ICcnKSkgdGltZXN0YW1wID0gK25ldyBEYXRlKHN0cnVjdFsxXSwgc3RydWN0WzJdLCBzdHJ1Y3RbM10sIHN0cnVjdFs0XSwgc3RydWN0WzVdLCBzdHJ1Y3RbNl0sIHN0cnVjdFs3XSk7ZWxzZSB7XG4gICAgICBpZiAoc3RydWN0WzhdICE9PSAnWicgJiYgc3RydWN0WzldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWludXRlc09mZnNldCA9IHN0cnVjdFsxMF0gKiA2MCArIHN0cnVjdFsxMV07XG4gICAgICAgIGlmIChzdHJ1Y3RbOV0gPT09ICcrJykgbWludXRlc09mZnNldCA9IDAgLSBtaW51dGVzT2Zmc2V0O1xuICAgICAgfVxuICAgICAgdGltZXN0YW1wID0gRGF0ZS5VVEMoc3RydWN0WzFdLCBzdHJ1Y3RbMl0sIHN0cnVjdFszXSwgc3RydWN0WzRdLCBzdHJ1Y3RbNV0gKyBtaW51dGVzT2Zmc2V0LCBzdHJ1Y3RbNl0sIHN0cnVjdFs3XSk7XG4gICAgfVxuICB9IGVsc2UgdGltZXN0YW1wID0gRGF0ZS5wYXJzZSA/IERhdGUucGFyc2UoZGF0ZSkgOiBOYU47XG4gIHJldHVybiB0aW1lc3RhbXA7XG59XG5cbi8vIEB0cy1pZ25vcmVcbmxldCBpbnZhbGlkRGF0ZSA9IG5ldyBEYXRlKCcnKTtcbmxldCBpc0RhdGUgPSBvYmogPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJztcbmZ1bmN0aW9uIGNyZWF0ZSQ0KCkge1xuICByZXR1cm4gbmV3IERhdGVTY2hlbWEoKTtcbn1cbmNsYXNzIERhdGVTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICBjaGVjayh2KSB7XG4gICAgICAgIHJldHVybiBpc0RhdGUodikgJiYgIWlzTmFOKHYuZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLndpdGhNdXRhdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSgodmFsdWUsIF9yYXcsIGN0eCkgPT4ge1xuICAgICAgICAvLyBudWxsIC0+IEludmFsaWREYXRlIGlzbid0IHVzZWZ1bDsgdHJlYXQgYWxsIG51bGxzIGFzIG51bGwgYW5kIGxldCBpdCBmYWlsIG9uXG4gICAgICAgIC8vIG51bGxhYmlsaXR5IGNoZWNrIHZzIFR5cGVFcnJvcnNcbiAgICAgICAgaWYgKCFjdHguc3BlYy5jb2VyY2UgfHwgY3R4LmlzVHlwZSh2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGwpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUlzb0RhdGUodmFsdWUpO1xuXG4gICAgICAgIC8vIDAgaXMgYSB2YWxpZCB0aW1lc3RhbXAgZXF1aXZhbGVudCB0byAxOTcwLTAxLTAxVDAwOjAwOjAwWih1bml4IGVwb2NoKSBvciBiZWZvcmUuXG4gICAgICAgIHJldHVybiAhaXNOYU4odmFsdWUpID8gbmV3IERhdGUodmFsdWUpIDogRGF0ZVNjaGVtYS5JTlZBTElEX0RBVEU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBwcmVwYXJlUGFyYW0ocmVmLCBuYW1lKSB7XG4gICAgbGV0IHBhcmFtO1xuICAgIGlmICghUmVmZXJlbmNlLmlzUmVmKHJlZikpIHtcbiAgICAgIGxldCBjYXN0ID0gdGhpcy5jYXN0KHJlZik7XG4gICAgICBpZiAoIXRoaXMuX3R5cGVDaGVjayhjYXN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihgXFxgJHtuYW1lfVxcYCBtdXN0IGJlIGEgRGF0ZSBvciBhIHZhbHVlIHRoYXQgY2FuIGJlIFxcYGNhc3QoKVxcYCB0byBhIERhdGVgKTtcbiAgICAgIHBhcmFtID0gY2FzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW0gPSByZWY7XG4gICAgfVxuICAgIHJldHVybiBwYXJhbTtcbiAgfVxuICBtaW4obWluLCBtZXNzYWdlID0gZGF0ZS5taW4pIHtcbiAgICBsZXQgbGltaXQgPSB0aGlzLnByZXBhcmVQYXJhbShtaW4sICdtaW4nKTtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWluJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtaW5cbiAgICAgIH0sXG4gICAgICBza2lwQWJzZW50OiB0cnVlLFxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPj0gdGhpcy5yZXNvbHZlKGxpbWl0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtYXgobWF4LCBtZXNzYWdlID0gZGF0ZS5tYXgpIHtcbiAgICBsZXQgbGltaXQgPSB0aGlzLnByZXBhcmVQYXJhbShtYXgsICdtYXgnKTtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWF4JyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtYXhcbiAgICAgIH0sXG4gICAgICBza2lwQWJzZW50OiB0cnVlLFxuICAgICAgdGVzdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPD0gdGhpcy5yZXNvbHZlKGxpbWl0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuRGF0ZVNjaGVtYS5JTlZBTElEX0RBVEUgPSBpbnZhbGlkRGF0ZTtcbmNyZWF0ZSQ0LnByb3RvdHlwZSA9IERhdGVTY2hlbWEucHJvdG90eXBlO1xuY3JlYXRlJDQuSU5WQUxJRF9EQVRFID0gaW52YWxpZERhdGU7XG5cbi8vIEB0cy1leHBlY3QtZXJyb3JcbmZ1bmN0aW9uIHNvcnRGaWVsZHMoZmllbGRzLCBleGNsdWRlZEVkZ2VzID0gW10pIHtcbiAgbGV0IGVkZ2VzID0gW107XG4gIGxldCBub2RlcyA9IG5ldyBTZXQoKTtcbiAgbGV0IGV4Y2x1ZGVzID0gbmV3IFNldChleGNsdWRlZEVkZ2VzLm1hcCgoW2EsIGJdKSA9PiBgJHthfS0ke2J9YCkpO1xuICBmdW5jdGlvbiBhZGROb2RlKGRlcFBhdGgsIGtleSkge1xuICAgIGxldCBub2RlID0gc3BsaXQoZGVwUGF0aClbMF07XG4gICAgbm9kZXMuYWRkKG5vZGUpO1xuICAgIGlmICghZXhjbHVkZXMuaGFzKGAke2tleX0tJHtub2RlfWApKSBlZGdlcy5wdXNoKFtrZXksIG5vZGVdKTtcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhmaWVsZHMpKSB7XG4gICAgbGV0IHZhbHVlID0gZmllbGRzW2tleV07XG4gICAgbm9kZXMuYWRkKGtleSk7XG4gICAgaWYgKFJlZmVyZW5jZS5pc1JlZih2YWx1ZSkgJiYgdmFsdWUuaXNTaWJsaW5nKSBhZGROb2RlKHZhbHVlLnBhdGgsIGtleSk7ZWxzZSBpZiAoaXNTY2hlbWEodmFsdWUpICYmICdkZXBzJyBpbiB2YWx1ZSkgdmFsdWUuZGVwcy5mb3JFYWNoKHBhdGggPT4gYWRkTm9kZShwYXRoLCBrZXkpKTtcbiAgfVxuICByZXR1cm4gdG9wb3NvcnQuYXJyYXkoQXJyYXkuZnJvbShub2RlcyksIGVkZ2VzKS5yZXZlcnNlKCk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIGVycikge1xuICBsZXQgaWR4ID0gSW5maW5pdHk7XG4gIGFyci5zb21lKChrZXksIGlpKSA9PiB7XG4gICAgdmFyIF9lcnIkcGF0aDtcbiAgICBpZiAoKF9lcnIkcGF0aCA9IGVyci5wYXRoKSAhPSBudWxsICYmIF9lcnIkcGF0aC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBpZHggPSBpaTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpZHg7XG59XG5mdW5jdGlvbiBzb3J0QnlLZXlPcmRlcihrZXlzKSB7XG4gIHJldHVybiAoYSwgYikgPT4ge1xuICAgIHJldHVybiBmaW5kSW5kZXgoa2V5cywgYSkgLSBmaW5kSW5kZXgoa2V5cywgYik7XG4gIH07XG59XG5cbmNvbnN0IHBhcnNlSnNvbiA9ICh2YWx1ZSwgXywgY3R4KSA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGxldCBwYXJzZWQgPSB2YWx1ZTtcbiAgdHJ5IHtcbiAgICBwYXJzZWQgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLyogKi9cbiAgfVxuICByZXR1cm4gY3R4LmlzVHlwZShwYXJzZWQpID8gcGFyc2VkIDogdmFsdWU7XG59O1xuXG4vLyBAdHMtaWdub3JlXG5mdW5jdGlvbiBkZWVwUGFydGlhbChzY2hlbWEpIHtcbiAgaWYgKCdmaWVsZHMnIGluIHNjaGVtYSkge1xuICAgIGNvbnN0IHBhcnRpYWwgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIGZpZWxkU2NoZW1hXSBvZiBPYmplY3QuZW50cmllcyhzY2hlbWEuZmllbGRzKSkge1xuICAgICAgcGFydGlhbFtrZXldID0gZGVlcFBhcnRpYWwoZmllbGRTY2hlbWEpO1xuICAgIH1cbiAgICByZXR1cm4gc2NoZW1hLnNldEZpZWxkcyhwYXJ0aWFsKTtcbiAgfVxuICBpZiAoc2NoZW1hLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICBjb25zdCBuZXh0QXJyYXkgPSBzY2hlbWEub3B0aW9uYWwoKTtcbiAgICBpZiAobmV4dEFycmF5LmlubmVyVHlwZSkgbmV4dEFycmF5LmlubmVyVHlwZSA9IGRlZXBQYXJ0aWFsKG5leHRBcnJheS5pbm5lclR5cGUpO1xuICAgIHJldHVybiBuZXh0QXJyYXk7XG4gIH1cbiAgaWYgKHNjaGVtYS50eXBlID09PSAndHVwbGUnKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5vcHRpb25hbCgpLmNsb25lKHtcbiAgICAgIHR5cGVzOiBzY2hlbWEuc3BlYy50eXBlcy5tYXAoZGVlcFBhcnRpYWwpXG4gICAgfSk7XG4gIH1cbiAgaWYgKCdvcHRpb25hbCcgaW4gc2NoZW1hKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5vcHRpb25hbCgpO1xuICB9XG4gIHJldHVybiBzY2hlbWE7XG59XG5jb25zdCBkZWVwSGFzID0gKG9iaiwgcCkgPT4ge1xuICBjb25zdCBwYXRoID0gWy4uLm5vcm1hbGl6ZVBhdGgocCldO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDEpIHJldHVybiBwYXRoWzBdIGluIG9iajtcbiAgbGV0IGxhc3QgPSBwYXRoLnBvcCgpO1xuICBsZXQgcGFyZW50ID0gZ2V0dGVyKGpvaW4ocGF0aCksIHRydWUpKG9iaik7XG4gIHJldHVybiAhIShwYXJlbnQgJiYgbGFzdCBpbiBwYXJlbnQpO1xufTtcbmxldCBpc09iamVjdCA9IG9iaiA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG5mdW5jdGlvbiB1bmtub3duKGN0eCwgdmFsdWUpIHtcbiAgbGV0IGtub3duID0gT2JqZWN0LmtleXMoY3R4LmZpZWxkcyk7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkuZmlsdGVyKGtleSA9PiBrbm93bi5pbmRleE9mKGtleSkgPT09IC0xKTtcbn1cbmNvbnN0IGRlZmF1bHRTb3J0ID0gc29ydEJ5S2V5T3JkZXIoW10pO1xuZnVuY3Rpb24gY3JlYXRlJDMoc3BlYykge1xuICByZXR1cm4gbmV3IE9iamVjdFNjaGVtYShzcGVjKTtcbn1cbmNsYXNzIE9iamVjdFNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIGNvbnN0cnVjdG9yKHNwZWMpIHtcbiAgICBzdXBlcih7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGNoZWNrKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9zb3J0RXJyb3JzID0gZGVmYXVsdFNvcnQ7XG4gICAgdGhpcy5fbm9kZXMgPSBbXTtcbiAgICB0aGlzLl9leGNsdWRlZEVkZ2VzID0gW107XG4gICAgdGhpcy53aXRoTXV0YXRpb24oKCkgPT4ge1xuICAgICAgaWYgKHNwZWMpIHtcbiAgICAgICAgdGhpcy5zaGFwZShzcGVjKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBfY2FzdChfdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHZhciBfb3B0aW9ucyRzdHJpcFVua25vd247XG4gICAgbGV0IHZhbHVlID0gc3VwZXIuX2Nhc3QoX3ZhbHVlLCBvcHRpb25zKTtcblxuICAgIC8vc2hvdWxkIGlnbm9yZSBudWxscyBoZXJlXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiB0aGlzLmdldERlZmF1bHQob3B0aW9ucyk7XG4gICAgaWYgKCF0aGlzLl90eXBlQ2hlY2sodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgbGV0IGZpZWxkcyA9IHRoaXMuZmllbGRzO1xuICAgIGxldCBzdHJpcCA9IChfb3B0aW9ucyRzdHJpcFVua25vd24gPSBvcHRpb25zLnN0cmlwVW5rbm93bikgIT0gbnVsbCA/IF9vcHRpb25zJHN0cmlwVW5rbm93biA6IHRoaXMuc3BlYy5ub1Vua25vd247XG4gICAgbGV0IHByb3BzID0gW10uY29uY2F0KHRoaXMuX25vZGVzLCBPYmplY3Qua2V5cyh2YWx1ZSkuZmlsdGVyKHYgPT4gIXRoaXMuX25vZGVzLmluY2x1ZGVzKHYpKSk7XG4gICAgbGV0IGludGVybWVkaWF0ZVZhbHVlID0ge307IC8vIGlzIGZpbGxlZCBkdXJpbmcgdGhlIHRyYW5zZm9ybSBiZWxvd1xuICAgIGxldCBpbm5lck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IGludGVybWVkaWF0ZVZhbHVlLFxuICAgICAgX192YWxpZGF0aW5nOiBvcHRpb25zLl9fdmFsaWRhdGluZyB8fCBmYWxzZVxuICAgIH0pO1xuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcHMpIHtcbiAgICAgIGxldCBmaWVsZCA9IGZpZWxkc1twcm9wXTtcbiAgICAgIGxldCBleGlzdHMgPSAocHJvcCBpbiB2YWx1ZSk7XG4gICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgbGV0IGZpZWxkVmFsdWU7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gdmFsdWVbcHJvcF07XG5cbiAgICAgICAgLy8gc2FmZSB0byBtdXRhdGUgc2luY2UgdGhpcyBpcyBmaXJlZCBpbiBzZXF1ZW5jZVxuICAgICAgICBpbm5lck9wdGlvbnMucGF0aCA9IChvcHRpb25zLnBhdGggPyBgJHtvcHRpb25zLnBhdGh9LmAgOiAnJykgKyBwcm9wO1xuICAgICAgICBmaWVsZCA9IGZpZWxkLnJlc29sdmUoe1xuICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgIGNvbnRleHQ6IG9wdGlvbnMuY29udGV4dCxcbiAgICAgICAgICBwYXJlbnQ6IGludGVybWVkaWF0ZVZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZmllbGRTcGVjID0gZmllbGQgaW5zdGFuY2VvZiBTY2hlbWEgPyBmaWVsZC5zcGVjIDogdW5kZWZpbmVkO1xuICAgICAgICBsZXQgc3RyaWN0ID0gZmllbGRTcGVjID09IG51bGwgPyB2b2lkIDAgOiBmaWVsZFNwZWMuc3RyaWN0O1xuICAgICAgICBpZiAoZmllbGRTcGVjICE9IG51bGwgJiYgZmllbGRTcGVjLnN0cmlwKSB7XG4gICAgICAgICAgaXNDaGFuZ2VkID0gaXNDaGFuZ2VkIHx8IHByb3AgaW4gdmFsdWU7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZmllbGRWYWx1ZSA9ICFvcHRpb25zLl9fdmFsaWRhdGluZyB8fCAhc3RyaWN0ID9cbiAgICAgICAgLy8gVE9ETzogdXNlIF9jYXN0LCB0aGlzIGlzIGRvdWJsZSByZXNvbHZpbmdcbiAgICAgICAgZmllbGQuY2FzdCh2YWx1ZVtwcm9wXSwgaW5uZXJPcHRpb25zKSA6IHZhbHVlW3Byb3BdO1xuICAgICAgICBpZiAoZmllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWVbcHJvcF0gPSBmaWVsZFZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGV4aXN0cyAmJiAhc3RyaXApIHtcbiAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWVbcHJvcF0gPSB2YWx1ZVtwcm9wXTtcbiAgICAgIH1cbiAgICAgIGlmIChleGlzdHMgIT09IHByb3AgaW4gaW50ZXJtZWRpYXRlVmFsdWUgfHwgaW50ZXJtZWRpYXRlVmFsdWVbcHJvcF0gIT09IHZhbHVlW3Byb3BdKSB7XG4gICAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0NoYW5nZWQgPyBpbnRlcm1lZGlhdGVWYWx1ZSA6IHZhbHVlO1xuICB9XG4gIF92YWxpZGF0ZShfdmFsdWUsIG9wdGlvbnMgPSB7fSwgcGFuaWMsIG5leHQpIHtcbiAgICBsZXQge1xuICAgICAgZnJvbSA9IFtdLFxuICAgICAgb3JpZ2luYWxWYWx1ZSA9IF92YWx1ZSxcbiAgICAgIHJlY3Vyc2l2ZSA9IHRoaXMuc3BlYy5yZWN1cnNpdmVcbiAgICB9ID0gb3B0aW9ucztcbiAgICBvcHRpb25zLmZyb20gPSBbe1xuICAgICAgc2NoZW1hOiB0aGlzLFxuICAgICAgdmFsdWU6IG9yaWdpbmFsVmFsdWVcbiAgICB9LCAuLi5mcm9tXTtcbiAgICAvLyB0aGlzIGZsYWcgaXMgbmVlZGVkIGZvciBoYW5kbGluZyBgc3RyaWN0YCBjb3JyZWN0bHkgaW4gdGhlIGNvbnRleHQgb2ZcbiAgICAvLyB2YWxpZGF0aW9uIHZzIGp1c3QgY2FzdGluZy4gZS5nIHN0cmljdCgpIG9uIGEgZmllbGQgaXMgb25seSB1c2VkIHdoZW4gdmFsaWRhdGluZ1xuICAgIG9wdGlvbnMuX192YWxpZGF0aW5nID0gdHJ1ZTtcbiAgICBvcHRpb25zLm9yaWdpbmFsVmFsdWUgPSBvcmlnaW5hbFZhbHVlO1xuICAgIHN1cGVyLl92YWxpZGF0ZShfdmFsdWUsIG9wdGlvbnMsIHBhbmljLCAob2JqZWN0RXJyb3JzLCB2YWx1ZSkgPT4ge1xuICAgICAgaWYgKCFyZWN1cnNpdmUgfHwgIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICBuZXh0KG9iamVjdEVycm9ycywgdmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBvcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxWYWx1ZSB8fCB2YWx1ZTtcbiAgICAgIGxldCB0ZXN0cyA9IFtdO1xuICAgICAgZm9yIChsZXQga2V5IG9mIHRoaXMuX25vZGVzKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IHRoaXMuZmllbGRzW2tleV07XG4gICAgICAgIGlmICghZmllbGQgfHwgUmVmZXJlbmNlLmlzUmVmKGZpZWxkKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRlc3RzLnB1c2goZmllbGQuYXNOZXN0ZWRUZXN0KHtcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIGtleSxcbiAgICAgICAgICBwYXJlbnQ6IHZhbHVlLFxuICAgICAgICAgIHBhcmVudFBhdGg6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgICBvcmlnaW5hbFBhcmVudDogb3JpZ2luYWxWYWx1ZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJ1blRlc3RzKHtcbiAgICAgICAgdGVzdHMsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvcmlnaW5hbFZhbHVlLFxuICAgICAgICBvcHRpb25zXG4gICAgICB9LCBwYW5pYywgZmllbGRFcnJvcnMgPT4ge1xuICAgICAgICBuZXh0KGZpZWxkRXJyb3JzLnNvcnQodGhpcy5fc29ydEVycm9ycykuY29uY2F0KG9iamVjdEVycm9ycyksIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGNsb25lKHNwZWMpIHtcbiAgICBjb25zdCBuZXh0ID0gc3VwZXIuY2xvbmUoc3BlYyk7XG4gICAgbmV4dC5maWVsZHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZpZWxkcyk7XG4gICAgbmV4dC5fbm9kZXMgPSB0aGlzLl9ub2RlcztcbiAgICBuZXh0Ll9leGNsdWRlZEVkZ2VzID0gdGhpcy5fZXhjbHVkZWRFZGdlcztcbiAgICBuZXh0Ll9zb3J0RXJyb3JzID0gdGhpcy5fc29ydEVycm9ycztcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICBjb25jYXQoc2NoZW1hKSB7XG4gICAgbGV0IG5leHQgPSBzdXBlci5jb25jYXQoc2NoZW1hKTtcbiAgICBsZXQgbmV4dEZpZWxkcyA9IG5leHQuZmllbGRzO1xuICAgIGZvciAobGV0IFtmaWVsZCwgc2NoZW1hT3JSZWZdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuZmllbGRzKSkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gbmV4dEZpZWxkc1tmaWVsZF07XG4gICAgICBuZXh0RmllbGRzW2ZpZWxkXSA9IHRhcmdldCA9PT0gdW5kZWZpbmVkID8gc2NoZW1hT3JSZWYgOiB0YXJnZXQ7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LndpdGhNdXRhdGlvbihzID0+XG4gICAgLy8gWFhYOiBleGNsdWRlcyBoZXJlIGlzIHdyb25nXG4gICAgcy5zZXRGaWVsZHMobmV4dEZpZWxkcywgWy4uLnRoaXMuX2V4Y2x1ZGVkRWRnZXMsIC4uLnNjaGVtYS5fZXhjbHVkZWRFZGdlc10pKTtcbiAgfVxuICBfZ2V0RGVmYXVsdChvcHRpb25zKSB7XG4gICAgaWYgKCdkZWZhdWx0JyBpbiB0aGlzLnNwZWMpIHtcbiAgICAgIHJldHVybiBzdXBlci5fZ2V0RGVmYXVsdChvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBpcyBubyBkZWZhdWx0IHNldCBpbnZlbnQgb25lXG4gICAgaWYgKCF0aGlzLl9ub2Rlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBkZnQgPSB7fTtcbiAgICB0aGlzLl9ub2Rlcy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICB2YXIgX2lubmVyT3B0aW9ucztcbiAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5maWVsZHNba2V5XTtcbiAgICAgIGxldCBpbm5lck9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgaWYgKChfaW5uZXJPcHRpb25zID0gaW5uZXJPcHRpb25zKSAhPSBudWxsICYmIF9pbm5lck9wdGlvbnMudmFsdWUpIHtcbiAgICAgICAgaW5uZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgaW5uZXJPcHRpb25zLCB7XG4gICAgICAgICAgcGFyZW50OiBpbm5lck9wdGlvbnMudmFsdWUsXG4gICAgICAgICAgdmFsdWU6IGlubmVyT3B0aW9ucy52YWx1ZVtrZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGZ0W2tleV0gPSBmaWVsZCAmJiAnZ2V0RGVmYXVsdCcgaW4gZmllbGQgPyBmaWVsZC5nZXREZWZhdWx0KGlubmVyT3B0aW9ucykgOiB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRmdDtcbiAgfVxuICBzZXRGaWVsZHMoc2hhcGUsIGV4Y2x1ZGVkRWRnZXMpIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBuZXh0LmZpZWxkcyA9IHNoYXBlO1xuICAgIG5leHQuX25vZGVzID0gc29ydEZpZWxkcyhzaGFwZSwgZXhjbHVkZWRFZGdlcyk7XG4gICAgbmV4dC5fc29ydEVycm9ycyA9IHNvcnRCeUtleU9yZGVyKE9iamVjdC5rZXlzKHNoYXBlKSk7XG4gICAgLy8gWFhYOiB0aGlzIGNhcnJpZXMgb3ZlciBlZGdlcyB3aGljaCBtYXkgbm90IGJlIHdoYXQgeW91IHdhbnRcbiAgICBpZiAoZXhjbHVkZWRFZGdlcykgbmV4dC5fZXhjbHVkZWRFZGdlcyA9IGV4Y2x1ZGVkRWRnZXM7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgc2hhcGUoYWRkaXRpb25zLCBleGNsdWRlcyA9IFtdKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoKS53aXRoTXV0YXRpb24obmV4dCA9PiB7XG4gICAgICBsZXQgZWRnZXMgPSBuZXh0Ll9leGNsdWRlZEVkZ2VzO1xuICAgICAgaWYgKGV4Y2x1ZGVzLmxlbmd0aCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhjbHVkZXNbMF0pKSBleGNsdWRlcyA9IFtleGNsdWRlc107XG4gICAgICAgIGVkZ2VzID0gWy4uLm5leHQuX2V4Y2x1ZGVkRWRnZXMsIC4uLmV4Y2x1ZGVzXTtcbiAgICAgIH1cblxuICAgICAgLy8gWFhYOiBleGNsdWRlcyBoZXJlIGlzIHdyb25nXG4gICAgICByZXR1cm4gbmV4dC5zZXRGaWVsZHMoT2JqZWN0LmFzc2lnbihuZXh0LmZpZWxkcywgYWRkaXRpb25zKSwgZWRnZXMpO1xuICAgIH0pO1xuICB9XG4gIHBhcnRpYWwoKSB7XG4gICAgY29uc3QgcGFydGlhbCA9IHt9O1xuICAgIGZvciAoY29uc3QgW2tleSwgc2NoZW1hXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmZpZWxkcykpIHtcbiAgICAgIHBhcnRpYWxba2V5XSA9ICdvcHRpb25hbCcgaW4gc2NoZW1hICYmIHNjaGVtYS5vcHRpb25hbCBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gc2NoZW1hLm9wdGlvbmFsKCkgOiBzY2hlbWE7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNldEZpZWxkcyhwYXJ0aWFsKTtcbiAgfVxuICBkZWVwUGFydGlhbCgpIHtcbiAgICBjb25zdCBuZXh0ID0gZGVlcFBhcnRpYWwodGhpcyk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgcGljayhrZXlzKSB7XG4gICAgY29uc3QgcGlja2VkID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgaWYgKHRoaXMuZmllbGRzW2tleV0pIHBpY2tlZFtrZXldID0gdGhpcy5maWVsZHNba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2V0RmllbGRzKHBpY2tlZCk7XG4gIH1cbiAgb21pdChrZXlzKSB7XG4gICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5maWVsZHMpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGRlbGV0ZSBmaWVsZHNba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2V0RmllbGRzKGZpZWxkcyk7XG4gIH1cbiAgZnJvbShmcm9tLCB0bywgYWxpYXMpIHtcbiAgICBsZXQgZnJvbUdldHRlciA9IGdldHRlcihmcm9tLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0ob2JqID0+IHtcbiAgICAgIGlmICghb2JqKSByZXR1cm4gb2JqO1xuICAgICAgbGV0IG5ld09iaiA9IG9iajtcbiAgICAgIGlmIChkZWVwSGFzKG9iaiwgZnJvbSkpIHtcbiAgICAgICAgbmV3T2JqID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqKTtcbiAgICAgICAgaWYgKCFhbGlhcykgZGVsZXRlIG5ld09ialtmcm9tXTtcbiAgICAgICAgbmV3T2JqW3RvXSA9IGZyb21HZXR0ZXIob2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfSk7XG4gIH1cblxuICAvKiogUGFyc2UgYW4gaW5wdXQgSlNPTiBzdHJpbmcgdG8gYW4gb2JqZWN0ICovXG4gIGpzb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHBhcnNlSnNvbik7XG4gIH1cbiAgbm9Vbmtub3duKG5vQWxsb3cgPSB0cnVlLCBtZXNzYWdlID0gb2JqZWN0Lm5vVW5rbm93bikge1xuICAgIGlmICh0eXBlb2Ygbm9BbGxvdyAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBtZXNzYWdlID0gbm9BbGxvdztcbiAgICAgIG5vQWxsb3cgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgbmV4dCA9IHRoaXMudGVzdCh7XG4gICAgICBuYW1lOiAnbm9Vbmtub3duJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgY29uc3QgdW5rbm93bktleXMgPSB1bmtub3duKHRoaXMuc2NoZW1hLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiAhbm9BbGxvdyB8fCB1bmtub3duS2V5cy5sZW5ndGggPT09IDAgfHwgdGhpcy5jcmVhdGVFcnJvcih7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB1bmtub3duOiB1bmtub3duS2V5cy5qb2luKCcsICcpXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBuZXh0LnNwZWMubm9Vbmtub3duID0gbm9BbGxvdztcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICB1bmtub3duKGFsbG93ID0gdHJ1ZSwgbWVzc2FnZSA9IG9iamVjdC5ub1Vua25vd24pIHtcbiAgICByZXR1cm4gdGhpcy5ub1Vua25vd24oIWFsbG93LCBtZXNzYWdlKTtcbiAgfVxuICB0cmFuc2Zvcm1LZXlzKGZuKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKG9iaiA9PiB7XG4gICAgICBpZiAoIW9iaikgcmV0dXJuIG9iajtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqKSkgcmVzdWx0W2ZuKGtleSldID0gb2JqW2tleV07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG4gIGNhbWVsQ2FzZSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1LZXlzKGNhbWVsQ2FzZSk7XG4gIH1cbiAgc25ha2VDYXNlKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUtleXMoc25ha2VDYXNlKTtcbiAgfVxuICBjb25zdGFudENhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtS2V5cyhrZXkgPT4gc25ha2VDYXNlKGtleSkudG9VcHBlckNhc2UoKSk7XG4gIH1cbiAgZGVzY3JpYmUob3B0aW9ucykge1xuICAgIGxldCBiYXNlID0gc3VwZXIuZGVzY3JpYmUob3B0aW9ucyk7XG4gICAgYmFzZS5maWVsZHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmZpZWxkcykpIHtcbiAgICAgIHZhciBfaW5uZXJPcHRpb25zMjtcbiAgICAgIGxldCBpbm5lck9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgaWYgKChfaW5uZXJPcHRpb25zMiA9IGlubmVyT3B0aW9ucykgIT0gbnVsbCAmJiBfaW5uZXJPcHRpb25zMi52YWx1ZSkge1xuICAgICAgICBpbm5lck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBpbm5lck9wdGlvbnMsIHtcbiAgICAgICAgICBwYXJlbnQ6IGlubmVyT3B0aW9ucy52YWx1ZSxcbiAgICAgICAgICB2YWx1ZTogaW5uZXJPcHRpb25zLnZhbHVlW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBiYXNlLmZpZWxkc1trZXldID0gdmFsdWUuZGVzY3JpYmUoaW5uZXJPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U7XG4gIH1cbn1cbmNyZWF0ZSQzLnByb3RvdHlwZSA9IE9iamVjdFNjaGVtYS5wcm90b3R5cGU7XG5cbmZ1bmN0aW9uIGNyZWF0ZSQyKHR5cGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheVNjaGVtYSh0eXBlKTtcbn1cbmNsYXNzIEFycmF5U2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcbiAgY29uc3RydWN0b3IodHlwZSkge1xuICAgIHN1cGVyKHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBzcGVjOiB7XG4gICAgICAgIHR5cGVzOiB0eXBlXG4gICAgICB9LFxuICAgICAgY2hlY2sodikge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGB1bmRlZmluZWRgIHNwZWNpZmljYWxseSBtZWFucyB1bmluaXRpYWxpemVkLCBhcyBvcHBvc2VkIHRvIFwibm8gc3VidHlwZVwiXG4gICAgdGhpcy5pbm5lclR5cGUgPSB2b2lkIDA7XG4gICAgdGhpcy5pbm5lclR5cGUgPSB0eXBlO1xuICB9XG4gIF9jYXN0KF92YWx1ZSwgX29wdHMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHN1cGVyLl9jYXN0KF92YWx1ZSwgX29wdHMpO1xuXG4gICAgLy8gc2hvdWxkIGlnbm9yZSBudWxscyBoZXJlXG4gICAgaWYgKCF0aGlzLl90eXBlQ2hlY2sodmFsdWUpIHx8ICF0aGlzLmlubmVyVHlwZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgaXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgY29uc3QgY2FzdEFycmF5ID0gdmFsdWUubWFwKCh2LCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGNhc3RFbGVtZW50ID0gdGhpcy5pbm5lclR5cGUuY2FzdCh2LCBPYmplY3QuYXNzaWduKHt9LCBfb3B0cywge1xuICAgICAgICBwYXRoOiBgJHtfb3B0cy5wYXRoIHx8ICcnfVske2lkeH1dYFxuICAgICAgfSkpO1xuICAgICAgaWYgKGNhc3RFbGVtZW50ICE9PSB2KSB7XG4gICAgICAgIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FzdEVsZW1lbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzQ2hhbmdlZCA/IGNhc3RBcnJheSA6IHZhbHVlO1xuICB9XG4gIF92YWxpZGF0ZShfdmFsdWUsIG9wdGlvbnMgPSB7fSwgcGFuaWMsIG5leHQpIHtcbiAgICB2YXIgX29wdGlvbnMkcmVjdXJzaXZlO1xuICAgIC8vIGxldCBzeW5jID0gb3B0aW9ucy5zeW5jO1xuICAgIC8vIGxldCBwYXRoID0gb3B0aW9ucy5wYXRoO1xuICAgIGxldCBpbm5lclR5cGUgPSB0aGlzLmlubmVyVHlwZTtcbiAgICAvLyBsZXQgZW5kRWFybHkgPSBvcHRpb25zLmFib3J0RWFybHkgPz8gdGhpcy5zcGVjLmFib3J0RWFybHk7XG4gICAgbGV0IHJlY3Vyc2l2ZSA9IChfb3B0aW9ucyRyZWN1cnNpdmUgPSBvcHRpb25zLnJlY3Vyc2l2ZSkgIT0gbnVsbCA/IF9vcHRpb25zJHJlY3Vyc2l2ZSA6IHRoaXMuc3BlYy5yZWN1cnNpdmU7XG4gICAgb3B0aW9ucy5vcmlnaW5hbFZhbHVlICE9IG51bGwgPyBvcHRpb25zLm9yaWdpbmFsVmFsdWUgOiBfdmFsdWU7XG4gICAgc3VwZXIuX3ZhbGlkYXRlKF92YWx1ZSwgb3B0aW9ucywgcGFuaWMsIChhcnJheUVycm9ycywgdmFsdWUpID0+IHtcbiAgICAgIHZhciBfb3B0aW9ucyRvcmlnaW5hbFZhbHUyO1xuICAgICAgaWYgKCFyZWN1cnNpdmUgfHwgIWlubmVyVHlwZSB8fCAhdGhpcy5fdHlwZUNoZWNrKHZhbHVlKSkge1xuICAgICAgICBuZXh0KGFycmF5RXJyb3JzLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gIzk1MCBFbnN1cmUgdGhhdCBzcGFyc2UgYXJyYXkgZW1wdHkgc2xvdHMgYXJlIHZhbGlkYXRlZFxuICAgICAgbGV0IHRlc3RzID0gbmV3IEFycmF5KHZhbHVlLmxlbmd0aCk7XG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsdWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHZhciBfb3B0aW9ucyRvcmlnaW5hbFZhbHU7XG4gICAgICAgIHRlc3RzW2luZGV4XSA9IGlubmVyVHlwZS5hc05lc3RlZFRlc3Qoe1xuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgcGFyZW50OiB2YWx1ZSxcbiAgICAgICAgICBwYXJlbnRQYXRoOiBvcHRpb25zLnBhdGgsXG4gICAgICAgICAgb3JpZ2luYWxQYXJlbnQ6IChfb3B0aW9ucyRvcmlnaW5hbFZhbHUgPSBvcHRpb25zLm9yaWdpbmFsVmFsdWUpICE9IG51bGwgPyBfb3B0aW9ucyRvcmlnaW5hbFZhbHUgOiBfdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJ1blRlc3RzKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHRlc3RzLFxuICAgICAgICBvcmlnaW5hbFZhbHVlOiAoX29wdGlvbnMkb3JpZ2luYWxWYWx1MiA9IG9wdGlvbnMub3JpZ2luYWxWYWx1ZSkgIT0gbnVsbCA/IF9vcHRpb25zJG9yaWdpbmFsVmFsdTIgOiBfdmFsdWUsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIH0sIHBhbmljLCBpbm5lclR5cGVFcnJvcnMgPT4gbmV4dChpbm5lclR5cGVFcnJvcnMuY29uY2F0KGFycmF5RXJyb3JzKSwgdmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuICBjbG9uZShzcGVjKSB7XG4gICAgY29uc3QgbmV4dCA9IHN1cGVyLmNsb25lKHNwZWMpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgcmVhZG9ubHlcbiAgICBuZXh0LmlubmVyVHlwZSA9IHRoaXMuaW5uZXJUeXBlO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgLyoqIFBhcnNlIGFuIGlucHV0IEpTT04gc3RyaW5nIHRvIGFuIG9iamVjdCAqL1xuICBqc29uKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybShwYXJzZUpzb24pO1xuICB9XG4gIGNvbmNhdChzY2hlbWEpIHtcbiAgICBsZXQgbmV4dCA9IHN1cGVyLmNvbmNhdChzY2hlbWEpO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciByZWFkb25seVxuICAgIG5leHQuaW5uZXJUeXBlID0gdGhpcy5pbm5lclR5cGU7XG4gICAgaWYgKHNjaGVtYS5pbm5lclR5cGUpXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHJlYWRvbmx5XG4gICAgICBuZXh0LmlubmVyVHlwZSA9IG5leHQuaW5uZXJUeXBlID9cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgTGF6eSBkb2Vzbid0IGhhdmUgY29uY2F0IGFuZCB3aWxsIGJyZWFrXG4gICAgICBuZXh0LmlubmVyVHlwZS5jb25jYXQoc2NoZW1hLmlubmVyVHlwZSkgOiBzY2hlbWEuaW5uZXJUeXBlO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIG9mKHNjaGVtYSkge1xuICAgIC8vIEZJWE1FOiB0aGlzIHNob3VsZCByZXR1cm4gYSBuZXcgaW5zdGFuY2Ugb2YgYXJyYXkgd2l0aG91dCB0aGUgZGVmYXVsdCB0byBiZVxuICAgIGxldCBuZXh0ID0gdGhpcy5jbG9uZSgpO1xuICAgIGlmICghaXNTY2hlbWEoc2NoZW1hKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYGFycmF5Lm9mKClgIHN1Yi1zY2hlbWEgbXVzdCBiZSBhIHZhbGlkIHl1cCBzY2hlbWEgbm90OiAnICsgcHJpbnRWYWx1ZShzY2hlbWEpKTtcblxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgcmVhZG9ubHlcbiAgICBuZXh0LmlubmVyVHlwZSA9IHNjaGVtYTtcbiAgICBuZXh0LnNwZWMgPSBPYmplY3QuYXNzaWduKHt9LCBuZXh0LnNwZWMsIHtcbiAgICAgIHR5cGVzOiBzY2hlbWFcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuICBsZW5ndGgobGVuZ3RoLCBtZXNzYWdlID0gYXJyYXkubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVzdCh7XG4gICAgICBtZXNzYWdlLFxuICAgICAgbmFtZTogJ2xlbmd0aCcsXG4gICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgbGVuZ3RoXG4gICAgICB9LFxuICAgICAgc2tpcEFic2VudDogdHJ1ZSxcbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gdGhpcy5yZXNvbHZlKGxlbmd0aCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbWluKG1pbiwgbWVzc2FnZSkge1xuICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8IGFycmF5Lm1pbjtcbiAgICByZXR1cm4gdGhpcy50ZXN0KHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBuYW1lOiAnbWluJyxcbiAgICAgIGV4Y2x1c2l2ZTogdHJ1ZSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBtaW5cbiAgICAgIH0sXG4gICAgICBza2lwQWJzZW50OiB0cnVlLFxuICAgICAgLy8gRklYTUUodHMpOiBBcnJheTx0eXBlb2YgVD5cbiAgICAgIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSB0aGlzLnJlc29sdmUobWluKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtYXgobWF4LCBtZXNzYWdlKSB7XG4gICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgYXJyYXkubWF4O1xuICAgIHJldHVybiB0aGlzLnRlc3Qoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG5hbWU6ICdtYXgnLFxuICAgICAgZXhjbHVzaXZlOiB0cnVlLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1heFxuICAgICAgfSxcbiAgICAgIHNraXBBYnNlbnQ6IHRydWUsXG4gICAgICB0ZXN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPD0gdGhpcy5yZXNvbHZlKG1heCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZW5zdXJlKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHQoKCkgPT4gW10pLnRyYW5zZm9ybSgodmFsLCBvcmlnaW5hbCkgPT4ge1xuICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byByZXR1cm4gYG51bGxgIGZvciBudWxsYWJsZSBzY2hlbWFcbiAgICAgIGlmICh0aGlzLl90eXBlQ2hlY2sodmFsKSkgcmV0dXJuIHZhbDtcbiAgICAgIHJldHVybiBvcmlnaW5hbCA9PSBudWxsID8gW10gOiBbXS5jb25jYXQob3JpZ2luYWwpO1xuICAgIH0pO1xuICB9XG4gIGNvbXBhY3QocmVqZWN0b3IpIHtcbiAgICBsZXQgcmVqZWN0ID0gIXJlamVjdG9yID8gdiA9PiAhIXYgOiAodiwgaSwgYSkgPT4gIXJlamVjdG9yKHYsIGksIGEpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2YWx1ZXMgPT4gdmFsdWVzICE9IG51bGwgPyB2YWx1ZXMuZmlsdGVyKHJlamVjdCkgOiB2YWx1ZXMpO1xuICB9XG4gIGRlc2NyaWJlKG9wdGlvbnMpIHtcbiAgICBsZXQgYmFzZSA9IHN1cGVyLmRlc2NyaWJlKG9wdGlvbnMpO1xuICAgIGlmICh0aGlzLmlubmVyVHlwZSkge1xuICAgICAgdmFyIF9pbm5lck9wdGlvbnM7XG4gICAgICBsZXQgaW5uZXJPcHRpb25zID0gb3B0aW9ucztcbiAgICAgIGlmICgoX2lubmVyT3B0aW9ucyA9IGlubmVyT3B0aW9ucykgIT0gbnVsbCAmJiBfaW5uZXJPcHRpb25zLnZhbHVlKSB7XG4gICAgICAgIGlubmVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGlubmVyT3B0aW9ucywge1xuICAgICAgICAgIHBhcmVudDogaW5uZXJPcHRpb25zLnZhbHVlLFxuICAgICAgICAgIHZhbHVlOiBpbm5lck9wdGlvbnMudmFsdWVbMF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBiYXNlLmlubmVyVHlwZSA9IHRoaXMuaW5uZXJUeXBlLmRlc2NyaWJlKGlubmVyT3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBiYXNlO1xuICB9XG59XG5jcmVhdGUkMi5wcm90b3R5cGUgPSBBcnJheVNjaGVtYS5wcm90b3R5cGU7XG5cbi8vIEB0cy1pZ25vcmVcbmZ1bmN0aW9uIGNyZWF0ZSQxKHNjaGVtYXMpIHtcbiAgcmV0dXJuIG5ldyBUdXBsZVNjaGVtYShzY2hlbWFzKTtcbn1cbmNsYXNzIFR1cGxlU2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcbiAgY29uc3RydWN0b3Ioc2NoZW1hcykge1xuICAgIHN1cGVyKHtcbiAgICAgIHR5cGU6ICd0dXBsZScsXG4gICAgICBzcGVjOiB7XG4gICAgICAgIHR5cGVzOiBzY2hlbWFzXG4gICAgICB9LFxuICAgICAgY2hlY2sodikge1xuICAgICAgICBjb25zdCB0eXBlcyA9IHRoaXMuc3BlYy50eXBlcztcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodikgJiYgdi5sZW5ndGggPT09IHR5cGVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLndpdGhNdXRhdGlvbigoKSA9PiB7XG4gICAgICB0aGlzLnR5cGVFcnJvcih0dXBsZS5ub3RUeXBlKTtcbiAgICB9KTtcbiAgfVxuICBfY2FzdChpbnB1dFZhbHVlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHlwZXNcbiAgICB9ID0gdGhpcy5zcGVjO1xuICAgIGNvbnN0IHZhbHVlID0gc3VwZXIuX2Nhc3QoaW5wdXRWYWx1ZSwgb3B0aW9ucyk7XG4gICAgaWYgKCF0aGlzLl90eXBlQ2hlY2sodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCBpc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBjb25zdCBjYXN0QXJyYXkgPSB0eXBlcy5tYXAoKHR5cGUsIGlkeCkgPT4ge1xuICAgICAgY29uc3QgY2FzdEVsZW1lbnQgPSB0eXBlLmNhc3QodmFsdWVbaWR4XSwgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBwYXRoOiBgJHtvcHRpb25zLnBhdGggfHwgJyd9WyR7aWR4fV1gXG4gICAgICB9KSk7XG4gICAgICBpZiAoY2FzdEVsZW1lbnQgIT09IHZhbHVlW2lkeF0pIGlzQ2hhbmdlZCA9IHRydWU7XG4gICAgICByZXR1cm4gY2FzdEVsZW1lbnQ7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzQ2hhbmdlZCA/IGNhc3RBcnJheSA6IHZhbHVlO1xuICB9XG4gIF92YWxpZGF0ZShfdmFsdWUsIG9wdGlvbnMgPSB7fSwgcGFuaWMsIG5leHQpIHtcbiAgICBsZXQgaXRlbVR5cGVzID0gdGhpcy5zcGVjLnR5cGVzO1xuICAgIHN1cGVyLl92YWxpZGF0ZShfdmFsdWUsIG9wdGlvbnMsIHBhbmljLCAodHVwbGVFcnJvcnMsIHZhbHVlKSA9PiB7XG4gICAgICB2YXIgX29wdGlvbnMkb3JpZ2luYWxWYWx1MjtcbiAgICAgIC8vIGludGVudGlvbmFsbHkgbm90IHJlc3BlY3RpbmcgcmVjdXJzaXZlXG4gICAgICBpZiAoIXRoaXMuX3R5cGVDaGVjayh2YWx1ZSkpIHtcbiAgICAgICAgbmV4dCh0dXBsZUVycm9ycywgdmFsdWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgdGVzdHMgPSBbXTtcbiAgICAgIGZvciAobGV0IFtpbmRleCwgaXRlbVNjaGVtYV0gb2YgaXRlbVR5cGVzLmVudHJpZXMoKSkge1xuICAgICAgICB2YXIgX29wdGlvbnMkb3JpZ2luYWxWYWx1O1xuICAgICAgICB0ZXN0c1tpbmRleF0gPSBpdGVtU2NoZW1hLmFzTmVzdGVkVGVzdCh7XG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBwYXJlbnQ6IHZhbHVlLFxuICAgICAgICAgIHBhcmVudFBhdGg6IG9wdGlvbnMucGF0aCxcbiAgICAgICAgICBvcmlnaW5hbFBhcmVudDogKF9vcHRpb25zJG9yaWdpbmFsVmFsdSA9IG9wdGlvbnMub3JpZ2luYWxWYWx1ZSkgIT0gbnVsbCA/IF9vcHRpb25zJG9yaWdpbmFsVmFsdSA6IF92YWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucnVuVGVzdHMoe1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgdGVzdHMsXG4gICAgICAgIG9yaWdpbmFsVmFsdWU6IChfb3B0aW9ucyRvcmlnaW5hbFZhbHUyID0gb3B0aW9ucy5vcmlnaW5hbFZhbHVlKSAhPSBudWxsID8gX29wdGlvbnMkb3JpZ2luYWxWYWx1MiA6IF92YWx1ZSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgfSwgcGFuaWMsIGlubmVyVHlwZUVycm9ycyA9PiBuZXh0KGlubmVyVHlwZUVycm9ycy5jb25jYXQodHVwbGVFcnJvcnMpLCB2YWx1ZSkpO1xuICAgIH0pO1xuICB9XG4gIGRlc2NyaWJlKG9wdGlvbnMpIHtcbiAgICBsZXQgYmFzZSA9IHN1cGVyLmRlc2NyaWJlKG9wdGlvbnMpO1xuICAgIGJhc2UuaW5uZXJUeXBlID0gdGhpcy5zcGVjLnR5cGVzLm1hcCgoc2NoZW1hLCBpbmRleCkgPT4ge1xuICAgICAgdmFyIF9pbm5lck9wdGlvbnM7XG4gICAgICBsZXQgaW5uZXJPcHRpb25zID0gb3B0aW9ucztcbiAgICAgIGlmICgoX2lubmVyT3B0aW9ucyA9IGlubmVyT3B0aW9ucykgIT0gbnVsbCAmJiBfaW5uZXJPcHRpb25zLnZhbHVlKSB7XG4gICAgICAgIGlubmVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGlubmVyT3B0aW9ucywge1xuICAgICAgICAgIHBhcmVudDogaW5uZXJPcHRpb25zLnZhbHVlLFxuICAgICAgICAgIHZhbHVlOiBpbm5lck9wdGlvbnMudmFsdWVbaW5kZXhdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNjaGVtYS5kZXNjcmliZShpbm5lck9wdGlvbnMpO1xuICAgIH0pO1xuICAgIHJldHVybiBiYXNlO1xuICB9XG59XG5jcmVhdGUkMS5wcm90b3R5cGUgPSBUdXBsZVNjaGVtYS5wcm90b3R5cGU7XG5cbmZ1bmN0aW9uIGNyZWF0ZShidWlsZGVyKSB7XG4gIHJldHVybiBuZXcgTGF6eShidWlsZGVyKTtcbn1cbmNsYXNzIExhenkge1xuICBjb25zdHJ1Y3RvcihidWlsZGVyKSB7XG4gICAgdGhpcy50eXBlID0gJ2xhenknO1xuICAgIHRoaXMuX19pc1l1cFNjaGVtYV9fID0gdHJ1ZTtcbiAgICB0aGlzLnNwZWMgPSB2b2lkIDA7XG4gICAgdGhpcy5fcmVzb2x2ZSA9ICh2YWx1ZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICBsZXQgc2NoZW1hID0gdGhpcy5idWlsZGVyKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgIGlmICghaXNTY2hlbWEoc2NoZW1hKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignbGF6eSgpIGZ1bmN0aW9ucyBtdXN0IHJldHVybiBhIHZhbGlkIHNjaGVtYScpO1xuICAgICAgaWYgKHRoaXMuc3BlYy5vcHRpb25hbCkgc2NoZW1hID0gc2NoZW1hLm9wdGlvbmFsKCk7XG4gICAgICByZXR1cm4gc2NoZW1hLnJlc29sdmUob3B0aW9ucyk7XG4gICAgfTtcbiAgICB0aGlzLmJ1aWxkZXIgPSBidWlsZGVyO1xuICAgIHRoaXMuc3BlYyA9IHtcbiAgICAgIG1ldGE6IHVuZGVmaW5lZCxcbiAgICAgIG9wdGlvbmFsOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgY2xvbmUoc3BlYykge1xuICAgIGNvbnN0IG5leHQgPSBuZXcgTGF6eSh0aGlzLmJ1aWxkZXIpO1xuICAgIG5leHQuc3BlYyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3BlYywgc3BlYyk7XG4gICAgcmV0dXJuIG5leHQ7XG4gIH1cbiAgb3B0aW9uYWxpdHkob3B0aW9uYWwpIHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5jbG9uZSh7XG4gICAgICBvcHRpb25hbFxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG4gIG9wdGlvbmFsKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbmFsaXR5KHRydWUpO1xuICB9XG4gIHJlc29sdmUob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKG9wdGlvbnMudmFsdWUsIG9wdGlvbnMpO1xuICB9XG4gIGNhc3QodmFsdWUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzb2x2ZSh2YWx1ZSwgb3B0aW9ucykuY2FzdCh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbiAgYXNOZXN0ZWRUZXN0KGNvbmZpZykge1xuICAgIGxldCB7XG4gICAgICBrZXksXG4gICAgICBpbmRleCxcbiAgICAgIHBhcmVudCxcbiAgICAgIG9wdGlvbnNcbiAgICB9ID0gY29uZmlnO1xuICAgIGxldCB2YWx1ZSA9IHBhcmVudFtpbmRleCAhPSBudWxsID8gaW5kZXggOiBrZXldO1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIHBhcmVudFxuICAgIH0pKS5hc05lc3RlZFRlc3QoY29uZmlnKTtcbiAgfVxuICB2YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS52YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbiAgdmFsaWRhdGVTeW5jKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmUodmFsdWUsIG9wdGlvbnMpLnZhbGlkYXRlU3luYyh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbiAgdmFsaWRhdGVBdChwYXRoLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS52YWxpZGF0ZUF0KHBhdGgsIHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuICB2YWxpZGF0ZVN5bmNBdChwYXRoLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS52YWxpZGF0ZVN5bmNBdChwYXRoLCB2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbiAgaXNWYWxpZCh2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS5pc1ZhbGlkKHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuICBpc1ZhbGlkU3luYyh2YWx1ZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLl9yZXNvbHZlKHZhbHVlLCBvcHRpb25zKS5pc1ZhbGlkU3luYyh2YWx1ZSwgb3B0aW9ucyk7XG4gIH1cbiAgZGVzY3JpYmUob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zID8gdGhpcy5yZXNvbHZlKG9wdGlvbnMpLmRlc2NyaWJlKG9wdGlvbnMpIDoge1xuICAgICAgdHlwZTogJ2xhenknLFxuICAgICAgbWV0YTogdGhpcy5zcGVjLm1ldGEsXG4gICAgICBsYWJlbDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfVxuICBtZXRhKC4uLmFyZ3MpIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHJldHVybiB0aGlzLnNwZWMubWV0YTtcbiAgICBsZXQgbmV4dCA9IHRoaXMuY2xvbmUoKTtcbiAgICBuZXh0LnNwZWMubWV0YSA9IE9iamVjdC5hc3NpZ24obmV4dC5zcGVjLm1ldGEgfHwge30sIGFyZ3NbMF0pO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldExvY2FsZShjdXN0b20pIHtcbiAgT2JqZWN0LmtleXMoY3VzdG9tKS5mb3JFYWNoKHR5cGUgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBPYmplY3Qua2V5cyhjdXN0b21bdHlwZV0pLmZvckVhY2gobWV0aG9kID0+IHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGxvY2FsZVt0eXBlXVttZXRob2RdID0gY3VzdG9tW3R5cGVdW21ldGhvZF07XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRNZXRob2Qoc2NoZW1hVHlwZSwgbmFtZSwgZm4pIHtcbiAgaWYgKCFzY2hlbWFUeXBlIHx8ICFpc1NjaGVtYShzY2hlbWFUeXBlLnByb3RvdHlwZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgYSB5dXAgc2NoZW1hIGNvbnN0cnVjdG9yIGZ1bmN0aW9uJyk7XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgTWV0aG9kIG5hbWUgbXVzdCBiZSBwcm92aWRlZCcpO1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdNZXRob2QgZnVuY3Rpb24gbXVzdCBiZSBwcm92aWRlZCcpO1xuICBzY2hlbWFUeXBlLnByb3RvdHlwZVtuYW1lXSA9IGZuO1xufVxuXG5leHBvcnQgeyBBcnJheVNjaGVtYSwgQm9vbGVhblNjaGVtYSwgRGF0ZVNjaGVtYSwgTWl4ZWRTY2hlbWEsIE51bWJlclNjaGVtYSwgT2JqZWN0U2NoZW1hLCBTY2hlbWEsIFN0cmluZ1NjaGVtYSwgVHVwbGVTY2hlbWEsIFZhbGlkYXRpb25FcnJvciwgYWRkTWV0aG9kLCBjcmVhdGUkMiBhcyBhcnJheSwgY3JlYXRlJDcgYXMgYm9vbCwgY3JlYXRlJDcgYXMgYm9vbGVhbiwgY3JlYXRlJDQgYXMgZGF0ZSwgbG9jYWxlIGFzIGRlZmF1bHRMb2NhbGUsIGdldEluLCBpc1NjaGVtYSwgY3JlYXRlIGFzIGxhenksIGNyZWF0ZSQ4IGFzIG1peGVkLCBjcmVhdGUkNSBhcyBudW1iZXIsIGNyZWF0ZSQzIGFzIG9iamVjdCwgcHJpbnRWYWx1ZSwgcmVhY2gsIGNyZWF0ZSQ5IGFzIHJlZiwgc2V0TG9jYWxlLCBjcmVhdGUkNiBhcyBzdHJpbmcsIGNyZWF0ZSQxIGFzIHR1cGxlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=