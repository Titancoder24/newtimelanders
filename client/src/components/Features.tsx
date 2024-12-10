import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Brain, Calendar, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Scheduling",
    description: "Our AI analyzes everyone's calendars to find the perfect meeting time automatically."
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "Seamlessly integrates with your existing calendar apps for real-time availability."
  },
  {
    icon: Users,
    title: "Team Coordination",
    description: "Coordinate across time zones and manage complex team schedules effortlessly."
  },
  {
    icon: Zap,
    title: "Instant Scheduling",
    description: "Schedule meetings in seconds with our smart recommendation engine."
  }
];

export default function Features() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="features" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 }
          }
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">
            Everything you need for effortless scheduling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
