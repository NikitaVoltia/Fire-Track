"use client"

import { motion } from 'framer-motion'
import { 
  Cpu, Satellite, Brain, Radio, Drone, Camera, 
  Users, Heart, TreePine, Trash2, BookOpen, Megaphone,
  Building, Globe, Award, ArrowRight, Sparkles, Shield, Leaf
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

const techSolutions = [
  {
    icon: Drone,
    title: 'Drones de Vigilância',
    description: 'Drones equipados com câmaras térmicas e sensores de fumaça patrulham as florestas 24 horas por dia, detetando focos de incêndio antes que se propaguem.',
    features: ['Câmaras térmicas', 'Autonomia de 8 horas', 'Cobertura de 50km', 'Alertas em tempo real']
  },
  {
    icon: Satellite,
    title: 'Satélites de Monitorização',
    description: 'Satélites como o Copernicus da ESA monitorizam constantemente a superfície terrestre, identificando alterações de temperatura e início de incêndios.',
    features: ['Cobertura global', 'Imagens de alta resolução', 'Deteção de pontos quentes', 'Dados meteorológicos']
  },
  {
    icon: Brain,
    title: 'Inteligência Artificial',
    description: 'Algoritmos de machine learning analisam dados meteorológicos, topográficos e históricos para prever zonas de maior risco de incêndio.',
    features: ['Previsão de risco', 'Análise de padrões', 'Otimização de recursos', 'Aprendizagem contínua']
  },
  {
    icon: Radio,
    title: 'Sistemas de Deteção Precoce',
    description: 'Redes de sensores espalhados pelas florestas detetam fumaça, calor e alterações na qualidade do ar, enviando alertas automáticos.',
    features: ['Sensores IoT', 'Alertas SMS/App', 'Integração com bombeiros', 'Localização GPS']
  },
  {
    icon: Camera,
    title: 'Torres de Vigia Inteligentes',
    description: 'Torres equipadas com câmaras de 360 graus e visão noturna, conectadas a sistemas de IA que identificam fumaça automaticamente.',
    features: ['Visão 360 graus', 'Deteção automática', 'Alcance de 30km', 'Operação noturna']
  },
  {
    icon: Cpu,
    title: 'Centros de Comando Digital',
    description: 'Plataformas integradas que reúnem todos os dados de monitorização, permitindo coordenação eficiente das operações de combate.',
    features: ['Dashboard em tempo real', 'Coordenação de equipas', 'Gestão de recursos', 'Comunicação integrada']
  }
]

const localActions = [
  {
    icon: Users,
    title: 'Voluntariado',
    description: 'Participe em grupos de voluntários que ajudam na prevenção, vigilância e reflorestação de áreas afetadas por incêndios.',
    action: 'Encontrar grupos locais'
  },
  {
    icon: Megaphone,
    title: 'Sensibilização',
    description: 'Partilhe informação sobre prevenção de incêndios nas redes sociais, na escola e na comunidade para criar consciência coletiva.',
    action: 'Partilhar conhecimento'
  },
  {
    icon: TreePine,
    title: 'Reflorestação',
    description: 'Participe em campanhas de plantação de árvores autóctones que são mais resistentes ao fogo e ajudam a recuperar áreas ardidas.',
    action: 'Participar em plantações'
  },
  {
    icon: Trash2,
    title: 'Limpeza de Terrenos',
    description: 'Ajude na limpeza de matas e terrenos, removendo material combustível que pode alimentar incêndios florestais.',
    action: 'Organizar limpezas'
  },
  {
    icon: BookOpen,
    title: 'Educação Ambiental',
    description: 'Aprenda e ensine sobre a importância da floresta, os riscos dos incêndios e as melhores práticas de prevenção.',
    action: 'Aprender mais'
  },
  {
    icon: Heart,
    title: 'Apoio às Vítimas',
    description: 'Colabore com instituições que apoiam famílias e comunidades afetadas por incêndios, através de doações ou voluntariado.',
    action: 'Como ajudar'
  }
]

const projects = [
  {
    name: 'Projeto AGIF',
    organization: 'Agência para a Gestão Integrada de Fogos Rurais',
    location: 'Portugal',
    description: 'Sistema Nacional de Gestão Integrada de Fogos Rurais que coordena prevenção, combate e recuperação pós-incêndio em todo o território nacional.',
    impact: 'Redução de 40% na área ardida',
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c0651?w=400&h=250&fit=crop'
  },
  {
    name: 'FireAware',
    organization: 'União Europeia',
    location: 'Europa',
    description: 'Projeto europeu que desenvolve tecnologias de alerta precoce e sensibiliza comunidades rurais para a prevenção de incêndios florestais.',
    impact: 'Presente em 15 países',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=400&h=250&fit=crop'
  },
  {
    name: 'Reflorestar Portugal',
    organization: 'WWF Portugal',
    location: 'Portugal',
    description: 'Iniciativa de reflorestação com espécies autóctones em áreas ardidas, envolvendo voluntários e comunidades locais na recuperação da floresta.',
    impact: '2 milhões de árvores plantadas',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop'
  },
  {
    name: 'Floresta Comum',
    organization: 'Quercus',
    location: 'Portugal',
    description: 'Programa de adoção de floresta que permite a cidadãos e empresas contribuir para a gestão sustentável de áreas florestais.',
    impact: '5000 hectares protegidos',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=250&fit=crop'
  },
  {
    name: 'Tech4Fire',
    organization: 'Startups Portuguesas',
    location: 'Portugal',
    description: 'Consórcio de startups que desenvolve soluções tecnológicas inovadoras para deteção e combate de incêndios florestais.',
    impact: 'Tempo de resposta reduzido em 60%',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop'
  },
  {
    name: 'Aldeias Seguras',
    organization: 'Proteção Civil',
    location: 'Portugal',
    description: 'Programa nacional que prepara aldeias e comunidades rurais para se protegerem e responderem adequadamente em caso de incêndio.',
    impact: '800 aldeias participantes',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=250&fit=crop'
  }
]

export default function SolucoesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent" />
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
              className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-10 h-10 text-secondary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Que <span className="text-gradient-nature">Soluções</span> Existem?
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Da tecnologia de ponta às ações comunitárias, existem muitas formas de 
              prevenir e combater os incêndios florestais. Descubra como a inovação e 
              a colaboração estão a fazer a diferença.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Solutions */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Cpu className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Tecnologia</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Soluções <span className="text-gradient-fire">Tecnológicas</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A tecnologia está a revolucionar a forma como prevenimos e combatemos incêndios florestais.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group bg-background border border-border rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local Actions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6 text-secondary" />
                <span className="text-secondary font-semibold">Comunidade</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                O que podemos fazer <span className="text-gradient-nature">localmente</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada um de nós pode contribuir para a prevenção de incêndios. 
                Descubra como pode fazer a diferença na sua comunidade.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localActions.map((action, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-card border border-border rounded-2xl p-6 transition-all hover:border-secondary/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <action.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{action.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{action.description}</p>
                  <button className="inline-flex items-center gap-2 text-secondary font-medium text-sm group-hover:gap-3 transition-all">
                    {action.action}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects & Initiatives */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Iniciativas</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Projetos e <span className="text-gradient-fire">Iniciativas</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conheça os projetos que estão a fazer a diferença na prevenção 
                e combate aos incêndios florestais.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group bg-background border border-border rounded-2xl overflow-hidden transition-all hover:border-primary/50 hover:shadow-xl"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Globe className="w-3 h-3" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{project.organization}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Leaf className="w-4 h-4 text-secondary" />
                      <span className="text-secondary font-medium">{project.impact}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Veja os <span className="text-gradient-fire">dados</span> que comprovam a urgência
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore estatísticas e dados reais sobre incêndios florestais em Portugal e no mundo.
            </p>
            <Link
              href="/estatisticas"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Ver Estatísticas
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
