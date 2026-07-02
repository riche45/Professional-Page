export default {
  nav: {
    home: 'Inicio',
    archives: 'Archivos',
    search: 'Búsqueda',
    otherSites: 'Mis Otros Sitios',
    talks: 'Mis Charlas',
    podcast: 'Podcast',
    resume: 'Currículum',
    darkMode: 'Modo Oscuro',
    connects: 'Conexiones',
    surveys: 'Encuestas',
    categories: 'Categorías',
    projects: 'Proyectos',
  },
  routes: {
    home: '/',
    archives: '/articulos',
    search: '/busqueda',
    podcast: '/podcast',
    resume: '/curriculum',
    connects: '/conexiones',
    surveys: '/encuestas',
    about: '/about',
    projects: '/proyectos',
    portfolio: '/portfolio',
    articles: '/articulos',
    conversations: '/chat',
  },
  categories: {
    articles: 'Artículos',
    howTos: 'Tutoriales',
    humor: 'Memes',
    podcast: 'Podcast Into the Hopper',
    links: 'Enlaces',
    portfolio: 'Portafolio',
    aiServices: 'Servicios IA',
  },
  search: {
    title: 'Búsqueda Global',
    description: 'Encuentra proyectos, artículos, información del perfil y conversaciones',
    placeholder: 'Buscar en todo el contenido...',
    filters: 'Filtros:',
    loading: 'Buscando...',
    noResults: 'No se encontraron resultados',
    types: {
      project: 'Proyecto',
      projects: 'Proyectos',
      article: 'Artículo',
      articles: 'Artículos',
      profile: 'Perfil',
      chat: 'Chat',
      conversations: 'Conversaciones'
    },
    mockData: {
      project1: {
        title: 'Dashboard de E-commerce',
        description: 'Sistema de análisis financiero con React y TypeScript',
        content: 'Dashboard completo para análisis de ventas, inventario y métricas de rendimiento. Implementado con React, TypeScript, y integración con APIs de pago.'
      },
      article1: {
        title: 'Cómo los Desarrolladores están Usando LLMs',
        description: 'Explorando las formas innovadoras en que los desarrolladores aprovechan los modelos de lenguaje',
        content: 'Los desarrolladores están adoptando LLMs para automatizar tareas, generar código y mejorar la productividad. Este artículo explora las mejores prácticas.'
      },
      profile1: {
        title: 'Experiencia Profesional',
        description: 'Más de 5 años en desarrollo de software',
        content: 'Desarrollador full-stack con experiencia en React, TypeScript, Node.js, Python. Especializado en soluciones de AI/ML y desarrollo web moderno.'
      },
      chat1: {
        title: 'Conversación sobre proyectos',
        description: 'Discusión sobre desarrollo de aplicaciones móviles',
        content: 'Usuario preguntó sobre experiencia en React Native y desarrollo móvil. Conversación sobre mejores prácticas y herramientas.'
      },
      project2: {
        title: 'App de Monitoreo de Salud',
        description: 'Aplicación móvil para monitoreo de salud',
        content: 'App desarrollada con React Native para tracking de actividad física, monitoreo de signos vitales y sincronización con dispositivos wearables.'
      }
    },
    contact: {
      email: 'Contáctame directamente por correo.',
      meeting: 'Reserva una reunión 1:1 conmigo.'
    }
  },
  errors: {
    pageNotFound: 'Página No Encontrada',
  },
  accessibility: {
    scrollLeft: 'Desplazar a la izquierda',
    scrollRight: 'Desplazar a la derecha',
  },
  footer: {
    copyright: '© 2026',
    builtWith: 'Construido con',
    theme: 'Tema',
    designedBy: 'diseñado por',
  },
  profile: {
    greeting: '¡Hola, soy Richard García!',
    description: 'emprendedor,\n diseñador,\ncreador,\ndev.',
    experience: 'Profesional experimentado en resolver problemas de negocio con soluciones innovadoras en dominios como finanzas, tecnología, salud y educación.',
  },
  chat: {
    welcome: "¡Hola! 👋 Soy el asistente con IA del portafolio de Richard. Soy un **agente** (LangGraph + RAG) que responde en tiempo real sobre:\n\n🤖 Sus servicios de integración de IA (agentes, RAG, pipelines)\n📊 Su experiencia y proyectos destacados\n💻 Su stack y habilidades técnicas\n💰 Tarifas y modelos de colaboración\n🐙 Sus repositorios de GitHub (consulta en vivo)\n\nPregúntame lo que quieras y, si te da curiosidad, pulsa \"Ver razonamiento\" para asomarte a cómo trabajo por dentro. ¿En qué puedo ayudarte?",
    input_placeholder: "Escribe tu mensaje aquí...",
    assistant_status: "Asistente personal",
    error_message: "Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.",
    rate_limit_error: "Has excedido el límite de mensajes por minuto. Por favor, espera un momento.",
    auth_error: "Error de autenticación. Por favor, contacta al administrador.",
    openai_rate_limit: "Se ha excedido el límite de la API de OpenAI. Por favor, intenta más tarde.",
    server_error: "Error en el servidor. Por favor, intenta más tarde.",
    empty_message: "El mensaje no puede estar vacío.",
    invalid_response: "No se recibió una respuesta válida del servidor.",
    show_reasoning: "Ver razonamiento",
    hide_reasoning: "Ocultar razonamiento",
    reasoning_model: "modelo",
    tool_search_portfolio: "Búsqueda en base de conocimiento (RAG)",
    tool_github_repos: "Consulta a GitHub (API en vivo)",
    responses: {
      experience: 'Tengo más de 5 años de experiencia en desarrollo de software, trabajando en diversos sectores como finanzas, tecnología, salud y educación. Me especializo en desarrollo web moderno con React, TypeScript, Python para análisis de datos, y tecnologías blockchain como Solidity, Besu y Web3.js.',
      projects: 'He trabajado en múltiples proyectos incluyendo dashboards empresariales, aplicaciones móviles de salud, sistemas de e-learning, plataformas de análisis financiero y aplicaciones descentralizadas (dApps). Puedes ver algunos de mis trabajos en la sección de artículos y categorías.',
      tech: 'Mi stack tecnológico incluye React, TypeScript, Node.js, Python para análisis de datos, PostgreSQL, MongoDB, y herramientas de AI/ML. También trabajo con tecnologías blockchain como Solidity, Besu, Ethereum y Web3.js, además de frameworks como Next.js, Express y Django, y tecnologías cloud como AWS y Docker.',
      collaboration: 'Estoy disponible para proyectos freelance, consultoría técnica y colaboraciones. Puedes contactarme a través de la sección "Conexiones" donde encontrarás más información sobre oportunidades actuales y cómo trabajar conmigo.',
      articles: 'Escribo regularmente sobre desarrollo de software, inteligencia artificial, blockchain y tecnologías emergentes. Mis artículos recientes incluyen temas como el uso de LLMs en desarrollo, integración de AI en e-commerce, y análisis de datos con Python.',
      greeting: '¡Hola! Es un placer conocerte. Soy un desarrollador apasionado por crear soluciones innovadoras. ¿Te interesa conocer más sobre algún proyecto específico o mi experiencia en alguna tecnología en particular?',
      default: 'Gracias por tu pregunta. Como desarrollador full-stack con experiencia en AI/ML y blockchain, estoy aquí para ayudarte con cualquier consulta sobre desarrollo de software, proyectos tecnológicos o oportunidades de colaboración. ¿Hay algo específico que te gustaría saber?'
    }
  },
  language: {
    en: 'Inglés',
    es: 'Español',
  },
  aiServices: {
    title: 'Servicios de IA',
    subtitle: 'Especialista en desarrollo de agentes de IA empresariales',
    description: 'Experto en implementación de soluciones de inteligencia artificial optimizadas y escalables. Desarrollo de chatbots personalizados, automatización empresarial y consultoría estratégica en IA.',
    services: {
      training: {
        title: 'Desarrollo de Chatbots Personalizados',
        description: 'Creo agentes de IA específicos para tu negocio usando técnicas avanzadas de machine learning y procesamiento de lenguaje natural.',
        price: '$500 - $2,000',
        duration: '2-4 semanas'
      },
      consulting: {
        title: 'Consultoría Estratégica en IA',
        description: 'Implementación y optimización de soluciones de IA para pequeñas y medianas empresas.',
        price: '$100 - $300/hora',
        duration: 'Flexible'
      },
      automation: {
        title: 'Automatización con IA Conversacional',
        description: 'Sistemas completos de atención al cliente automatizada con inteligencia artificial avanzada.',
        price: '$1,000 - $5,000',
        duration: '3-6 semanas'
      },
      courses: {
        title: 'Formación: "IA Empresarial Accesible"',
        description: 'Capacitación en implementación de IA con metodologías eficientes y recursos optimizados.',
        price: '$50 - $500',
        duration: 'Auto-dirigido'
      }
    },
    products: {
      title: 'Productos Digitales',
      templates: {
        title: 'Templates de Agentes Especializados',
        description: 'Plantillas pre-configuradas para diferentes industrias'
      },
      scripts: {
        title: 'Scripts de Entrenamiento Optimizados',
        description: 'Código optimizado listo para entrenar'
      },
      chatbots: {
        title: 'Chatbots White-Label',
        description: 'Soluciones listas para implementar en empresas'
      },
      saas: {
        title: 'Plataforma: "Entrenamiento IA Rápido"',
        description: 'Herramienta no-code para desarrollo ágil de agentes'
      }
    },
    localServices: {
      title: 'Servicios de IA Local',
      subtitle: 'Tu Bot, tu servidor, tus datos',
      description: 'Implementación de agentes de IA que funcionan completamente en tus servidores. Máxima privacidad, cero dependencias externas.',
      advantages: {
        title: 'Ventajas de IA Local',
        privacy: {
          title: 'Privacidad Total',
          description: 'Tus datos nunca salen de tu infraestructura'
        },
        costs: {
          title: 'Costos Predecibles',
          description: 'Sin sorpresas en facturación por tokens'
        },
        speed: {
          title: 'Velocidad Óptima',
          description: 'Sin latencia de APIs externas'
        },
        compliance: {
          title: 'Cumplimiento Normativo',
          description: 'HIPAA, GDPR y otras regulaciones'
        }
      },
      useCases: {
        title: 'Casos de Uso Empresariales',
        restaurant: {
          title: 'Restaurantes/Cafeterías',
          service: 'Chatbot para pedidos y reservas',
          price: '$200-500/mes',
          benefit: 'Control total del sistema de pedidos'
        },
        medical: {
          title: 'Consultorios Médicos',
          service: 'Asistente para citas e información',
          price: '$300-800/mes',
          benefit: 'HIPAA compliant, datos no salen'
        },
        accounting: {
          title: 'Oficinas de Contadores',
          service: 'Asistente para consultas fiscales',
          price: '$400-1000/mes',
          benefit: 'Información confidencial, 100% privada'
        },
        realestate: {
          title: 'Inmobiliarias',
          service: 'Asistente para propiedades',
          price: '$250-600/mes',
          benefit: 'Conoce tu inventario, disponible 24/7'
        },
        dental: {
          title: 'Clínicas Dentales',
          service: 'Gestión de citas y recordatorios',
          price: '$200-500/mes',
          benefit: 'Reduce no-shows, optimiza agenda'
        },
        fitness: {
          title: 'Gimnasios/Entrenadores',
          service: 'Planes de entrenamiento personalizados',
          price: '$300-700/mes',
          benefit: 'Asesoría 24/7, seguimiento automático'
        },
        startup: {
          title: 'Startups Tech',
          service: 'Asistente técnico y soporte',
          price: '$800-2000/mes',
          benefit: 'Código abierto, personalización total'
        },
        financial: {
          title: 'Entidades Financieras',
          service: 'Análisis y consultas regulatorias',
          price: '$1500-5000/mes',
          benefit: 'Cumplimiento SOX, datos ultra-seguros'
        },
        legal: {
          title: 'Bufetes de Abogados',
          service: 'Investigación legal y documentos',
          price: '$1000-3000/mes',
          benefit: 'Confidencialidad absoluta, sin terceros'
        }
      },
      deployment: {
        title: 'Opciones de Implementación',
        local: {
          title: 'Servidor Local',
          description: 'Instalación en tu hardware existente',
          price: 'Desde $500 setup'
        },
        cloud: {
          title: 'Nube Privada',
          description: 'VPS dedicado con acceso exclusivo',
          price: 'Desde $300/mes'
        },
        hybrid: {
          title: 'Híbrido',
          description: 'Combinación de local + API según necesidad',
          price: 'Personalizado'
        }
      }
    },
    cta: {
      title: '¿Listo para implementar IA en tu negocio?',
      description: 'Contacta conmigo para una consulta gratuita de 30 minutos',
      button: 'Consulta Gratuita'
    }
  },
  cta: {
    connect: 'Conecta conmigo',
    hireMe: 'Contrátame',
    viewProject: 'Ver proyecto',
    readMore: 'Leer más',
  },
  podcast: {
    title: 'Podcast Tech Talks',
    subtitle: 'Conversaciones sobre desarrollo, innovación y experiencias en el mundo tech',
    comingSoon: {
      title: '🎙️ Próximamente',
      description: 'Estamos preparando contenido increíble para compartir contigo'
    },
    suggestTopic: {
      title: 'Sugiere un Tema',
      description: '¿Qué te gustaría escuchar? Comparte tus ideas y ayúdanos a crear contenido relevante.',
      placeholder: 'Describe el tema que te gustaría que cubramos...',
      submitButton: 'Enviar Sugerencia',
      successMessage: '¡Gracias por tu sugerencia! La revisaremos pronto.'
    },
    notifications: {
      title: 'Notificaciones',
      description: 'Sé el primero en saber cuando lancemos el podcast y recibe actualizaciones exclusivas.',
      emailPlaceholder: 'tu@email.com',
      subscribeButton: 'Suscribirse',
      successTitle: '¡Suscrito!',
      successMessage: 'Te notificaremos cuando el podcast esté disponible.'
    },
    suggestedTopics: {
      title: 'Temas Propuestos por la Comunidad',
      topics: [
        {
          title: 'Desarrollo Web Moderno',
          description: 'React, TypeScript, y las últimas tendencias en frontend',
          category: 'Desarrollo'
        },
        {
          title: 'Desarrollo Móvil con React Native',
          description: 'Experiencias y mejores prácticas en desarrollo móvil',
          category: 'Mobile'
        },
        {
          title: 'Emprendimiento en Tech',
          description: 'Cómo iniciar y escalar startups tecnológicas',
          category: 'Emprendimiento'
        },
        {
          title: 'Inteligencia Artificial en el Desarrollo',
          description: 'Cómo la IA está transformando la programación',
          category: 'AI/ML'
        },
        {
          title: 'Experiencias como Freelancer',
          description: 'Consejos y lecciones aprendidas trabajando independiente',
          category: 'Carrera'
        },
        {
          title: 'Innovación y Tendencias Tech',
          description: 'Las tecnologías emergentes que están cambiando el mundo',
          category: 'Innovación'
        }
      ],
      votingInfo: 'Los temas más votados serán priorizados para los primeros episodios'
    }
  },
  articles: {
    title: 'Artículos',
    description: 'Explorando ideas, compartiendo conocimiento y discutiendo tecnología.',
    filters: {
      title: 'Filtrar por categoría',
      all: 'Todos',
      articles: 'Artículos',
      howTos: 'Tutoriales',
      reviews: 'Reviews'
    },
    featured: [
      {
        title: '¿Cómo los LLMs están (literalmente) salvando mi vida como dev? 🤖',
        description: 'Un vistazo honesto y algo irónico a cómo los modelos de lenguaje están cambiando la forma en que programamos. Spoiler: ya no memorizo documentación 😅',
        date: '2024-03-15',
        category: 'Artículos',
        slug: 'llms-dev-life-savior',
        imageSrc: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Agentes de IA: El año en que cambiaron nuestra vida profesional',
        description: '2025 es el año de los agentes de IA. Descubre cómo estos asistentes inteligentes están revolucionando la productividad, la creatividad y la toma de decisiones en el trabajo y la vida diaria.',
        date: '2025-06-04',
        category: 'Artículos',
        slug: 'agentes-ia-impacto-2025',
        imageSrc: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Tesla: ¿Modelos feos pero con futuro brillante?',
        description: 'Un repaso irónico a los diseños de Tesla: poco atractivos, pero con un potencial energético que podría revolucionar la industria. ¿Veremos algún día un Tesla realmente bonito?',
        date: '2024-07-01',
        category: 'Reseñas',
        slug: 'tesla-feos-potencial',
        imageSrc: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'DeepSeek: ¿El nuevo jugador que cambiará la guerra de la IA?',
        description: 'La llegada de DeepSeek (open source) sacude el tablero global de la inteligencia artificial. ¿China o EEUU? ¿OpenAI, Claude, Google o DeepSeek? Analizamos el impacto y el futuro del dominio tecnológico.',
        date: '2025-02-10',
        category: 'Artículos',
        slug: 'deepseek-guerra-ia',
        imageSrc: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: '¿Founder o emprendedor? El dilema existencial de la startup',
        description: '¿Para fundar una startup primero hay que ser emprendedor, o basta con tener LinkedIn y una idea? El eterno dilema del huevo y la gallina, versión tech.',
        date: '2025-06-17',
        category: 'Artículos',
        slug: 'founder-vs-emprendedor',
        imageSrc: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'De los 90 minutos a "TOTAL 90": Construyendo una App de Predicciones de Fútbol con IA ⚽️🧠',
        description: 'Este verano me propuse unir mi profesión con mi hobby: el fútbol. El resultado: una app de predicciones impulsada por IA que combina Machine Learning, APIs deportivas y visualizaciones interactivas para entender los partidos más allá de la intuición.',
        date: '2025-08-28',
        category: 'Artículos',
        slug: 'total-90-football-ai-app',
        imageSrc: '/images/articles/total90/total90-1.png'
      },
      {
        title: 'Detección de COVID-19 con IA: Cuando la Enfermedad se Convirtió en Código',
        description: 'Una experiencia personal con el COVID-19 me llevó a desarrollar un sistema de detección con Deep Learning que alcanzó un 99.5% de sensibilidad. Esta es la historia de cómo el dolor se transformó en un proyecto con impacto real.',
        date: '2026-02-13',
        category: 'Artículos',
        slug: 'deteccion-covid19-ia',
        imageSrc: 'https://images.pexels.com/photos/3992933/pexels-photo-3992933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  tutorials: {
    title: 'Tutoriales',
    description: 'Guías prácticas y tutoriales paso a paso para desarrolladores.',
    featured: [
      {
        title: 'Escribiendo un Libro de Prompts con Claude',
        description: 'Mi experiencia colaborando con IA para crear una guía de prompts que cualquier persona pueda usar, desde recetas de cocina hasta soluciones para errores críticos en el backend.',
        date: '18 Ene 2025',
        category: 'Tutoriales',
        slug: 'writing-prompts-book-claude',
        imageSrc: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'Automatiza tu vida: Cómo crear tu primer bot personal con IA',
        description: 'Aprende paso a paso a crear un bot personal con IA que te ayude a organizar tareas, enviar recordatorios y hasta responder mensajes. ¡Ideal para quienes quieren dar el salto a la automatización sin ser expertos!',
        date: '2025-04-10',
        category: 'Tutoriales',
        slug: 'crear-bot-personal-ia',
        imageSrc: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      },
      {
        title: 'De la idea al MVP: Cómo lanzar tu propia startup con intención',
        description: 'Descubre los pasos clave para pasar de una simple hipótesis a un producto mínimo viable (MVP). Aprende a validar tu idea, construir rápido y lanzar como un founder intencional.',
        date: '2025-05-01',
        category: 'Tutoriales',
        slug: 'lanzar-startup-intencional',
        imageSrc: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
  },
  connects: {
    title: 'Conexiones',
    connectionHub: {
      title: 'Centro de Conexiones',
      description: 'Conéctate conmigo para oportunidades freelance, colaboraciones, o simplemente para charlar sobre tecnología.',
      buttons: {
        connectGlobally: 'Conectar Globalmente',
        scheduleMeeting: 'Agendar Reunión',
        joinCommunity: 'Unirse a la Comunidad',
        proposeCollab: 'Proponer Colaboración'
      }
    },
    availableFor: {
      title: 'Disponible Para:',
      items: {
        freelance: 'Proyectos Freelance',
        consulting: 'Consultoría Técnica',
        speaking: 'Charlas y Conferencias',
        fulltime: 'Oportunidades de Tiempo Completo'
      }
    },
    tabs: {
      opportunities: 'Oportunidades',
      clients: 'Clientes Anteriores',
      connect: 'Conectar'
    },
    opportunities: {
      title: 'Soluciones que ofrezco',
      description: 'Estos son algunos de los servicios y soluciones que puedo desarrollar para tu empresa. Si tienes una necesidad diferente, también puedes solicitar un presupuesto personalizado.',
      labels: {
        new: 'Nuevo',
        featured: 'Destacado',
        timeAgo: 'hace 1 semana',
        budget: 'Presupuesto:',
        applyNow: 'Solicitar Ahora',
        requestBudget: 'Solicitar Presupuesto'
      },
      projects: {
        automationAI: {
          title: 'Automatización de Procesos y Agentes de IA',
          description: 'Implemento agentes inteligentes y soluciones de automatización para optimizar procesos en pequeñas y grandes empresas. Mejora la eficiencia, reduce errores y libera tiempo para tareas estratégicas.'
        },
        websiteRedesign: {
          title: 'Rediseño Web Corporativo',
          description: 'Modernizo y optimizo sitios web corporativos con diseño profesional, responsive y enfocado en conversión.'
        },
        aiIntegration: {
          title: 'Integración de IA para E-commerce',
          description: 'Soluciones de inteligencia artificial para recomendaciones de productos, búsqueda inteligente y personalización en tiendas online.'
        },
        mobileApp: {
          title: 'Desarrollo de App Móvil',
          description: 'Desarrollo aplicaciones móviles multiplataforma para Android y iOS, integrando funcionalidades modernas y experiencia de usuario avanzada.'
        }
      }
    },
    clients: {
      title: 'Clientes y Socios',
      companies: {
        vya: {
          name: 'Vya Projects',
          description: 'Desarrollo de sistema de lectores NFC con Python para servicios de entretenimiento y control de acceso. Málaga, España.'
        },
        educapro: {
          name: 'EducaPro',
          description: 'Colaboracion en la Implementación de plataforma e-learning personalizada para universidades y centros educativos.'
        },
        finagil: {
          name: 'Finanzas Ágiles',
          description: 'Desarrollo de dashboard financiero y automatización de reportes para pymes.'
        },
        innovatek: {
          name: 'Innovatek Solutions',
          description: 'Consultoría y desarrollo de soluciones tecnológicas a medida para empresas del sector IT.'
        }
      },
      testimonials: {
        title: 'Testimonios',
        sarah: {
          name: 'Sara Serrano',
          role: 'CTO, SolucionesTech SL.',
          testimonial: 'Trabajar con Richard fue una experiencia excelente. Su capacidad para entender nuestras necesidades técnicas y entregar soluciones innovadoras superó nuestras expectativas.',
          photo: '/images/clients/sarah.jpg'
        }
      },
      submitButton: 'Enviar Solicitud'
    },
    budget: {
      title: 'Solicitar Presupuesto',
      description: '¿Tienes un proyecto en mente? Dame algunos detalles y te responderé con una cotización.',
      form: {
        budgetType: 'Tipo de Tarifa',
        budgetTypeOptions: {
          project: 'Por Proyecto',
          hourly: 'Por Hora',
          retainer: 'Retainer Mensual'
        },
        budgetAmount: 'Presupuesto / Tarifa',
        budgetAmountPlaceholder: 'ej. $5000 proyecto, $75/hora, 20 horas/mes',
        timeline: 'Tiempo Estimado',
        submitButton: 'Enviar Solicitud de Presupuesto'
      }
    },
    collab: {
      title: 'Proponer una Colaboración',
      description: '¿Tienes una idea para un proyecto, una charla, o quieres que creemos contenido juntos? ¡Estoy abierto a sugerencias!',
      form: {
        role: 'Tu Rol / Empresa',
        ideaPlaceholder: 'Describe brevemente tu idea de colaboración...',
        submitButton: 'Enviar Propuesta de Colaboración'
      }
    }
  },
  surveys: {
    title: "Encuestas y Sondeos",
    progressText: "Paso {0} de {1}",
    percentComplete: "{0}% Completado",
    professionalExperience: {
      title: "Encuesta de Experiencia Profesional",
      description: "Por favor, comparte tu experiencia profesional para ayudarnos a entender mejor a nuestra audiencia.",
      yearsOfExperience: {
        label: "Años de Experiencia",
        options: {
          lessThanOne: "Menos de 1 año",
          oneToThree: "1-3 años",
          threeToFive: "3-5 años",
          fiveToTen: "5-10 años",
          tenPlus: "Más de 10 años"
        }
      },
      industry: {
        label: "Industria Principal",
        options: {
          technology: "Tecnología",
          finance: "Finanzas",
          healthcare: "Salud",
          education: "Educación",
          retail: "Comercio Minorista",
          manufacturing: "Manufactura",
          other: "Otra"
        }
      },
      jobRole: {
        label: "Puesto de Trabajo",
        placeholder: "ej. Desarrollador de Software, Diseñador, Gerente de Producto"
      },
      startupFounder: {
        label: '¿Cuál es tu perfil principal?',
        options: {
          founder: 'Fundador/a de startup',
          entrepreneur: 'Emprendedor/a',
          technical: 'Solo técnico',
          other: 'Otro'
        }
      }
    },
    technicalSkills: {
      title: "Habilidades Técnicas",
      description: "Cuéntanos sobre tu experiencia técnica y preferencias.",
      programmingLanguages: {
        label: "Lenguajes de Programación (Selecciona todos los que apliquen)",
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
        label: "Frameworks Frontend (Selecciona todos los que apliquen)",
        options: {
          react: "React",
          vue: "Vue",
          angular: "Angular",
          svelte: "Svelte"
        }
      },
      aiExperience: {
        label: "Años de Experiencia con IA/ML",
        scale: {
          start: "0",
          middle: "5",
          end: "10+"
        }
      }
    },
    contentPreferences: {
      title: "Preferencias de Contenido",
      description: "Ayúdanos a entregar el contenido que más te interesa.",
      topics: {
        label: "¿Qué temas te interesan más? (Selecciona todos los que apliquen)",
        options: {
          softwareDev: "Desarrollo de Software",
          machineLearning: "Machine Learning",
          designSystems: "Sistemas de Diseño",
          careerDev: "Desarrollo Profesional",
          techNews: "Noticias de la Industria Tech"
        }
      },
      discovery: {
        label: "¿Cómo encontraste mi portafolio?"
      }
    },
    navigation: {
      next: "Siguiente",
      previous: "Anterior",
      submit: "Enviar Encuesta"
    },
    feedback: {
      success: '¡Encuesta enviada con éxito!',
      error: 'Ocurrió un error al enviar la encuesta. Intenta de nuevo.',
      required: 'Por favor, completa todos los campos obligatorios.',
      consent: 'Debes aceptar la política de privacidad para enviar la encuesta.'
    },
    consent: {
      label: 'He leído y acepto la política de privacidad.',
      link: 'Ver política de privacidad'
    },
    otherSurveys: {
      title: 'Otras Encuestas',
      surveys: [
        {
          title: 'Encuesta: Barreras de Fluidez en Inglés en Tech',
          description: '¿El inglés te ha frenado en tu carrera tech? Ayúdanos a validar una solución innovadora.'
        },
        {
          title: 'Encuesta de Experiencia Profesional',
          description: 'Por favor, comparte tu experiencia profesional para ayudarnos a entender mejor a nuestra audiencia.'
        }
      ]
    },
    aiAgents: {
      title: 'Encuesta: Uso de Agentes de IA.',
      description: 'Identifica los 3 casos de uso más costosos y repetitivos en tu trabajo. Buscamos crear prototipos de agentes de IA que realmente te ayuden.',
      role: 'Rol profesional',
      industry: 'Industria',
      experience: 'Años de experiencia',
      painPoint1: '1er punto más costoso/repetitivo',
      painPoint2: '2º punto más costoso/repetitivo',
      painPoint3: '3er punto más costoso/repetitivo',
      repetitiveTasks: '¿Qué tareas repetitivas realizas a menudo?',
      aiAgentInterest: '¿Te interesaría un agente de IA para automatizar alguna de estas tareas?',
      keyFunctionality: '¿Qué funcionalidad sería clave para ti?',
      contact: '¿Te gustaría ser contactado para una demo o asesoría gratuita? (email o LinkedIn, opcional)',
      country: 'País',
      consent: 'He leído y acepto la política de privacidad.',
      submit: 'Enviar Encuesta',
      feedback: {
        success: '¡Encuesta enviada con éxito!',
        error: 'Ocurrió un error. Intenta de nuevo.',
        consent: 'Debes aceptar la política de privacidad para enviar la encuesta.'
      }
    },
    englishBarrier: {
      title: 'Encuesta: Barreras de Fluidez en Inglés en Tech',
      role: 'Rol principal en tecnología',
      experience: 'Años de experiencia',
      experienceOptions: {
        lessThanOne: '<1 año',
        oneToThree: '1-3 años',
        threeToFive: '3-5 años',
        fiveToTen: '5-10 años',
        tenPlus: '10+ años'
      },
      englishLevel: 'Nivel de inglés',
      englishLevelOptions: {
        basic: 'Básico',
        intermediate: 'Intermedio',
        advanced: 'Avanzado',
        fluent: 'Fluido'
      },
      lostOpportunity: '¿Has perdido oportunidades por no hablar inglés fluido?',
      lostOpportunityOptions: {
        several: 'Sí, varias veces',
        once: 'Sí, alguna vez',
        worried: 'No, pero me preocupa',
        never: 'No, nunca'
      },
      feelings: '¿Cómo te sentiste en esas situaciones?',
      optional: 'opcional',
      wantsToImprove: '¿Te gustaría mejorar tu inglés profesional/tech?',
      wantsToImproveOptions: {
        urgent: 'Sí, urgente',
        notPriority: 'Sí, pero no es prioridad',
        no: 'No, no lo necesito'
      },
      appInterest: '¿Qué te parecería una app con agente IA conversacional, repetición espaciada y gamificación?',
      appInterestOptions: {
        loveIt: 'Me encantaría probarla',
        interesting: 'Suena interesante, pero tengo dudas',
        preferClasses: 'Prefiero clases tradicionales',
        notInterested: 'No me interesa'
      },
      features: '¿Qué funcionalidad te motivaría más?',
      multiple: 'elige varias',
      featuresOptions: {
        conversational: 'Práctica conversacional IA',
        challenges: 'Retos diarios y logros',
        interviews: 'Simulaciones de entrevistas técnicas',
        progress: 'Seguimiento de progreso y ranking',
        reminders: 'Recordatorios inteligentes',
        other: 'Otro'
      },
      contact: '¿Te gustaría ser contactado para probar el MVP?',
      contactHint: 'email o LinkedIn',
      country: 'País',
      submit: 'Enviar Encuesta',
      sending: 'Enviando...',
      success: '¡Encuesta enviada con éxito!',
      error: 'Ocurrió un error. Intenta de nuevo.'
    }
  },
  resume: {
    title: "Currículum Vitae",
    description: "Solicita acceso a mi CV completo con experiencia detallada, proyectos y referencias profesionales.",
    requestForm: {
      title: "Solicitar CV Completo",
      email: {
        label: "Correo Electrónico",
        placeholder: "tu@empresa.com"
      },
      company: {
        label: "Empresa/Organización",
        placeholder: "Nombre de tu empresa"
      },
      reason: {
        label: "Motivo de la solicitud",
        placeholder: "Describe brevemente el motivo de tu solicitud (oportunidad laboral, colaboración, etc.)"
      },
      privacy: {
        title: "Política de Privacidad",
        description: "Tu información será utilizada únicamente para enviar el CV solicitado. No compartimos datos personales con terceros."
      },
      submit: {
        button: "Enviar Solicitud",
        sending: "Enviando..."
      }
    },
    success: {
      title: "¡Solicitud Enviada con Éxito!",
      message: "Gracias por tu interés. Recibirás el CV en breve en tu correo electrónico.",
      note: "Por favor, revisa tu carpeta de spam si no ves el correo en tu bandeja de entrada."
    }
  },
  newsletter: {
    title: '📬 ¡Mantente Actualizado!',
    description: 'Suscríbete para recibir los últimos artículos, tutoriales y conocimientos tecnológicos directamente en tu bandeja de entrada.',
    emailPlaceholder: 'Tu dirección de email',
    sending: 'Suscribiendo...',
    subscribeButton: 'Suscribirse',
    success: '🎉 ¡Suscripción exitosa! Revisa tu email para la confirmación.',
    error: '❌ ¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.',
    legal: 'Al suscribirte, aceptas recibir emails de newsletter. Puedes darte de baja en cualquier momento.'
  },
  humor: {
    title: 'Memes',
    description: 'Memes, ironía y risas tech para sobrevivir al mundo dev y startups.',
    featured: [
      {
        title: 'El ingenio del dev escaso de recursos',
        description: 'Cuando el presupuesto es mínimo y el deadline es ayer, la creatividad se convierte en tu mejor framework. ¿Diluir el último sprint con "agua"? ¡Aún queda MVP! 😂',
        date: '2025-05-02',
        category: 'Memes',
        slug: 'ingenio-dev-meme',
        imageSrc: '/memes/ingenio-dev-meme.jpg'
      },
      {
        title: '¿Privacidad? El dilema ético de los gigantes tech',
        description: 'Microsoft, Google, Apple y Linux en el banquillo: ¿quién espía más? Un meme para reflexionar (y reír) sobre la privacidad, la ética y el manejo de nuestros datos en la era digital.',
        date: '2025-07-10',
        category: 'Memes',
        slug: 'privacidad-etica-gigantes',
        imageSrc: '/memes/privacidad-etica-gigantes.jpg'
      },
      {
        title: 'Cliente exigente, presupuesto mini: la paradoja dev',
        description: 'Cuando el cliente pide un Jaguar pero el presupuesto da para un Fiat con perro. Un meme sobre las expectativas, la realidad y el arte de sobrevivir a los proyectos tech con humor.',
        date: '2025-05-11',
        category: 'Memes',
        slug: 'cliente-exigente-presupuesto',
        imageSrc: '/memes/cliente-exigente-presupuesto.jpg'
      }
    ]
  },
  portfolio: {
    title: 'Portafolio',
    subtitle: 'Una muestra de mis trabajos y experimentos destacados.',
    netflix: {
      title: 'Clon de Netflix con Django',
      description: 'Desarrollé una plataforma funcional tipo Netflix que permite a los usuarios registrarse, iniciar sesión, explorar un catálogo de películas por categoría y simular la reproducción de contenido en streaming. Incluye panel de administración, Docker y buenas prácticas de desarrollo.'
    },
    ethereum: {
      title: 'Panel de control de ETHEREUM',
      description: 'Desarrollé un panel de control para gestionar cuentas y transacciones en la red Ethereum, Utilicé Web3.js para interactuar con el nodo de la blockchain y proporcionar información valiosa, con interfaz intuitiva y visualización de datos en tiempo real.'
    },
    blockchain: {
      title: 'Investigación y desarrollo en interoperabilidad de blockchain',
      description: 'Realicé investigación técnica e implementación de conceptos avanzados en el desarrollo de contratos inteligentes e interoperabilidad blockchain. Implemente modelos de machine learning para la obtencion de datos valiosos, El trabajo incluyó el diseño y la prueba de soluciones entre cadenas, la ejecución de simulaciones en nodos locales y el análisis de datos de eventos de bajo nivel y redes basadas en firmas. Este proyecto mejoró mi experiencia en arquitectura de contratos inteligentes e infraestructura blockchain multicadena.'
    },
    solana: {
      title: 'Bot predictor de tokens Solana (bot de Telegram)',
      description: 'Desarrollé un bot funcional de Telegram que analiza las direcciones de tokens en la red Solana. Los usuarios pueden enviar el comando /predict con una dirección de token, y el bot recupera datos en cadena para estimar la actividad temprana y el nivel de riesgo. El bot gestiona las direcciones no válidas y proporciona información dinámica basada en el historial de transacciones. Automatiza un proceso de análisis de blockchain que normalmente es manual y proporciona información en tiempo real a los usuarios que monitorean los nuevos tokens de Solana.'
    },
    environment: {
      title: 'Pronóstico de la contaminación ambiental',
      description: 'Desarrollé un proceso completo de ciencia de datos para pronosticar los niveles de dióxido de azufre (SO₂) en diferentes estaciones de monitoreo. El proyecto incluyó la limpieza de datos, el análisis exploratorio, la ingeniería de variables y el modelado predictivo mediante aprendizaje profundo con PyTorch. Los resultados se visualizaron para evaluar la precisión del modelo y el comportamiento de los contaminantes a lo largo del tiempo. Este proyecto demuestra mi capacidad para aplicar la ciencia de datos a los desafíos reales de monitoreo y pronóstico ambiental.'
    },
    DeepLearning: {
      title: 'DeepLearning Clasificacion de Frutas',
      description: 'Diseñé e implementé modelos de redes neuronales desde cero utilizando las API de PyTorch de bajo nivel para comprender a fondo cada paso del entrenamiento. Esto incluye pases hacia adelante, cálculo de errores, retropropagación y actualizaciones de pesos. Esta experiencia práctica me proporciona bases sólidas para adaptar arquitecturas de aprendizaje profundo a problemas específicos y optimizar los modelos eficazmente para su uso en producción. Conceptos aplicados: funciones de activación, retropropagación, descenso de gradiente, cálculo de pérdidas, redes multicapa.'
    },
    portfolio2025: {
      title: 'Portafolio Personal 2025 (Este Sitio)',
      description: 'Desarrollo de un portafolio profesional con React (Native), Vite, TypeScript, Tailwind CSS y Supabase. Incluye suscripción a newsletter, chat personalizado entrenado para OpenAI, diseño moderno y minimalista, internacionalización y secciones de freelance, colaboraciones y conexiones. Alto grado de personalización y enfoque full-stack para mostrar capacidades en desarrollo web moderno.'
    },
    gestionai: {
      title: 'Gestión Financiera con IA',
      description: 'Modelo de gestión de activos implementado en Python utilizando TensorFlow, scikit-learn y cifrado AES. Permite la toma de decisiones financieras mediante técnicas de aprendizaje automático para clasificar el riesgo de activos. Incluye carga y preprocesamiento de datos, entrenamiento de redes neuronales, evaluación de precisión, visualización de activos y cifrado de datos.'
    },
  },
  about: {
    intro: 'Soy desarrollador full stack, emprendedor, diseñador y creador digital. Puedes consultar mi currículum',
    introExtra: 'Durante más de 5 años he ayudado a empresas y startups a resolver problemas de negocio con tecnología moderna: React, TypeScript, Python, IA, blockchain y automatización. Me apasiona crear productos útiles, escalables y con un diseño minimalista.\n\nMe especializo en productividad para desarrolladores, automatización y herramientas de IA. He creado desde portafolios profesionales, bots, paneles de control, hasta modelos de gestión financiera con IA.',
    articles: {
      llms: 'Cómo los LLMs están cambiando el desarrollo',
      automation: 'Automatiza tu vida con IA',
      prompts: 'Guía práctica de prompts para Claude y GPT'
    },
    projects: {
      portfolio: 'Portafolio Personal 2025: Este sitio, con chat personalizado, newsletter, internacionalización y secciones de freelance/colaboraciones.',
      gestionai: 'Gestión Financiera con IA: Modelo de activos con Python, TensorFlow y cifrado AES.',
      bots: 'Bots y automatizaciones: Desde Telegram hasta integraciones con APIs y plataformas no-code.'
    },
    opensource: 'Contribuyo a proyectos open source y comparto código en',
    talks: 'Estoy abierto a colaborar y dar charlas sobre IA, emprendimiento tech, productividad, desarrollo web, y eventos online. ¿Quieres invitarme a dar una charla? Contáctame.'
  },
  meeting: {
    title: 'Agendar Reunión',
    form: {
      date: 'Fecha',
      time: 'Hora',
      message: 'Mensaje adicional',
      messagePlaceholder: '¿Algo que quieras comentar antes de la reunión?',
      submitButton: 'Enviar Solicitud de Reunión',
      close: 'Cerrar',
    },
    success: '¡Solicitud de reunión enviada exitosamente!',
    error: 'Error al enviar la solicitud de reunión.'
  },
  links: {
    categories: {
      social: 'Redes y Perfiles Profesionales',
      projects: 'Proyectos Destacados',
      personal: 'Recursos Personales',
      resources: 'Recomendaciones y Recursos Útiles',
      contact: 'Contacto'
    },
    social: {
      linkedin: 'Conecta conmigo para oportunidades profesionales y networking.',
      github: 'Mi repositorio principal de proyectos open source y experimentos.',
      twitter: 'Reflexiones, ideas y novedades tech.',
      instagram: 'Mi lado creativo y visual, proyectos y vida tech.'
    },
    projects: {
      portfolio: 'Mi portafolio profesional y experimentos con IA.',
      automation: 'Colección de bots y automatizaciones útiles.'
    },
    personal: {
      blog: 'Artículos sobre desarrollo, IA y productividad.',
      newsletter: 'Suscríbete para recibir novedades y recursos exclusivos.'
    },
    resources: {
      zeroToOne: 'Libro clave para emprendedores tech.',
      pragmatic: 'Libro esencial para desarrolladores.',
      fullstack: 'El mejor curso gratuito de desarrollo web.',
      vscode: 'Mi editor de código favorito.',
      figma: 'Herramienta de diseño colaborativo.',
      notion: 'Organización y productividad personal.'
    },
    contact: {
      email: 'Contáctame directamente por correo.',
      meeting: 'Reserva una reunión 1:1 conmigo.'
    }
  },
  projects: {
    subtitle: 'Una selección de mis proyectos más recientes y relevantes.',
    techTitle: 'Tecnologías',
    viewDemo: 'Ver Demo',
    viewRepo: 'Ver Repositorio',
    status: {
      live: 'Publicado',
      soon: 'Próximamente',
      development: 'En Desarrollo'
    },
    portfolio2025: {
      title: 'Portafolio Personal 2025 (Este Sitio)',
      description: 'Desarrollo de un portafolio profesional con React (Native), Vite, TypeScript, Tailwind CSS y Supabase. Incluye suscripción a newsletter, chat personalizado entrenado para OpenAI, diseño moderno y minimalista, internacionalización y secciones de freelance, colaboraciones y conexiones. Alto grado de personalización y enfoque full-stack para mostrar capacidades en desarrollo web moderno.'
    },
    englishApp: {
      title: 'Solución de Inglés Conversacional con IA',
      description: 'Una innovadora aplicación móvil que utiliza un agente de IA conversacional para ayudar a profesionales tech a superar la barrera del idioma inglés. Incluye gamificación, repetición espaciada y simulaciones de entrevistas técnicas para mejorar la fluidez y confianza en un contexto profesional.'
    },
    aiMarketplace: {
      title: 'Marketplace de Agentes de IA',
      description: 'Una plataforma para descubrir, probar y desplegar agentes de IA pre-entrenados para automatizar tareas repetitivas. El marketplace permitirá a las empresas encontrar soluciones para casos de uso específicos, desde análisis de datos hasta optimización de procesos, sin necesidad de un equipo de desarrollo dedicado.'
    }
  }
};