import LeadGenForm from "@/forms/surveyform";
import AltHeader from "@/layout/alt-header";
import ShaderBackground from "@/shaders/background";
import React from "react";

export default function page() {
  return (
    <div className="w-screen max-w-[100vw] overflow-hidden">
      <ShaderBackground>
        <AltHeader />
        <div className="flex min-h-screen w-full items-center justify-center px-4 pt-24 pb-8">
          <div className="w-full max-w-2xl">
            <LeadGenForm />
          </div>
        </div>
      </ShaderBackground>
    </div>
  );
}
