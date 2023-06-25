"use strict";
(self["webpackChunkreact_scratch_boilerplate"] = self["webpackChunkreact_scratch_boilerplate"] || []).push([[719],{

/***/ 745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var m = __webpack_require__(3935);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 9590:
/***/ ((module) => {



var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;
var hasElementType = typeof Element !== 'undefined';

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;
    // end fast-deep-equal

    // start react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element && b instanceof Element)
      return a === b;

    // custom handling for React
    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    }
    // end react-fast-compare

    // fast-deep-equal index.js 2.0.1
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

module.exports = function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message && error.message.match(/stack|recursion/i)) || (error.number === -2146828260)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};


/***/ }),

/***/ 4405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w_: () => (/* reexport */ GenIcon)
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  }
]
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && react.createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return react.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return react.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? react.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js




/***/ }),

/***/ 9655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VK: () => (/* binding */ BrowserRouter),
/* harmony export */   rU: () => (/* binding */ Link)
/* harmony export */ });
/* unused harmony exports Form, HashRouter, NavLink, ScrollRestoration, UNSAFE_useScrollRestoration, createBrowserRouter, createHashRouter, createSearchParams, unstable_HistoryRouter, unstable_usePrompt, useBeforeUnload, useFetcher, useFetchers, useFormAction, useLinkClickHandler, useSearchParams, useSubmit */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9250);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2599);
/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
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

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);

  if (defaultSearchParams) {
    for (let key of defaultSearchParams.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }
  }

  return searchParams;
}
function getFormSubmissionInfo(target, options, basename) {
  let method;
  let action = null;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;

    if (options.action) {
      action = options.action;
    } else {
      // When grabbing the action from the element, it will have had the basename
      // prefixed to ensure non-JS scenarios work, so strip it since we'll
      // re-prefix in the router
      let attr = target.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
    }

    method = options.method || target.getAttribute("method") || defaultMethod;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    if (options.action) {
      action = options.action;
    } else {
      // When grabbing the action from the element, it will have had the basename
      // prefixed to ensure non-JS scenarios work, so strip it since we'll
      // re-prefix in the router
      let attr = target.getAttribute("formaction") || form.getAttribute("action");
      action = attr ? stripBasename(attr, basename) : null;
    }

    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || null;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  return {
    action,
    method: method.toLowerCase(),
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = (/* unused pure expression or super */ null && (["aria-current", "caseSensitive", "className", "end", "style", "to", "children"])),
      _excluded3 = (/* unused pure expression or super */ null && (["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"]));
function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: createBrowserHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: UNSAFE_mapRouteProperties
  }).initialize();
}
function createHashRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: createHashHistory({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes,
    mapRouteProperties: UNSAFE_mapRouteProperties
  }).initialize();
}

function parseHydrationData() {
  var _window;

  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;

  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }

  return state;
}

function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};

  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
      // because we don't serialize SSR stack traces for security reasons

      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }

  return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */


function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .createBrowserHistory */ .lX)({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .F0, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = React.useRef();

  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/React.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */

function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/React.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (false) {}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware <a>.
 */

const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__/* .UNSAFE_NavigationContext */ .Us); // Rendered into <a href> for absolute URLs

  let absoluteHref;
  let isExternal = false;

  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to; // Only check for external origins client-side

    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .stripBasename */ .Zn)(targetUrl.pathname, basename);

        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
        // We can't do external URL detection without a valid URL
         false ? 0 : void 0;
      }
    }
  } // Rendered into <a href> for relative URLs


  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useHref */ .oQ)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (false) {}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = React.useContext(UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = React.useContext(UNSAFE_NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/React.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
})));

if (false) {}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef((props, ref) => {
  return /*#__PURE__*/React.createElement(FormImpl, _extends({}, props, {
    ref: ref
  }));
})));

if (false) {}

const FormImpl = /*#__PURE__*/(/* unused pure expression or super */ null && (React.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative,
    preventScrollReset
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative,
      preventScrollReset
    });
  };

  return /*#__PURE__*/React.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
})));

if (false) {}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */


function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}

if (false) {} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////


var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = React.useContext(UNSAFE_DataRouterContext);
  !ctx ?  false ? 0 : UNSAFE_invariant(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = React.useContext(UNSAFE_DataRouterStateContext);
  !state ?  false ? 0 : UNSAFE_invariant(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPath */ .WU)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(location) === (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? 0 : void 0;
  let defaultSearchParamsRef = React.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = React.useRef(false);
  let location = useLocation();
  let searchParams = React.useMemo(() => // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = useNavigate();
  let setSearchParams = React.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */

function useSubmit() {
  return useSubmitImpl();
}

function useSubmitImpl(fetcherKey, fetcherRouteId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let currentRouteId = UNSAFE_useRouteId();
  return React.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      action,
      method,
      encType,
      formData
    } = getFormSubmissionInfo(target, options, basename); // Base options shared between fetch() and navigate()

    let opts = {
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(fetcherRouteId != null) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
      router.fetch(fetcherKey, fetcherRouteId, action, opts);
    } else {
      router.navigate(action, _extends({}, opts, {
        replace: options.replace,
        fromRouteId: currentRouteId
      }));
    }
  }, [router, basename, fetcherKey, fetcherRouteId, currentRouteId]);
} // v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?


function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = React.useContext(UNSAFE_NavigationContext);
  let routeContext = React.useContext(UNSAFE_RouteContext);
  !routeContext ?  false ? 0 : UNSAFE_invariant(false) : void 0;
  let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  let path = _extends({}, useResolvedPath(action ? action : ".", {
    relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927


  let location = useLocation();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions


  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }

  return createPath(path);
}

function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/React.forwardRef((props, ref) => {
    return /*#__PURE__*/React.createElement(FormImpl, _extends({}, props, {
      ref: ref,
      fetcherKey: fetcherKey,
      routeId: routeId
    }));
  });

  if (false) {}

  return FetcherForm;
}

let fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */

function useFetcher() {
  var _route$matches;

  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = React.useContext(UNSAFE_RouteContext);
  !route ?  false ? 0 : UNSAFE_invariant(false) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ?  false ? 0 : UNSAFE_invariant(false) : void 0;
  let [fetcherKey] = React.useState(() => String(++fetcherId));
  let [Form] = React.useState(() => {
    !routeId ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = React.useState(() => href => {
    !router ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    !routeId ?  false ? 0 : UNSAFE_invariant(false) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitImpl(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = React.useMemo(() => _extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  React.useEffect(() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No router available to clean up from useFetcher()");
        return;
      }

      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */

function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */

function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation(); // Trigger manual scroll restoration while we're active

  React.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []); // Save positions on pagehide

  usePageHide(React.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }

    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches])); // Read in any saved scroll locations

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);

        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {// no-op, use default empty object
      }
    }, [storageKey]); // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks

    React.useLayoutEffect(() => {
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, getKey]); // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    React.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      } // been here before, scroll to it


      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      } // try to scroll to the hash


      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));

        if (el) {
          el.scrollIntoView();
          return;
        }
      } // Don't reset if this navigation opted out


      if (preventScrollReset === true) {
        return;
      } // otherwise go to the top on new locations


      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  React.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  React.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */


function usePrompt(_ref8) {
  let {
    when,
    message
  } = _ref8;
  let blocker = unstable_useBlocker(when);
  React.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
  React.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);

      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
}
 //#endregion


