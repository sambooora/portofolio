import { v as vueExports, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'pinia';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';
import './v3-D8SQoRF3.mjs';

const _imports_0 = publicAssetsURL("/images/about.png");
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo({ title: "About" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))}><div class="w-full max-w-xl prose lg:prose-lg"><p> At Aquifer, we produce effective skincare for all genders. Experience younger and healthier skin with our premium products, made without harmful or unnecessary ingredients. </p><p> Our advanced manufacturing technology allows our skincare to deliver proven results. Rebuild, repair and preserve your skin with Aquifer. </p></div><div class="my-12"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} class="w-full"></div><div class="flex flex-col space-y-8 prose lg:prose-lg max-w-none"><div><h3 class="font-medium">Our Values and Philosophy</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8"><div><h4 class="uppercase">Environmental Sobriety</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Health is Beauty</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Trustworthy and skin respectful</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div></div></div><div><h3 class="font-medium">Our Science and Technology</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8"><div><h4 class="uppercase">Natural Biofabrication Process</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Advanced Manufacturing Technology</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Backed by Science</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-Czr8GRcE.mjs.map
