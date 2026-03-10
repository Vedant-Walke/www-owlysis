import assets from "@/lib/assets"

const Header = () => {

    const links = [
        {
            label: "Products",
            href: "/products",
        },
        {
            label: "Solutions",
            href: "/solutions",
        },
        {
            label: "Customers",
            href: "/customers",
        },
        {
            label: "Pricing",
            href: "/pricing",
        },
        {
            label: "Blog",
            href: "/blog",
        },
    ]

    return (
        <header className="border top-0 left-0 right-0 mt-6 min-h-12 w-320 flex items-center justify-between">
            <div className="flex items-center">
                <a href="/" className="aspect-square h-12 flex items-center justify-center border-r md:border-r-0">
                    <img
                        src={assets.logo.icon}
                        alt="Owlysis Logo"
                        className="size-8"
                    />
                </a>
                {links.map((value) => (
                    <a
                        key={value.label}
                        href={value.href}
                        className="hidden md:flex h-12 items-center justify-center px-3 border border-y-transparent border-r-transparent last:border-r-border hover:border-primary transition"
                    >
                        {value.label}
                    </a>
                ))}
            </div>
            <div className="flex items-center">
                <a
                    href="/contact"
                    className="flex h-12 items-center justify-center px-3 border border-y-transparent border-r-transparent last:border-r-border hover:border-primary transition"
                >
                    Contact us
                </a>
                <a
                    target="_blank"
                    href="https://app.owlysis.com"
                    className="flex h-12 items-center justify-center px-3 bg-primary text-primary-foreground"
                >
                    Login
                </a>
            </div>
        </header>
    )
}

export { Header }