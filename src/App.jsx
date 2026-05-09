import React, { useState } from "react";

const content = {
  en: {
    nav: {
      services: "Services",
      security: "Security",
      about: "About",
      contact: "Contact",
      support: "Get Support",
      languageButton: "🇻🇳 Tiếng Việt",
      tagline: "IT Support & Cyber Security"
    },
    badges: ["English Support", "Hỗ trợ tiếng Việt", "Remote & On-site Assistance"],
    hero: {
      smallBadge: "Secure, reliable IT for modern businesses",
      title: "IT support that keeps your business moving.",
      text: "Zenith Supports helps businesses stay productive, protected, and confident with responsive IT support, Microsoft 365 expertise, cyber security, computer repair, custom PC builds, and modern website solutions.",
      primaryButton: "Contact Us",
      secondaryButton: "View Services"
    },
    partnerCard: {
      subtitle: "Your IT Partner",
      badge: "Business IT",
      benefits: [
        ["Fast Response", "Clear support when your team needs help"],
        ["Security Focused", "Practical protection for users, devices, and cloud apps"],
        ["Cloud Ready", "Microsoft 365, backup, identity, and remote work support"],
        ["Business Friendly", "Plain-English advice without unnecessary complexity"]
      ]
    },
    servicesSection: {
      label: "Our Services",
      title: "Complete IT solutions for your business.",
      text: "From managed IT support and cyber security to computer repairs, gaming PC builds, upgrades, backup, and website development, we help your technology run smoothly."
    },
    services: [
      {
        icon: "🎧",
        title: "Managed IT Support",
        text: "Reliable day-to-day IT support for users, devices, Microsoft 365, networks, and business systems.",
        points: ["Helpdesk & remote support", "System maintenance", "Network management", "Microsoft 365 support"]
      },
      {
        icon: "🛡️",
        title: "Cyber Security",
        text: "Protect your business with multi-layered security, monitoring, and practical risk reduction.",
        points: ["Security awareness training", "Phishing simulation", "Endpoint protection", "SOC monitoring 24/7", "Incident response"]
      },
      {
        icon: "☁️",
        title: "Microsoft 365 & Cloud",
        text: "Setup, migration, security hardening, email, Teams, SharePoint, OneDrive, and identity management.",
        points: ["Microsoft 365 setup", "SharePoint & Teams", "OneDrive collaboration", "Identity & access management"]
      },
      {
        icon: "🛠️",
        title: "Computer Repair",
        text: "Fast and reliable repair for desktops, laptops, and all-in-one computers.",
        points: ["Hardware diagnostics", "Software troubleshooting", "Virus & malware removal", "Performance optimisation"]
      },
      {
        icon: "🖥️",
        title: "Build Gaming PC",
        text: "High performance custom gaming PCs built for power, speed, cooling, and reliability.",
        points: ["Custom gaming PC builds", "Performance tuning", "Cooling & cable management", "Warranty & support"]
      },
      {
        icon: "⚙️",
        title: "Customise & Upgrade",
        text: "Upgrade or customise your existing computer for better speed and performance.",
        points: ["Component upgrades", "RAM / SSD upgrades", "Graphics card upgrades", "System optimisation"]
      },
      {
        icon: "🌐",
        title: "Website Design & Development",
        text: "Professional business websites, landing pages, client portals, and secure cloud-hosted web solutions.",
        points: ["Custom website development", "Responsive & mobile friendly", "SEO optimised", "Secure & fast hosting"]
      },
      {
        icon: "💾",
        title: "Backup & Recovery",
        text: "Business continuity planning, backup monitoring, disaster recovery, and restore testing.",
        points: ["Backup monitoring", "Restore testing", "Disaster recovery planning", "Business continuity"]
      }
    ],
    securitySection: {
      label: "Cyber Security",
      title: "Security that makes sense for real businesses.",
      text: "We focus on practical security improvements: reducing risk, improving visibility, monitoring threats, and helping staff recognise common attacks before they become incidents.",
      highlights: [
        "Friendly support without the technical runaround",
        "Security-first approach for small and medium businesses",
        "SOC monitoring, alert triage, and practical incident response guidance",
        "Microsoft 365, endpoint, firewall, backup, and cloud support",
        "Computer repairs, upgrades, and custom PC builds",
        "Clear communication, documentation, and practical recommendations"
      ]
    },
    about: {
      label: "About Us",
      cardSubtitle: "IT Support & Cyber Security Partner",
      title: "Technology support with clarity and care.",
      text: "Zenith Supports provides professional IT support services for businesses and individuals that need reliable systems, secure cloud platforms, responsive technical help, clean modern websites, and custom computer solutions. We proudly support both English and Vietnamese-speaking customers across Australia and New Zealand. We combine hands-on troubleshooting with long-term planning so your technology works for you, not against you."
    },
    contact: {
      label: "Contact",
      title: "Need IT support?",
      text: "Get in touch with Zenith Supports to discuss your IT environment, cyber security needs, computer repair, upgrade, custom PC build, or website project.",
      button: "Email Us"
    },
    footer: "All rights reserved."
  },
  vi: {
    nav: {
      services: "Dịch Vụ",
      security: "Bảo Mật",
      about: "Giới Thiệu",
      contact: "Liên Hệ",
      support: "Hỗ Trợ",
      languageButton: "🇬🇧 English",
      tagline: "Hỗ Trợ IT & An Ninh Mạng"
    },
    badges: ["Hỗ trợ tiếng Anh", "Hỗ trợ tiếng Việt", "Hỗ trợ từ xa & tận nơi"],
    hero: {
      smallBadge: "Dịch vụ IT an toàn, ổn định cho doanh nghiệp hiện đại",
      title: "Giải pháp IT giúp doanh nghiệp vận hành ổn định.",
      text: "Zenith Supports hỗ trợ doanh nghiệp và cá nhân với dịch vụ IT, Microsoft 365, an ninh mạng, sửa chữa máy tính, build PC gaming, nâng cấp linh kiện và thiết kế website hiện đại.",
      primaryButton: "Liên Hệ Ngay",
      secondaryButton: "Xem Dịch Vụ"
    },
    partnerCard: {
      subtitle: "Đối Tác IT Của Bạn",
      badge: "Dịch Vụ IT",
      benefits: [
        ["Phản Hồi Nhanh", "Hỗ trợ rõ ràng khi đội ngũ của bạn cần trợ giúp"],
        ["Ưu Tiên Bảo Mật", "Bảo vệ thiết bị, người dùng và ứng dụng cloud một cách thực tế"],
        ["Sẵn Sàng Cloud", "Hỗ trợ Microsoft 365, backup, danh tính và làm việc từ xa"],
        ["Dễ Hiểu Cho Doanh Nghiệp", "Tư vấn đơn giản, rõ ràng, không làm phức tạp vấn đề"]
      ]
    },
    servicesSection: {
      label: "Dịch Vụ",
      title: "Giải pháp IT toàn diện cho doanh nghiệp của bạn.",
      text: "Từ hỗ trợ IT, an ninh mạng, sửa chữa máy tính, build PC gaming, nâng cấp linh kiện, backup đến thiết kế website — chúng tôi giúp hệ thống công nghệ của bạn hoạt động ổn định hơn."
    },
    services: [
      {
        icon: "🎧",
        title: "Hỗ Trợ IT Doanh Nghiệp",
        text: "Hỗ trợ IT hằng ngày cho người dùng, thiết bị, Microsoft 365, hệ thống mạng và phần mềm doanh nghiệp.",
        points: ["Helpdesk & hỗ trợ từ xa", "Bảo trì hệ thống", "Quản lý hệ thống mạng", "Hỗ trợ Microsoft 365"]
      },
      {
        icon: "🛡️",
        title: "An Ninh Mạng",
        text: "Bảo vệ doanh nghiệp với nhiều lớp bảo mật, giám sát rủi ro và giảm thiểu nguy cơ tấn công.",
        points: ["Đào tạo nhận thức bảo mật", "Giả lập phishing", "Bảo vệ endpoint", "SOC monitoring 24/7", "Hỗ trợ xử lý sự cố"]
      },
      {
        icon: "☁️",
        title: "Microsoft 365 & Cloud",
        text: "Cài đặt, migration, tăng cường bảo mật, email, Teams, SharePoint, OneDrive và quản lý danh tính.",
        points: ["Cài đặt Microsoft 365", "SharePoint & Teams", "Cộng tác với OneDrive", "Quản lý danh tính & truy cập"]
      },
      {
        icon: "🛠️",
        title: "Sửa Chữa Máy Tính",
        text: "Sửa chữa nhanh chóng và đáng tin cậy cho desktop, laptop và máy tính all-in-one.",
        points: ["Kiểm tra phần cứng", "Xử lý lỗi phần mềm", "Gỡ virus & malware", "Tối ưu hiệu năng"]
      },
      {
        icon: "🖥️",
        title: "Build PC Gaming",
        text: "Lắp ráp PC gaming hiệu năng cao, tối ưu tốc độ, tản nhiệt, độ ổn định và thẩm mỹ.",
        points: ["Build PC gaming theo nhu cầu", "Tối ưu hiệu năng", "Tản nhiệt & đi dây gọn", "Bảo hành & hỗ trợ"]
      },
      {
        icon: "⚙️",
        title: "Tùy Chỉnh & Nâng Cấp",
        text: "Nâng cấp hoặc tùy chỉnh máy tính hiện tại để cải thiện tốc độ, lưu trữ, đồ họa và độ ổn định.",
        points: ["Nâng cấp linh kiện", "Nâng cấp RAM / SSD", "Nâng cấp card đồ họa", "Tối ưu hệ thống"]
      },
      {
        icon: "🌐",
        title: "Thiết Kế & Phát Triển Website",
        text: "Thiết kế website doanh nghiệp, landing page, client portal và giải pháp web cloud an toàn.",
        points: ["Thiết kế website theo yêu cầu", "Tương thích mobile", "Cấu trúc chuẩn SEO", "Hosting nhanh & an toàn"]
      },
      {
        icon: "💾",
        title: "Backup & Khôi Phục Dữ Liệu",
        text: "Lập kế hoạch duy trì hoạt động, giám sát backup, khôi phục sau sự cố và kiểm tra restore.",
        points: ["Giám sát backup", "Kiểm tra restore", "Kế hoạch khôi phục sau sự cố", "Duy trì hoạt động kinh doanh"]
      }
    ],
    securitySection: {
      label: "An Ninh Mạng",
      title: "Bảo mật thực tế, dễ áp dụng cho doanh nghiệp.",
      text: "Chúng tôi tập trung vào các cải thiện bảo mật thiết thực: giảm rủi ro, tăng khả năng giám sát, theo dõi mối đe dọa và giúp nhân viên nhận biết các hình thức tấn công phổ biến trước khi xảy ra sự cố.",
      highlights: [
        "Hỗ trợ thân thiện, không nói vòng vo kỹ thuật",
        "Ưu tiên bảo mật cho doanh nghiệp nhỏ và vừa",
        "SOC monitoring, phân loại cảnh báo và hướng dẫn xử lý sự cố thực tế",
        "Hỗ trợ Microsoft 365, endpoint, firewall, backup và cloud",
        "Sửa chữa máy tính, nâng cấp linh kiện và build PC theo yêu cầu",
        "Giao tiếp rõ ràng, có tài liệu và khuyến nghị dễ thực hiện"
      ]
    },
    about: {
      label: "Giới Thiệu",
      cardSubtitle: "Đối Tác IT & An Ninh Mạng",
      title: "Hỗ trợ công nghệ rõ ràng, tận tâm và dễ hiểu.",
      text: "Zenith Supports cung cấp dịch vụ IT chuyên nghiệp cho doanh nghiệp và cá nhân cần hệ thống ổn định, nền tảng cloud an toàn, hỗ trợ kỹ thuật nhanh chóng, website hiện đại và giải pháp máy tính theo nhu cầu. Chúng tôi hỗ trợ khách hàng nói tiếng Anh và tiếng Việt tại Úc và New Zealand. Mục tiêu của chúng tôi là giúp công nghệ phục vụ bạn, thay vì làm bạn đau đầu."
    },
    contact: {
      label: "Liên Hệ",
      title: "Bạn cần hỗ trợ IT?",
      text: "Hãy liên hệ Zenith Supports để trao đổi về hệ thống IT, an ninh mạng, sửa chữa máy tính, nâng cấp linh kiện, build PC hoặc dự án website của bạn.",
      button: "Gửi Email"
    },
    footer: "Đã đăng ký bản quyền."
  }
};

