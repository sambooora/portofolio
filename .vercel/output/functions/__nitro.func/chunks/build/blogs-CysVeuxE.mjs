import { v as vueExports, s as serverRenderer_cjs_prodExports } from './server.mjs';
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
  __name: "blogs",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo({ title: "Blog" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto p-4 py-12" }, _attrs))}><div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4"><div class="md:w-1/2 prose lg:prose-lg -mt-2"><p> This page is here to help answer some common questions you may have about shipping, delivery and returns. If you don\u2019t see your answer here, please contact us at any time at <a href="mailto:hello@aquifer.com">hello@aquifer.com</a></p></div><div class="md:w-1/2 flex flex-col"><div tabindex="0" class="collapse collapse-plus first:border-t-2 border-b-2 border-base-content"><div class="collapse-title px-0 pr-10 text-sm font-medium uppercase min-h-0"><h4>i need to update my order, what should i do</h4></div><div class="collapse-content px-0 prose lg:prose-lg"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque veritatis dicta?</p></div></div><div tabindex="0" class="collapse collapse-plus border-b-2 border-base-content"><div class="collapse-title px-0 pr-10 text-sm font-medium uppercase min-h-0"><h4>i need to update my order, what should i do</h4></div><div class="collapse-content px-0 prose lg:prose-lg"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque veritatis dicta?</p></div></div><div tabindex="0" class="collapse collapse-plus border-b-2 border-base-content"><div class="collapse-title px-0 pr-10 text-sm font-medium uppercase min-h-0"><h4>i need to update my order, what should i do</h4></div><div class="collapse-content px-0 prose lg:prose-lg"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque veritatis dicta?</p></div></div><div tabindex="0" class="collapse collapse-plus border-b-2 border-base-content"><div class="collapse-title px-0 pr-10 text-sm font-medium uppercase min-h-0"><h4>i need to update my order, what should i do</h4></div><div class="collapse-content px-0 prose lg:prose-lg"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque veritatis dicta?</p></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blogs-CysVeuxE.mjs.map
