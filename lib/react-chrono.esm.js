/*
 * react-chrono
 * A modern Timeline component for React
 * v1.2.4
 * MIT License
 */

import { nanoid } from 'nanoid';
import React, { useState, useCallback, createContext, createElement, Fragment, forwardRef, Component, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var useNewScrollPosition;
useNewScrollPosition = __signature__(function (mode, itemWidth) {
  var ref = useState(0);
  var newOffset = ref[0];
  var setNewOffset = ref[1];
  var computeNewOffset = useCallback(function (parent, scroll) {
    var clientWidth = parent.clientWidth;
    var scrollLeft = parent.scrollLeft;
    var scrollTop = parent.scrollTop;
    var clientHeight = parent.clientHeight;
    var timelinePointOffset = scroll.timelinePointOffset;
    var timelinePointWidth = scroll.timelinePointWidth;
    var timelineContentHeight = scroll.timelineContentHeight;
    var timelineContentOffset = scroll.timelineContentOffset;

    if (!timelinePointOffset) {
      return;
    }

    if (mode === "HORIZONTAL" && itemWidth && timelinePointWidth) {
      var contrRight = scrollLeft + clientWidth;
      var circRight = timelinePointOffset + timelinePointWidth;
      var isVisible = timelinePointOffset >= scrollLeft && circRight <= contrRight;
      var isPartiallyVisible = timelinePointOffset < scrollLeft && circRight > scrollLeft || circRight > contrRight && timelinePointOffset < contrRight;
      var leftGap = timelinePointOffset - scrollLeft;
      var rightGap = contrRight - timelinePointOffset;

      if (!(isVisible || isPartiallyVisible)) {
        setNewOffset(timelinePointOffset - itemWidth);
      } else if (leftGap <= itemWidth && leftGap >= 0) {
        setNewOffset(timelinePointOffset - itemWidth);
      } else if (rightGap <= itemWidth && rightGap >= 0) {
        setNewOffset(timelinePointOffset - itemWidth);
      }
    } else if (mode === "VERTICAL" || mode === "TREE") {
      if (!timelineContentOffset || !timelineContentHeight) {
        return;
      }

      var contrBottom = scrollTop + clientHeight;
      var circBottom = timelineContentOffset + timelineContentHeight;
      var isVisible$1 = timelineContentOffset >= scrollTop && circBottom <= contrBottom;
      var isPartiallyVisible$1 = timelineContentOffset < scrollTop && circBottom > scrollTop || circBottom > contrBottom && timelineContentOffset < contrBottom;
      var newOffset = timelineContentOffset - timelineContentHeight;
      var notVisible = !isVisible$1 || isPartiallyVisible$1;

      if (notVisible && newOffset + timelineContentHeight < contrBottom) {
        setNewOffset(newOffset + Math.round(timelineContentHeight / 2));
      } else if (notVisible) {
        setNewOffset(newOffset);
      }
    }
  }, [mode, itemWidth]);
  return [newOffset, computeNewOffset];
}, "useState{[newOffset, setNewOffset](0)}\nuseCallback{computeNewOffset}");
var _default = useNewScrollPosition;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(useNewScrollPosition, "useNewScrollPosition", "D:\\Projects\\2020\\crono\\src\\components\\effects\\useNewScrollPosition.ts");
  reactHotLoader.register(_default, "default", "D:\\Projects\\2020\\crono\\src\\components\\effects\\useNewScrollPosition.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$1 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ChevronLeft = function () { return React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-chevron-left"
}, React.createElement("polyline", {
  points: "15 18 9 12 15 6"
})); };

var _default$1 = ChevronLeft;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChevronLeft, "ChevronLeft", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chev-left.tsx");
  reactHotLoader.register(_default$1, "default", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chev-left.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$2 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ChevronRightIcon = function () { return React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-chevron-right"
}, React.createElement("polyline", {
  points: "9 18 15 12 9 6"
})); };

var _default$2 = ChevronRightIcon;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChevronRightIcon, "ChevronRightIcon", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chev-right.tsx");
  reactHotLoader.register(_default$2, "default", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chev-right.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$3 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ChevronLeft$1 = function () { return React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-chevrons-left"
}, React.createElement("polyline", {
  points: "11 17 6 12 11 7"
}), React.createElement("polyline", {
  points: "18 17 13 12 18 7"
})); };

var _default$3 = ChevronLeft$1;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChevronLeft$1, "ChevronLeft", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chevs-left.tsx");
  reactHotLoader.register(_default$3, "default", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chevs-left.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$4 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ChevronRightIcon$1 = function () { return React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "feather feather-chevrons-right"
}, React.createElement("polyline", {
  points: "13 17 18 12 13 7"
}), React.createElement("polyline", {
  points: "6 17 11 12 6 7"
})); };

var _default$4 = ChevronRightIcon$1;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChevronRightIcon$1, "ChevronRightIcon", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chevs-right.tsx");
  reactHotLoader.register(_default$4, "default", "D:\\Projects\\2020\\crono\\src\\components\\icons\\chevs-right.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$5 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ReplayIcon = function () { return React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, React.createElement("polygon", {
  points: "5 3 19 12 5 21 5 3"
})); };

var _default$5 = ReplayIcon;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReplayIcon, "ReplayIcon", "D:\\Projects\\2020\\crono\\src\\components\\icons\\replay-icon.tsx");
  reactHotLoader.register(_default$5, "default", "D:\\Projects\\2020\\crono\\src\\components\\icons\\replay-icon.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) { cache[arg] = fn(arg); }
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) { break; }
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) { switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } } else { k = ''; }
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) { switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            } }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) { switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              } }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) { switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              } }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) { switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                } }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) { switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              } }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) { return G + p + F; }
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) { return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim()); }
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) { return a; }

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) { break; }

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) { return '-webkit-' + a + a; }
        if (0 < a.indexOf('image-set(', 11)) { return a.replace(ja, '$1-webkit-$2') + a; }
        break;

      case 932:
        if (45 === a.charCodeAt(4)) { switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        } }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) { break; }
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) { break; }

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) { break; }

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) { switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        } }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) { break; }

      case 931:
      case 953:
        if (!0 === la.test(d)) { return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a; }
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) { return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a; }
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) { return x; }
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) { S[A++] = d; }else if ('object' === typeof d) { for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } } else { Y = !!d | 0; }
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) { return content + delimiter; }
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 && // charcode for l
  content.charCodeAt(0) === 108 && // charcode for b
  content.charCodeAt(2) === 98 // this ignores label
  ) {
      return '';
    }
};

var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser ? undefined : weakMemoize(function () {
  var getCache = weakMemoize(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }

    if (prefix === false) {
      return prefixFalseCache;
    }

    return getCache(prefix);
  };
});

var createCache = function createCache(options) {
  if (options === undefined) { options = {}; }
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_min(stylisOptions);

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;

  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert(rule) {
            sheet.insert(rule + map);
          }
        };
      }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;

    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins); // $FlowFixMe

      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  if (process.env.NODE_ENV !== 'production') {
    // https://esbench.com/bench/5bf7371a4cd7e6009ef61d0a
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function (context, content) {
      switch (context) {
        case -1:
          {
            while (commentStart.test(content)) {
              commentEnd.lastIndex = commentStart.lastIndex;

              if (commentEnd.test(content)) {
                commentStart.lastIndex = commentEnd.lastIndex;
                continue;
              }

              throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
            }

            commentStart.lastIndex = 0;
            break;
          }
      }
    });
    stylis.use(function (context, content, selectors) {
      switch (context) {
        case -1:
          {
            var flag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
            var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);

            if (unsafePseudoClasses && cache.compat !== true) {
              unsafePseudoClasses.forEach(function (unsafePseudoClass) {
                var ignoreRegExp = new RegExp(unsafePseudoClass + ".*\\/\\* " + flag + " \\*\\/");
                var ignore = ignoreRegExp.test(content);

                if (unsafePseudoClass && !ignore) {
                  console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
                }
              });
            }

            break;
          }
      }
    });
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

