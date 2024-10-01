import Image from "next/image";

export default function Home() {
  return (
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
  );
}
