import AccountShell from "../../../next-app/components/account/AccountShell";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 text-slate-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Migrate / Framework Migration</p>
          <h1 className="mt-2 text-3xl font-semibold">React Router App to Next.js App Router</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Move a customer account area from a React SPA into the Next.js App Router while preserving navigation, authenticated rendering, and user flows in an idiomatic App Router structure.</p>
        </header>
      <AccountShell />
      </div>
    </main>
  );
}
