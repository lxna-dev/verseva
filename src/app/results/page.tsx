"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ShaderBackground from "@/shaders/background";
import AltHeader from "@/layout/alt-header";
import Offers from "@/layout/offers";

interface SurveyResults {
  full_name: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  usage: string;
  goal: string;
  challenge: string;
  comfort: string;
  availability: string;
  actionPlan: string;
  businessType: string;
  score: number;
  category: string;
  submittedAt: string;
}

const ResultsComponent = ({
  category,
  formData,
}: {
  category: string;
  score: number;
  formData: SurveyResults;
}) => {
  const getCategoryInfo = (cat: string) => {
    switch (cat) {
      case "Explorer":
        return {
          icon: "🧭",
          backgroundColor: "bg-blue-50",
          textColor: "text-blue-800",
          borderColor: "border-blue-200",
          accentColor: "bg-blue-500",
          description:
            "You're at the beginning of your journey with a hobby skill, wanting to start a side hustle but unsure where to start. You have limited time (<5 hrs/week) and aren't fully comfortable with content creation yet.",
          nextSteps:
            "Focus on building confidence, start with small experiments, and gradually increase your comfort with sharing your skills online.",
        };
      case "Builder":
        return {
          icon: "🔨",
          backgroundColor: "bg-green-50",
          textColor: "text-green-800",
          borderColor: "border-green-200",
          accentColor: "bg-green-500",
          description:
            "You're earning some side income and want to build a personal brand. You have moderate availability (5-10 hrs/week) and are somewhat comfortable with content creation, but struggle with marketing.",
          nextSteps:
            "Develop a consistent content strategy, learn marketing fundamentals, and systematically build your personal brand online.",
        };
      case "Scaler":
        return {
          icon: "🚀",
          backgroundColor: "bg-purple-50",
          textColor: "text-purple-800",
          borderColor: "border-purple-200",
          accentColor: "bg-purple-500",
          description:
            "You already have a business and want to scale it. You're very comfortable with content creation, have good availability, but need better business strategy to reach the next level.",
          nextSteps:
            "Focus on strategic planning, optimize your systems and processes, and implement scalable growth strategies.",
        };
      default:
        return {
          icon: "💡",
          backgroundColor: "bg-gray-50",
          textColor: "text-gray-800",
          borderColor: "border-gray-200",
          accentColor: "bg-gray-500",
          description: "Your profile is unique!",
          nextSteps: "Let's create a custom plan for your specific situation.",
        };
    }
  };

  const categoryInfo = getCategoryInfo(category);

  return (
    <div className="space-y-8">
      <div
        className={`rounded-xl p-8 ${categoryInfo.backgroundColor} ${categoryInfo.borderColor} border-2 shadow-lg`}
      >
        <div className="text-center">
          <div className="mb-4 text-5xl md:text-7xl">{categoryInfo.icon}</div>
          <h2
            className={`mb-3 text-3xl font-bold md:text-4xl ${categoryInfo.textColor}`}
          >
            {`You're an ${category}`}!
          </h2>
        </div>
      </div>

      <div
        className={`rounded-xl p-8 ${categoryInfo.backgroundColor} border-l-4 ${categoryInfo.borderColor} shadow-lg`}
      >
        <h3
          className={`mb-4 text-xl font-semibold md:text-2xl ${categoryInfo.textColor}`}
        >
          Your Profile
        </h3>
        <p className="mb-6 text-base leading-relaxed text-gray-700 md:text-lg">
          {categoryInfo.description}
        </p>

        <h4
          className={`mb-3 text-lg font-semibold md:text-xl ${categoryInfo.textColor}`}
        >
          Recommended Next Steps
        </h4>
        <p className="text-base leading-relaxed text-gray-700 md:text-lg">
          {categoryInfo.nextSteps}
        </p>
      </div>

      <div className="rounded-xl bg-white/80 p-6 text-center shadow-md">
        <p className="mb-4 text-base text-gray-600 md:text-lg">
          Thank you,{" "}
          <span className="rainbow-text font-bold">{formData.full_name}! </span>{" "}
          <br /> <br />
          <span className="rainbow-text font-bold">
            Check your email for your personalized plan (PDF checklist / starter
            kit).
          </span>
        </p>
      </div>
    </div>
  );
};

// Function to get the appropriate YouTube video ID based on category
const getCategoryVideo = (category: string): string => {
  switch (category) {
    case "Explorer":
      return "dQw4w9WgXcQ"; // Placeholder video ID for Explorer
    case "Builder":
      return "jNQXAC9IVRw"; // Placeholder video ID for Builder
    case "Scaler":
      return "9bZkp7q19f0"; // Placeholder video ID for Scaler
    default:
      return "dQw4w9WgXcQ"; // Default placeholder video ID
  }
};

export default function ResultsPage() {
  const router = useRouter();
  const [surveyResults, setSurveyResults] = useState<SurveyResults | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedResults = localStorage.getItem("surveyResults");

    if (storedResults) {
      try {
        const results = JSON.parse(storedResults);
        setSurveyResults(results);
      } catch (error) {
        console.error("Error parsing survey results:", error);
        router.push("/journey");
      }
    } else {
      // No results found, redirect to survey
      router.push("/journey");
    }

    setLoading(false);
  }, [router]);

  const handleBackToHome = () => {
    router.push("/");
  };

  const handleRetakeSurvey = () => {
    // Clear localStorage and redirect to survey
    localStorage.removeItem("surveyResults");
    router.push("/journey");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="border-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2"></div>
          <p className="text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!surveyResults) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="border-border mx-auto max-w-md bg-white/90 font-sans shadow-lg backdrop-blur-md">
          <CardHeader className="text-center">
            <CardTitle className="text-card-foreground text-2xl font-bold">
              No Results Found
            </CardTitle>
            <CardDescription>
              Please complete the survey first to see your results.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={() => router.push("/journey")} className="w-full">
              Take Survey
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 py-12 font-sans">
      <ShaderBackground>
        <AltHeader />

        <div className="md-p-0 grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
          <div>
            <div className="mb-4">
              <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                Your Results Are Ready!
              </h1>
              <p className="text-base text-white md:text-lg">
                Based on your responses, {`here's`} your personalized profile
              </p>
            </div>

            <ResultsComponent
              category={surveyResults.category}
              score={surveyResults.score}
              formData={surveyResults}
            />

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:gap-4">
              <Button
                variant="outline"
                onClick={handleBackToHome}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
              <Button onClick={handleRetakeSurvey} className="flex-1">
                Retake Survey
              </Button>
            </div>
          </div>
          <div>
            <div className="rounded-xl bg-black/80 p-6 shadow-lg backdrop-blur-md">
              <h3 className="mb-4 text-lg font-semibold text-white md:text-xl">
                Watch Your Category Walkthrough
              </h3>

              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/60">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${getCategoryVideo(surveyResults.category)}`}
                  title={`${surveyResults.category} Category Walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="mt-4 rounded-lg bg-black/20 p-3 md:p-4">
                <h4 className="mb-2 text-base font-medium text-white md:text-lg">
                  What {`You'll`} Learn
                </h4>
                <ul className="ml-5 list-disc space-y-1 text-gray-300">
                  <li>Understanding your {surveyResults.category} traits</li>
                  <li>Key strategies for your skill level</li>
                  <li>How to implement your action plan</li>
                  <li>Next steps to accelerate your growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Offers />
      </ShaderBackground>
    </div>
  );
}
