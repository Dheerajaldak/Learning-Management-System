import { FaBook, FaClock, FaUsers, FaCloud, FaDollarSign, FaCreditCard, FaExchangeAlt, FaShieldAlt, FaFileAlt, FaBell, FaComments, FaSearch, FaPlug, FaSyncAlt, FaFileImport, FaCogs } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    src: new URL("../src/Assets/headshots/img-1.webp", import.meta.url),
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: new URL("../src/Assets/headshots/img-7.webp", import.meta.url),
    alt: "Emily Thompson",
  },
  {
    id: 3,
    src: new URL("../src/Assets/headshots/img-5.webp", import.meta.url),
    alt: "Daniel Harris",
  },
  {
    id: 4,
    src: new URL("../src/Assets/headshots/img-9.webp", import.meta.url),
    alt: "Sarah Lee",
  },
  {
    id: 5,
    src: new URL("../src/Assets/headshots/img-15.webp", import.meta.url),
    alt: "Lucas King",
  },
];

const frequentlyAskedQuestions = [
  {
    category: "General",
    id: 1,
    questions: [
      {
        id: 1,
        alt: "Book Icon",
        Icon: FaBook,
        question: "What is an LMS?",
        answer:
          "A Learning Management System (LMS) is a software application for the administration, documentation, tracking, reporting, and delivery of educational courses or training programs.",
      },
      {
        id: 2,
        alt: "Clock Icon",
        Icon: FaClock,
        question: "How does the LMS track my progress?",
        answer:
          "The LMS automatically tracks your course progress, including time spent on each module, test scores, and completion of assignments. You can monitor your progress through your personal dashboard.",
      },
      {
        id: 3,
        alt: "Users Icon",
        Icon: FaUsers,
        question: "Can multiple people access the same course?",
        answer:
          "Yes, LMS platforms are typically designed for group learning. You can share courses with teams, collaborate on assignments, and access the same resources within a group.",
      },
      {
        id: 4,
        alt: "Cloud Icon",
        Icon: FaCloud,
        question: "Can I access the LMS from different devices?",
        answer:
          "Yes, our LMS is accessible from any device, including desktop computers, tablets, and smartphones, making it convenient for you to learn on the go.",
      },
    ],
  },
  {
    category: "Pricing",
    id: 2,
    questions: [
      {
        id: 5,
        alt: "Dollar Icon",
        Icon: FaDollarSign,
        question: "What pricing plans are available for the LMS?",
        answer:
          "We offer various pricing plans to suit different needs. There is a free basic plan for individuals, and premium plans with advanced features such as unlimited access, customization, and reporting tools for organizations.",
      },
      {
        id: 6,
        alt: "Credit Card Icon",
        Icon: FaCreditCard,
        question: "Is there a free trial for the LMS?",
        answer:
          "Yes, we offer a 30-day free trial to allow you to explore all the features of the LMS. During the trial period, you’ll have access to premium features to see how it fits your needs.",
      },
      {
        id: 7,
        alt: "Change Icon",
        Icon: FaExchangeAlt,
        question: "Can I change or cancel my subscription at any time?",
        answer:
          "Yes, you can upgrade, downgrade, or cancel your subscription at any time through your account settings. If you cancel, your access will continue until the end of the current billing cycle.",
      },
      {
        id: 8,
        alt: "Security Icon",
        Icon: FaShieldAlt,
        question: "Is my payment information secure?",
        answer:
          "We prioritize your security. All transactions are processed securely with encryption and comply with the latest data protection regulations, including GDPR.",
      },
    ],
  },
  {
    category: "Features",
    id: 3,
    questions: [
      {
        id: 9,
        alt: "Modules Icon",
        Icon: FaFileAlt,
        question: "What features does the LMS offer for course creation?",
        answer:
          "Our LMS provides intuitive tools for creating courses, including multimedia support, quizzes, assignments, and customizable learning paths. You can design interactive content that suits the needs of your learners.",
      },
      {
        id: 10,
        alt: "Notification Icon",
        Icon: FaBell,
        question: "Can I set up reminders for upcoming courses or deadlines?",
        answer:
          "Yes, you can create automatic reminders for upcoming lessons, deadlines, and events. The system will send notifications through email or in-app messages to keep learners on track.",
      },
      {
        id: 11,
        alt: "Discussion Icon",
        Icon: FaComments,
        question: "Can students collaborate within the LMS?",
        answer:
          "Yes, our LMS includes discussion boards, group projects, and live chat features, enabling students to collaborate and interact with each other in real time.",
      },
      {
        id: 12,
        alt: "Search Icon",
        Icon: FaSearch,
        question: "How does the search function work?",
        answer:
          "The LMS features an advanced search tool that allows you to find specific courses, resources, and materials by keywords, topics, or course objectives. It helps you locate the content you need quickly and efficiently.",
      },
    ],
  },
  {
    category: "Integrations",
    id: 4,
    questions: [
      {
        id: 13,
        alt: "Integration Icon",
        Icon: FaPlug,
        question: "What third-party tools can be integrated with the LMS?",
        answer:
          "The LMS supports integrations with popular tools such as Google Drive, Zoom, Microsoft Teams, Slack, and more, allowing you to expand functionality and improve the learning experience.",
      },
      {
        id: 14,
        alt: "Sync Icon",
        Icon: FaSyncAlt,
        question: "Can I sync my courses with other platforms?",
        answer:
          "Yes, our LMS offers integration features that allow you to sync course content, enrollments, and progress with other platforms such as Moodle, Blackboard, and more.",
      },
      {
        id: 15,
        alt: "Import Icon",
        Icon: FaFileImport,
        question: "Can I import content from other LMS platforms?",
        answer:
          "Yes, you can import course content, student data, and other resources from other LMS platforms into our system. This makes it easy to transition and continue learning without losing any content.",
      },
      {
        id: 16,
        alt: "API Icon",
        Icon: FaCogs,
        question: "Does the LMS support API integrations?",
        answer:
          "Yes, our LMS provides API support, allowing you to integrate it with your existing systems or custom tools for a more streamlined and personalized learning experience.",
      },
    ],
  },
];


