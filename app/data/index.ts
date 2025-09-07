import { Service } from "../types";
import { Anthropic, CursorAi, OpenAI } from "@/public/svgs";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export const navbarRoutes = [
    { label: 'Features', src: '#' },
    { label: 'Resources', src: '#' },
]

export const services: Service[] = [
    {
        title: "AI",
        description:
            "Stripe supports businesses across the AI ecosystem—from usage-based billing for AI assistants like Perplexity to premium subscriptions for infrastructure providers like OpenAI.",
        logos: [OpenAI, CursorAi, Anthropic],
    },
    {
        title: "SaaS",
        description:
            "Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions, invoicing, tax, accounting, and more.",
        logos: [OpenAI, CursorAi, Anthropic],
    },
    {
        title: "Marketplace",
        description:
            "Get everything you need to onboard providers, manage multiparty payments, and send payouts, all in one place.",
        logos: [OpenAI, CursorAi, Anthropic],
    },
];

// foorter Social Links
export const socialLinks = [
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
    { label: "Instagram", href: "#", icon: Instagram },
];

export const resourcesLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
    { label: "Subprocessors", href: "#" },
];

export const companyLinks = [
    { label: "Feedback", href: "#" },
    { label: "Media inquiries", href: "#" },
    { label: "Contact us", href: "#" },
];

export const globalScaleStats = [
    { value: "500M+", label: "API requests / day" },
    { value: "99.999%", label: "Uptime" },
    { value: "90%", label: "of adults reached" },
    { value: "135+", label: "Currencies & countries" },
];

export const launchData = [
    { label: "Signed Activity Logs", des: "Cryptographically recorded and tamper-evident audit trails. Timestamped entries with digital signatures for verifiable billing proof.", img: '/assets/images/c1.png' },
    { label: "Billing Checks", des: "Automated validation against client billing rules. Prevent rejections and write-downs with detailed compliance reports.", img: '/assets/images/c2.png' },
    { label: "Access Controls", des: "Enterprise security with SSO/SCIM integration and role-based permissions. Audit-ready access management and data controls.", img: '/assets/images/c3.png' },
];


export  const enterPriseData = [
        {
            label: 'BMW',
            img: '/assets/images/m1.jpg',
            des: 'See how BMW gives us sponsor for their future products',
            overlay: 'blue-gradient',
            heading1: 'Millions',
            value1: 'Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions',
            heading2: '350+',
            value2: 'US dealerships',
            heading3: 'Products used',
            value3: ['Card Payment', 'Onsite payment'],
        },
        {
            label: 'Amazon',
            img: '/assets/images/m2.jpg',
            des: 'See how Amazon gives us sponsor for their future products',
            overlay: 'yellow-gradient',
            heading1: 'Millions',
            value1: 'Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions',
            heading2: '500+',
            value2: 'Global warehouses',
            heading3: 'Products used',
            value3: ['Card Payment', 'Onsite payment'],
        },
        {
            label: 'Maersk',
            img: '/assets/images/m3.jpg',
            des: 'See how Maersk gives us sponsor for their future products',
            overlay: 'red-gradient',
            heading1: 'Millions',
            value1: 'Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions',
            heading2: '200+',
            value2: 'Ports connected',
            heading3: 'Products used',
            value3: ['Card Payment', 'Onsite payment'],
        },
        {
            label: 'Twilio',
            img: '/assets/images/m4.jpg',
            des: 'See how Twilio gives us sponsor for their future products',
            overlay: 'green-gradient',
            heading1: 'Millions',
            value1: 'Developers using Twilio APIs',
            heading2: '350+',
            value2: 'Global partners',
            heading3: 'Products used',
            value3: ['Card Payment', 'Onsite payment'],
        },
    ];