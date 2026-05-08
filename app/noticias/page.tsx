"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Newspaper, Search, Calendar, MapPin, Clock, ChevronRight,
  Filter, X, ExternalLink, AlertTriangle, TreePine, Users
} from 'lucide-react'

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

const newsData = [
  {
    id: 1,
    title: 'Portugal regista reducao de 25% em area ardida no primeiro semestre de 2026',
    summary: 'As medidas de prevencao implementadas pelo Governo e pelas comunidades locais mostram resultados positivos, com uma reducao significativa na area afetada por incendios florestais.',
    content: 'De acordo com os dados do Instituto da Conservacao da Natureza e das Florestas (ICNF), Portugal registou uma reducao de 25% na area ardida durante o primeiro semestre de 2026, em comparacao com o mesmo periodo do ano anterior. Esta diminuicao e atribuida as campanhas de sensibilizacao, a limpeza preventiva de terrenos e ao investimento em tecnologias de detecao precoce. O Ministro do Ambiente destacou que "a colaboracao entre autoridades e cidadaos e fundamental para estes resultados".',
    date: '2026-04-15',
    year: 2026,
    location: 'Portugal',
    category: 'Prevencao',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?w=600&h=400&fit=crop',
    readTime: '4 min'
  },
  {
    id: 2,
    title: 'Nova tecnologia de drones com IA comeca a ser testada na Serra da Estrela',
    summary: 'Um projeto piloto europeu traz drones equipados com inteligencia artificial para patrulhar e detetar focos de incendio na maior serra de Portugal continental.',
    content: 'A Serra da Estrela tornou-se o cenario de testes para um inovador sistema de vigilancia florestal. Os drones, desenvolvidos no ambito do projeto FireWatch EU, utilizam camaras termicas e algoritmos de machine learning para identificar alteracoes de temperatura e fumaca antes que se transformem em incendios de grandes dimensoes. O sistema opera 24 horas por dia e envia alertas em tempo real para os centros de comando da Protecao Civil.',
    date: '2026-03-22',
    year: 2026,
    location: 'Serra da Estrela',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    readTime: '5 min'
  },
  {
    id: 3,
    title: 'Campanha "Floresta Limpa 2026" mobiliza mais de 50 mil voluntarios',
    summary: 'A maior campanha de voluntariado ambiental do pais reuniu cidadaos de todas as idades para a limpeza de matas e florestas em risco.',
    content: 'A iniciativa "Floresta Limpa 2026", promovida pela Quercus em parceria com municipios de todo o pais, superou todas as expectativas ao mobilizar mais de 50 mil voluntarios. Durante dois fins de semana consecutivos, os participantes removeram toneladas de mato seco e lixo das florestas portuguesas. "Esta e a prova de que os portugueses estao cada vez mais conscientes da importancia de proteger as nossas florestas", afirmou o presidente da Quercus.',
    date: '2026-02-28',
    year: 2026,
    location: 'Portugal',
    category: 'Voluntariado',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop',
    readTime: '3 min'
  },
  {
    id: 4,
    title: 'Europa aprova fundo de 500 milhoes para prevencao de incendios mediterranicos',
    summary: 'A Uniao Europeia destina financiamento historico para apoiar paises do sul da Europa na luta contra os incendios florestais.',
    content: 'O Parlamento Europeu aprovou a criacao de um fundo de emergencia de 500 milhoes de euros para apoiar a prevencao e combate a incendios florestais nos paises mediterranicos. Portugal, Espanha, Italia, Grecia e Franca serao os principais beneficiarios deste financiamento que sera aplicado em tecnologias de detecao, formacao de bombeiros e programas de reflorestacao. O fundo estara disponivel a partir do verao de 2026.',
    date: '2026-01-18',
    year: 2026,
    location: 'Uniao Europeia',
    category: 'Politica',
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c0651?w=600&h=400&fit=crop',
    readTime: '4 min'
  },
  {
    id: 5,
    title: 'Incendio na Galiza controlado apos tres dias de combate intensivo',
    summary: 'Bombeiros portugueses e espanhois trabalharam em conjunto para controlar um incendio que ameacava povoados na fronteira.',
    content: 'Um incendio florestal que deflagrou na regiao da Galiza, perto da fronteira com Portugal, foi finalmente controlado apos tres dias de intenso combate. A colaboracao entre bombeiros dos dois paises foi fundamental para evitar uma tragedia maior. Mais de 800 operacionais, 15 meios aereos e 200 veiculos foram mobilizados para a operacao. Nao ha registo de vitimas, mas cerca de 3.500 hectares de floresta foram consumidos pelas chamas.',
    date: '2025-09-12',
    year: 2025,
    location: 'Galiza/Portugal',
    category: 'Incendio',
    image: 'https://images.unsplash.com/photo-1602610018660-f1c5f0a66a5f?w=600&h=400&fit=crop',
    readTime: '6 min'
  },
  {
    id: 6,
    title: 'Estudo revela que alteracoes climaticas aumentam risco de incendios em 40%',
    summary: 'Investigadores da Universidade de Lisboa publicam estudo alarmante sobre o impacto das alteracoes climaticas nos incendios florestais.',
    content: 'Uma equipa de investigadores da Universidade de Lisboa publicou um estudo que demonstra que as alteracoes climaticas aumentaram em 40% o risco de incendios florestais em Portugal nas ultimas duas decadas. O aumento das temperaturas medias, a reducao da precipitacao e os eventos extremos de calor sao os principais fatores identificados. O estudo sublinha a necessidade urgente de adaptar as estrategias de prevencao a esta nova realidade climatica.',
    date: '2025-08-05',
    year: 2025,
    location: 'Lisboa',
    category: 'Investigacao',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=600&h=400&fit=crop',
    readTime: '5 min'
  },
  {
    id: 7,
    title: 'Programa de reflorestacao planta 1 milhao de arvores autoctones',
    summary: 'O projeto "Raizes de Futuro" atinge marco historico com a plantacao de arvores resistentes ao fogo em areas ardidas.',
    content: 'O programa "Raizes de Futuro", uma parceria entre o Governo, WWF Portugal e empresas privadas, atingiu o marco de 1 milhao de arvores autoctones plantadas em areas anteriormente afetadas por incendios. As especies escolhidas, como carvalhos, sobreiros e medronheiros, sao mais resistentes ao fogo do que as monoculturas de eucalipto e pinheiro. O objetivo e plantar mais 5 milhoes de arvores ate 2030.',
    date: '2025-06-20',
    year: 2025,
    location: 'Portugal',
    category: 'Reflorestacao',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop',
    readTime: '4 min'
  },
  {
    id: 8,
    title: 'Escolas portuguesas integram educacao ambiental sobre incendios no curriculo',
    summary: 'O Ministerio da Educacao anuncia que todos os alunos do ensino basico terao formacao sobre prevencao de incendios.',
    content: 'A partir do ano letivo 2025/2026, todas as escolas do ensino basico em Portugal incluirao no curriculo conteudos sobre prevencao de incendios florestais. A medida faz parte de um programa mais amplo de educacao ambiental que visa sensibilizar as novas geracoes para a importancia da protecao das florestas. Os professores receberao formacao especifica e serao desenvolvidos materiais didaticos adaptados a cada faixa etaria.',
    date: '2025-05-10',
    year: 2025,
    location: 'Portugal',
    category: 'Educacao',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop',
    readTime: '3 min'
  },
  {
    id: 9,
    title: 'Aplicacao movel permite denunciar situacoes de risco em tempo real',
    summary: 'A nova app "FogoAlerta" permite aos cidadaos reportar focos de incendio ou situacoes de risco diretamente as autoridades.',
    content: 'A Protecao Civil lancou a aplicacao movel "FogoAlerta", que permite aos cidadaos denunciar em tempo real situacoes de risco de incendio ou focos de fogo acabados de iniciar. A app utiliza a localizacao GPS do utilizador para enviar informacao precisa as equipas de socorro. Nos primeiros dois meses de funcionamento, a aplicacao ja foi descarregada por mais de 200 mil utilizadores e permitiu a detecao precoce de dezenas de focos de incendio.',
    date: '2025-04-02',
    year: 2025,
    location: 'Portugal',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    readTime: '4 min'
  },
  {
    id: 10,
    title: 'Comunidades rurais formam brigadas de primeira intervencao',
    summary: 'Mais de 100 aldeias do interior criaram equipas locais treinadas para combater pequenos focos de incendio.',
    content: 'Um projeto piloto da Protecao Civil formou brigadas comunitarias de primeira intervencao em mais de 100 aldeias do interior de Portugal. Os membros destas equipas, compostas por voluntarios locais, recebem formacao especifica e equipamento basico para combater pequenos focos de incendio antes da chegada dos bombeiros. "A rapidez de resposta e crucial nos primeiros minutos de um incendio", explica o responsavel pelo projeto.',
    date: '2025-03-15',
    year: 2025,
    location: 'Interior de Portugal',
    category: 'Comunidade',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop',
    readTime: '5 min'
  }
]

