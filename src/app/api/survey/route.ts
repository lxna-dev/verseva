import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Incoming survey data:", body);

    // Validation: required fields
    const requiredFields = [
      "full_name",
      "email",
      "phone",
      "businessType",
      "usage",
      "goal",
      "challenge",
      "comfort",
      "availability",
      "actionPlan",
    ];

    const missingFields = requiredFields.filter(
      (field) => !body[field] || body[field].trim() === "",
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing fields: ${missingFields.join(", ")}`,
        },
        { status: 400 },
      );
    }

    const { full_name } = body;
    let first_name = "";
    let last_name = "";

    if (full_name) {
      const parts = full_name.trim().split(" ");
      first_name = parts[0] || "";
      last_name = parts.slice(1).join(" ") || "";
    }

    const payload = {
      formId: process.env.MAIN_SURVEY,
      location_id: process.env.LOCATION_ID,
      first_name,
      last_name,
      email: body.email,
      phone: body.phone,
      q1_what_skill_or_talent_do_you_feel_most_confident_in_right_now:
        body.businessType,
      q2_how_do_you_currently_use_this_skill: body.usage,
      q3_whats_your_biggest_goal_right_now: body.goal,
      q4_whats_your_biggest_challenge_in_turning_your_skills_into_income:
        body.challenge,
      q5_how_comfortable_are_you_with_creating_content_social_blog_video:
        body.comfort,
      q6_which_best_describes_your_current_availability: body.availability,
      q7_would_you_like_a_personalized_action_plan_to_help_you_monetize_your_skillset:
        body.actionPlan,
      survey_score: body.score || null,
      survey_category: body.category || null,
    };

    const res = await fetch("https://msgsndr.com/survey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json().catch(() => null);
    console.log("📤 Response from msgsndr:", result);

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error("❌ API Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
