import React from "react";

const Booking = () => {
  return (
    <div>
      <section
        className="mx-auto max-w-7xl px-6 py-12 md:mt-40 mt-20 container"
        id="Booking"
          >
              <header className="mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight whitespace-nowrap font-rail">Customers
                    Review</h2>
                <p className="text-muted-foreground mt-2">Thoughtfully curated best-sellers loved for their quality and
                    finish.</p>
            </header>
            <div className="grid sm:grid-cols-2 gap-6 items-center">
                <div className="p-6 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur">
                    <div className="flex items-center gap-3">
                        <div className="text-3xl font-bold">4.9</div>
                        <div className="flex text-gold-500" aria-label="average rating 4.9 out of 5">
                            <span>★★★★★</span>
                        </div>
                    </div>
                    <p className="mt-2 text-slate-600">Based on 128 verified reviews</p>
                    <div className="mt-4 h-2 rounded-full bg-slate-100 under">
                        <div
                            className="h-full w-[96%] rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-amber-400">
                        </div>
                    </div>
                </div>
                <div className="p-6 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white">
                    <p className="text-slate-700">“From the moment I walked in, I felt taken care of. The team listened to
                        exactly what I wanted and the results were flawless.”</p>
                    <div className="mt-4 flex items-center gap-3">
                        <img src="/images/reviewer-1.png" alt="Reviewer A" className="h-10 w-10 rounded-full object-cover"
                            loading="lazy" />
                        <div>
                            <p className="text-sm font-medium">Amelia</p>
                            <p className="text-xs text-slate-500">Balayage & Style</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition will-change-transform hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="/images/reviewer-1.png" alt="Amelia"
                                className="h-10 w-10 rounded-full object-cover bg-gray-100" loading="lazy" />
                            <div>
                                <h3 className="font-semibold">Amelia</h3>
                                <p className="text-xs text-slate-500">2 weeks ago</p>
                            </div>
                        </div>
                        <div className="text-gold-500" aria-hidden="true">★★★★</div>
                    </div>
                    <p className="mt-4 text-slate-700">Absolutely thrilled with my color! The dimension is stunning and my
                        hair feels healthier than ever.</p>
                    <footer className="mt-4 text-xs text-slate-500">Service: Balayage & Gloss</footer>
                </article>

                <article
                    className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition will-change-transform hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="/images/reviewer-2.png" alt="Marcus"
                                className="h-10 w-10 rounded-full object-cover bg-gray-100" loading="lazy" />
                            <div>
                                <h3 className="font-semibold">Marcus</h3>
                                <p className="text-xs text-slate-500">1 month ago</p>
                            </div>
                        </div>
                        <div className="text-gold-500" aria-hidden="true">★★★★★</div>
                    </div>
                    <p className="mt-4 text-slate-700">Best fade in town. Clean, sharp, and grows out perfectly. Friendly
                        staff and chill vibe.</p>
                    <footer className="mt-4 text-xs text-slate-500">Service: Cut & Finish</footer>
                </article>

                <article
                    className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition will-change-transform hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="/images/reviewer-3.png" alt="Claire"
                                className="h-10 w-10 rounded-full object-cover bg-gray-100" loading="lazy" />
                            <div>
                                <h3 className="font-semibold">Claire</h3>
                                <p className="text-xs text-slate-500">3 weeks ago</p>
                            </div>
                        </div>
                        <div className="text-gold-500" aria-hidden="true">★★★★★</div>
                    </div>
                    <p className="mt-4 text-slate-700">They truly listened and nailed the sleek look I wanted. My new go-to
                        salon!</p>
                    <footer className="mt-4 text-xs text-slate-500">Service: Keratin & Style</footer>
                </article>

                <article
                    className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition will-change-transform hover:-translate-y-0.5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="/images/reviewer-4.png" alt="Leo"
                                className="h-10 w-10 rounded-full object-cover bg-gray-100" loading="lazy" />
                            <div>
                                <h3 className="font-semibold">Leo</h3>
                                <p className="text-xs text-slate-500">5 days ago</p>
                            </div>
                        </div>
                        <div className="text-gold-500" aria-hidden="true">★★★★★</div>
                    </div>
                    <p className="mt-4 text-slate-700">Great texture cut and styling tips. I left feeling confident and
                        camera-ready.</p>
                    <footer className="mt-4 text-xs text-slate-500">Service: Texture Cut</footer>
                </article>

            </div>
        <div className="mt-12 relative overflow-hidden rounded-2xl border border-slate-200 p-8 bg-gradient-to-tl from-white to-gray-600 text-white">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Ready for your glow-up?
            </h2>
            <p className="mt-2 text-white/90 max-w-2xl">
              Book your appointment today and experience premium hair care with
              a personal touch.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:+10000000000"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-2.5 font-medium hover:bg-slate-900/90 hover:text-white transition group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                  className="mr-2 transition-colors duration-200 group-hover:fill-white"
                >
                  <path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" />
                </svg>
                Call to Book
              </a>

              <a
                href="mailto:hello@phineglowhair.com"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 font-medium hover:bg-white/10 transition bg-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#ffffff"
                  className="mr-2"
                >
                  <path d="M264-288q-29.7 0-50.85-21.15Q192-330.3 192-360v-384q0-29.7 21.15-50.85Q234.3-816 264-816h528q29.7 0 50.85 21.15Q864-773.7 864-744v384q0 29.7-21.15 50.85Q821.7-288 792-288H264Zm264-192L264-656v296h528v-296L528-480Zm0-86 264-178H264l264 178ZM120-144q-29 0-50.5-21.5T48-216v-456h72v456h600v72H120Zm672-512v-88H264v88-88h528v88Z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
