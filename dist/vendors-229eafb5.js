(self["webpackChunkreact_scratch_boilerplate"] = self["webpackChunkreact_scratch_boilerplate"] || []).push([[923],{

/***/ 3379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 9216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 3565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 4589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 9885:
/***/ ((module) => {

const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g

const words = (str) => str.match(reWords) || []

const upperFirst = (str) => str[0].toUpperCase() + str.slice(1)

const join = (str, d) => words(str).join(d).toLowerCase()

const camelCase = (str) =>
  words(str).reduce(
    (acc, next) =>
      `${acc}${
        !acc
          ? next.toLowerCase()
          : next[0].toUpperCase() + next.slice(1).toLowerCase()
      }`,
    '',
  )

const pascalCase = (str) => upperFirst(camelCase(str))

const snakeCase = (str) => join(str, '_')

const kebabCase = (str) => join(str, '-')

const sentenceCase = (str) => upperFirst(join(str, ' '))

const titleCase = (str) => words(str).map(upperFirst).join(' ')

module.exports = {
  words,
  upperFirst,
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  sentenceCase,
  titleCase,
}


/***/ }),

/***/ 5298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "production" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);


/***/ }),

/***/ 4633:
/***/ ((module) => {


/**
 * Topological sorting function
 *
 * @param {Array} edges
 * @returns {Array}
 */

module.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges)
}

module.exports.array = toposort

function toposort(nodes, edges) {
  var cursor = nodes.length
    , sorted = new Array(cursor)
    , visited = {}
    , i = cursor
    // Better data structures make algorithm much faster.
    , outgoingEdges = makeOutgoingEdges(edges)
    , nodesHash = makeNodesHash(nodes)

  // check for unknown nodes
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error('Unknown node. There is an unknown node in the supplied edges.')
    }
  })

  while (i--) {
    if (!visited[i]) visit(nodes[i], i, new Set())
  }

  return sorted

  function visit(node, i, predecessors) {
    if(predecessors.has(node)) {
      var nodeRep
      try {
        nodeRep = ", node was:" + JSON.stringify(node)
      } catch(e) {
        nodeRep = ""
      }
      throw new Error('Cyclic dependency' + nodeRep)
    }

    if (!nodesHash.has(node)) {
      throw new Error('Found unknown node. Make sure to provided all involved nodes. Unknown node: '+JSON.stringify(node))
    }

    if (visited[i]) return;
    visited[i] = true

    var outgoing = outgoingEdges.get(node) || new Set()
    outgoing = Array.from(outgoing)

    if (i = outgoing.length) {
      predecessors.add(node)
      do {
        var child = outgoing[--i]
        visit(child, nodesHash.get(child), predecessors)
      } while (i)
      predecessors.delete(node)
    }

    sorted[--cursor] = node
  }
}

function uniqueNodes(arr){
  var res = new Set()
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i]
    res.add(edge[0])
    res.add(edge[1])
  }
  return Array.from(res)
}

function makeOutgoingEdges(arr){
  var edges = new Map()
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i]
    if (!edges.has(edge[0])) edges.set(edge[0], new Set())
    if (!edges.has(edge[1])) edges.set(edge[1], new Set())
    edges.get(edge[0]).add(edge[1])
  }
  return edges
}

function makeNodesHash(arr){
  var res = new Map()
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i)
  }
  return res
}


/***/ }),

/***/ 5541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ twMerge)
});

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups,
    _config$conflictingCl = config.conflictingClassGroupModifiers,
    conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId: getClassGroupId,
    getConflictingClassGroupIds: getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(function (_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  var theme = config.theme,
    prefix = config.prefix;
  var classMap = {
    nextPart: new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
      classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId: classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
        classGroup = _ref3[1];
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
      classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
          var key = _ref5[0],
            value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}


//# sourceMappingURL=class-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return undefined;
      },
      set: function set() {}
    };
  }
  var cacheSize = 0;
  var cache = new Map();
  var previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}


//# sourceMappingURL=lru-cache.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  var separator = config.separator || ':';
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers: modifiers,
      hasImportantModifier: hasImportantModifier,
      baseClassName: baseClassName,
      maybePostfixModifierPosition: maybePostfixModifierPosition
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}


//# sourceMappingURL=modifier-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/config-utils.mjs




function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}


//# sourceMappingURL=config-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-classlist.mjs


var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
    getClassGroupId = configUtils.getClassGroupId,
    getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  var classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName),
      modifiers = _splitModifiers.modifiers,
      hasImportantModifier = _splitModifiers.hasImportantModifier,
      baseClassName = _splitModifiers.baseClassName,
      maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(':');
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId: modifierId,
      classGroupId: classGroupId,
      originalClassName: originalClassName,
      hasPostfixModifier: hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(function (parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId,
      classGroupId = parsed.classGroupId,
      hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function (group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function (parsed) {
    return parsed.originalClassName;
  }).join(' ');
}


//# sourceMappingURL=merge-classlist.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  var resolvedValue;
  var string = '';
  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}


//# sourceMappingURL=tw-join.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs




function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
      restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}


//# sourceMappingURL=create-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}


//# sourceMappingURL=from-theme.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|^0$/;
// Shadow always begins with x and y offset separated by underscore
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, 'size', isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, 'url', isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */
var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, 'number', isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith('url(');
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}


//# sourceMappingURL=validators.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/default-config.mjs



function getDefaultConfig() {
  var colors = fromTheme('colors');
  var spacing = fromTheme('spacing');
  var blur = fromTheme('blur');
  var brightness = fromTheme('brightness');
  var borderColor = fromTheme('borderColor');
  var borderRadius = fromTheme('borderRadius');
  var borderSpacing = fromTheme('borderSpacing');
  var borderWidth = fromTheme('borderWidth');
  var contrast = fromTheme('contrast');
  var grayscale = fromTheme('grayscale');
  var hueRotate = fromTheme('hueRotate');
  var invert = fromTheme('invert');
  var gap = fromTheme('gap');
  var gradientColorStops = fromTheme('gradientColorStops');
  var gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  var inset = fromTheme('inset');
  var margin = fromTheme('margin');
  var opacity = fromTheme('opacity');
  var padding = fromTheme('padding');
  var saturate = fromTheme('saturate');
  var scale = fromTheme('scale');
  var sepia = fromTheme('sepia');
  var skew = fromTheme('skew');
  var space = fromTheme('space');
  var translate = fromTheme('translate');
  var getOverscroll = function getOverscroll() {
    return ['auto', 'contain', 'none'];
  };
  var getOverflow = function getOverflow() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  };
  var getSpacingWithAuto = function getSpacingWithAuto() {
    return ['auto', spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty() {
    return ['', isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
    return ['auto', isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions() {
    return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  };
  var getLineStyles = function getLineStyles() {
    return ['solid', 'dashed', 'dotted', 'double', 'none'];
  };
  var getBlendModes = function getBlendModes() {
    return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  };
  var getAlign = function getAlign() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  };
  var getZeroAndEmpty = function getZeroAndEmpty() {
    return ['', '0', isArbitraryValue];
  };
  var getBreaks = function getBreaks() {
    return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  };
  var getNumber = function getNumber() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryLength],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryLength],
      borderSpacing: [spacing],
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: [spacing],
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAuto(),
      margin: getSpacingWithAuto(),
      opacity: getNumber(),
      padding: [spacing],
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: [spacing],
      translate: [spacing]
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ['right', 'left', 'none']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAuto()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal'].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal'].concat(getAlign(), ['baseline'])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [].concat(getAlign(), ['baseline'])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': ['min', 'max', 'fit', isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryLength]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [spacing, 'auto', 'min', 'max', 'fit']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['min', 'max', 'fit', isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [spacing, 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryLength]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [].concat(getLineStyles(), ['wavy'])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: [spacing]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryLength]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [].concat(getLineStyles(), ['hidden'])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [''].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': [spacing]
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': [spacing]
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': [spacing]
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': [spacing]
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': [spacing]
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': [spacing]
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': [spacing]
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': [spacing]
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': [spacing]
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': [spacing]
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': [spacing]
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': [spacing]
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': [spacing]
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': [spacing]
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': [spacing]
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': [spacing]
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': [spacing]
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': [spacing]
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
          pan: ['x', 'left', 'right', 'y', 'up', 'down']
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only']
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}


//# sourceMappingURL=default-config.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs



var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);


