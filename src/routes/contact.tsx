import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import DecryptedText from "@/components/fx/DecryptedText";
import { profile } from "@/lib/portfolio";
import { FileText, Send, CheckCircle2, Mail, ExternalLink, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aadhith C Joseph" },
      {
        name: "description",
        content: "Email, GitHub, LinkedIn and direct contact for Aadhith C Joseph.",
      },
      { property: "og:title", content: "Contact — Aadhith C Joseph" },
      {
        property: "og:description",
        content: "Get in touch with Aadhith C Joseph: full-stack, DevOps and applied AI.",
      },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(formData.subject || "Project Collaboration / Inquiry")}&body=${encodeURIComponent(
    `Hi Aadhith,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open Gmail compose directly in new tab
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  const directGmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=Hello%20Aadhith`;

  const links = [
    {
      label: "gmail",
      value: profile.email,
      href: directGmailLink,
      note: "opens gmail compose",
      isMail: true,
    },
    {
      label: "github",
      value: "github.com/aadhithcj",
      href: profile.github,
      note: "code & repositories",
      isMail: false,
    },
    {
      label: "linkedin",
      value: "linkedin.com/in/aadhithcj",
      href: profile.linkedin,
      note: "career & networking",
      isMail: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="page-enter mx-auto max-w-5xl px-6 pb-24 pt-12">
        <p className="label-mono">
          <DecryptedText
            text={`contact / ${profile.location}`}
            speed={25}
            sequential
            animateOn="view"
            encryptedClassName="text-lime"
          />
        </p>

        <h1 className="mt-4 font-display text-6xl leading-[1.05] sm:text-7xl md:text-9xl">
          Let's build <em className="italic text-lime not-italic">something</em>.
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
          Available for software engineering roles, DevOps automation, full-stack systems, or consulting. Drop a message below or reach out directly.
        </p>

        {/* Resume Card */}
        <div className="mt-10 flex flex-col justify-between gap-4 rounded-xl border border-line bg-surface/70 p-6 backdrop-blur-md sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-lg border border-line bg-background/80 text-lime">
              <FileText className="size-6" />
            </div>
            <div>
              <p className="font-display text-xl sm:text-2xl">Curriculum Vitae / Resume</p>
              <p className="font-mono text-xs text-muted-foreground">
                PDF document · Education, experience, and full stack repertoire
              </p>
            </div>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            data-crosshair-target
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-lime/60 bg-lime/10 px-5 py-2.5 font-mono text-xs text-lime transition-all hover:bg-lime hover:text-black hover:shadow-lg sm:text-sm"
          >
            <span>View Resume (PDF)</span>
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        {/* Two-column layout: Direct Links & Send Message Form */}
        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2">
          {/* Direct channels - styled to match right section height */}
          <div className="flex flex-col justify-between rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <h2 className="label-mono text-xs tracking-wider">
                <DecryptedText
                  text="# DIRECT CHANNELS"
                  speed={25}
                  sequential
                  animateOn="view"
                  encryptedClassName="text-lime"
                />
              </h2>
              <span className="font-mono text-[10px] text-muted-foreground/70">
                ACTIVE / MONITORED
              </span>
            </div>
            <ul className="flex flex-1 flex-col justify-between divide-y divide-line">
              {links.map((link) => (
                <li key={link.label} className="flex-1 flex flex-col justify-center">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    data-crosshair-target
                    className="group flex flex-col py-4 transition-colors hover:border-lime"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="label-mono">{link.label}</span>
                      <span className="font-display text-2xl transition-colors group-hover:italic group-hover:text-lime sm:text-3xl">
                        {link.value} ↗
                      </span>
                    </div>
                    <span className="mt-0.5 font-mono text-xs text-muted-foreground/70">
                      {link.note}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Message Box - sized to match left channels */}
          <div className="rounded-xl border border-line bg-surface/60 p-5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-line/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 animate-pulse rounded-full bg-lime" />
                <h3 className="label-mono text-xs">SEND A DIRECT MESSAGE</h3>
              </div>
              <Mail className="size-4 text-muted-foreground" />
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-name" className="label-mono mb-1 block text-[10px]">
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Alex"
                    data-crosshair-target
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="label-mono mb-1 block text-[10px]">
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    data-crosshair-target
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="label-mono mb-1 block text-[10px]">
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Software engineering role / Project"
                  data-crosshair-target
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="label-mono mb-1 block text-[10px]">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={2}
                  placeholder="Write your note or idea here..."
                  data-crosshair-target
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none rounded-md border border-line bg-background/80 px-3 py-1.5 font-mono text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-lime focus:outline-none"
                />
              </div>

              <button
                type="submit"
                data-crosshair-target
                className="group flex w-full items-center justify-center gap-2 rounded-md border border-lime bg-lime px-3 py-2 font-mono text-xs font-semibold text-black transition-all hover:bg-lime/90 hover:shadow-md"
              >
                <Send className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <span>SEND MESSAGE VIA GMAIL</span>
              </button>

              {submitted && (
                <div className="flex items-center gap-2 rounded-md border border-lime/40 bg-lime/10 p-2.5 font-mono text-[11px] text-lime">
                  <CheckCircle2 className="size-3.5 shrink-0" />
                  <span>Gmail compose opened in a new tab!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
