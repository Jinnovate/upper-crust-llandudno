const favourites = [
  { name: 'Big Breakfast', detail: 'The full works, cooked fresh to order', image: '/cafe/breakfast.png', tag: 'All day' },
  { name: 'Afternoon Tea', detail: 'Little sandwiches, homemade cakes & a proper pot of tea', image: '/cafe/afternoon-tea.png', tag: 'A treat' },
  { name: 'Cakes & Bakes', detail: 'A cabinet full of something lovely', image: '/cafe/cakes.png', tag: 'Homemade' },
];

function Heart({ children }: { children: React.ReactNode }) { return <span className="heart-note">♡<b>{children}</b></span>; }

export default function Home() {
  return <main className="rustic-site">
    <nav className="rustic-nav" aria-label="Main navigation">
      <a className="rustic-brand" href="#top" aria-label="Upper Crust home"><span className="brand-mark"><img src="/upper-crust-cup-logo.svg" alt="" /></span><span><strong>Upper Crust</strong><small>Cosy café · Llandudno</small></span></a>
      <div className="rustic-links"><a href="#food">Food</a><a href="#our-place">Our place</a><a href="#reviews">Reviews</a><a href="#visit">Visit</a></div>
      <a className="rustic-call" href="tel:+441492490218">Call us <span>→</span></a>
    </nav>

    <header className="rustic-hero" id="top">
      <div className="hero-photo" role="img" aria-label="The warm and rustic interior of Upper Crust café in Llandudno" />
      <div className="hero-shade" />
      <div className="fairy-lights" aria-hidden="true">{Array.from({length: 12}).map((_,i)=><i key={i}/>)}</div>
      <div className="hero-message">
        <p className="script-line">Come in, get cosy...</p>
        <h1>Proper food.<br/><em>Warm hearts.</em></h1>
        <p className="hero-intro">A friendly little café in Llandudno, full of character, homemade favourites and the smell of fresh coffee.</p>
        <div className="hero-buttons"><a className="wood-button" href="#food">See what’s cooking</a><a className="soft-link" href="#visit">Plan your visit <span>↓</span></a></div>
      </div>
      <div className="open-board"><span>Mon—Sat</span><strong>From 9:30</strong><small>Sunday closed</small></div>
      <div className="hanging-lamp lamp-a"/><div className="hanging-lamp lamp-b"/><div className="hanging-lamp lamp-c"/>
    </header>

    <section className="welcome-strip"><span>Freshly made</span><i>♥</i><span>Locally loved</span><i>♥</i><span>Always welcoming</span><i>♥</i><span>Good honest food</span></section>

    <section className="food-section" id="food">
      <div className="food-heading"><div><p className="section-kicker">From our kitchen</p><h2>Something lovely<br/>for <em>everyone.</em></h2></div><div className="heading-note"><Heart>Good mood food</Heart><p>Breakfasts, light lunches, comforting classics and plenty of homemade sweet things—served without fuss and with a smile.</p></div></div>
      <div className="favourites-grid">{favourites.map((item,i)=><article className="favourite-card" key={item.name}><div className="food-photo" style={{backgroundImage:`url('${item.image}')`}}><span>{item.tag}</span></div><div className="food-caption"><span>0{i+1}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div></div></article>)}</div>
      <div className="chalk-specials"><div className="chalk-title"><span>Upper Crust favourites</span><h3>Home-cooked & hearty</h3></div><ul><li><span>Cooked breakfasts</span><i>••••</i><strong>Fresh</strong></li><li><span>Sandwiches & savouries</span><i>••••</i><strong>Plenty</strong></li><li><span>Cakes, pastries & afternoon tea</span><i>••••</i><strong>Speciality</strong></li></ul><a href="tel:+441492490218">Call about today’s specials →</a></div>
    </section>

    <section className="our-place" id="our-place">
      <div className="place-copy"><p className="section-kicker warm">Our little corner</p><h2>Full of stories.<br/><em>Made for staying.</em></h2><p>Nothing here quite matches—and that’s the point. Well-loved chairs sit beneath odd little clocks, warm bulbs glow from old wooden crates, and sanded scaffold boards bring a bit of honest, rustic charm.</p><p>It’s cosy, a little quirky and completely ours. Grab your favourite chair, settle in with something warm and let the world go by.</p><div className="place-signoff"><span>Made with</span><b>♥</b><span>in Llandudno</span></div></div>
      <div className="place-collage"><figure className="photo-frame frame-main"><div style={{backgroundImage:"url('/cafe/interior-clocks.png')"}}/><figcaption>A seat in the sunshine</figcaption></figure><figure className="photo-frame frame-small"><div style={{backgroundImage:"url('/cafe/interior-lights.png')"}}/><figcaption>Our famous lights</figcaption></figure><span className="ivy" aria-hidden="true">❧ ❧ ❧</span></div>
    </section>

    <section className="reviews-rustic" id="reviews">
      <div className="reviews-heading"><p className="section-kicker warm">Kind words from Google</p><h2>Loved by<br/><em>locals & visitors.</em></h2><a className="google-rating" href="https://www.google.com/search?q=Upper+Crust+Llandudno+reviews" target="_blank" rel="noreferrer"><strong>4.6</strong><span>★★★★★<small>46 Google reviews</small></span></a></div>
      <div className="review-cards"><blockquote><span>“</span><p>Definitely worth the money.</p><footer>Dave Roberts · Google review</footer></blockquote><blockquote><span>“</span><p>A variety of delicious cakes.</p><footer>Sandra Cookson · Google review</footer></blockquote><blockquote><span>“</span><p>Tables inside and out.</p><footer>Mrs P · Google review</footer></blockquote></div>
      <p className="rating-note">Google rating and review count checked August 2026.</p>
    </section>

    <section className="cuppa"><div className="cuppa-image"/><div className="cuppa-copy"><Heart>Take a moment</Heart><p className="section-kicker">Stay for a cuppa</p><h2>Good coffee,<br/><em>no hurry.</em></h2><p>Whether you’re catching up with an old friend or enjoying five quiet minutes to yourself, we’ll keep the kettle warm.</p><a className="wood-button pale" href="#visit">Find your favourite seat</a></div></section>

    <section className="gallery" aria-label="A taste of Upper Crust"><div className="gallery-text"><p className="section-kicker">From the table</p><h2>Made to<br/>make you smile.</h2><p>Follow along for daily specials, fresh bakes and the occasional behind-the-scenes moment.</p><a href="https://www.facebook.com/UpperCrusttoo/" target="_blank" rel="noreferrer">Find us on Facebook ↗</a></div><div className="gallery-photo tall" style={{backgroundImage:"url('/cafe/hot-drinks.png')"}}/><div className="gallery-photo" style={{backgroundImage:"url('/cafe/brunch.png')"}}/><div className="gallery-photo" style={{backgroundImage:"url('/cafe/cakes.png')"}}/></section>

    <section className="visit-rustic" id="visit"><div className="visit-title"><p className="script-line">There’s always a chair for you</p><h2>Come and get cosy.</h2></div><div className="visit-board"><div><span>Find us</span><strong>16 Mostyn Broadway<br/>Llandudno · LL30 1YL</strong><a href="https://www.google.com/maps/search/?api=1&query=Upper+Crust%2C+16+Mostyn+Broadway%2C+Llandudno+LL30+1YL" target="_blank" rel="noreferrer">Get directions →</a></div><div><span>We’re open</span><strong>Mon, Wed—Sat · 9:30—4<br/>Tuesday · 9:30—4:30<br/>Sunday · Closed</strong><small>Hours sourced from Google; holiday hours may vary.</small></div><div><span>Say hello</span><strong>01492 490218</strong><a href="tel:+441492490218">Give us a call →</a></div></div></section>

    <footer className="rustic-footer"><a className="rustic-brand" href="#top" aria-label="Upper Crust home"><span className="brand-mark"><img src="/upper-crust-cup-logo.svg" alt="" /></span><span><strong>Upper Crust</strong><small>Llandudno · North Wales</small></span></a><p>Good food. Warm hearts. Happy days.</p><a href="#top">Back to the top ↑</a></footer>
  </main>;
}
