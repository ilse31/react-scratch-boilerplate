"use strict";
(self["webpackChunkreact_scratch_boilerplate"] = self["webpackChunkreact_scratch_boilerplate"] || []).push([[557],{

/***/ 6010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 3645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 1667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 7537:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 8948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J9: () => (/* binding */ Formik)
});

// UNUSED EXPORTS: ErrorMessage, FastField, Field, FieldArray, Form, FormikConsumer, FormikContext, FormikProvider, connect, getActiveElement, getIn, insert, isEmptyArray, isEmptyChildren, isFunction, isInputEvent, isInteger, isNaN, isObject, isPromise, isString, move, prepareDataForValidation, replace, setIn, setNestedObjectValues, swap, useField, useFormik, useFormikContext, validateYupSchema, withFormik, yupToFormErrors

;// CONCATENATED MODULE: ./node_modules/formik/node_modules/deepmerge/dist/es.js
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ const es = (deepmerge_1);

// EXTERNAL MODULE: ./node_modules/lodash-es/isPlainObject.js
var isPlainObject = __webpack_require__(7514);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-fast-compare/index.js
var react_fast_compare = __webpack_require__(9590);
var react_fast_compare_default = /*#__PURE__*/__webpack_require__.n(react_fast_compare);
// EXTERNAL MODULE: ./node_modules/tiny-warning/dist/tiny-warning.esm.js
var tiny_warning_esm = __webpack_require__(5298);
// EXTERNAL MODULE: ./node_modules/lodash-es/clone.js
var clone = __webpack_require__(2346);
// EXTERNAL MODULE: ./node_modules/lodash-es/toPath.js + 8 modules
var toPath = __webpack_require__(3210);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(8679);
// EXTERNAL MODULE: ./node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(8652);
;// CONCATENATED MODULE: ./node_modules/formik/dist/formik.esm.js










function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var FormikContext = /*#__PURE__*/(0,react.createContext)(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = (0,react.useContext)(FormikContext);
  !!!formik ?  false ? 0 : (0,tiny_warning_esm/* default */.Z)(false) : void 0;
  return formik;
}

/** @private is the value an empty array? */

var isEmptyArray = function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
/** @private is the given object an Object? */

var isObject = function isObject(obj) {
  return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */

var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */
// eslint-disable-next-line no-self-compare

var isNaN$1 = function isNaN(obj) {
  return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */

var isEmptyChildren = function isEmptyChildren(children) {
  return react.Children.count(children) === 0;
};
/** @private is the given object/value a promise? */

var isPromise = function isPromise(value) {
  return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */

var isInputEvent = function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
/**
 * Deeply get a value from an object via its path.
 */

function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }

  var path = (0,toPath/* default */.Z)(key);

  while (obj && p < path.length) {
    obj = obj[path[p++]];
  } // check if path is not in the end


  if (p !== path.length && !obj) {
    return def;
  }

  return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

function setIn(obj, path, value) {
  var res = (0,clone/* default */.Z)(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = (0,toPath/* default */.Z)(path);

  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = (0,clone/* default */.Z)(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current


  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */

function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }

  if (response === void 0) {
    response = {};
  }

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];

    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true); // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }

        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}

function formikReducer(state, msg) {
  switch (msg.type) {
    case 'SET_VALUES':
      return _extends({}, state, {
        values: msg.payload
      });

    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: msg.payload
      });

    case 'SET_ERRORS':
      if (react_fast_compare_default()(state.errors, msg.payload)) {
        return state;
      }

      return _extends({}, state, {
        errors: msg.payload
      });

    case 'SET_STATUS':
      return _extends({}, state, {
        status: msg.payload
      });

    case 'SET_ISSUBMITTING':
      return _extends({}, state, {
        isSubmitting: msg.payload
      });

    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: msg.payload
      });

    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_TOUCHED':
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_ERROR':
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });

    case 'RESET_FORM':
      return _extends({}, state, msg.payload);

    case 'SET_FORMIK_STATE':
      return msg.payload(state);

    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });

    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });

    default:
      return state;
  }
} // Initial empty states // objects


