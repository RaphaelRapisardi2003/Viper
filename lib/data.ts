export interface Product {
  id: string
  brand: string
  name: string
  price: string
  oldPrice?: string
  badge?: string
  badgeType?: 'new' | 'sale' | 'default'
  image: string
  colors?: { hex: string; name: string }[]
}

export const novidadesProducts: Product[] = [
  { id: 'n1', brand: 'Viper Studio', name: 'Vestido Midi Cetim Natural', price: 'R$ 689', badge: 'New In', image: 'https://images.unsplash.com/photo-1614786269829-d24616faf56d?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#c9a882', name: 'Caramelo' }, { hex: '#1a1a1a', name: 'Preto' }, { hex: '#e8ddd2', name: 'Marfim' }] },
  { id: 'n2', brand: 'Viper Collection', name: 'Blazer Alfaiataria Estruturado', price: 'R$ 849', image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#f5f0e8', name: 'Off-white' }, { hex: '#7b6e62', name: 'Camel' }] },
  { id: 'n3', brand: 'Viper Essentials', name: 'Vestido Longo com Fenda Lateral', price: 'R$ 560', oldPrice: 'R$ 700', badge: '−20%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1619794724492-651397287d94?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#2c2c2c', name: 'Carvão' }, { hex: '#8b4b3a', name: 'Terracota' }] },
  { id: 'n4', brand: 'Viper Studio', name: 'Trench Coat Clássico Premium', price: 'R$ 1.290', badge: 'Tendência', image: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#c8a87e', name: 'Camel' }, { hex: '#111', name: 'Preto' }] },
  { id: 'n5', brand: 'Viper Studio', name: 'Conjunto Linho Off-White', price: 'R$ 920', image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#e8ddd2', name: 'Marfim' }, { hex: '#b5966e', name: 'Bege' }] },
  { id: 'n6', brand: 'Viper Essentials', name: 'Saia Midi Plissada Acetinada', price: 'R$ 390', image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#c0a090', name: 'Rosa nude' }, { hex: '#1a1a1a', name: 'Preto' }, { hex: '#4a6fa5', name: 'Azul' }] },
  { id: 'n7', brand: 'Viper Collection', name: 'Blusa Transparente com Detalhes', price: 'R$ 340', badge: 'New In', image: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#f0e6d8', name: 'Nude' }, { hex: '#2c3e50', name: 'Marinho' }] },
  { id: 'n8', brand: 'Viper Studio', name: 'Vestido Floral Manga Longa', price: 'R$ 510', oldPrice: 'R$ 600', badge: '−15%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#e8b4a0', name: 'Rosa' }, { hex: '#6b8e6b', name: 'Verde' }] },
]

export const maisVendidosProducts: Product[] = [
  { id: 'mv1', brand: 'Viper Basics', name: 'Camisa Oversized Algodão Pima', price: 'R$ 289', image: 'https://images.unsplash.com/photo-1557777586-f6682739fcf3?auto=format&fit=crop&w=600&q=80' },
  { id: 'mv2', brand: 'Viper Studio', name: 'Vestido Longo para Eventos', price: 'R$ 1.150', badge: 'Destaque', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80' },
  { id: 'mv3', brand: 'Viper Collection', name: 'Calça Alfaiataria Wide Leg', price: 'R$ 450', oldPrice: 'R$ 600', badge: '−25%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=600&q=80' },
  { id: 'mv4', brand: 'Viper Studio', name: 'Jaqueta Couro Legítimo Feminina', price: 'R$ 1.490', badge: 'New In', image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=600&q=80' },
  { id: 'mv5', brand: 'Viper Basics', name: 'Top Cropped Ribana Premium', price: 'R$ 219', image: 'https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=600&q=80' },
]

export const sapatosProducts: Product[] = [
  { id: 's1', brand: 'Viper Shoes', name: 'Sandália Salto Alto Fino', price: 'R$ 590', badge: 'New In', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#1a1a1a', name: 'Preto' }, { hex: '#c9a882', name: 'Nude' }, { hex: '#8b1a1a', name: 'Bordô' }] },
  { id: 's2', brand: 'Viper Shoes', name: 'Scarpin Bico Fino Couro', price: 'R$ 480', image: 'https://images.unsplash.com/photo-1554062614-6da4fa67725a?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#1a1a1a', name: 'Preto' }, { hex: '#d4b896', name: 'Caramelo' }] },
  { id: 's3', brand: 'Viper Sport', name: 'Tênis Chunky Platform', price: 'R$ 720', badge: 'Tendência', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#f5f5f5', name: 'Branco' }, { hex: '#1a1a1a', name: 'Preto' }] },
  { id: 's4', brand: 'Viper Shoes', name: 'Bota Cano Longo Over-the-Knee', price: 'R$ 840', oldPrice: 'R$ 1.050', badge: '−20%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#1a1a1a', name: 'Preto' }, { hex: '#6b4c2e', name: 'Marrom' }] },
]

export const bolsasProducts: Product[] = [
  { id: 'b1', brand: 'Viper Bags', name: 'Bolsa Tote Couro Italiano', price: 'R$ 1.290', badge: 'New In', image: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#c8a87e', name: 'Caramelo' }, { hex: '#1a1a1a', name: 'Preto' }, { hex: '#f5f0e8', name: 'Creme' }] },
  { id: 'b2', brand: 'Viper Bags', name: 'Clutch Minimalista com Corrente', price: 'R$ 620', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#d4a96a', name: 'Dourado' }, { hex: '#1a1a1a', name: 'Preto' }] },
  { id: 'b3', brand: 'Viper Bags', name: 'Bolsa Tiracolo Couro com Alça', price: 'R$ 890', badge: 'Destaque', image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#8b4b3a', name: 'Terracota' }, { hex: '#c8a87e', name: 'Caramelo' }] },
  { id: 'b4', brand: 'Viper Bags', name: 'Bucket Bag Camurça Premium', price: 'R$ 750', oldPrice: 'R$ 880', badge: '−15%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=600&q=80', colors: [{ hex: '#6b4c2e', name: 'Marrom' }, { hex: '#444', name: 'Cinza' }] },
]

export const saleProducts: Product[] = [
  { id: 'sl1', brand: 'Viper Studio', name: 'Vestido de Festa com Decote', price: 'R$ 395', oldPrice: 'R$ 790', badge: '−50%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1538329972958-465d6d2144ed?auto=format&fit=crop&w=600&q=80' },
  { id: 'sl2', brand: 'Viper Collection', name: 'Casaco Lã Premium Oversize', price: 'R$ 534', oldPrice: 'R$ 890', badge: '−40%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1604284195847-88dc4b5a9faa?auto=format&fit=crop&w=600&q=80' },
  { id: 'sl3', brand: 'Viper Shoes', name: 'Scarpin Mule Couro Verniz', price: 'R$ 312', oldPrice: 'R$ 480', badge: '−35%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80' },
  { id: 'sl4', brand: 'Viper Bags', name: 'Mini Bag Structured Couro', price: 'R$ 623', oldPrice: 'R$ 890', badge: '−30%', badgeType: 'sale', image: 'https://images.unsplash.com/photo-1640901555383-7335ec5a6476?auto=format&fit=crop&w=600&q=80' },
]

export const casualProducts: Product[] = [
  { id: 'c1', brand: 'Viper Basics', name: 'Vestido Casual com Amarração', price: 'R$ 320', image: 'https://images.unsplash.com/photo-1616313253719-c46514cddee1?auto=format&fit=crop&w=600&q=80' },
  { id: 'c2', brand: 'Viper Essentials', name: 'Camiseta Manga Longa Modal', price: 'R$ 189', badge: 'New In', image: 'https://images.unsplash.com/photo-1579328064848-53fe6c665058?auto=format&fit=crop&w=600&q=80' },
  { id: 'c3', brand: 'Viper Denim', name: 'Jeans Wide Leg Cintura Alta', price: 'R$ 440', image: 'https://images.unsplash.com/photo-1534875756527-5e8e4392005f?auto=format&fit=crop&w=600&q=80' },
  { id: 'c4', brand: 'Viper Studio', name: 'Macacão Linho com Cinto', price: 'R$ 580', image: 'https://images.unsplash.com/photo-1602010069450-0a62034f235c?auto=format&fit=crop&w=600&q=80' },
]

export const festaProducts: Product[] = [
  { id: 'f1', brand: 'Viper Studio', name: 'Vestido Sereia com Decote', price: 'R$ 1.890', badge: 'Exclusivo', image: 'https://images.unsplash.com/photo-1541130292430-a832637ddc0d?auto=format&fit=crop&w=600&q=80' },
  { id: 'f2', brand: 'Viper Night', name: 'Vestido Paetê Longo Dourado', price: 'R$ 1.340', image: 'https://images.unsplash.com/photo-1553544260-f87e671974ee?auto=format&fit=crop&w=600&q=80' },
  { id: 'f3', brand: 'Viper Night', name: 'Vestido Ombro a Ombro Veludo', price: 'R$ 980', image: 'https://images.unsplash.com/photo-1580478491436-fd6a937acc9e?auto=format&fit=crop&w=600&q=80' },
  { id: 'f4', brand: 'Viper Studio', name: 'Macacão Festa com Brilho', price: 'R$ 1.120', image: 'https://images.unsplash.com/photo-1645996830739-8fe3df27c33f?auto=format&fit=crop&w=600&q=80' },
]

export const trabalhoProducts: Product[] = [
  { id: 't1', brand: 'Viper Work', name: 'Blazer Cropped para o Escritório', price: 'R$ 760', image: 'https://images.unsplash.com/photo-1662532577856-e8ee8b138a8b?auto=format&fit=crop&w=600&q=80' },
  { id: 't2', brand: 'Viper Work', name: 'Calça Social Slim Feminina', price: 'R$ 490', badge: 'Tendência', image: 'https://images.unsplash.com/photo-1664076458686-3449062080ac?auto=format&fit=crop&w=600&q=80' },
  { id: 't3', brand: 'Viper Work', name: 'Camisa Social Oversized Branca', price: 'R$ 320', image: 'https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?auto=format&fit=crop&w=600&q=80' },
  { id: 't4', brand: 'Viper Work', name: 'Vestido Tubinho Midi Elegante', price: 'R$ 620', image: 'https://images.unsplash.com/photo-1645561305502-63a9ba09ab09?auto=format&fit=crop&w=600&q=80' },
]

export const praiaProducts: Product[] = [
  { id: 'p1', brand: 'Viper Beach', name: 'Vestido Saída de Praia Tie-Dye', price: 'R$ 280', badge: 'New In', image: 'https://images.unsplash.com/photo-1599662875272-64de8289f6d8?auto=format&fit=crop&w=600&q=80' },
  { id: 'p2', brand: 'Viper Beach', name: 'Conjunto Short e Camisa Linho', price: 'R$ 350', image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=600&q=80' },
  { id: 'p3', brand: 'Viper Beach', name: 'Biquíni Moda Praia Luxo', price: 'R$ 420', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=600&q=80' },
  { id: 'p4', brand: 'Viper Beach', name: 'Kaftan Bordado Artesanal', price: 'R$ 490', image: 'https://images.unsplash.com/photo-1598554889165-8139a49f2883?auto=format&fit=crop&w=600&q=80' },
]
