'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'كيف أستأجر باوربانك من محطة؟',
    a: 'ابحث عن أقرب محطة ZWAD، امسح رمز QR الموجود على شاشة المحطة أو أدخل الرقم التسلسلي، ثم ادفع عبر تطبيق Primo واستلم الباوربانك من المنفذ المتاح.',
  },
  {
    q: 'هل يمكنني إرجاع الباوربانك إلى محطة أخرى؟',
    a: 'نعم، يمكنك إرجاع الباوربانك إلى أي محطة ZWAD قريبة منك دون الحاجة للعودة إلى نفس المحطة التي استأجرت منها.',
  },
  {
    q: 'كيف تتم عملية الدفع؟',
    a: 'تتم جميع عمليات الدفع بشكل آمن داخل تطبيق Primo، حيث يتم خصم القيمة من محفظتك مباشرة عند بدء الاستخدام.',
  },
  {
    q: 'كم تكلفة استخدام الخدمة؟',
    a: 'التسعير واضح وبدون رسوم خفية، ويتم احتسابه حسب مدة الاستخدام مع حد يومي أقصى. يمكنك الاطلاع على التفاصيل داخل التطبيق قبل بدء الاستئجار.',
  },
  {
    q: 'ماذا يحدث إذا أعدت الباوربانك في وقت متأخر؟',
    a: 'يتم احتساب رسوم إضافية بسيطة حتى الوصول للحد اليومي الأقصى، وبعدها تُطبّق قيمة استبدال الباوربانك وفق شروط الخدمة الموضّحة في التطبيق.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="text-center">
        <span className="text-sm font-bold text-emerald">هل لديك سؤال؟</span>
        <h2 className="mt-2 font-display text-3xl font-black text-foreground text-balance sm:text-4xl">
          الأسئلة الشائعة
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <Reveal key={faq.q} delay={i * 70}>
              <div
                className={cn(
                  'overflow-hidden rounded-2xl border bg-card transition-colors',
                  isOpen ? 'border-emerald/40' : 'border-border',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-emerald transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
