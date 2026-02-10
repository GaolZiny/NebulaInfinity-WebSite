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

/* Legacy aliases for backward compatibility */
export const AIWorkflowIcon = AutomationWorkflowIcon;
export const AIAgentIcon = CustomAIAgentIcon;
export const SmartContractIcon = BlockchainSmartContractIcon;
export const BlockchainDevelopmentIcon = BlockchainSmartContractIcon;
export const AIApplicationsIcon = ApplicationDevelopmentIcon;
