"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Flame, Heart, TreePine, Shield, BookOpen, Users } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navegação',
    links: [
      { href: '/', label: 'Início' },
      { href: '/solucoes', label: 'Soluções' },
      { href: '/estatisticas', label: 'Estatísticas' },
      { href: '/noticias', label: 'Notícias' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { href: '/interativo', label: 'Área Interativa' },
      { href: '/conclusao', label: 'Conclusão' },
      { href: '/conclusao#bibliografia', label: 'Bibliografia' },
      { href: '/conclusao#creditos', label: 'Créditos' },
    ],
  },
]

const quickFacts = [
  { icon: TreePine, text: 'Proteger as florestas' },
  { icon: Shield, text: 'Prevenir incêndios' },
  { icon: BookOpen, text: 'Educar a comunidade' },
  { icon: Users, text: 'Agir em conjunto' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Flame className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-gradient-fire">Fire Track</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Um website educativo sobre incêndios florestais, dedicado a sensibilizar 
                para a importância da prevenção e proteção das nossas florestas.
              </p>
              
              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-3">
                {quickFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <fact.icon className="w-4 h-4 text-primary" />
                    <span>{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-foreground font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Trabalho realizado por Diana Azevedo, José Luiz Gomes e Sofia Gouveia
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>pela Turma 9.4</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
