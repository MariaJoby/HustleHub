import React, { useState, useMemo } from "react";

const SAMPLE_GIGS = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Campus Club",
    location: "Main Campus",
    category: "Marketing",
    description: "Create short social posts and manage event promos."
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "Psych Dept",
    location: "North Campus",
    category: "Research",
    description: "Help with survey collection and data entry."
  },
  {
    id: 3,
    title: "Delivery Runner",
    company: "Local Cafe",
    location: "Downtown",
    category: "Logistics",
    description: "Pick up and deliver small orders around campus."
  },
  {
    id: 4,
    title: "Graphic Designer",
    company: "Student Org",
    location: "Main Campus",
    category: "Design",
    description: "Design posters and digital assets for events."
  }
];

export default function FindGigs() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const filtered = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    const loc = location.trim().toLowerCase();
    const cat = category.trim().toLowerCase();
    return SAMPLE_GIGS.filter((g) => {
      if (k && !(g.title + " " + g.description + " " + g.company).toLowerCase().includes(k)) {
        return false;
      }
      if (loc && !g.location.toLowerCase().includes(loc)) return false;
      if (cat && !g.category.toLowerCase().includes(cat)) return false;
      return true;
    });
  }, [keyword, location, category]);

  return (
    <section className="px-6 md:px-20 py-16 bg-[#071022]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Find gigs near you</h2>
        <p className="text-gray-300 text-lg mb-8">
          Discover campus opportunities that match your skills. Browse gigs posted by students, organizations, and faculty. Whether you're looking for quick tasks, flexible projects, or ongoing work, find the perfect gig to earn money and build your experience.
        </p>
        <a
          href="/browse-gigs"
          className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all"
        >
          Browse all gigs
        </a>
      </div>
    </section>
  );
}