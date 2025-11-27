import { ArrowUpRight, Mail, Github, Linkedin, FileText, Newspaper } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Contact",
    description: "Get in touch with me.",
};

export default function ContactPage() {
    return (
        <section>
            <h1 className="font-bold text-2xl mb-8 tracking-tighter">Contact Me</h1>
            <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                My digital footprint.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <Link
                    href="mailto:chiwai.kiriba@gmail.com"
                    className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">Email</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                </Link>

                {/* LinkedIn */}
                <Link
                    href="https://www.linkedin.com/in/john-chiwai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Linkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">LinkedIn</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                </Link>

                {/* GitHub */}
                <Link
                    href="https://github.com/jchiwaii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Github className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">GitHub</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                </Link>

                {/* Medium */}
                <Link
                    href="https://medium.com/@chiwai.kiriba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <Newspaper className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">Medium</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                </Link>

                {/* Substack */}
                <Link
                    href="https://substack.com/@chiwaii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                >
                    <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                        <span className="font-medium text-zinc-900 dark:text-zinc-100">Substack</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                </Link>
            </div>
        </section>
    );
}
