"use strict";
(self["webpackChunkreact_scratch_boilerplate"] = self["webpackChunkreact_scratch_boilerplate"] || []).push([[492],{

/***/ 9250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AW: () => (/* binding */ Route),
/* harmony export */   F0: () => (/* binding */ Router),
/* harmony export */   TH: () => (/* binding */ useLocation),
/* harmony export */   Us: () => (/* binding */ NavigationContext),
/* harmony export */   WU: () => (/* binding */ useResolvedPath),
/* harmony export */   Z5: () => (/* binding */ Routes),
/* harmony export */   j3: () => (/* binding */ Outlet),
/* harmony export */   oQ: () => (/* binding */ useHref),
/* harmony export */   s0: () => (/* binding */ useNavigate)
/* harmony export */ });
/* unused harmony exports Await, MemoryRouter, Navigate, RouterProvider, UNSAFE_DataRouterContext, UNSAFE_DataRouterStateContext, UNSAFE_LocationContext, UNSAFE_RouteContext, UNSAFE_mapRouteProperties, UNSAFE_useRouteId, UNSAFE_useRoutesImpl, createMemoryRouter, createRoutesFromChildren, createRoutesFromElements, renderMatches, unstable_useBlocker, useActionData, useAsyncError, useAsyncValue, useInRouterContext, useLoaderData, useMatch, useMatches, useNavigation, useNavigationType, useOutlet, useOutletContext, useParams, useRevalidator, useRouteError, useRouteLoaderData, useRoutes */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2599);
/**
 * React Router v6.11.2
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

const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});

if (false) {}

const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

if (false) {}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .joinPaths */ .RQ)([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */

function useNavigationType() {
  return React.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
  let {
    pathname
  } = useLocation();
  return React.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

const navigateEffectWarning = (/* unused pure expression or super */ null && ("You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.")); // Mute warnings for calls to useNavigate in SSR environments

function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;

  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}
/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */


function useNavigate() {
  let {
    isDataRoute
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext); // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}

function useNavigateUnstable() {
  !useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_getPathContributingMatches */ .Zq)(matches).map(match => match.pathnameBase));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     false ? 0 : void 0; // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet

    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .resolveTo */ .pC)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links

    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .joinPaths */ .RQ)([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}

const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */

function useOutletContext() {
  return React.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */

function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */

function useParams() {
  let {
    matches
  } = React.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_getPathContributingMatches */ .Zq)(matches).map(match => match.pathnameBase));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .resolveTo */ .pC)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
} // Internal implementation with accept optional param for RouterProvider usage

function useRoutesImpl(routes, locationArg, dataRouterState) {
  !useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (false) {}

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .matchRoutes */ .fp)(routes, {
    pathname: remainingPathname
  });

  if (false) {}

  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .joinPaths */ .RQ)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .joinPaths */ .RQ)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.


  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU.Pop
      }
    }, renderedMatches);
  }

  return renderedMatches;
}

function DefaultErrorComponent() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .isRouteErrorResponse */ .WK)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;

  if (false) {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}

const defaultErrorElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    } // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.


    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }

  render() {
    return this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }

}

function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}

function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;

  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (dataRouterState === void 0) {
    dataRouterState = null;
  }

  if (matches == null) {
    var _dataRouterState;

    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }

  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;

  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    let errorElement = null;

    if (dataRouterState) {
      errorElement = match.route.errorElement || defaultErrorElement;
    }

    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));

    let getChildren = () => {
      let children;

      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    }; // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement


    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  !ctx ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  !state ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  return state;
}

function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  !route ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  return route;
} // Internal version with hookName-aware debugging


function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Returns the ID for the nearest contextual route
 */


function useRouteId() {
  return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */

function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */

function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */

function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return React.useMemo(() => matches.map(match => {
    let {
      pathname,
      params
    } = match; // Note: This structure matches that created by createUseMatchesMatch
    // in the @remix-run/router , so if you change this please also change
    // that :)  Eventually we'll DRY this up

    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */

function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);

  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }

  return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */

function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */

function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = React.useContext(RouteContext);
  !route ?  false ? 0 : UNSAFE_invariant(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;

  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  } // Otherwise look for errors from our data router state


  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */

function useAsyncValue() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */

function useAsyncError() {
  let value = React.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */

function useBlocker(shouldBlock) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let state = useDataRouterState(DataRouterStateHook.UseBlocker);
  let [blockerKey] = React.useState(() => String(++blockerId));
  let blockerFunction = React.useCallback(args => {
    return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
  }, [shouldBlock]);
  let blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount

  React.useEffect(() => () => router.deleteBlocker(blockerKey), [router, blockerKey]); // Prefer the blocker from state since DataRouterContext is memoized so this
  // ensures we update on blocker state updates

  return state.blockers.get(blockerKey) || blocker;
}
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */

function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

     false ? 0 : void 0; // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet

    if (!activeRef.current) return;

    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}

const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
     false ? 0 : void 0;
  }
}

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router
  } = _ref;
  // Need to use a layout effect here so we are subscribed early enough to
  // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
  let [state, setState] = React.useState(router.state);
  React.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  let navigator = React.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = React.useMemo(() => ({
    router,
    navigator,
    static: false,
    basename
  }), [router, navigator, basename]); // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DataRouterContext.Provider, {
    value: dataRouterContext
  }, /*#__PURE__*/React.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/React.createElement(Router, {
    basename: router.basename,
    location: router.state.location,
    navigationType: router.state.historyAction,
    navigator: navigator
  }, router.state.initialized ? /*#__PURE__*/React.createElement(DataRoutes, {
    routes: router.routes,
    state: state
  }) : fallbackElement))), null);
}

function DataRoutes(_ref2) {
  let {
    routes,
    state
  } = _ref2;
  return useRoutesImpl(routes, undefined, state);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref3) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref3;
  let historyRef = React.useRef();

  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex,
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
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ?  false ? 0 : UNSAFE_invariant(false) : void 0;
   false ? 0 : void 0;
  let {
    matches
  } = React.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate(); // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place

  let path = resolveTo(to, UNSAFE_getPathContributingMatches(matches).map(match => match.pathnameBase), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  React.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
   false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .Action */ .aU.Pop,
    navigator,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .parsePath */ .cP)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .stripBasename */ .Zn)(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
   false ? 0 : void 0;

  if (locationContext == null) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}

/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref7) {
  let {
    children,
    errorElement,
    resolve
  } = _ref7;
  return /*#__PURE__*/React.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/React.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

const neverSettledPromise = new Promise(() => {});

class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }

  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;

    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings

      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }

    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .AbortedDeferredError */ .X3) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }

    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }

    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }

    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    } // Throw to the suspense boundary


    throw promise;
  }

}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */


function ResolveAwait(_ref8) {
  let {
    children
  } = _ref8;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, toRender);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */


function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    let treePath = [...parentPath, index];

    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }

    !(element.type === Route) ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    !(!element.props.index || !element.props.children) ?  false ? 0 : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__/* .UNSAFE_invariant */ .J0)(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}

function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
  };

  if (route.Component) {
    if (false) {}

    Object.assign(updates, {
      element: /*#__PURE__*/React.createElement(route.Component),
      Component: undefined
    });
  }

  if (route.ErrorBoundary) {
    if (false) {}

    Object.assign(updates, {
      errorElement: /*#__PURE__*/React.createElement(route.ErrorBoundary),
      ErrorBoundary: undefined
    });
  }

  return updates;
}

