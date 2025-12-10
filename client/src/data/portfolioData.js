import { foundationsBadges } from './badges/foundations';
import { planningBadges } from './badges/planning';
import { designBadges } from './badges/design';
import { evaluationBadges } from './badges/evaluation';

export const portfolioData = {
  "owner": "Joshua Atkinson",
  "title": "LDT Competency Portfolio",
  "categories": [
    {
      "id": "foundations",
      "title": "Professional Foundations",
      "description": "System Core & Protocols. The underlying kernel of professional identity—ethics, communication standards, and theoretical frameworks—that governs all subsequent operations."
    },
    {
      "id": "planning",
      "title": "Planning & Analysis",
      "description": "Reconnaissance & Diagnostics. The forensic phase of design, utilizing data telemetry and environmental scans to define the precise 'Mission Parameters' before a single line of code is written."
    },
    {
      "id": "design",
      "title": "Design & Development",
      "description": "Architecture & Engineering. The constructive phase where abstract learning theories are compiled into concrete, executable learning environments and assets."
    },
    {
      "id": "evaluation",
      "title": "Evaluation & Implementation",
      "description": "Quality Assurance & Deployment. The rigorous stress-testing of interventions against reality, ensuring sustainable adoption and measuring 'Signal Fidelity' (learning transfer)."
    }
  ],
  "badges": [
    ...foundationsBadges,
    ...planningBadges,
    ...designBadges,
    ...evaluationBadges
  ]
};