import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function SmoothScroll() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const threshold = window.innerHeight / 2;
      const sections = document.querySelectorAll('section[id]');
      const currentSection = Array.from(sections).find(
        (section) => section.getBoundingClientRect().top - threshold <= 0
      );
      const id = currentSection ? currentSection.id : null;
      if (id !== activeSection) {
        setActiveSection(id);
        if (id) {
          router.push(`#${id}`, undefined, { shallow: true });
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, router]);

  return (
    <div>
      <section id="section1"><Footer></section>
      <section id="section2">Section 2</section>
      <section id="section3">Section 3</section>
    </div>
  );
}

export default SmoothScroll;