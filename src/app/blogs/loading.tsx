export default function Loading() {
  return (
    <section aria-busy="true" aria-label="Loading articles" className="pb-24 pt-32 sm:pt-36 lg:pt-44">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <div className="h-4 w-40 animate-pulse rounded-full bg-muted" />
          <div className="mt-6 h-12 w-3/4 animate-pulse rounded-2xl bg-muted" />
          <div className="mt-5 h-5 w-2/3 animate-pulse rounded-full bg-muted" />
          <div className="mt-9 h-14 w-full max-w-xl animate-pulse rounded-full bg-muted" />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="overflow-hidden rounded-4xl border border-border/70 bg-card">
              <div className="aspect-[16/10] animate-pulse bg-muted" />
              <div className="space-y-3 p-6">
                <div className="h-3 w-1/3 animate-pulse rounded-full bg-muted" />
                <div className="h-5 w-5/6 animate-pulse rounded-full bg-muted" />
                <div className="h-4 w-full animate-pulse rounded-full bg-muted" />
                <div className="h-4 w-2/3 animate-pulse rounded-full bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
