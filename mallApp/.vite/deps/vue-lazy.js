var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/global.js"(exports, module) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    function() {
      return this;
    }() || Function("return this")();
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/fails.js"(exports, module) {
    "use strict";
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/descriptors.js"(exports, module) {
    "use strict";
    var fails3 = require_fails();
    module.exports = !fails3(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    "use strict";
    var fails3 = require_fails();
    module.exports = !fails3(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-call.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    "use strict";
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/classof-raw.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/indexed-object.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails3 = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module.exports = fails3(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    "use strict";
    module.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-callable.js"(exports, module) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-object.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    module.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/get-built-in.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis({}.isPrototypeOf);
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
    "use strict";
    module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module.exports = version;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    "use strict";
    var V8_VERSION2 = require_engine_v8_version();
    var fails3 = require_fails();
    var global2 = require_global();
    var $String = global2.String;
    module.exports = !!Object.getOwnPropertySymbols && !fails3(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION2 && V8_VERSION2 < 41;
    });
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-symbol.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/try-to-string.js"(exports, module) {
    "use strict";
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/a-callable.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/get-method.js"(exports, module) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject2 = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject2(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject2(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-pure.js"(exports, module) {
    "use strict";
    module.exports = false;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/define-global-property.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/shared-store.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module.exports = store;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/shared.js"(exports, module) {
    "use strict";
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.35.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-object.js"(exports, module) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/has-own-property.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject2 = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject2(it), key);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/uid.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = global2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-primitive.js"(exports, module) {
    "use strict";
    var call = require_function_call();
    var isObject2 = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol2 = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol2("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject2(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject2(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-property-key.js"(exports, module) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/document-create-element.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var isObject2 = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject2(document2) && isObject2(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails3 = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS && !fails3(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails3 = require_fails();
    module.exports = DESCRIPTORS && fails3(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/an-object.js"(exports, module) {
    "use strict";
    var isObject2 = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject2(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/function-name.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/inspect-source.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/shared-key.js"(exports, module) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    "use strict";
    module.exports = {};
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/internal-state.js"(exports, module) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject2 = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject2(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE))
          throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/make-built-in.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails3 = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails3(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/define-built-in.js"(exports, module) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/math-trunc.js"(exports, module) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n2 = +x;
      return (n2 > 0 ? floor : ceil)(n2);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    "use strict";
    var trunc = require_math_trunc();
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-length.js"(exports, module) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    "use strict";
    var toLength = require_to_length();
    module.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-includes.js"(exports, module) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike2 = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike2(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el)
          while (length > index) {
            value = O[index++];
            if (value !== value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    "use strict";
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/own-keys.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat2 = uncurryThis([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat2(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-forced.js"(exports, module) {
    "use strict";
    var fails3 = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails3(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/export.js"(exports, module) {
    "use strict";
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED2, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = (global2[TARGET] || {}).prototype;
      }
      if (target)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target[key];
          FORCED2 = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED2 && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-array.js"(exports, module) {
    "use strict";
    var classof = require_classof_raw();
    module.exports = Array.isArray || function isArray2(argument) {
      return classof(argument) === "Array";
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module.exports = function(it) {
      if (it > MAX_SAFE_INTEGER)
        throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/create-property.js"(exports, module) {
    "use strict";
    var toPropertyKey = require_to_property_key();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object)
        definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
      else
        object[propertyKey] = value;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
    "use strict";
    var wellKnownSymbol2 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module.exports = String(test) === "[object z]";
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/classof.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol2 = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol2("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/is-constructor.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails3 = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var empty = [];
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      try {
        construct(noop, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module.exports = !construct || fails3(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
    "use strict";
    var isArray2 = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject2 = require_is_object();
    var wellKnownSymbol2 = require_well_known_symbol();
    var SPECIES = wellKnownSymbol2("species");
    var $Array = Array;
    module.exports = function(originalArray) {
      var C;
      if (isArray2(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === $Array || isArray2(C.prototype)))
          C = void 0;
        else if (isObject2(C)) {
          C = C[SPECIES];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? $Array : C;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-species-create.js"(exports, module) {
    "use strict";
    var arraySpeciesConstructor = require_array_species_constructor();
    module.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-method-has-species-support.js
var require_array_method_has_species_support = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/array-method-has-species-support.js"(exports, module) {
    "use strict";
    var fails3 = require_fails();
    var wellKnownSymbol2 = require_well_known_symbol();
    var V8_VERSION2 = require_engine_v8_version();
    var SPECIES = wellKnownSymbol2("species");
    module.exports = function(METHOD_NAME) {
      return V8_VERSION2 >= 51 || !fails3(function() {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES] = function() {
          return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-keys.js"(exports, module) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-define-properties.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index)
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/html.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("document", "documentElement");
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/object-create.js"(exports, module) {
    "use strict";
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
    "use strict";
    var wellKnownSymbol2 = require_well_known_symbol();
    var create = require_object_create();
    var defineProperty = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol2("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] === void 0) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    }
    module.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/intersection-observer/intersection-observer.js
(function() {
  "use strict";
  if (typeof window !== "object") {
    return;
  }
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    if (!("isIntersecting" in window.IntersectionObserverEntry.prototype)) {
      Object.defineProperty(
        window.IntersectionObserverEntry.prototype,
        "isIntersecting",
        {
          get: function() {
            return this.intersectionRatio > 0;
          }
        }
      );
    }
    return;
  }
  function getFrameElement(doc) {
    try {
      return doc.defaultView && doc.defaultView.frameElement || null;
    } catch (e2) {
      return null;
    }
  }
  var document2 = function(startDoc) {
    var doc = startDoc;
    var frame = getFrameElement(doc);
    while (frame) {
      doc = frame.ownerDocument;
      frame = getFrameElement(doc);
    }
    return doc;
  }(window.document);
  var registry = [];
  var crossOriginUpdater = null;
  var crossOriginRect = null;
  function IntersectionObserverEntry(entry) {
    this.time = entry.time;
    this.target = entry.target;
    this.rootBounds = ensureDOMRect(entry.rootBounds);
    this.boundingClientRect = ensureDOMRect(entry.boundingClientRect);
    this.intersectionRect = ensureDOMRect(entry.intersectionRect || getEmptyRect());
    this.isIntersecting = !!entry.intersectionRect;
    var targetRect = this.boundingClientRect;
    var targetArea = targetRect.width * targetRect.height;
    var intersectionRect = this.intersectionRect;
    var intersectionArea = intersectionRect.width * intersectionRect.height;
    if (targetArea) {
      this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
    } else {
      this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
  }
  function IntersectionObserver2(callback, opt_options) {
    var options = opt_options || {};
    if (typeof callback != "function") {
      throw new Error("callback must be a function");
    }
    if (options.root && options.root.nodeType != 1) {
      throw new Error("root must be an Element");
    }
    this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    );
    this._callback = callback;
    this._observationTargets = [];
    this._queuedEntries = [];
    this._rootMarginValues = this._parseRootMargin(options.rootMargin);
    this.thresholds = this._initThresholds(options.threshold);
    this.root = options.root || null;
    this.rootMargin = this._rootMarginValues.map(function(margin) {
      return margin.value + margin.unit;
    }).join(" ");
    this._monitoringDocuments = [];
    this._monitoringUnsubscribes = [];
  }
  IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
  IntersectionObserver2.prototype.POLL_INTERVAL = null;
  IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
  IntersectionObserver2._setupCrossOriginUpdater = function() {
    if (!crossOriginUpdater) {
      crossOriginUpdater = function(boundingClientRect, intersectionRect) {
        if (!boundingClientRect || !intersectionRect) {
          crossOriginRect = getEmptyRect();
        } else {
          crossOriginRect = convertFromParentRect(boundingClientRect, intersectionRect);
        }
        registry.forEach(function(observer) {
          observer._checkForIntersections();
        });
      };
    }
    return crossOriginUpdater;
  };
  IntersectionObserver2._resetCrossOriginUpdater = function() {
    crossOriginUpdater = null;
    crossOriginRect = null;
  };
  IntersectionObserver2.prototype.observe = function(target) {
    var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
      return item.element == target;
    });
    if (isTargetAlreadyObserved) {
      return;
    }
    if (!(target && target.nodeType == 1)) {
      throw new Error("target must be an Element");
    }
    this._registerInstance();
    this._observationTargets.push({ element: target, entry: null });
    this._monitorIntersections(target.ownerDocument);
    this._checkForIntersections();
  };
  IntersectionObserver2.prototype.unobserve = function(target) {
    this._observationTargets = this._observationTargets.filter(function(item) {
      return item.element != target;
    });
    this._unmonitorIntersections(target.ownerDocument);
    if (this._observationTargets.length == 0) {
      this._unregisterInstance();
    }
  };
  IntersectionObserver2.prototype.disconnect = function() {
    this._observationTargets = [];
    this._unmonitorAllIntersections();
    this._unregisterInstance();
  };
  IntersectionObserver2.prototype.takeRecords = function() {
    var records = this._queuedEntries.slice();
    this._queuedEntries = [];
    return records;
  };
  IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
    var threshold = opt_threshold || [0];
    if (!Array.isArray(threshold))
      threshold = [threshold];
    return threshold.sort().filter(function(t2, i, a) {
      if (typeof t2 != "number" || isNaN(t2) || t2 < 0 || t2 > 1) {
        throw new Error("threshold must be a number between 0 and 1 inclusively");
      }
      return t2 !== a[i - 1];
    });
  };
  IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
    var marginString = opt_rootMargin || "0px";
    var margins = marginString.split(/\s+/).map(function(margin) {
      var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
      if (!parts) {
        throw new Error("rootMargin must be specified in pixels or percent");
      }
      return { value: parseFloat(parts[1]), unit: parts[2] };
    });
    margins[1] = margins[1] || margins[0];
    margins[2] = margins[2] || margins[0];
    margins[3] = margins[3] || margins[1];
    return margins;
  };
  IntersectionObserver2.prototype._monitorIntersections = function(doc) {
    var win = doc.defaultView;
    if (!win) {
      return;
    }
    if (this._monitoringDocuments.indexOf(doc) != -1) {
      return;
    }
    var callback = this._checkForIntersections;
    var monitoringInterval = null;
    var domObserver = null;
    if (this.POLL_INTERVAL) {
      monitoringInterval = win.setInterval(callback, this.POLL_INTERVAL);
    } else {
      addEvent(win, "resize", callback, true);
      addEvent(doc, "scroll", callback, true);
      if (this.USE_MUTATION_OBSERVER && "MutationObserver" in win) {
        domObserver = new win.MutationObserver(callback);
        domObserver.observe(doc, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
    this._monitoringDocuments.push(doc);
    this._monitoringUnsubscribes.push(function() {
      var win2 = doc.defaultView;
      if (win2) {
        if (monitoringInterval) {
          win2.clearInterval(monitoringInterval);
        }
        removeEvent(win2, "resize", callback, true);
      }
      removeEvent(doc, "scroll", callback, true);
      if (domObserver) {
        domObserver.disconnect();
      }
    });
    if (doc != (this.root && this.root.ownerDocument || document2)) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._monitorIntersections(frame.ownerDocument);
      }
    }
  };
  IntersectionObserver2.prototype._unmonitorIntersections = function(doc) {
    var index = this._monitoringDocuments.indexOf(doc);
    if (index == -1) {
      return;
    }
    var rootDoc = this.root && this.root.ownerDocument || document2;
    var hasDependentTargets = this._observationTargets.some(function(item) {
      var itemDoc = item.element.ownerDocument;
      if (itemDoc == doc) {
        return true;
      }
      while (itemDoc && itemDoc != rootDoc) {
        var frame2 = getFrameElement(itemDoc);
        itemDoc = frame2 && frame2.ownerDocument;
        if (itemDoc == doc) {
          return true;
        }
      }
      return false;
    });
    if (hasDependentTargets) {
      return;
    }
    var unsubscribe = this._monitoringUnsubscribes[index];
    this._monitoringDocuments.splice(index, 1);
    this._monitoringUnsubscribes.splice(index, 1);
    unsubscribe();
    if (doc != rootDoc) {
      var frame = getFrameElement(doc);
      if (frame) {
        this._unmonitorIntersections(frame.ownerDocument);
      }
    }
  };
  IntersectionObserver2.prototype._unmonitorAllIntersections = function() {
    var unsubscribes = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0;
    this._monitoringUnsubscribes.length = 0;
    for (var i = 0; i < unsubscribes.length; i++) {
      unsubscribes[i]();
    }
  };
  IntersectionObserver2.prototype._checkForIntersections = function() {
    if (!this.root && crossOriginUpdater && !crossOriginRect) {
      return;
    }
    var rootIsInDom = this._rootIsInDom();
    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
    this._observationTargets.forEach(function(item) {
      var target = item.element;
      var targetRect = getBoundingClientRect(target);
      var rootContainsTarget = this._rootContainsTarget(target);
      var oldEntry = item.entry;
      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, targetRect, rootRect);
      var newEntry = item.entry = new IntersectionObserverEntry({
        time: now(),
        target,
        boundingClientRect: targetRect,
        rootBounds: crossOriginUpdater && !this.root ? null : rootRect,
        intersectionRect
      });
      if (!oldEntry) {
        this._queuedEntries.push(newEntry);
      } else if (rootIsInDom && rootContainsTarget) {
        if (this._hasCrossedThreshold(oldEntry, newEntry)) {
          this._queuedEntries.push(newEntry);
        }
      } else {
        if (oldEntry && oldEntry.isIntersecting) {
          this._queuedEntries.push(newEntry);
        }
      }
    }, this);
    if (this._queuedEntries.length) {
      this._callback(this.takeRecords(), this);
    }
  };
  IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, targetRect, rootRect) {
    if (window.getComputedStyle(target).display == "none")
      return;
    var intersectionRect = targetRect;
    var parent = getParentNode(target);
    var atRoot = false;
    while (!atRoot && parent) {
      var parentRect = null;
      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};
      if (parentComputedStyle.display == "none")
        return null;
      if (parent == this.root || parent.nodeType == /* DOCUMENT */
      9) {
        atRoot = true;
        if (parent == this.root || parent == document2) {
          if (crossOriginUpdater && !this.root) {
            if (!crossOriginRect || crossOriginRect.width == 0 && crossOriginRect.height == 0) {
              parent = null;
              parentRect = null;
              intersectionRect = null;
            } else {
              parentRect = crossOriginRect;
            }
          } else {
            parentRect = rootRect;
          }
        } else {
          var frame = getParentNode(parent);
          var frameRect = frame && getBoundingClientRect(frame);
          var frameIntersect = frame && this._computeTargetAndRootIntersection(frame, frameRect, rootRect);
          if (frameRect && frameIntersect) {
            parent = frame;
            parentRect = convertFromParentRect(frameRect, frameIntersect);
          } else {
            parent = null;
            intersectionRect = null;
          }
        }
      } else {
        var doc = parent.ownerDocument;
        if (parent != doc.body && parent != doc.documentElement && parentComputedStyle.overflow != "visible") {
          parentRect = getBoundingClientRect(parent);
        }
      }
      if (parentRect) {
        intersectionRect = computeRectIntersection(parentRect, intersectionRect);
      }
      if (!intersectionRect)
        break;
      parent = parent && getParentNode(parent);
    }
    return intersectionRect;
  };
  IntersectionObserver2.prototype._getRootRect = function() {
    var rootRect;
    if (this.root) {
      rootRect = getBoundingClientRect(this.root);
    } else {
      var html = document2.documentElement;
      var body = document2.body;
      rootRect = {
        top: 0,
        left: 0,
        right: html.clientWidth || body.clientWidth,
        width: html.clientWidth || body.clientWidth,
        bottom: html.clientHeight || body.clientHeight,
        height: html.clientHeight || body.clientHeight
      };
    }
    return this._expandRectByRootMargin(rootRect);
  };
  IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
    var margins = this._rootMarginValues.map(function(margin, i) {
      return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
    });
    var newRect = {
      top: rect.top - margins[0],
      right: rect.right + margins[1],
      bottom: rect.bottom + margins[2],
      left: rect.left - margins[3]
    };
    newRect.width = newRect.right - newRect.left;
    newRect.height = newRect.bottom - newRect.top;
    return newRect;
  };
  IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
    if (oldRatio === newRatio)
      return;
    for (var i = 0; i < this.thresholds.length; i++) {
      var threshold = this.thresholds[i];
      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
        return true;
      }
    }
  };
  IntersectionObserver2.prototype._rootIsInDom = function() {
    return !this.root || containsDeep(document2, this.root);
  };
  IntersectionObserver2.prototype._rootContainsTarget = function(target) {
    return containsDeep(this.root || document2, target) && (!this.root || this.root.ownerDocument == target.ownerDocument);
  };
  IntersectionObserver2.prototype._registerInstance = function() {
    if (registry.indexOf(this) < 0) {
      registry.push(this);
    }
  };
  IntersectionObserver2.prototype._unregisterInstance = function() {
    var index = registry.indexOf(this);
    if (index != -1)
      registry.splice(index, 1);
  };
  function now() {
    return window.performance && performance.now && performance.now();
  }
  function throttle(fn, timeout) {
    var timer = null;
    return function() {
      if (!timer) {
        timer = setTimeout(function() {
          fn();
          timer = null;
        }, timeout);
      }
    };
  }
  function addEvent(node, event, fn, opt_useCapture) {
    if (typeof node.addEventListener == "function") {
      node.addEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.attachEvent == "function") {
      node.attachEvent("on" + event, fn);
    }
  }
  function removeEvent(node, event, fn, opt_useCapture) {
    if (typeof node.removeEventListener == "function") {
      node.removeEventListener(event, fn, opt_useCapture || false);
    } else if (typeof node.detatchEvent == "function") {
      node.detatchEvent("on" + event, fn);
    }
  }
  function computeRectIntersection(rect1, rect2) {
    var top = Math.max(rect1.top, rect2.top);
    var bottom = Math.min(rect1.bottom, rect2.bottom);
    var left = Math.max(rect1.left, rect2.left);
    var right = Math.min(rect1.right, rect2.right);
    var width = right - left;
    var height = bottom - top;
    return width >= 0 && height >= 0 && {
      top,
      bottom,
      left,
      right,
      width,
      height
    } || null;
  }
  function getBoundingClientRect(el) {
    var rect;
    try {
      rect = el.getBoundingClientRect();
    } catch (err) {
    }
    if (!rect)
      return getEmptyRect();
    if (!(rect.width && rect.height)) {
      rect = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
    }
    return rect;
  }
  function getEmptyRect() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function ensureDOMRect(rect) {
    if (!rect || "x" in rect) {
      return rect;
    }
    return {
      top: rect.top,
      y: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      x: rect.left,
      right: rect.right,
      width: rect.width,
      height: rect.height
    };
  }
  function convertFromParentRect(parentBoundingRect, parentIntersectionRect) {
    var top = parentIntersectionRect.top - parentBoundingRect.top;
    var left = parentIntersectionRect.left - parentBoundingRect.left;
    return {
      top,
      left,
      height: parentIntersectionRect.height,
      width: parentIntersectionRect.width,
      bottom: top + parentIntersectionRect.height,
      right: left + parentIntersectionRect.width
    };
  }
  function containsDeep(parent, child) {
    var node = child;
    while (node) {
      if (node == parent)
        return true;
      node = getParentNode(node);
    }
    return false;
  }
  function getParentNode(node) {
    var parent = node.parentNode;
    if (node.nodeType == /* DOCUMENT */
    9 && node != document2) {
      return getFrameElement(node);
    }
    if (parent && parent.nodeType == 11 && parent.host) {
      return parent.host;
    }
    if (parent && parent.assignedSlot) {
      return parent.assignedSlot.parentNode;
    }
    return parent;
  }
  window.IntersectionObserver = IntersectionObserver2;
  window.IntersectionObserverEntry = IntersectionObserverEntry;
})();

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/modules/es.array.concat.js
var $ = require_export();
var fails = require_fails();
var isArray = require_is_array();
var isObject = require_is_object();
var toObject = require_to_object();
var lengthOfArrayLike = require_length_of_array_like();
var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
var createProperty = require_create_property();
var arraySpeciesCreate = require_array_species_create();
var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
var wellKnownSymbol = require_well_known_symbol();
var V8_VERSION = require_engine_v8_version();
var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});
var isConcatSpreadable = function(O) {
  if (!isObject(O))
    return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== void 0 ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport("concat");
$({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n2 = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n2 + len);
        for (k = 0; k < len; k++, n2++)
          if (k in E)
            createProperty(A, n2, E[k]);
      } else {
        doesNotExceedSafeInteger(n2 + 1);
        createProperty(A, n2++, E);
      }
    }
    A.length = n2;
    return A;
  }
});

// C:/Users/1/Documents/person_file/mallApp/node_modules/core-js/modules/es.array.includes.js
var $2 = require_export();
var $includes = require_array_includes().includes;
var fails2 = require_fails();
var addToUnscopables = require_add_to_unscopables();
var BROKEN_ON_SPARSE = fails2(function() {
  return !Array(1).includes();
});
$2({ target: "Array", proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables("includes");

// C:/Users/1/Documents/person_file/mallApp/node_modules/vue-lazy/dist/vue-lazy.esm.js
function t(t2, e2, n2, i, r, s, o, d, a, c) {
  "boolean" != typeof o && (a = d, d = o, o = false);
  const u = "function" == typeof n2 ? n2.options : n2;
  let l;
  if (t2 && t2.render && (u.render = t2.render, u.staticRenderFns = t2.staticRenderFns, u._compiled = true, r && (u.functional = true)), i && (u._scopeId = i), s ? (l = function(t3) {
    (t3 = t3 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t3 = __VUE_SSR_CONTEXT__), e2 && e2.call(this, a(t3)), t3 && t3._registeredComponents && t3._registeredComponents.add(s);
  }, u._ssrRegister = l) : e2 && (l = o ? function(t3) {
    e2.call(this, c(t3, this.$root.$options.shadowRoot));
  } : function(t3) {
    e2.call(this, d(t3));
  }), l)
    if (u.functional) {
      const t3 = u.render;
      u.render = function(e3, n3) {
        return l.call(n3), t3(e3, n3);
      };
    } else {
      const t3 = u.beforeCreate;
      u.beforeCreate = t3 ? [].concat(t3, l) : [l];
    }
  return n2;
}
var e = t({}, void 0, { props: { src: { required: true, type: String }, width: { type: String, default: function() {
  return null;
} }, height: { type: String, default: function() {
  return null;
} }, alt: { type: String, default: function() {
  return null;
} }, srcset: { type: String, default: function() {
  return null;
} }, intersectionConfig: { type: Object, default: function() {
  return { threshold: [0, 1] };
} }, tag: { type: String, default: function() {
  return "img";
}, validator: function(t2) {
  return ["img", "picture"].includes(t2);
} } }, data: function() {
  return { isLoaded: false };
}, computed: { getSrc: function() {
  return this.isLoaded ? this.src : this.placeholder;
}, getSrcset: function() {
  return this.isLoaded ? this.srcset : null;
}, getClass: function() {
  return ["lazyload", { lazyloaded: this.isLoaded }];
}, placeholder: function() {
  return this.width && this.height ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ".concat(this.width, " ").concat(this.height, "'%3E%3C/svg%3E") : "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
} }, mounted: function() {
  var t2 = this, e2 = new IntersectionObserver(function(n2) {
    n2[0] && n2[0].isIntersecting && (t2.onLoad(), e2.disconnect());
  }, this.intersectionConfig);
  e2.observe(this.$el);
}, methods: { onLoad: function() {
  this.isLoaded = true, this.$emit("loaded", true);
} }, render: function(t2) {
  var e2 = t2("img", { attrs: { src: this.getSrc, srcset: this.getSrcset, width: this.width, height: this.height, alt: this.alt }, domProps: this.$attrs, class: this.getClass });
  return "picture" === this.tag ? t2("picture", [this.$slots.default, e2]) : e2;
} }, void 0, void 0, void 0, false, void 0, void 0, void 0);
var n = { install: function(t2) {
  t2.component("lazy-image", e);
} };
var vue_lazy_esm_default = n;
export {
  e as LazyImage,
  vue_lazy_esm_default as default
};
//# sourceMappingURL=vue-lazy.js.map
