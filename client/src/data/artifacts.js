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
    BrainCircuit,
    Briefcase
} from 'lucide-react';

export const CATEGORIES = ["All", "Major Reports", "Competency Evidence"];

export const ARTIFACTS = [
    // --- MASTER DOCUMENTS (The "Big 5") ---
    {
        id: "master-bible",
        title: "The Ask Pete Initiative: A Strategic and Pedagogical Blueprint",
        category: "Major Reports",
        type: "major",
        icon: BookOpen,
        summary: "This master document serves as the definitive comprehensive analysis and artifact repository for the Learning Design and Technology (LDT) Competency Portfolio at Purdue University. It documents the strategic, theoretical, and technical evolution of the 'Daydream Initiative' into its final institutional form: 'Ask Pete.'",
        reflection: "<p>This document represents the culmination of the LDT competency framework, synthesizing the disparate elements of design, development, and evaluation into a cohesive institutional strategy. It demonstrates the ability to move beyond the creation of isolated instructional products to the engineering of complex 'Living Laboratories' that serve broader organizational goals. By reframing the project from a consumer-facing 'edutainment' product to a rigorous academic instrument, I have demonstrated the strategic foresight required of high-level instructional designers.</p><p>The transition to 'Ask Pete' required a fundamental re-evaluation of the project's ethical and technical foundations. The 'Privacy Moat' architecture described herein is not merely a technical feature but a direct response to the ethical crisis of surveillance capitalism in EdTech. This artifact proves that I can align advanced systems engineering—specifically the 'Hybrid Sovereign' architecture—with foundational learning sciences to create environments that are both pedagogically effective and ethically sound.</p>",
        linkUrl: "https://docs.google.com/document/d/1ojZ6v48rnNLnEHNPOcuiY6vDMabkrg3dop0GyxqEId8/edit?tab=t.0",
        linkText: "Read the Blueprint"
    },
    {
        id: "engineering-bible",
        title: "Engineering Bible & Decision Log",
        category: "Major Reports",
        type: "major",
        icon: Terminal,
        summary: "A technical chronicle of the 'Hostile MVP' pivot. Documents the shift from Python/LangChain to a local-first Rust/WASM architecture to solve the privacy-latency dilemma.",
        reflection: "<p>Engineering in an instructional context is often reduced to simple tool selection, but this artifact demonstrates a deeper competency: 'Decision Making Under Constraint.' The log chronicles the deliberate rejection of industry-standard cloud architectures in favor of a 'Hostile MVP' approach that prioritizes student privacy over development speed. This reflects a sophisticated understanding of how technical decisions directly impact the psychological safety of the learner.</p><p>Furthermore, the shift from Python/LangChain to a Rust/WASM stack was driven by the 'Systems Isomorphism' theory—the idea that the stability of the learning environment mirrors the stability of the learner's cognitive state. By documenting the 'why' behind every crash, refactor, and pivot, this log serves as evidence of a rigorous, data-driven design process that refuses to compromise on the core values of the 'Living Laboratory' mandate.</p>",
        linkUrl: "https://github.com/joshua42atkinson/daydream_website",
        linkText: "View Repository"
    },
    {
        id: "pedagogical-framework",
        title: "Pedagogical Framework (VaaM)",
        category: "Major Reports",
        type: "major",
        icon: BrainCircuit,
        summary: "The theoretical backbone of the project. Defines the 'Vocabulary-as-a-Mechanic' (VaaM) model, integrating Bloom's Taxonomy with RPG itemization systems.",
        reflection: "<p>The 'Vocabulary-as-a-Mechanic' (VaaM) framework addresses a critical failure in traditional instructional design: the separation of 'content' from 'activity.' By integrating Bloom's Taxonomy with RPG itemization systems, this artifact demonstrates the ability to gamify the intrinsic load of learning without trivializing the subject matter. It transforms the 'drudgery' of vocabulary acquisition into a strategic resource management game, effectively linking 'Steam' (Effort) to 'Coal' (Resources).</p><p>This framework also provides evidence of my ability to apply cognitive science principles—specifically Cognitive Load Theory—to novel contexts. By assigning 'weight' to concepts, I have created a system that respects the learner's channel capacity while still encouraging 'Desirable Difficulty.' This moves the project beyond simple 'points and badges' gamification into the realm of 'Cognitive Logistics,' where the learner is an active operator of their own mental model.</p>",
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
        reflection: "<p>In the context of 'Ask Pete,' visual design is treated as a functional pedagogical element rather than mere decoration. The 'Glassmorphism' aesthetic was deliberately chosen to reduce 'Track Friction' (Extraneous Cognitive Load) by creating a 'Head-Up Display' that minimizes visual noise. This demonstrates my competency in Instructional Message Design, showing how aesthetic choices can directly support cognitive processing.</p><p>Moreover, the 'Steampunk' theme serves as a powerful metaphor for the underlying learning mechanics. The visual language of gears, steam, and brass reinforces the 'Engine' metaphor of the mind, helping students visualize abstract concepts like 'Motivation' (Coal) and 'Effort' (Steam). This alignment of form and function proves my ability to use visual design to scaffold mental models and enhance the overall learning experience.</p>",
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
        reflection: "<p>This analysis identifies the 'Edutainment Gap' as a critical market failure, demonstrating my ability to conduct rigorous needs assessments. By using the ADDIE model to dissect why students disengage from traditional LMS platforms, I uncovered that the root cause was often 'Affective Anxiety' rather than 'Cognitive Overload.' This insight drove the entire architectural strategy of the project.</p><p>The resulting 'Privacy-First' mandate is a direct response to this gap analysis. It proves that I can translate high-level research findings into concrete design specifications. The decision to remove the 'surveillance state' from the classroom was not an ideological one, but a pedagogical one—based on the data showing that students cannot learn effectively when they feel 'watched' by a judgmental system.</p>",
        linkUrl: "https://docs.google.com/document/d/1G9eHvMyS-UCUh2N6v5aUaFrMMEdc2M0p2TFedqGfLZE/edit?tab=t.0",
        linkText: "View Analysis"
    },

    // --- COMPETENCY EVIDENCE (Ask Pete Artifacts) ---
    {
        id: "cognitive-logistics",
        title: "\"Cognitive Logistics\" & The Railway Metaphor",
        category: "Competency Evidence",
        type: "evidence",
        icon: Cpu,
        summary: "This white paper introduces \"Cognitive Logistics,\" a novel instructional strategy that translates the abstract principles of Cognitive Load Theory (CLT) into a concrete simulation engine. The artifact details how Intrinsic Load is modeled as \"Cargo Weight,\" Extraneous Load as \"Track Friction,\" and Germane Load as \"Combustion.\"",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of explaining key concepts and principles related to instructional design by translating the invisible cognitive processes of CLT into a visible, quantifiable physics engine.</p><p><strong>Competency Alignment:</strong> Prior to this project, my understanding of Cognitive Load Theory was limited to static media principles (e.g., reducing on-screen text). This competency aligns with and expands upon my prior experience in game mechanics, moving me from designing for \"fun\" to designing for \"flow.\" I learned that \"engagement\" is not magic; it is the mathematical result of balancing Intrinsic Load against Working Memory capacity.</p><p><strong>Analysis:</strong> By mapping Sweller’s CLT to a physics simulation, I demonstrated that instructional design theories are not just guidelines but governed by immutable laws similar to physics. If the \"Cargo\" (content) exceeds the \"Engine\" (capacity), the learner will stall, regardless of motivation.</p>",
        linkUrl: "#",
        linkText: "View Metaphor"
    },
    {
        id: "narrative-pitch",
        title: "The \"Narrative Pitch\" (Video/Script)",
        category: "Competency Evidence",
        type: "evidence",
        icon: Video,
        summary: "This video presentation was designed to \"sell\" the pedagogical value of the \"Virtuous Cycle\" to university stakeholders. The script utilizes the metaphor of a \"mechanical engine\" to explain the abstract psychological concept of \"Motivation\" to non-experts, translating complex theory into accessible language.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of soliciting, accepting, and providing constructive feedback, as well as writing clear messages for diverse audiences.</p><p><strong>Competency Alignment:</strong> My prior experience in commercial pitching focused on excitement and sales. This competency required a shift toward academic rigor and institutional alignment. I had to learn to accept feedback from LDT faculty regarding the \"Edutainment Gap\" and rewrite the pitch to prioritize pedagogical efficacy over entertainment value.</p><p><strong>Analysis:</strong> The evolution of this script demonstrates the ability to tailor communication. By stripping away jargon and using the \"Engine\" metaphor, I ensured that stakeholders from Engineering and Education could both understand the core value proposition.</p>",
        linkUrl: "#",
        linkText: "Watch Pitch"
    },
    {
        id: "field-manual",
        title: "The \"Ask Pete\" Field Manual & Git Log",
        category: "Competency Evidence",
        type: "evidence",
        icon: FileText,
        summary: "The Field Manual is a comprehensive user guide written in Markdown, while the Git Log documents the \"Phoenix Project\" migration. This demonstrates the use of Version Control (Git) to manage complex instructional development.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of acquiring and applying basic technology skills, specifically version control and documentation standards.</p><p><strong>Competency Alignment:</strong> Coming from a design background, I previously managed files using \"Final_Final_v2\" naming conventions. This project forced me to align with professional software engineering standards, learning Git to manage the \"Phoenix Project\" migration without losing the history of the research.</p><p><strong>Analysis:</strong> This skill is critical for modern ID work where \"Content as Code\" is becoming the standard.</p>",
        linkUrl: "#",
        linkText: "View Manual"
    },
    {
        id: "weigh-station",
        title: "The \"Weigh Station\" & Knowledge Graph",
        category: "Competency Evidence",
        type: "evidence",
        icon: Zap,
        summary: "The \"Weigh Station\" is a research instrument that uses Natural Language Processing (NLP) to analyze the intrinsic load of instructional content in real-time. It visualizes curriculum connections using topological graphs.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of acquiring research tools to analyze information.</p><p><strong>Competency Alignment:</strong> Prior to this, my research tools were limited to citation managers. This competency required acquiring skills in Graph Theory and NLP to build a tool that doesn't just store research, but analyzes it.</p><p><strong>Analysis:</strong> The \"Weigh Station\" transforms research from a passive activity to an active, systemic process.</p>",
        linkUrl: "#",
        linkText: "View Tool"
    },
    {
        id: "visual-design-system",
        title: "The \"Glassmorphism\" UI Design System",
        category: "Competency Evidence",
        type: "evidence",
        icon: PenTool,
        summary: "This UI system utilizes Glassmorphism to create a \"Head-Up Display\" aesthetic. The design is engineered to reduce Extraneous Cognitive Load by minimizing visual friction and focusing attention on the \"Signal\" (Content).",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of using presentation tools to support learning.</p><p><strong>Competency Alignment:</strong> My prior experience in UI design focused on aesthetics. This competency aligns with the LDT principle of reducing Extraneous Load. I learned that \"good design\" in an educational context is design that disappears, allowing the learner to focus entirely on the schema acquisition.</p><p><strong>Analysis:</strong> The \"Glass\" aesthetic is not just a style; it is an instructional intervention.</p>",
        linkUrl: "#",
        linkText: "View Design System"
    },
    {
        id: "apache-prime-directive",
        title: "The \"Privacy Moat\" & Apache Prime Directive",
        category: "Competency Evidence",
        type: "evidence",
        icon: Shield,
        summary: "The \"Privacy Moat\" details the \"Hybrid Sovereign Architecture\" which processes student data locally to ensure FERPA compliance. It includes the \"Apache Prime Directive\" (Deed of Gift), which mandates that the core software remain Open Source (Apache 2.0) to prevent vendor lock-in.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of complying with organizational constraints (FERPA) and professional codes of ethics regarding data sovereignty.</p><p><strong>Competency Alignment:</strong> Previously, I viewed data privacy as a \"Terms of Service\" checkbox. This competency aligned with my growing understanding of \"Surveillance Capitalism\" in EdTech. I realized that to truly respect the learner, I had to architect a system where their thoughts remained their property.</p><p><strong>Analysis:</strong> By designing for Local-First storage, I created a system that respects student agency by default. This artifact proves that ethical considerations can be baked into the code itself, rather than just written in a policy document.</p>",
        linkUrl: "#",
        linkText: "View Directive"
    },
    {
        id: "edutainment-gap",
        title: "The \"Edutainment Gap\" White Paper",
        category: "Competency Evidence",
        type: "evidence",
        icon: Map,
        summary: "This analysis identifies a \"Market Failure\" between High-Engagement/Low-Rigor products (Video Games) and High-Rigor/Low-Engagement products (LMS). It identifies the \"ID Tool Gap\" as the root cause—Instructional Designers lack the tools to build complex narratives without coding.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of conducting a gap analysis to identify a performance or market problem.</p><p><strong>Competency Alignment:</strong> My prior experience led me to believe the gap was simply \"boring content.\" This analysis deepened that understanding, aligning with the systemic view that the tools available to designers define the products they create.</p><p><strong>Analysis:</strong> The paper concludes that we don't need better games; we need better authoring tools for educators.</p>",
        linkUrl: "https://docs.google.com/document/d/1G9eHvMyS-UCUh2N6v5aUaFrMMEdc2M0p2TFedqGfLZE/edit?tab=t.0",
        linkText: "Read White Paper"
    },
    {
        id: "learner-persona",
        title: "Learner & User Persona Analysis",
        category: "Competency Evidence",
        type: "evidence",
        icon: Users,
        summary: "This analysis profiles three personas: The Adolescent Learner (high social anxiety), the Instructional Designer (pedagogical expert, coding novice), and the Mentor (variable empathy).",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of determining characteristics of the target population.</p><p><strong>Competency Alignment:</strong> I previously designed for a \"generic user.\" This competency required me to recognize the specific constraint of \"Social-Emotional Anxiety\" in the target demographic.</p><p><strong>Analysis:</strong> This finding directly influenced the decision to build the \"Privacy Moat,\" creating a high-trust environment where students feel safe to fail.</p>",
        linkUrl: "https://docs.google.com/document/d/1nusS6s589cf84tu9XkY3dbwdb524A-_hCRigAM70uU0/edit?tab=t.0",
        linkText: "View Analysis"
    },
    {
        id: "trinity-architecture",
        title: "The \"Rust-Powered\" Stack & Trinity Architecture",
        category: "Competency Evidence",
        type: "evidence",
        icon: Code,
        summary: "This analysis justifies the rejection of the standard MERN stack in favor of a Rust stack (Axum, Bevy, Leptos) to ensure \"Systems Isomorphism\" (Memory Safety = Psychological Safety). It includes the Trinity Directory Structure.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of analyzing emerging technologies for instructional use.</p><p><strong>Competency Alignment:</strong> My prior technical experience was limited to web scripting. This competency forced me to analyze the benefits of low-level systems programming (Rust) and Edge AI (WebGPU) to solve specific educational problems like privacy and latency.</p><p><strong>Analysis:</strong> The decision to use Rust was not technical vanity; it was an instructional decision to ensure the tool is as reliable as the theory it is built upon.</p>",
        linkUrl: "https://github.com/joshua42atkinson/daydream_website",
        linkText: "View Architecture"
    },
    {
        id: "phoenix-project",
        title: "The \"Phoenix Project\" Roadmap",
        category: "Competency Evidence",
        type: "evidence",
        icon: Layout,
        summary: "This artifact outlines the \"Cascading Remediation\" workflow, an agile process modified to include an \"Automated Coding Agent\" (Jules) to bridge the gap between pedagogical blueprints and code.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of creating an ID process.</p><p><strong>Competency Alignment:</strong> Traditional ADDIE models felt too linear for software development. This process aligns with my experience in agile development but adapts it for ID, treating the \"Design\" phase as a \"Blueprint\" that an AI agent helps construct.</p><p><strong>Analysis:</strong> This demonstrates the adaptation of standard ID processes to accommodate modern AI-assisted workflows.</p>",
        linkUrl: "https://docs.google.com/document/d/1ojZ6v48rnNLnEHNPOcuiY6vDMabkrg3dop0GyxqEId8/edit?tab=t.0",
        linkText: "View Roadmap"
    },
    {
        id: "vaam-mechanic",
        title: "Vocabulary-as-a-Mechanic (VaaM)",
        category: "Competency Evidence",
        type: "evidence",
        icon: BrainCircuit,
        summary: "This strategy treats vocabulary words as functional \"keys\" within the game. Students must \"equip\" a word (e.g., \"Ephemeral\") and apply it to a context to unlock a door. This operationalizes Situated Cognition.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of identifying instructional strategies.</p><p><strong>Competency Alignment:</strong> I previously used flashcards for vocabulary (rote memorization). This strategy aligns with the theory of Situated Cognition—that knowledge is inseparable from the context in which it is used.</p><p><strong>Analysis:</strong> By making words \"tools\" rather than \"answers,\" the strategy forces deep processing and application.</p>",
        linkUrl: "#",
        linkText: "View Strategy"
    },
    {
        id: "socratic-guide",
        title: "The \"Socratic Guide\" & Narrative Structure",
        category: "Competency Evidence",
        type: "evidence",
        icon: BrainCircuit,
        summary: "The \"Pete\" character acts as a Socratic Guide, programmed to refuse direct answers and instead ask scaffolding questions. This applies ARCS Model principles by maintaining \"Confidence\" through scaffolding and \"Attention\" through narrative.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of applying motivational design principles.</p><p><strong>Competency Alignment:</strong> My prior instinct was to provide help immediately. This competency taught me the value of \"Desirable Difficulty.\"</p><p><strong>Analysis:</strong> The intervention is designed to frustrate the student just enough to induce deep thinking, without causing them to quit (Derailment).</p>",
        linkUrl: "https://docs.google.com/document/d/1R5PvyeEDpI44iTFXcD7w6Y3V2ddEZN8MjwSajIft6U8/edit?tab=t.0",
        linkText: "View Guide"
    },
    {
        id: "node-garden",
        title: "The \"Node Garden\" (Phygital Learning)",
        category: "Competency Evidence",
        type: "evidence",
        icon: Map,
        summary: "The \"Node Garden\" is a GPS-enabled game board overlaying the Purdue campus. It operationalizes Embodied Cognition by requiring physical movement to generate \"Kinetic Fuel\" for the learning engine.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of producing materials in various formats (Mobile/AR).</p><p><strong>Competency Alignment:</strong> My experience was limited to screen-based learning. This artifact aligned with the research on Embodied Cognition, proving that physical state affects cognitive readiness.</p><p><strong>Analysis:</strong> This moves the \"classroom\" out of the LMS and into the physical world.</p>",
        linkUrl: "#",
        linkText: "View Garden"
    },
    {
        id: "research-instrument-menu",
        title: "The Research Instrument Menu & Weigh Station",
        category: "Competency Evidence",
        type: "evidence",
        icon: Target,
        summary: "This menu outlines the specific evaluation capabilities of the platform: Cognitive Load Validation, Generative AI Integrity, and Affective Domain correlation.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of implementing evaluation plans.</p><p><strong>Competency Alignment:</strong> Previously, evaluation meant \"tests.\" This competency aligned with the need for \"Process Data.\" I learned that a final grade tells you if they learned, but telemetry tells you how they learned.</p><p><strong>Analysis:</strong> The \"Weigh Station\" changes evaluation from a post-mortem to a live diagnostic process.</p>",
        linkUrl: "#",
        linkText: "View Menu"
    },
    {
        id: "recharge-center",
        title: "The Internal Recharge Center Model",
        category: "Competency Evidence",
        type: "evidence",
        icon: Briefcase,
        summary: "This plan establishes \"Ask Pete\" as an Internal Recharge Center, funding the project through a \"Seat Fee\" ($5/student) rather than grants. It details the sustainable diffusion of the tool across the university.",
        reflection: "<p><strong>Challenge Statement:</strong> This artifact addresses the challenge of creating a plan for dissemination and diffusion.</p><p><strong>Competency Alignment:</strong> My prior experience with projects was \"launch and leave.\" This competency forced me to consider the \"Institutional Life Cycle.\"</p><p><strong>Analysis:</strong> A tool is useless if it cannot be paid for. This model ensures the \"Ask Pete\" initiative survives beyond the initial research phase, securing its diffusion throughout the university ecosystem.</p>",
        linkUrl: "#",
        linkText: "View Plan"
    }
];
