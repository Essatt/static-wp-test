/*! elementor-pro - v3.18.0 - 06-12-2023 */"use strict";(self["webpackChunkelementor_pro"]=self["webpackChunkelementor_pro"]||[]).push([["page-transitions-editor"],{"../modules/page-transitions/assets/js/editor/commands/animate.js":
/*!************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/commands/animate.js ***!
  \************************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=exports.Animate=void 0;class Animate extends $e.modules.CommandBase{apply(){const pageTransition=elementor.$previewContents[0].querySelector('e-page-transition');if(!pageTransition){return;}
pageTransition.animate();}}
exports.Animate=Animate;var _default=exports["default"]=Animate;}),"../modules/page-transitions/assets/js/editor/commands/index.js":
/*!**********************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/commands/index.js ***!
  \**********************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));Object.defineProperty(exports,"Animate",({enumerable:true,get:function(){return _animate.Animate;}}));var _animate=__webpack_require__(/*! ./animate */"../modules/page-transitions/assets/js/editor/commands/animate.js");}),"../modules/page-transitions/assets/js/editor/component.js":
/*!*****************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/component.js ***!
  \*****************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var commands=_interopRequireWildcard(__webpack_require__(/*! ./commands/ */"../modules/page-transitions/assets/js/editor/commands/index.js"));var hooks=_interopRequireWildcard(__webpack_require__(/*! ./hooks/ */"../modules/page-transitions/assets/js/editor/hooks/index.js"));var _pageTransitionPreview=_interopRequireDefault(__webpack_require__(/*! ./hooks/routes/page-transition-preview */"../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js"));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function(e){return e?t:r;})(e);}
function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}
class Component extends $e.modules.ComponentBase{constructor(){super();this.routesHooks={};this.initRouteHooks();}
initRouteHooks(){this.routesHooks.pageTransitionPreview=new _pageTransitionPreview.default();$e.routes.on('run:after',(component,route)=>{this.routesHooks.pageTransitionPreview.run(component,route);});}
getNamespace(){return'page-transitions';}
defaultHooks(){return this.importHooks(hooks);}
defaultCommands(){return this.importCommands(commands);}}
exports["default"]=Component;}),"../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js":
/*!******************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js ***!
  \******************************************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=exports.AnimatePageTransition=void 0;class AnimatePageTransition extends $e.modules.hookData.After{prefix='settings_page_transitions_';settings=['entrance_animation','exit_animation'];getCommand(){return'document/elements/settings';}
getId(){return'animate-page-transitions--document/elements/settings';}
getContainerType(){return'document';}
getConditions(args){return Object.keys(args.settings).some(key=>{key=key.replace(this.prefix,'');return this.settings.includes(key);});}
apply(){$e.run('page-transitions/animate');}}
exports.AnimatePageTransition=AnimatePageTransition;var _default=exports["default"]=AnimatePageTransition;}),"../modules/page-transitions/assets/js/editor/hooks/data/index.js":
/*!************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/index.js ***!
  \************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));Object.defineProperty(exports,"AnimatePageTransition",({enumerable:true,get:function(){return _animatePageTransition.AnimatePageTransition;}}));Object.defineProperty(exports,"ReRenderPageTransition",({enumerable:true,get:function(){return _reRenderPageTransition.ReRenderPageTransition;}}));var _animatePageTransition=__webpack_require__(/*! ./animate-page-transition */"../modules/page-transitions/assets/js/editor/hooks/data/animate-page-transition.js");var _reRenderPageTransition=__webpack_require__(/*! ./re-render-page-transition */"../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js");}),"../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js":
