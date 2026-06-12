const projects = {
  1: {
    title: "Cancer Gene Expression Classifier",
    desc: `
◦ Developed ML pipeline to classify 5 cancer subtypes from 801 RNA-seq gene expression profiles achieving 99.2% accuracy and 0.993 Macro F1-score using XGBoost with Optuna tuning.

◦ Applied ANOVA F-score feature selection reducing 20,531 genes to top 500 biomarkers and used SHAP for explainability.

◦ Built end-to-end pipeline with preprocessing, training, evaluation, Streamlit dashboard, and Docker deployment.

Tech Stack: Python, XGBoost, Optuna, SHAP, Scikit-learn, Pandas, NumPy, Streamlit, Docker
    `,
    link: "https://github.com/Roshni2206/Cancer-Gene-Classifier"
  },

  2: {
    title: "DocuMind AI",
    desc: `
◦ AI-powered document processing system using Tesseract OCR (PSM 6) and Qwen 2.5 LLM via Ollama.

◦ Built FastAPI backend + Streamlit UI for file upload and real-time summarization.

◦ Dockerized for efficient and privacy-focused deployment.

Tech Stack: Python, FastAPI, Streamlit, Tesseract OCR, Ollama, Qwen 2.5, Docker
    `,
    link: "https://github.com/Roshni2206/DocuMind-AI"
  },

  3: {
    title: "Movie Recommendation System",
    desc: `
◦ Built collaborative filtering system (User-based + Item-based) on MovieLens dataset.

◦ Achieved RMSE: 0.90, MAE: 0.70 using similarity-based modeling.

◦ Interactive Streamlit app for real-time recommendations.

Tech Stack: Python, Pandas, NumPy, Scikit-learn, Streamlit, SciPy
    `,
    link: "https://github.com/Roshni2206/Movie-Recommendation-System"
  },

  4: {
    title: "Genomic Analysis of Liver Metastasis",
    desc: `
◦ Processed 10,000+ gene expression profiles to identify biomarkers.

◦ Statistical and fold-change analysis for gene regulation detection.

◦ Visualized gene interaction networks using Cytoscape.

Tech Stack: Python, Pandas, Matplotlib, Seaborn
    `,
    link: "https://github.com/Roshni2206/Genomic-analysis"
  }
};

function openProject(id) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-text").innerText = projects[id].desc;
  document.getElementById("modal-link").href = projects[id].link;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}