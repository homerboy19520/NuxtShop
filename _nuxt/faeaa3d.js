(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10,3,4,5],{

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

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsModal_vue_vue_type_style_index_0_id_5dc3a3bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(513);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsModal_vue_vue_type_style_index_0_id_5dc3a3bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsModal_vue_vue_type_style_index_0_id_5dc3a3bc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsPopUp_vue_vue_type_style_index_0_id_20cf4737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(514);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsPopUp_vue_vue_type_style_index_0_id_20cf4737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandsPopUp_vue_vue_type_style_index_0_id_20cf4737_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/device/BrandsModal.vue?vue&type=template&id=5dc3a3bc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brands main__container"},[_c('h5',{staticClass:"brands__title"},[_vm._v(_vm._s(_vm.MAIN_DATA.brandsContent.title))]),_vm._v(" "),_c('ul',{staticClass:"brands__list"},_vm._l((_vm.MAIN_DATA.brandsContent.brands),function(item,index){return _c('li',{key:index,staticClass:"brands__item"},[_c('div',{staticClass:"brands__mask"},[_c('NuxtLink',{staticClass:"brands__linc",attrs:{"to":item.linc}},[_c('IconApp',{attrs:{"name":item.device}})],1)],1)])}),0),_vm._v(" "),_c('ButtonApp',{staticClass:"brands_button",attrs:{"modifier":"secondary"},on:{"on-button":_vm.onButton}},[_vm._v(_vm._s(_vm.MAIN_DATA.brandsContent.button))])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/device/BrandsModal.vue?vue&type=template&id=5dc3a3bc&scoped=true&

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

// EXTERNAL MODULE: ./helpers/mocs.js
var mocs = __webpack_require__(1);

// EXTERNAL MODULE: ./components/ui/Button.vue + 4 modules
var Button = __webpack_require__(18);

// EXTERNAL MODULE: ./components/ui/Icons.vue + 4 modules
var Icons = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/device/BrandsModal.vue?vue&type=script&lang=js&









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




/* harmony default export */ var BrandsModalvue_type_script_lang_js_ = ({
  name: 'BrandsModal',
  components: {
    IconApp: Icons["default"],
    ButtonApp: Button["default"]
  },
  data: function data() {
    return {
      MAIN_DATA: mocs["b" /* MAIN_DATA */]
    };
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex_esm["d" /* mapMutations */])(['toggleBrandsPopUp'])), {}, {
    onButton: function onButton() {
      this.toggleBrandsPopUp();
    }
  })
});
// CONCATENATED MODULE: ./components/modals/device/BrandsModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var device_BrandsModalvue_type_script_lang_js_ = (BrandsModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/modals/device/BrandsModal.vue?vue&type=style&index=0&id=5dc3a3bc&lang=scss&scoped=true&
var BrandsModalvue_type_style_index_0_id_5dc3a3bc_lang_scss_scoped_true_ = __webpack_require__(516);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/modals/device/BrandsModal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  device_BrandsModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "5dc3a3bc",
  null
  
)

