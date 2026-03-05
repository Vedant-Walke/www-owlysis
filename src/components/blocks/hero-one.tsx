interface HeroOneProps {
    heroText: string;
    heroImage: string;
}

const HeroOne = ({
    heroImage,
    heroText
}: HeroOneProps) => {
    return (
        <section
            className="min-h-[70vh] flex flex-col"
        >
            <h1
                className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl text-base-800 text-balance font-medium tracking-tight"
            >
                {heroText}
            </h1>
        </section>
    )
}

export {HeroOne}