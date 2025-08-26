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
    <section id="services" className="relative px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
          Is this for you?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Strategic Planning */}
          <div className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 via-red-800/15 to-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400/40 hover:shadow-2xl hover:shadow-red-500/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white p-3 shadow-lg shadow-red-500/25 transition-transform duration-300 group-hover:scale-110">
                <Target className="h-6 w-6 text-black" />
              </div>
              <div className="rounded-full border border-green-400/30 bg-green-400/20 px-3 py-1 text-sm font-semibold text-green-400 backdrop-blur-sm">
                Core Service
              </div>
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
          <div className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 via-red-800/15 to-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400/40 hover:shadow-2xl hover:shadow-red-500/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white p-3 shadow-lg shadow-red-500/25 transition-transform duration-300 group-hover:scale-110">
                <Settings className="h-6 w-6 text-black" />
              </div>
              <div className="rounded-full border border-blue-400/30 bg-blue-400/20 px-3 py-1 text-sm font-semibold text-blue-400 backdrop-blur-sm">
                Popular
              </div>
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
          <div className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 via-red-800/15 to-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400/40 hover:shadow-2xl hover:shadow-red-500/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white p-3 shadow-lg shadow-red-500/25 transition-transform duration-300 group-hover:scale-110">
                <TrendingUp className="h-6 w-6 text-black" />
              </div>
              <div className="rounded-full border border-purple-400/30 bg-purple-400/20 px-3 py-1 text-sm font-semibold text-purple-400 backdrop-blur-sm">
                High Impact
              </div>
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
          <div className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 via-red-800/15 to-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400/40 hover:shadow-2xl hover:shadow-red-500/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white p-3 shadow-lg shadow-red-500/25 transition-transform duration-300 group-hover:scale-110">
                <Users className="h-6 w-6 text-black" />
              </div>
              <div className="rounded-full border border-orange-400/30 bg-orange-400/20 px-3 py-1 text-sm font-semibold text-orange-400 backdrop-blur-sm">
                Essential
              </div>
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
          <div className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 via-red-800/15 to-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400/40 hover:shadow-2xl hover:shadow-red-500/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white p-3 shadow-lg shadow-red-500/25 transition-transform duration-300 group-hover:scale-110">
                <BarChart3 className="h-6 w-6 text-black" />
              </div>
              <div className="rounded-full border border-cyan-400/30 bg-cyan-400/20 px-3 py-1 text-sm font-semibold text-cyan-400 backdrop-blur-sm">
                Data-Driven
              </div>
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
          <div className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 via-red-800/15 to-black/30 p-6 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-red-400/40 hover:shadow-2xl hover:shadow-red-500/30">
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-white p-3 shadow-lg shadow-red-500/25 transition-transform duration-300 group-hover:scale-110">
                <Lightbulb className="h-6 w-6 text-black" />
              </div>
              <div className="rounded-full border border-yellow-400/30 bg-yellow-400/20 px-3 py-1 text-sm font-semibold text-yellow-400 backdrop-blur-sm">
                Future-Ready
              </div>
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