/* harmony default export */ var BrandsModal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/BrandsPopUp.vue?vue&type=template&id=20cf4737&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"brands-popup"},[_c('div',{staticClass:"brands-popup__wrapper"},[_c('span',{staticClass:"brands-popup__description"},[_vm._v("Все бренды")]),_vm._v(" "),_c('ul',{staticClass:"brands-popup__list"},_vm._l((_vm.MAIN_DATA.brandsContent.allBrands),function(item,index){return _c('li',{key:index,staticClass:"brands-popup__item"},[_c('NuxtLink',{staticClass:"brands-popup__linc",attrs:{"to":item.linc}},[_vm._v("\n          "+_vm._s(item.brand)+"\n        ")])],1)}),0),_vm._v(" "),_c('div',{staticClass:"brands-popup__button",on:{"click":_vm.onButton}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/BrandsPopUp.vue?vue&type=template&id=20cf4737&scoped=true&

// EXTERNAL MODULE: ./helpers/mocs.js
var mocs = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/BrandsPopUp.vue?vue&type=script&lang=js&
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

/* harmony default export */ var BrandsPopUpvue_type_script_lang_js_ = ({
  name: 'BrandsPopUp',
  data: function data() {
    return {
      MAIN_DATA: mocs["b" /* MAIN_DATA */]
    };
  },
  methods: {
    onButton: function onButton() {
      this.$emit('on-button');
    }
  }
});
// CONCATENATED MODULE: ./components/modals/BrandsPopUp.vue?vue&type=script&lang=js&
 /* harmony default export */ var modals_BrandsPopUpvue_type_script_lang_js_ = (BrandsPopUpvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/modals/BrandsPopUp.vue?vue&type=style&index=0&id=20cf4737&lang=scss&scoped=true&
var BrandsPopUpvue_type_style_index_0_id_20cf4737_lang_scss_scoped_true_ = __webpack_require__(517);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/modals/BrandsPopUp.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modals_BrandsPopUpvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "20cf4737",
  null
  
)

/* harmony default export */ var BrandsPopUp = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_device_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/device.vue?vue&type=template&id=f744d564&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"repair-page"},[_c('transition',{attrs:{"name":"modal"}},[(_vm.isPopUpShow)?_c('PopUp',{directives:[{name:"body-scroll-lock",rawName:"v-body-scroll-lock",value:(_vm.isPopUpShow),expression:"isPopUpShow"}],on:{"on-button":_vm.toggle}}):_vm._e(),_vm._v(" "),(_vm.isCityModal)?_c('CityModal',{directives:[{name:"body-scroll-lock",rawName:"v-body-scroll-lock",value:(_vm.isCityModal),expression:"isCityModal"}],on:{"on-button":_vm.onButton}}):_vm._e(),_vm._v(" "),(_vm.isBrandsPopUp)?_c('BrandsPopUp',{directives:[{name:"body-scroll-lock",rawName:"v-body-scroll-lock",value:(_vm.isBrandsPopUp),expression:"isBrandsPopUp"}],on:{"on-button":_vm.onBrands}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"repair-page__wrapper"},[_c('HeroApp',{staticClass:"repair-page__hero",attrs:{"data":_vm.MAIN_DATA.deviceHero.hero}}),_vm._v(" "),_c('SwiperModal',{staticClass:"repair-page__swiper main__container",attrs:{"modifier":"default","data":_vm.MAIN_DATA.swiperDevice}}),_vm._v(" "),_c('BreakingModal',{staticClass:"repair-page__breaking main__container",attrs:{"data":_vm.MAIN_DATA.breakingContent}}),_vm._v(" "),_c('SwiperModal',{staticClass:"repair-page__swiper main__container",attrs:{"modifier":"models","data":_vm.MAIN_DATA.swiperModels}}),_vm._v(" "),_c('BrandsModal',{staticClass:"repair-page__brands"}),_vm._v(" "),_c('div',{staticClass:"main__container"},[_c('FormModal',{staticClass:"repair-page__form-modal",attrs:{"data":_vm.MAIN_DATA.formContent.firstModal}}),_vm._v(" "),_c('GridModal',{staticClass:"repair-page__grid"}),_vm._v(" "),_c('CalcModal',{staticClass:"repair-page__calc"})],1),_vm._v(" "),_c('div',{staticClass:"video-wrapper"},[_c('VideoModal',{staticClass:"main__container"}),_vm._v(" "),_c('LineApp')],1),_vm._v(" "),_c('div',{staticClass:"main__container"},[_c('GraphicModal'),_vm._v(" "),_c('SpoilerModal',{staticClass:"repair-page__spoiler",attrs:{"data":_vm.MAIN_DATA.spoilerContent}}),_vm._v(" "),_c('SchemeModal',{staticClass:"repair-page__scheme"}),_vm._v(" "),_c('FormModal',{staticClass:"repair-page__form-modal second",attrs:{"data":_vm.MAIN_DATA.formContent.secondModal}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/device.vue?vue&type=template&id=f744d564&

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

// EXTERNAL MODULE: ./components/modals/PopUp.vue + 4 modules
var PopUp = __webpack_require__(59);

// EXTERNAL MODULE: ./helpers/mocs.js
var mocs = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(5);

// EXTERNAL MODULE: ./components/modals/CityModal.vue + 4 modules
var CityModal = __webpack_require__(98);

// EXTERNAL MODULE: ./components/Hero.vue + 4 modules
var Hero = __webpack_require__(182);

// EXTERNAL MODULE: ./components/modals/SwiperModal.vue + 4 modules
var SwiperModal = __webpack_require__(174);

// EXTERNAL MODULE: ./components/modals/device/BreakingModal.vue + 4 modules
var BreakingModal = __webpack_require__(512);

// EXTERNAL MODULE: ./components/modals/device/BrandsModal.vue + 4 modules
var BrandsModal = __webpack_require__(533);

// EXTERNAL MODULE: ./components/modals/FormModal.vue + 4 modules
var FormModal = __webpack_require__(173);

// EXTERNAL MODULE: ./components/modals/GridModal.vue + 4 modules
var GridModal = __webpack_require__(175);

// EXTERNAL MODULE: ./components/modals/CalcModal.vue + 4 modules
var CalcModal = __webpack_require__(176);

// EXTERNAL MODULE: ./components/modals/VideoModal.vue + 4 modules
var VideoModal = __webpack_require__(177);

// EXTERNAL MODULE: ./components/modals/GraphicModal.vue + 4 modules
var GraphicModal = __webpack_require__(178);

// EXTERNAL MODULE: ./components/modals/SpoilerModal.vue + 4 modules
var SpoilerModal = __webpack_require__(179);

// EXTERNAL MODULE: ./components/modals/SchemeModal.vue + 4 modules
var SchemeModal = __webpack_require__(180);

// EXTERNAL MODULE: ./components/modals/Line.vue + 4 modules
var Line = __webpack_require__(181);

// EXTERNAL MODULE: ./components/modals/BrandsPopUp.vue + 4 modules
var BrandsPopUp = __webpack_require__(534);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/device.vue?vue&type=script&lang=js&









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
//

















/* harmony default export */ var devicevue_type_script_lang_js_ = ({
  name: "device-page",
  data: function data() {
    return {
      MAIN_DATA: mocs["b" /* MAIN_DATA */],
      PAGE_DATA: mocs["c" /* PAGE_DATA */]
    };
  },
  components: {
    BrandsPopUp: BrandsPopUp["default"],
    LineApp: Line["default"],
    SchemeModal: SchemeModal["default"],
    SpoilerModal: SpoilerModal["default"],
    GraphicModal: GraphicModal["default"],
    VideoModal: VideoModal["default"],
    CalcModal: CalcModal["default"],
    GridModal: GridModal["default"],
    FormModal: FormModal["default"],
    BrandsModal: BrandsModal["default"],
    BreakingModal: BreakingModal["default"],
    SwiperModal: SwiperModal["default"],
    HeroApp: Hero["default"],
    CityModal: CityModal["default"],
    PopUp: PopUp["default"]
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex_esm["d" /* mapMutations */])(["toggleCityModal", "toggleBrandsPopUp"])), {}, {
    toggle: function toggle() {
      this.isPopUpShow = !this.isPopUpShow;
    },
    onButton: function onButton() {
      this.toggleCityModal();
    },
    onBrands: function onBrands() {
      this.toggleBrandsPopUp();
    }
  }),
  computed: _objectSpread({}, Object(vuex_esm["c" /* mapGetters */])(["isPopUpShow", "isCityModal", "isBrandsPopUp"]))
});
// CONCATENATED MODULE: ./pages/device.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_devicevue_type_script_lang_js_ = (devicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./pages/device.vue?vue&type=style&index=0&lang=scss&
var devicevue_type_style_index_0_lang_scss_ = __webpack_require__(536);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./pages/device.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_devicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var device = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);