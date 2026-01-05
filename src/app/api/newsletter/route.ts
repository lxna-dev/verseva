import { email } from "./../../../../node_modules/zod/src/v4/core/regexes";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Incoming survey data:", body);

    const requiredFields = ["email"];

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

    // const { full_name } = body;
    // let first_name = "";
    // let last_name = "";

    // if (full_name) {
    //   const parts = full_name.trim().split(" ");
    //   first_name = parts[0] || "";
    //   last_name = parts.slice(1).join(" ") || "";
    // }

    const payload = {
      formId: process.env.NEWSLETTER_FORM,
      location_id: process.env.LOCATION_ID,
      email: body.email,
    };

    const res = await fetch("https://msgsndr.com/form", {
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
