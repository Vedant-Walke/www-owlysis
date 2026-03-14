import assets from "@/lib/assets"

const Header = () => {

    const links = [
        { label: "Products", href: "/products" },
        { label: "Solutions", href: "/solutions" },
        { label: "Customers", href: "/customers" },
        { label: "Pricing", href: "/pricing" },
        { label: "Blog", href: "/blog" },
    ]

    return (
        <header
            className="sticky top-6 left-0 right-0 z-[100] mx-auto w-full max-w-[1200px] flex items-center justify-between border border-black backdrop-blur-xl bg-white/40 rounded-full h-14 px-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        >
            <div className="flex items-center gap-4">
                <a
                    href="/"
                    className="flex items-center justify-center transition-transform hover:scale-105"
                >
                    <img
                        src={assets.logo.icon}
                        alt="Owlysis Logo"
                        className="size-8"
                    />
                </a>
                <div className="hidden md:flex items-center gap-1">
                    {links.map((value) => (
                        <a
                            key={value.label}
                            href={value.href}
                            className="h-10 flex items-center justify-center px-4 rounded-full text-sm text-muted-foreground hover:bg-black/5 hover:text-black transition-all font-medium"
                        >
                            {value.label}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-2">
                <a
                    href="/contact"
                    className="flex h-10 items-center justify-center px-5 rounded-full text-sm font-semibold text-muted-foreground hover:bg-black/5 hover:text-black transition-all"
                >
                    Contact us
                </a>
                <a
                    target="_blank"
                    href="https://app.owlysis.com"
                    className="flex h-10 items-center justify-center px-6 bg-black text-white rounded-full text-sm font-bold shadow-lg shadow-black/20 hover:opacity-90 transition-all"
                >
                    Login
                </a>
            </div>
        </header>
    )
}

export { Header }