/*!********************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/data/re-render-page-transition.js ***!
  \********************************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=exports.ReRenderPageTransition=void 0;var _utils=__webpack_require__(/*! ../utils */"../modules/page-transitions/assets/js/editor/hooks/utils.js");class ReRenderPageTransition extends $e.modules.hookData.After{prefix='settings_page_transitions_';settings=['entrance_animation','preloader_type','preloader_icon','preloader_image','preloader_animation_type'];getCommand(){return'document/elements/settings';}
getId(){return're-render-page-transitions--document/elements/settings';}
getContainerType(){return'document';}
getConditions(args){return Object.keys(args.settings).some(key=>{key=key.replace(this.prefix,'');return this.settings.includes(key);});}
apply(args){(0,_utils.renderPageTransition)(args.container);}}
exports.ReRenderPageTransition=ReRenderPageTransition;var _default=exports["default"]=ReRenderPageTransition;}),"../modules/page-transitions/assets/js/editor/hooks/index.js":
/*!*******************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/index.js ***!
  \*******************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));var _data=__webpack_require__(/*! ./data */"../modules/page-transitions/assets/js/editor/hooks/data/index.js");Object.keys(_data).forEach(function(key){if(key==="default"||key==="__esModule")return;if(key in exports&&exports[key]===_data[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function(){return _data[key];}});});}),"../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js":
/*!********************************************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/routes/page-transition-preview.js ***!
  \********************************************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _utils=__webpack_require__(/*! ../utils */"../modules/page-transitions/assets/js/editor/hooks/utils.js");class PageTransitionPreview{run(component,route){if('panel/global/settings-page-transitions'===route){(0,_utils.renderPageTransition)(elementor.documents.getCurrent().container);this.togglePageTransitionPreview(true);}else{this.togglePageTransitionPreview(false);}}
togglePageTransitionPreview(on=true){const className='e-page-transition--preview',pageTransition=elementor.$previewContents[0].body.querySelector('e-page-transition');if(!pageTransition){return;}
pageTransition.classList.toggle(className,on);}}
exports["default"]=PageTransitionPreview;}),"../modules/page-transitions/assets/js/editor/hooks/utils.js":
/*!*******************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/hooks/utils.js ***!
  \*******************************************************************/
((__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",({value:true}));exports.getPageTransitionSettings=getPageTransitionSettings;exports.renderPageTransition=renderPageTransition;const prefix='settings_page_transitions_';function getPageTransitionSettings(container){const controls=Object.entries(container.settings.getActiveControls()).filter(([key,control])=>{return key.startsWith(prefix)&&!control.selectors;});const settings={};controls.forEach(([control])=>{settings[control]=container.settings.get(control);});return settings;}
function renderPageTransition(container){let pageTransition=elementor.$previewContents[0].querySelector('e-page-transition');const hasEntranceAnimation=!!container.settings.get(`${prefix}entrance_animation`),hasPreloader=!!container.settings.get(`${prefix}preloader_type`),shouldRender=hasEntranceAnimation||hasPreloader;if(!pageTransition){pageTransition=document.createElement('e-page-transition');pageTransition.classList.add('e-page-transition--preview');elementor.$previewContents[0].body.append(pageTransition);}
pageTransition.toggleAttribute('disabled',!shouldRender);const settings=getPageTransitionSettings(container);Object.entries(settings).forEach(([key,value])=>{key=key.replace(prefix,'');key=key.replaceAll('_','-');if(!value){pageTransition.removeAttribute(key);return;}
if('string'===typeof value){pageTransition.setAttribute(key,value);return;}
Object.entries(value).forEach(([subKey,subValue])=>{let newKey=key;if(subKey!=='value'){newKey=`${key}-${subKey}`;}
pageTransition.setAttribute(newKey,subValue);});});}}),"../modules/page-transitions/assets/js/editor/module.js":
/*!**************************************************************!*\
  !*** ../modules/page-transitions/assets/js/editor/module.js ***!
  \**************************************************************/
((__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */"../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",({value:true}));exports["default"]=void 0;var _component=_interopRequireDefault(__webpack_require__(/*! ./component */"../modules/page-transitions/assets/js/editor/component.js"));class _default extends elementorModules.editor.utils.Module{onInit(){$e.components.register(new _component.default());this.bindEvents();}
bindEvents(){if(window.elementor){this.onAnimateButtonClick();return;}
jQuery(window).on('elementor:init',()=>this.onAnimateButtonClick());}
onAnimateButtonClick(){elementor.channels.editor.on('elementorPageTransitions:animate',()=>{$e.run('page-transitions/animate');});}}
exports["default"]=_default;})}]);