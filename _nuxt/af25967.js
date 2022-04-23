(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreakingModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(510);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreakingModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BreakingModal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/device/BreakingModal.vue?vue&type=template&id=30357d61&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breaking"},[_c('div',{staticClass:"breaking__modal"},[_c('p',{staticClass:"breaking__title"},[_vm._v(_vm._s(_vm.data.title))]),_vm._v(" "),_c('ul',{staticClass:"breaking__list"},_vm._l((_vm.data.breakingCards),function(item,index){return _c('li',{key:index,staticClass:"breaking__item"},[_c('span',{staticClass:"breaking__content"},[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('span',{staticClass:"breaking__description"},[_vm._v(_vm._s(item.time))]),_vm._v(" "),_c('span',{staticClass:"breaking__price"},[_vm._v(_vm._s(item.price))])])}),0),_vm._v(" "),_c('div',{staticClass:"breaking__container"},[_c('ButtonApp',{staticClass:"breaking__button secondary",attrs:{"modifier":"secondary"},on:{"on-button":_vm.onButton}},[_vm._v(_vm._s(_vm.data.secondary))]),_vm._v(" "),_c('ButtonApp',{staticClass:"breaking__button primary",attrs:{"modifier":"primary"},on:{"on-button":_vm.onButton}},[_vm._v(_vm._s(_vm.data.primary))])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/device/BreakingModal.vue?vue&type=template&id=30357d61&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(6);

// EXTERNAL MODULE: ./components/ui/Button.vue + 4 modules
var Button = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/device/BreakingModal.vue?vue&type=script&lang=js&









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var BreakingModalvue_type_script_lang_js_ = ({
  name: "BreakingModal",
  components: {
    ButtonApp: Button["default"]
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex_esm["d" /* mapMutations */])(["togglePopUp"])), {}, {
    onButton: function onButton() {
      this.togglePopUp();
    }
  })
});
// CONCATENATED MODULE: ./components/modals/device/BreakingModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var device_BreakingModalvue_type_script_lang_js_ = (BreakingModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/modals/device/BreakingModal.vue?vue&type=style&index=0&lang=scss&
var BreakingModalvue_type_style_index_0_lang_scss_ = __webpack_require__(511);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/modals/device/BreakingModal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  device_BreakingModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BreakingModal = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);