var isBrowser$1 = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$1 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser$1 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$1 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

function css() {
  var arguments$1 = arguments;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments$1[_key];
  }

  return serializeStyles(args);
}

var isBrowser$2 = typeof document !== 'undefined';

var EmotionCacheContext = createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? createCache() : null);
var ThemeContext = createContext({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return createElement(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return forwardRef(render);
};

if (!isBrowser$2) {
  var BasicProvider =
  /*#__PURE__*/
  function (_React$Component) {
    inheritsLoose(BasicProvider, _React$Component);

    function BasicProvider(props, context, updater) {
      var _this;

      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: createCache()
      };
      return _this;
    }

    var _proto = BasicProvider.prototype;

    _proto.render = function render() {
      return createElement(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };

    return BasicProvider;
  }(Component);

  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return createElement(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return createElement(BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles);

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = createElement(type, newProps);

  if (!isBrowser$2 && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return createElement(Fragment, null, createElement("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
};

var Emotion =
/* #__PURE__ */
withEmotionCache(function (props, cache, ref) {
  // use Context.read for the theme when it's stable
  if (typeof props.css === 'function') {
    return createElement(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
} // $FlowFixMe

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) { continue; }
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = withEmotionCache(function (props, context) {
  return createElement(ThemeContext.Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;

    var css = function css() {
      var arguments$1 = arguments;

      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments$1[_key];
      }

      var serialized = serializeStyles(args, context.registered);

      if (isBrowser$2) {
        insertStyles(context, serialized, false);
      } else {
        var res = insertStyles(context, serialized, false);

        if (res !== undefined) {
          rules += res;
        }
      }

      if (!isBrowser$2) {
        serializedHashes += " " + serialized.name;
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      var arguments$1 = arguments;

      if (hasRendered && process.env.NODE_ENV !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments$1[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    if (!isBrowser$2 && rules.length !== 0) {
      var _ref;

      return createElement(Fragment, null, createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }

    return ele;
  });
});

var testOmitPropsOnStringTag = index;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i] != null ? arguments$1[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$3 = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, context, ref) {
      return createElement(ThemeContext.Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') { continue; }

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (process.env.NODE_ENV !== 'production' && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = createElement(finalTag, newProps);

        if (!isBrowser$3 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return createElement(Fragment, null, createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  newStyled[tagName] = newStyled(tagName);
});

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$6 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var TimelineNavWrapper = newStyled.ul`
  border-radius: 25px;
  display: flex;
  list-style: none;
  padding: 0.25rem 0.25rem;
  background: rgba(229,229,229,0.85);
`;
var TimelineNavItem = newStyled.li`
  padding: 0.1rem;
  ${function (p) { return p.disable ? "pointer-events: none; filter: opacity(0.7)" : ""; }};
`;
var TimelineNavButton = newStyled.button`
  align-items: center;
  background: ${function (p) { return p.theme.primary; }};
  border-radius: 50%;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  filter: drop-shadow(0 0 5px rgba(0,0,0,0.25));
  height: 2rem;
  justify-content: center;
  margin: 0 0.2rem;
  outline: 0;
  width: 2rem;

  transform: ${function (p) {
  if (p.mode !== "HORIZONTAL") {
    return `rotate(90deg)`;
  }
}};

  svg {
    width: 100%;
    height: 100%;
  }
`;
var TimelineControlContainer = newStyled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${function (p) { return p.slideShowActive ? "hidden" : "visible"; }};
`;
var ControlButton = newStyled.div`
  align-items: center;
  background: ${function (p) { return p.theme.primary; }};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-left: 0.5rem;
  width: 2rem;

  svg {
    color: #fff;
    width: 60%;
    height: 60%;
  }
`;
var MediaToggle = newStyled(ControlButton)``;
var ReplayWrapper = newStyled(ControlButton)``;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineNavWrapper, "TimelineNavWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.styles.ts");
  reactHotLoader.register(TimelineNavItem, "TimelineNavItem", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.styles.ts");
  reactHotLoader.register(TimelineNavButton, "TimelineNavButton", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.styles.ts");
  reactHotLoader.register(TimelineControlContainer, "TimelineControlContainer", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.styles.ts");
  reactHotLoader.register(ControlButton, "ControlButton", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.styles.ts");
  reactHotLoader.register(MediaToggle, "MediaToggle", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.styles.ts");
  reactHotLoader.register(ReplayWrapper, "ReplayWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.styles.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$7 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var TimelineControl = React.memo(function (ref) {
  var onNext = ref.onNext;
  var onPrevious = ref.onPrevious;
  var onFirst = ref.onFirst;
  var onLast = ref.onLast;
  var disableLeft = ref.disableLeft;
  var disableRight = ref.disableRight;
  var theme = ref.theme;
  var slideShowRunning = ref.slideShowRunning;
  var onReplay = ref.onReplay;
  var slideShowEnabled = ref.slideShowEnabled;
  var mode = ref.mode;

  return React.createElement(TimelineControlContainer, {
    slideShowActive: slideShowRunning
  }, React.createElement(TimelineNavWrapper, null, React.createElement(TimelineNavItem, {
    disable: disableLeft
  }, React.createElement(TimelineNavButton, {
    mode: mode,
    theme: theme,
    onClick: onFirst,
    title: "Go to First",
    "aria-label": "first"
  }, React.createElement(_default$3, null))), React.createElement(TimelineNavItem, {
    disable: disableLeft
  }, React.createElement(TimelineNavButton, {
    mode: mode,
    theme: theme,
    onClick: onPrevious,
    title: "Previous",
    "aria-label": "previous"
  }, React.createElement(_default$1, null))), React.createElement(TimelineNavItem, {
    disable: disableRight
  }, React.createElement(TimelineNavButton, {
    mode: mode,
    theme: theme,
    onClick: onNext,
    title: "Next",
    "aria-label": "next"
  }, React.createElement(_default$2, null))), React.createElement(TimelineNavItem, {
    disable: disableRight
  }, React.createElement(TimelineNavButton, {
    mode: mode,
    theme: theme,
    onClick: onLast,
    title: "Go to Last",
    "aria-label": "last"
  }, React.createElement(_default$4, null))), React.createElement(TimelineNavItem, null, slideShowEnabled && React.createElement(ReplayWrapper, {
    theme: theme,
    onClick: onReplay,
    title: "Play Slideshow"
  }, React.createElement(_default$5, null)))));
});
var _default$6 = TimelineControl;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineControl, "TimelineControl", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.tsx");
  reactHotLoader.register(_default$6, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-control\\timeline-control.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$8 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var TimelineItemContentWrapper = newStyled.div`
  align-items: flex-start;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', monospace;

  height: ${function (p) {
  if (!p.noMedia) {
    return 0;
  }
}};
  justify-content: flex-start;
  line-height: 1.5rem;
  margin: 1rem 0;
  text-align: left;
  width: 100%;
  min-height: ${function (p) { return !p.noMedia ? p.minHeight : "150"; }}px;
  position: relative;

  ${function (p) { return p.noMedia ? `
    background: #fff;
    filter: drop-shadow(0 0 5px rgba(0,0,0,0.2));` : null; }};


  &.active {
    color: ${function (p) { return p.theme.primary; }};
  }
`;
var TimelineContentText = newStyled.span`
  font-size: 0.8rem;
  font-weight: 600;
  padding-left: 0.5rem;
  width: 95%;
  text-align: left;
`;
var TimelineContentTitle = newStyled.span`
  color: #323232;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  &.active {
    color: ${function (p) { return p.theme.primary; }};
  }
  text-align: left;
`;
var TimelineContentDetails = newStyled.p`
  color: #666666;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  touch-action: none;
  width: 97%;

  &.active {
    background: #f9f9f9;
  }
`;
var TimelineContentDetailsWrapper = newStyled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-top: auto;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: 0.35em;
  transition: max-height .2s linear;
  width: 100%;

  &.show-less {
    max-height: 50px;
    overflow: hidden;
  }

  &::-webkit-scrollbar {
    width: 0.35em;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${function (p) { return p.theme.primary; }};
    outline: 1px solid ${function (p) { return p.theme.primary; }};
  }
`;
var ShowMore = newStyled.span`
  cursor: pointer;
  font-size: 0.75rem;
  margin-top: auto;
  margin-bottom: 0.5rem;
  margin-left: 0.75rem;
  visibility: ${function (p) { return p.show ? "visible" : "hidden"; }};
  height: ${function (p) { return !p.show ? "0" : ""; }};
`;
var SlideShowProgressBar = newStyled.span`
  position: absolute;
  height: 5px;
  bottom: -1rem;
  left: 0;
  width: 100%;
  display: block;

  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineItemContentWrapper, "TimelineItemContentWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.styles.ts");
  reactHotLoader.register(TimelineContentText, "TimelineContentText", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.styles.ts");
  reactHotLoader.register(TimelineContentTitle, "TimelineContentTitle", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.styles.ts");
  reactHotLoader.register(TimelineContentDetails, "TimelineContentDetails", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.styles.ts");
  reactHotLoader.register(TimelineContentDetailsWrapper, "TimelineContentDetailsWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.styles.ts");
  reactHotLoader.register(ShowMore, "ShowMore", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.styles.ts");
  reactHotLoader.register(SlideShowProgressBar, "SlideShowProgressBar", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.styles.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$9 = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var MemoTitle = React.memo(function (ref) {
  var title = ref.title;
  var theme = ref.theme;
  var color = ref.color;
  var dir = ref.dir;
  var active = ref.active;

  return title && theme ? React.createElement(TimelineContentTitle, {
  className: active ? "active" : "",
  theme: theme,
  style: {
    color: color
  },
  dir: dir
}, title) : null;
});
var MemoContentText = React.memo(function (ref) {
  var content = ref.content;
  var color = ref.color;
  var dir = ref.dir;

  return content ? React.createElement(TimelineContentText, {
  style: {
    color: color
  },
  dir: dir
}, content) : null;
});

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MemoTitle, "MemoTitle", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\memoized\\index.tsx");
  reactHotLoader.register(MemoContentText, "MemoContentText", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\memoized\\index.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$a = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var MediaWrapper = newStyled.div`
  height: 100%;
  flex-direction: row;
  align-items: center;
  width: 100%;
  align-self: center;
  padding: 0.5rem;
  position: relative;
  background: ${function (p) { return p.active ? `rgba(${p.theme.secondary}, 0.35)` : ""; }};
  border-radius: 4px;
  pointer-events: ${function (p) { return !p.active && p.slideShowActive ? "none" : ""; }};

  ${function (p) {
  if (p.mode === "HORIZONTAL") {
    return `
        justify-content: flex-start;
      `;
  } else {
    if (p.dir === "left") {
      return `
        justify-content: flex-start;
      `;
    } else {
      return `
        justify-content: flex-end;
      `;
    }
  }
}}
`;
var CardImage = newStyled.img`
  max-width: 100%;
  justify-self: center;
  flex: 4;
  visibility: ${function (p) { return p.visible ? "visible" : "hidden"; }};
  border-radius: 4px;
  margin-right: auto;
  object-fit: contain;
  height: 70%;
  margin-left: auto;
`;
var CardVideo = newStyled.video`
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
`;
var MediaDetailsWrapper = newStyled.div`
  /* position: absolute; */
  bottom: -1rem;
  left: 0;
  right: 0;
  /* margin-left: auto; */
  margin-right: auto;
  width: ${function (p) {
  switch (p.mode) {
    case "HORIZONTAL":
      return "100%";

    case "VERTICAL":
      return "100%";

    case "TREE":
      return "100%";
  }
}};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 6px;
  padding-bottom: 0.5rem;
`;
var ErrorMessage = newStyled.span`
  position:absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #a3a3a3;
  text-align: center;
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MediaWrapper, "MediaWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-media\\timeline-card-media.styles.ts");
  reactHotLoader.register(CardImage, "CardImage", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-media\\timeline-card-media.styles.ts");
  reactHotLoader.register(CardVideo, "CardVideo", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-media\\timeline-card-media.styles.ts");
  reactHotLoader.register(MediaDetailsWrapper, "MediaDetailsWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-media\\timeline-card-media.styles.ts");
  reactHotLoader.register(ErrorMessage, "ErrorMessage", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-media\\timeline-card-media.styles.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$b = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var CardMedia = function (ref) {
  var active = ref.active;
  var id = ref.id;
  var mode = ref.mode;
  var onMediaStateChange = ref.onMediaStateChange;
  var theme = ref.theme;
  var title = ref.title;
  var content = ref.content;
  var media = ref.media;
  var slideshowActive = ref.slideshowActive;

  var videoRef = useRef(null);
  var ref$1 = useState(false);
  var loadFailed = ref$1[0];
  var setLoadFailed = ref$1[1];
  useEffect(function () {
    if (!videoRef) {
      return;
    }

    if (active) {
      var _videoRef$current;

      // play the video when active
      (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.play();
    } else {
      var _videoRef$current2;

      // pause the video when not active
      (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 ? void 0 : _videoRef$current2.pause();
    }
  }, [active]);
  var ref$2 = useState(false);
  var mediaLoaded = ref$2[0];
  var setMediaLoaded = ref$2[1];

  var handleMediaLoaded = function () {
    setMediaLoaded(true);
  };

  var handleError = function () {
    setLoadFailed(true);
    onMediaStateChange({
      id: id,
      paused: false,
      playing: false
    });
  };

  var ErrorMessageMem = React.memo(function (ref) {
    var message = ref.message;

    return React.createElement(ErrorMessage, null, message);
  });
  return React.createElement(MediaWrapper, {
    theme: theme,
    active: active,
    mode: mode,
    slideShowActive: slideshowActive
  }, media.type === "VIDEO" && (!loadFailed ? React.createElement(CardVideo, {
    controls: true,
    autoPlay: active,
    ref: videoRef,
    onLoadedData: handleMediaLoaded,
    onPlay: function () { return onMediaStateChange({
      id: id,
      paused: false,
      playing: true
    }); },
    onPause: function () { return onMediaStateChange({
      id: id,
      paused: true,
      playing: false
    }); },
    onEnded: function () { return onMediaStateChange({
      id: id,
      paused: false,
      playing: false
    }); },
    onError: handleError
  }, React.createElement("source", {
    src: media.source.url
  })) : React.createElement(ErrorMessageMem, {
    message: "Failed to load the video"
  })), media.type === "IMAGE" && (!loadFailed ? React.createElement(CardImage, {
    src: media.source.url,
    mode: mode,
    onLoad: handleMediaLoaded,
    onError: handleError,
    visible: mediaLoaded,
    active: active
  }) : React.createElement(ErrorMessageMem, {
    message: "Failed to load the image."
  })), React.createElement(MediaDetailsWrapper, {
    mode: mode
  }, React.createElement(MemoTitle, {
    title: title,
    theme: theme,
    active: active
  }), React.createElement(MemoContentText, {
    content: content
  })));
};

__signature__$b(CardMedia, "useRef{videoRef}\nuseState{[loadFailed, setLoadFailed](false)}\nuseEffect{}\nuseState{[mediaLoaded, setMediaLoaded](false)}");

var _default$7 = CardMedia;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CardMedia, "CardMedia", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-media\\timeline-card-media.tsx");
  reactHotLoader.register(_default$7, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-media\\timeline-card-media.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$c = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TimelineItemContent = function (ref) {
  var active = ref.active;
  var cardHeight = ref.cardHeight;
  var content = ref.content;
  var detailedText = ref.detailedText;
  var id = ref.id;
  var media = ref.media;
  var mode = ref.mode;
  var onShowMore = ref.onShowMore;
  var slideShowActive = ref.slideShowActive;
  var slideItemDuration = ref.slideItemDuration;
  var onElapsed = ref.onElapsed;
  var theme = ref.theme;
  var title = ref.title;
  var onClick = ref.onClick;

  var ref$1 = useState(false);
  var showMore = ref$1[0];
  var setShowMore = ref$1[1];
  var detailsRef = useRef(null);
  var containerRef = useRef(null);
  var canShowMore = useRef(!!detailedText);
  var slideShowElapsed = useRef(0);
  var timerRef = useRef(0);
  var ref$2 = useState(false);
  var paused = ref$2[0];
  var setPaused = ref$2[1]; // disabling auto collapse on inactive
  // useEffect(() => {
  // auto expand the details content when active and slideshow is running
  // if (active && slideShowActive) {
  //   setShowMore(true);
  //   onShowMore();
  // }
  // }, [active, slideShowActive, onShowMore]);

  useEffect(function () {
    var detailsEle = detailsRef.current;

    if (detailsEle) {
      detailsEle.scrollTop = 0;
    }
  }, [showMore]);

  var setupTimer = function (interval) {
    if (!slideItemDuration) {
      return;
    }

    timerRef.current = window.setInterval(function () {
      // clear the timer and move to the next card
      window.clearInterval(timerRef.current);
      id && onElapsed(id);
    }, interval);
  }; // pause the slide show


  var tryHandlePauseSlideshow = function () {
    if (active && slideShowActive) {
      window.clearTimeout(timerRef.current);
      setPaused(true);
    }
  }; // resumes the slide show


  var tryHandleResumeSlideshow = function () {
    if (active && slideShowActive) {
      if (!slideItemDuration) {
        return;
      }

      var interval = Math.round(slideItemDuration - slideShowElapsed.current);
      setPaused(false);

      if (interval > 0) {
        setupTimer(interval);
      }
    }
  };

  useEffect(function () {
    if (!slideItemDuration) {
      return;
    } // setup the timer


    if (active && slideShowActive) {
      setupTimer(slideItemDuration);
    }
  }, [active, slideShowActive]);

  var handleMediaState = function (state) {
    if (state.playing) {
      slideShowActive && tryHandlePauseSlideshow();
    } else if (state.paused) {
      if (!paused && slideShowActive && id) {
        onElapsed(id);
      }
    }
  };

  return React.createElement(TimelineItemContentWrapper, {
    className: active ? "active" : "",
    theme: theme,
    noMedia: !media,
    minHeight: cardHeight,
    mode: mode,
    onClick: function () {
      if (!slideShowActive && onClick && id) {
        onClick(id);
      }
    },
    onMouseEnter: tryHandlePauseSlideshow,
    onMouseLeave: tryHandleResumeSlideshow,
    ref: containerRef
  }, !media && React.createElement(MemoTitle, {
    title: title,
    theme: theme
  }), !media && React.createElement(MemoContentText, {
    content: content
  }), media && React.createElement(_default$7, {
    media: media,
    content: content,
    title: title,
    mode: mode,
    onMediaStateChange: handleMediaState,
    id: id,
    active: active,
    theme: theme,
    slideshowActive: slideShowActive
  }), React.createElement(TimelineContentDetailsWrapper, {
    ref: detailsRef,
    className: !showMore ? "show-less" : "",
    theme: theme
  }, detailedText && !media && React.createElement(TimelineContentDetails, {
    className: showMore ? "active" : ""
  }, detailedText)), !media && React.createElement(ShowMore, {
    role: "button",
    onClick: function () {
      if (active && paused || !slideShowActive) {
        setShowMore(!showMore);
        onShowMore();
      }
    },
    className: "show-more",
    show: canShowMore.current
  }, active ? showMore ? "show less" : "show more" : "..."));
};

__signature__$c(TimelineItemContent, "useState{[showMore, setShowMore](false)}\nuseRef{detailsRef}\nuseRef{containerRef}\nuseRef{canShowMore}\nuseRef{slideShowElapsed}\nuseRef{timerRef}\nuseState{[paused, setPaused](false)}\nuseEffect{}\nuseEffect{}");

var _default$8 = TimelineItemContent;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineItemContent, "TimelineItemContent", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.tsx");
  reactHotLoader.register(_default$8, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card-content\\timeline-card-content.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$d = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var TitleWrapper = newStyled.div`
  border-radius: 0.2rem;
  font-family: 'Open Sans', monospace;
  font-size: 0.8rem;
  font-weight: 600;
  overflow: hidden;
  padding: 0.25rem 0.5rem;
  text-align: right;

  &.active {
    background: ${function (p) { return p.theme.secondary; }};
    color: ${function (p) { return p.theme.primary; }};
  }
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TitleWrapper, "TitleWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-item-title\\timeline-card-title.styles.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$e = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TimelineItemTitle = function (ref) {
  var title = ref.title;
  var active = ref.active;
  var theme = ref.theme;

  return React.createElement(TitleWrapper, {
  className: active ? "active" : "",
  title: title,
  theme: theme
}, title);
};

var _default$9 = TimelineItemTitle;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineItemTitle, "TimelineItemTitle", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-item-title\\timeline-card-title.tsx");
  reactHotLoader.register(_default$9, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-item-title\\timeline-card-title.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$f = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var Wrapper = newStyled.div`
  align-items: center;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  position: relative;

  &.vertical {
    justify-content: flex-start;
    height: 100%;
  }
`;
var Item = newStyled.div``;
var scaleUp = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.4);
  }
`;
var scaleDown = keyframes`
  from {
    transform: scale(1.4);
  }
  to {
    transform: scale(1);
  }
`;
var show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
var TimelinePointWrapper = newStyled.div`
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;
var TimelinePoint = newStyled.div`
  background: ${function (p) { return p.theme.primary; }};
  border-radius: 50%;
  cursor: pointer;
  height: 1rem;
  width: 1rem;

  &.active {
    animation: ${scaleUp} 0.1s ease-in;
    transform: scale(1.4);

    &::after {
      background: ${function (p) { return p.theme.secondary; }};
      border-radius: 50%;
      content: '';
      display: block;
      height: 0.75rem;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      left: 50%;
      width: 0.75rem;
      z-index: -1;
    }
  }
  
  &.in-active {
    animation: ${scaleDown} 0.1s ease-in;
    transform: scale(1);
  }
`;
var TimelineTitleContainer = newStyled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &.vertical {
    margin-bottom: 1rem;
  }
  
  &.horizontal {
    position: absolute;
    &.top {
      bottom: 3rem;
    }
    &.bottom {
      top: 3rem;
    }
  }
`;
var TimelineContentContainer = newStyled.div`
  align-items: flex-start;
  animation: ${show} 0.25s ease-in;
  
  &.horizontal {
    /* position: absolute; */
    min-width: 400px;
    max-width: 70%;
    /* z-index: 9999; */
  }

  &.vertical {
    width: calc(100% - 5rem);
    margin-left: auto;
    flex-direction: column;
    height: 100%;
  }

  &.top {
    /* bottom: 0rem; */
  }

  &.bottom {
    top: 6rem;
    /* left: 0; */
  }
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Wrapper, "Wrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(Item, "Item", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(scaleUp, "scaleUp", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(scaleDown, "scaleDown", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(show, "show", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(TimelinePointWrapper, "TimelinePointWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(TimelinePoint, "TimelinePoint", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(TimelineTitleContainer, "TimelineTitleContainer", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
  reactHotLoader.register(TimelineContentContainer, "TimelineContentContainer", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.styles.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$g = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TimelineItem = function (ref) {
  var active = ref.active;
  var autoScroll = ref.autoScroll;
  var cardHeight = ref.cardHeight;
  var contentDetailedText = ref.contentDetailedText;
  var contentText = ref.contentText;
  var contentTitle = ref.contentTitle;
  var id = ref.id;
  var media = ref.media;
  var mode = ref.mode;
  var onClick = ref.onClick;
  var onElapsed = ref.onElapsed;
  var position = ref.position;
  var slideItemDuration = ref.slideItemDuration;
  var slideShowRunning = ref.slideShowRunning;
  var theme = ref.theme;
  var title = ref.title;
  var wrapperId = ref.wrapperId;

  var circleRef = useRef(null);
  var wrapperRef = useRef(null);
  var contentRef = useRef(null);

  var handleClick = function () {
    if (onClick && !slideShowRunning) {
      onClick(id);
    }
  };

  useEffect(function () {
    if (active) {
      var circle = circleRef.current;
      var wrapper = wrapperRef.current;
      var content = contentRef.current;

      if (circle && wrapper) {
        var circleOffsetLeft = circle.offsetLeft;
        var wrapperOffsetLeft = wrapper.offsetLeft;
        var circleOffsetTop = circle.offsetLeft;
        var wrapperOffsetTop = wrapper.offsetTop;

        if (mode === "HORIZONTAL") {
          autoScroll({
            timelinePointOffset: circleOffsetLeft + wrapperOffsetLeft,
            timelinePointWidth: circle.clientWidth
          });
        } else {
          autoScroll({
            timelinePointOffset: circleOffsetTop + wrapperOffsetTop,
            timelinePointHeight: circle.clientHeight,
            timelineContentHeight: content === null || content === void 0 ? void 0 : content.clientHeight,
            timelineContentOffset: wrapperOffsetTop
          });
        }
      }
    }
  }, [active, autoScroll, mode]);

  var handleOnShowMore = function () {};

  var timelineContent = function () {
    var className = "";

    if (mode === "HORIZONTAL") {
      className = `horizontal ${position === "top" ? "bottom" : "top"}`;
    } else {
      className = "vertical";
    }

    return React.createElement(TimelineContentContainer, {
      className: className,
      ref: contentRef
    }, mode === "VERTICAL" && React.createElement(TimelineTitleContainer, {
      "data-testid": "timeline-title",
      className: `${mode.toLowerCase()} ${position}`
    }, React.createElement(_default$9, {
      title: title,
      active: active,
      theme: theme
    })), React.createElement(_default$8, {
      content: contentText,
      active: active,
      title: contentTitle,
      detailedText: contentDetailedText,
      onShowMore: handleOnShowMore,
      theme: theme,
      slideShowActive: slideShowRunning,
      media: media,
      mode: mode,
      cardHeight: cardHeight,
      slideItemDuration: slideItemDuration,
      onElapsed: onElapsed,
      id: id
    }));
  };

  var showTimelineContent = function () {
    var ele = document.getElementById(wrapperId);

    if (ele) {
      return ReactDOM.createPortal(timelineContent(), ele);
    }
  };

  return React.createElement(Wrapper, {
    ref: wrapperRef,
    className: mode.toLowerCase(),
    "data-testid": "timeline-item"
  }, mode === "HORIZONTAL" && active ? showTimelineContent() : null, React.createElement(TimelinePointWrapper, null, React.createElement(TimelinePoint, {
    className: `${mode.toLowerCase()} ${active ? "active" : "in-active"}`,
    onClick: handleClick,
    ref: circleRef,
    "data-testid": "timeline-circle",
    theme: theme
  })), mode === "HORIZONTAL" && React.createElement(TimelineTitleContainer, {
    className: `${mode.toLowerCase()} ${position}`,
    "data-testid": "timeline-title"
  }, React.createElement(_default$9, {
    title: title,
    active: active,
    theme: theme
  })), mode === "VERTICAL" && timelineContent());
};

__signature__$g(TimelineItem, "useRef{circleRef}\nuseRef{wrapperRef}\nuseRef{contentRef}\nuseEffect{}");

var _default$a = TimelineItem;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineItem, "TimelineItem", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.tsx");
  reactHotLoader.register(_default$a, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-elements\\timeline-card\\timeline-card.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$h = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var TimelineCollectionWrapper = newStyled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 1rem;
  width: 100%;
  &.vertical {
    flex-direction: column;
  }
  &.horizontal {
    flex-direction: row;
  }
`;
var TimelineItemWrapper = newStyled.li`
  width: ${function (p) { return p.width; }}px;
  visibility: hidden;

  &.vertical {
    margin-bottom: 2rem;
    /* min-height: 100px; */
    width: 100%;
  }

  &.visible {
    visibility: visible;
  }
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineCollectionWrapper, "TimelineCollectionWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-horizontal\\timeline-horizontal.styles.ts");
  reactHotLoader.register(TimelineItemWrapper, "TimelineItemWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-horizontal\\timeline-horizontal.styles.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$i = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TimelineCollection = function (ref) {
  var items = ref.items;
  var itemWidth = ref.itemWidth;
  var handleItemClick = ref.handleItemClick;
  var autoScroll = ref.autoScroll;
  var mode = ref.mode;
  var wrapperId = ref.wrapperId;
  var theme = ref.theme;
  var slideShowRunning = ref.slideShowRunning;
  var cardHeight = ref.cardHeight;
  var slideItemDuration = ref.slideItemDuration;
  var onElapsed = ref.onElapsed;

  return React.createElement(TimelineCollectionWrapper, {
    className: mode.toLowerCase(),
    "data-testid": "timeline-collection"
  }, items.map(function (item) { return React.createElement(TimelineItemWrapper, {
    key: item.id,
    width: itemWidth,
    className: `${mode.toLowerCase()} ${item.visible ? "visible" : ""}`
  }, React.createElement(_default$a, Object.assign({}, item, {
    onClick: handleItemClick,
    autoScroll: autoScroll,
    mode: mode,
    wrapperId: wrapperId,
    theme: theme,
    slideShowRunning: slideShowRunning,
    cardHeight: cardHeight,
    slideItemDuration: slideItemDuration,
    onElapsed: onElapsed
  }))); }));
};

var _default$b = TimelineCollection;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineCollection, "TimelineCollection", "D:\\Projects\\2020\\crono\\src\\components\\timeline-horizontal\\timeline-horizontal.tsx");
  reactHotLoader.register(_default$b, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-horizontal\\timeline-horizontal.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$j = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var TimelineTreeWrapper = newStyled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 1rem;
`;
var animateVisible = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;
var Branch = newStyled.div`
  align-items: center;
  display: flex;
  position: relative;
  visibility: hidden;
  width: 100%;
  
  &.left {
    margin-right: auto;
  }
  &.right {
    margin-left: auto;
  }

  &.visible {
    visibility: visible;
  }
`;
var TreeTrunkWrapper = newStyled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 10%;
  
  &.left {
    order: 2;
  }
  
  &.right {
    order: 1;
  }

  &::after {
    background: ${function (p) { return p.bg; }};
    content: '';
    display: block;
    height: 100%;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    right: 0;
    width: 3px;
    z-index: 0;
  }
`;
var TimelineCardContentWrapper = newStyled.div`
  visibility: hidden;
  ${function (p) { return p.alternateCards ? "width: 45%;" : "width: 75%; height: 85%"; }};
  /* padding: 1rem 0; */
  
  &.left {
    order: 1;
  }
  
  &.right {
    order: 2;
  }

  &.visible {
    visibility: visible;
    animation: ${animateVisible} 0.25s ease-in;
  }
`;
var TrunkPointWrapper = newStyled.div`
  position: relative;
  z-index: 1;
`;
var TimelineTreeTitleWrapper = newStyled.div`
  align-items: center;
  display: flex;
  ${function (p) { return p.alternateCards ? "width: 45%" : "width: 10%"; }};

  &.left {
    justify-content: flex-start;
    order: 3;
  }
  
  &.right {
    justify-content: flex-end;
    order: 1;
  }
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineTreeWrapper, "TimelineTreeWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.styles.ts");
  reactHotLoader.register(animateVisible, "animateVisible", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.styles.ts");
  reactHotLoader.register(Branch, "Branch", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.styles.ts");
  reactHotLoader.register(TreeTrunkWrapper, "TreeTrunkWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.styles.ts");
  reactHotLoader.register(TimelineCardContentWrapper, "TimelineCardContentWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.styles.ts");
  reactHotLoader.register(TrunkPointWrapper, "TrunkPointWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.styles.ts");
  reactHotLoader.register(TimelineTreeTitleWrapper, "TimelineTreeTitleWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.styles.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$k = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TreeLeaf = function (props) {
  var className = props.className;
  var id = props.id;
  var onClick = props.onClick;
  var active = props.active;
  var onActive = props.onActive;
  var theme = props.theme;
  var alternateCards = props.alternateCards;
  var slideShowRunning = props.slideShowRunning;
  var circleRef = useRef(null);
  useEffect(function () {
    if (active) {
      var circle = circleRef.current;
      circle && onActive(circle.offsetTop);
    }
  }, [active, onActive]);
  return React.createElement(TreeTrunkWrapper, {
    className: className,
    "data-testid": "tree-leaf",
    bg: theme === null || theme === void 0 ? void 0 : theme.primary,
    alternateCards: alternateCards
  }, React.createElement(TrunkPointWrapper, {
    className: className,
    onClick: function () {
      if (id && onClick && !slideShowRunning) {
        onClick(id);
      }
    },
    ref: circleRef,
    "data-testid": "tree-leaf-click"
  }, React.createElement(TimelinePoint, {
    className: active ? "active" : "in-active",
    theme: theme
  })));
};

__signature__$k(TreeLeaf, "useRef{circleRef}\nuseEffect{}");

var _default$c = TreeLeaf;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TreeLeaf, "TreeLeaf", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree-leaf.tsx");
  reactHotLoader.register(_default$c, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree-leaf.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$l = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TreeBranch = function (props) {
  var contentRef = useRef(null);
  var active = props.active;
  var alternateCards = props.alternateCards;
  var cardHeight = props.cardHeight;
  var className = props.className;
  var contentDetailedText = props.contentDetailedText;
  var contentText = props.contentText;
  var contentTitle = props.contentTitle;
  var id = props.id;
  var index = props.index;
  var media = props.media;
  var mode = props.mode;
  var onActive = props.onActive;
  var onClick = props.onClick;
  var slideItemDuration = props.slideItemDuration;
  var slideShowRunning = props.slideShowRunning;
  var theme = props.theme;
  var title = props.title;
  var visible = props.visible;
  var onElapsed = props.onElapsed;

  var handleOnActive = function (offset) {
    if (contentRef.current) {
      var ref = contentRef.current;
      var offsetTop = ref.offsetTop;
      var clientHeight = ref.clientHeight;
      onActive(offsetTop + offset, offsetTop, clientHeight);
    }
  };

  return React.createElement(Branch, {
    className: `${className} ${visible ? "visible" : ""} branch-main`,
    key: index,
    ref: contentRef,
    "data-testid": "branch-main",
    alternateCards: alternateCards
  }, React.createElement(TimelineTreeTitleWrapper, {
    className: className,
    alternateCards: alternateCards
  }, React.createElement(_default$9, {
    title: title,
    active: active,
    theme: theme
  })), React.createElement(TimelineCardContentWrapper, {
    className: `${className} ${visible ? "visible" : ""}`,
    alternateCards: alternateCards
  }, React.createElement(_default$8, {
    active: active,
    cardHeight: cardHeight,
    content: contentText,
    detailedText: contentDetailedText,
    id: id,
    media: media,
    mode: mode,
    onClick: onClick,
    slideShowActive: slideShowRunning,
    theme: theme,
    title: contentTitle,
    onShowMore: function () { return setTimeout(function () {
      handleOnActive(0);
    }, 200); },
    branchDir: className,
    slideItemDuration: slideItemDuration,
    onElapsed: onElapsed || function () {}
  })), React.createElement(_default$c, {
    className: className,
    id: id,
    active: active,
    onClick: onClick,
    onActive: handleOnActive,
    theme: theme,
    alternateCards: alternateCards,
    slideShowRunning: slideShowRunning
  }));
};

__signature__$l(TreeBranch, "useRef{contentRef}");

var _default$d = TreeBranch;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TreeBranch, "TreeBranch", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree-branch.tsx");
  reactHotLoader.register(_default$d, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree-branch.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$m = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var TimelineTree = function (ref) {
  var items = ref.items;
  var onClick = ref.onClick;
  var autoScroll = ref.autoScroll;
  var theme = ref.theme;
  var alternateCards = ref.alternateCards; if ( alternateCards === void 0 ) alternateCards = true;
  var slideShowRunning = ref.slideShowRunning;
  var mode = ref.mode;
  var cardHeight = ref.cardHeight;
  var slideItemDuration = ref.slideItemDuration;
  var onElapsed = ref.onElapsed;

  // check if the timeline that has become active is visible.
  // if not auto scroll the content and bring it to the view.
  var handleOnActive = useCallback(function (offset, wrapperOffset, height) {
    autoScroll({
      timelinePointOffset: offset,
      timelineContentHeight: height,
      timelineContentOffset: wrapperOffset
    });
  }, [autoScroll]); // todo remove this

  var handleOnShowMore = useCallback(function () {}, []);
  return React.createElement(TimelineTreeWrapper, {
    "data-testid": "tree-main"
  }, items.map(function (item, index) {
    var className = ""; // in tree mode alternate cards position

    if (alternateCards) {
      className = index % 2 === 0 ? "left" : "right";
    } else {
      className = "right";
    }

    return React.createElement(_default$d, {
      className: className,
      id: item.id,
      index: index,
      onClick: onClick,
      contentText: item.contentText,
      active: item.active,
      onActive: handleOnActive,
      key: item.id,
      title: item.title,
      visible: item.visible,
      contentTitle: item.contentTitle,
      contentDetailedText: item.contentDetailedText,
      theme: theme,
      onShowMore: handleOnShowMore,
      alternateCards: alternateCards,
      slideShowRunning: slideShowRunning,
      media: item.media,
      mode: mode,
      cardHeight: cardHeight,
      slideItemDuration: slideItemDuration,
      onElapsed: onElapsed
    });
  }));
};

__signature__$m(TimelineTree, "useCallback{handleOnActive}\nuseCallback{handleOnShowMore}");

var _default$e = TimelineTree;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimelineTree, "TimelineTree", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.tsx");
  reactHotLoader.register(_default$e, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline-tree\\timeline-tree.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$n = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
var Wrapper$1 = newStyled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  user-select: none;
  outline: 0;
  
  &.horizontal {

    &.top {
      justify-content: flex-start;
    }

    &.bottom {
      justify-content: flex-end;
    }
  }
  
  &.vertical, &.tree {
    height: 100%;
  }
  `;
var TimelineMainWrapper = newStyled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  overscroll-behavior: none;
  padding: 1rem 0;
  position: relative;
  scroll-behavior: smooth;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0;    
  }
  scrollbar-width: none;

  &.horizontal {
    height: 3rem;
  }

  &.vertical {
    height: 100%;
  }
 `;
var TimelineMain = newStyled.div`
  align-items: center;
  display: flex;
  left: 0;
  position: absolute;
  transition: all 0.2s ease;

  &.tree {
    height: 100%;
  }
  
  &.vertical {
    align-items: flex-start;
    height: 100%;
    justify-content: flex-start;
    width: 100%;
  }
  `;
var Outline = newStyled.div`
  background: ${function (p) { return p.color; }};
  height: 3px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  width: 100%;
  `;
var TimelineControlContainer$1 = newStyled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  
  filter: ${function (p) {
  if (p.active) {
    return `opacity(1);`;
  } else {
    return `opacity(0.9);`;
  }
}};

  &.hide {
    visibility: hidden;
  }

  &.show {
    visibility: visible;
  }
`;
var TimelineContentRender = newStyled.div`
  /* left: 0; */
  margin-left: auto;
  margin-right: auto;
  /* position: absolute; */
  /* right: 0; */
  /* top: 3rem; */
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Wrapper$1, "Wrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.style.ts");
  reactHotLoader.register(TimelineMainWrapper, "TimelineMainWrapper", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.style.ts");
  reactHotLoader.register(TimelineMain, "TimelineMain", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.style.ts");
  reactHotLoader.register(Outline, "Outline", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.style.ts");
  reactHotLoader.register(TimelineControlContainer$1, "TimelineControlContainer", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.style.ts");
  reactHotLoader.register(TimelineContentRender, "TimelineContentRender", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.style.ts");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$o = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Timeline = function (props) {
  // de-structure the props
  var activeTimelineItem = props.activeTimelineItem;
  var disableNavOnKey = props.disableNavOnKey;
  var itemWidth = props.itemWidth; if ( itemWidth === void 0 ) itemWidth = 200;
  var items = props.items;
  var mode = props.mode; if ( mode === void 0 ) mode = "HORIZONTAL";
  var onNext = props.onNext;
  var onPrevious = props.onPrevious;
  var onTimelineUpdated = props.onTimelineUpdated;
  var slideShowRunning = props.slideShowRunning;
  var onLast = props.onLast;
  var onFirst = props.onFirst;
  var theme = props.theme;
  var titlePosition = props.titlePosition; if ( titlePosition === void 0 ) titlePosition = "TOP";
  var onRestartSlideshow = props.onRestartSlideshow;
  var cardHeight = props.cardHeight;
  var slideShowEnabled = props.slideShowEnabled;
  var slideItemDuration = props.slideItemDuration;
  var hideControls = props.hideControls;
  var ref = _default(mode, itemWidth);
  var newOffSet = ref[0];
  var setNewOffset = ref[1]; // reference to the timeline

  var timelineMainRef = useRef(null); // generate a unique id for the timeline content

  var id = useRef(nanoid()); // handlers for navigation

  var handleNext = function () { return onNext(); };

  var handlePrevious = function () { return onPrevious(); };

  var handleFirst = function () { return onFirst(); };

  var handleLast = function () { return onLast(); }; // handler for keyboard navigation


  var handleKeySelection = function (event) {
    event.preventDefault();
    event.stopPropagation();
    var keyCode = event.keyCode;

    if (mode === "HORIZONTAL" && keyCode === 39 || (mode === "VERTICAL" || mode === "TREE") && keyCode === 40) {
      handleNext();
    } else if (mode === "HORIZONTAL" && keyCode === 37 || (mode === "VERTICAL" || mode === "TREE") && keyCode === 38) {
      handlePrevious();
    } else if (keyCode === 36) {
      handleFirst();
    } else if (keyCode === 35) {
      handleLast();
    }
  };

  var handleTimelineItemClick = function (id, isSlideShow) {
    if (id) {
      for (var idx = 0; idx < items.length; idx++) {
        if (items[idx].id === id) {
          if (isSlideShow && idx < items.length - 1) {
            onTimelineUpdated(idx + 1);
          } else {
            onTimelineUpdated(idx);
          }

          break;
        }
      }
    }
  };

  var handleScroll = useCallback(function (scroll) {
    var element = timelineMainRef.current;

    if (element) {
      setNewOffset(element, scroll);
    }
  }, [setNewOffset]);
  useEffect(function () {
    var ele = timelineMainRef.current;

    if (!ele) {
      return;
    }

    if (mode === "HORIZONTAL") {
      ele.scrollLeft = newOffSet;
    } else {
      ele.scrollTop = newOffSet;
    }
  }, [newOffSet, mode]); // setup observer to hide/show timeline cards aka load on demand

  var observer = new IntersectionObserver(function (entries) {
    // helper functions to hide image/videos
    var hide = function (ele) { return ele.style.display = "none"; };

    var show = function (ele) { return ele.style.display = "block"; };

    entries.forEach(function (entry) {
      var element = entry.target;

      if (entry.isIntersecting) {
        // show img and video when visible.
        element.querySelectorAll("img").forEach(show);
        element.querySelectorAll("video").forEach(show);
        element.querySelectorAll(":scope > div").forEach(function (ele) { return ele.style.visibility = "visible"; });
      } else {
        // hide img and video when not visible.
        element.querySelectorAll("img").forEach(hide);
        element.querySelectorAll("video").forEach(hide);
        element.querySelectorAll(":scope > div").forEach(function (ele) { return ele.style.visibility = "hidden"; });
      }
    });
  }, {
    root: timelineMainRef.current,
    threshold: 0
  });
  useEffect(function () {
    // setup observer for the timeline elements
    setTimeout(function () {
      var element = timelineMainRef.current;

      if (element) {
        var childElements = element.querySelectorAll(".branch-main");
        Array.from(childElements).forEach(function (elem) { return observer.observe(elem); });
      }
    }, 0); // eslint-disable-next-line
  }, []);
  return React.createElement(Wrapper$1, {
    tabIndex: 0,
    onKeyDown: function (evt) { return !disableNavOnKey && !slideShowRunning ? handleKeySelection(evt) : null; },
    className: `${mode.toLowerCase()} ${titlePosition === null || titlePosition === void 0 ? void 0 : titlePosition.toLowerCase()}`
  }, React.createElement(TimelineMainWrapper, {
    ref: timelineMainRef,
    className: mode.toLowerCase()
  }, mode === "TREE" ? React.createElement(_default$e, {
    items: items,
    onClick: handleTimelineItemClick,
    activeTimelineItem: activeTimelineItem,
    autoScroll: handleScroll,
    theme: theme,
    slideShowRunning: slideShowRunning,
    mode: mode,
    cardHeight: cardHeight,
    slideItemDuration: slideItemDuration,
    onElapsed: function (id) { return handleTimelineItemClick(id, true); }
  }) : null, mode === "HORIZONTAL" ? React.createElement(TimelineMain, {
    className: mode.toLowerCase()
  }, React.createElement(Outline, {
    color: theme === null || theme === void 0 ? void 0 : theme.primary
  }), React.createElement(_default$b, {
    items: items,
    itemWidth: itemWidth,
    handleItemClick: handleTimelineItemClick,
    autoScroll: handleScroll,
    mode: mode,
    wrapperId: id.current,
    theme: theme,
    slideShowRunning: slideShowRunning,
    cardHeight: cardHeight,
    slideItemDuration: slideItemDuration,
    onElapsed: function (id) { return handleTimelineItemClick(id, true); }
  })) : null, mode === "VERTICAL" ? React.createElement(_default$e, {
    items: items,
    onClick: handleTimelineItemClick,
    activeTimelineItem: activeTimelineItem,
    autoScroll: handleScroll,
    theme: theme,
    alternateCards: false,
    slideShowRunning: slideShowRunning,
    mode: mode,
    cardHeight: cardHeight,
    slideItemDuration: slideItemDuration,
    onElapsed: function (id) { return handleTimelineItemClick(id, true); }
  }) : null), React.createElement(TimelineContentRender, {
    id: id.current
  }), !hideControls && React.createElement(TimelineControlContainer$1, {
    mode: mode
  }, React.createElement(_default$6, {
    onNext: handleNext,
    onPrevious: handlePrevious,
    onFirst: handleFirst,
    onLast: handleLast,
    disableLeft: activeTimelineItem === 0,
    disableRight: activeTimelineItem === items.length - 1,
    mode: mode,
    theme: theme,
    onReplay: onRestartSlideshow,
    slideShowRunning: slideShowRunning,
    slideShowEnabled: slideShowEnabled
  })));
};

__signature__$o(Timeline, "useNewScrollPosition{[newOffSet, setNewOffset]}\nuseRef{timelineMainRef}\nuseRef{id}\nuseCallback{handleScroll}\nuseEffect{}\nuseEffect{}", function () { return [_default]; });

var _default$f = Timeline;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Timeline, "Timeline", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.tsx");
  reactHotLoader.register(_default$f, "default", "D:\\Projects\\2020\\crono\\src\\components\\timeline\\timeline.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__$p = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Chrono = function (ref) {
  var items = ref.items;
  var itemWidth = ref.itemWidth; if ( itemWidth === void 0 ) itemWidth = 300;
  var titlePosition = ref.titlePosition; if ( titlePosition === void 0 ) titlePosition = "TOP";
  var mode = ref.mode; if ( mode === void 0 ) mode = "HORIZONTAL";
  var disableNavOnKey = ref.disableNavOnKey; if ( disableNavOnKey === void 0 ) disableNavOnKey = false;
  var slideShow = ref.slideShow; if ( slideShow === void 0 ) slideShow = false;
  var slideItemDuration = ref.slideItemDuration; if ( slideItemDuration === void 0 ) slideItemDuration = 5000;
  var theme = ref.theme; if ( theme === void 0 ) theme = {
    primary: "#0f52ba",
    secondary: "#ffdf00"
  };
  var cardHeight = ref.cardHeight; if ( cardHeight === void 0 ) cardHeight = 250;
  var hideControls = ref.hideControls; if ( hideControls === void 0 ) hideControls = false;

  var ref$1 = useState([]);
  var timeLineItems = ref$1[0];
  var setItems = ref$1[1];
  var timeLineItemsRef = useRef();
  var ref$2 = useState(false);
  var slideShowActive = ref$2[0];
  var setSlideshowActive = ref$2[1];
  var ref$3 = useState(0);
  var activeTimelineItem = ref$3[0];
  var setActiveTimelineItem = ref$3[1];

  var initItems = function () { return items ? items.map(function (item, index) {
    return Object.assign({}, item, {
      position: titlePosition.toLowerCase(),
      id: nanoid(),
      visible: true,
      active: index === 0
    });
  }) : []; };

  useEffect(function () {
    if (!items) {
      return;
    }

  }, [slideShowActive]);
  useEffect(function () {
    var items = initItems();
    timeLineItemsRef.current = items;
    setItems(items);
  }, []);

  var handleTimelineUpdate = function (actvTimelineIndex) {
    setItems(function (items) { return items.map(function (item, index) { return Object.assign({}, item, {
      active: index === actvTimelineIndex
    }); }); });
    setActiveTimelineItem(actvTimelineIndex);

    if (items) {
      if (items.length - 1 === actvTimelineIndex) {
        setSlideshowActive(false);
      }
    }
  };

  var restartSlideShow = useCallback(function () {
    setSlideshowActive(true);
    handleTimelineUpdate(0);
  }, []);

  var handleOnNext = function () {
    if (!items) {
      return;
    }

    if (activeTimelineItem < items.length - 1) {
      var newTimeLineItem = activeTimelineItem + 1;
      handleTimelineUpdate(newTimeLineItem);
      setActiveTimelineItem(newTimeLineItem);
    }
  };

  var handleOnPrevious = function () {
    if (activeTimelineItem > 0) {
      var newTimeLineItem = activeTimelineItem - 1;
      handleTimelineUpdate(newTimeLineItem);
      setActiveTimelineItem(newTimeLineItem);
    }
  };

  var handleFirst = useCallback(function () {
    setActiveTimelineItem(0);
    handleTimelineUpdate(0);
  }, []);
  var handleLast = useCallback(function () {
    if (timeLineItems.length) {
      var idx = timeLineItems.length - 1;
      setActiveTimelineItem(idx);
      handleTimelineUpdate(idx);
    }
  }, [timeLineItems]);
  return React.createElement(_default$f, {
    activeTimelineItem: activeTimelineItem,
    disableNavOnKey: disableNavOnKey,
    itemWidth: itemWidth,
    items: timeLineItems,
    mode: mode,
    onFirst: handleFirst,
    onLast: handleLast,
    onNext: handleOnNext,
    onPrevious: handleOnPrevious,
    onRestartSlideshow: restartSlideShow,
    onTimelineUpdated: useCallback(handleTimelineUpdate, []),
    slideItemDuration: slideItemDuration,
    slideShowRunning: slideShowActive,
    slideShowEnabled: slideShow,
    theme: theme,
    titlePosition: titlePosition,
    slideShow: slideShow,
    cardHeight: cardHeight,
    hideControls: hideControls
  });
};

__signature__$p(Chrono, "useState{[timeLineItems, setItems]([])}\nuseRef{timeLineItemsRef}\nuseState{[slideShowActive, setSlideshowActive](false)}\nuseState{[activeTimelineItem, setActiveTimelineItem](0)}\nuseEffect{}\nuseEffect{}\nuseCallback{restartSlideShow}\nuseCallback{handleFirst}\nuseCallback{handleLast}\nuseCallback{}");

var _default$g = Chrono;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Chrono, "Chrono", "D:\\Projects\\2020\\crono\\src\\components\\index.tsx");
  reactHotLoader.register(_default$g, "default", "D:\\Projects\\2020\\crono\\src\\components\\index.tsx");
})();

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

var __signature__$q = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

export { _default$g as Chrono };
