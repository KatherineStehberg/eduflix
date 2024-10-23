import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

// Simulación de datos de cursos
const courses = [
  { id: 1, title: 'Introducción a la Programación', level: 'Principiante', category: 'Tecnología', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Machine Learning Avanzado', level: 'Avanzado', category: 'Ciencia de Datos', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Diseño UX/UI', level: 'Intermedio', category: 'Diseño', image: '/placeholder.svg?height=200&width=300' },
  { id: 4, title: 'Marketing Digital', level: 'Principiante', category: 'Negocios', image: '/placeholder.svg?height=200&width=300' },
  { id: 5, title: 'Desarrollo Web Full Stack', level: 'Intermedio', category: 'Tecnología', image: '/placeholder.svg?height=200&width=300' },
  { id: 6, title: 'Inteligencia Artificial Ética', level: 'Avanzado', category: 'Tecnología', image: '/placeholder.svg?height=200&width=300' },
]

// Componente para mostrar un curso individual
const CourseCard = ({ course }: { course: typeof courses[0] }) => (
  <div className="relative group">
    <Image src={course.image} alt={course.title} width={300} height={200} className="rounded-md transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <p className="text-white text-center p-2">{course.title}</p>
    </div>
  </div>
)

// Componente para una fila de cursos
const CourseRow = ({ title, courses }: { title: string, courses: typeof courses }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </div>
)

export default function EduFlixHome({ userName = "Estudiante" }: { userName?: string }) {
  // Simulación de recomendaciones personalizadas
  const recommendedCourses = courses.slice(0, 4)
  const trendingCourses = courses.slice(2, 6)
  const beginnerCourses = courses.filter(course => course.level === 'Principiante')

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-primary">EduFlix</h1>
        <div className="flex items-center">
          <span className="mr-4">Bienvenido, {userName}</span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Mi Perfil
          </button>
        </div>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary">Continúa aprendiendo</h2>
          <div className="bg-card text-card-foreground rounded-lg p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo Web Full Stack</h3>
              <p className="mb-4">Progreso: 60%</p>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center">
                Continuar <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="w-1/3 h-24 bg-muted rounded-md"></div>
          </div>
        </section>

        <CourseRow title="Recomendado para ti" courses={recommendedCourses} />
        <CourseRow title="Cursos en tendencia" courses={trendingCourses} />
        <CourseRow title="Perfecto para principiantes" courses={beginnerCourses} />
      </main>
    </div>
  )
}