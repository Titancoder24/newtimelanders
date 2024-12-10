import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";

const integrations = [
  {
    name: "Google Calendar",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/googlecalendar.svg",
  },
  {
    name: "Microsoft Outlook",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoftoutlook.svg",
  },
  {
    name: "Zoom",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/zoom.svg",
  },
  {
    name: "Slack",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/slack.svg",
  }
];

export default function Integrations() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="integrations" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Seamless Integrations</h2>
          <p className="text-xl text-gray-600">
            Works with your favorite tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center">
                  <img
                    src={integration.icon}
                    alt={integration.name}
                    className="w-16 h-16 mb-4"
                  />
                  <h3 className="font-semibold text-lg">{integration.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
