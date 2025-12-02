import {
    BookOpen,
    Code,
    FileText,
    Layers,
    Layout,
    Lightbulb,
    Map,
    PenTool,
    Target,
    Terminal,
    Video,
    Shield,
    Cpu,
    Zap,
    Users,
    BrainCircuit
} from 'lucide-react';

export const CATEGORIES = ["All", "Major Reports", "Competency Evidence"];

export const ARTIFACTS = [
    // --- MASTER DOCUMENTS (The "Big 5") ---
    {
        id: "master-bible",
        title: "The Master Bible",
        category: "Major Reports",
        type: "major",
        icon: BookOpen,
        summary: "The central nervous system of the Ask Pete project. A comprehensive 50+ page living document detailing the lore, mechanics, technical architecture, and pedagogical philosophy of the Iron Network.",
        reflection: "<p>This document represents the synthesis of the entire Master's journey. It is not just a specification; it is a manifesto. It aligns the 'Heavilon Logic' of resilience with the technical constraints of Rust and WebAssembly, proving that narrative and code can be isomorphic.</p>",
        linkUrl: "https://docs.google.com/document/d/1ojZ6v48rnNLnEHNPOcuiY6vDMabkrg3dop0GyxqEId8/edit?tab=t.0",
        linkText: "Read the Bible"
    },
    {
        id: "engineering-bible",
        title: "Engineering Bible & Decision Log",
        category: "Major Reports",
        type: "major",
        icon: Terminal,
        summary: "A technical chronicle of the 'Hostile MVP' pivot. Documents the shift from Python/LangChain to a local-first Rust/WASM architecture to solve the privacy-latency dilemma.",
        reflection: "<p>Engineering is decision making under constraint. This log captures the 'why' behind every technical choice, specifically the rejection of cloud-based AI in favor of local privacy, even at the cost of development speed.</p>",
        linkUrl: "https://github.com/joshua42atkinson/day_dream",
        linkText: "View Repository"
    },
    {
        id: "pedagogical-framework",
        title: "Pedagogical Framework (VaaM)",
        category: "Major Reports",
        type: "major",
        icon: BrainCircuit,
        summary: "The theoretical backbone of the project. Defines the 'Vocabulary-as-a-Mechanic' (VaaM) model, integrating Bloom's Taxonomy with RPG itemization systems.",
        reflection: "<p>By treating vocabulary words as 'inventory items' with weight (Intrinsic Load) and value (Steam), we gamify the hardest part of learning: the initial acquisition of terminology. This framework turns cognitive load into a gameplay mechanic.</p>",
        linkUrl: "https://docs.google.com/document/d/1Nlm2Q5MFzGaa3uL6Xry6gCMrtDjIKw11WIouYPBrIKY/edit?tab=t.0",
        linkText: "Read Framework"
    },
    {
        id: "visual-design",
        title: "Visual Design System",
        category: "Major Reports",
        type: "major",
        icon: PenTool,
        summary: "The aesthetic specification for the 'Black and Gold' steampunk interface. Covers typography, color theory (Purdue Gold #CFB991), and the 'Iron Network' UI kit.",
        reflection: "<p>Design is not decoration; it is communication. The steampunk aesthetic was chosen not just for style, but to visually reinforce the themes of 'Steam' (Effort) and 'Coal' (Resources). The UI itself teaches the user how to operate the system.</p>",
        linkUrl: "#",
        linkText: "View Design System"
    },
    {
        id: "impact-evaluation",
        title: "Impact Evaluation & Gap Analysis",
        category: "Major Reports",
        type: "major",
        icon: Target,
        summary: "A rigorous analysis of the 'Affective Gap' in modern LMS platforms. Uses the ADDIE model to identify why students disengage and how narrative scaffolding solves the problem.",
        reflection: "<p>The data showed a clear gap: students weren't failing because the content was too hard; they were failing because they felt unsafe. This analysis drove the decision to build a 'Privacy-First' AI, removing the surveillance state from the classroom.</p>",
        linkUrl: "https://docs.google.com/document/d/1G9eHvMyS-UCUh2N6v5aUaFrMMEdc2M0p2TFedqGfLZE/edit?tab=t.0",
        linkText: "View Analysis"
    },

    // --- COMPETENCY EVIDENCE (Restored Artifacts) ---
    {
        id: "blog-post-ai",
        title: "From Mindmap to Model: The Rise of AI",
        category: "Competency Evidence",
        type: "evidence",
        icon: FileText,
        summary: "A reflective blog post exploring the transition from traditional brainstorming to AI-assisted modeling.",
        reflection: "<p>Demonstrates the ability to solicit and utilize feedback to improve performance. The post analyzes the potential of AI as a cognitive partner rather than a replacement.</p>",
        linkUrl: "https://daydream67.blogspot.com/2025/11/from-mindmap-to-model-rise-of-ai.html",
        linkText: "Read Blog Post"
    },
    {
        id: "gap-analysis",
        title: "Daydream Initiative: ADDIE Gap Analysis",
        category: "Competency Evidence",
        type: "evidence",
        icon: Map,
        summary: "A formal Gap Analysis document identifying the disconnect between student engagement and LMS architecture.",
        reflection: "<p>Identifies the 'Affective Gap' and proposes non-instructional solutions (gamification, privacy) to address root causes of disengagement.</p>",
        linkUrl: "https://docs.google.com/document/d/1G9eHvMyS-UCUh2N6v5aUaFrMMEdc2M0p2TFedqGfLZE/edit?tab=t.0",
        linkText: "View Document"
    },
    {
        id: "target-population",
        title: "Unified Specification: Mentor-in-the-Loop",
        category: "Competency Evidence",
        type: "evidence",
        icon: Users,
        summary: "Analysis of the target population (Undergraduate Students) and the environmental constraints of the modern university.",
        reflection: "<p>Demonstrates how learner characteristics (digital natives, high anxiety) influenced the design of the 'Mentor-in-the-Loop' strategy.</p>",
        linkUrl: "https://docs.google.com/document/d/1nusS6s589cf84tu9XkY3dbwdb524A-_hCRigAM70uU0/edit?tab=t.0",
        linkText: "View Specification"
    },
    {
        id: "github-repo",
        title: "Daydream Project Repository",
        category: "Competency Evidence",
        type: "evidence",
        icon: Code,
        summary: "The complete source code for the Daydream/Ask Pete project, including Rust backend and React frontend.",
        reflection: "<p>Evidence of technical competency in determining subordinate skills and analyzing emerging technologies (Rust/WASM) for educational use.</p>",
        linkUrl: "https://github.com/joshua42atkinson/day_dream",
        linkText: "View GitHub"
    },
    {
        id: "instructional-design-doc",
        title: "Instructional Design Document",
        category: "Competency Evidence",
        type: "evidence",
        icon: Layers,
        summary: "The comprehensive ID document following the ADDIE model.",
        reflection: "<p>Demonstrates the selection and application of the ADDIE model to structure the development of the Daydream platform.</p>",
        linkUrl: "https://docs.google.com/document/d/1ojZ6v48rnNLnEHNPOcuiY6vDMabkrg3dop0GyxqEId8/edit?tab=t.0",
        linkText: "View ID Doc"
    },
    {
        id: "infographic-tutorial",
        title: "Infographic Creation Tutorial",
        category: "Competency Evidence",
        type: "evidence",
        icon: Video,
        summary: "A screencast tutorial demonstrating how to create educational infographics.",
        reflection: "<p>Evidence of producing instructional materials in a variety of delivery formats (Video/Multimedia).</p>",
        linkUrl: "https://youtu.be/dYxmWd50xgs",
        linkText: "Watch Tutorial"
    },
    {
        id: "unified-spec",
        title: "Daydream Unified Specification",
        category: "Competency Evidence",
        type: "evidence",
        icon: Layout,
        summary: "The technical and pedagogical specification for the platform.",
        reflection: "<p>Demonstrates the design of instructional interventions that align with learning goals and outcomes.</p>",
        linkUrl: "https://docs.google.com/document/d/1R5PvyeEDpI44iTFXcD7w6Y3V2ddEZN8MjwSajIft6U8/edit?tab=t.0",
        linkText: "View Spec"
    }
];


