"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _Dropdown = _interopRequireDefault(require("../Dropdown"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const SelectCountryComponent = /*#__PURE__*/_react.default.forwardRef((props, currentRef) => {
  const {
    data,
    value,
    valueField,
    labelField,
    imageField,
    selectedTextStyle,
    imageStyle
  } = props;
  const ref = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(currentRef, () => {
    return {
      open: eventOpen,
      close: eventClose
    };
  });
  const eventOpen = () => {
    ref.current.open();
  };
  const eventClose = () => {
    ref.current.close();
  };
  const _renderItem = item => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.styles.item
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
      source: item[imageField],
      style: [_styles.styles.image, imageStyle]
    }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [_styles.styles.selectedTextStyle, selectedTextStyle]
    }, item[labelField]));
  };
  const selectItem = (0, _react.useMemo)(() => {
    const index = data.findIndex(e => e[valueField] === value);
    return data[index];
  }, [data, valueField, value]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, _extends({
    ref: ref
  }, props, {
    renderItem: _renderItem,
    renderLeftIcon: () => {
      if (selectItem !== null && selectItem !== void 0 && selectItem.image) {
        return /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
          source: selectItem.image,
          style: [_styles.styles.image, imageStyle]
        });
      } else {
        return null;
      }
    }
  }));
});
var _default = exports.default = SelectCountryComponent;
//# sourceMappingURL=index.js.map