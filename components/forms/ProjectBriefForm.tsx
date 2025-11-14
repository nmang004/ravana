"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface ProjectBriefData {
  // Step 1: Contact Info
  name: string;
  email: string;
  company: string;
  phone: string;

  // Step 2: Project Type & Goals
  services: string[];
  projectGoals: string;
  targetAudience: string;

  // Step 3: Timeline & Budget
  launchDate: string;
  budgetRange: string;

  // Step 4: Technical Details
  existingWebsite: string;
  hostingPreference: string;
  requiredIntegrations: string;

  // Step 5 is review
}

const services = [
  { value: "web", label: "Web Development" },
  { value: "saas", label: "SaaS Development" },
  { value: "seo", label: "SEO Services" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "branding", label: "Branding & Design" },
];

const budgetRanges = [
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k+", label: "$100,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const hostingOptions = [
  { value: "need-hosting", label: "I need hosting recommendations" },
  { value: "have-hosting", label: "I have existing hosting" },
  { value: "managed", label: "I want fully managed hosting" },
  { value: "not-sure", label: "Not sure yet" },
];

export default function ProjectBriefForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState<ProjectBriefData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    services: [],
    projectGoals: "",
    targetAudience: "",
    launchDate: "",
    budgetRange: "",
    existingWebsite: "",
    hostingPreference: "",
    requiredIntegrations: "",
  });

  const totalSteps = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceToggle = (serviceValue: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceValue)
        ? prev.services.filter((s) => s !== serviceValue)
        : [...prev.services, serviceValue],
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.name && formData.email && formData.company);
      case 2:
        return !!(formData.services.length > 0 && formData.projectGoals);
      case 3:
        return !!(formData.launchDate && formData.budgetRange);
      case 4:
        return true; // All fields optional in step 4
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/project-brief", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit project brief");
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
      } else {
        throw new Error(result.error || "Failed to submit project brief");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">Let's start with your basic information</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Acme Corporation"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 123-4567"
                  className="mt-1"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Project Details</h3>
              <p className="text-muted-foreground">Tell us about your project</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Services Needed * (select all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {services.map((service) => (
                    <button
                      key={service.value}
                      type="button"
                      onClick={() => handleServiceToggle(service.value)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        formData.services.includes(service.value)
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-4 h-4 rounded border transition-all ${
                            formData.services.includes(service.value)
                              ? "bg-accent border-accent"
                              : "border-border"
                          }`}
                        >
                          {formData.services.includes(service.value) && (
                            <CheckCircle className="w-4 h-4 text-accent-foreground" />
                          )}
                        </div>
                        <span className="font-medium">{service.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="projectGoals">Project Goals & Objectives *</Label>
                <Textarea
                  id="projectGoals"
                  name="projectGoals"
                  value={formData.projectGoals}
                  onChange={handleInputChange}
                  placeholder="What are you hoping to achieve with this project? What success looks like?"
                  rows={4}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Textarea
                  id="targetAudience"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleInputChange}
                  placeholder="Who is your target customer or user?"
                  rows={3}
                  className="mt-1"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Timeline & Budget</h3>
              <p className="text-muted-foreground">Help us understand your timeline and budget</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="launchDate">Desired Launch Date *</Label>
                <Input
                  id="launchDate"
                  name="launchDate"
                  type="date"
                  value={formData.launchDate}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  This helps us prioritize and schedule your project
                </p>
              </div>

              <div>
                <Label htmlFor="budgetRange">Budget Range *</Label>
                <select
                  id="budgetRange"
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-muted-foreground mt-1">
                  This helps us provide accurate recommendations
                </p>
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Technical Details</h3>
              <p className="text-muted-foreground">Additional technical information (all optional)</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="existingWebsite">Existing Website URL</Label>
                <Input
                  id="existingWebsite"
                  name="existingWebsite"
                  type="url"
                  value={formData.existingWebsite}
                  onChange={handleInputChange}
                  placeholder="https://yourwebsite.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="hostingPreference">Hosting Preference</Label>
                <select
                  id="hostingPreference"
                  name="hostingPreference"
                  value={formData.hostingPreference}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background mt-1"
                >
                  <option value="">Select an option</option>
                  {hostingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="requiredIntegrations">Required Integrations</Label>
                <Textarea
                  id="requiredIntegrations"
                  name="requiredIntegrations"
                  value={formData.requiredIntegrations}
                  onChange={handleInputChange}
                  placeholder="Any third-party tools or services we need to integrate? (CRM, payment processors, analytics, etc.)"
                  rows={4}
                  className="mt-1"
                />
              </div>
            </div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Review & Submit</h3>
              <p className="text-muted-foreground">Please review your information before submitting</p>
            </div>

            <div className="space-y-6">
              {/* Contact Info Review */}
              <Card className="p-3 md:p-6 bg-muted/20">
                <h4 className="font-semibold text-accent mb-3">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Name:</span> {formData.name}</p>
                  <p><span className="text-muted-foreground">Email:</span> {formData.email}</p>
                  <p><span className="text-muted-foreground">Company:</span> {formData.company}</p>
                  {formData.phone && <p><span className="text-muted-foreground">Phone:</span> {formData.phone}</p>}
                </div>
              </Card>

              {/* Project Details Review */}
              <Card className="p-3 md:p-6 bg-muted/20">
                <h4 className="font-semibold text-accent mb-3">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Services:</span> {formData.services.map(s => services.find(srv => srv.value === s)?.label).join(", ")}</p>
                  <p><span className="text-muted-foreground">Goals:</span> {formData.projectGoals}</p>
                  {formData.targetAudience && <p><span className="text-muted-foreground">Target Audience:</span> {formData.targetAudience}</p>}
                </div>
              </Card>

              {/* Timeline & Budget Review */}
              <Card className="p-3 md:p-6 bg-muted/20">
                <h4 className="font-semibold text-accent mb-3">Timeline & Budget</h4>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Launch Date:</span> {formData.launchDate}</p>
                  <p><span className="text-muted-foreground">Budget:</span> {budgetRanges.find(b => b.value === formData.budgetRange)?.label}</p>
                </div>
              </Card>

              {/* Technical Details Review */}
              {(formData.existingWebsite || formData.hostingPreference || formData.requiredIntegrations) && (
                <Card className="p-3 md:p-6 bg-muted/20">
                  <h4 className="font-semibold text-accent mb-3">Technical Details</h4>
                  <div className="space-y-2 text-sm">
                    {formData.existingWebsite && <p><span className="text-muted-foreground">Existing Website:</span> {formData.existingWebsite}</p>}
                    {formData.hostingPreference && <p><span className="text-muted-foreground">Hosting:</span> {hostingOptions.find(h => h.value === formData.hostingPreference)?.label}</p>}
                    {formData.requiredIntegrations && <p><span className="text-muted-foreground">Integrations:</span> {formData.requiredIntegrations}</p>}
                  </div>
                </Card>
              )}
            </div>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="font-semibold text-green-500">Project brief submitted successfully!</p>
                  <p className="text-sm text-muted-foreground">We'll review your information and get back to you within 24-48 hours with a detailed proposal.</p>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-destructive" />
                <div>
                  <p className="font-semibold text-destructive">Failed to submit project brief</p>
                  <p className="text-sm text-muted-foreground">{errorMessage}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="p-3 sm:p-6 md:p-8">
      {/* Progress Indicator */}
      <div className="mb-6 md:mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-accent">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1 || isSubmitting}
          className="flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {currentStep < totalSteps ? (
          <Button
            type="button"
            onClick={nextStep}
            disabled={!validateStep(currentStep)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting || submitStatus === "success"}
            className="bg-accent hover:bg-accent/90 text-accent-foreground flex items-center"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                Submit Brief
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </Card>
  );
}
