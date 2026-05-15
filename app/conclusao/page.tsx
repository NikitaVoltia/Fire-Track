"use client"

import { motion } from 'framer-motion'
import { 
  Heart, Shield, TreePine, BookOpen, Users, Quote, ExternalLink,
  Flame, Globe, Award, GraduationCap, FileText, ArrowUp
} from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const teamMembers = [
  {
    name: 'Diana Azevedo',
    role: 'Design e Desenvolvimento',
    avatar: 'DA'
  },
  {
    name: 'José Luiz Gomes',
    role: 'Estatísticas e Multimédia',
    avatar: 'JG'
  },
  {
    name: 'Sofia Gouveia',
    role: 'Pesquisa e Conteúdo',
    avatar: 'SG'
  }
]

const bibliography = [
  {
    category: 'Instituições Oficiais',
    sources: [
      { name: 'ICNF - Instituto da Conservação da Natureza e das Florestas', url: 'https://www.icnf.pt', type: 'Dados sobre incêndios em Portugal' },
      { name: 'IPMA - Instituto Português do Mar e da Atmosfera', url: 'https://www.ipma.pt', type: 'Dados meteorológicos e alertas' },
      { name: 'ANEPC - Autoridade Nacional de Emergência e Proteção Civil', url: 'https://www.prociv.pt', type: 'Informação sobre prevenção e combate' },
    ]
  },
  {
    category: 'Organizações Internacionais',
    sources: [
      { name: 'ONU - Organização das Nações Unidas', url: 'https://www.un.org', type: 'Relatórios sobre alterações climáticas' },
      { name: 'WWF - World Wildlife Fund', url: 'https://www.wwf.pt', type: 'Conservação e reflorestação' },
      { name: 'European Space Agency - Copernicus', url: 'https://www.copernicus.eu', type: 'Monitorização por satélite' },
    ]
  },
  {
    category: 'Bases de Dados e Estatísticas',
    sources: [
      { name: 'PORDATA', url: 'https://www.pordata.pt', type: 'Estatísticas sobre Portugal' },
      { name: 'Eurostat', url: 'https://ec.europa.eu/eurostat', type: 'Estatísticas europeias' },
      { name: 'EFFIS - European Forest Fire Information System', url: 'https://effis.jrc.ec.europa.eu', type: 'Sistema europeu de informação sobre incêndios' },
    ]
  },
  {
    category: 'Ciência e Educação',
    sources: [
      { name: 'Ciência Viva', url: 'https://www.cienciaviva.pt', type: 'Divulgação científica' },
      { name: 'Quercus - Associação Nacional de Conservação da Natureza', url: 'https://www.quercus.pt', type: 'Educação ambiental' },
      { name: 'Universidade de Lisboa - Centro de Ecologia', url: 'https://www.ulisboa.pt', type: 'Investigação científica' },
    ]
  },
  {
    category: 'Média e Notícias',
    sources: [
      { name: 'Público', url: 'https://www.publico.pt', type: 'Jornalismo de referência' },
      { name: 'Observador', url: 'https://observador.pt', type: 'Notícias e reportagens' },
      { name: 'RTP - Rádio e Televisão de Portugal', url: 'https://www.rtp.pt', type: 'Serviço público de média' },
    ]
  }
]

const keyMessages = [
  {
    icon: Shield,
    title: 'Prevenção é Essencial',
    text: 'A maioria dos incêndios florestais pode ser evitada com medidas simples de prevenção.'
  },
  {
    icon: Users,
    title: 'Responsabilidade Coletiva',
    text: 'Proteger as florestas é uma responsabilidade de todos nós, cidadãos e instituições.'
  },
  {
    icon: TreePine,
    title: 'Florestas São Vida',
    text: 'As florestas são essenciais para o equilíbrio do planeta e a nossa qualidade de vida.'
  },
  {
    icon: BookOpen,
    title: 'Educação Transforma',
    text: 'Conhecer o problema é o primeiro passo para fazer parte da solução.'
  }
]