var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange,
      validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange,
      _ref$validateOnBlur = _ref.validateOnBlur,
      validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur,
      _ref$validateOnMount = _ref.validateOnMount,
      validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount,
      isInitialValid = _ref.isInitialValid,
      _ref$enableReinitiali = _ref.enableReinitialize,
      enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali,
      onSubmit = _ref.onSubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);

  var props = _extends({
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    validateOnMount: validateOnMount,
    onSubmit: onSubmit
  }, rest);

  var initialValues = (0,react.useRef)(props.initialValues);
  var initialErrors = (0,react.useRef)(props.initialErrors || emptyErrors);
  var initialTouched = (0,react.useRef)(props.initialTouched || emptyTouched);
  var initialStatus = (0,react.useRef)(props.initialStatus);
  var isMounted = (0,react.useRef)(false);
  var fieldRegistry = (0,react.useRef)({});

  if (false) {}

  (0,react.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);

  var _React$useState = (0,react.useState)(0),
      setIteration = _React$useState[1];

  var stateRef = (0,react.useRef)({
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  });
  var state = stateRef.current;
  var dispatch = (0,react.useCallback)(function (action) {
    var prev = stateRef.current;
    stateRef.current = formikReducer(prev, action); // force rerender

    if (prev !== stateRef.current) setIteration(function (x) {
      return x + 1;
    });
  }, []);
  var runValidateHandler = (0,react.useCallback)(function (values, field) {
    return new Promise(function (resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);

      if (maybePromisedErrors == null) {
        // use loose null check here on purpose
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function (errors) {
          resolve(errors || emptyErrors);
        }, function (actualException) {
          if (false) {}

          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  /**
   * Run validation against a Yup schema and optionally run a function if successful
   */

  var runValidationSchema = (0,react.useCallback)(function (values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function (resolve, reject) {
      promise.then(function () {
        resolve(emptyErrors);
      }, function (err) {
        // Yup will throw a validation error if validation fails. We catch those and
        // resolve them into Formik errors. We can sniff if something is a Yup error
        // by checking error.name.
        // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
          resolve(yupToFormErrors(err));
        } else {
          // We throw any other errors
          if (false) {}

          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = (0,react.useCallback)(function (field, value) {
    return new Promise(function (resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = (0,react.useCallback)(function (values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function (f) {
      return isFunction(fieldRegistry.current[f].validate);
    }); // Construct an array with all of the field validation functions

    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function (f) {
      return runSingleFieldLevelValidation(f, getIn(values, f));
    }) : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')]; // use special case ;)

    return Promise.all(fieldValidations).then(function (fieldErrorsList) {
      return fieldErrorsList.reduce(function (prev, curr, index) {
        if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
          return prev;
        }

        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }

        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]); // Run all validations and return the result

  var runAllValidations = (0,react.useCallback)(function (values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function (_ref2) {
      var fieldErrors = _ref2[0],
          schemaErrors = _ref2[1],
          validateErrors = _ref2[2];
      var combinedErrors = es.all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge: arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]); // Run all validations methods and update state accordingly

  var validateFormWithHighPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    dispatch({
      type: 'SET_ISVALIDATING',
      payload: true
    });
    return runAllValidations(values).then(function (combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
        dispatch({
          type: 'SET_ERRORS',
          payload: combinedErrors
        });
      }

      return combinedErrors;
    });
  });
  (0,react.useEffect)(function () {
    if (validateOnMount && isMounted.current === true && react_fast_compare_default()(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = (0,react.useCallback)(function (nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;

    var dispatchFn = function dispatchFn() {
      dispatch({
        type: 'RESET_FORM',
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors: errors,
          touched: touched,
          status: status,
          values: values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
        }
      });
    };

    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);

      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  (0,react.useEffect)(function () {
    if (isMounted.current === true && !react_fast_compare_default()(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();

        if (validateOnMount) {
          validateFormWithHighPriority(initialValues.current);
        }
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  (0,react.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare_default()(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: 'SET_ERRORS',
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  (0,react.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare_default()(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: 'SET_TOUCHED',
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  (0,react.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare_default()(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: 'SET_STATUS',
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function (name) {
    // This will efficiently validate a single field by avoiding state
    // changes if the validation function is synchronous. It's different from
    // what is called when using validateForm.
    if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);

      if (isPromise(maybePromise)) {
        // Only flip isValidating if the function is async.
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: true
        });
        return maybePromise.then(function (x) {
          return x;
        }).then(function (error) {
          dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: 'SET_ISVALIDATING',
            payload: false
          });
        });
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: 'SET_ISVALIDATING',
        payload: true
      });
      return runValidationSchema(state.values, name).then(function (x) {
        return x;
      }).then(function (error) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: getIn(error, name)
          }
        });
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
      });
    }

    return Promise.resolve();
  });
  var registerField = (0,react.useCallback)(function (name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate
    };
  }, []);
  var unregisterField = (0,react.useCallback)(function (name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function (touched, shouldValidate) {
    dispatch({
      type: 'SET_TOUCHED',
      payload: touched
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = (0,react.useCallback)(function (errors) {
    dispatch({
      type: 'SET_ERRORS',
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = isFunction(values) ? values(state.values) : values;
    dispatch({
      type: 'SET_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = (0,react.useCallback)(function (field, value) {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field: field,
        value: value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = (0,react.useCallback)(function (eventOrTextValue, maybePath) {
    // By default, assume that the first argument is a string. This allows us to use
    // handleChange with React Native and React Native Web's onChangeText prop which
    // provides just the value of the input.
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
    // so we handle like we would a normal HTML change event.

    if (!isString(eventOrTextValue)) {
      // If we can, persist the event
      // @see https://reactjs.org/docs/events.html#event-pooling
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }

      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type,
          name = target.name,
          id = target.id,
          value = target.value,
          checked = target.checked,
          outerHTML = target.outerHTML,
          options = target.options,
          multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;

      if (!field && "production" !== "production") {}

      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
      ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple // <select multiple>
      ? getSelectedValues(options) : value;
    }

    if (field) {
      // Set form fields by name
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrPath) {
    if (isString(eventOrPath)) {
      return function (event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }

    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = (0,react.useCallback)(function (e, path) {
    if (e.persist) {
      e.persist();
    }

    var _e$target = e.target,
        name = _e$target.name,
        id = _e$target.id,
        outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;

    if (!field && "production" !== "production") {}

    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (isString(eventOrString)) {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = (0,react.useCallback)(function (stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = (0,react.useCallback)(function (status) {
    dispatch({
      type: 'SET_STATUS',
      payload: status
    });
  }, []);
  var setSubmitting = (0,react.useCallback)(function (isSubmitting) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function () {
    dispatch({
      type: 'SUBMIT_ATTEMPT'
    });
    return validateFormWithHighPriority().then(function (combinedErrors) {
      // In case an error was thrown and passed to the resolved Promise,
      // `combinedErrors` can be an instance of an Error. We need to check
      // that and abort the submit.
      // If we don't do that, calling `Object.keys(new Error())` yields an
      // empty array, which causes the validation to pass and the form
      // to be submitted.
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;

      if (isActuallyValid) {
        // Proceed with submit...
        //
        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
        // This would be fine in simple cases, but make it impossible to disable submit
        // buttons where people use callbacks or promises as side effects (which is basically
        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
        // cleanup of isSubmitting on behalf of the consumer.
        var promiseOrUndefined;

        try {
          promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
          // via setSubmitting(false)

          if (promiseOrUndefined === undefined) {
            return;
          }
        } catch (error) {
          throw error;
        }

        return Promise.resolve(promiseOrUndefined).then(function (result) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_SUCCESS'
            });
          }

          return result;
        })["catch"](function (_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_FAILURE'
            }); // This is a legit error rejected by the onSubmit fn
            // so we don't want to break the promise chain

            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        // ^^^ Make sure Formik is still mounted before updating state
        dispatch({
          type: 'SUBMIT_FAILURE'
        }); // throw combinedErrors;

        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }

      return;
    });
  });
  var handleSubmit = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    } // Warn if form submission is triggered by a <button> without a
    // specified `type` attribute during development. This mitigates
    // a common gotcha in forms with both reset and submit buttons,
    // where the dev forgets to add type="button" to the reset button.


    if (false) { var activeElement; }

    submitForm()["catch"](function (reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm: resetForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    setErrors: setErrors,
    setFieldError: setFieldError,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    setFormikState: setFormikState,
    submitForm: submitForm
  };
  var executeSubmit = useEventCallback(function () {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }

    resetForm();
  });
  var getFieldMeta = (0,react.useCallback)(function (name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = (0,react.useCallback)(function (name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = (0,react.useCallback)(function (nameOrOptions) {
    var isAnObject = isObject(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name: name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };

    if (isAnObject) {
      var type = nameOrOptions.type,
          valueProp = nameOrOptions.value,
          is = nameOrOptions.as,
          multiple = nameOrOptions.multiple;

      if (type === 'checkbox') {
        if (valueProp === undefined) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === 'radio') {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === 'select' && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }

    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = (0,react.useMemo)(function () {
    return !react_fast_compare_default()(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = (0,react.useMemo)(function () {
    return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);

  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleReset: handleReset,
    handleSubmit: handleSubmit,
    resetForm: resetForm,
    setErrors: setErrors,
    setFormikState: setFormikState,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    submitForm: submitForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    isValid: isValid,
    dirty: dirty,
    unregisterField: unregisterField,
    registerField: registerField,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    validateOnMount: validateOnMount
  });

  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component,
      children = props.children,
      render = props.render,
      innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />

  (0,react.useImperativeHandle)(innerRef, function () {
    return formikbag;
  });

  if (false) {}

  return (0,react.createElement)(FormikProvider, {
    value: formikbag
  }, component ? (0,react.createElement)(component, formikbag) : render ? render(formikbag) : children // children come last, always called
  ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? react.Children.only(children) : null : null);
}

function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent,
      documentationAnchorLink = _ref4.documentationAnchorLink,
      handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */


function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }

    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }

      var err = _ref5;

      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }

  return errors;
}
/**
 * Validate a yup schema.
 */

function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }

  var normalizedValues = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](normalizedValues, {
    abortEarly: false,
    context: context || normalizedValues
  });
}
/**
 * Recursively prepare values.
 */

function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};

  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);

      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function (value) {
          if (Array.isArray(value) === true || (0,isPlainObject/* default */.Z)(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if ((0,isPlainObject/* default */.Z)(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }

  return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */

function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === 'undefined') {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? es(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = es(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
/** Return multi select values based on an array of options */


function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
}
/** Return the next value for a checkbox */


function getValueForCheckbox(currentValue, checked, valueProp) {
  // If the current value was a boolean, return a boolean
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  } // If the currentValue was not a boolean we want to return an array


  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;

  if (!Array.isArray(currentValue)) {
    // eslint-disable-next-line eqeqeq
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    // If the current value is already an array, use it
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values


  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values


  if (!isValueInArray) {
    return currentArrayOfValues;
  } // If the checkbox was unchecked and the value is in the array, remove the value and return the array


  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;

function useEventCallback(fn) {
  var ref = (0,react.useRef)(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return (0,react.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

function useField(propsOrFieldName) {
  var formik = useFormikContext();
  var getFieldProps = formik.getFieldProps,
      getFieldMeta = formik.getFieldMeta,
      getFieldHelpers = formik.getFieldHelpers,
      registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>

  var props = isAnObject ? propsOrFieldName : {
    name: propsOrFieldName
  };
  var fieldName = props.name,
      validateFn = props.validate;
  useEffect(function () {
    if (fieldName) {
      registerField(fieldName, {
        validate: validateFn
      });
    }

    return function () {
      if (fieldName) {
        unregisterField(fieldName);
      }
    };
  }, [registerField, unregisterField, fieldName, validateFn]);

  if (false) {}

  !fieldName ?  false ? 0 : invariant(false) : void 0;
  var fieldHelpers = useMemo(function () {
    return getFieldHelpers(fieldName);
  }, [getFieldHelpers, fieldName]);
  return [getFieldProps(props), getFieldMeta(fieldName), fieldHelpers];
}
function Field(_ref) {
  var validate = _ref.validate,
      name = _ref.name,
      render = _ref.render,
      children = _ref.children,
      is = _ref.as,
      component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["validate", "name", "render", "children", "as", "component"]);

  var _useFormikContext = useFormikContext(),
      formik = _objectWithoutPropertiesLoose(_useFormikContext, ["validate", "validationSchema"]);

  if (false) {} // Register field and field-level validation with parent <Formik>


  var registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  useEffect(function () {
    registerField(name, {
      validate: validate
    });
    return function () {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);
  var field = formik.getFieldProps(_extends({
    name: name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field: field,
    form: formik
  };

  if (render) {
    return render(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (isFunction(children)) {
    return children(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (component) {
    // This behavior is backwards compat with earlier Formik 0.9 to 1.x
    if (typeof component === 'string') {
      var innerRef = props.innerRef,
          rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return createElement(component, _extends({
        ref: innerRef
      }, field, rest), children);
    } // We don't pass `meta` for backwards compat


    return createElement(component, _extends({
      field: field,
      form: formik
    }, props), children);
  } // default to input here so we can check for both `as` and `children` above


  var asElement = is || 'input';

  if (typeof asElement === 'string') {
    var _innerRef = props.innerRef,
        _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

    return createElement(asElement, _extends({
      ref: _innerRef
    }, field, _rest), children);
  }

  return createElement(asElement, _extends({}, field, props), children);
}

var Form = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
  // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
  var action = props.action,
      rest = _objectWithoutPropertiesLoose(props, ["action"]);

  var _action = action != null ? action : '#';

  var _useFormikContext = useFormikContext(),
      handleReset = _useFormikContext.handleReset,
      handleSubmit = _useFormikContext.handleSubmit;

  return (0,react.createElement)("form", _extends({
    onSubmit: handleSubmit,
    ref: ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = 'Form';

/**
 * A public higher-order component to access the imperative API
 */

function withFormik(_ref) {
  var _ref$mapPropsToValues = _ref.mapPropsToValues,
      mapPropsToValues = _ref$mapPropsToValues === void 0 ? function (vanillaProps) {
    var val = {};

    for (var k in vanillaProps) {
      if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
        // @todo TypeScript fix
        val[k] = vanillaProps[k];
      }
    }

    return val;
  } : _ref$mapPropsToValues,
      config = _objectWithoutPropertiesLoose(_ref, ["mapPropsToValues"]);

  return function createFormik(Component$1) {
    var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
    /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */

    var C = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(C, _React$Component);

      function C() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

        _this.validate = function (values) {
          return config.validate(values, _this.props);
        };

        _this.validationSchema = function () {
          return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
        };

        _this.handleSubmit = function (values, actions) {
          return config.handleSubmit(values, _extends({}, actions, {
            props: _this.props
          }));
        };

        _this.renderFormComponent = function (formikProps) {
          return createElement(Component$1, _extends({}, _this.props, formikProps));
        };

        return _this;
      }

      var _proto = C.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
            props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

        return createElement(Formik, _extends({}, props, config, {
          validate: config.validate && this.validate,
          validationSchema: config.validationSchema && this.validationSchema,
          initialValues: mapPropsToValues(this.props),
          initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
          initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
          initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
          onSubmit: this.handleSubmit,
          children: this.renderFormComponent
        }));
      };

      return C;
    }(Component);

    C.displayName = "WithFormik(" + componentDisplayName + ")";
    return hoistNonReactStatics(C, Component$1 // cast type to ComponentClass (even if SFC)
    );
  };
}

/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */

function connect(Comp) {
  var C = function C(props) {
    return createElement(FormikConsumer, null, function (formik) {
      !!!formik ?  false ? 0 : invariant(false) : void 0;
      return createElement(Comp, _extends({}, props, {
        formik: formik
      }));
    });
  };

  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
  // For example, <Field.WrappedComponent /> gets us <FieldInner/>

  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return hoistNonReactStatics(C, Comp // cast type to ComponentClass (even if SFC)
  );
}

/**
 * Some array helpers!
 */

var move = function move(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};

var copyArrayLike = function copyArrayLike(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function (key) {
      return parseInt(key);
    }).reduce(function (max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};

var createAlterationHandler = function createAlterationHandler(alteration, defaultFunction) {
  var fn = typeof alteration === 'function' ? alteration : defaultFunction;
  return function (data) {
    if (Array.isArray(data) || isObject(data)) {
      var clone = copyArrayLike(data);
      return fn(clone);
    } // This can be assumed to be a primitive, which
    // is a case for top level validation errors


    return data;
  };
};

var FieldArrayInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FieldArrayInner, _React$Component);

  function FieldArrayInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // We need TypeScript generics on these, so we'll bind them in the constructor
    // @todo Fix TS 3.2.1

    _this.updateArrayField = function (fn, alterTouched, alterErrors) {
      var _this$props = _this.props,
          name = _this$props.name,
          setFormikState = _this$props.formik.setFormikState;
      setFormikState(function (prevState) {
        var updateErrors = createAlterationHandler(alterErrors, fn);
        var updateTouched = createAlterationHandler(alterTouched, fn); // values fn should be executed before updateErrors and updateTouched,
        // otherwise it causes an error with unshift.

        var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;

        if (isEmptyArray(fieldError)) {
          fieldError = undefined;
        }

        if (isEmptyArray(fieldTouched)) {
          fieldTouched = undefined;
        }

        return _extends({}, prevState, {
          values: values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };

    _this.push = function (value) {
      return _this.updateArrayField(function (arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [(0,cloneDeep/* default */.Z)(value)]);
      }, false, false);
    };

    _this.handlePush = function (value) {
      return function () {
        return _this.push(value);
      };
    };

    _this.swap = function (indexA, indexB) {
      return _this.updateArrayField(function (array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };

    _this.handleSwap = function (indexA, indexB) {
      return function () {
        return _this.swap(indexA, indexB);
      };
    };

    _this.move = function (from, to) {
      return _this.updateArrayField(function (array) {
        return move(array, from, to);
      }, true, true);
    };

    _this.handleMove = function (from, to) {
      return function () {
        return _this.move(from, to);
      };
    };

    _this.insert = function (index, value) {
      return _this.updateArrayField(function (array) {
        return insert(array, index, value);
      }, function (array) {
        return insert(array, index, null);
      }, function (array) {
        return insert(array, index, null);
      });
    };

    _this.handleInsert = function (index, value) {
      return function () {
        return _this.insert(index, value);
      };
    };

    _this.replace = function (index, value) {
      return _this.updateArrayField(function (array) {
        return replace(array, index, value);
      }, false, false);
    };

    _this.handleReplace = function (index, value) {
      return function () {
        return _this.replace(index, value);
      };
    };

    _this.unshift = function (value) {
      var length = -1;

      _this.updateArrayField(function (array) {
        var arr = array ? [value].concat(array) : [value];
        length = arr.length;
        return arr;
      }, function (array) {
        return array ? [null].concat(array) : [null];
      }, function (array) {
        return array ? [null].concat(array) : [null];
      });

      return length;
    };

    _this.handleUnshift = function (value) {
      return function () {
        return _this.unshift(value);
      };
    };

    _this.handleRemove = function (index) {
      return function () {
        return _this.remove(index);
      };
    };

    _this.handlePop = function () {
      return function () {
        return _this.pop();
      };
    };

    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FieldArrayInner.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !react_fast_compare_default()(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };

  _proto.remove = function remove(index) {
    // We need to make sure we also remove relevant pieces of `touched` and `errors`
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var copy = array ? copyArrayLike(array) : [];

      if (!result) {
        result = copy[index];
      }

      if (isFunction(copy.splice)) {
        copy.splice(index, 1);
      } // if the array only includes undefined values we have to return an empty array


      return isFunction(copy.every) ? copy.every(function (v) {
        return v === undefined;
      }) ? [] : copy : copy;
    }, true, true);
    return result;
  };

  _proto.pop = function pop() {
    // Remove relevant pieces of `touched` and `errors` too!
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var tmp = array.slice();

      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }

      return tmp;
    }, true, true);
    return result;
  };

  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };

    var _this$props2 = this.props,
        component = _this$props2.component,
        render = _this$props2.render,
        children = _this$props2.children,
        name = _this$props2.name,
        _this$props2$formik = _this$props2.formik,
        restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name: name
    });

    return component ? (0,react.createElement)(component, props) : render ? render(props) : children // children come last, always called
    ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? react.Children.only(children) : null : null;
  };

  return FieldArrayInner;
}(react.Component);

FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var FieldArray = /*#__PURE__*/(/* unused pure expression or super */ null && (connect(FieldArrayInner)));

var ErrorMessageImpl = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_React$Component) {
  _inheritsLoose(ErrorMessageImpl, _React$Component);

  function ErrorMessageImpl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ErrorMessageImpl.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        component = _this$props.component,
        formik = _this$props.formik,
        render = _this$props.render,
        children = _this$props.children,
        name = _this$props.name,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "formik", "render", "children", "name"]);

    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? createElement(component, rest, error) : error : null;
  };

  return ErrorMessageImpl;
}(Component)));

var ErrorMessage = /*#__PURE__*/(/* unused pure expression or super */ null && (connect(ErrorMessageImpl)));

/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */

var FastFieldInner = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_React$Component) {
  _inheritsLoose(FastFieldInner, _React$Component);

  function FastFieldInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var render = props.render,
        children = props.children,
        component = props.component,
        is = props.as,
        name = props.name;
    !!render ?  false ? 0 : invariant(false) : void 0;
    !!(component && render) ?  false ? 0 : invariant(false) : void 0;
    !!(is && children && isFunction(children)) ?  false ? 0 : invariant(false) : void 0;
    !!(component && children && isFunction(children)) ?  false ? 0 : invariant(false) : void 0;
    !!(render && children && !isEmptyChildren(children)) ?  false ? 0 : invariant(false) : void 0;
    return _this;
  }

  var _proto = FastFieldInner.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate(props, this.props);
    } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
      return true;
    } else {
      return false;
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
    this.props.formik.registerField(this.props.name, {
      validate: this.props.validate
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }

    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        render = _this$props.render,
        is = _this$props.as,
        children = _this$props.children,
        component = _this$props.component,
        formik = _this$props.formik,
        props = _objectWithoutPropertiesLoose(_this$props, ["validate", "name", "render", "as", "children", "component", "shouldUpdate", "formik"]);

    var restOfFormik = _objectWithoutPropertiesLoose(formik, ["validate", "validationSchema"]);

    var field = formik.getFieldProps(_extends({
      name: name
    }, props));
    var meta = {
      value: getIn(formik.values, name),
      error: getIn(formik.errors, name),
      touched: !!getIn(formik.touched, name),
      initialValue: getIn(formik.initialValues, name),
      initialTouched: !!getIn(formik.initialTouched, name),
      initialError: getIn(formik.initialErrors, name)
    };
    var bag = {
      field: field,
      meta: meta,
      form: restOfFormik
    };

    if (render) {
      return render(bag);
    }

    if (isFunction(children)) {
      return children(bag);
    }

    if (component) {
      // This behavior is backwards compat with earlier Formik 0.9 to 1.x
      if (typeof component === 'string') {
        var innerRef = props.innerRef,
            rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

        return createElement(component, _extends({
          ref: innerRef
        }, field, rest), children);
      } // We don't pass `meta` for backwards compat


      return createElement(component, _extends({
        field: field,
        form: formik
      }, props), children);
    } // default to input here so we can check for both `as` and `children` above


    var asElement = is || 'input';

    if (typeof asElement === 'string') {
      var _innerRef = props.innerRef,
          _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return createElement(asElement, _extends({
        ref: _innerRef
      }, field, _rest), children);
    }

    return createElement(asElement, _extends({}, field, props), children);
  };

  return FastFieldInner;
}(Component)));

var FastField = /*#__PURE__*/(/* unused pure expression or super */ null && (connect(FastFieldInner)));


//# sourceMappingURL=formik.esm.js.map


/***/ }),

/***/ 8679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var reactIs = __webpack_require__(1296);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 6103:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 1296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(6103);
} else {}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBOztBQUVBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCw0QkFBUztBQUM3RCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEVBQThFLDRCQUFPO0FBQ3JGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBOztBQUVBOzs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2I7QUFDQSxjQUFjLGtDQUFrQyxpQkFBaUIsVUFBVSwwQkFBMEIsbURBQW1ELGtDQUFrQyw0Q0FBNEMsa0JBQWtCLGtCQUFrQixjQUFjLGdCQUFnQixpQkFBaUIsR0FBRyxzQkFBc0IsR0FBRyx1QkFBdUIsR0FBRyx1QkFBdUIsR0FBRyxlQUFlLEdBQUcsa0JBQWtCLEdBQUcsZ0JBQWdCLEdBQUcsWUFBWSxHQUFHLFlBQVksR0FBRyxjQUFjO0FBQy9lLGdCQUFnQixHQUFHLGtCQUFrQixHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixhQUFhLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsYUFBYSxpQkFBaUIseUJBQXlCLGFBQWEsaUJBQWlCLGlCQUFpQixhQUFhLHFEQUFxRCxvQkFBb0IsYUFBYSxpQkFBaUIsa0JBQWtCLGFBQWEsaUJBQWlCLGNBQWMsYUFBYTtBQUMzYyxjQUFjLGFBQWEsaUJBQWlCLGdCQUFnQixhQUFhLGlCQUFpQixrQkFBa0IsYUFBYSxpQkFBaUIsb0JBQW9CLGFBQWEsaUJBQWlCLGtCQUFrQixhQUFhO0FBQzNOLDBCQUEwQixhQUFhLDZRQUE2USxjQUFjOzs7Ozs7OztBQ2RyVDs7QUFFYixJQUFJLElBQXFDO0FBQ3pDLEVBQUUsMENBQTREO0FBQzlELEVBQUUsS0FBSyxFQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Zvcm1pay9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9mb3JtaWsvZGlzdC9mb3JtaWsuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3Mvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHIoZSl7dmFyIHQsZixuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlKW4rPWU7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZSlpZihBcnJheS5pc0FycmF5KGUpKWZvcih0PTA7dDxlLmxlbmd0aDt0KyspZVt0XSYmKGY9cihlW3RdKSkmJihuJiYobis9XCIgXCIpLG4rPWYpO2Vsc2UgZm9yKHQgaW4gZSllW3RdJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZnVuY3Rpb24gY2xzeCgpe2Zvcih2YXIgZSx0LGY9MCxuPVwiXCI7Zjxhcmd1bWVudHMubGVuZ3RoOykoZT1hcmd1bWVudHNbZisrXSkmJih0PXIoZSkpJiYobiYmKG4rPVwiIFwiKSxuKz10KTtyZXR1cm4gbn1leHBvcnQgZGVmYXVsdCBjbHN4OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGlzTWVyZ2VhYmxlT2JqZWN0ID0gZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSlcblx0XHQmJiAhaXNTcGVjaWFsKHZhbHVlKVxufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG5cdHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbn1cblxuZnVuY3Rpb24gaXNTcGVjaWFsKHZhbHVlKSB7XG5cdHZhciBzdHJpbmdWYWx1ZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cblx0cmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJ1xuXHRcdHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXSdcblx0XHR8fCBpc1JlYWN0RWxlbWVudCh2YWx1ZSlcbn1cblxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcblx0cmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEVcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KHZhbCkgPyBbXSA6IHt9XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG5cdHJldHVybiAob3B0aW9ucy5jbG9uZSAhPT0gZmFsc2UgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkpXG5cdFx0PyBkZWVwbWVyZ2UoZW1wdHlUYXJnZXQodmFsdWUpLCB2YWx1ZSwgb3B0aW9ucylcblx0XHQ6IHZhbHVlXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG5cdHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoZWxlbWVudCwgb3B0aW9ucylcblx0fSlcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0dmFyIGRlc3RpbmF0aW9uID0ge307XG5cdGlmIChvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHRhcmdldCkpIHtcblx0XHRPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodGFyZ2V0W2tleV0sIG9wdGlvbnMpO1xuXHRcdH0pO1xuXHR9XG5cdE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAoIW9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGRlZXBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcblx0b3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCA9IG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgfHwgaXNNZXJnZWFibGVPYmplY3Q7XG5cblx0dmFyIHNvdXJjZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHNvdXJjZSk7XG5cdHZhciB0YXJnZXRJc0FycmF5ID0gQXJyYXkuaXNBcnJheSh0YXJnZXQpO1xuXHR2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cblx0aWYgKCFzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoKSB7XG5cdFx0cmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG5cdFx0cmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpXG5cdH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9ucykge1xuXHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXknKVxuXHR9XG5cblx0cmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG5cdFx0cmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKVxuXHR9LCB7fSlcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcblxuZXhwb3J0IGRlZmF1bHQgZGVlcG1lcmdlXzE7XG4iLCJpbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICdsb2Rhc2gtZXMvaXNQbGFpbk9iamVjdCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCBDaGlsZHJlbiwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgY3JlYXRlRWxlbWVudCwgdXNlTGF5b3V0RWZmZWN0LCBmb3J3YXJkUmVmLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdyZWFjdC1mYXN0LWNvbXBhcmUnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IGNsb25lIGZyb20gJ2xvZGFzaC1lcy9jbG9uZSc7XG5pbXBvcnQgdG9QYXRoIGZyb20gJ2xvZGFzaC1lcy90b1BhdGgnO1xuaW1wb3J0IGhvaXN0Tm9uUmVhY3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLWVzL2Nsb25lRGVlcCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbnZhciBGb3JtaWtDb250ZXh0ID0gLyojX19QVVJFX18qL2NyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcbkZvcm1pa0NvbnRleHQuZGlzcGxheU5hbWUgPSAnRm9ybWlrQ29udGV4dCc7XG52YXIgRm9ybWlrUHJvdmlkZXIgPSBGb3JtaWtDb250ZXh0LlByb3ZpZGVyO1xudmFyIEZvcm1pa0NvbnN1bWVyID0gRm9ybWlrQ29udGV4dC5Db25zdW1lcjtcbmZ1bmN0aW9uIHVzZUZvcm1pa0NvbnRleHQoKSB7XG4gIHZhciBmb3JtaWsgPSB1c2VDb250ZXh0KEZvcm1pa0NvbnRleHQpO1xuICAhISFmb3JtaWsgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiRm9ybWlrIGNvbnRleHQgaXMgdW5kZWZpbmVkLCBwbGVhc2UgdmVyaWZ5IHlvdSBhcmUgY2FsbGluZyB1c2VGb3JtaWtDb250ZXh0KCkgYXMgY2hpbGQgb2YgYSA8Rm9ybWlrPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGZvcm1paztcbn1cblxuLyoqIEBwcml2YXRlIGlzIHRoZSB2YWx1ZSBhbiBlbXB0eSBhcnJheT8gKi9cblxudmFyIGlzRW1wdHlBcnJheSA9IGZ1bmN0aW9uIGlzRW1wdHlBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwO1xufTtcbi8qKiBAcHJpdmF0ZSBpcyB0aGUgZ2l2ZW4gb2JqZWN0IGEgRnVuY3Rpb24/ICovXG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuLyoqIEBwcml2YXRlIGlzIHRoZSBnaXZlbiBvYmplY3QgYW4gT2JqZWN0PyAqL1xuXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdCBhbiBpbnRlZ2VyPyAqL1xuXG52YXIgaXNJbnRlZ2VyID0gZnVuY3Rpb24gaXNJbnRlZ2VyKG9iaikge1xuICByZXR1cm4gU3RyaW5nKE1hdGguZmxvb3IoTnVtYmVyKG9iaikpKSA9PT0gb2JqO1xufTtcbi8qKiBAcHJpdmF0ZSBpcyB0aGUgZ2l2ZW4gb2JqZWN0IGEgc3RyaW5nPyAqL1xuXG52YXIgaXNTdHJpbmcgPSBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBTdHJpbmddJztcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdCBhIE5hTj8gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcblxudmFyIGlzTmFOJDEgPSBmdW5jdGlvbiBpc05hTihvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gb2JqO1xufTtcbi8qKiBAcHJpdmF0ZSBEb2VzIGEgUmVhY3QgY29tcG9uZW50IGhhdmUgZXhhY3RseSAwIGNoaWxkcmVuPyAqL1xuXG52YXIgaXNFbXB0eUNoaWxkcmVuID0gZnVuY3Rpb24gaXNFbXB0eUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHJldHVybiBDaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDA7XG59O1xuLyoqIEBwcml2YXRlIGlzIHRoZSBnaXZlbiBvYmplY3QvdmFsdWUgYSBwcm9taXNlPyAqL1xuXG52YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWx1ZSkgJiYgaXNGdW5jdGlvbih2YWx1ZS50aGVuKTtcbn07XG4vKiogQHByaXZhdGUgaXMgdGhlIGdpdmVuIG9iamVjdC92YWx1ZSBhIHR5cGUgb2Ygc3ludGhldGljIGV2ZW50PyAqL1xuXG52YXIgaXNJbnB1dEV2ZW50ID0gZnVuY3Rpb24gaXNJbnB1dEV2ZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBpc09iamVjdCh2YWx1ZSkgJiYgaXNPYmplY3QodmFsdWUudGFyZ2V0KTtcbn07XG4vKipcclxuICogU2FtZSBhcyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGJ1dCB3cmFwcyBpbiBhIHRyeS1jYXRjaCBibG9jay4gSW4gSUUgaXQgaXNcclxuICogbm90IHNhZmUgdG8gY2FsbCBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGlmIHRoZXJlIGlzIG5vdGhpbmcgZm9jdXNlZC5cclxuICpcclxuICogVGhlIGFjdGl2ZUVsZW1lbnQgd2lsbCBiZSBudWxsIG9ubHkgaWYgdGhlIGRvY3VtZW50IG9yIGRvY3VtZW50IGJvZHkgaXMgbm90XHJcbiAqIHlldCBkZWZpbmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gez9Eb2N1bWVudH0gZG9jIERlZmF1bHRzIHRvIGN1cnJlbnQgZG9jdW1lbnQuXHJcbiAqIEByZXR1cm4ge0VsZW1lbnQgfCBudWxsfVxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvZG9tL2dldEFjdGl2ZUVsZW1lbnQuanNcclxuICovXG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUVsZW1lbnQoZG9jKSB7XG4gIGRvYyA9IGRvYyB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogdW5kZWZpbmVkKTtcblxuICBpZiAodHlwZW9mIGRvYyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGRvYy5hY3RpdmVFbGVtZW50IHx8IGRvYy5ib2R5O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRvYy5ib2R5O1xuICB9XG59XG4vKipcclxuICogRGVlcGx5IGdldCBhIHZhbHVlIGZyb20gYW4gb2JqZWN0IHZpYSBpdHMgcGF0aC5cclxuICovXG5cbmZ1bmN0aW9uIGdldEluKG9iaiwga2V5LCBkZWYsIHApIHtcbiAgaWYgKHAgPT09IHZvaWQgMCkge1xuICAgIHAgPSAwO1xuICB9XG5cbiAgdmFyIHBhdGggPSB0b1BhdGgoa2V5KTtcblxuICB3aGlsZSAob2JqICYmIHAgPCBwYXRoLmxlbmd0aCkge1xuICAgIG9iaiA9IG9ialtwYXRoW3ArK11dO1xuICB9IC8vIGNoZWNrIGlmIHBhdGggaXMgbm90IGluIHRoZSBlbmRcblxuXG4gIGlmIChwICE9PSBwYXRoLmxlbmd0aCAmJiAhb2JqKSB7XG4gICAgcmV0dXJuIGRlZjtcbiAgfVxuXG4gIHJldHVybiBvYmogPT09IHVuZGVmaW5lZCA/IGRlZiA6IG9iajtcbn1cbi8qKlxyXG4gKiBEZWVwbHkgc2V0IGEgdmFsdWUgZnJvbSBpbiBvYmplY3QgdmlhIGl0J3MgcGF0aC4gSWYgdGhlIHZhbHVlIGF0IGBwYXRoYFxyXG4gKiBoYXMgY2hhbmdlZCwgcmV0dXJuIGEgc2hhbGxvdyBjb3B5IG9mIG9iaiB3aXRoIGB2YWx1ZWAgc2V0IGF0IGBwYXRoYC5cclxuICogSWYgYHZhbHVlYCBoYXMgbm90IGNoYW5nZWQsIHJldHVybiB0aGUgb3JpZ2luYWwgYG9iamAuXHJcbiAqXHJcbiAqIEV4aXN0aW5nIG9iamVjdHMgLyBhcnJheXMgYWxvbmcgYHBhdGhgIGFyZSBhbHNvIHNoYWxsb3cgY29waWVkLiBTaWJsaW5nXHJcbiAqIG9iamVjdHMgYWxvbmcgcGF0aCByZXRhaW4gdGhlIHNhbWUgaW50ZXJuYWwganMgcmVmZXJlbmNlLiBTaW5jZSBuZXdcclxuICogb2JqZWN0cyAvIGFycmF5cyBhcmUgb25seSBjcmVhdGVkIGFsb25nIGBwYXRoYCwgd2UgY2FuIHRlc3QgaWYgYW55dGhpbmdcclxuICogY2hhbmdlZCBpbiBhIG5lc3RlZCBzdHJ1Y3R1cmUgYnkgY29tcGFyaW5nIHRoZSBvYmplY3QncyByZWZlcmVuY2UgaW5cclxuICogdGhlIG9sZCBhbmQgbmV3IG9iamVjdCwgc2ltaWxhciB0byBob3cgcnVzc2lhbiBkb2xsIGNhY2hlIGludmFsaWRhdGlvblxyXG4gKiB3b3Jrcy5cclxuICpcclxuICogSW4gZWFybGllciB2ZXJzaW9ucyBvZiB0aGlzIGZ1bmN0aW9uLCB3aGljaCB1c2VkIGNsb25lRGVlcCwgdGhlcmUgd2VyZVxyXG4gKiBpc3N1ZXMgd2hlcmVieSBzZXR0aW5ncyBhIG5lc3RlZCB2YWx1ZSB3b3VsZCBtdXRhdGUgdGhlIHBhcmVudFxyXG4gKiBpbnN0ZWFkIG9mIGNyZWF0aW5nIGEgbmV3IG9iamVjdC4gYGNsb25lYCBhdm9pZHMgdGhhdCBidWcgbWFraW5nIGFcclxuICogc2hhbGxvdyBjb3B5IG9mIHRoZSBvYmplY3RzIGFsb25nIHRoZSB1cGRhdGUgcGF0aFxyXG4gKiBzbyBubyBvYmplY3QgaXMgbXV0YXRlZCBpbiBwbGFjZS5cclxuICpcclxuICogQmVmb3JlIGNoYW5naW5nIHRoaXMgZnVuY3Rpb24sIHBsZWFzZSByZWFkIHRocm91Z2ggdGhlIGZvbGxvd2luZ1xyXG4gKiBkaXNjdXNzaW9ucy5cclxuICpcclxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L2xpbmtzdGF0ZVxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXJlZHBhbG1lci9mb3JtaWsvcHVsbC8xMjNcclxuICovXG5cbmZ1bmN0aW9uIHNldEluKG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgdmFyIHJlcyA9IGNsb25lKG9iaik7IC8vIHRoaXMga2VlcHMgaW5oZXJpdGFuY2Ugd2hlbiBvYmogaXMgYSBjbGFzc1xuXG4gIHZhciByZXNWYWwgPSByZXM7XG4gIHZhciBpID0gMDtcbiAgdmFyIHBhdGhBcnJheSA9IHRvUGF0aChwYXRoKTtcblxuICBmb3IgKDsgaSA8IHBhdGhBcnJheS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICB2YXIgY3VycmVudFBhdGggPSBwYXRoQXJyYXlbaV07XG4gICAgdmFyIGN1cnJlbnRPYmogPSBnZXRJbihvYmosIHBhdGhBcnJheS5zbGljZSgwLCBpICsgMSkpO1xuXG4gICAgaWYgKGN1cnJlbnRPYmogJiYgKGlzT2JqZWN0KGN1cnJlbnRPYmopIHx8IEFycmF5LmlzQXJyYXkoY3VycmVudE9iaikpKSB7XG4gICAgICByZXNWYWwgPSByZXNWYWxbY3VycmVudFBhdGhdID0gY2xvbmUoY3VycmVudE9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXh0UGF0aCA9IHBhdGhBcnJheVtpICsgMV07XG4gICAgICByZXNWYWwgPSByZXNWYWxbY3VycmVudFBhdGhdID0gaXNJbnRlZ2VyKG5leHRQYXRoKSAmJiBOdW1iZXIobmV4dFBhdGgpID49IDAgPyBbXSA6IHt9O1xuICAgIH1cbiAgfSAvLyBSZXR1cm4gb3JpZ2luYWwgb2JqZWN0IGlmIG5ldyB2YWx1ZSBpcyB0aGUgc2FtZSBhcyBjdXJyZW50XG5cblxuICBpZiAoKGkgPT09IDAgPyBvYmogOiByZXNWYWwpW3BhdGhBcnJheVtpXV0gPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsZXRlIHJlc1ZhbFtwYXRoQXJyYXlbaV1dO1xuICB9IGVsc2Uge1xuICAgIHJlc1ZhbFtwYXRoQXJyYXlbaV1dID0gdmFsdWU7XG4gIH0gLy8gSWYgdGhlIHBhdGggYXJyYXkgaGFzIGEgc2luZ2xlIGVsZW1lbnQsIHRoZSBsb29wIGRpZCBub3QgcnVuLlxuICAvLyBEZWxldGluZyBvbiBgcmVzVmFsYCBoYWQgbm8gZWZmZWN0IGluIHRoaXMgc2NlbmFyaW8sIHNvIHdlIGRlbGV0ZSBvbiB0aGUgcmVzdWx0IGluc3RlYWQuXG5cblxuICBpZiAoaSA9PT0gMCAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsZXRlIHJlc1twYXRoQXJyYXlbaV1dO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn1cbi8qKlxyXG4gKiBSZWN1cnNpdmVseSBhIHNldCB0aGUgc2FtZSB2YWx1ZSBmb3IgYWxsIGtleXMgYW5kIGFycmF5cyBuZXN0ZWQgb2JqZWN0LCBjbG9uaW5nXHJcbiAqIEBwYXJhbSBvYmplY3RcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEBwYXJhbSB2aXNpdGVkXHJcbiAqIEBwYXJhbSByZXNwb25zZVxyXG4gKi9cblxuZnVuY3Rpb24gc2V0TmVzdGVkT2JqZWN0VmFsdWVzKG9iamVjdCwgdmFsdWUsIHZpc2l0ZWQsIHJlc3BvbnNlKSB7XG4gIGlmICh2aXNpdGVkID09PSB2b2lkIDApIHtcbiAgICB2aXNpdGVkID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxuXG4gIGlmIChyZXNwb25zZSA9PT0gdm9pZCAwKSB7XG4gICAgcmVzcG9uc2UgPSB7fTtcbiAgfVxuXG4gIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIGsgPSBfT2JqZWN0JGtleXNbX2ldO1xuICAgIHZhciB2YWwgPSBvYmplY3Rba107XG5cbiAgICBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgICAgaWYgKCF2aXNpdGVkLmdldCh2YWwpKSB7XG4gICAgICAgIHZpc2l0ZWQuc2V0KHZhbCwgdHJ1ZSk7IC8vIEluIG9yZGVyIHRvIGtlZXAgYXJyYXkgdmFsdWVzIGNvbnNpc3RlbnQgZm9yIGJvdGggZG90IHBhdGggIGFuZFxuICAgICAgICAvLyBicmFja2V0IHN5bnRheCwgd2UgbmVlZCB0byBjaGVjayBpZiB0aGlzIGlzIGFuIGFycmF5IHNvIHRoYXRcbiAgICAgICAgLy8gdGhpcyB3aWxsIG91dHB1dCAgeyBmcmllbmRzOiBbdHJ1ZV0gfSBhbmQgbm90IHsgZnJpZW5kczogeyBcIjBcIjogdHJ1ZSB9IH1cblxuICAgICAgICByZXNwb25zZVtrXSA9IEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XG4gICAgICAgIHNldE5lc3RlZE9iamVjdFZhbHVlcyh2YWwsIHZhbHVlLCB2aXNpdGVkLCByZXNwb25zZVtrXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3BvbnNlW2tdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5mdW5jdGlvbiBmb3JtaWtSZWR1Y2VyKHN0YXRlLCBtc2cpIHtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ1NFVF9WQUxVRVMnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB2YWx1ZXM6IG1zZy5wYXlsb2FkXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1NFVF9UT1VDSEVEJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgdG91Y2hlZDogbXNnLnBheWxvYWRcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0VSUk9SUyc6XG4gICAgICBpZiAoaXNFcXVhbChzdGF0ZS5lcnJvcnMsIG1zZy5wYXlsb2FkKSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXJyb3JzOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfU1RBVFVTJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgc3RhdHVzOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfSVNTVUJNSVRUSU5HJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfSVNWQUxJREFUSU5HJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBtc2cucGF5bG9hZFxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfRklFTERfVkFMVUUnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICB2YWx1ZXM6IHNldEluKHN0YXRlLnZhbHVlcywgbXNnLnBheWxvYWQuZmllbGQsIG1zZy5wYXlsb2FkLnZhbHVlKVxuICAgICAgfSk7XG5cbiAgICBjYXNlICdTRVRfRklFTERfVE9VQ0hFRCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvdWNoZWQ6IHNldEluKHN0YXRlLnRvdWNoZWQsIG1zZy5wYXlsb2FkLmZpZWxkLCBtc2cucGF5bG9hZC52YWx1ZSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU0VUX0ZJRUxEX0VSUk9SJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgZXJyb3JzOiBzZXRJbihzdGF0ZS5lcnJvcnMsIG1zZy5wYXlsb2FkLmZpZWxkLCBtc2cucGF5bG9hZC52YWx1ZSlcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUkVTRVRfRk9STSc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBtc2cucGF5bG9hZCk7XG5cbiAgICBjYXNlICdTRVRfRk9STUlLX1NUQVRFJzpcbiAgICAgIHJldHVybiBtc2cucGF5bG9hZChzdGF0ZSk7XG5cbiAgICBjYXNlICdTVUJNSVRfQVRURU1QVCc6XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHRvdWNoZWQ6IHNldE5lc3RlZE9iamVjdFZhbHVlcyhzdGF0ZS52YWx1ZXMsIHRydWUpLFxuICAgICAgICBpc1N1Ym1pdHRpbmc6IHRydWUsXG4gICAgICAgIHN1Ym1pdENvdW50OiBzdGF0ZS5zdWJtaXRDb3VudCArIDFcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnU1VCTUlUX0ZBSUxVUkUnOlxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1N1Ym1pdHRpbmc6IGZhbHNlXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1NVQk1JVF9TVUNDRVNTJzpcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNTdWJtaXR0aW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59IC8vIEluaXRpYWwgZW1wdHkgc3RhdGVzIC8vIG9iamVjdHNcblxuXG52YXIgZW1wdHlFcnJvcnMgPSB7fTtcbnZhciBlbXB0eVRvdWNoZWQgPSB7fTtcbmZ1bmN0aW9uIHVzZUZvcm1payhfcmVmKSB7XG4gIHZhciBfcmVmJHZhbGlkYXRlT25DaGFuZ2UgPSBfcmVmLnZhbGlkYXRlT25DaGFuZ2UsXG4gICAgICB2YWxpZGF0ZU9uQ2hhbmdlID0gX3JlZiR2YWxpZGF0ZU9uQ2hhbmdlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiR2YWxpZGF0ZU9uQ2hhbmdlLFxuICAgICAgX3JlZiR2YWxpZGF0ZU9uQmx1ciA9IF9yZWYudmFsaWRhdGVPbkJsdXIsXG4gICAgICB2YWxpZGF0ZU9uQmx1ciA9IF9yZWYkdmFsaWRhdGVPbkJsdXIgPT09IHZvaWQgMCA/IHRydWUgOiBfcmVmJHZhbGlkYXRlT25CbHVyLFxuICAgICAgX3JlZiR2YWxpZGF0ZU9uTW91bnQgPSBfcmVmLnZhbGlkYXRlT25Nb3VudCxcbiAgICAgIHZhbGlkYXRlT25Nb3VudCA9IF9yZWYkdmFsaWRhdGVPbk1vdW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkdmFsaWRhdGVPbk1vdW50LFxuICAgICAgaXNJbml0aWFsVmFsaWQgPSBfcmVmLmlzSW5pdGlhbFZhbGlkLFxuICAgICAgX3JlZiRlbmFibGVSZWluaXRpYWxpID0gX3JlZi5lbmFibGVSZWluaXRpYWxpemUsXG4gICAgICBlbmFibGVSZWluaXRpYWxpemUgPSBfcmVmJGVuYWJsZVJlaW5pdGlhbGkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRlbmFibGVSZWluaXRpYWxpLFxuICAgICAgb25TdWJtaXQgPSBfcmVmLm9uU3VibWl0LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInZhbGlkYXRlT25DaGFuZ2VcIiwgXCJ2YWxpZGF0ZU9uQmx1clwiLCBcInZhbGlkYXRlT25Nb3VudFwiLCBcImlzSW5pdGlhbFZhbGlkXCIsIFwiZW5hYmxlUmVpbml0aWFsaXplXCIsIFwib25TdWJtaXRcIl0pO1xuXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHtcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB2YWxpZGF0ZU9uQ2hhbmdlLFxuICAgIHZhbGlkYXRlT25CbHVyOiB2YWxpZGF0ZU9uQmx1cixcbiAgICB2YWxpZGF0ZU9uTW91bnQ6IHZhbGlkYXRlT25Nb3VudCxcbiAgICBvblN1Ym1pdDogb25TdWJtaXRcbiAgfSwgcmVzdCk7XG5cbiAgdmFyIGluaXRpYWxWYWx1ZXMgPSB1c2VSZWYocHJvcHMuaW5pdGlhbFZhbHVlcyk7XG4gIHZhciBpbml0aWFsRXJyb3JzID0gdXNlUmVmKHByb3BzLmluaXRpYWxFcnJvcnMgfHwgZW1wdHlFcnJvcnMpO1xuICB2YXIgaW5pdGlhbFRvdWNoZWQgPSB1c2VSZWYocHJvcHMuaW5pdGlhbFRvdWNoZWQgfHwgZW1wdHlUb3VjaGVkKTtcbiAgdmFyIGluaXRpYWxTdGF0dXMgPSB1c2VSZWYocHJvcHMuaW5pdGlhbFN0YXR1cyk7XG4gIHZhciBpc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICB2YXIgZmllbGRSZWdpc3RyeSA9IHVzZVJlZih7fSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAhKHR5cGVvZiBpc0luaXRpYWxWYWxpZCA9PT0gJ3VuZGVmaW5lZCcpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnaXNJbml0aWFsVmFsaWQgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiBGb3JtaWsuIFBsZWFzZSB1c2UgaW5pdGlhbEVycm9ycyBvciB2YWxpZGF0ZU9uTW91bnQgaW5zdGVhZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gdXNlU3RhdGUoMCksXG4gICAgICBzZXRJdGVyYXRpb24gPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHN0YXRlUmVmID0gdXNlUmVmKHtcbiAgICB2YWx1ZXM6IHByb3BzLmluaXRpYWxWYWx1ZXMsXG4gICAgZXJyb3JzOiBwcm9wcy5pbml0aWFsRXJyb3JzIHx8IGVtcHR5RXJyb3JzLFxuICAgIHRvdWNoZWQ6IHByb3BzLmluaXRpYWxUb3VjaGVkIHx8IGVtcHR5VG91Y2hlZCxcbiAgICBzdGF0dXM6IHByb3BzLmluaXRpYWxTdGF0dXMsXG4gICAgaXNTdWJtaXR0aW5nOiBmYWxzZSxcbiAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgIHN1Ym1pdENvdW50OiAwXG4gIH0pO1xuICB2YXIgc3RhdGUgPSBzdGF0ZVJlZi5jdXJyZW50O1xuICB2YXIgZGlzcGF0Y2ggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgdmFyIHByZXYgPSBzdGF0ZVJlZi5jdXJyZW50O1xuICAgIHN0YXRlUmVmLmN1cnJlbnQgPSBmb3JtaWtSZWR1Y2VyKHByZXYsIGFjdGlvbik7IC8vIGZvcmNlIHJlcmVuZGVyXG5cbiAgICBpZiAocHJldiAhPT0gc3RhdGVSZWYuY3VycmVudCkgc2V0SXRlcmF0aW9uKGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4geCArIDE7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgdmFyIHJ1blZhbGlkYXRlSGFuZGxlciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICh2YWx1ZXMsIGZpZWxkKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBtYXliZVByb21pc2VkRXJyb3JzID0gcHJvcHMudmFsaWRhdGUodmFsdWVzLCBmaWVsZCk7XG5cbiAgICAgIGlmIChtYXliZVByb21pc2VkRXJyb3JzID09IG51bGwpIHtcbiAgICAgICAgLy8gdXNlIGxvb3NlIG51bGwgY2hlY2sgaGVyZSBvbiBwdXJwb3NlXG4gICAgICAgIHJlc29sdmUoZW1wdHlFcnJvcnMpO1xuICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UobWF5YmVQcm9taXNlZEVycm9ycykpIHtcbiAgICAgICAgbWF5YmVQcm9taXNlZEVycm9ycy50aGVuKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICAgICAgICByZXNvbHZlKGVycm9ycyB8fCBlbXB0eUVycm9ycyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChhY3R1YWxFeGNlcHRpb24pIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogQW4gdW5oYW5kbGVkIGVycm9yIHdhcyBjYXVnaHQgZHVyaW5nIHZhbGlkYXRpb24gaW4gPEZvcm1payB2YWxpZGF0ZSAvPlwiLCBhY3R1YWxFeGNlcHRpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlamVjdChhY3R1YWxFeGNlcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUobWF5YmVQcm9taXNlZEVycm9ycyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtwcm9wcy52YWxpZGF0ZV0pO1xuICAvKipcclxuICAgKiBSdW4gdmFsaWRhdGlvbiBhZ2FpbnN0IGEgWXVwIHNjaGVtYSBhbmQgb3B0aW9uYWxseSBydW4gYSBmdW5jdGlvbiBpZiBzdWNjZXNzZnVsXHJcbiAgICovXG5cbiAgdmFyIHJ1blZhbGlkYXRpb25TY2hlbWEgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWVzLCBmaWVsZCkge1xuICAgIHZhciB2YWxpZGF0aW9uU2NoZW1hID0gcHJvcHMudmFsaWRhdGlvblNjaGVtYTtcbiAgICB2YXIgc2NoZW1hID0gaXNGdW5jdGlvbih2YWxpZGF0aW9uU2NoZW1hKSA/IHZhbGlkYXRpb25TY2hlbWEoZmllbGQpIDogdmFsaWRhdGlvblNjaGVtYTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpZWxkICYmIHNjaGVtYS52YWxpZGF0ZUF0ID8gc2NoZW1hLnZhbGlkYXRlQXQoZmllbGQsIHZhbHVlcykgOiB2YWxpZGF0ZVl1cFNjaGVtYSh2YWx1ZXMsIHNjaGVtYSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoZW1wdHlFcnJvcnMpO1xuICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAvLyBZdXAgd2lsbCB0aHJvdyBhIHZhbGlkYXRpb24gZXJyb3IgaWYgdmFsaWRhdGlvbiBmYWlscy4gV2UgY2F0Y2ggdGhvc2UgYW5kXG4gICAgICAgIC8vIHJlc29sdmUgdGhlbSBpbnRvIEZvcm1payBlcnJvcnMuIFdlIGNhbiBzbmlmZiBpZiBzb21ldGhpbmcgaXMgYSBZdXAgZXJyb3JcbiAgICAgICAgLy8gYnkgY2hlY2tpbmcgZXJyb3IubmFtZS5cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZW5zZS95dXAjdmFsaWRhdGlvbmVycm9yZXJyb3JzLXN0cmluZy0tYXJyYXlzdHJpbmctdmFsdWUtYW55LXBhdGgtc3RyaW5nXG4gICAgICAgIGlmIChlcnIubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICByZXNvbHZlKHl1cFRvRm9ybUVycm9ycyhlcnIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBXZSB0aHJvdyBhbnkgb3RoZXIgZXJyb3JzXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIldhcm5pbmc6IEFuIHVuaGFuZGxlZCBlcnJvciB3YXMgY2F1Z2h0IGR1cmluZyB2YWxpZGF0aW9uIGluIDxGb3JtaWsgdmFsaWRhdGlvblNjaGVtYSAvPlwiLCBlcnIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW3Byb3BzLnZhbGlkYXRpb25TY2hlbWFdKTtcbiAgdmFyIHJ1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmUoZmllbGRSZWdpc3RyeS5jdXJyZW50W2ZpZWxkXS52YWxpZGF0ZSh2YWx1ZSkpO1xuICAgIH0pO1xuICB9LCBbXSk7XG4gIHZhciBydW5GaWVsZExldmVsVmFsaWRhdGlvbnMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgdmFyIGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uID0gT2JqZWN0LmtleXMoZmllbGRSZWdpc3RyeS5jdXJyZW50KS5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGZpZWxkUmVnaXN0cnkuY3VycmVudFtmXS52YWxpZGF0ZSk7XG4gICAgfSk7IC8vIENvbnN0cnVjdCBhbiBhcnJheSB3aXRoIGFsbCBvZiB0aGUgZmllbGQgdmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuICAgIHZhciBmaWVsZFZhbGlkYXRpb25zID0gZmllbGRLZXlzV2l0aFZhbGlkYXRpb24ubGVuZ3RoID4gMCA/IGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uLm1hcChmdW5jdGlvbiAoZikge1xuICAgICAgcmV0dXJuIHJ1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uKGYsIGdldEluKHZhbHVlcywgZikpO1xuICAgIH0pIDogW1Byb21pc2UucmVzb2x2ZSgnRE9fTk9UX0RFTEVURV9ZT1VfV0lMTF9CRV9GSVJFRCcpXTsgLy8gdXNlIHNwZWNpYWwgY2FzZSA7KVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGZpZWxkVmFsaWRhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGZpZWxkRXJyb3JzTGlzdCkge1xuICAgICAgcmV0dXJuIGZpZWxkRXJyb3JzTGlzdC5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIsIGluZGV4KSB7XG4gICAgICAgIGlmIChjdXJyID09PSAnRE9fTk9UX0RFTEVURV9ZT1VfV0lMTF9CRV9GSVJFRCcpIHtcbiAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyKSB7XG4gICAgICAgICAgcHJldiA9IHNldEluKHByZXYsIGZpZWxkS2V5c1dpdGhWYWxpZGF0aW9uW2luZGV4XSwgY3Vycik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0sIHt9KTtcbiAgICB9KTtcbiAgfSwgW3J1blNpbmdsZUZpZWxkTGV2ZWxWYWxpZGF0aW9uXSk7IC8vIFJ1biBhbGwgdmFsaWRhdGlvbnMgYW5kIHJldHVybiB0aGUgcmVzdWx0XG5cbiAgdmFyIHJ1bkFsbFZhbGlkYXRpb25zID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbcnVuRmllbGRMZXZlbFZhbGlkYXRpb25zKHZhbHVlcyksIHByb3BzLnZhbGlkYXRpb25TY2hlbWEgPyBydW5WYWxpZGF0aW9uU2NoZW1hKHZhbHVlcykgOiB7fSwgcHJvcHMudmFsaWRhdGUgPyBydW5WYWxpZGF0ZUhhbmRsZXIodmFsdWVzKSA6IHt9XSkudGhlbihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBmaWVsZEVycm9ycyA9IF9yZWYyWzBdLFxuICAgICAgICAgIHNjaGVtYUVycm9ycyA9IF9yZWYyWzFdLFxuICAgICAgICAgIHZhbGlkYXRlRXJyb3JzID0gX3JlZjJbMl07XG4gICAgICB2YXIgY29tYmluZWRFcnJvcnMgPSBkZWVwbWVyZ2UuYWxsKFtmaWVsZEVycm9ycywgc2NoZW1hRXJyb3JzLCB2YWxpZGF0ZUVycm9yc10sIHtcbiAgICAgICAgYXJyYXlNZXJnZTogYXJyYXlNZXJnZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29tYmluZWRFcnJvcnM7XG4gICAgfSk7XG4gIH0sIFtwcm9wcy52YWxpZGF0ZSwgcHJvcHMudmFsaWRhdGlvblNjaGVtYSwgcnVuRmllbGRMZXZlbFZhbGlkYXRpb25zLCBydW5WYWxpZGF0ZUhhbmRsZXIsIHJ1blZhbGlkYXRpb25TY2hlbWFdKTsgLy8gUnVuIGFsbCB2YWxpZGF0aW9ucyBtZXRob2RzIGFuZCB1cGRhdGUgc3RhdGUgYWNjb3JkaW5nbHlcblxuICB2YXIgdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIGlmICh2YWx1ZXMgPT09IHZvaWQgMCkge1xuICAgICAgdmFsdWVzID0gc3RhdGUudmFsdWVzO1xuICAgIH1cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfSVNWQUxJREFUSU5HJyxcbiAgICAgIHBheWxvYWQ6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gcnVuQWxsVmFsaWRhdGlvbnModmFsdWVzKS50aGVuKGZ1bmN0aW9uIChjb21iaW5lZEVycm9ycykge1xuICAgICAgaWYgKCEhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTRVRfSVNWQUxJREFUSU5HJyxcbiAgICAgICAgICBwYXlsb2FkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTRVRfRVJST1JTJyxcbiAgICAgICAgICBwYXlsb2FkOiBjb21iaW5lZEVycm9yc1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbWJpbmVkRXJyb3JzO1xuICAgIH0pO1xuICB9KTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmFsaWRhdGVPbk1vdW50ICYmIGlzTW91bnRlZC5jdXJyZW50ID09PSB0cnVlICYmIGlzRXF1YWwoaW5pdGlhbFZhbHVlcy5jdXJyZW50LCBwcm9wcy5pbml0aWFsVmFsdWVzKSkge1xuICAgICAgdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eShpbml0aWFsVmFsdWVzLmN1cnJlbnQpO1xuICAgIH1cbiAgfSwgW3ZhbGlkYXRlT25Nb3VudCwgdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eV0pO1xuICB2YXIgcmVzZXRGb3JtID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5leHRTdGF0ZSkge1xuICAgIHZhciB2YWx1ZXMgPSBuZXh0U3RhdGUgJiYgbmV4dFN0YXRlLnZhbHVlcyA/IG5leHRTdGF0ZS52YWx1ZXMgOiBpbml0aWFsVmFsdWVzLmN1cnJlbnQ7XG4gICAgdmFyIGVycm9ycyA9IG5leHRTdGF0ZSAmJiBuZXh0U3RhdGUuZXJyb3JzID8gbmV4dFN0YXRlLmVycm9ycyA6IGluaXRpYWxFcnJvcnMuY3VycmVudCA/IGluaXRpYWxFcnJvcnMuY3VycmVudCA6IHByb3BzLmluaXRpYWxFcnJvcnMgfHwge307XG4gICAgdmFyIHRvdWNoZWQgPSBuZXh0U3RhdGUgJiYgbmV4dFN0YXRlLnRvdWNoZWQgPyBuZXh0U3RhdGUudG91Y2hlZCA6IGluaXRpYWxUb3VjaGVkLmN1cnJlbnQgPyBpbml0aWFsVG91Y2hlZC5jdXJyZW50IDogcHJvcHMuaW5pdGlhbFRvdWNoZWQgfHwge307XG4gICAgdmFyIHN0YXR1cyA9IG5leHRTdGF0ZSAmJiBuZXh0U3RhdGUuc3RhdHVzID8gbmV4dFN0YXRlLnN0YXR1cyA6IGluaXRpYWxTdGF0dXMuY3VycmVudCA/IGluaXRpYWxTdGF0dXMuY3VycmVudCA6IHByb3BzLmluaXRpYWxTdGF0dXM7XG4gICAgaW5pdGlhbFZhbHVlcy5jdXJyZW50ID0gdmFsdWVzO1xuICAgIGluaXRpYWxFcnJvcnMuY3VycmVudCA9IGVycm9ycztcbiAgICBpbml0aWFsVG91Y2hlZC5jdXJyZW50ID0gdG91Y2hlZDtcbiAgICBpbml0aWFsU3RhdHVzLmN1cnJlbnQgPSBzdGF0dXM7XG5cbiAgICB2YXIgZGlzcGF0Y2hGbiA9IGZ1bmN0aW9uIGRpc3BhdGNoRm4oKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdSRVNFVF9GT1JNJyxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGlzU3VibWl0dGluZzogISFuZXh0U3RhdGUgJiYgISFuZXh0U3RhdGUuaXNTdWJtaXR0aW5nLFxuICAgICAgICAgIGVycm9yczogZXJyb3JzLFxuICAgICAgICAgIHRvdWNoZWQ6IHRvdWNoZWQsXG4gICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgaXNWYWxpZGF0aW5nOiAhIW5leHRTdGF0ZSAmJiAhIW5leHRTdGF0ZS5pc1ZhbGlkYXRpbmcsXG4gICAgICAgICAgc3VibWl0Q291bnQ6ICEhbmV4dFN0YXRlICYmICEhbmV4dFN0YXRlLnN1Ym1pdENvdW50ICYmIHR5cGVvZiBuZXh0U3RhdGUuc3VibWl0Q291bnQgPT09ICdudW1iZXInID8gbmV4dFN0YXRlLnN1Ym1pdENvdW50IDogMFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3BzLm9uUmVzZXQpIHtcbiAgICAgIHZhciBtYXliZVByb21pc2VkT25SZXNldCA9IHByb3BzLm9uUmVzZXQoc3RhdGUudmFsdWVzLCBpbXBlcmF0aXZlTWV0aG9kcyk7XG5cbiAgICAgIGlmIChpc1Byb21pc2UobWF5YmVQcm9taXNlZE9uUmVzZXQpKSB7XG4gICAgICAgIG1heWJlUHJvbWlzZWRPblJlc2V0LnRoZW4oZGlzcGF0Y2hGbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaEZuKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoRm4oKTtcbiAgICB9XG4gIH0sIFtwcm9wcy5pbml0aWFsRXJyb3JzLCBwcm9wcy5pbml0aWFsU3RhdHVzLCBwcm9wcy5pbml0aWFsVG91Y2hlZF0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc01vdW50ZWQuY3VycmVudCA9PT0gdHJ1ZSAmJiAhaXNFcXVhbChpbml0aWFsVmFsdWVzLmN1cnJlbnQsIHByb3BzLmluaXRpYWxWYWx1ZXMpKSB7XG4gICAgICBpZiAoZW5hYmxlUmVpbml0aWFsaXplKSB7XG4gICAgICAgIGluaXRpYWxWYWx1ZXMuY3VycmVudCA9IHByb3BzLmluaXRpYWxWYWx1ZXM7XG4gICAgICAgIHJlc2V0Rm9ybSgpO1xuXG4gICAgICAgIGlmICh2YWxpZGF0ZU9uTW91bnQpIHtcbiAgICAgICAgICB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5KGluaXRpYWxWYWx1ZXMuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtlbmFibGVSZWluaXRpYWxpemUsIHByb3BzLmluaXRpYWxWYWx1ZXMsIHJlc2V0Rm9ybSwgdmFsaWRhdGVPbk1vdW50LCB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGVuYWJsZVJlaW5pdGlhbGl6ZSAmJiBpc01vdW50ZWQuY3VycmVudCA9PT0gdHJ1ZSAmJiAhaXNFcXVhbChpbml0aWFsRXJyb3JzLmN1cnJlbnQsIHByb3BzLmluaXRpYWxFcnJvcnMpKSB7XG4gICAgICBpbml0aWFsRXJyb3JzLmN1cnJlbnQgPSBwcm9wcy5pbml0aWFsRXJyb3JzIHx8IGVtcHR5RXJyb3JzO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX0VSUk9SUycsXG4gICAgICAgIHBheWxvYWQ6IHByb3BzLmluaXRpYWxFcnJvcnMgfHwgZW1wdHlFcnJvcnNcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2VuYWJsZVJlaW5pdGlhbGl6ZSwgcHJvcHMuaW5pdGlhbEVycm9yc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChlbmFibGVSZWluaXRpYWxpemUgJiYgaXNNb3VudGVkLmN1cnJlbnQgPT09IHRydWUgJiYgIWlzRXF1YWwoaW5pdGlhbFRvdWNoZWQuY3VycmVudCwgcHJvcHMuaW5pdGlhbFRvdWNoZWQpKSB7XG4gICAgICBpbml0aWFsVG91Y2hlZC5jdXJyZW50ID0gcHJvcHMuaW5pdGlhbFRvdWNoZWQgfHwgZW1wdHlUb3VjaGVkO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX1RPVUNIRUQnLFxuICAgICAgICBwYXlsb2FkOiBwcm9wcy5pbml0aWFsVG91Y2hlZCB8fCBlbXB0eVRvdWNoZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2VuYWJsZVJlaW5pdGlhbGl6ZSwgcHJvcHMuaW5pdGlhbFRvdWNoZWRdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZW5hYmxlUmVpbml0aWFsaXplICYmIGlzTW91bnRlZC5jdXJyZW50ID09PSB0cnVlICYmICFpc0VxdWFsKGluaXRpYWxTdGF0dXMuY3VycmVudCwgcHJvcHMuaW5pdGlhbFN0YXR1cykpIHtcbiAgICAgIGluaXRpYWxTdGF0dXMuY3VycmVudCA9IHByb3BzLmluaXRpYWxTdGF0dXM7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfU1RBVFVTJyxcbiAgICAgICAgcGF5bG9hZDogcHJvcHMuaW5pdGlhbFN0YXR1c1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbZW5hYmxlUmVpbml0aWFsaXplLCBwcm9wcy5pbml0aWFsU3RhdHVzLCBwcm9wcy5pbml0aWFsVG91Y2hlZF0pO1xuICB2YXIgdmFsaWRhdGVGaWVsZCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAvLyBUaGlzIHdpbGwgZWZmaWNpZW50bHkgdmFsaWRhdGUgYSBzaW5nbGUgZmllbGQgYnkgYXZvaWRpbmcgc3RhdGVcbiAgICAvLyBjaGFuZ2VzIGlmIHRoZSB2YWxpZGF0aW9uIGZ1bmN0aW9uIGlzIHN5bmNocm9ub3VzLiBJdCdzIGRpZmZlcmVudCBmcm9tXG4gICAgLy8gd2hhdCBpcyBjYWxsZWQgd2hlbiB1c2luZyB2YWxpZGF0ZUZvcm0uXG4gICAgaWYgKGZpZWxkUmVnaXN0cnkuY3VycmVudFtuYW1lXSAmJiBpc0Z1bmN0aW9uKGZpZWxkUmVnaXN0cnkuY3VycmVudFtuYW1lXS52YWxpZGF0ZSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldEluKHN0YXRlLnZhbHVlcywgbmFtZSk7XG4gICAgICB2YXIgbWF5YmVQcm9taXNlID0gZmllbGRSZWdpc3RyeS5jdXJyZW50W25hbWVdLnZhbGlkYXRlKHZhbHVlKTtcblxuICAgICAgaWYgKGlzUHJvbWlzZShtYXliZVByb21pc2UpKSB7XG4gICAgICAgIC8vIE9ubHkgZmxpcCBpc1ZhbGlkYXRpbmcgaWYgdGhlIGZ1bmN0aW9uIGlzIGFzeW5jLlxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NFVF9JU1ZBTElEQVRJTkcnLFxuICAgICAgICAgIHBheWxvYWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYXliZVByb21pc2UudGhlbihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdTRVRfRklFTERfRVJST1InLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICBmaWVsZDogbmFtZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ1NFVF9JU1ZBTElEQVRJTkcnLFxuICAgICAgICAgICAgcGF5bG9hZDogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NFVF9GSUVMRF9FUlJPUicsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogbWF5YmVQcm9taXNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtYXliZVByb21pc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvcHMudmFsaWRhdGlvblNjaGVtYSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICAgIHBheWxvYWQ6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJ1blZhbGlkYXRpb25TY2hlbWEoc3RhdGUudmFsdWVzLCBuYW1lKS50aGVuKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICdTRVRfRklFTERfRVJST1InLFxuICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgIGZpZWxkOiBuYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGdldEluKGVycm9yLCBuYW1lKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnU0VUX0lTVkFMSURBVElORycsXG4gICAgICAgICAgcGF5bG9hZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xuICB2YXIgcmVnaXN0ZXJGaWVsZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lLCBfcmVmMykge1xuICAgIHZhciB2YWxpZGF0ZSA9IF9yZWYzLnZhbGlkYXRlO1xuICAgIGZpZWxkUmVnaXN0cnkuY3VycmVudFtuYW1lXSA9IHtcbiAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVxuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIHVucmVnaXN0ZXJGaWVsZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgZGVsZXRlIGZpZWxkUmVnaXN0cnkuY3VycmVudFtuYW1lXTtcbiAgfSwgW10pO1xuICB2YXIgc2V0VG91Y2hlZCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKHRvdWNoZWQsIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9UT1VDSEVEJyxcbiAgICAgIHBheWxvYWQ6IHRvdWNoZWRcbiAgICB9KTtcbiAgICB2YXIgd2lsbFZhbGlkYXRlID0gc2hvdWxkVmFsaWRhdGUgPT09IHVuZGVmaW5lZCA/IHZhbGlkYXRlT25CbHVyIDogc2hvdWxkVmFsaWRhdGU7XG4gICAgcmV0dXJuIHdpbGxWYWxpZGF0ZSA/IHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkoc3RhdGUudmFsdWVzKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICB9KTtcbiAgdmFyIHNldEVycm9ycyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChlcnJvcnMpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0VSUk9SUycsXG4gICAgICBwYXlsb2FkOiBlcnJvcnNcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgc2V0VmFsdWVzID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAodmFsdWVzLCBzaG91bGRWYWxpZGF0ZSkge1xuICAgIHZhciByZXNvbHZlZFZhbHVlcyA9IGlzRnVuY3Rpb24odmFsdWVzKSA/IHZhbHVlcyhzdGF0ZS52YWx1ZXMpIDogdmFsdWVzO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTRVRfVkFMVUVTJyxcbiAgICAgIHBheWxvYWQ6IHJlc29sdmVkVmFsdWVzXG4gICAgfSk7XG4gICAgdmFyIHdpbGxWYWxpZGF0ZSA9IHNob3VsZFZhbGlkYXRlID09PSB1bmRlZmluZWQgPyB2YWxpZGF0ZU9uQ2hhbmdlIDogc2hvdWxkVmFsaWRhdGU7XG4gICAgcmV0dXJuIHdpbGxWYWxpZGF0ZSA/IHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHkocmVzb2x2ZWRWYWx1ZXMpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xuICB2YXIgc2V0RmllbGRFcnJvciA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChmaWVsZCwgdmFsdWUpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0ZJRUxEX0VSUk9SJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgc2V0RmllbGRWYWx1ZSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0ZJRUxEX1ZBTFVFJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgd2lsbFZhbGlkYXRlID0gc2hvdWxkVmFsaWRhdGUgPT09IHVuZGVmaW5lZCA/IHZhbGlkYXRlT25DaGFuZ2UgOiBzaG91bGRWYWxpZGF0ZTtcbiAgICByZXR1cm4gd2lsbFZhbGlkYXRlID8gdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eShzZXRJbihzdGF0ZS52YWx1ZXMsIGZpZWxkLCB2YWx1ZSkpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xuICB2YXIgZXhlY3V0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChldmVudE9yVGV4dFZhbHVlLCBtYXliZVBhdGgpIHtcbiAgICAvLyBCeSBkZWZhdWx0LCBhc3N1bWUgdGhhdCB0aGUgZmlyc3QgYXJndW1lbnQgaXMgYSBzdHJpbmcuIFRoaXMgYWxsb3dzIHVzIHRvIHVzZVxuICAgIC8vIGhhbmRsZUNoYW5nZSB3aXRoIFJlYWN0IE5hdGl2ZSBhbmQgUmVhY3QgTmF0aXZlIFdlYidzIG9uQ2hhbmdlVGV4dCBwcm9wIHdoaWNoXG4gICAgLy8gcHJvdmlkZXMganVzdCB0aGUgdmFsdWUgb2YgdGhlIGlucHV0LlxuICAgIHZhciBmaWVsZCA9IG1heWJlUGF0aDtcbiAgICB2YXIgdmFsID0gZXZlbnRPclRleHRWYWx1ZTtcbiAgICB2YXIgcGFyc2VkOyAvLyBJZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGEgc3RyaW5nIHRob3VnaCwgaXQgaGFzIHRvIGJlIGEgc3ludGhldGljIFJlYWN0IEV2ZW50IChvciBhIGZha2Ugb25lKSxcbiAgICAvLyBzbyB3ZSBoYW5kbGUgbGlrZSB3ZSB3b3VsZCBhIG5vcm1hbCBIVE1MIGNoYW5nZSBldmVudC5cblxuICAgIGlmICghaXNTdHJpbmcoZXZlbnRPclRleHRWYWx1ZSkpIHtcbiAgICAgIC8vIElmIHdlIGNhbiwgcGVyc2lzdCB0aGUgZXZlbnRcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2V2ZW50cy5odG1sI2V2ZW50LXBvb2xpbmdcbiAgICAgIGlmIChldmVudE9yVGV4dFZhbHVlLnBlcnNpc3QpIHtcbiAgICAgICAgZXZlbnRPclRleHRWYWx1ZS5wZXJzaXN0KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0YXJnZXQgPSBldmVudE9yVGV4dFZhbHVlLnRhcmdldCA/IGV2ZW50T3JUZXh0VmFsdWUudGFyZ2V0IDogZXZlbnRPclRleHRWYWx1ZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgdmFyIHR5cGUgPSB0YXJnZXQudHlwZSxcbiAgICAgICAgICBuYW1lID0gdGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgaWQgPSB0YXJnZXQuaWQsXG4gICAgICAgICAgdmFsdWUgPSB0YXJnZXQudmFsdWUsXG4gICAgICAgICAgY2hlY2tlZCA9IHRhcmdldC5jaGVja2VkLFxuICAgICAgICAgIG91dGVySFRNTCA9IHRhcmdldC5vdXRlckhUTUwsXG4gICAgICAgICAgb3B0aW9ucyA9IHRhcmdldC5vcHRpb25zLFxuICAgICAgICAgIG11bHRpcGxlID0gdGFyZ2V0Lm11bHRpcGxlO1xuICAgICAgZmllbGQgPSBtYXliZVBhdGggPyBtYXliZVBhdGggOiBuYW1lID8gbmFtZSA6IGlkO1xuXG4gICAgICBpZiAoIWZpZWxkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICB3YXJuQWJvdXRNaXNzaW5nSWRlbnRpZmllcih7XG4gICAgICAgICAgaHRtbENvbnRlbnQ6IG91dGVySFRNTCxcbiAgICAgICAgICBkb2N1bWVudGF0aW9uQW5jaG9yTGluazogJ2hhbmRsZWNoYW5nZS1lLXJlYWN0Y2hhbmdlZXZlbnRhbnktLXZvaWQnLFxuICAgICAgICAgIGhhbmRsZXJOYW1lOiAnaGFuZGxlQ2hhbmdlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFsID0gL251bWJlcnxyYW5nZS8udGVzdCh0eXBlKSA/IChwYXJzZWQgPSBwYXJzZUZsb2F0KHZhbHVlKSwgaXNOYU4ocGFyc2VkKSA/ICcnIDogcGFyc2VkKSA6IC9jaGVja2JveC8udGVzdCh0eXBlKSAvLyBjaGVja2JveGVzXG4gICAgICA/IGdldFZhbHVlRm9yQ2hlY2tib3goZ2V0SW4oc3RhdGUudmFsdWVzLCBmaWVsZCksIGNoZWNrZWQsIHZhbHVlKSA6IG9wdGlvbnMgJiYgbXVsdGlwbGUgLy8gPHNlbGVjdCBtdWx0aXBsZT5cbiAgICAgID8gZ2V0U2VsZWN0ZWRWYWx1ZXMob3B0aW9ucykgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQpIHtcbiAgICAgIC8vIFNldCBmb3JtIGZpZWxkcyBieSBuYW1lXG4gICAgICBzZXRGaWVsZFZhbHVlKGZpZWxkLCB2YWwpO1xuICAgIH1cbiAgfSwgW3NldEZpZWxkVmFsdWUsIHN0YXRlLnZhbHVlc10pO1xuICB2YXIgaGFuZGxlQ2hhbmdlID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnRPclBhdGgpIHtcbiAgICBpZiAoaXNTdHJpbmcoZXZlbnRPclBhdGgpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBleGVjdXRlQ2hhbmdlKGV2ZW50LCBldmVudE9yUGF0aCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBleGVjdXRlQ2hhbmdlKGV2ZW50T3JQYXRoKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgc2V0RmllbGRUb3VjaGVkID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZmllbGQsIHRvdWNoZWQsIHNob3VsZFZhbGlkYXRlKSB7XG4gICAgaWYgKHRvdWNoZWQgPT09IHZvaWQgMCkge1xuICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogJ1NFVF9GSUVMRF9UT1VDSEVEJyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICB2YWx1ZTogdG91Y2hlZFxuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciB3aWxsVmFsaWRhdGUgPSBzaG91bGRWYWxpZGF0ZSA9PT0gdW5kZWZpbmVkID8gdmFsaWRhdGVPbkJsdXIgOiBzaG91bGRWYWxpZGF0ZTtcbiAgICByZXR1cm4gd2lsbFZhbGlkYXRlID8gdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eShzdGF0ZS52YWx1ZXMpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH0pO1xuICB2YXIgZXhlY3V0ZUJsdXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZSwgcGF0aCkge1xuICAgIGlmIChlLnBlcnNpc3QpIHtcbiAgICAgIGUucGVyc2lzdCgpO1xuICAgIH1cblxuICAgIHZhciBfZSR0YXJnZXQgPSBlLnRhcmdldCxcbiAgICAgICAgbmFtZSA9IF9lJHRhcmdldC5uYW1lLFxuICAgICAgICBpZCA9IF9lJHRhcmdldC5pZCxcbiAgICAgICAgb3V0ZXJIVE1MID0gX2UkdGFyZ2V0Lm91dGVySFRNTDtcbiAgICB2YXIgZmllbGQgPSBwYXRoID8gcGF0aCA6IG5hbWUgPyBuYW1lIDogaWQ7XG5cbiAgICBpZiAoIWZpZWxkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgd2FybkFib3V0TWlzc2luZ0lkZW50aWZpZXIoe1xuICAgICAgICBodG1sQ29udGVudDogb3V0ZXJIVE1MLFxuICAgICAgICBkb2N1bWVudGF0aW9uQW5jaG9yTGluazogJ2hhbmRsZWJsdXItZS1hbnktLXZvaWQnLFxuICAgICAgICBoYW5kbGVyTmFtZTogJ2hhbmRsZUJsdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRGaWVsZFRvdWNoZWQoZmllbGQsIHRydWUpO1xuICB9LCBbc2V0RmllbGRUb3VjaGVkXSk7XG4gIHZhciBoYW5kbGVCbHVyID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnRPclN0cmluZykge1xuICAgIGlmIChpc1N0cmluZyhldmVudE9yU3RyaW5nKSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gZXhlY3V0ZUJsdXIoZXZlbnQsIGV2ZW50T3JTdHJpbmcpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhlY3V0ZUJsdXIoZXZlbnRPclN0cmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHNldEZvcm1pa1N0YXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHN0YXRlT3JDYikge1xuICAgIGlmIChpc0Z1bmN0aW9uKHN0YXRlT3JDYikpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogJ1NFVF9GT1JNSUtfU1RBVEUnLFxuICAgICAgICBwYXlsb2FkOiBzdGF0ZU9yQ2JcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6ICdTRVRfRk9STUlLX1NUQVRFJyxcbiAgICAgICAgcGF5bG9hZDogZnVuY3Rpb24gcGF5bG9hZCgpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGVPckNiO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIHNldFN0YXR1cyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX1NUQVRVUycsXG4gICAgICBwYXlsb2FkOiBzdGF0dXNcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgc2V0U3VibWl0dGluZyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChpc1N1Ym1pdHRpbmcpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiAnU0VUX0lTU1VCTUlUVElORycsXG4gICAgICBwYXlsb2FkOiBpc1N1Ym1pdHRpbmdcbiAgICB9KTtcbiAgfSwgW10pO1xuICB2YXIgc3VibWl0Rm9ybSA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdTVUJNSVRfQVRURU1QVCdcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsaWRhdGVGb3JtV2l0aEhpZ2hQcmlvcml0eSgpLnRoZW4oZnVuY3Rpb24gKGNvbWJpbmVkRXJyb3JzKSB7XG4gICAgICAvLyBJbiBjYXNlIGFuIGVycm9yIHdhcyB0aHJvd24gYW5kIHBhc3NlZCB0byB0aGUgcmVzb2x2ZWQgUHJvbWlzZSxcbiAgICAgIC8vIGBjb21iaW5lZEVycm9yc2AgY2FuIGJlIGFuIGluc3RhbmNlIG9mIGFuIEVycm9yLiBXZSBuZWVkIHRvIGNoZWNrXG4gICAgICAvLyB0aGF0IGFuZCBhYm9ydCB0aGUgc3VibWl0LlxuICAgICAgLy8gSWYgd2UgZG9uJ3QgZG8gdGhhdCwgY2FsbGluZyBgT2JqZWN0LmtleXMobmV3IEVycm9yKCkpYCB5aWVsZHMgYW5cbiAgICAgIC8vIGVtcHR5IGFycmF5LCB3aGljaCBjYXVzZXMgdGhlIHZhbGlkYXRpb24gdG8gcGFzcyBhbmQgdGhlIGZvcm1cbiAgICAgIC8vIHRvIGJlIHN1Ym1pdHRlZC5cbiAgICAgIHZhciBpc0luc3RhbmNlT2ZFcnJvciA9IGNvbWJpbmVkRXJyb3JzIGluc3RhbmNlb2YgRXJyb3I7XG4gICAgICB2YXIgaXNBY3R1YWxseVZhbGlkID0gIWlzSW5zdGFuY2VPZkVycm9yICYmIE9iamVjdC5rZXlzKGNvbWJpbmVkRXJyb3JzKS5sZW5ndGggPT09IDA7XG5cbiAgICAgIGlmIChpc0FjdHVhbGx5VmFsaWQpIHtcbiAgICAgICAgLy8gUHJvY2VlZCB3aXRoIHN1Ym1pdC4uLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUbyByZXNwZWN0IHN5bmMgc3VibWl0IGZucywgd2UgY2FuJ3Qgc2ltcGx5IHdyYXAgZXhlY3V0ZVN1Ym1pdCBpbiBhIHByb21pc2UgYW5kXG4gICAgICAgIC8vIF9hbHdheXNfIGRpc3BhdGNoIFNVQk1JVF9TVUNDRVNTIGJlY2F1c2UgaXNTdWJtaXR0aW5nIHdvdWxkIHRoZW4gYWx3YXlzIGJlIGZhbHNlLlxuICAgICAgICAvLyBUaGlzIHdvdWxkIGJlIGZpbmUgaW4gc2ltcGxlIGNhc2VzLCBidXQgbWFrZSBpdCBpbXBvc3NpYmxlIHRvIGRpc2FibGUgc3VibWl0XG4gICAgICAgIC8vIGJ1dHRvbnMgd2hlcmUgcGVvcGxlIHVzZSBjYWxsYmFja3Mgb3IgcHJvbWlzZXMgYXMgc2lkZSBlZmZlY3RzICh3aGljaCBpcyBiYXNpY2FsbHlcbiAgICAgICAgLy8gYWxsIG9mIHYxIEZvcm1payBjb2RlKS4gSW5zdGVhZCwgcmVjYWxsIHRoYXQgd2UgYXJlIGluc2lkZSBvZiBhIHByb21pc2UgY2hhaW4gYWxyZWFkeSxcbiAgICAgICAgLy8gIHNvIHdlIGNhbiB0cnkvY2F0Y2ggZXhlY3V0ZVN1Ym1pdCgpLCBpZiBpdCByZXR1cm5zIHVuZGVmaW5lZCwgdGhlbiBqdXN0IGJhaWwuXG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBlcnJvcnMsIHRocm93IGVtLiBPdGhlcndpc2UsIHdyYXAgZXhlY3V0ZVN1Ym1pdCBpbiBhIHByb21pc2UgYW5kIGhhbmRsZVxuICAgICAgICAvLyBjbGVhbnVwIG9mIGlzU3VibWl0dGluZyBvbiBiZWhhbGYgb2YgdGhlIGNvbnN1bWVyLlxuICAgICAgICB2YXIgcHJvbWlzZU9yVW5kZWZpbmVkO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcHJvbWlzZU9yVW5kZWZpbmVkID0gZXhlY3V0ZVN1Ym1pdCgpOyAvLyBCYWlsIGlmIGl0J3Mgc3luYywgY29uc3VtZXIgaXMgcmVzcG9uc2libGUgZm9yIGNsZWFuaW5nIHVwXG4gICAgICAgICAgLy8gdmlhIHNldFN1Ym1pdHRpbmcoZmFsc2UpXG5cbiAgICAgICAgICBpZiAocHJvbWlzZU9yVW5kZWZpbmVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHByb21pc2VPclVuZGVmaW5lZCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgaWYgKCEhaXNNb3VudGVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1NVQk1JVF9TVUNDRVNTJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoX2Vycm9ycykge1xuICAgICAgICAgIGlmICghIWlzTW91bnRlZC5jdXJyZW50KSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdTVUJNSVRfRkFJTFVSRSdcbiAgICAgICAgICAgIH0pOyAvLyBUaGlzIGlzIGEgbGVnaXQgZXJyb3IgcmVqZWN0ZWQgYnkgdGhlIG9uU3VibWl0IGZuXG4gICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCB3YW50IHRvIGJyZWFrIHRoZSBwcm9taXNlIGNoYWluXG5cbiAgICAgICAgICAgIHRocm93IF9lcnJvcnM7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoISFpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgICAvLyBeXl4gTWFrZSBzdXJlIEZvcm1payBpcyBzdGlsbCBtb3VudGVkIGJlZm9yZSB1cGRhdGluZyBzdGF0ZVxuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ1NVQk1JVF9GQUlMVVJFJ1xuICAgICAgICB9KTsgLy8gdGhyb3cgY29tYmluZWRFcnJvcnM7XG5cbiAgICAgICAgaWYgKGlzSW5zdGFuY2VPZkVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgY29tYmluZWRFcnJvcnM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0pO1xuICB9KTtcbiAgdmFyIGhhbmRsZVN1Ym1pdCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSAmJiBlLnByZXZlbnREZWZhdWx0ICYmIGlzRnVuY3Rpb24oZS5wcmV2ZW50RGVmYXVsdCkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoZSAmJiBlLnN0b3BQcm9wYWdhdGlvbiAmJiBpc0Z1bmN0aW9uKGUuc3RvcFByb3BhZ2F0aW9uKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IC8vIFdhcm4gaWYgZm9ybSBzdWJtaXNzaW9uIGlzIHRyaWdnZXJlZCBieSBhIDxidXR0b24+IHdpdGhvdXQgYVxuICAgIC8vIHNwZWNpZmllZCBgdHlwZWAgYXR0cmlidXRlIGR1cmluZyBkZXZlbG9wbWVudC4gVGhpcyBtaXRpZ2F0ZXNcbiAgICAvLyBhIGNvbW1vbiBnb3RjaGEgaW4gZm9ybXMgd2l0aCBib3RoIHJlc2V0IGFuZCBzdWJtaXQgYnV0dG9ucyxcbiAgICAvLyB3aGVyZSB0aGUgZGV2IGZvcmdldHMgdG8gYWRkIHR5cGU9XCJidXR0b25cIiB0byB0aGUgcmVzZXQgYnV0dG9uLlxuXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFNhZmVseSBnZXQgdGhlIGFjdGl2ZSBlbGVtZW50ICh3b3JrcyB3aXRoIElFKVxuICAgICAgdmFyIGFjdGl2ZUVsZW1lbnQgPSBnZXRBY3RpdmVFbGVtZW50KCk7XG5cbiAgICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBudWxsICYmIGFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgICAgICAhKGFjdGl2ZUVsZW1lbnQuYXR0cmlidXRlcyAmJiBhY3RpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZ2V0TmFtZWRJdGVtKCd0eXBlJykpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHN1Ym1pdHRlZCBhIEZvcm1payBmb3JtIHVzaW5nIGEgYnV0dG9uIHdpdGggYW4gdW5zcGVjaWZpZWQgYHR5cGVgIGF0dHJpYnV0ZS4gIE1vc3QgYnJvd3NlcnMgZGVmYXVsdCBidXR0b24gZWxlbWVudHMgdG8gYHR5cGU9XCJzdWJtaXRcImAuIElmIHRoaXMgaXMgbm90IGEgc3VibWl0IGJ1dHRvbiwgcGxlYXNlIGFkZCBgdHlwZT1cImJ1dHRvblwiYC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3VibWl0Rm9ybSgpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgY29uc29sZS53YXJuKFwiV2FybmluZzogQW4gdW5oYW5kbGVkIGVycm9yIHdhcyBjYXVnaHQgZnJvbSBzdWJtaXRGb3JtKClcIiwgcmVhc29uKTtcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBpbXBlcmF0aXZlTWV0aG9kcyA9IHtcbiAgICByZXNldEZvcm06IHJlc2V0Rm9ybSxcbiAgICB2YWxpZGF0ZUZvcm06IHZhbGlkYXRlRm9ybVdpdGhIaWdoUHJpb3JpdHksXG4gICAgdmFsaWRhdGVGaWVsZDogdmFsaWRhdGVGaWVsZCxcbiAgICBzZXRFcnJvcnM6IHNldEVycm9ycyxcbiAgICBzZXRGaWVsZEVycm9yOiBzZXRGaWVsZEVycm9yLFxuICAgIHNldEZpZWxkVG91Y2hlZDogc2V0RmllbGRUb3VjaGVkLFxuICAgIHNldEZpZWxkVmFsdWU6IHNldEZpZWxkVmFsdWUsXG4gICAgc2V0U3RhdHVzOiBzZXRTdGF0dXMsXG4gICAgc2V0U3VibWl0dGluZzogc2V0U3VibWl0dGluZyxcbiAgICBzZXRUb3VjaGVkOiBzZXRUb3VjaGVkLFxuICAgIHNldFZhbHVlczogc2V0VmFsdWVzLFxuICAgIHNldEZvcm1pa1N0YXRlOiBzZXRGb3JtaWtTdGF0ZSxcbiAgICBzdWJtaXRGb3JtOiBzdWJtaXRGb3JtXG4gIH07XG4gIHZhciBleGVjdXRlU3VibWl0ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9uU3VibWl0KHN0YXRlLnZhbHVlcywgaW1wZXJhdGl2ZU1ldGhvZHMpO1xuICB9KTtcbiAgdmFyIGhhbmRsZVJlc2V0ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlICYmIGUucHJldmVudERlZmF1bHQgJiYgaXNGdW5jdGlvbihlLnByZXZlbnREZWZhdWx0KSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChlICYmIGUuc3RvcFByb3BhZ2F0aW9uICYmIGlzRnVuY3Rpb24oZS5zdG9wUHJvcGFnYXRpb24pKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpO1xuICB9KTtcbiAgdmFyIGdldEZpZWxkTWV0YSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBnZXRJbihzdGF0ZS52YWx1ZXMsIG5hbWUpLFxuICAgICAgZXJyb3I6IGdldEluKHN0YXRlLmVycm9ycywgbmFtZSksXG4gICAgICB0b3VjaGVkOiAhIWdldEluKHN0YXRlLnRvdWNoZWQsIG5hbWUpLFxuICAgICAgaW5pdGlhbFZhbHVlOiBnZXRJbihpbml0aWFsVmFsdWVzLmN1cnJlbnQsIG5hbWUpLFxuICAgICAgaW5pdGlhbFRvdWNoZWQ6ICEhZ2V0SW4oaW5pdGlhbFRvdWNoZWQuY3VycmVudCwgbmFtZSksXG4gICAgICBpbml0aWFsRXJyb3I6IGdldEluKGluaXRpYWxFcnJvcnMuY3VycmVudCwgbmFtZSlcbiAgICB9O1xuICB9LCBbc3RhdGUuZXJyb3JzLCBzdGF0ZS50b3VjaGVkLCBzdGF0ZS52YWx1ZXNdKTtcbiAgdmFyIGdldEZpZWxkSGVscGVycyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSwgc2hvdWxkVmFsaWRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHNldEZpZWxkVmFsdWUobmFtZSwgdmFsdWUsIHNob3VsZFZhbGlkYXRlKTtcbiAgICAgIH0sXG4gICAgICBzZXRUb3VjaGVkOiBmdW5jdGlvbiBzZXRUb3VjaGVkKHZhbHVlLCBzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gc2V0RmllbGRUb3VjaGVkKG5hbWUsIHZhbHVlLCBzaG91bGRWYWxpZGF0ZSk7XG4gICAgICB9LFxuICAgICAgc2V0RXJyb3I6IGZ1bmN0aW9uIHNldEVycm9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBzZXRGaWVsZEVycm9yKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbc2V0RmllbGRWYWx1ZSwgc2V0RmllbGRUb3VjaGVkLCBzZXRGaWVsZEVycm9yXSk7XG4gIHZhciBnZXRGaWVsZFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5hbWVPck9wdGlvbnMpIHtcbiAgICB2YXIgaXNBbk9iamVjdCA9IGlzT2JqZWN0KG5hbWVPck9wdGlvbnMpO1xuICAgIHZhciBuYW1lID0gaXNBbk9iamVjdCA/IG5hbWVPck9wdGlvbnMubmFtZSA6IG5hbWVPck9wdGlvbnM7XG4gICAgdmFyIHZhbHVlU3RhdGUgPSBnZXRJbihzdGF0ZS52YWx1ZXMsIG5hbWUpO1xuICAgIHZhciBmaWVsZCA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICB2YWx1ZTogdmFsdWVTdGF0ZSxcbiAgICAgIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgICBvbkJsdXI6IGhhbmRsZUJsdXJcbiAgICB9O1xuXG4gICAgaWYgKGlzQW5PYmplY3QpIHtcbiAgICAgIHZhciB0eXBlID0gbmFtZU9yT3B0aW9ucy50eXBlLFxuICAgICAgICAgIHZhbHVlUHJvcCA9IG5hbWVPck9wdGlvbnMudmFsdWUsXG4gICAgICAgICAgaXMgPSBuYW1lT3JPcHRpb25zLmFzLFxuICAgICAgICAgIG11bHRpcGxlID0gbmFtZU9yT3B0aW9ucy5tdWx0aXBsZTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgaWYgKHZhbHVlUHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZmllbGQuY2hlY2tlZCA9ICEhdmFsdWVTdGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZC5jaGVja2VkID0gISEoQXJyYXkuaXNBcnJheSh2YWx1ZVN0YXRlKSAmJiB+dmFsdWVTdGF0ZS5pbmRleE9mKHZhbHVlUHJvcCkpO1xuICAgICAgICAgIGZpZWxkLnZhbHVlID0gdmFsdWVQcm9wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgZmllbGQuY2hlY2tlZCA9IHZhbHVlU3RhdGUgPT09IHZhbHVlUHJvcDtcbiAgICAgICAgZmllbGQudmFsdWUgPSB2YWx1ZVByb3A7XG4gICAgICB9IGVsc2UgaWYgKGlzID09PSAnc2VsZWN0JyAmJiBtdWx0aXBsZSkge1xuICAgICAgICBmaWVsZC52YWx1ZSA9IGZpZWxkLnZhbHVlIHx8IFtdO1xuICAgICAgICBmaWVsZC5tdWx0aXBsZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9LCBbaGFuZGxlQmx1ciwgaGFuZGxlQ2hhbmdlLCBzdGF0ZS52YWx1ZXNdKTtcbiAgdmFyIGRpcnR5ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICFpc0VxdWFsKGluaXRpYWxWYWx1ZXMuY3VycmVudCwgc3RhdGUudmFsdWVzKTtcbiAgfSwgW2luaXRpYWxWYWx1ZXMuY3VycmVudCwgc3RhdGUudmFsdWVzXSk7XG4gIHZhciBpc1ZhbGlkID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpc0luaXRpYWxWYWxpZCAhPT0gJ3VuZGVmaW5lZCcgPyBkaXJ0eSA/IHN0YXRlLmVycm9ycyAmJiBPYmplY3Qua2V5cyhzdGF0ZS5lcnJvcnMpLmxlbmd0aCA9PT0gMCA6IGlzSW5pdGlhbFZhbGlkICE9PSBmYWxzZSAmJiBpc0Z1bmN0aW9uKGlzSW5pdGlhbFZhbGlkKSA/IGlzSW5pdGlhbFZhbGlkKHByb3BzKSA6IGlzSW5pdGlhbFZhbGlkIDogc3RhdGUuZXJyb3JzICYmIE9iamVjdC5rZXlzKHN0YXRlLmVycm9ycykubGVuZ3RoID09PSAwO1xuICB9LCBbaXNJbml0aWFsVmFsaWQsIGRpcnR5LCBzdGF0ZS5lcnJvcnMsIHByb3BzXSk7XG5cbiAgdmFyIGN0eCA9IF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgIGluaXRpYWxWYWx1ZXM6IGluaXRpYWxWYWx1ZXMuY3VycmVudCxcbiAgICBpbml0aWFsRXJyb3JzOiBpbml0aWFsRXJyb3JzLmN1cnJlbnQsXG4gICAgaW5pdGlhbFRvdWNoZWQ6IGluaXRpYWxUb3VjaGVkLmN1cnJlbnQsXG4gICAgaW5pdGlhbFN0YXR1czogaW5pdGlhbFN0YXR1cy5jdXJyZW50LFxuICAgIGhhbmRsZUJsdXI6IGhhbmRsZUJsdXIsXG4gICAgaGFuZGxlQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsXG4gICAgaGFuZGxlUmVzZXQ6IGhhbmRsZVJlc2V0LFxuICAgIGhhbmRsZVN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIHJlc2V0Rm9ybTogcmVzZXRGb3JtLFxuICAgIHNldEVycm9yczogc2V0RXJyb3JzLFxuICAgIHNldEZvcm1pa1N0YXRlOiBzZXRGb3JtaWtTdGF0ZSxcbiAgICBzZXRGaWVsZFRvdWNoZWQ6IHNldEZpZWxkVG91Y2hlZCxcbiAgICBzZXRGaWVsZFZhbHVlOiBzZXRGaWVsZFZhbHVlLFxuICAgIHNldEZpZWxkRXJyb3I6IHNldEZpZWxkRXJyb3IsXG4gICAgc2V0U3RhdHVzOiBzZXRTdGF0dXMsXG4gICAgc2V0U3VibWl0dGluZzogc2V0U3VibWl0dGluZyxcbiAgICBzZXRUb3VjaGVkOiBzZXRUb3VjaGVkLFxuICAgIHNldFZhbHVlczogc2V0VmFsdWVzLFxuICAgIHN1Ym1pdEZvcm06IHN1Ym1pdEZvcm0sXG4gICAgdmFsaWRhdGVGb3JtOiB2YWxpZGF0ZUZvcm1XaXRoSGlnaFByaW9yaXR5LFxuICAgIHZhbGlkYXRlRmllbGQ6IHZhbGlkYXRlRmllbGQsXG4gICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICBkaXJ0eTogZGlydHksXG4gICAgdW5yZWdpc3RlckZpZWxkOiB1bnJlZ2lzdGVyRmllbGQsXG4gICAgcmVnaXN0ZXJGaWVsZDogcmVnaXN0ZXJGaWVsZCxcbiAgICBnZXRGaWVsZFByb3BzOiBnZXRGaWVsZFByb3BzLFxuICAgIGdldEZpZWxkTWV0YTogZ2V0RmllbGRNZXRhLFxuICAgIGdldEZpZWxkSGVscGVyczogZ2V0RmllbGRIZWxwZXJzLFxuICAgIHZhbGlkYXRlT25CbHVyOiB2YWxpZGF0ZU9uQmx1cixcbiAgICB2YWxpZGF0ZU9uQ2hhbmdlOiB2YWxpZGF0ZU9uQ2hhbmdlLFxuICAgIHZhbGlkYXRlT25Nb3VudDogdmFsaWRhdGVPbk1vdW50XG4gIH0pO1xuXG4gIHJldHVybiBjdHg7XG59XG5mdW5jdGlvbiBGb3JtaWsocHJvcHMpIHtcbiAgdmFyIGZvcm1pa2JhZyA9IHVzZUZvcm1payhwcm9wcyk7XG4gIHZhciBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgcmVuZGVyID0gcHJvcHMucmVuZGVyLFxuICAgICAgaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZjsgLy8gVGhpcyBhbGxvd3MgZm9sa3MgdG8gcGFzcyBhIHJlZiB0byA8Rm9ybWlrIC8+XG5cbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShpbm5lclJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmb3JtaWtiYWc7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgISFwcm9wcy5yZW5kZXIgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiPEZvcm1payByZW5kZXI+IGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgRm9ybWlrLiBQbGVhc2UgdXNlIGEgY2hpbGQgY2FsbGJhY2sgZnVuY3Rpb24gaW5zdGVhZC4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIHJlcGxhY2UgPEZvcm1payByZW5kZXI9eyhwcm9wcykgPT4gLi4ufSAvPiB3aXRoIDxGb3JtaWs+eyhwcm9wcykgPT4gLi4ufTwvRm9ybWlrPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KEZvcm1pa1Byb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGZvcm1pa2JhZ1xuICB9LCBjb21wb25lbnQgPyBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgZm9ybWlrYmFnKSA6IHJlbmRlciA/IHJlbmRlcihmb3JtaWtiYWcpIDogY2hpbGRyZW4gLy8gY2hpbGRyZW4gY29tZSBsYXN0LCBhbHdheXMgY2FsbGVkXG4gID8gaXNGdW5jdGlvbihjaGlsZHJlbikgPyBjaGlsZHJlbihmb3JtaWtiYWcpIDogIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikgPyBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGwgOiBudWxsKTtcbn1cblxuZnVuY3Rpb24gd2FybkFib3V0TWlzc2luZ0lkZW50aWZpZXIoX3JlZjQpIHtcbiAgdmFyIGh0bWxDb250ZW50ID0gX3JlZjQuaHRtbENvbnRlbnQsXG4gICAgICBkb2N1bWVudGF0aW9uQW5jaG9yTGluayA9IF9yZWY0LmRvY3VtZW50YXRpb25BbmNob3JMaW5rLFxuICAgICAgaGFuZGxlck5hbWUgPSBfcmVmNC5oYW5kbGVyTmFtZTtcbiAgY29uc29sZS53YXJuKFwiV2FybmluZzogRm9ybWlrIGNhbGxlZCBgXCIgKyBoYW5kbGVyTmFtZSArIFwiYCwgYnV0IHlvdSBmb3Jnb3QgdG8gcGFzcyBhbiBgaWRgIG9yIGBuYW1lYCBhdHRyaWJ1dGUgdG8geW91ciBpbnB1dDpcXG4gICAgXCIgKyBodG1sQ29udGVudCArIFwiXFxuICAgIEZvcm1payBjYW5ub3QgZGV0ZXJtaW5lIHdoaWNoIHZhbHVlIHRvIHVwZGF0ZS4gRm9yIG1vcmUgaW5mbyBzZWUgaHR0cHM6Ly9mb3JtaWsub3JnL2RvY3MvYXBpL2Zvcm1payNcIiArIGRvY3VtZW50YXRpb25BbmNob3JMaW5rICsgXCJcXG4gIFwiKTtcbn1cbi8qKlxyXG4gKiBUcmFuc2Zvcm0gWXVwIFZhbGlkYXRpb25FcnJvciB0byBhIG1vcmUgdXNhYmxlIG9iamVjdFxyXG4gKi9cblxuXG5mdW5jdGlvbiB5dXBUb0Zvcm1FcnJvcnMoeXVwRXJyb3IpIHtcbiAgdmFyIGVycm9ycyA9IHt9O1xuXG4gIGlmICh5dXBFcnJvci5pbm5lcikge1xuICAgIGlmICh5dXBFcnJvci5pbm5lci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBzZXRJbihlcnJvcnMsIHl1cEVycm9yLnBhdGgsIHl1cEVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHl1cEVycm9yLmlubmVyLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgICAgdmFyIF9yZWY1O1xuXG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgICBfcmVmNSA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmNSA9IF9pLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXJyID0gX3JlZjU7XG5cbiAgICAgIGlmICghZ2V0SW4oZXJyb3JzLCBlcnIucGF0aCkpIHtcbiAgICAgICAgZXJyb3JzID0gc2V0SW4oZXJyb3JzLCBlcnIucGF0aCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59XG4vKipcclxuICogVmFsaWRhdGUgYSB5dXAgc2NoZW1hLlxyXG4gKi9cblxuZnVuY3Rpb24gdmFsaWRhdGVZdXBTY2hlbWEodmFsdWVzLCBzY2hlbWEsIHN5bmMsIGNvbnRleHQpIHtcbiAgaWYgKHN5bmMgPT09IHZvaWQgMCkge1xuICAgIHN5bmMgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkVmFsdWVzID0gcHJlcGFyZURhdGFGb3JWYWxpZGF0aW9uKHZhbHVlcyk7XG4gIHJldHVybiBzY2hlbWFbc3luYyA/ICd2YWxpZGF0ZVN5bmMnIDogJ3ZhbGlkYXRlJ10obm9ybWFsaXplZFZhbHVlcywge1xuICAgIGFib3J0RWFybHk6IGZhbHNlLFxuICAgIGNvbnRleHQ6IGNvbnRleHQgfHwgbm9ybWFsaXplZFZhbHVlc1xuICB9KTtcbn1cbi8qKlxyXG4gKiBSZWN1cnNpdmVseSBwcmVwYXJlIHZhbHVlcy5cclxuICovXG5cbmZ1bmN0aW9uIHByZXBhcmVEYXRhRm9yVmFsaWRhdGlvbih2YWx1ZXMpIHtcbiAgdmFyIGRhdGEgPSBBcnJheS5pc0FycmF5KHZhbHVlcykgPyBbXSA6IHt9O1xuXG4gIGZvciAodmFyIGsgaW4gdmFsdWVzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZXMsIGspKSB7XG4gICAgICB2YXIga2V5ID0gU3RyaW5nKGspO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXNba2V5XSkgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YVtrZXldID0gdmFsdWVzW2tleV0ubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSA9PT0gdHJ1ZSB8fCBpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXBhcmVEYXRhRm9yVmFsaWRhdGlvbih2YWx1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gJycgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlc1trZXldKSkge1xuICAgICAgICBkYXRhW2tleV0gPSBwcmVwYXJlRGF0YUZvclZhbGlkYXRpb24odmFsdWVzW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVtrZXldID0gdmFsdWVzW2tleV0gIT09ICcnID8gdmFsdWVzW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG4vKipcclxuICogZGVlcG1lcmdlIGFycmF5IG1lcmdpbmcgYWxnb3JpdGhtXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9LeWxlQU1hdGhld3MvZGVlcG1lcmdlI2NvbWJpbmUtYXJyYXlcclxuICovXG5cbmZ1bmN0aW9uIGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG4gIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uIG1lcmdlKGUsIGkpIHtcbiAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uW2ldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIGNsb25lUmVxdWVzdGVkID0gb3B0aW9ucy5jbG9uZSAhPT0gZmFsc2U7XG4gICAgICB2YXIgc2hvdWxkQ2xvbmUgPSBjbG9uZVJlcXVlc3RlZCAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KGUpO1xuICAgICAgZGVzdGluYXRpb25baV0gPSBzaG91bGRDbG9uZSA/IGRlZXBtZXJnZShBcnJheS5pc0FycmF5KGUpID8gW10gOiB7fSwgZSwgb3B0aW9ucykgOiBlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChlKSkge1xuICAgICAgZGVzdGluYXRpb25baV0gPSBkZWVwbWVyZ2UodGFyZ2V0W2ldLCBlLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHRhcmdldC5pbmRleE9mKGUpID09PSAtMSkge1xuICAgICAgZGVzdGluYXRpb24ucHVzaChlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGVzdGluYXRpb247XG59XG4vKiogUmV0dXJuIG11bHRpIHNlbGVjdCB2YWx1ZXMgYmFzZWQgb24gYW4gYXJyYXkgb2Ygb3B0aW9ucyAqL1xuXG5cbmZ1bmN0aW9uIGdldFNlbGVjdGVkVmFsdWVzKG9wdGlvbnMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20ob3B0aW9ucykuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5zZWxlY3RlZDtcbiAgfSkubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC52YWx1ZTtcbiAgfSk7XG59XG4vKiogUmV0dXJuIHRoZSBuZXh0IHZhbHVlIGZvciBhIGNoZWNrYm94ICovXG5cblxuZnVuY3Rpb24gZ2V0VmFsdWVGb3JDaGVja2JveChjdXJyZW50VmFsdWUsIGNoZWNrZWQsIHZhbHVlUHJvcCkge1xuICAvLyBJZiB0aGUgY3VycmVudCB2YWx1ZSB3YXMgYSBib29sZWFuLCByZXR1cm4gYSBib29sZWFuXG4gIGlmICh0eXBlb2YgY3VycmVudFZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gQm9vbGVhbihjaGVja2VkKTtcbiAgfSAvLyBJZiB0aGUgY3VycmVudFZhbHVlIHdhcyBub3QgYSBib29sZWFuIHdlIHdhbnQgdG8gcmV0dXJuIGFuIGFycmF5XG5cblxuICB2YXIgY3VycmVudEFycmF5T2ZWYWx1ZXMgPSBbXTtcbiAgdmFyIGlzVmFsdWVJbkFycmF5ID0gZmFsc2U7XG4gIHZhciBpbmRleCA9IC0xO1xuXG4gIGlmICghQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuICAgIGlmICghdmFsdWVQcm9wIHx8IHZhbHVlUHJvcCA9PSAndHJ1ZScgfHwgdmFsdWVQcm9wID09ICdmYWxzZScpIHtcbiAgICAgIHJldHVybiBCb29sZWFuKGNoZWNrZWQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY3VycmVudCB2YWx1ZSBpcyBhbHJlYWR5IGFuIGFycmF5LCB1c2UgaXRcbiAgICBjdXJyZW50QXJyYXlPZlZhbHVlcyA9IGN1cnJlbnRWYWx1ZTtcbiAgICBpbmRleCA9IGN1cnJlbnRWYWx1ZS5pbmRleE9mKHZhbHVlUHJvcCk7XG4gICAgaXNWYWx1ZUluQXJyYXkgPSBpbmRleCA+PSAwO1xuICB9IC8vIElmIHRoZSBjaGVja2JveCB3YXMgY2hlY2tlZCBhbmQgdGhlIHZhbHVlIGlzIG5vdCBhbHJlYWR5IHByZXNlbnQgaW4gdGhlIGFyYXkgd2Ugd2FudCB0byBhZGQgdGhlIG5ldyB2YWx1ZSB0byB0aGUgYXJyYXkgb2YgdmFsdWVzXG5cblxuICBpZiAoY2hlY2tlZCAmJiB2YWx1ZVByb3AgJiYgIWlzVmFsdWVJbkFycmF5KSB7XG4gICAgcmV0dXJuIGN1cnJlbnRBcnJheU9mVmFsdWVzLmNvbmNhdCh2YWx1ZVByb3ApO1xuICB9IC8vIElmIHRoZSBjaGVja2JveCB3YXMgdW5jaGVja2VkIGFuZCB0aGUgdmFsdWUgaXMgbm90IGluIHRoZSBhcnJheSwgc2ltcGx5IHJldHVybiB0aGUgYWxyZWFkeSBleGlzdGluZyBhcnJheSBvZiB2YWx1ZXNcblxuXG4gIGlmICghaXNWYWx1ZUluQXJyYXkpIHtcbiAgICByZXR1cm4gY3VycmVudEFycmF5T2ZWYWx1ZXM7XG4gIH0gLy8gSWYgdGhlIGNoZWNrYm94IHdhcyB1bmNoZWNrZWQgYW5kIHRoZSB2YWx1ZSBpcyBpbiB0aGUgYXJyYXksIHJlbW92ZSB0aGUgdmFsdWUgYW5kIHJldHVybiB0aGUgYXJyYXlcblxuXG4gIHJldHVybiBjdXJyZW50QXJyYXlPZlZhbHVlcy5zbGljZSgwLCBpbmRleCkuY29uY2F0KGN1cnJlbnRBcnJheU9mVmFsdWVzLnNsaWNlKGluZGV4ICsgMSkpO1xufSAvLyBSZWFjdCBjdXJyZW50bHkgdGhyb3dzIGEgd2FybmluZyB3aGVuIHVzaW5nIHVzZUxheW91dEVmZmVjdCBvbiB0aGUgc2VydmVyLlxuLy8gVG8gZ2V0IGFyb3VuZCBpdCwgd2UgY2FuIGNvbmRpdGlvbmFsbHkgdXNlRWZmZWN0IG9uIHRoZSBzZXJ2ZXIgKG5vLW9wKSBhbmRcbi8vIHVzZUxheW91dEVmZmVjdCBpbiB0aGUgYnJvd3Nlci5cbi8vIEBzZWUgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ2FlYXJvbi9lN2Q5N2NkZjM4YTI5MDc5MjRlYTEyZTRlYmRmM2M4NVxuXG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDtcblxuZnVuY3Rpb24gdXNlRXZlbnRDYWxsYmFjayhmbikge1xuICB2YXIgcmVmID0gdXNlUmVmKGZuKTsgLy8gd2UgY29weSBhIHJlZiB0byB0aGUgY2FsbGJhY2sgc2NvcGVkIHRvIHRoZSBjdXJyZW50IHN0YXRlL3Byb3BzIG9uIGVhY2ggcmVuZGVyXG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVmLmN1cnJlbnQgPSBmbjtcbiAgfSk7XG4gIHJldHVybiB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiByZWYuY3VycmVudC5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHVzZUZpZWxkKHByb3BzT3JGaWVsZE5hbWUpIHtcbiAgdmFyIGZvcm1payA9IHVzZUZvcm1pa0NvbnRleHQoKTtcbiAgdmFyIGdldEZpZWxkUHJvcHMgPSBmb3JtaWsuZ2V0RmllbGRQcm9wcyxcbiAgICAgIGdldEZpZWxkTWV0YSA9IGZvcm1pay5nZXRGaWVsZE1ldGEsXG4gICAgICBnZXRGaWVsZEhlbHBlcnMgPSBmb3JtaWsuZ2V0RmllbGRIZWxwZXJzLFxuICAgICAgcmVnaXN0ZXJGaWVsZCA9IGZvcm1pay5yZWdpc3RlckZpZWxkLFxuICAgICAgdW5yZWdpc3RlckZpZWxkID0gZm9ybWlrLnVucmVnaXN0ZXJGaWVsZDtcbiAgdmFyIGlzQW5PYmplY3QgPSBpc09iamVjdChwcm9wc09yRmllbGROYW1lKTsgLy8gTm9ybWFsaXplIHByb3BzT3JGaWVsZE5hbWUgdG8gRmllbGRIb29rQ29uZmlnPFZhbD5cblxuICB2YXIgcHJvcHMgPSBpc0FuT2JqZWN0ID8gcHJvcHNPckZpZWxkTmFtZSA6IHtcbiAgICBuYW1lOiBwcm9wc09yRmllbGROYW1lXG4gIH07XG4gIHZhciBmaWVsZE5hbWUgPSBwcm9wcy5uYW1lLFxuICAgICAgdmFsaWRhdGVGbiA9IHByb3BzLnZhbGlkYXRlO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChmaWVsZE5hbWUpIHtcbiAgICAgIHJlZ2lzdGVyRmllbGQoZmllbGROYW1lLCB7XG4gICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZUZuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGZpZWxkTmFtZSkge1xuICAgICAgICB1bnJlZ2lzdGVyRmllbGQoZmllbGROYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbcmVnaXN0ZXJGaWVsZCwgdW5yZWdpc3RlckZpZWxkLCBmaWVsZE5hbWUsIHZhbGlkYXRlRm5dKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgIWZvcm1payA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ3VzZUZpZWxkKCkgLyA8RmllbGQgLz4gbXVzdCBiZSB1c2VkIHVuZGVybmVhdGggYSA8Rm9ybWlrPiBjb21wb25lbnQgb3Igd2l0aEZvcm1paygpIGhpZ2hlciBvcmRlciBjb21wb25lbnQnKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICAhZmllbGROYW1lID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnSW52YWxpZCBmaWVsZCBuYW1lLiBFaXRoZXIgcGFzcyBgdXNlRmllbGRgIGEgc3RyaW5nIG9yIGFuIG9iamVjdCBjb250YWluaW5nIGEgYG5hbWVgIGtleS4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHZhciBmaWVsZEhlbHBlcnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0RmllbGRIZWxwZXJzKGZpZWxkTmFtZSk7XG4gIH0sIFtnZXRGaWVsZEhlbHBlcnMsIGZpZWxkTmFtZV0pO1xuICByZXR1cm4gW2dldEZpZWxkUHJvcHMocHJvcHMpLCBnZXRGaWVsZE1ldGEoZmllbGROYW1lKSwgZmllbGRIZWxwZXJzXTtcbn1cbmZ1bmN0aW9uIEZpZWxkKF9yZWYpIHtcbiAgdmFyIHZhbGlkYXRlID0gX3JlZi52YWxpZGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICByZW5kZXIgPSBfcmVmLnJlbmRlcixcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGlzID0gX3JlZi5hcyxcbiAgICAgIGNvbXBvbmVudCA9IF9yZWYuY29tcG9uZW50LFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJ2YWxpZGF0ZVwiLCBcIm5hbWVcIiwgXCJyZW5kZXJcIiwgXCJjaGlsZHJlblwiLCBcImFzXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICB2YXIgX3VzZUZvcm1pa0NvbnRleHQgPSB1c2VGb3JtaWtDb250ZXh0KCksXG4gICAgICBmb3JtaWsgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdXNlRm9ybWlrQ29udGV4dCwgW1widmFsaWRhdGVcIiwgXCJ2YWxpZGF0aW9uU2NoZW1hXCJdKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICEhcmVuZGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIjxGaWVsZCByZW5kZXI+IGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgRm9ybWlrLiBQbGVhc2UgdXNlIGEgY2hpbGQgY2FsbGJhY2sgZnVuY3Rpb24gaW5zdGVhZC4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIHJlcGxhY2UgPEZpZWxkIG5hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIiByZW5kZXI9eyh7ZmllbGQsIGZvcm19KSA9PiAuLi59IC8+IHdpdGggPEZpZWxkIG5hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIj57KHtmaWVsZCwgZm9ybSwgbWV0YX0pID0+IC4uLn08L0ZpZWxkPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAhIShpcyAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZpZWxkIGFzPiBhbmQgPEZpZWxkIGNoaWxkcmVuPiBhcyBhIGZ1bmN0aW9uIGluIHRoZSBzYW1lIDxGaWVsZD4gY29tcG9uZW50OyA8RmllbGQgYXM+IHdpbGwgYmUgaWdub3JlZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAhIShjb21wb25lbnQgJiYgY2hpbGRyZW4gJiYgaXNGdW5jdGlvbihjaGlsZHJlbikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZpZWxkPiBjb21wb25lbnQ7IDxGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICAhIShyZW5kZXIgJiYgY2hpbGRyZW4gJiYgIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGaWVsZCByZW5kZXI+IGFuZCA8RmllbGQgY2hpbGRyZW4+IGluIHRoZSBzYW1lIDxGaWVsZD4gY29tcG9uZW50OyA8RmllbGQgY2hpbGRyZW4+IHdpbGwgYmUgaWdub3JlZCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgfSwgW10pO1xuICB9IC8vIFJlZ2lzdGVyIGZpZWxkIGFuZCBmaWVsZC1sZXZlbCB2YWxpZGF0aW9uIHdpdGggcGFyZW50IDxGb3JtaWs+XG5cblxuICB2YXIgcmVnaXN0ZXJGaWVsZCA9IGZvcm1pay5yZWdpc3RlckZpZWxkLFxuICAgICAgdW5yZWdpc3RlckZpZWxkID0gZm9ybWlrLnVucmVnaXN0ZXJGaWVsZDtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICByZWdpc3RlckZpZWxkKG5hbWUsIHtcbiAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bnJlZ2lzdGVyRmllbGQobmFtZSk7XG4gICAgfTtcbiAgfSwgW3JlZ2lzdGVyRmllbGQsIHVucmVnaXN0ZXJGaWVsZCwgbmFtZSwgdmFsaWRhdGVdKTtcbiAgdmFyIGZpZWxkID0gZm9ybWlrLmdldEZpZWxkUHJvcHMoX2V4dGVuZHMoe1xuICAgIG5hbWU6IG5hbWVcbiAgfSwgcHJvcHMpKTtcbiAgdmFyIG1ldGEgPSBmb3JtaWsuZ2V0RmllbGRNZXRhKG5hbWUpO1xuICB2YXIgbGVnYWN5QmFnID0ge1xuICAgIGZpZWxkOiBmaWVsZCxcbiAgICBmb3JtOiBmb3JtaWtcbiAgfTtcblxuICBpZiAocmVuZGVyKSB7XG4gICAgcmV0dXJuIHJlbmRlcihfZXh0ZW5kcyh7fSwgbGVnYWN5QmFnLCB7XG4gICAgICBtZXRhOiBtZXRhXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuKF9leHRlbmRzKHt9LCBsZWdhY3lCYWcsIHtcbiAgICAgIG1ldGE6IG1ldGFcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29tcG9uZW50KSB7XG4gICAgLy8gVGhpcyBiZWhhdmlvciBpcyBiYWNrd2FyZHMgY29tcGF0IHdpdGggZWFybGllciBGb3JtaWsgMC45IHRvIDEueFxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IGlubmVyUmVmXG4gICAgICB9LCBmaWVsZCwgcmVzdCksIGNoaWxkcmVuKTtcbiAgICB9IC8vIFdlIGRvbid0IHBhc3MgYG1ldGFgIGZvciBiYWNrd2FyZHMgY29tcGF0XG5cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgZm9ybTogZm9ybWlrXG4gICAgfSwgcHJvcHMpLCBjaGlsZHJlbik7XG4gIH0gLy8gZGVmYXVsdCB0byBpbnB1dCBoZXJlIHNvIHdlIGNhbiBjaGVjayBmb3IgYm90aCBgYXNgIGFuZCBgY2hpbGRyZW5gIGFib3ZlXG5cblxuICB2YXIgYXNFbGVtZW50ID0gaXMgfHwgJ2lucHV0JztcblxuICBpZiAodHlwZW9mIGFzRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgX2lubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgIF9yZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGFzRWxlbWVudCwgX2V4dGVuZHMoe1xuICAgICAgcmVmOiBfaW5uZXJSZWZcbiAgICB9LCBmaWVsZCwgX3Jlc3QpLCBjaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChhc0VsZW1lbnQsIF9leHRlbmRzKHt9LCBmaWVsZCwgcHJvcHMpLCBjaGlsZHJlbik7XG59XG5cbnZhciBGb3JtID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgLy8gaU9TIG5lZWRzIGFuIFwiYWN0aW9uXCIgYXR0cmlidXRlIGZvciBuaWNlIGlucHV0OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk0ODUxNjIvNDA2NzI1XG4gIC8vIFdlIGRlZmF1bHQgdGhlIGFjdGlvbiB0byBcIiNcIiBpbiBjYXNlIHRoZSBwcmV2ZW50RGVmYXVsdCBmYWlscyAoanVzdCB1cGRhdGVzIHRoZSBVUkwgaGFzaClcbiAgdmFyIGFjdGlvbiA9IHByb3BzLmFjdGlvbixcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiYWN0aW9uXCJdKTtcblxuICB2YXIgX2FjdGlvbiA9IGFjdGlvbiAhPSBudWxsID8gYWN0aW9uIDogJyMnO1xuXG4gIHZhciBfdXNlRm9ybWlrQ29udGV4dCA9IHVzZUZvcm1pa0NvbnRleHQoKSxcbiAgICAgIGhhbmRsZVJlc2V0ID0gX3VzZUZvcm1pa0NvbnRleHQuaGFuZGxlUmVzZXQsXG4gICAgICBoYW5kbGVTdWJtaXQgPSBfdXNlRm9ybWlrQ29udGV4dC5oYW5kbGVTdWJtaXQ7XG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIF9leHRlbmRzKHtcbiAgICBvblN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIHJlZjogcmVmLFxuICAgIG9uUmVzZXQ6IGhhbmRsZVJlc2V0LFxuICAgIGFjdGlvbjogX2FjdGlvblxuICB9LCByZXN0KSk7XG59KTtcbkZvcm0uZGlzcGxheU5hbWUgPSAnRm9ybSc7XG5cbi8qKlxyXG4gKiBBIHB1YmxpYyBoaWdoZXItb3JkZXIgY29tcG9uZW50IHRvIGFjY2VzcyB0aGUgaW1wZXJhdGl2ZSBBUElcclxuICovXG5cbmZ1bmN0aW9uIHdpdGhGb3JtaWsoX3JlZikge1xuICB2YXIgX3JlZiRtYXBQcm9wc1RvVmFsdWVzID0gX3JlZi5tYXBQcm9wc1RvVmFsdWVzLFxuICAgICAgbWFwUHJvcHNUb1ZhbHVlcyA9IF9yZWYkbWFwUHJvcHNUb1ZhbHVlcyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHZhbmlsbGFQcm9wcykge1xuICAgIHZhciB2YWwgPSB7fTtcblxuICAgIGZvciAodmFyIGsgaW4gdmFuaWxsYVByb3BzKSB7XG4gICAgICBpZiAodmFuaWxsYVByb3BzLmhhc093blByb3BlcnR5KGspICYmIHR5cGVvZiB2YW5pbGxhUHJvcHNba10gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQHRvZG8gVHlwZVNjcmlwdCBmaXhcbiAgICAgICAgdmFsW2tdID0gdmFuaWxsYVByb3BzW2tdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWw7XG4gIH0gOiBfcmVmJG1hcFByb3BzVG9WYWx1ZXMsXG4gICAgICBjb25maWcgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJtYXBQcm9wc1RvVmFsdWVzXCJdKTtcblxuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlRm9ybWlrKENvbXBvbmVudCQxKSB7XG4gICAgdmFyIGNvbXBvbmVudERpc3BsYXlOYW1lID0gQ29tcG9uZW50JDEuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50JDEubmFtZSB8fCBDb21wb25lbnQkMS5jb25zdHJ1Y3RvciAmJiBDb21wb25lbnQkMS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIC8qKlxyXG4gICAgICogV2UgbmVlZCB0byB1c2UgY2xvc3VyZXMgaGVyZSBmb3IgdG8gcHJvdmlkZSB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBwcm9wcyB0b1xyXG4gICAgICogdGhlIHJlc3BlY3RpdmUgd2l0aEZvcm1payBjb25maWcgbWV0aG9kcy5cclxuICAgICAqL1xuXG4gICAgdmFyIEMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKEMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBDKCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICAgICAgX3RoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbmZpZy52YWxpZGF0ZSh2YWx1ZXMsIF90aGlzLnByb3BzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBfdGhpcy52YWxpZGF0aW9uU2NoZW1hID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hKSA/IGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hKF90aGlzLnByb3BzKSA6IGNvbmZpZy52YWxpZGF0aW9uU2NoZW1hO1xuICAgICAgICB9O1xuXG4gICAgICAgIF90aGlzLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGFjdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gY29uZmlnLmhhbmRsZVN1Ym1pdCh2YWx1ZXMsIF9leHRlbmRzKHt9LCBhY3Rpb25zLCB7XG4gICAgICAgICAgICBwcm9wczogX3RoaXMucHJvcHNcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgX3RoaXMucmVuZGVyRm9ybUNvbXBvbmVudCA9IGZ1bmN0aW9uIChmb3JtaWtQcm9wcykge1xuICAgICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KENvbXBvbmVudCQxLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIGZvcm1pa1Byb3BzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gQy5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoRm9ybWlrLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIGNvbmZpZywge1xuICAgICAgICAgIHZhbGlkYXRlOiBjb25maWcudmFsaWRhdGUgJiYgdGhpcy52YWxpZGF0ZSxcbiAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hOiBjb25maWcudmFsaWRhdGlvblNjaGVtYSAmJiB0aGlzLnZhbGlkYXRpb25TY2hlbWEsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlczogbWFwUHJvcHNUb1ZhbHVlcyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsU3RhdHVzOiBjb25maWcubWFwUHJvcHNUb1N0YXR1cyAmJiBjb25maWcubWFwUHJvcHNUb1N0YXR1cyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsRXJyb3JzOiBjb25maWcubWFwUHJvcHNUb0Vycm9ycyAmJiBjb25maWcubWFwUHJvcHNUb0Vycm9ycyh0aGlzLnByb3BzKSxcbiAgICAgICAgICBpbml0aWFsVG91Y2hlZDogY29uZmlnLm1hcFByb3BzVG9Ub3VjaGVkICYmIGNvbmZpZy5tYXBQcm9wc1RvVG91Y2hlZCh0aGlzLnByb3BzKSxcbiAgICAgICAgICBvblN1Ym1pdDogdGhpcy5oYW5kbGVTdWJtaXQsXG4gICAgICAgICAgY2hpbGRyZW46IHRoaXMucmVuZGVyRm9ybUNvbXBvbmVudFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQztcbiAgICB9KENvbXBvbmVudCk7XG5cbiAgICBDLmRpc3BsYXlOYW1lID0gXCJXaXRoRm9ybWlrKFwiICsgY29tcG9uZW50RGlzcGxheU5hbWUgKyBcIilcIjtcbiAgICByZXR1cm4gaG9pc3ROb25SZWFjdFN0YXRpY3MoQywgQ29tcG9uZW50JDEgLy8gY2FzdCB0eXBlIHRvIENvbXBvbmVudENsYXNzIChldmVuIGlmIFNGQylcbiAgICApO1xuICB9O1xufVxuXG4vKipcclxuICogQ29ubmVjdCBhbnkgY29tcG9uZW50IHRvIEZvcm1payBjb250ZXh0LCBhbmQgaW5qZWN0IGFzIGEgcHJvcCBjYWxsZWQgYGZvcm1pa2A7XHJcbiAqIEBwYXJhbSBDb21wIFJlYWN0IENvbXBvbmVudFxyXG4gKi9cblxuZnVuY3Rpb24gY29ubmVjdChDb21wKSB7XG4gIHZhciBDID0gZnVuY3Rpb24gQyhwcm9wcykge1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEZvcm1pa0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoZm9ybWlrKSB7XG4gICAgICAhISFmb3JtaWsgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiRm9ybWlrIGNvbnRleHQgaXMgdW5kZWZpbmVkLCBwbGVhc2UgdmVyaWZ5IHlvdSBhcmUgcmVuZGVyaW5nIDxGb3JtPiwgPEZpZWxkPiwgPEZhc3RGaWVsZD4sIDxGaWVsZEFycmF5Piwgb3IgeW91ciBjdXN0b20gY29udGV4dC11c2luZyBjb21wb25lbnQgYXMgYSBjaGlsZCBvZiBhIDxGb3JtaWs+IGNvbXBvbmVudC4gQ29tcG9uZW50IG5hbWU6IFwiICsgQ29tcC5uYW1lKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChDb21wLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZm9ybWlrOiBmb3JtaWtcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgY29tcG9uZW50RGlzcGxheU5hbWUgPSBDb21wLmRpc3BsYXlOYW1lIHx8IENvbXAubmFtZSB8fCBDb21wLmNvbnN0cnVjdG9yICYmIENvbXAuY29uc3RydWN0b3IubmFtZSB8fCAnQ29tcG9uZW50JzsgLy8gQXNzaWduIENvbXAgdG8gQy5XcmFwcGVkQ29tcG9uZW50IHNvIHdlIGNhbiBhY2Nlc3MgdGhlIGlubmVyIGNvbXBvbmVudCBpbiB0ZXN0c1xuICAvLyBGb3IgZXhhbXBsZSwgPEZpZWxkLldyYXBwZWRDb21wb25lbnQgLz4gZ2V0cyB1cyA8RmllbGRJbm5lci8+XG5cbiAgQy5XcmFwcGVkQ29tcG9uZW50ID0gQ29tcDtcbiAgQy5kaXNwbGF5TmFtZSA9IFwiRm9ybWlrQ29ubmVjdChcIiArIGNvbXBvbmVudERpc3BsYXlOYW1lICsgXCIpXCI7XG4gIHJldHVybiBob2lzdE5vblJlYWN0U3RhdGljcyhDLCBDb21wIC8vIGNhc3QgdHlwZSB0byBDb21wb25lbnRDbGFzcyAoZXZlbiBpZiBTRkMpXG4gICk7XG59XG5cbi8qKlxyXG4gKiBTb21lIGFycmF5IGhlbHBlcnMhXHJcbiAqL1xuXG52YXIgbW92ZSA9IGZ1bmN0aW9uIG1vdmUoYXJyYXksIGZyb20sIHRvKSB7XG4gIHZhciBjb3B5ID0gY29weUFycmF5TGlrZShhcnJheSk7XG4gIHZhciB2YWx1ZSA9IGNvcHlbZnJvbV07XG4gIGNvcHkuc3BsaWNlKGZyb20sIDEpO1xuICBjb3B5LnNwbGljZSh0bywgMCwgdmFsdWUpO1xuICByZXR1cm4gY29weTtcbn07XG52YXIgc3dhcCA9IGZ1bmN0aW9uIHN3YXAoYXJyYXlMaWtlLCBpbmRleEEsIGluZGV4Qikge1xuICB2YXIgY29weSA9IGNvcHlBcnJheUxpa2UoYXJyYXlMaWtlKTtcbiAgdmFyIGEgPSBjb3B5W2luZGV4QV07XG4gIGNvcHlbaW5kZXhBXSA9IGNvcHlbaW5kZXhCXTtcbiAgY29weVtpbmRleEJdID0gYTtcbiAgcmV0dXJuIGNvcHk7XG59O1xudmFyIGluc2VydCA9IGZ1bmN0aW9uIGluc2VydChhcnJheUxpa2UsIGluZGV4LCB2YWx1ZSkge1xuICB2YXIgY29weSA9IGNvcHlBcnJheUxpa2UoYXJyYXlMaWtlKTtcbiAgY29weS5zcGxpY2UoaW5kZXgsIDAsIHZhbHVlKTtcbiAgcmV0dXJuIGNvcHk7XG59O1xudmFyIHJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKGFycmF5TGlrZSwgaW5kZXgsIHZhbHVlKSB7XG4gIHZhciBjb3B5ID0gY29weUFycmF5TGlrZShhcnJheUxpa2UpO1xuICBjb3B5W2luZGV4XSA9IHZhbHVlO1xuICByZXR1cm4gY29weTtcbn07XG5cbnZhciBjb3B5QXJyYXlMaWtlID0gZnVuY3Rpb24gY29weUFycmF5TGlrZShhcnJheUxpa2UpIHtcbiAgaWYgKCFhcnJheUxpa2UpIHtcbiAgICByZXR1cm4gW107XG4gIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcnJheUxpa2UpKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhcnJheUxpa2UpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtYXhJbmRleCA9IE9iamVjdC5rZXlzKGFycmF5TGlrZSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChrZXkpO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAobWF4LCBlbCkge1xuICAgICAgcmV0dXJuIGVsID4gbWF4ID8gZWwgOiBtYXg7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oX2V4dGVuZHMoe30sIGFycmF5TGlrZSwge1xuICAgICAgbGVuZ3RoOiBtYXhJbmRleCArIDFcbiAgICB9KSk7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVBbHRlcmF0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIGNyZWF0ZUFsdGVyYXRpb25IYW5kbGVyKGFsdGVyYXRpb24sIGRlZmF1bHRGdW5jdGlvbikge1xuICB2YXIgZm4gPSB0eXBlb2YgYWx0ZXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGFsdGVyYXRpb24gOiBkZWZhdWx0RnVuY3Rpb247XG4gIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICB2YXIgY2xvbmUgPSBjb3B5QXJyYXlMaWtlKGRhdGEpO1xuICAgICAgcmV0dXJuIGZuKGNsb25lKTtcbiAgICB9IC8vIFRoaXMgY2FuIGJlIGFzc3VtZWQgdG8gYmUgYSBwcmltaXRpdmUsIHdoaWNoXG4gICAgLy8gaXMgYSBjYXNlIGZvciB0b3AgbGV2ZWwgdmFsaWRhdGlvbiBlcnJvcnNcblxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG59O1xuXG52YXIgRmllbGRBcnJheUlubmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEZpZWxkQXJyYXlJbm5lciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmllbGRBcnJheUlubmVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7IC8vIFdlIG5lZWQgVHlwZVNjcmlwdCBnZW5lcmljcyBvbiB0aGVzZSwgc28gd2UnbGwgYmluZCB0aGVtIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgIC8vIEB0b2RvIEZpeCBUUyAzLjIuMVxuXG4gICAgX3RoaXMudXBkYXRlQXJyYXlGaWVsZCA9IGZ1bmN0aW9uIChmbiwgYWx0ZXJUb3VjaGVkLCBhbHRlckVycm9ycykge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzLm5hbWUsXG4gICAgICAgICAgc2V0Rm9ybWlrU3RhdGUgPSBfdGhpcyRwcm9wcy5mb3JtaWsuc2V0Rm9ybWlrU3RhdGU7XG4gICAgICBzZXRGb3JtaWtTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgIHZhciB1cGRhdGVFcnJvcnMgPSBjcmVhdGVBbHRlcmF0aW9uSGFuZGxlcihhbHRlckVycm9ycywgZm4pO1xuICAgICAgICB2YXIgdXBkYXRlVG91Y2hlZCA9IGNyZWF0ZUFsdGVyYXRpb25IYW5kbGVyKGFsdGVyVG91Y2hlZCwgZm4pOyAvLyB2YWx1ZXMgZm4gc2hvdWxkIGJlIGV4ZWN1dGVkIGJlZm9yZSB1cGRhdGVFcnJvcnMgYW5kIHVwZGF0ZVRvdWNoZWQsXG4gICAgICAgIC8vIG90aGVyd2lzZSBpdCBjYXVzZXMgYW4gZXJyb3Igd2l0aCB1bnNoaWZ0LlxuXG4gICAgICAgIHZhciB2YWx1ZXMgPSBzZXRJbihwcmV2U3RhdGUudmFsdWVzLCBuYW1lLCBmbihnZXRJbihwcmV2U3RhdGUudmFsdWVzLCBuYW1lKSkpO1xuICAgICAgICB2YXIgZmllbGRFcnJvciA9IGFsdGVyRXJyb3JzID8gdXBkYXRlRXJyb3JzKGdldEluKHByZXZTdGF0ZS5lcnJvcnMsIG5hbWUpKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGZpZWxkVG91Y2hlZCA9IGFsdGVyVG91Y2hlZCA/IHVwZGF0ZVRvdWNoZWQoZ2V0SW4ocHJldlN0YXRlLnRvdWNoZWQsIG5hbWUpKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoaXNFbXB0eUFycmF5KGZpZWxkRXJyb3IpKSB7XG4gICAgICAgICAgZmllbGRFcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VtcHR5QXJyYXkoZmllbGRUb3VjaGVkKSkge1xuICAgICAgICAgIGZpZWxkVG91Y2hlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgdmFsdWVzOiB2YWx1ZXMsXG4gICAgICAgICAgZXJyb3JzOiBhbHRlckVycm9ycyA/IHNldEluKHByZXZTdGF0ZS5lcnJvcnMsIG5hbWUsIGZpZWxkRXJyb3IpIDogcHJldlN0YXRlLmVycm9ycyxcbiAgICAgICAgICB0b3VjaGVkOiBhbHRlclRvdWNoZWQgPyBzZXRJbihwcmV2U3RhdGUudG91Y2hlZCwgbmFtZSwgZmllbGRUb3VjaGVkKSA6IHByZXZTdGF0ZS50b3VjaGVkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnB1c2ggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfdGhpcy51cGRhdGVBcnJheUZpZWxkKGZ1bmN0aW9uIChhcnJheUxpa2UpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChjb3B5QXJyYXlMaWtlKGFycmF5TGlrZSksIFtjbG9uZURlZXAodmFsdWUpXSk7XG4gICAgICB9LCBmYWxzZSwgZmFsc2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVQdXNoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHVzaCh2YWx1ZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5zd2FwID0gZnVuY3Rpb24gKGluZGV4QSwgaW5kZXhCKSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHN3YXAoYXJyYXksIGluZGV4QSwgaW5kZXhCKTtcbiAgICAgIH0sIHRydWUsIHRydWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVTd2FwID0gZnVuY3Rpb24gKGluZGV4QSwgaW5kZXhCKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3dhcChpbmRleEEsIGluZGV4Qik7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5tb3ZlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIG1vdmUoYXJyYXksIGZyb20sIHRvKTtcbiAgICAgIH0sIHRydWUsIHRydWUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubW92ZShmcm9tLCB0byk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5pbnNlcnQgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGluc2VydChhcnJheSwgaW5kZXgsIHZhbHVlKTtcbiAgICAgIH0sIGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICByZXR1cm4gaW5zZXJ0KGFycmF5LCBpbmRleCwgbnVsbCk7XG4gICAgICB9LCBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIGluc2VydChhcnJheSwgaW5kZXgsIG51bGwpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUluc2VydCA9IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5pbnNlcnQoaW5kZXgsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnJlcGxhY2UgPSBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2UoYXJyYXksIGluZGV4LCB2YWx1ZSk7XG4gICAgICB9LCBmYWxzZSwgZmFsc2UpO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVSZXBsYWNlID0gZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlcGxhY2UoaW5kZXgsIHZhbHVlKTtcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnVuc2hpZnQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHZhciBsZW5ndGggPSAtMTtcblxuICAgICAgX3RoaXMudXBkYXRlQXJyYXlGaWVsZChmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgICAgdmFyIGFyciA9IGFycmF5ID8gW3ZhbHVlXS5jb25jYXQoYXJyYXkpIDogW3ZhbHVlXTtcbiAgICAgICAgbGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgIH0sIGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkgPyBbbnVsbF0uY29uY2F0KGFycmF5KSA6IFtudWxsXTtcbiAgICAgIH0sIGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICByZXR1cm4gYXJyYXkgPyBbbnVsbF0uY29uY2F0KGFycmF5KSA6IFtudWxsXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVVbnNoaWZ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMudW5zaGlmdCh2YWx1ZSk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVSZW1vdmUgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmUoaW5kZXgpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlUG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBvcCgpO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVtb3ZlID0gX3RoaXMucmVtb3ZlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLnBvcCA9IF90aGlzLnBvcC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRmllbGRBcnJheUlubmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnZhbGlkYXRlT25DaGFuZ2UgJiYgdGhpcy5wcm9wcy5mb3JtaWsudmFsaWRhdGVPbkNoYW5nZSAmJiAhaXNFcXVhbChnZXRJbihwcmV2UHJvcHMuZm9ybWlrLnZhbHVlcywgcHJldlByb3BzLm5hbWUpLCBnZXRJbih0aGlzLnByb3BzLmZvcm1pay52YWx1ZXMsIHRoaXMucHJvcHMubmFtZSkpKSB7XG4gICAgICB0aGlzLnByb3BzLmZvcm1pay52YWxpZGF0ZUZvcm0odGhpcy5wcm9wcy5mb3JtaWsudmFsdWVzKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpbmRleCkge1xuICAgIC8vIFdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGFsc28gcmVtb3ZlIHJlbGV2YW50IHBpZWNlcyBvZiBgdG91Y2hlZGAgYW5kIGBlcnJvcnNgXG4gICAgdmFyIHJlc3VsdDtcbiAgICB0aGlzLnVwZGF0ZUFycmF5RmllbGQoIC8vIHNvIHRoaXMgZ2V0cyBjYWxsIDMgdGltZXNcbiAgICBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICAgIHZhciBjb3B5ID0gYXJyYXkgPyBjb3B5QXJyYXlMaWtlKGFycmF5KSA6IFtdO1xuXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXN1bHQgPSBjb3B5W2luZGV4XTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRnVuY3Rpb24oY29weS5zcGxpY2UpKSB7XG4gICAgICAgIGNvcHkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH0gLy8gaWYgdGhlIGFycmF5IG9ubHkgaW5jbHVkZXMgdW5kZWZpbmVkIHZhbHVlcyB3ZSBoYXZlIHRvIHJldHVybiBhbiBlbXB0eSBhcnJheVxuXG5cbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGNvcHkuZXZlcnkpID8gY29weS5ldmVyeShmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkO1xuICAgICAgfSkgPyBbXSA6IGNvcHkgOiBjb3B5O1xuICAgIH0sIHRydWUsIHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnBvcCA9IGZ1bmN0aW9uIHBvcCgpIHtcbiAgICAvLyBSZW1vdmUgcmVsZXZhbnQgcGllY2VzIG9mIGB0b3VjaGVkYCBhbmQgYGVycm9yc2AgdG9vIVxuICAgIHZhciByZXN1bHQ7XG4gICAgdGhpcy51cGRhdGVBcnJheUZpZWxkKCAvLyBzbyB0aGlzIGdldHMgY2FsbCAzIHRpbWVzXG4gICAgZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgICB2YXIgdG1wID0gYXJyYXkuc2xpY2UoKTtcblxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgcmVzdWx0ID0gdG1wICYmIHRtcC5wb3AgJiYgdG1wLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG1wO1xuICAgIH0sIHRydWUsIHRydWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgYXJyYXlIZWxwZXJzID0ge1xuICAgICAgcHVzaDogdGhpcy5wdXNoLFxuICAgICAgcG9wOiB0aGlzLnBvcCxcbiAgICAgIHN3YXA6IHRoaXMuc3dhcCxcbiAgICAgIG1vdmU6IHRoaXMubW92ZSxcbiAgICAgIGluc2VydDogdGhpcy5pbnNlcnQsXG4gICAgICByZXBsYWNlOiB0aGlzLnJlcGxhY2UsXG4gICAgICB1bnNoaWZ0OiB0aGlzLnVuc2hpZnQsXG4gICAgICByZW1vdmU6IHRoaXMucmVtb3ZlLFxuICAgICAgaGFuZGxlUHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgaGFuZGxlUG9wOiB0aGlzLmhhbmRsZVBvcCxcbiAgICAgIGhhbmRsZVN3YXA6IHRoaXMuaGFuZGxlU3dhcCxcbiAgICAgIGhhbmRsZU1vdmU6IHRoaXMuaGFuZGxlTW92ZSxcbiAgICAgIGhhbmRsZUluc2VydDogdGhpcy5oYW5kbGVJbnNlcnQsXG4gICAgICBoYW5kbGVSZXBsYWNlOiB0aGlzLmhhbmRsZVJlcGxhY2UsXG4gICAgICBoYW5kbGVVbnNoaWZ0OiB0aGlzLmhhbmRsZVVuc2hpZnQsXG4gICAgICBoYW5kbGVSZW1vdmU6IHRoaXMuaGFuZGxlUmVtb3ZlXG4gICAgfTtcblxuICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wczIuY29tcG9uZW50LFxuICAgICAgICByZW5kZXIgPSBfdGhpcyRwcm9wczIucmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgbmFtZSA9IF90aGlzJHByb3BzMi5uYW1lLFxuICAgICAgICBfdGhpcyRwcm9wczIkZm9ybWlrID0gX3RoaXMkcHJvcHMyLmZvcm1payxcbiAgICAgICAgcmVzdE9mRm9ybWlrID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMyJGZvcm1paywgW1widmFsaWRhdGVcIiwgXCJ2YWxpZGF0aW9uU2NoZW1hXCJdKTtcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBhcnJheUhlbHBlcnMsIHtcbiAgICAgIGZvcm06IHJlc3RPZkZvcm1payxcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wb25lbnQgPyBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogcmVuZGVyID8gcmVuZGVyKHByb3BzKSA6IGNoaWxkcmVuIC8vIGNoaWxkcmVuIGNvbWUgbGFzdCwgYWx3YXlzIGNhbGxlZFxuICAgID8gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4ocHJvcHMpIDogIWlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikgPyBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSA6IG51bGwgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBGaWVsZEFycmF5SW5uZXI7XG59KENvbXBvbmVudCk7XG5cbkZpZWxkQXJyYXlJbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbGlkYXRlT25DaGFuZ2U6IHRydWVcbn07XG52YXIgRmllbGRBcnJheSA9IC8qI19fUFVSRV9fKi9jb25uZWN0KEZpZWxkQXJyYXlJbm5lcik7XG5cbnZhciBFcnJvck1lc3NhZ2VJbXBsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEVycm9yTWVzc2FnZUltcGwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVycm9yTWVzc2FnZUltcGwoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEVycm9yTWVzc2FnZUltcGwucHJvdG90eXBlO1xuXG4gIF9wcm90by5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUocHJvcHMpIHtcbiAgICBpZiAoZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpICE9PSBnZXRJbihwcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpIHx8IGdldEluKHRoaXMucHJvcHMuZm9ybWlrLnRvdWNoZWQsIHRoaXMucHJvcHMubmFtZSkgIT09IGdldEluKHByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpIHx8IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGZvcm1payA9IF90aGlzJHByb3BzLmZvcm1payxcbiAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMucmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZSxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjb21wb25lbnRcIiwgXCJmb3JtaWtcIiwgXCJyZW5kZXJcIiwgXCJjaGlsZHJlblwiLCBcIm5hbWVcIl0pO1xuXG4gICAgdmFyIHRvdWNoID0gZ2V0SW4oZm9ybWlrLnRvdWNoZWQsIG5hbWUpO1xuICAgIHZhciBlcnJvciA9IGdldEluKGZvcm1pay5lcnJvcnMsIG5hbWUpO1xuICAgIHJldHVybiAhIXRvdWNoICYmICEhZXJyb3IgPyByZW5kZXIgPyBpc0Z1bmN0aW9uKHJlbmRlcikgPyByZW5kZXIoZXJyb3IpIDogbnVsbCA6IGNoaWxkcmVuID8gaXNGdW5jdGlvbihjaGlsZHJlbikgPyBjaGlsZHJlbihlcnJvcikgOiBudWxsIDogY29tcG9uZW50ID8gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHJlc3QsIGVycm9yKSA6IGVycm9yIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gRXJyb3JNZXNzYWdlSW1wbDtcbn0oQ29tcG9uZW50KTtcblxudmFyIEVycm9yTWVzc2FnZSA9IC8qI19fUFVSRV9fKi9jb25uZWN0KEVycm9yTWVzc2FnZUltcGwpO1xuXG4vKipcclxuICogQ3VzdG9tIEZpZWxkIGNvbXBvbmVudCBmb3IgcXVpY2tseSBob29raW5nIGludG8gRm9ybWlrXHJcbiAqIGNvbnRleHQgYW5kIHdpcmluZyB1cCBmb3Jtcy5cclxuICovXG5cbnZhciBGYXN0RmllbGRJbm5lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShGYXN0RmllbGRJbm5lciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmFzdEZpZWxkSW5uZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB2YXIgcmVuZGVyID0gcHJvcHMucmVuZGVyLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGlzID0gcHJvcHMuYXMsXG4gICAgICAgIG5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICEhcmVuZGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIjxGYXN0RmllbGQgcmVuZGVyPiBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGEgY2hpbGQgY2FsbGJhY2sgZnVuY3Rpb24gaW5zdGVhZDogPEZhc3RGaWVsZCBuYW1lPXtcIiArIG5hbWUgKyBcIn0+e3Byb3BzID0+IC4uLn08L0Zhc3RGaWVsZD4gaW5zdGVhZC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEhKGNvbXBvbmVudCAmJiByZW5kZXIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAnWW91IHNob3VsZCBub3QgdXNlIDxGYXN0RmllbGQgY29tcG9uZW50PiBhbmQgPEZhc3RGaWVsZCByZW5kZXI+IGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZCcpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAhIShpcyAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCBhcz4gYW5kIDxGYXN0RmllbGQgY2hpbGRyZW4+IGFzIGEgZnVuY3Rpb24gaW4gdGhlIHNhbWUgPEZhc3RGaWVsZD4gY29tcG9uZW50OyA8RmFzdEZpZWxkIGFzPiB3aWxsIGJlIGlnbm9yZWQuJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEhKGNvbXBvbmVudCAmJiBjaGlsZHJlbiAmJiBpc0Z1bmN0aW9uKGNoaWxkcmVuKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsICdZb3Ugc2hvdWxkIG5vdCB1c2UgPEZhc3RGaWVsZCBjb21wb25lbnQ+IGFuZCA8RmFzdEZpZWxkIGNoaWxkcmVuPiBhcyBhIGZ1bmN0aW9uIGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjb21wb25lbnQ+IHdpbGwgYmUgaWdub3JlZC4nKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISEocmVuZGVyICYmIGNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgJ1lvdSBzaG91bGQgbm90IHVzZSA8RmFzdEZpZWxkIHJlbmRlcj4gYW5kIDxGYXN0RmllbGQgY2hpbGRyZW4+IGluIHRoZSBzYW1lIDxGYXN0RmllbGQ+IGNvbXBvbmVudDsgPEZhc3RGaWVsZCBjaGlsZHJlbj4gd2lsbCBiZSBpZ25vcmVkJykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBGYXN0RmllbGRJbm5lci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShwcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnNob3VsZFVwZGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2hvdWxkVXBkYXRlKHByb3BzLCB0aGlzLnByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLm5hbWUgIT09IHRoaXMucHJvcHMubmFtZSB8fCBnZXRJbihwcm9wcy5mb3JtaWsudmFsdWVzLCB0aGlzLnByb3BzLm5hbWUpICE9PSBnZXRJbih0aGlzLnByb3BzLmZvcm1pay52YWx1ZXMsIHRoaXMucHJvcHMubmFtZSkgfHwgZ2V0SW4ocHJvcHMuZm9ybWlrLmVycm9ycywgdGhpcy5wcm9wcy5uYW1lKSAhPT0gZ2V0SW4odGhpcy5wcm9wcy5mb3JtaWsuZXJyb3JzLCB0aGlzLnByb3BzLm5hbWUpIHx8IGdldEluKHByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpICE9PSBnZXRJbih0aGlzLnByb3BzLmZvcm1pay50b3VjaGVkLCB0aGlzLnByb3BzLm5hbWUpIHx8IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCB8fCBwcm9wcy5mb3JtaWsuaXNTdWJtaXR0aW5nICE9PSB0aGlzLnByb3BzLmZvcm1pay5pc1N1Ym1pdHRpbmcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFJlZ2lzdGVyIHRoZSBGaWVsZCB3aXRoIHRoZSBwYXJlbnQgRm9ybWlrLiBQYXJlbnQgd2lsbCBjeWNsZSB0aHJvdWdoXG4gICAgLy8gcmVnaXN0ZXJlZCBGaWVsZCdzIHZhbGlkYXRlIGZucyByaWdodCBwcmlvciB0byBzdWJtaXRcbiAgICB0aGlzLnByb3BzLmZvcm1pay5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSwge1xuICAgICAgdmFsaWRhdGU6IHRoaXMucHJvcHMudmFsaWRhdGVcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLm5hbWUgIT09IHByZXZQcm9wcy5uYW1lKSB7XG4gICAgICB0aGlzLnByb3BzLmZvcm1pay51bnJlZ2lzdGVyRmllbGQocHJldlByb3BzLm5hbWUpO1xuICAgICAgdGhpcy5wcm9wcy5mb3JtaWsucmVnaXN0ZXJGaWVsZCh0aGlzLnByb3BzLm5hbWUsIHtcbiAgICAgICAgdmFsaWRhdGU6IHRoaXMucHJvcHMudmFsaWRhdGVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnZhbGlkYXRlICE9PSBwcmV2UHJvcHMudmFsaWRhdGUpIHtcbiAgICAgIHRoaXMucHJvcHMuZm9ybWlrLnJlZ2lzdGVyRmllbGQodGhpcy5wcm9wcy5uYW1lLCB7XG4gICAgICAgIHZhbGlkYXRlOiB0aGlzLnByb3BzLnZhbGlkYXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5mb3JtaWsudW5yZWdpc3RlckZpZWxkKHRoaXMucHJvcHMubmFtZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBuYW1lID0gX3RoaXMkcHJvcHMubmFtZSxcbiAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMucmVuZGVyLFxuICAgICAgICBpcyA9IF90aGlzJHByb3BzLmFzLFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgIGZvcm1payA9IF90aGlzJHByb3BzLmZvcm1payxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1widmFsaWRhdGVcIiwgXCJuYW1lXCIsIFwicmVuZGVyXCIsIFwiYXNcIiwgXCJjaGlsZHJlblwiLCBcImNvbXBvbmVudFwiLCBcInNob3VsZFVwZGF0ZVwiLCBcImZvcm1pa1wiXSk7XG5cbiAgICB2YXIgcmVzdE9mRm9ybWlrID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoZm9ybWlrLCBbXCJ2YWxpZGF0ZVwiLCBcInZhbGlkYXRpb25TY2hlbWFcIl0pO1xuXG4gICAgdmFyIGZpZWxkID0gZm9ybWlrLmdldEZpZWxkUHJvcHMoX2V4dGVuZHMoe1xuICAgICAgbmFtZTogbmFtZVxuICAgIH0sIHByb3BzKSk7XG4gICAgdmFyIG1ldGEgPSB7XG4gICAgICB2YWx1ZTogZ2V0SW4oZm9ybWlrLnZhbHVlcywgbmFtZSksXG4gICAgICBlcnJvcjogZ2V0SW4oZm9ybWlrLmVycm9ycywgbmFtZSksXG4gICAgICB0b3VjaGVkOiAhIWdldEluKGZvcm1pay50b3VjaGVkLCBuYW1lKSxcbiAgICAgIGluaXRpYWxWYWx1ZTogZ2V0SW4oZm9ybWlrLmluaXRpYWxWYWx1ZXMsIG5hbWUpLFxuICAgICAgaW5pdGlhbFRvdWNoZWQ6ICEhZ2V0SW4oZm9ybWlrLmluaXRpYWxUb3VjaGVkLCBuYW1lKSxcbiAgICAgIGluaXRpYWxFcnJvcjogZ2V0SW4oZm9ybWlrLmluaXRpYWxFcnJvcnMsIG5hbWUpXG4gICAgfTtcbiAgICB2YXIgYmFnID0ge1xuICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgbWV0YTogbWV0YSxcbiAgICAgIGZvcm06IHJlc3RPZkZvcm1pa1xuICAgIH07XG5cbiAgICBpZiAocmVuZGVyKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKGJhZyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oY2hpbGRyZW4pKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oYmFnKTtcbiAgICB9XG5cbiAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAvLyBUaGlzIGJlaGF2aW9yIGlzIGJhY2t3YXJkcyBjb21wYXQgd2l0aCBlYXJsaWVyIEZvcm1payAwLjkgdG8gMS54XG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGlubmVyUmVmID0gcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImlubmVyUmVmXCJdKTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgICAgICByZWY6IGlubmVyUmVmXG4gICAgICAgIH0sIGZpZWxkLCByZXN0KSwgY2hpbGRyZW4pO1xuICAgICAgfSAvLyBXZSBkb24ndCBwYXNzIGBtZXRhYCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuXG5cbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgIGZvcm06IGZvcm1pa1xuICAgICAgfSwgcHJvcHMpLCBjaGlsZHJlbik7XG4gICAgfSAvLyBkZWZhdWx0IHRvIGlucHV0IGhlcmUgc28gd2UgY2FuIGNoZWNrIGZvciBib3RoIGBhc2AgYW5kIGBjaGlsZHJlbmAgYWJvdmVcblxuXG4gICAgdmFyIGFzRWxlbWVudCA9IGlzIHx8ICdpbnB1dCc7XG5cbiAgICBpZiAodHlwZW9mIGFzRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBfaW5uZXJSZWYgPSBwcm9wcy5pbm5lclJlZixcbiAgICAgICAgICBfcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJpbm5lclJlZlwiXSk7XG5cbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGFzRWxlbWVudCwgX2V4dGVuZHMoe1xuICAgICAgICByZWY6IF9pbm5lclJlZlxuICAgICAgfSwgZmllbGQsIF9yZXN0KSwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGFzRWxlbWVudCwgX2V4dGVuZHMoe30sIGZpZWxkLCBwcm9wcyksIGNoaWxkcmVuKTtcbiAgfTtcblxuICByZXR1cm4gRmFzdEZpZWxkSW5uZXI7XG59KENvbXBvbmVudCk7XG5cbnZhciBGYXN0RmllbGQgPSAvKiNfX1BVUkVfXyovY29ubmVjdChGYXN0RmllbGRJbm5lcik7XG5cbmV4cG9ydCB7IEVycm9yTWVzc2FnZSwgRmFzdEZpZWxkLCBGaWVsZCwgRmllbGRBcnJheSwgRm9ybSwgRm9ybWlrLCBGb3JtaWtDb25zdW1lciwgRm9ybWlrQ29udGV4dCwgRm9ybWlrUHJvdmlkZXIsIGNvbm5lY3QsIGdldEFjdGl2ZUVsZW1lbnQsIGdldEluLCBpbnNlcnQsIGlzRW1wdHlBcnJheSwgaXNFbXB0eUNoaWxkcmVuLCBpc0Z1bmN0aW9uLCBpc0lucHV0RXZlbnQsIGlzSW50ZWdlciwgaXNOYU4kMSBhcyBpc05hTiwgaXNPYmplY3QsIGlzUHJvbWlzZSwgaXNTdHJpbmcsIG1vdmUsIHByZXBhcmVEYXRhRm9yVmFsaWRhdGlvbiwgcmVwbGFjZSwgc2V0SW4sIHNldE5lc3RlZE9iamVjdFZhbHVlcywgc3dhcCwgdXNlRmllbGQsIHVzZUZvcm1paywgdXNlRm9ybWlrQ29udGV4dCwgdmFsaWRhdGVZdXBTY2hlbWEsIHdpdGhGb3JtaWssIHl1cFRvRm9ybUVycm9ycyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWlrLmVzbS5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0Jzt2YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9cblN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKTo2MDEyMSx3PWI/U3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpOjYwMTE3LHg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpOjYwMTE4LHk9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIik6NjAxMTk7XG5mdW5jdGlvbiB6KGEpe2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpe3ZhciB1PWEuJCR0eXBlb2Y7c3dpdGNoKHUpe2Nhc2UgYzpzd2l0Y2goYT1hLnR5cGUsYSl7Y2FzZSBsOmNhc2UgbTpjYXNlIGU6Y2FzZSBnOmNhc2UgZjpjYXNlIHA6cmV0dXJuIGE7ZGVmYXVsdDpzd2l0Y2goYT1hJiZhLiQkdHlwZW9mLGEpe2Nhc2UgazpjYXNlIG46Y2FzZSB0OmNhc2UgcjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSBkOnJldHVybiB1fX19ZnVuY3Rpb24gQShhKXtyZXR1cm4geihhKT09PW19ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO2V4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9dDtleHBvcnRzLk1lbW89cjtleHBvcnRzLlBvcnRhbD1kO1xuZXhwb3J0cy5Qcm9maWxlcj1nO2V4cG9ydHMuU3RyaWN0TW9kZT1mO2V4cG9ydHMuU3VzcGVuc2U9cDtleHBvcnRzLmlzQXN5bmNNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiBBKGEpfHx6KGEpPT09bH07ZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlPUE7ZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWt9O2V4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PXR9O1xuZXhwb3J0cy5pc01lbW89ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1yfTtleHBvcnRzLmlzUG9ydGFsPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZH07ZXhwb3J0cy5pc1Byb2ZpbGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Z307ZXhwb3J0cy5pc1N0cmljdE1vZGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1mfTtleHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1wfTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlPWZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGF8fGE9PT1lfHxhPT09bXx8YT09PWd8fGE9PT1mfHxhPT09cHx8YT09PXF8fFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJihhLiQkdHlwZW9mPT09dHx8YS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1ofHxhLiQkdHlwZW9mPT09a3x8YS4kJHR5cGVvZj09PW58fGEuJCR0eXBlb2Y9PT13fHxhLiQkdHlwZW9mPT09eHx8YS4kJHR5cGVvZj09PXl8fGEuJCR0eXBlb2Y9PT12KX07ZXhwb3J0cy50eXBlT2Y9ejtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9