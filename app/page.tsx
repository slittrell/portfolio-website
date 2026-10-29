import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Resume from "@/components/resume";
import Footer from "@/components/footer";
import { EDUCATION_ENTRIES, RESUME_ENTRIES, SITE, SOCIAL_LINKS } from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.fullName,
  alternateName: SITE.name,
  url: SITE.url,
  jobTitle: RESUME_ENTRIES[0].title,
  worksFor: { "@type": "Organization", name: RESUME_ENTRIES[0].company },
  alumniOf: EDUCATION_ENTRIES.map((entry) => ({
    "@type": "EducationalOrganization",
    name: entry.school,
  })),
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
