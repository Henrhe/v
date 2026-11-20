import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-semibold tracking-tight mb-4 text-slate-900">Contact Us</h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Transmit your CAD specifications to our principal engineers. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Form */}
            <div className="lg:col-span-2">
              <GlassCard className="p-8">
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 uppercase">Full Name</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100" placeholder="Jane Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 uppercase">Email</label>
                      <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100" placeholder="jane@company.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 uppercase">Company</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100" placeholder="Acme Corp" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-600 uppercase">Service Needed</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 text-slate-700">
                        <option>General Inquiry</option>
                        <option>MEP Engineering</option>
                        <option>Structural Engineering</option>
                        <option>HVAC / CFD</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 uppercase">Project Details</label>
                    <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 resize-none" placeholder="Tell us about your constraints, timeline, and scope..." />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">Send Inquiry</Button>
                </form>
              </GlassCard>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <GlassCard className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">Contact Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase mb-1">Office</div>
                    <div className="text-slate-900">100 Engineering Way<br />Boston, MA 02110</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase mb-1">Email</div>
                    <div className="text-slate-900">inquiries@vertexmep.com</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-500 uppercase mb-1">Phone</div>
                    <div className="text-slate-900">+1 (617) 555-0199</div>
                  </div>
                </div>
              </GlassCard>
              
              <div className="h-48 w-full rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                 <span className="text-slate-400 font-mono text-sm">[ Map Placeholder ]</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}