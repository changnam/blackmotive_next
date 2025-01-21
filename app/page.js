import { getHomePageData } from "@/data/loaders";

import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";

export default async function Home() {
  const shopifyData = await getHomePageData();
  const { blocks } = shopifyData?.data || [];
  return <main>{blocks.map(blockRenderer)}</main>;
}

const blockComponents = {
  "layout.hero-section": HeroSection,
  "layout.features-section": FeatureSection,
};

function blockRenderer(block) {
  const Component = blockComponents[block.__component];
  return Component ? <Component key={block.id} data={block} /> : null;
}