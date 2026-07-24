# 🚀 PulseCheck – URL Audit Dashboard

A responsive URL Audit Dashboard built using HTML, CSS, and JavaScript. Users can enter a website URL, validate it, and view an interactive website health report.

> **Built for Digital Heroes Training Task**

---

# 🌐 Live Demo

Add your deployed URL here

```
file:///c%3A/Users/Amrendra/OneDrive/Desktop/SDE%20task/index.html
```

---

# 📌 Project Overview

PulseCheck is a frontend prototype of a Website Audit Dashboard.

Users can

- Enter a website URL
- Validate the URL
- View audit results
- Experience a responsive dashboard UI

Currently this project displays demo audit data.

Future versions can integrate real APIs like

- Google PageSpeed Insights
- Lighthouse
- SSL Checker
- SEO APIs

---

# ✨ Features

- URL Validation
- Responsive UI
- Interactive Dashboard
- Smooth Scrolling
- Modern Design
- Clean Code Structure
- Beginner Friendly

---

# 🛠 Tech Stack

Frontend

- HTML5
- CSS3
- JavaScript (ES6)

Future Backend

- Node.js
- Express.js

Future Database

- MongoDB / PostgreSQL

Deployment

- GitHub Pages / Netlify / Vercel

---

# 📁 Project Structure

```
PulseCheck
│
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets
```

---

# 🏗 System Architecture

```
          User
            │
            ▼
     HTML Frontend
            │
            ▼
 JavaScript Validation
            │
            ▼
     API Gateway
            │
            ▼
      Queue System
            │
     ┌───────────────┐
     ▼               ▼
 Audit Worker 1   Audit Worker 2
     ▼               ▼
        Database
            │
            ▼
      Results API
            │
            ▼
      Frontend UI
```

---

# 📊 Data Flow

1. User enters URL

2. JavaScript validates URL

3. Frontend sends request to Backend API

4. API pushes request into Queue

5. Worker processes audit

6. Worker stores result in Database

7. Frontend fetches audit result

8. Dashboard displays report

---

# 🚦 Queue Strategy

To support

- 10,000 audits/day
- 500 concurrent users

Queue System can be used.

Recommended

- RabbitMQ
or
- Redis Queue (BullMQ)

Benefits

- No request loss
- Better scalability
- Load balancing
- Faster response time

---

# 💾 State Management

Frontend

- Input field
- Current audit result
- Loading state

Backend

- Queue
- Worker status
- Audit history
- Database

---



# ❌ Failure Mode Analysis

## 1. High Traffic

Problem

500 users submit URLs simultaneously.

Solution

- Queue System
- Auto Scaling
- Load Balancer

---

## 2. Backend Failure

Problem

Audit service crashes.

Solution

- Retry mechanism
- Health checks
- Backup workers

---

## 3. Database Failure

Problem

Database unavailable.

Solution

- Replication
- Backup
- Failover database

---

# 📈 Monitoring

Monitor

- API Response Time
- Server CPU
- Memory Usage
- Queue Length
- Error Rate
- Database Connections

Tools

- Grafana
- Prometheus
- CloudWatch

---



# 🚨 Alerts

Alert when

- API response > 2 sec
- CPU > 80%
- Queue > 1000 jobs
- Memory > 85%
- Error rate > 5%

---

## 📷 Project Preview


<img width="1861" height="893" alt="AdobeExpressPhotos_fd2dff35e9a145719233e49e4b900c05_CopyEdited" src="https://github.com/user-attachments/assets/64f1e8d5-c21f-4927-b5a5-0088d52dec07" />

<img width="1866" height="915" alt="AdobeExpressPhotos_1eaf445c8ad248979128cca286d2fb43_CopyEdited" src="https://github.com/user-attachments/assets/1f7fb3f6-9dcd-4766-a51f-9e174edb0097" />


---

# 🔄 Rollback Plan

If deployment fails

1. Stop deployment

2. Roll back previous version

3. Restart services

4. Verify health checks

5. Monitor logs

Deployment Strategy

- Blue Green Deployment

or

- Rolling Deployment

---

# 📚 JavaScript Concepts Used

- DOM Manipulation
- Event Listeners
- URL Validation
- Regular Expressions
- Functions
- Arrow Functions
- try...catch
- Template Literals
- classList
- scrollIntoView()

---

# 🎨 CSS Concepts Used

- Flexbox
- Grid
- CSS Variables
- Media Queries
- Responsive Design
- Box Shadow
- Border Radius
- Hover Effects
- Typography
- Transitions

---

# 🚀 Future Improvements

- Real Website Audit API
- User Authentication
- Export PDF Report
- Audit History
- Dark Mode
- Performance Charts
- Lighthouse Integration
- SSL Analysis
- SEO Report
- Accessibility Report

---

# 📖 What I Learned

- Responsive Web Design
- Modern CSS
- DOM Manipulation
- JavaScript Validation
- Project Architecture
- Scalable System Design
- Queue-based Processing
- Monitoring Strategies
- Deployment Planning

---

# 👨‍💻 Author

**Amrendra Kumar**

GitHub

https://github.com/AMRENDRA-108

LinkedIn

https://www.linkedin.com/in/amrendra-kumar-3973a8264

---

# 📄 License

This project is built for educational and portfolio purposes.

---

# ⭐ Built for Digital Heroes Training Task

Built for **Digital Heroes Training Task**

https://digitalheroesco.com
