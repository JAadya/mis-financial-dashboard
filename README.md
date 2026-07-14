# 📊 FinSight AI – Financial MIS Reporting & Business Analytics Dashboard

A full-stack Financial MIS Dashboard that automates financial reporting by converting Excel statements into interactive dashboards and AI-generated business insights.

Built using React, Node.js, Express, and Google Gemini AI, the platform enables users to upload financial statements, visualize KPIs, analyze trends, and receive intelligent financial recommendations.

---

## 🚀 Live Demo

Frontend: https://mis-financial-dashboard.vercel.app/

Backend API: https://mis-financial-dashboard.onrender.com

---

## 🚀 Key Highlights

- Built a full-stack Financial MIS dashboard using React and Node.js.
- Automated Excel-based financial reporting.
- Integrated Google Gemini AI for financial insights.
- Interactive KPI and chart visualizations.
- Deployed on Vercel and Render.
  
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




### Dashboard
<img width="2846" height="1536" alt="Screenshot 2026-07-14 233457" src="https://github.com/user-attachments/assets/608c44eb-fe63-4855-870f-5a4841e417fa" />



### Charts
<img width="2850" height="1516" alt="Screenshot 2026-07-14 233511" src="https://github.com/user-attachments/assets/07af9116-e8f2-4a24-86c0-ebcee0e8cb65" />

<img width="2850" height="1520" alt="Screenshot 2026-07-14 233523" src="https://github.com/user-attachments/assets/d7eeb4f4-eba2-4935-98a0-56290a87e1b1" />


### AI Insights

<img width="2848" height="1540" alt="Screenshot 2026-07-14 233537" src="https://github.com/user-attachments/assets/212a3239-94d9-4f5e-b7c4-1a3b59e52596" />



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

LinkedIn: [YOUR_LINKEDIN_PROFILE](https://www.linkedin.com/in/jaadya/)

---

## 📄 License

This project is intended for educational and portfolio purposes.
