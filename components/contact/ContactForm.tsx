'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import {
  CONTACT_INQUIRY_TYPES,
  getContactInquiryTypeOptions,
  toLocalizedValidationErrors,
  validateContactFormInput,
  type ContactFormInput,
} from '@/lib/contact';
import styles from '@/styles/marketing.module.css';

interface ContactFormProps {
  lang: 'ja' | 'en';
}

type Status = 'idle' | 'submitting' | 'success' | 'error';
type FieldErrorKey = 'name' | 'email' | 'inquiryType' | 'message' | 'website' | 'form';

const text = {
  ja: {
    themesTitle: 'ご相談テーマ',
    themeHelper: 'どれに近いか分からない場合は「まだ整理中 / Other」を選択してください。',
    formTitle: 'お問い合わせフォーム',
    name: 'お名前',
    namePlaceholder: '山田 太郎',
    company: '会社名',
    companyPlaceholder: '株式会社〇〇',
    email: 'メールアドレス',
    emailPlaceholder: 'example@company.com',
    phone: '電話番号',
    phonePlaceholder: '03-1234-5678',
    inquiryType: 'お問い合わせ種別',
    message: 'ご相談内容',
    messagePlaceholder: '現状の課題、作りたいもの、対象ユーザー、悩んでいる点などを分かる範囲でご記入ください。',
    submit: '送信する',
    submitting: '送信中...',
    selectPlaceholder: '選択してください',
    success: 'お問い合わせありがとうございます。通常 2 営業日以内にご返信します。',
    genericError: '送信に失敗しました。時間をおいて再度お試しいただくか、メールでご連絡ください。',
  },
  en: {
    themesTitle: 'Inquiry themes',
    themeHelper: 'If you are unsure which line fits best, choose “Still defining / Other.”',
    formTitle: 'Inquiry form',
    name: 'Name',
    namePlaceholder: 'Your name',
    company: 'Company',
    companyPlaceholder: 'Your company',
    email: 'Email',
    emailPlaceholder: 'your.email@example.com',
    phone: 'Phone',
    phonePlaceholder: 'Your phone',
    inquiryType: 'Inquiry type',
    message: 'Message',
    messagePlaceholder: 'Share the current challenge, what you want to build, who it is for, and any open questions you have.',
    submit: 'Send inquiry',
    submitting: 'Sending...',
    selectPlaceholder: 'Please select',
    success: 'Thank you for reaching out. We usually reply within 2 business days.',
    genericError: 'We could not send the form. Please try again later or contact us by email.',
  },
} as const;

const initialForm = (lang: 'ja' | 'en'): ContactFormInput => ({
  name: '',
  company: '',
  email: '',
  phone: '',
  inquiryType: '',
  message: '',
  lang,
  website: '',
});

