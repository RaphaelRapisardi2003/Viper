import HeroCarousel    from '@/components/HeroCarousel'
import Manifesto       from '@/components/Manifesto'
import ShopCategory    from '@/components/ShopCategory'
import ProductsSection from '@/components/ProductsSection'
import EditorialHero   from '@/components/EditorialHero'
import AboutSection    from '@/components/AboutSection'
import LookbookGrid    from '@/components/LookbookGrid'
import DoubleEditorial from '@/components/DoubleEditorial'
import StyleTabs       from '@/components/StyleTabs'
import PerfumeSection  from '@/components/PerfumeSection'
import QuoteStrip      from '@/components/QuoteStrip'
import ReviewsSection  from '@/components/ReviewsSection'
import InstagramFeed   from '@/components/InstagramFeed'
import BrandsSection   from '@/components/BrandsSection'
import BenefitsBar     from '@/components/BenefitsBar'
import Newsletter      from '@/components/Newsletter'
import ScrollReveal    from '@/components/ScrollReveal'

import {
  novidadesProducts,
  maisVendidosProducts,
  sapatosProducts,
  bolsasProducts,
  saleProducts,
} from '@/lib/data'

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <HeroCarousel />
      <Manifesto />
      <ShopCategory />
      <ProductsSection title="Novidades"    id="novidades"   products={novidadesProducts} collection="novidades" />
      <EditorialHero />
      <AboutSection />
      <ProductsSection title="Mais Vendidos" products={maisVendidosProducts} columns={5} collection="mais-vendidos" />
      <LookbookGrid />
      <DoubleEditorial />
      <StyleTabs />
      <ProductsSection title="Sapatos" id="sapatos" products={sapatosProducts} altBg collection="sapatos" />
      <ProductsSection title="Bolsas"  id="bolsas"  products={bolsasProducts} collection="bolsas" />
      <PerfumeSection />
      <QuoteStrip />
      <ProductsSection title="Sale — Até 50% Off" id="sale" products={saleProducts} isSale collection="sale" />
      <ReviewsSection />
      <InstagramFeed />
      <BrandsSection />
      <BenefitsBar />
      <Newsletter />
    </main>
  )
}
