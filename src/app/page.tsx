export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center w-full">
          Titan OS
        </h1>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mt-8">
        <p className="text-xl text-center w-full text-gray-600">
          Career Operating System
        </p>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mt-4">
        <p className="text-lg text-center w-full text-gray-500">
          Status: Foundation
        </p>
      </div>
    </main>
  )
}
