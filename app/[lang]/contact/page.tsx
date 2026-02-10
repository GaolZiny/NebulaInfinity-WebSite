'use client';

import { useState } from 'react';
import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

export default function ContactPage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  const isJa = params.lang === 'ja';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang: params.lang }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{t.contact.eyebrow}</span>
          <h1 className={styles.title}>{t.contact.title}</h1>
          <p className={styles.subtitle}>{t.contact.subtitle}</p>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.content}>
            {/* Left: Form */}
            <div className={styles.formSection}>
              <Card glass>
                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      {t.contact.form.name} <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className={styles.input}
                    />
                  </div>

                  {/* Company */}
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>
                      {t.contact.form.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.contact.form.companyPlaceholder}
                      className={styles.input}
                    />
                  </div>

                  {/* Email + Phone row */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        {t.contact.form.email} <span className={styles.required}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form.emailPlaceholder}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t.contact.form.phonePlaceholder}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className={styles.formGroup}>
                    <label htmlFor="inquiryType" className={styles.label}>
                      {t.contact.form.inquiryType} <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className={styles.select}
                    >
                      <option value="">
                        {isJa ? '選択してください' : 'Please select'}
                      </option>
                      <option value="automationWorkflow">
                        {t.contact.form.inquiryTypes.automationWorkflow}
                      </option>
                      <option value="customAiAgent">
                        {t.contact.form.inquiryTypes.customAiAgent}
                      </option>
                      <option value="blockchainSmartContract">
                        {t.contact.form.inquiryTypes.blockchainSmartContract}
                      </option>
                      <option value="applicationDev">
                        {t.contact.form.inquiryTypes.applicationDev}
                      </option>
                      <option value="other">{t.contact.form.inquiryTypes.other}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      {t.contact.form.message} <span className={styles.required}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.form.messagePlaceholder}
                      className={styles.textarea}
                      rows={6}
                    />
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <div className={styles.successMessage}>
                      <svg className={styles.statusIcon} viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          d="M9 12l2 2 4-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      {t.contact.form.success}
                    </div>
                  )}

                  {status === 'error' && (
                    <div className={styles.errorMessage}>
                      <svg className={styles.statusIcon} viewBox="0 0 24 24" aria-hidden="true">
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 8v4m0 4h.01"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      {t.contact.form.error}
                    </div>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? t.contact.form.submitting : t.contact.form.submit}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Right: Info Cards */}
            <div className={styles.infoSection}>
              {/* Email */}
              <Card hover className={styles.infoCard}>
                <span className={styles.cardIconWrap}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M4.5 7.5h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M4.5 9l7.5 5 7.5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
                <h3 className={styles.infoTitle}>{t.contact.info.email}</h3>
                <a href="mailto:info@nebulainfinity.com" className={styles.infoLink}>
                  info@nebulainfinity.com
                </a>
              </Card>

              {/* Social */}
              <Card hover className={styles.infoCard}>
                <span className={styles.cardIconWrap}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <h3 className={styles.infoTitle}>{t.contact.info.social}</h3>
                <a
                  href="https://twitter.com/N_I_COM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                  </svg>
                  X (Twitter)
                </a>
              </Card>

              {/* Business Hours */}
              <Card hover className={styles.infoCard}>
                <span className={styles.cardIconWrap}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M12 6v6l4 2"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
                <h3 className={styles.infoTitle}>{t.contact.info.hours}</h3>
                <p className={styles.infoValue}>{t.contact.info.hoursValue}</p>
              </Card>

              {/* Response Time */}
              <Card hover className={styles.infoCard}>
                <span className={styles.cardIconWrap}>
                  <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
                <h3 className={styles.infoTitle}>{t.contact.info.response}</h3>
                <p className={styles.infoValue}>{t.contact.info.responseValue}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqHeader}>
            <span className={styles.eyebrow}>FAQ</span>
            <h2 className={styles.sectionTitle}>{t.contact.faq.title}</h2>
            <p className={styles.sectionSubtitle}>{t.contact.faq.subtitle}</p>
          </div>

          <div className={styles.faqGrid}>
            {t.contact.faq.items.map((item, index) => (
              <details key={index} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span className={styles.faqQuestionText}>{item.question}</span>
                  <span className={styles.faqChevron} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
