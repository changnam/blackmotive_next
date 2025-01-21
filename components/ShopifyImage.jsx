import Image from "next/image";
import { getShopifyMedia } from "@/lib/utils";

export default function ShopifyImage({
  src,
  alt,
  height,
  width,
  className,
}) {
  const imageUrl = getShopifyMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
}