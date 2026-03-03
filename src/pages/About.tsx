import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">About Holy Child School</h1>
          <p className="mt-4 font-sans text-lg text-primary-foreground/80">Shaping futures through quality education since 1995</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="font-display text-3xl font-bold text-foreground text-center">Our Story</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
          <div className="mt-10 space-y-6 font-sans text-muted-foreground leading-relaxed">
            <p>
              Holy Child School was established in 1995 with a vision to provide accessible, high-quality education 
              that nurtures every aspect of a child's development. Starting with just 50 students and a handful of 
              dedicated teachers, the school has grown into a respected institution serving hundreds of families.
            </p>
            <p>
              Over the years, we have maintained our commitment to academic excellence while adapting to the evolving 
              needs of modern education. Our graduates have gone on to excel in universities and careers across the 
              nation and beyond, a testament to the strong foundation laid at Holy Child.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide holistic, child-centered education that develops intellectual curiosity, moral character, and practical skills for lifelong success." },
              { icon: Eye, title: "Our Vision", desc: "To be the leading primary and secondary school recognized for producing well-rounded, confident, and responsible citizens." },
              { icon: Heart, title: "Core Values", desc: "Faith, integrity, excellence, discipline, respect, and community service guide every decision and interaction at Holy Child." },
            ].map((item) => (
              <Card key={item.title} className="border-none shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Our Leadership</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Mrs. Grace Eze", role: "Principal", desc: "25+ years in education. M.Ed in Educational Administration." },
              { name: "Mr. David Okoro", role: "Vice Principal, Academics", desc: "Passionate about curriculum innovation and student achievement." },
              { name: "Mrs. Blessing Nwachukwu", role: "Head of Primary", desc: "Specialist in early childhood and primary education development." },
            ].map((person) => (
              <Card key={person.name} className="border-none bg-muted/50 shadow-none">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{person.name}</h3>
                  <p className="font-sans text-sm font-medium text-secondary">{person.role}</p>
                  <p className="mt-2 font-sans text-sm text-muted-foreground">{person.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Students" },
              { value: "50+", label: "Teachers" },
              { value: "28", label: "Years of Excellence" },
              { value: "95%", label: "Exam Pass Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold text-secondary md:text-4xl">{stat.value}</p>
                <p className="mt-1 font-sans text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
