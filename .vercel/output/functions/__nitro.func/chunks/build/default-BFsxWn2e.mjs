import { _ as __nuxt_component_0 } from './nuxt-link-DJ0NcijE.mjs';
import { v as vueExports, u as useRoute$1, s as serverRenderer_cjs_prodExports, _ as _export_sfc, a as useMainStore } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './v3-D8SQoRF3.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'pinia';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue';
import 'unhead/plugins';

const _imports_0 = publicAssetsURL("/images/logo-footer.png");
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    useMainStore();
    const route = useRoute$1();
    const isTransparent = vueExports.ref(false);
    const animateOnScroll = vueExports.ref(false);
    vueExports.watch(
      () => route.path,
      (val) => {
        if (val === "/") {
          isTransparent.value = true;
          animateOnScroll.value = true;
        } else {
          isTransparent.value = false;
          animateOnScroll.value = false;
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ["sticky top-0 z-10 h-16 sm:h-20 lg:h-24 transition-colors duration-200 flex items-center", vueExports.unref(isTransparent) ? "bg-transparent text-white" : `${vueExports.unref(route).meta.bg || "bg-base-100"} text-base-content`]
      }, _attrs))}><div class="container mx-auto px-4"><div class="navbar px-0"><div class="navbar-start">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "normal-case text-xl md:text-3xl pl-0 font-semibold"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} alt="" class="w-72"${_scopeId}>`);
          } else {
            return [
              vueExports.createVNode("img", {
                src: _imports_0,
                alt: "",
                class: "w-72"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="navbar-end space-x-6"><div class="flex md:hidden"><div class="dropdown dropdown-end"><label tabindex="0" class="m-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg></label><ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-ancient"><li>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Overview`);
          } else {
            return [
              vueExports.createTextVNode("Overview")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Project`);
          } else {
            return [
              vueExports.createTextVNode("Project")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="mailto:richiesambora9029@gmail.com">Contact</a></li></ul></div></div><div class="hidden md:flex flex-row items-center space-x-6">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Overview`);
          } else {
            return [
              vueExports.createTextVNode("Overview")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Project`);
          } else {
            return [
              vueExports.createTextVNode("Project")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="mailto:richiesambora9029@gmail.com">Contact</a></div></div></div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "BacktoTop",
  __ssrInlineRender: true,
  setup(__props) {
    const scrolled = vueExports.ref(false);
    vueExports.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: ["fixed bottom-10 right-6 z-20 transition", vueExports.unref(scrolled) ? "translate-y-0" : "translate-y-64"]
      }, _attrs))}><div class="container"><button class="btn btn-circle btn-md btn-secondary hover:opacity-100 opacity-50" type="button" title="Button to top"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg></button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BacktoTop.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "container flex flex-col mx-auto footer p-4 mt-16" }, _attrs))}><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", _imports_0)} alt="" class="w-72"><div class="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5 text-lg"><div class="lg:w-1/2 flex flex-col"><p> I design and develop Experiences thats make people&#39;s live simple. For more information about me, you can contact me at. </p><div class="flex flex-row w-56 space-x-4 p-3"><a href="https://twitter.com/sambooora" target="_blank"><div class="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></div></a><a href="https://github.com/sambooora" target="_blank"><div class="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></div></a><a href="https://dribbble.com/richiesambora9029" target="_blank"><div class="w-5 h-5"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 512 512"><path d="M148.7 171.3L64.21 86.83c-28.39 32.16-48.9 71.38-58.3 114.8C19.41 205.4 33.34 208 48 208C86.34 208 121.1 193.9 148.7 171.3zM194.5 171.9L256 233.4l169.2-169.2C380 24.37 320.9 0 256 0C248.6 0 241.2 .4922 233.1 1.113C237.8 16.15 240 31.8 240 48C240 95.19 222.8 138.4 194.5 171.9zM208 48c0-14.66-2.623-28.59-6.334-42.09C158.2 15.31 118.1 35.82 86.83 64.21l84.48 84.48C193.9 121.1 208 86.34 208 48zM171.9 194.5C138.4 222.8 95.19 240 48 240c-16.2 0-31.85-2.236-46.89-6.031C.4922 241.2 0 248.6 0 256c0 64.93 24.37 124 64.21 169.2L233.4 256L171.9 194.5zM317.5 340.1L256 278.6l-169.2 169.2C131.1 487.6 191.1 512 256 512c7.438 0 14.75-.4922 22.03-1.113C274.2 495.8 272 480.2 272 464C272 416.8 289.2 373.6 317.5 340.1zM363.3 340.7l84.48 84.48c28.39-32.16 48.9-71.38 58.3-114.8C492.6 306.6 478.7 304 464 304C425.7 304 390.9 318.1 363.3 340.7zM447.8 86.83L278.6 256l61.52 61.52C373.6 289.2 416.8 272 464 272c16.2 0 31.85 2.236 46.89 6.031C511.5 270.8 512 263.4 512 256C512 191.1 487.6 131.1 447.8 86.83zM304 464c0 14.66 2.623 28.59 6.334 42.09c43.46-9.4 82.67-29.91 114.8-58.3l-84.48-84.48C318.1 390.9 304 425.7 304 464z"></path></svg></div></a></div></div><div class="lg:flex-1 w-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-5 lg:justify-between"><div class="flex flex-col space-y-2">`);
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Overview`);
      } else {
        return [
          vueExports.createTextVNode("Overview")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Project`);
      } else {
        return [
          vueExports.createTextVNode("Project")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-col space-y-2"><a href="https://twitter.com/sambooora" target="_blank">Twitter</a><a href="https://github.com/sambooora" target="_blank">GitHub</a><a href="https://instagram.com/sambooora" target="_blank">Instagram</a><a href="https://dribbble.com/richiesambora9029" target="_blank">Dribble</a></div><div class="flex flex-col space-y-2">`);
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Galleries`);
      } else {
        return [
          vueExports.createTextVNode("Galleries")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blogs`);
      } else {
        return [
          vueExports.createTextVNode("Blogs")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tutorials`);
      } else {
        return [
          vueExports.createTextVNode("Tutorials")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="w-full flex justify-center items-center text-sm"><p class="text-center">Build With Love - Richie Sambora</p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [{ rel: "icon", href: "/images/icon.png" }],
      viewport: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
    });
    const route = useRoute$1();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$3;
      const _component_BacktoTop = _sfc_main$2;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        id: "main-container",
        class: ["safe-area transition-colors", vueExports.unref(route).meta.bg || "bg-base-100"]
      }, _attrs))}><div>`);
      if (_ctx.$route.path !== "/checkout") {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Header, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_BacktoTop, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BFsxWn2e.mjs.map
