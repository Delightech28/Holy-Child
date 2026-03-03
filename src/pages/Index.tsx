import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Microscope,
  Palette,
  Star,
  Quote,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-36">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(43_96%_56%/0.3),transparent_60%)]" />
        </div>
        <div className="container relative z-10 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-sans text-secondary">
              <Star className="h-4 w-4" />
              Excellence in Education Since 1995
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
              Holy Child School
            </h1>
            <p className="mt-6 font-sans text-lg text-primary-foreground/80 md:text-xl leading-relaxed">
              Nurturing young minds with academic excellence, moral integrity, and a passion for lifelong learning. 
              Primary &amp; Secondary education that shapes tomorrow's leaders.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/enrollment">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-sans text-base px-8 h-12 rounded-full">
                  Enroll Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-sans text-base px-8 h-12 rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              About Our School
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
            <p className="mt-8 font-sans text-lg text-muted-foreground leading-relaxed">
              Holy Child School has been a beacon of educational excellence for over two decades. 
              Founded on the principles of holistic development, we provide a nurturing environment 
              where students grow academically, socially, and morally. Our dedicated staff and 
              modern facilities ensure every child reaches their full potential.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              { title: "Our Mission", desc: "To provide quality education that develops the whole child — intellectually, physically, and morally — preparing them for a bright future." },
              { title: "Our Vision", desc: "To be a leading institution recognized for academic excellence, character formation, and community impact across the nation." },
              { title: "Our Values", desc: "Integrity, excellence, compassion, discipline, and respect form the pillars of everything we do at Holy Child School." },
            ].map((item) => (
              <Card key={item.title} className="border-none bg-muted/50 shadow-none">
                <CardContent className="p-8 text-center">
                  <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 font-sans text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Programs</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
            <p className="mt-4 font-sans text-muted-foreground">Comprehensive education from primary through secondary school</p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Card className="group overflow-hidden border-2 border-transparent hover:border-secondary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Primary School</h3>
                <p className="mt-3 font-sans text-muted-foreground leading-relaxed">
                  Our primary program (Grades 1–6) builds a strong academic foundation through engaging, 
                  child-centered learning. Students develop literacy, numeracy, critical thinking, 
                  and social skills in a warm, supportive environment.
                </p>
                <ul className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Star className="h-3 w-3 text-secondary" /> Interactive learning methods</li>
                  <li className="flex items-center gap-2"><Star className="h-3 w-3 text-secondary" /> Small class sizes</li>
                  <li className="flex items-center gap-2"><Star className="h-3 w-3 text-secondary" /> Extracurricular activities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 border-transparent hover:border-secondary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20 mb-6">
                  <GraduationCap className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Secondary School</h3>
                <p className="mt-3 font-sans text-muted-foreground leading-relaxed">
                  Our secondary program (JSS 1 – SS 3) prepares students for national examinations 
                  and higher education. With a rigorous curriculum and experienced teachers, 
                  students excel in sciences, arts, and commercial subjects.
                </p>
                <ul className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Star className="h-3 w-3 text-secondary" /> WAEC & NECO preparation</li>
                  <li className="flex items-center gap-2"><Star className="h-3 w-3 text-secondary" /> Science & computer labs</li>
                  <li className="flex items-center gap-2"><Star className="h-3 w-3 text-secondary" /> Career guidance counseling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* School Environment */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Environment</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
            <p className="mt-4 font-sans text-muted-foreground">A safe, inspiring space for learning and growth</p>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Classroom Building",
              "Science Laboratory",
              "School Library",
              "Sports Field",
              "Computer Lab",
              "Assembly Hall",
            ].map((label, i) => (
              <div key={label} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/80">
                      {[BookOpen, Microscope, BookOpen, Trophy, Microscope, Users][i] &&
                        (() => {
                          const Icon = [BookOpen, Microscope, BookOpen, Trophy, Microscope, Users][i];
                          return <Icon className="h-6 w-6 text-primary-foreground" />;
                        })()}
                    </div>
                  </div>
                </div>
                <span className="absolute bottom-3 left-3 font-sans text-sm font-medium text-primary-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Why Choose Holy Child?
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, title: "Qualified Teachers", desc: "Experienced, passionate educators dedicated to student success" },
              { icon: Microscope, title: "Modern Facilities", desc: "Well-equipped labs, library, and technology-driven classrooms" },
              { icon: Palette, title: "Extracurriculars", desc: "Sports, arts, music, and clubs for holistic development" },
              { icon: Trophy, title: "Proven Results", desc: "Consistently excellent performance in national examinations" },
            ].map((item) => (
              <Card key={item.title} className="border-none bg-primary-foreground/10 backdrop-blur shadow-none">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    <item.icon className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground">{item.title}</h3>
                  <p className="mt-2 font-sans text-sm text-primary-foreground/70">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              What Parents &amp; Students Say
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary" />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { name: "Mrs. Adebayo", role: "Parent", text: "Holy Child School transformed my children's academic journey. The teachers are caring and the environment is truly nurturing." },
              { name: "Chidinma O.", role: "SS3 Student", text: "I love the science lab and the extra classes. The teachers make learning fun and always encourage us to do our best." },
              { name: "Mr. Okonkwo", role: "Parent", text: "The discipline and moral training at Holy Child is unmatched. My son has grown both academically and in character." },
            ].map((t) => (
              <Card key={t.name} className="border-none bg-muted/50 shadow-none">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-secondary/60 mb-4" />
                  <p className="font-sans text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-foreground">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="font-sans text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-secondary-foreground md:text-4xl">
            Ready to Join Holy Child School?
          </h2>
          <p className="mt-4 font-sans text-secondary-foreground/80">
            Give your child the gift of quality education. Start the enrollment process today.
          </p>
          <Link to="/enrollment">
            <Button size="lg" className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-base px-8 h-12 rounded-full">
              Begin Enrollment
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
