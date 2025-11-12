import React from 'react'
import Container from '../../utils/Container'
import CategoriesCard from './CategoriesCard'
import { Code, Server, Cpu, Smartphone, Database, Paintbrush, Cloud, Layers } from 'lucide-react'

function CategoriesSection() {
    const categories = [
        { title: 'Web Development', count: 58, href: '/categories/web-development', Icon: Code },
        { title: 'Backend & APIs', count: 42, href: '/categories/backend', Icon: Server },
        { title: 'Computer Science', count: 36, href: '/categories/cs', Icon: Cpu },
        { title: 'Mobile Development', count: 24, href: '/categories/mobile', Icon: Smartphone },
        { title: 'Databases', count: 18, href: '/categories/databases', Icon: Database },
        { title: 'Design & UI', count: 27, href: '/categories/design', Icon: Paintbrush },
        { title: 'Cloud & DevOps', count: 33, href: '/categories/cloud', Icon: Cloud },
        { title: 'Architecture', count: 12, href: '/categories/architecture', Icon: Layers },
    ]

    return (
        <section className="py-12">
            <Container>
                <div className="mb-8 text-center">
                    <p className="text-lg font-semibold text-blue-600">Browse Categories</p>
                    <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Explore Our Courses</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <CategoriesCard
                            key={cat.title}
                            title={cat.title}
                            count={cat.count}
                            href={cat.href}
                            Icon={cat.Icon}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default CategoriesSection