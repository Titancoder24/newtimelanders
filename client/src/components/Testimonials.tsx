import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ryan Hoffman",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec",
    quote: "TimeAlign has transformed how our team schedules meetings. The AI suggestions are incredibly accurate!"
  },
  {
    name: "Sarah Chen",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1554774853-b415df9eeb92",
    quote: "The time saved on scheduling has been incredible. Our productivity has increased significantly."
  },
  {
    name: "Michael Roberts",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1554774853-6a56f62c6451",
    quote: "A game-changer for our remote team. The timezone handling is flawless."
  },
  {
    name: "Emily Zhang",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    quote: "Finally, a scheduling tool that actually understands how teams work!"
  }
];

export default function Testimonials() {
  const [ref, controls] = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.6 } }
        }}
        className="space-y-12"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of teams worldwide
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </section>
  );
}
