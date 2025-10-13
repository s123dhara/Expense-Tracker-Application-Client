import React from "react";

const Section = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--text-primary)]">
          Ready to Start Your Financial Journey?
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-[var(--text-secondary)]">
          Join thousands of users who have taken control of their finances.
        </p>
        <button className="w-full sm:w-auto px-8 py-3 bg-[var(--accent)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors">
          Start Tracking Today
        </button>
      </div>
    </section>
  );
};

export default Section;
