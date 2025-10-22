import { v as vueExports, s as serverRenderer_cjs_prodExports } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_0 = publicAssetsURL("/images/sustainability.png");
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "galleries",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))}><div class="w-full max-w-xl prose lg:prose-lg"><p> We take our environmental responsibilities seriously, and work hard to minimise our environmental impact positively. </p><p> Aquifer is actively engaged in sustainability efforts in order to leave a positive impact on the environment and support the health of its people and planet. </p></div><div class="my-12"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} class="w-full"></div><div class="flex flex-col space-y-8 prose lg:prose-lg max-w-none"><div><h3 class="font-medium">Let\u2019s talk about our sustainable actions</h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8"><div><h4 class="uppercase">Sustainable manufacturing</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Sustainable Packaging</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Natural Ingredients</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">On-demand Production</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Donations to environmental causes</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div><h4 class="uppercase">Recycling</h4><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galleries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=galleries-CU7Ag-uI.mjs.map
