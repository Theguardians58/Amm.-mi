import Link from "next/link";
import { notFound } from "next/navigation";

type ProductDetail = {
  title: string;
  fabric: string;
  usage: string;
  support: string;
  faq: Array<{ q: string; a: string }>;
};

const details: Record<string, ProductDetail> = {
  "cotton-comfort-bra": {
    title: "Sukoon Cotton Bra",
    fabric: "Pure soft cotton with light stretch. Skin-friendly for all-day wear.",
    usage: "Daily use, market trip, ghar ka kaam — sab ke liye easy.",
    support: "Medium support for natural movement and comfort.",
    faq: [
      { q: "Garmi mein pehen sakte hain?", a: "Haan, breathable cotton hai, sweat feel kam hota hai." },
      { q: "Kaise dhoyein?", a: "Thande paani se gentle hand wash best hai." },
      { q: "Kitne time chalega?", a: "Regular care ke saath 6-9 mahine achha support deta hai." }
    ]
  },
  "soft-fit-panty": {
    title: "Naram Fit Panty Set",
    fabric: "Breathable cotton, soft elastic edges.",
    usage: "Roz pehenne ke liye anti-irritation comfort.",
    support: "No-dig waist for easy movement.",
    faq: [
      { q: "Daily use ke liye safe?", a: "Bilkul, soft cotton hygiene-friendly hai." },
      { q: "Machine wash?", a: "Laundry bag mein mild cycle kar sakte hain." },
      { q: "Elastic loose hoga?", a: "Heat dry avoid karein, shape zyada time tikti hai." }
    ]
  },
  "indigo-nighty": {
    title: "Indigo Aaraam Nighty",
    fabric: "Rayon-cotton light blend for airflow.",
    usage: "Night comfort aur relaxed home wear.",
    support: "Loose fit, breathing room.",
    faq: [
      { q: "Sweat friendly hai?", a: "Haan, fabric halka aur airy hai." },
      { q: "Color fade hoga?", a: "Pehle 2 wash alag rakhein, phir normal wash." },
      { q: "Summer mein chalega?", a: "Haan, lightweight hai." }
    ]
  },
  "lace-inner-set": {
    title: "Mehndi Grace Inner Set",
    fabric: "Soft lace outer with cotton lining inside.",
    usage: "Special feel + everyday comfort balance.",
    support: "Light support, gentle touch.",
    faq: [
      { q: "Skin pe chubhega?", a: "Inside lining cotton hai, direct lace rub kam hota hai." },
      { q: "Hand wash zaroori hai?", a: "Haan, lace quality ke liye hand wash best." },
      { q: "Daily pehen sakte hain?", a: "Haan, agar aapko soft fit pasand ho." }
    ]
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = details[params.id];
  if (!product) return notFound();

  return (
    <main className="page-wrap">
      <article className="card">
        <Link href="/">← Back to home</Link>
        <h1>{product.title}</h1>
        <p>Simple, dignified, comfort-first design for Indian women 30+.</p>
        <div className="product-grid">
          {["Front View", "Side View", "Fabric Closeup"].map((angle) => (
            <div className="mock-image" key={angle} aria-label={angle}>
              {angle}
            </div>
          ))}
        </div>

        <h2>Fabric aur Use</h2>
        <ul>
          <li>🌿 Fabric: {product.fabric}</li>
          <li>🧺 Usage: {product.usage}</li>
          <li>💗 Comfort support: {product.support}</li>
        </ul>

        <h2>Common FAQs</h2>
        {product.faq.map((item) => (
          <details key={item.q} className="product-card">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </article>
    </main>
  );
}
