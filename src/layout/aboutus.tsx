import { MapPin, Globe, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative scroll-mt-32 bg-black/20 px-4 py-24 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Our Story
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            From personal branding to fractional teams, we're committed to
            empowering Asian talent on the global stage.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Story Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">
                The Verseva Journey
              </h3>
              <p className="leading-relaxed text-white/80">
                Verseva evolved from a personal branding agency to a platform
                for fractional teams, drawing inspiration from high-performance
                teams in Formula 1 and global tech. We're committed to
                connecting elite Asian talent with global opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
              <p className="leading-relaxed text-white/80">
                To accelerate business growth by connecting companies with elite
                Asian talent through flexible, high-performance fractional teams
                and leadership.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
              <p className="leading-relaxed text-white/80">
                A world where global companies and Asian professionals thrive
                together through flexible work arrangements that deliver
                exceptional value.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-8">
            <h3 className="mb-8 text-2xl font-semibold text-white">
              Our Values
            </h3>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20">
                  <MapPin className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Asian Excellence
                  </h4>
                  <p className="text-white/70">
                    Celebrating the exceptional talent and work ethic of Asian
                    professionals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20">
                  <Globe className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Global Excellence
                  </h4>
                  <p className="text-white/70">
                    Delivering world-class solutions that meet international
                    standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Collaborative Growth
                  </h4>
                  <p className="text-white/70">
                    Building relationships that benefit both clients and talent.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20">
                  <Target className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">
                    Precision & Velocity
                  </h4>
                  <p className="text-white/70">
                    Delivering with speed and accuracy, just like a
                    high-performance racing team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            className="text-md cursor-pointer rounded-full p-6 font-sans font-light"
            variant="default"
          >
            Learn More About Our Team
          </Button>
        </div>
      </div>
    </section>
  );
}
