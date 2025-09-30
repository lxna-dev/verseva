import { Button } from "@/components/ui/button";
import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Lightbulb,
  Settings,
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-32 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
          What We Do
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Recruitment & Augmentation */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div className="badge-green">Core Service</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Recruitment & Augmentation
            </h3>
            <p className="text-sm text-gray-200">
              Fill gaps fast with top Asian talent from the Philippines and
              beyond. We source and embed specialists to strengthen your team
              from day one.
            </p>
          </div>

          {/* Fractional Teams */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div className="badge-blue">Popular</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Fractional Teams
            </h3>
            <p className="text-sm text-gray-200">
              Flexible, scalable teams that work on your schedule. Our Asian
              specialists deliver quality work across various skill sets.
            </p>
          </div>

          {/* Fractional Leadership */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <div className="badge-purple">High Impact</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Fractional Leadership
            </h3>
            <p className="text-sm text-gray-200">
              Experienced Asian leaders who bring strategic direction and
              management expertise without the full-time commitment.
            </p>
          </div>

          {/* For Clients */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Target className="h-6 w-6 text-black" />
              </div>
              <div className="badge-orange">For Clients</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Case Studies & Success
            </h3>
            <p className="text-sm text-gray-200">
              See how our teams have improved product delivery and marketing for
              companies like Gymlete. Book a consultation to discuss your needs.
            </p>
          </div>

          {/* For Talent */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
              <div className="badge-cyan">For Talent</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Join Our Talent Pool
            </h3>
            <p className="text-sm text-gray-200">
              Quick CV uploads and simplified application forms for open
              fractional roles. Join our global community of Asian
              professionals.
            </p>
          </div>

          {/* About Us */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Lightbulb className="h-6 w-6 text-black" />
              </div>
              <div className="badge-yellow">About Us</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Our Story & Mission
            </h3>
            <p className="text-sm text-gray-200">
              From personal branding to fractional teams, we're committed to
              empowering Asian talent and creating high-performance teams.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-8 text-xl text-gray-200">
            Accelerate your growth with Verseva.
          </p>
          <Button
            className="text-md cursor-pointer rounded-full p-6 font-sans font-light"
            variant="default"
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}
