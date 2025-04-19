import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";

// サンプル商品のデータ
const products = [
  { id: 1, name: "商品A", price: 1000, image: "/images/sample.jpg" },
  { id: 2, name: "商品B", price: 2000, image: "/images/sample.jpg" },
  { id: 3, name: "商品C", price: 1500, image: "/images/sample.jpg" }
];

export default function Home() {
  return (
    <Layout>
      <h2>商品一覧</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
}