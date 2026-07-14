# 📊 FinSight AI – Financial MIS Reporting & Business Analytics Dashboard

A full-stack Financial MIS Dashboard that automates financial reporting by converting Excel statements into interactive dashboards and AI-generated business insights.

Built using React, Node.js, Express, and Google Gemini AI, the platform enables users to upload financial statements, visualize KPIs, analyze trends, and receive intelligent financial recommendations.

---

## 🚀 Live Demo

Frontend: https://YOUR-VERCEL-LINK.vercel.app

Backend API: https://mis-financial-dashboard.onrender.com

---

## ✨ Features

- 📂 Upload financial statements (Excel)
- 📈 Interactive financial dashboards
- 📊 Revenue, Expense & Profit visualizations
- 💰 Automatic KPI generation
- 🤖 AI-powered financial insights using Google Gemini
- 📉 Profitability and expense analysis
- 🎨 Clean, modern, responsive UI
- ⚡ Fast data processing

---

## 📸 Dashboard Preview

> Add screenshots here after deployment.

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Charts

![Charts](screenshots/charts.png)

### AI Insights

![AI Insights](screenshots/ai-insights.png)

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Recharts
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Multer
- XLSX (SheetJS)
- Google Gemini API

### Deployment
- Vercel (Frontend)
- Render (Backend)
- GitHub

---

## 📂 Project Structure

```
mis-financial-dashboard/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/JAadya/mis-financial-dashboard.git
```

Move into the project folder

```bash
cd mis-financial-dashboard
```

---

### Install Frontend

```bash
cd client
npm install
```

Run

```bash
npm run dev
```

---

### Install Backend

Open another terminal.

```bash
cd server
npm install
```

Create a `.env` file

```env
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run

```bash
npm start
```

---

## 📈 Dashboard Metrics

The dashboard automatically calculates:

- Revenue
- Expenses
- Gross Profit
- EBITDA
- Net Profit
- Bank Balance
- Cash Balance

---

## 🤖 AI Insights

Google Gemini analyzes uploaded financial data and generates:

- Revenue Analysis
- Expense Analysis
- Profitability Assessment
- Risk Identification
- Business Recommendations

---

## 🔄 Workflow

1. Upload an Excel financial statement.
2. Backend extracts and processes the data.
3. Financial KPIs are calculated automatically.
4. Interactive charts are generated.
5. Gemini AI produces financial insights and recommendations.

---

## 🌟 Future Improvements

- PDF financial statement support
- Multi-company comparison
- User authentication
- Historical trend analysis
- Download reports as PDF
- Export dashboard to Excel
- Dark mode
- Advanced forecasting

---

## 👩‍💻 Author

**Aadya Jha**

GitHub: https://github.com/JAadya

LinkedIn: YOUR_LINKEDIN_PROFILE

---

## 📄 License

This project is intended for educational and portfolio purposes.
