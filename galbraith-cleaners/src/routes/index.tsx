import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const PHONE_HREF = "tel:+15137938300";
const MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=4041+East+Galbraith+Road+Cincinnati+OH+45236";

const services = [
  {
    body: "Suits, jackets, trousers, skirts and coats cleaned and finished on site.",
    glyph: "/assets/brand/glyph-3.png",
    title: "Dry cleaning",
  },
  {
    body: "Washed, pressed and returned on hangers or boxed, the way you ask for them.",
    glyph: "/assets/brand/glyph-2.png",
    title: "Shirt laundry",
  },
  {
    body: "Hems, waists, sleeves, zippers and re-fits, measured and pinned in the shop.",
    glyph: "/assets/brand/glyph-7.png",
    title: "Alterations and tailoring",
  },
  {
    body: "Gowns, bridesmaid dresses and formalwear, cleaned before the day or preserved after it.",
    glyph: "/assets/brand/glyph-4.png",
    title: "Wedding and formal",
  },
  {
    body: "Old stains, storage marks and mystery spots looked at honestly before any promise is made.",
    glyph: "/assets/brand/glyph-1.png",
    title: "Stain and restoration work",
  },
  {
    body: "Leather, suede and shearling handled through specialist cleaning, not guesswork.",
    glyph: "/assets/brand/glyph-5.png",
    title: "Leather and suede",
  },
  {
    body: "Comforters, blankets, duvets and table linens, cleaned and folded ready to store.",
    glyph: "/assets/brand/glyph-6.png",
    title: "Household items",
  },
  {
    body: "Drop off, pick up, and a ticket you can call about. No app, no subscription.",
    glyph: "/assets/brand/glyph-0.png",
    title: "Simple drop off",
  },
];

const hours = [
  { day: "Monday to Wednesday", time: "9:00 am to 7:00 pm" },
  { day: "Thursday", time: "9:00 am to 3:00 pm" },
  { day: "Friday", time: "9:00 am to 7:00 pm" },
  { day: "Saturday", time: "9:00 am to 5:00 pm" },
  { closed: true, day: "Sunday", time: "Closed" },
];

function HomePage() {
  return (
    <div className="g-page">
      <header className="g-nav">
        <div className="g-shell g-nav__inner">
          <a href="#top">
            <img
              alt="Galbraith Professional Cleaners"
              className="g-nav__logo"
              src="/assets/brand/logo.png"
            />
          </a>
          <nav className="g-nav__links">
            <a href="#services">Services</a>
            <a href="#word">Word of mouth</a>
            <a href="#visit">Hours and address</a>
          </nav>
          <a className="g-call g-nav__cta" href={PHONE_HREF}>
            Call the shop
          </a>
        </div>
      </header>

      <main id="top">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />

        <section className="g-section" id="story">
          <div className="g-shell g-story g-rise">
            <div className="g-story__frame">
              <img
                alt="A restored ivory silk dress on a wooden hanger"
                loading="lazy"
                src="/assets/dress.jpg"
              />
            </div>
            <div>
              <p className="g-story__quote">
                She brought in a dress that had been in her mother&rsquo;s
                basement for twenty five years, covered in stains nobody could
                place. He said, <span>&ldquo;I can&rsquo;t promise anything,
                but I will let you know either way.&rdquo;</span> It came back
                looking like new.
              </p>
              <p className="g-lede">
                That is how the work gets described around here: no big claims
                up front, an honest look at the garment, and a phone call either
                way. The shop does not look like much from the road. The pressing
                does.
              </p>
              <p className="g-attrib" style={{ marginTop: "1.75rem" }}>
                Longtime customer, Deer Park
              </p>
            </div>
          </div>
        </section>

        <section className="g-section g-section--plate" id="services">
          <div className="g-shell">
            <p className="g-eyebrow g-rise">What comes in</p>
            <h2 className="g-h2 g-rise">Everything a closet actually needs</h2>
            <div className="g-services">
              {services.map((service) => (
                <article className="g-service g-rise" key={service.title}>
                  <img alt="" aria-hidden="true" loading="lazy" src={service.glyph} />
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="g-section" id="word">
          <div className="g-shell">
            <h2 className="g-h2 g-rise">
              Recommended the old fashioned way
            </h2>
            <div className="g-voices">
              <article className="g-voice g-voice--art g-rise">
                <p>
                  &ldquo;Ask around Deer Park about a cleaner and the same name
                  keeps coming back. After a little more research, no more
                  suggestions required.&rdquo;
                </p>
                <p className="g-attrib">Neighborhood recommendation thread</p>
              </article>
              <article className="g-voice g-rise">
                <p>
                  &ldquo;The shop doesn&rsquo;t look like much, but he does
                  excellent work.&rdquo;
                </p>
                <p className="g-attrib">Customer, Dillonvale</p>
              </article>
              <article className="g-voice g-rise">
                <p>
                  Same owner, same counter, same standard. Bring the garment in
                  and you get a straight answer about what can be done with it.
                </p>
                <p className="g-attrib">
                  <a className="g-call g-call--quiet" href={PHONE_HREF}>
                    Call the shop
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="g-section g-section--plate" id="visit">
          <div className="g-shell">
            <p className="g-eyebrow g-rise">Hours and address</p>
            <div className="g-visit">
              <div className="g-rise">
                <h2 className="g-h2">On East Galbraith Road</h2>
                <address className="g-address" style={{ marginTop: "1.5rem" }}>
                  4041 East Galbraith Road
                  <br />
                  Cincinnati, Ohio 45236
                  <br />
                  Deer Park, across from Dillonvale
                  <br />
                  <a href={PHONE_HREF}>(513) 793-8300</a>
                </address>
                <table className="g-hours">
                  <tbody>
                    {hours.map((row) => (
                      <tr data-closed={row.closed ? "true" : "false"} key={row.day}>
                        <th scope="row">{row.day}</th>
                        <td>{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.9rem",
                    marginTop: "2rem",
                  }}
                >
                  <a className="g-call" href={PHONE_HREF}>
                    Call the shop
                  </a>
                  <a
                    className="g-call g-call--ghost"
                    href={MAP_HREF}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Get directions
                  </a>
                </div>
              </div>
              <figure className="g-visit__aside g-rise" style={{ margin: 0 }}>
                <img
                  alt="The shop on East Galbraith Road, brick storefront with the green sign"
                  loading="lazy"
                  src="/assets/storefront.jpg"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="g-section" id="press">
          <div className="g-shell g-story g-rise">
            <div>
              <h2 className="g-h2">Pressed by hand, checked twice</h2>
              <p className="g-lede" style={{ marginTop: "1.25rem" }}>
                Every piece is inspected before it goes back on the rail. If
                something needs a second pass, it gets one. If a stain will not
                come out, you hear that instead of a surprise at the counter.
              </p>
              <p style={{ marginTop: "2rem" }}>
                <a className="g-call g-call--quiet" href={PHONE_HREF}>
                  Call the shop
                </a>
              </p>
            </div>
            <div className="g-story__frame">
              <img
                alt="Hands guiding a dress shirt onto a press"
                loading="lazy"
                src="/assets/press.jpg"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="g-footer">
        <div className="g-shell g-footer__inner">
          <img alt="Galbraith Professional Cleaners" src="/assets/brand/logo.png" />
          <p>
            4041 East Galbraith Road, Cincinnati, Ohio 45236. (513) 793-8300.
            Closed Sunday.
          </p>
        </div>
      </footer>
    </div>
  );
}
