import Header from "@/components/layouts/header";

type Props = {
    children: React.ReactNode
}

export default function AuthLayout({ children } : Props) {
    return (
        <>
            <Header />
            <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
                {children}
            </main>
        </>
    );
}