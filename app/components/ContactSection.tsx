import { ArrowUpRight, Code2, Mail, Phone, UserRound } from "lucide-react";
import { contactData } from "../data";

const icons = {
  phone: Phone,
  email: Mail,
  linkedin: UserRound,
  github: Code2,
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-6xl space-y-8 sm:space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">
            {contactData.label}
          </p>
          <h2
            id="contact-title"
            className="text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-white [overflow-wrap:anywhere]"
          >
            {contactData.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {contactData.description}
          </p>
        </div>

        <address className="grid gap-4 not-italic md:grid-cols-2">
          {contactData.links.map((link) => {
            const Icon = icons[link.type];
            const external = link.href.startsWith("https://");

            return (
              <a
                key={link.type}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex min-w-0 items-start gap-3 rounded-2xl border border-transparent bg-[#202020] p-5 transition-colors hover:border-orange-300/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300 sm:gap-4 sm:p-6"
              >
                <Icon aria-hidden="true" size={22} className="mt-1 shrink-0 text-orange-300" />
                <div className="min-w-0 flex-1 space-y-2">
                  <p className="text-sm text-slate-400">{link.label}</p>
                  <p className="text-base font-medium text-white [overflow-wrap:anywhere] sm:text-lg">
                    {link.value}
                  </p>
                </div>
                {external && (
                  <>
                    <ArrowUpRight aria-hidden="true" size={18} className="mt-1 shrink-0 text-orange-300" />
                    <span className="sr-only">Opens in a new tab</span>
                  </>
                )}
              </a>
            );
          })}
        </address>
      </div>
    </section>
  );
}