export default function ConclusaoPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-primary" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-fire">Conclusão</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma reflexão final sobre a importância da prevenção dos incêndios
              florestais e o papel de cada um de nós na proteção do ambiente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >

            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Síntese</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O que <span className="text-gradient-fire">Aprendemos</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-background border border-border rounded-2xl p-8 lg:p-12 mb-12"
            >
              <div className="prose prose-lg max-w-none text-muted-foreground">

                <p className="text-lg leading-relaxed mb-6">
                  Ao longo deste trabalho, explorámos a problemática dos incêndios florestais
                  em profundidade, compreendendo as suas causas, consequências e as soluções
                  que existem para combater este flagelo que afeta Portugal e o mundo.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Descobrimos que a grande maioria dos incêndios florestais tem origem humana,
                  seja por negligência ou intencionalidade. Esta realidade sublinha a importância
                  da educação ambiental e da sensibilização da população para comportamentos
                  responsáveis na interação com a natureza.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  As consequências dos incêndios vão muito além da destruição imediata: perda de
                  biodiversidade, erosão dos solos, poluição atmosférica, impacto nas comunidades
                  e custos económicos elevados. Por outro lado, existem soluções promissoras,
                  desde tecnologias de deteção precoce até iniciativas comunitárias de prevenção
                  e reflorestação.
                </p>

                <p className="text-lg leading-relaxed">
                  Este trabalho reforça a convicção de que a prevenção é a melhor estratégia e
                  que cada um de nós pode e deve contribuir para a proteção das nossas florestas.
                  Juntos, podemos fazer a diferença.
                </p>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >

            <div className="relative bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 border border-primary/30 rounded-3xl p-8 lg:p-16 text-center overflow-hidden">

              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2" />

              <div className="relative">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
                  Proteger a floresta é proteger o nosso futuro.
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Cada árvore que preservamos, cada incêndio que prevenimos, é um passo
                  em direção a um planeta mais saudável para as próximas gerações.
                </p>

                <div className="flex items-center justify-center gap-4">
                  <TreePine className="w-8 h-8 text-secondary" />
                  <Flame className="w-8 h-8 text-primary" />
                  <Globe className="w-8 h-8 text-secondary" />
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="creditos" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >

            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <span className="text-secondary font-semibold">Créditos</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trabalho Realizado <span className="text-gradient-nature">Por</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-background border border-border rounded-2xl p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{member.avatar}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-background border border-border rounded-2xl p-8 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <Award className="w-8 h-8 text-secondary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-2">Turma 9º4</h3>
              <p className="text-muted-foreground">Ano letivo 2025/2026</p>
              <p className="text-sm text-muted-foreground mt-2">
                Disciplina de Geografia - 
                  Professora Maria José Rocha
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Bibliography Section */}
      <section id="bibliografia" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >

            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Referências</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient-fire">Bibliografia</span>
              </h2>

              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fontes de informação consultadas para a elaboração deste trabalho.
              </p>
            </motion.div>

            <div className="space-y-8">
              {bibliography.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  variants={fadeInUp}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    {category.category}
                  </h3>

                  <ul className="space-y-4">
                    {category.sources.map((source, sourceIndex) => (
                      <li key={sourceIndex} className="flex items-start gap-4 p-4 bg-background rounded-xl">
                        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <ExternalLink className="w-5 h-5 text-muted-foreground" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground mb-1">{source.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{source.type}</p>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {source.url}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
           </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >

            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Obrigado por <span className="text-gradient-fire">Explorar</span> o Fire Track
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Esperamos que este website tenha contribuído para aumentar a tua consciência
              sobre a importância da prevenção dos incêndios florestais.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Voltar ao Início
              </Link>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-muted hover:border-primary/30"
              >
                <ArrowUp className="w-5 h-5" />
                Topo da Página
              </button>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  )
}