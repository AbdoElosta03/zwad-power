import { ArrowLeft, BatteryCharging, QrCode, RotateCcw, Smartphone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: 1,
    icon: QrCode,
    title: 'امسح رمز QR',
    desc: 'ابحث عن أقرب محطة ZWAD وامسح رمز QR أو أدخل الرقم التسلسلي للمحطة.',
  },
  {
    n: 2,
    icon: Smartphone,
    title: 'ادفع عبر تطبيق Primo',
    desc: 'يتم خصم القيمة من محفظتك في تطبيق Primo بكل أمان وسهولة.',
  },
  {
    n: 3,
    icon: BatteryCharging,
    title: 'استلم الباوربانك',
    desc: 'اختر منفذاً متاحاً واستخرج الباوربانك لتبقى على اتصال دائم.',
  },
  {
    n: 4,
    icon: RotateCcw,
    title: 'أعده في أي محطة',
    desc: 'أعد الباوربانك في أي محطة ZWAD قريبة منك وانتهى الأمر.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold text-emerald">خطوات بسيطة</span>
        <h2 className="mt-2 font-display text-3xl font-black text-foreground text-balance sm:text-4xl">
          كيف تعمل الخدمة؟
        </h2>
        <p className="mt-4 text-muted-foreground text-pretty">
          أربع خطوات فقط تفصلك عن الشحن الذكي أينما كنت.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 110} className="relative">
            <div className="group h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald/40 hover:shadow-xl hover:shadow-emerald/10">
              <div className="flex items-center justify-between">
                <div className="grid size-14 place-items-center rounded-2xl bg-emerald/12 text-emerald transition-colors group-hover:bg-emerald group-hover:text-white">
                  <step.icon className="size-7" />
                </div>
                <span className="grid size-9 place-items-center rounded-full bg-brand-deep font-display text-sm font-bold text-neon">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
            {i < steps.length - 1 && (
              <ArrowLeft
                className="absolute -left-5 top-1/2 hidden size-6 -translate-y-1/2 text-emerald/40 lg:block"
                aria-hidden="true"
              />
            )}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
