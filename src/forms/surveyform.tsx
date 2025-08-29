"use client";

import { ChangeEvent, useState, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, ArrowLeft, ArrowRight } from "lucide-react";
import { Country, State } from "country-state-city";
import { toast } from "sonner";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface FormData {
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
}

function categorizeUser(
  q2_stage: string,
  q3_goal: string,
  q4_challenge: string,
  q5_content: string,
  q6_time: string,
): { category: string; score: number } {
  let score = 0;

  // Q2: Stage of monetization
  const stageScores: Record<string, number> = {
    "Just a hobby": 0,
    "Part of my job": 1,
    "Occasionally for side income": 2,
    "Already a business": 3,
  };
  score += stageScores[q2_stage] || 0;

  // Q3: Goal
  const goalScores: Record<string, number> = {
    "Start a side hustle": 0,
    "Replace my job income": 1,
    "Build a personal brand": 2,
    "Scale my existing business": 3,
  };
  score += goalScores[q3_goal] || 0;

  // Q4: Challenge (adjust weighting)
  if (
    q4_challenge === "Not sure where to start" ||
    q4_challenge === "Struggle with confidence/clarity"
  ) {
    score -= 1;
  } else if (q4_challenge === "Don't know how to market myself") {
    score += 0;
  } else if (q4_challenge === "Lack of business strategy") {
    score += 1;
  }

  // Q5: Content comfort
  if (q5_content === "Not at all") {
    score -= 1;
  } else if (q5_content === "Somewhat comfortable") {
    score += 0;
  } else if (q5_content === "Very comfortable") {
    score += 1;
  }

  // Q6: Availability
  if (q6_time === "< 5 hrs/week") {
    score -= 1;
  } else if (q6_time === "5–10 hrs/week") {
    score += 0;
  } else if (q6_time === "10–20 hrs/week") {
    score += 1;
  } else if (q6_time === "Full-time") {
    score += 2;
  }

  // Final classification
  let category: string;
  if (score <= 3) {
    category = "Explorer";
  } else if (score >= 4 && score <= 6) {
    category = "Builder";
  } else {
    category = "Scaler";
  }

  return { category, score };
}

