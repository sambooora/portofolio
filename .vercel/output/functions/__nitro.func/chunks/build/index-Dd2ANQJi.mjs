import { v as vueExports, a as useMainStore, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { u as useSeo } from './useSeo-dDVhvha7.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../nitro/nitro.mjs';
import 'node:events';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';
import 'pinia';
import './v3-D8SQoRF3.mjs';

const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const mainStore = useMainStore();
    useSeo({ title: "Project" });
    const products = vueExports.ref(
      mainStore.products.map((i) => ({ ...i, selectedVariant: i.variants[0] }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))}><div class="mt-12 flex flex-col space-y-3 md:space-y-12"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(products), (product, i) => {
        var _a;
        _push(`<div class="flex md:space-y-6 space-y-3 flex-col-reverse space-y-reverse lg:space-y-0 lg:space-x-8 xl:space-x-12 lg:even:space-x-reverse lg:odd:flex-row lg:even:flex-row-reverse"><div class="lg:w-1/2 flex flex-col justify-center"><div class="prose"><h3>${serverRenderer_cjs_prodExports.ssrInterpolate(product.name)}</h3><div class="not-prose w-full inline-flex overflow-x-auto whitespace-nowrap -mx-3 md:mt-8"></div><div>${(_a = product.description) != null ? _a : ""}</div></div></div><div class="w-full h-full lg:w-1/2"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", product.img)} class="w-full h-full object-contain object-center" alt=""></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dd2ANQJi.mjs.map
