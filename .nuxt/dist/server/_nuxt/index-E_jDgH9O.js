import { _ as _export_sfc, a as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, useSSRContext, defineComponent, reactive, withCtx, createTextVNode, createVNode, ref, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import "flowbite";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "aos";
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "defaultModal",
    tabindex: "-1",
    "aria-hidden": "true",
    class: "fixed bg-black-800/70 top-0 left-0 right-0 z-[999999] text-black-700 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full"
  }, _attrs))}><div class="relative w-full max-w-2xl max-h-full"><div class="dark:bg-gray-700 relative bg-white shadow"><div class="dark:border-gray-600 flex items-start justify-between p-4 border-b rounded-t"><h3 class="dark:text-white text-xl font-bold text-gray-900">개인정보취급방침</h3><button type="button" class="hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg" data-modal-hide="defaultModal"><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">팝업닫기</span></button></div><div class="p-6 space-y-4 text-left"><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">1.수집하는 개인정보의 항목 및 수집 방법</p><p class="text-sm">회사는 귀하의 서비스 이용을 위해 최소한의 개인정보를 수집하며, 다음과 같은 개인정보를 수집할 수 있습니다.</p><ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc"><li>성명, 연락처 (이메일 주소, 전화번호 등)</li><li>주소, 우편번호</li><li>서비스 이용기록, 접속 로그 등</li></ul></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">2.개인정보의 수집 및 이용목적</p><p class="text-sm">회사는 수집한 개인정보를 다음의 목적으로 이용합니다.</p><ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc"><li>서비스 제공, 상담 및 문의 응답</li><li>서비스 이용에 대한 통계, 설문조사 등의 기록과 분석</li><li>법적 의무의 이행</li></ul></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">3.개인정보의 보유 및 이용기간</p><p class="text-sm">회사는 개인정보를 귀하가 동의한 기간 동안 보유 및 이용하며, 그 기간이 만료된 경우에는 지체 없이 파기합니다. 다만, 관련 법령에 따라 보존할 필요성이 있는 경우에는 해당 법령에서 정한 기간 동안 개인정보를 보관할 수 있습니다.</p></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">4.개인정보의 제3자 제공</p><p class="text-sm">회사는 귀하의 개인정보를 제3자에게 제공하지 않으며, 귀하의 동의 없이 개인정보를 외부에 제공, 공유하지 않습니다. 단, 다음의 경우에는 예외로 합니다.</p><ul class="dark:text-gray-400 text-black-600 pl-6 text-sm font-light leading-relaxed list-disc"><li>법령에 따른 의무적 제출 요건이 있는 경우</li><li>귀하가 사전에 동의한 경우</li></ul></div><div class="space-y-1"><p class="dark:text-gray-600 text-black-800 text-base font-bold leading-relaxed">5.개인정보의 파기</p><p class="text-sm">회사는 개인정보의 수집 및 이용목적이 달성되거나, 귀하의 동의 철회 시 지체 없이 귀하의 개인정보를 파기합니다. 파기된 개인정보는 복구 및 재이용이 불가능하도록 안전하게 처리됩니다.</p></div><p class="dark:text-gray-300 text-black-500 pt-2 text-xs font-light">※ 귀하는 동의를 거부할 권리가 있으나, 이에 대한 동의가 없을 경우 대출신청 등이 불가능할 수 있음을 알려드립니다.</p></div><div class="dark:border-gray-600 flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b"><button data-modal-hide="defaultModal" type="button" class="text-white bg-primary-500 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-800">동의</button><button data-modal-hide="defaultModal" type="button" class="text-black-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-black-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">닫기</button></div></div></div></div>`);
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
      const _component_NuxtLink = __nuxt_component_0;
      const _component_reqPrivacy = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-black-800 z-10 px-4 mt-6" }, _attrs))}><form class="colCenter shadow-black-500/80 py-14 px-6 bg-white rounded-md shadow-md after:content-[url(&#39;~/assets/img/form_visual_bg.webp&#39;)] after:-z-10 relative after:absolute"><div class="grid grid-cols-1 items-start justify-center gap-6 *:space-y-2"><div class="col-span-1"><label for="name" class="text-black-700 pl-1 text-lg font-bold">이름</label><input${ssrRenderAttr("value", form.name)} type="text" id="name" class="onnuriInput" placeholder="이름을 입력해주세요." required maxlength="4"></div><div class="col-span-1"><label for="contact" class="text-black-700 pl-1 text-lg font-bold">전화번호</label><input${ssrRenderAttr("value", form.contact)} type="text" id="contact" class="onnuriInput" placeholder="전화번호를 입력해주세요. (- 없이)" required maxlength="13"></div><div class="col-span-1"><label for="apply" class="text-black-700 pl-1 text-lg font-bold">신청금액</label><select id="apply" class="onnuriInput" required><option value="" selected disabled>신청금액을 선택해주세요.</option><option value="100만원 이상"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "100만원 이상") : ssrLooseEqual(form.apply, "100만원 이상")) ? " selected" : ""}>100만원 이상</option><option value="500만원 이상"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "500만원 이상") : ssrLooseEqual(form.apply, "500만원 이상")) ? " selected" : ""}>500만원 이상</option><option value="1000만원 이상"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "1000만원 이상") : ssrLooseEqual(form.apply, "1000만원 이상")) ? " selected" : ""}>1000만원 이상</option><option value="2000만원 이상"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "2000만원 이상") : ssrLooseEqual(form.apply, "2000만원 이상")) ? " selected" : ""}>200만원 이상</option><option value="3000만원 이상"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "3000만원 이상") : ssrLooseEqual(form.apply, "3000만원 이상")) ? " selected" : ""}>300만원 이상</option><option value="5000만원 이상"${ssrIncludeBooleanAttr(Array.isArray(form.apply) ? ssrLooseContain(form.apply, "5000만원 이상") : ssrLooseEqual(form.apply, "5000만원 이상")) ? " selected" : ""}>300만원 이상</option></select></div><div class="w-full pl-1 text-left"><label for="privacy" class="text-black-700 flex flex-row items-center justify-start space-x-2 text-sm tracking-normal"><input class="border-black-700 size-5 checked:bg-black-700 focus:ring-black-700 checked:text-black-700 text-lg font-bold bg-white border-2 rounded-full" type="checkbox" id="privacy" name="privacy" checked required>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        "data-modal-target": "defaultModal",
        "data-modal-toggle": "defaultModal",
        to: "javascript:void(0);",
        class: "underline-offset-4 font-bold underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`개인정보처리방침`);
          } else {
            return [
              createTextVNode("개인정보처리방침")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`에 동의합니다. </label></div>`);
      _push(ssrRenderComponent(_component_reqPrivacy, null, null, _parent));
      _push(`<button type="submit" class="bg-gradient-to-tl mt-4 to-primary-500 from-secondary-500 w-full px-2 py-4 text-lg font-bold text-white rounded-md animate-bounce animate-infinite animate-duration-[800ms]"><i class="fa-solid fa-user-shield mr-2"></i> 신용등급 영향없는 한도조회 </button></div></form></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReqForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0$1 = "" + __buildAssetsURL("calc_effect.NW_L8cwp.webp");
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
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "after:content-[url('~/assets/img/form_visual_bg.webp')] z-20 after:-z-10 after:bottom-[30%] relative after:absolute after:-scale-x-100" }, _attrs))}><div class="px-4"><div data-aos="fade-up" data-aos-duration="1200" class="text-black-800 shadow-black-500/80 w-full px-6 py-12 bg-white rounded-md shadow-md"><form id="calcForm" class="" autocomplete="off"><div class="text-black-700 flex flex-col items-start justify-center gap-4 text-xl font-bold"><div class="whitespace-nowrap flex items-center justify-start w-full space-x-2"><div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] px-4 py-2 space-x-2 border-2 rounded-md"><i class="fa-solid fa-coins"></i><input${ssrRenderAttr("value", $data.calcPrice)} type="text" placeholder="1,000" required class="ring-0 focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none"><span class="font-bold">만원</span></div><span class="">을</span></div><div class="whitespace-nowrap flex items-center justify-start w-full space-x-2"><div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] py-2 pl-4 pr-1 space-x-2 border-2 rounded-md"><i class="fa-solid fa-calendar-days"></i><select required class="ring-0 form-select focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none"><option value="12" selected>12개월</option><option value="24"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "24") : ssrLooseEqual($data.calcPeriod, "24")) ? " selected" : ""}>24개월</option><option value="36"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "36") : ssrLooseEqual($data.calcPeriod, "36")) ? " selected" : ""}>36개월</option><option value="48"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "48") : ssrLooseEqual($data.calcPeriod, "48")) ? " selected" : ""}>48개월</option><option value="60"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "60") : ssrLooseEqual($data.calcPeriod, "60")) ? " selected" : ""}>60개월</option><option value="72"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "72") : ssrLooseEqual($data.calcPeriod, "72")) ? " selected" : ""}>72개월</option><option value="84"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "84") : ssrLooseEqual($data.calcPeriod, "84")) ? " selected" : ""}>84개월</option><option value="96"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "96") : ssrLooseEqual($data.calcPeriod, "96")) ? " selected" : ""}>96개월</option><option value="108"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "108") : ssrLooseEqual($data.calcPeriod, "108")) ? " selected" : ""}>108개월</option><option value="120"${ssrIncludeBooleanAttr(Array.isArray($data.calcPeriod) ? ssrLooseContain($data.calcPeriod, "120") : ssrLooseEqual($data.calcPeriod, "120")) ? " selected" : ""}>120개월</option></select></div><span class="">에 걸쳐</span></div><div class="whitespace-nowrap flex items-center justify-start w-full space-x-2"><div class="rowCenter border-primary-500 text-primary-500 h-14 w-[calc(90%-60px)] px-4 py-2 space-x-2 border-2 rounded-md"><i class="fa-solid fa-chart-simple"></i><input${ssrRenderAttr("value", $data.calcPercent)} type="text" placeholder="6.8" required class="ring-0 focus:ring-0 focus:border-0 placeholder:font-medium w-full px-2 text-xl font-bold border-none"><span class="font-bold">%</span></div><span class="">의 금리로</span></div><span class="text-black-700 pl-[2px] mt-3">매달 <b class="underline-offset-8 text-primary-500 underline">일정한 금액</b>을 상환한다면?</span><button type="submit" class="bg-gradient-to-tl to-primary-500 from-secondary-500 rowCenter px-8 py-2 mt-3 font-bold text-white rounded-md"><i class="fa-solid fa-calculator mr-2"></i> 월 납입금 계산하기 </button><img${ssrRenderAttr("src", _imports_0$1)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-full mt-4"><div class="text-black-800 pl-[2px] flex flex-col items-start justify-center mt-2 font-bold leading-snug"><span class="bg-black-500 px-3 py-1 text-sm font-normal text-white rounded-full">이자 포함 금액</span><span class="mt-2 text-2xl">월 상환금액은</span><div class="rowCenter -mt-2"><span id="calcResult" class="text-primary-500 underline-offset-4 text-3xl font-extrabold underline">${ssrInterpolate($data.monthlyPayment)}</span><span class="text-2xl">원 입니다.</span></div></div><div class="text-black-500 flex flex-col items-start justify-center mt-2 space-y-2 text-sm font-light text-left"><div class="rowCenter w-fit space-x-2"><i class="fa-solid fa-circle-exclamation"></i><span class="">납입금은 `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://help.3o3.co.kr/hc/ko/articles/17606680473753-%EC%9B%90%EA%B8%88%EA%B7%A0%EB%93%B1%EC%83%81%ED%99%98VS%EC%9B%90%EB%A6%AC%EA%B8%88%EA%B7%A0%EB%93%B1%EC%83%81%ED%99%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-1%EB%B6%84-%EC%9A%94%EC%95%BD",
    target: "_blank",
    class: "underline-offset-4 text-primary-500 font-medium underline",
    rel: "noopener noreferrer nofollow"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`원리금 균등상환 <i class="fa-solid fa-arrow-up-right-from-square fa-xs mr-1"${_scopeId}></i>`);
      } else {
        return [
          createTextVNode("원리금 균등상환 "),
          createVNode("i", { class: "fa-solid fa-arrow-up-right-from-square fa-xs mr-1" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`으로 계산되었으며, 금리 할인 혜택은 포함되어 있지 않습니다.</span></div><div class="rowCenter w-fit space-x-2"><i class="fa-solid fa-circle-exclamation"></i><span class="">정확한 개인별 한도 및 금리는 한도조회를 통해 확인하실 수 있으며, <div class="text-primary-500 font-medium">한도조회 시 개인신용평점에는 영향이 없습니다.</div></span></div></div></div></form></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalcForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = "" + __buildAssetsURL("section1_visual_bg.af-fgOTg.webp");
const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20154.81%20142.22'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23fff;stroke-width:0px;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_1-2'%3e%3cpath%20class='cls-1'%20d='M77.4,0C34.65,0,0,27.39,0,61.19c0,22,14.68,41.27,36.72,52.06-1.62,6.05-5.86,21.9-6.71,25.29-1.05,4.21,1.54,4.15,3.24,3.02,1.33-.89,21.21-14.4,29.79-20.23,4.65.69,9.46,1.06,14.37,1.06,42.75,0,77.4-27.4,77.4-61.19S120.15,0,77.4,0ZM39.25,78.14c0,.99-.41,1.96-1.12,2.66-.7.7-1.67,1.1-2.67,1.1h-.83c-1,0-1.98-.4-2.68-1.1-.71-.7-1.12-1.67-1.12-2.66v-27.12h-7.1c-2.18,0-3.94-1.83-3.8-4.04.12-2.04,1.91-3.57,3.95-3.57h22.25c2.19,0,3.94,1.84,3.81,4.05-.12,2.04-1.91,3.57-3.95,3.57h-6.73v27.12ZM76.36,81.64c-1.95.69-4.09-.34-4.77-2.29l-1.92-5.48h-15.44l-1.92,5.48c-.69,1.95-2.82,2.98-4.77,2.29-1.94-.68-2.97-2.82-2.29-4.77l11.09-29.75c.06-.18.14-.34.22-.51.45-2.2,2.73-3.88,5.48-3.88,2.48,0,4.56,1.37,5.29,3.25.01,0,.04.03.04.03l11.28,30.86c.68,1.95-.34,4.09-2.29,4.77ZM104.27,78.59c-.25,1.7-1.8,2.9-3.51,2.9h-15.48c-1.95,0-3.52-1.53-3.52-3.41,0-.22.02-.44.07-.65-.04-.21-.07-.43-.07-.65v-29.11c0-2.47,2.27-4.43,4.9-4.02,2.05.32,3.52,2.17,3.52,4.24v26.79h10.61c2.12,0,3.8,1.81,3.48,3.91ZM133.89,81.15c-1.66,1.25-4.03.91-5.27-.75l-11.19-14.68-2.4,2.4v9.57c0,2.66-2.46,4.74-5.22,4.09-1.9-.44-3.2-2.22-3.2-4.17v-30.94c0-2.66,2.46-4.74,5.22-4.1,1.9.44,3.2,2.22,3.2,4.17v10.89l13.23-13.23c1.45-1.45,3.8-1.45,5.24,0,1.45,1.45,1.45,3.8,0,5.24l-10.68,10.69,11.83,15.53c1.25,1.66.91,4.03-.75,5.27Z'/%3e%3cpath%20class='cls-1'%20d='M61.87,51.85l-5.19,14.8h10.54l-5.19-14.8h-.16Z'/%3e%3c/g%3e%3c/svg%3e";
const _imports_2 = "" + __buildAssetsURL("section7_profile_01.N99SR26m.webp");
const _imports_3 = "" + __buildAssetsURL("section7_profile_02.-lsdOM4s.webp");
const _imports_4 = "" + __buildAssetsURL("section7_profile_03.Uv7jNRwG.webp");
const _imports_5 = "" + __buildAssetsURL("section8_visual_bg.Ze9JTO-U.webp");
const _imports_6 = "" + __buildAssetsURL("section9_visual_01.hrRaBjKz.webp");
const _imports_7 = "" + __buildAssetsURL("section9_visual_02.wgsw4CqA.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const today = /* @__PURE__ */ new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = ref(`${month.toString().padStart(2, "0")}월 ${day.toString().padStart(2, "0")}일`);
    const questions = ref([
      {
        title: "대출한도조회를 했을때 신용등급에 영향이 있나요?",
        answer: "대출 문의 및 한도를 조회하셔도 타 금융사에 정보가 제공되지 않아 신용등급에 영향을 주지 않습니다!",
        open: false
      },
      {
        title: "꼭 지점에 방문해야 대출이 가능한건가요?",
        answer: "아닙니다! 비대면으로 가능하며 전문상담원과의 통화로도 대출이 가능합니다! 상담신청 후 전문상담사가 순차적으로 연락을 드리고 있습니다!",
        open: false
      },
      {
        title: "추가 대출을 받을 수도 있나요?",
        answer: "물론입니다! 고객님의 현재 대출 상황에 따라 대출이 기대출이 있으셔도 추가대출 및 통합대환대출이 가능합니다!",
        open: false
      }
      // 추가 질문들
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
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
            _push2(`2024-4090465-25-5-00001 온누리대부중개 [조회]`);
          } else {
            return [
              createTextVNode("2024-4090465-25-5-00001 온누리대부중개 [조회]")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col items-start justify-center space-y-2"><h2 class="text-black-700 text-xl">대출이 필요할땐?</h2><h1 class="section1Text text-3xl font-extrabold leading-tight"> 쉽고 간편하게<br>`);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`무직자대출로`);
          } else {
            return [
              createTextVNode("무직자대출로")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 해결하자!`);
          } else {
            return [
              createTextVNode(" 해결하자!")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h1></div></div>`);
      _push(ssrRenderComponent(_component_ReqForm, null, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="mt-10"></section><section id="section2" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">대출은 역시 온누리</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section2Text mt-2 text-3xl font-extrabold leading-tight">`);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`온누리는`);
          } else {
            return [
              createTextVNode("온누리는")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` 다릅니다!</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://pf.kakao.com/_AexibG",
        target: "_blank",
        "data-aos": "fade-up",
        "data-aos-duration": "1000",
        class: "w-fit bg-primary-500 rowCenter shadow-primary-500/40 flex px-8 py-2 mt-4 space-x-2 text-white rounded-md shadow-md"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-6"${_scopeId}><span class="text-lg font-bold"${_scopeId}>카카오톡 빠른 상담하기</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: "온누리대부중개 무직자대출 소액대출 비대면대출",
                class: "w-6"
              }),
              createVNode("span", { class: "text-lg font-bold" }, "카카오톡 빠른 상담하기")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-2 w-full gap-4 px-4 text-lg font-bold leading-snug text-center *:p-4"><div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-arrow-down"></i></div><h3 class=""> 낮은금리<br><b class="text-primary-500">이자부담 NO!</b></h3></div><div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-arrow-up"></i></div><h3 class=""> 상황에 맞는<br><b class="text-primary-500">대출 OK!</b></h3></div><div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-hand-point-up"></i></div><h3 class=""> 안전한<br><b class="text-primary-500">대출 OK!</b></h3></div><div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-scroll"></i></div><h3 class=""> 상담,조회,심사까지<br><b class="text-primary-500">빠른진행 OK!</b></h3></div><div data-aos="fade-up" data-aos-duration="1000" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-coins"></i></div><h3 class=""> 취급<br><b class="text-primary-500">수수료 NO!</b></h3></div><div data-aos="fade-up" data-aos-duration="1500" class="colCenter shadow-primary-500/40 space-y-2 bg-white rounded-md shadow-lg"><div class="bg-primary-500 size-12 aspect-1 colCenter p-4 text-xl text-white rounded-full"><i class="fa-solid fa-comments-dollar"></i></div><h3 class=""> 1:1 무료상담을 통해<br><b class="text-primary-500">원하는 답변 OK!</b></h3></div></div></div></section><section id="section3" class="w-full py-24 overflow-hidden text-left text-white bg-[url(&#39;~/assets/img/section3_visual_bg.webp&#39;)]"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-xl font-light">상담신청 전에 꼭 참고하세요!</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section3TextWhite text-3xl font-extrabold leading-tight">대출 조건상세정보</h2></div><div class="text-primary-900 grid w-full grid-cols-1 px-4 *:px-4 *:py-5 gap-4"><div data-aos="fade-up" data-aos-duration="1200" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""> 최소 3개월 이상 4대보험 가입<br><b>직장인 OK, 사업자 OK, 프리랜서 OK, 주부·군인·무직자도 OK</b></h3></div><div data-aos="fade-up" data-aos-duration="1400" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""><b>만 19세 이상</b> 성인 OK</h3></div><div data-aos="fade-up" data-aos-duration="1600" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""><b>NICE / KCB 400점 이상</b> 고객 OK</h3></div><div data-aos="fade-up" data-aos-duration="1800" class="flex items-center justify-start space-x-4 bg-white rounded-md"><i class="fa-solid fa-circle-check fa-2xl"></i><h3 class=""><b>연체/신불 6일 이상</b> 고객은 NO</h3></div></div></div></section><section id="section4" class="text-black-800 w-full py-24 overflow-hidden text-left bg-[url(&#39;~/assets/img/section4_visual_bg.webp&#39;)]"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">언제나 저금리 신속 대출!</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section4Text text-3xl font-extrabold leading-tight"> 무직자, 주부, 프리랜서<br> 사업자, 직장인, 군인<br>`);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`저금리로`);
          } else {
            return [
              createTextVNode("저금리로")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 신속한 대출`);
          } else {
            return [
              createTextVNode(" 신속한 대출")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div><div class="relative flex flex-col items-start justify-center w-full px-6 space-y-6"><div class="left-16 border-black-800 top-6 absolute z-10 w-full h-[calc(100%-1.875rem)] border-l-2"></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 01</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-file-lines"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-primary-500 text-xl font-bold">상담신청</h4><h5 class="text-black-700">신청폼을 통하여 인적정보 내용을 입력합니다.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-700 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 02</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-secondary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-phone-volume"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-secondary-500 text-xl font-bold">대출무료상담</h4><h5 class="text-black-700">전문 상담사와 고객님의 상황에 맞춰 상담을 진행합니다.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 03</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-magnifying-glass-plus"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-primary-500 text-xl font-bold">안전한 대출심사</h4><h5 class="text-black-700">고객님의 정보를 토대로 시스템에 의해 심사가 진행됩니다.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-700 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 04</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-secondary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-address-card"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-secondary-500 text-xl font-bold">대출승인</h4><h5 class="text-black-700">대출승인 여부, 한도 및 금리, 준비 서류 등을 안내합니다.</h5></div></div><div data-aos="fade-up" data-aos-duration="1000" class="bg-black-800 px-4 py-[.125rem] rowCenter z-20 w-fit"><h3 class="font-bold text-white">STEP 05</h3></div><div data-aos="fade-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-center justify-start w-full px-4 py-5 space-x-4 bg-white rounded-md shadow-xl"><div class="colCenter size-14 aspect-1 bg-primary-500 p-2.5 text-3xl text-white rounded-full *:animate-wiggle *:animate-infinite *:animate-duration-[1000ms]"><i class="fa-solid fa-sack-dollar"></i></div><div class="flex flex-col items-start justify-center space-y-1"><h4 class="text-primary-500 text-xl font-bold">대출금 입금</h4><h5 class="text-black-700">대출승인 이후, 고객님 계좌에 대출금이 입금됩니다.</h5></div></div></div></div></section><section id="section5" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">나의 월 상환금액이 어떻게 될까?</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section5Text text-3xl font-extrabold leading-tight"> 월 납입금 `);
      _push(ssrRenderComponent(_component_eb, { class: "text-primary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`계산기`);
          } else {
            return [
              createTextVNode("계산기")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div>`);
      _push(ssrRenderComponent(_component_CalcForm, null, null, _parent));
      _push(`</div></section><section id="section6" class="text-black-800 bg-black-100/70 w-full py-24 overflow-hidden text-left"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">고객님들이 온누리에<br>자주 물어보시는 질문들입니다.</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section6Text text-primary-500 text-3xl font-extrabold leading-tight">자주 묻는`);
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 질문`);
          } else {
            return [
              createTextVNode(" 질문")
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
      _push(`<!--]--></div></div></section><section id="section7" class="text-black-800 w-full py-24 overflow-hidden text-left bg-white"><div class="space-y-8"><div class="flex flex-col items-start justify-center px-6 space-y-2"><h2 data-aos="fade-up" data-aos-duration="1000" class="text-black-700 text-xl font-light">온누리에서 성공적으로<br>대출 진행하신 고객님들 입니다.</h2><h2 data-aos="fade-up" data-aos-duration="1000" class="section7Text text-primary-500 text-3xl font-extrabold leading-tight"> 대출 `);
      _push(ssrRenderComponent(_component_eb, { class: "text-secondary-500" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 성공사례`);
          } else {
            return [
              createTextVNode(" 성공사례")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2></div><div class="grid w-full grid-cols-1 gap-8 px-4"><div data-aos="zoom-in-right" data-aos-duration="1200" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl"><img${ssrRenderAttr("src", _imports_2)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out"><div class="flex flex-col items-start justify-center w-full space-y-2"><p class="bg-black-700 px-2 py-1 text-xs text-white">${ssrInterpolate(formattedDate.value)}</p><div class="rowCenter w-fit space-x-2"><h3 class="text-2xl font-extrabold">김**님</h3><h4 class="text-black-700 whitespace-nowrap text-base font-semibold">무직자, 35세 남성</h4></div><div class="border-black-700 w-full border-b"></div><h5 class="text-black-600 text-sm font-light">기존 대부업체에 신청했을때 신용등급은 좋은데 소득증빙이 안돼서 부결이 되었습니다. 그러다 온누리대부에 문의하여 상담신청을 하였는데 전문상담원께서 친절하게 자세한 설명을 해주셔서 어렵지않게 진행하였습니다. 덕분에 자금 해결이 되어 너무 다행이고 너무 감사합니다.</h5></div></div><div data-aos="zoom-in-left" data-aos-duration="1300" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl"><img${ssrRenderAttr("src", _imports_3)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out"><div class="flex flex-col items-start justify-center w-full space-y-2"><p class="bg-black-700 px-2 py-1 text-xs text-white">${ssrInterpolate(formattedDate.value)}</p><div class="rowCenter w-fit space-x-2"><h3 class="text-2xl font-extrabold">이**님</h3><h4 class="text-black-700 whitespace-nowrap text-base font-semibold">주부, 32세 여성</h4></div><div class="border-black-700 w-full border-b"></div><h5 class="text-black-600 text-sm font-light">생활고에 시달려 힘들었는데 온누리에 연락해서 전문상담원과 자세한 상담을 진행하였고, 자세하게 진행절차를 일일히 설명하여 대출 당일 입금 받았습니다. 너무 감사하고 철저하게 진행을 도와주셔서 너무 감사했습니다.</h5></div></div><div data-aos="zoom-in-right" data-aos-duration="1400" class="shadow-black-400/80 z-20 flex items-start justify-start w-full px-4 py-8 space-x-4 bg-white rounded-md shadow-xl"><img${ssrRenderAttr("src", _imports_4)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[40%] pt-1 animate-pulse animate-duration-[2000ms] animate-ease-in-out"><div class="flex flex-col items-start justify-center w-full space-y-2"><p class="bg-black-700 px-2 py-1 text-xs text-white">${ssrInterpolate(formattedDate.value)}</p><div class="rowCenter w-fit space-x-2"><h3 class="text-2xl font-extrabold">신**님</h3><h4 class="text-black-700 whitespace-nowrap text-base font-semibold">직장인, 41세 남성</h4></div><div class="border-black-700 w-full border-b"></div><h5 class="text-black-600 text-sm font-light">갑작스럽게 큰 목돈이 필요했는데 한도가 모자라서 다른곳 알아보다 온누리대부를 만나 전문상담사 안내에 따라 진행을 하였고, 제가 원하는 목돈이 당일 승인되고 입금까지 되어 너무 다행이고 감사하였습니다.</h5></div></div></div></div></section><section id="section8" class="min-h-dvh bg-primary-500 w-full pt-24 overflow-hidden text-left text-white"><div class="px-6"><div class="flex flex-col items-start justify-center space-y-2"><h2 class="text-xl">대출이 필요할땐?</h2><h1 class="section8TextWhite text-3xl font-extrabold leading-tight"> 쉽고 간편하게<br> 무직자대출로 해결하자! </h1></div></div>`);
      _push(ssrRenderComponent(_component_reqForm, null, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_5)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="-mt-8"></section><section id="section9" class="text-white w-full py-24 overflow-hidden text-left bg-[url(&#39;~/assets/img/section9_visual_bg.webp&#39;)]"><div class="space-y-10"><div class="px-6 space-y-8"><div class="flex flex-col items-start justify-center space-y-4"><img data-aos="fade-up" data-aos-duration="1000"${ssrRenderAttr("src", _imports_6)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="w-[30%]"><h2 data-aos="fade-up" data-aos-duration="1000" class="section9TextWhite text-primary-500 text-3xl font-extrabold leading-tight">보이스피싱 `);
      _push(ssrRenderComponent(_component_eb, { class: "text-white" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 주의사항`);
          } else {
            return [
              createTextVNode(" 주의사항")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><div data-aos="fade-up" data-aos-duration="1000" class="w-12 border-b-2 border-white"></div><h3 data-aos="fade-up" data-aos-duration="1200" class="text-black-200 text-xl font-light"> 온누리는 <b>어떤 경우</b>라도 고객님의 계좌번호, 비밀번호, 보안카드, OTP번호 등 <b class="underline-offset-[.375rem] underline">정보를 절대 요구하지 않습니다!</b></h3></div></div><div class="flex flex-col items-start justify-center px-4 space-y-6"><div data-aos="fade-up" data-aos-duration="1400" class="w-fit"><h4 class="relative z-20 px-2 text-lg font-light"> 아래와 같은 상황 발생 시 <b>즉시 신고하세요<i>!</i></b></h4><img${ssrRenderAttr("src", _imports_7)} alt="온누리대부중개 무직자대출 소액대출 비대면대출" class="top-3 w-[19.5625rem] absolute z-10 opacity-35"></div><div data-aos="fade-up" data-aos-duration="1600" class="text-black-700 colCenter w-full p-6 bg-white rounded-md"><div class="flex flex-col items-start justify-center w-full space-y-4"><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[1500ms]"></i><h5 class="font-light">대출처리비용 <b>중개수수료 요구</b> 및<br><b>선입금을 요구</b>했을 시</h5></div><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[2000ms]"></i><h5 class="font-light">당사/검찰/경찰/금감원 등 사칭하여<br><b>계좌이체 요구</b>했을 시</h5></div><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[2500ms]"></i><h5 class="font-light">가족 및 지인을 이용한<br><b>협박성 전화</b>왔을 시</h5></div><div class="rowCenter space-x-4"><i class="fa-solid fa-triangle-exclamation text-primary-500 text-3xl animate-pulse animate-ease-in-out animate-duration-[3000ms]"></i><h5 class="font-light">계좌요구/보안카드/OTP번호 등<br><b>정보 요구</b> 시</h5></div></div></div><h6 data-aos="fade-up" data-aos-duration="1600" class="text-black-300 px-2 text-sm font-light">온누리대부중개, 금융사, 정부기관을 사칭하여 선입금 및 개인금융 정보를 요구하는 등 의심되는 전화를 받으셨다면 아래 번호로 신고바랍니다.</h6><div data-aos="fade-up" data-aos-duration="1800" class="text-black-200 flex flex-col items-start justify-center w-full px-2 space-y-1 font-light">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:010-3468-3554" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>온누리 대표번호</b> : 010-3468-3554`);
          } else {
            return [
              createVNode("b", null, "온누리 대표번호"),
              createTextVNode(" : 010-3468-3554")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:1332" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>금감원</b> : (국번없이) 1332`);
          } else {
            return [
              createVNode("b", null, "금감원"),
              createTextVNode(" : (국번없이) 1332")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "tel:112" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<b${_scopeId}>경찰청</b> : (국번없이) 112`);
          } else {
            return [
              createVNode("b", null, "경찰청"),
              createTextVNode(" : (국번없이) 112")
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-E_jDgH9O.js.map