export default function LeadGenForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    usage: "",
    goal: "",
    challenge: "",
    comfort: "",
    availability: "",
    actionPlan: "",
    businessType: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    },
    [errors],
  );

  const validateStep1 = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (!formData.full_name.trim())
      newErrors.full_name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-$$$$]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.full_name, formData.email, formData.phone]);

  const validateStep2 = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (!formData.country) newErrors.country = "Please select a country";
    if (!formData.state) newErrors.state = "Please select a state/province";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData.country, formData.state]);

  const validateStep3 = useCallback(() => {
    const newErrors: Record<string, string> = {};

    if (!formData.usage)
      newErrors.usage = "Please tell us how you plan to use this service";
    if (!formData.goal) newErrors.goal = "Please share your primary goal";
    if (!formData.challenge)
      newErrors.challenge = "Please describe your biggest challenge";
    if (!formData.comfort)
      newErrors.comfort = "Please share your comfort level with tech/tools";
    if (!formData.availability)
      newErrors.availability = "Please tell us your availability";
    if (!formData.actionPlan)
      newErrors.actionPlan = "Please describe your action plan";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [
    formData.usage,
    formData.goal,
    formData.challenge,
    formData.comfort,
    formData.availability,
    formData.actionPlan,
  ]);

  const handleNext = useCallback(() => {
    let isValid = false;

    if (currentStep === 1) isValid = validateStep1();
    else if (currentStep === 2) isValid = validateStep2();
    else if (currentStep === 3) isValid = validateStep3();

    if (isValid && currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else if (isValid && currentStep === 3) {
      handleSubmit();
    }
  }, [currentStep, validateStep1, validateStep2, validateStep3]);

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    const result = categorizeUser(
      formData.usage,
      formData.goal,
      formData.challenge,
      formData.comfort,
      formData.availability,
    );

    const surveyResults = {
      ...formData,
      score: result.score,
      category: result.category,
      submittedAt: new Date().toISOString(),
    };

    // Save to localStorage
    localStorage.setItem("surveyResults", JSON.stringify(surveyResults));

    toast("Survey Submitted Successfully!");

    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(surveyResults),
      });

      const data = await res.json();
      console.log("Survey submitted:", data);

      // Redirect to results page
      router.push("/results");
    } catch (err) {
      console.error("Submit error:", err);
      // Still redirect to results even if API fails since data is in localStorage
      router.push("/results");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, router]);

  const handleCountryChange = useCallback(
    (country: string) => {
      updateFormData("country", country);
      updateFormData("state", ""); // Reset state when country changes
    },
    [updateFormData],
  );

  const countries = useMemo(() => Country.getAllCountries(), []);

  const availableStates = useMemo(() => {
    if (!formData.country) return [];
    // Find the selected country by name
    const country = countries.find((c) => c.name === formData.country);
    if (!country) return [];
    // Get states by ISO code
    return State.getStatesOfCountry(country.isoCode);
  }, [formData.country, countries]);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <h2 className="text-foreground mb-2 text-2xl font-bold">
          Personal Information
        </h2>
        <p className="text-neutral-800">
          {`Let's`} start with your basic details
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full Name *</Label>
          <Input
            id="full_name"
            value={formData.full_name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateFormData("full_name", e.target.value)
            }
            placeholder="Enter your full name"
            className={`bg-input border-border focus:ring-ring ${errors.full_name ? "border-red-500" : ""}`}
          />
          {errors.full_name && (
            <p className="text-sm text-red-500">{errors.full_name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateFormData("email", e.target.value)
            }
            placeholder="Enter your email address"
            className={`bg-input border-border focus:ring-ring ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">WhatsApp Number *</Label>
          <PhoneInput
            country="us"
            value={formData.phone}
            onChange={(phone) => updateFormData("phone", phone)}
            containerClass="flex w-full border border-border rounded-md  bg-input"
            inputClass={`flex-1 px-3 py-2 bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
              errors.phone ? "border-red-500" : ""
            }`}
            dropdownClass="absolute mt-1 max-h-60 w-64 overflow-auto rounded-md border border-border bg-popover shadow-md z-50"
            searchClass="w-full px-2 py-1 border-b border-border focus:outline-none"
          />

          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <h2 className="text-card-foreground mb-2 text-2xl font-bold">
          Location Details
        </h2>
        <p className="text-neutral-800">Where are you located?</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <Select value={formData.country} onValueChange={handleCountryChange}>
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.country ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select your country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.isoCode} value={country.name}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.country && (
            <p className="text-sm text-red-500">{errors.country}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State/Province *</Label>
          <Select
            value={formData.state}
            onValueChange={(value: string) => updateFormData("state", value)}
            disabled={!formData.country}
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.state ? "border-red-500" : ""}`}
            >
              <SelectValue
                placeholder={
                  formData.country
                    ? "Select your state/province"
                    : "Select country first"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {availableStates.map((state) => (
                <SelectItem key={state.isoCode} value={state.name}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.state && (
            <p className="text-sm text-red-500">{errors.state}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="mb-6 text-center">
        <h2 className="text-card-foreground mb-2 text-2xl font-bold">
          Business Information
        </h2>
        <p className="text-neutral-800">Tell us about your business</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="businessType">
            Q1. What skill or talent do you feel most confident in right now? *
          </Label>
          <Select
            value={formData.businessType}
            onValueChange={(value: string) =>
              updateFormData("businessType", value)
            }
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.businessType ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select your skill or talent" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Writing & Communication",
                "Visual Design / Creativity",
                "Teaching / Coaching / Mentoring",
                "Tech / Analytical Skills",
                "Other",
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.businessType && (
            <p className="text-sm text-red-500">{errors.businessType}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="usage">
            Q2. How do you currently use this skill? *
          </Label>
          <Select
            value={formData.usage}
            onValueChange={(value: string) => updateFormData("usage", value)}
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.usage ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select how you use it" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Just a hobby",
                "Part of my job",
                "Occasionally for side income",
                "Already a business",
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.usage && (
            <p className="text-sm text-red-500">{errors.usage}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="goal">
            Q3. What’s your biggest goal right now? *
          </Label>
          <Select
            value={formData.goal}
            onValueChange={(value: string) => updateFormData("goal", value)}
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.goal ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select your goal" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Start a side hustle",
                "Replace my job income",
                "Build a personal brand",
                "Scale my existing business",
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.goal && <p className="text-sm text-red-500">{errors.goal}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="challenge">
            Q4. What’s your biggest challenge in turning your skills into
            income? *
          </Label>
          <Select
            value={formData.challenge}
            onValueChange={(value: string) =>
              updateFormData("challenge", value)
            }
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.challenge ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select your challenge" />
            </SelectTrigger>
            <SelectContent>
              {[
                "Not sure where to start",
                "Struggle with confidence/clarity",
                "Don’t know how to market myself",
                "Lack of business strategy",
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.challenge && (
            <p className="text-sm text-red-500">{errors.challenge}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="comfort">
            Q5. How comfortable are you with creating content (social, blog,
            video)? *
          </Label>
          <Select
            value={formData.comfort}
            onValueChange={(value: string) => updateFormData("comfort", value)}
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.comfort ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select your comfort level" />
            </SelectTrigger>
            <SelectContent>
              {["Very comfortable", "Somewhat comfortable", "Not at all"].map(
                (option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ),
              )}
            </SelectContent>
          </Select>
          {errors.comfort && (
            <p className="text-sm text-red-500">{errors.comfort}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">
            Q6. Which best describes your current availability? *
          </Label>
          <Select
            value={formData.availability}
            onValueChange={(value: string) =>
              updateFormData("availability", value)
            }
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.availability ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select your availability" />
            </SelectTrigger>
            <SelectContent>
              {[
                "< 5 hrs/week",
                "5–10 hrs/week",
                "10–20 hrs/week",
                "Full-time",
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.availability && (
            <p className="text-sm text-red-500">{errors.availability}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="actionPlan">
            Q7. Would you like a personalized action plan to help you monetize
            your skillset? *
          </Label>
          <Select
            value={formData.actionPlan}
            onValueChange={(value: string) =>
              updateFormData("actionPlan", value)
            }
          >
            <SelectTrigger
              className={`bg-input border-border w-full ${errors.actionPlan ? "border-red-500" : ""}`}
            >
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              {["Yes, send it to me!", "Not now"].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.actionPlan && (
            <p className="text-sm text-red-500">{errors.actionPlan}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Card className="border-border mx-auto max-w-2xl bg-red-100/75 font-sans shadow-lg backdrop-blur-md">
      <CardHeader className="text-center">
        <div className="mb-4 flex justify-center">
          <Badge variant="secondary" className="font-sans text-sm font-normal">
            Step {currentStep} of 3
          </Badge>
        </div>
        <CardTitle className="text-card-foreground text-3xl font-bold">
          Get Your Free Consultation
        </CardTitle>
        <CardDescription className="text-lg text-neutral-800">
          Complete this form to receive your personalized strategy session
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Progress Bar */}
        <div className="bg-muted h-2 w-full rounded-full">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>

        {/* Form Steps */}
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2 bg-transparent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>

          <Button
            type="button"
            onClick={handleNext}
            className="bg-primary hover:bg-secondary flex items-center gap-2 transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : currentStep === 3 ? (
              "Submit"
            ) : (
              "Next"
            )}
            {currentStep < 3 && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>

        {/* Trust Elements */}
        <div className="text-muted-foreground border-border flex items-center justify-center gap-4 border-t pt-4 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>No Spam</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
