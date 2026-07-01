# Proyectos insignia / Flagship projects

Proyectos avanzados y de alto impacto de Richard García. Demuestran experiencia
real en IA/ML/Deep Learning, arquitecturas full-stack y pensamiento de producto.

## Español

### EXONIK — Plataforma de Diseño de Terapias Génicas Personalizadas (Biotech)

Pipeline computacional de bioinformática que diseña terapias génicas
personalizadas por paciente, desde el dato genómico crudo hasta el informe
clínico, de forma automatizada. Enfocado en la Anemia Falciforme (Sickle Cell
Disease), una mutación de un solo nucleótido en el gen HBB.

- Diseño de guías CRISPR/Cas9 con análisis real de off-targets contra el genoma
  humano completo (GRCh38) usando BLAST+.
- Personalización por paciente: los SNPs de cada paciente se cruzan contra cada
  off-target (analizados 5 pacientes reales de 3 continentes, 12 guías diseñadas).
- Diseño de mRNA terapéutico: optimización de codones, estructura secundaria,
  cribado de inmunogenicidad (score 96/100).
- Visualización 3D de proteínas con AlphaFold (mapeo "GPS CRISPR").
- Dashboard clínico interactivo para clínicos e inversores.
- Stack: Python, BLAST+, seqfold, pyliftover, plotly, py3Dmol, BioPython,
  AlphaFold DB / RCSB PDB, datos del 1000 Genomes Project.
- Visión: Casgevy cura la anemia falciforme pero cuesta $2.2M; esta plataforma
  busca reducir el tiempo de diseño de meses a horas para hacerla accesible.
- Estado: prototipo (v0.1.0). Proyecto con potencial de startup biotech a largo plazo.
- Uso solo para investigación (RUO). Repo: https://github.com/riche45/EXONIK_Biotech

### Viennify — Smart Cities (PropTech / ConTech)

Plataforma PropTech/ConTech inspirada en el modelo de vivienda social de Viena,
para democratizar el acceso a vivienda asequible en España. Modelo de negocio
gradual en 3 etapas: PropTech (marketplace + ML + domótica) → ConTech (BIM + BEMS
+ construcción industrializada) → Smart City (fabricación modular + microgrids).

- Marketplace de vivienda asequible con búsqueda avanzada y mapas 3D (Mapbox).
- Sistema de valoración con Machine Learning (XGBoost) tipo OpenDoor.
- Modelo innovador de suscripción por m².
- Chat en tiempo real usuario-agente, dashboards multi-rol.
- Stack frontend: Next.js 14, TypeScript, Tailwind CSS, Mapbox GL JS, Zustand.
- Stack backend: FastAPI, Python, PostgreSQL, Redis, JWT/OAuth2, Alembic.
- ML: XGBoost, scikit-learn, pandas, MLflow. BIM: IfcOpenShell, Shapely, GeoPandas.
- DevOps: Docker, GitHub Actions, Grafana/Prometheus, Sentry.
- Estado: MVP en desarrollo (Capa 1, PropTech). Repo: https://github.com/riche45/SmartCitiesProyect

### Sistema de Recomendación de Moda con Deep Learning (H&M)

Sistema de recomendación personalizado para e-commerce de moda usando el dataset
de H&M (Kaggle), con Collaborative Filtering, embeddings y PCA.

- Collaborative Filtering implementado desde cero en PyTorch puro (factorización
  de matrices, embeddings de 75 dimensiones, biases de usuario/ítem).
- Entrenamiento con OneCycleLR, weight decay, gradient clipping y early stopping.
- Análisis de embeddings y descubrimiento de patrones (productos co-comprados,
  ciudades similares por cosine similarity, bestsellers por bias).
- Métricas profesionales: Precision@K, Recall@K, NDCG, Hit Rate, MRR.
- Split temporal para simular producción real; visualizaciones con PCA (75D→2D).
- Stack: PyTorch 2.0+, FastAI, NumPy, Pandas, scikit-learn, Matplotlib, Seaborn, Plotly.
- Repo: https://github.com/riche45/H-and-M-Fashion-Recommendations

## English

### EXONIK — Personalized Gene Therapy Design Platform (Biotech)

A computational bioinformatics pipeline that designs patient-personalized gene
therapies, from raw genomic data to clinical report, fully automated. Focused on
Sickle Cell Disease, caused by a single-nucleotide mutation in the HBB gene.

- CRISPR/Cas9 guide design with real off-target analysis against the full human
  genome (GRCh38) using BLAST+.
- Patient-level personalization: each patient's SNPs cross-checked against every
  off-target (5 real patients across 3 continents, 12 guides designed).
- Therapeutic mRNA design: codon optimization, secondary structure, immunogenicity
  screening (score 96/100).
- 3D protein visualization with AlphaFold ("CRISPR GPS" mapping).
- Interactive clinical dashboard for clinicians and investors.
- Stack: Python, BLAST+, seqfold, pyliftover, plotly, py3Dmol, BioPython,
  AlphaFold DB / RCSB PDB, 1000 Genomes Project data.
- Vision: Casgevy cures sickle cell but costs $2.2M; this platform aims to cut
  design time from months to hours to make it accessible.
- Status: prototype (v0.1.0). Long-term biotech startup potential.
- Research Use Only (RUO). Repo: https://github.com/riche45/EXONIK_Biotech

### Viennify — Smart Cities (PropTech / ConTech)

A PropTech/ConTech platform inspired by Vienna's social housing model, to
democratize access to affordable housing in Spain. Gradual 3-stage business model:
PropTech (marketplace + ML + home automation) → ConTech (BIM + BEMS +
industrialized construction) → Smart City (modular manufacturing + microgrids).

- Affordable-housing marketplace with advanced search and 3D maps (Mapbox).
- Machine Learning valuation system (XGBoost), OpenDoor-style.
- Innovative subscription-by-square-meter model.
- Real-time user-agent chat, multi-role dashboards.
- Frontend: Next.js 14, TypeScript, Tailwind CSS, Mapbox GL JS, Zustand.
- Backend: FastAPI, Python, PostgreSQL, Redis, JWT/OAuth2, Alembic.
- ML: XGBoost, scikit-learn, pandas, MLflow. BIM: IfcOpenShell, Shapely, GeoPandas.
- DevOps: Docker, GitHub Actions, Grafana/Prometheus, Sentry.
- Status: MVP in development (Layer 1, PropTech). Repo: https://github.com/riche45/SmartCitiesProyect

### Fashion Recommendation System with Deep Learning (H&M)

A personalized recommendation system for fashion e-commerce using the H&M dataset
(Kaggle), with Collaborative Filtering, embeddings and PCA.

- Collaborative Filtering built from scratch in pure PyTorch (matrix factorization,
  75-dim embeddings, user/item biases).
- Training with OneCycleLR, weight decay, gradient clipping and early stopping.
- Embedding analysis and pattern discovery (co-purchased products, similar cities
  by cosine similarity, bestsellers by bias).
- Professional metrics: Precision@K, Recall@K, NDCG, Hit Rate, MRR.
- Temporal split to simulate real production; PCA visualizations (75D→2D).
- Stack: PyTorch 2.0+, FastAI, NumPy, Pandas, scikit-learn, Matplotlib, Seaborn, Plotly.
- Repo: https://github.com/riche45/H-and-M-Fashion-Recommendations
