import { GitBranch, Linkedin, Mail, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils.js"
import { useToast } from "../hooks/use-toast"
import { Description } from "@radix-ui/react-toast"
import { useState } from "react"

export const ContactSection = () => {

    const { toast } = useToast();
    const [ isSubmitting, setIsSubmitting ] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast ({
                title: "Message Sent !",
                description: "Thank you for your message. I'll get back to you soon.",
            });
            setIsSubmitting(false);
        }, 1500); 
    }

    return (
    <section
    id="contact"
    className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get in <span className="text-primary">Touch</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind, want to say hello or want to grab some drinks ? Feel free to reach out.
            I'm always open to discuss about new opportunites or collaborations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        Contact Informations
                    </h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>  
                                <a href="mailto:sickemail@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    sickemail@email.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>{""}
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>  
                                <a href="tel:+667676767" className="text-muted-foreground hover:text-primary transition-colors">
                                    +33 6 67 67 67 67
                                </a>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect with Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <GitBranch />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form action="" className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input type="text"
                                name="name"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="John Doe"
                                />
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="coolemail@email.com"
                                />
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                name="message"
                                id="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello I'd like to ..."
                                />
                            </div>
                            <button typeof="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2"
                            )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />
                            </button>
                        </form>
                    </div>
            </div>
        </div>    
    </section>
    );
}