import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-bold leading-tight">
            Never Miss the{" "}
            <span className="text-primary">Perfect Time</span> Again
          </h1>
          <p className="text-xl text-gray-600">
            TimeAlign uses AI to find the optimal meeting times for everyone,
            eliminating the back-and-forth of scheduling.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd"
              alt="Modern scheduling interface"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3"
          >
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold">AI-Powered</p>
              <p className="text-sm text-gray-600">Smart Scheduling</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
