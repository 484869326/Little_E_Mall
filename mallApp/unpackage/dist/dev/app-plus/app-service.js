if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$p = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$2], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Users/1/Documents/person_file/mallApp/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LOAD = "onLoad";
  const ON_PAGE_SCROLL = "onPageScroll";
  const ON_REACH_BOTTOM = "onReachBottom";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const onHide = /* @__PURE__ */ createHook(ON_HIDE);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.getCurrentInstance() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (!store._isOptionsAPI) {
                toastMessage(`Cannot reset "${nodeId}" store because it's a setup store.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(
        // @ts-expect-error: can cast the store...
        store,
        Object.keys(options.actions)
      );
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(
      assign(
        {
          _hmrPayload,
          _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
          // devtools custom properties
        },
        partialStore
        // must be added later
        // setupStore
      )
    );
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || currentInstance && vue.inject(piniaSymbol, null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
      !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const TIME_OUT = 6e4;
  const BASE_URL = "http://192.168.31.83:3333/api";
  class Request1 {
    request(url, method, data) {
      return new Promise((resolve, reject) => {
        uni.request({
          url: BASE_URL + url,
          method: method || "GET",
          timeout: TIME_OUT,
          data,
          success(res) {
            resolve(res.data);
          },
          fail(err) {
            reject(err);
          }
        });
      });
    }
    get(url, params = {}) {
      return this.request(url, "GET", params);
    }
    post(url, data) {
      return this.request(url, "POST", data);
    }
    delete(id) {
      return this.request("/" + id, "DELETE", {});
    }
  }
  const Request1$1 = new Request1();
  const getHomeMutidata = () => {
    return Request1$1.get("/home/multidata");
  };
  const getGoodList = (page) => {
    return Request1$1.get("/home/getGoodList/" + page);
  };
  const getMyMutidata = () => {
    return Request1$1.get("/home/mySwiper");
  };
  const useHomeStore = defineStore("home", {
    state: () => {
      return {
        banners: [],
        recommends: [],
        goodList: []
      };
    },
    // 修改state里面的数据
    actions: {
      //轮播图，推荐
      async fetchHomeMutidata() {
        const res = await getHomeMutidata();
        this.banners = res.data.banner || [];
        this.recommends = res.data.recommend || [];
      },
      //商品列表
      async fetchGoodList(page) {
        const res = await getGoodList(page);
        this.goodList = res.data;
      }
    }
  });
  const _sfc_main$o = {
    __name: "banner",
    props: ["banners", "isPreview"],
    setup(__props, { expose }) {
      const props = __props;
      const instance = vue.getCurrentInstance();
      const autoplay = vue.ref(true);
      const swiperHeight = vue.ref("150px");
      function setSwiperHeight() {
        uni.createSelectorQuery().in(instance).select(".image").boundingClientRect((data) => {
          swiperHeight.value = data.height + "px";
        }).exec();
      }
      function getSwiperHeight() {
        return swiperHeight.value;
      }
      function handlePreviewImage(index) {
        if (!props.isPreview)
          return;
        uni.previewImage({
          current: index,
          urls: props.banners
        });
      }
      expose({
        getSwiperHeight
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("swiper", {
          class: "banner",
          "indicator-dots": true,
          autoplay: autoplay.value,
          interval: 3e3,
          duration: 1e3,
          style: vue.normalizeStyle({ height: swiperHeight.value })
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.banners, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", { key: item }, [
                vue.createElementVNode("image", {
                  src: item,
                  mode: "widthFix",
                  class: "image",
                  onLoad: ($event) => index === 0 && _ctx.$nextTick(setSwiperHeight),
                  onClick: ($event) => handlePreviewImage(index)
                }, null, 40, ["src", "onLoad", "onClick"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 12, ["autoplay"]);
      };
    }
  };
  const banner = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-d42d60d2"], ["__file", "C:/Users/1/Documents/person_file/mallApp/components/banner.vue"]]);
  const _imports_0 = "/static/logo.png";
  const _sfc_main$n = {
    __name: "home-search",
    props: ["color"],
    setup(__props) {
      function handleOpenSearchClick() {
        uni.navigateTo({
          url: "/pages/search/search"
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home-search" }, [
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createElementVNode("image", {
              src: _imports_0,
              mode: "widthFix",
              class: "image"
            })
          ]),
          vue.createElementVNode("view", {
            class: "search",
            onClick: handleOpenSearchClick
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "search",
              size: "40rpx",
              color: "#b4b4b4"
            }),
            vue.createElementVNode("view", { class: "search-text" }, "搜索"),
            vue.createElementVNode("view", { class: "icon-scan" }, [
              vue.createVNode(_component_uni_icons, {
                type: "scan",
                size: "40rpx",
                color: "#b4b4b4"
              })
            ])
          ]),
          vue.createVNode(_component_uni_icons, {
            type: "chat",
            color: __props.color,
            size: "60rpx"
          }, null, 8, ["color"])
        ]);
      };
    }
  };
  const homeSearch = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-e0e45a11"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/home/cpns/home-search.vue"]]);
  const _sfc_main$m = {
    __name: "home-recommend",
    props: ["recommends"],
    setup(__props) {
      function handleClick(searchValue) {
        uni.navigateTo({
          url: "/pages/search/search?searchValue=" + searchValue
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "home-recommend" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.recommends, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "recommend-item",
                key: item.Cid,
                onClick: ($event) => handleClick(item.Cname)
              }, [
                vue.createElementVNode("image", {
                  src: item.Cimg,
                  mode: "widthFix",
                  class: "image",
                  "lazy-load": true
                }, null, 8, ["src"]),
                vue.createElementVNode(
                  "text",
                  { class: "text" },
                  vue.toDisplayString(item.Cname),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const homeRecommend = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-637e2969"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/home/cpns/home-recommend.vue"]]);
  function debounce(fn, interval, immediate = true) {
    let timer = null;
    let isInvoke = false;
    const _debounce = function(...payload) {
      return new Promise((resolve) => {
        if (timer)
          clearTimeout(timer);
        if (!isInvoke && immediate) {
          const result = fn.apply(this, payload);
          resolve(result);
          timer = null;
          isInvoke = true;
        } else {
          timer = setTimeout(() => {
            const result = fn.apply(this, payload);
            resolve(result);
            timer = null;
            isInvoke = false;
          }, interval);
        }
      });
    };
    return _debounce;
  }
  function throttle(fn, interval, options = {
    leading: false,
    trailing: false
  }) {
    const { leading, trailing } = options;
    let lastTime = 0;
    let timer = null;
    const _throttle = (...args) => {
      const nowTime = (/* @__PURE__ */ new Date()).getTime();
      if (!lastTime && !leading) {
        lastTime = nowTime;
      }
      const remainTime = interval - (nowTime - lastTime);
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (remainTime <= 0) {
        timer = null;
        fn.apply(this, args);
        lastTime = nowTime;
        timer = null;
      } else if (trailing && !timer) {
        timer = setTimeout(() => {
          fn.apply(this, args);
          lastTime = leading ? (/* @__PURE__ */ new Date()).getTime() : 0;
          timer = null;
        }, remainTime);
      }
    };
    return _throttle;
  }
  function deepClone(originValue, map = /* @__PURE__ */ new WeakMap()) {
    if (typeof originValue !== "object" || originValue === null || originValue === void 0) {
      return originValue;
    }
    if (originValue instanceof Map) {
      return new Map([...originValue]);
    }
    if (originValue instanceof Set) {
      return /* @__PURE__ */ new Set([...originValue]);
    }
    if (typeof originValue === "symbol") {
      return Symbol(originValue.description);
    }
    if (typeof originValue === "function") {
      return originValue;
    }
    if (map.has(originValue)) {
      return map.get(originValue);
    }
    const newObject = Array.isArray(originValue) ? [] : {};
    map.set(originValue, newObject);
    for (const key in originValue) {
      newObject[key] = deepClone(originValue[key], map);
    }
    const symbolKeys = Object.getOwnPropertySymbols(originValue);
    for (const sKey of symbolKeys) {
      newObject[sKey] = deepClone(originValue[sKey], map);
    }
    return newObject;
  }
  const _sfc_main$l = {
    __name: "water-fall-good",
    props: ["title", "goodList"],
    emits: ["itemClick"],
    setup(__props, { expose }) {
      const props = __props;
      const goodList = vue.reactive([]);
      const instance = vue.getCurrentInstance();
      vue.watch(
        () => props.goodList,
        (newVal) => {
          goodList.push(...deepClone(newVal));
        }
      );
      const heightArr = vue.ref([0]);
      let remainingSpace = 0;
      const updateLayout = async (item, index) => {
        const heightArrValue = heightArr.value;
        const itemWidth = item.width;
        const minIndex = heightArrValue.indexOf(Math.min(...heightArrValue));
        const y = heightArrValue[minIndex];
        const minIndexWidth = minIndex * itemWidth;
        const x = (minIndex + 1) % 2 !== 0 ? minIndexWidth + remainingSpace : minIndexWidth + remainingSpace * 2;
        goodList[index].x = x + "px";
        goodList[index].y = y + "px";
        heightArrValue[minIndex] += item.height + 15;
      };
      function loadImage(el) {
        const index = el.target.dataset.index;
        queryElement(index);
      }
      async function queryElement(index) {
        await new Promise((resolve, reject) => {
          uni.createSelectorQuery().in(instance).select(`#good-item-${index}`).boundingClientRect(async function(res) {
            await updateLayout(res, index);
            resolve();
          }).exec();
        });
      }
      function initValue() {
        new Promise((resolve, reject) => {
          let parentWidth = 0;
          uni.createSelectorQuery().in(instance).select(".water-fall-good").boundingClientRect(function(res) {
            parentWidth = res.width;
          }).exec();
          uni.createSelectorQuery().in(instance).select(".good-content").boundingClientRect(function(res) {
            const itemWidth = res.width;
            const column = Math.floor(parentWidth / itemWidth);
            remainingSpace = (parentWidth - itemWidth * column) / (column + 1);
            heightArr.value = new Array(column).fill(0);
            resolve();
          }).exec();
        });
      }
      function handleItemClick(goodid) {
        uni.navigateTo({
          url: "/pages/detail/detail?goodid=" + goodid
        });
      }
      expose({
        initValue
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "water-fall-good",
            style: vue.normalizeStyle({ height: Math.max(...heightArr.value) + 30 + "px" })
          },
          [
            vue.createElementVNode(
              "view",
              { class: "title" },
              vue.toDisplayString(__props.title),
              1
              /* TEXT */
            ),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(goodList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.Goodid,
                  id: "good-item-" + index,
                  class: "good-content",
                  style: vue.normalizeStyle({ transform: `translate(${item.x || 0}, ${item.y || 0})` }),
                  onClick: ($event) => handleItemClick(item.Goodid)
                }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: item.Goodimg,
                    mode: "widthFix",
                    "data-index": index,
                    onLoad: loadImage
                  }, null, 40, ["src", "data-index"]),
                  vue.createElementVNode(
                    "view",
                    { class: "good-name" },
                    vue.toDisplayString(item.Goodname),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("text", { class: "good-type" }, [
                    vue.createCommentVNode(' .replace(/,/g, "|") app不能用replaceAll '),
                    vue.createTextVNode(
                      " " + vue.toDisplayString(item.Explain.replace(/,/g, "，")),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "good-price" },
                    "￥" + vue.toDisplayString(item.price.split(",")[0]),
                    1
                    /* TEXT */
                  )
                ], 12, ["id", "onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const waterFallGood = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-647ba82d"], ["__file", "C:/Users/1/Documents/person_file/mallApp/components/water-fall-good.vue"]]);
  const _sfc_main$k = {
    __name: "home",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "07e72d3c-homeSearchBg": homeSearchBg.value
      }));
      const homeStore = useHomeStore();
      const homeBannerRef = vue.ref(null);
      const { banners, recommends, goodList } = storeToRefs(homeStore);
      const homeSearchBg = vue.ref("transpant");
      const homeSearchColor = vue.ref("#ffffff");
      const waterFallGoodRef = vue.ref(null);
      let page = 1;
      onLoad(async () => {
        await homeStore.fetchHomeMutidata();
        await homeStore.fetchGoodList(page);
        await (waterFallGoodRef.value && waterFallGoodRef.value.initValue());
      });
      const qualificationsList = [
        {
          icon: "shop",
          text: "官方商城"
        },
        {
          icon: "hand-up-filled",
          text: "售后无忧"
        },
        {
          icon: "auth-filled",
          text: "资质证照"
        }
      ];
      onReachBottom(async () => {
        uni.showLoading({
          title: "加载中"
        });
        await homeStore.fetchGoodList(++page);
        setTimeout(() => {
          uni.hideLoading();
        }, 1e3);
      });
      const throttleOnPageScroll = throttle(
        (e) => {
          const swiperHeight = homeBannerRef.value && homeBannerRef.value.getSwiperHeight();
          const scrollTop = e.scrollTop;
          if (scrollTop >= parseInt(swiperHeight) - 20) {
            homeSearchBg.value = "#fff";
            homeSearchColor.value = "#f3402b";
          } else {
            homeSearchBg.value = "transpant";
            homeSearchColor.value = "#ffffff";
          }
        },
        500,
        { leading: false, trailing: true }
      );
      onPageScroll(throttleOnPageScroll);
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "home" }, [
          vue.createCommentVNode(" 搜索 "),
          vue.createVNode(homeSearch, { color: homeSearchColor.value }, null, 8, ["color"]),
          vue.createCommentVNode(" 轮播图 "),
          vue.createVNode(banner, {
            banners: vue.unref(banners),
            ref_key: "homeBannerRef",
            ref: homeBannerRef
          }, null, 8, ["banners"]),
          vue.createCommentVNode(" 资质文案 "),
          vue.createElementVNode("view", { class: "qualifications" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(qualificationsList, (item) => {
                return vue.createElementVNode("view", {
                  key: item.icon
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.icon,
                    color: "#F3402B",
                    size: "50rpx",
                    style: { "display": "block" }
                  }, null, 8, ["type"]),
                  vue.createElementVNode(
                    "text",
                    { class: "qualifications-text" },
                    vue.toDisplayString(item.text),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 推荐商品 "),
          vue.createVNode(homeRecommend, { recommends: vue.unref(recommends) }, null, 8, ["recommends"]),
          vue.createCommentVNode(" 商品列表 "),
          vue.createVNode(waterFallGood, {
            title: "精选推荐",
            goodList: vue.unref(goodList),
            ref_key: "waterFallGoodRef",
            ref: waterFallGoodRef
          }, null, 8, ["goodList"])
        ]);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/home/home.vue"]]);
  const getCategoryList = () => {
    return Request1$1.get("/categoryList");
  };
  const useCategoryStore = defineStore("category", {
    state: () => {
      return {
        categoryList: [],
        subCategory: []
      };
    },
    // 修改state里面的数据
    actions: {
      //详情
      async fetchCategoryList() {
        const res = await getCategoryList();
        this.categoryList = res.data || [];
        this.subCategory = this.categoryList.flatMap((item) => item.children);
      }
    }
  });
  const _sfc_main$j = {
    __name: "category-menu",
    props: ["categories", "currentIndex"],
    emits: ["update:currentIndex"],
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "category-menu" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-y": "true",
            class: "category-menu-scroll"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.categories, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.Cid,
                  class: vue.normalizeClass([
                    "scroll-view-item",
                    __props.currentIndex === item.Cid ? "active" : ""
                  ]),
                  onClick: ($event) => _ctx.$emit("update:currentIndex", item.Cid)
                }, vue.toDisplayString(item.Cname), 11, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const categoryMenu = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-b49732ed"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/category/cpns/category-menu.vue"]]);
  const _sfc_main$i = {
    __name: "category-content",
    props: ["subCategory", "parentID"],
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_categoryContent = vue.resolveComponent("categoryContent", true);
        return vue.openBlock(), vue.createElementBlock("view", { class: "category-content" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(__props.subCategory, (item, index) => {
              return vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                {
                  key: item.Cid
                },
                [
                  item.level !== 1 || item.parentID === Number(__props.parentID) ? (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    { key: 0 },
                    [
                      item.Cimg ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "content-item"
                      }, [
                        vue.createElementVNode("image", {
                          class: "image",
                          src: item.Cimg,
                          "lazy-load": true,
                          mode: "widthFix"
                        }, null, 8, ["src"]),
                        vue.createElementVNode(
                          "text",
                          { class: "title" },
                          vue.toDisplayString(item.Cname),
                          1
                          /* TEXT */
                        )
                      ])) : item.Cname ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: "content-item-title"
                        },
                        "--" + vue.toDisplayString(item.Cname) + "--",
                        1
                        /* TEXT */
                      )) : vue.createCommentVNode("v-if", true),
                      item.children && item.children.length !== 0 ? (vue.openBlock(), vue.createBlock(_component_categoryContent, {
                        key: 2,
                        subCategory: item.children
                      }, null, 8, ["subCategory"])) : vue.createCommentVNode("v-if", true)
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  )) : vue.createCommentVNode("v-if", true)
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const categoryContent = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-a62664f5"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/category/cpns/category-content.vue"]]);
  const _sfc_main$h = {
    __name: "category",
    setup(__props) {
      const categoryStore = useCategoryStore();
      const { categoryList, subCategory } = storeToRefs(categoryStore);
      const parentID = vue.ref(0);
      onLoad(async () => {
        await categoryStore.fetchCategoryList();
        parentID.value = categoryList.value[0].Cid;
      });
      const scrollTop = vue.ref(0);
      vue.watch(parentID, () => {
        formatAppLog("log", "at pages/category/category.vue:35", scrollTop.value);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "category" }, [
          vue.createCommentVNode(" 左边 "),
          vue.createVNode(categoryMenu, {
            categories: vue.unref(categoryList),
            currentIndex: parentID.value,
            "onUpdate:currentIndex": _cache[0] || (_cache[0] = ($event) => parentID.value = $event)
          }, null, 8, ["categories", "currentIndex"]),
          vue.createCommentVNode(" 右边 "),
          vue.createElementVNode("scroll-view", {
            class: "content-scroll",
            "scroll-y": "true",
            "scroll-top": scrollTop.value
          }, [
            vue.createVNode(categoryContent, {
              subCategory: vue.unref(subCategory),
              parentID: parentID.value
            }, null, 8, ["subCategory", "parentID"])
          ], 8, ["scroll-top"])
        ]);
      };
    }
  };
  const PagesCategoryCategory = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/category/category.vue"]]);
  const getCheckAll = (userid = 1) => {
    return Request1$1.post("/getAllCheck", { userid });
  };
  const getShoppingList = (page) => {
    return Request1$1.post("/getShop/" + page, { signature: "1" });
  };
  const changeShoppingNum = (id, num) => {
    return Request1$1.post("/changeNum", { id, num });
  };
  const deleteShopping = (id) => {
    return Request1$1.delete(id);
  };
  const changeChecked = (id, checked, userid = 1) => {
    return Request1$1.post("/changeChecked", { id, checked, userid });
  };
  const changeCheckedAll = (checkAll) => {
    return Request1$1.post("/checkedAll", { id: "1", checkAll });
  };
  const useShoppingStore = defineStore("shopping", {
    state: () => {
      return {
        // 购物车列表
        shoppingList: [],
        // 是否全部选择
        isCheckAll: false,
        // 总价格
        totalPrice: 0,
        // 被选中的总价格
        totalCheckPrice: 0,
        // 多少个被选择
        totalCheck: 0,
        // 总共多少个购物车
        total: 0
      };
    },
    // 修改state里面的数据
    actions: {
      async fetchCheckAll() {
        const res = await getCheckAll();
        this.isCheckAll = res.data.isCheckAll;
        this.totalPrice = res.data.totalPrice;
        this.totalCheck = res.data.totalCheck;
        this.totalCheckPrice = res.data.totalCheckPrice;
        this.total = res.data.total;
      },
      //详情
      async fetchShoppingList(page) {
        const res = await getShoppingList(page);
        this.shoppingList = res.data || [];
      },
      async fetchChangeShoppingNum(id, num) {
        const res = await changeShoppingNum(id, num);
        return res;
      },
      async fetchDeleteShopping(id) {
        const res = await deleteShopping(id);
        return res;
      },
      async fetchChangeChecked(id, isChecked) {
        const res = await changeChecked(id, isChecked);
        return res;
      },
      async fetchChangeAllChecked(isChecked) {
        const res = await changeCheckedAll(isChecked);
        return res;
      }
    }
  });
  const _sfc_main$g = {
    __name: "num-edit",
    props: {
      modelValue: { type: Number, default: 1 }
    },
    emits: ["update:modelValue", "change"],
    setup(__props, { emit }) {
      const props = __props;
      const numValue = vue.ref(props.modelValue);
      vue.watch(
        () => props.modelValue,
        (newValue) => {
          numValue.value = newValue;
        }
      );
      function handleReduceClick() {
        if (numValue.value > 1) {
          emit("update:modelValue", numValue.value - 1);
          emit("change", -1);
        }
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "num-edit" }, [
          vue.createElementVNode(
            "text",
            {
              class: "reduce",
              style: vue.normalizeStyle({ background: numValue.value <= 1 ? "#B3B3B3" : "black" }),
              onClick: handleReduceClick
            },
            null,
            4
            /* STYLE */
          ),
          vue.createElementVNode(
            "text",
            { class: "num" },
            vue.toDisplayString(numValue.value),
            1
            /* TEXT */
          ),
          vue.createVNode(_component_uni_icons, {
            type: "plusempty",
            size: "40rpx",
            color: "black",
            class: "add",
            onClick: _cache[0] || (_cache[0] = ($event) => {
              _ctx.$emit("update:modelValue", numValue.value + 1);
              emit("change", 1);
            })
          })
        ]);
      };
    }
  };
  const numEdit = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-ffaa72a5"], ["__file", "C:/Users/1/Documents/person_file/mallApp/components/num-edit.vue"]]);
  const _sfc_main$f = {
    __name: "shopping-content",
    props: ["shoppingList", "isAllChecked"],
    emits: ["changeNum", "delete", "changeChecked"],
    setup(__props, { emit }) {
      const props = __props;
      const instance = vue.getCurrentInstance();
      const shoppingList = vue.reactive([]);
      vue.watch(
        () => props.shoppingList,
        (newVal) => {
          const data = deepClone(newVal);
          data.forEach((item) => {
            item.good.price = item.good.price.split(",");
            item.good.Type = item.good.Type.split(",");
            item.good.color = item.good.color.split(",");
            shoppingList.push(item);
          });
        }
      );
      vue.watch(
        () => props.isAllChecked,
        (newVal) => {
          if (newVal === 2)
            return;
          shoppingList.forEach((item) => {
            item.isChecked = newVal;
          });
        },
        {
          immediate: true
        }
      );
      let startX = 0, lastX = 0, elementPosition = 0;
      const endX = vue.reactive([]);
      function handleTouchStart(e, index) {
        endX[index] = endX[index] ?? 0;
        startX = e.changedTouches[0].clientX - endX[index];
        if (elementPosition === 0) {
          getElementPosition();
        }
      }
      function handleTouchMove(e, index) {
        lastX = e.changedTouches[0].clientX;
        const disX = lastX - startX;
        if (disX < elementPosition - 40)
          return;
        if (disX > 0 && disX > elementPosition)
          return;
        endX[index] = disX;
      }
      function handleTouchEnd(e, index) {
        const threshold = elementPosition / 2;
        if (endX[index] > threshold) {
          endX[index] = 0;
        } else if (endX[index] && endX[index] !== 0) {
          endX[index] = elementPosition;
        }
        startX = 0;
        lastX = 0;
      }
      function getElementPosition() {
        uni.createSelectorQuery().in(instance).select(".option").boundingClientRect((data) => {
          elementPosition = -(data.right - data.left);
        }).exec();
      }
      function handleChangeCheckedClick(item) {
        item.isChecked = !item.isChecked;
        emit("changeChecked", item);
      }
      function handleDeleteClick(item, index) {
        uni.showModal({
          title: "",
          content: "是否删除",
          success: function(res) {
            if (res.confirm) {
              emit("delete", item);
              endX.splice(index, 1);
              shoppingList.splice(index, 1);
            }
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "shopping-content" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(shoppingList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: item.shoppingid,
                class: "shopping-item-box"
              }, [
                vue.createElementVNode("view", {
                  class: "shopping-item",
                  style: vue.normalizeStyle(`transform: translateX(${endX[index]}px)`),
                  onTouchstartPassive: ($event) => handleTouchStart($event, index),
                  onTouchmovePassive: ($event) => handleTouchMove($event, index),
                  onTouchendPassive: ($event) => handleTouchEnd($event, index)
                }, [
                  vue.createElementVNode("view", {
                    class: "check-box",
                    onClick: ($event) => handleChangeCheckedClick(item)
                  }, [
                    vue.createVNode(_component_uni_icons, {
                      type: item.isChecked ? "checkbox-filled" : "circle",
                      size: "48rpx",
                      color: item.isChecked ? "#f3402b" : "#7e7e7e"
                    }, null, 8, ["type", "color"])
                  ], 8, ["onClick"]),
                  vue.createElementVNode("view", { class: "image-box" }, [
                    vue.createElementVNode("image", {
                      class: "image",
                      src: item.good.Goodimg,
                      "lazy-load": true,
                      mode: "widthFix"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "item-info" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "item-name" },
                      vue.toDisplayString(item.good.Goodname),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "item-type" }, [
                      vue.createTextVNode(
                        vue.toDisplayString(item.good.Type[item.type] + " " + item.good.color[item.color]) + " ",
                        1
                        /* TEXT */
                      ),
                      vue.createVNode(_component_uni_icons, {
                        type: "down",
                        size: "28rpx",
                        color: "#7e7e7e"
                      })
                    ]),
                    vue.createElementVNode("view", { class: "item-price" }, [
                      vue.createElementVNode(
                        "text",
                        { class: "text" },
                        "￥" + vue.toDisplayString(item.good.price[item.type]),
                        1
                        /* TEXT */
                      ),
                      vue.createVNode(numEdit, {
                        modelValue: item.Num,
                        "onUpdate:modelValue": ($event) => item.Num = $event,
                        onChange: ($event) => _ctx.$emit("changeNum", $event, item, index)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    class: "option",
                    onClick: ($event) => handleDeleteClick(item, index)
                  }, " 删除 ", 8, ["onClick"])
                ], 44, ["onTouchstartPassive", "onTouchmovePassive", "onTouchendPassive"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]);
      };
    }
  };
  const shoppingContent = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-20bf4f16"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/shopping/cpns/shopping-content.vue"]]);
  const _sfc_main$e = {
    __name: "shopping-balance",
    emits: ["checkAll"],
    setup(__props, { expose, emit }) {
      const instance = vue.getCurrentInstance();
      const shoppingStore = useShoppingStore();
      const { isCheckAll, totalPrice, totalCheckPrice, totalCheck, total } = storeToRefs(shoppingStore);
      function handleCheckAllClick() {
        const isCheckAllValue = !isCheckAll.value;
        isCheckAll.value = isCheckAllValue;
        totalCheckPrice.value = isCheckAllValue ? totalPrice.value : 0;
        totalCheck.value = isCheckAllValue ? total.value : 0;
        emit("checkAll", isCheckAllValue);
      }
      function getBalanceHeight() {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(instance).select(".shopping-balance").boundingClientRect((data) => {
            resolve(data.height + "px");
          }).exec();
        });
      }
      expose({
        getBalanceHeight
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "shopping-balance" }, [
          vue.createElementVNode("view", { class: "left" }, [
            vue.createVNode(_component_uni_icons, {
              type: vue.unref(isCheckAll) ? "checkbox-filled" : "circle",
              size: "48rpx",
              color: vue.unref(isCheckAll) ? "#f3402b" : "#7e7e7e",
              onClick: handleCheckAllClick
            }, null, 8, ["type", "color"]),
            vue.createElementVNode("text", null, "全选")
          ]),
          vue.createElementVNode("view", { class: "right" }, [
            vue.createElementVNode("view", { class: "info" }, [
              vue.createElementVNode("view", { class: "info-sum" }, [
                vue.createElementVNode("text", { class: "info-sum-tips" }, "合计(不含运费): "),
                vue.createElementVNode("view", { class: "total-price" }, [
                  vue.createElementVNode("text", { class: "icon" }, "￥"),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(vue.unref(totalCheckPrice)),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "info-tips" }, "免运费 优惠:￥0.00 ")
            ]),
            vue.createElementVNode("button", {
              class: "button",
              disabled: vue.unref(totalCheck) === 0
            }, " 结算" + vue.toDisplayString(vue.unref(totalCheck)), 9, ["disabled"])
          ])
        ]);
      };
    }
  };
  const shoppingBalance = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-3eb671dc"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/shopping/cpns/shopping-balance.vue"]]);
  const _sfc_main$d = {
    __name: "shopping",
    setup(__props) {
      vue.useCssVars((_ctx) => ({
        "9ca6e162-paddingBottom": paddingBottom.value
      }));
      const isAllChecked = vue.ref(2);
      const localShoppingList = vue.reactive([]);
      const shoppingStore = useShoppingStore();
      const {
        shoppingList,
        isCheckAll,
        totalCheckPrice,
        totalCheck,
        total,
        totalPrice
      } = storeToRefs(shoppingStore);
      const shoppingBalanceRef = vue.ref();
      const paddingBottom = vue.ref("0px");
      const debounceFn = debounce(
        async (fnName, ...args) => {
          const res = await shoppingStore[fnName](...args);
          return res;
        },
        300,
        false
      );
      let page = 1;
      onLoad(async () => {
        await shoppingStore.fetchShoppingList(page);
        await shoppingStore.fetchCheckAll();
        localShoppingList.push(...shoppingList.value);
        paddingBottom.value = await (shoppingBalanceRef.value && shoppingBalanceRef.value.getBalanceHeight());
      });
      function handleChangeCheckedClick(item) {
        const id = item.shoppingid;
        const checked = item.isChecked;
        const price = parseFloat(item.good.price[item.type]).toFixed(2);
        const totalCheckValue = totalCheck.value;
        totalCheckPrice.value = checked ? totalCheckPrice.value + price * item.Num : totalCheckPrice.value - price * item.Num;
        totalCheck.value = checked ? totalCheckValue + 1 : totalCheckValue - 1;
        isAllChecked.value = 2;
        debounceFn("fetchChangeChecked", id, checked).then((res) => {
          isCheckAll.value = res.data;
        });
      }
      function handleChangeNumClick(event, item, index) {
        const id = item.shoppingid;
        const num = item.Num;
        const oldNum = localShoppingList[index].Num;
        const price = parseFloat(item.good.price[item.type]).toFixed(2);
        if (item.isChecked) {
          totalCheckPrice.value = totalCheckPrice.value + price * (num - oldNum);
          localShoppingList[index].Num = num;
        }
        totalPrice.value = totalPrice.value + price * event;
        debounceFn("fetchChangeShoppingNum", id, num);
      }
      function handleCheckAllClick(checkAll) {
        isAllChecked.value = Number(checkAll);
        debounceFn("fetchChangeAllChecked", checkAll);
      }
      function handleDeleteClick(item) {
        const id = item.shoppingid;
        const price = parseFloat(item.good.price[item.type]).toFixed(2) * item.Num;
        total.value = total.value - 1;
        totalCheck.value = totalCheck.value - 1;
        totalPrice.value = totalPrice.value - price;
        if (item.isChecked) {
          totalCheckPrice.value = totalCheckPrice.value - price;
        }
        shoppingStore.fetchDeleteShopping(id);
      }
      onReachBottom(async () => {
        uni.showLoading({
          title: "加载中"
        });
        await shoppingStore.fetchShoppingList(++page);
        localShoppingList.push(...shoppingList.value);
        setTimeout(() => {
          uni.hideLoading();
        }, 1e3);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "shopping" }, [
          vue.createVNode(shoppingContent, {
            isAllChecked: isAllChecked.value,
            shoppingList: vue.unref(shoppingList),
            onChangeChecked: handleChangeCheckedClick,
            onChangeNum: handleChangeNumClick,
            onDelete: handleDeleteClick
          }, null, 8, ["isAllChecked", "shoppingList"]),
          vue.createVNode(
            shoppingBalance,
            {
              ref_key: "shoppingBalanceRef",
              ref: shoppingBalanceRef,
              onCheckAll: handleCheckAllClick
            },
            null,
            512
            /* NEED_PATCH */
          )
        ]);
      };
    }
  };
  const PagesShoppingShopping = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/shopping/shopping.vue"]]);
  const useMyStore = defineStore("my", {
    state: () => {
      return {
        banners: [],
        goodList: []
      };
    },
    // 修改state里面的数据
    actions: {
      //商品列表
      async fetchGoodList(page) {
        const res = await getGoodList(page);
        this.goodList = res.data;
      },
      async fetchMyBanner() {
        const res = await getMyMutidata();
        this.banners = res.data || [];
      }
    }
  });
  const _sfc_main$c = {
    __name: "my",
    setup(__props) {
      const waterFallGoodRef = vue.ref();
      const myStore = useMyStore();
      const { banners, goodList } = storeToRefs(myStore);
      const headList = {
        imgSrc: "../../static/user.png",
        navigator: "登录/注册",
        icon: true
      };
      const loveList = [{ text: "收藏" }, { text: "足迹" }, { text: "关注" }];
      const orderFormList = [
        {
          icon: "wallet",
          text: "待付款"
        },
        {
          icon: "paperplane",
          text: "待收货"
        },
        {
          icon: "chat",
          text: "待评价"
        },
        {
          icon: "help",
          text: "退换/售后"
        },
        {
          icon: "calendar",
          text: "全部订单"
        }
      ];
      const serviceList = [
        {
          imgSrc: "../../static/service/vip.png",
          text: "会员中心"
        },
        {
          imgSrc: "../../static/service/cheap.png",
          text: "我的优惠"
        },
        {
          imgSrc: "../../static/service/centre.png",
          text: "服务中心"
        },
        {
          imgSrc: "../../static/service/shop.png",
          text: "小E商城"
        },
        {
          imgSrc: "../../static/service/f.png",
          text: "我的F码"
        },
        {
          imgSrc: "../../static/service/setting.png",
          text: "设置"
        }
      ];
      let page = 1;
      onLoad(async () => {
        await myStore.fetchMyBanner();
        await myStore.fetchGoodList(page);
        await (waterFallGoodRef.value && waterFallGoodRef.value.initValue());
      });
      onReachBottom(async () => {
        uni.showLoading({
          title: "加载中"
        });
        await myStore.fetchGoodList(++page);
        setTimeout(() => {
          uni.hideLoading();
        }, 1e3);
      });
      function handleLoginClick() {
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "my" }, [
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("image", {
              class: "image",
              src: headList.imgSrc,
              "lazy-load": true,
              mode: "widthFix"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", {
              class: "navigator",
              onClick: handleLoginClick
            }, [
              vue.createTextVNode(
                vue.toDisplayString(headList.navigator) + " ",
                1
                /* TEXT */
              ),
              (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                key: 0,
                type: "right",
                color: "#393939",
                size: "30rpx"
              }))
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "love" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(loveList, (item) => {
                  return vue.createElementVNode(
                    "view",
                    {
                      key: item.text
                    },
                    vue.toDisplayString(item.text),
                    1
                    /* TEXT */
                  );
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "order-form" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(orderFormList, (item) => {
                  return vue.createElementVNode("view", {
                    key: item.text,
                    class: "order-form-item"
                  }, [
                    (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                      key: 0,
                      type: item.icon,
                      color: "black",
                      size: "60rpx"
                    }, null, 8, ["type"])),
                    vue.createElementVNode(
                      "view",
                      { class: "text" },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "service" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(serviceList, (item) => {
                return vue.createElementVNode("view", {
                  key: item.text,
                  class: "service-item"
                }, [
                  vue.createElementVNode("image", {
                    class: "image",
                    src: item.imgSrc,
                    "lazy-load": true,
                    mode: "widthFix"
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "view",
                    { class: "text" },
                    vue.toDisplayString(item.text),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 轮播图 "),
          vue.createVNode(banner, {
            banners: vue.unref(banners),
            ref: "homeBannerRef"
          }, null, 8, ["banners"]),
          vue.createCommentVNode(" 商品列表 "),
          vue.createVNode(waterFallGood, {
            title: "为你精选",
            goodList: vue.unref(goodList),
            ref_key: "waterFallGoodRef",
            ref: waterFallGoodRef
          }, null, 8, ["goodList"])
        ]);
      };
    }
  };
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/my/my.vue"]]);
  const getGoodDetail = (Goodid) => {
    return Request1$1.get("/goodDetail", { Goodid });
  };
  const useGoodStore = defineStore("good", {
    state: () => {
      return {
        detail: {}
      };
    },
    // 修改state里面的数据
    actions: {
      //详情
      async fetchGoodDetail(Goodid) {
        const res = await getGoodDetail(Goodid);
        this.detail = res.data || {};
      }
    }
  });
  const _sfc_main$b = {
    __name: "detail-bottom",
    emits: ["add"],
    setup(__props, { expose }) {
      const instance = vue.getCurrentInstance();
      const goodIdArr = uni.getStorageSync("GOOD_ID") === 0 ? [] : uni.getStorageSync("GOOD_ID").split(",");
      const goodid = vue.ref(0);
      const iconArr = vue.reactive([
        {
          type: "chatboxes",
          text: "客服",
          click: () => {
            formatAppLog("log", "at pages/detail/cpns/detail-bottom.vue:34", "客服");
          }
        },
        {
          type: "star",
          text: "收藏",
          click: () => {
            if (goodIdArr.includes(goodid.value)) {
              goodIdArr.splice(goodIdArr.indexOf(goodid.value), 1);
              uni.setStorageSync("GOOD_ID", goodIdArr.join(","));
              iconArr[1].type = "star";
            } else {
              goodIdArr.push(goodid.value);
              uni.setStorageSync("GOOD_ID", goodIdArr.join(","));
              iconArr[1].type = "star-filled";
            }
          }
        },
        {
          type: "shop",
          text: "购物车",
          click: () => {
            formatAppLog("log", "at pages/detail/cpns/detail-bottom.vue:57", "购物车");
          }
        }
      ]);
      onLoad((option) => {
        goodid.value = option.goodid;
        if (goodIdArr.includes(option.goodid)) {
          iconArr[1].type = "star-filled";
        }
      });
      function getPaddingBottom() {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(instance).select(".detail-bottom").boundingClientRect(function(res) {
            resolve(res.height);
          }).exec();
        });
      }
      expose({
        getPaddingBottom
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-bottom" }, [
          vue.createElementVNode("view", { class: "icon-arr" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(iconArr, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: item.text,
                  class: "icon",
                  onClick: item.click
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: item.type,
                    size: "56rpx",
                    color: "#060606"
                  }, null, 8, ["type"]),
                  vue.createElementVNode(
                    "text",
                    { class: "text" },
                    vue.toDisplayString(item.text),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "btn-group" }, [
            vue.createElementVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("add", false))
            }, "加入购物车"),
            vue.createElementVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("add"))
            }, "立即购买")
          ])
        ]);
      };
    }
  };
  const detailBottom = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-25cc2a6c"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/cpns/detail-bottom.vue"]]);
  const _sfc_main$a = {
    __name: "detail-box",
    props: ["title"],
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 通用盒子 "),
            vue.createElementVNode("view", { class: "detail-box" }, [
              vue.createElementVNode(
                "text",
                { class: "text" },
                vue.toDisplayString(__props.title),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "slot" }, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ]),
              vue.createVNode(_component_uni_icons, {
                type: "right",
                size: "40rpx",
                color: "#060606"
              })
            ])
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        );
      };
    }
  };
  const detailBox = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-71614bbc"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/cpns/detail-box.vue"]]);
  const _sfc_main$9 = {
    __name: "drawer",
    emits: ["close"],
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createCommentVNode(" 遮罩层 "),
            vue.createElementVNode("view", {
              class: "mask",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
            }),
            vue.createElementVNode("view", { class: "drawer" }, [
              vue.createCommentVNode(" 关闭按钮 "),
              vue.createElementVNode("view", {
                class: "close",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "clear",
                  size: "38rpx",
                  color: "#7e7e7e"
                })
              ]),
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const drawer = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-3fb11d4b"], ["__file", "C:/Users/1/Documents/person_file/mallApp/components/drawer.vue"]]);
  const _sfc_main$8 = {
    __name: "detail-buy",
    props: ["detail"],
    emits: ["update", "close"],
    setup(__props, { emit }) {
      const props = __props;
      const detail = Object.assign({}, props.detail);
      const data = vue.reactive({
        typeIndex: 0,
        colorIndex: 0,
        num: 1
      });
      vue.watch(data, (newValue) => {
        emit("update", newValue);
      });
      const goodNameCom = vue.computed(() => {
        return detail.Goodname + " " + (detail.Type ?? [])[data.typeIndex] + " " + (detail.color ?? [])[data.colorIndex];
      });
      function handlePreviewImage() {
        uni.previewImage({
          current: 0,
          urls: props.detail.Goodimg
        });
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "detail-buy" }, [
          vue.createVNode(drawer, {
            onClose: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("close"))
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "good-detail" }, [
                vue.createElementVNode("view", {
                  class: "good-image",
                  onClick: handlePreviewImage
                }, [
                  vue.createElementVNode("image", {
                    src: vue.unref(detail).Goodimg[0],
                    class: "image",
                    mode: "widthFix"
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "good-info" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "good-price" },
                    "￥" + vue.toDisplayString((vue.unref(detail).price ?? [])[data.typeIndex]),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "good-name" },
                    vue.toDisplayString(vue.unref(goodNameCom)),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "good-type" }, [
                vue.createElementVNode("view", { class: "title" }, "版本"),
                vue.createElementVNode("view", { class: "item-list" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(detail).Type, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: item,
                        class: vue.normalizeClass(["item-box", { active: data.typeIndex === index }]),
                        onClick: ($event) => data.typeIndex = index
                      }, vue.toDisplayString(item), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createElementVNode("view", { class: "good-color" }, [
                vue.createElementVNode("view", { class: "title" }, "颜色"),
                vue.createElementVNode("view", { class: "item-list" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(detail).color, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: item,
                        class: vue.normalizeClass(["item-box", { active: data.colorIndex === index }]),
                        onClick: ($event) => data.colorIndex = index
                      }, vue.toDisplayString(item), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createElementVNode("view", { class: "good-num" }, [
                vue.createElementVNode("view", { class: "title" }, "购买数量"),
                vue.createVNode(numEdit, {
                  modelValue: data.num,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => data.num = $event)
                }, null, 8, ["modelValue"])
              ]),
              vue.createElementVNode("button", { class: "button" }, "确定")
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const detailBuy = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-bdce934b"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/cpns/detail-buy.vue"]]);
  const _sfc_main$7 = {
    __name: "detail-service",
    emits: ["close"],
    setup(__props, { emit }) {
      const arr = [
        { title: "小E自营" },
        { title: "小E发货", text: "由小E发货" },
        { title: "7天无理由退货" },
        { title: "7天价格保护" },
        { title: "联系我们", text: "hanli_147@163.com" },
        { title: "手机号", text: "10086111" },
        { title: "作者名字", text: "易小川" }
      ];
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("div", { class: "detail-service" }, [
          vue.createVNode(drawer, {
            onClose: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "title" }, "服务说明"),
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(arr, (item) => {
                  return vue.createElementVNode("view", {
                    class: "arr",
                    key: item.title
                  }, [
                    vue.createElementVNode("view", { class: "arr-item" }, [
                      vue.createVNode(_component_uni_icons, {
                        type: "checkbox-filled",
                        color: "#F16729",
                        size: "48rpx"
                      }),
                      vue.createElementVNode(
                        "text",
                        { class: "text" },
                        vue.toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ]),
                    item.text ? (vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: 0,
                        class: "arr-text"
                      },
                      vue.toDisplayString(item.text),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const detailService = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-089a4801"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/cpns/detail-service.vue"]]);
  const _sfc_main$6 = {
    __name: "detail",
    setup(__props) {
      const goodStore = useGoodStore();
      const { detail } = storeToRefs(goodStore);
      const detailBottomRef = vue.ref(null);
      const data = vue.reactive({
        typeIndex: 0,
        colorIndex: 0,
        num: 1
      });
      const childName = vue.ref("");
      const paddingBottom = vue.ref(0);
      const selectName = vue.computed(() => {
        const obj = detail.value;
        return obj.Goodname + " " + (obj.color ?? [])[data.colorIndex] + " " + (obj.Type ?? [])[data.typeIndex] + " x" + data.num;
      });
      onLoad(async (option) => {
        uni.pageScrollTo({
          scrollTop: 1,
          //距离页面顶部的距离
          duration: 0
          // 滚动动画时长
        });
        await goodStore.fetchGoodDetail(option.goodid);
        detail.value.price = detail.value.price.split(",");
        detail.value.color = detail.value.color.split(",");
        detail.value.Type = detail.value.Type.split(",");
        detail.value.isBuy = true;
        paddingBottom.value = detailBottomRef.value && await detailBottomRef.value.getPaddingBottom();
      });
      function updateData(value) {
        Object.assign(data, value);
      }
      function handleShowBuyClick(isBuy = true) {
        childName.value = "buy";
        detail.value.isBuy = isBuy;
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: "detail",
            style: vue.normalizeStyle({ "padding-bottom": paddingBottom.value + "px" })
          },
          [
            vue.createCommentVNode(" 轮播图 "),
            vue.createVNode(banner, {
              banners: vue.unref(detail).Swiper,
              isPreview: true
            }, null, 8, ["banners"]),
            vue.createCommentVNode(" 商品信息 "),
            vue.createElementVNode("view", { class: "good-info" }, [
              vue.createElementVNode(
                "view",
                { class: "good-price" },
                "￥" + vue.toDisplayString((vue.unref(detail).price ?? [])[data.typeIndex]),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "good-name" },
                vue.toDisplayString(vue.unref(detail).Goodname),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "good-desc" },
                vue.toDisplayString(vue.unref(detail).advertise),
                1
                /* TEXT */
              )
            ]),
            vue.createCommentVNode(" 活动 "),
            vue.createVNode(detailBox, {
              title: "活动",
              class: "normal-box activity"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("text", { class: "text" }, "分期立减"),
                vue.createElementVNode("text", null, "分期最高减30元")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createCommentVNode(" 购买商品信息 "),
            vue.createElementVNode("view", { class: "good-buy-msg normal-box" }, [
              vue.createVNode(detailBox, {
                title: "已选",
                onClick: handleShowBuyClick
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(
                    vue.toDisplayString(vue.unref(selectName)),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(detailBox, {
                title: "配送",
                class: "delivery",
                onClick: _cache[0] || (_cache[0] = ($event) => childName.value = "service")
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_icons, {
                    type: "location",
                    size: "40rpx",
                    color: "#7e7e7e"
                  }),
                  vue.createElementVNode("text", { class: "text" }, "广东 广州市 白云区")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(detailBox, {
                title: "服务",
                class: "service",
                onClick: _cache[1] || (_cache[1] = ($event) => childName.value = "service")
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "service-item" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "checkbox",
                      size: "40rpx",
                      color: "#7e7e7e"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "小E自营")
                  ]),
                  vue.createElementVNode("view", { class: "service-item" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "checkbox",
                      size: "40rpx",
                      color: "#7e7e7e"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "小E发货")
                  ]),
                  vue.createElementVNode("view", { class: "service-item" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "checkbox",
                      size: "40rpx",
                      color: "#7e7e7e"
                    }),
                    vue.createElementVNode("text", { class: "text" }, "7天无理由退货(到店自取拆封后不支持)")
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createCommentVNode(" 商品介绍 "),
            vue.createElementVNode("view", { class: "good-introduction" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(vue.unref(detail).Detail, (item) => {
                  return vue.openBlock(), vue.createElementBlock("image", {
                    key: item,
                    src: item,
                    mode: "widthFix",
                    class: "image"
                  }, null, 8, ["src"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createCommentVNode(" 底部 "),
            vue.createVNode(
              detailBottom,
              {
                ref_key: "detailBottomRef",
                ref: detailBottomRef,
                onAdd: handleShowBuyClick
              },
              null,
              512
              /* NEED_PATCH */
            ),
            childName.value === "buy" ? (vue.openBlock(), vue.createBlock(detailBuy, {
              key: 0,
              onClose: _cache[2] || (_cache[2] = ($event) => childName.value = ""),
              onUpdate: updateData,
              detail: vue.unref(detail)
            }, null, 8, ["detail"])) : childName.value === "service" ? (vue.openBlock(), vue.createBlock(detailService, {
              key: 1,
              onClose: _cache[3] || (_cache[3] = ($event) => childName.value = "")
            })) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        );
      };
    }
  };
  const PagesDetailDetail = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "C:/Users/1/Documents/person_file/mallApp/pages/detail/detail.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$5 = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-f07ef577"], ["__file", "C:/Users/1/Documents/person_file/mallApp/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const getSearchList = (Goodname, page, limit = 10) => {
    return Request1$1.get("/search", { Goodname, page, limit });
  };
  const useSearchStore = defineStore("search", {
    state: () => {
      return {
        searchList: []
      };
    },
    // 修改state里面的数据
    actions: {
      //详情
      async fetchSearchList(GoodName, page) {
        const res = await getSearchList(GoodName, page);
        this.searchList = res.data || [];
      }
    }
  });
  const _sfc_main$4 = {
    __name: "search-content",
    emits: ["searchClick", "deleteStorage"],
    setup(__props, { emit }) {
      let iconIndex = 0;
      const range = vue.ref("min");
      const instance = vue.getCurrentInstance();
      const localHistoryList = vue.reactive([]);
      const historyList = vue.computed(() => {
        return localHistoryList;
      });
      const historyListHeight = vue.reactive({
        min: "160rpx",
        max: "0px"
      });
      function handleRemoveStorageClick() {
        uni.showModal({
          content: "是否删除全部搜索历史记录",
          success: function(res) {
            if (res.confirm) {
              uni.removeStorageSync("SEARCH_HISTORY");
              localHistoryList.length = 0;
              emit("deleteStorage");
            }
          }
        });
      }
      function handleChangeShowClick() {
        const isMin = range.value === "min";
        if (isMin) {
          range.value = "max";
          localHistoryList.splice(iconIndex, 1);
          localHistoryList.push("icon");
        } else {
          range.value = "min";
          localHistoryList.splice(localHistoryList.length - 1, 1);
          localHistoryList.splice(iconIndex, 0, "icon");
        }
      }
      function initDom(isTrue2) {
        if (localHistoryList.length > 0 && isTrue2) {
          uni.createSelectorQuery().in(instance).select(".history-list-box").boundingClientRect((data) => {
            const height = data.height;
            historyListHeight.max = height + "px";
          }).exec();
          uni.createSelectorQuery().in(instance).selectAll(".history-item").boundingClientRect((data) => {
            let topSet = /* @__PURE__ */ new Set();
            let inserted = 0;
            for (let i = 0; i < data.length; i++) {
              const item = data[i];
              if (!topSet.has(item.top)) {
                topSet.add(item.top);
                inserted++;
                if (inserted === 3) {
                  const itemWidth = data[i - 1].width;
                  iconIndex = itemWidth < 40 ? i - 1 : i;
                  localHistoryList.splice(iconIndex, 0, "icon");
                  break;
                }
              }
            }
          }).exec();
        }
      }
      vue.onMounted(() => {
        initDom(true);
      });
      let isTrue = false;
      onHide(() => {
        isTrue = true;
      });
      onShow(() => {
        localHistoryList.length = 0;
        localHistoryList.push(
          ...uni.getStorageSync("SEARCH_HISTORY").length === 0 ? [] : uni.getStorageSync("SEARCH_HISTORY").split(",")
        );
        setTimeout(() => {
          initDom(isTrue);
        }, 500);
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "search-content" }, [
          vue.unref(historyList).length !== 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "search-history"
          }, [
            vue.createElementVNode("view", { class: "search-history-title" }, [
              vue.createElementVNode("text", { class: "text" }, "搜索历史"),
              vue.createVNode(_component_uni_icons, {
                type: "trash",
                size: "38rpx",
                color: "black",
                onClick: handleRemoveStorageClick
              })
            ]),
            vue.createElementVNode(
              "view",
              {
                class: "history-list",
                style: vue.normalizeStyle({ "max-height": historyListHeight[range.value] })
              },
              [
                vue.createElementVNode("view", { class: "history-list-box" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(historyList), (item) => {
                      return vue.openBlock(), vue.createElementBlock(
                        vue.Fragment,
                        { key: item },
                        [
                          vue.createCommentVNode(" 列表展示隐藏图标 "),
                          item === "icon" ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 0,
                            class: "history-item icon",
                            onClick: handleChangeShowClick
                          }, [
                            vue.createVNode(_component_uni_icons, {
                              type: range.value === "min" ? "down" : "up",
                              size: "30rpx",
                              color: "black"
                            }, null, 8, ["type"])
                          ])) : (vue.openBlock(), vue.createElementBlock("view", {
                            key: 1,
                            class: "history-item",
                            onClick: ($event) => _ctx.$emit("searchClick", item)
                          }, vue.toDisplayString(item), 9, ["onClick"]))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              4
              /* STYLE */
            )
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const searchContent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d5b379a2"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/search/cpns/search-content.vue"]]);
  const _sfc_main$3 = {
    __name: "search-good-list",
    props: ["searchValue"],
    setup(__props, { expose }) {
      const props = __props;
      const searchStore = useSearchStore();
      const { searchList } = storeToRefs(searchStore);
      const localSearchList = vue.reactive([]);
      vue.watch(
        searchList,
        (newValue) => {
          if (newValue.length > 0) {
            localSearchList.push(...newValue);
          }
        },
        { immediate: true }
      );
      let page = 1;
      const tabControllIndex = vue.ref(0);
      const tabList = [
        {
          field: "comprehensive",
          text: "综合",
          isSort: false
        },
        {
          field: "salesVolume",
          text: "销量",
          isSort: false
        },
        {
          field: "price",
          text: "价格",
          isSort: true
        },
        {
          field: "newProductPriority",
          text: "新品优先",
          isSort: false
        },
        {
          field: "screen",
          text: "筛选",
          isSort: false
        }
      ];
      function handleGoToDetail(id) {
        uni.navigateTo({
          url: `/pages/detail/detail?goodid=${id}`
        });
      }
      async function loadMore() {
        uni.showLoading({
          title: "加载中"
        });
        page++;
        await searchStore.fetchSearchList(props.searchValue, page);
        setTimeout(() => {
          uni.hideLoading();
        }, 1e3);
      }
      expose({
        loadMore
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "search-list" }, [
          vue.createElementVNode("view", { class: "tab-controll" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(tabList, (item, index) => {
                return vue.createElementVNode("view", {
                  key: item.field,
                  class: vue.normalizeClass(["tab-controll-item", { active: index === tabControllIndex.value }]),
                  onClick: ($event) => tabControllIndex.value = index
                }, [
                  vue.createTextVNode(
                    vue.toDisplayString(item.text) + " ",
                    1
                    /* TEXT */
                  ),
                  item.isSort ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                    key: 0,
                    type: "up",
                    size: "24rpx",
                    color: tabControllIndex.value === index ? "#f3402b" : "#7e7e7e"
                  }, null, 8, ["color"])) : vue.createCommentVNode("v-if", true)
                ], 10, ["onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "search-good-list" }, [
            localSearchList.length !== 0 ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList(localSearchList, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "good-item",
                  key: item.Goodid,
                  onClick: ($event) => handleGoToDetail(item.Goodid)
                }, [
                  vue.createElementVNode("view", { class: "good-image" }, [
                    vue.createElementVNode("img", {
                      src: item.Goodimg,
                      class: "image"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "good-info" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "good-title" },
                      vue.toDisplayString(item.Goodname),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "good-advertise" },
                      vue.toDisplayString(item.advertise),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "good-explain" },
                      vue.toDisplayString(item.Explain.replace(/,/g, " | ")),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "good-price" },
                      "￥" + vue.toDisplayString(item.price.split(",")[0]) + "起",
                      1
                      /* TEXT */
                    )
                  ])
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "search-good-list-null"
            }, "没有找到相关产品"))
          ])
        ]);
      };
    }
  };
  const searchGoodList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-45e1ae48"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/search/cpns/search-good-list.vue"]]);
  const _sfc_main$2 = {
    __name: "search",
    setup(__props) {
      const searchStore = useSearchStore();
      const { searchList } = storeToRefs(searchStore);
      const searchValue = vue.ref("");
      const isSearch = vue.ref(true);
      const searchGoodListRef = vue.ref();
      vue.watch(searchValue, async (newValue) => {
        if (!newValue) {
          searchList.value.length = 0;
          return;
        }
        await searchStore.fetchSearchList(newValue, 1);
      });
      const localHistoryList = uni.getStorageSync("SEARCH_HISTORY").length === 0 ? [] : uni.getStorageSync("SEARCH_HISTORY").split(",");
      function setLocalStorage(value) {
        const index = localHistoryList.indexOf(value);
        if (index !== -1) {
          localHistoryList.splice(index, 1);
        }
        localHistoryList.unshift(value);
        uni.setStorageSync("SEARCH_HISTORY", localHistoryList.join(","));
      }
      async function search() {
        isSearch.value = false;
        setLocalStorage(searchValue.value);
      }
      function handleItemClick(id, value) {
        setLocalStorage(value);
        uni.navigateTo({
          url: `/pages/detail/detail?goodid=${id}`
        });
        searchValue.value = "";
        searchList.value.length = 0;
      }
      function handleSearchClick(value) {
        setLocalStorage(value);
        isSearch.value = false;
        searchValue.value = value;
      }
      vue.onMounted(() => {
        searchList.value.length = 0;
      });
      onLoad((option) => {
        if (option.searchValue) {
          searchValue.value = option.searchValue;
          setLocalStorage(searchValue.value);
          isSearch.value = false;
        }
      });
      onReachBottom(() => {
        var _a;
        if (searchGoodListRef.value) {
          (_a = searchGoodListRef.value) == null ? void 0 : _a.loadMore();
        }
      });
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "search" }, [
          vue.createElementVNode(
            "view",
            {
              class: "search-box",
              style: vue.normalizeStyle({
                height: vue.unref(searchList).length === 0 || !isSearch.value ? "auto" : "100vh"
              })
            },
            [
              vue.createElementVNode("view", {
                class: "search-content-input",
                onClick: _cache[3] || (_cache[3] = ($event) => !isSearch.value && (isSearch.value = true))
              }, [
                vue.createElementVNode("view", { class: "uni-search-bar" }, [
                  vue.createVNode(_component_uni_search_bar, {
                    onConfirm: search,
                    modelValue: searchValue.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchValue.value = $event),
                    radius: "100",
                    readonly: !isSearch.value,
                    cancelButton: "none",
                    onClear: _cache[1] || (_cache[1] = ($event) => vue.unref(searchList).length = 0)
                  }, null, 8, ["modelValue", "readonly"])
                ]),
                isSearch.value ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  class: "text",
                  onClick: vue.withModifiers(search, ["stop"])
                }, "搜索", 8, ["onClick"])) : (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "search-value-box"
                }, [
                  vue.createElementVNode(
                    "view",
                    { class: "search-value" },
                    vue.toDisplayString(searchValue.value),
                    1
                    /* TEXT */
                  ),
                  vue.createVNode(_component_uni_icons, {
                    type: "closeempty",
                    size: "30rpx",
                    color: "#AEAEAE",
                    onClick: _cache[2] || (_cache[2] = ($event) => searchValue.value = "")
                  })
                ]))
              ]),
              vue.unref(searchList).length !== 0 && isSearch.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "search-content-list"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(searchList), (item) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: item.Goodid,
                      class: "search-content-item",
                      onClick: ($event) => handleItemClick(item.Goodid, item.Goodname)
                    }, vue.toDisplayString(item.Goodname), 9, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ],
            4
            /* STYLE */
          ),
          vue.createCommentVNode(" 微信小程序不让Component "),
          isSearch.value ? (vue.openBlock(), vue.createBlock(searchContent, {
            key: 0,
            searchValue: searchValue.value,
            onSearchClick: handleSearchClick,
            onDeleteStorage: _cache[4] || (_cache[4] = ($event) => vue.unref(localHistoryList).length = 0)
          }, null, 8, ["searchValue"])) : (vue.openBlock(), vue.createBlock(searchGoodList, {
            key: 1,
            ref_key: "searchGoodListRef",
            ref: searchGoodListRef,
            searchValue: searchValue.value
          }, null, 8, ["searchValue"]))
        ]);
      };
    }
  };
  const PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c10c040c"], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/search/search.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, "login");
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/1/Documents/person_file/mallApp/pages/login/login.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/category/category", PagesCategoryCategory);
  __definePage("pages/shopping/shopping", PagesShoppingShopping);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/detail/detail", PagesDetailDetail);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/login/login", PagesLoginLogin);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/1/Documents/person_file/mallApp/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    return {
      app,
      Pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
