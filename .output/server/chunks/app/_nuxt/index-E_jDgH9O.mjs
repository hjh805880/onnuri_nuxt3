import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { a as __nuxt_component_0$1, _ as _export_sfc } from '../server.mjs';
import { useSSRContext, defineComponent, ref, resolveComponent, withCtx, createTextVNode, createVNode, reactive, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "defaultModal",
    tabindex: "-1",
    "aria-hidden": "true",
    class: "fixed bg-black-800/70 top-0 left-0 right-0 z-[999999] text-black-700 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full"
  }, _attrs))}><div class="relative w-full max-w-2xl max-h-full"><div class="dark:bg-gray-700 relative bg-white shadow"><div class="dark:border-gray-600 flex items-start justify-between p-4 border-b rounded-t"><h3 class="dark:text-white text-xl font-bold text-gray-900">\uAC1C\uC778\uC815\uBCF4\uCDE8\uAE09\uBC29\uCE68</h3><button type="button" class="hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg" data-modal-hide="defaultModal"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">\uD31D\uC5C5\uB2EB\uAE30</span></button></div><div class="p-6 space-y-4 text-left"><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">1.\uC218\uC9D1\uD558\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uD56D\uBAA9 \uBC0F \uC218\uC9D1 \uBC29\uBC95</p><p class="text-sm">\uD68C\uC0AC\uB294 \uADC0\uD558\uC758 \uC11C\uBE44\uC2A4 \uC774\uC6A9\uC744 \uC704\uD574 \uCD5C\uC18C\uD55C\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD558\uBA70, \uB2E4\uC74C\uACFC \uAC19\uC740 \uAC1C\uC778\uC815\uBCF4\uB97C \uC218\uC9D1\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc"><li>\uC131\uBA85, \uC5F0\uB77D\uCC98 (\uC774\uBA54\uC77C \uC8FC\uC18C, \uC804\uD654\uBC88\uD638 \uB4F1)</li><li>\uC8FC\uC18C, \uC6B0\uD3B8\uBC88\uD638</li><li>\uC11C\uBE44\uC2A4 \uC774\uC6A9\uAE30\uB85D, \uC811\uC18D \uB85C\uADF8 \uB4F1</li></ul></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">2.\uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801</p><p class="text-sm">\uD68C\uC0AC\uB294 \uC218\uC9D1\uD55C \uAC1C\uC778\uC815\uBCF4\uB97C \uB2E4\uC74C\uC758 \uBAA9\uC801\uC73C\uB85C \uC774\uC6A9\uD569\uB2C8\uB2E4.</p><ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc"><li>\uC11C\uBE44\uC2A4 \uC81C\uACF5, \uC0C1\uB2F4 \uBC0F \uBB38\uC758 \uC751\uB2F5</li><li>\uC11C\uBE44\uC2A4 \uC774\uC6A9\uC5D0 \uB300\uD55C \uD1B5\uACC4, \uC124\uBB38\uC870\uC0AC \uB4F1\uC758 \uAE30\uB85D\uACFC \uBD84\uC11D</li><li>\uBC95\uC801 \uC758\uBB34\uC758 \uC774\uD589</li></ul></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">3.\uAC1C\uC778\uC815\uBCF4\uC758 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uAE30\uAC04</p><p class="text-sm">\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uB97C \uADC0\uD558\uAC00 \uB3D9\uC758\uD55C \uAE30\uAC04 \uB3D9\uC548 \uBCF4\uC720 \uBC0F \uC774\uC6A9\uD558\uBA70, \uADF8 \uAE30\uAC04\uC774 \uB9CC\uB8CC\uB41C \uACBD\uC6B0\uC5D0\uB294 \uC9C0\uCCB4 \uC5C6\uC774 \uD30C\uAE30\uD569\uB2C8\uB2E4. \uB2E4\uB9CC, \uAD00\uB828 \uBC95\uB839\uC5D0 \uB530\uB77C \uBCF4\uC874\uD560 \uD544\uC694\uC131\uC774 \uC788\uB294 \uACBD\uC6B0\uC5D0\uB294 \uD574\uB2F9 \uBC95\uB839\uC5D0\uC11C \uC815\uD55C \uAE30\uAC04 \uB3D9\uC548 \uAC1C\uC778\uC815\uBCF4\uB97C \uBCF4\uAD00\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">4.\uAC1C\uC778\uC815\uBCF4\uC758 \uC81C3\uC790 \uC81C\uACF5</p><p class="text-sm">\uD68C\uC0AC\uB294 \uADC0\uD558\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uC81C3\uC790\uC5D0\uAC8C \uC81C\uACF5\uD558\uC9C0 \uC54A\uC73C\uBA70, \uADC0\uD558\uC758 \uB3D9\uC758 \uC5C6\uC774 \uAC1C\uC778\uC815\uBCF4\uB97C \uC678\uBD80\uC5D0 \uC81C\uACF5, \uACF5\uC720\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E8, \uB2E4\uC74C\uC758 \uACBD\uC6B0\uC5D0\uB294 \uC608\uC678\uB85C \uD569\uB2C8\uB2E4.</p><ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc"><li>\uBC95\uB839\uC5D0 \uB530\uB978 \uC758\uBB34\uC801 \uC81C\uCD9C \uC694\uAC74\uC774 \uC788\uB294 \uACBD\uC6B0</li><li>\uADC0\uD558\uAC00 \uC0AC\uC804\uC5D0 \uB3D9\uC758\uD55C \uACBD\uC6B0</li></ul></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">5.\uAC1C\uC778\uC815\uBCF4\uC758 \uD30C\uAE30</p><p class="text-sm">\uD68C\uC0AC\uB294 \uAC1C\uC778\uC815\uBCF4\uC758 \uC218\uC9D1 \uBC0F \uC774\uC6A9\uBAA9\uC801\uC774 \uB2EC\uC131\uB418\uAC70\uB098, \uADC0\uD558\uC758 \uB3D9\uC758 \uCCA0\uD68C \uC2DC \uC9C0\uCCB4 \uC5C6\uC774 \uADC0\uD558\uC758 \uAC1C\uC778\uC815\uBCF4\uB97C \uD30C\uAE30\uD569\uB2C8\uB2E4. \uD30C\uAE30\uB41C \uAC1C\uC778\uC815\uBCF4\uB294 \uBCF5\uAD6C \uBC0F \uC7AC\uC774\uC6A9\uC774 \uBD88\uAC00\uB2A5\uD558\uB3C4\uB85D \uC548\uC804\uD558\uAC8C \uCC98\uB9AC\uB429\uB2C8\uB2E4.</p></div><p class="dark:text-gray-300 text-black-500 pt-2 text-xs font-light">\u203B \uADC0\uD558\uB294 \uB3D9\uC758\uB97C \uAC70\uBD80\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC73C\uB098, \uC774\uC5D0 \uB300\uD55C \uB3D9\uC758\uAC00 \uC5C6\uC744 \uACBD\uC6B0 \uB300\uCD9C\uC2E0\uCCAD \uB4F1\uC774 \uBD88\uAC00\uB2A5\uD560 \uC218 \uC788\uC74C\uC744 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.</p></div><div class="dark:border-gray-600 flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b"><button data-modal-hide="defaultModal" type="button" class="text-white bg-primary-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-800">\uB3D9\uC758</button><button data-modal-hide="defaultModal" type="button" class="text-black-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-black-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">\uB2EB\uAE30</button></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReqPrivacy.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ReqForm",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({
      name: "",
      contact: "",
      apply: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_reqPrivacy = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-black-800 z-10 px-4 mt-6" }, _attrs))}><form class="colCenter shadow-black-500/80 py-14 px-6 bg-white rounded-md shadow-md after:content-[url(&#39;~/assets/img/form_visual_bg.webp&#39;)] after:-z-10 relative after:absolute"><div class="grid grid-cols-1 items-start justify-center gap-6 *:space-y-2"><div class="col-span-1"><label for="name" class="text-black-700 pl-1 text-lg font-bold">\uC774\uB984</label><input${ssrRenderAttr("value", form.name)} type="text" id="name" class="onnuriInput" placeholder="\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." required maxlength="4"></div><div class="col-span-1"><label for="contact" class="text-black-700 pl-1 text-lg font-bold">\uC804\uD654\uBC88\uD638</label><input${ssrRenderAttr("value", form.contact)} type="text" id="contact" class="onnuriInput" placeholder="\uC804\uD654\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694. (- \uC5C6\uC774)" required maxlength="13"></div><div class="col-span-1"><label for="apply" class="text-black-700 pl-1 text-lg font-bold">\uC2E0\uCCAD\uAE08\uC561</label><select id="apply" class="onnuriInput" required><option value="" selected disabled>\uC2E0\uCCAD\uAE08\uC561\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.</option><option value="100\uB9CC\uC6D0 \uC774\uC0C1"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "100\uB9CC\uC6D0 \uC774\uC0C1") : ssrLooseEqual(form.apply, "100\uB9CC\uC6D0 \uC774\uC0C1")) ? " selected" : ""}>100\uB9CC\uC6D0 \uC774\uC0C1</option><option value="500\uB9CC\uC6D0 \uC774\uC0C1"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "500\uB9CC\uC6D0 \uC774\uC0C1") : ssrLooseEqual(form.apply, "500\uB9CC\uC6D0 \uC774\uC0C1")) ? " selected" : ""}>500\uB9CC\uC6D0 \uC774\uC0C1</option><option value="1000\uB9CC\uC6D0 \uC774\uC0C1"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "1000\uB9CC\uC6D0 \uC774\uC0C1") : ssrLooseEqual(form.apply, "1000\uB9CC\uC6D0 \uC774\uC0C1")) ? " selected" : ""}>1000\uB9CC\uC6D0 \uC774\uC0C1</option><option value="2000\uB9CC\uC6D0 \uC774\uC0C1"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "2000\uB9CC\uC6D0 \uC774\uC0C1") : ssrLooseEqual(form.apply, "2000\uB9CC\uC6D0 \uC774\uC0C1")) ? " selected" : ""}>200\uB9CC\uC6D0 \uC774\uC0C1</option><option value="3000\uB9CC\uC6D0 \uC774\uC0C1"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "3000\uB9CC\uC6D0 \uC774\uC0C1") : ssrLooseEqual(form.apply, "3000\uB9CC\uC6D0 \uC774\uC0C1")) ? " selected" : ""}>300\uB9CC\uC6D0 \uC774\uC0C1</option><option value="5000\uB9CC\uC6D0 \uC774\uC0C1"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "5000\uB9CC\uC6D0 \uC774\uC0C1") : ssrLooseEqual(form.apply, "5000\uB9CC\uC6D0 \uC774\uC0C1")) ? " selected" : ""}>300\uB9CC\uC6D0 \uC774\uC0C1</option></select></div><div class="w-full pl-1 text-left"><label for="privacy" class="text-black-700 flex flex-row items-center justify-start space-x-2 text-sm tracking-normal"><input class="border-black-700 size-5 checked:bg-black-700 focus:ring-black-700 checked:text-black-700 text-lg font-bold bg-white border-2 rounded-full" type="checkbox" id="privacy" name="privacy" checked required>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "data-modal-target": "defaultModal",
        "data-modal-toggle": "defaultModal",
        to: "javascript:void(0);",
        class: "underline-offset-4 font-bold underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68`);
          } else {
            return [
              createTextVNode("\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4. </label></div>`);
      _push(ssrRenderComponent(_component_reqPrivacy, null, null, _parent));
      _push(`<button type="submit" class="bg-gradient-to-tl mt-4 to-primary-500 from-secondary-500 w-full px-2 py-4 text-lg font-bold text-white rounded-md animate-bounce animate-infinite animate-duration-[800ms]"><i class="fa-solid fa-user-shield mr-2"></i> \uC2E0\uC6A9\uB4F1\uAE09 \uC601\uD5A5\uC5C6\uB294 \uD55C\uB3C4\uC870\uD68C </button></div></form></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReqForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0$1 = "" + buildAssetsURL("calc_effect.NW_L8cwp.webp");
const _sfc_main$1 = {
  data() {
    return {
      calcPrice: "",
      calcPeriod: "12",
      calcPercent: "",
      monthlyPayment: "000"
    };
  },
  methods: {
    calculateMonthlyPayment(event) {
      event.preventDefault();
      const loanAmount = parseInt(this.calcPrice.replace(/,/g, "")) * 1e4;
      const interestRate = parseFloat(this.calcPercent) / 100;
      const loanPeriod = parseInt(this.calcPeriod);
      const monthlyInterestRate = interestRate / 12;
      const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanPeriod));
      this.monthlyPayment = monthlyPayment.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "after:content-[url('~/assets/img/form_visual_bg.webp')] z-20 after:-z-10 after:bottom-[30%] relative after:absolute after:-scale-x-100" }, _attrs))}><div class="px-4"><div data-aos="fade-up" data-aos-duration="1200" class="text-black-800 shadow-black-500/80 w-full px-6 py-12 bg-white rounded-md shadow-md"><form id="calcForm" class="" autocomplete="off"><div class="text-black-700 flex flex-col items-start justify-center gap-4 text-xl font-bold"><div class="whitespace-nowrap flex items-center justify-start w-full space-x-2"><div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] px-4 py-2 space-x-2 border-2 rounded-md"><i class="fa-solid fa-coins"></i><input${ssrRenderAttr("value", $data.calcPrice)} type="text" placeholder="1,000" required class="ring-0 focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none"><span class="font-bold">\uB9CC\uC6D0</span></div><span class="">\uC744</span></div><div class="whitespace-nowrap flex items-center justify-start w-full space-x-2"><div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] py-2 pl-4 pr-1 space-x-2 border-2 rounded-md"><i class="fa-solid fa-calendar-days"></i><select required class="ring-0 form-select focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none"><option value="12" selected>12\uAC1C\uC6D4</option><option value="24"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "24") : ssrLooseEqual($data.calcPeriod, "24")) ? " selected" : ""}>24\uAC1C\uC6D4</option><option value="36"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "36") : ssrLooseEqual($data.calcPeriod, "36")) ? " selected" : ""}>36\uAC1C\uC6D4</option><option value="48"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "48") : ssrLooseEqual($data.calcPeriod, "48")) ? " selected" : ""}>48\uAC1C\uC6D4</option><option value="60"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "60") : ssrLooseEqual($data.calcPeriod, "60")) ? " selected" : ""}>60\uAC1C\uC6D4</option><option value="72"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "72") : ssrLooseEqual($data.calcPeriod, "72")) ? " selected" : ""}>72\uAC1C\uC6D4</option><option value="84"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "84") : ssrLooseEqual($data.calcPeriod, "84")) ? " selected" : ""}>84\uAC1C\uC6D4</option><option value="96"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "96") : ssrLooseEqual($data.calcPeriod, "96")) ? " selected" : ""}>96\uAC1C\uC6D4</option><option value="108"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "108") : ssrLooseEqual($data.calcPeriod, "108")) ? " selected" : ""}>108\uAC1C\uC6D4</option><option value="120"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "120") : ssrLooseEqual($data.calcPeriod, "120")) ? " selected" : ""}>120\uAC1C\uC6D4</option></select></div><span class="">\uC5D0 \uAC78\uCCD0</span></div><div class="whitespace-nowrap flex items-center justify-start w-full space-x-2"><div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] px-4 py-2 space-x-2 border-2 rounded-md"><i class="fa-solid fa-chart-simple"></i><input${ssrRenderAttr("value", $data.calcPercent)} type="text" placeholder="6.8" required class="ring-0 focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none"><span class="font-bold">%</span></div><span class="">\uC758 \uAE08\uB9AC\uB85C</span></div><span class="text-black-700 pl-[2px] mt-3">\uB9E4\uB2EC <b class="underline-offset-8 text-primary-500 underline">\uC77C\uC815\uD55C \uAE08\uC561</b>\uC744 \uC0C1\uD658\uD55C\uB2E4\uBA74?</span><button type="submit" class="bg-gradient-to-tl to-primary-500 from-secondary-500 rowCenter px-8 py-2 mt-3 font-bold text-white rounded-md"><i class="fa-solid fa-calculator mr-2"></i> \uC6D4 \uB0A9\uC785\uAE08 \uACC4\uC0B0\uD558\uAE30 </button><img${ssrRenderAttr("src", _imports_0$1)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="w-full mt-4"><div class="text-black-800 pl-[2px] flex flex-col items-start justify-center mt-2 font-bold leading-snug"><span class="bg-black-500 px-3 py-1 text-sm font-normal text-white rounded-full">\uC774\uC790 \uD3EC\uD568 \uAE08\uC561</span><span class="mt-2 text-2xl">\uC6D4 \uC0C1\uD658\uAE08\uC561\uC740</span><div class="rowCenter -mt-2"><span id="calcResult" class="text-primary-500 underline-offset-4 text-3xl font-extrabold underline">${ssrInterpolate($data.monthlyPayment)}</span><span class="text-2xl">\uC6D0 \uC785\uB2C8\uB2E4.</span></div></div><div class="text-black-500 flex flex-col items-start justify-center mt-2 space-y-2 text-sm font-light text-left"><div class="rowCenter w-fit space-x-2"><i class="fa-solid fa-circle-exclamation"></i><span class="">\uB0A9\uC785\uAE08\uC740 `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://help.3o3.co.kr/hc/ko/articles/17606680473753-%EC%9B%90%EA%B8%88%EA%B7%A0%EB%93%B1%EC%83%81%ED%99%98VS%EC%9B%90%EB%A6%AC%EA%B8%88%EA%B7%A0%EB%93%B1%EC%83%81%ED%99%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-1%EB%B6%84-%EC%9A%94%EC%95%BD",
    target: "_blank",
    class: "underline-offset-4 text-primary-500 font-medium underline",
    rel: "noopener noreferrer nofollow"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\uC6D0\uB9AC\uAE08 \uADE0\uB4F1\uC0C1\uD658 <i class="fa-solid fa-arrow-up-right-from-square fa-xs mr-1"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("\uC6D0\uB9AC\uAE08 \uADE0\uB4F1\uC0C1\uD658 "),
          createVNode("i", { class: "fa-solid fa-arrow-up-right-from-square fa-xs mr-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`\uC73C\uB85C \uACC4\uC0B0\uB418\uC5C8\uC73C\uBA70, \uAE08\uB9AC \uD560\uC778 \uD61C\uD0DD\uC740 \uD3EC\uD568\uB418\uC5B4 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span></div><div class="rowCenter w-fit space-x-2"><i class="fa-solid fa-circle-exclamation"></i><span class="">\uC815\uD655\uD55C \uAC1C\uC778\uBCC4 \uD55C\uB3C4 \uBC0F \uAE08\uB9AC\uB294 \uD55C\uB3C4\uC870\uD68C\uB97C \uD1B5\uD574 \uD655\uC778\uD558\uC2E4 \uC218 \uC788\uC73C\uBA70, <div class="text-primary-500 font-medium">\uD55C\uB3C4\uC870\uD68C \uC2DC \uAC1C\uC778\uC2E0\uC6A9\uD3C9\uC810\uC5D0\uB294 \uC601\uD5A5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.</div></span></div></div></div></form></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalcForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + buildAssetsURL("section1_visual_bg.af-fgOTg.webp");
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20154.81%20142.22'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;stroke-width:0px;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cpath%20class='cls-1'%20d='M77.4,0C34.65,0,0,27.39,0,61.19c0,22,14.68,41.27,36.72,52.06-1.62,6.05-5.86,21.9-6.71,25.29-1.05,4.21,1.54,4.15,3.24,3.02,1.33-.89,21.21-14.4,29.79-20.23,4.65.69,9.46,1.06,14.37,1.06,42.75,0,77.4-27.4,77.4-61.19S120.15,0,77.4,0ZM39.25,78.14c0,.99-.41,1.96-1.12,2.66-.7.7-1.67,1.1-2.67,1.1h-.83c-1,0-1.98-.4-2.68-1.1-.71-.7-1.12-1.67-1.12-2.66v-27.12h-7.1c-2.18,0-3.94-1.83-3.8-4.04.12-2.04,1.91-3.57,3.95-3.57h22.25c2.19,0,3.94,1.84,3.81,4.05-.12,2.04-1.91,3.57-3.95,3.57h-6.73v27.12ZM76.36,81.64c-1.95.69-4.09-.34-4.77-2.29l-1.92-5.48h-15.44l-1.92,5.48c-.69,1.95-2.82,2.98-4.77,2.29-1.94-.68-2.97-2.82-2.29-4.77l11.09-29.75c.06-.18.14-.34.22-.51.45-2.2,2.73-3.88,5.48-3.88,2.48,0,4.56,1.37,5.29,3.25.01,0,.04.03.04.03l11.28,30.86c.68,1.95-.34,4.09-2.29,4.77ZM104.27,78.59c-.25,1.7-1.8,2.9-3.51,2.9h-15.48c-1.95,0-3.52-1.53-3.52-3.41,0-.22.02-.44.07-.65-.04-.21-.07-.43-.07-.65v-29.11c0-2.47,2.27-4.43,4.9-4.02,2.05.32,3.52,2.17,3.52,4.24v26.79h10.61c2.12,0,3.8,1.81,3.48,3.91ZM133.89,81.15c-1.66,1.25-4.03.91-5.27-.75l-11.19-14.68-2.4,2.4v9.57c0,2.66-2.46,4.74-5.22,4.09-1.9-.44-3.2-2.22-3.2-4.17v-30.94c0-2.66,2.46-4.74,5.22-4.1,1.9.44,3.2,2.22,3.2,4.17v10.89l13.23-13.23c1.45-1.45,3.8-1.45,5.24,0,1.45,1.45,1.45,3.8,0,5.24l-10.68,10.69,11.83,15.53c1.25,1.66.91,4.03-.75,5.27Z'/%3e%3cpath%20class='cls-1'%20d='M61.87,51.85l-5.19,14.8h10.54l-5.19-14.8h-.16Z'/%3e%3c/g%3e%3c/svg%3e";
const _imports_2 = "" + buildAssetsURL("section7_profile_01.N99SR26m.webp");
const _imports_3 = "" + buildAssetsURL("section7_profile_02.-lsdOM4s.webp");
const _imports_4 = "" + buildAssetsURL("section7_profile_03.Uv7jNRwG.webp");
const _imports_5 = "" + buildAssetsURL("section8_visual_bg.Ze9JTO-U.webp");
const _imports_6 = "" + buildAssetsURL("section9_visual_01.hrRaBjKz.webp");
const _imports_7 = "" + buildAssetsURL("section9_visual_02.wgsw4CqA.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const today = /* @__PURE__ */ new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = ref(`${month.toString().padStart(2, "0")}\uC6D4 ${day.toString().padStart(2, "0")}\uC77C`);
    const questions = ref([
      {
        title: "\uB300\uCD9C\uD55C\uB3C4\uC870\uD68C\uB97C \uD588\uC744\uB54C \uC2E0\uC6A9\uB4F1\uAE09\uC5D0 \uC601\uD5A5\uC774 \uC788\uB098\uC694?",
        answer: "\uB300\uCD9C \uBB38\uC758 \uBC0F \uD55C\uB3C4\uB97C \uC870\uD68C\uD558\uC154\uB3C4 \uD0C0 \uAE08\uC735\uC0AC\uC5D0 \uC815\uBCF4\uAC00 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC544 \uC2E0\uC6A9\uB4F1\uAE09\uC5D0 \uC601\uD5A5\uC744 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!",
        open: false
      },
      {
        title: "\uAF2D \uC9C0\uC810\uC5D0 \uBC29\uBB38\uD574\uC57C \uB300\uCD9C\uC774 \uAC00\uB2A5\uD55C\uAC74\uAC00\uC694?",
        answer: "\uC544\uB2D9\uB2C8\uB2E4! \uBE44\uB300\uBA74\uC73C\uB85C \uAC00\uB2A5\uD558\uBA70 \uC804\uBB38\uC0C1\uB2F4\uC6D0\uACFC\uC758 \uD1B5\uD654\uB85C\uB3C4 \uB300\uCD9C\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4! \uC0C1\uB2F4\uC2E0\uCCAD \uD6C4 \uC804\uBB38\uC0C1\uB2F4\uC0AC\uAC00 \uC21C\uCC28\uC801\uC73C\uB85C \uC5F0\uB77D\uC744 \uB4DC\uB9AC\uACE0 \uC788\uC2B5\uB2C8\uB2E4!",
        open: false
      },
      {
        title: "\uCD94\uAC00 \uB300\uCD9C\uC744 \uBC1B\uC744 \uC218\uB3C4 \uC788\uB098\uC694?",
        answer: "\uBB3C\uB860\uC785\uB2C8\uB2E4! \uACE0\uAC1D\uB2D8\uC758 \uD604\uC7AC \uB300\uCD9C \uC0C1\uD669\uC5D0 \uB530\uB77C \uB300\uCD9C\uC774 \uAE30\uB300\uCD9C\uC774 \uC788\uC73C\uC154\uB3C4 \uCD94\uAC00\uB300\uCD9C \uBC0F \uD1B5\uD569\uB300\uD658\uB300\uCD9C\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4!",
        open: false
      }
      // 추가 질문들
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_eb = resolveComponent("eb");
      const _component_ReqForm = _sfc_main$2;
      const _component_CalcForm = __nuxt_component_2;
      const _component_reqForm = _sfc_main$2;
      _push(`<!--[--><section id="section1" class="text-black-800 bg-black-100/80 min-h-dvh w-full pt-8 overflow-hidden text-left"><div class="px-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "http://www.clfa.or.kr/popup_fcsc.asp",
        target: "_blank",
        class: "text-black-500 inline-block mb-6 text-xs font-light"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`2024-4090465-25-5-00001 \uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C [\uC870\uD68C]`);
          } else {
            return [
              createTextVNode("2024-4090465-25-5-00001 \uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C [\uC870\uD68C]")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col items-start justify-center space-y-2"><h2 class="text-black-700 text-xl">\uB300\uCD9C\uC774 \uD544\uC694\uD560\uB550?</h2><h1 class="section1Text text-3xl font-extrabold leading-tight"> \uC27D\uACE0 \uAC04\uD3B8\uD558\uAC8C<br>`);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uBB34\uC9C1\uC790\uB300\uCD9C\uB85C`);
          } else {
            return [
              createTextVNode("\uBB34\uC9C1\uC790\uB300\uCD9C\uB85C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uD574\uACB0\uD558\uC790!`);
          } else {
            return [
              createTextVNode(" \uD574\uACB0\uD558\uC790!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div></div>`);
      _push(ssrRenderComponent(_component_ReqForm, null, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="mt-10"></section><section id="section2" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">\uB300\uCD9C\uC740 \uC5ED\uC2DC \uC628\uB204\uB9AC</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section2Text mt-2 text-3xl font-extrabold leading-tight">`);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC628\uB204\uB9AC\uB294`);
          } else {
            return [
              createTextVNode("\uC628\uB204\uB9AC\uB294")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` \uB2E4\uB985\uB2C8\uB2E4!</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://pf.kakao.com/_AexibG",
        target: "_blank",
        "data-aos": "fade-up",
        "data-aos-duration": "1000",
        class: "w-fit bg-primary-500 rowCenter shadow-primary-500/40 flex px-8 py-2 mt-4 space-x-2 text-white rounded-md shadow-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="w-6"${_scopeId}><span class="text-lg font-bold"${_scopeId}>\uCE74\uCE74\uC624\uD1A1 \uBE60\uB978 \uC0C1\uB2F4\uD558\uAE30</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C",
                class: "w-6"
              }),
              createVNode("span", { class: "text-lg font-bold" }, "\uCE74\uCE74\uC624\uD1A1 \uBE60\uB978 \uC0C1\uB2F4\uD558\uAE30")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 w-full gap-4 px-4 text-lg font-bold leading-snug text-center *:p-4"><div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-arrow-down"></i></div><h3 class=""> \uB0AE\uC740\uAE08\uB9AC<br><b class="text-primary-500">\uC774\uC790\uBD80\uB2F4 NO!</b></h3></div><div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-arrow-up"></i></div><h3 class=""> \uC0C1\uD669\uC5D0 \uB9DE\uB294<br><b class="text-primary-500">\uB300\uCD9C OK!</b></h3></div><div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-hand-point-up"></i></div><h3 class=""> \uC548\uC804\uD55C<br><b class="text-primary-500">\uB300\uCD9C OK!</b></h3></div><div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-scroll"></i></div><h3 class=""> \uC0C1\uB2F4,\uC870\uD68C,\uC2EC\uC0AC\uAE4C\uC9C0<br><b class="text-primary-500">\uBE60\uB978\uC9C4\uD589 OK!</b></h3></div><div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-coins"></i></div><h3 class=""> \uCDE8\uAE09<br><b class="text-primary-500">\uC218\uC218\uB8CC NO!</b></h3></div><div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-comments-dollar"></i></div><h3 class=""> 1:1 \uBB34\uB8CC\uC0C1\uB2F4\uC744 \uD1B5\uD574<br><b class="text-primary-500">\uC6D0\uD558\uB294 \uB2F5\uBCC0 OK!</b></h3></div></div></div></section><section id="section3" class="w-full py-24 overflow-hidden text-left text-white bg-[url(&#39;~/assets/img/section3_visual_bg.webp&#39;)]"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-xl font-light">\uC0C1\uB2F4\uC2E0\uCCAD \uC804\uC5D0 \uAF2D \uCC38\uACE0\uD558\uC138\uC694!</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section3TextWhite text-3xl font-extrabold leading-tight">\uB300\uCD9C \uC870\uAC74\uC0C1\uC138\uC815\uBCF4</h2></div><div class="text-primary-900 grid w-full grid-cols-1 px-4 *:px-4 *:py-5 gap-4"><div data-aos="fade-up" data-aos-duration="1200" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""> \uCD5C\uC18C 3\uAC1C\uC6D4 \uC774\uC0C1 4\uB300\uBCF4\uD5D8 \uAC00\uC785<br><b>\uC9C1\uC7A5\uC778 OK, \uC0AC\uC5C5\uC790 OK, \uD504\uB9AC\uB79C\uC11C OK, \uC8FC\uBD80\xB7\uAD70\uC778\xB7\uBB34\uC9C1\uC790\uB3C4 OK</b></h3></div><div data-aos="fade-up" data-aos-duration="1400" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""><b>\uB9CC 19\uC138 \uC774\uC0C1</b> \uC131\uC778 OK</h3></div><div data-aos="fade-up" data-aos-duration="1600" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""><b>NICE / KCB 400\uC810 \uC774\uC0C1</b> \uACE0\uAC1D OK</h3></div><div data-aos="fade-up" data-aos-duration="1800" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""><b>\uC5F0\uCCB4/\uC2E0\uBD88 6\uC77C \uC774\uC0C1</b> \uACE0\uAC1D\uC740 NO</h3></div></div></div></section><section id="section4" class="text-black-800 w-full py-24 overflow-hidden text-left bg-[url(&#39;~/assets/img/section4_visual_bg.webp&#39;)]"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">\uC5B8\uC81C\uB098 \uC800\uAE08\uB9AC \uC2E0\uC18D \uB300\uCD9C!</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section4Text text-3xl font-extrabold leading-tight"> \uBB34\uC9C1\uC790, \uC8FC\uBD80, \uD504\uB9AC\uB79C\uC11C<br> \uC0AC\uC5C5\uC790, \uC9C1\uC7A5\uC778, \uAD70\uC778<br>`);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uC800\uAE08\uB9AC\uB85C`);
          } else {
            return [
              createTextVNode("\uC800\uAE08\uB9AC\uB85C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uC2E0\uC18D\uD55C \uB300\uCD9C`);
          } else {
            return [
              createTextVNode(" \uC2E0\uC18D\uD55C \uB300\uCD9C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div><div class="relative flex flex-col items-start justify-center w-full px-6 space-y-6"><div class="left-16 border-black-800 top-6 absolute z-10 w-full h-[calc(100%-1.875rem)] border-l-2"></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 01</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-file-lines"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-primary-500 text-xl font-bold">\uC0C1\uB2F4\uC2E0\uCCAD</h4><h5 class="text-black-700">\uC2E0\uCCAD\uD3FC\uC744 \uD1B5\uD558\uC5EC \uC778\uC801\uC815\uBCF4 \uB0B4\uC6A9\uC744 \uC785\uB825\uD569\uB2C8\uB2E4.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-700 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 02</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-secondary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-phone-volume"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-secondary-500 text-xl font-bold">\uB300\uCD9C\uBB34\uB8CC\uC0C1\uB2F4</h4><h5 class="text-black-700">\uC804\uBB38 \uC0C1\uB2F4\uC0AC\uC640 \uACE0\uAC1D\uB2D8\uC758 \uC0C1\uD669\uC5D0 \uB9DE\uCDB0 \uC0C1\uB2F4\uC744 \uC9C4\uD589\uD569\uB2C8\uB2E4.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 03</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-magnifying-glass-plus"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-primary-500 text-xl font-bold">\uC548\uC804\uD55C \uB300\uCD9C\uC2EC\uC0AC</h4><h5 class="text-black-700">\uACE0\uAC1D\uB2D8\uC758 \uC815\uBCF4\uB97C \uD1A0\uB300\uB85C \uC2DC\uC2A4\uD15C\uC5D0 \uC758\uD574 \uC2EC\uC0AC\uAC00 \uC9C4\uD589\uB429\uB2C8\uB2E4.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-700 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 04</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-secondary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-address-card"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-secondary-500 text-xl font-bold">\uB300\uCD9C\uC2B9\uC778</h4><h5 class="text-black-700">\uB300\uCD9C\uC2B9\uC778 \uC5EC\uBD80, \uD55C\uB3C4 \uBC0F \uAE08\uB9AC, \uC900\uBE44 \uC11C\uB958 \uB4F1\uC744 \uC548\uB0B4\uD569\uB2C8\uB2E4.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 05</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-sack-dollar"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-primary-500 text-xl font-bold">\uB300\uCD9C\uAE08 \uC785\uAE08</h4><h5 class="text-black-700">\uB300\uCD9C\uC2B9\uC778 \uC774\uD6C4, \uACE0\uAC1D\uB2D8 \uACC4\uC88C\uC5D0 \uB300\uCD9C\uAE08\uC774 \uC785\uAE08\uB429\uB2C8\uB2E4.</h5></div></div></div></div></section><section id="section5" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">\uB098\uC758 \uC6D4 \uC0C1\uD658\uAE08\uC561\uC774 \uC5B4\uB5BB\uAC8C \uB420\uAE4C?</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section5Text text-3xl font-extrabold leading-tight"> \uC6D4 \uB0A9\uC785\uAE08 `);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\uACC4\uC0B0\uAE30`);
          } else {
            return [
              createTextVNode("\uACC4\uC0B0\uAE30")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div>`);
      _push(ssrRenderComponent(_component_CalcForm, null, null, _parent));
      _push(`</div></section><section id="section6" class="text-black-800 bg-black-100/70 w-full py-24 overflow-hidden text-left"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">\uACE0\uAC1D\uB2D8\uB4E4\uC774 \uC628\uB204\uB9AC\uC5D0<br>\uC790\uC8FC \uBB3C\uC5B4\uBCF4\uC2DC\uB294 \uC9C8\uBB38\uB4E4\uC785\uB2C8\uB2E4.</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section6Text text-primary-500 text-3xl font-extrabold leading-tight">\uC790\uC8FC \uBB3B\uB294`);
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uC9C8\uBB38`);
          } else {
            return [
              createTextVNode(" \uC9C8\uBB38")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div><div class="grid items-center justify-center w-full grid-cols-1 gap-4 px-4 text-left"><!--[-->`);
      ssrRenderList(questions.value, (item, index) => {
        _push(`<div class="colCenter w-full"${ssrRenderAttr("data-aos", "fade-up")}${ssrRenderAttr("data-aos-duration", 1e3)}${ssrRenderAttr("data-aos-delay-pc", index * 100)}><div${ssrRenderAttr("id", "section6_wrapper_" + (index + 1))} class="${ssrRenderClass({
          section6_list_color: item.open,
          "section6-wrapper": true,
          section6_list_black: !item.open,
          flex: true,
          "items-center": true,
          "justify-between": true,
          "w-full": true,
          "px-4": true,
          "py-3": true,
          "rounded-md": true
        })}"><div class="rowCenter space-x-3"><p class="text-primary-500 size-8 aspect-1 text-xl font-extrabold text-center bg-white rounded-full">${ssrInterpolate(index + 1)}</p><h3 class="text-xl font-bold">${ssrInterpolate(item.title)}</h3></div><div${ssrRenderAttr("id", "section6_list_deactive_" + (index + 1))} class="${ssrRenderClass({ "section6-toggle": true, hidden: item.open })}"><i class="fa-solid fa-chevron-down fa-xl mo-only"></i></div><div${ssrRenderAttr("id", "section6_list_active_" + (index + 1))} class="${ssrRenderClass({ "section6-toggle": true, hidden: !item.open })}"><i class="fa-solid fa-chevron-up fa-xl mo-only"></i></div></div><div${ssrRenderAttr("id", "section6_list_wrap_" + (index + 1))} class="${ssrRenderClass({ "text-black-700": true, "border-primary-300": true, "flex-col": true, "items-start": true, "justify-between": true, hidden: !item.open, "w-full": true, "py-4": true, "space-y-3": true, "text-base": true, "font-light": true, "bg-white": true, "border-b": true })}"><h4 class="section6_list">${ssrInterpolate(item.answer)}</h4></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="section7" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">\uC628\uB204\uB9AC\uC5D0\uC11C \uC131\uACF5\uC801\uC73C\uB85C<br>\uB300\uCD9C \uC9C4\uD589\uD558\uC2E0 \uACE0\uAC1D\uB2D8\uB4E4 \uC785\uB2C8\uB2E4.</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section7Text text-primary-500 text-3xl font-extrabold leading-tight"> \uB300\uCD9C `);
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uC131\uACF5\uC0AC\uB840`);
          } else {
            return [
              createTextVNode(" \uC131\uACF5\uC0AC\uB840")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div><div class="grid w-full grid-cols-1 gap-8 px-4"><div data-aos="zoom-in-right" data-aos-duration="1200" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl"><img${ssrRenderAttr("src", _imports_2)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out"><div class="flex flex-col items-start justify-center w-full space-y-2"><p class="bg-black-700 px-2 py-1 text-xs text-white">${ssrInterpolate(formattedDate.value)}</p><div class="rowCenter w-fit space-x-2"><h3 class="text-2xl font-extrabold">\uAE40**\uB2D8</h3><h4 class="text-black-700 whitespace-nowrap text-base font-semibold">\uBB34\uC9C1\uC790, 35\uC138 \uB0A8\uC131</h4></div><div class="border-black-700 w-full border-b"></div><h5 class="text-black-600 text-sm font-light">\uAE30\uC874 \uB300\uBD80\uC5C5\uCCB4\uC5D0 \uC2E0\uCCAD\uD588\uC744\uB54C \uC2E0\uC6A9\uB4F1\uAE09\uC740 \uC88B\uC740\uB370 \uC18C\uB4DD\uC99D\uBE59\uC774 \uC548\uB3FC\uC11C \uBD80\uACB0\uC774 \uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uADF8\uB7EC\uB2E4 \uC628\uB204\uB9AC\uB300\uBD80\uC5D0 \uBB38\uC758\uD558\uC5EC \uC0C1\uB2F4\uC2E0\uCCAD\uC744 \uD558\uC600\uB294\uB370 \uC804\uBB38\uC0C1\uB2F4\uC6D0\uAED8\uC11C \uCE5C\uC808\uD558\uAC8C \uC790\uC138\uD55C \uC124\uBA85\uC744 \uD574\uC8FC\uC154\uC11C \uC5B4\uB835\uC9C0\uC54A\uAC8C \uC9C4\uD589\uD558\uC600\uC2B5\uB2C8\uB2E4. \uB355\uBD84\uC5D0 \uC790\uAE08 \uD574\uACB0\uC774 \uB418\uC5B4 \uB108\uBB34 \uB2E4\uD589\uC774\uACE0 \uB108\uBB34 \uAC10\uC0AC\uD569\uB2C8\uB2E4.</h5></div></div><div data-aos="zoom-in-left" data-aos-duration="1300" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl"><img${ssrRenderAttr("src", _imports_3)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out"><div class="flex flex-col items-start justify-center w-full space-y-2"><p class="bg-black-700 px-2 py-1 text-xs text-white">${ssrInterpolate(formattedDate.value)}</p><div class="rowCenter w-fit space-x-2"><h3 class="text-2xl font-extrabold">\uC774**\uB2D8</h3><h4 class="text-black-700 whitespace-nowrap text-base font-semibold">\uC8FC\uBD80, 32\uC138 \uC5EC\uC131</h4></div><div class="border-black-700 w-full border-b"></div><h5 class="text-black-600 text-sm font-light">\uC0DD\uD65C\uACE0\uC5D0 \uC2DC\uB2EC\uB824 \uD798\uB4E4\uC5C8\uB294\uB370 \uC628\uB204\uB9AC\uC5D0 \uC5F0\uB77D\uD574\uC11C \uC804\uBB38\uC0C1\uB2F4\uC6D0\uACFC \uC790\uC138\uD55C \uC0C1\uB2F4\uC744 \uC9C4\uD589\uD558\uC600\uACE0, \uC790\uC138\uD558\uAC8C \uC9C4\uD589\uC808\uCC28\uB97C \uC77C\uC77C\uD788 \uC124\uBA85\uD558\uC5EC \uB300\uCD9C \uB2F9\uC77C \uC785\uAE08 \uBC1B\uC558\uC2B5\uB2C8\uB2E4. \uB108\uBB34 \uAC10\uC0AC\uD558\uACE0 \uCCA0\uC800\uD558\uAC8C \uC9C4\uD589\uC744 \uB3C4\uC640\uC8FC\uC154\uC11C \uB108\uBB34 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4.</h5></div></div><div data-aos="zoom-in-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl"><img${ssrRenderAttr("src", _imports_4)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out"><div class="flex flex-col items-start justify-center w-full space-y-2"><p class="bg-black-700 px-2 py-1 text-xs text-white">${ssrInterpolate(formattedDate.value)}</p><div class="rowCenter w-fit space-x-2"><h3 class="text-2xl font-extrabold">\uC2E0**\uB2D8</h3><h4 class="text-black-700 whitespace-nowrap text-base font-semibold">\uC9C1\uC7A5\uC778, 41\uC138 \uB0A8\uC131</h4></div><div class="border-black-700 w-full border-b"></div><h5 class="text-black-600 text-sm font-light">\uAC11\uC791\uC2A4\uB7FD\uAC8C \uD070 \uBAA9\uB3C8\uC774 \uD544\uC694\uD588\uB294\uB370 \uD55C\uB3C4\uAC00 \uBAA8\uC790\uB77C\uC11C \uB2E4\uB978\uACF3 \uC54C\uC544\uBCF4\uB2E4 \uC628\uB204\uB9AC\uB300\uBD80\uB97C \uB9CC\uB098 \uC804\uBB38\uC0C1\uB2F4\uC0AC \uC548\uB0B4\uC5D0 \uB530\uB77C \uC9C4\uD589\uC744 \uD558\uC600\uACE0, \uC81C\uAC00 \uC6D0\uD558\uB294 \uBAA9\uB3C8\uC774 \uB2F9\uC77C \uC2B9\uC778\uB418\uACE0 \uC785\uAE08\uAE4C\uC9C0 \uB418\uC5B4 \uB108\uBB34 \uB2E4\uD589\uC774\uACE0 \uAC10\uC0AC\uD558\uC600\uC2B5\uB2C8\uB2E4.</h5></div></div></div></div></section><section id="section8" class="min-h-dvh bg-primary-500 w-full pt-24 overflow-hidden text-left text-white"><div class="px-6"><div class="flex flex-col items-start justify-center space-y-2"><h2 class="text-xl">\uB300\uCD9C\uC774 \uD544\uC694\uD560\uB550?</h2><h1 class="section8TextWhite text-3xl font-extrabold leading-tight"> \uC27D\uACE0 \uAC04\uD3B8\uD558\uAC8C<br> \uBB34\uC9C1\uC790\uB300\uCD9C\uB85C \uD574\uACB0\uD558\uC790! </h1></div></div>`);
      _push(ssrRenderComponent(_component_reqForm, null, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_5)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="-mt-8"></section><section id="section9" class="text-white w-full py-24 overflow-hidden text-left bg-[url(&#39;~/assets/img/section9_visual_bg.webp&#39;)]"><div class="space-y-10"><div class="px-6 space-y-8"><div class="flex flex-col items-start justify-center space-y-4"><img data-aos="fade-up" data-aos-duration="1000"${ssrRenderAttr("src", _imports_6)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="w-[30%]"><h2 data-aos="fade-up" data-aos-duration="1000" class="section9TextWhite text-primary-500 text-3xl font-extrabold leading-tight">\uBCF4\uC774\uC2A4\uD53C\uC2F1 `);
      _push(ssrRenderComponent(_component_eb, { class: "text-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \uC8FC\uC758\uC0AC\uD56D`);
          } else {
            return [
              createTextVNode(" \uC8FC\uC758\uC0AC\uD56D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div data-aos="fade-up" data-aos-duration="1000" class="w-12 border-b-2 border-white"></div><h3 data-aos="fade-up" data-aos-duration="1200" class="text-black-200 text-xl font-light"> \uC628\uB204\uB9AC\uB294 <b>\uC5B4\uB5A4 \uACBD\uC6B0</b>\uB77C\uB3C4 \uACE0\uAC1D\uB2D8\uC758 \uACC4\uC88C\uBC88\uD638, \uBE44\uBC00\uBC88\uD638, \uBCF4\uC548\uCE74\uB4DC, OTP\uBC88\uD638 \uB4F1 <b class="underline-offset-[.375rem] underline">\uC815\uBCF4\uB97C \uC808\uB300 \uC694\uAD6C\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4!</b></h3></div></div><div class="flex flex-col items-start justify-center px-4 space-y-6"><div data-aos="fade-up" data-aos-duration="1400" class="w-fit"><h4 class="relative z-20 px-2 text-lg font-light"> \uC544\uB798\uC640 \uAC19\uC740 \uC0C1\uD669 \uBC1C\uC0DD \uC2DC <b>\uC989\uC2DC \uC2E0\uACE0\uD558\uC138\uC694<i>!</i></b></h4><img${ssrRenderAttr("src", _imports_7)} alt="\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C \uBB34\uC9C1\uC790\uB300\uCD9C \uC18C\uC561\uB300\uCD9C \uBE44\uB300\uBA74\uB300\uCD9C" class="top-3 w-[19.5625rem] absolute z-10 opacity-35"></div><div data-aos="fade-up" data-aos-duration="1600" class="text-black-700 colCenter w-full p-6 bg-white rounded-md"><div class="flex flex-col items-start justify-center w-full space-y-4"><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[1500ms]"></i><h5 class="font-light">\uB300\uCD9C\uCC98\uB9AC\uBE44\uC6A9 <b>\uC911\uAC1C\uC218\uC218\uB8CC \uC694\uAD6C</b> \uBC0F<br><b>\uC120\uC785\uAE08\uC744 \uC694\uAD6C</b>\uD588\uC744 \uC2DC</h5></div><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[2000ms]"></i><h5 class="font-light">\uB2F9\uC0AC/\uAC80\uCC30/\uACBD\uCC30/\uAE08\uAC10\uC6D0 \uB4F1 \uC0AC\uCE6D\uD558\uC5EC<br><b>\uACC4\uC88C\uC774\uCCB4 \uC694\uAD6C</b>\uD588\uC744 \uC2DC</h5></div><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[2500ms]"></i><h5 class="font-light">\uAC00\uC871 \uBC0F \uC9C0\uC778\uC744 \uC774\uC6A9\uD55C<br><b>\uD611\uBC15\uC131 \uC804\uD654</b>\uC654\uC744 \uC2DC</h5></div><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[3000ms]"></i><h5 class="font-light">\uACC4\uC88C\uC694\uAD6C/\uBCF4\uC548\uCE74\uB4DC/OTP\uBC88\uD638 \uB4F1<br><b>\uC815\uBCF4 \uC694\uAD6C</b> \uC2DC</h5></div></div></div><h6 data-aos="fade-up" data-aos-duration="1600" class="text-black-300 px-2 text-sm font-light">\uC628\uB204\uB9AC\uB300\uBD80\uC911\uAC1C, \uAE08\uC735\uC0AC, \uC815\uBD80\uAE30\uAD00\uC744 \uC0AC\uCE6D\uD558\uC5EC \uC120\uC785\uAE08 \uBC0F \uAC1C\uC778\uAE08\uC735 \uC815\uBCF4\uB97C \uC694\uAD6C\uD558\uB294 \uB4F1 \uC758\uC2EC\uB418\uB294 \uC804\uD654\uB97C \uBC1B\uC73C\uC168\uB2E4\uBA74 \uC544\uB798 \uBC88\uD638\uB85C \uC2E0\uACE0\uBC14\uB78D\uB2C8\uB2E4.</h6><div data-aos="fade-up" data-aos-duration="1800" class="text-black-200 flex flex-col items-start justify-center w-full px-2 space-y-1 font-light">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:010-3468-3554" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>\uC628\uB204\uB9AC \uB300\uD45C\uBC88\uD638</b> : 010-3468-3554`);
          } else {
            return [
              createVNode("b", null, "\uC628\uB204\uB9AC \uB300\uD45C\uBC88\uD638"),
              createTextVNode(" : 010-3468-3554")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:1332" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>\uAE08\uAC10\uC6D0</b> : (\uAD6D\uBC88\uC5C6\uC774) 1332`);
          } else {
            return [
              createVNode("b", null, "\uAE08\uAC10\uC6D0"),
              createTextVNode(" : (\uAD6D\uBC88\uC5C6\uC774) 1332")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:112" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>\uACBD\uCC30\uCCAD</b> : (\uAD6D\uBC88\uC5C6\uC774) 112`);
          } else {
            return [
              createVNode("b", null, "\uACBD\uCC30\uCCAD"),
              createTextVNode(" : (\uAD6D\uBC88\uC5C6\uC774) 112")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-E_jDgH9O.mjs.map
