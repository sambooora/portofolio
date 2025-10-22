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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    useSeo({ title: "Cart" });
    const cartLineItems = vueExports.ref([
      {
        name: "Regenerative Serum",
        img: "/images/tmp/cart-item-1.png",
        variant: "3x 10ml 0.34 Fl Oz",
        qty: 1,
        price: "$100.00 SGD"
      },
      {
        name: "Hydrating Cream",
        img: "/images/tmp/cart-item-2.png",
        variant: "50ml 1.69 Fl Oz",
        qty: 1,
        price: "$100.00 SGD"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container mx-auto px-4 py-12 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-6" }, _attrs))}><div class="flex-1"><div class="overflow-x-auto relative"><table class="w-full text-sm text-left"><thead class="text-xs uppercase border-b-2 border-secondary"><tr><th scope="col" class="py-3 pr-6">Cart</th><th scope="col" class="py-3 px-6 text-center">Product</th><th scope="col" class="py-3 px-6">Quantity</th><th scope="col" class="py-3 pl-6 text-end">Price</th></tr></thead><tbody><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(cartLineItems), (item, i) => {
        _push(`<tr class="border-b border-secondary align-top"><th><button class="btn btn-ghost btn-square"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></th><td scope="row" class="py-4 pr-6 flex flex-row space-x-4"><div class="w-24 h-32 border bg-accent"><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", item.img)} class="w-full h-full object-contain object-center"></div><div><p class="uppercase mb-2 font-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(item.name)}</p><p>${serverRenderer_cjs_prodExports.ssrInterpolate(item.variant)}</p></div></td><td class="py-4 px-6 whitespace-nowrap"><div class="btn-group flex-nowrap"><button class="btn btn-primary btn-ghost btn-square border border-secondary hover:border-secondary border-r-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path></svg></button><button class="btn btn-primary btn-ghost btn-square border border-secondary hover:border-secondary border-l-0 border-r-0">${serverRenderer_cjs_prodExports.ssrInterpolate(item.qty)}</button><button class="btn btn-primary btn-ghost btn-square border border-secondary hover:border-secondary border-l-0"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path></svg></button></div></td><td class="py-4 pl-6">${serverRenderer_cjs_prodExports.ssrInterpolate(item.price)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div><div class="w-full lg:w-96"><div class="overflow-x-auto relative"><table class="w-full text-sm text-left"><thead class="text-xs uppercase border-b-2 border-secondary"><tr><th scope="col" class="py-3 pr-6">\xA0</th><th scope="col" class="py-3 px-6">\xA0</th></tr></thead><tbody><tr class="border-b border-secondary align-top"><td class="py-4 pr-6 font-medium">Shipping</td><td class="py-4 pl-6 text-end">Calculated at checkout</td></tr><tr class="border-b border-secondary align-top"><td class="py-4 pr-6 font-medium">Subtotal</td><td class="py-4 pl-6 text-end">$200 SGD</td></tr></tbody></table></div><div class="mt-10 -mx-px"><button class="btn btn-secondary btn-block">Proceed to Checkout</button></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-VG-JLocB.mjs.map
