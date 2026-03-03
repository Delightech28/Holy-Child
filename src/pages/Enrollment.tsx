import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { GraduationCap } from "lucide-react";

const enrollmentSchema = z.object({
  studentFirstName: z.string().min(2, "First name is required"),
  studentLastName: z.string().min(2, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  program: z.string().min(1, "Program is required"),
  gradeLevel: z.string().min(1, "Grade level is required"),
  parentName: z.string().min(2, "Parent/guardian name is required"),
  parentPhone: z.string().min(7, "Valid phone number is required"),
  parentEmail: z.string().email("Valid email is required"),
  address: z.string().min(5, "Address is required"),
  previousSchool: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type EnrollmentForm = z.infer<typeof enrollmentSchema>;

const Enrollment = () => {
  const { toast } = useToast();
  const form = useForm<EnrollmentForm>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      studentFirstName: "", studentLastName: "", dateOfBirth: "", gender: "",
      program: "", gradeLevel: "", parentName: "", parentPhone: "",
      parentEmail: "", address: "", previousSchool: "", additionalInfo: "",
    },
  });

  const onSubmit = (data: EnrollmentForm) => {
    console.log("Enrollment data:", data);
    toast({
      title: "Enrollment Submitted! 🎉",
      description: `Thank you, ${data.studentFirstName}! Your enrollment application has been received. We will contact you shortly.`,
    });
    form.reset();
  };

  const selectedProgram = form.watch("program");

  const gradeOptions = selectedProgram === "primary"
    ? ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"]
    : selectedProgram === "secondary"
    ? ["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"]
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-primary py-20">
        <div className="container text-center">
          <GraduationCap className="mx-auto h-12 w-12 text-secondary mb-4" />
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">Student Enrollment</h1>
          <p className="mt-4 font-sans text-lg text-primary-foreground/80">Begin your journey at Holy Child School</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 md:p-10">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">

                  {/* Student Information */}
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-1">Student Information</h2>
                    <div className="h-0.5 w-10 bg-secondary rounded-full mb-6" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="studentFirstName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">First Name</FormLabel>
                          <FormControl><Input placeholder="First name" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="studentLastName" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Last Name</FormLabel>
                          <FormControl><Input placeholder="Last name" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="dateOfBirth" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Date of Birth</FormLabel>
                          <FormControl><Input type="date" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="gender" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Gender</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-1">Program Selection</h2>
                    <div className="h-0.5 w-10 bg-secondary rounded-full mb-6" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="program" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Program</FormLabel>
                          <Select onValueChange={(val) => { field.onChange(val); form.setValue("gradeLevel", ""); }} value={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Select program" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="primary">Primary School</SelectItem>
                              <SelectItem value="secondary">Secondary School</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="gradeLevel" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Grade Level</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value} disabled={!selectedProgram}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {gradeOptions.map((g) => (
                                <SelectItem key={g} value={g}>{g}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Parent/Guardian */}
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-1">Parent / Guardian Information</h2>
                    <div className="h-0.5 w-10 bg-secondary rounded-full mb-6" />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <FormField control={form.control} name="parentName" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel className="font-sans">Full Name</FormLabel>
                          <FormControl><Input placeholder="Parent/guardian full name" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="parentPhone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Phone Number</FormLabel>
                          <FormControl><Input type="tel" placeholder="+234 ..." {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="parentEmail" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Email Address</FormLabel>
                          <FormControl><Input type="email" placeholder="email@example.com" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="address" render={({ field }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel className="font-sans">Home Address</FormLabel>
                          <FormControl><Input placeholder="Full address" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  {/* Additional */}
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-1">Additional Information</h2>
                    <div className="h-0.5 w-10 bg-secondary rounded-full mb-6" />
                    <div className="space-y-4">
                      <FormField control={form.control} name="previousSchool" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Previous School (Optional)</FormLabel>
                          <FormControl><Input placeholder="Name of previous school" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="additionalInfo" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Any Additional Notes (Optional)</FormLabel>
                          <FormControl><Textarea placeholder="Medical conditions, special needs, etc." {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full font-sans rounded-full h-12 text-base">
                    Submit Enrollment Application
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;
