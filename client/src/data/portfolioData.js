export const portfolioData = {
    "owner": "Joshua Atkinson",
    "title": "LTD Competency Portfolio",
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
        // --- SUPRA-BADGE: PROFESSIONAL FOUNDATIONS ---
        {
            "id": "id_research_theory",
            "categoryId": "foundations",
            "title": "Applying ID Research and Theory",
            "image": "/assets/badges/research_theory.png",
            "artifacts": [
                {
                    "title": "Cognitive Logistics & The Railway Metaphor",
                    "origin": "Original theoretical framework developed for the 'Ask Pete' Capstone Project.",
                    "summary": "This white paper introduces 'Cognitive Logistics,' a novel instructional strategy that translates the abstract principles of Cognitive Load Theory (CLT) into a concrete physics simulation. Intrinsic Load is modeled as 'Cargo Weight', Extraneous Load as 'Friction', and Germane Load as 'Combustion'.",
                    "reflection": {
                        "challenge": "Explain key concepts and principles related to instructional design.",
                        "content": "By mapping Sweller’s CLT to a physics simulation, I demonstrated that instructional design theories are not just guidelines but governed by immutable laws. If the 'Cargo' (content) exceeds the 'Engine' (capacity), the learner will stall.",
                        "competency_alignment": "This aligns with my prior experience in game design, moving from designing for 'fun' to designing for 'flow'. I learned that engagement is the mathematical result of balancing Intrinsic Load against Working Memory capacity."
                    },
                    "file_path": "/assets/docs/Ask_Pete_White_Paper.docx"
                }
            ]
        },
        {
            "id": "id_communicator",
            "categoryId": "foundations",
            "title": "ID Professional Communicator",
            "image": "/assets/badges/communicator.png",
            "artifacts": [
                {
                    "title": "The 'Narrative Pitch' (Video/Script)",
                    "origin": "Professional Work Artifact created for the 'Ask Pete' institutional proposal.",
                    "summary": "This video presentation was designed to 'sell' the pedagogical value of the 'Virtuous Cycle' to university stakeholders. The script utilizes the metaphor of a 'mechanical engine' to explain the abstract psychological concept of Motivation to non-experts.",
                    "reflection": {
                        "challenge": "Solicit, accept, and provide constructive feedback; Write clear messages for diverse audiences.",
                        "content": "The evolution of this script demonstrates the ability to tailor communication. By stripping away jargon and using the 'Engine' metaphor, I ensured that stakeholders from Engineering and Education could both understand the core value proposition.",
                        "competency_alignment": "I had to learn to accept feedback from LDT faculty regarding the 'Edutainment Gap' and rewrite the pitch to prioritize pedagogical efficacy over entertainment value."
                    },
                    "file_path": "https://youtu.be/dYxmWd50xgs" // Linked to your tutorial video as a placeholder/proxy
                }
            ]
        },
        {
            "id": "id_tech_skills",
            "categoryId": "foundations",
            "title": "ID Knowledge, Skills, and Attitudes",
            "image": "/assets/badges/tech_skills.png", // Ensure you have an image or the fallback will show
            "artifacts": [
                {
                    "title": "Tech Badge: Presentation Tools (The Daydream Suite)",
                    "origin": "LDT Technology Badge Challenge: Presentation Tools",
                    "summary": "A comprehensive suite of presentation artifacts defining the Daydream Initiative. Includes: 1) A Performance Psychology Design Document, 2) A narrated Google Slides presentation on the 'Edutainment Gap', 3) A Powtoon animated video demonstrating 'AI as a Mirror', and 4) A pedagogical infographic.",
                    "reflection": {
                        "challenge": "Highlight key information in an animated manner while balancing pedagogical nuance with visual simplicity.",
                        "content": "For the animated component, I used Powtoon to translate abstract concepts into tangible metaphors. I represented the 'student' as an avatar ('Alex') and the complex 'Socratic AI' as a non-threatening 'Guide' (orb of light). This visual metaphor inherently demonstrated the concept of psychological safety.",
                        "competency_alignment": "This process highlighted the distinction between the 'Know' (Slide Decks) and 'Feel' (Animation) domains. I learned to use multimedia learning principles, such as temporal contiguity, to make academic terms 'pop' in sync with narration."
                    },
                    "file_path": "https://drive.google.com/open?id=1LVcaSAOLl9gjW-SBYylzkXO0WsvU1t5DNjlU3CQxMOE"
                },
                {
                    "title": "Tech Badge: Research Tools (The Weigh Station)",
                    "origin": "LDT Technology Badge Challenge: Research Tools",
                    "summary": "The 'Weigh Station' is a custom research instrument that uses Natural Language Processing (NLP) to analyze the intrinsic load of instructional content in real-time. It visualizes curriculum connections using topological graphs, transforming research from a passive activity to a systemic process.",
                    "reflection": {
                        "challenge": "Acquire research tools to analyze information systematically.",
                        "content": "I moved beyond standard citation managers to build a tool that actively analyzes content weight. This required acquiring skills in Graph Theory and NLP.",
                        "competency_alignment": "This aligns with the 'Analyze Technologies' competency, proving that research tools can be engineered to support specific cognitive load theories."
                    },
                    "file_path": "https://github.com/joshua42atkinson/daydream_website/"
                },
                {
                    "title": "Tech Badge: Basic Course Tools (The Field Manual)",
                    "origin": "LDT Technology Badge Challenge: Basic Tools",
                    "summary": "A comprehensive user guide written in Markdown, accompanied by a Git Log documenting the 'Phoenix Project' migration. This demonstrates the use of Version Control (Git) and Documentation-as-Code standards to manage complex instructional development.",
                    "reflection": {
                        "challenge": "Acquire and apply basic technology skills (Version Control).",
                        "content": "This project forced me to align with professional software engineering standards. I transitioned from file naming conventions (v1, v2) to strict Git version control.",
                        "competency_alignment": "In modern ID work, 'Content as Code' is the standard. This artifact demonstrates the ability to manage instructional blueprints with the same rigor as software code."
                    },
                    "file_path": "https://github.com/joshua42atkinson/daydream_website/"
                }
            ]
        },
        {
            "id": "ethics_legal",
            "categoryId": "foundations",
            "title": "Ethical, Legal, and Political Implications",
            "image": "/assets/badges/ethics.png",
            "artifacts": [
                {
                    "title": "The 'Privacy Moat' & Apache Prime Directive",
                    "origin": "Institutional Compliance Document prepared for the Purdue Research Foundation.",
                    "summary": "The 'Privacy Moat' details the 'Hybrid Sovereign Architecture' which processes student data locally to ensure FERPA compliance. It includes the 'Apache Prime Directive' to prevent vendor lock-in.",
                    "reflection": {
                        "challenge": "Recognize, respect, and comply with organizational constraints (FERPA).",
                        "content": "By designing for Local-First storage, I created a system that respects student agency by default. This artifact proves that ethical considerations can be baked into the code itself, rather than just written in a policy document.",
                        "competency_alignment": "I realized that to truly respect the learner, I had to architect a system where their thoughts remained their property, countering the trend of 'Surveillance Capitalism' in EdTech."
                    },
                    "file_path": "/assets/docs/Master_Design_Document.docx" // Using repo as evidence of code compliance
                }
            ]
        },
        // --- SUPRA-BADGE: PLANNING AND ANALYSIS ---
        {
            "id": "gap_analysis",
            "categoryId": "planning",
            "title": "Gap Analysis",
            "image": "/assets/badges/gap_analysis.png",
            "artifacts": [
                {
                    "title": "The 'Edutainment Gap' White Paper",
                    "origin": "Independent Research Paper conducted for the 'Ask Pete' strategic planning phase.",
                    "summary": "This analysis identifies a 'Market Failure' between High-Engagement/Low-Rigor products (Video Games) and High-Rigor/Low-Engagement products (LMS). It identifies the 'ID Tool Gap' as the root cause.",
                    "reflection": {
                        "challenge": "Conducting a gap analysis.",
                        "content": "The paper concludes that we don't need better games; we need better authoring tools for educators. The analysis aligned with the systemic view that the tools available to designers define the products they create.",
                        "competency_alignment": "My prior experience led me to believe the gap was simply 'boring content.' This analysis deepened that understanding to focus on structural and tool-based gaps."
                    },
                    "file_path": "/assets/docs/Edutainment_Gap_White_Paper.docx"
                }
            ]
        },
        {
            "id": "target_pop",
            "categoryId": "planning",
            "title": "Target Population and Environment",
            "image": "/assets/badges/target_pop.png",
            "artifacts": [
                {
                    "title": "Learner & User Persona Analysis",
                    "origin": "Design Document created for the 'Ask Pete' system architecture.",
                    "summary": "This analysis profiles three personas: The Adolescent Learner (high social anxiety), the Instructional Designer (pedagogical expert, coding novice), and the Mentor (variable empathy).",
                    "reflection": {
                        "challenge": "Determine characteristics of a target population and/or environment.",
                        "content": "This finding directly influenced the decision to build the 'Privacy Moat,' creating a high-trust environment where students feel safe to fail. I recognized the specific constraint of 'Social-Emotional Anxiety' in the target demographic.",
                        "competency_alignment": "I previously designed for a 'generic user.' This competency required me to recognize specific emotional and environmental constraints."
                    },
                    "file_path": "/assets/docs/Master_Bible.docx"
                }
            ]
        },
        {
            "id": "analyze_tech",
            "categoryId": "planning",
            "title": "Analyze Technologies",
            "image": "/assets/badges/analyze_tech.png",
            "artifacts": [
                {
                    "title": "The 'Rust-Powered' Stack & Trinity Architecture",
                    "origin": "Technical Specification Document for the 'Trinity Server'.",
                    "summary": "This analysis justifies the rejection of the standard MERN stack in favor of a Rust stack (Axum, Bevy, Leptos) to ensure 'Systems Isomorphism' (Memory Safety = Psychological Safety).",
                    "reflection": {
                        "challenge": "Analyze the characteristics of existing and emerging technologies.",
                        "content": "The decision to use Rust was not technical vanity; it was an instructional decision to ensure the tool is as reliable as the theory it is built upon. I analyzed the benefits of low-level systems programming to solve specific educational problems like privacy and latency.",
                        "competency_alignment": "This competency forced me to move beyond basic web scripting and evaluate emerging technologies (WebGPU, WASM) against pedagogical requirements."
                    },
                    "file_path": "/assets/docs/Trinity_Server_Structure.docx"
                }
            ]
        },
        // --- SUPRA-BADGE: DESIGN AND DEVELOPMENT ---
        {
            "id": "id_process",
            "categoryId": "design",
            "title": "Instructional Design and Development Process",
            "image": "/assets/badges/id_process.png",
            "artifacts": [
                {
                    "title": "The 'Phoenix Project' Roadmap",
                    "origin": "Project Management documentation for the 'Ask Pete' development cycle.",
                    "summary": "This artifact outlines the 'Cascading Remediation' workflow, an agile process modified to include an 'Automated Coding Agent' (Jules) to bridge the gap between pedagogical blueprints and code.",
                    "reflection": {
                        "challenge": "Select or create an instructional design process.",
                        "content": "This demonstrates the adaptation of standard ID processes to accommodate modern AI-assisted workflows. It treats the 'Design' phase as a 'Blueprint' that an AI agent helps construct.",
                        "competency_alignment": "Traditional ADDIE models felt too linear for software development. This process aligns with my experience in agile development but adapts it for ID."
                    },
                    "file_path": "/assets/docs/Trinity_Server_Structure.docx"
                }
            ]
        },
        {
            "id": "systematic_design",
            "categoryId": "design",
            "title": "Systematic Design",
            "image": "/assets/badges/systematic_design.png",
            "artifacts": [
                {
                    "title": "Vocabulary-as-a-Mechanic (VaaM)",
                    "origin": "Game Design Document for the 'Ask Pete' Engine.",
                    "summary": "This strategy treats vocabulary words as functional 'keys' within the game. Students must 'equip' a word (e.g., 'Ephemeral') and apply it to a context to unlock a door. This operationalizes Situated Cognition.",
                    "reflection": {
                        "challenge": "Identify instructional strategies.",
                        "content": "By making words 'tools' rather than 'answers,' the strategy forces deep processing and application. This aligns with the theory of Situated Cognition—that knowledge is inseparable from the context in which it is used.",
                        "competency_alignment": "I previously used flashcards for vocabulary (rote memorization). This strategy represents a systematic approach to mechanic-based learning."
                    },
                    "file_path": "/assets/docs/Game_Design_Document.docx"
                }
            ]
        },
        {
            "id": "design_interventions",
            "categoryId": "design",
            "title": "Design Instructional Interventions",
            "image": "/assets/badges/interventions.png",
            "artifacts": [
                {
                    "title": "The 'Socratic Guide' & Narrative Structure",
                    "origin": "Scripting and Logic flow for the 'Pete' AI Character.",
                    "summary": "The 'Pete' character acts as a Socratic Guide, programmed to refuse direct answers and instead ask scaffolding questions. This applies ARCS Model principles by maintaining 'Confidence' through scaffolding and 'Attention' through narrative.",
                    "reflection": {
                        "challenge": "Apply appropriate motivational design principles.",
                        "content": "The intervention is designed to frustrate the student just enough to induce deep thinking, without causing them to quit (Derailment).",
                        "competency_alignment": "My prior instinct was to provide help immediately. This competency taught me the value of 'Desirable Difficulty'."
                    },
                    "file_path": "/assets/docs/Game_Design_Document.docx"
                }
            ]
        },
        {
            "id": "develop_materials",
            "categoryId": "design",
            "title": "Develop Instructional Materials",
            "image": "/assets/badges/develop_materials.png",
            "artifacts": [
                {
                    "title": "The 'Node Garden' (Phygital Learning)",
                    "origin": "Mobile Application Prototype for the 'Ask Pete' ecosystem.",
                    "summary": "The 'Node Garden' is a GPS-enabled game board overlaying the Purdue campus. It operationalizes Embodied Cognition by requiring physical movement to generate 'Kinetic Fuel' for the learning engine.",
                    "reflection": {
                        "challenge": "Produce instructional materials in a variety of delivery formats.",
                        "content": "This moves the 'classroom' out of the LMS and into the physical world. It uses GPS telemetry as a learning mechanic.",
                        "competency_alignment": "My experience was limited to screen-based learning. This artifact aligned with the research on Embodied Cognition, proving that physical state affects cognitive readiness."
                    },
                    "file_path": "/assets/docs/Ask_Pete_White_Paper.docx"
                }
            ]
        },
        // --- SUPRA-BADGE: EVALUATION AND IMPLEMENTATION ---
        {
            "id": "evaluate_interventions",
            "categoryId": "evaluation",
            "title": "Evaluate Instructional and Non-Instructional Interventions",
            "image": "/assets/badges/evaluation.png",
            "artifacts": [
                {
                    "title": "The Research Instrument Menu & Weigh Station",
                    "origin": "Research Proposal for the LDT Department.",
                    "summary": "This menu outlines the specific evaluation capabilities of the platform, including Cognitive Load Validation (using 'Safety Lockout' logs) and Generative AI Integrity checks.",
                    "reflection": {
                        "challenge": "Implement formative evaluation plans.",
                        "content": "The 'Weigh Station' changes evaluation from a post-mortem to a live diagnostic process. I learned that a final grade tells you IF they learned, but telemetry tells you HOW they learned.",
                        "competency_alignment": "Previously, evaluation meant 'tests.' This competency aligned with the need for 'Process Data' and live diagnostics."
                    },
                    "file_path": "/assets/docs/Ask_Pete_White_Paper.docx"
                }
            ]
        },
        {
            "id": "dissemination",
            "categoryId": "evaluation",
            "title": "Design a Plan for Dissemination and Diffusion",
            "image": "/assets/badges/dissemination.png",
            "artifacts": [
                {
                    "title": "The Internal Recharge Center Model",
                    "origin": "Business Strategy Document for University Administration.",
                    "summary": "This plan establishes 'Ask Pete' as an Internal Recharge Center, funding the project through a 'Seat Fee' ($5/student) rather than grants. It details the sustainable diffusion of the tool across the university.",
                    "reflection": {
                        "challenge": "Create a plan for the dissemination and/or the diffusion of the interventions.",
                        "content": "A tool is useless if it cannot be paid for. This model ensures the 'Ask Pete' initiative survives beyond the initial research phase, securing its diffusion throughout the university ecosystem.",
                        "competency_alignment": "My prior experience with projects was 'launch and leave.' This competency forced me to consider the 'Institutional Life Cycle' and sustainable economics."
                    },
                    "file_path": "/assets/docs/Organizational_Strategy.docx"
                }
            ]
        }
    ]
};