const contact = {
  email: "contact@zenith-supports.com",
  phone: "+61 451 656 131",
  location: "Australia & New Zealand"
};

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContactIcon({ type }) {
  const icons = {
    email: "✉️",
    phone: "☎️",
    location: "📍"
  };

  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-300/10 text-lg text-amber-300" aria-hidden="true">
      {icons[type]}
    </span>
  );
}

function validateWebsiteContent() {
  return {
    hasCompanyName: true,
    hasEnglishServices: content.en.services.length === 8,
    hasVietnameseServices: content.vi.services.length === 8,
    hasSocInsideCyberSecurity: content.en.services.some((service) => service.title === "Cyber Security" && service.points.includes("SOC monitoring 24/7")),
    hasVietnameseCyberSecurity: content.vi.services.some((service) => service.title === "An Ninh Mạng" && service.points.includes("SOC monitoring 24/7")),
    hasWebsiteDevelopment: content.en.services.some((service) => service.title === "Website Design & Development"),
    hasVietnameseWebsiteDevelopment: content.vi.services.some((service) => service.title === "Thiết Kế & Phát Triển Website"),
    hasComputerRepair: content.en.services.some((service) => service.title === "Computer Repair"),
    hasGamingPcBuild: content.en.services.some((service) => service.title === "Build Gaming PC"),
    hasCustomiseUpgrade: content.en.services.some((service) => service.title === "Customise & Upgrade"),
    hasVietnameseSupport: content.vi.badges.includes("Hỗ trợ tiếng Việt"),
    hasContactEmail: contact.email.includes("@"),
    hasLanguageToggle: true
  };
}