function createMemoryRouter(routes, opts) {
  return createRouter({
    basename: opts == null ? void 0 : opts.basename,
    future: _extends({}, opts == null ? void 0 : opts.future, {
      v7_prependBasename: true
    }),
    history: createMemoryHistory({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes,
    mapRouteProperties
  }).initialize();
} ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(7294),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 2408:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ 7294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(2408);
} else {}


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTZCLCtFQUErRSxVQUFVLGdCQUFnQixNQUFNLGFBQWEsTUFBTSxvQkFBb0IsTUFBTSxhQUFhLE1BQU0sY0FBYyxNQUFNLEdBQUcsNkVBQTZFLHlIQUF5SDtBQUMzZCw0QkFBNEIsR0FBRyw2QkFBNkIsYUFBYSxRQUFRLGtCQUFrQixRQUFRLElBQUksSUFBSSwrQkFBK0IsUUFBUTs7Ozs7Ozs7QUNsQjdJOztBQUViLElBQUksSUFBcUM7QUFDekMsRUFBRSx3Q0FBNkQ7QUFDL0QsRUFBRSxLQUFLLEVBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtc2NyYXRjaC1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1zY3JhdGNoLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovL3JlYWN0LXNjcmF0Y2gtYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgUm91dGVyIHY2LjExLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVU5TQUZFX2ludmFyaWFudCwgam9pblBhdGhzLCBtYXRjaFBhdGgsIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcywgVU5TQUZFX3dhcm5pbmcsIHJlc29sdmVUbywgcGFyc2VQYXRoLCBtYXRjaFJvdXRlcywgQWN0aW9uLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgc3RyaXBCYXNlbmFtZSwgQWJvcnRlZERlZmVycmVkRXJyb3IsIGNyZWF0ZVJvdXRlciB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBY3Rpb24gYXMgTmF2aWdhdGlvblR5cGUsIGNyZWF0ZVBhdGgsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZXNvbHZlUGF0aCB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5jb25zdCBEYXRhUm91dGVyQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIERhdGFSb3V0ZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJEYXRhUm91dGVyXCI7XG59XG5cbmNvbnN0IERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBEYXRhUm91dGVyU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJEYXRhUm91dGVyU3RhdGVcIjtcbn1cblxuY29uc3QgQXdhaXRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQXdhaXRDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJBd2FpdFwiO1xufVxuXG5jb25zdCBOYXZpZ2F0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdmlnYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJOYXZpZ2F0aW9uXCI7XG59XG5cbmNvbnN0IExvY2F0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIExvY2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTG9jYXRpb25cIjtcbn1cblxuY29uc3QgUm91dGVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBvdXRsZXQ6IG51bGwsXG4gIG1hdGNoZXM6IFtdLFxuICBpc0RhdGFSb3V0ZTogZmFsc2Vcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVcIjtcbn1cblxuY29uc3QgUm91dGVFcnJvckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUVycm9yQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVFcnJvclwiO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZ1bGwgaHJlZiBmb3IgdGhlIGdpdmVuIFwidG9cIiB2YWx1ZS4gVGhpcyBpcyB1c2VmdWwgZm9yIGJ1aWxkaW5nXG4gKiBjdXN0b20gbGlua3MgdGhhdCBhcmUgYWxzbyBhY2Nlc3NpYmxlIGFuZCBwcmVzZXJ2ZSByaWdodC1jbGljayBiZWhhdmlvci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1ocmVmXG4gKi9cblxuZnVuY3Rpb24gdXNlSHJlZih0bywgX3RlbXApIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlSHJlZigpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHtcbiAgICBoYXNoLFxuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFxuICB9ID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lOyAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lIHByaW9yXG4gIC8vIHRvIGNyZWF0aW5nIHRoZSBocmVmLiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiBqdXN0IHVzZSB0aGUgcmF3XG4gIC8vIGJhc2VuYW1lIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2VcbiAgLy8gb2YgYSB0cmFpbGluZyBzbGFzaCBvbiByb290IGxpbmtzXG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIGpvaW5lZFBhdGhuYW1lID0gcGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRobmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci5jcmVhdGVIcmVmKHtcbiAgICBwYXRobmFtZTogam9pbmVkUGF0aG5hbWUsXG4gICAgc2VhcmNoLFxuICAgIGhhc2hcbiAgfSk7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYSA8Um91dGVyPi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1pbi1yb3V0ZXItY29udGV4dFxuICovXG5cbmZ1bmN0aW9uIHVzZUluUm91dGVyQ29udGV4dCgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoTG9jYXRpb25Db250ZXh0KSAhPSBudWxsO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxvY2F0aW9uIG9iamVjdCwgd2hpY2ggcmVwcmVzZW50cyB0aGUgY3VycmVudCBVUkwgaW4gd2ViXG4gKiBicm93c2Vycy5cbiAqXG4gKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgdGhpcyBpdCBtYXkgbWVhbiB5b3UncmUgZG9pbmcgc29tZSBvZiB5b3VyIG93blxuICogXCJyb3V0aW5nXCIgaW4geW91ciBhcHAsIGFuZCB3ZSdkIGxpa2UgdG8ga25vdyB3aGF0IHlvdXIgdXNlIGNhc2UgaXMuIFdlIG1heVxuICogYmUgYWJsZSB0byBwcm92aWRlIHNvbWV0aGluZyBoaWdoZXItbGV2ZWwgdG8gYmV0dGVyIHN1aXQgeW91ciBuZWVkcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1sb2NhdGlvblxuICovXG5cbmZ1bmN0aW9uIHVzZUxvY2F0aW9uKCkge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUxvY2F0aW9uKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoTG9jYXRpb25Db250ZXh0KS5sb2NhdGlvbjtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIGFjdGlvbiB3aGljaCBkZXNjcmliZXMgaG93IHRoZSByb3V0ZXIgY2FtZSB0b1xuICogdGhlIGN1cnJlbnQgbG9jYXRpb24sIGVpdGhlciBieSBhIHBvcCwgcHVzaCwgb3IgcmVwbGFjZSBvbiB0aGUgaGlzdG9yeSBzdGFjay5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1uYXZpZ2F0aW9uLXR5cGVcbiAqL1xuXG5mdW5jdGlvbiB1c2VOYXZpZ2F0aW9uVHlwZSgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoTG9jYXRpb25Db250ZXh0KS5uYXZpZ2F0aW9uVHlwZTtcbn1cbi8qKlxuICogUmV0dXJucyBhIFBhdGhNYXRjaCBvYmplY3QgaWYgdGhlIGdpdmVuIHBhdHRlcm4gbWF0Y2hlcyB0aGUgY3VycmVudCBVUkwuXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgY29tcG9uZW50cyB0aGF0IG5lZWQgdG8ga25vdyBcImFjdGl2ZVwiIHN0YXRlLCBlLmcuXG4gKiA8TmF2TGluaz4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbWF0Y2hcbiAqL1xuXG5mdW5jdGlvbiB1c2VNYXRjaChwYXR0ZXJuKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTWF0Y2goKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIHBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpLCBbcGF0aG5hbWUsIHBhdHRlcm5dKTtcbn1cbi8qKlxuICogVGhlIGludGVyZmFjZSBmb3IgdGhlIG5hdmlnYXRlKCkgZnVuY3Rpb24gcmV0dXJuZWQgZnJvbSB1c2VOYXZpZ2F0ZSgpLlxuICovXG5cbmNvbnN0IG5hdmlnYXRlRWZmZWN0V2FybmluZyA9IFwiWW91IHNob3VsZCBjYWxsIG5hdmlnYXRlKCkgaW4gYSBSZWFjdC51c2VFZmZlY3QoKSwgbm90IHdoZW4gXCIgKyBcInlvdXIgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkLlwiOyAvLyBNdXRlIHdhcm5pbmdzIGZvciBjYWxscyB0byB1c2VOYXZpZ2F0ZSBpbiBTU1IgZW52aXJvbm1lbnRzXG5cbmZ1bmN0aW9uIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoY2IpIHtcbiAgbGV0IGlzU3RhdGljID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCkuc3RhdGljO1xuXG4gIGlmICghaXNTdGF0aWMpIHtcbiAgICAvLyBXZSBzaG91bGQgYmUgYWJsZSB0byBnZXQgcmlkIG9mIHRoaXMgb25jZSByZWFjdCAxOC4zIGlzIHJlbGVhc2VkXG4gICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yNjM5NVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdChjYik7XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyBhbiBpbXBlcmF0aXZlIG1ldGhvZCBmb3IgY2hhbmdpbmcgdGhlIGxvY2F0aW9uLiBVc2VkIGJ5IDxMaW5rPnMsIGJ1dFxuICogbWF5IGFsc28gYmUgdXNlZCBieSBvdGhlciBlbGVtZW50cyB0byBjaGFuZ2UgdGhlIGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW5hdmlnYXRlXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VOYXZpZ2F0ZSgpIHtcbiAgbGV0IHtcbiAgICBpc0RhdGFSb3V0ZVxuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpOyAvLyBDb25kaXRpb25hbCB1c2FnZSBpcyBPSyBoZXJlIGJlY2F1c2UgdGhlIHVzYWdlIG9mIGEgZGF0YSByb3V0ZXIgaXMgc3RhdGljXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gIHJldHVybiBpc0RhdGFSb3V0ZSA/IHVzZU5hdmlnYXRlU3RhYmxlKCkgOiB1c2VOYXZpZ2F0ZVVuc3RhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIHVzZU5hdmlnYXRlVW5zdGFibGUoKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTmF2aWdhdGUoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKS5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKSk7XG4gIGxldCBhY3RpdmVSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcoYWN0aXZlUmVmLmN1cnJlbnQsIG5hdmlnYXRlRWZmZWN0V2FybmluZykgOiB2b2lkIDA7IC8vIFNob3J0IGNpcmN1aXQgaGVyZSBzaW5jZSBpZiB0aGlzIGhhcHBlbnMgb24gZmlyc3QgcmVuZGVyIHRoZSBuYXZpZ2F0ZVxuICAgIC8vIGlzIHVzZWxlc3MgYmVjYXVzZSB3ZSBoYXZlbid0IHdpcmVkIHVwIG91ciBoaXN0b3J5IGxpc3RlbmVyIHlldFxuXG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbmF2aWdhdG9yLmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lLCBvcHRpb25zLnJlbGF0aXZlID09PSBcInBhdGhcIik7IC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgICAvLyB0byBoYW5kaW5nIG9mZiB0byBoaXN0b3J5IChidXQgb25seSBpZiB3ZSdyZSBub3QgaW4gYSBkYXRhIHJvdXRlcixcbiAgICAvLyBvdGhlcndpc2UgaXQnbGwgcHJlcGVuZCB0aGUgYmFzZW5hbWUgaW5zaWRlIG9mIHRoZSByb3V0ZXIpLlxuICAgIC8vIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4gd2UgbmF2aWdhdGUgdG8gdGhlIHJhdyBiYXNlbmFtZVxuICAgIC8vIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2Ugb2YgYVxuICAgIC8vIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgbGlua3NcblxuICAgIGlmIChkYXRhUm91dGVyQ29udGV4dCA9PSBudWxsICYmIGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgICAgcGF0aC5wYXRobmFtZSA9IHBhdGgucGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gICAgfVxuXG4gICAgKCEhb3B0aW9ucy5yZXBsYWNlID8gbmF2aWdhdG9yLnJlcGxhY2UgOiBuYXZpZ2F0b3IucHVzaCkocGF0aCwgb3B0aW9ucy5zdGF0ZSwgb3B0aW9ucyk7XG4gIH0sIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWUsIGRhdGFSb3V0ZXJDb250ZXh0XSk7XG4gIHJldHVybiBuYXZpZ2F0ZTtcbn1cblxuY29uc3QgT3V0bGV0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IChpZiBwcm92aWRlZCkgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utb3V0bGV0LWNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VPdXRsZXRDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChPdXRsZXRDb250ZXh0KTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuIFVzZWQgaW50ZXJuYWxseSBieSA8T3V0bGV0PiB0byByZW5kZXIgY2hpbGQgcm91dGVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW91dGxldFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuXG4gIGlmIChvdXRsZXQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGV0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICB9LCBvdXRsZXQpO1xuICB9XG5cbiAgcmV0dXJuIG91dGxldDtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIG9mIHRoZSBkeW5hbWljIHBhcmFtcyBmcm9tIHRoZSBjdXJyZW50XG4gKiBVUkwgdGhhdCB3ZXJlIG1hdGNoZWQgYnkgdGhlIHJvdXRlIHBhdGguXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcGFyYW1zXG4gKi9cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIHJldHVybiByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbn1cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhdGhuYW1lIG9mIHRoZSBnaXZlbiBgdG9gIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcmVzb2x2ZWQtcGF0aFxuICovXG5cbmZ1bmN0aW9uIHVzZVJlc29sdmVkUGF0aCh0bywgX3RlbXAyKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlID09PSBcInBhdGhcIiksIFt0bywgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lLCByZWxhdGl2ZV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9mIHRoZSByb3V0ZSB0aGF0IG1hdGNoZWQgdGhlIGN1cnJlbnQgbG9jYXRpb24sIHByZXBhcmVkXG4gKiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHQgdG8gcmVuZGVyIHRoZSByZW1haW5kZXIgb2YgdGhlIHJvdXRlIHRyZWUuIFJvdXRlXG4gKiBlbGVtZW50cyBpbiB0aGUgdHJlZSBtdXN0IHJlbmRlciBhbiA8T3V0bGV0PiB0byByZW5kZXIgdGhlaXIgY2hpbGQgcm91dGUnc1xuICogZWxlbWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1yb3V0ZXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbkFyZykge1xuICByZXR1cm4gdXNlUm91dGVzSW1wbChyb3V0ZXMsIGxvY2F0aW9uQXJnKTtcbn0gLy8gSW50ZXJuYWwgaW1wbGVtZW50YXRpb24gd2l0aCBhY2NlcHQgb3B0aW9uYWwgcGFyYW0gZm9yIFJvdXRlclByb3ZpZGVyIHVzYWdlXG5cbmZ1bmN0aW9uIHVzZVJvdXRlc0ltcGwocm91dGVzLCBsb2NhdGlvbkFyZywgZGF0YVJvdXRlclN0YXRlKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlUm91dGVzKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXM6IHBhcmVudE1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBwYXJlbnRNYXRjaGVzW3BhcmVudE1hdGNoZXMubGVuZ3RoIC0gMV07XG4gIGxldCBwYXJlbnRQYXJhbXMgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbiAgbGV0IHBhcmVudFBhdGhuYW1lID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWUgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFBhdGhuYW1lQmFzZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lQmFzZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50Um91dGUgPSByb3V0ZU1hdGNoICYmIHJvdXRlTWF0Y2gucm91dGU7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIC8vIFlvdSB3b24ndCBnZXQgYSB3YXJuaW5nIGFib3V0IDIgZGlmZmVyZW50IDxSb3V0ZXM+IHVuZGVyIGEgPFJvdXRlPlxuICAgIC8vIHdpdGhvdXQgYSB0cmFpbGluZyAqLCBidXQgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IHdhcm5pbmcgYW55d2F5IHNpbmNlIHdlXG4gICAgLy8gY2Fubm90IGV2ZW4gZ2l2ZSB0aGUgd2FybmluZyB1bmxlc3MgdGhleSBsYW5kIGF0IHRoZSBwYXJlbnQgcm91dGUuXG4gICAgLy9cbiAgICAvLyBFeGFtcGxlOlxuICAgIC8vXG4gICAgLy8gPFJvdXRlcz5cbiAgICAvLyAgIHsvKiBUaGlzIHJvdXRlIHBhdGggTVVTVCBlbmQgd2l0aCAvKiBiZWNhdXNlIG90aGVyd2lzZVxuICAgIC8vICAgICAgIGl0IHdpbGwgbmV2ZXIgbWF0Y2ggL2Jsb2cvcG9zdC8xMjMgKi99XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2dcIiBlbGVtZW50PXs8QmxvZyAvPn0gLz5cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZy9mZWVkXCIgZWxlbWVudD17PEJsb2dGZWVkIC8+fSAvPlxuICAgIC8vIDwvUm91dGVzPlxuICAgIC8vXG4gICAgLy8gZnVuY3Rpb24gQmxvZygpIHtcbiAgICAvLyAgIHJldHVybiAoXG4gICAgLy8gICAgIDxSb3V0ZXM+XG4gICAgLy8gICAgICAgPFJvdXRlIHBhdGg9XCJwb3N0LzppZFwiIGVsZW1lbnQ9ezxQb3N0IC8+fSAvPlxuICAgIC8vICAgICA8L1JvdXRlcz5cbiAgICAvLyAgICk7XG4gICAgLy8gfVxuICAgIGxldCBwYXJlbnRQYXRoID0gcGFyZW50Um91dGUgJiYgcGFyZW50Um91dGUucGF0aCB8fCBcIlwiO1xuICAgIHdhcm5pbmdPbmNlKHBhcmVudFBhdGhuYW1lLCAhcGFyZW50Um91dGUgfHwgcGFyZW50UGF0aC5lbmRzV2l0aChcIipcIiksIFwiWW91IHJlbmRlcmVkIGRlc2NlbmRhbnQgPFJvdXRlcz4gKG9yIGNhbGxlZCBgdXNlUm91dGVzKClgKSBhdCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGhuYW1lICsgXCJcXFwiICh1bmRlciA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPikgYnV0IHRoZSBcIikgKyBcInBhcmVudCByb3V0ZSBwYXRoIGhhcyBubyB0cmFpbGluZyBcXFwiKlxcXCIuIFRoaXMgbWVhbnMgaWYgeW91IG5hdmlnYXRlIFwiICsgXCJkZWVwZXIsIHRoZSBwYXJlbnQgd29uJ3QgbWF0Y2ggYW55bW9yZSBhbmQgdGhlcmVmb3JlIHRoZSBjaGlsZCBcIiArIFwicm91dGVzIHdpbGwgbmV2ZXIgcmVuZGVyLlxcblxcblwiICsgKFwiUGxlYXNlIGNoYW5nZSB0aGUgcGFyZW50IDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+IHRvIDxSb3V0ZSBcIikgKyAoXCJwYXRoPVxcXCJcIiArIChwYXJlbnRQYXRoID09PSBcIi9cIiA/IFwiKlwiIDogcGFyZW50UGF0aCArIFwiLypcIikgKyBcIlxcXCI+LlwiKSk7XG4gIH1cblxuICBsZXQgbG9jYXRpb25Gcm9tQ29udGV4dCA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCBsb2NhdGlvbjtcblxuICBpZiAobG9jYXRpb25BcmcpIHtcbiAgICB2YXIgX3BhcnNlZExvY2F0aW9uQXJnJHBhO1xuXG4gICAgbGV0IHBhcnNlZExvY2F0aW9uQXJnID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICAgICEocGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiB8fCAoKF9wYXJzZWRMb2NhdGlvbkFyZyRwYSA9IHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lKSA9PSBudWxsID8gdm9pZCAwIDogX3BhcnNlZExvY2F0aW9uQXJnJHBhLnN0YXJ0c1dpdGgocGFyZW50UGF0aG5hbWVCYXNlKSkpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJXaGVuIG92ZXJyaWRpbmcgdGhlIGxvY2F0aW9uIHVzaW5nIGA8Um91dGVzIGxvY2F0aW9uPmAgb3IgYHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKWAsIFwiICsgXCJ0aGUgbG9jYXRpb24gcGF0aG5hbWUgbXVzdCBiZWdpbiB3aXRoIHRoZSBwb3J0aW9uIG9mIHRoZSBVUkwgcGF0aG5hbWUgdGhhdCB3YXMgXCIgKyAoXCJtYXRjaGVkIGJ5IGFsbCBwYXJlbnQgcm91dGVzLiBUaGUgY3VycmVudCBwYXRobmFtZSBiYXNlIGlzIFxcXCJcIiArIHBhcmVudFBhdGhuYW1lQmFzZSArIFwiXFxcIiBcIikgKyAoXCJidXQgcGF0aG5hbWUgXFxcIlwiICsgcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUgKyBcIlxcXCIgd2FzIGdpdmVuIGluIHRoZSBgbG9jYXRpb25gIHByb3AuXCIpKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxvY2F0aW9uID0gcGFyc2VkTG9jYXRpb25Bcmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbkZyb21Db250ZXh0O1xuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCI7XG4gIGxldCByZW1haW5pbmdQYXRobmFtZSA9IHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKHBhcmVudFBhdGhuYW1lQmFzZS5sZW5ndGgpIHx8IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlcywge1xuICAgIHBhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcocGFyZW50Um91dGUgfHwgbWF0Y2hlcyAhPSBudWxsLCBcIk5vIHJvdXRlcyBtYXRjaGVkIGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBcIikgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX3dhcm5pbmcobWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB1bmRlZmluZWQgfHwgbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnJvdXRlLkNvbXBvbmVudCAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIgKyBcImRvZXMgbm90IGhhdmUgYW4gZWxlbWVudCBvciBDb21wb25lbnQuIFRoaXMgbWVhbnMgaXQgd2lsbCByZW5kZXIgYW4gPE91dGxldCAvPiB3aXRoIGEgXCIgKyBcIm51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzICYmIG1hdGNoZXMubWFwKG1hdGNoID0+IE9iamVjdC5hc3NpZ24oe30sIG1hdGNoLCB7XG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRQYXJhbXMsIG1hdGNoLnBhcmFtcyksXG4gICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZUJhc2UpLnBhdGhuYW1lIDogbWF0Y2gucGF0aG5hbWVCYXNlXSlcbiAgfSkpLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGUpOyAvLyBXaGVuIGEgdXNlciBwYXNzZXMgaW4gYSBgbG9jYXRpb25BcmdgLCB0aGUgYXNzb2NpYXRlZCByb3V0ZXMgbmVlZCB0b1xuICAvLyBiZSB3cmFwcGVkIGluIGEgbmV3IGBMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXJgIGluIG9yZGVyIGZvciBgdXNlTG9jYXRpb25gXG4gIC8vIHRvIHVzZSB0aGUgc2NvcGVkIGxvY2F0aW9uIGluc3RlYWQgb2YgdGhlIGdsb2JhbCBsb2NhdGlvbi5cblxuXG4gIGlmIChsb2NhdGlvbkFyZyAmJiByZW5kZXJlZE1hdGNoZXMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBsb2NhdGlvbjogX2V4dGVuZHMoe1xuICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICAgICAgaGFzaDogXCJcIixcbiAgICAgICAgICBzdGF0ZTogbnVsbCxcbiAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiXG4gICAgICAgIH0sIGxvY2F0aW9uKSxcbiAgICAgICAgbmF2aWdhdGlvblR5cGU6IEFjdGlvbi5Qb3BcbiAgICAgIH1cbiAgICB9LCByZW5kZXJlZE1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlbmRlcmVkTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gRGVmYXVsdEVycm9yQ29tcG9uZW50KCkge1xuICBsZXQgZXJyb3IgPSB1c2VSb3V0ZUVycm9yKCk7XG4gIGxldCBtZXNzYWdlID0gaXNSb3V0ZUVycm9yUmVzcG9uc2UoZXJyb3IpID8gZXJyb3Iuc3RhdHVzICsgXCIgXCIgKyBlcnJvci5zdGF0dXNUZXh0IDogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShlcnJvcik7XG4gIGxldCBzdGFjayA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5zdGFjayA6IG51bGw7XG4gIGxldCBsaWdodGdyZXkgPSBcInJnYmEoMjAwLDIwMCwyMDAsIDAuNSlcIjtcbiAgbGV0IHByZVN0eWxlcyA9IHtcbiAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHRncmV5XG4gIH07XG4gIGxldCBjb2RlU3R5bGVzID0ge1xuICAgIHBhZGRpbmc6IFwiMnB4IDRweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHRncmV5XG4gIH07XG4gIGxldCBkZXZJbmZvID0gbnVsbDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGhhbmRsZWQgYnkgUmVhY3QgUm91dGVyIGRlZmF1bHQgRXJyb3JCb3VuZGFyeTpcIiwgZXJyb3IpO1xuICAgIGRldkluZm8gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiXFx1RDgzRFxcdURDQkYgSGV5IGRldmVsb3BlciBcXHVEODNEXFx1REM0QlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiWW91IGNhbiBwcm92aWRlIGEgd2F5IGJldHRlciBVWCB0aGFuIHRoaXMgd2hlbiB5b3VyIGFwcCB0aHJvd3MgZXJyb3JzIGJ5IHByb3ZpZGluZyB5b3VyIG93biBcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHtcbiAgICAgIHN0eWxlOiBjb2RlU3R5bGVzXG4gICAgfSwgXCJFcnJvckJvdW5kYXJ5XCIpLCBcIiBvclwiLCBcIiBcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHtcbiAgICAgIHN0eWxlOiBjb2RlU3R5bGVzXG4gICAgfSwgXCJlcnJvckVsZW1lbnRcIiksIFwiIHByb3Agb24geW91ciByb3V0ZS5cIikpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiVW5leHBlY3RlZCBBcHBsaWNhdGlvbiBFcnJvciFcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICB9XG4gIH0sIG1lc3NhZ2UpLCBzdGFjayA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHtcbiAgICBzdHlsZTogcHJlU3R5bGVzXG4gIH0sIHN0YWNrKSA6IG51bGwsIGRldkluZm8pO1xufVxuXG5jb25zdCBkZWZhdWx0RXJyb3JFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdEVycm9yQ29tcG9uZW50LCBudWxsKTtcbmNsYXNzIFJlbmRlckVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uLFxuICAgICAgcmV2YWxpZGF0aW9uOiBwcm9wcy5yZXZhbGlkYXRpb24sXG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAvLyBXaGVuIHdlIGdldCBpbnRvIGFuIGVycm9yIHN0YXRlLCB0aGUgdXNlciB3aWxsIGxpa2VseSBjbGljayBcImJhY2tcIiB0byB0aGVcbiAgICAvLyBwcmV2aW91cyBwYWdlIHRoYXQgZGlkbid0IGhhdmUgYW4gZXJyb3IuIEJlY2F1c2UgdGhpcyB3cmFwcyB0aGUgZW50aXJlXG4gICAgLy8gYXBwbGljYXRpb24sIHRoYXQgd2lsbCBoYXZlIG5vIGVmZmVjdC0tdGhlIGVycm9yIHBhZ2UgY29udGludWVzIHRvIGRpc3BsYXkuXG4gICAgLy8gVGhpcyBnaXZlcyB1cyBhIG1lY2hhbmlzbSB0byByZWNvdmVyIGZyb20gdGhlIGVycm9yIHdoZW4gdGhlIGxvY2F0aW9uIGNoYW5nZXMuXG4gICAgLy9cbiAgICAvLyBXaGV0aGVyIHdlJ3JlIGluIGFuIGVycm9yIHN0YXRlIG9yIG5vdCwgd2UgdXBkYXRlIHRoZSBsb2NhdGlvbiBpbiBzdGF0ZVxuICAgIC8vIHNvIHRoYXQgd2hlbiB3ZSBhcmUgaW4gYW4gZXJyb3Igc3RhdGUsIGl0IGdldHMgcmVzZXQgd2hlbiBhIG5ldyBsb2NhdGlvblxuICAgIC8vIGNvbWVzIGluIGFuZCB0aGUgdXNlciByZWNvdmVycyBmcm9tIHRoZSBlcnJvci5cbiAgICBpZiAoc3RhdGUubG9jYXRpb24gIT09IHByb3BzLmxvY2F0aW9uIHx8IHN0YXRlLnJldmFsaWRhdGlvbiAhPT0gXCJpZGxlXCIgJiYgcHJvcHMucmV2YWxpZGF0aW9uID09PSBcImlkbGVcIikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IHByb3BzLmVycm9yLFxuICAgICAgICBsb2NhdGlvbjogcHJvcHMubG9jYXRpb24sXG4gICAgICAgIHJldmFsaWRhdGlvbjogcHJvcHMucmV2YWxpZGF0aW9uXG4gICAgICB9O1xuICAgIH0gLy8gSWYgd2UncmUgbm90IGNoYW5naW5nIGxvY2F0aW9ucywgcHJlc2VydmUgdGhlIGxvY2F0aW9uIGJ1dCBzdGlsbCBzdXJmYWNlXG4gICAgLy8gYW55IG5ldyBlcnJvcnMgdGhhdCBtYXkgY29tZSB0aHJvdWdoLiBXZSByZXRhaW4gdGhlIGV4aXN0aW5nIGVycm9yLCB3ZSBkb1xuICAgIC8vIHRoaXMgYmVjYXVzZSB0aGUgZXJyb3IgcHJvdmlkZWQgZnJvbSB0aGUgYXBwIHN0YXRlIG1heSBiZSBjbGVhcmVkIHdpdGhvdXRcbiAgICAvLyB0aGUgbG9jYXRpb24gY2hhbmdpbmcuXG5cblxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3IgfHwgc3RhdGUuZXJyb3IsXG4gICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgICByZXZhbGlkYXRpb246IHByb3BzLnJldmFsaWRhdGlvbiB8fCBzdGF0ZS5yZXZhbGlkYXRpb25cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZWFjdCBSb3V0ZXIgY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5lcnJvciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMucm91dGVDb250ZXh0XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVFcnJvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmVycm9yLFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgfSkpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIFJlbmRlcmVkUm91dGUoX3JlZikge1xuICBsZXQge1xuICAgIHJvdXRlQ29udGV4dCxcbiAgICBtYXRjaCxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7IC8vIFRyYWNrIGhvdyBkZWVwIHdlIGdvdCBpbiBvdXIgcmVuZGVyIHBhc3MgdG8gZW11bGF0ZSBTU1IgY29tcG9uZW50RGlkQ2F0Y2hcbiAgLy8gaW4gYSBEYXRhU3RhdGljUm91dGVyXG5cbiAgaWYgKGRhdGFSb3V0ZXJDb250ZXh0ICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpYyAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0ICYmIChtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgbWF0Y2gucm91dGUuRXJyb3JCb3VuZGFyeSkpIHtcbiAgICBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0Ll9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkID0gbWF0Y2gucm91dGUuaWQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHJvdXRlQ29udGV4dFxuICB9LCBjaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMsIHBhcmVudE1hdGNoZXMsIGRhdGFSb3V0ZXJTdGF0ZSkge1xuICB2YXIgX2RhdGFSb3V0ZXJTdGF0ZTI7XG5cbiAgaWYgKHBhcmVudE1hdGNoZXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChkYXRhUm91dGVyU3RhdGUgPT09IHZvaWQgMCkge1xuICAgIGRhdGFSb3V0ZXJTdGF0ZSA9IG51bGw7XG4gIH1cblxuICBpZiAobWF0Y2hlcyA9PSBudWxsKSB7XG4gICAgdmFyIF9kYXRhUm91dGVyU3RhdGU7XG5cbiAgICBpZiAoKF9kYXRhUm91dGVyU3RhdGUgPSBkYXRhUm91dGVyU3RhdGUpICE9IG51bGwgJiYgX2RhdGFSb3V0ZXJTdGF0ZS5lcnJvcnMpIHtcbiAgICAgIC8vIERvbid0IGJhaWwgaWYgd2UgaGF2ZSBkYXRhIHJvdXRlciBlcnJvcnMgc28gd2UgY2FuIHJlbmRlciB0aGVtIGluIHRoZVxuICAgICAgLy8gYm91bmRhcnkuICBVc2UgdGhlIHByZS1tYXRjaGVkIChvciBzaGltbWVkKSBtYXRjaGVzXG4gICAgICBtYXRjaGVzID0gZGF0YVJvdXRlclN0YXRlLm1hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBtYXRjaGVzOyAvLyBJZiB3ZSBoYXZlIGRhdGEgZXJyb3JzLCB0cmltIG1hdGNoZXMgdG8gdGhlIGhpZ2hlc3QgZXJyb3IgYm91bmRhcnlcblxuICBsZXQgZXJyb3JzID0gKF9kYXRhUm91dGVyU3RhdGUyID0gZGF0YVJvdXRlclN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2RhdGFSb3V0ZXJTdGF0ZTIuZXJyb3JzO1xuXG4gIGlmIChlcnJvcnMgIT0gbnVsbCkge1xuICAgIGxldCBlcnJvckluZGV4ID0gcmVuZGVyZWRNYXRjaGVzLmZpbmRJbmRleChtID0+IG0ucm91dGUuaWQgJiYgKGVycm9ycyA9PSBudWxsID8gdm9pZCAwIDogZXJyb3JzW20ucm91dGUuaWRdKSk7XG4gICAgIShlcnJvckluZGV4ID49IDApID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJDb3VsZCBub3QgZmluZCBhIG1hdGNoaW5nIHJvdXRlIGZvciBlcnJvcnMgb24gcm91dGUgSURzOiBcIiArIE9iamVjdC5rZXlzKGVycm9ycykuam9pbihcIixcIikpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgcmVuZGVyZWRNYXRjaGVzID0gcmVuZGVyZWRNYXRjaGVzLnNsaWNlKDAsIE1hdGgubWluKHJlbmRlcmVkTWF0Y2hlcy5sZW5ndGgsIGVycm9ySW5kZXggKyAxKSk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZWRNYXRjaGVzLnJlZHVjZVJpZ2h0KChvdXRsZXQsIG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGxldCBlcnJvciA9IG1hdGNoLnJvdXRlLmlkID8gZXJyb3JzID09IG51bGwgPyB2b2lkIDAgOiBlcnJvcnNbbWF0Y2gucm91dGUuaWRdIDogbnVsbDsgLy8gT25seSBkYXRhIHJvdXRlcnMgaGFuZGxlIGVycm9yc1xuXG4gICAgbGV0IGVycm9yRWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlKSB7XG4gICAgICBlcnJvckVsZW1lbnQgPSBtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgZGVmYXVsdEVycm9yRWxlbWVudDtcbiAgICB9XG5cbiAgICBsZXQgbWF0Y2hlcyA9IHBhcmVudE1hdGNoZXMuY29uY2F0KHJlbmRlcmVkTWF0Y2hlcy5zbGljZSgwLCBpbmRleCArIDEpKTtcblxuICAgIGxldCBnZXRDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgIGxldCBjaGlsZHJlbjtcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGNoaWxkcmVuID0gZXJyb3JFbGVtZW50O1xuICAgICAgfSBlbHNlIGlmIChtYXRjaC5yb3V0ZS5Db21wb25lbnQpIHtcbiAgICAgICAgLy8gTm90ZTogVGhpcyBpcyBhIGRlLW9wdGltaXplZCBwYXRoIHNpbmNlIFJlYWN0IHdvbid0IHJlLXVzZSB0aGVcbiAgICAgICAgLy8gUmVhY3RFbGVtZW50IHNpbmNlIGl0J3MgaWRlbnRpdHkgY2hhbmdlcyB3aXRoIGVhY2ggbmV3XG4gICAgICAgIC8vIFJlYWN0LmNyZWF0ZUVsZW1lbnQgY2FsbC4gIFdlIGtlZXAgdGhpcyBzbyBmb2xrcyBjYW4gdXNlXG4gICAgICAgIC8vIGA8Um91dGUgQ29tcG9uZW50PXsuLi59PmAgaW4gYDxSb3V0ZXM+YCBidXQgZ2VuZXJhbGx5IGBDb21wb25lbnRgXG4gICAgICAgIC8vIHVzYWdlIGlzIG9ubHkgYWR2aXNlZCBpbiBgUm91dGVyUHJvdmlkZXJgIHdoZW4gd2UgY2FuIGNvbnZlcnQgaXQgdG9cbiAgICAgICAgLy8gYGVsZW1lbnRgIGFoZWFkIG9mIHRpbWUuXG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQobWF0Y2gucm91dGUuQ29tcG9uZW50LCBudWxsKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2gucm91dGUuZWxlbWVudCkge1xuICAgICAgICBjaGlsZHJlbiA9IG1hdGNoLnJvdXRlLmVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZHJlbiA9IG91dGxldDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlcmVkUm91dGUsIHtcbiAgICAgICAgbWF0Y2g6IG1hdGNoLFxuICAgICAgICByb3V0ZUNvbnRleHQ6IHtcbiAgICAgICAgICBvdXRsZXQsXG4gICAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgICBpc0RhdGFSb3V0ZTogZGF0YVJvdXRlclN0YXRlICE9IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9OyAvLyBPbmx5IHdyYXAgaW4gYW4gZXJyb3IgYm91bmRhcnkgd2l0aGluIGRhdGEgcm91dGVyIHVzYWdlcyB3aGVuIHdlIGhhdmUgYW5cbiAgICAvLyBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudCBvbiB0aGlzIHJvdXRlLiAgT3RoZXJ3aXNlIGxldCBpdCBidWJibGUgdXAgdG9cbiAgICAvLyBhbiBhbmNlc3RvciBFcnJvckJvdW5kYXJ5L2Vycm9yRWxlbWVudFxuXG5cbiAgICByZXR1cm4gZGF0YVJvdXRlclN0YXRlICYmIChtYXRjaC5yb3V0ZS5FcnJvckJvdW5kYXJ5IHx8IG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudCB8fCBpbmRleCA9PT0gMCkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJFcnJvckJvdW5kYXJ5LCB7XG4gICAgICBsb2NhdGlvbjogZGF0YVJvdXRlclN0YXRlLmxvY2F0aW9uLFxuICAgICAgcmV2YWxpZGF0aW9uOiBkYXRhUm91dGVyU3RhdGUucmV2YWxpZGF0aW9uLFxuICAgICAgY29tcG9uZW50OiBlcnJvckVsZW1lbnQsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oKSxcbiAgICAgIHJvdXRlQ29udGV4dDoge1xuICAgICAgICBvdXRsZXQ6IG51bGwsXG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGlzRGF0YVJvdXRlOiB0cnVlXG4gICAgICB9XG4gICAgfSkgOiBnZXRDaGlsZHJlbigpO1xuICB9LCBudWxsKTtcbn1cbnZhciBEYXRhUm91dGVySG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVySG9vaykge1xuICBEYXRhUm91dGVySG9va1tcIlVzZUJsb2NrZXJcIl0gPSBcInVzZUJsb2NrZXJcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VSZXZhbGlkYXRvclwiXSA9IFwidXNlUmV2YWxpZGF0b3JcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VOYXZpZ2F0ZVN0YWJsZVwiXSA9IFwidXNlTmF2aWdhdGVcIjtcbn0pKERhdGFSb3V0ZXJIb29rIHx8IChEYXRhUm91dGVySG9vayA9IHt9KSk7XG5cbnZhciBEYXRhUm91dGVyU3RhdGVIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJTdGF0ZUhvb2spIHtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUJsb2NrZXJcIl0gPSBcInVzZUJsb2NrZXJcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUxvYWRlckRhdGFcIl0gPSBcInVzZUxvYWRlckRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZUFjdGlvbkRhdGFcIl0gPSBcInVzZUFjdGlvbkRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJvdXRlRXJyb3JcIl0gPSBcInVzZVJvdXRlRXJyb3JcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU5hdmlnYXRpb25cIl0gPSBcInVzZU5hdmlnYXRpb25cIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJvdXRlTG9hZGVyRGF0YVwiXSA9IFwidXNlUm91dGVMb2FkZXJEYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VNYXRjaGVzXCJdID0gXCJ1c2VNYXRjaGVzXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSZXZhbGlkYXRvclwiXSA9IFwidXNlUmV2YWxpZGF0b3JcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU5hdmlnYXRlU3RhYmxlXCJdID0gXCJ1c2VOYXZpZ2F0ZVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVJZFwiXSA9IFwidXNlUm91dGVJZFwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpO1xuICAhY3R4ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjdHg7XG59XG5cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICAhc3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHJvdXRlO1xufSAvLyBJbnRlcm5hbCB2ZXJzaW9uIHdpdGggaG9va05hbWUtYXdhcmUgZGVidWdnaW5nXG5cblxuZnVuY3Rpb24gdXNlQ3VycmVudFJvdXRlSWQoaG9va05hbWUpIHtcbiAgbGV0IHJvdXRlID0gdXNlUm91dGVDb250ZXh0KGhvb2tOYW1lKTtcbiAgbGV0IHRoaXNSb3V0ZSA9IHJvdXRlLm1hdGNoZXNbcm91dGUubWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgIXRoaXNSb3V0ZS5yb3V0ZS5pZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIGhvb2tOYW1lICsgXCIgY2FuIG9ubHkgYmUgdXNlZCBvbiByb3V0ZXMgdGhhdCBjb250YWluIGEgdW5pcXVlIFxcXCJpZFxcXCJcIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHRoaXNSb3V0ZS5yb3V0ZS5pZDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgSUQgZm9yIHRoZSBuZWFyZXN0IGNvbnRleHR1YWwgcm91dGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHVzZVJvdXRlSWQoKSB7XG4gIHJldHVybiB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlSWQpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24sIGRlZmF1bHRpbmcgdG8gYW4gXCJpZGxlXCIgbmF2aWdhdGlvbiB3aGVuXG4gKiBubyBuYXZpZ2F0aW9uIGlzIGluIHByb2dyZXNzXG4gKi9cblxuZnVuY3Rpb24gdXNlTmF2aWdhdGlvbigpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTmF2aWdhdGlvbik7XG4gIHJldHVybiBzdGF0ZS5uYXZpZ2F0aW9uO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmV2YWxpZGF0ZSBmdW5jdGlvbiBmb3IgbWFudWFsbHkgdHJpZ2dlcmluZyByZXZhbGlkYXRpb24sIGFzIHdlbGxcbiAqIGFzIHRoZSBjdXJyZW50IHN0YXRlIG9mIGFueSBtYW51YWwgcmV2YWxpZGF0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHVzZVJldmFsaWRhdG9yKCkge1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VSZXZhbGlkYXRvcik7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJldmFsaWRhdG9yKTtcbiAgcmV0dXJuIHtcbiAgICByZXZhbGlkYXRlOiBkYXRhUm91dGVyQ29udGV4dC5yb3V0ZXIucmV2YWxpZGF0ZSxcbiAgICBzdGF0ZTogc3RhdGUucmV2YWxpZGF0aW9uXG4gIH07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGFjdGl2ZSByb3V0ZSBtYXRjaGVzLCB1c2VmdWwgZm9yIGFjY2Vzc2luZyBsb2FkZXJEYXRhIGZvclxuICogcGFyZW50L2NoaWxkIHJvdXRlcyBvciB0aGUgcm91dGUgXCJoYW5kbGVcIiBwcm9wZXJ0eVxuICovXG5cbmZ1bmN0aW9uIHVzZU1hdGNoZXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlcyxcbiAgICBsb2FkZXJEYXRhXG4gIH0gPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VNYXRjaGVzKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xuICAgIGxldCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBtYXRjaDsgLy8gTm90ZTogVGhpcyBzdHJ1Y3R1cmUgbWF0Y2hlcyB0aGF0IGNyZWF0ZWQgYnkgY3JlYXRlVXNlTWF0Y2hlc01hdGNoXG4gICAgLy8gaW4gdGhlIEByZW1peC1ydW4vcm91dGVyICwgc28gaWYgeW91IGNoYW5nZSB0aGlzIHBsZWFzZSBhbHNvIGNoYW5nZVxuICAgIC8vIHRoYXQgOikgIEV2ZW50dWFsbHkgd2UnbGwgRFJZIHRoaXMgdXBcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogbWF0Y2gucm91dGUuaWQsXG4gICAgICBwYXRobmFtZSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGRhdGE6IGxvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdLFxuICAgICAgaGFuZGxlOiBtYXRjaC5yb3V0ZS5oYW5kbGVcbiAgICB9O1xuICB9KSwgW21hdGNoZXMsIGxvYWRlckRhdGFdKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbG9hZGVyIGRhdGEgZm9yIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGxvYWRlclxuICovXG5cbmZ1bmN0aW9uIHVzZUxvYWRlckRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUxvYWRlckRhdGEpO1xuICBsZXQgcm91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTG9hZGVyRGF0YSk7XG5cbiAgaWYgKHN0YXRlLmVycm9ycyAmJiBzdGF0ZS5lcnJvcnNbcm91dGVJZF0gIT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgY2Fubm90IGB1c2VMb2FkZXJEYXRhYCBpbiBhbiBlcnJvckVsZW1lbnQgKHJvdXRlSWQ6IFwiICsgcm91dGVJZCArIFwiKVwiKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlLmxvYWRlckRhdGFbcm91dGVJZF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGxvYWRlckRhdGEgZm9yIHRoZSBnaXZlbiByb3V0ZUlkXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVMb2FkZXJEYXRhKHJvdXRlSWQpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVMb2FkZXJEYXRhKTtcbiAgcmV0dXJuIHN0YXRlLmxvYWRlckRhdGFbcm91dGVJZF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGFjdGlvbiBkYXRhIGZvciB0aGUgbmVhcmVzdCBhbmNlc3RvciBSb3V0ZSBhY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiB1c2VBY3Rpb25EYXRhKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VBY3Rpb25EYXRhKTtcbiAgbGV0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcInVzZUFjdGlvbkRhdGEgbXVzdCBiZSB1c2VkIGluc2lkZSBhIFJvdXRlQ29udGV4dFwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcygoc3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IHN0YXRlLmFjdGlvbkRhdGEpIHx8IHt9KVswXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmVhcmVzdCBhbmNlc3RvciBSb3V0ZSBlcnJvciwgd2hpY2ggY291bGQgYmUgYSBsb2FkZXIvYWN0aW9uXG4gKiBlcnJvciBvciBhIHJlbmRlciBlcnJvci4gIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgY2FsbGVkIGZyb20geW91clxuICogRXJyb3JCb3VuZGFyeS9lcnJvckVsZW1lbnQgdG8gZGlzcGxheSBhIHByb3BlciBlcnJvciBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIHVzZVJvdXRlRXJyb3IoKSB7XG4gIHZhciBfc3RhdGUkZXJyb3JzO1xuXG4gIGxldCBlcnJvciA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVFcnJvckNvbnRleHQpO1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUVycm9yKTtcbiAgbGV0IHJvdXRlSWQgPSB1c2VDdXJyZW50Um91dGVJZChEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlRXJyb3IpOyAvLyBJZiB0aGlzIHdhcyBhIHJlbmRlciBlcnJvciwgd2UgcHV0IGl0IGluIGEgUm91dGVFcnJvciBjb250ZXh0IGluc2lkZVxuICAvLyBvZiBSZW5kZXJFcnJvckJvdW5kYXJ5XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yO1xuICB9IC8vIE90aGVyd2lzZSBsb29rIGZvciBlcnJvcnMgZnJvbSBvdXIgZGF0YSByb3V0ZXIgc3RhdGVcblxuXG4gIHJldHVybiAoX3N0YXRlJGVycm9ycyA9IHN0YXRlLmVycm9ycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9zdGF0ZSRlcnJvcnNbcm91dGVJZF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGhhcHB5LXBhdGggZGF0YSBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIDxBd2FpdCAvPiB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHVzZUFzeW5jVmFsdWUoKSB7XG4gIGxldCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQXdhaXRDb250ZXh0KTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB2b2lkIDAgOiB2YWx1ZS5fZGF0YTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZXJyb3IgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciA8QXdhaXQgLz4gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VBc3luY0Vycm9yKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuX2Vycm9yO1xufVxubGV0IGJsb2NrZXJJZCA9IDA7XG4vKipcbiAqIEFsbG93IHRoZSBhcHBsaWNhdGlvbiB0byBibG9jayBuYXZpZ2F0aW9ucyB3aXRoaW4gdGhlIFNQQSBhbmQgcHJlc2VudCB0aGVcbiAqIHVzZXIgYSBjb25maXJtYXRpb24gZGlhbG9nIHRvIGNvbmZpcm0gdGhlIG5hdmlnYXRpb24uICBNb3N0bHkgdXNlZCB0byBhdm9pZFxuICogdXNpbmcgaGFsZi1maWxsZWQgZm9ybSBkYXRhLiAgVGhpcyBkb2VzIG5vdCBoYW5kbGUgaGFyZC1yZWxvYWRzIG9yXG4gKiBjcm9zcy1vcmlnaW4gbmF2aWdhdGlvbnMuXG4gKi9cblxuZnVuY3Rpb24gdXNlQmxvY2tlcihzaG91bGRCbG9jaykge1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlQmxvY2tlcik7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUJsb2NrZXIpO1xuICBsZXQgW2Jsb2NrZXJLZXldID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gU3RyaW5nKCsrYmxvY2tlcklkKSk7XG4gIGxldCBibG9ja2VyRnVuY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhhcmdzID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHNob3VsZEJsb2NrID09PSBcImZ1bmN0aW9uXCIgPyAhIXNob3VsZEJsb2NrKGFyZ3MpIDogISFzaG91bGRCbG9jaztcbiAgfSwgW3Nob3VsZEJsb2NrXSk7XG4gIGxldCBibG9ja2VyID0gcm91dGVyLmdldEJsb2NrZXIoYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uKTsgLy8gQ2xlYW51cCBvbiB1bm1vdW50XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+ICgpID0+IHJvdXRlci5kZWxldGVCbG9ja2VyKGJsb2NrZXJLZXkpLCBbcm91dGVyLCBibG9ja2VyS2V5XSk7IC8vIFByZWZlciB0aGUgYmxvY2tlciBmcm9tIHN0YXRlIHNpbmNlIERhdGFSb3V0ZXJDb250ZXh0IGlzIG1lbW9pemVkIHNvIHRoaXNcbiAgLy8gZW5zdXJlcyB3ZSB1cGRhdGUgb24gYmxvY2tlciBzdGF0ZSB1cGRhdGVzXG5cbiAgcmV0dXJuIHN0YXRlLmJsb2NrZXJzLmdldChibG9ja2VyS2V5KSB8fCBibG9ja2VyO1xufVxuLyoqXG4gKiBTdGFibGUgdmVyc2lvbiBvZiB1c2VOYXZpZ2F0ZSB0aGF0IGlzIHVzZWQgd2hlbiB3ZSBhcmUgaW4gdGhlIGNvbnRleHQgb2ZcbiAqIGEgUm91dGVyUHJvdmlkZXIuXG4gKi9cblxuZnVuY3Rpb24gdXNlTmF2aWdhdGVTdGFibGUoKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VOYXZpZ2F0ZVN0YWJsZSk7XG4gIGxldCBpZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTmF2aWdhdGVTdGFibGUpO1xuICBsZXQgYWN0aXZlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgYWN0aXZlUmVmLmN1cnJlbnQgPSB0cnVlO1xuICB9KTtcbiAgbGV0IG5hdmlnYXRlID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRvLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBuYXZpZ2F0ZUVmZmVjdFdhcm5pbmcpIDogdm9pZCAwOyAvLyBTaG9ydCBjaXJjdWl0IGhlcmUgc2luY2UgaWYgdGhpcyBoYXBwZW5zIG9uIGZpcnN0IHJlbmRlciB0aGUgbmF2aWdhdGVcbiAgICAvLyBpcyB1c2VsZXNzIGJlY2F1c2Ugd2UgaGF2ZW4ndCB3aXJlZCB1cCBvdXIgcm91dGVyIHN1YnNjcmliZXIgeWV0XG5cbiAgICBpZiAoIWFjdGl2ZVJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUodG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIubmF2aWdhdGUodG8sIF9leHRlbmRzKHtcbiAgICAgICAgZnJvbVJvdXRlSWQ6IGlkXG4gICAgICB9LCBvcHRpb25zKSk7XG4gICAgfVxuICB9LCBbcm91dGVyLCBpZF0pO1xuICByZXR1cm4gbmF2aWdhdGU7XG59XG5cbmNvbnN0IGFscmVhZHlXYXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gIH1cbn1cblxuLyoqXG4gKiBHaXZlbiBhIFJlbWl4IFJvdXRlciBpbnN0YW5jZSwgcmVuZGVyIHRoZSBhcHByb3ByaWF0ZSBVSVxuICovXG5mdW5jdGlvbiBSb3V0ZXJQcm92aWRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgZmFsbGJhY2tFbGVtZW50LFxuICAgIHJvdXRlclxuICB9ID0gX3JlZjtcbiAgLy8gTmVlZCB0byB1c2UgYSBsYXlvdXQgZWZmZWN0IGhlcmUgc28gd2UgYXJlIHN1YnNjcmliZWQgZWFybHkgZW5vdWdoIHRvXG4gIC8vIHBpY2sgdXAgb24gYW55IHJlbmRlci1kcml2ZW4gcmVkaXJlY3RzL25hdmlnYXRpb25zICh1c2VFZmZlY3QvPE5hdmlnYXRlPilcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUocm91dGVyLnN0YXRlKTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHJvdXRlci5zdWJzY3JpYmUoc2V0U3RhdGUpLCBbcm91dGVyLCBzZXRTdGF0ZV0pO1xuICBsZXQgbmF2aWdhdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiBuID0+IHJvdXRlci5uYXZpZ2F0ZShuKSxcbiAgICAgIHB1c2g6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlLCBvcHRzKSA9PiByb3V0ZXIubmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pXG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuICBsZXQgYmFzZW5hbWUgPSByb3V0ZXIuYmFzZW5hbWUgfHwgXCIvXCI7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICByb3V0ZXIsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogZmFsc2UsXG4gICAgYmFzZW5hbWVcbiAgfSksIFtyb3V0ZXIsIG5hdmlnYXRvciwgYmFzZW5hbWVdKTsgLy8gVGhlIGZyYWdtZW50IGFuZCB7bnVsbH0gaGVyZSBhcmUgaW1wb3J0YW50ISAgV2UgbmVlZCB0aGVtIHRvIGtlZXAgUmVhY3QgMTgnc1xuICAvLyB1c2VJZCBoYXBweSB3aGVuIHdlIGFyZSBzZXJ2ZXItcmVuZGVyaW5nIHNpbmNlIHdlIG1heSBoYXZlIGEgPHNjcmlwdD4gaGVyZVxuICAvLyBjb250YWluaW5nIHRoZSBoeWRyYXRlZCBzZXJ2ZXItc2lkZSBzdGF0aWNDb250ZXh0IChmcm9tIFN0YXRpY1JvdXRlclByb3ZpZGVyKS5cbiAgLy8gdXNlSWQgcmVsaWVzIG9uIHRoZSBjb21wb25lbnQgdHJlZSBzdHJ1Y3R1cmUgdG8gZ2VuZXJhdGUgZGV0ZXJtaW5pc3RpYyBpZCdzXG4gIC8vIHNvIHdlIG5lZWQgdG8gZW5zdXJlIGl0IHJlbWFpbnMgdGhlIHNhbWUgb24gdGhlIGNsaWVudCBldmVuIHRob3VnaFxuICAvLyB3ZSBkb24ndCBuZWVkIHRoZSA8c2NyaXB0PiB0YWdcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGRhdGFSb3V0ZXJDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3RhdGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IHJvdXRlci5iYXNlbmFtZSxcbiAgICBsb2NhdGlvbjogcm91dGVyLnN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiByb3V0ZXIuc3RhdGUuaGlzdG9yeUFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IG5hdmlnYXRvclxuICB9LCByb3V0ZXIuc3RhdGUuaW5pdGlhbGl6ZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEYXRhUm91dGVzLCB7XG4gICAgcm91dGVzOiByb3V0ZXIucm91dGVzLFxuICAgIHN0YXRlOiBzdGF0ZVxuICB9KSA6IGZhbGxiYWNrRWxlbWVudCkpKSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIERhdGFSb3V0ZXMoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXMsXG4gICAgc3RhdGVcbiAgfSA9IF9yZWYyO1xuICByZXR1cm4gdXNlUm91dGVzSW1wbChyb3V0ZXMsIHVuZGVmaW5lZCwgc3RhdGUpO1xufVxuXG4vKipcbiAqIEEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgYWxsIGVudHJpZXMgaW4gbWVtb3J5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvbWVtb3J5LXJvdXRlclxuICovXG5mdW5jdGlvbiBNZW1vcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbml0aWFsRW50cmllcyxcbiAgICBpbml0aWFsSW5kZXhcbiAgfSA9IF9yZWYzO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXgsXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBOb3RlOiBUaGlzIEFQSSBpcyBtb3N0bHkgdXNlZnVsIGluIFJlYWN0LkNvbXBvbmVudCBzdWJjbGFzc2VzIHRoYXQgYXJlIG5vdFxuICogYWJsZSB0byB1c2UgaG9va3MuIEluIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgdGhlXG4gKiBgdXNlTmF2aWdhdGVgIGhvb2sgaW5zdGVhZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gTmF2aWdhdGUoX3JlZjQpIHtcbiAgbGV0IHtcbiAgICB0byxcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHJlbGF0aXZlXG4gIH0gPSBfcmVmNDtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2ZcbiAgLy8gdGhlIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCI8TmF2aWdhdGU+IG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKCFSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KS5zdGF0aWMsIFwiPE5hdmlnYXRlPiBtdXN0IG5vdCBiZSB1c2VkIG9uIHRoZSBpbml0aWFsIHJlbmRlciBpbiBhIDxTdGF0aWNSb3V0ZXI+LiBcIiArIFwiVGhpcyBpcyBhIG5vLW9wLCBidXQgeW91IHNob3VsZCBtb2RpZnkgeW91ciBjb2RlIHNvIHRoZSA8TmF2aWdhdGU+IGlzIFwiICsgXCJvbmx5IGV2ZXIgcmVuZGVyZWQgaW4gcmVzcG9uc2UgdG8gc29tZSB1c2VyIGludGVyYWN0aW9uIG9yIHN0YXRlIGNoYW5nZS5cIikgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpOyAvLyBSZXNvbHZlIHRoZSBwYXRoIG91dHNpZGUgb2YgdGhlIGVmZmVjdCBzbyB0aGF0IHdoZW4gZWZmZWN0cyBydW4gdHdpY2UgaW5cbiAgLy8gU3RyaWN0TW9kZSB0aGV5IG5hdmlnYXRlIHRvIHRoZSBzYW1lIHBsYWNlXG5cbiAgbGV0IHBhdGggPSByZXNvbHZlVG8odG8sIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKS5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKSwgbG9jYXRpb25QYXRobmFtZSwgcmVsYXRpdmUgPT09IFwicGF0aFwiKTtcbiAgbGV0IGpzb25QYXRoID0gSlNPTi5zdHJpbmdpZnkocGF0aCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBuYXZpZ2F0ZShKU09OLnBhcnNlKGpzb25QYXRoKSwge1xuICAgIHJlcGxhY2UsXG4gICAgc3RhdGUsXG4gICAgcmVsYXRpdmVcbiAgfSksIFtuYXZpZ2F0ZSwganNvblBhdGgsIHJlbGF0aXZlLCByZXBsYWNlLCBzdGF0ZV0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjaGlsZCByb3V0ZSdzIGVsZW1lbnQsIGlmIHRoZXJlIGlzIG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIE91dGxldChwcm9wcykge1xuICByZXR1cm4gdXNlT3V0bGV0KHByb3BzLmNvbnRleHQpO1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgYXQgYSBjZXJ0YWluIFVSTCBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9yb3V0ZVxuICovXG5mdW5jdGlvbiBSb3V0ZShfcHJvcHMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJBIDxSb3V0ZT4gaXMgb25seSBldmVyIHRvIGJlIHVzZWQgYXMgdGhlIGNoaWxkIG9mIDxSb3V0ZXM+IGVsZW1lbnQsIFwiICsgXCJuZXZlciByZW5kZXJlZCBkaXJlY3RseS4gUGxlYXNlIHdyYXAgeW91ciA8Um91dGU+IGluIGEgPFJvdXRlcz4uXCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGxvY2F0aW9uIGNvbnRleHQgZm9yIHRoZSByZXN0IG9mIHRoZSBhcHAuXG4gKlxuICogTm90ZTogWW91IHVzdWFsbHkgd29uJ3QgcmVuZGVyIGEgPFJvdXRlcj4gZGlyZWN0bHkuIEluc3RlYWQsIHlvdSdsbCByZW5kZXIgYVxuICogcm91dGVyIHRoYXQgaXMgbW9yZSBzcGVjaWZpYyB0byB5b3VyIGVudmlyb25tZW50IHN1Y2ggYXMgYSA8QnJvd3NlclJvdXRlcj5cbiAqIGluIHdlYiBicm93c2VycyBvciBhIDxTdGF0aWNSb3V0ZXI+IGZvciBzZXJ2ZXIgcmVuZGVyaW5nLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvcm91dGVyXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcihfcmVmNSkge1xuICBsZXQge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZVByb3AgPSBcIi9cIixcbiAgICBjaGlsZHJlbiA9IG51bGwsXG4gICAgbG9jYXRpb246IGxvY2F0aW9uUHJvcCxcbiAgICBuYXZpZ2F0aW9uVHlwZSA9IEFjdGlvbi5Qb3AsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcCA9IGZhbHNlXG4gIH0gPSBfcmVmNTtcbiAgISF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCByZW5kZXIgYSA8Um91dGVyPiBpbnNpZGUgYW5vdGhlciA8Um91dGVyPi5cIiArIFwiIFlvdSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIGluIHlvdXIgYXBwLlwiKSA6IFVOU0FGRV9pbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBQcmVzZXJ2ZSB0cmFpbGluZyBzbGFzaGVzIG9uIGJhc2VuYW1lLCBzbyB3ZSBjYW4gbGV0IHRoZSB1c2VyIGNvbnRyb2xcbiAgLy8gdGhlIGVuZm9yY2VtZW50IG9mIHRyYWlsaW5nIHNsYXNoZXMgdGhyb3VnaG91dCB0aGUgYXBwXG5cbiAgbGV0IGJhc2VuYW1lID0gYmFzZW5hbWVQcm9wLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuICBsZXQgbmF2aWdhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcFxuICB9KSwgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHN0YXRpY1Byb3BdKTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uUHJvcCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxvY2F0aW9uUHJvcCA9IHBhcnNlUGF0aChsb2NhdGlvblByb3ApO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCIsXG4gICAgc3RhdGUgPSBudWxsLFxuICAgIGtleSA9IFwiZGVmYXVsdFwiXG4gIH0gPSBsb2NhdGlvblByb3A7XG4gIGxldCBsb2NhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgdHJhaWxpbmdQYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUocGF0aG5hbWUsIGJhc2VuYW1lKTtcblxuICAgIGlmICh0cmFpbGluZ1BhdGhuYW1lID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBwYXRobmFtZTogdHJhaWxpbmdQYXRobmFtZSxcbiAgICAgICAgc2VhcmNoLFxuICAgICAgICBoYXNoLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAga2V5XG4gICAgICB9LFxuICAgICAgbmF2aWdhdGlvblR5cGVcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXksIG5hdmlnYXRpb25UeXBlXSk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFVOU0FGRV93YXJuaW5nKGxvY2F0aW9uQ29udGV4dCAhPSBudWxsLCBcIjxSb3V0ZXIgYmFzZW5hbWU9XFxcIlwiICsgYmFzZW5hbWUgKyBcIlxcXCI+IGlzIG5vdCBhYmxlIHRvIG1hdGNoIHRoZSBVUkwgXCIgKyAoXCJcXFwiXCIgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggKyBcIlxcXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBcIikgKyBcImJhc2VuYW1lLCBzbyB0aGUgPFJvdXRlcj4gd29uJ3QgcmVuZGVyIGFueXRoaW5nLlwiKSA6IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb25Db250ZXh0ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBuYXZpZ2F0aW9uQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgdmFsdWU6IGxvY2F0aW9uQ29udGV4dFxuICB9KSk7XG59XG5cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGEgbmVzdGVkIHRyZWUgb2YgPFJvdXRlPiBlbGVtZW50cyB0aGF0IHJlbmRlcnMgdGhlIGJyYW5jaFxuICogdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL3JvdXRlc1xuICovXG5mdW5jdGlvbiBSb3V0ZXMoX3JlZjYpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBsb2NhdGlvblxuICB9ID0gX3JlZjY7XG4gIHJldHVybiB1c2VSb3V0ZXMoY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKSwgbG9jYXRpb24pO1xufVxuXG4vKipcbiAqIENvbXBvbmVudCB0byB1c2UgZm9yIHJlbmRlcmluZyBsYXppbHkgbG9hZGVkIGRhdGEgZnJvbSByZXR1cm5pbmcgZGVmZXIoKVxuICogaW4gYSBsb2FkZXIgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gQXdhaXQoX3JlZjcpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvckVsZW1lbnQsXG4gICAgcmVzb2x2ZVxuICB9ID0gX3JlZjc7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdEVycm9yQm91bmRhcnksIHtcbiAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgIGVycm9yRWxlbWVudDogZXJyb3JFbGVtZW50XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlc29sdmVBd2FpdCwgbnVsbCwgY2hpbGRyZW4pKTtcbn1cbnZhciBBd2FpdFJlbmRlclN0YXR1cztcblxuKGZ1bmN0aW9uIChBd2FpdFJlbmRlclN0YXR1cykge1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInBlbmRpbmdcIl0gPSAwXSA9IFwicGVuZGluZ1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcInN1Y2Nlc3NcIl0gPSAxXSA9IFwic3VjY2Vzc1wiO1xuICBBd2FpdFJlbmRlclN0YXR1c1tBd2FpdFJlbmRlclN0YXR1c1tcImVycm9yXCJdID0gMl0gPSBcImVycm9yXCI7XG59KShBd2FpdFJlbmRlclN0YXR1cyB8fCAoQXdhaXRSZW5kZXJTdGF0dXMgPSB7fSkpO1xuXG5jb25zdCBuZXZlclNldHRsZWRQcm9taXNlID0gbmV3IFByb21pc2UoKCkgPT4ge30pO1xuXG5jbGFzcyBBd2FpdEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3I6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvclxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihcIjxBd2FpdD4gY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBlcnJvckVsZW1lbnQsXG4gICAgICByZXNvbHZlXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHByb21pc2UgPSBudWxsO1xuICAgIGxldCBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5wZW5kaW5nO1xuXG4gICAgaWYgKCEocmVzb2x2ZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAvLyBEaWRuJ3QgZ2V0IGEgcHJvbWlzZSAtIHByb3ZpZGUgYXMgYSByZXNvbHZlZCBwcm9taXNlXG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlc29sdmVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgLy8gQ2F1Z2h0IGEgcmVuZGVyIGVycm9yLCBwcm92aWRlIGl0IGFzIGEgcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3I7XG4gICAgICBsZXQgcmVuZGVyRXJyb3IgPSB0aGlzLnN0YXRlLmVycm9yO1xuICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KCkuY2F0Y2goKCkgPT4ge30pOyAvLyBBdm9pZCB1bmhhbmRsZWQgcmVqZWN0aW9uIHdhcm5pbmdzXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gcmVuZGVyRXJyb3JcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocmVzb2x2ZS5fdHJhY2tlZCkge1xuICAgICAgLy8gQWxyZWFkeSB0cmFja2VkIHByb21pc2UgLSBjaGVjayBjb250ZW50c1xuICAgICAgcHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICBzdGF0dXMgPSBwcm9taXNlLl9lcnJvciAhPT0gdW5kZWZpbmVkID8gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgOiBwcm9taXNlLl9kYXRhICE9PSB1bmRlZmluZWQgPyBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzIDogQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmF3ICh1bnRyYWNrZWQpIHByb21pc2UgLSB0cmFjayBpdFxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHByb21pc2UgPSByZXNvbHZlLnRoZW4oZGF0YSA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfZGF0YVwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZGF0YVxuICAgICAgfSksIGVycm9yID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciAmJiBwcm9taXNlLl9lcnJvciBpbnN0YW5jZW9mIEFib3J0ZWREZWZlcnJlZEVycm9yKSB7XG4gICAgICAvLyBGcmVlemUgdGhlIFVJIGJ5IHRocm93aW5nIGEgbmV2ZXIgcmVzb2x2ZWQgcHJvbWlzZVxuICAgICAgdGhyb3cgbmV2ZXJTZXR0bGVkUHJvbWlzZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciAmJiAhZXJyb3JFbGVtZW50KSB7XG4gICAgICAvLyBObyBlcnJvckVsZW1lbnQsIHRocm93IHRvIHRoZSBuZWFyZXN0IHJvdXRlLWxldmVsIGVycm9yIGJvdW5kYXJ5XG4gICAgICB0aHJvdyBwcm9taXNlLl9lcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvcikge1xuICAgICAgLy8gUmVuZGVyIHZpYSBvdXIgZXJyb3JFbGVtZW50XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBwcm9taXNlLFxuICAgICAgICBjaGlsZHJlbjogZXJyb3JFbGVtZW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdHVzID09PSBBd2FpdFJlbmRlclN0YXR1cy5zdWNjZXNzKSB7XG4gICAgICAvLyBSZW5kZXIgY2hpbGRyZW4gd2l0aCByZXNvbHZlZCB2YWx1ZVxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvbWlzZSxcbiAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICB9KTtcbiAgICB9IC8vIFRocm93IHRvIHRoZSBzdXNwZW5zZSBib3VuZGFyeVxuXG5cbiAgICB0aHJvdyBwcm9taXNlO1xuICB9XG5cbn1cbi8qKlxuICogQHByaXZhdGVcbiAqIEluZGlyZWN0aW9uIHRvIGxldmVyYWdlIHVzZUFzeW5jVmFsdWUgZm9yIGEgcmVuZGVyLXByb3AgQVBJIG9uIDxBd2FpdD5cbiAqL1xuXG5cbmZ1bmN0aW9uIFJlc29sdmVBd2FpdChfcmVmOCkge1xuICBsZXQge1xuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmODtcbiAgbGV0IGRhdGEgPSB1c2VBc3luY1ZhbHVlKCk7XG4gIGxldCB0b1JlbmRlciA9IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oZGF0YSkgOiBjaGlsZHJlbjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCB0b1JlbmRlcik7XG59IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFVUSUxTXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQ3JlYXRlcyBhIHJvdXRlIGNvbmZpZyBmcm9tIGEgUmVhY3QgXCJjaGlsZHJlblwiIG9iamVjdCwgd2hpY2ggaXMgdXN1YWxseVxuICogZWl0aGVyIGEgYDxSb3V0ZT5gIGVsZW1lbnQgb3IgYW4gYXJyYXkgb2YgdGhlbS4gVXNlZCBpbnRlcm5hbGx5IGJ5XG4gKiBgPFJvdXRlcz5gIHRvIGNyZWF0ZSBhIHJvdXRlIGNvbmZpZyBmcm9tIGl0cyBjaGlsZHJlbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL2NyZWF0ZS1yb3V0ZXMtZnJvbS1jaGlsZHJlblxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gW107XG4gIH1cblxuICBsZXQgcm91dGVzID0gW107XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChlbGVtZW50KSkge1xuICAgICAgLy8gSWdub3JlIG5vbi1lbGVtZW50cy4gVGhpcyBhbGxvd3MgcGVvcGxlIHRvIG1vcmUgZWFzaWx5IGlubGluZVxuICAgICAgLy8gY29uZGl0aW9uYWxzIGluIHRoZWlyIHJvdXRlIGNvbmZpZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdHJlZVBhdGggPSBbLi4ucGFyZW50UGF0aCwgaW5kZXhdO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICAgIC8vIFRyYW5zcGFyZW50bHkgc3VwcG9ydCBSZWFjdC5GcmFnbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgcm91dGVzLnB1c2guYXBwbHkocm91dGVzLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgdHJlZVBhdGgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQudHlwZSA9PT0gUm91dGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVU5TQUZFX2ludmFyaWFudChmYWxzZSwgXCJbXCIgKyAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gXCJzdHJpbmdcIiA/IGVsZW1lbnQudHlwZSA6IGVsZW1lbnQudHlwZS5uYW1lKSArIFwiXSBpcyBub3QgYSA8Um91dGU+IGNvbXBvbmVudC4gQWxsIGNvbXBvbmVudCBjaGlsZHJlbiBvZiA8Um91dGVzPiBtdXN0IGJlIGEgPFJvdXRlPiBvciA8UmVhY3QuRnJhZ21lbnQ+XCIpIDogVU5TQUZFX2ludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISghZWxlbWVudC5wcm9wcy5pbmRleCB8fCAhZWxlbWVudC5wcm9wcy5jaGlsZHJlbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfaW52YXJpYW50KGZhbHNlLCBcIkFuIGluZGV4IHJvdXRlIGNhbm5vdCBoYXZlIGNoaWxkIHJvdXRlcy5cIikgOiBVTlNBRkVfaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICBsZXQgcm91dGUgPSB7XG4gICAgICBpZDogZWxlbWVudC5wcm9wcy5pZCB8fCB0cmVlUGF0aC5qb2luKFwiLVwiKSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIENvbXBvbmVudDogZWxlbWVudC5wcm9wcy5Db21wb25lbnQsXG4gICAgICBpbmRleDogZWxlbWVudC5wcm9wcy5pbmRleCxcbiAgICAgIHBhdGg6IGVsZW1lbnQucHJvcHMucGF0aCxcbiAgICAgIGxvYWRlcjogZWxlbWVudC5wcm9wcy5sb2FkZXIsXG4gICAgICBhY3Rpb246IGVsZW1lbnQucHJvcHMuYWN0aW9uLFxuICAgICAgZXJyb3JFbGVtZW50OiBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCxcbiAgICAgIEVycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSxcbiAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuRXJyb3JCb3VuZGFyeSAhPSBudWxsIHx8IGVsZW1lbnQucHJvcHMuZXJyb3JFbGVtZW50ICE9IG51bGwsXG4gICAgICBzaG91bGRSZXZhbGlkYXRlOiBlbGVtZW50LnByb3BzLnNob3VsZFJldmFsaWRhdGUsXG4gICAgICBoYW5kbGU6IGVsZW1lbnQucHJvcHMuaGFuZGxlLFxuICAgICAgbGF6eTogZWxlbWVudC5wcm9wcy5sYXp5XG4gICAgfTtcblxuICAgIGlmIChlbGVtZW50LnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihlbGVtZW50LnByb3BzLmNoaWxkcmVuLCB0cmVlUGF0aCk7XG4gICAgfVxuXG4gICAgcm91dGVzLnB1c2gocm91dGUpO1xuICB9KTtcbiAgcmV0dXJuIHJvdXRlcztcbn1cbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IG9mIGBtYXRjaFJvdXRlcygpYCBpbnRvIGEgUmVhY3QgZWxlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMpO1xufVxuXG5mdW5jdGlvbiBtYXBSb3V0ZVByb3BlcnRpZXMocm91dGUpIHtcbiAgbGV0IHVwZGF0ZXMgPSB7XG4gICAgLy8gTm90ZTogdGhpcyBjaGVjayBhbHNvIG9jY3VycyBpbiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4gc28gdXBkYXRlXG4gICAgLy8gdGhlcmUgaWYgeW91IGNoYW5nZSB0aGlzIC0tIHBsZWFzZSBhbmQgdGhhbmsgeW91IVxuICAgIGhhc0Vycm9yQm91bmRhcnk6IHJvdXRlLkVycm9yQm91bmRhcnkgIT0gbnVsbCB8fCByb3V0ZS5lcnJvckVsZW1lbnQgIT0gbnVsbFxuICB9O1xuXG4gIGlmIChyb3V0ZS5Db21wb25lbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBpZiAocm91dGUuZWxlbWVudCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYENvbXBvbmVudGAgYW5kIGBlbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBDb21wb25lbnRgIHdpbGwgYmUgdXNlZC5cIikgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbih1cGRhdGVzLCB7XG4gICAgICBlbGVtZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5Db21wb25lbnQpLFxuICAgICAgQ29tcG9uZW50OiB1bmRlZmluZWRcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyb3V0ZS5FcnJvckJvdW5kYXJ5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKHJvdXRlLmVycm9yRWxlbWVudCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBVTlNBRkVfd2FybmluZyhmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCBpbmNsdWRlIGJvdGggYEVycm9yQm91bmRhcnlgIGFuZCBgZXJyb3JFbGVtZW50YCBvbiB5b3VyIHJvdXRlIC0gXCIgKyBcImBFcnJvckJvdW5kYXJ5YCB3aWxsIGJlIHVzZWQuXCIpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24odXBkYXRlcywge1xuICAgICAgZXJyb3JFbGVtZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChyb3V0ZS5FcnJvckJvdW5kYXJ5KSxcbiAgICAgIEVycm9yQm91bmRhcnk6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeVJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgZnV0dXJlOiBfZXh0ZW5kcyh7fSwgb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5mdXR1cmUsIHtcbiAgICAgIHY3X3ByZXBlbmRCYXNlbmFtZTogdHJ1ZVxuICAgIH0pLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXM6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXg6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEluZGV4XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhLFxuICAgIHJvdXRlcyxcbiAgICBtYXBSb3V0ZVByb3BlcnRpZXNcbiAgfSkuaW5pdGlhbGl6ZSgpO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCB7IEF3YWl0LCBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlclByb3ZpZGVyLCBSb3V0ZXMsIERhdGFSb3V0ZXJDb250ZXh0IGFzIFVOU0FGRV9EYXRhUm91dGVyQ29udGV4dCwgRGF0YVJvdXRlclN0YXRlQ29udGV4dCBhcyBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgTG9jYXRpb25Db250ZXh0IGFzIFVOU0FGRV9Mb2NhdGlvbkNvbnRleHQsIE5hdmlnYXRpb25Db250ZXh0IGFzIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgUm91dGVDb250ZXh0IGFzIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIG1hcFJvdXRlUHJvcGVydGllcyBhcyBVTlNBRkVfbWFwUm91dGVQcm9wZXJ0aWVzLCB1c2VSb3V0ZUlkIGFzIFVOU0FGRV91c2VSb3V0ZUlkLCB1c2VSb3V0ZXNJbXBsIGFzIFVOU0FGRV91c2VSb3V0ZXNJbXBsLCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIGFzIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cywgcmVuZGVyTWF0Y2hlcywgdXNlQmxvY2tlciBhcyB1bnN0YWJsZV91c2VCbG9ja2VyLCB1c2VBY3Rpb25EYXRhLCB1c2VBc3luY0Vycm9yLCB1c2VBc3luY1ZhbHVlLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvYWRlckRhdGEsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb24sIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSZXZhbGlkYXRvciwgdXNlUm91dGVFcnJvciwgdXNlUm91dGVMb2FkZXJEYXRhLCB1c2VSb3V0ZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBmPXJlcXVpcmUoXCJyZWFjdFwiKSxrPVN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpLGw9U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpLG09T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxuPWYuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQuUmVhY3RDdXJyZW50T3duZXIscD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gcShjLGEsZyl7dmFyIGIsZD17fSxlPW51bGwsaD1udWxsO3ZvaWQgMCE9PWcmJihlPVwiXCIrZyk7dm9pZCAwIT09YS5rZXkmJihlPVwiXCIrYS5rZXkpO3ZvaWQgMCE9PWEucmVmJiYoaD1hLnJlZik7Zm9yKGIgaW4gYSltLmNhbGwoYSxiKSYmIXAuaGFzT3duUHJvcGVydHkoYikmJihkW2JdPWFbYl0pO2lmKGMmJmMuZGVmYXVsdFByb3BzKWZvcihiIGluIGE9Yy5kZWZhdWx0UHJvcHMsYSl2b2lkIDA9PT1kW2JdJiYoZFtiXT1hW2JdKTtyZXR1cm57JCR0eXBlb2Y6ayx0eXBlOmMsa2V5OmUscmVmOmgscHJvcHM6ZCxfb3duZXI6bi5jdXJyZW50fX1leHBvcnRzLkZyYWdtZW50PWw7ZXhwb3J0cy5qc3g9cTtleHBvcnRzLmpzeHM9cTtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbD1TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSxuPVN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikscD1TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIikscT1TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikscj1TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIiksdD1TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIiksdT1TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSx2PVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSx3PVN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSx4PVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHk9U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIiksej1TeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gQShhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9eiYmYVt6XXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxudmFyIEI9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEM9T2JqZWN0LmFzc2lnbixEPXt9O2Z1bmN0aW9uIEUoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn1FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O1xuRS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKFwic2V0U3RhdGUoLi4uKTogdGFrZXMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcyB0byB1cGRhdGUgb3IgYSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuXCIpO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixlKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWV8fEJ9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7QyhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPUFycmF5LmlzQXJyYXksSj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEs9e2N1cnJlbnQ6bnVsbH0sTD17a2V5OiEwLHJlZjohMCxfX3NlbGY6ITAsX19zb3VyY2U6ITB9O1xuZnVuY3Rpb24gTShhLGIsZSl7dmFyIGQsYz17fSxrPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGQgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGs9XCJcIitiLmtleSksYilKLmNhbGwoYixkKSYmIUwuaGFzT3duUHJvcGVydHkoZCkmJihjW2RdPWJbZF0pO3ZhciBnPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZyljLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGcpe2Zvcih2YXIgZj1BcnJheShnKSxtPTA7bTxnO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2MuY2hpbGRyZW49Zn1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoZCBpbiBnPWEuZGVmYXVsdFByb3BzLGcpdm9pZCAwPT09Y1tkXSYmKGNbZF09Z1tkXSk7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLGtleTprLHJlZjpoLHByb3BzOmMsX293bmVyOksuY3VycmVudH19XG5mdW5jdGlvbiBOKGEsYil7cmV0dXJueyQkdHlwZW9mOmwsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBPKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1sfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrYS5yZXBsYWNlKC9bPTpdL2csZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV19KX12YXIgUD0vXFwvKy9nO2Z1bmN0aW9uIFEoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoXCJcIithLmtleSk6Yi50b1N0cmluZygzNil9XG5mdW5jdGlvbiBSKGEsYixlLGQsYyl7dmFyIGs9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWt8fFwiYm9vbGVhblwiPT09aylhPW51bGw7dmFyIGg9ITE7aWYobnVsbD09PWEpaD0hMDtlbHNlIHN3aXRjaChrKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmg9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGw6Y2FzZSBuOmg9ITB9fWlmKGgpcmV0dXJuIGg9YSxjPWMoaCksYT1cIlwiPT09ZD9cIi5cIitRKGgsMCk6ZCxJKGMpPyhlPVwiXCIsbnVsbCE9YSYmKGU9YS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpLFIoYyxiLGUsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYX0pKTpudWxsIT1jJiYoTyhjKSYmKGM9TihjLGUrKCFjLmtleXx8aCYmaC5rZXk9PT1jLmtleT9cIlwiOihcIlwiK2Mua2V5KS5yZXBsYWNlKFAsXCIkJi9cIikrXCIvXCIpK2EpKSxiLnB1c2goYykpLDE7aD0wO2Q9XCJcIj09PWQ/XCIuXCI6ZCtcIjpcIjtpZihJKGEpKWZvcih2YXIgZz0wO2c8YS5sZW5ndGg7ZysrKXtrPVxuYVtnXTt2YXIgZj1kK1EoayxnKTtoKz1SKGssYixlLGYsYyl9ZWxzZSBpZihmPUEoYSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGc9MDshKGs9YS5uZXh0KCkpLmRvbmU7KWs9ay52YWx1ZSxmPWQrUShrLGcrKyksaCs9UihrLGIsZSxmLGMpO2Vsc2UgaWYoXCJvYmplY3RcIj09PWspdGhyb3cgYj1TdHJpbmcoYSksRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiKyhcIltvYmplY3QgT2JqZWN0XVwiPT09Yj9cIm9iamVjdCB3aXRoIGtleXMge1wiK09iamVjdC5rZXlzKGEpLmpvaW4oXCIsIFwiKStcIn1cIjpiKStcIikuIElmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgaW5zdGVhZC5cIik7cmV0dXJuIGh9XG5mdW5jdGlvbiBTKGEsYixlKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBkPVtdLGM9MDtSKGEsZCxcIlwiLFwiXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGIuY2FsbChlLGEsYysrKX0pO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7aWYoLTE9PT1hLl9zdGF0dXMpe3ZhciBiPWEuX3Jlc3VsdDtiPWIoKTtiLnRoZW4oZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWJ9LGZ1bmN0aW9uKGIpe2lmKDA9PT1hLl9zdGF0dXN8fC0xPT09YS5fc3RhdHVzKWEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1ifSk7LTE9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MCxhLl9yZXN1bHQ9Yil9aWYoMT09PWEuX3N0YXR1cylyZXR1cm4gYS5fcmVzdWx0LmRlZmF1bHQ7dGhyb3cgYS5fcmVzdWx0O31cbnZhciBVPXtjdXJyZW50Om51bGx9LFY9e3RyYW5zaXRpb246bnVsbH0sVz17UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpVLFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOlYsUmVhY3RDdXJyZW50T3duZXI6S307ZXhwb3J0cy5DaGlsZHJlbj17bWFwOlMsZm9yRWFjaDpmdW5jdGlvbihhLGIsZSl7UyhhLGZ1bmN0aW9uKCl7Yi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUpfSxjb3VudDpmdW5jdGlvbihhKXt2YXIgYj0wO1MoYSxmdW5jdGlvbigpe2IrK30pO3JldHVybiBifSx0b0FycmF5OmZ1bmN0aW9uKGEpe3JldHVybiBTKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KXx8W119LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU8oYSkpdGhyb3cgRXJyb3IoXCJSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC5cIik7cmV0dXJuIGF9fTtleHBvcnRzLkNvbXBvbmVudD1FO2V4cG9ydHMuRnJhZ21lbnQ9cDtcbmV4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7ZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRD1XO1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQ9ZnVuY3Rpb24oYSxiLGUpe2lmKG51bGw9PT1hfHx2b2lkIDA9PT1hKXRocm93IEVycm9yKFwiUmVhY3QuY2xvbmVFbGVtZW50KC4uLik6IFRoZSBhcmd1bWVudCBtdXN0IGJlIGEgUmVhY3QgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQgXCIrYStcIi5cIik7dmFyIGQ9Qyh7fSxhLnByb3BzKSxjPWEua2V5LGs9YS5yZWYsaD1hLl9vd25lcjtpZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGs9Yi5yZWYsaD1LLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoYz1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGc9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoZiBpbiBiKUouY2FsbChiLGYpJiYhTC5oYXNPd25Qcm9wZXJ0eShmKSYmKGRbZl09dm9pZCAwPT09YltmXSYmdm9pZCAwIT09Zz9nW2ZdOmJbZl0pfXZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZilkLmNoaWxkcmVuPWU7ZWxzZSBpZigxPGYpe2c9QXJyYXkoZik7XG5mb3IodmFyIG09MDttPGY7bSsrKWdbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1nfXJldHVybnskJHR5cGVvZjpsLHR5cGU6YS50eXBlLGtleTpjLHJlZjprLHByb3BzOmQsX293bmVyOmh9fTtleHBvcnRzLmNyZWF0ZUNvbnRleHQ9ZnVuY3Rpb24oYSl7YT17JCR0eXBlb2Y6dSxfY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGwsX2RlZmF1bHRWYWx1ZTpudWxsLF9nbG9iYWxOYW1lOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnQsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX07ZXhwb3J0cy5jcmVhdGVFbGVtZW50PU07ZXhwb3J0cy5jcmVhdGVGYWN0b3J5PWZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifTtleHBvcnRzLmNyZWF0ZVJlZj1mdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fTtcbmV4cG9ydHMuZm9yd2FyZFJlZj1mdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6dixyZW5kZXI6YX19O2V4cG9ydHMuaXNWYWxpZEVsZW1lbnQ9TztleHBvcnRzLmxhenk9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnksX3BheWxvYWQ6e19zdGF0dXM6LTEsX3Jlc3VsdDphfSxfaW5pdDpUfX07ZXhwb3J0cy5tZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOngsdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fTtleHBvcnRzLnN0YXJ0VHJhbnNpdGlvbj1mdW5jdGlvbihhKXt2YXIgYj1WLnRyYW5zaXRpb247Vi50cmFuc2l0aW9uPXt9O3RyeXthKCl9ZmluYWxseXtWLnRyYW5zaXRpb249Yn19O2V4cG9ydHMudW5zdGFibGVfYWN0PWZ1bmN0aW9uKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9O1xuZXhwb3J0cy51c2VDYWxsYmFjaz1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlQ2FsbGJhY2soYSxiKX07ZXhwb3J0cy51c2VDb250ZXh0PWZ1bmN0aW9uKGEpe3JldHVybiBVLmN1cnJlbnQudXNlQ29udGV4dChhKX07ZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlSW5zZXJ0aW9uRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlTGF5b3V0RWZmZWN0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VMYXlvdXRFZmZlY3QoYSxiKX07ZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O1xuZXhwb3J0cy51c2VUcmFuc2l0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIFUuY3VycmVudC51c2VUcmFuc2l0aW9uKCl9O2V4cG9ydHMudmVyc2lvbj1cIjE4LjIuMFwiO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4ndXNlIHN0cmljdCc7ZnVuY3Rpb24gZihhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7MDxjOyl7dmFyIGQ9Yy0xPj4+MSxlPWFbZF07aWYoMDxnKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBoKGEpe3JldHVybiAwPT09YS5sZW5ndGg/bnVsbDphWzBdfWZ1bmN0aW9uIGsoYSl7aWYoMD09PWEubGVuZ3RoKXJldHVybiBudWxsO3ZhciBiPWFbMF0sYz1hLnBvcCgpO2lmKGMhPT1iKXthWzBdPWM7YTpmb3IodmFyIGQ9MCxlPWEubGVuZ3RoLHc9ZT4+PjE7ZDx3Oyl7dmFyIG09MiooZCsxKS0xLEM9YVttXSxuPW0rMSx4PWFbbl07aWYoMD5nKEMsYykpbjxlJiYwPmcoeCxDKT8oYVtkXT14LGFbbl09YyxkPW4pOihhW2RdPUMsYVttXT1jLGQ9bSk7ZWxzZSBpZihuPGUmJjA+Zyh4LGMpKWFbZF09eCxhW25dPWMsZD1uO2Vsc2UgYnJlYWsgYX19cmV0dXJuIGJ9XG5mdW5jdGlvbiBnKGEsYil7dmFyIGM9YS5zb3J0SW5kZXgtYi5zb3J0SW5kZXg7cmV0dXJuIDAhPT1jP2M6YS5pZC1iLmlkfWlmKFwib2JqZWN0XCI9PT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3cpe3ZhciBsPXBlcmZvcm1hbmNlO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIGwubm93KCl9fWVsc2V7dmFyIHA9RGF0ZSxxPXAubm93KCk7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gcC5ub3coKS1xfX12YXIgcj1bXSx0PVtdLHU9MSx2PW51bGwseT0zLHo9ITEsQT0hMSxCPSExLEQ9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDpudWxsLEU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6bnVsbCxGPVwidW5kZWZpbmVkXCIhPT10eXBlb2Ygc2V0SW1tZWRpYXRlP3NldEltbWVkaWF0ZTpudWxsO1xuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBuYXZpZ2F0b3ImJnZvaWQgMCE9PW5hdmlnYXRvci5zY2hlZHVsaW5nJiZ2b2lkIDAhPT1uYXZpZ2F0b3Iuc2NoZWR1bGluZy5pc0lucHV0UGVuZGluZyYmbmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcuYmluZChuYXZpZ2F0b3Iuc2NoZWR1bGluZyk7ZnVuY3Rpb24gRyhhKXtmb3IodmFyIGI9aCh0KTtudWxsIT09Yjspe2lmKG51bGw9PT1iLmNhbGxiYWNrKWsodCk7ZWxzZSBpZihiLnN0YXJ0VGltZTw9YSlrKHQpLGIuc29ydEluZGV4PWIuZXhwaXJhdGlvblRpbWUsZihyLGIpO2Vsc2UgYnJlYWs7Yj1oKHQpfX1mdW5jdGlvbiBIKGEpe0I9ITE7RyhhKTtpZighQSlpZihudWxsIT09aChyKSlBPSEwLEkoSik7ZWxzZXt2YXIgYj1oKHQpO251bGwhPT1iJiZLKEgsYi5zdGFydFRpbWUtYSl9fVxuZnVuY3Rpb24gSihhLGIpe0E9ITE7QiYmKEI9ITEsRShMKSxMPS0xKTt6PSEwO3ZhciBjPXk7dHJ5e0coYik7Zm9yKHY9aChyKTtudWxsIT09diYmKCEodi5leHBpcmF0aW9uVGltZT5iKXx8YSYmIU0oKSk7KXt2YXIgZD12LmNhbGxiYWNrO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2LmNhbGxiYWNrPW51bGw7eT12LnByaW9yaXR5TGV2ZWw7dmFyIGU9ZCh2LmV4cGlyYXRpb25UaW1lPD1iKTtiPWV4cG9ydHMudW5zdGFibGVfbm93KCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGU/di5jYWxsYmFjaz1lOnY9PT1oKHIpJiZrKHIpO0coYil9ZWxzZSBrKHIpO3Y9aChyKX1pZihudWxsIT09dil2YXIgdz0hMDtlbHNle3ZhciBtPWgodCk7bnVsbCE9PW0mJksoSCxtLnN0YXJ0VGltZS1iKTt3PSExfXJldHVybiB3fWZpbmFsbHl7dj1udWxsLHk9Yyx6PSExfX12YXIgTj0hMSxPPW51bGwsTD0tMSxQPTUsUT0tMTtcbmZ1bmN0aW9uIE0oKXtyZXR1cm4gZXhwb3J0cy51bnN0YWJsZV9ub3coKS1RPFA/ITE6ITB9ZnVuY3Rpb24gUigpe2lmKG51bGwhPT1PKXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO1E9YTt2YXIgYj0hMDt0cnl7Yj1PKCEwLGEpfWZpbmFsbHl7Yj9TKCk6KE49ITEsTz1udWxsKX19ZWxzZSBOPSExfXZhciBTO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBGKVM9ZnVuY3Rpb24oKXtGKFIpfTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgTWVzc2FnZUNoYW5uZWwpe3ZhciBUPW5ldyBNZXNzYWdlQ2hhbm5lbCxVPVQucG9ydDI7VC5wb3J0MS5vbm1lc3NhZ2U9UjtTPWZ1bmN0aW9uKCl7VS5wb3N0TWVzc2FnZShudWxsKX19ZWxzZSBTPWZ1bmN0aW9uKCl7RChSLDApfTtmdW5jdGlvbiBJKGEpe089YTtOfHwoTj0hMCxTKCkpfWZ1bmN0aW9uIEsoYSxiKXtMPUQoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX1cbmV4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5PTU7ZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eT0xO2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5PTM7ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjaz1mdW5jdGlvbihhKXthLmNhbGxiYWNrPW51bGx9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtBfHx6fHwoQT0hMCxJKEopKX07XG5leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKGEpezA+YXx8MTI1PGE/Y29uc29sZS5lcnJvcihcImZvcmNlRnJhbWVSYXRlIHRha2VzIGEgcG9zaXRpdmUgaW50IGJldHdlZW4gMCBhbmQgMTI1LCBmb3JjaW5nIGZyYW1lIHJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHN1cHBvcnRlZFwiKTpQPTA8YT9NYXRoLmZsb29yKDFFMy9hKTo1fTtleHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsPWZ1bmN0aW9uKCl7cmV0dXJuIHl9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gaChyKX07ZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaCh5KXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj15fXZhciBjPXk7eT1iO3RyeXtyZXR1cm4gYSgpfWZpbmFsbHl7eT1jfX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307XG5leHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludD1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHk9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpicmVhaztkZWZhdWx0OmE9M312YXIgYz15O3k9YTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e3k9Y319O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWM/KGM9Yy5kZWxheSxjPVwibnVtYmVyXCI9PT10eXBlb2YgYyYmMDxjP2QrYzpkKTpjPWQ7c3dpdGNoKGEpe2Nhc2UgMTp2YXIgZT0tMTticmVhaztjYXNlIDI6ZT0yNTA7YnJlYWs7Y2FzZSA1OmU9MTA3Mzc0MTgyMzticmVhaztjYXNlIDQ6ZT0xRTQ7YnJlYWs7ZGVmYXVsdDplPTVFM31lPWMrZTthPXtpZDp1KyssY2FsbGJhY2s6Yixwcmlvcml0eUxldmVsOmEsc3RhcnRUaW1lOmMsZXhwaXJhdGlvblRpbWU6ZSxzb3J0SW5kZXg6LTF9O2M+ZD8oYS5zb3J0SW5kZXg9YyxmKHQsYSksbnVsbD09PWgocikmJmE9PT1oKHQpJiYoQj8oRShMKSxMPS0xKTpCPSEwLEsoSCxjLWQpKSk6KGEuc29ydEluZGV4PWUsZihyLGEpLEF8fHp8fChBPSEwLEkoSikpKTtyZXR1cm4gYX07XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPU07ZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9eTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz15O3k9Yjt0cnl7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZpbmFsbHl7eT1jfX19O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==