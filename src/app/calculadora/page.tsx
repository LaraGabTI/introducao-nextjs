import Calculadora from "@/components/Calculadora";

export default function Page() {
    return (
        <main className="min-h-screen grid place-items-center p-6">
        <div className="w-full max-w-sm">
            <Calculadora />
        </div>
        </main>
    );
}