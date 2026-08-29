const menu = [
  { name: 'The Welsh Rarebit', desc: 'Mature cheddar, local ale, mustard & spring onion on toasted sourdough', price: '£9.50' },
  { name: 'The Great Orme', desc: 'Roast beef, horseradish cream, watercress & crispy onions', price: '£11.95' },
  { name: 'Garden Club', desc: 'Grilled courgette, whipped feta, roast pepper & basil pesto', price: '£10.50' },
  { name: 'Crust & Coast', desc: 'Welsh cheddar, smoked ham, apple chutney & dressed leaves', price: '£10.95' },
];

export default function Home() {
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Upper Crust home"><span className="brand-mark">UC</span><span>Upper Crust<small>Llandudno · Est. 2014</small></span></a>
      <div className="nav-links"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#visit">Find us</a></div>
      <a className="nav-cta" href="tel:+441492000000">Give us a bell</a>
    </nav>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">Independent café · Llandudno</p><h1>Proper food.<br/><em>Plenty of soul.</em></h1><p className="intro">Hand-stacked sandwiches, honest Welsh ingredients and a warm welcome—served in our little corner of the coast.</p><div className="hero-actions"><a className="button button-dark" href="#menu">See what’s cooking <span>↘</span></a><a className="text-link" href="#visit">Come and find us <span>→</span></a></div><div className="open-note"><span className="status-dot"/> Open today · 8am—4pm</div></div>
      <div className="hero-visual"><div className="pendant pendant-one"/><div className="pendant pendant-two"/><div className="pendant pendant-three"/><div className="hero-image" role="img" aria-label="Fresh artisan sandwich on rustic paper"/><div className="stamp">Made<br/><strong>fresh</strong><br/>daily</div><div className="wood-label">Good things, between great bread.</div></div>
    </section>

    <section className="ticker" aria-label="Our highlights"><span>Freshly baked</span><i>◆</i><span>Locally sourced</span><i>◆</i><span>Always welcoming</span><i>◆</i><span>Properly delicious</span></section>

    <section className="menu-section" id="menu"><div className="section-heading"><div><p className="eyebrow">A few favourites</p><h2>Made to make<br/>your day.</h2></div><p>Our menu shifts with the seasons, but you’ll always find generously filled sandwiches, warming specials, brilliant bakes and really good coffee.</p></div><div className="menu-grid">{menu.map((item, i) => <article className="menu-item" key={item.name}><span className="menu-number">0{i + 1}</span><div><h3>{item.name}</h3><p>{item.desc}</p></div><strong>{item.price}</strong></article>)}</div><div className="menu-footer"><p>Vegetarian, vegan or gluten-free?</p><span>Just ask—we’re happy to help.</span><a href="mailto:hello@uppercrustllandudno.co.uk">View the full menu →</a></div></section>

    <section className="story" id="story"><div className="story-images"><div className="interior-image"/><div className="detail-image"/><span className="tape">Pull up a chair</span></div><div className="story-copy"><p className="eyebrow light">A little bit different</p><h2>Built with character.<br/><em>Run with heart.</em></h2><p>Upper Crust isn’t polished and precious—and that’s just how we like it. Sanded scaffold boards, well-loved chairs and a constellation of mismatched lights make our space feel lived-in from the moment you arrive.</p><p>Come for a quick coffee, stay for lunch, or settle in and watch Llandudno wander by. There’s always a seat with your name on it.</p><a className="button button-light" href="#visit">Our corner of Llandudno <span>↘</span></a></div></section>

    <section className="visit" id="visit"><p className="eyebrow">Come on in</p><h2>Your table’s<br/><em>waiting.</em></h2><div className="visit-grid"><div><span className="label">Find us</span><p>Central Llandudno<br/>Conwy, North Wales</p><a href="https://maps.google.com/?q=Llandudno" target="_blank" rel="noreferrer">Get directions ↗</a></div><div><span className="label">Opening hours</span><p>Mon—Sat&nbsp;&nbsp; 8am—4pm<br/>Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9am—3pm</p><small>Kitchen closes 30 mins before.</small></div><div><span className="label">Say hello</span><p>01492 000 000<br/>hello@uppercrustllandudno.co.uk</p><a href="mailto:hello@uppercrustllandudno.co.uk">Drop us a line →</a></div></div></section>

    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">UC</span><span>Upper Crust<small>Llandudno · North Wales</small></span></a><p>Good food. Good mood. Good people.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
