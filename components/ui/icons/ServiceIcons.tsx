import React from 'react';

interface IconProps {
  className?: string;
}

/* Automation Workflow */
export const AutomationWorkflowIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="9" width="4" height="6" rx="1"/>
    <rect x="10" y="9" width="4" height="6" rx="1"/>
    <rect x="17" y="9" width="4" height="6" rx="1"/>
    <path d="M7 12 L10 12 M14 12 L17 12"/>
    <path d="M12 7 L12 8 M12 16 L12 17 M9.5 9.5 L10 10 M14 14 L14.5 14.5"/>
  </svg>
);

/* Custom AI Agent */
export const CustomAIAgentIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="7" r="1.5"/>
    <circle cx="8" cy="14" r="1.5"/>
    <circle cx="16" cy="14" r="1.5"/>
    <circle cx="12" cy="18" r="1.5"/>
    <path d="M12 8.5 L8 12.5 M12 8.5 L16 12.5 M8 15.5 L12 16.5 M16 15.5 L12 16.5"/>
    <path d="M18 5 L18.5 5.5 L19 5 L19.5 5.5 L19 6 L19.5 6.5 L19 7 L18.5 6.5 L18 7 L17.5 6.5 L18 6 L17.5 5.5 Z"/>
  </svg>
);

/* Blockchain & Smart Contract */
export const BlockchainSmartContractIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 10 L9 8 L9 12 L6 14 Z M9 8 L12 10 L12 14 L9 12 Z"/>
    <path d="M12 10 L15 8 L15 12 L12 14 Z M15 8 L18 10 L18 14 L15 12 Z"/>
    <path d="M9 12 L12 14 M15 12 L12 14"/>
  </svg>
);

/* Application Development (Web3.0/AI) */
export const ApplicationDevelopmentIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="5" width="16" height="14" rx="2"/>
    <circle cx="7" cy="8" r="0.5" fill="currentColor"/>
    <circle cx="9" cy="8" r="0.5" fill="currentColor"/>
    <circle cx="11" cy="8" r="0.5" fill="currentColor"/>
    <path d="M7 12 L17 12 M7 14.5 L17 14.5 M7 17 L14 17"/>
  </svg>
);

/* ── New Service Icons (content repositioning) ── */

/* AI Workflow: gear with connected nodes/circuit pattern */
export const AIWorkflowIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    <circle cx="5" cy="5" r="1.2"/>
    <circle cx="19" cy="5" r="1.2"/>
    <circle cx="19" cy="19" r="1.2"/>
    <path d="M5.8 5.8L8.5 8.5M15.5 8.5l3.2-3.2M15.5 15.5l3.2 3.2"/>
  </svg>
);

/* AI Product: cube/box with AI sparkle */
export const AIProductIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
    <path d="M18 2l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"/>
  </svg>
);

/* AI Dev: code brackets with pipeline/flow arrows */
export const AIDevIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="8 6 3 12 8 18"/>
    <polyline points="16 6 21 12 16 18"/>
    <line x1="12" y1="2" x2="12" y2="6"/>
    <line x1="12" y1="18" x2="12" y2="22"/>
    <polygon points="12 6 14 8 12 10 10 8" fill="currentColor" stroke="none"/>
    <polygon points="12 14 14 16 12 18 10 16" fill="currentColor" stroke="none"/>
    <line x1="12" y1="10" x2="12" y2="14"/>
  </svg>
);

/* Legacy aliases for backward compatibility */
export const AIAgentIcon = CustomAIAgentIcon;
export const SmartContractIcon = BlockchainSmartContractIcon;
export const BlockchainDevelopmentIcon = BlockchainSmartContractIcon;
export const AIApplicationsIcon = ApplicationDevelopmentIcon;
