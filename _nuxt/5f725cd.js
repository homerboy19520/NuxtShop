(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultModal_vue_vue_type_style_index_0_id_50580736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(515);
/* harmony import */ var _node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultModal_vue_vue_type_style_index_0_id_50580736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultModal_vue_vue_type_style_index_0_id_50580736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/result-page/ResultModal.vue?vue&type=template&id=50580736&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"result"},[(_vm.pageContent.valid)?_c('div',{staticClass:"result__valid"},[_c('div',{staticClass:"result__wrapper main__container"},[_c('span',{staticClass:"result__title"},[_vm._v(_vm._s(_vm.pageContent.title)),_c('span',[_vm._v(_vm._s(_vm.pageContent.span))])]),_vm._v(" "),_c('ul',{staticClass:"result__list"},_vm._l((_vm.pageContent.result),function(item,index){return _c('li',{key:index,staticClass:"result__item"},[_c('NuxtLink',{staticClass:"result__linc",attrs:{"to":item.linc}},[_vm._v(_vm._s(item.text)+" ("+_vm._s(item.number)+")")])],1)}),0)]),_vm._v(" "),_c('img',{staticClass:"result__img",attrs:{"alt":_vm.pageContent.alt,"src":_vm.pageContent.img}})]):_c('div',{staticClass:"result__empty main__container"},[_c('p',{staticClass:"result__text"},[_vm._v("\n      "+_vm._s(_vm.MAIN_DATA.emptyResultContent.firstText)),_c('span',[_vm._v("\""+_vm._s(_vm.MAIN_DATA.emptyResultContent.searchText)+"\"")]),_vm._v("\n      "+_vm._s(_vm.MAIN_DATA.emptyResultContent.secondText)+"\n    ")]),_vm._v(" "),_c('span',{staticClass:"result__action"},[_vm._v("\n      "+_vm._s(_vm.MAIN_DATA.emptyResultContent.actionText))]),_vm._v(" "),_c('ul',{staticClass:"result__device-list"},_vm._l((_vm.MAIN_DATA.emptyResultContent.devices),function(item,index){return _c('li',{key:index,staticClass:"result__device-item"},[_c('NuxtLink',{attrs:{"to":item.linc}},[_c('ButtonApp',{staticClass:"result__button",attrs:{"modifier":"primary"}},[_vm._v(_vm._s(item.button))])],1)],1)}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/modals/result-page/ResultModal.vue?vue&type=template&id=50580736&scoped=true&

// EXTERNAL MODULE: ./helpers/mocs.js
var mocs = __webpack_require__(1);

// EXTERNAL MODULE: ./components/ui/Button.vue + 4 modules
var Button = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modals/result-page/ResultModal.vue?vue&type=script&lang=js&
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


/* harmony default export */ var ResultModalvue_type_script_lang_js_ = ({
  name: 'ResultModal',
  components: {
    ButtonApp: Button["default"]
  },
  data: function data() {
    return {
      MAIN_DATA: mocs["b" /* MAIN_DATA */]
    };
  },
  props: {
    pageContent: {
      type: Object
    }
  }
});
// CONCATENATED MODULE: ./components/modals/result-page/ResultModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var result_page_ResultModalvue_type_script_lang_js_ = (ResultModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./components/modals/result-page/ResultModal.vue?vue&type=style&index=0&id=50580736&lang=scss&scoped=true&
var ResultModalvue_type_style_index_0_id_50580736_lang_scss_scoped_true_ = __webpack_require__(518);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./components/modals/result-page/ResultModal.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  result_page_ResultModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "50580736",
  null
  
)

/* harmony default export */ var ResultModal = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);