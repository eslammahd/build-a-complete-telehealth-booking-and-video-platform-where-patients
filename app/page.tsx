import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center text-white font-bold text-lg">A</div>
            <div>
              <p className="font-bold text-slate-800 leading-none">Dr. Ahmed</p>
              <p className="text-xs text-slate-500">MD Psychiatrist · Cairo</p>
            </div>
          </div>
          <Link href="/doctor/login" className="text-sm text-slate-500 hover:text-brand-600 transition-colors">Doctor Login</Link>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Accepting new patients
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          Online Psychiatry<br/>Sessions from Home
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Book a private video consultation with Dr. Ahmed. No account needed — just pick a time, pay, and connect.
        </p>
        <Link href="/book" className="btn-primary text-lg px-10 py-4">
          Book an Appointment →
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-center text-2xl font-bold text-slate-800 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '1', icon: '📅', title: 'Pick a Time', desc: 'Choose from Dr. Ahmed\'s available slots.' },
            { step: '2', icon: '💳', title: 'Pay Securely', desc: 'Pay online by card. Instant confirmation by email.' },
            { step: '3', icon: '🎥', title: 'Join the Session', desc: 'Click your meeting link at appointment time. No apps needed.' },
          ].map(item => (
            <div key={item.step} className="card text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="inline-flex items-center justify-center w-7 h-7 bg-brand-100 text-brand-700 rounded-full text-sm font-bold mb-3">{item.step}</div>
              <h3 className="text-slate-800 font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-brand-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">A</div>
          <h2 className="text-2xl font-bold mb-4">Dr. Ahmed</h2>
          <p className="text-brand-600 font-medium mb-4">MD Psychiatrist · Cairo, Egypt</p>
          <p className="text-slate-600 text-lg">I offer compassionate, evidence-based psychiatric care through secure video sessions. Consultations available in Arabic and English.</p>
        </div>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © {new Date().getFullYear()} Dr. Ahmed · Psychiatrist · Cairo, Egypt
      </footer>
    </main>
  );
}
