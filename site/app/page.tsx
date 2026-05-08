"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Flame, Wind, Thermometer, AlertTriangle, Users, Cigarette, 
  TreePine, Leaf, Factory, Heart, Home, DollarSign, Cloud,
  Shield, Eye, BookOpen, Phone, Droplets, ArrowDown, ChevronRight
} from 'lucide-react'
import Link from 'next/link'

// Animation variants
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

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <motion.div 
          style={{ scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&q=80"
          >
            <source src="https://player.vimeo.com/external/370467553.sd.mp4?s=5dfe65e3b4f1f7a1c3a8e4b4c4e4f4g4h4&profile_id=164" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </motion.div>

        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Flame className="w-20 h-20 lg:w-28 lg:h-28 mx-auto text-primary animate-flame" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-gradient-fire">Fire Track</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Proteger a floresta é proteger o nosso futuro.
            <br />
            <span className="text-foreground">Juntos contra os incêndios florestais.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#sobre"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Saber Mais
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/estatisticas"
              className="inline-flex items-center gap-2 border-2 border-primary/50 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-primary/10 hover:border-primary"
            >
              Ver Estatísticas
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-sm">Deslize para baixo</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* What is a Forest Fire Section */}
      <section id="sobre" className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                O que é um <span className="text-gradient-fire">Incêndio Florestal</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Um incêndio florestal é um fogo descontrolado que se propaga rapidamente através 
                de vegetação, florestas e áreas naturais, causando destruição massiva ao ecossistema 
                e colocando em risco vidas humanas e animais.
              </p>
            </motion.div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Flame,
                  title: 'Propagação Rápida',
                  description: 'Um incêndio pode propagar-se a velocidades superiores a 10 km/h em condições favoráveis ao fogo.'
                },
                {
                  icon: Thermometer,
                  title: 'Temperaturas Extremas',
                  description: 'As chamas podem atingir temperaturas superiores a 800 graus Celsius, destruindo tudo no seu caminho.'
                },
                {
                  icon: Wind,
                  title: 'Influência do Vento',
                  description: 'O vento é um dos principais fatores que influencia a direção e velocidade de propagação do fogo.'
                },
                {
                  icon: TreePine,
                  title: 'Destruição de Habitats',
                  description: 'Milhares de hectares de floresta são destruídos anualmente, afetando inúmeras espécies animais e vegetais.'
                },
                {
                  icon: Cloud,
                  title: 'Poluição Atmosférica',
                  description: 'O fumo liberta partículas nocivas e CO2, contribuindo para problemas de saúde e alterações climáticas.'
                },
                {
                  icon: AlertTriangle,
                  title: 'Emergência Nacional',
                  description: 'Portugal é um dos países europeus mais afetados por incêndios florestais todos os anos.'
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-background border border-border rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Causas dos <span className="text-gradient-fire">Incêndios</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Os incêndios florestais podem ter origem natural ou humana. 
                Conhecer as causas é fundamental para a prevenção.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Human Causes */}
              <motion.div
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Causas Humanas</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: Cigarette, text: 'Cigarros mal apagados lançados na natureza' },
                    { icon: Flame, text: 'Queimadas agrícolas descontroladas' },
                    { icon: AlertTriangle, text: 'Fogueiras em locais proibidos ou abandonadas' },
                    { icon: Factory, text: 'Atividades industriais sem medidas de segurança' }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Natural Causes */}
              <motion.div
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Causas Naturais</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: Thermometer, text: 'Raios durante tempestades elétricas' },
                    { icon: Wind, text: 'Ondas de calor extremas e secas prolongadas' },
                    { icon: Flame, text: 'Combustão espontânea de materiais orgânicos' },
                    { icon: Cloud, text: 'Alterações climáticas e aquecimento global' }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Climate Change Banner */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-gradient-to-r from-accent/20 via-primary/20 to-secondary/20 border border-primary/30 rounded-2xl p-8 text-center"
            >
              <Thermometer className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-foreground">Alterações Climáticas</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                O aquecimento global está a aumentar a frequência e intensidade dos incêndios florestais 
                em todo o mundo, tornando a prevenção ainda mais urgente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Consequências <span className="text-gradient-fire">Devastadoras</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Os incêndios florestais deixam marcas profundas no ambiente, na economia e nas comunidades.
              </p>
            </motion.div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
              {[
                { value: '66', label: 'Mortos em Pedrógão Grande', suffix: '' },
                { value: '500', label: 'Mil hectares ardidos/ano', suffix: 'K+' },
                { value: '1.5', label: 'Mil milhões de prejuízo', suffix: 'B' },
                { value: '100', label: 'Anos para recuperação', suffix: '+' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-background border border-border rounded-2xl p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    className="text-3xl lg:text-4xl font-bold text-primary mb-2"
                  >
                    {stat.value}{stat.suffix}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Impact Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: TreePine,
                  title: 'Impacto Ambiental',
                  color: 'bg-secondary/20 text-secondary',
                  items: ['Destruição de florestas', 'Perda de biodiversidade', 'Erosão do solo', 'Contaminação de cursos de água']
                },
                {
                  icon: Heart,
                  title: 'Impacto Humano',
                  color: 'bg-accent/20 text-accent',
                  items: ['Perda de vidas humanas', 'Problemas respiratórios', 'Trauma psicológico', 'Deslocação de populações']
                },
                {
                  icon: Home,
                  title: 'Impacto nas Comunidades',
                  color: 'bg-primary/20 text-primary',
                  items: ['Destruição de habitações', 'Perda de empregos', 'Danos em infraestruturas', 'Isolamento de aldeias']
                },
                {
                  icon: Leaf,
                  title: 'Destruição de Habitats',
                  color: 'bg-secondary/20 text-secondary',
                  items: ['Extinção de espécies', 'Deslocação de fauna', 'Destruição de ninhos', 'Perda de alimento']
                },
                {
                  icon: Cloud,
                  title: 'Poluição',
                  color: 'bg-muted text-muted-foreground',
                  items: ['Emissão de CO2', 'Partículas no ar', 'Chuvas ácidas', 'Efeito de estufa']
                },
                {
                  icon: DollarSign,
                  title: 'Impacto Económico',
                  color: 'bg-primary/20 text-primary',
                  items: ['Prejuízos agrícolas', 'Custos de combate', 'Perda de turismo', 'Reconstrução']
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-background border border-border rounded-2xl p-6"
                >
                  <div className={`w-12 h-12 rounded-xl ${category.color.split(' ')[0]} flex items-center justify-center mb-4`}>
                    <category.icon className={`w-6 h-6 ${category.color.split(' ')[1]}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Medidas de <span className="text-gradient-nature">Prevenção</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Todos podemos contribuir para a prevenção dos incêndios florestais. 
                Pequenas ações fazem uma grande diferença.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Flame,
                  title: 'Não fazer fogueiras',
                  description: 'Evite fazer fogueiras em espaços florestais, especialmente durante o verão e em dias de risco elevado.',
                  color: 'from-accent to-primary'
                },
                {
                  icon: Cigarette,
                  title: 'Cuidado com cigarros',
                  description: 'Nunca deite pontas de cigarro para o chão. Use sempre um cinzeiro ou apague completamente antes de descartar.',
                  color: 'from-primary to-accent'
                },
                {
                  icon: TreePine,
                  title: 'Limpeza das matas',
                  description: 'Mantenha os terrenos limpos de mato seco e material combustível. A lei obriga a limpeza até 50 metros das habitações.',
                  color: 'from-secondary to-forest-green'
                },
                {
                  icon: Eye,
                  title: 'Vigilância ativa',
                  description: 'Esteja atento a comportamentos suspeitos e denuncie qualquer início de incêndio de imediato.',
                  color: 'from-forest-green to-secondary'
                },
                {
                  icon: BookOpen,
                  title: 'Educação ambiental',
                  description: 'Informe-se e partilhe conhecimento sobre prevenção de incêndios com familiares e amigos.',
                  color: 'from-primary to-secondary'
                },
                {
                  icon: Phone,
                  title: 'Ligar 112',
                  description: 'Ao avistar um incêndio, ligue imediatamente para o 112. A rapidez do alerta pode salvar vidas e florestas.',
                  color: 'from-accent to-destructive'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-all hover:border-primary/50"
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Emergency CTA */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center animate-pulse-glow">
                  <Phone className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-foreground">Em caso de emergência</h4>
                  <p className="text-muted-foreground">Ligue imediatamente para o número de emergência</p>
                </div>
              </div>
              <div className="text-5xl font-bold text-accent">112</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Descubra como podemos <span className="text-gradient-fire">combater</span> este problema
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore as soluções tecnológicas e iniciativas que estão a ajudar a prevenir 
              e combater os incêndios florestais em todo o mundo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/solucoes"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Ver Soluções
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/estatisticas"
                className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-muted hover:border-primary/30"
              >
                Dados Estatísticos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
