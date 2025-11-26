export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">chiwai </h1>
      <p className="mb-4">
        Fulltime founder, part-time developer, professional learner, avid
        thinker, and pure math connoisseur.
      </p>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">About</h2>
        <div className="space-y-4 text-sm">
          <p>
            Nothing is too hard to crack. I'm driven by a chronic curiosity and
            a passion for telling stories through code, pictures and data.
          </p>
          <p>
            Building scalable creative solutions that at least go beyond the
            hype.
          </p>
          <p>
            Sometimes I write, sometimes I code, other times I am behind a lens,
            and most of the times, I enjoy my own company.
          </p>
          <p>
            Open to long term meaningful projects that involve data, AI, web2,
            and web3.
          </p>
          <p>Ardent love of African Literature.</p>
          <p>Perfect mind. Excellent Spirit. I love math a lot.</p>
        </div>
      </div>

      <div className="my-8">
        <h2 className="mb-4 text-xl font-semibold">Featured Projects</h2>
        <div className="space-y-4 text-sm">
          <p>
            <a
              href="https://www.oyaah.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              Oyaah
            </a>{" "}
            - Automatic EDA platform that turns spreadsheets into actionable
            insights in 30 seconds.
          </p>
          <p>
            <a
              href="https://artifyy.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              Artify
            </a>{" "}
            - Digital media agency crafting creative solutions for brands and
            businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
