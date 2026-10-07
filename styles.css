:root {
  --bg: #120b15;
  --bg-soft: #191321;
  --panel: rgba(32, 22, 35, 0.88);
  --panel-strong: #1d1625;
  --card: rgba(255, 255, 255, 0.04);
  --muted: #d9cde7;
  --text: #f7f3ff;
  --soft: #bfa9d8;
  --primary: #e9778f;
  --primary-strong: #ff9b70;
  --gold: #f2d58d;
  --green: #76e2b7;
  --shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
  --container: 1180px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(233, 119, 143, 0.18), transparent 18%),
    radial-gradient(circle at bottom right, rgba(255, 155, 112, 0.12), transparent 22%),
    linear-gradient(180deg, #100b12 0%, #17131d 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(var(--container), calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(14px);
  background: rgba(18, 13, 23, 0.78);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 82px;
  gap: 16px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.brand-mark {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  box-shadow: 0 12px 28px rgba(233, 119, 143, 0.38);
  color: white;
  font-size: 1.1rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 0.95rem;
  color: var(--muted);
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover {
  color: white;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  border-radius: 999px;
  border: 1px solid transparent;
  padding: 0 26px;
  font-weight: 700;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  box-shadow: 0 18px 34px rgba(233, 119, 143, 0.26);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.12);
}

.nav-button {
  margin-left: 8px;
}

.menu-toggle {
  display: none;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  margin: 5px auto;
  background: white;
}

.hero {
  position: relative;
  overflow: hidden;
  padding: 80px 0 60px;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(16, 11, 18, 0.83), rgba(16, 11, 18, 0.38)),
    url("https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80") center/cover no-repeat;
  transform: scale(1.06);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 11, 18, 0.04), rgba(16, 11, 18, 0.56));
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;
  min-height: 620px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--soft);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 18px rgba(242, 213, 141, 0.8);
}

.eyebrow.dark {
  background: rgba(233, 119, 143, 0.08);
  border-color: rgba(233, 119, 143, 0.14);
  color: #f7bfd1;
}

.hero-copy h1 {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3.5rem, 7vw, 6.4rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  max-width: 640px;
  margin-top: 20px;
}

.hero-copy p {
  max-width: 610px;
  margin-top: 20px;
  color: rgba(247, 243, 255, 0.8);
  font-size: 1.08rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 42px;
}

.hero-metrics div {
  min-width: 120px;
}

.hero-metrics strong {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: white;
}

.hero-metrics span {
  font-size: 0.88rem;
  color: rgba(247, 243, 255, 0.7);
}

.hero-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 18px;
  padding: 10px 0 30px;
}

