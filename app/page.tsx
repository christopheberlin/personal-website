const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Section */}
      <header className="text-center py-12 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Hello, I'm Joseph Chin</h1>
        <p className="text-xl mt-4">A passionate web developer & designer</p>
      </header>

      {/* Bio Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I'm a front-end developer with a love for clean design and intuitive user experiences.
          I have experience building websites using modern JavaScript frameworks like React, Next.js, and more.
          When I'm not coding, you can find me exploring new tech trends or experimenting with creative projects.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
            <li>UI/UX Design</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Feel free to reach out for collaborations, questions, or just to say hi!</p>
        <a
          href="mailto:johndoe@example.com"
          className="text-xl text-indigo-600 hover:underline"
        >
          johndoe@example.com
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-4 bg-gray-800 text-white text-center">
        <p>Built with love using Next.js & Tailwind CSS</p>
        <p>&copy; 2025 John Doe</p>
      </footer>
    </div>
  );
};

export default Page;
