"use client";

import { useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState<string[]>([]);

  function addCourse() {
    setCourses([...courses, "CS101 - Intro to AI"]);
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>

      <button
        onClick={addCourse}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Add Demo Course
      </button>

      <ul className="mt-6 space-y-2">
        {courses.map((course, index) => (
          <li
            key={index}
            className="border p-3 rounded-lg"
          >
            {course}
          </li>
        ))}
      </ul>
    </main>
  );
}