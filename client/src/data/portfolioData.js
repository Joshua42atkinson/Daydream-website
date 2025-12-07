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
      "title": "Professional Foundations in LDT",
      "description": "Core competencies in instructional design research, theory, communication, and ethics."
    },
    {
      "id": "planning",
      "title": "Planning and Analysis",
      "description": "Competencies in analyzing learning needs, technologies, and target populations."
    },
    {
      "id": "design",
      "title": "Design and Development",
      "description": "Competencies in creating engaging, systematic, and effective learning experiences."
    },
    {
      "id": "evaluation",
      "title": "Evaluation and Implementation",
      "description": "Competencies in assessing learning outcomes and implementing sustainable solutions."
    }
  ],
  "badges": [
    ...foundationsBadges,
    ...planningBadges,
    ...designBadges,
    ...evaluationBadges
  ]
};