export default function ContactForm({ lang }: ContactFormProps) {
  const t = text[lang];
  const inquiryOptions = useMemo(() => getContactInquiryTypeOptions(lang), [lang]);
  const searchParams = useSearchParams();
  const inquiryFromQuery = searchParams?.get('inquiry') ?? '';
  const [formData, setFormData] = useState<ContactFormInput>(initialForm(lang));
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldErrorKey, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    setFormData(initialForm(lang));
    setFieldErrors({});
    setStatus('idle');
    setStatusMessage('');
  }, [lang]);

  useEffect(() => {
    if (CONTACT_INQUIRY_TYPES.includes(inquiryFromQuery as (typeof CONTACT_INQUIRY_TYPES)[number])) {
      setFormData((current) => ({ ...current, inquiryType: inquiryFromQuery }));
    }
  }, [inquiryFromQuery]);

  const localizedErrors = useMemo(() => toLocalizedValidationErrors(fieldErrors, lang), [fieldErrors, lang]);

  const handleChange = (field: keyof ContactFormInput, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => ({ ...current, [field]: undefined, form: undefined }));
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validation = validateContactFormInput({ ...formData, lang });
    if (!validation.isValid) {
      const localizedValidationErrors = toLocalizedValidationErrors(validation.errors, lang);
      setFieldErrors(validation.errors);
      setStatus('error');
      setStatusMessage(localizedValidationErrors.form ?? t.genericError);
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...validation.normalized, lang }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFieldErrors(result.fieldErrors ?? {});
        setStatus('error');
        setStatusMessage(result.message ?? t.genericError);
        return;
      }

      setStatus('success');
      setStatusMessage(t.success);
      setFieldErrors({});
      setFormData(initialForm(lang));
    } catch {
      setStatus('error');
      setStatusMessage(t.genericError);
    }
  };

  return (
    <div className={styles.formSection}>
      <div className={`${styles.card} ${styles.featuredCard}`}>
        <h2 className={styles.cardTitle}>{t.themesTitle}</h2>
        <div className={styles.grid2}>
          {inquiryOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`${styles.inquiryChip} ${formData.inquiryType === option.value ? styles.inquiryChipActive : ''}`}
              onClick={() => handleChange('inquiryType', option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className={styles.helperText}>{t.themeHelper}</p>
      </div>

      <div className={styles.formCard}>
        <form onSubmit={handleSubmit} className={styles.formFieldset} noValidate>
          <h2 className={styles.formTitle}>{t.formTitle}</h2>

          <div className={styles.hiddenHoneypot} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input id="website" value={formData.website} onChange={(event) => handleChange('website', event.target.value)} />
          </div>

          <div className={styles.inputGrid}>
            <div>
              <label className={styles.label} htmlFor="name">{t.name}<span className={styles.required}>*</span></label>
              <input id="name" className={`${styles.input} ${localizedErrors.name ? styles.inputError : ''}`} value={formData.name} onChange={(event) => handleChange('name', event.target.value)} placeholder={t.namePlaceholder} />
              {localizedErrors.name ? <p className={styles.errorText}>{localizedErrors.name}</p> : null}
            </div>

            <div>
              <label className={styles.label} htmlFor="company">{t.company}</label>
              <input id="company" className={styles.input} value={formData.company} onChange={(event) => handleChange('company', event.target.value)} placeholder={t.companyPlaceholder} />
            </div>

            <div className={styles.twoCol}>
              <div>
                <label className={styles.label} htmlFor="email">{t.email}<span className={styles.required}>*</span></label>
                <input id="email" type="email" className={`${styles.input} ${localizedErrors.email ? styles.inputError : ''}`} value={formData.email} onChange={(event) => handleChange('email', event.target.value)} placeholder={t.emailPlaceholder} />
                {localizedErrors.email ? <p className={styles.errorText}>{localizedErrors.email}</p> : null}
              </div>
              <div>
                <label className={styles.label} htmlFor="phone">{t.phone}</label>
                <input id="phone" className={styles.input} value={formData.phone} onChange={(event) => handleChange('phone', event.target.value)} placeholder={t.phonePlaceholder} />
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="inquiryType">{t.inquiryType}<span className={styles.required}>*</span></label>
              <select id="inquiryType" className={`${styles.select} ${localizedErrors.inquiryType ? styles.selectError : ''}`} value={formData.inquiryType} onChange={(event) => handleChange('inquiryType', event.target.value)}>
                <option value="">{t.selectPlaceholder}</option>
                {inquiryOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              {localizedErrors.inquiryType ? <p className={styles.errorText}>{localizedErrors.inquiryType}</p> : null}
            </div>

            <div>
              <label className={styles.label} htmlFor="message">{t.message}<span className={styles.required}>*</span></label>
              <textarea id="message" className={`${styles.textarea} ${localizedErrors.message ? styles.textareaError : ''}`} value={formData.message} onChange={(event) => handleChange('message', event.target.value)} placeholder={t.messagePlaceholder} />
              {localizedErrors.message ? <p className={styles.errorText}>{localizedErrors.message}</p> : null}
            </div>
          </div>

          {status === 'success' ? <div className={styles.bannerSuccess}>{statusMessage}</div> : null}
          {status === 'error' ? <div className={styles.bannerError}>{statusMessage || t.genericError}</div> : null}

          <div className={styles.formSubmitRow}>
            <Button type="submit" size="lg" fullWidth disabled={status === 'submitting'}>
              {status === 'submitting' ? t.submitting : t.submit}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
