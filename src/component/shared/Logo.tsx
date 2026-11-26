import Link from "next/link";

interface LogoProps {
    showText?: boolean;
    className?: string;
}

const Logo = ({ showText = true, className = "" }: LogoProps) => {
    return (
        <Link
            href="/"
            aria-label="MyVerse home"
            className={`inline-flex w-fit items-center gap-2.5 ${className}`}
        >
            <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 shrink-0"
                aria-hidden="true"
            >
                <path
                    d="M24 3.5C35.32 3.5 44.5 12.68 44.5 24C44.5 35.32 35.32 44.5 24 44.5C12.68 44.5 3.5 35.32 3.5 24C3.5 19.7 4.82 15.7 7.08 12.4"
                    stroke="#7656D6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="0.1 0.1"
                />
                <path
                    d="M10 31V17L19.5 27L24 21.8L28.5 27L38 17V31"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M24 5.5V10M21.5 8H26.5"
                    stroke="#7656D6"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>

            {showText && (
                <span className="font-serif text-[25px] font-semibold tracking-[-1.2px] text-foreground">
                    My<span className="font-normal italic text-[#7656D6]">Verse</span>
                    <span className="ml-0.5 align-top text-[10px] font-sans font-medium tracking-normal text-[#7656D6]">
                        ®
                    </span>
                </span>
            )}
        </Link>
    );
};

export default Logo;
