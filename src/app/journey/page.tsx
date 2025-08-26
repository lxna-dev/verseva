import LeadGenForm from "@/forms/surveyform";
import JourneyHeader from "@/layout/journey-header";
import ShaderBackground from "@/shaders/background";
import React from "react";

export default function page() {
  return (
    <div className="container m-auto mt-40 justify-center">
      <ShaderBackground>
        <JourneyHeader />
        <div className="container m-auto flex w-full items-center justify-center align-middle">
          <div className="w-full">
            <LeadGenForm />
          </div>
        </div>
      </ShaderBackground>
    </div>
  );
}
