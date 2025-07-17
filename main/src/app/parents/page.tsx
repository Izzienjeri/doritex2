import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardTitle } from "@/components/ui/card";
import { BookOpenCheck, BrainCircuit, Home, Smile } from "lucide-react";

const features = [
    {
        icon: BookOpenCheck,
        title: "KICD Approved & CBC Aligned",
        description: "Rest assured knowing every book meets the Ministry of Education's standards, perfectly aligning with the Competency-Based Curriculum.",
    },
    {
        icon: BrainCircuit,
        title: "Fosters Creativity & Critical Thinking",
        description: "Our activities are designed to go beyond memorization, encouraging your child to explore, innovate, and think for themselves.",
    },
    {
        icon: Smile,
        title: "Makes Learning Fun",
        description: "With engaging illustrations and practical tasks, we turn learning into an exciting adventure your child will love.",
    },
    {
        icon: Home,
        title: "Easy to Use at Home",
        description: "Clear instructions and readily available materials mean you can easily support your child's learning journey outside the classroom.",
    },
];

const faqs = [
    {
        question: "Are these books only for use in school?",
        answer: "Not at all! The Champion Creative Series is designed for use both in the classroom and at home. They are a great tool for parents to support their child's learning, reinforce concepts, and work on fun projects together over the weekend or holidays."
    },
    {
        question: "What age group is each category for?",
        answer: "Generally, 'Lower Primary' covers Grades 1-3, 'Upper Primary' is for Grades 4-6, and 'Junior Secondary' is for Grades 7-9. Each book is clearly marked with the specific grade level it's intended for."
    },
    {
        question: "How do I know which book is right for my child?",
        answer: "Simply match the grade level of the book with your child's current grade in school. All our books are aligned with the official CBC curriculum for that grade, so you can be confident it's the right fit."
    },
    {
        question: "What kind of activities are in the books?",
        answer: "The books are packed with a variety of hands-on activities, including drawing, coloring, crafting, music exercises, and introductory sports skills. The goal is to provide a well-rounded, practical, and enjoyable learning experience."
    }
];

export default function ParentsHubPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary/5 bg-dot-grid text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-primary">Parents Hub</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Your partner in nurturing a creative and confident learner. Discover resources, tips, and answers to help you support your child&apos;s educational journey with the Champion Creative Series.
                    </p>
                </div>
            </section>

            {/* Why Our Books Section */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Parents & Teachers Trust Our Books</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            We&apos;re committed to providing educational materials that are not only effective but also inspiring and easy to use.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <Card key={index} className="bg-card/80 border flex flex-col sm:flex-row items-start p-6 gap-6">
                                <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <div>
                                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 md:py-32 bg-muted/40 border-t">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Have questions? We&apos;ve got answers. Here are some of the most common things parents ask us.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
        </div>
    );
}
