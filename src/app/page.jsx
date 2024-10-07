import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inject Buddy - Safeguard Protests and Organize with Ease</title>
    
   
    <meta name="description" content="Inject Buddy is the ultimate tool for organizing peaceful protests. Enhance coordination, ensure participant safety, and offer real-time updates with our secure communication platform." />
    <meta name="keywords" content="protest organizer, protest coordination, participant safety, real-time updates, secure communication, civil rights, protest tools" />
    <meta name="author" content="Nehemiah Onyango Jesse Nehemiah" />
    <meta name="robots" content="index, follow" />

    <link rel="canonical" href="https://neshjesse.github.io/patriot/" />
    
    <meta property="og:description" content="Inject Buddy helps you organize peaceful protests effectively, ensuring safety and real-time coordination for participants." />
    <meta property="og:image" content="https://neshjesse.github.io/patriot/public/social.png" />
    <meta property="og:url" content="https://neshjesse.github.io/patriot/public/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Inject Buddy" />
    <meta property="og:title" content="Inject Buddy - Organize peacefull protests with Ease" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Inject Buddy - Organize peacefull protests with Ease" />
    <meta name="twitter:description" content="Enhance coordination, participant safety, and communication during peaceful protests with Inject Buddy." />
    <meta name="twitter:image" content="https://neshjesse.github.io/patriot/public/social.png" />
 
    <link rel="icon" type="image/png" href="https://neshjesse.github.io/patriot/public/favicon.ico" />
    <link rel="apple-touch-icon" href="https://neshjesse.github.io/patriot/public/favicon.ico" />
    

    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    </head>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-100 to-gray-200">
  <main className="flex flex-col gap-12 row-start-2 items-center sm:items-start">
    <Navbar/>
    <p className="text-4xl font-extrabold text-gray-900 text-center sm:text-left">Inject Buddy - Empower Your Voice, Amplify Your Impact</p>
    
    <Image
      className="rounded-lg shadow-lg dark:invert"
      src="/hero.jpeg"
      alt="Peaceful Protest Organization"
      width={700}
      height={450}
      priority
    />

    <div className="text-center sm:text-left">
      <h1 className="text-4xl font-extrabold text-gray-900">
        Revolutionize Peaceful Protest Organization
      </h1>
      <p className="mt-4 text-xl text-gray-700">
        Inject Buddy empowers activists and community leaders to plan, manage, and execute impactful peaceful protests. From logistics to safety, we've got you covered. Make your voice heard and drive meaningful change.
      </p>
    </div>

    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Powerful Features for Effective Advocacy:</h2>
      <ul className="list-inside text-base text-left sm:text-left font-[family-name:var(--font-geist-mono)] space-y-3 text-gray-600">
        <li>• Comprehensive Event Planning: Create detailed protest events with interactive maps, route planning, and real-time updates.</li>
        <li>• Storytelling & Media Sharing: Amplify your message with compelling narratives and multimedia content.</li>
        <li>• Seamless Coordination: Effortlessly manage participants, volunteers, and logistics.</li>
        <li>• Safety First: Integrated tools for participant well-being, including emergency contacts and legal resources.</li>
        <li>• Data-Driven Insights: Measure your impact with participant metrics and analytics.</li>
      </ul>
    </div>

    <div className="flex gap-6 items-center flex-col sm:flex-row">
      <a
        className="rounded-full border border-solid border-transparent bg-green-500 text-white py-3 px-6 text-lg font-semibold hover:bg-green-600 transition ease-in-out duration-300"
        href="/signup"
      >
        Start Organizing Now
      </a>
      <a
        className="rounded-full border border-solid border-gray-400 text-gray-700 py-3 px-6 text-lg font-semibold hover:bg-gray-100 transition ease-in-out duration-300"
        href="/learn-more"
      >
        Explore Features
      </a>
    </div>
  </main>

  <footer className="row-start-3 flex gap-8 items-center justify-center">
    <a
      className="flex items-center gap-2 text-blue-600 hover:underline hover:underline-offset-4"
      href="https://humanrights.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/rights.jpeg"
        alt="Human Rights Icon"
        width={100}
        height={100}
      />
      Understand Your Rights
    </a>
    <a
      className="flex items-center gap-2 text-blue-600 hover:underline hover:underline-offset-4"
      href="https://nonviolence.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/peace.jpeg"
        alt="Nonviolence Icon"
        width={100}
        height={100}
      />
      Principles of Nonviolence
    </a>
  </footer>
</div>
    </>
  );
}
