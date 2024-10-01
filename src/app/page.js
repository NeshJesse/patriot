import Image from "next/image";

export default function Home() {
  return (
    <>
    <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Inject Buddy - Safeguard Protests and Organize with Ease</title>
    
    {/* SEO Meta Tags */}
    <meta name="description" content="Inject Buddy is the ultimate tool for organizing peaceful protests. Enhance coordination, ensure participant safety, and offer real-time updates with our secure communication platform." />
    <meta name="keywords" content="protest organizer, protest coordination, participant safety, real-time updates, secure communication, civil rights, protest tools" />
    <meta name="author" content="Nehemiah Onyango Jesse Nehemiah" />
    <meta name="robots" content="index, follow" />
    
    {/* Canonical URL */}
    <link rel="canonical" href="https://neshjesse.github.io/injectbuddy/" />
    
    {/* Open Graph Tags */}
    <meta property="og:title" content="Inject Buddy - Safeguard Protests and Organize with Ease" />
    <meta property="og:description" content="Inject Buddy helps you organize peaceful protests effectively, ensuring safety and real-time coordination for participants." />
    <meta property="og:image" content="https://neshjesse.github.io/injectbuddy/public/injectbuddy.png" />
    <meta property="og:url" content="https://neshjesse.github.io/injectbuddy/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Inject Buddy" />
    
    {/* Twitter Card Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Inject Buddy - Safeguard Protests and Organize with Ease" />
    <meta name="twitter:description" content="Enhance coordination, participant safety, and communication during peaceful protests with Inject Buddy." />
    <meta name="twitter:image" content="https://neshjesse.github.io/injectbuddy/public/injectbuddy.png" />
    
    {/* Favicon */}
    <link rel="icon" type="image/png" href="https://neshjesse.github.io/injectbuddy/public/favi.png" />
    <link rel="apple-touch-icon" href="https://neshjesse.github.io/injectbuddy/public/favi.png" />
    
    {/* Stylesheets */}
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    
    {/* Structured Data */}
    <script type="application/ld+json">
      {`{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Inject Buddy",
        "url": "https://neshjesse.github.io/injectbuddy",
        "description": "Inject Buddy is the ultimate protest organizer tool, offering secure communication and real-time coordination for participants.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://neshjesse.github.io/injectbuddy/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }`}
    </script>
</head>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <Image
          className="dark:invert"
          src="/hero.jpeg" 
          alt="Protest Organizer Logo"
          width={600}
          height={400}
          priority
        />

        {/* Introductory Text */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold">Organize Peaceful Protests with Ease</h1>
          <p className="mt-4 text-lg">
            Our app helps you create, manage, and organize peaceful protests efficiently. 
            Plan your routes, invite participants, and share your cause with the world.
          </p>
        </div>

        {/* Key Features List */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Create detailed protest events with locations, routes, and participants.</li>
          <li className="mb-2">Add justification, background stories, and media to your protest.</li>
          <li className="mb-2">Invite participants and manage event logistics seamlessly.</li>
          <li className="mb-2">Stay updated with real-time notifications and protest details.</li>
        </ol>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/create"
          >
            Get Started
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 dark:border-white transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/learn-more" 
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://humanrights.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/rights.jpeg" 
            alt="Human Rights Icon"
            width={160}
            height={160}
          />
          Learn About Human Rights
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nonviolence.org" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/peace.jpeg"
            alt="Nonviolence Icon"
            width={160}
            height={160}
          />
          Nonviolence Advocacy
        </a>
        
      </footer>
    </div>
    </>
  );
}
