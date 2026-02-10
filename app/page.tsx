import Link from "next/link";

type Product = {
  id: string;
  name: string;
  category: "Bra" | "Panty" | "Nighty" | "Intimate Wear";
  comfort: "Roz ka" | "Ghar pe" | "Raat ka";
  fabric: string;
  price: string;
  desc: string;
};

const products: Product[] = [
  {
    id: "cotton-comfort-bra",
    name: "Sukoon Cotton Bra",
    category: "Bra",
    comfort: "Roz ka",
    fabric: "Soft cotton + stretch support",
    price: "₹499",
    desc: "Garmi mein halka, din bhar aaraam."
  },
  {
    id: "soft-fit-panty",
    name: "Naram Fit Panty Set",
    category: "Panty",
    comfort: "Roz ka",
    fabric: "Breathable cotton",
    price: "₹349",
    desc: "No pinch waist, simple clean finish."
  },
  {
    id: "indigo-nighty",
    name: "Indigo Aaraam Nighty",
    category: "Nighty",
    comfort: "Raat ka",
    fabric: "Light rayon cotton mix",
    price: "₹799",
    desc: "Raat mein skin-friendly aur easy movement."
  },
  {
    id: "lace-inner-set",
    name: "Mehndi Grace Inner Set",
    category: "Intimate Wear",
    comfort: "Ghar pe",
    fabric: "Soft lace + cotton lining",
    price: "₹899",
    desc: "Elegant feel, par comfort sabse pehle."
  }
];

const chats = [
  {
    user: "Sakhi_102",
    topic: "Size confusion",
    message: "Mera cup size change lag raha hai. Kaise measure karu ghar pe?",
    likes: 24,
    replies: 8
  },
  {
    user: "NayiDidi",
    topic: "Garmi comfort",
    message: "June heat mein konsa fabric best rehta hai daily use ke liye?",
    likes: 31,
    replies: 12
  },
  {
    user: "GharKiRani",
    topic: "Washing care",
    message: "Machine wash safe hai ya hand wash better?",
    likes: 19,
    replies: 7
  }
];

const badges = [
  "🔒 Private browsing support",
  "🛡️ Women-safe community rules",
  "🤍 No body shaming, only support",
  "📦 Discreet packaging guidance"
];

export default function HomePage() {
  return (
    <main className="page-wrap">
      <header className="hero card">
        <div className="top-row">
          <h1>Ammi&apos;s Kachhi</h1>
          <button className="pill" aria-label="Discreet mode">
            🙈 Discreet Mode ON/OFF
          </button>
        </div>
        <p className="lead">
          Namaste beti, yahan sab kuch <strong>aaraam</strong>, <strong>izzat</strong> aur
          <strong> privacy</strong> ke saath. Aap jaisi hain, waise hi sundar hain.
        </p>
        <p className="subtle">
          Main Ammi hoon — aapki comfort guide. Bina sharm, bina tension, simple Hindi/Hinglish mein madad.
        </p>
        <div className="badge-grid">
          {badges.map((item) => (
            <span key={item} className="badge">
              {item}
            </span>
          ))}
        </div>
      </header>

      <section className="card" id="shop">
        <h2>🧺 Product Showcase</h2>
        <div className="filters">
          <label>
            Category
            <select defaultValue="All" aria-label="Category filter">
              <option>All</option>
              <option>Bra</option>
              <option>Panty</option>
              <option>Nighty</option>
              <option>Intimate Wear</option>
            </select>
          </label>
          <label>
            Size (simple)
            <div className="size-row" role="group" aria-label="Size selector">
              {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                <button key={size} className="size-btn" type="button">
                  {size}
                </button>
              ))}
            </div>
          </label>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="mock-image" aria-hidden>
                <span>{product.category}</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <ul>
                <li>🌿 Fabric: {product.fabric}</li>
                <li>💗 Comfort: {product.comfort}</li>
              </ul>
              <div className="product-footer">
                <strong>{product.price}</strong>
                <Link href={`/products/${product.id}`}>Detail dekhein</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card" id="community">
        <h2>👭 Mahila Community Chat (Public)</h2>
        <p className="subtle">
          Anonymous username use karein. Respectful, supportive aur educational baat-cheet rakhein.
        </p>
        <div className="rules">
          <h3>Moderation rules</h3>
          <ul>
            <li>✅ Body shaming, gaali, sexual abuse content allowed nahi hai.</li>
            <li>✅ Personal phone/address share na karein.</li>
            <li>✅ Hygiene, size help, comfort tips welcome.</li>
            <li>✅ Respectful tone mein sawal-jawab karein.</li>
          </ul>
        </div>
        <div className="chat-list">
          {chats.map((chat) => (
            <article className="chat-card" key={chat.user + chat.topic}>
              <p className="user">@{chat.user}</p>
              <h4>{chat.topic}</h4>
              <p>{chat.message}</p>
              <div className="actions">
                <button type="button">👍 {chat.likes}</button>
                <button type="button">💬 {chat.replies} replies</button>
                <button type="button">Reply</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card" id="ai-guide">
        <h2>🤖 Ammi AI Sahaayika</h2>
        <p>
          Ye AI aapko size help, comfort advice, hygiene tips simple Hindi/Hinglish mein deta hai.
          Medical diagnosis nahi deta.
        </p>
        <div className="ai-box">
          <p>
            <strong>Example:</strong> "Ammi, garmi mein daily use ke liye konsa bra fabric acha rahega?"
          </p>
          <div className="ai-input">
            <input placeholder="Apna sawal yahan likhiye..." aria-label="Ask Ammi AI" />
            <button type="button">Send</button>
          </div>
          <small>Privacy-first: chat data minimal, sensitive info mat daaliye.</small>
        </div>
      </section>

      <section className="card" id="safety">
        <h2>🔐 Privacy & Safety</h2>
        <ul>
          <li>Discreet mode se neutral theme + simple app icon use hoga.</li>
          <li>Notifications non-explicit aur generic wording mein aayengi.</li>
          <li>Data protection policy clearly visible and women-safe focused.</li>
          <li>Guest anonymous browsing available.</li>
        </ul>
      </section>
    </main>
  );
}
