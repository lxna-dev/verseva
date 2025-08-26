export default function BookWithUs() {
  return (
    <section id="book-with-us" className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
          <iframe
            src="https://calendly.com/verseva/discovery"
            className="h-[800px] w-full rounded-2xl border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