//# sourceMappingURL=tw-merge.mjs.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9ycy0yMjllYWZiNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBLDhyREFBOHJELEVBQUUsMEtBQTBLLEVBQUU7O0FBRTUyRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBLG1CQUFtQixZQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7QUNsQnZCO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQyxTQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRTRDO0FBQzVDOzs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUwQjtBQUMxQjs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFbUU7QUFDbkU7OztBQ3BFcUQ7QUFDSjtBQUNXOztBQUU1RDtBQUNBO0FBQ0EsV0FBVyxjQUFjO0FBQ3pCLG9CQUFvQixvQkFBb0I7QUFDeEMsT0FBTyxnQkFBZ0I7QUFDdkI7QUFDQTs7QUFFNkI7QUFDN0I7OztBQ2J5RTs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1CQUFtQixrQkFBa0IsYUFBYTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkMsOERBQThELGtCQUFrQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRTBCO0FBQzFCOzs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtCO0FBQ2xCOzs7QUMxQ3VEO0FBQ0E7QUFDaEI7O0FBRXZDO0FBQ0EsOEVBQThFLGFBQWE7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTTtBQUNoQztBQUNBOztBQUUrQjtBQUMvQjs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxQjtBQUNyQjs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2TjtBQUM3Tjs7O0FDN0U2QztBQUNxTDs7QUFFbE87QUFDQSxlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCLFNBQVM7QUFDekIsYUFBYSxTQUFTO0FBQ3RCLG1CQUFtQixTQUFTO0FBQzVCLG9CQUFvQixTQUFTO0FBQzdCLHFCQUFxQixTQUFTO0FBQzlCLHNCQUFzQixTQUFTO0FBQy9CLG9CQUFvQixTQUFTO0FBQzdCLGlCQUFpQixTQUFTO0FBQzFCLGtCQUFrQixTQUFTO0FBQzNCLGtCQUFrQixTQUFTO0FBQzNCLGVBQWUsU0FBUztBQUN4QixZQUFZLFNBQVM7QUFDckIsMkJBQTJCLFNBQVM7QUFDcEMsbUNBQW1DLFNBQVM7QUFDNUMsY0FBYyxTQUFTO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QixpQkFBaUIsU0FBUztBQUMxQixjQUFjLFNBQVM7QUFDdkIsY0FBYyxTQUFTO0FBQ3ZCLGFBQWEsU0FBUztBQUN0QixjQUFjLFNBQVM7QUFDdkIsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVEsRUFBRSxnQkFBZ0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUSxFQUFFLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0EsWUFBWSxRQUFRLEVBQUUsZ0JBQWdCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGdCQUFnQixRQUFRO0FBQ3hCLHlCQUF5QixZQUFZLEVBQUUsaUJBQWlCO0FBQ3hEO0FBQ0E7QUFDQSx5Q0FBeUMsWUFBWSxFQUFFLGlCQUFpQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsRUFBRSxpQkFBaUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9ELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixLQUFLO0FBQzNCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQixTQUFTLEVBQUUsZ0JBQWdCO0FBQzNCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSztBQUMzQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUIsU0FBUyxFQUFFLGdCQUFnQjtBQUMzQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQkFBZ0I7QUFDbEUsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCO0FBQ2xFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFFBQVE7QUFDL0MsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CLFNBQVMsRUFBRSxZQUFZLEVBQUUsaUJBQWlCO0FBQzFDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFlBQVksRUFBRSxpQkFBaUI7QUFDdEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RyxpQkFBaUI7QUFDN0gsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsaUJBQWlCO0FBQzdGLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFFBQVEsRUFBRSxpQkFBaUI7QUFDMUQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsUUFBUTtBQUNqRixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0MsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFFBQVE7QUFDN0MsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0dBQWtHLGlCQUFpQjtBQUNuSCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0I7QUFDMUMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQkFBbUI7QUFDMUQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGVBQWU7QUFDeEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLGNBQWM7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVksRUFBRSxpQkFBaUI7QUFDckUsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBSztBQUN0QixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFlBQVksRUFBRSxnQkFBZ0I7QUFDbEUsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsZ0JBQWdCO0FBQ3BHLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnQkFBZ0I7QUFDaEUsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGdCQUFnQjtBQUM3RSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLEVBQUUsZ0JBQWdCO0FBQzVDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFIQUFxSCxnQkFBZ0I7QUFDckksT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscWJBQXFiLGdCQUFnQjtBQUNyYyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsZ0JBQWdCO0FBQ25GLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVEsRUFBRSxpQkFBaUI7QUFDNUMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0QjtBQUM1Qjs7O0FDci9Ea0U7QUFDVjs7QUFFeEQsMkJBQTJCLG1CQUFtQixDQUFDLGdCQUFnQjs7QUFFNUM7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdGlueS1jYXNlL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3RvcG9zb3J0L2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmQtbWVyZ2UvZGlzdC9saWIvY2xhc3MtdXRpbHMubWpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmQtbWVyZ2UvZGlzdC9saWIvbHJ1LWNhY2hlLm1qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kLW1lcmdlL2Rpc3QvbGliL21vZGlmaWVyLXV0aWxzLm1qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kLW1lcmdlL2Rpc3QvbGliL2NvbmZpZy11dGlscy5tanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy90YWlsd2luZC1tZXJnZS9kaXN0L2xpYi9tZXJnZS1jbGFzc2xpc3QubWpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmQtbWVyZ2UvZGlzdC9saWIvdHctam9pbi5tanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy90YWlsd2luZC1tZXJnZS9kaXN0L2xpYi9jcmVhdGUtdGFpbHdpbmQtbWVyZ2UubWpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvdGFpbHdpbmQtbWVyZ2UvZGlzdC9saWIvZnJvbS10aGVtZS5tanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy90YWlsd2luZC1tZXJnZS9kaXN0L2xpYi92YWxpZGF0b3JzLm1qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kLW1lcmdlL2Rpc3QvbGliL2RlZmF1bHQtY29uZmlnLm1qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3RhaWx3aW5kLW1lcmdlL2Rpc3QvbGliL3R3LW1lcmdlLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJlV29yZHMgPSAvW0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdP1thLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmXSsoPzpbJ+KAmV0oPzpkfGxsfG18cmV8c3x0fHZlKSk/KD89W1xceGFjXFx4YjFcXHhkN1xceGY3XFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4YmZcXHUyMDAwLVxcdTIwNmYgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBdfFtBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXXwkKXwoPzpbQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV18W15cXHVkODAwLVxcdWRmZmZcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFxkK1xcdTI3MDAtXFx1MjdiZmEtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSkrKD86WyfigJldKD86RHxMTHxNfFJFfFN8VHxWRSkpPyg/PVtcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXXxbQS1aXFx4YzAtXFx4ZDZcXHhkOC1cXHhkZV0oPzpbYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZl18W15cXHVkODAwLVxcdWRmZmZcXHhhY1xceGIxXFx4ZDdcXHhmN1xceDAwLVxceDJmXFx4M2EtXFx4NDBcXHg1Yi1cXHg2MFxceDdiLVxceGJmXFx1MjAwMC1cXHUyMDZmIFxcdFxceDBiXFxmXFx4YTBcXHVmZWZmXFxuXFxyXFx1MjAyOFxcdTIwMjlcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFxkK1xcdTI3MDAtXFx1MjdiZmEtelxceGRmLVxceGY2XFx4ZjgtXFx4ZmZBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSl8JCl8W0EtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdPyg/OlthLXpcXHhkZi1cXHhmNlxceGY4LVxceGZmXXxbXlxcdWQ4MDAtXFx1ZGZmZlxceGFjXFx4YjFcXHhkN1xceGY3XFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4YmZcXHUyMDAwLVxcdTIwNmYgXFx0XFx4MGJcXGZcXHhhMFxcdWZlZmZcXG5cXHJcXHUyMDI4XFx1MjAyOVxcdTE2ODBcXHUxODBlXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMGFcXHUyMDJmXFx1MjA1ZlxcdTMwMDBcXGQrXFx1MjcwMC1cXHUyN2JmYS16XFx4ZGYtXFx4ZjZcXHhmOC1cXHhmZkEtWlxceGMwLVxceGQ2XFx4ZDgtXFx4ZGVdKSsoPzpbJ+KAmV0oPzpkfGxsfG18cmV8c3x0fHZlKSk/fFtBLVpcXHhjMC1cXHhkNlxceGQ4LVxceGRlXSsoPzpbJ+KAmV0oPzpEfExMfE18UkV8U3xUfFZFKSk/fFxcZCooPzoxU1R8Mk5EfDNSRHwoPyFbMTIzXSlcXGRUSCkoPz1cXGJ8W2Etel9dKXxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxkdGgpKD89XFxifFtBLVpfXSl8XFxkK3woPzpbXFx1MjcwMC1cXHUyN2JmXXwoPzpcXHVkODNjW1xcdWRkZTYtXFx1ZGRmZl0pezJ9fFtcXHVkODAwLVxcdWRiZmZdW1xcdWRjMDAtXFx1ZGZmZl0pW1xcdWZlMGVcXHVmZTBmXT8oPzpbXFx1MDMwMC1cXHUwMzZmXFx1ZmUyMC1cXHVmZTJmXFx1MjBkMC1cXHUyMGZmXXxcXHVkODNjW1xcdWRmZmItXFx1ZGZmZl0pPyg/OlxcdTIwMGQoPzpbXlxcdWQ4MDAtXFx1ZGZmZl18KD86XFx1ZDgzY1tcXHVkZGU2LVxcdWRkZmZdKXsyfXxbXFx1ZDgwMC1cXHVkYmZmXVtcXHVkYzAwLVxcdWRmZmZdKVtcXHVmZTBlXFx1ZmUwZl0/KD86W1xcdTAzMDAtXFx1MDM2ZlxcdWZlMjAtXFx1ZmUyZlxcdTIwZDAtXFx1MjBmZl18XFx1ZDgzY1tcXHVkZmZiLVxcdWRmZmZdKT8pKi9nXG5cbmNvbnN0IHdvcmRzID0gKHN0cikgPT4gc3RyLm1hdGNoKHJlV29yZHMpIHx8IFtdXG5cbmNvbnN0IHVwcGVyRmlyc3QgPSAoc3RyKSA9PiBzdHJbMF0udG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxuXG5jb25zdCBqb2luID0gKHN0ciwgZCkgPT4gd29yZHMoc3RyKS5qb2luKGQpLnRvTG93ZXJDYXNlKClcblxuY29uc3QgY2FtZWxDYXNlID0gKHN0cikgPT5cbiAgd29yZHMoc3RyKS5yZWR1Y2UoXG4gICAgKGFjYywgbmV4dCkgPT5cbiAgICAgIGAke2FjY30ke1xuICAgICAgICAhYWNjXG4gICAgICAgICAgPyBuZXh0LnRvTG93ZXJDYXNlKClcbiAgICAgICAgICA6IG5leHRbMF0udG9VcHBlckNhc2UoKSArIG5leHQuc2xpY2UoMSkudG9Mb3dlckNhc2UoKVxuICAgICAgfWAsXG4gICAgJycsXG4gIClcblxuY29uc3QgcGFzY2FsQ2FzZSA9IChzdHIpID0+IHVwcGVyRmlyc3QoY2FtZWxDYXNlKHN0cikpXG5cbmNvbnN0IHNuYWtlQ2FzZSA9IChzdHIpID0+IGpvaW4oc3RyLCAnXycpXG5cbmNvbnN0IGtlYmFiQ2FzZSA9IChzdHIpID0+IGpvaW4oc3RyLCAnLScpXG5cbmNvbnN0IHNlbnRlbmNlQ2FzZSA9IChzdHIpID0+IHVwcGVyRmlyc3Qoam9pbihzdHIsICcgJykpXG5cbmNvbnN0IHRpdGxlQ2FzZSA9IChzdHIpID0+IHdvcmRzKHN0cikubWFwKHVwcGVyRmlyc3QpLmpvaW4oJyAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgd29yZHMsXG4gIHVwcGVyRmlyc3QsXG4gIGNhbWVsQ2FzZSxcbiAgcGFzY2FsQ2FzZSxcbiAgc25ha2VDYXNlLFxuICBrZWJhYkNhc2UsXG4gIHNlbnRlbmNlQ2FzZSxcbiAgdGl0bGVDYXNlLFxufVxuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG5mdW5jdGlvbiB3YXJuaW5nKGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdGV4dCA9IFwiV2FybmluZzogXCIgKyBtZXNzYWdlO1xuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS53YXJuKHRleHQpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB0aHJvdyBFcnJvcih0ZXh0KTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdhcm5pbmc7XG4iLCJcbi8qKlxuICogVG9wb2xvZ2ljYWwgc29ydGluZyBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGVkZ2VzXG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlZGdlcykge1xuICByZXR1cm4gdG9wb3NvcnQodW5pcXVlTm9kZXMoZWRnZXMpLCBlZGdlcylcbn1cblxubW9kdWxlLmV4cG9ydHMuYXJyYXkgPSB0b3Bvc29ydFxuXG5mdW5jdGlvbiB0b3Bvc29ydChub2RlcywgZWRnZXMpIHtcbiAgdmFyIGN1cnNvciA9IG5vZGVzLmxlbmd0aFxuICAgICwgc29ydGVkID0gbmV3IEFycmF5KGN1cnNvcilcbiAgICAsIHZpc2l0ZWQgPSB7fVxuICAgICwgaSA9IGN1cnNvclxuICAgIC8vIEJldHRlciBkYXRhIHN0cnVjdHVyZXMgbWFrZSBhbGdvcml0aG0gbXVjaCBmYXN0ZXIuXG4gICAgLCBvdXRnb2luZ0VkZ2VzID0gbWFrZU91dGdvaW5nRWRnZXMoZWRnZXMpXG4gICAgLCBub2Rlc0hhc2ggPSBtYWtlTm9kZXNIYXNoKG5vZGVzKVxuXG4gIC8vIGNoZWNrIGZvciB1bmtub3duIG5vZGVzXG4gIGVkZ2VzLmZvckVhY2goZnVuY3Rpb24oZWRnZSkge1xuICAgIGlmICghbm9kZXNIYXNoLmhhcyhlZGdlWzBdKSB8fCAhbm9kZXNIYXNoLmhhcyhlZGdlWzFdKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIG5vZGUuIFRoZXJlIGlzIGFuIHVua25vd24gbm9kZSBpbiB0aGUgc3VwcGxpZWQgZWRnZXMuJylcbiAgICB9XG4gIH0pXG5cbiAgd2hpbGUgKGktLSkge1xuICAgIGlmICghdmlzaXRlZFtpXSkgdmlzaXQobm9kZXNbaV0sIGksIG5ldyBTZXQoKSlcbiAgfVxuXG4gIHJldHVybiBzb3J0ZWRcblxuICBmdW5jdGlvbiB2aXNpdChub2RlLCBpLCBwcmVkZWNlc3NvcnMpIHtcbiAgICBpZihwcmVkZWNlc3NvcnMuaGFzKG5vZGUpKSB7XG4gICAgICB2YXIgbm9kZVJlcFxuICAgICAgdHJ5IHtcbiAgICAgICAgbm9kZVJlcCA9IFwiLCBub2RlIHdhczpcIiArIEpTT04uc3RyaW5naWZ5KG5vZGUpXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgbm9kZVJlcCA9IFwiXCJcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcignQ3ljbGljIGRlcGVuZGVuY3knICsgbm9kZVJlcClcbiAgICB9XG5cbiAgICBpZiAoIW5vZGVzSGFzaC5oYXMobm9kZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdW5rbm93biBub2RlLiBNYWtlIHN1cmUgdG8gcHJvdmlkZWQgYWxsIGludm9sdmVkIG5vZGVzLiBVbmtub3duIG5vZGU6ICcrSlNPTi5zdHJpbmdpZnkobm9kZSkpXG4gICAgfVxuXG4gICAgaWYgKHZpc2l0ZWRbaV0pIHJldHVybjtcbiAgICB2aXNpdGVkW2ldID0gdHJ1ZVxuXG4gICAgdmFyIG91dGdvaW5nID0gb3V0Z29pbmdFZGdlcy5nZXQobm9kZSkgfHwgbmV3IFNldCgpXG4gICAgb3V0Z29pbmcgPSBBcnJheS5mcm9tKG91dGdvaW5nKVxuXG4gICAgaWYgKGkgPSBvdXRnb2luZy5sZW5ndGgpIHtcbiAgICAgIHByZWRlY2Vzc29ycy5hZGQobm9kZSlcbiAgICAgIGRvIHtcbiAgICAgICAgdmFyIGNoaWxkID0gb3V0Z29pbmdbLS1pXVxuICAgICAgICB2aXNpdChjaGlsZCwgbm9kZXNIYXNoLmdldChjaGlsZCksIHByZWRlY2Vzc29ycylcbiAgICAgIH0gd2hpbGUgKGkpXG4gICAgICBwcmVkZWNlc3NvcnMuZGVsZXRlKG5vZGUpXG4gICAgfVxuXG4gICAgc29ydGVkWy0tY3Vyc29yXSA9IG5vZGVcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmlxdWVOb2RlcyhhcnIpe1xuICB2YXIgcmVzID0gbmV3IFNldCgpXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZWRnZSA9IGFycltpXVxuICAgIHJlcy5hZGQoZWRnZVswXSlcbiAgICByZXMuYWRkKGVkZ2VbMV0pXG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20ocmVzKVxufVxuXG5mdW5jdGlvbiBtYWtlT3V0Z29pbmdFZGdlcyhhcnIpe1xuICB2YXIgZWRnZXMgPSBuZXcgTWFwKClcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBlZGdlID0gYXJyW2ldXG4gICAgaWYgKCFlZGdlcy5oYXMoZWRnZVswXSkpIGVkZ2VzLnNldChlZGdlWzBdLCBuZXcgU2V0KCkpXG4gICAgaWYgKCFlZGdlcy5oYXMoZWRnZVsxXSkpIGVkZ2VzLnNldChlZGdlWzFdLCBuZXcgU2V0KCkpXG4gICAgZWRnZXMuZ2V0KGVkZ2VbMF0pLmFkZChlZGdlWzFdKVxuICB9XG4gIHJldHVybiBlZGdlc1xufVxuXG5mdW5jdGlvbiBtYWtlTm9kZXNIYXNoKGFycil7XG4gIHZhciByZXMgPSBuZXcgTWFwKClcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHJlcy5zZXQoYXJyW2ldLCBpKVxuICB9XG4gIHJldHVybiByZXNcbn1cbiIsInZhciBDTEFTU19QQVJUX1NFUEFSQVRPUiA9ICctJztcbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzVXRpbHMoY29uZmlnKSB7XG4gIHZhciBjbGFzc01hcCA9IGNyZWF0ZUNsYXNzTWFwKGNvbmZpZyk7XG4gIHZhciBjb25mbGljdGluZ0NsYXNzR3JvdXBzID0gY29uZmlnLmNvbmZsaWN0aW5nQ2xhc3NHcm91cHMsXG4gICAgX2NvbmZpZyRjb25mbGljdGluZ0NsID0gY29uZmlnLmNvbmZsaWN0aW5nQ2xhc3NHcm91cE1vZGlmaWVycyxcbiAgICBjb25mbGljdGluZ0NsYXNzR3JvdXBNb2RpZmllcnMgPSBfY29uZmlnJGNvbmZsaWN0aW5nQ2wgPT09IHZvaWQgMCA/IHt9IDogX2NvbmZpZyRjb25mbGljdGluZ0NsO1xuICBmdW5jdGlvbiBnZXRDbGFzc0dyb3VwSWQoY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNsYXNzUGFydHMgPSBjbGFzc05hbWUuc3BsaXQoQ0xBU1NfUEFSVF9TRVBBUkFUT1IpO1xuICAgIC8vIENsYXNzZXMgbGlrZSBgLWluc2V0LTFgIHByb2R1Y2UgYW4gZW1wdHkgc3RyaW5nIGFzIGZpcnN0IGNsYXNzUGFydC4gV2UgYXNzdW1lIHRoYXQgY2xhc3NlcyBmb3IgbmVnYXRpdmUgdmFsdWVzIGFyZSB1c2VkIGNvcnJlY3RseSBhbmQgcmVtb3ZlIGl0IGZyb20gY2xhc3NQYXJ0cy5cbiAgICBpZiAoY2xhc3NQYXJ0c1swXSA9PT0gJycgJiYgY2xhc3NQYXJ0cy5sZW5ndGggIT09IDEpIHtcbiAgICAgIGNsYXNzUGFydHMuc2hpZnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldEdyb3VwUmVjdXJzaXZlKGNsYXNzUGFydHMsIGNsYXNzTWFwKSB8fCBnZXRHcm91cElkRm9yQXJiaXRyYXJ5UHJvcGVydHkoY2xhc3NOYW1lKTtcbiAgfVxuICBmdW5jdGlvbiBnZXRDb25mbGljdGluZ0NsYXNzR3JvdXBJZHMoY2xhc3NHcm91cElkLCBoYXNQb3N0Zml4TW9kaWZpZXIpIHtcbiAgICB2YXIgY29uZmxpY3RzID0gY29uZmxpY3RpbmdDbGFzc0dyb3Vwc1tjbGFzc0dyb3VwSWRdIHx8IFtdO1xuICAgIGlmIChoYXNQb3N0Zml4TW9kaWZpZXIgJiYgY29uZmxpY3RpbmdDbGFzc0dyb3VwTW9kaWZpZXJzW2NsYXNzR3JvdXBJZF0pIHtcbiAgICAgIHJldHVybiBbXS5jb25jYXQoY29uZmxpY3RzLCBjb25mbGljdGluZ0NsYXNzR3JvdXBNb2RpZmllcnNbY2xhc3NHcm91cElkXSk7XG4gICAgfVxuICAgIHJldHVybiBjb25mbGljdHM7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXRDbGFzc0dyb3VwSWQ6IGdldENsYXNzR3JvdXBJZCxcbiAgICBnZXRDb25mbGljdGluZ0NsYXNzR3JvdXBJZHM6IGdldENvbmZsaWN0aW5nQ2xhc3NHcm91cElkc1xuICB9O1xufVxuZnVuY3Rpb24gZ2V0R3JvdXBSZWN1cnNpdmUoY2xhc3NQYXJ0cywgY2xhc3NQYXJ0T2JqZWN0KSB7XG4gIGlmIChjbGFzc1BhcnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBjbGFzc1BhcnRPYmplY3QuY2xhc3NHcm91cElkO1xuICB9XG4gIHZhciBjdXJyZW50Q2xhc3NQYXJ0ID0gY2xhc3NQYXJ0c1swXTtcbiAgdmFyIG5leHRDbGFzc1BhcnRPYmplY3QgPSBjbGFzc1BhcnRPYmplY3QubmV4dFBhcnQuZ2V0KGN1cnJlbnRDbGFzc1BhcnQpO1xuICB2YXIgY2xhc3NHcm91cEZyb21OZXh0Q2xhc3NQYXJ0ID0gbmV4dENsYXNzUGFydE9iamVjdCA/IGdldEdyb3VwUmVjdXJzaXZlKGNsYXNzUGFydHMuc2xpY2UoMSksIG5leHRDbGFzc1BhcnRPYmplY3QpIDogdW5kZWZpbmVkO1xuICBpZiAoY2xhc3NHcm91cEZyb21OZXh0Q2xhc3NQYXJ0KSB7XG4gICAgcmV0dXJuIGNsYXNzR3JvdXBGcm9tTmV4dENsYXNzUGFydDtcbiAgfVxuICBpZiAoY2xhc3NQYXJ0T2JqZWN0LnZhbGlkYXRvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICB2YXIgY2xhc3NSZXN0ID0gY2xhc3NQYXJ0cy5qb2luKENMQVNTX1BBUlRfU0VQQVJBVE9SKTtcbiAgcmV0dXJuIGNsYXNzUGFydE9iamVjdC52YWxpZGF0b3JzLmZpbmQoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgdmFsaWRhdG9yID0gX3JlZi52YWxpZGF0b3I7XG4gICAgcmV0dXJuIHZhbGlkYXRvcihjbGFzc1Jlc3QpO1xuICB9KT8uY2xhc3NHcm91cElkO1xufVxudmFyIGFyYml0cmFyeVByb3BlcnR5UmVnZXggPSAvXlxcWyguKylcXF0kLztcbmZ1bmN0aW9uIGdldEdyb3VwSWRGb3JBcmJpdHJhcnlQcm9wZXJ0eShjbGFzc05hbWUpIHtcbiAgaWYgKGFyYml0cmFyeVByb3BlcnR5UmVnZXgudGVzdChjbGFzc05hbWUpKSB7XG4gICAgdmFyIGFyYml0cmFyeVByb3BlcnR5Q2xhc3NOYW1lID0gYXJiaXRyYXJ5UHJvcGVydHlSZWdleC5leGVjKGNsYXNzTmFtZSlbMV07XG4gICAgdmFyIHByb3BlcnR5ID0gYXJiaXRyYXJ5UHJvcGVydHlDbGFzc05hbWU/LnN1YnN0cmluZygwLCBhcmJpdHJhcnlQcm9wZXJ0eUNsYXNzTmFtZS5pbmRleE9mKCc6JykpO1xuICAgIGlmIChwcm9wZXJ0eSkge1xuICAgICAgLy8gSSB1c2UgdHdvIGRvdHMgaGVyZSBiZWNhdXNlIG9uZSBkb3QgaXMgdXNlZCBhcyBwcmVmaXggZm9yIGNsYXNzIGdyb3VwcyBpbiBwbHVnaW5zXG4gICAgICByZXR1cm4gJ2FyYml0cmFyeS4uJyArIHByb3BlcnR5O1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBFeHBvcnRlZCBmb3IgdGVzdGluZyBvbmx5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzTWFwKGNvbmZpZykge1xuICB2YXIgdGhlbWUgPSBjb25maWcudGhlbWUsXG4gICAgcHJlZml4ID0gY29uZmlnLnByZWZpeDtcbiAgdmFyIGNsYXNzTWFwID0ge1xuICAgIG5leHRQYXJ0OiBuZXcgTWFwKCksXG4gICAgdmFsaWRhdG9yczogW11cbiAgfTtcbiAgdmFyIHByZWZpeGVkQ2xhc3NHcm91cEVudHJpZXMgPSBnZXRQcmVmaXhlZENsYXNzR3JvdXBFbnRyaWVzKE9iamVjdC5lbnRyaWVzKGNvbmZpZy5jbGFzc0dyb3VwcyksIHByZWZpeCk7XG4gIHByZWZpeGVkQ2xhc3NHcm91cEVudHJpZXMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICB2YXIgY2xhc3NHcm91cElkID0gX3JlZjJbMF0sXG4gICAgICBjbGFzc0dyb3VwID0gX3JlZjJbMV07XG4gICAgcHJvY2Vzc0NsYXNzZXNSZWN1cnNpdmVseShjbGFzc0dyb3VwLCBjbGFzc01hcCwgY2xhc3NHcm91cElkLCB0aGVtZSk7XG4gIH0pO1xuICByZXR1cm4gY2xhc3NNYXA7XG59XG5mdW5jdGlvbiBwcm9jZXNzQ2xhc3Nlc1JlY3Vyc2l2ZWx5KGNsYXNzR3JvdXAsIGNsYXNzUGFydE9iamVjdCwgY2xhc3NHcm91cElkLCB0aGVtZSkge1xuICBjbGFzc0dyb3VwLmZvckVhY2goZnVuY3Rpb24gKGNsYXNzRGVmaW5pdGlvbikge1xuICAgIGlmICh0eXBlb2YgY2xhc3NEZWZpbml0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGNsYXNzUGFydE9iamVjdFRvRWRpdCA9IGNsYXNzRGVmaW5pdGlvbiA9PT0gJycgPyBjbGFzc1BhcnRPYmplY3QgOiBnZXRQYXJ0KGNsYXNzUGFydE9iamVjdCwgY2xhc3NEZWZpbml0aW9uKTtcbiAgICAgIGNsYXNzUGFydE9iamVjdFRvRWRpdC5jbGFzc0dyb3VwSWQgPSBjbGFzc0dyb3VwSWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2xhc3NEZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoaXNUaGVtZUdldHRlcihjbGFzc0RlZmluaXRpb24pKSB7XG4gICAgICAgIHByb2Nlc3NDbGFzc2VzUmVjdXJzaXZlbHkoY2xhc3NEZWZpbml0aW9uKHRoZW1lKSwgY2xhc3NQYXJ0T2JqZWN0LCBjbGFzc0dyb3VwSWQsIHRoZW1lKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY2xhc3NQYXJ0T2JqZWN0LnZhbGlkYXRvcnMucHVzaCh7XG4gICAgICAgIHZhbGlkYXRvcjogY2xhc3NEZWZpbml0aW9uLFxuICAgICAgICBjbGFzc0dyb3VwSWQ6IGNsYXNzR3JvdXBJZFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5lbnRyaWVzKGNsYXNzRGVmaW5pdGlvbikuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBrZXkgPSBfcmVmM1swXSxcbiAgICAgICAgY2xhc3NHcm91cCA9IF9yZWYzWzFdO1xuICAgICAgcHJvY2Vzc0NsYXNzZXNSZWN1cnNpdmVseShjbGFzc0dyb3VwLCBnZXRQYXJ0KGNsYXNzUGFydE9iamVjdCwga2V5KSwgY2xhc3NHcm91cElkLCB0aGVtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0UGFydChjbGFzc1BhcnRPYmplY3QsIHBhdGgpIHtcbiAgdmFyIGN1cnJlbnRDbGFzc1BhcnRPYmplY3QgPSBjbGFzc1BhcnRPYmplY3Q7XG4gIHBhdGguc3BsaXQoQ0xBU1NfUEFSVF9TRVBBUkFUT1IpLmZvckVhY2goZnVuY3Rpb24gKHBhdGhQYXJ0KSB7XG4gICAgaWYgKCFjdXJyZW50Q2xhc3NQYXJ0T2JqZWN0Lm5leHRQYXJ0LmhhcyhwYXRoUGFydCkpIHtcbiAgICAgIGN1cnJlbnRDbGFzc1BhcnRPYmplY3QubmV4dFBhcnQuc2V0KHBhdGhQYXJ0LCB7XG4gICAgICAgIG5leHRQYXJ0OiBuZXcgTWFwKCksXG4gICAgICAgIHZhbGlkYXRvcnM6IFtdXG4gICAgICB9KTtcbiAgICB9XG4gICAgY3VycmVudENsYXNzUGFydE9iamVjdCA9IGN1cnJlbnRDbGFzc1BhcnRPYmplY3QubmV4dFBhcnQuZ2V0KHBhdGhQYXJ0KTtcbiAgfSk7XG4gIHJldHVybiBjdXJyZW50Q2xhc3NQYXJ0T2JqZWN0O1xufVxuZnVuY3Rpb24gaXNUaGVtZUdldHRlcihmdW5jKSB7XG4gIHJldHVybiBmdW5jLmlzVGhlbWVHZXR0ZXI7XG59XG5mdW5jdGlvbiBnZXRQcmVmaXhlZENsYXNzR3JvdXBFbnRyaWVzKGNsYXNzR3JvdXBFbnRyaWVzLCBwcmVmaXgpIHtcbiAgaWYgKCFwcmVmaXgpIHtcbiAgICByZXR1cm4gY2xhc3NHcm91cEVudHJpZXM7XG4gIH1cbiAgcmV0dXJuIGNsYXNzR3JvdXBFbnRyaWVzLm1hcChmdW5jdGlvbiAoX3JlZjQpIHtcbiAgICB2YXIgY2xhc3NHcm91cElkID0gX3JlZjRbMF0sXG4gICAgICBjbGFzc0dyb3VwID0gX3JlZjRbMV07XG4gICAgdmFyIHByZWZpeGVkQ2xhc3NHcm91cCA9IGNsYXNzR3JvdXAubWFwKGZ1bmN0aW9uIChjbGFzc0RlZmluaXRpb24pIHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NEZWZpbml0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgY2xhc3NEZWZpbml0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBjbGFzc0RlZmluaXRpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoY2xhc3NEZWZpbml0aW9uKS5tYXAoZnVuY3Rpb24gKF9yZWY1KSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9yZWY1WzBdLFxuICAgICAgICAgICAgdmFsdWUgPSBfcmVmNVsxXTtcbiAgICAgICAgICByZXR1cm4gW3ByZWZpeCArIGtleSwgdmFsdWVdO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhc3NEZWZpbml0aW9uO1xuICAgIH0pO1xuICAgIHJldHVybiBbY2xhc3NHcm91cElkLCBwcmVmaXhlZENsYXNzR3JvdXBdO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2xhc3NNYXAsIGNyZWF0ZUNsYXNzVXRpbHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYXNzLXV0aWxzLm1qcy5tYXBcbiIsIi8vIExSVSBjYWNoZSBpbnNwaXJlZCBmcm9tIGhhc2hscnUgKGh0dHBzOi8vZ2l0aHViLmNvbS9kb21pbmljdGFyci9oYXNobHJ1L2Jsb2IvdjEuMC40L2luZGV4LmpzKSBidXQgb2JqZWN0IHJlcGxhY2VkIHdpdGggTWFwIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbmZ1bmN0aW9uIGNyZWF0ZUxydUNhY2hlKG1heENhY2hlU2l6ZSkge1xuICBpZiAobWF4Q2FjaGVTaXplIDwgMSkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgY2FjaGVTaXplID0gMDtcbiAgdmFyIGNhY2hlID0gbmV3IE1hcCgpO1xuICB2YXIgcHJldmlvdXNDYWNoZSA9IG5ldyBNYXAoKTtcbiAgZnVuY3Rpb24gdXBkYXRlKGtleSwgdmFsdWUpIHtcbiAgICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgY2FjaGVTaXplKys7XG4gICAgaWYgKGNhY2hlU2l6ZSA+IG1heENhY2hlU2l6ZSkge1xuICAgICAgY2FjaGVTaXplID0gMDtcbiAgICAgIHByZXZpb3VzQ2FjaGUgPSBjYWNoZTtcbiAgICAgIGNhY2hlID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgdmFyIHZhbHVlID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoKHZhbHVlID0gcHJldmlvdXNDYWNoZS5nZXQoa2V5KSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB1cGRhdGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGUoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVMcnVDYWNoZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bHJ1LWNhY2hlLm1qcy5tYXBcbiIsInZhciBJTVBPUlRBTlRfTU9ESUZJRVIgPSAnISc7XG5mdW5jdGlvbiBjcmVhdGVTcGxpdE1vZGlmaWVycyhjb25maWcpIHtcbiAgdmFyIHNlcGFyYXRvciA9IGNvbmZpZy5zZXBhcmF0b3IgfHwgJzonO1xuICB2YXIgaXNTZXBhcmF0b3JTaW5nbGVDaGFyYWN0ZXIgPSBzZXBhcmF0b3IubGVuZ3RoID09PSAxO1xuICB2YXIgZmlyc3RTZXBhcmF0b3JDaGFyYWN0ZXIgPSBzZXBhcmF0b3JbMF07XG4gIHZhciBzZXBhcmF0b3JMZW5ndGggPSBzZXBhcmF0b3IubGVuZ3RoO1xuICAvLyBzcGxpdE1vZGlmaWVycyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2Jsb2IvdjMuMi4yL3NyYy91dGlsL3NwbGl0QXRUb3BMZXZlbE9ubHkuanNcbiAgcmV0dXJuIGZ1bmN0aW9uIHNwbGl0TW9kaWZpZXJzKGNsYXNzTmFtZSkge1xuICAgIHZhciBtb2RpZmllcnMgPSBbXTtcbiAgICB2YXIgYnJhY2tldERlcHRoID0gMDtcbiAgICB2YXIgbW9kaWZpZXJTdGFydCA9IDA7XG4gICAgdmFyIHBvc3RmaXhNb2RpZmllclBvc2l0aW9uO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjbGFzc05hbWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgY3VycmVudENoYXJhY3RlciA9IGNsYXNzTmFtZVtpbmRleF07XG4gICAgICBpZiAoYnJhY2tldERlcHRoID09PSAwKSB7XG4gICAgICAgIGlmIChjdXJyZW50Q2hhcmFjdGVyID09PSBmaXJzdFNlcGFyYXRvckNoYXJhY3RlciAmJiAoaXNTZXBhcmF0b3JTaW5nbGVDaGFyYWN0ZXIgfHwgY2xhc3NOYW1lLnNsaWNlKGluZGV4LCBpbmRleCArIHNlcGFyYXRvckxlbmd0aCkgPT09IHNlcGFyYXRvcikpIHtcbiAgICAgICAgICBtb2RpZmllcnMucHVzaChjbGFzc05hbWUuc2xpY2UobW9kaWZpZXJTdGFydCwgaW5kZXgpKTtcbiAgICAgICAgICBtb2RpZmllclN0YXJ0ID0gaW5kZXggKyBzZXBhcmF0b3JMZW5ndGg7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRDaGFyYWN0ZXIgPT09ICcvJykge1xuICAgICAgICAgIHBvc3RmaXhNb2RpZmllclBvc2l0aW9uID0gaW5kZXg7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50Q2hhcmFjdGVyID09PSAnWycpIHtcbiAgICAgICAgYnJhY2tldERlcHRoKys7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJlbnRDaGFyYWN0ZXIgPT09ICddJykge1xuICAgICAgICBicmFja2V0RGVwdGgtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGJhc2VDbGFzc05hbWVXaXRoSW1wb3J0YW50TW9kaWZpZXIgPSBtb2RpZmllcnMubGVuZ3RoID09PSAwID8gY2xhc3NOYW1lIDogY2xhc3NOYW1lLnN1YnN0cmluZyhtb2RpZmllclN0YXJ0KTtcbiAgICB2YXIgaGFzSW1wb3J0YW50TW9kaWZpZXIgPSBiYXNlQ2xhc3NOYW1lV2l0aEltcG9ydGFudE1vZGlmaWVyLnN0YXJ0c1dpdGgoSU1QT1JUQU5UX01PRElGSUVSKTtcbiAgICB2YXIgYmFzZUNsYXNzTmFtZSA9IGhhc0ltcG9ydGFudE1vZGlmaWVyID8gYmFzZUNsYXNzTmFtZVdpdGhJbXBvcnRhbnRNb2RpZmllci5zdWJzdHJpbmcoMSkgOiBiYXNlQ2xhc3NOYW1lV2l0aEltcG9ydGFudE1vZGlmaWVyO1xuICAgIHZhciBtYXliZVBvc3RmaXhNb2RpZmllclBvc2l0aW9uID0gcG9zdGZpeE1vZGlmaWVyUG9zaXRpb24gJiYgcG9zdGZpeE1vZGlmaWVyUG9zaXRpb24gPiBtb2RpZmllclN0YXJ0ID8gcG9zdGZpeE1vZGlmaWVyUG9zaXRpb24gLSBtb2RpZmllclN0YXJ0IDogdW5kZWZpbmVkO1xuICAgIHJldHVybiB7XG4gICAgICBtb2RpZmllcnM6IG1vZGlmaWVycyxcbiAgICAgIGhhc0ltcG9ydGFudE1vZGlmaWVyOiBoYXNJbXBvcnRhbnRNb2RpZmllcixcbiAgICAgIGJhc2VDbGFzc05hbWU6IGJhc2VDbGFzc05hbWUsXG4gICAgICBtYXliZVBvc3RmaXhNb2RpZmllclBvc2l0aW9uOiBtYXliZVBvc3RmaXhNb2RpZmllclBvc2l0aW9uXG4gICAgfTtcbiAgfTtcbn1cbi8qKlxuICogU29ydHMgbW9kaWZpZXJzIGFjY29yZGluZyB0byBmb2xsb3dpbmcgc2NoZW1hOlxuICogLSBQcmVkZWZpbmVkIG1vZGlmaWVycyBhcmUgc29ydGVkIGFscGhhYmV0aWNhbGx5XG4gKiAtIFdoZW4gYW4gYXJiaXRyYXJ5IHZhcmlhbnQgYXBwZWFycywgaXQgbXVzdCBiZSBwcmVzZXJ2ZWQgd2hpY2ggbW9kaWZpZXJzIGFyZSBiZWZvcmUgYW5kIGFmdGVyIGl0XG4gKi9cbmZ1bmN0aW9uIHNvcnRNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIGlmIChtb2RpZmllcnMubGVuZ3RoIDw9IDEpIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzO1xuICB9XG4gIHZhciBzb3J0ZWRNb2RpZmllcnMgPSBbXTtcbiAgdmFyIHVuc29ydGVkTW9kaWZpZXJzID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHZhciBpc0FyYml0cmFyeVZhcmlhbnQgPSBtb2RpZmllclswXSA9PT0gJ1snO1xuICAgIGlmIChpc0FyYml0cmFyeVZhcmlhbnQpIHtcbiAgICAgIHNvcnRlZE1vZGlmaWVycy5wdXNoLmFwcGx5KHNvcnRlZE1vZGlmaWVycywgdW5zb3J0ZWRNb2RpZmllcnMuc29ydCgpLmNvbmNhdChbbW9kaWZpZXJdKSk7XG4gICAgICB1bnNvcnRlZE1vZGlmaWVycyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bnNvcnRlZE1vZGlmaWVycy5wdXNoKG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICBzb3J0ZWRNb2RpZmllcnMucHVzaC5hcHBseShzb3J0ZWRNb2RpZmllcnMsIHVuc29ydGVkTW9kaWZpZXJzLnNvcnQoKSk7XG4gIHJldHVybiBzb3J0ZWRNb2RpZmllcnM7XG59XG5cbmV4cG9ydCB7IElNUE9SVEFOVF9NT0RJRklFUiwgY3JlYXRlU3BsaXRNb2RpZmllcnMsIHNvcnRNb2RpZmllcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGlmaWVyLXV0aWxzLm1qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUNsYXNzVXRpbHMgfSBmcm9tICcuL2NsYXNzLXV0aWxzLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVMcnVDYWNoZSB9IGZyb20gJy4vbHJ1LWNhY2hlLm1qcyc7XG5pbXBvcnQgeyBjcmVhdGVTcGxpdE1vZGlmaWVycyB9IGZyb20gJy4vbW9kaWZpZXItdXRpbHMubWpzJztcblxuZnVuY3Rpb24gY3JlYXRlQ29uZmlnVXRpbHMoY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgY2FjaGU6IGNyZWF0ZUxydUNhY2hlKGNvbmZpZy5jYWNoZVNpemUpLFxuICAgIHNwbGl0TW9kaWZpZXJzOiBjcmVhdGVTcGxpdE1vZGlmaWVycyhjb25maWcpLFxuICAgIC4uLmNyZWF0ZUNsYXNzVXRpbHMoY29uZmlnKVxuICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb25maWdVdGlscyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLXV0aWxzLm1qcy5tYXBcbiIsImltcG9ydCB7IHNvcnRNb2RpZmllcnMsIElNUE9SVEFOVF9NT0RJRklFUiB9IGZyb20gJy4vbW9kaWZpZXItdXRpbHMubWpzJztcblxudmFyIFNQTElUX0NMQVNTRVNfUkVHRVggPSAvXFxzKy87XG5mdW5jdGlvbiBtZXJnZUNsYXNzTGlzdChjbGFzc0xpc3QsIGNvbmZpZ1V0aWxzKSB7XG4gIHZhciBzcGxpdE1vZGlmaWVycyA9IGNvbmZpZ1V0aWxzLnNwbGl0TW9kaWZpZXJzLFxuICAgIGdldENsYXNzR3JvdXBJZCA9IGNvbmZpZ1V0aWxzLmdldENsYXNzR3JvdXBJZCxcbiAgICBnZXRDb25mbGljdGluZ0NsYXNzR3JvdXBJZHMgPSBjb25maWdVdGlscy5nZXRDb25mbGljdGluZ0NsYXNzR3JvdXBJZHM7XG4gIC8qKlxuICAgKiBTZXQgb2YgY2xhc3NHcm91cElkcyBpbiBmb2xsb3dpbmcgZm9ybWF0OlxuICAgKiBge2ltcG9ydGFudE1vZGlmaWVyfXt2YXJpYW50TW9kaWZpZXJzfXtjbGFzc0dyb3VwSWR9YFxuICAgKiBAZXhhbXBsZSAnZmxvYXQnXG4gICAqIEBleGFtcGxlICdob3Zlcjpmb2N1czpiZy1jb2xvcidcbiAgICogQGV4YW1wbGUgJ21kOiFwcidcbiAgICovXG4gIHZhciBjbGFzc0dyb3Vwc0luQ29uZmxpY3QgPSBuZXcgU2V0KCk7XG4gIHJldHVybiBjbGFzc0xpc3QudHJpbSgpLnNwbGl0KFNQTElUX0NMQVNTRVNfUkVHRVgpLm1hcChmdW5jdGlvbiAob3JpZ2luYWxDbGFzc05hbWUpIHtcbiAgICB2YXIgX3NwbGl0TW9kaWZpZXJzID0gc3BsaXRNb2RpZmllcnMob3JpZ2luYWxDbGFzc05hbWUpLFxuICAgICAgbW9kaWZpZXJzID0gX3NwbGl0TW9kaWZpZXJzLm1vZGlmaWVycyxcbiAgICAgIGhhc0ltcG9ydGFudE1vZGlmaWVyID0gX3NwbGl0TW9kaWZpZXJzLmhhc0ltcG9ydGFudE1vZGlmaWVyLFxuICAgICAgYmFzZUNsYXNzTmFtZSA9IF9zcGxpdE1vZGlmaWVycy5iYXNlQ2xhc3NOYW1lLFxuICAgICAgbWF5YmVQb3N0Zml4TW9kaWZpZXJQb3NpdGlvbiA9IF9zcGxpdE1vZGlmaWVycy5tYXliZVBvc3RmaXhNb2RpZmllclBvc2l0aW9uO1xuICAgIHZhciBjbGFzc0dyb3VwSWQgPSBnZXRDbGFzc0dyb3VwSWQobWF5YmVQb3N0Zml4TW9kaWZpZXJQb3NpdGlvbiA/IGJhc2VDbGFzc05hbWUuc3Vic3RyaW5nKDAsIG1heWJlUG9zdGZpeE1vZGlmaWVyUG9zaXRpb24pIDogYmFzZUNsYXNzTmFtZSk7XG4gICAgdmFyIGhhc1Bvc3RmaXhNb2RpZmllciA9IEJvb2xlYW4obWF5YmVQb3N0Zml4TW9kaWZpZXJQb3NpdGlvbik7XG4gICAgaWYgKCFjbGFzc0dyb3VwSWQpIHtcbiAgICAgIGlmICghbWF5YmVQb3N0Zml4TW9kaWZpZXJQb3NpdGlvbikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzVGFpbHdpbmRDbGFzczogZmFsc2UsXG4gICAgICAgICAgb3JpZ2luYWxDbGFzc05hbWU6IG9yaWdpbmFsQ2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjbGFzc0dyb3VwSWQgPSBnZXRDbGFzc0dyb3VwSWQoYmFzZUNsYXNzTmFtZSk7XG4gICAgICBpZiAoIWNsYXNzR3JvdXBJZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzVGFpbHdpbmRDbGFzczogZmFsc2UsXG4gICAgICAgICAgb3JpZ2luYWxDbGFzc05hbWU6IG9yaWdpbmFsQ2xhc3NOYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBoYXNQb3N0Zml4TW9kaWZpZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHZhcmlhbnRNb2RpZmllciA9IHNvcnRNb2RpZmllcnMobW9kaWZpZXJzKS5qb2luKCc6Jyk7XG4gICAgdmFyIG1vZGlmaWVySWQgPSBoYXNJbXBvcnRhbnRNb2RpZmllciA/IHZhcmlhbnRNb2RpZmllciArIElNUE9SVEFOVF9NT0RJRklFUiA6IHZhcmlhbnRNb2RpZmllcjtcbiAgICByZXR1cm4ge1xuICAgICAgaXNUYWlsd2luZENsYXNzOiB0cnVlLFxuICAgICAgbW9kaWZpZXJJZDogbW9kaWZpZXJJZCxcbiAgICAgIGNsYXNzR3JvdXBJZDogY2xhc3NHcm91cElkLFxuICAgICAgb3JpZ2luYWxDbGFzc05hbWU6IG9yaWdpbmFsQ2xhc3NOYW1lLFxuICAgICAgaGFzUG9zdGZpeE1vZGlmaWVyOiBoYXNQb3N0Zml4TW9kaWZpZXJcbiAgICB9O1xuICB9KS5yZXZlcnNlKClcbiAgLy8gTGFzdCBjbGFzcyBpbiBjb25mbGljdCB3aW5zLCBzbyB3ZSBuZWVkIHRvIGZpbHRlciBjb25mbGljdGluZyBjbGFzc2VzIGluIHJldmVyc2Ugb3JkZXIuXG4gIC5maWx0ZXIoZnVuY3Rpb24gKHBhcnNlZCkge1xuICAgIGlmICghcGFyc2VkLmlzVGFpbHdpbmRDbGFzcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBtb2RpZmllcklkID0gcGFyc2VkLm1vZGlmaWVySWQsXG4gICAgICBjbGFzc0dyb3VwSWQgPSBwYXJzZWQuY2xhc3NHcm91cElkLFxuICAgICAgaGFzUG9zdGZpeE1vZGlmaWVyID0gcGFyc2VkLmhhc1Bvc3RmaXhNb2RpZmllcjtcbiAgICB2YXIgY2xhc3NJZCA9IG1vZGlmaWVySWQgKyBjbGFzc0dyb3VwSWQ7XG4gICAgaWYgKGNsYXNzR3JvdXBzSW5Db25mbGljdC5oYXMoY2xhc3NJZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY2xhc3NHcm91cHNJbkNvbmZsaWN0LmFkZChjbGFzc0lkKTtcbiAgICBnZXRDb25mbGljdGluZ0NsYXNzR3JvdXBJZHMoY2xhc3NHcm91cElkLCBoYXNQb3N0Zml4TW9kaWZpZXIpLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICByZXR1cm4gY2xhc3NHcm91cHNJbkNvbmZsaWN0LmFkZChtb2RpZmllcklkICsgZ3JvdXApO1xuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9KS5yZXZlcnNlKCkubWFwKGZ1bmN0aW9uIChwYXJzZWQpIHtcbiAgICByZXR1cm4gcGFyc2VkLm9yaWdpbmFsQ2xhc3NOYW1lO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmV4cG9ydCB7IG1lcmdlQ2xhc3NMaXN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZS1jbGFzc2xpc3QubWpzLm1hcFxuIiwiLyoqXG4gKiBUaGUgY29kZSBpbiB0aGlzIGZpbGUgaXMgY29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2x1a2VlZC9jbHN4IGFuZCBtb2RpZmllZCB0byBzdWl0IHRoZSBuZWVkcyBvZiB0YWlsd2luZC1tZXJnZSBiZXR0ZXIuXG4gKlxuICogU3BlY2lmaWNhbGx5OlxuICogLSBSdW50aW1lIGNvZGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVrZWVkL2Nsc3gvYmxvYi92MS4yLjEvc3JjL2luZGV4LmpzXG4gKiAtIFR5cGVTY3JpcHQgdHlwZXMgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbHVrZWVkL2Nsc3gvYmxvYi92MS4yLjEvY2xzeC5kLnRzXG4gKlxuICogT3JpZ2luYWwgY29kZSBoYXMgTUlUIGxpY2Vuc2U6IENvcHlyaWdodCAoYykgTHVrZSBFZHdhcmRzIDxsdWtlLmVkd2FyZHMwNUBnbWFpbC5jb20+IChsdWtlZWQuY29tKVxuICovXG5mdW5jdGlvbiB0d0pvaW4oKSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBhcmd1bWVudDtcbiAgdmFyIHJlc29sdmVkVmFsdWU7XG4gIHZhciBzdHJpbmcgPSAnJztcbiAgd2hpbGUgKGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGlmIChhcmd1bWVudCA9IGFyZ3VtZW50c1tpbmRleCsrXSkge1xuICAgICAgaWYgKHJlc29sdmVkVmFsdWUgPSB0b1ZhbHVlKGFyZ3VtZW50KSkge1xuICAgICAgICBzdHJpbmcgJiYgKHN0cmluZyArPSAnICcpO1xuICAgICAgICBzdHJpbmcgKz0gcmVzb2x2ZWRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cmluZztcbn1cbmZ1bmN0aW9uIHRvVmFsdWUobWl4KSB7XG4gIGlmICh0eXBlb2YgbWl4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBtaXg7XG4gIH1cbiAgdmFyIHJlc29sdmVkVmFsdWU7XG4gIHZhciBzdHJpbmcgPSAnJztcbiAgZm9yICh2YXIgayA9IDA7IGsgPCBtaXgubGVuZ3RoOyBrKyspIHtcbiAgICBpZiAobWl4W2tdKSB7XG4gICAgICBpZiAocmVzb2x2ZWRWYWx1ZSA9IHRvVmFsdWUobWl4W2tdKSkge1xuICAgICAgICBzdHJpbmcgJiYgKHN0cmluZyArPSAnICcpO1xuICAgICAgICBzdHJpbmcgKz0gcmVzb2x2ZWRWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZXhwb3J0IHsgdHdKb2luIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10dy1qb2luLm1qcy5tYXBcbiIsImltcG9ydCB7IGNyZWF0ZUNvbmZpZ1V0aWxzIH0gZnJvbSAnLi9jb25maWctdXRpbHMubWpzJztcbmltcG9ydCB7IG1lcmdlQ2xhc3NMaXN0IH0gZnJvbSAnLi9tZXJnZS1jbGFzc2xpc3QubWpzJztcbmltcG9ydCB7IHR3Sm9pbiB9IGZyb20gJy4vdHctam9pbi5tanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVUYWlsd2luZE1lcmdlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgY3JlYXRlQ29uZmlnID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGNyZWF0ZUNvbmZpZ1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICB2YXIgY29uZmlnVXRpbHM7XG4gIHZhciBjYWNoZUdldDtcbiAgdmFyIGNhY2hlU2V0O1xuICB2YXIgZnVuY3Rpb25Ub0NhbGwgPSBpbml0VGFpbHdpbmRNZXJnZTtcbiAgZnVuY3Rpb24gaW5pdFRhaWx3aW5kTWVyZ2UoY2xhc3NMaXN0KSB7XG4gICAgdmFyIGZpcnN0Q3JlYXRlQ29uZmlnID0gY3JlYXRlQ29uZmlnWzBdLFxuICAgICAgcmVzdENyZWF0ZUNvbmZpZyA9IGNyZWF0ZUNvbmZpZy5zbGljZSgxKTtcbiAgICB2YXIgY29uZmlnID0gcmVzdENyZWF0ZUNvbmZpZy5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzQ29uZmlnLCBjcmVhdGVDb25maWdDdXJyZW50KSB7XG4gICAgICByZXR1cm4gY3JlYXRlQ29uZmlnQ3VycmVudChwcmV2aW91c0NvbmZpZyk7XG4gICAgfSwgZmlyc3RDcmVhdGVDb25maWcoKSk7XG4gICAgY29uZmlnVXRpbHMgPSBjcmVhdGVDb25maWdVdGlscyhjb25maWcpO1xuICAgIGNhY2hlR2V0ID0gY29uZmlnVXRpbHMuY2FjaGUuZ2V0O1xuICAgIGNhY2hlU2V0ID0gY29uZmlnVXRpbHMuY2FjaGUuc2V0O1xuICAgIGZ1bmN0aW9uVG9DYWxsID0gdGFpbHdpbmRNZXJnZTtcbiAgICByZXR1cm4gdGFpbHdpbmRNZXJnZShjbGFzc0xpc3QpO1xuICB9XG4gIGZ1bmN0aW9uIHRhaWx3aW5kTWVyZ2UoY2xhc3NMaXN0KSB7XG4gICAgdmFyIGNhY2hlZFJlc3VsdCA9IGNhY2hlR2V0KGNsYXNzTGlzdCk7XG4gICAgaWYgKGNhY2hlZFJlc3VsdCkge1xuICAgICAgcmV0dXJuIGNhY2hlZFJlc3VsdDtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IG1lcmdlQ2xhc3NMaXN0KGNsYXNzTGlzdCwgY29uZmlnVXRpbHMpO1xuICAgIGNhY2hlU2V0KGNsYXNzTGlzdCwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiBjYWxsVGFpbHdpbmRNZXJnZSgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub0NhbGwodHdKb2luLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVUYWlsd2luZE1lcmdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jcmVhdGUtdGFpbHdpbmQtbWVyZ2UubWpzLm1hcFxuIiwiZnVuY3Rpb24gZnJvbVRoZW1lKGtleSkge1xuICB2YXIgdGhlbWVHZXR0ZXIgPSBmdW5jdGlvbiB0aGVtZUdldHRlcih0aGVtZSkge1xuICAgIHJldHVybiB0aGVtZVtrZXldIHx8IFtdO1xuICB9O1xuICB0aGVtZUdldHRlci5pc1RoZW1lR2V0dGVyID0gdHJ1ZTtcbiAgcmV0dXJuIHRoZW1lR2V0dGVyO1xufVxuXG5leHBvcnQgeyBmcm9tVGhlbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb20tdGhlbWUubWpzLm1hcFxuIiwidmFyIGFyYml0cmFyeVZhbHVlUmVnZXggPSAvXlxcWyg/OihbYS16LV0rKTopPyguKylcXF0kL2k7XG52YXIgZnJhY3Rpb25SZWdleCA9IC9eXFxkK1xcL1xcZCskLztcbnZhciBzdHJpbmdMZW5ndGhzID0gLyojX19QVVJFX18qL25ldyBTZXQoWydweCcsICdmdWxsJywgJ3NjcmVlbiddKTtcbnZhciB0c2hpcnRVbml0UmVnZXggPSAvXihcXGQrKFxcLlxcZCspPyk/KHhzfHNtfG1kfGxnfHhsKSQvO1xudmFyIGxlbmd0aFVuaXRSZWdleCA9IC9cXGQrKCV8cHh8cj9lbXxbc2RsXT92KFtod2liXXxtaW58bWF4KXxwdHxwY3xpbnxjbXxtbXxjYXB8Y2h8ZXh8cj9saHxjcSh3fGh8aXxifG1pbnxtYXgpKXxeMCQvO1xuLy8gU2hhZG93IGFsd2F5cyBiZWdpbnMgd2l0aCB4IGFuZCB5IG9mZnNldCBzZXBhcmF0ZWQgYnkgdW5kZXJzY29yZVxudmFyIHNoYWRvd1JlZ2V4ID0gL14tPygoXFxkKyk/XFwuPyhcXGQrKVthLXpdK3wwKV8tPygoXFxkKyk/XFwuPyhcXGQrKVthLXpdK3wwKS87XG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gaXNOdW1iZXIodmFsdWUpIHx8IHN0cmluZ0xlbmd0aHMuaGFzKHZhbHVlKSB8fCBmcmFjdGlvblJlZ2V4LnRlc3QodmFsdWUpIHx8IGlzQXJiaXRyYXJ5TGVuZ3RoKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzQXJiaXRyYXJ5TGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiBnZXRJc0FyYml0cmFyeVZhbHVlKHZhbHVlLCAnbGVuZ3RoJywgaXNMZW5ndGhPbmx5KTtcbn1cbmZ1bmN0aW9uIGlzQXJiaXRyYXJ5U2l6ZSh2YWx1ZSkge1xuICByZXR1cm4gZ2V0SXNBcmJpdHJhcnlWYWx1ZSh2YWx1ZSwgJ3NpemUnLCBpc05ldmVyKTtcbn1cbmZ1bmN0aW9uIGlzQXJiaXRyYXJ5UG9zaXRpb24odmFsdWUpIHtcbiAgcmV0dXJuIGdldElzQXJiaXRyYXJ5VmFsdWUodmFsdWUsICdwb3NpdGlvbicsIGlzTmV2ZXIpO1xufVxuZnVuY3Rpb24gaXNBcmJpdHJhcnlVcmwodmFsdWUpIHtcbiAgcmV0dXJuIGdldElzQXJiaXRyYXJ5VmFsdWUodmFsdWUsICd1cmwnLCBpc1VybCk7XG59XG5mdW5jdGlvbiBpc0FyYml0cmFyeU51bWJlcih2YWx1ZSkge1xuICByZXR1cm4gZ2V0SXNBcmJpdHJhcnlWYWx1ZSh2YWx1ZSwgJ251bWJlcicsIGlzTnVtYmVyKTtcbn1cbi8qKlxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIG5leHQgbWFqb3IgdmVyc2lvbi4gVXNlIGBpc0FyYml0cmFyeU51bWJlcmAgaW5zdGVhZC5cbiAqL1xudmFyIGlzQXJiaXRyYXJ5V2VpZ2h0ID0gaXNBcmJpdHJhcnlOdW1iZXI7XG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gIU51bWJlci5pc05hTihOdW1iZXIodmFsdWUpKTtcbn1cbmZ1bmN0aW9uIGlzUGVyY2VudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuZW5kc1dpdGgoJyUnKSAmJiBpc051bWJlcih2YWx1ZS5zbGljZSgwLCAtMSkpO1xufVxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiBpc0ludGVnZXJPbmx5KHZhbHVlKSB8fCBnZXRJc0FyYml0cmFyeVZhbHVlKHZhbHVlLCAnbnVtYmVyJywgaXNJbnRlZ2VyT25seSk7XG59XG5mdW5jdGlvbiBpc0FyYml0cmFyeVZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiBhcmJpdHJhcnlWYWx1ZVJlZ2V4LnRlc3QodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNBbnkoKSB7XG4gIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gaXNUc2hpcnRTaXplKHZhbHVlKSB7XG4gIHJldHVybiB0c2hpcnRVbml0UmVnZXgudGVzdCh2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0FyYml0cmFyeVNoYWRvdyh2YWx1ZSkge1xuICByZXR1cm4gZ2V0SXNBcmJpdHJhcnlWYWx1ZSh2YWx1ZSwgJycsIGlzU2hhZG93KTtcbn1cbmZ1bmN0aW9uIGdldElzQXJiaXRyYXJ5VmFsdWUodmFsdWUsIGxhYmVsLCB0ZXN0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IGFyYml0cmFyeVZhbHVlUmVnZXguZXhlYyh2YWx1ZSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0WzFdKSB7XG4gICAgICByZXR1cm4gcmVzdWx0WzFdID09PSBsYWJlbDtcbiAgICB9XG4gICAgcmV0dXJuIHRlc3RWYWx1ZShyZXN1bHRbMl0pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzTGVuZ3RoT25seSh2YWx1ZSkge1xuICByZXR1cm4gbGVuZ3RoVW5pdFJlZ2V4LnRlc3QodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNOZXZlcigpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNVcmwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN0YXJ0c1dpdGgoJ3VybCgnKTtcbn1cbmZ1bmN0aW9uIGlzSW50ZWdlck9ubHkodmFsdWUpIHtcbiAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoTnVtYmVyKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBpc1NoYWRvdyh2YWx1ZSkge1xuICByZXR1cm4gc2hhZG93UmVnZXgudGVzdCh2YWx1ZSk7XG59XG5cbmV4cG9ydCB7IGlzQW55LCBpc0FyYml0cmFyeUxlbmd0aCwgaXNBcmJpdHJhcnlOdW1iZXIsIGlzQXJiaXRyYXJ5UG9zaXRpb24sIGlzQXJiaXRyYXJ5U2hhZG93LCBpc0FyYml0cmFyeVNpemUsIGlzQXJiaXRyYXJ5VXJsLCBpc0FyYml0cmFyeVZhbHVlLCBpc0FyYml0cmFyeVdlaWdodCwgaXNJbnRlZ2VyLCBpc0xlbmd0aCwgaXNOdW1iZXIsIGlzUGVyY2VudCwgaXNUc2hpcnRTaXplIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0b3JzLm1qcy5tYXBcbiIsImltcG9ydCB7IGZyb21UaGVtZSB9IGZyb20gJy4vZnJvbS10aGVtZS5tanMnO1xuaW1wb3J0IHsgaXNBbnksIGlzTGVuZ3RoLCBpc1RzaGlydFNpemUsIGlzQXJiaXRyYXJ5TGVuZ3RoLCBpc1BlcmNlbnQsIGlzQXJiaXRyYXJ5VmFsdWUsIGlzSW50ZWdlciwgaXNBcmJpdHJhcnlOdW1iZXIsIGlzTnVtYmVyLCBpc0FyYml0cmFyeVBvc2l0aW9uLCBpc0FyYml0cmFyeVNpemUsIGlzQXJiaXRyYXJ5VXJsLCBpc0FyYml0cmFyeVNoYWRvdyB9IGZyb20gJy4vdmFsaWRhdG9ycy5tanMnO1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0Q29uZmlnKCkge1xuICB2YXIgY29sb3JzID0gZnJvbVRoZW1lKCdjb2xvcnMnKTtcbiAgdmFyIHNwYWNpbmcgPSBmcm9tVGhlbWUoJ3NwYWNpbmcnKTtcbiAgdmFyIGJsdXIgPSBmcm9tVGhlbWUoJ2JsdXInKTtcbiAgdmFyIGJyaWdodG5lc3MgPSBmcm9tVGhlbWUoJ2JyaWdodG5lc3MnKTtcbiAgdmFyIGJvcmRlckNvbG9yID0gZnJvbVRoZW1lKCdib3JkZXJDb2xvcicpO1xuICB2YXIgYm9yZGVyUmFkaXVzID0gZnJvbVRoZW1lKCdib3JkZXJSYWRpdXMnKTtcbiAgdmFyIGJvcmRlclNwYWNpbmcgPSBmcm9tVGhlbWUoJ2JvcmRlclNwYWNpbmcnKTtcbiAgdmFyIGJvcmRlcldpZHRoID0gZnJvbVRoZW1lKCdib3JkZXJXaWR0aCcpO1xuICB2YXIgY29udHJhc3QgPSBmcm9tVGhlbWUoJ2NvbnRyYXN0Jyk7XG4gIHZhciBncmF5c2NhbGUgPSBmcm9tVGhlbWUoJ2dyYXlzY2FsZScpO1xuICB2YXIgaHVlUm90YXRlID0gZnJvbVRoZW1lKCdodWVSb3RhdGUnKTtcbiAgdmFyIGludmVydCA9IGZyb21UaGVtZSgnaW52ZXJ0Jyk7XG4gIHZhciBnYXAgPSBmcm9tVGhlbWUoJ2dhcCcpO1xuICB2YXIgZ3JhZGllbnRDb2xvclN0b3BzID0gZnJvbVRoZW1lKCdncmFkaWVudENvbG9yU3RvcHMnKTtcbiAgdmFyIGdyYWRpZW50Q29sb3JTdG9wUG9zaXRpb25zID0gZnJvbVRoZW1lKCdncmFkaWVudENvbG9yU3RvcFBvc2l0aW9ucycpO1xuICB2YXIgaW5zZXQgPSBmcm9tVGhlbWUoJ2luc2V0Jyk7XG4gIHZhciBtYXJnaW4gPSBmcm9tVGhlbWUoJ21hcmdpbicpO1xuICB2YXIgb3BhY2l0eSA9IGZyb21UaGVtZSgnb3BhY2l0eScpO1xuICB2YXIgcGFkZGluZyA9IGZyb21UaGVtZSgncGFkZGluZycpO1xuICB2YXIgc2F0dXJhdGUgPSBmcm9tVGhlbWUoJ3NhdHVyYXRlJyk7XG4gIHZhciBzY2FsZSA9IGZyb21UaGVtZSgnc2NhbGUnKTtcbiAgdmFyIHNlcGlhID0gZnJvbVRoZW1lKCdzZXBpYScpO1xuICB2YXIgc2tldyA9IGZyb21UaGVtZSgnc2tldycpO1xuICB2YXIgc3BhY2UgPSBmcm9tVGhlbWUoJ3NwYWNlJyk7XG4gIHZhciB0cmFuc2xhdGUgPSBmcm9tVGhlbWUoJ3RyYW5zbGF0ZScpO1xuICB2YXIgZ2V0T3ZlcnNjcm9sbCA9IGZ1bmN0aW9uIGdldE92ZXJzY3JvbGwoKSB7XG4gICAgcmV0dXJuIFsnYXV0bycsICdjb250YWluJywgJ25vbmUnXTtcbiAgfTtcbiAgdmFyIGdldE92ZXJmbG93ID0gZnVuY3Rpb24gZ2V0T3ZlcmZsb3coKSB7XG4gICAgcmV0dXJuIFsnYXV0bycsICdoaWRkZW4nLCAnY2xpcCcsICd2aXNpYmxlJywgJ3Njcm9sbCddO1xuICB9O1xuICB2YXIgZ2V0U3BhY2luZ1dpdGhBdXRvID0gZnVuY3Rpb24gZ2V0U3BhY2luZ1dpdGhBdXRvKCkge1xuICAgIHJldHVybiBbJ2F1dG8nLCBzcGFjaW5nXTtcbiAgfTtcbiAgdmFyIGdldExlbmd0aFdpdGhFbXB0eSA9IGZ1bmN0aW9uIGdldExlbmd0aFdpdGhFbXB0eSgpIHtcbiAgICByZXR1cm4gWycnLCBpc0xlbmd0aF07XG4gIH07XG4gIHZhciBnZXROdW1iZXJXaXRoQXV0b0FuZEFyYml0cmFyeSA9IGZ1bmN0aW9uIGdldE51bWJlcldpdGhBdXRvQW5kQXJiaXRyYXJ5KCkge1xuICAgIHJldHVybiBbJ2F1dG8nLCBpc051bWJlciwgaXNBcmJpdHJhcnlWYWx1ZV07XG4gIH07XG4gIHZhciBnZXRQb3NpdGlvbnMgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIFsnYm90dG9tJywgJ2NlbnRlcicsICdsZWZ0JywgJ2xlZnQtYm90dG9tJywgJ2xlZnQtdG9wJywgJ3JpZ2h0JywgJ3JpZ2h0LWJvdHRvbScsICdyaWdodC10b3AnLCAndG9wJ107XG4gIH07XG4gIHZhciBnZXRMaW5lU3R5bGVzID0gZnVuY3Rpb24gZ2V0TGluZVN0eWxlcygpIHtcbiAgICByZXR1cm4gWydzb2xpZCcsICdkYXNoZWQnLCAnZG90dGVkJywgJ2RvdWJsZScsICdub25lJ107XG4gIH07XG4gIHZhciBnZXRCbGVuZE1vZGVzID0gZnVuY3Rpb24gZ2V0QmxlbmRNb2RlcygpIHtcbiAgICByZXR1cm4gWydub3JtYWwnLCAnbXVsdGlwbHknLCAnc2NyZWVuJywgJ292ZXJsYXknLCAnZGFya2VuJywgJ2xpZ2h0ZW4nLCAnY29sb3ItZG9kZ2UnLCAnY29sb3ItYnVybicsICdoYXJkLWxpZ2h0JywgJ3NvZnQtbGlnaHQnLCAnZGlmZmVyZW5jZScsICdleGNsdXNpb24nLCAnaHVlJywgJ3NhdHVyYXRpb24nLCAnY29sb3InLCAnbHVtaW5vc2l0eScsICdwbHVzLWxpZ2h0ZXInXTtcbiAgfTtcbiAgdmFyIGdldEFsaWduID0gZnVuY3Rpb24gZ2V0QWxpZ24oKSB7XG4gICAgcmV0dXJuIFsnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdiZXR3ZWVuJywgJ2Fyb3VuZCcsICdldmVubHknLCAnc3RyZXRjaCddO1xuICB9O1xuICB2YXIgZ2V0WmVyb0FuZEVtcHR5ID0gZnVuY3Rpb24gZ2V0WmVyb0FuZEVtcHR5KCkge1xuICAgIHJldHVybiBbJycsICcwJywgaXNBcmJpdHJhcnlWYWx1ZV07XG4gIH07XG4gIHZhciBnZXRCcmVha3MgPSBmdW5jdGlvbiBnZXRCcmVha3MoKSB7XG4gICAgcmV0dXJuIFsnYXV0bycsICdhdm9pZCcsICdhbGwnLCAnYXZvaWQtcGFnZScsICdwYWdlJywgJ2xlZnQnLCAncmlnaHQnLCAnY29sdW1uJ107XG4gIH07XG4gIHZhciBnZXROdW1iZXIgPSBmdW5jdGlvbiBnZXROdW1iZXIoKSB7XG4gICAgcmV0dXJuIFtpc051bWJlciwgaXNBcmJpdHJhcnlOdW1iZXJdO1xuICB9O1xuICB2YXIgZ2V0TnVtYmVyQW5kQXJiaXRyYXJ5ID0gZnVuY3Rpb24gZ2V0TnVtYmVyQW5kQXJiaXRyYXJ5KCkge1xuICAgIHJldHVybiBbaXNOdW1iZXIsIGlzQXJiaXRyYXJ5VmFsdWVdO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGNhY2hlU2l6ZTogNTAwLFxuICAgIHRoZW1lOiB7XG4gICAgICBjb2xvcnM6IFtpc0FueV0sXG4gICAgICBzcGFjaW5nOiBbaXNMZW5ndGhdLFxuICAgICAgYmx1cjogWydub25lJywgJycsIGlzVHNoaXJ0U2l6ZSwgaXNBcmJpdHJhcnlMZW5ndGhdLFxuICAgICAgYnJpZ2h0bmVzczogZ2V0TnVtYmVyKCksXG4gICAgICBib3JkZXJDb2xvcjogW2NvbG9yc10sXG4gICAgICBib3JkZXJSYWRpdXM6IFsnbm9uZScsICcnLCAnZnVsbCcsIGlzVHNoaXJ0U2l6ZSwgaXNBcmJpdHJhcnlMZW5ndGhdLFxuICAgICAgYm9yZGVyU3BhY2luZzogW3NwYWNpbmddLFxuICAgICAgYm9yZGVyV2lkdGg6IGdldExlbmd0aFdpdGhFbXB0eSgpLFxuICAgICAgY29udHJhc3Q6IGdldE51bWJlcigpLFxuICAgICAgZ3JheXNjYWxlOiBnZXRaZXJvQW5kRW1wdHkoKSxcbiAgICAgIGh1ZVJvdGF0ZTogZ2V0TnVtYmVyQW5kQXJiaXRyYXJ5KCksXG4gICAgICBpbnZlcnQ6IGdldFplcm9BbmRFbXB0eSgpLFxuICAgICAgZ2FwOiBbc3BhY2luZ10sXG4gICAgICBncmFkaWVudENvbG9yU3RvcHM6IFtjb2xvcnNdLFxuICAgICAgZ3JhZGllbnRDb2xvclN0b3BQb3NpdGlvbnM6IFtpc1BlcmNlbnQsIGlzQXJiaXRyYXJ5TGVuZ3RoXSxcbiAgICAgIGluc2V0OiBnZXRTcGFjaW5nV2l0aEF1dG8oKSxcbiAgICAgIG1hcmdpbjogZ2V0U3BhY2luZ1dpdGhBdXRvKCksXG4gICAgICBvcGFjaXR5OiBnZXROdW1iZXIoKSxcbiAgICAgIHBhZGRpbmc6IFtzcGFjaW5nXSxcbiAgICAgIHNhdHVyYXRlOiBnZXROdW1iZXIoKSxcbiAgICAgIHNjYWxlOiBnZXROdW1iZXIoKSxcbiAgICAgIHNlcGlhOiBnZXRaZXJvQW5kRW1wdHkoKSxcbiAgICAgIHNrZXc6IGdldE51bWJlckFuZEFyYml0cmFyeSgpLFxuICAgICAgc3BhY2U6IFtzcGFjaW5nXSxcbiAgICAgIHRyYW5zbGF0ZTogW3NwYWNpbmddXG4gICAgfSxcbiAgICBjbGFzc0dyb3Vwczoge1xuICAgICAgLy8gTGF5b3V0XG4gICAgICAvKipcbiAgICAgICAqIEFzcGVjdCBSYXRpb1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FzcGVjdC1yYXRpb1xuICAgICAgICovXG4gICAgICBhc3BlY3Q6IFt7XG4gICAgICAgIGFzcGVjdDogWydhdXRvJywgJ3NxdWFyZScsICd2aWRlbycsIGlzQXJiaXRyYXJ5VmFsdWVdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQ29udGFpbmVyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvY29udGFpbmVyXG4gICAgICAgKi9cbiAgICAgIGNvbnRhaW5lcjogWydjb250YWluZXInXSxcbiAgICAgIC8qKlxuICAgICAgICogQ29sdW1uc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2NvbHVtbnNcbiAgICAgICAqL1xuICAgICAgY29sdW1uczogW3tcbiAgICAgICAgY29sdW1uczogW2lzVHNoaXJ0U2l6ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCcmVhayBBZnRlclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JyZWFrLWFmdGVyXG4gICAgICAgKi9cbiAgICAgICdicmVhay1hZnRlcic6IFt7XG4gICAgICAgICdicmVhay1hZnRlcic6IGdldEJyZWFrcygpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQnJlYWsgQmVmb3JlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYnJlYWstYmVmb3JlXG4gICAgICAgKi9cbiAgICAgICdicmVhay1iZWZvcmUnOiBbe1xuICAgICAgICAnYnJlYWstYmVmb3JlJzogZ2V0QnJlYWtzKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCcmVhayBJbnNpZGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9icmVhay1pbnNpZGVcbiAgICAgICAqL1xuICAgICAgJ2JyZWFrLWluc2lkZSc6IFt7XG4gICAgICAgICdicmVhay1pbnNpZGUnOiBbJ2F1dG8nLCAnYXZvaWQnLCAnYXZvaWQtcGFnZScsICdhdm9pZC1jb2x1bW4nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJveCBEZWNvcmF0aW9uIEJyZWFrXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm94LWRlY29yYXRpb24tYnJlYWtcbiAgICAgICAqL1xuICAgICAgJ2JveC1kZWNvcmF0aW9uJzogW3tcbiAgICAgICAgJ2JveC1kZWNvcmF0aW9uJzogWydzbGljZScsICdjbG9uZSddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm94IFNpemluZ1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JveC1zaXppbmdcbiAgICAgICAqL1xuICAgICAgYm94OiBbe1xuICAgICAgICBib3g6IFsnYm9yZGVyJywgJ2NvbnRlbnQnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIERpc3BsYXlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9kaXNwbGF5XG4gICAgICAgKi9cbiAgICAgIGRpc3BsYXk6IFsnYmxvY2snLCAnaW5saW5lLWJsb2NrJywgJ2lubGluZScsICdmbGV4JywgJ2lubGluZS1mbGV4JywgJ3RhYmxlJywgJ2lubGluZS10YWJsZScsICd0YWJsZS1jYXB0aW9uJywgJ3RhYmxlLWNlbGwnLCAndGFibGUtY29sdW1uJywgJ3RhYmxlLWNvbHVtbi1ncm91cCcsICd0YWJsZS1mb290ZXItZ3JvdXAnLCAndGFibGUtaGVhZGVyLWdyb3VwJywgJ3RhYmxlLXJvdy1ncm91cCcsICd0YWJsZS1yb3cnLCAnZmxvdy1yb290JywgJ2dyaWQnLCAnaW5saW5lLWdyaWQnLCAnY29udGVudHMnLCAnbGlzdC1pdGVtJywgJ2hpZGRlbiddLFxuICAgICAgLyoqXG4gICAgICAgKiBGbG9hdHNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mbG9hdFxuICAgICAgICovXG4gICAgICBcImZsb2F0XCI6IFt7XG4gICAgICAgIFwiZmxvYXRcIjogWydyaWdodCcsICdsZWZ0JywgJ25vbmUnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIENsZWFyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvY2xlYXJcbiAgICAgICAqL1xuICAgICAgY2xlYXI6IFt7XG4gICAgICAgIGNsZWFyOiBbJ2xlZnQnLCAncmlnaHQnLCAnYm90aCcsICdub25lJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBJc29sYXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9pc29sYXRpb25cbiAgICAgICAqL1xuICAgICAgaXNvbGF0aW9uOiBbJ2lzb2xhdGUnLCAnaXNvbGF0aW9uLWF1dG8nXSxcbiAgICAgIC8qKlxuICAgICAgICogT2JqZWN0IEZpdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL29iamVjdC1maXRcbiAgICAgICAqL1xuICAgICAgJ29iamVjdC1maXQnOiBbe1xuICAgICAgICBvYmplY3Q6IFsnY29udGFpbicsICdjb3ZlcicsICdmaWxsJywgJ25vbmUnLCAnc2NhbGUtZG93biddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogT2JqZWN0IFBvc2l0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb2JqZWN0LXBvc2l0aW9uXG4gICAgICAgKi9cbiAgICAgICdvYmplY3QtcG9zaXRpb24nOiBbe1xuICAgICAgICBvYmplY3Q6IFtdLmNvbmNhdChnZXRQb3NpdGlvbnMoKSwgW2lzQXJiaXRyYXJ5VmFsdWVdKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJmbG93XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3ZlcmZsb3dcbiAgICAgICAqL1xuICAgICAgb3ZlcmZsb3c6IFt7XG4gICAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvdygpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogT3ZlcmZsb3cgWFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL292ZXJmbG93XG4gICAgICAgKi9cbiAgICAgICdvdmVyZmxvdy14JzogW3tcbiAgICAgICAgJ292ZXJmbG93LXgnOiBnZXRPdmVyZmxvdygpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogT3ZlcmZsb3cgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL292ZXJmbG93XG4gICAgICAgKi9cbiAgICAgICdvdmVyZmxvdy15JzogW3tcbiAgICAgICAgJ292ZXJmbG93LXknOiBnZXRPdmVyZmxvdygpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnNjcm9sbCBCZWhhdmlvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL292ZXJzY3JvbGwtYmVoYXZpb3JcbiAgICAgICAqL1xuICAgICAgb3ZlcnNjcm9sbDogW3tcbiAgICAgICAgb3ZlcnNjcm9sbDogZ2V0T3ZlcnNjcm9sbCgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogT3ZlcnNjcm9sbCBCZWhhdmlvciBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3ZlcnNjcm9sbC1iZWhhdmlvclxuICAgICAgICovXG4gICAgICAnb3ZlcnNjcm9sbC14JzogW3tcbiAgICAgICAgJ292ZXJzY3JvbGwteCc6IGdldE92ZXJzY3JvbGwoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE92ZXJzY3JvbGwgQmVoYXZpb3IgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL292ZXJzY3JvbGwtYmVoYXZpb3JcbiAgICAgICAqL1xuICAgICAgJ292ZXJzY3JvbGwteSc6IFt7XG4gICAgICAgICdvdmVyc2Nyb2xsLXknOiBnZXRPdmVyc2Nyb2xsKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQb3NpdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Bvc2l0aW9uXG4gICAgICAgKi9cbiAgICAgIHBvc2l0aW9uOiBbJ3N0YXRpYycsICdmaXhlZCcsICdhYnNvbHV0ZScsICdyZWxhdGl2ZScsICdzdGlja3knXSxcbiAgICAgIC8qKlxuICAgICAgICogVG9wIC8gUmlnaHQgLyBCb3R0b20gLyBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdG9wLXJpZ2h0LWJvdHRvbS1sZWZ0XG4gICAgICAgKi9cbiAgICAgIGluc2V0OiBbe1xuICAgICAgICBpbnNldDogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJpZ2h0IC8gTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICAnaW5zZXQteCc6IFt7XG4gICAgICAgICdpbnNldC14JzogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRvcCAvIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICAnaW5zZXQteSc6IFt7XG4gICAgICAgICdpbnNldC15JzogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdG9wLXJpZ2h0LWJvdHRvbS1sZWZ0XG4gICAgICAgKi9cbiAgICAgIHN0YXJ0OiBbe1xuICAgICAgICBzdGFydDogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICBlbmQ6IFt7XG4gICAgICAgIGVuZDogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICB0b3A6IFt7XG4gICAgICAgIHRvcDogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdG9wLXJpZ2h0LWJvdHRvbS1sZWZ0XG4gICAgICAgKi9cbiAgICAgIHJpZ2h0OiBbe1xuICAgICAgICByaWdodDogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvcC1yaWdodC1ib3R0b20tbGVmdFxuICAgICAgICovXG4gICAgICBib3R0b206IFt7XG4gICAgICAgIGJvdHRvbTogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExlZnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90b3AtcmlnaHQtYm90dG9tLWxlZnRcbiAgICAgICAqL1xuICAgICAgbGVmdDogW3tcbiAgICAgICAgbGVmdDogW2luc2V0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFZpc2liaWxpdHlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy92aXNpYmlsaXR5XG4gICAgICAgKi9cbiAgICAgIHZpc2liaWxpdHk6IFsndmlzaWJsZScsICdpbnZpc2libGUnLCAnY29sbGFwc2UnXSxcbiAgICAgIC8qKlxuICAgICAgICogWi1JbmRleFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3otaW5kZXhcbiAgICAgICAqL1xuICAgICAgejogW3tcbiAgICAgICAgejogWydhdXRvJywgaXNJbnRlZ2VyXVxuICAgICAgfV0sXG4gICAgICAvLyBGbGV4Ym94IGFuZCBHcmlkXG4gICAgICAvKipcbiAgICAgICAqIEZsZXggQmFzaXNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mbGV4LWJhc2lzXG4gICAgICAgKi9cbiAgICAgIGJhc2lzOiBbe1xuICAgICAgICBiYXNpczogZ2V0U3BhY2luZ1dpdGhBdXRvKClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBGbGV4IERpcmVjdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZsZXgtZGlyZWN0aW9uXG4gICAgICAgKi9cbiAgICAgICdmbGV4LWRpcmVjdGlvbic6IFt7XG4gICAgICAgIGZsZXg6IFsncm93JywgJ3Jvdy1yZXZlcnNlJywgJ2NvbCcsICdjb2wtcmV2ZXJzZSddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRmxleCBXcmFwXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmxleC13cmFwXG4gICAgICAgKi9cbiAgICAgICdmbGV4LXdyYXAnOiBbe1xuICAgICAgICBmbGV4OiBbJ3dyYXAnLCAnd3JhcC1yZXZlcnNlJywgJ25vd3JhcCddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRmxleFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZsZXhcbiAgICAgICAqL1xuICAgICAgZmxleDogW3tcbiAgICAgICAgZmxleDogWycxJywgJ2F1dG8nLCAnaW5pdGlhbCcsICdub25lJywgaXNBcmJpdHJhcnlWYWx1ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBGbGV4IEdyb3dcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mbGV4LWdyb3dcbiAgICAgICAqL1xuICAgICAgZ3JvdzogW3tcbiAgICAgICAgZ3JvdzogZ2V0WmVyb0FuZEVtcHR5KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBGbGV4IFNocmlua1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZsZXgtc2hyaW5rXG4gICAgICAgKi9cbiAgICAgIHNocmluazogW3tcbiAgICAgICAgc2hyaW5rOiBnZXRaZXJvQW5kRW1wdHkoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE9yZGVyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3JkZXJcbiAgICAgICAqL1xuICAgICAgb3JkZXI6IFt7XG4gICAgICAgIG9yZGVyOiBbJ2ZpcnN0JywgJ2xhc3QnLCAnbm9uZScsIGlzSW50ZWdlcl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmlkIFRlbXBsYXRlIENvbHVtbnNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLXRlbXBsYXRlLWNvbHVtbnNcbiAgICAgICAqL1xuICAgICAgJ2dyaWQtY29scyc6IFt7XG4gICAgICAgICdncmlkLWNvbHMnOiBbaXNBbnldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBDb2x1bW4gU3RhcnQgLyBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLWNvbHVtblxuICAgICAgICovXG4gICAgICAnY29sLXN0YXJ0LWVuZCc6IFt7XG4gICAgICAgIGNvbDogWydhdXRvJywge1xuICAgICAgICAgIHNwYW46IFtpc0ludGVnZXJdXG4gICAgICAgIH0sIGlzQXJiaXRyYXJ5VmFsdWVdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBDb2x1bW4gU3RhcnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLWNvbHVtblxuICAgICAgICovXG4gICAgICAnY29sLXN0YXJ0JzogW3tcbiAgICAgICAgJ2NvbC1zdGFydCc6IGdldE51bWJlcldpdGhBdXRvQW5kQXJiaXRyYXJ5KClcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmlkIENvbHVtbiBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLWNvbHVtblxuICAgICAgICovXG4gICAgICAnY29sLWVuZCc6IFt7XG4gICAgICAgICdjb2wtZW5kJzogZ2V0TnVtYmVyV2l0aEF1dG9BbmRBcmJpdHJhcnkoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyaWQgVGVtcGxhdGUgUm93c1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyaWQtdGVtcGxhdGUtcm93c1xuICAgICAgICovXG4gICAgICAnZ3JpZC1yb3dzJzogW3tcbiAgICAgICAgJ2dyaWQtcm93cyc6IFtpc0FueV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmlkIFJvdyBTdGFydCAvIEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyaWQtcm93XG4gICAgICAgKi9cbiAgICAgICdyb3ctc3RhcnQtZW5kJzogW3tcbiAgICAgICAgcm93OiBbJ2F1dG8nLCB7XG4gICAgICAgICAgc3BhbjogW2lzSW50ZWdlcl1cbiAgICAgICAgfSwgaXNBcmJpdHJhcnlWYWx1ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmlkIFJvdyBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyaWQtcm93XG4gICAgICAgKi9cbiAgICAgICdyb3ctc3RhcnQnOiBbe1xuICAgICAgICAncm93LXN0YXJ0JzogZ2V0TnVtYmVyV2l0aEF1dG9BbmRBcmJpdHJhcnkoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyaWQgUm93IEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyaWQtcm93XG4gICAgICAgKi9cbiAgICAgICdyb3ctZW5kJzogW3tcbiAgICAgICAgJ3Jvdy1lbmQnOiBnZXROdW1iZXJXaXRoQXV0b0FuZEFyYml0cmFyeSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JpZCBBdXRvIEZsb3dcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmlkLWF1dG8tZmxvd1xuICAgICAgICovXG4gICAgICAnZ3JpZC1mbG93JzogW3tcbiAgICAgICAgJ2dyaWQtZmxvdyc6IFsncm93JywgJ2NvbCcsICdkZW5zZScsICdyb3ctZGVuc2UnLCAnY29sLWRlbnNlJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmlkIEF1dG8gQ29sdW1uc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyaWQtYXV0by1jb2x1bW5zXG4gICAgICAgKi9cbiAgICAgICdhdXRvLWNvbHMnOiBbe1xuICAgICAgICAnYXV0by1jb2xzJzogWydhdXRvJywgJ21pbicsICdtYXgnLCAnZnInLCBpc0FyYml0cmFyeVZhbHVlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyaWQgQXV0byBSb3dzXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JpZC1hdXRvLXJvd3NcbiAgICAgICAqL1xuICAgICAgJ2F1dG8tcm93cyc6IFt7XG4gICAgICAgICdhdXRvLXJvd3MnOiBbJ2F1dG8nLCAnbWluJywgJ21heCcsICdmcicsIGlzQXJiaXRyYXJ5VmFsdWVdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR2FwXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ2FwXG4gICAgICAgKi9cbiAgICAgIGdhcDogW3tcbiAgICAgICAgZ2FwOiBbZ2FwXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdhcCBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ2FwXG4gICAgICAgKi9cbiAgICAgICdnYXAteCc6IFt7XG4gICAgICAgICdnYXAteCc6IFtnYXBdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR2FwIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9nYXBcbiAgICAgICAqL1xuICAgICAgJ2dhcC15JzogW3tcbiAgICAgICAgJ2dhcC15JzogW2dhcF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBKdXN0aWZ5IENvbnRlbnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9qdXN0aWZ5LWNvbnRlbnRcbiAgICAgICAqL1xuICAgICAgJ2p1c3RpZnktY29udGVudCc6IFt7XG4gICAgICAgIGp1c3RpZnk6IFsnbm9ybWFsJ10uY29uY2F0KGdldEFsaWduKCkpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogSnVzdGlmeSBJdGVtc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2p1c3RpZnktaXRlbXNcbiAgICAgICAqL1xuICAgICAgJ2p1c3RpZnktaXRlbXMnOiBbe1xuICAgICAgICAnanVzdGlmeS1pdGVtcyc6IFsnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdzdHJldGNoJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBKdXN0aWZ5IFNlbGZcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9qdXN0aWZ5LXNlbGZcbiAgICAgICAqL1xuICAgICAgJ2p1c3RpZnktc2VsZic6IFt7XG4gICAgICAgICdqdXN0aWZ5LXNlbGYnOiBbJ2F1dG8nLCAnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdzdHJldGNoJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBBbGlnbiBDb250ZW50XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYWxpZ24tY29udGVudFxuICAgICAgICovXG4gICAgICAnYWxpZ24tY29udGVudCc6IFt7XG4gICAgICAgIGNvbnRlbnQ6IFsnbm9ybWFsJ10uY29uY2F0KGdldEFsaWduKCksIFsnYmFzZWxpbmUnXSlcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBBbGlnbiBJdGVtc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FsaWduLWl0ZW1zXG4gICAgICAgKi9cbiAgICAgICdhbGlnbi1pdGVtcyc6IFt7XG4gICAgICAgIGl0ZW1zOiBbJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInLCAnYmFzZWxpbmUnLCAnc3RyZXRjaCddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQWxpZ24gU2VsZlxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FsaWduLXNlbGZcbiAgICAgICAqL1xuICAgICAgJ2FsaWduLXNlbGYnOiBbe1xuICAgICAgICBzZWxmOiBbJ2F1dG8nLCAnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdzdHJldGNoJywgJ2Jhc2VsaW5lJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQbGFjZSBDb250ZW50XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGxhY2UtY29udGVudFxuICAgICAgICovXG4gICAgICAncGxhY2UtY29udGVudCc6IFt7XG4gICAgICAgICdwbGFjZS1jb250ZW50JzogW10uY29uY2F0KGdldEFsaWduKCksIFsnYmFzZWxpbmUnXSlcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQbGFjZSBJdGVtc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BsYWNlLWl0ZW1zXG4gICAgICAgKi9cbiAgICAgICdwbGFjZS1pdGVtcyc6IFt7XG4gICAgICAgICdwbGFjZS1pdGVtcyc6IFsnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdiYXNlbGluZScsICdzdHJldGNoJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQbGFjZSBTZWxmXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGxhY2Utc2VsZlxuICAgICAgICovXG4gICAgICAncGxhY2Utc2VsZic6IFt7XG4gICAgICAgICdwbGFjZS1zZWxmJzogWydhdXRvJywgJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInLCAnc3RyZXRjaCddXG4gICAgICB9XSxcbiAgICAgIC8vIFNwYWNpbmdcbiAgICAgIC8qKlxuICAgICAgICogUGFkZGluZ1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BhZGRpbmdcbiAgICAgICAqL1xuICAgICAgcDogW3tcbiAgICAgICAgcDogW3BhZGRpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUGFkZGluZyBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGFkZGluZ1xuICAgICAgICovXG4gICAgICBweDogW3tcbiAgICAgICAgcHg6IFtwYWRkaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmcgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BhZGRpbmdcbiAgICAgICAqL1xuICAgICAgcHk6IFt7XG4gICAgICAgIHB5OiBbcGFkZGluZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQYWRkaW5nIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGFkZGluZ1xuICAgICAgICovXG4gICAgICBwczogW3tcbiAgICAgICAgcHM6IFtwYWRkaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmcgRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGFkZGluZ1xuICAgICAgICovXG4gICAgICBwZTogW3tcbiAgICAgICAgcGU6IFtwYWRkaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmcgVG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGFkZGluZ1xuICAgICAgICovXG4gICAgICBwdDogW3tcbiAgICAgICAgcHQ6IFtwYWRkaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBhZGRpbmcgUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgIHByOiBbe1xuICAgICAgICBwcjogW3BhZGRpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUGFkZGluZyBCb3R0b21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgIHBiOiBbe1xuICAgICAgICBwYjogW3BhZGRpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUGFkZGluZyBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcGFkZGluZ1xuICAgICAgICovXG4gICAgICBwbDogW3tcbiAgICAgICAgcGw6IFtwYWRkaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1hcmdpblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL21hcmdpblxuICAgICAgICovXG4gICAgICBtOiBbe1xuICAgICAgICBtOiBbbWFyZ2luXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1hcmdpbiBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG14OiBbe1xuICAgICAgICBteDogW21hcmdpbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXJnaW4gWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL21hcmdpblxuICAgICAgICovXG4gICAgICBteTogW3tcbiAgICAgICAgbXk6IFttYXJnaW5dXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTWFyZ2luIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG1zOiBbe1xuICAgICAgICBtczogW21hcmdpbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXJnaW4gRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG1lOiBbe1xuICAgICAgICBtZTogW21hcmdpbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXJnaW4gVG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG10OiBbe1xuICAgICAgICBtdDogW21hcmdpbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXJnaW4gUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9tYXJnaW5cbiAgICAgICAqL1xuICAgICAgbXI6IFt7XG4gICAgICAgIG1yOiBbbWFyZ2luXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1hcmdpbiBCb3R0b21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9tYXJnaW5cbiAgICAgICAqL1xuICAgICAgbWI6IFt7XG4gICAgICAgIG1iOiBbbWFyZ2luXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1hcmdpbiBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWFyZ2luXG4gICAgICAgKi9cbiAgICAgIG1sOiBbe1xuICAgICAgICBtbDogW21hcmdpbl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTcGFjZSBCZXR3ZWVuIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zcGFjZVxuICAgICAgICovXG4gICAgICAnc3BhY2UteCc6IFt7XG4gICAgICAgICdzcGFjZS14JzogW3NwYWNlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNwYWNlIEJldHdlZW4gWCBSZXZlcnNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc3BhY2VcbiAgICAgICAqL1xuICAgICAgJ3NwYWNlLXgtcmV2ZXJzZSc6IFsnc3BhY2UteC1yZXZlcnNlJ10sXG4gICAgICAvKipcbiAgICAgICAqIFNwYWNlIEJldHdlZW4gWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NwYWNlXG4gICAgICAgKi9cbiAgICAgICdzcGFjZS15JzogW3tcbiAgICAgICAgJ3NwYWNlLXknOiBbc3BhY2VdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU3BhY2UgQmV0d2VlbiBZIFJldmVyc2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zcGFjZVxuICAgICAgICovXG4gICAgICAnc3BhY2UteS1yZXZlcnNlJzogWydzcGFjZS15LXJldmVyc2UnXSxcbiAgICAgIC8vIFNpemluZ1xuICAgICAgLyoqXG4gICAgICAgKiBXaWR0aFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3dpZHRoXG4gICAgICAgKi9cbiAgICAgIHc6IFt7XG4gICAgICAgIHc6IFsnYXV0bycsICdtaW4nLCAnbWF4JywgJ2ZpdCcsIHNwYWNpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTWluLVdpZHRoXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvbWluLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdtaW4tdyc6IFt7XG4gICAgICAgICdtaW4tdyc6IFsnbWluJywgJ21heCcsICdmaXQnLCBpc0xlbmd0aF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBNYXgtV2lkdGhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9tYXgtd2lkdGhcbiAgICAgICAqL1xuICAgICAgJ21heC13JzogW3tcbiAgICAgICAgJ21heC13JzogWycwJywgJ25vbmUnLCAnZnVsbCcsICdtaW4nLCAnbWF4JywgJ2ZpdCcsICdwcm9zZScsIHtcbiAgICAgICAgICBzY3JlZW46IFtpc1RzaGlydFNpemVdXG4gICAgICAgIH0sIGlzVHNoaXJ0U2l6ZSwgaXNBcmJpdHJhcnlMZW5ndGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogSGVpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvaGVpZ2h0XG4gICAgICAgKi9cbiAgICAgIGg6IFt7XG4gICAgICAgIGg6IFtzcGFjaW5nLCAnYXV0bycsICdtaW4nLCAnbWF4JywgJ2ZpdCddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTWluLUhlaWdodFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL21pbi1oZWlnaHRcbiAgICAgICAqL1xuICAgICAgJ21pbi1oJzogW3tcbiAgICAgICAgJ21pbi1oJzogWydtaW4nLCAnbWF4JywgJ2ZpdCcsIGlzTGVuZ3RoXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE1heC1IZWlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9tYXgtaGVpZ2h0XG4gICAgICAgKi9cbiAgICAgICdtYXgtaCc6IFt7XG4gICAgICAgICdtYXgtaCc6IFtzcGFjaW5nLCAnbWluJywgJ21heCcsICdmaXQnXVxuICAgICAgfV0sXG4gICAgICAvLyBUeXBvZ3JhcGh5XG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgU2l6ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtc2l6ZVxuICAgICAgICovXG4gICAgICAnZm9udC1zaXplJzogW3tcbiAgICAgICAgdGV4dDogWydiYXNlJywgaXNUc2hpcnRTaXplLCBpc0FyYml0cmFyeUxlbmd0aF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBGb250IFNtb290aGluZ1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtc21vb3RoaW5nXG4gICAgICAgKi9cbiAgICAgICdmb250LXNtb290aGluZyc6IFsnYW50aWFsaWFzZWQnLCAnc3VicGl4ZWwtYW50aWFsaWFzZWQnXSxcbiAgICAgIC8qKlxuICAgICAgICogRm9udCBTdHlsZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtc3R5bGVcbiAgICAgICAqL1xuICAgICAgJ2ZvbnQtc3R5bGUnOiBbJ2l0YWxpYycsICdub3QtaXRhbGljJ10sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgV2VpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC13ZWlnaHRcbiAgICAgICAqL1xuICAgICAgJ2ZvbnQtd2VpZ2h0JzogW3tcbiAgICAgICAgZm9udDogWyd0aGluJywgJ2V4dHJhbGlnaHQnLCAnbGlnaHQnLCAnbm9ybWFsJywgJ21lZGl1bScsICdzZW1pYm9sZCcsICdib2xkJywgJ2V4dHJhYm9sZCcsICdibGFjaycsIGlzQXJiaXRyYXJ5TnVtYmVyXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgRmFtaWx5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC1mYW1pbHlcbiAgICAgICAqL1xuICAgICAgJ2ZvbnQtZmFtaWx5JzogW3tcbiAgICAgICAgZm9udDogW2lzQW55XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgVmFyaWFudCBOdW1lcmljXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC12YXJpYW50LW51bWVyaWNcbiAgICAgICAqL1xuICAgICAgJ2Z2bi1ub3JtYWwnOiBbJ25vcm1hbC1udW1zJ10sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgVmFyaWFudCBOdW1lcmljXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC12YXJpYW50LW51bWVyaWNcbiAgICAgICAqL1xuICAgICAgJ2Z2bi1vcmRpbmFsJzogWydvcmRpbmFsJ10sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgVmFyaWFudCBOdW1lcmljXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC12YXJpYW50LW51bWVyaWNcbiAgICAgICAqL1xuICAgICAgJ2Z2bi1zbGFzaGVkLXplcm8nOiBbJ3NsYXNoZWQtemVybyddLFxuICAgICAgLyoqXG4gICAgICAgKiBGb250IFZhcmlhbnQgTnVtZXJpY1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2ZvbnQtdmFyaWFudC1udW1lcmljXG4gICAgICAgKi9cbiAgICAgICdmdm4tZmlndXJlJzogWydsaW5pbmctbnVtcycsICdvbGRzdHlsZS1udW1zJ10sXG4gICAgICAvKipcbiAgICAgICAqIEZvbnQgVmFyaWFudCBOdW1lcmljXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZm9udC12YXJpYW50LW51bWVyaWNcbiAgICAgICAqL1xuICAgICAgJ2Z2bi1zcGFjaW5nJzogWydwcm9wb3J0aW9uYWwtbnVtcycsICd0YWJ1bGFyLW51bXMnXSxcbiAgICAgIC8qKlxuICAgICAgICogRm9udCBWYXJpYW50IE51bWVyaWNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9mb250LXZhcmlhbnQtbnVtZXJpY1xuICAgICAgICovXG4gICAgICAnZnZuLWZyYWN0aW9uJzogWydkaWFnb25hbC1mcmFjdGlvbnMnLCAnc3RhY2tlZC1mcmFjdG9ucyddLFxuICAgICAgLyoqXG4gICAgICAgKiBMZXR0ZXIgU3BhY2luZ1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2xldHRlci1zcGFjaW5nXG4gICAgICAgKi9cbiAgICAgIHRyYWNraW5nOiBbe1xuICAgICAgICB0cmFja2luZzogWyd0aWdodGVyJywgJ3RpZ2h0JywgJ25vcm1hbCcsICd3aWRlJywgJ3dpZGVyJywgJ3dpZGVzdCcsIGlzQXJiaXRyYXJ5TGVuZ3RoXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExpbmUgQ2xhbXBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9saW5lLWNsYW1wXG4gICAgICAgKi9cbiAgICAgICdsaW5lLWNsYW1wJzogW3tcbiAgICAgICAgJ2xpbmUtY2xhbXAnOiBbJ25vbmUnLCBpc051bWJlciwgaXNBcmJpdHJhcnlOdW1iZXJdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTGluZSBIZWlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9saW5lLWhlaWdodFxuICAgICAgICovXG4gICAgICBsZWFkaW5nOiBbe1xuICAgICAgICBsZWFkaW5nOiBbJ25vbmUnLCAndGlnaHQnLCAnc251ZycsICdub3JtYWwnLCAncmVsYXhlZCcsICdsb29zZScsIGlzTGVuZ3RoXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExpc3QgU3R5bGUgSW1hZ2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9saXN0LXN0eWxlLWltYWdlXG4gICAgICAgKi9cbiAgICAgICdsaXN0LWltYWdlJzogW3tcbiAgICAgICAgJ2xpc3QtaW1hZ2UnOiBbJ25vbmUnLCBpc0FyYml0cmFyeVZhbHVlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIExpc3QgU3R5bGUgVHlwZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2xpc3Qtc3R5bGUtdHlwZVxuICAgICAgICovXG4gICAgICAnbGlzdC1zdHlsZS10eXBlJzogW3tcbiAgICAgICAgbGlzdDogWydub25lJywgJ2Rpc2MnLCAnZGVjaW1hbCcsIGlzQXJiaXRyYXJ5VmFsdWVdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTGlzdCBTdHlsZSBQb3NpdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2xpc3Qtc3R5bGUtcG9zaXRpb25cbiAgICAgICAqL1xuICAgICAgJ2xpc3Qtc3R5bGUtcG9zaXRpb24nOiBbe1xuICAgICAgICBsaXN0OiBbJ2luc2lkZScsICdvdXRzaWRlJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBQbGFjZWhvbGRlciBDb2xvclxuICAgICAgICogQGRlcHJlY2F0ZWQgc2luY2UgVGFpbHdpbmQgQ1NTIHYzLjAuMFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3BsYWNlaG9sZGVyLWNvbG9yXG4gICAgICAgKi9cbiAgICAgICdwbGFjZWhvbGRlci1jb2xvcic6IFt7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBbY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFBsYWNlaG9sZGVyIE9wYWNpdHlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wbGFjZWhvbGRlci1vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgICdwbGFjZWhvbGRlci1vcGFjaXR5JzogW3tcbiAgICAgICAgJ3BsYWNlaG9sZGVyLW9wYWNpdHknOiBbb3BhY2l0eV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IEFsaWdubWVudFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtYWxpZ25cbiAgICAgICAqL1xuICAgICAgJ3RleHQtYWxpZ25tZW50JzogW3tcbiAgICAgICAgdGV4dDogWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5JywgJ3N0YXJ0JywgJ2VuZCddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVGV4dCBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtY29sb3JcbiAgICAgICAqL1xuICAgICAgJ3RleHQtY29sb3InOiBbe1xuICAgICAgICB0ZXh0OiBbY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgT3BhY2l0eVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtb3BhY2l0eVxuICAgICAgICovXG4gICAgICAndGV4dC1vcGFjaXR5JzogW3tcbiAgICAgICAgJ3RleHQtb3BhY2l0eSc6IFtvcGFjaXR5XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgRGVjb3JhdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtZGVjb3JhdGlvblxuICAgICAgICovXG4gICAgICAndGV4dC1kZWNvcmF0aW9uJzogWyd1bmRlcmxpbmUnLCAnb3ZlcmxpbmUnLCAnbGluZS10aHJvdWdoJywgJ25vLXVuZGVybGluZSddLFxuICAgICAgLyoqXG4gICAgICAgKiBUZXh0IERlY29yYXRpb24gU3R5bGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90ZXh0LWRlY29yYXRpb24tc3R5bGVcbiAgICAgICAqL1xuICAgICAgJ3RleHQtZGVjb3JhdGlvbi1zdHlsZSc6IFt7XG4gICAgICAgIGRlY29yYXRpb246IFtdLmNvbmNhdChnZXRMaW5lU3R5bGVzKCksIFsnd2F2eSddKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgRGVjb3JhdGlvbiBUaGlja25lc3NcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzXG4gICAgICAgKi9cbiAgICAgICd0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzJzogW3tcbiAgICAgICAgZGVjb3JhdGlvbjogWydhdXRvJywgJ2Zyb20tZm9udCcsIGlzTGVuZ3RoXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgVW5kZXJsaW5lIE9mZnNldFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtdW5kZXJsaW5lLW9mZnNldFxuICAgICAgICovXG4gICAgICAndW5kZXJsaW5lLW9mZnNldCc6IFt7XG4gICAgICAgICd1bmRlcmxpbmUtb2Zmc2V0JzogWydhdXRvJywgaXNMZW5ndGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVGV4dCBEZWNvcmF0aW9uIENvbG9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC1kZWNvcmF0aW9uLWNvbG9yXG4gICAgICAgKi9cbiAgICAgICd0ZXh0LWRlY29yYXRpb24tY29sb3InOiBbe1xuICAgICAgICBkZWNvcmF0aW9uOiBbY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgVHJhbnNmb3JtXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC10cmFuc2Zvcm1cbiAgICAgICAqL1xuICAgICAgJ3RleHQtdHJhbnNmb3JtJzogWyd1cHBlcmNhc2UnLCAnbG93ZXJjYXNlJywgJ2NhcGl0YWxpemUnLCAnbm9ybWFsLWNhc2UnXSxcbiAgICAgIC8qKlxuICAgICAgICogVGV4dCBPdmVyZmxvd1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RleHQtb3ZlcmZsb3dcbiAgICAgICAqL1xuICAgICAgJ3RleHQtb3ZlcmZsb3cnOiBbJ3RydW5jYXRlJywgJ3RleHQtZWxsaXBzaXMnLCAndGV4dC1jbGlwJ10sXG4gICAgICAvKipcbiAgICAgICAqIFRleHQgSW5kZW50XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdGV4dC1pbmRlbnRcbiAgICAgICAqL1xuICAgICAgaW5kZW50OiBbe1xuICAgICAgICBpbmRlbnQ6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFZlcnRpY2FsIEFsaWdubWVudFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3ZlcnRpY2FsLWFsaWduXG4gICAgICAgKi9cbiAgICAgICd2ZXJ0aWNhbC1hbGlnbic6IFt7XG4gICAgICAgIGFsaWduOiBbJ2Jhc2VsaW5lJywgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJywgJ3RleHQtdG9wJywgJ3RleHQtYm90dG9tJywgJ3N1YicsICdzdXBlcicsIGlzQXJiaXRyYXJ5TGVuZ3RoXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFdoaXRlc3BhY2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy93aGl0ZXNwYWNlXG4gICAgICAgKi9cbiAgICAgIHdoaXRlc3BhY2U6IFt7XG4gICAgICAgIHdoaXRlc3BhY2U6IFsnbm9ybWFsJywgJ25vd3JhcCcsICdwcmUnLCAncHJlLWxpbmUnLCAncHJlLXdyYXAnLCAnYnJlYWstc3BhY2VzJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBXb3JkIEJyZWFrXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvd29yZC1icmVha1xuICAgICAgICovXG4gICAgICBcImJyZWFrXCI6IFt7XG4gICAgICAgIFwiYnJlYWtcIjogWydub3JtYWwnLCAnd29yZHMnLCAnYWxsJywgJ2tlZXAnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEh5cGhlbnNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9oeXBoZW5zXG4gICAgICAgKi9cbiAgICAgIGh5cGhlbnM6IFt7XG4gICAgICAgIGh5cGhlbnM6IFsnbm9uZScsICdtYW51YWwnLCAnYXV0byddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQ29udGVudFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2NvbnRlbnRcbiAgICAgICAqL1xuICAgICAgY29udGVudDogW3tcbiAgICAgICAgY29udGVudDogWydub25lJywgaXNBcmJpdHJhcnlWYWx1ZV1cbiAgICAgIH1dLFxuICAgICAgLy8gQmFja2dyb3VuZHNcbiAgICAgIC8qKlxuICAgICAgICogQmFja2dyb3VuZCBBdHRhY2htZW50XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2dyb3VuZC1hdHRhY2htZW50XG4gICAgICAgKi9cbiAgICAgICdiZy1hdHRhY2htZW50JzogW3tcbiAgICAgICAgYmc6IFsnZml4ZWQnLCAnbG9jYWwnLCAnc2Nyb2xsJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZ3JvdW5kIENsaXBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLWNsaXBcbiAgICAgICAqL1xuICAgICAgJ2JnLWNsaXAnOiBbe1xuICAgICAgICAnYmctY2xpcCc6IFsnYm9yZGVyJywgJ3BhZGRpbmcnLCAnY29udGVudCcsICd0ZXh0J11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZ3JvdW5kIE9wYWNpdHlcbiAgICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIFRhaWx3aW5kIENTUyB2My4wLjBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLW9wYWNpdHlcbiAgICAgICAqL1xuICAgICAgJ2JnLW9wYWNpdHknOiBbe1xuICAgICAgICAnYmctb3BhY2l0eSc6IFtvcGFjaXR5XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgT3JpZ2luXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2dyb3VuZC1vcmlnaW5cbiAgICAgICAqL1xuICAgICAgJ2JnLW9yaWdpbic6IFt7XG4gICAgICAgICdiZy1vcmlnaW4nOiBbJ2JvcmRlcicsICdwYWRkaW5nJywgJ2NvbnRlbnQnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgUG9zaXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLXBvc2l0aW9uXG4gICAgICAgKi9cbiAgICAgICdiZy1wb3NpdGlvbic6IFt7XG4gICAgICAgIGJnOiBbXS5jb25jYXQoZ2V0UG9zaXRpb25zKCksIFtpc0FyYml0cmFyeVBvc2l0aW9uXSlcbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZ3JvdW5kIFJlcGVhdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tncm91bmQtcmVwZWF0XG4gICAgICAgKi9cbiAgICAgICdiZy1yZXBlYXQnOiBbe1xuICAgICAgICBiZzogWyduby1yZXBlYXQnLCB7XG4gICAgICAgICAgcmVwZWF0OiBbJycsICd4JywgJ3knLCAncm91bmQnLCAnc3BhY2UnXVxuICAgICAgICB9XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgU2l6ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tncm91bmQtc2l6ZVxuICAgICAgICovXG4gICAgICAnYmctc2l6ZSc6IFt7XG4gICAgICAgIGJnOiBbJ2F1dG8nLCAnY292ZXInLCAnY29udGFpbicsIGlzQXJiaXRyYXJ5U2l6ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZ3JvdW5kIEltYWdlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2dyb3VuZC1pbWFnZVxuICAgICAgICovXG4gICAgICAnYmctaW1hZ2UnOiBbe1xuICAgICAgICBiZzogWydub25lJywge1xuICAgICAgICAgICdncmFkaWVudC10byc6IFsndCcsICd0cicsICdyJywgJ2JyJywgJ2InLCAnYmwnLCAnbCcsICd0bCddXG4gICAgICAgIH0sIGlzQXJiaXRyYXJ5VXJsXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgQ29sb3JcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZ3JvdW5kLWNvbG9yXG4gICAgICAgKi9cbiAgICAgICdiZy1jb2xvcic6IFt7XG4gICAgICAgIGJnOiBbY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyYWRpZW50IENvbG9yIFN0b3BzIEZyb20gUG9zaXRpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmFkaWVudC1jb2xvci1zdG9wc1xuICAgICAgICovXG4gICAgICAnZ3JhZGllbnQtZnJvbS1wb3MnOiBbe1xuICAgICAgICBmcm9tOiBbZ3JhZGllbnRDb2xvclN0b3BQb3NpdGlvbnNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JhZGllbnQgQ29sb3IgU3RvcHMgVmlhIFBvc2l0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JhZGllbnQtY29sb3Itc3RvcHNcbiAgICAgICAqL1xuICAgICAgJ2dyYWRpZW50LXZpYS1wb3MnOiBbe1xuICAgICAgICB2aWE6IFtncmFkaWVudENvbG9yU3RvcFBvc2l0aW9uc11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmFkaWVudCBDb2xvciBTdG9wcyBUbyBQb3NpdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyYWRpZW50LWNvbG9yLXN0b3BzXG4gICAgICAgKi9cbiAgICAgICdncmFkaWVudC10by1wb3MnOiBbe1xuICAgICAgICB0bzogW2dyYWRpZW50Q29sb3JTdG9wUG9zaXRpb25zXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyYWRpZW50IENvbG9yIFN0b3BzIEZyb21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ncmFkaWVudC1jb2xvci1zdG9wc1xuICAgICAgICovXG4gICAgICAnZ3JhZGllbnQtZnJvbSc6IFt7XG4gICAgICAgIGZyb206IFtncmFkaWVudENvbG9yU3RvcHNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogR3JhZGllbnQgQ29sb3IgU3RvcHMgVmlhXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZ3JhZGllbnQtY29sb3Itc3RvcHNcbiAgICAgICAqL1xuICAgICAgJ2dyYWRpZW50LXZpYSc6IFt7XG4gICAgICAgIHZpYTogW2dyYWRpZW50Q29sb3JTdG9wc11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBHcmFkaWVudCBDb2xvciBTdG9wcyBUb1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyYWRpZW50LWNvbG9yLXN0b3BzXG4gICAgICAgKi9cbiAgICAgICdncmFkaWVudC10byc6IFt7XG4gICAgICAgIHRvOiBbZ3JhZGllbnRDb2xvclN0b3BzXVxuICAgICAgfV0sXG4gICAgICAvLyBCb3JkZXJzXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBSYWRpdXNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgIHJvdW5kZWQ6IFt7XG4gICAgICAgIHJvdW5kZWQ6IFtib3JkZXJSYWRpdXNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgJ3JvdW5kZWQtcyc6IFt7XG4gICAgICAgICdyb3VuZGVkLXMnOiBbYm9yZGVyUmFkaXVzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBSYWRpdXMgRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICAncm91bmRlZC1lJzogW3tcbiAgICAgICAgJ3JvdW5kZWQtZSc6IFtib3JkZXJSYWRpdXNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBUb3BcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgICdyb3VuZGVkLXQnOiBbe1xuICAgICAgICAncm91bmRlZC10JzogW2JvcmRlclJhZGl1c11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIFJpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICAncm91bmRlZC1yJzogW3tcbiAgICAgICAgJ3JvdW5kZWQtcic6IFtib3JkZXJSYWRpdXNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBCb3R0b21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgICdyb3VuZGVkLWInOiBbe1xuICAgICAgICAncm91bmRlZC1iJzogW2JvcmRlclJhZGl1c11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIExlZnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgICdyb3VuZGVkLWwnOiBbe1xuICAgICAgICAncm91bmRlZC1sJzogW2JvcmRlclJhZGl1c11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIFN0YXJ0IFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICAncm91bmRlZC1zcyc6IFt7XG4gICAgICAgICdyb3VuZGVkLXNzJzogW2JvcmRlclJhZGl1c11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIFN0YXJ0IEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgJ3JvdW5kZWQtc2UnOiBbe1xuICAgICAgICAncm91bmRlZC1zZSc6IFtib3JkZXJSYWRpdXNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBFbmQgRW5kXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICAncm91bmRlZC1lZSc6IFt7XG4gICAgICAgICdyb3VuZGVkLWVlJzogW2JvcmRlclJhZGl1c11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIEVuZCBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgJ3JvdW5kZWQtZXMnOiBbe1xuICAgICAgICAncm91bmRlZC1lcyc6IFtib3JkZXJSYWRpdXNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBUb3AgTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1yYWRpdXNcbiAgICAgICAqL1xuICAgICAgJ3JvdW5kZWQtdGwnOiBbe1xuICAgICAgICAncm91bmRlZC10bCc6IFtib3JkZXJSYWRpdXNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFJhZGl1cyBUb3AgUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItcmFkaXVzXG4gICAgICAgKi9cbiAgICAgICdyb3VuZGVkLXRyJzogW3tcbiAgICAgICAgJ3JvdW5kZWQtdHInOiBbYm9yZGVyUmFkaXVzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBSYWRpdXMgQm90dG9tIFJpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICAncm91bmRlZC1icic6IFt7XG4gICAgICAgICdyb3VuZGVkLWJyJzogW2JvcmRlclJhZGl1c11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgUmFkaXVzIEJvdHRvbSBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXJhZGl1c1xuICAgICAgICovXG4gICAgICAncm91bmRlZC1ibCc6IFt7XG4gICAgICAgICdyb3VuZGVkLWJsJzogW2JvcmRlclJhZGl1c11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgV2lkdGhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci13JzogW3tcbiAgICAgICAgYm9yZGVyOiBbYm9yZGVyV2lkdGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci13LXgnOiBbe1xuICAgICAgICAnYm9yZGVyLXgnOiBbYm9yZGVyV2lkdGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci13LXknOiBbe1xuICAgICAgICAnYm9yZGVyLXknOiBbYm9yZGVyV2lkdGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdib3JkZXItdy1zJzogW3tcbiAgICAgICAgJ2JvcmRlci1zJzogW2JvcmRlcldpZHRoXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBXaWR0aCBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci13LWUnOiBbe1xuICAgICAgICAnYm9yZGVyLWUnOiBbYm9yZGVyV2lkdGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIFRvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci13aWR0aFxuICAgICAgICovXG4gICAgICAnYm9yZGVyLXctdCc6IFt7XG4gICAgICAgICdib3JkZXItdCc6IFtib3JkZXJXaWR0aF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgV2lkdGggUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItd2lkdGhcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci13LXInOiBbe1xuICAgICAgICAnYm9yZGVyLXInOiBbYm9yZGVyV2lkdGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFdpZHRoIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci13aWR0aFxuICAgICAgICovXG4gICAgICAnYm9yZGVyLXctYic6IFt7XG4gICAgICAgICdib3JkZXItYic6IFtib3JkZXJXaWR0aF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgV2lkdGggTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci13aWR0aFxuICAgICAgICovXG4gICAgICAnYm9yZGVyLXctbCc6IFt7XG4gICAgICAgICdib3JkZXItbCc6IFtib3JkZXJXaWR0aF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgT3BhY2l0eVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgICdib3JkZXItb3BhY2l0eSc6IFt7XG4gICAgICAgICdib3JkZXItb3BhY2l0eSc6IFtvcGFjaXR5XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBTdHlsZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1zdHlsZVxuICAgICAgICovXG4gICAgICAnYm9yZGVyLXN0eWxlJzogW3tcbiAgICAgICAgYm9yZGVyOiBbXS5jb25jYXQoZ2V0TGluZVN0eWxlcygpLCBbJ2hpZGRlbiddKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIERpdmlkZSBXaWR0aCBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdkaXZpZGUteCc6IFt7XG4gICAgICAgICdkaXZpZGUteCc6IFtib3JkZXJXaWR0aF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBEaXZpZGUgV2lkdGggWCBSZXZlcnNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdkaXZpZGUteC1yZXZlcnNlJzogWydkaXZpZGUteC1yZXZlcnNlJ10sXG4gICAgICAvKipcbiAgICAgICAqIERpdmlkZSBXaWR0aCBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdkaXZpZGUteSc6IFt7XG4gICAgICAgICdkaXZpZGUteSc6IFtib3JkZXJXaWR0aF1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBEaXZpZGUgV2lkdGggWSBSZXZlcnNlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdkaXZpZGUteS1yZXZlcnNlJzogWydkaXZpZGUteS1yZXZlcnNlJ10sXG4gICAgICAvKipcbiAgICAgICAqIERpdmlkZSBPcGFjaXR5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLW9wYWNpdHlcbiAgICAgICAqL1xuICAgICAgJ2RpdmlkZS1vcGFjaXR5JzogW3tcbiAgICAgICAgJ2RpdmlkZS1vcGFjaXR5JzogW29wYWNpdHldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRGl2aWRlIFN0eWxlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZGl2aWRlLXN0eWxlXG4gICAgICAgKi9cbiAgICAgICdkaXZpZGUtc3R5bGUnOiBbe1xuICAgICAgICBkaXZpZGU6IGdldExpbmVTdHlsZXMoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1jb2xvclxuICAgICAgICovXG4gICAgICAnYm9yZGVyLWNvbG9yJzogW3tcbiAgICAgICAgYm9yZGVyOiBbYm9yZGVyQ29sb3JdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIENvbG9yIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci1jb2xvci14JzogW3tcbiAgICAgICAgJ2JvcmRlci14JzogW2JvcmRlckNvbG9yXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xvciBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLWNvbG9yXG4gICAgICAgKi9cbiAgICAgICdib3JkZXItY29sb3IteSc6IFt7XG4gICAgICAgICdib3JkZXIteSc6IFtib3JkZXJDb2xvcl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgQ29sb3IgVG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLWNvbG9yXG4gICAgICAgKi9cbiAgICAgICdib3JkZXItY29sb3ItdCc6IFt7XG4gICAgICAgICdib3JkZXItdCc6IFtib3JkZXJDb2xvcl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgQ29sb3IgUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci1jb2xvci1yJzogW3tcbiAgICAgICAgJ2JvcmRlci1yJzogW2JvcmRlckNvbG9yXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xvciBCb3R0b21cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItY29sb3JcbiAgICAgICAqL1xuICAgICAgJ2JvcmRlci1jb2xvci1iJzogW3tcbiAgICAgICAgJ2JvcmRlci1iJzogW2JvcmRlckNvbG9yXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xvciBMZWZ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm9yZGVyLWNvbG9yXG4gICAgICAgKi9cbiAgICAgICdib3JkZXItY29sb3ItbCc6IFt7XG4gICAgICAgICdib3JkZXItbCc6IFtib3JkZXJDb2xvcl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBEaXZpZGUgQ29sb3JcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9kaXZpZGUtY29sb3JcbiAgICAgICAqL1xuICAgICAgJ2RpdmlkZS1jb2xvcic6IFt7XG4gICAgICAgIGRpdmlkZTogW2JvcmRlckNvbG9yXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE91dGxpbmUgU3R5bGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vdXRsaW5lLXN0eWxlXG4gICAgICAgKi9cbiAgICAgICdvdXRsaW5lLXN0eWxlJzogW3tcbiAgICAgICAgb3V0bGluZTogWycnXS5jb25jYXQoZ2V0TGluZVN0eWxlcygpKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE91dGxpbmUgT2Zmc2V0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvb3V0bGluZS1vZmZzZXRcbiAgICAgICAqL1xuICAgICAgJ291dGxpbmUtb2Zmc2V0JzogW3tcbiAgICAgICAgJ291dGxpbmUtb2Zmc2V0JzogW2lzTGVuZ3RoXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIE91dGxpbmUgV2lkdGhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9vdXRsaW5lLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdvdXRsaW5lLXcnOiBbe1xuICAgICAgICBvdXRsaW5lOiBbaXNMZW5ndGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogT3V0bGluZSBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL291dGxpbmUtY29sb3JcbiAgICAgICAqL1xuICAgICAgJ291dGxpbmUtY29sb3InOiBbe1xuICAgICAgICBvdXRsaW5lOiBbY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJpbmcgV2lkdGhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9yaW5nLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdyaW5nLXcnOiBbe1xuICAgICAgICByaW5nOiBnZXRMZW5ndGhXaXRoRW1wdHkoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJpbmcgV2lkdGggSW5zZXRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9yaW5nLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdyaW5nLXctaW5zZXQnOiBbJ3JpbmctaW5zZXQnXSxcbiAgICAgIC8qKlxuICAgICAgICogUmluZyBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3JpbmctY29sb3JcbiAgICAgICAqL1xuICAgICAgJ3JpbmctY29sb3InOiBbe1xuICAgICAgICByaW5nOiBbY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJpbmcgT3BhY2l0eVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Jpbmctb3BhY2l0eVxuICAgICAgICovXG4gICAgICAncmluZy1vcGFjaXR5JzogW3tcbiAgICAgICAgJ3Jpbmctb3BhY2l0eSc6IFtvcGFjaXR5XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJpbmcgT2Zmc2V0IFdpZHRoXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmluZy1vZmZzZXQtd2lkdGhcbiAgICAgICAqL1xuICAgICAgJ3Jpbmctb2Zmc2V0LXcnOiBbe1xuICAgICAgICAncmluZy1vZmZzZXQnOiBbaXNMZW5ndGhdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUmluZyBPZmZzZXQgQ29sb3JcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9yaW5nLW9mZnNldC1jb2xvclxuICAgICAgICovXG4gICAgICAncmluZy1vZmZzZXQtY29sb3InOiBbe1xuICAgICAgICAncmluZy1vZmZzZXQnOiBbY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvLyBFZmZlY3RzXG4gICAgICAvKipcbiAgICAgICAqIEJveCBTaGFkb3dcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3gtc2hhZG93XG4gICAgICAgKi9cbiAgICAgIHNoYWRvdzogW3tcbiAgICAgICAgc2hhZG93OiBbJycsICdpbm5lcicsICdub25lJywgaXNUc2hpcnRTaXplLCBpc0FyYml0cmFyeVNoYWRvd11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3ggU2hhZG93IENvbG9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYm94LXNoYWRvdy1jb2xvclxuICAgICAgICovXG4gICAgICAnc2hhZG93LWNvbG9yJzogW3tcbiAgICAgICAgc2hhZG93OiBbaXNBbnldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogT3BhY2l0eVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL29wYWNpdHlcbiAgICAgICAqL1xuICAgICAgb3BhY2l0eTogW3tcbiAgICAgICAgb3BhY2l0eTogW29wYWNpdHldXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogTWl4IEJsZW5kIE1vZGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9taXgtYmxlbmQtbW9kZVxuICAgICAgICovXG4gICAgICAnbWl4LWJsZW5kJzogW3tcbiAgICAgICAgJ21peC1ibGVuZCc6IGdldEJsZW5kTW9kZXMoKVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tncm91bmQgQmxlbmQgTW9kZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tncm91bmQtYmxlbmQtbW9kZVxuICAgICAgICovXG4gICAgICAnYmctYmxlbmQnOiBbe1xuICAgICAgICAnYmctYmxlbmQnOiBnZXRCbGVuZE1vZGVzKClcbiAgICAgIH1dLFxuICAgICAgLy8gRmlsdGVyc1xuICAgICAgLyoqXG4gICAgICAgKiBGaWx0ZXJcbiAgICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIFRhaWx3aW5kIENTUyB2My4wLjBcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9maWx0ZXJcbiAgICAgICAqL1xuICAgICAgZmlsdGVyOiBbe1xuICAgICAgICBmaWx0ZXI6IFsnJywgJ25vbmUnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJsdXJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ibHVyXG4gICAgICAgKi9cbiAgICAgIGJsdXI6IFt7XG4gICAgICAgIGJsdXI6IFtibHVyXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJyaWdodG5lc3NcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9icmlnaHRuZXNzXG4gICAgICAgKi9cbiAgICAgIGJyaWdodG5lc3M6IFt7XG4gICAgICAgIGJyaWdodG5lc3M6IFticmlnaHRuZXNzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIENvbnRyYXN0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvY29udHJhc3RcbiAgICAgICAqL1xuICAgICAgY29udHJhc3Q6IFt7XG4gICAgICAgIGNvbnRyYXN0OiBbY29udHJhc3RdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogRHJvcCBTaGFkb3dcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9kcm9wLXNoYWRvd1xuICAgICAgICovXG4gICAgICAnZHJvcC1zaGFkb3cnOiBbe1xuICAgICAgICAnZHJvcC1zaGFkb3cnOiBbJycsICdub25lJywgaXNUc2hpcnRTaXplLCBpc0FyYml0cmFyeVZhbHVlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEdyYXlzY2FsZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2dyYXlzY2FsZVxuICAgICAgICovXG4gICAgICBncmF5c2NhbGU6IFt7XG4gICAgICAgIGdyYXlzY2FsZTogW2dyYXlzY2FsZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBIdWUgUm90YXRlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvaHVlLXJvdGF0ZVxuICAgICAgICovXG4gICAgICAnaHVlLXJvdGF0ZSc6IFt7XG4gICAgICAgICdodWUtcm90YXRlJzogW2h1ZVJvdGF0ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBJbnZlcnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9pbnZlcnRcbiAgICAgICAqL1xuICAgICAgaW52ZXJ0OiBbe1xuICAgICAgICBpbnZlcnQ6IFtpbnZlcnRdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2F0dXJhdGVcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zYXR1cmF0ZVxuICAgICAgICovXG4gICAgICBzYXR1cmF0ZTogW3tcbiAgICAgICAgc2F0dXJhdGU6IFtzYXR1cmF0ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTZXBpYVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NlcGlhXG4gICAgICAgKi9cbiAgICAgIHNlcGlhOiBbe1xuICAgICAgICBzZXBpYTogW3NlcGlhXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIEZpbHRlclxuICAgICAgICogQGRlcHJlY2F0ZWQgc2luY2UgVGFpbHdpbmQgQ1NTIHYzLjAuMFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tkcm9wLWZpbHRlclxuICAgICAgICovXG4gICAgICAnYmFja2Ryb3AtZmlsdGVyJzogW3tcbiAgICAgICAgJ2JhY2tkcm9wLWZpbHRlcic6IFsnJywgJ25vbmUnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIEJsdXJcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZHJvcC1ibHVyXG4gICAgICAgKi9cbiAgICAgICdiYWNrZHJvcC1ibHVyJzogW3tcbiAgICAgICAgJ2JhY2tkcm9wLWJsdXInOiBbYmx1cl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBCcmlnaHRuZXNzXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3AtYnJpZ2h0bmVzc1xuICAgICAgICovXG4gICAgICAnYmFja2Ryb3AtYnJpZ2h0bmVzcyc6IFt7XG4gICAgICAgICdiYWNrZHJvcC1icmlnaHRuZXNzJzogW2JyaWdodG5lc3NdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQmFja2Ryb3AgQ29udHJhc3RcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZHJvcC1jb250cmFzdFxuICAgICAgICovXG4gICAgICAnYmFja2Ryb3AtY29udHJhc3QnOiBbe1xuICAgICAgICAnYmFja2Ryb3AtY29udHJhc3QnOiBbY29udHJhc3RdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQmFja2Ryb3AgR3JheXNjYWxlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3AtZ3JheXNjYWxlXG4gICAgICAgKi9cbiAgICAgICdiYWNrZHJvcC1ncmF5c2NhbGUnOiBbe1xuICAgICAgICAnYmFja2Ryb3AtZ3JheXNjYWxlJzogW2dyYXlzY2FsZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBIdWUgUm90YXRlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYmFja2Ryb3AtaHVlLXJvdGF0ZVxuICAgICAgICovXG4gICAgICAnYmFja2Ryb3AtaHVlLXJvdGF0ZSc6IFt7XG4gICAgICAgICdiYWNrZHJvcC1odWUtcm90YXRlJzogW2h1ZVJvdGF0ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBJbnZlcnRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZHJvcC1pbnZlcnRcbiAgICAgICAqL1xuICAgICAgJ2JhY2tkcm9wLWludmVydCc6IFt7XG4gICAgICAgICdiYWNrZHJvcC1pbnZlcnQnOiBbaW52ZXJ0XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJhY2tkcm9wIE9wYWNpdHlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9iYWNrZHJvcC1vcGFjaXR5XG4gICAgICAgKi9cbiAgICAgICdiYWNrZHJvcC1vcGFjaXR5JzogW3tcbiAgICAgICAgJ2JhY2tkcm9wLW9wYWNpdHknOiBbb3BhY2l0eV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBTYXR1cmF0ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tkcm9wLXNhdHVyYXRlXG4gICAgICAgKi9cbiAgICAgICdiYWNrZHJvcC1zYXR1cmF0ZSc6IFt7XG4gICAgICAgICdiYWNrZHJvcC1zYXR1cmF0ZSc6IFtzYXR1cmF0ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCYWNrZHJvcCBTZXBpYVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JhY2tkcm9wLXNlcGlhXG4gICAgICAgKi9cbiAgICAgICdiYWNrZHJvcC1zZXBpYSc6IFt7XG4gICAgICAgICdiYWNrZHJvcC1zZXBpYSc6IFtzZXBpYV1cbiAgICAgIH1dLFxuICAgICAgLy8gVGFibGVzXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBDb2xsYXBzZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1jb2xsYXBzZVxuICAgICAgICovXG4gICAgICAnYm9yZGVyLWNvbGxhcHNlJzogW3tcbiAgICAgICAgYm9yZGVyOiBbJ2NvbGxhcHNlJywgJ3NlcGFyYXRlJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBCb3JkZXIgU3BhY2luZ1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1zcGFjaW5nXG4gICAgICAgKi9cbiAgICAgICdib3JkZXItc3BhY2luZyc6IFt7XG4gICAgICAgICdib3JkZXItc3BhY2luZyc6IFtib3JkZXJTcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEJvcmRlciBTcGFjaW5nIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9ib3JkZXItc3BhY2luZ1xuICAgICAgICovXG4gICAgICAnYm9yZGVyLXNwYWNpbmcteCc6IFt7XG4gICAgICAgICdib3JkZXItc3BhY2luZy14JzogW2JvcmRlclNwYWNpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQm9yZGVyIFNwYWNpbmcgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2JvcmRlci1zcGFjaW5nXG4gICAgICAgKi9cbiAgICAgICdib3JkZXItc3BhY2luZy15JzogW3tcbiAgICAgICAgJ2JvcmRlci1zcGFjaW5nLXknOiBbYm9yZGVyU3BhY2luZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUYWJsZSBMYXlvdXRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90YWJsZS1sYXlvdXRcbiAgICAgICAqL1xuICAgICAgJ3RhYmxlLWxheW91dCc6IFt7XG4gICAgICAgIHRhYmxlOiBbJ2F1dG8nLCAnZml4ZWQnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIENhcHRpb24gU2lkZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2NhcHRpb24tc2lkZVxuICAgICAgICovXG4gICAgICBjYXB0aW9uOiBbe1xuICAgICAgICBjYXB0aW9uOiBbJ3RvcCcsICdib3R0b20nXVxuICAgICAgfV0sXG4gICAgICAvLyBUcmFuc2l0aW9ucyBhbmQgQW5pbWF0aW9uXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5pc2l0aW9uIFByb3BlcnR5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNpdGlvbi1wcm9wZXJ0eVxuICAgICAgICovXG4gICAgICB0cmFuc2l0aW9uOiBbe1xuICAgICAgICB0cmFuc2l0aW9uOiBbJ25vbmUnLCAnYWxsJywgJycsICdjb2xvcnMnLCAnb3BhY2l0eScsICdzaGFkb3cnLCAndHJhbnNmb3JtJywgaXNBcmJpdHJhcnlWYWx1ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9uIER1cmF0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNpdGlvbi1kdXJhdGlvblxuICAgICAgICovXG4gICAgICBkdXJhdGlvbjogW3tcbiAgICAgICAgZHVyYXRpb246IGdldE51bWJlckFuZEFyYml0cmFyeSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogVHJhbnNpdGlvbiBUaW1pbmcgRnVuY3Rpb25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxuICAgICAgICovXG4gICAgICBlYXNlOiBbe1xuICAgICAgICBlYXNlOiBbJ2xpbmVhcicsICdpbicsICdvdXQnLCAnaW4tb3V0JywgaXNBcmJpdHJhcnlWYWx1ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2l0aW9uIERlbGF5XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNpdGlvbi1kZWxheVxuICAgICAgICovXG4gICAgICBkZWxheTogW3tcbiAgICAgICAgZGVsYXk6IGdldE51bWJlckFuZEFyYml0cmFyeSgpXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0aW9uXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvYW5pbWF0aW9uXG4gICAgICAgKi9cbiAgICAgIGFuaW1hdGU6IFt7XG4gICAgICAgIGFuaW1hdGU6IFsnbm9uZScsICdzcGluJywgJ3BpbmcnLCAncHVsc2UnLCAnYm91bmNlJywgaXNBcmJpdHJhcnlWYWx1ZV1cbiAgICAgIH1dLFxuICAgICAgLy8gVHJhbnNmb3Jtc1xuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2Zvcm1cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy90cmFuc2Zvcm1cbiAgICAgICAqL1xuICAgICAgdHJhbnNmb3JtOiBbe1xuICAgICAgICB0cmFuc2Zvcm06IFsnJywgJ2dwdScsICdub25lJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY2FsZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NjYWxlXG4gICAgICAgKi9cbiAgICAgIHNjYWxlOiBbe1xuICAgICAgICBzY2FsZTogW3NjYWxlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjYWxlIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY2FsZVxuICAgICAgICovXG4gICAgICAnc2NhbGUteCc6IFt7XG4gICAgICAgICdzY2FsZS14JzogW3NjYWxlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjYWxlIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY2FsZVxuICAgICAgICovXG4gICAgICAnc2NhbGUteSc6IFt7XG4gICAgICAgICdzY2FsZS15JzogW3NjYWxlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFJvdGF0ZVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3JvdGF0ZVxuICAgICAgICovXG4gICAgICByb3RhdGU6IFt7XG4gICAgICAgIHJvdGF0ZTogW2lzSW50ZWdlciwgaXNBcmJpdHJhcnlWYWx1ZV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2xhdGUgWFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RyYW5zbGF0ZVxuICAgICAgICovXG4gICAgICAndHJhbnNsYXRlLXgnOiBbe1xuICAgICAgICAndHJhbnNsYXRlLXgnOiBbdHJhbnNsYXRlXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRyYW5zbGF0ZSBZXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNsYXRlXG4gICAgICAgKi9cbiAgICAgICd0cmFuc2xhdGUteSc6IFt7XG4gICAgICAgICd0cmFuc2xhdGUteSc6IFt0cmFuc2xhdGVdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2tldyBYXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2tld1xuICAgICAgICovXG4gICAgICAnc2tldy14JzogW3tcbiAgICAgICAgJ3NrZXcteCc6IFtza2V3XVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNrZXcgWVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NrZXdcbiAgICAgICAqL1xuICAgICAgJ3NrZXcteSc6IFt7XG4gICAgICAgICdza2V3LXknOiBbc2tld11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBUcmFuc2Zvcm0gT3JpZ2luXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvdHJhbnNmb3JtLW9yaWdpblxuICAgICAgICovXG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6IFt7XG4gICAgICAgIG9yaWdpbjogWydjZW50ZXInLCAndG9wJywgJ3RvcC1yaWdodCcsICdyaWdodCcsICdib3R0b20tcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1sZWZ0JywgJ2xlZnQnLCAndG9wLWxlZnQnLCBpc0FyYml0cmFyeVZhbHVlXVxuICAgICAgfV0sXG4gICAgICAvLyBJbnRlcmFjdGl2aXR5XG4gICAgICAvKipcbiAgICAgICAqIEFjY2VudCBDb2xvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2FjY2VudC1jb2xvclxuICAgICAgICovXG4gICAgICBhY2NlbnQ6IFt7XG4gICAgICAgIGFjY2VudDogWydhdXRvJywgY29sb3JzXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIEFwcGVhcmFuY2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9hcHBlYXJhbmNlXG4gICAgICAgKi9cbiAgICAgIGFwcGVhcmFuY2U6IFsnYXBwZWFyYW5jZS1ub25lJ10sXG4gICAgICAvKipcbiAgICAgICAqIEN1cnNvclxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL2N1cnNvclxuICAgICAgICovXG4gICAgICBjdXJzb3I6IFt7XG4gICAgICAgIGN1cnNvcjogWydhdXRvJywgJ2RlZmF1bHQnLCAncG9pbnRlcicsICd3YWl0JywgJ3RleHQnLCAnbW92ZScsICdoZWxwJywgJ25vdC1hbGxvd2VkJywgJ25vbmUnLCAnY29udGV4dC1tZW51JywgJ3Byb2dyZXNzJywgJ2NlbGwnLCAnY3Jvc3NoYWlyJywgJ3ZlcnRpY2FsLXRleHQnLCAnYWxpYXMnLCAnY29weScsICduby1kcm9wJywgJ2dyYWInLCAnZ3JhYmJpbmcnLCAnYWxsLXNjcm9sbCcsICdjb2wtcmVzaXplJywgJ3Jvdy1yZXNpemUnLCAnbi1yZXNpemUnLCAnZS1yZXNpemUnLCAncy1yZXNpemUnLCAndy1yZXNpemUnLCAnbmUtcmVzaXplJywgJ253LXJlc2l6ZScsICdzZS1yZXNpemUnLCAnc3ctcmVzaXplJywgJ2V3LXJlc2l6ZScsICducy1yZXNpemUnLCAnbmVzdy1yZXNpemUnLCAnbndzZS1yZXNpemUnLCAnem9vbS1pbicsICd6b29tLW91dCcsIGlzQXJiaXRyYXJ5VmFsdWVdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogQ2FyZXQgQ29sb3JcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9qdXN0LWluLXRpbWUtbW9kZSNjYXJldC1jb2xvci11dGlsaXRpZXNcbiAgICAgICAqL1xuICAgICAgJ2NhcmV0LWNvbG9yJzogW3tcbiAgICAgICAgY2FyZXQ6IFtjb2xvcnNdXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUG9pbnRlciBFdmVudHNcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9wb2ludGVyLWV2ZW50c1xuICAgICAgICovXG4gICAgICAncG9pbnRlci1ldmVudHMnOiBbe1xuICAgICAgICAncG9pbnRlci1ldmVudHMnOiBbJ25vbmUnLCAnYXV0byddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogUmVzaXplXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvcmVzaXplXG4gICAgICAgKi9cbiAgICAgIHJlc2l6ZTogW3tcbiAgICAgICAgcmVzaXplOiBbJ25vbmUnLCAneScsICd4JywgJyddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIEJlaGF2aW9yXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLWJlaGF2aW9yXG4gICAgICAgKi9cbiAgICAgICdzY3JvbGwtYmVoYXZpb3InOiBbe1xuICAgICAgICBzY3JvbGw6IFsnYXV0bycsICdzbW9vdGgnXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBNYXJnaW5cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtbWFyZ2luXG4gICAgICAgKi9cbiAgICAgICdzY3JvbGwtbSc6IFt7XG4gICAgICAgICdzY3JvbGwtbSc6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBNYXJnaW4gWFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgJ3Njcm9sbC1teCc6IFt7XG4gICAgICAgICdzY3JvbGwtbXgnOiBbc3BhY2luZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgTWFyZ2luIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtbWFyZ2luXG4gICAgICAgKi9cbiAgICAgICdzY3JvbGwtbXknOiBbe1xuICAgICAgICAnc2Nyb2xsLW15JzogW3NwYWNpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIE1hcmdpbiBTdGFydFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgJ3Njcm9sbC1tcyc6IFt7XG4gICAgICAgICdzY3JvbGwtbXMnOiBbc3BhY2luZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgTWFyZ2luIEVuZFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgJ3Njcm9sbC1tZSc6IFt7XG4gICAgICAgICdzY3JvbGwtbWUnOiBbc3BhY2luZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgTWFyZ2luIFRvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgJ3Njcm9sbC1tdCc6IFt7XG4gICAgICAgICdzY3JvbGwtbXQnOiBbc3BhY2luZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgTWFyZ2luIFJpZ2h0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLW1hcmdpblxuICAgICAgICovXG4gICAgICAnc2Nyb2xsLW1yJzogW3tcbiAgICAgICAgJ3Njcm9sbC1tcic6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBNYXJnaW4gQm90dG9tXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLW1hcmdpblxuICAgICAgICovXG4gICAgICAnc2Nyb2xsLW1iJzogW3tcbiAgICAgICAgJ3Njcm9sbC1tYic6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBNYXJnaW4gTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1tYXJnaW5cbiAgICAgICAqL1xuICAgICAgJ3Njcm9sbC1tbCc6IFt7XG4gICAgICAgICdzY3JvbGwtbWwnOiBbc3BhY2luZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgUGFkZGluZ1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgICdzY3JvbGwtcCc6IFt7XG4gICAgICAgICdzY3JvbGwtcCc6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBQYWRkaW5nIFhcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtcGFkZGluZ1xuICAgICAgICovXG4gICAgICAnc2Nyb2xsLXB4JzogW3tcbiAgICAgICAgJ3Njcm9sbC1weCc6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBQYWRkaW5nIFlcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtcGFkZGluZ1xuICAgICAgICovXG4gICAgICAnc2Nyb2xsLXB5JzogW3tcbiAgICAgICAgJ3Njcm9sbC1weSc6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBQYWRkaW5nIFN0YXJ0XG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXBhZGRpbmdcbiAgICAgICAqL1xuICAgICAgJ3Njcm9sbC1wcyc6IFt7XG4gICAgICAgICdzY3JvbGwtcHMnOiBbc3BhY2luZ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgUGFkZGluZyBFbmRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtcGFkZGluZ1xuICAgICAgICovXG4gICAgICAnc2Nyb2xsLXBlJzogW3tcbiAgICAgICAgJ3Njcm9sbC1wZSc6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBQYWRkaW5nIFRvcFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgICdzY3JvbGwtcHQnOiBbe1xuICAgICAgICAnc2Nyb2xsLXB0JzogW3NwYWNpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFBhZGRpbmcgUmlnaHRcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtcGFkZGluZ1xuICAgICAgICovXG4gICAgICAnc2Nyb2xsLXByJzogW3tcbiAgICAgICAgJ3Njcm9sbC1wcic6IFtzcGFjaW5nXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCBQYWRkaW5nIEJvdHRvbVxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgICdzY3JvbGwtcGInOiBbe1xuICAgICAgICAnc2Nyb2xsLXBiJzogW3NwYWNpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFBhZGRpbmcgTGVmdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3Njcm9sbC1wYWRkaW5nXG4gICAgICAgKi9cbiAgICAgICdzY3JvbGwtcGwnOiBbe1xuICAgICAgICAnc2Nyb2xsLXBsJzogW3NwYWNpbmddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIFNuYXAgQWxpZ25cbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtc25hcC1hbGlnblxuICAgICAgICovXG4gICAgICAnc25hcC1hbGlnbic6IFt7XG4gICAgICAgIHNuYXA6IFsnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdhbGlnbi1ub25lJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgU25hcCBTdG9wXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXNuYXAtc3RvcFxuICAgICAgICovXG4gICAgICAnc25hcC1zdG9wJzogW3tcbiAgICAgICAgc25hcDogWydub3JtYWwnLCAnYWx3YXlzJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgU25hcCBUeXBlXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc2Nyb2xsLXNuYXAtdHlwZVxuICAgICAgICovXG4gICAgICAnc25hcC10eXBlJzogW3tcbiAgICAgICAgc25hcDogWydub25lJywgJ3gnLCAneScsICdib3RoJ11cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTY3JvbGwgU25hcCBUeXBlIFN0cmljdG5lc3NcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zY3JvbGwtc25hcC10eXBlXG4gICAgICAgKi9cbiAgICAgICdzbmFwLXN0cmljdG5lc3MnOiBbe1xuICAgICAgICBzbmFwOiBbJ21hbmRhdG9yeScsICdwcm94aW1pdHknXVxuICAgICAgfV0sXG4gICAgICAvKipcbiAgICAgICAqIFRvdWNoIEFjdGlvblxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3RvdWNoLWFjdGlvblxuICAgICAgICovXG4gICAgICB0b3VjaDogW3tcbiAgICAgICAgdG91Y2g6IFsnYXV0bycsICdub25lJywgJ3BpbmNoLXpvb20nLCAnbWFuaXB1bGF0aW9uJywge1xuICAgICAgICAgIHBhbjogWyd4JywgJ2xlZnQnLCAncmlnaHQnLCAneScsICd1cCcsICdkb3duJ11cbiAgICAgICAgfV1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBVc2VyIFNlbGVjdFxuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3VzZXItc2VsZWN0XG4gICAgICAgKi9cbiAgICAgIHNlbGVjdDogW3tcbiAgICAgICAgc2VsZWN0OiBbJ25vbmUnLCAndGV4dCcsICdhbGwnLCAnYXV0byddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogV2lsbCBDaGFuZ2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy93aWxsLWNoYW5nZVxuICAgICAgICovXG4gICAgICAnd2lsbC1jaGFuZ2UnOiBbe1xuICAgICAgICAnd2lsbC1jaGFuZ2UnOiBbJ2F1dG8nLCAnc2Nyb2xsJywgJ2NvbnRlbnRzJywgJ3RyYW5zZm9ybScsIGlzQXJiaXRyYXJ5VmFsdWVdXG4gICAgICB9XSxcbiAgICAgIC8vIFNWR1xuICAgICAgLyoqXG4gICAgICAgKiBGaWxsXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3MvZmlsbFxuICAgICAgICovXG4gICAgICBmaWxsOiBbe1xuICAgICAgICBmaWxsOiBbY29sb3JzLCAnbm9uZSddXG4gICAgICB9XSxcbiAgICAgIC8qKlxuICAgICAgICogU3Ryb2tlIFdpZHRoXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL2RvY3Mvc3Ryb2tlLXdpZHRoXG4gICAgICAgKi9cbiAgICAgICdzdHJva2Utdyc6IFt7XG4gICAgICAgIHN0cm9rZTogW2lzTGVuZ3RoLCBpc0FyYml0cmFyeU51bWJlcl1cbiAgICAgIH1dLFxuICAgICAgLyoqXG4gICAgICAgKiBTdHJva2VcbiAgICAgICAqIEBzZWUgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vZG9jcy9zdHJva2VcbiAgICAgICAqL1xuICAgICAgc3Ryb2tlOiBbe1xuICAgICAgICBzdHJva2U6IFtjb2xvcnMsICdub25lJ11cbiAgICAgIH1dLFxuICAgICAgLy8gQWNjZXNzaWJpbGl0eVxuICAgICAgLyoqXG4gICAgICAgKiBTY3JlZW4gUmVhZGVyc1xuICAgICAgICogQHNlZSBodHRwczovL3RhaWx3aW5kY3NzLmNvbS9kb2NzL3NjcmVlbi1yZWFkZXJzXG4gICAgICAgKi9cbiAgICAgIHNyOiBbJ3NyLW9ubHknLCAnbm90LXNyLW9ubHknXVxuICAgIH0sXG4gICAgY29uZmxpY3RpbmdDbGFzc0dyb3Vwczoge1xuICAgICAgb3ZlcmZsb3c6IFsnb3ZlcmZsb3cteCcsICdvdmVyZmxvdy15J10sXG4gICAgICBvdmVyc2Nyb2xsOiBbJ292ZXJzY3JvbGwteCcsICdvdmVyc2Nyb2xsLXknXSxcbiAgICAgIGluc2V0OiBbJ2luc2V0LXgnLCAnaW5zZXQteScsICdzdGFydCcsICdlbmQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gICAgICAnaW5zZXQteCc6IFsncmlnaHQnLCAnbGVmdCddLFxuICAgICAgJ2luc2V0LXknOiBbJ3RvcCcsICdib3R0b20nXSxcbiAgICAgIGZsZXg6IFsnYmFzaXMnLCAnZ3JvdycsICdzaHJpbmsnXSxcbiAgICAgIGdhcDogWydnYXAteCcsICdnYXAteSddLFxuICAgICAgcDogWydweCcsICdweScsICdwcycsICdwZScsICdwdCcsICdwcicsICdwYicsICdwbCddLFxuICAgICAgcHg6IFsncHInLCAncGwnXSxcbiAgICAgIHB5OiBbJ3B0JywgJ3BiJ10sXG4gICAgICBtOiBbJ214JywgJ215JywgJ21zJywgJ21lJywgJ210JywgJ21yJywgJ21iJywgJ21sJ10sXG4gICAgICBteDogWydtcicsICdtbCddLFxuICAgICAgbXk6IFsnbXQnLCAnbWInXSxcbiAgICAgICdmb250LXNpemUnOiBbJ2xlYWRpbmcnXSxcbiAgICAgICdmdm4tbm9ybWFsJzogWydmdm4tb3JkaW5hbCcsICdmdm4tc2xhc2hlZC16ZXJvJywgJ2Z2bi1maWd1cmUnLCAnZnZuLXNwYWNpbmcnLCAnZnZuLWZyYWN0aW9uJ10sXG4gICAgICAnZnZuLW9yZGluYWwnOiBbJ2Z2bi1ub3JtYWwnXSxcbiAgICAgICdmdm4tc2xhc2hlZC16ZXJvJzogWydmdm4tbm9ybWFsJ10sXG4gICAgICAnZnZuLWZpZ3VyZSc6IFsnZnZuLW5vcm1hbCddLFxuICAgICAgJ2Z2bi1zcGFjaW5nJzogWydmdm4tbm9ybWFsJ10sXG4gICAgICAnZnZuLWZyYWN0aW9uJzogWydmdm4tbm9ybWFsJ10sXG4gICAgICByb3VuZGVkOiBbJ3JvdW5kZWQtcycsICdyb3VuZGVkLWUnLCAncm91bmRlZC10JywgJ3JvdW5kZWQtcicsICdyb3VuZGVkLWInLCAncm91bmRlZC1sJywgJ3JvdW5kZWQtc3MnLCAncm91bmRlZC1zZScsICdyb3VuZGVkLWVlJywgJ3JvdW5kZWQtZXMnLCAncm91bmRlZC10bCcsICdyb3VuZGVkLXRyJywgJ3JvdW5kZWQtYnInLCAncm91bmRlZC1ibCddLFxuICAgICAgJ3JvdW5kZWQtcyc6IFsncm91bmRlZC1zcycsICdyb3VuZGVkLWVzJ10sXG4gICAgICAncm91bmRlZC1lJzogWydyb3VuZGVkLXNlJywgJ3JvdW5kZWQtZWUnXSxcbiAgICAgICdyb3VuZGVkLXQnOiBbJ3JvdW5kZWQtdGwnLCAncm91bmRlZC10ciddLFxuICAgICAgJ3JvdW5kZWQtcic6IFsncm91bmRlZC10cicsICdyb3VuZGVkLWJyJ10sXG4gICAgICAncm91bmRlZC1iJzogWydyb3VuZGVkLWJyJywgJ3JvdW5kZWQtYmwnXSxcbiAgICAgICdyb3VuZGVkLWwnOiBbJ3JvdW5kZWQtdGwnLCAncm91bmRlZC1ibCddLFxuICAgICAgJ2JvcmRlci1zcGFjaW5nJzogWydib3JkZXItc3BhY2luZy14JywgJ2JvcmRlci1zcGFjaW5nLXknXSxcbiAgICAgICdib3JkZXItdyc6IFsnYm9yZGVyLXctcycsICdib3JkZXItdy1lJywgJ2JvcmRlci13LXQnLCAnYm9yZGVyLXctcicsICdib3JkZXItdy1iJywgJ2JvcmRlci13LWwnXSxcbiAgICAgICdib3JkZXItdy14JzogWydib3JkZXItdy1yJywgJ2JvcmRlci13LWwnXSxcbiAgICAgICdib3JkZXItdy15JzogWydib3JkZXItdy10JywgJ2JvcmRlci13LWInXSxcbiAgICAgICdib3JkZXItY29sb3InOiBbJ2JvcmRlci1jb2xvci10JywgJ2JvcmRlci1jb2xvci1yJywgJ2JvcmRlci1jb2xvci1iJywgJ2JvcmRlci1jb2xvci1sJ10sXG4gICAgICAnYm9yZGVyLWNvbG9yLXgnOiBbJ2JvcmRlci1jb2xvci1yJywgJ2JvcmRlci1jb2xvci1sJ10sXG4gICAgICAnYm9yZGVyLWNvbG9yLXknOiBbJ2JvcmRlci1jb2xvci10JywgJ2JvcmRlci1jb2xvci1iJ10sXG4gICAgICAnc2Nyb2xsLW0nOiBbJ3Njcm9sbC1teCcsICdzY3JvbGwtbXknLCAnc2Nyb2xsLW1zJywgJ3Njcm9sbC1tZScsICdzY3JvbGwtbXQnLCAnc2Nyb2xsLW1yJywgJ3Njcm9sbC1tYicsICdzY3JvbGwtbWwnXSxcbiAgICAgICdzY3JvbGwtbXgnOiBbJ3Njcm9sbC1tcicsICdzY3JvbGwtbWwnXSxcbiAgICAgICdzY3JvbGwtbXknOiBbJ3Njcm9sbC1tdCcsICdzY3JvbGwtbWInXSxcbiAgICAgICdzY3JvbGwtcCc6IFsnc2Nyb2xsLXB4JywgJ3Njcm9sbC1weScsICdzY3JvbGwtcHMnLCAnc2Nyb2xsLXBlJywgJ3Njcm9sbC1wdCcsICdzY3JvbGwtcHInLCAnc2Nyb2xsLXBiJywgJ3Njcm9sbC1wbCddLFxuICAgICAgJ3Njcm9sbC1weCc6IFsnc2Nyb2xsLXByJywgJ3Njcm9sbC1wbCddLFxuICAgICAgJ3Njcm9sbC1weSc6IFsnc2Nyb2xsLXB0JywgJ3Njcm9sbC1wYiddXG4gICAgfSxcbiAgICBjb25mbGljdGluZ0NsYXNzR3JvdXBNb2RpZmllcnM6IHtcbiAgICAgICdmb250LXNpemUnOiBbJ2xlYWRpbmcnXVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IHsgZ2V0RGVmYXVsdENvbmZpZyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC1jb25maWcubWpzLm1hcFxuIiwiaW1wb3J0IHsgY3JlYXRlVGFpbHdpbmRNZXJnZSB9IGZyb20gJy4vY3JlYXRlLXRhaWx3aW5kLW1lcmdlLm1qcyc7XG5pbXBvcnQgeyBnZXREZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LWNvbmZpZy5tanMnO1xuXG52YXIgdHdNZXJnZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVUYWlsd2luZE1lcmdlKGdldERlZmF1bHRDb25maWcpO1xuXG5leHBvcnQgeyB0d01lcmdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD10dy1tZXJnZS5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=