// Competency mapping for IBSTPI standards
export const competencyDomains = {
    professional: {
        id: "professional",
        title: "Professional Foundations",
        color: "indigo",
        icon: "Users"
    },
    planning: {
        id: "planning",
        title: "Planning & Analysis",
        color: "blue",
        icon: "Search"
    },
    design: {
        id: "design",
        title: "Design & Development",
        color: "purple",
        icon: "Palette"
    },
    evaluation: {
        id: "evaluation",
        title: "Evaluation & Implementation",
        color: "green",
        icon: "CheckCircle"
    },
    research: {
        id: "research",
        title: "Applying ID Research & Theory",
        color: "amber",
        icon: "BookOpen"
    }
};

// Flagship projects with detailed competency mapping
export const flagshipProjects = [
    {
        id: "iron-road",
        title: "The Iron Road",
        subtitle: "Technopedagogical Architecture for Kinetic Learning Ecosystems",
        hook: "Preventing AI privacy violations via local-first architecture while teaching Cognitive Load Theory through railway metaphors",
        role: "Lead Architect & Instructional Designer",
        tools: ["Rust", "WebAssembly", "Local AI", "Bevy ECS"],
        pdfPath: "/assets/docs/The_Iron_Network__A_Codex_for_the_Cognitive_Railway_Ecosystem.pdf",
        competencies: [
            {
                domain: "research",
                description: "Applied Cognitive Load Theory by mapping 'Intrinsic Load' to 'Cargo Mass' and 'Extraneous Load' to 'Track Friction'"
            },
            {
                domain: "planning",
                description: "Conducted gap analysis identifying the 'Planning-Doing Gap' caused by AI hallucination and scope creep"
            },
            {
                domain: "design",
                description: "Created Systems Isomorphism framework treating instructional theories as 'physics of the learner's mind'"
            },
            {
                domain: "professional",
                description: "Demonstrated ethical compliance by implementing Local-First architecture for FERPA/COPPA data sovereignty"
            }
        ],
        highlights: [
            "Local-First AI prevents surveillance capitalism",
            "Rust memory safety mirrors cognitive safety constraints",
            "Railway metaphor creates cultural resonance with engineering students"
        ]
    },
    {
        id: "ask-pete",
        title: "Ask Pete Field Manual",
        subtitle: "Context-Aware Support Tool for Purdue Boilermakers",
        hook: "Cultural engineering that reframes self-help as 'Cognitive Logistics' to match engineering mindset",
        role: "Instructional Designer & Cultural Analyst",
        tools: ["Generative AI", "d20 System", "Jungian Archetypes", "React"],
        pdfPath: "/assets/docs/Short_8k_ask_pete.pdf",
        competencies: [
            {
                domain: "planning",
                description: "Conducted deep cultural analysis using historical events (1894 Heavilon Hall fire, 'One Brick Higher' maxim)"
            },
            {
                domain: "design",
                description: "Modified existing materials (d20 System) through Creative Synthesis, mapping 'Strength' to 'Traction' (Cognitive Load Capacity)"
            },
            {
                domain: "professional",
                description: "Demonstrated learner analysis beyond demographics to include 'Organizational Lore' and 'Narrative Anchors'"
            },
            {
                domain: "research",
                description: "Applied Self-Determination Theory through Persona Engine and narrative scaffolding"
            }
        ],
        highlights: [
            "Forensic historical analysis for narrative resonance",
            "Language reframing for target population",
            "Structural mandates over abstract emotional appeals"
        ]
    }
];

// Supporting artifacts with competency tags
export const supportingArtifacts = [
    {
        id: "email-exchange",
        title: "Email Exchange with Dr. Hanshaw",
        type: "Professional Communication",
        pdfPath: "/assets/docs/Email.pdf",
        competencies: ["professional"],
        description: "Demonstrates 'Scope Governance' through iterative feedback, transforming sprawling proposal into streamlined Executive Summary",
        tags: ["Feedback", "Scope Management", "Professional Development"]
    },
    {
        id: "iron-road-design",
        title: "Iron Road Design Document",
        type: "Design Document",
        pdfPath: "/assets/docs/Iron_Road_Design_Document_Creation.pdf",
        competencies: ["design", "planning"],
        description: "Complete ADDIE-based design documentation with gap analysis, learner analysis, and instructional strategies",
        tags: ["ADDIE", "Systematic Design", "Documentation"]
    },
    {
        id: "storyfied-d20",
        title: "Storyfied D20 Game Design",
        type: "Creative Synthesis",
        pdfPath: "/assets/docs/Storyfied_D20_Game_Design.pdf",
        competencies: ["design", "research"],
        description: "Adaptation of Open Game License mechanics for educational purposes, demonstrating material modification competency",
        tags: ["Game-Based Learning", "Adaptation", "Mechanics"]
    },
    {
        id: "codebase",
        title: "Iron Road Codebase Documentation",
        type: "Technical Specification",
        pdfPath: "/assets/docs/Iron_Road_Ask_Pete__The_Codebase.pdf",
        competencies: ["design", "professional"],
        description: "Technical architecture documentation showing Rust implementation for data sovereignty and cognitive safety",
        tags: ["Architecture", "Privacy", "Technical"]
    },
    {
        id: "blog",
        title: "Development Blog",
        type: "Reflective Practice",
        pdfPath: "/assets/docs/blog.pdf",
        competencies: ["professional"],
        description: "Continuous documentation of design decisions and project evolution, demonstrating reflective practice",
        tags: ["Reflection", "Documentation", "Process"]
    },
    {
        id: "citi-cert",
        title: "CITI Ethics Certification",
        type: "Certification",
        pdfPath: "/assets/docs/citiCompletionCertificate_14060989_67355196.pdf",
        competencies: ["professional"],
        description: "Responsible Conduct of Research training, demonstrating commitment to ethical standards",
        tags: ["Ethics", "Compliance", "Professional Development"]
    }
];