.floating-card {
  width: min(100%, 390px);
  padding: 22px 22px 18px;
  border-radius: 26px;
  background: rgba(16, 11, 18, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: var(--shadow);
  backdrop-filter: blur(16px);
}

.card-one {
  transform: translateX(-12px);
}

.card-two {
  transform: translateX(18px);
}

.card-three {
  transform: translateX(-8px);
}

.card-badge {
  display: inline-block;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffe1d5;
  background: rgba(255, 155, 112, 0.12);
  border: 1px solid rgba(255, 155, 112, 0.2);
}

.badge-alt {
  color: #d8ebff;
  background: rgba(108, 162, 255, 0.12);
  border-color: rgba(108, 162, 255, 0.2);
}

.badge-soft {
  color: #d4fce8;
  background: rgba(118, 226, 183, 0.12);
  border-color: rgba(118, 226, 183, 0.2);
}

.floating-card h3 {
  margin-top: 14px;
  font-size: 1.6rem;
}

.floating-card p {
  margin-top: 10px;
  color: rgba(247, 243, 255, 0.74);
}

.partner-strip {
  background: rgba(255, 255, 255, 0.018);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 18px 0;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: rgba(247, 243, 255, 0.7);
}

.section {
  padding: 110px 0;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  margin-bottom: 42px;
}

.section-head.center {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.section-head h2 {
  margin-top: 16px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.3rem, 4vw, 3.8rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.section-head p {
  max-width: 560px;
  color: rgba(247, 243, 255, 0.74);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: center;
}

.about-visual {
  position: relative;
  min-height: 520px;
}

.visual-card {
  position: absolute;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
}

.big-card {
  inset: 0 40px 40px 0;
  background: url("https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80") center/cover no-repeat;
}

.small-card {
  width: 230px;
  height: 230px;
  right: 0;
  bottom: 0;
  background: url("https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.feature-list {
  display: grid;
  gap: 24px;
}

.feature-item {
  display: grid;
  grid-template-columns: 68px 1fr;
  gap: 18px;
  align-items: start;
  padding: 22px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.icon-wrap {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(233, 119, 143, 0.18), rgba(255, 155, 112, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 1.4rem;
}

.feature-item h3 {
  margin-bottom: 8px;
  font-size: 1.38rem;
}

.feature-item p {
  color: rgba(247, 243, 255, 0.72);
}

.alt-bg {
  background: rgba(255, 255, 255, 0.015);
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.event-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.event-card {
  position: relative;
  display: flex;
  align-items: end;
  min-height: 420px;
  border-radius: 26px;
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease;
}

.event-card:hover {
  transform: translateY(-6px);
}

.event-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 11, 18, 0.10), rgba(16, 11, 18, 0.74));
}

.event-one {
  background: url("https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.event-two {
  background: url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.event-three {
  background: url("https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.event-four {
  background: url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80") center/cover no-repeat;
}

.event-inner {
  position: relative;
  z-index: 1;
  padding: 22px;
}

.event-tag {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.event-card h3 {
  margin-top: 16px;
  font-size: 2rem;
}

.event-card p {
  margin-top: 8px;
  color: rgba(247, 243, 255, 0.78);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.step-card {
  padding: 28px 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.step-card span {
  display: inline-flex;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(233, 119, 143, 0.16), rgba(255, 155, 112, 0.12));
  color: var(--gold);
  font-weight: 800;
}

.step-card h3 {
  margin-top: 18px;
  font-size: 1.5rem;
}

.step-card p {
  margin-top: 10px;
  color: rgba(247, 243, 255, 0.72);
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 0.8fr;
  gap: 20px;
}

.gallery-item {
  position: relative;
  min-height: 320px;
  border-radius: 26px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
}

.gallery-item::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(16, 11, 18, 0.08), rgba(16, 11, 18, 0.68));
}

.large-item {
  grid-row: span 2;
  min-height: 500px;
}

.item-one {
  background-image: url("https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1100&q=80");
}

.item-two {
  background-image: url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80");
}

.item-three {
  background-image: url("https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80");
}

.item-four {
  background-image: url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80");
}

.item-five {
  background-image: url("https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80");
}

.gallery-label {
  position: absolute;
  left: 20px;
  bottom: 18px;
  z-index: 1;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.price-card {
  padding: 28px 22px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.price-card.featured {
  background: linear-gradient(180deg, rgba(233, 119, 143, 0.08), rgba(255, 255, 255, 0.04));
  border-color: rgba(233, 119, 143, 0.28);
  transform: scale(1.02);
}

.price-badge {
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f7dd9d;
  background: rgba(242, 213, 141, 0.12);
  border: 1px solid rgba(242, 213, 141, 0.18);
}

.price-card h3 {
  margin-top: 18px;
  font-size: 1.8rem;
}

.price {
  display: flex;
  align-items: end;
  gap: 8px;
  margin: 12px 0 16px;
}

.price strong {
  font-size: 3rem;
  line-height: 0.9;
}

.price span {
  color: rgba(247, 243, 255, 0.7);
}

.price-card ul {
  list-style: none;
  display: grid;
  gap: 12px;
  margin: 20px 0 26px;
  color: rgba(247, 243, 255, 0.74);
}

.price-card li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.price-card li::before {
  content: "•";
  color: var(--primary-strong);
  font-size: 1.5rem;
  line-height: 1;
}

.full-width {
  width: 100%;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.review-card {
  padding: 26px 24px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.stars {
  letter-spacing: 0.2em;
  color: var(--gold);
  font-size: 1.1rem;
}

.review-card p {
  margin-top: 18px;
  color: rgba(247, 243, 255, 0.72);
}

.reviewer {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
}

.avatar {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  font-weight: 800;
  color: white;
}

.reviewer strong {
  display: block;
}

.reviewer span {
  color: rgba(247, 243, 255, 0.7);
  font-size: 0.82rem;
}

.faq-wrap {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 32px;
  align-items: start;
}

.faq-copy h2 {
  margin-top: 14px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 4vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
}

.faq-list {
  display: grid;
  gap: 16px;
}

.faq-list details {
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 0 18px;
}

.faq-list summary {
  list-style: none;
  cursor: pointer;
  padding: 20px 0;
  font-weight: 600;
  position: relative;
}

.faq-list summary::-webkit-details-marker {
  display: none;
}

.faq-list summary::after {
  content: "+";
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  color: var(--gold);
}

.faq-list details[open] summary::after {
  content: "−";
}

.faq-list p {
  padding: 0 0 18px;
  color: rgba(247, 243, 255, 0.72);
}

.contact-box {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
  align-items: center;
  padding: 36px;
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(233, 119, 143, 0.14), rgba(255, 155, 112, 0.1));
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
}

.contact-copy h2 {
  margin-top: 16px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  line-height: 1.08;
  letter-spacing: -0.05em;
}

.contact-copy p {
  margin-top: 16px;
  color: rgba(247, 243, 255, 0.76);
}

.contact-meta {
  display: grid;
  gap: 18px;
  margin-top: 26px;
}

.contact-meta div {
  display: grid;
  gap: 4px;
}

.contact-meta strong {
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--soft);
}

.booking-form {
  display: grid;
  gap: 18px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
  font-size: 0.82rem;
  color: var(--soft);
  letter-spacing: 0.04em;
}

input,
textarea {
  width: 100%;
  padding: 14px 16px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: rgba(247, 243, 255, 0.46);
}

input:focus,
textarea:focus {
  border-color: rgba(255, 155, 112, 0.4);
  box-shadow: 0 0 0 3px rgba(255, 155, 112, 0.12);
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.site-footer {
  padding: 30px 0 50px;
  background: rgba(15, 10, 18, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
}

.footer-brand {
  font-size: 0.78rem;
}

.site-footer p {
  color: rgba(247, 243, 255, 0.68);
}

.socials {
  display: flex;
  gap: 16px;
  color: rgba(247, 243, 255, 0.8);
}

.whatsapp-float {
  position: fixed;
  right: 26px;
  bottom: 26px;
  z-index: 50;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 146px;
  min-height: 54px;
  padding: 0 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, #25d366, #1ebd5b);
  color: white;
  font-weight: 700;
  letter-spacing: 0.02em;
  box-shadow: 0 20px 40px rgba(37, 211, 102, 0.35);
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
.delay-4 { transition-delay: 0.4s; }

@media (max-width: 1024px) {
  .hero-grid,
  .about-grid,
  .faq-wrap,
  .contact-box {
    grid-template-columns: 1fr;
  }

  .event-grid,
  .process-grid,
  .pricing-grid,
  .reviews-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-grid,
  .partner-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .large-item {
    grid-row: auto;
  }
}

@media (max-width: 760px) {
  .menu-toggle {
    display: block;
  }

  .main-nav {
    position: absolute;
    left: 16px;
    right: 16px;
    top: 78px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 18px;
    border-radius: 18px;
    background: rgba(18, 13, 23, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: var(--shadow);
  }

  .main-nav.open {
    display: flex;
  }

  .nav-button {
    display: none;
  }

  .event-grid,
  .process-grid,
  .pricing-grid,
  .reviews-grid,
  .field-row,
  .gallery-grid,
  .partner-grid {
    grid-template-columns: 1fr;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero {
    padding-top: 60px;
  }

  .hero-grid {
    min-height: auto;
  }

  .hero-copy h1 {
    max-width: 100%;
  }

  .floating-card {
    width: 100%;
    transform: none;
  }

  .contact-box {
    padding: 24px 18px;
  }

  .whatsapp-float {
    right: 16px;
    bottom: 16px;
    min-width: 132px;
  }
}
