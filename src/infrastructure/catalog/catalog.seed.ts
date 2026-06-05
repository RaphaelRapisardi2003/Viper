import type { BadgeType, ColorOption } from '@/src/domain/catalog/Product'

/**
 * Fonte de dados crua (Data Source).
 * Único lugar onde o catálogo é declarado; a infraestrutura o mapeia para o domínio.
 */
export interface ProductRecord {
  id: string
  slug: string
  brand: string
  name: string
  priceReais: number
  oldPriceReais?: number
  image: string
  category: string
  tags: string[]
  badge?: string
  badgeType?: BadgeType
  colors?: ColorOption[]
  description?: string
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`

export const CATALOG_SEED: ProductRecord[] = [
  // ───────────────── Novidades ─────────────────
  { id: 'n1', slug: 'vestido-midi-cetim-natural', brand: 'Viper Studio', name: 'Vestido Midi Cetim Natural', priceReais: 689, image: img('photo-1614786269829-d24616faf56d'), category: 'vestidos', tags: ['novidades'], badge: 'New In', badgeType: 'new', colors: [{ hex: '#c9a882', name: 'Caramelo' }, { hex: '#1a1a1a', name: 'Preto' }, { hex: '#e8ddd2', name: 'Marfim' }], description: 'Caimento fluido em cetim de toque natural, com modelagem midi que valoriza a silhueta. Uma peça-chave entre o dia e a noite.' },
  { id: 'n2', slug: 'blazer-alfaiataria-estruturado', brand: 'Viper Collection', name: 'Blazer Alfaiataria Estruturado', priceReais: 849, image: img('photo-1532453288672-3a27e9be9efd'), category: 'roupas', tags: ['novidades'], colors: [{ hex: '#f5f0e8', name: 'Off-white' }, { hex: '#7b6e62', name: 'Camel' }], description: 'Alfaiataria estruturada com ombros marcados e forro acetinado. O coringa para compor looks de trabalho ou eventos.' },
  { id: 'n3', slug: 'vestido-longo-fenda-lateral', brand: 'Viper Essentials', name: 'Vestido Longo com Fenda Lateral', priceReais: 560, oldPriceReais: 700, image: img('photo-1619794724492-651397287d94'), category: 'vestidos', tags: ['novidades', 'sale'], badge: '−20%', badgeType: 'sale', colors: [{ hex: '#2c2c2c', name: 'Carvão' }, { hex: '#8b4b3a', name: 'Terracota' }] },
  { id: 'n4', slug: 'trench-coat-classico-premium', brand: 'Viper Studio', name: 'Trench Coat Clássico Premium', priceReais: 1290, image: img('photo-1574015974293-817f0ebebb74'), category: 'roupas', tags: ['novidades'], badge: 'Tendência', colors: [{ hex: '#c8a87e', name: 'Camel' }, { hex: '#111', name: 'Preto' }] },
  { id: 'n5', slug: 'conjunto-linho-off-white', brand: 'Viper Studio', name: 'Conjunto Linho Off-White', priceReais: 920, image: img('photo-1500917293891-ef795e70e1f6'), category: 'roupas', tags: ['novidades'], colors: [{ hex: '#e8ddd2', name: 'Marfim' }, { hex: '#b5966e', name: 'Bege' }] },
  { id: 'n6', slug: 'saia-midi-plissada-acetinada', brand: 'Viper Essentials', name: 'Saia Midi Plissada Acetinada', priceReais: 390, image: img('photo-1554412933-514a83d2f3c8'), category: 'roupas', tags: ['novidades'], colors: [{ hex: '#c0a090', name: 'Rosa nude' }, { hex: '#1a1a1a', name: 'Preto' }, { hex: '#4a6fa5', name: 'Azul' }] },
  { id: 'n7', slug: 'blusa-transparente-detalhes', brand: 'Viper Collection', name: 'Blusa Transparente com Detalhes', priceReais: 340, image: img('photo-1601762603339-fd61e28b698a'), category: 'roupas', tags: ['novidades'], badge: 'New In', badgeType: 'new', colors: [{ hex: '#f0e6d8', name: 'Nude' }, { hex: '#2c3e50', name: 'Marinho' }] },
  { id: 'n8', slug: 'vestido-floral-manga-longa', brand: 'Viper Studio', name: 'Vestido Floral Manga Longa', priceReais: 510, oldPriceReais: 600, image: img('photo-1490481651871-ab68de25d43d'), category: 'vestidos', tags: ['novidades', 'sale'], badge: '−15%', badgeType: 'sale', colors: [{ hex: '#e8b4a0', name: 'Rosa' }, { hex: '#6b8e6b', name: 'Verde' }] },

  // ───────────────── Mais Vendidos ─────────────────
  { id: 'mv1', slug: 'camisa-oversized-algodao-pima', brand: 'Viper Basics', name: 'Camisa Oversized Algodão Pima', priceReais: 289, image: img('photo-1557777586-f6682739fcf3'), category: 'roupas', tags: ['mais-vendidos'] },
  { id: 'mv2', slug: 'vestido-longo-para-eventos', brand: 'Viper Studio', name: 'Vestido Longo para Eventos', priceReais: 1150, image: img('photo-1567401893414-76b7b1e5a7a5'), category: 'vestidos', tags: ['mais-vendidos', 'festa'], badge: 'Destaque' },
  { id: 'mv3', slug: 'calca-alfaiataria-wide-leg', brand: 'Viper Collection', name: 'Calça Alfaiataria Wide Leg', priceReais: 450, oldPriceReais: 600, image: img('photo-1513094735237-8f2714d57c13'), category: 'roupas', tags: ['mais-vendidos', 'sale', 'trabalho'], badge: '−25%', badgeType: 'sale' },
  { id: 'mv4', slug: 'jaqueta-couro-legitimo-feminina', brand: 'Viper Studio', name: 'Jaqueta Couro Legítimo Feminina', priceReais: 1490, image: img('photo-1618244972963-dbee1a7edc95'), category: 'roupas', tags: ['mais-vendidos'], badge: 'New In', badgeType: 'new' },
  { id: 'mv5', slug: 'top-cropped-ribana-premium', brand: 'Viper Basics', name: 'Top Cropped Ribana Premium', priceReais: 219, image: img('photo-1495385794356-15371f348c31'), category: 'roupas', tags: ['mais-vendidos', 'casual'] },

  // ───────────────── Sapatos ─────────────────
  { id: 's1', slug: 'sandalia-salto-alto-fino', brand: 'Viper Shoes', name: 'Sandália Salto Alto Fino', priceReais: 590, image: img('photo-1543163521-1bf539c55dd2'), category: 'sapatos', tags: ['sapatos', 'novidades'], badge: 'New In', badgeType: 'new', colors: [{ hex: '#1a1a1a', name: 'Preto' }, { hex: '#c9a882', name: 'Nude' }, { hex: '#8b1a1a', name: 'Bordô' }] },
  { id: 's2', slug: 'scarpin-bico-fino-couro', brand: 'Viper Shoes', name: 'Scarpin Bico Fino Couro', priceReais: 480, image: img('photo-1554062614-6da4fa67725a'), category: 'sapatos', tags: ['sapatos', 'trabalho'], colors: [{ hex: '#1a1a1a', name: 'Preto' }, { hex: '#d4b896', name: 'Caramelo' }] },
  { id: 's3', slug: 'tenis-chunky-platform', brand: 'Viper Sport', name: 'Tênis Chunky Platform', priceReais: 720, image: img('photo-1560769629-975ec94e6a86'), category: 'sapatos', tags: ['sapatos', 'casual'], badge: 'Tendência', colors: [{ hex: '#f5f5f5', name: 'Branco' }, { hex: '#1a1a1a', name: 'Preto' }] },
  { id: 's4', slug: 'bota-cano-longo-over-the-knee', brand: 'Viper Shoes', name: 'Bota Cano Longo Over-the-Knee', priceReais: 840, oldPriceReais: 1050, image: img('photo-1535043934128-cf0b28d52f95'), category: 'sapatos', tags: ['sapatos', 'sale'], badge: '−20%', badgeType: 'sale', colors: [{ hex: '#1a1a1a', name: 'Preto' }, { hex: '#6b4c2e', name: 'Marrom' }] },

  // ───────────────── Bolsas ─────────────────
  { id: 'b1', slug: 'bolsa-tote-couro-italiano', brand: 'Viper Bags', name: 'Bolsa Tote Couro Italiano', priceReais: 1290, image: img('photo-1605733513597-a8f8341084e6'), category: 'bolsas', tags: ['bolsas', 'novidades'], badge: 'New In', badgeType: 'new', colors: [{ hex: '#c8a87e', name: 'Caramelo' }, { hex: '#1a1a1a', name: 'Preto' }, { hex: '#f5f0e8', name: 'Creme' }] },
  { id: 'b2', slug: 'clutch-minimalista-corrente', brand: 'Viper Bags', name: 'Clutch Minimalista com Corrente', priceReais: 620, image: img('photo-1594633313593-bab3825d0caf'), category: 'bolsas', tags: ['bolsas', 'festa'], colors: [{ hex: '#d4a96a', name: 'Dourado' }, { hex: '#1a1a1a', name: 'Preto' }] },
  { id: 'b3', slug: 'bolsa-tiracolo-couro-alca', brand: 'Viper Bags', name: 'Bolsa Tiracolo Couro com Alça', priceReais: 890, image: img('photo-1591348278863-a8fb3887e2aa'), category: 'bolsas', tags: ['bolsas'], badge: 'Destaque', colors: [{ hex: '#8b4b3a', name: 'Terracota' }, { hex: '#c8a87e', name: 'Caramelo' }] },
  { id: 'b4', slug: 'bucket-bag-camurca-premium', brand: 'Viper Bags', name: 'Bucket Bag Camurça Premium', priceReais: 750, oldPriceReais: 880, image: img('photo-1559563458-527698bf5295'), category: 'bolsas', tags: ['bolsas', 'sale'], badge: '−15%', badgeType: 'sale', colors: [{ hex: '#6b4c2e', name: 'Marrom' }, { hex: '#444', name: 'Cinza' }] },

  // ───────────────── Sale ─────────────────
  { id: 'sl1', slug: 'vestido-de-festa-com-decote', brand: 'Viper Studio', name: 'Vestido de Festa com Decote', priceReais: 395, oldPriceReais: 790, image: img('photo-1538329972958-465d6d2144ed'), category: 'vestidos', tags: ['sale', 'festa'], badge: '−50%', badgeType: 'sale' },
  { id: 'sl2', slug: 'casaco-la-premium-oversize', brand: 'Viper Collection', name: 'Casaco Lã Premium Oversize', priceReais: 534, oldPriceReais: 890, image: img('photo-1604284195847-88dc4b5a9faa'), category: 'roupas', tags: ['sale'], badge: '−40%', badgeType: 'sale' },
  { id: 'sl3', slug: 'scarpin-mule-couro-verniz', brand: 'Viper Shoes', name: 'Scarpin Mule Couro Verniz', priceReais: 312, oldPriceReais: 480, image: img('photo-1551107696-a4b0c5a0d9a2'), category: 'sapatos', tags: ['sale', 'sapatos'], badge: '−35%', badgeType: 'sale' },
  { id: 'sl4', slug: 'mini-bag-structured-couro', brand: 'Viper Bags', name: 'Mini Bag Structured Couro', priceReais: 623, oldPriceReais: 890, image: img('photo-1640901555383-7335ec5a6476'), category: 'bolsas', tags: ['sale', 'bolsas'], badge: '−30%', badgeType: 'sale' },

  // ───────────────── Casual ─────────────────
  { id: 'c1', slug: 'vestido-casual-com-amarracao', brand: 'Viper Basics', name: 'Vestido Casual com Amarração', priceReais: 320, image: img('photo-1616313253719-c46514cddee1'), category: 'vestidos', tags: ['casual'] },
  { id: 'c2', slug: 'camiseta-manga-longa-modal', brand: 'Viper Essentials', name: 'Camiseta Manga Longa Modal', priceReais: 189, image: img('photo-1579328064848-53fe6c665058'), category: 'roupas', tags: ['casual'], badge: 'New In', badgeType: 'new' },
  { id: 'c3', slug: 'jeans-wide-leg-cintura-alta', brand: 'Viper Denim', name: 'Jeans Wide Leg Cintura Alta', priceReais: 440, image: img('photo-1534875756527-5e8e4392005f'), category: 'roupas', tags: ['casual'] },
  { id: 'c4', slug: 'macacao-linho-com-cinto', brand: 'Viper Studio', name: 'Macacão Linho com Cinto', priceReais: 580, image: img('photo-1602010069450-0a62034f235c'), category: 'roupas', tags: ['casual'] },

  // ───────────────── Festa ─────────────────
  { id: 'f1', slug: 'vestido-sereia-com-decote', brand: 'Viper Studio', name: 'Vestido Sereia com Decote', priceReais: 1890, image: img('photo-1541130292430-a832637ddc0d'), category: 'vestidos', tags: ['festa'], badge: 'Exclusivo' },
  { id: 'f2', slug: 'vestido-paete-longo-dourado', brand: 'Viper Night', name: 'Vestido Paetê Longo Dourado', priceReais: 1340, image: img('photo-1553544260-f87e671974ee'), category: 'vestidos', tags: ['festa'] },
  { id: 'f3', slug: 'vestido-ombro-a-ombro-veludo', brand: 'Viper Night', name: 'Vestido Ombro a Ombro Veludo', priceReais: 980, image: img('photo-1580478491436-fd6a937acc9e'), category: 'vestidos', tags: ['festa'] },
  { id: 'f4', slug: 'macacao-festa-com-brilho', brand: 'Viper Studio', name: 'Macacão Festa com Brilho', priceReais: 1120, image: img('photo-1645996830739-8fe3df27c33f'), category: 'roupas', tags: ['festa'] },

  // ───────────────── Trabalho ─────────────────
  { id: 't1', slug: 'blazer-cropped-escritorio', brand: 'Viper Work', name: 'Blazer Cropped para o Escritório', priceReais: 760, image: img('photo-1662532577856-e8ee8b138a8b'), category: 'roupas', tags: ['trabalho'] },
  { id: 't2', slug: 'calca-social-slim-feminina', brand: 'Viper Work', name: 'Calça Social Slim Feminina', priceReais: 490, image: img('photo-1664076458686-3449062080ac'), category: 'roupas', tags: ['trabalho'], badge: 'Tendência' },
  { id: 't3', slug: 'camisa-social-oversized-branca', brand: 'Viper Work', name: 'Camisa Social Oversized Branca', priceReais: 320, image: img('photo-1613915617430-8ab0fd7c6baf'), category: 'roupas', tags: ['trabalho'] },
  { id: 't4', slug: 'vestido-tubinho-midi-elegante', brand: 'Viper Work', name: 'Vestido Tubinho Midi Elegante', priceReais: 620, image: img('photo-1645561305502-63a9ba09ab09'), category: 'vestidos', tags: ['trabalho'] },

  // ───────────────── Praia & Verão ─────────────────
  { id: 'p1', slug: 'vestido-saida-de-praia-tie-dye', brand: 'Viper Beach', name: 'Vestido Saída de Praia Tie-Dye', priceReais: 280, image: img('photo-1599662875272-64de8289f6d8'), category: 'vestidos', tags: ['praia'], badge: 'New In', badgeType: 'new' },
  { id: 'p2', slug: 'conjunto-short-e-camisa-linho', brand: 'Viper Beach', name: 'Conjunto Short e Camisa Linho', priceReais: 350, image: img('photo-1563178406-4cdc2923acbc'), category: 'roupas', tags: ['praia'] },
  { id: 'p3', slug: 'biquini-moda-praia-luxo', brand: 'Viper Beach', name: 'Biquíni Moda Praia Luxo', priceReais: 420, image: img('photo-1478146896981-b80fe463b330'), category: 'roupas', tags: ['praia'] },
  { id: 'p4', slug: 'kaftan-bordado-artesanal', brand: 'Viper Beach', name: 'Kaftan Bordado Artesanal', priceReais: 490, image: img('photo-1598554889165-8139a49f2883'), category: 'vestidos', tags: ['praia'] },
]
