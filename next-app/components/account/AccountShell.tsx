export default function AccountShell() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Starter Component</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Account Shell</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">Starter block</h3>
          <p className="mt-2 text-sm text-slate-600">A small, task-adjacent surface that keeps the file meaningful without solving the exercise.</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h3 className="text-sm font-semibold text-slate-900">Preview-friendly</h3>
          <p className="mt-2 text-sm text-slate-600">This gives the sandbox a simple layout to render from the existing repo structure.</p>
        </article>
      </div>
    </section>
  );
}
