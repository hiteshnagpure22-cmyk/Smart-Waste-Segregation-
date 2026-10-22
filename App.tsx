import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FetriOverview } from './components/FetriOverview';
import { ProsAndConsSection } from './components/ProsAndConsSection';
import { SurveySection } from './components/SurveySection';
import { SurveyAnalytics } from './components/SurveyAnalytics';
import { SmartBinSimulator } from './components/SmartBinSimulator';
import { WasteGuide } from './components/WasteGuide';
import { RecommendationsSection } from './components/RecommendationsSection';
import { FieldProjectFooter } from './components/FieldProjectFooter';
import { SurveyModal } from './components/SurveyModal';
import { INITIAL_FIELD_RESPONSES } from './data/fieldProjectData';
import { SurveyResponse } from './types/wasteProject';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isSurveyModalOpen, setIsSurveyModalOpen] = useState<boolean>(false);
  const [responses, setResponses] = useState<SurveyResponse[]>(() => {
    try {
      const saved = localStorage.getItem('fetri_survey_responses');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load local storage responses", e);
    }
    return INITIAL_FIELD_RESPONSES;
  });

  useEffect(() => {
    try {
      localStorage.setItem('fetri_survey_responses', JSON.stringify(responses));
    } catch (e) {
      console.error("Failed to save responses to local storage", e);
    }
  }, [responses]);

  const handleAddResponse = (newResponse: SurveyResponse) => {
    setResponses(prev => [newResponse, ...prev]);
  };

  const handleScrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExportCSV = () => {
    if (responses.length === 0) {
      alert("No responses available to export.");
      return;
    }

    const headers = [
      "ID",
      "Timestamp",
      "Name",
      "Age",
      "Occupation",
      "Family Members",
      "Address",
      "Q1 Know Segregation",
      "Q2 Separate Wet Dry",
      "Q3 Dustbins Count",
      "Q4 Kitchen Waste",
      "Q5 Collection Frequency",
      "Q6 Collector Separates",
      "Q7 Public Dustbins Available",
      "Q8 Heard Smart Bins",
      "Q9 Helps Environment",
      "Q10 Willing to Separate",
      "Q11 Biggest Challenge",
      "Q12 Suggestions"
    ];

    const rows = responses.map(r => [
      r.id,
      `"${r.timestamp}"`,
      `"${r.name.replace(/"/g, '""')}"`,
      `"${r.age}"`,
      `"${r.occupation}"`,
      `"${r.familyMembers}"`,
      `"${r.address.replace(/"/g, '""')}"`,
      `"${r.q1_knowSegregation}"`,
      `"${r.q2_separateWetDry}"`,
      `"${r.q3_dustbinsCount}"`,
      `"${r.q4_kitchenWaste}"`,
      `"${r.q5_collectionFrequency}"`,
      `"${r.q6_collectorSeparates}"`,
      `"${r.q7_publicDustbinsAvailable}"`,
      `"${r.q8_heardSmartBins}"`,
      `"${r.q9_helpsEnvironment}"`,
      `"${r.q10_willingToSeparate}"`,
      `"${r.q11_biggestChallenge}"`,
      `"${r.q12_suggestions.replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [
      headers.join(","),
      ...rows.map(e => e.join(","))
    ].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Fetri_Waste_Segregation_Survey_Data_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSurveyModal={() => setIsSurveyModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <HeroSection
          onOpenSurveyModal={() => setIsSurveyModalOpen(true)}
          onNavigateSection={handleScrollToSection}
        />

        {/* Fetri Locality Profile & Context */}
        <FetriOverview />

        {/* User Specific Focus: Comprehensive Pros & Cons */}
        <ProsAndConsSection />

        {/* User Specific Focus: Google Form Reference & Interactive Survey */}
        <SurveySection
          responses={responses}
          onAddResponse={handleAddResponse}
          onExportResponses={handleExportCSV}
        />

        {/* Field Survey Analytics Dashboard */}
        <SurveyAnalytics
          responses={responses}
          onExportResponses={handleExportCSV}
        />

        {/* Interactive Smart Waste Bin IoT Simulation */}
        <SmartBinSimulator />

        {/* Household Segregation Educational Guide */}
        <WasteGuide />

        {/* Action Plan & Community Grievance Reporting */}
        <RecommendationsSection />

      </main>

      {/* Academic Citation Footer */}
      <FieldProjectFooter />

      {/* Quick Survey Launcher Modal */}
      <SurveyModal
        isOpen={isSurveyModalOpen}
        onClose={() => setIsSurveyModalOpen(false)}
        onScrollToSurvey={() => handleScrollToSection('survey')}
      />

    </div>
  );
}

export default App;
