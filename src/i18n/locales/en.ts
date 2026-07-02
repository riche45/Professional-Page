export default {
  nav: {
    home: 'Home',
    archives: 'Archives',
    search: 'Search',
    otherSites: 'My Other Sites',
    talks: 'My Talks',
    podcast: 'Podcast',
    resume: 'Résumé',
    darkMode: 'Dark Mode',
    connects: 'Connects',
    surveys: 'Surveys',
    categories: 'Categories',
    projects: 'Projects',
  },
  routes: {
    home: '/',
    archives: '/articles',
    search: '/search',
    podcast: '/podcast',
    resume: '/resume',
    connects: '/connects',
    surveys: '/surveys',
    about: '/about',
    projects: '/proyectos',
    portfolio: '/portfolio',
    articles: '/articles',
    conversations: '/chat',
  },
  categories: {
    articles: 'Articles',
    howTos: 'How Tos',
    humor: 'Memes',
    podcast: 'Into the Hopper Podcast',
    links: 'Links',
    portfolio: 'Portfolio',
    aiServices: 'AI Services',
  },
  search: {
    title: 'Global Search',
    description: 'Find projects, articles, profile information and conversations',
    placeholder: 'Search all content...',
    filters: 'Filters:',
    loading: 'Searching...',
    noResults: 'No results found',
    types: {
      project: 'Project',
      projects: 'Projects',
      article: 'Article',
      articles: 'Articles',
      profile: 'Profile',
      chat: 'Chat',
      conversations: 'Conversations'
    },
    mockData: {
      project1: {
        title: 'E-commerce Dashboard',
        description: 'Financial analysis system with React and TypeScript',
        content: 'Complete dashboard for sales analysis, inventory, and performance metrics. Implemented with React, TypeScript, and payment API integration.'
      },
      article1: {
        title: 'How Developers are Using LLMs',
        description: 'Exploring the innovative ways developers are leveraging large language models',
        content: 'Developers are adopting LLMs to automate tasks, generate code, and improve productivity. This article explores best practices.'
      },
      profile1: {
        title: 'Professional Experience',
        description: 'Over 5 years in software development',
        content: 'Full-stack developer with experience in React, TypeScript, Node.js, Python. Specialized in AI/ML solutions and modern web development.'
      },
      chat1: {
        title: 'Project Discussion',
        description: 'Discussion about mobile app development',
        content: 'User asked about experience with React Native and mobile development. Conversation about best practices and tools.'
      },
      project2: {
        title: 'Health Monitoring App',
        description: 'Mobile app for health monitoring',
        content: 'App developed with React Native for physical activity tracking, vital signs monitoring, and wearable device synchronization.'
      }
    },
    talks: "I'm open to collaborating and giving talks on AI, tech entrepreneurship, productivity, web development, and online events. Want to invite me to speak? Contact me."
  },
  errors: {
    pageNotFound: 'Page Not Found',
  },
  accessibility: {
    scrollLeft: 'Scroll left',
    scrollRight: 'Scroll right',
  },
  footer: {
    copyright: '© 2026',
    builtWith: 'Built with',
    theme: 'Theme',
    designedBy: 'designed by',
  },
  profile: {
    greeting: "Hey, I'm Richard García!",
    description: 'entrepreneur,\n designer,\ncreator,\ndev.',
    experience: "Experienced professional in solving business problems with innovative solutions in domains such as finance, technology, health and education.",
  },
  chat: {
    welcome: "Hi! 👋 I'm the AI assistant of Richard's portfolio. I'm an **agent** (LangGraph + RAG) that answers in real time about:\n\n🤖 His AI integration services (agents, RAG, pipelines)\n📊 His experience and flagship projects\n💻 His tech stack and skills\n💰 Rates and collaboration models\n🐙 His GitHub repositories (live lookup)\n\nAsk me anything and, if you're curious, hit \"Show reasoning\" to peek at how I work under the hood. How can I help you?",
    input_placeholder: "Type your message here...",
    assistant_status: "Personal Assistant",
    error_message: "Sorry, an error occurred. Please try again.",
    rate_limit_error: "You've exceeded the message limit per minute. Please wait a moment.",
    auth_error: "Authentication error. Please contact the administrator.",
    openai_rate_limit: "OpenAI API rate limit exceeded. Please try again later.",
    server_error: "Server error. Please try again later.",
    empty_message: "Message cannot be empty.",
    invalid_response: "No valid response received from the server.",
    status_online: 'Online',
    show_reasoning: "Show reasoning",
    hide_reasoning: "Hide reasoning",
    reasoning_model: "model",
    tool_search_portfolio: "Knowledge base search (RAG)",
    tool_github_repos: "GitHub lookup (live API)",
    responses: {
      experience: 'I have over 5 years of experience in software development, working across various sectors such as finance, technology, healthcare, and education. I specialize in modern web development with React, TypeScript, Python for data analysis, and blockchain technologies like Solidity, Besu, and Web3.js.',
      projects: 'I\'ve worked on multiple projects including enterprise dashboards, healthcare mobile apps, e-learning systems, financial analysis platforms, and decentralized applications (dApps). You can see some of my work in the articles and categories section.',
      tech: 'My tech stack includes React, TypeScript, Node.js, Python for data analysis, PostgreSQL, MongoDB, and AI/ML tools. I also work with blockchain technologies like Solidity, Besu, Ethereum, and Web3.js, along with frameworks like Next.js, Express, Django, and cloud technologies like AWS and Docker.',
      collaboration: 'I\'m available for freelance projects, technical consulting, and collaborations. You can contact me through the "Connects" section where you\'ll find more information about current opportunities and how to work with me.',
      articles: 'I regularly write about software development, artificial intelligence, blockchain, and emerging technologies. My recent articles include topics like using LLMs in development, AI integration in e-commerce, and data analysis with Python.',
      greeting: 'Hello! Nice to meet you. I\'m a developer passionate about creating innovative solutions. Would you like to know more about any specific project or my experience with particular technologies?',
      default: 'Thank you for your question. As a full-stack developer with AI/ML and blockchain experience, I\'m here to help you with any inquiries about software development, technology projects, or collaboration opportunities. Is there anything specific you\'d like to know?'
    }
  },
  language: {
    en: 'English',
    es: 'Spanish',
  },
  aiServices: {
    title: 'AI Services',
    subtitle: 'Specialist in enterprise AI agent development',
    description: 'Expert in implementing optimized and scalable artificial intelligence solutions. Custom chatbot development, business automation, and strategic AI consulting.',
    services: {
      training: {
        title: 'Custom Chatbot Development',
        description: 'I create AI agents specific to your business using advanced machine learning and natural language processing techniques.',
        price: '$500 - $2,000',
        duration: '2-4 weeks'
      },
      consulting: {
        title: 'Strategic AI Consulting',
        description: 'Implementation and optimization of AI solutions for small and medium enterprises.',
        price: '$100 - $300/hour',
        duration: 'Flexible'
      },
      automation: {
        title: 'Conversational AI Automation',
        description: 'Complete automated customer service systems with advanced artificial intelligence.',
        price: '$1,000 - $5,000',
        duration: '3-6 weeks'
      },
      courses: {
        title: 'Training: "Accessible Enterprise AI"',
        description: 'Training in AI implementation with efficient methodologies and optimized resources.',
        price: '$50 - $500',
        duration: 'Self-paced'
      }
    },
    products: {
      title: 'Digital Products',
      templates: {
        title: 'Specialized Agent Templates',
        description: 'Pre-configured templates for different industries'
      },
      scripts: {
        title: 'Optimized Training Scripts',
        description: 'Optimized code for training'
      },
      chatbots: {
        title: 'White-Label Chatbots',
        description: 'Ready-to-implement solutions for businesses'
      },
      saas: {
        title: 'Platform: "Rapid AI Training"',
        description: 'No-code tool for agile agent development'
      }
    },
    localServices: {
      title: 'Local AI Services',
      subtitle: 'Your Bot, your server, your data',
      description: 'Implementation of AI agents that run completely on your servers. Maximum privacy, zero external dependencies.',
      advantages: {
        title: 'Local AI Advantages',
        privacy: {
          title: 'Total Privacy',
          description: 'Your data never leaves your infrastructure'
        },
        costs: {
          title: 'Predictable Costs',
          description: 'No surprises in token billing'
        },
        speed: {
          title: 'Optimal Speed',
          description: 'No latency from external APIs'
        },
        compliance: {
          title: 'Regulatory Compliance',
          description: 'HIPAA, GDPR and other regulations'
        }
      },
      useCases: {
        title: 'Business Use Cases',
        restaurant: {
          title: 'Restaurants/Cafes',
          service: 'Chatbot for orders and reservations',
          price: '$200-500/month',
          benefit: 'Total control of ordering system'
        },
        medical: {
          title: 'Medical Offices',
          service: 'Assistant for appointments and information',
          price: '$300-800/month',
          benefit: 'HIPAA compliant, data stays local'
        },
        accounting: {
          title: 'Accounting Offices',
          service: 'Assistant for tax consultations',
          price: '$400-1000/month',
          benefit: 'Confidential information, 100% private'
        },
        realestate: {
          title: 'Real Estate',
          service: 'Property assistant',
          price: '$250-600/month',
          benefit: 'Knows your inventory, available 24/7'
        },
        dental: {
          title: 'Dental Clinics',
          service: 'Appointment management and reminders',
          price: '$200-500/month',
          benefit: 'Reduces no-shows, optimizes schedule'
        },
        fitness: {
          title: 'Gyms/Personal Trainers',
          service: 'Personalized training plans',
          price: '$300-700/month',
          benefit: '24/7 advice, automatic tracking'
        },
        startup: {
          title: 'Tech Startups',
          service: 'Technical assistant and support',
          price: '$800-2000/month',
          benefit: 'Open source, total customization'
        },
        financial: {
          title: 'Financial Institutions',
          service: 'Regulatory analysis and consultations',
          price: '$1500-5000/month',
          benefit: 'SOX compliance, ultra-secure data'
        },
        legal: {
          title: 'Law Firms',
          service: 'Legal research and documents',
          price: '$1000-3000/month',
          benefit: 'Absolute confidentiality, no third parties'
        }
      },
      deployment: {
        title: 'Implementation Options',
        local: {
          title: 'Local Server',
          description: 'Installation on your existing hardware',
          price: 'From $500 setup'
        },
        cloud: {
          title: 'Private Cloud',
          description: 'Dedicated VPS with exclusive access',
          price: 'From $300/month'
        },
        hybrid: {
          title: 'Hybrid',
          description: 'Combination of local + API as needed',
          price: 'Customized'
        }
      }
    },
    cta: {
      title: 'Ready to implement AI in your business?',
      description: 'Contact me for a free 30-minute consultation',
      button: 'Free Consultation'
    }
  },
  cta: {
    connect: 'Connect with me',
    hireMe: 'Hire me',
    viewProject: 'View project',
    readMore: 'Read more',
  },
  podcast: {
    title: 'Podcast Tech Talks',
    subtitle: 'Conversations about development, innovation and experiences in the tech world',
    comingSoon: {
      title: '🎙️ Coming Soon',
      description: 'We are preparing amazing content to share with you'
    },
    suggestTopic: {
      title: 'Suggest a Topic',
      description: 'What would you like to hear? Share your ideas and help us create relevant content.',
      placeholder: 'Describe the topic you would like us to cover...',
      submitButton: 'Submit Suggestion',
      successMessage: 'Thank you for your suggestion! We will review it soon.'
    },
    notifications: {
      title: 'Notifications',
      description: 'Be the first to know when we launch the podcast and receive exclusive updates.',
      emailPlaceholder: 'your@email.com',
      subscribeButton: 'Subscribe',
      successTitle: 'Subscribed!',
      successMessage: 'We will notify you when the podcast is available.'
    },
    suggestedTopics: {
      title: 'Community Suggested Topics',
      topics: [
        {
          title: 'Modern Web Development',
          description: 'React, TypeScript, and the latest frontend trends',
          category: 'Development'
        },
        {
          title: 'Mobile Development with React Native',
          description: 'Experiences and best practices in mobile development',
          category: 'Mobile'
        },
        {
          title: 'Tech Entrepreneurship',
          description: 'How to start and scale tech startups',
          category: 'Entrepreneurship'
        },
        {
          title: 'Artificial Intelligence in Development',
          description: 'How AI is transforming programming',
          category: 'AI/ML'
        },
        {
          title: 'Freelancer Experiences',
          description: 'Tips and lessons learned working independently',
          category: 'Career'
        },
        {
          title: 'Innovation and Tech Trends',
          description: 'Emerging technologies that are changing the world',
          category: 'Innovation'
        }
      ],
      votingInfo: 'Most voted topics will be prioritized for the first episodes'
    }
  },
  articles: {
    title: 'Articles',
    description: 'Exploring ideas, sharing knowledge, and discussing technology.',
    filters: {
      title: 'Filter by category',
      all: 'All',
      articles: 'Articles',
      howTos: 'How-Tos',
      reviews: 'Reviews'
    },
    featured: [
      {
        title: 'How LLMs are (Literally) Saving my Dev Life? 🤖',
        description: 'An honest and slightly ironic look at how language models are changing the way we code. Spoiler: I no longer memorize documentation 😅',
        date: '2024-03-15',
        category: 'Articles',
        slug: 'llms-dev-life-savior',
        imageSrc: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'AI Agents: The Year They Changed Our Professional Lives',
        description: '2025 is the year of AI agents. Discover how these intelligent assistants are revolutionizing productivity, creativity, and decision-making in work and daily life.',
        date: '2025-06-04',
        category: 'Articles',
        slug: 'ai-agents-impact-2025',
        imageSrc: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Tesla: Ugly Models, Bright Future?',
        description: "An ironic look at Tesla's design choices: not the prettiest, but with energy potential that could revolutionize the industry. Will we ever see a truly beautiful Tesla?",
        date: '2024-07-01',
        category: 'Reviews',
        slug: 'tesla-ugly-potential',
        imageSrc: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'DeepSeek: The New Player in the AI War?',
        description: 'The arrival of DeepSeek (open source) shakes up the global AI landscape. China or the US? OpenAI, Claude, Google, or DeepSeek? We analyze the impact and the future of technological dominance.',
        date: '2025-02-10',
        category: 'Articles',
        slug: 'deepseek-ai-war',
        imageSrc: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Founder or Entrepreneur? The Startup Paradox',
        description: "To start a startup, do you have to be an entrepreneur first, or is a LinkedIn profile and an idea enough? The classic chicken or egg dilemma, tech edition.",
        date: '2025-06-17',
        category: 'Articles',
        slug: 'founder-vs-entrepreneur',
        imageSrc: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'From 90 Minutes to "TOTAL 90": Building a Football AI Prediction App ⚽️🧠',
        description: 'This summer I set out to unite my profession with my hobby: football. The result: an AI-powered prediction app that combines Machine Learning, sports APIs, and interactive visualizations to understand matches beyond intuition.',
        date: '2025-08-28',
        category: 'Articles',
        slug: 'total-90-football-ai-app',
        imageSrc: '/images/articles/total90/total90-1.png'
      },
      {
        title: 'Automate Your Life: How to Build Your First Personal AI Bot',
        description: 'Learn step by step how to build a personal AI bot to help you organize tasks, send reminders, and even reply to messages. Perfect for anyone wanting to dive into automation without being an expert!',
        date: '2025-04-10',
        category: 'How Tos',
        slug: 'build-personal-ai-bot',
        imageSrc: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'From Idea to MVP: How to Intentionally Launch Your Own Startup',
        description: 'Discover the key steps to go from a simple hypothesis to a minimum viable product (MVP). Learn how to validate your idea, build fast, and launch like an intentional founder.',
        date: '2025-05-01',
        category: 'How Tos',
        slug: 'launch-intentional-startup',
        imageSrc: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'COVID-19 Detection with AI: When Illness Became Code',
        description: 'A personal experience with COVID-19 led me to build a Deep Learning detection system that achieved 99.5% sensitivity. This is the story of how pain transformed into a project with real impact.',
        date: '2026-02-13',
        category: 'Articles',
        slug: 'covid19-ai-detection',
        imageSrc: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  tutorials: {
    title: 'How Tos',
    description: 'Step-by-step guides and practical tutorials for developers.',
    featured: [
      {
        title: 'Writing a Prompts Book with Claude',
        description: 'My experience collaborating with AI to create a prompts guide that anyone can use, from cooking recipes to solving critical backend errors.',
        date: 'Jan 18, 2025',
        category: 'How Tos',
        slug: 'writing-prompts-book-claude',
        imageSrc: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Automate Your Life: How to Build Your First Personal AI Bot',
        description: 'Learn step by step how to build a personal AI bot to help you organize tasks, send reminders, and even reply to messages. Perfect for anyone wanting to dive into automation without being an expert!',
        date: '2025-04-10',
        category: 'How Tos',
        slug: 'build-personal-ai-bot',
        imageSrc: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'From Idea to MVP: How to Intentionally Launch Your Own Startup',
        description: 'Discover the key steps to go from a simple hypothesis to a minimum viable product (MVP). Learn how to validate your idea, build fast, and launch like an intentional founder.',
        date: '2025-05-01',
        category: 'How Tos',
        slug: 'launch-intentional-startup',
        imageSrc: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  connects: {
    title: 'Connects',
    connectionHub: {
      title: 'Connection Hub',
      description: 'Connect with me for freelance opportunities, collaborations, or just to chat about technology.',
      buttons: {
        connectGlobally: 'Connect Globally',
        scheduleMeeting: 'Schedule a Meeting',
        joinCommunity: 'Join Community',
        proposeCollab: 'Propose a Collaboration'
      }
    },
    availableFor: {
      title: 'Available For:',
      items: {
        freelance: 'Freelance Projects',
        consulting: 'Technical Consulting',
        speaking: 'Speaking Engagements',
        fulltime: 'Full-time Opportunities'
      }
    },
    tabs: {
      opportunities: 'Opportunities',
      clients: 'Past Clients',
      connect: 'Connect'
    },
    opportunities: {
      title: 'Solutions I Offer',
      description: 'Here are some of the services and solutions I can develop for your business. If you have a different need, you can also request a custom quote.',
      labels: {
        new: 'New',
        featured: 'Featured',
        timeAgo: '1 week ago',
        budget: 'Budget:',
        applyNow: 'Request Now',
        requestBudget: 'Request a Quote'
      },
      projects: {
        automationAI: {
          title: 'Process Automation & AI Agents',
          description: 'I implement intelligent agents and automation solutions to optimize processes in small and large companies. Improve efficiency, reduce errors, and free up time for strategic tasks.'
        },
        websiteRedesign: {
          title: 'Corporate Website Redesign',
          description: 'I modernize and optimize corporate websites with professional, responsive design focused on conversion.'
        },
        aiIntegration: {
          title: 'AI Integration for E-commerce',
          description: 'Artificial intelligence solutions for product recommendations, smart search, and personalization in online stores.'
        },
        mobileApp: {
          title: 'Mobile App Development',
          description: 'I develop cross-platform mobile applications for Android and iOS, integrating modern features and advanced user experience.'
        }
      }
    },
    clients: {
      title: 'Clients & Partners',
      companies: {
        vya: {
          name: 'Vya Projects',
          description: 'Development of NFC card reader system with Python for entertainment and access control services. Málaga, Spain.'
        },
        educapro: {
          name: 'EducaPro',
          description: 'Collaboration in the Implementation of a custom e-learning platform for universities and educational centers.'
        },
        finagil: {
          name: 'Finanzas Ágiles',
          description: 'Development of a financial dashboard and automated reporting for SMEs.'
        },
        innovatek: {
          name: 'Innovatek Solutions',
          description: 'Consulting and development of custom tech solutions for IT sector companies.'
        }
      },
      testimonials: {
        title: 'Testimonials',
        sarah: {
          name: 'Sara Serrano',
          role: 'CTO, TechSolutions SL.',
          testimonial: 'Working with Richard was a fantastic experience. He quickly understood our technical needs and delivered innovative solutions that exceeded our expectations.',
          photo: '/images/clients/sarah.jpg'
        }
      },
      submitButton: 'Send Request'
    },
    budget: {
      title: 'Request a Quote',
      description: 'Have a project in mind? Give me some details and I\'ll get back to you with a quote.',
      form: {
        budgetType: 'Rate Type',
        budgetTypeOptions: {
          project: 'Project-Based',
          hourly: 'Hourly',
          retainer: 'Monthly Retainer'
        },
        budgetAmount: 'Budget / Rate',
        budgetAmountPlaceholder: 'e.g., $5000 project, $75/hour, 20 hours/month',
        timeline: 'Estimated Timeline',
        submitButton: 'Send Quote Request'
      }
    },
    collab: {
      title: 'Propose a Collaboration',
      description: 'Got an idea for a project, a talk, or want to create content together? I\'m open to suggestions!',
      form: {
        role: 'Your Role / Company',
        ideaPlaceholder: 'Briefly describe your collaboration idea...',
        submitButton: 'Send Collaboration Proposal'
      }
    },
    contact: {
      title: "Let's Connect",
      description: "Interested in working together? Fill out the form below and I'll get back to you shortly.",
      form: {
        fullName: "Full Name",
        emailAddress: "Email Address",
        companyOrg: "Company/Organization",
        projectType: {
          label: "Project Type",
          options: {
            webDev: "Website Development",
            mobileDev: "Mobile App Development",
            uiDesign: "UI/UX Design",
            consulting: "Technical Consulting",
            other: "Other"
          }
        },
        projectDetails: {
          label: "Project Details",
          placeholder: "Please provide details about your project, timeline, and budget."
        },
        privacyPolicy: "I agree to the privacy policy and terms of service",
        submitButton: "Submit Request"
      }
    }
  },
  surveys: {
    title: "Surveys & Polls",
    progressText: "Step {0} of {1}",
    percentComplete: "{0}% Complete",
    professionalExperience: {
      title: "Professional Experience Survey",
      description: "Please share your professional experience to help us understand our audience better.",
      yearsOfExperience: {
        label: "Years of Experience",
        options: {
          lessThanOne: "Less than 1 year",
          oneToThree: "1-3 years",
          threeToFive: "3-5 years",
          fiveToTen: "5-10 years",
          tenPlus: "10+ years"
        }
      },
      industry: {
        label: "Primary Industry",
        options: {
          technology: "Technology",
          finance: "Finance",
          healthcare: "Healthcare",
          education: "Education",
          retail: "Retail",
          manufacturing: "Manufacturing",
          other: "Other"
        }
      },
      jobRole: {
        label: "Job Role",
        placeholder: "e.g. Software Developer, Designer, Product Manager"
      },
      startupFounder: {
        label: 'What is your main profile?',
        options: {
          founder: 'Startup Founder',
          entrepreneur: 'Entrepreneur',
          technical: 'Technical only',
          other: 'Other'
        }
      }
    },
    technicalSkills: {
      title: "Technical Skills",
      description: "Tell us about your technical expertise and preferences.",
      programmingLanguages: {
        label: "Programming Languages (Select all that apply)",
        options: {
          javascript: "JavaScript",
          python: "Python",
          java: "Java",
          csharp: "C#",
          go: "Go",
          rust: "Rust"
        }
      },
      frontendFrameworks: {
        label: "Frontend Frameworks (Select all that apply)",
        options: {
          react: "React",
          vue: "Vue",
          angular: "Angular",
          svelte: "Svelte"
        }
      },
      aiExperience: {
        label: "Years of Experience with AI/ML",
        scale: {
          start: "0",
          middle: "5",
          end: "10+"
        }
      }
    },
    contentPreferences: {
      title: "Content Preferences",
      description: "Help us deliver the content you're most interested in.",
      topics: {
        label: "What topics are you most interested in? (Select all that apply)",
        options: {
          softwareDev: "Software Development",
          machineLearning: "Machine Learning",
          designSystems: "Design Systems",
          careerDev: "Career Development",
          techNews: "Tech Industry News"
        }
      },
      discovery: {
        label: "How did you find my portfolio?"
      }
    },
    navigation: {
      next: "Next",
      previous: "Previous",
      submit: "Submit Survey"
    },
    feedback: {
      success: 'Survey sent successfully!',
      error: 'An error occurred while sending the survey. Please try again.',
      required: 'Please complete all required fields.',
      consent: 'You must accept the privacy policy to submit the survey.'
    },
    consent: {
      label: 'I have read and accept the privacy policy.',
      link: 'View privacy policy'
    },
    otherSurveys: {
      title: 'Other Surveys',
      surveys: [
        {
          title: 'English Barrier Survey',
          description: 'Has English held you back in your tech career? Help us validate an innovative solution.'
        },
        {
          title: 'Professional Experience Survey',
          description: 'Please share your professional experience to help us understand our audience better.'
        }
        // Las siguientes encuestas están comentadas porque no tienen lógica implementada:
        // {
        //   title: 'Developer Tools Survey 2025',
        //   description: 'Help shape the future of developer tools by sharing your preferences.'
        // },
        // {
        //   title: 'AI Ethics Questionnaire',
        //   description: 'Share your thoughts on the ethical considerations of AI development.'
        // },
        // {
        //   title: 'Conference Topic Suggestions',
        //   description: 'What topics would you like to see covered at upcoming tech conferences?'
        // },
        // {
        //   title: 'Use of AI agents',
        //   description: 'Help us identify the three most costly and repetitive use cases in your work to prototype AI agents useful for your industry.'
        // }
      ]
    },
    aiAgents: {
      title: 'Survey: Use of AI Agents',
      description: 'Identify the three most costly and repetitive use cases in your work. We are looking to prototype AI agents that will truly help you.',
      role: 'Professional Role',
      industry: 'Industry',
      experience: 'Years of Experience',
      painPoint1: '1st most costly/repetitive point',
      painPoint2: '2nd most costly/repetitive point',
      painPoint3: '3rd most costly/repetitive point',
      repetitiveTasks: 'What repetitive tasks do you often perform?',
      aiAgentInterest: 'Would you be interested in an AI agent to automate any of these tasks?',
      keyFunctionality: 'What functionality would be key for you?',
      contact: 'Would you like to be contacted for a free demo or consultation? (email or LinkedIn, optional)',
      country: 'Country',
      consent: 'I have read and accept the privacy policy.',
      submit: 'Submit Survey',
      feedback: {
        success: 'Survey sent successfully!',
        error: 'An error occurred. Please try again.',
        consent: 'You must accept the privacy policy to submit the survey.'
      }
    },
    englishBarrier: {
      title: 'English Barrier Survey',
      role: 'Main role in technology',
      experience: 'Years of experience',
      experienceOptions: {
        lessThanOne: '<1 year',
        oneToThree: '1-3 years',
        threeToFive: '3-5 years',
        fiveToTen: '5-10 years',
        tenPlus: '10+ years'
      },
      englishLevel: 'English level',
      englishLevelOptions: {
        basic: 'Basic',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        fluent: 'Fluent'
      },
      lostOpportunity: 'Have you lost opportunities for not speaking fluent English?',
      lostOpportunityOptions: {
        several: 'Yes, several times',
        once: 'Yes, once',
        worried: 'No, but it worries me',
        never: 'No, never'
      },
      feelings: 'How did you feel in those situations?',
      optional: 'optional',
      wantsToImprove: 'Would you like to improve your professional/tech English?',
      wantsToImproveOptions: {
        urgent: 'Yes, urgently',
        notPriority: 'Yes, but it is not a priority',
        no: 'No, I do not need it'
      },
      appInterest: 'How would you feel about an app with a conversational AI agent, spaced repetition and gamification?',
      appInterestOptions: {
        loveIt: 'I would love to try it',
        interesting: 'Sounds interesting, but I have doubts',
        preferClasses: 'I prefer traditional classes',
        notInterested: 'I am not interested'
      },
      features: 'Which feature would motivate you the most?',
      multiple: 'select several',
      featuresOptions: {
        conversational: 'Conversational AI practice',
        challenges: 'Daily challenges and achievements',
        interviews: 'Technical interview simulations',
        progress: 'Progress tracking and ranking',
        reminders: 'Smart reminders',
        other: 'Other'
      },
      contact: 'Would you like to be contacted to try the MVP?',
      contactHint: 'email or LinkedIn',
      country: 'Country',
      submit: 'Submit Survey',
      sending: 'Sending...',
      success: 'Survey sent successfully!',
      error: 'An error occurred. Please try again.'
    }
  },
  resume: {
    title: "Curriculum Vitae",
    description: "Request access to my complete CV with detailed experience, projects and professional references.",
    requestForm: {
      title: "Request Complete CV",
      email: {
        label: "Email Address",
        placeholder: "your@company.com"
      },
      company: {
        label: "Company/Organization",
        placeholder: "Your company name"
      },
      reason: {
        label: "Reason for Request",
        placeholder: "Briefly describe the reason for your request (job opportunity, collaboration, etc.)"
      },
      privacy: {
        title: "Privacy Policy",
        description: "Your information will be used only to send the requested CV. We do not share personal data with third parties."
      },
      submit: {
        button: "Submit Request",
        sending: "Sending..."
      }
    },
    success: {
      title: "Request Sent Successfully!",
      message: "Thank you for your interest. You will receive the CV shortly in your email.",
      note: "Please check your spam folder if you don't see the email in your inbox."
    }
  },
  newsletter: {
    title: '📬 Stay Updated!',
    description: 'Subscribe to get the latest articles, tutorials, and tech insights directly in your inbox.',
    emailPlaceholder: 'Your email address',
    sending: 'Subscribing...',
    subscribeButton: 'Subscribe',
    success: '🎉 Successfully subscribed! Check your email for confirmation.',
    error: '❌ Oops! Something went wrong. Please try again.',
    legal: 'By subscribing, you agree to receive newsletter emails. You can unsubscribe at any time.'
  },
  humor: {
    title: 'Memes',
    description: 'Tech memes, irony and laughs to survive dev and startup life.',
    featured: [
      {
        title: 'The Resourceful Dev: Startup Edition',
        description: 'When the budget is gone and the deadline was yesterday, creativity becomes your best framework. Diluting the last sprint with "water"? There\'s still MVP left! 😂',
        date: '2025-05-02',
        category: 'Memes',
        slug: 'resourceful-dev-meme',
        imageSrc: '/memes/ingenio-dev-meme.jpg'
      },
      {
        title: 'Privacy? The Ethical Dilemma of Tech Giants',
        description: 'Microsoft, Google, Apple, and Linux on the stand: who spies the most? A meme to reflect (and laugh) about privacy, ethics, and how our data is handled in the digital age.',
        date: '2025-07-10',
        category: 'Memes',
        slug: 'privacy-ethics-giants',
        imageSrc: '/memes/privacidad-etica-gigantes.jpg'
      },
      {
        title: 'Demanding Client, Tiny Budget: The Dev Paradox',
        description: 'When the client wants a Jaguar but the budget is for a Fiat with a dog. A meme about expectations, reality, and the art of surviving tech projects with humor.',
        date: '2025-05-11',
        category: 'Memes',
        slug: 'demanding-client-budget',
        imageSrc: '/memes/cliente-exigente-presupuesto.jpg'
      }
    ]
  },
  portfolio: {
    title: 'Portfolio',
    subtitle: 'A showcase of my featured work and experiments.',
    netflix: {
      title: 'Netflix Clone with Django',
      description: 'I developed a functional Netflix-like platform allowing users to register, log in, browse a movie catalog by category, and simulate streaming. Includes admin panel, Docker packaging, and best development practices.'
    },
    ethereum: {
      title: 'ETHEREUM Dashboard',
      description: 'I developed a dashboard to manage accounts and transactions on the Ethereum network. I used Web3.js to interact with the blockchain node and provide valuable information, with an intuitive interface and real-time data visualization.'
    },
    blockchain: {
      title: 'Blockchain Interoperability Research & Development',
      description: 'I conducted technical research and implemented advanced concepts in smart contract development and blockchain interoperability. I deployed machine learning models to extract valuable data. This work included designing and testing cross-chain solutions, running simulations on local nodes, and analyzing low-level event data and signature-based networks. This project enhanced my expertise in smart contract architecture and multi-chain blockchain infrastructure.'
    },
    solana: {
      title: 'Solana Token Predictor Bot (Telegram bot)',
      description: 'I developed a functional Telegram bot that analyzes token addresses on the Solana network. Users can send the /predict command with a token address, and the bot retrieves on-chain data to estimate early activity and risk levels. The bot handles invalid addresses and provides dynamic insights based on transaction history. It automates a normally manual blockchain analysis process and provides real-time insights to users monitoring new Solana tokens.'
    },
    environment: {
      title: 'Environmental Pollution Forecast',
      description: 'I built a full data science pipeline to forecast sulfur dioxide (SO₂) levels across different monitoring stations. The project included data cleaning, exploratory analysis, variable engineering, and predictive modeling using deep learning with PyTorch. Results were visualized to assess model accuracy and pollutant behavior over time. This project demonstrates my ability to apply data science to real-world environmental monitoring and forecasting challenges.'
    },
    DeepLearning: {
      title: 'DeepLearning Classification of Fruits',
      description: 'I designed and implemented neural network models from scratch using low-level PyTorch APIs to fully understand each step of the training process. This includes forward passes, error calculation, backpropagation, and weight updates. This practical experience provides a solid foundation for adapting deep learning architectures to specific problems and optimizing models effectively for production use. Applied concepts: activation functions, backpropagation, gradient descent, loss calculation, multi-layer networks.'
    },
    portfolio2025: {
      title: 'Personal Portfolio 2025 (This Site)',
      description: 'Development of a professional portfolio with React (Native), Vite, TypeScript, Tailwind CSS, and Supabase. It includes a newsletter subscription, custom chatbot trained for OpenAI, modern and minimalist design, internationalization, and sections for freelance, collaborations, and connections. High degree of customization and full-stack approach to showcase modern web development capabilities.'
    },
    gestionai: {
      title: 'Financial Management with AI',
      description: 'Asset management model implemented in Python using TensorFlow, scikit-learn, and AES encryption. Enables financial decision-making through machine learning techniques to classify asset risk. Includes data loading and preprocessing, neural network training, accuracy evaluation, asset value visualization, and data encryption.'
    },
  },
  about: {
    intro: "I'm a full stack developer, entrepreneur, designer, and digital creator. You can check out my résumé",
    introExtra: "For over 5 years, I've helped companies and startups solve business problems with modern technology: React, TypeScript, Python, AI, blockchain, and automation. I'm passionate about building useful, scalable products with a minimalist design.\n\nI specialize in developer productivity, automation, and AI tools. I've built everything from professional portfolios, bots, dashboards, to financial management models with AI.",
    articles: {
      llms: 'How LLMs are changing development',
      automation: 'Automate your life with AI',
      prompts: 'Practical prompt guide for Claude and GPT'
    },
    projects: {
      portfolio: 'Personal Portfolio 2025: This site, with custom chat, newsletter, internationalization, and freelance/collaboration sections.',
      gestionai: 'Financial Management with AI: Asset model with Python, TensorFlow, and AES encryption.',
      bots: 'Bots & automations: From Telegram to API integrations and no-code platforms.'
    },
    opensource: 'I contribute to open source projects and share code on',
    talks: "I'm open to collaborating and giving talks on AI, tech entrepreneurship, productivity, web development, and online events. Want to invite me to speak? Contact me."
  },
  meeting: {
    title: 'Schedule a Meeting',
    form: {
      date: 'Date',
      time: 'Time',
      message: 'Additional message',
      messagePlaceholder: 'Anything you want to mention before the meeting?',
      submitButton: 'Send Meeting Request',
      close: 'Close',
    },
    success: 'Meeting request sent successfully!',
    error: 'Error sending meeting request.',
    contact: {
      email: 'Contact me directly by email.',
      meeting: 'Book a 1:1 meeting with me.'
    }
  },
  links: {
    categories: {
      social: 'Social & Professional Profiles',
      projects: 'Featured Projects',
      personal: 'Personal Resources',
      resources: 'Recommended Tools & Resources',
      contact: 'Contact'
    },
    social: {
      linkedin: 'Connect with me for professional opportunities and networking.',
      github: 'My main repository for open source projects and experiments.',
      twitter: 'Thoughts, ideas and tech updates.',
      instagram: 'My creative and visual side, projects and tech life.'
    },
    projects: {
      portfolio: 'My professional portfolio and AI experiments.',
      automation: 'Collection of useful bots and automations.'
    },
    personal: {
      blog: 'Articles on development, AI and productivity.',
      newsletter: 'Subscribe to receive exclusive news and resources.'
    },
    resources: {
      zeroToOne: 'Key book for tech entrepreneurs.',
      pragmatic: 'Essential book for developers.',
      fullstack: 'Free modern web development course.',
      vscode: 'My favorite code editor.',
      figma: 'Collaborative design tool.',
      notion: 'Personal productivity tool.'
    },
    contact: {
      email: 'Contact me directly by email.',
      meeting: 'Book a 1:1 meeting with me.'
    }
  },
  projects: {
    subtitle: 'A selection of my most recent and relevant projects.',
    techTitle: 'Technologies',
    viewDemo: 'View Demo',
    viewRepo: 'View Repository',
    status: {
      live: 'Live',
      soon: 'Coming Soon',
      development: 'In Development'
    },
    portfolio2025: {
      title: 'Personal Portfolio 2025 (This Site)',
      description: 'Development of a professional portfolio with React (Native), Vite, TypeScript, Tailwind CSS, and Supabase. It includes a newsletter subscription, custom chatbot trained for OpenAI, modern and minimalist design, internationalization, and sections for freelance, collaborations, and connections. High degree of customization and full-stack approach to showcase modern web development capabilities.'
    },
    englishApp: {
      title: 'Conversational English Solution with AI',
      description: 'An innovative mobile application that uses a conversational AI agent to help tech professionals overcome the English language barrier. It includes gamification, spaced repetition, and simulations of technical interviews to improve fluency and confidence in a professional context.'
    },
    aiMarketplace: {
      title: 'AI Agents Marketplace',
      description: 'A platform for discovering, testing, and deploying pre-trained AI agents to automate repetitive tasks. The marketplace will allow companies to find solutions for specific use cases, from data analysis to process optimization, without needing a dedicated development team.'
    }
  }
};