//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9ycy1hZGNiNDdhZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWE7O0FBRWIsUUFBUSxtQkFBTyxDQUFDLElBQVc7QUFDM0IsSUFBSSxJQUFxQztBQUN6QyxFQUFFLFNBQWtCO0FBQ3BCLEVBQUUseUJBQW1CO0FBQ3JCLEVBQUUsS0FBSyxVQWtCTjs7Ozs7Ozs7QUN4Qlk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUMsRUFBRSxFQVMxQztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwQ0FBNkQ7QUFDL0QsRUFBRSxLQUFLLEVBRU47Ozs7Ozs7O0FDckNZOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDck0wQjtBQUNuQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLGtCQUFrQixtQkFBbUIsSUFBSSxtQkFBbUI7O0FDUm5FLGVBQWUsU0FBSSxJQUFJLFNBQUk7QUFDM0I7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBSSxJQUFJLFNBQUk7QUFDekI7QUFDQTtBQUNBLDRIQUE0SCxjQUFjO0FBQzFJO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQ2tDO0FBQzVEO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDTztBQUNQO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5Qix1QkFBdUI7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSyxZQUFZLG1CQUFtQjtBQUNwQztBQUNBLFNBQVMsV0FBVyxpQkFBaUIsbUJBQW1CLENBQUMsV0FBVztBQUNwRTtBQUNBLEdBQUcsU0FBUyxjQUFjO0FBQzFCOztBQzlEZ0M7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQ0QzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMrQjtBQUM2UTtBQUM4ZjtBQUNyb0I7O0FBRXJLO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxXQUFXO0FBQ25CO0FBQ0EsS0FBSyxpQkFBaUI7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxxQkFBcUI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0E7QUFDQSxRQUFROzs7QUFHUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVpWDtBQUNqWCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2NsaWVudC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZhc3QtY29tcGFyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9lc20vaWNvbnNNYW5pZmVzdC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9lc20vaWNvbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZXNtL2ljb25CYXNlLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci1kb20vZGlzdC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBtID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIGV4cG9ydHMuaHlkcmF0ZVJvb3QgPSBtLmh5ZHJhdGVSb290O1xufSBlbHNlIHtcbiAgdmFyIGkgPSBtLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuICBleHBvcnRzLmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgZXhwb3J0cy5oeWRyYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIGgsIG8pIHtcbiAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBtLmh5ZHJhdGVSb290KGMsIGgsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gY2hlY2tEQ0UoKSB7XG4gIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbiAgaWYgKFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGJyYW5jaCBpcyB1bnJlYWNoYWJsZSBiZWNhdXNlIHRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWRcbiAgICAvLyBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGNvbmRpdGlvbiBpcyB0cnVlIG9ubHkgaW4gZGV2ZWxvcG1lbnQuXG4gICAgLy8gVGhlcmVmb3JlIGlmIHRoZSBicmFuY2ggaXMgc3RpbGwgaGVyZSwgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdhc24ndFxuICAgIC8vIHByb3Blcmx5IGFwcGxpZWQuXG4gICAgLy8gRG9uJ3QgY2hhbmdlIHRoZSBtZXNzYWdlLiBSZWFjdCBEZXZUb29scyByZWxpZXMgb24gaXQuIEFsc28gbWFrZSBzdXJlXG4gICAgLy8gdGhpcyBtZXNzYWdlIGRvZXNuJ3Qgb2NjdXIgZWxzZXdoZXJlIGluIHRoaXMgZnVuY3Rpb24sIG9yIGl0IHdpbGwgY2F1c2VcbiAgICAvLyBhIGZhbHNlIHBvc2l0aXZlLlxuICAgIHRocm93IG5ldyBFcnJvcignXl9eJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBWZXJpZnkgdGhhdCB0aGUgY29kZSBhYm92ZSBoYXMgYmVlbiBkZWFkIGNvZGUgZWxpbWluYXRlZCAoRENFJ2QpLlxuICAgIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5jaGVja0RDRShjaGVja0RDRSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIERldlRvb2xzIHNob3VsZG4ndCBjcmFzaCBSZWFjdCwgbm8gbWF0dGVyIHdoYXQuXG4gICAgLy8gV2Ugc2hvdWxkIHN0aWxsIHJlcG9ydCBpbiBjYXNlIHdlIGJyZWFrIHRoaXMgY29kZS5cbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gRENFIGNoZWNrIHNob3VsZCBoYXBwZW4gYmVmb3JlIFJlYWN0RE9NIGJ1bmRsZSBleGVjdXRlcyBzbyB0aGF0XG4gIC8vIERldlRvb2xzIGNhbiByZXBvcnQgYmFkIG1pbmlmaWNhdGlvbiBkdXJpbmcgaW5qZWN0aW9uLlxuICBjaGVja0RDRSgpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xudmFyIGtleUxpc3QgPSBPYmplY3Qua2V5cztcbnZhciBoYXNQcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBoYXNFbGVtZW50VHlwZSA9IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJztcblxuZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICAvLyBmYXN0LWRlZXAtZXF1YWwgaW5kZXguanMgMi4wLjFcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYXJyQSA9IGlzQXJyYXkoYSlcbiAgICAgICwgYXJyQiA9IGlzQXJyYXkoYilcbiAgICAgICwgaVxuICAgICAgLCBsZW5ndGhcbiAgICAgICwga2V5O1xuXG4gICAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlXG4gICAgICAsIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG5cbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICwgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuXG4gICAgdmFyIGtleXMgPSBrZXlMaXN0KGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0ga2V5TGlzdChiKS5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxuICAgIC8vIHN0YXJ0IHJlYWN0LWZhc3QtY29tcGFyZVxuICAgIC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgRE9NIGVsZW1lbnRzXG4gICAgaWYgKGhhc0VsZW1lbnRUeXBlICYmIGEgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGIgaW5zdGFuY2VvZiBFbGVtZW50KVxuICAgICAgcmV0dXJuIGEgPT09IGI7XG5cbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIFJlYWN0XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKGtleSA9PT0gJ19vd25lcicgJiYgYS4kJHR5cGVvZikge1xuICAgICAgICAvLyBSZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBSZWFjdCBlbGVtZW50cycgX293bmVyLlxuICAgICAgICAvLyAgX293bmVyIGNvbnRhaW5zIGNpcmN1bGFyIHJlZmVyZW5jZXNcbiAgICAgICAgLy8gYW5kIGlzIG5vdCBuZWVkZWQgd2hlbiBjb21wYXJpbmcgdGhlIGFjdHVhbCBlbGVtZW50cyAoYW5kIG5vdCB0aGVpciBvd25lcnMpXG4gICAgICAgIC8vIC4kJHR5cGVvZiBhbmQgLl9zdG9yZSBvbiBqdXN0IHJlYXNvbmFibGUgbWFya2VycyBvZiBhIHJlYWN0IGVsZW1lbnRcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbGwgb3RoZXIgcHJvcGVydGllcyBzaG91bGQgYmUgdHJhdmVyc2VkIGFzIHVzdWFsXG4gICAgICAgIGlmICghZXF1YWwoYVtrZXldLCBiW2tleV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGVuZCByZWFjdC1mYXN0LWNvbXBhcmVcblxuICAgIC8vIGZhc3QtZGVlcC1lcXVhbCBpbmRleC5qcyAyLjAuMVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cbi8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHBvcnRlZEVxdWFsKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZXF1YWwoYSwgYik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKChlcnJvci5tZXNzYWdlICYmIGVycm9yLm1lc3NhZ2UubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkgfHwgKGVycm9yLm51bWJlciA9PT0gLTIxNDY4MjgyNjApKSB7XG4gICAgICAvLyB3YXJuIG9uIGNpcmN1bGFyIHJlZmVyZW5jZXMsIGRvbid0IGNyYXNoXG4gICAgICAvLyBicm93c2VycyBnaXZlIHRoaXMgZGlmZmVyZW50IGVycm9ycyBuYW1lIGFuZCBtZXNzYWdlczpcbiAgICAgIC8vIGNocm9tZS9zYWZhcmk6IFwiUmFuZ2VFcnJvclwiLCBcIk1heGltdW0gY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCJcbiAgICAgIC8vIGZpcmVmb3g6IFwiSW50ZXJuYWxFcnJvclwiLCB0b28gbXVjaCByZWN1cnNpb25cIlxuICAgICAgLy8gZWRnZTogXCJFcnJvclwiLCBcIk91dCBvZiBzdGFjayBzcGFjZVwiXG4gICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IHJlYWN0LWZhc3QtY29tcGFyZSBkb2VzIG5vdCBoYW5kbGUgY2lyY3VsYXIgcmVmZXJlbmNlcy4nLCBlcnJvci5uYW1lLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gc29tZSBvdGhlciBlcnJvci4gd2Ugc2hvdWxkIGRlZmluaXRlbHkga25vdyBhYm91dCB0aGVzZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwiZXhwb3J0IHZhciBJY29uc01hbmlmZXN0ID0gW1xuICB7XG4gICAgXCJpZFwiOiBcImNpXCIsXG4gICAgXCJuYW1lXCI6IFwiQ2lyY3VtIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9jaXJjdW1pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTVBMLTIuMCBsaWNlbnNlXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0tsYXJyLUFnZW5jeS9DaXJjdW0tSWNvbnMvYmxvYi9tYWluL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImZhXCIsXG4gICAgXCJuYW1lXCI6IFwiRm9udCBBd2Vzb21lIDVcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSA0LjAgTGljZW5zZVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpb1wiLFxuICAgIFwibmFtZVwiOiBcIklvbmljb25zIDRcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2lvbmljb25zLmNvbS9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJpbzVcIixcbiAgICBcIm5hbWVcIjogXCJJb25pY29ucyA1XCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9pb25pY29ucy5jb20vXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwibWRcIixcbiAgICBcIm5hbWVcIjogXCJNYXRlcmlhbCBEZXNpZ24gaWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ0aVwiLFxuICAgIFwibmFtZVwiOiBcIlR5cGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cDovL3MtaW5ncy5jb20vdHlwaWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlktU0EgMy4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzMuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImdvXCIsXG4gICAgXCJuYW1lXCI6IFwiR2l0aHViIE9jdGljb25zIGljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9vY3RpY29ucy5naXRodWIuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmltZXIvb2N0aWNvbnMvYmxvYi9tYXN0ZXIvTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZmlcIixcbiAgICBcIm5hbWVcIjogXCJGZWF0aGVyXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9mZWF0aGVyaWNvbnMuY29tL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0aGVyaWNvbnMvZmVhdGhlci9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJsdVwiLFxuICAgIFwibmFtZVwiOiBcIkx1Y2lkZVwiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vbHVjaWRlLmRldi9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJJU0NcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbHVjaWRlLWljb25zL2x1Y2lkZS9ibG9iL21haW4vTElDRU5TRVwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZ2lcIixcbiAgICBcIm5hbWVcIjogXCJHYW1lIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9nYW1lLWljb25zLm5ldC9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJDQyBCWSAzLjBcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnkvMy4wL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwid2lcIixcbiAgICBcIm5hbWVcIjogXCJXZWF0aGVyIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9lcmlrZmxvd2Vycy5naXRodWIuaW8vd2VhdGhlci1pY29ucy9cIixcbiAgICBcImxpY2Vuc2VcIjogXCJTSUwgT0ZMIDEuMVwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHA6Ly9zY3JpcHRzLnNpbC5vcmcvT0ZMXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJkaVwiLFxuICAgIFwibmFtZVwiOiBcIkRldmljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly92b3JpbGxhei5naXRodWIuaW8vZGV2aWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImFpXCIsXG4gICAgXCJuYW1lXCI6IFwiQW50IERlc2lnbiBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24taWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYnNcIixcbiAgICBcIm5hbWVcIjogXCJCb290c3RyYXAgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdHdicy9pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJyaVwiLFxuICAgIFwibmFtZVwiOiBcIlJlbWl4IEljb25cIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vUmVtaXgtRGVzaWduL1JlbWl4SWNvblwiLFxuICAgIFwibGljZW5zZVwiOiBcIkFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiZmNcIixcbiAgICBcIm5hbWVcIjogXCJGbGF0IENvbG9yIEljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ljb25zOC9mbGF0LWNvbG9yLWljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImdyXCIsXG4gICAgXCJuYW1lXCI6IFwiR3JvbW1ldC1JY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ncm9tbWV0L2dyb21tZXQtaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImhpXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVyb2ljb25zXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy9oZXJvaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiaGkyXCIsXG4gICAgXCJuYW1lXCI6IFwiSGVyb2ljb25zIDJcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL2hlcm9pY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJzaVwiLFxuICAgIFwibmFtZVwiOiBcIlNpbXBsZSBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vc2ltcGxlaWNvbnMub3JnL1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDMCAxLjAgVW5pdmVyc2FsXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL3B1YmxpY2RvbWFpbi96ZXJvLzEuMC9cIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInNsXCIsXG4gICAgXCJuYW1lXCI6IFwiU2ltcGxlIExpbmUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL3RoZXNhYmJpci5naXRodWIuaW8vc2ltcGxlLWxpbmUtaWNvbnMvXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcImltXCIsXG4gICAgXCJuYW1lXCI6IFwiSWNvTW9vbiBGcmVlXCIsXG4gICAgXCJwcm9qZWN0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL0ljb01vb24tRnJlZVwiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDQuMCBMaWNlbnNlXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0tleWFtb29uL0ljb01vb24tRnJlZS9ibG9iL21hc3Rlci9MaWNlbnNlLnR4dFwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiYmlcIixcbiAgICBcIm5hbWVcIjogXCJCb3hJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hdGlzYXdkL2JveGljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiQ0MgQlkgNC4wIExpY2Vuc2VcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vYXRpc2F3ZC9ib3hpY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJjZ1wiLFxuICAgIFwibmFtZVwiOiBcImNzcy5nZ1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9hc3RyaXQvY3NzLmdnXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInZzY1wiLFxuICAgIFwibmFtZVwiOiBcIlZTIENvZGUgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L3ZzY29kZS1jb2RpY29uc1wiLFxuICAgIFwibGljZW5zZVwiOiBcIkNDIEJZIDQuMFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJ0YlwiLFxuICAgIFwibmFtZVwiOiBcIlRhYmxlciBJY29uc1wiLFxuICAgIFwicHJvamVjdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YWJsZXIvdGFibGVyLWljb25zXCIsXG4gICAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gICAgXCJsaWNlbnNlVXJsXCI6IFwiaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInRmaVwiLFxuICAgIFwibmFtZVwiOiBcIlRoZW1pZnkgSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbHlrbWFwaXBvL3RoZW1pZnktaWNvbnNcIixcbiAgICBcImxpY2Vuc2VcIjogXCJNSVRcIixcbiAgICBcImxpY2Vuc2VVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGhlY3JlYXRpb24vc3RhbmRhcmQtaWNvbnMvYmxvYi9tYXN0ZXIvbW9kdWxlcy90aGVtaWZ5LWljb25zL0xJQ0VOU0VcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcInJ4XCIsXG4gICAgXCJuYW1lXCI6IFwiUmFkaXggSWNvbnNcIixcbiAgICBcInByb2plY3RVcmxcIjogXCJodHRwczovL2ljb25zLnJhZGl4LXVpLmNvbVwiLFxuICAgIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICAgIFwibGljZW5zZVVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yYWRpeC11aS9pY29ucy9ibG9iL21hc3Rlci9MSUNFTlNFXCJcbiAgfVxuXSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB2YXIgRGVmYXVsdENvbnRleHQgPSB7XG4gIGNvbG9yOiB1bmRlZmluZWQsXG4gIHNpemU6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXG4gIHN0eWxlOiB1bmRlZmluZWQsXG4gIGF0dHI6IHVuZGVmaW5lZFxufTtcbmV4cG9ydCB2YXIgSWNvbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0ICYmIFJlYWN0LmNyZWF0ZUNvbnRleHQoRGVmYXVsdENvbnRleHQpOyIsInZhciBfX2Fzc2lnbiA9IHRoaXMgJiYgdGhpcy5fX2Fzc2lnbiB8fCBmdW5jdGlvbiAoKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9O1xuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSWNvbkNvbnRleHQsIERlZmF1bHRDb250ZXh0IH0gZnJvbSBcIi4vaWNvbkNvbnRleHRcIjtcbmZ1bmN0aW9uIFRyZWUyRWxlbWVudCh0cmVlKSB7XG4gIHJldHVybiB0cmVlICYmIHRyZWUubWFwKGZ1bmN0aW9uIChub2RlLCBpKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcsIF9fYXNzaWduKHtcbiAgICAgIGtleTogaVxuICAgIH0sIG5vZGUuYXR0ciksIFRyZWUyRWxlbWVudChub2RlLmNoaWxkKSk7XG4gIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIEdlbkljb24oZGF0YSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQmFzZSwgX19hc3NpZ24oe1xuICAgICAgYXR0cjogX19hc3NpZ24oe30sIGRhdGEuYXR0cilcbiAgICB9LCBwcm9wcyksIFRyZWUyRWxlbWVudChkYXRhLmNoaWxkKSk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gSWNvbkJhc2UocHJvcHMpIHtcbiAgdmFyIGVsZW0gPSBmdW5jdGlvbiAoY29uZikge1xuICAgIHZhciBhdHRyID0gcHJvcHMuYXR0cixcbiAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgIHN2Z1Byb3BzID0gX19yZXN0KHByb3BzLCBbXCJhdHRyXCIsIFwic2l6ZVwiLCBcInRpdGxlXCJdKTtcbiAgICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCBjb25mLnNpemUgfHwgXCIxZW1cIjtcbiAgICB2YXIgY2xhc3NOYW1lO1xuICAgIGlmIChjb25mLmNsYXNzTmFtZSkgY2xhc3NOYW1lID0gY29uZi5jbGFzc05hbWU7XG4gICAgaWYgKHByb3BzLmNsYXNzTmFtZSkgY2xhc3NOYW1lID0gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSArIFwiIFwiIDogXCJcIikgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX19hc3NpZ24oe1xuICAgICAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICAgICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICAgIHN0cm9rZVdpZHRoOiBcIjBcIlxuICAgIH0sIGNvbmYuYXR0ciwgYXR0ciwgc3ZnUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHtcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yIHx8IGNvbmYuY29sb3JcbiAgICAgIH0sIGNvbmYuc3R5bGUpLCBwcm9wcy5zdHlsZSksXG4gICAgICBoZWlnaHQ6IGNvbXB1dGVkU2l6ZSxcbiAgICAgIHdpZHRoOiBjb21wdXRlZFNpemUsXG4gICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgfSksIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCB0aXRsZSksIHByb3BzLmNoaWxkcmVuKTtcbiAgfTtcbiAgcmV0dXJuIEljb25Db250ZXh0ICE9PSB1bmRlZmluZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29uZikge1xuICAgIHJldHVybiBlbGVtKGNvbmYpO1xuICB9KSA6IGVsZW0oRGVmYXVsdENvbnRleHQpO1xufSIsImV4cG9ydCAqIGZyb20gXCIuL2ljb25zTWFuaWZlc3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2ljb25CYXNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pY29uQ29udGV4dFwiOyIsIi8qKlxuICogUmVhY3QgUm91dGVyIERPTSB2Ni4xMS4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFVOU0FGRV9tYXBSb3V0ZVByb3BlcnRpZXMsIFJvdXRlciwgVU5TQUZFX05hdmlnYXRpb25Db250ZXh0LCB1c2VIcmVmLCB1c2VSZXNvbHZlZFBhdGgsIHVzZUxvY2F0aW9uLCBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgdXNlTmF2aWdhdGUsIGNyZWF0ZVBhdGgsIFVOU0FGRV91c2VSb3V0ZUlkLCBVTlNBRkVfUm91dGVDb250ZXh0LCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0aW9uLCB1bnN0YWJsZV91c2VCbG9ja2VyLCBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEF3YWl0LCBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBOYXZpZ2F0aW9uVHlwZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJQcm92aWRlciwgUm91dGVzLCBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsIFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0LCBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIFVOU0FGRV91c2VSb3V0ZUlkLCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVuZGVyTWF0Y2hlcywgcmVzb2x2ZVBhdGgsIHVuc3RhYmxlX3VzZUJsb2NrZXIsIHVzZUFjdGlvbkRhdGEsIHVzZUFzeW5jRXJyb3IsIHVzZUFzeW5jVmFsdWUsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvbiwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJldmFsaWRhdG9yLCB1c2VSb3V0ZUVycm9yLCB1c2VSb3V0ZUxvYWRlckRhdGEsIHVzZVJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBzdHJpcEJhc2VuYW1lLCBjcmVhdGVSb3V0ZXIsIGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVIYXNoSGlzdG9yeSwgRXJyb3JSZXNwb25zZSwgVU5TQUZFX3dhcm5pbmcsIFVOU0FGRV9pbnZhcmlhbnQsIGpvaW5QYXRocyB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuY29uc3QgZGVmYXVsdE1ldGhvZCA9IFwiZ2V0XCI7XG5jb25zdCBkZWZhdWx0RW5jVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5mdW5jdGlvbiBpc0h0bWxFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdC50YWdOYW1lID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNCdXR0b25FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiYnV0dG9uXCI7XG59XG5mdW5jdGlvbiBpc0Zvcm1FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZm9ybVwiO1xufVxuZnVuY3Rpb24gaXNJbnB1dEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBMZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICA7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoUGFyYW1zKGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModHlwZW9mIGluaXQgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShpbml0KSB8fCBpbml0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gaW5pdCA6IE9iamVjdC5rZXlzKGluaXQpLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gaW5pdFtrZXldO1xuICAgIHJldHVybiBtZW1vLmNvbmNhdChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2ID0+IFtrZXksIHZdKSA6IFtba2V5LCB2YWx1ZV1dKTtcbiAgfSwgW10pKTtcbn1cbmZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uU2VhcmNoLCBkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb25TZWFyY2gpO1xuXG4gIGlmIChkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIGRlZmF1bHRTZWFyY2hQYXJhbXMua2V5cygpKSB7XG4gICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xuICAgICAgICBkZWZhdWx0U2VhcmNoUGFyYW1zLmdldEFsbChrZXkpLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5mdW5jdGlvbiBnZXRGb3JtU3VibWlzc2lvbkluZm8odGFyZ2V0LCBvcHRpb25zLCBiYXNlbmFtZSkge1xuICBsZXQgbWV0aG9kO1xuICBsZXQgYWN0aW9uID0gbnVsbDtcbiAgbGV0IGVuY1R5cGU7XG4gIGxldCBmb3JtRGF0YTtcblxuICBpZiAoaXNGb3JtRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgbGV0IHN1Ym1pc3Npb25UcmlnZ2VyID0gb3B0aW9ucy5zdWJtaXNzaW9uVHJpZ2dlcjtcblxuICAgIGlmIChvcHRpb25zLmFjdGlvbikge1xuICAgICAgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gZ3JhYmJpbmcgdGhlIGFjdGlvbiBmcm9tIHRoZSBlbGVtZW50LCBpdCB3aWxsIGhhdmUgaGFkIHRoZSBiYXNlbmFtZVxuICAgICAgLy8gcHJlZml4ZWQgdG8gZW5zdXJlIG5vbi1KUyBzY2VuYXJpb3Mgd29yaywgc28gc3RyaXAgaXQgc2luY2Ugd2UnbGxcbiAgICAgIC8vIHJlLXByZWZpeCBpbiB0aGUgcm91dGVyXG4gICAgICBsZXQgYXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIik7XG4gICAgICBhY3Rpb24gPSBhdHRyID8gc3RyaXBCYXNlbmFtZShhdHRyLCBiYXNlbmFtZSkgOiBudWxsO1xuICAgIH1cblxuICAgIG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIikgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIpIHx8IGRlZmF1bHRFbmNUeXBlO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG5cbiAgICBpZiAoc3VibWlzc2lvblRyaWdnZXIgJiYgc3VibWlzc2lvblRyaWdnZXIubmFtZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHN1Ym1pc3Npb25UcmlnZ2VyLm5hbWUsIHN1Ym1pc3Npb25UcmlnZ2VyLnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCdXR0b25FbGVtZW50KHRhcmdldCkgfHwgaXNJbnB1dEVsZW1lbnQodGFyZ2V0KSAmJiAodGFyZ2V0LnR5cGUgPT09IFwic3VibWl0XCIgfHwgdGFyZ2V0LnR5cGUgPT09IFwiaW1hZ2VcIikpIHtcbiAgICBsZXQgZm9ybSA9IHRhcmdldC5mb3JtO1xuXG4gICAgaWYgKGZvcm0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBhIDxidXR0b24+IG9yIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiPiB3aXRob3V0IGEgPGZvcm0+XCIpO1xuICAgIH0gLy8gPGJ1dHRvbj4vPGlucHV0IHR5cGU9XCJzdWJtaXRcIj4gbWF5IG92ZXJyaWRlIGF0dHJpYnV0ZXMgb2YgPGZvcm0+XG5cblxuICAgIGlmIChvcHRpb25zLmFjdGlvbikge1xuICAgICAgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gZ3JhYmJpbmcgdGhlIGFjdGlvbiBmcm9tIHRoZSBlbGVtZW50LCBpdCB3aWxsIGhhdmUgaGFkIHRoZSBiYXNlbmFtZVxuICAgICAgLy8gcHJlZml4ZWQgdG8gZW5zdXJlIG5vbi1KUyBzY2VuYXJpb3Mgd29yaywgc28gc3RyaXAgaXQgc2luY2Ugd2UnbGxcbiAgICAgIC8vIHJlLXByZWZpeCBpbiB0aGUgcm91dGVyXG4gICAgICBsZXQgYXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtYWN0aW9uXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpO1xuICAgICAgYWN0aW9uID0gYXR0ciA/IHN0cmlwQmFzZW5hbWUoYXR0ciwgYmFzZW5hbWUpIDogbnVsbDtcbiAgICB9XG5cbiAgICBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGVuY1R5cGUgPSBvcHRpb25zLmVuY1R5cGUgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1lbmN0eXBlXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwiZW5jdHlwZVwiKSB8fCBkZWZhdWx0RW5jVHlwZTtcbiAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTsgLy8gSW5jbHVkZSBuYW1lICsgdmFsdWUgZnJvbSBhIDxidXR0b24+LCBhcHBlbmRpbmcgaW4gY2FzZSB0aGUgYnV0dG9uIG5hbWVcbiAgICAvLyBtYXRjaGVzIGFuIGV4aXN0aW5nIGlucHV0IG5hbWVcblxuICAgIGlmICh0YXJnZXQubmFtZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHRhcmdldC5uYW1lLCB0YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0h0bWxFbGVtZW50KHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3VibWl0IGVsZW1lbnQgdGhhdCBpcyBub3QgPGZvcm0+LCA8YnV0dG9uPiwgb3IgXCIgKyBcIjxpbnB1dCB0eXBlPVxcXCJzdWJtaXR8aW1hZ2VcXFwiPlwiKTtcbiAgfSBlbHNlIHtcbiAgICBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IG51bGw7XG4gICAgZW5jVHlwZSA9IG9wdGlvbnMuZW5jVHlwZSB8fCBkZWZhdWx0RW5jVHlwZTtcblxuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgZm9ybURhdGEgPSB0YXJnZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgZm9yIChsZXQgW25hbWUsIHZhbHVlXSBvZiB0YXJnZXQpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgb2YgT2JqZWN0LmtleXModGFyZ2V0KSkge1xuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChuYW1lLCB0YXJnZXRbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBhY3Rpb24sXG4gICAgbWV0aG9kOiBtZXRob2QudG9Mb3dlckNhc2UoKSxcbiAgICBlbmNUeXBlLFxuICAgIGZvcm1EYXRhXG4gIH07XG59XG5cbmNvbnN0IF9leGNsdWRlZCA9IFtcIm9uQ2xpY2tcIiwgXCJyZWxhdGl2ZVwiLCBcInJlbG9hZERvY3VtZW50XCIsIFwicmVwbGFjZVwiLCBcInN0YXRlXCIsIFwidGFyZ2V0XCIsIFwidG9cIiwgXCJwcmV2ZW50U2Nyb2xsUmVzZXRcIl0sXG4gICAgICBfZXhjbHVkZWQyID0gW1wiYXJpYS1jdXJyZW50XCIsIFwiY2FzZVNlbnNpdGl2ZVwiLCBcImNsYXNzTmFtZVwiLCBcImVuZFwiLCBcInN0eWxlXCIsIFwidG9cIiwgXCJjaGlsZHJlblwiXSxcbiAgICAgIF9leGNsdWRlZDMgPSBbXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJtZXRob2RcIiwgXCJhY3Rpb25cIiwgXCJvblN1Ym1pdFwiLCBcImZldGNoZXJLZXlcIiwgXCJyb3V0ZUlkXCIsIFwicmVsYXRpdmVcIiwgXCJwcmV2ZW50U2Nyb2xsUmVzZXRcIl07XG5mdW5jdGlvbiBjcmVhdGVCcm93c2VyUm91dGVyKHJvdXRlcywgb3B0cykge1xuICByZXR1cm4gY3JlYXRlUm91dGVyKHtcbiAgICBiYXNlbmFtZTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5iYXNlbmFtZSxcbiAgICBmdXR1cmU6IF9leHRlbmRzKHt9LCBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmZ1dHVyZSwge1xuICAgICAgdjdfcHJlcGVuZEJhc2VuYW1lOiB0cnVlXG4gICAgfSksXG4gICAgaGlzdG9yeTogY3JlYXRlQnJvd3Nlckhpc3Rvcnkoe1xuICAgICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEpIHx8IHBhcnNlSHlkcmF0aW9uRGF0YSgpLFxuICAgIHJvdXRlcyxcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXM6IFVOU0FGRV9tYXBSb3V0ZVByb3BlcnRpZXNcbiAgfSkuaW5pdGlhbGl6ZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlSGFzaFJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBfZXh0ZW5kcyh7fSwgb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5mdXR1cmUsIHtcbiAgICAgIHY3X3ByZXBlbmRCYXNlbmFtZTogdHJ1ZVxuICAgIH0pLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUhhc2hIaXN0b3J5KHtcbiAgICAgIHdpbmRvdzogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy53aW5kb3dcbiAgICB9KSxcbiAgICBoeWRyYXRpb25EYXRhOiAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhKSB8fCBwYXJzZUh5ZHJhdGlvbkRhdGEoKSxcbiAgICByb3V0ZXMsXG4gICAgbWFwUm91dGVQcm9wZXJ0aWVzOiBVTlNBRkVfbWFwUm91dGVQcm9wZXJ0aWVzXG4gIH0pLmluaXRpYWxpemUoKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIeWRyYXRpb25EYXRhKCkge1xuICB2YXIgX3dpbmRvdztcblxuICBsZXQgc3RhdGUgPSAoX3dpbmRvdyA9IHdpbmRvdykgPT0gbnVsbCA/IHZvaWQgMCA6IF93aW5kb3cuX19zdGF0aWNSb3V0ZXJIeWRyYXRpb25EYXRhO1xuXG4gIGlmIChzdGF0ZSAmJiBzdGF0ZS5lcnJvcnMpIHtcbiAgICBzdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgZXJyb3JzOiBkZXNlcmlhbGl6ZUVycm9ycyhzdGF0ZS5lcnJvcnMpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplRXJyb3JzKGVycm9ycykge1xuICBpZiAoIWVycm9ycykgcmV0dXJuIG51bGw7XG4gIGxldCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMoZXJyb3JzKTtcbiAgbGV0IHNlcmlhbGl6ZWQgPSB7fTtcblxuICBmb3IgKGxldCBba2V5LCB2YWxdIG9mIGVudHJpZXMpIHtcbiAgICAvLyBIZXkgeW91ISAgSWYgeW91IGNoYW5nZSB0aGlzLCBwbGVhc2UgY2hhbmdlIHRoZSBjb3JyZXNwb25kaW5nIGxvZ2ljIGluXG4gICAgLy8gc2VyaWFsaXplRXJyb3JzIGluIHJlYWN0LXJvdXRlci1kb20vc2VydmVyLnRzeCA6KVxuICAgIGlmICh2YWwgJiYgdmFsLl9fdHlwZSA9PT0gXCJSb3V0ZUVycm9yUmVzcG9uc2VcIikge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gbmV3IEVycm9yUmVzcG9uc2UodmFsLnN0YXR1cywgdmFsLnN0YXR1c1RleHQsIHZhbC5kYXRhLCB2YWwuaW50ZXJuYWwgPT09IHRydWUpO1xuICAgIH0gZWxzZSBpZiAodmFsICYmIHZhbC5fX3R5cGUgPT09IFwiRXJyb3JcIikge1xuICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHZhbC5tZXNzYWdlKTsgLy8gV2lwZSBhd2F5IHRoZSBjbGllbnQtc2lkZSBzdGFjayB0cmFjZS4gIE5vdGhpbmcgdG8gZmlsbCBpdCBpbiB3aXRoXG4gICAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHNlcmlhbGl6ZSBTU1Igc3RhY2sgdHJhY2VzIGZvciBzZWN1cml0eSByZWFzb25zXG5cbiAgICAgIGVycm9yLnN0YWNrID0gXCJcIjtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IGVycm9yO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCBmb3IgdXNlIGluIHdlYiBicm93c2Vycy4gUHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKi9cblxuXG5mdW5jdGlvbiBCcm93c2VyUm91dGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWY7XG4gIGxldCBoaXN0b3J5UmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgaWYgKGhpc3RvcnlSZWYuY3VycmVudCA9PSBudWxsKSB7XG4gICAgaGlzdG9yeVJlZi5jdXJyZW50ID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnkoe1xuICAgICAgd2luZG93LFxuICAgICAgdjVDb21wYXQ6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFN0b3JlcyB0aGUgbG9jYXRpb24gaW4gdGhlIGhhc2hcbiAqIHBvcnRpb24gb2YgdGhlIFVSTCBzbyBpdCBpcyBub3Qgc2VudCB0byB0aGUgc2VydmVyLlxuICovXG5cbmZ1bmN0aW9uIEhhc2hSb3V0ZXIoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICB3aW5kb3dcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUhhc2hIaXN0b3J5KHtcbiAgICAgIHdpbmRvdyxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIHRoYXQgYWNjZXB0cyBhIHByZS1pbnN0YW50aWF0ZWQgaGlzdG9yeSBvYmplY3QuIEl0J3MgaW1wb3J0YW50XG4gKiB0byBub3RlIHRoYXQgdXNpbmcgeW91ciBvd24gaGlzdG9yeSBvYmplY3QgaXMgaGlnaGx5IGRpc2NvdXJhZ2VkIGFuZCBtYXkgYWRkXG4gKiB0d28gdmVyc2lvbnMgb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0byB5b3VyIGJ1bmRsZXMgdW5sZXNzIHlvdSB1c2UgdGhlIHNhbWVcbiAqIHZlcnNpb24gb2YgdGhlIGhpc3RvcnkgbGlicmFyeSB0aGF0IFJlYWN0IFJvdXRlciB1c2VzIGludGVybmFsbHkuXG4gKi9cblxuZnVuY3Rpb24gSGlzdG9yeVJvdXRlcihfcmVmMykge1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIGhpc3RvcnlcbiAgfSA9IF9yZWYzO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgSGlzdG9yeVJvdXRlci5kaXNwbGF5TmFtZSA9IFwidW5zdGFibGVfSGlzdG9yeVJvdXRlclwiO1xufVxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcbmNvbnN0IEFCU09MVVRFX1VSTF9SRUdFWCA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHJlbmRlcmluZyBhIGhpc3RvcnktYXdhcmUgPGE+LlxuICovXG5cbmNvbnN0IExpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMaW5rV2l0aFJlZihfcmVmNCwgcmVmKSB7XG4gIGxldCB7XG4gICAgb25DbGljayxcbiAgICByZWxhdGl2ZSxcbiAgICByZWxvYWREb2N1bWVudCxcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHRhcmdldCxcbiAgICB0byxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IF9yZWY0LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBfZXhjbHVkZWQpO1xuXG4gIGxldCB7XG4gICAgYmFzZW5hbWVcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX05hdmlnYXRpb25Db250ZXh0KTsgLy8gUmVuZGVyZWQgaW50byA8YSBocmVmPiBmb3IgYWJzb2x1dGUgVVJMc1xuXG4gIGxldCBhYnNvbHV0ZUhyZWY7XG4gIGxldCBpc0V4dGVybmFsID0gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiAmJiBBQlNPTFVURV9VUkxfUkVHRVgudGVzdCh0bykpIHtcbiAgICAvLyBSZW5kZXIgdGhlIGFic29sdXRlIGhyZWYgc2VydmVyLSBhbmQgY2xpZW50LXNpZGVcbiAgICBhYnNvbHV0ZUhyZWYgPSB0bzsgLy8gT25seSBjaGVjayBmb3IgZXh0ZXJuYWwgb3JpZ2lucyBjbGllbnQtc2lkZVxuXG4gICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgbGV0IHRhcmdldFVybCA9IHRvLnN0YXJ0c1dpdGgoXCIvL1wiKSA/IG5ldyBVUkwoY3VycmVudFVybC5wcm90b2NvbCArIHRvKSA6IG5ldyBVUkwodG8pO1xuICAgICAgICBsZXQgcGF0aCA9IHN0cmlwQmFzZW5hbWUodGFyZ2V0VXJsLnBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFVybC5vcmlnaW4gPT09IGN1cnJlbnRVcmwub3JpZ2luICYmIHBhdGggIT0gbnVsbCkge1xuICAgICAgICAgIC8vIFN0cmlwIHRoZSBwcm90b2NvbC9vcmlnaW4vYmFzZW5hbWUgZm9yIHNhbWUtb3JpZ2luIGFic29sdXRlIFVSTHNcbiAgICAgICAgICB0byA9IHBhdGggKyB0YXJnZXRVcmwuc2VhcmNoICsgdGFyZ2V0VXJsLmhhc2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNFeHRlcm5hbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gV2UgY2FuJ3QgZG8gZXh0ZXJuYWwgVVJMIGRldGVjdGlvbiB3aXRob3V0IGEgdmFsaWQgVVJMXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGZhbHNlLCBcIjxMaW5rIHRvPVxcXCJcIiArIHRvICsgXCJcXFwiPiBjb250YWlucyBhbiBpbnZhbGlkIFVSTCB3aGljaCB3aWxsIHByb2JhYmx5IGJyZWFrIFwiICsgXCJ3aGVuIGNsaWNrZWQgLSBwbGVhc2UgdXBkYXRlIHRvIGEgdmFsaWQgVVJMIHBhdGguXCIpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZW5kZXJlZCBpbnRvIDxhIGhyZWY+IGZvciByZWxhdGl2ZSBVUkxzXG5cblxuICBsZXQgaHJlZiA9IHVzZUhyZWYodG8sIHtcbiAgICByZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGludGVybmFsT25DbGljayA9IHVzZUxpbmtDbGlja0hhbmRsZXIodG8sIHtcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHRhcmdldCxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVsYXRpdmVcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAob25DbGljaykgb25DbGljayhldmVudCk7XG5cbiAgICBpZiAoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGludGVybmFsT25DbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2FuY2hvci1oYXMtY29udGVudFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICBocmVmOiBhYnNvbHV0ZUhyZWYgfHwgaHJlZixcbiAgICAgIG9uQ2xpY2s6IGlzRXh0ZXJuYWwgfHwgcmVsb2FkRG9jdW1lbnQgPyBvbkNsaWNrIDogaGFuZGxlQ2xpY2ssXG4gICAgICByZWY6IHJlZixcbiAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgfSkpXG4gICk7XG59KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBMaW5rLmRpc3BsYXlOYW1lID0gXCJMaW5rXCI7XG59XG4vKipcbiAqIEEgPExpbms+IHdyYXBwZXIgdGhhdCBrbm93cyBpZiBpdCdzIFwiYWN0aXZlXCIgb3Igbm90LlxuICovXG5cblxuY29uc3QgTmF2TGluayA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIE5hdkxpbmtXaXRoUmVmKF9yZWY1LCByZWYpIHtcbiAgbGV0IHtcbiAgICBcImFyaWEtY3VycmVudFwiOiBhcmlhQ3VycmVudFByb3AgPSBcInBhZ2VcIixcbiAgICBjYXNlU2Vuc2l0aXZlID0gZmFsc2UsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wID0gXCJcIixcbiAgICBlbmQgPSBmYWxzZSxcbiAgICBzdHlsZTogc3R5bGVQcm9wLFxuICAgIHRvLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmNSxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgX2V4Y2x1ZGVkMik7XG5cbiAgbGV0IHBhdGggPSB1c2VSZXNvbHZlZFBhdGgodG8sIHtcbiAgICByZWxhdGl2ZTogcmVzdC5yZWxhdGl2ZVxuICB9KTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlclN0YXRlID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB0b1BhdGhuYW1lID0gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uID8gbmF2aWdhdG9yLmVuY29kZUxvY2F0aW9uKHBhdGgpLnBhdGhuYW1lIDogcGF0aC5wYXRobmFtZTtcbiAgbGV0IGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgbGV0IG5leHRMb2NhdGlvblBhdGhuYW1lID0gcm91dGVyU3RhdGUgJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbiAmJiByb3V0ZXJTdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uID8gcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbi5wYXRobmFtZSA6IG51bGw7XG5cbiAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XG4gICAgbG9jYXRpb25QYXRobmFtZSA9IGxvY2F0aW9uUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBuZXh0TG9jYXRpb25QYXRobmFtZSA9IG5leHRMb2NhdGlvblBhdGhuYW1lID8gbmV4dExvY2F0aW9uUGF0aG5hbWUudG9Mb3dlckNhc2UoKSA6IG51bGw7XG4gICAgdG9QYXRobmFtZSA9IHRvUGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGxldCBpc0FjdGl2ZSA9IGxvY2F0aW9uUGF0aG5hbWUgPT09IHRvUGF0aG5hbWUgfHwgIWVuZCAmJiBsb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIjtcbiAgbGV0IGlzUGVuZGluZyA9IG5leHRMb2NhdGlvblBhdGhuYW1lICE9IG51bGwgJiYgKG5leHRMb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuc3RhcnRzV2l0aCh0b1BhdGhuYW1lKSAmJiBuZXh0TG9jYXRpb25QYXRobmFtZS5jaGFyQXQodG9QYXRobmFtZS5sZW5ndGgpID09PSBcIi9cIik7XG4gIGxldCBhcmlhQ3VycmVudCA9IGlzQWN0aXZlID8gYXJpYUN1cnJlbnRQcm9wIDogdW5kZWZpbmVkO1xuICBsZXQgY2xhc3NOYW1lO1xuXG4gIGlmICh0eXBlb2YgY2xhc3NOYW1lUHJvcCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lUHJvcCh7XG4gICAgICBpc0FjdGl2ZSxcbiAgICAgIGlzUGVuZGluZ1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBjbGFzc05hbWUgcHJvcCBpcyBub3QgYSBmdW5jdGlvbiwgd2UgdXNlIGEgZGVmYXVsdCBgYWN0aXZlYFxuICAgIC8vIGNsYXNzIGZvciA8TmF2TGluayAvPnMgdGhhdCBhcmUgYWN0aXZlLiBJbiB2NSBgYWN0aXZlYCB3YXMgdGhlIGRlZmF1bHRcbiAgICAvLyB2YWx1ZSBmb3IgYGFjdGl2ZUNsYXNzTmFtZWAsIGJ1dCB3ZSBhcmUgcmVtb3ZpbmcgdGhhdCBBUEkgYW5kIGNhbiBzdGlsbFxuICAgIC8vIHVzZSB0aGUgb2xkIGRlZmF1bHQgYmVoYXZpb3IgZm9yIGEgY2xlYW5lciB1cGdyYWRlIHBhdGggYW5kIGtlZXAgdGhlXG4gICAgLy8gc2ltcGxlIHN0eWxpbmcgcnVsZXMgd29ya2luZyBhcyB0aGV5IGN1cnJlbnRseSBkby5cbiAgICBjbGFzc05hbWUgPSBbY2xhc3NOYW1lUHJvcCwgaXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogbnVsbCwgaXNQZW5kaW5nID8gXCJwZW5kaW5nXCIgOiBudWxsXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG4gIH1cblxuICBsZXQgc3R5bGUgPSB0eXBlb2Ygc3R5bGVQcm9wID09PSBcImZ1bmN0aW9uXCIgPyBzdHlsZVByb3Aoe1xuICAgIGlzQWN0aXZlLFxuICAgIGlzUGVuZGluZ1xuICB9KSA6IHN0eWxlUHJvcDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnQsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHRvOiB0b1xuICB9KSwgdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIgPyBjaGlsZHJlbih7XG4gICAgaXNBY3RpdmUsXG4gICAgaXNQZW5kaW5nXG4gIH0pIDogY2hpbGRyZW4pO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2TGluay5kaXNwbGF5TmFtZSA9IFwiTmF2TGlua1wiO1xufVxuLyoqXG4gKiBBIGBAcmVtaXgtcnVuL3JvdXRlcmAtYXdhcmUgYDxmb3JtPmAuIEl0IGJlaGF2ZXMgbGlrZSBhIG5vcm1hbCBmb3JtIGV4Y2VwdFxuICogdGhhdCB0aGUgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2VydmVyIGlzIHdpdGggYGZldGNoYCBpbnN0ZWFkIG9mIG5ldyBkb2N1bWVudFxuICogcmVxdWVzdHMsIGFsbG93aW5nIGNvbXBvbmVudHMgdG8gYWRkIG5pY2VyIFVYIHRvIHRoZSBwYWdlIGFzIHRoZSBmb3JtIGlzXG4gKiBzdWJtaXR0ZWQgYW5kIHJldHVybnMgd2l0aCBkYXRhLlxuICovXG5cblxuY29uc3QgRm9ybSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtSW1wbCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWZcbiAgfSkpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRm9ybS5kaXNwbGF5TmFtZSA9IFwiRm9ybVwiO1xufVxuXG5jb25zdCBGb3JtSW1wbCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChfcmVmNiwgZm9yd2FyZGVkUmVmKSA9PiB7XG4gIGxldCB7XG4gICAgcmVsb2FkRG9jdW1lbnQsXG4gICAgcmVwbGFjZSxcbiAgICBtZXRob2QgPSBkZWZhdWx0TWV0aG9kLFxuICAgIGFjdGlvbixcbiAgICBvblN1Ym1pdCxcbiAgICBmZXRjaGVyS2V5LFxuICAgIHJvdXRlSWQsXG4gICAgcmVsYXRpdmUsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0XG4gIH0gPSBfcmVmNixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjYsIF9leGNsdWRlZDMpO1xuXG4gIGxldCBzdWJtaXQgPSB1c2VTdWJtaXRJbXBsKGZldGNoZXJLZXksIHJvdXRlSWQpO1xuICBsZXQgZm9ybU1ldGhvZCA9IG1ldGhvZC50b0xvd2VyQ2FzZSgpID09PSBcImdldFwiID8gXCJnZXRcIiA6IFwicG9zdFwiO1xuICBsZXQgZm9ybUFjdGlvbiA9IHVzZUZvcm1BY3Rpb24oYWN0aW9uLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG5cbiAgbGV0IHN1Ym1pdEhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgb25TdWJtaXQgJiYgb25TdWJtaXQoZXZlbnQpO1xuICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgc3VibWl0dGVyID0gZXZlbnQubmF0aXZlRXZlbnQuc3VibWl0dGVyO1xuICAgIGxldCBzdWJtaXRNZXRob2QgPSAoc3VibWl0dGVyID09IG51bGwgPyB2b2lkIDAgOiBzdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKFwiZm9ybW1ldGhvZFwiKSkgfHwgbWV0aG9kO1xuICAgIHN1Ym1pdChzdWJtaXR0ZXIgfHwgZXZlbnQuY3VycmVudFRhcmdldCwge1xuICAgICAgbWV0aG9kOiBzdWJtaXRNZXRob2QsXG4gICAgICByZXBsYWNlLFxuICAgICAgcmVsYXRpdmUsXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIF9leHRlbmRzKHtcbiAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICBtZXRob2Q6IGZvcm1NZXRob2QsXG4gICAgYWN0aW9uOiBmb3JtQWN0aW9uLFxuICAgIG9uU3VibWl0OiByZWxvYWREb2N1bWVudCA/IG9uU3VibWl0IDogc3VibWl0SGFuZGxlclxuICB9LCBwcm9wcykpO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRm9ybUltcGwuZGlzcGxheU5hbWUgPSBcIkZvcm1JbXBsXCI7XG59XG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHdpbGwgZW11bGF0ZSB0aGUgYnJvd3NlcidzIHNjcm9sbCByZXN0b3JhdGlvbiBvbiBsb2NhdGlvblxuICogY2hhbmdlcy5cbiAqL1xuXG5cbmZ1bmN0aW9uIFNjcm9sbFJlc3RvcmF0aW9uKF9yZWY3KSB7XG4gIGxldCB7XG4gICAgZ2V0S2V5LFxuICAgIHN0b3JhZ2VLZXlcbiAgfSA9IF9yZWY3O1xuICB1c2VTY3JvbGxSZXN0b3JhdGlvbih7XG4gICAgZ2V0S2V5LFxuICAgIHN0b3JhZ2VLZXlcbiAgfSk7XG4gIHJldHVybiBudWxsO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFNjcm9sbFJlc3RvcmF0aW9uLmRpc3BsYXlOYW1lID0gXCJTY3JvbGxSZXN0b3JhdGlvblwiO1xufSAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gSG9va3Ncbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cblxudmFyIERhdGFSb3V0ZXJIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJIb29rKSB7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlU2Nyb2xsUmVzdG9yYXRpb25cIl0gPSBcInVzZVNjcm9sbFJlc3RvcmF0aW9uXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlU3VibWl0SW1wbFwiXSA9IFwidXNlU3VibWl0SW1wbFwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZUZldGNoZXJcIl0gPSBcInVzZUZldGNoZXJcIjtcbn0pKERhdGFSb3V0ZXJIb29rIHx8IChEYXRhUm91dGVySG9vayA9IHt9KSk7XG5cbnZhciBEYXRhUm91dGVyU3RhdGVIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJTdGF0ZUhvb2spIHtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUZldGNoZXJzXCJdID0gXCJ1c2VGZXRjaGVyc1wiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlU2Nyb2xsUmVzdG9yYXRpb25cIl0gPSBcInVzZVNjcm9sbFJlc3RvcmF0aW9uXCI7XG59KShEYXRhUm91dGVyU3RhdGVIb29rIHx8IChEYXRhUm91dGVyU3RhdGVIb29rID0ge30pKTtcblxuZnVuY3Rpb24gZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkge1xuICByZXR1cm4gaG9va05hbWUgKyBcIiBtdXN0IGJlIHVzZWQgd2l0aGluIGEgZGF0YSByb3V0ZXIuICBTZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVycy9waWNraW5nLWEtcm91dGVyLlwiO1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgY3R4ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQpO1xuICAhY3R4ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjdHg7XG59XG5cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9EYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgIXN0YXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBzdGF0ZTtcbn1cbi8qKlxuICogSGFuZGxlcyB0aGUgY2xpY2sgYmVoYXZpb3IgZm9yIHJvdXRlciBgPExpbms+YCBjb21wb25lbnRzLiBUaGlzIGlzIHVzZWZ1bCBpZlxuICogeW91IG5lZWQgdG8gY3JlYXRlIGN1c3RvbSBgPExpbms+YCBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgY2xpY2sgYmVoYXZpb3Igd2VcbiAqIHVzZSBpbiBvdXIgZXhwb3J0ZWQgYDxMaW5rPmAuXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHRhcmdldCxcbiAgICByZXBsYWNlOiByZXBsYWNlUHJvcCxcbiAgICBzdGF0ZSxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcGF0aCA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGlmIChzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBJZiB0aGUgVVJMIGhhc24ndCBjaGFuZ2VkLCBhIHJlZ3VsYXIgPGE+IHdpbGwgZG8gYSByZXBsYWNlIGluc3RlYWQgb2ZcbiAgICAgIC8vIGEgcHVzaCwgc28gZG8gdGhlIHNhbWUgaGVyZSB1bmxlc3MgdGhlIHJlcGxhY2UgcHJvcCBpcyBleHBsaWNpdGx5IHNldFxuXG4gICAgICBsZXQgcmVwbGFjZSA9IHJlcGxhY2VQcm9wICE9PSB1bmRlZmluZWQgPyByZXBsYWNlUHJvcCA6IGNyZWF0ZVBhdGgobG9jYXRpb24pID09PSBjcmVhdGVQYXRoKHBhdGgpO1xuICAgICAgbmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgcmVsYXRpdmVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgcGF0aCwgcmVwbGFjZVByb3AsIHN0YXRlLCB0YXJnZXQsIHRvLCBwcmV2ZW50U2Nyb2xsUmVzZXQsIHJlbGF0aXZlXSk7XG59XG4vKipcbiAqIEEgY29udmVuaWVudCB3cmFwcGVyIGZvciByZWFkaW5nIGFuZCB3cml0aW5nIHNlYXJjaCBwYXJhbWV0ZXJzIHZpYSB0aGVcbiAqIFVSTFNlYXJjaFBhcmFtcyBpbnRlcmZhY2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09IFwidW5kZWZpbmVkXCIsIFwiWW91IGNhbm5vdCB1c2UgdGhlIGB1c2VTZWFyY2hQYXJhbXNgIGhvb2sgaW4gYSBicm93c2VyIHRoYXQgZG9lcyBub3QgXCIgKyBcInN1cHBvcnQgdGhlIFVSTFNlYXJjaFBhcmFtcyBBUEkuIElmIHlvdSBuZWVkIHRvIHN1cHBvcnQgSW50ZXJuZXQgXCIgKyBcIkV4cGxvcmVyIDExLCB3ZSByZWNvbW1lbmQgeW91IGxvYWQgYSBwb2x5ZmlsbCBzdWNoIGFzIFwiICsgXCJodHRwczovL2dpdGh1Yi5jb20vdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXNcXG5cXG5cIiArIFwiSWYgeW91J3JlIHVuc3VyZSBob3cgdG8gbG9hZCBwb2x5ZmlsbHMsIHdlIHJlY29tbWVuZCB5b3UgY2hlY2sgb3V0IFwiICsgXCJodHRwczovL3BvbHlmaWxsLmlvL3YzLyB3aGljaCBwcm92aWRlcyBzb21lIHJlY29tbWVuZGF0aW9ucyBhYm91dCBob3cgXCIgKyBcInRvIGxvYWQgcG9seWZpbGxzIG9ubHkgZm9yIHVzZXJzIHRoYXQgbmVlZCB0aGVtLCBpbnN0ZWFkIG9mIGZvciBldmVyeSBcIiArIFwidXNlci5cIikgOiB2b2lkIDA7XG4gIGxldCBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmID0gUmVhY3QudXNlUmVmKGNyZWF0ZVNlYXJjaFBhcmFtcyhkZWZhdWx0SW5pdCkpO1xuICBsZXQgaGFzU2V0U2VhcmNoUGFyYW1zUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gLy8gT25seSBtZXJnZSBpbiB0aGUgZGVmYXVsdHMgaWYgd2UgaGF2ZW4ndCB5ZXQgY2FsbGVkIHNldFNlYXJjaFBhcmFtcy5cbiAgLy8gT25jZSB3ZSBjYWxsIHRoYXQgd2Ugd2FudCB0aG9zZSB0byB0YWtlIHByZWNlZGVuY2UsIG90aGVyd2lzZSB5b3UgY2FuJ3RcbiAgLy8gcmVtb3ZlIGEgcGFyYW0gd2l0aCBzZXRTZWFyY2hQYXJhbXMoe30pIGlmIGl0IGhhcyBhbiBpbml0aWFsIHZhbHVlXG4gIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uLnNlYXJjaCwgaGFzU2V0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQgPyBudWxsIDogZGVmYXVsdFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50KSwgW2xvY2F0aW9uLnNlYXJjaF0pO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgc2V0U2VhcmNoUGFyYW1zID0gUmVhY3QudXNlQ2FsbGJhY2soKG5leHRJbml0LCBuYXZpZ2F0ZU9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBuZXdTZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXModHlwZW9mIG5leHRJbml0ID09PSBcImZ1bmN0aW9uXCIgPyBuZXh0SW5pdChzZWFyY2hQYXJhbXMpIDogbmV4dEluaXQpO1xuICAgIGhhc1NldFNlYXJjaFBhcmFtc1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICBuYXZpZ2F0ZShcIj9cIiArIG5ld1NlYXJjaFBhcmFtcywgbmF2aWdhdGVPcHRpb25zKTtcbiAgfSwgW25hdmlnYXRlLCBzZWFyY2hQYXJhbXNdKTtcbiAgcmV0dXJuIFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc107XG59XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIHByb2dyYW1tYXRpY2FsbHkgc3VibWl0IGEgZm9ybSAob3JcbiAqIHNvbWUgYXJiaXRyYXJ5IGRhdGEpIHRvIHRoZSBzZXJ2ZXIuXG4gKi9cblxuZnVuY3Rpb24gdXNlU3VibWl0KCkge1xuICByZXR1cm4gdXNlU3VibWl0SW1wbCgpO1xufVxuXG5mdW5jdGlvbiB1c2VTdWJtaXRJbXBsKGZldGNoZXJLZXksIGZldGNoZXJSb3V0ZUlkKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VTdWJtaXRJbXBsKTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgY3VycmVudFJvdXRlSWQgPSBVTlNBRkVfdXNlUm91dGVJZCgpO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGNhbGxpbmcgc3VibWl0IGR1cmluZyB0aGUgc2VydmVyIHJlbmRlci4gXCIgKyBcIlRyeSBjYWxsaW5nIHN1Ym1pdCB3aXRoaW4gYSBgdXNlRWZmZWN0YCBvciBjYWxsYmFjayBpbnN0ZWFkLlwiKTtcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgYWN0aW9uLFxuICAgICAgbWV0aG9kLFxuICAgICAgZW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhXG4gICAgfSA9IGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIG9wdGlvbnMsIGJhc2VuYW1lKTsgLy8gQmFzZSBvcHRpb25zIHNoYXJlZCBiZXR3ZWVuIGZldGNoKCkgYW5kIG5hdmlnYXRlKClcblxuICAgIGxldCBvcHRzID0ge1xuICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRpb25zLnByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgZm9ybU1ldGhvZDogbWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGU6IGVuY1R5cGVcbiAgICB9O1xuXG4gICAgaWYgKGZldGNoZXJLZXkpIHtcbiAgICAgICEoZmV0Y2hlclJvdXRlSWQgIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlSWQgYXZhaWxhYmxlIGZvciB1c2VGZXRjaGVyKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHJvdXRlci5mZXRjaChmZXRjaGVyS2V5LCBmZXRjaGVyUm91dGVJZCwgYWN0aW9uLCBvcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm91dGVyLm5hdmlnYXRlKGFjdGlvbiwgX2V4dGVuZHMoe30sIG9wdHMsIHtcbiAgICAgICAgcmVwbGFjZTogb3B0aW9ucy5yZXBsYWNlLFxuICAgICAgICBmcm9tUm91dGVJZDogY3VycmVudFJvdXRlSWRcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIGJhc2VuYW1lLCBmZXRjaGVyS2V5LCBmZXRjaGVyUm91dGVJZCwgY3VycmVudFJvdXRlSWRdKTtcbn0gLy8gdjc6IEV2ZW50dWFsbHkgd2Ugc2hvdWxkIGRlcHJlY2F0ZSB0aGlzIGVudGlyZWx5IGluIGZhdm9yIG9mIHVzaW5nIHRoZVxuLy8gcm91dGVyIG1ldGhvZCBkaXJlY3RseT9cblxuXG5mdW5jdGlvbiB1c2VGb3JtQWN0aW9uKGFjdGlvbiwgX3RlbXAyKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gIGxldCB7XG4gICAgYmFzZW5hbWVcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX05hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHJvdXRlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX1JvdXRlQ29udGV4dCk7XG4gICFyb3V0ZUNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcInVzZUZvcm1BY3Rpb24gbXVzdCBiZSB1c2VkIGluc2lkZSBhIFJvdXRlQ29udGV4dFwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgW21hdGNoXSA9IHJvdXRlQ29udGV4dC5tYXRjaGVzLnNsaWNlKC0xKTsgLy8gU2hhbGxvdyBjbG9uZSBwYXRoIHNvIHdlIGNhbiBtb2RpZnkgaXQgYmVsb3csIG90aGVyd2lzZSB3ZSBtb2RpZnkgdGhlXG4gIC8vIG9iamVjdCByZWZlcmVuY2VkIGJ5IHVzZU1lbW8gaW5zaWRlIHVzZVJlc29sdmVkUGF0aFxuXG4gIGxldCBwYXRoID0gX2V4dGVuZHMoe30sIHVzZVJlc29sdmVkUGF0aChhY3Rpb24gPyBhY3Rpb24gOiBcIi5cIiwge1xuICAgIHJlbGF0aXZlXG4gIH0pKTsgLy8gUHJldmlvdXNseSB3ZSBzZXQgdGhlIGRlZmF1bHQgYWN0aW9uIHRvIFwiLlwiLiBUaGUgcHJvYmxlbSB3aXRoIHRoaXMgaXMgdGhhdFxuICAvLyBgdXNlUmVzb2x2ZWRQYXRoKFwiLlwiKWAgZXhjbHVkZXMgc2VhcmNoIHBhcmFtcyBhbmQgdGhlIGhhc2ggb2YgdGhlIHJlc29sdmVkXG4gIC8vIFVSTC4gVGhpcyBpcyB0aGUgaW50ZW5kZWQgYmVoYXZpb3Igb2Ygd2hlbiBcIi5cIiBpcyBzcGVjaWZpY2FsbHkgcHJvdmlkZWQgYXNcbiAgLy8gdGhlIGZvcm0gYWN0aW9uLCBidXQgaW5jb25zaXN0ZW50IHcvIGJyb3dzZXJzIHdoZW4gdGhlIGFjdGlvbiBpcyBvbWl0dGVkLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL3JlbWl4L2lzc3Vlcy85MjdcblxuXG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgLy8gU2FmZSB0byB3cml0ZSB0byB0aGVzZSBkaXJlY3RseSBoZXJlIHNpbmNlIGlmIGFjdGlvbiB3YXMgdW5kZWZpbmVkLCB3ZVxuICAgIC8vIHdvdWxkIGhhdmUgY2FsbGVkIHVzZVJlc29sdmVkUGF0aChcIi5cIikgd2hpY2ggd2lsbCBuZXZlciBpbmNsdWRlIGEgc2VhcmNoXG4gICAgLy8gb3IgaGFzaFxuICAgIHBhdGguc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuICAgIHBhdGguaGFzaCA9IGxvY2F0aW9uLmhhc2g7IC8vIFdoZW4gZ3JhYmJpbmcgc2VhcmNoIHBhcmFtcyBmcm9tIHRoZSBVUkwsIHJlbW92ZSB0aGUgYXV0b21hdGljYWxseVxuICAgIC8vIGluc2VydGVkID9pbmRleCBwYXJhbSBzbyB3ZSBtYXRjaCB0aGUgdXNlUmVzb2x2ZWRQYXRoIHNlYXJjaCBiZWhhdmlvclxuICAgIC8vIHdoaWNoIHdvdWxkIG5vdCBpbmNsdWRlID9pbmRleFxuXG4gICAgaWYgKG1hdGNoLnJvdXRlLmluZGV4KSB7XG4gICAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXRoLnNlYXJjaCk7XG4gICAgICBwYXJhbXMuZGVsZXRlKFwiaW5kZXhcIik7XG4gICAgICBwYXRoLnNlYXJjaCA9IHBhcmFtcy50b1N0cmluZygpID8gXCI/XCIgKyBwYXJhbXMudG9TdHJpbmcoKSA6IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgaWYgKCghYWN0aW9uIHx8IGFjdGlvbiA9PT0gXCIuXCIpICYmIG1hdGNoLnJvdXRlLmluZGV4KSB7XG4gICAgcGF0aC5zZWFyY2ggPSBwYXRoLnNlYXJjaCA/IHBhdGguc2VhcmNoLnJlcGxhY2UoL15cXD8vLCBcIj9pbmRleCZcIikgOiBcIj9pbmRleFwiO1xuICB9IC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgLy8gdG8gY3JlYXRpbmcgdGhlIGZvcm0gYWN0aW9uLiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiBqdXN0IHVzZVxuICAvLyB0aGUgcmF3IGJhc2VuYW1lIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGVcbiAgLy8gcHJlc2VuY2Ugb2YgYSB0cmFpbGluZyBzbGFzaCBvbiByb290IGFjdGlvbnNcblxuXG4gIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBwYXRoLnBhdGhuYW1lID0gcGF0aC5wYXRobmFtZSA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGgucGF0aG5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVQYXRoKHBhdGgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGZXRjaGVyRm9ybShmZXRjaGVyS2V5LCByb3V0ZUlkKSB7XG4gIGxldCBGZXRjaGVyRm9ybSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1JbXBsLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgZmV0Y2hlcktleTogZmV0Y2hlcktleSxcbiAgICAgIHJvdXRlSWQ6IHJvdXRlSWRcbiAgICB9KSk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBGZXRjaGVyRm9ybS5kaXNwbGF5TmFtZSA9IFwiZmV0Y2hlci5Gb3JtXCI7XG4gIH1cblxuICByZXR1cm4gRmV0Y2hlckZvcm07XG59XG5cbmxldCBmZXRjaGVySWQgPSAwO1xuLyoqXG4gKiBJbnRlcmFjdHMgd2l0aCByb3V0ZSBsb2FkZXJzIGFuZCBhY3Rpb25zIHdpdGhvdXQgY2F1c2luZyBhIG5hdmlnYXRpb24uIEdyZWF0XG4gKiBmb3IgYW55IGludGVyYWN0aW9uIHRoYXQgc3RheXMgb24gdGhlIHNhbWUgcGFnZS5cbiAqL1xuXG5mdW5jdGlvbiB1c2VGZXRjaGVyKCkge1xuICB2YXIgX3JvdXRlJG1hdGNoZXM7XG5cbiAgbGV0IHtcbiAgICByb3V0ZXJcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZUZldGNoZXIpO1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9Sb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcInVzZUZldGNoZXIgbXVzdCBiZSB1c2VkIGluc2lkZSBhIFJvdXRlQ29udGV4dFwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgcm91dGVJZCA9IChfcm91dGUkbWF0Y2hlcyA9IHJvdXRlLm1hdGNoZXNbcm91dGUubWF0Y2hlcy5sZW5ndGggLSAxXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yb3V0ZSRtYXRjaGVzLnJvdXRlLmlkO1xuICAhKHJvdXRlSWQgIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcInVzZUZldGNoZXIgY2FuIG9ubHkgYmUgdXNlZCBvbiByb3V0ZXMgdGhhdCBjb250YWluIGEgdW5pcXVlIFxcXCJpZFxcXCJcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IFtmZXRjaGVyS2V5XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IFN0cmluZygrK2ZldGNoZXJJZCkpO1xuICBsZXQgW0Zvcm1dID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xuICAgICFyb3V0ZUlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5Gb3JtKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZXR1cm4gY3JlYXRlRmV0Y2hlckZvcm0oZmV0Y2hlcktleSwgcm91dGVJZCk7XG4gIH0pO1xuICBsZXQgW2xvYWRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gaHJlZiA9PiB7XG4gICAgIXJvdXRlciA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVyIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5sb2FkKClcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAhcm91dGVJZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIGZldGNoZXIubG9hZCgpXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcm91dGVyLmZldGNoKGZldGNoZXJLZXksIHJvdXRlSWQsIGhyZWYpO1xuICB9KTtcbiAgbGV0IHN1Ym1pdCA9IHVzZVN1Ym1pdEltcGwoZmV0Y2hlcktleSwgcm91dGVJZCk7XG4gIGxldCBmZXRjaGVyID0gcm91dGVyLmdldEZldGNoZXIoZmV0Y2hlcktleSk7XG4gIGxldCBmZXRjaGVyV2l0aENvbXBvbmVudHMgPSBSZWFjdC51c2VNZW1vKCgpID0+IF9leHRlbmRzKHtcbiAgICBGb3JtLFxuICAgIHN1Ym1pdCxcbiAgICBsb2FkXG4gIH0sIGZldGNoZXIpLCBbZmV0Y2hlciwgRm9ybSwgc3VibWl0LCBsb2FkXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gSXMgdGhpcyBidXN0ZWQgd2hlbiB0aGUgUmVhY3QgdGVhbSBnZXRzIHJlYWwgd2VpcmQgYW5kIGNhbGxzIGVmZmVjdHNcbiAgICAvLyB0d2ljZSBvbiBtb3VudD8gIFdlIHJlYWxseSBqdXN0IG5lZWQgdG8gZ2FyYmFnZSBjb2xsZWN0IGhlcmUgd2hlbiB0aGlzXG4gICAgLy8gZmV0Y2hlciBpcyBubyBsb25nZXIgYXJvdW5kLlxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoIXJvdXRlcikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJObyByb3V0ZXIgYXZhaWxhYmxlIHRvIGNsZWFuIHVwIGZyb20gdXNlRmV0Y2hlcigpXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJvdXRlci5kZWxldGVGZXRjaGVyKGZldGNoZXJLZXkpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXIsIGZldGNoZXJLZXldKTtcbiAgcmV0dXJuIGZldGNoZXJXaXRoQ29tcG9uZW50cztcbn1cbi8qKlxuICogUHJvdmlkZXMgYWxsIGZldGNoZXJzIGN1cnJlbnRseSBvbiB0aGUgcGFnZS4gVXNlZnVsIGZvciBsYXlvdXRzIGFuZCBwYXJlbnRcbiAqIHJvdXRlcyB0aGF0IG5lZWQgdG8gcHJvdmlkZSBwZW5kaW5nL29wdGltaXN0aWMgVUkgcmVnYXJkaW5nIHRoZSBmZXRjaC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VGZXRjaGVycygpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlRmV0Y2hlcnMpO1xuICByZXR1cm4gWy4uLnN0YXRlLmZldGNoZXJzLnZhbHVlcygpXTtcbn1cbmNvbnN0IFNDUk9MTF9SRVNUT1JBVElPTl9TVE9SQUdFX0tFWSA9IFwicmVhY3Qtcm91dGVyLXNjcm9sbC1wb3NpdGlvbnNcIjtcbmxldCBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IHt9O1xuLyoqXG4gKiBXaGVuIHJlbmRlcmVkIGluc2lkZSBhIFJvdXRlclByb3ZpZGVyLCB3aWxsIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9ucyBvbiBuYXZpZ2F0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHVzZVNjcm9sbFJlc3RvcmF0aW9uKF90ZW1wMykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQge1xuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbixcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXRcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVNjcm9sbFJlc3RvcmF0aW9uKTtcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IG1hdGNoZXMgPSB1c2VNYXRjaGVzKCk7XG4gIGxldCBuYXZpZ2F0aW9uID0gdXNlTmF2aWdhdGlvbigpOyAvLyBUcmlnZ2VyIG1hbnVhbCBzY3JvbGwgcmVzdG9yYXRpb24gd2hpbGUgd2UncmUgYWN0aXZlXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9IFwibWFudWFsXCI7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gICAgfTtcbiAgfSwgW10pOyAvLyBTYXZlIHBvc2l0aW9ucyBvbiBwYWdlaGlkZVxuXG4gIHVzZVBhZ2VIaWRlKFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAobmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIGxldCBrZXkgPSAoZ2V0S2V5ID8gZ2V0S2V5KGxvY2F0aW9uLCBtYXRjaGVzKSA6IG51bGwpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VLZXkgfHwgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShzYXZlZFNjcm9sbFBvc2l0aW9ucykpO1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCI7XG4gIH0sIFtzdG9yYWdlS2V5LCBnZXRLZXksIG5hdmlnYXRpb24uc3RhdGUsIGxvY2F0aW9uLCBtYXRjaGVzXSkpOyAvLyBSZWFkIGluIGFueSBzYXZlZCBzY3JvbGwgbG9jYXRpb25zXG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgc2Vzc2lvblBvc2l0aW9ucyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVkpO1xuXG4gICAgICAgIGlmIChzZXNzaW9uUG9zaXRpb25zKSB7XG4gICAgICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBKU09OLnBhcnNlKHNlc3Npb25Qb3NpdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7Ly8gbm8tb3AsIHVzZSBkZWZhdWx0IGVtcHR5IG9iamVjdFxuICAgICAgfVxuICAgIH0sIFtzdG9yYWdlS2V5XSk7IC8vIEVuYWJsZSBzY3JvbGwgcmVzdG9yYXRpb24gaW4gdGhlIHJvdXRlclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIGxldCBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gPSByb3V0ZXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJvdXRlci5lbmFibGVTY3JvbGxSZXN0b3JhdGlvbihzYXZlZFNjcm9sbFBvc2l0aW9ucywgKCkgPT4gd2luZG93LnNjcm9sbFksIGdldEtleSk7XG4gICAgICByZXR1cm4gKCkgPT4gZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uICYmIGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbigpO1xuICAgIH0sIFtyb3V0ZXIsIGdldEtleV0pOyAvLyBSZXN0b3JlIHNjcm9sbGluZyB3aGVuIHN0YXRlLnJlc3RvcmVTY3JvbGxQb3NpdGlvbiBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gRXhwbGljaXQgZmFsc2UgbWVhbnMgZG9uJ3QgZG8gYW55dGhpbmcgKHVzZWQgZm9yIHN1Ym1pc3Npb25zKVxuICAgICAgaWYgKHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBiZWVuIGhlcmUgYmVmb3JlLCBzY3JvbGwgdG8gaXRcblxuXG4gICAgICBpZiAodHlwZW9mIHJlc3RvcmVTY3JvbGxQb3NpdGlvbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyB0cnkgdG8gc2Nyb2xsIHRvIHRoZSBoYXNoXG5cblxuICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobG9jYXRpb24uaGFzaC5zbGljZSgxKSk7XG5cbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRG9uJ3QgcmVzZXQgaWYgdGhpcyBuYXZpZ2F0aW9uIG9wdGVkIG91dFxuXG5cbiAgICAgIGlmIChwcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBvdGhlcndpc2UgZ28gdG8gdGhlIHRvcCBvbiBuZXcgbG9jYXRpb25zXG5cblxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIH0sIFtsb2NhdGlvbiwgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLCBwcmV2ZW50U2Nyb2xsUmVzZXRdKTtcbiAgfVxufVxuLyoqXG4gKiBTZXR1cCBhIGNhbGxiYWNrIHRvIGJlIGZpcmVkIG9uIHRoZSB3aW5kb3cncyBgYmVmb3JldW5sb2FkYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLlxuICpcbiAqIE5vdGU6IFRoZSBgY2FsbGJhY2tgIGFyZ3VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uIGNyZWF0ZWQgd2l0aFxuICogYFJlYWN0LnVzZUNhbGxiYWNrKClgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUJlZm9yZVVubG9hZChjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICB9O1xuICB9LCBbY2FsbGJhY2ssIGNhcHR1cmVdKTtcbn1cbi8qKlxuICogU2V0dXAgYSBjYWxsYmFjayB0byBiZSBmaXJlZCBvbiB0aGUgd2luZG93J3MgYHBhZ2VoaWRlYCBldmVudC4gVGhpcyBpc1xuICogdXNlZnVsIGZvciBzYXZpbmcgc29tZSBkYXRhIHRvIGB3aW5kb3cubG9jYWxTdG9yYWdlYCBqdXN0IGJlZm9yZSB0aGUgcGFnZVxuICogcmVmcmVzaGVzLiAgVGhpcyBldmVudCBpcyBiZXR0ZXIgc3VwcG9ydGVkIHRoYW4gYmVmb3JldW5sb2FkIGFjcm9zcyBicm93c2Vycy5cbiAqXG4gKiBOb3RlOiBUaGUgYGNhbGxiYWNrYCBhcmd1bWVudCBzaG91bGQgYmUgYSBmdW5jdGlvbiBjcmVhdGVkIHdpdGhcbiAqIGBSZWFjdC51c2VDYWxsYmFjaygpYC5cbiAqL1xuXG5mdW5jdGlvbiB1c2VQYWdlSGlkZShjYWxsYmFjaywgb3B0aW9ucykge1xuICBsZXQge1xuICAgIGNhcHR1cmVcbiAgfSA9IG9wdGlvbnMgfHwge307XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9wdHMgPSBjYXB0dXJlICE9IG51bGwgPyB7XG4gICAgICBjYXB0dXJlXG4gICAgfSA6IHVuZGVmaW5lZDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIsIGNhbGxiYWNrLCBvcHRzKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgfTtcbiAgfSwgW2NhbGxiYWNrLCBjYXB0dXJlXSk7XG59XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIHVzZUJsb2NrZXIgdG8gc2hvdyBhIHdpbmRvdy5jb25maXJtIHByb21wdCB0byB1c2VycyBpbnN0ZWFkXG4gKiBvZiBidWlsZGluZyBhIGN1c3RvbSBVSSB3aXRoIHVzZUJsb2NrZXIuXG4gKlxuICogV2FybmluZzogVGhpcyBoYXMgKmEgbG90IG9mIHJvdWdoIGVkZ2VzKiBhbmQgYmVoYXZlcyB2ZXJ5IGRpZmZlcmVudGx5IChhbmRcbiAqIHZlcnkgaW5jb3JyZWN0bHkgaW4gc29tZSBjYXNlcykgYWNyb3NzIGJyb3dzZXJzIGlmIHVzZXIgY2xpY2sgYWRkaXRpb25cbiAqIGJhY2svZm9yd2FyZCBuYXZpZ2F0aW9ucyB3aGlsZSB0aGUgY29uZmlybSBpcyBvcGVuLiAgVXNlIGF0IHlvdXIgb3duIHJpc2suXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VQcm9tcHQoX3JlZjgpIHtcbiAgbGV0IHtcbiAgICB3aGVuLFxuICAgIG1lc3NhZ2VcbiAgfSA9IF9yZWY4O1xuICBsZXQgYmxvY2tlciA9IHVuc3RhYmxlX3VzZUJsb2NrZXIod2hlbik7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmICF3aGVuKSB7XG4gICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgfVxuICB9LCBbYmxvY2tlciwgd2hlbl0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIikge1xuICAgICAgbGV0IHByb2NlZWQgPSB3aW5kb3cuY29uZmlybShtZXNzYWdlKTtcblxuICAgICAgaWYgKHByb2NlZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChibG9ja2VyLnByb2NlZWQsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2Jsb2NrZXIsIG1lc3NhZ2VdKTtcbn1cbiAvLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgRm9ybSwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZVNjcm9sbFJlc3RvcmF0aW9uIGFzIFVOU0FGRV91c2VTY3JvbGxSZXN0b3JhdGlvbiwgY3JlYXRlQnJvd3NlclJvdXRlciwgY3JlYXRlSGFzaFJvdXRlciwgY3JlYXRlU2VhcmNoUGFyYW1zLCBIaXN0b3J5Um91dGVyIGFzIHVuc3RhYmxlX0hpc3RvcnlSb3V0ZXIsIHVzZVByb21wdCBhcyB1bnN0YWJsZV91c2VQcm9tcHQsIHVzZUJlZm9yZVVubG9hZCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUxpbmtDbGlja0hhbmRsZXIsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==