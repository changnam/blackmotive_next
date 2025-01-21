
export function getShopifyURL() {
    // return process.env.NEXT_PUBLIC_STRAPI_URL ?? "https://blackmotiv.myshopify.com/admin/api/2025-01";
    return process.env.NEXT_PUBLIC_STRAPI_URL ?? "";
  }
  
  export function getShopifyMedia(url) {
    if (url == null) return null;
    if (url.startsWith("data:")) return url;
    if (url.startsWith("http") || url.startsWith("//")) return url;
    return `${getShopifyURL()}${url}`;
  }