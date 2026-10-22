# Smart Waste Segregation Management: Field Project — Fetri, Nagpur, Maharashtra

An academic field research and technology demonstration platform evaluating municipal solid waste dynamics, citizen segregation habits, and IoT-enabled smart bin implementation in **Fetri, Katol Road, Nagpur, Maharashtra (PIN: 441501)**.

---

## 📋 Research Instrument & Google Form Reference
- **Google Form Survey Reference**: [Smart Waste Segregation Survey (Survey No. 1, 7 August 2026)](https://docs.google.com/forms/d/e/1FAIpQLScmZfORPQfnAhmi6G3hEoAtnJ9DvwNAcBIwRpKYsrYB3XjU-Q/viewform?usp=dialog)
- **Target Locality**: Fetri, District Nagpur, Maharashtra (Nagpur Rural / Katol Road SH-248 corridor under Fetri Gram Panchayat & NMRDA).
- **Sample Size**: 165 Surveyed Households across 5 Wards.

---

## 🌟 Key Features of the Website

1. **Interactive Field Survey Portal (Mirroring Google Form)**:
   - Full 3-stage questionnaire covering all demographic fields and 12 research questions from the primary Google Form.
   - Live embedded view toggle for the official Google Form (`docs.google.com/forms`).
   - Local storage persistence and CSV/JSON export capability.

2. **Survey Analytics Dashboard**:
   - Visual percentage charts and meters for baseline awareness (63% Aware), single-bin deficit (66.1%), collection regularity, and secondary vehicle mixing (84.2%).
   - Demographic distribution analysis (Age, Farming, Business, Homemakers, Students).

3. **In-Depth Pros and Cons Section**:
   - Multi-dimensional breakdown: **Environmental**, **Economic & Agrarian**, **Technological/IoT**, **Social & Worker Dignity**, and **Operational Logistics**.
   - Side-by-side comparative cards with expandable scientific mechanisms and Fetri-specific field observations.
   - Strategic **Mitigation & Feasibility Matrix** addressing high CapEx, secondary mixing, 46°C summer sensor drift, and animal disturbance.

4. **IoT Smart Bin 3-Chamber Simulator**:
   - Interactive live simulation of an IoT smart waste node with Ultrasonic fill sensors, Methane gas PPM monitoring, LoRaWAN/GSM telemetry packet stream, and solar battery management.
   - Interactive deposit triggers for Wet (Organic), Dry (Recyclable), and E-Waste items.

5. **Bilingual Waste Segregation Guide**:
   - English & Marathi/Hindi classification (`ओला कचरा` / `सुका कचरा` / `घातक कचra` / `ई-कचरा`).
   - Interactive live search lookup for common items with handling instructions and destination in Nagpur.
   - Interactive community awareness mini-quiz.

6. **Action Plan & Citizen Grievance Portal**:
   - 5-phase strategic roadmap for Fetri Gram Panchayat (Universal dual bins → 10 Solar IoT bins → Partitioned Ghanta Gadis → Community Composting Pit → Cleanest Ward Awards).
   - Citizen reporting tool for overflowing dump points and plastic burning.

7. **Academic Submission Ready**:
   - Print-friendly layout (`window.print()`) formatted for A4 project report printouts and PDF generation.

---

## 🚀 Running the Website Locally

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Start the Vite development server
npm run dev

# 3. Build for production distribution
npm run build

# 4. Preview production build
npm run preview
```

---

## 📍 Locality Focus: Fetri, Nagpur
- **Coordinates**: 21.2215° N, 79.0084° E (Katol Road, Nagpur District)
- **Administrative Jurisdiction**: Fetri Gram Panchayat & NMRDA
- **Estimated Daily Waste**: 3.4 Tons/Day (~58% Organic Kitchen & Agro Waste, 32% Dry Recyclable Plastics, 10% Other)
