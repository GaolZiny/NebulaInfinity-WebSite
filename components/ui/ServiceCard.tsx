import React from 'react';
import Link from 'next/link';
import Card from './Card';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  id: string;
  lang: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  featured?: boolean;
}

export default function ServiceCard({
  id,
  lang,
  title,
  description,
  features,
  icon,
  featured = false
}: ServiceCardProps) {
  return (
    <Link href={`/${lang}/services/${id}`} className={styles.link}>
      <Card 
        hover 
        className={`${styles.card} ${featured ? styles.featured : styles.standard}`}
      >
        {featured && (
          <div className={styles.header}>
            <span className={styles.iconContainer}>{icon}</span>
            <p className={styles.label}>
              {lang === 'ja' ? '注目サービス' : 'Featured service'}
            </p>
          </div>
        )}
        {!featured && <span className={styles.iconContainer}>{icon}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.featureList}>
          {features.map((feature, i) => (
            <li key={i} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>
      </Card>
    </Link>
  );
}
