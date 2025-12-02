export const portfolioData = {
    "owner": "Joshua Atkinson",
    "title": "LTD Competency Portfolio",
    "categories": [
        {
            "id": "foundations",
            "title": "Professional Foundations",
            "description": "Core competencies in instructional design research and theory."
        },
        {
            "id": "planning",
            "title": "Planning and Analysis",
            "description": "Skills in analyzing learning needs and planning instructional interventions."
        },
        {
            "id": "design",
            "title": "Design and Development",
            "description": "Creating engaging and effective learning experiences."
        },
        {
            "id": "evaluation",
            "title": "Evaluation and Implementation",
            "description": "Assessing learning outcomes and implementing solutions."
        }
    ],
    "badges": [
        {
            "id": "id_research_theory",
            "categoryId": "foundations", // MOVED to Foundations per feedback
            "title": "Applying ID Research and Theory",
            "image": "/assets/badges/research_theory.png", // Placeholder
            "artifacts": [
                {
                    "title": "Design Document: Ask Pete",
                    "origin": "Design Document created for EDCI 572", // Added origin per feedback
                    "summary": "This artifact is a comprehensive design document for Ask Pete, a gamified learning platform. It demonstrates the application of constructivist learning theory and narrative psychology to educational design.",
                    "reflection": {
                        "challenge": "This challenge required the application of instructional design theory to a real-world problem.", // Added challenge statement per feedback
                        "content": "In this project, I applied Joseph Campbell's Monomyth as a pedagogical scaffold. This approach aligns with situated learning theory by placing vocabulary acquisition in a narrative context.",
                        "competency_alignment": "This aligns with my prior experience in game design, where narrative is used to drive engagement. However, applying it strictly to learning objectives required a deeper understanding of cognitive load theory." // Added competency alignment per feedback
                    },
                    "file_path": "/artifacts/Daydream_Design_Doc.docx"
                }
            ]
        }
        // More badges will be populated here
    ]
};
