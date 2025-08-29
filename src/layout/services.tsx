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
          Is this for you?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Strategic Planning */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Target className="h-6 w-6 text-black" />
              </div>
              <div className="badge-green">Core Service</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Strategic Planning
            </h3>
            <p className="text-sm text-gray-200">
              Comprehensive business strategy development and market positioning
              to accelerate growth.
            </p>
          </div>

          {/* Operations Optimization */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Settings className="h-6 w-6 text-black" />
              </div>
              <div className="badge-blue">Popular</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Operations Optimization
            </h3>
            <p className="text-sm text-gray-200">
              Streamline processes, eliminate inefficiencies, and build scalable
              operational frameworks.
            </p>
          </div>

          {/* Growth Acceleration */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <div className="badge-purple">High Impact</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Growth Acceleration
            </h3>
            <p className="text-sm text-gray-200">
              Revenue optimization strategies and market expansion planning for
              rapid scaling.
            </p>
          </div>

          {/* Team Development */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div className="badge-orange">Essential</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Team Development
            </h3>
            <p className="text-sm text-gray-200">
              Leadership coaching and organizational development to build
              high-performing teams.
            </p>
          </div>

          {/* Performance Analytics */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
              <div className="badge-cyan">Data-Driven</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Performance Analytics
            </h3>
            <p className="text-sm text-gray-200">
              KPI tracking, business intelligence setup, and data-driven
              decision frameworks.
            </p>
          </div>

          {/* Innovation Strategy */}
          <div className="card-gradient-red">
            <div className="mb-4 flex items-center justify-between">
              <div className="icon-container">
                <Lightbulb className="h-6 w-6 text-black" />
              </div>
              <div className="badge-yellow">Future-Ready</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Innovation Strategy
            </h3>
            <p className="text-sm text-gray-200">
              Digital transformation roadmaps and emerging technology
              integration planning.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-8 text-xl text-gray-200">
            You didn’t find us by accident.
          </p>
          <Button
            className="text-md cursor-pointer rounded-full p-6 font-sans font-light"
            variant="default"
          >
            Schedule Your Strategy Session
          </Button>
        </div>
      </div>
    </section>
  );
}
