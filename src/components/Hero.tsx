const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl lg:text-7xl">
        Summarize Articles with <br className="max-md:hidden" />
        OpenAI GPT-4
      </h1>
      <p className={`max-w-[700px] text-muted-foreground md:text-xl mt-8`}>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </p>
    </header>
  );
};

export default Hero;
