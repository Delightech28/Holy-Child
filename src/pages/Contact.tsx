import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">Contact Us</h1>
          <p className="mt-4 font-sans text-lg text-primary-foreground/80">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-3 font-sans text-muted-foreground leading-relaxed">
                Have questions about enrollment, programs, or anything else? Reach out and our team will respond promptly.
              </p>

              <div className="mt-8 space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "123 Education Avenue, Lagos, Nigeria" },
                  { icon: Phone, label: "Phone", value: "+234 801 234 5678" },
                  { icon: Mail, label: "Email", value: "info@holychildschool.edu" },
                  { icon: Clock, label: "Office Hours", value: "Mon – Fri: 8:00 AM – 4:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-foreground">{item.label}</p>
                      <p className="font-sans text-sm text-muted-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                <p className="font-sans text-sm text-muted-foreground">Map Placeholder</p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="font-sans">Full Name</Label>
                      <Input required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-sans">Email</Label>
                      <Input required type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-sans">Subject</Label>
                    <Input required placeholder="How can we help?" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-sans">Message</Label>
                    <Textarea required placeholder="Your message..." className="min-h-[120px]" />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full font-sans rounded-full h-11">
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
