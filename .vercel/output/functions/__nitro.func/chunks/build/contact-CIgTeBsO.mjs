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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo({
      title: "Contact"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-12" }, _attrs))}><div class="prose mb-8"><h3>Contact</h3></div><div class="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-4"><div class="md:w-1/2 prose max-w-lg lg:prose-lg"><p class="mt-0 mb-1 lg:mt-0 lg:mb-1">Richie Mahfud Ahmed Sambora</p><p class="mt-0 mb-1 lg:mt-0 lg:mb-1">Raya Utara Street 88 Kalipang Sutojayan Blitar East Java, Indonesia</p><p class="mt-0 mb-1 lg:mt-0 lg:mb-1"><a href="richiesambora9029@gmail.com">richiesambora9029@gmail.com</a></p></div><div class="md:w-1/2 prose max-w-sm lg:prose-lg"><div>Contact me via WhatApps</div><button class="btn btn-outline px-8">Send me WhatApps</button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-CIgTeBsO.mjs.map