const testimonials = [
  {
    id: 1,
    rating: 4,
    description:
      "NoteFlow has completely transformed the way I manage my work notes. The AI-powered organization feature \
    makes it so easy to find what I need, even weeks after the fact.",
    src: new URL("../src/Assets/headshots/img-7.webp", import.meta.url),
    name: "Emily Thompson",
    title: "Senior Manager",
  },
  {
    id: 2,
    rating: 5,
    description:
      "As a designer, I need a tool that helps me keep track of brainstorming sessions and project notes. NoteFlow’s \
    voice-to-text transcription is a game-changer!",
    src: new URL("../src/Assets/headshots/img-3.webp", import.meta.url),
    name: "Michael Carter",
    title: "Product Designer",
  },
  {
    id: 3,
    rating: 5,
    description:
      "I love how NoteFlow integrates with tools like Google Drive and Slack. It makes collaboration with my team so \
    much smoother. The contextual reminders have helped me stay on top of critical deadlines.",
    src: new URL("../src/Assets/headshots/img-9.webp", import.meta.url),
    name: "Sarah Lee",
    title: "Business Analyst",
  },
  {
    id: 4,
    rating: 4,
    description:
      "The smart organization of my notes is impressive. I used to waste time searching for information, but now \
    NoteFlow does the heavy lifting, automatically categorizing everything. It’s an indispensable part of my workflow.",
    src: new URL("../src/Assets/headshots/img-4.webp", import.meta.url),
    name: "Jonathan Moore",
    title: "Software Engineer",
  },
  {
    id: 5,
    rating: 4,
    description:
      "NoteFlow has made managing multiple projects so much easier. I can quickly access and organize my notes, \
    and the contextual reminders keep me on track. It’s the best tool I’ve found for staying organized.",
    src: new URL("../src/Assets/headshots/img-15.webp", import.meta.url),

    name: "Rachel Foster",
    title: "Project Manager",
  },
  {
    id: 6,
    rating: 5,
    description:
      "As a startup founder, my days are packed with meetings and ideas. NoteFlow’s voice-to-text feature lets \
    me capture thoughts while I’m on the move. Plus, the cloud storage sync keeps everything safe and easily accessible.",
    src: new URL("../src/Assets/headshots/img-5.webp", import.meta.url),
    name: "Daniel Harris",
    title: "Entrepreneur",
  },
  {
    id: 7,
    rating: 4,
    description:
      "I’ve tried many note-taking apps, but none compare to NoteFlow. The AI-driven categorization helps me keep my \
    content ideas organized and searchable, saving me hours every week. Highly recommended!",
    src: new URL("../src/Assets/headshots/img-1.webp", import.meta.url),
    name: "Olivia Carter",
    title: "Content Strategist",
  },
  {
    id: 8,
    rating: 5,
    description:
      "The voice-to-text transcription is incredibly accurate and saves me so much time when documenting meetings. \
    Plus, I love how seamlessly it integrates with tools like Trello and Slack. NoteFlow is a must-have for anyone in design.",
    src: new URL("../src/Assets/headshots/img-6.webp", import.meta.url),
    name: "Thomas Williams",
    title: "UX/UI Designer",
  },
  {
    id: 9,
    rating: 4,
    description:
      "I rely heavily on my notes during client calls and follow-ups. The ability to automatically receive reminders \
    based on my notes has made my follow-up process much smoother and more efficient. NoteFlow has been a game-changer!",
    src: new URL("../src/Assets/headshots/img-8.webp", import.meta.url),
    name: "Jessica Gonzalez",
    title: "Sales Executive",
  },
  {
    id: 10,
    rating: 5,
    description:
      "I can’t say enough about how helpful NoteFlow’s integrations are. Syncing my notes with Google Drive and other apps \
    has streamlined my work processes. It’s helped me stay organized and efficient in an ever-changing environment.",
    src: new URL("../src/Assets/headshots/img-13.webp", import.meta.url),
    name: "Aaron Mitchell",
    title: "Customer Support",
  },
  {
    id: 11,
    rating: 4,
    description:
      "NoteFlow has been a lifesaver for organizing meeting summaries. The AI organization \
    categorizes everything, so I no longer have to worry about sorting through piles of documents!",
    src: new URL("../src/Assets/headshots/img-10.webp", import.meta.url),
    name: "Grace Stevens",
    title: "HR Manager",
  },
  {
    id: 12,
    rating: 4,
    description:
      "I’m always jotting down ideas and notes for various writing projects. The voice-to-text feature lets me capture my thoughts \
    while I’m out and about.",
    src: new URL("../src/Assets/headshots/img-14.webp", import.meta.url),
    name: "Ben Turner",
    title: "Freelance Writer",
  },
  {
    id: 13,
    rating: 5,
    description:
      "With NoteFlow, I’m able to keep track of ideas, strategies, and feedback effortlessly. The contextual reminders are perfect \
    for ensuring I follow up on key tasks and deadlines. It’s become an essential part of my daily routine.",
    src: new URL("../src/Assets/headshots/img-12.webp", import.meta.url),
    name: "Katherine Evans",
    title: "Marketing Director",
  },
  {
    id: 14,
    rating: 4,
    description:
      "As someone who juggles multiple responsibilities, NoteFlow keeps me organized without any hassle. The seamless integrations \
    with tools like Slack and Google Drive allow my team and I to stay in sync and work more efficiently.",
    src: new URL("../src/Assets/headshots/img-15.webp", import.meta.url),
    name: "Lucas King",
    title: "CEO",
  },
  {
    id: 15,
    rating: 5,
    description:
      "NoteFlow's ability to capture and organize my notes in such a detailed yet easy-to-use way has made a huge difference \
    in my creative process. Whether I'm brainstorming or taking project notes, it’s my go-to app for staying organized.",
    src: new URL("../src/Assets/headshots/img-2.webp", import.meta.url),
    name: "Natalie James",
    title: "Graphic Designer",
  },
];

export { reviews, frequentlyAskedQuestions, testimonials };
