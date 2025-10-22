import { u as useRoute$1, v as vueExports, b as useNuxtApp } from './server.mjs';
import { u as useHead } from './v3-D8SQoRF3.mjs';
import { v as getRequestHeaders } from '../nitro/nitro.mjs';

function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  {
    return _headers;
  }
}
const useSeo = (data) => {
  var _a, _b;
  const route = useRoute$1();
  const domain = vueExports.ref("");
  {
    const headers = useRequestHeaders();
    const host = headers == null ? void 0 : headers.host;
    const protocol = (_b = (_a = headers == null ? void 0 : headers.referer) == null ? void 0 : _a.split("/")) == null ? void 0 : _b[0];
    if (host) {
      domain.value = protocol ? `${protocol}//${host}` : `https://${host}`;
    }
  }
  const title = vueExports.ref((data == null ? void 0 : data.title) ? `${data == null ? void 0 : data.title} \u2014 Richie Sambora` : "Richie Sambora");
  const canonical = vueExports.ref(`${domain.value}${route.fullPath}`);
  const description = vueExports.ref(
    (data == null ? void 0 : data.description) || "Achieve healthy, rejuvenated skin with our advanced manufacturing technology"
  );
  const image = vueExports.ref((data == null ? void 0 : data.image) || `${domain.value}/images/icon.png`);
  const type = vueExports.ref((data == null ? void 0 : data.type) ? data.type : "website");
  const link = vueExports.ref([
    { rel: "canonical", href: canonical.value },
    { rel: "alternate", href: canonical.value, hreflang: "en" }
  ]);
  const opengraph = vueExports.ref([
    { hid: "og:url", property: "og:url", content: canonical.value },
    { hid: "og:locale", property: "og:locale", content: "en_US" },
    { hid: "og:type", property: "og:type", content: type.value },
    { hid: "og:title", property: "og:title", content: title.value },
    { hid: "og:description", property: "og:description", content: description.value },
    { hid: "og:site_name", property: "og:site_name", content: "Aquifer" },
    { hid: "og:image:alt", property: "og:image:alt", content: title.value },
    { hid: "og:image", property: "og:image", content: image.value }
  ]);
  const twitter = vueExports.ref([
    { hid: "twitter:card", property: "twitter:card", content: "summary_large_image" },
    { hid: "twitter:site", property: "twitter:site", content: "@aquifer" },
    { hid: "twitter:creator", property: "twitter:creator", content: "@aquifer" },
    { hid: "twitter:title", property: "twitter:title", content: title.value },
    { hid: "twitter:description", property: "twitter:description", content: description.value },
    { hid: "twitter:image", property: "twitter:image", content: image.value },
    { hid: "twitter:image:alt", property: "twitter:image:alt", content: title.value }
  ]);
  useHead({
    title: title.value,
    link: link.value,
    meta: [...opengraph.value, ...twitter.value]
  });
};

export { useSeo as u };
//# sourceMappingURL=useSeo-dDVhvha7.mjs.map
