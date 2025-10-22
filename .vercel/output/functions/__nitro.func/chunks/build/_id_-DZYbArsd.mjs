import { v as vueExports, u as useRoute$1, a as useMainStore, s as serverRenderer_cjs_prodExports } from './server.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute$1();
    useSeo({ title: "Project" });
    const mainStore = useMainStore();
    const product = vueExports.ref(mainStore.products.find((i) => i.id === route.params.id));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4" }, _attrs))}><div class="flex space-y-6 flex-col-reverse space-y-reverse lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-12"><div class="lg:w-1/2 flex flex-col justify-center"><div class="prose"><h3>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(product).name)}</h3><div>${(_a = vueExports.unref(product).description) != null ? _a : ""}</div></div></div><div class="w-full h-full lg:w-1/2"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", vueExports.unref(product).img)} class="w-full h-full object-contain object-center" alt=""></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-DZYbArsd.mjs.map