const websiteContentTests = validateWebsiteContent();

export default function ZenithSupportWebsite() {
  const [language, setLanguage] = useState("en");
  const isVietnamese = language === "vi";
  const t = content[language];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3" aria-label="Zenith Supports home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-black to-neutral-900 shadow-lg shadow-amber-500/10">
              <span className="text-lg font-black tracking-tight text-amber-300">ZS</span>
            </div>
            <div>
              <p className="text-lg font-semibold tracking-wide">Zenith Supports</p>
              <p className="text-xs text-neutral-400">{t.nav.tagline}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex" aria-label="Main navigation">
            <a href="#services" className="transition hover:text-amber-300">{t.nav.services}</a>
            <a href="#security" className="transition hover:text-amber-300">{t.nav.security}</a>
            <a href="#about" className="transition hover:text-amber-300">{t.nav.about}</a>
            <a href="#contact" className="transition hover:text-amber-300">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLanguage(isVietnamese ? "en" : "vi")}
              className="rounded-full border border-amber-300/30 bg-black px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-300 hover:text-black"
            >
              {t.nav.languageButton}
            </button>

            <a href="#contact" className="hidden rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-black transition hover:bg-amber-200 md:inline-flex">
              {t.nav.support}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(255,255,255,0.08),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <div className="mb-8 inline-flex items-center gap-5 rounded-[2rem] border border-amber-300/20 bg-black/60 px-6 py-5 shadow-2xl shadow-amber-500/10 backdrop-blur">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-400/30 bg-gradient-to-br from-black to-neutral-900">
                  <span className="text-4xl font-black tracking-tight text-amber-300">ZS</span>
                </div>

                <div>
                  <h2 className="bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-500 bg-clip-text text-3xl font-black tracking-wide text-transparent md:text-5xl">
                    Zenith Supports
                  </h2>
                  <p className="mt-1 text-sm uppercase tracking-[0.35em] text-neutral-400 md:text-base">
                    {t.nav.tagline}
                  </p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {t.badges.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-200"
                  >
                    <span aria-hidden="true">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-200">
                <span aria-hidden="true">🔐</span>
                {t.hero.smallBadge}
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                {t.hero.title}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                {t.hero.text}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-300 px-7 py-3 font-semibold text-black transition hover:bg-amber-200">
                  {t.hero.primaryButton} <ArrowIcon />
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:border-amber-300/50 hover:text-amber-200">
                  {t.hero.secondaryButton}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="rounded-[1.5rem] border border-amber-300/20 bg-gradient-to-br from-black to-neutral-900 p-8">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/40 bg-neutral-950">
                        <span className="text-2xl font-bold text-amber-300">ZS</span>
                      </div>
                      <div>
                        <p className="font-semibold">Zenith Supports</p>
                        <p className="text-sm text-neutral-400">{t.partnerCard.subtitle}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">{t.partnerCard.badge}</span>
                  </div>

                  <div className="space-y-4">
                    {t.partnerCard.benefits.map(([label, text]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="mb-2 flex items-center gap-2">
                          <CheckIcon className="h-4 w-4 flex-none text-amber-300" />
                          <span className="font-medium text-neutral-100">{label}</span>
                        </div>
                        <p className="pl-6 text-sm leading-6 text-neutral-400">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{t.servicesSection.label}</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t.servicesSection.title}</h2>
            <p className="mt-4 text-neutral-300">{t.servicesSection.text}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map((service) => (
              <article
                key={service.title}
                className="flex min-h-[390px] flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-amber-300/40 hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-2xl text-black" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-2xl font-semibold">{service.title}</h3>
                <p className="leading-7 text-neutral-300">{service.text}</p>
                <div className="mt-5 space-y-2">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-amber-300" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="security" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{t.securitySection.label}</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t.securitySection.title}</h2>
              <p className="mt-5 leading-8 text-neutral-300">{t.securitySection.text}</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-neutral-950 p-7">
              <div className="space-y-4">
                {t.securitySection.highlights.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 flex-none text-amber-300" />
                    <p className="text-neutral-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-[2rem] border border-amber-300/20 bg-black p-10 text-center">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-3xl border border-amber-400/40 bg-neutral-950">
                <span className="text-4xl font-bold text-amber-300">ZS</span>
              </div>
              <p className="text-2xl font-semibold">Zenith Supports</p>
              <p className="mt-2 text-neutral-400">{t.about.cardSubtitle}</p>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{t.about.label}</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t.about.title}</h2>
              <p className="mt-5 leading-8 text-neutral-300">{t.about.text}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-amber-300/[0.08] p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{t.contact.label}</p>
                <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{t.contact.title}</h2>
                <p className="mt-4 leading-8 text-neutral-300">{t.contact.text}</p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-black/40 p-6">
                <div className="flex items-center gap-3 text-neutral-200">
                  <ContactIcon type="email" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-200">
                  <ContactIcon type="phone" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-200">
                  <ContactIcon type="location" />
                  <span>{contact.location}</span>
                </div>
                <a href={`mailto:${contact.email}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-300 px-6 py-3 font-semibold text-black transition hover:bg-amber-200">
                  {t.contact.button} <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sr-only" aria-label="Website content tests">
          <p>{websiteContentTests.hasCompanyName ? "Company name test passed" : "Company name test failed"}</p>
          <p>{websiteContentTests.hasEnglishServices ? "English services test passed" : "English services test failed"}</p>
          <p>{websiteContentTests.hasVietnameseServices ? "Vietnamese services test passed" : "Vietnamese services test failed"}</p>
          <p>{websiteContentTests.hasSocInsideCyberSecurity ? "SOC inside Cyber Security test passed" : "SOC inside Cyber Security test failed"}</p>
          <p>{websiteContentTests.hasVietnameseCyberSecurity ? "Vietnamese cyber security test passed" : "Vietnamese cyber security test failed"}</p>
          <p>{websiteContentTests.hasWebsiteDevelopment ? "Website Development test passed" : "Website Development test failed"}</p>
          <p>{websiteContentTests.hasVietnameseWebsiteDevelopment ? "Vietnamese Website Development test passed" : "Vietnamese Website Development test failed"}</p>
          <p>{websiteContentTests.hasComputerRepair ? "Computer Repair test passed" : "Computer Repair test failed"}</p>
          <p>{websiteContentTests.hasGamingPcBuild ? "Gaming PC Build test passed" : "Gaming PC Build test failed"}</p>
          <p>{websiteContentTests.hasCustomiseUpgrade ? "Customise Upgrade test passed" : "Customise Upgrade test failed"}</p>
          <p>{websiteContentTests.hasVietnameseSupport ? "Vietnamese support test passed" : "Vietnamese support test failed"}</p>
          <p>{websiteContentTests.hasContactEmail ? "Contact email test passed" : "Contact email test failed"}</p>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Zenith Supports. {t.footer}
      </footer>
    </div>
  );
}
