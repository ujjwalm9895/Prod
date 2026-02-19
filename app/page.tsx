import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              R2F - Right2Fit
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Premium MotionFit™ Trousers for Indian Men
            </p>
            <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
              Shop Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