const categories = ['Todas', 'Prevencao', 'Tecnologia', 'Voluntariado', 'Politica', 'Incendio', 'Investigacao', 'Reflorestacao', 'Educacao', 'Comunidade']
const years = ['Todos', '2026', '2025']

export default function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedYear, setSelectedYear] = useState('Todos')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [expandedNews, setExpandedNews] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const filteredNews = newsData.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === 'Todos' || news.year.toString() === selectedYear
    const matchesCategory = selectedCategory === 'Todas' || news.category === selectedCategory
    return matchesSearch && matchesYear && matchesCategory
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Incendio': return AlertTriangle
      case 'Reflorestacao': return TreePine
      case 'Voluntariado': return Users
      default: return Newspaper
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Incendio': return 'bg-accent/20 text-accent'
      case 'Reflorestacao': return 'bg-secondary/20 text-secondary'
      case 'Tecnologia': return 'bg-primary/20 text-primary'
      case 'Prevencao': return 'bg-secondary/20 text-secondary'
      default: return 'bg-muted text-muted-foreground'
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
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
              className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6"
            >
              <Newspaper className="w-10 h-10 text-accent" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-fire">Noticias</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Mantenha-se informado sobre os ultimos desenvolvimentos na prevencao 
              e combate aos incendios florestais em Portugal e no mundo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-card border-y border-border sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Pesquisar noticias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Filter Toggle (Mobile) */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-background border border-border rounded-xl text-foreground"
              >
                <Filter className="w-5 h-5" />
                Filtros
              </button>

              {/* Filters (Desktop) */}
              <div className="hidden lg:flex items-center gap-4">
                {/* Year Filter */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-muted-foreground" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="lg:hidden mt-4 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-foreground"
                    >
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-muted-foreground" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="flex-1 bg-background border border-border rounded-lg px-3 py-2 text-foreground"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            {/* Results Count */}
            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-muted-foreground">
                {filteredNews.length} {filteredNews.length === 1 ? 'noticia encontrada' : 'noticias encontradas'}
              </p>
            </motion.div>

            {/* News Cards */}
            <div className="grid gap-6">
              {filteredNews.map((news, index) => {
                const CategoryIcon = getCategoryIcon(news.category)
                return (
                  <motion.article
                    key={news.id}
                    variants={fadeInUp}
                    layout
                    className="bg-card border border-border rounded-2xl overflow-hidden group"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="lg:w-80 h-48 lg:h-auto relative overflow-hidden">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r" />
                        <div className="absolute bottom-4 left-4 lg:hidden">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                            <CategoryIcon className="w-3 h-3" />
                            {news.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-muted-foreground">
                          <span className={`hidden lg:inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                            <CategoryIcon className="w-3 h-3" />
                            {news.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(news.date).toLocaleDateString('pt-PT', { 
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {news.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {news.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl lg:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {news.title}
                        </h2>

                        {/* Summary */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {news.summary}
                        </p>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {expandedNews === news.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mb-4"
                            >
                              <p className="text-muted-foreground leading-relaxed border-t border-border pt-4">
                                {news.content}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => setExpandedNews(expandedNews === news.id ? null : news.id)}
                            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                          >
                            {expandedNews === news.id ? 'Ler menos' : 'Ler mais'}
                            <ChevronRight className={`w-4 h-4 transition-transform ${expandedNews === news.id ? 'rotate-90' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>

            {/* No Results */}
            {filteredNews.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Nenhuma noticia encontrada</h3>
                <p className="text-muted-foreground">Tente ajustar os filtros ou a pesquisa.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <ExternalLink className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fontes de <span className="text-gradient-fire">Informacao</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Consulte fontes oficiais para informacao atualizada sobre incendios florestais.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'ICNF', url: '#' },
                { name: 'Protecao Civil', url: '#' },
                { name: 'IPMA', url: '#' },
                { name: 'Fogos.pt', url: '#' }
              ].map((source) => (
                <a
                  key={source.name}
                  href={source.url}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-xl text-foreground hover:border-primary/50 hover:text-primary transition-all"
                >
                  {source.name}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
