import { useRoute, useRequestHeaders } from '#imports'

type SEOData = {
  title?: string
  description?: string
  image?: string
  type?: string
}
type Meta = { hid?: string; property: string; content: string }

export const useSeo = (data?: SEOData) => {
  const route = useRoute()

  const domain = ref(process.client ? location.origin : '')

  if (process.server) {
    const headers = useRequestHeaders()
    const host = headers?.host
    const protocol = headers?.referer?.split('/')?.[0]
    if (host) {
      domain.value = protocol ? `${protocol}//${host}` : `https://${host}`
    }
  }

  const title = ref(data?.title ? `${data?.title} — Richie Sambora` : 'Richie Sambora')
  const canonical = ref(`${domain.value}${route.fullPath}`)
  const description = ref(
    data?.description || 'Achieve healthy, rejuvenated skin with our advanced manufacturing technology'
  )
  const image = ref(data?.image || `${domain.value}/images/icon.png`)
  const type = ref(data?.type ? data.type : 'website')

  const link = ref([
    { rel: 'canonical', href: canonical.value },
    { rel: 'alternate', href: canonical.value, hreflang: 'en' }
  ])

  const opengraph = ref<Meta[]>([
    { hid: 'og:url', property: 'og:url', content: canonical.value },
    { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
    { hid: 'og:type', property: 'og:type', content: type.value },
    { hid: 'og:title', property: 'og:title', content: title.value },
    { hid: 'og:description', property: 'og:description', content: description.value },
    { hid: 'og:site_name', property: 'og:site_name', content: 'Aquifer' },
    { hid: 'og:image:alt', property: 'og:image:alt', content: title.value },
    { hid: 'og:image', property: 'og:image', content: image.value }
  ])

  const twitter = ref<Meta[]>([
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
    { hid: 'twitter:site', property: 'twitter:site', content: '@aquifer' },
    { hid: 'twitter:creator', property: 'twitter:creator', content: '@aquifer' },
    { hid: 'twitter:title', property: 'twitter:title', content: title.value },
    { hid: 'twitter:description', property: 'twitter:description', content: description.value },
    { hid: 'twitter:image', property: 'twitter:image', content: image.value },
    { hid: 'twitter:image:alt', property: 'twitter:image:alt', content: title.value }
  ])

  useHead({
    title: title.value,
    link: link.value,
    meta: [...opengraph.value, ...twitter.value]
  })
}
