"use client"

import { motion } from 'framer-motion'
import { 
  BarChart3, TrendingUp, MapPin, Globe, Flame, Calendar,
  AlertTriangle, TreePine, Users, CheckCircle, ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

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

// Data for charts
const incendiosPorAno = [
  { ano: '2018', incendios: 12265, area: 39569 },
  { ano: '2019', incendios: 10839, area: 42142 },
  { ano: '2020', incendios: 9690, area: 68249 },
  { ano: '2021', incendios: 8659, area: 28637 },
  { ano: '2022', incendios: 11325, area: 112347 },
  { ano: '2023', incendios: 9245, area: 89234 },
  { ano: '2024', incendios: 7823, area: 52341 },
  { ano: '2025', incendios: 6542, area: 41234 },
]

const comparacaoPaises = [
  { pais: 'Portugal', area: 89234, incendios: 9245 },
  { pais: 'Espanha', area: 267345, incendios: 12456 },
  { pais: 'Grécia', area: 178234, incendios: 8234 },
  { pais: 'Itália', area: 145678, incendios: 7654 },
  { pais: 'França', area: 72345, incendios: 5432 },
]

const causasIncendios = [
  { name: 'Negligência', value: 35, color: '#f97316' },
  { name: 'Intencional', value: 25, color: '#ef4444' },
  { name: 'Natural', value: 15, color: '#22c55e' },
  { name: 'Reacendimentos', value: 15, color: '#eab308' },
  { name: 'Indeterminado', value: 10, color: '#6b7280' },
]

const evolucaoMensal = [
  { mes: 'Jan', incendios: 234 },
  { mes: 'Fev', incendios: 312 },
  { mes: 'Mar', incendios: 456 },
  { mes: 'Abr', incendios: 623 },
  { mes: 'Mai', incendios: 845 },
  { mes: 'Jun', incendios: 1234 },
  { mes: 'Jul', incendios: 2345 },
  { mes: 'Ago', incendios: 2876 },
  { mes: 'Set', incendios: 1654 },
  { mes: 'Out', incendios: 876 },
  { mes: 'Nov', incendios: 345 },
  { mes: 'Dez', incendios: 198 },
]

const realCases = [
  {
    title: 'Incêndios de Pedrógão Grande',
    year: '2017',
    location: 'Portugal',
    casualties: 66,
    area: '45.000 hectares',
    description: 'A maior tragédia de incêndios na história de Portugal. Um incêndio devastador que vitimou 66 pessoas e feriu mais de 250. Ocorreu numa zona de floresta densa e propagou-se rapidamente devido ao vento forte e temperaturas elevadas.',
    image: 'https://images.unsplash.com/photo-1602610018660-f1c5f0a66a5f?w=600&h=400&fit=crop'
  },
  {
    title: 'Incêndios da Califórnia',
    year: '2020',
    location: 'Estados Unidos',
    casualties: 33,
    area: '1.7 milhões hectares',
    description: 'A temporada de incêndios mais destrutiva da história da Califórnia. Os incêndios Camp Fire, Dixie Fire e outros destruíram milhares de estruturas e forçaram a evacuação de centenas de milhares de pessoas.',
    image: 'https://images.unsplash.com/photo-1602610018660-f1c5f0a66a5f?w=600&h=400&fit=crop'
  },
  {
    title: 'Incêndios da Amazónia',
    year: '2019',
    location: 'Brasil',
    casualties: '-',
    area: '906.000 hectares',
    description: 'Uma crise ambiental global que chamou atenção internacional. Os incêndios na maior floresta tropical do mundo destruíram habitats críticos e libertaram toneladas de CO2 na atmosfera.',
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c0651?w=600&h=400&fit=crop'
  },
  {
    title: 'Incêndios da Austrália',
    year: '2019-2020',
    location: 'Austrália',
    casualties: 34,
    area: '18.6 milhões hectares',
    description: 'Os "Black Summer Fires" foram os incêndios mais devastadores da história australiana. Estima-se que mais de 1 bilião de animais morreram e a fumaça chegou a dar a volta ao mundo.',
    image: 'https://images.unsplash.com/photo-1603565812100-d52d0a0eeff2?w=600&h=400&fit=crop'
  }
]

const successStories = [
  {
    region: 'Espanha - Galiza',
    reduction: '45%',
    method: 'Gestão comunitária de matas e criação de faixas corta-fogo',
    period: '2018-2024'
  },
  {
    region: 'Portugal - Algarve',
    reduction: '38%',
    method: 'Sistema de vigilância por drones e sensores IoT',
    period: '2020-2025'
  },
  {
    region: 'Itália - Sardenha',
    reduction: '52%',
    method: 'Programa de educação ambiental nas escolas e voluntariado',
    period: '2019-2024'
  },
  {
    region: 'Grécia - Peloponeso',
    reduction: '41%',
    method: 'Reflorestação com espécies autóctones resistentes ao fogo',
    period: '2017-2024'
  }
]

export default function EstatisticasPage() {
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
              <BarChart3 className="w-10 h-10 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dados <span className="text-gradient-fire">Estatísticos</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Números que revelam a dimensão do problema dos incêndios florestais 
              em Portugal e no mundo. Dados atualizados e visualizações interativas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { value: '9.2K', label: 'Incêndios em 2023', icon: Flame, color: 'text-primary' },
              { value: '89K', label: 'Hectares ardidos', icon: TreePine, color: 'text-accent' },
              { value: '35%', label: 'Causados por negligência', icon: AlertTriangle, color: 'text-destructive' },
              { value: '15%', label: 'Redução vs 2022', icon: TrendingUp, color: 'text-secondary' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gráficos e <span className="text-gradient-fire">Visualizações</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Análise visual dos dados de incêndios florestais ao longo dos anos.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Area Chart - Incêndios por Ano */}
              <motion.div
                variants={fadeInUp}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Evolução Anual</h3>
                    <p className="text-sm text-muted-foreground">Número de incêndios por ano</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={incendiosPorAno}>
                    <defs>
                      <linearGradient id="colorIncendios" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis dataKey="ano" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#f3f4f6'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="incendios" 
                      stroke="#f97316" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorIncendios)" 
                      name="Incêndios"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Bar Chart - Área Ardida */}
              <motion.div
                variants={fadeInUp}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <TreePine className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Área Ardida</h3>
                    <p className="text-sm text-muted-foreground">Hectares por ano</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={incendiosPorAno}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis dataKey="ano" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#f3f4f6'
                      }}
                    />
                    <Bar dataKey="area" fill="#ef4444" radius={[4, 4, 0, 0]} name="Hectares" />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Pie Chart - Causas */}
              <motion.div
                variants={fadeInUp}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Causas dos Incêndios</h3>
                    <p className="text-sm text-muted-foreground">Distribuição percentual</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={causasIncendios}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {causasIncendios.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#f3f4f6'
                      }}
                      formatter={(value) => [`${value}%`, 'Percentagem']}
                    />
                    <Legend 
                      formatter={(value) => <span className="text-muted-foreground text-sm">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Line Chart - Evolução Mensal */}
              <motion.div
                variants={fadeInUp}
                className="bg-background border border-border rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sazonalidade</h3>
                    <p className="text-sm text-muted-foreground">Incêndios por mês (média)</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={evolucaoMensal}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis dataKey="mes" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1f2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#f3f4f6'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="incendios" 
                      stroke="#22c55e" 
                      strokeWidth={3}
                      dot={{ fill: '#22c55e', strokeWidth: 2 }}
                      name="Incêndios"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>

            {/* Comparison Chart */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 bg-background border border-border rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Comparação entre Países</h3>
                    <p className="text-sm text-muted-foreground">Área ardida em hectares (2023)</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={comparacaoPaises} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                  <XAxis type="number" stroke="#9ca3af" fontSize={12} />
                  <YAxis dataKey="pais" type="category" stroke="#9ca3af" fontSize={12} width={80} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#f3f4f6'
                    }}
                  />
                  <Bar dataKey="area" fill="#f97316" radius={[0, 4, 4, 0]} name="Hectares" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Maps Section */}
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
                <MapPin className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Localizacao</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Zonas mais <span className="text-gradient-fire">Afetadas</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Identificacao das regioes com maior incidencia de incendios florestais.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Portugal Map Info */}
              <motion.div
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Regioes de Portugal
                </h3>
                <div className="space-y-4">
                  {[
                    { region: 'Norte', percentage: 35, areas: 'Tras-os-Montes, Minho' },
                    { region: 'Centro', percentage: 40, areas: 'Beira Interior, Pinhal Interior' },
                    { region: 'Lisboa e Vale do Tejo', percentage: 10, areas: 'Setubal, Ribatejo' },
                    { region: 'Alentejo', percentage: 8, areas: 'Alto Alentejo, Alentejo Litoral' },
                    { region: 'Algarve', percentage: 7, areas: 'Serra do Caldeiro, Costa Vicentina' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-foreground">{item.region}</span>
                          <span className="text-primary font-semibold">{item.percentage}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{item.areas}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* World Map Info */}
              <motion.div
                variants={fadeInUp}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Globe className="w-5 h-5 text-secondary" />
                  Panorama Mundial
                </h3>
                <div className="space-y-4">
                  {[
                    { region: 'Australia', area: '18.6M ha', year: '2019-2020', severity: 'Extrema' },
                    { region: 'Siberia', area: '8.4M ha', year: '2021', severity: 'Muito Alta' },
                    { region: 'California', area: '1.7M ha', year: '2020', severity: 'Extrema' },
                    { region: 'Amazonia', area: '906K ha', year: '2019', severity: 'Muito Alta' },
                    { region: 'Mediterraneo', area: '500K ha', year: '2023', severity: 'Alta' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-xl">
                      <div>
                        <span className="font-medium text-foreground">{item.region}</span>
                        <p className="text-xs text-muted-foreground">{item.year}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-accent font-semibold">{item.area}</span>
                        <p className="text-xs text-muted-foreground">{item.severity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Cases */}
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
                <Flame className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold">Casos Reais</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Exemplos que marcaram a <span className="text-gradient-fire">Historia</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Incendios devastadores que alertaram o mundo para a urgencia da prevencao.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {realCases.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-background border border-border rounded-2xl overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                          {caseStudy.year}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {caseStudy.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{caseStudy.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{caseStudy.description}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-accent" />
                        <span className="text-muted-foreground">
                          {caseStudy.casualties === '-' ? 'N/A' : `${caseStudy.casualties} vitimas`}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TreePine className="w-4 h-4 text-secondary" />
                        <span className="text-muted-foreground">{caseStudy.area}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
                <CheckCircle className="w-6 h-6 text-secondary" />
                <span className="text-secondary font-semibold">Casos de Sucesso</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solucoes que <span className="text-gradient-nature">Funcionam</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Regioes que conseguiram reduzir significativamente o numero de incendios atraves de boas praticas.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">{story.region}</h3>
                      <span className="text-3xl font-bold text-secondary">-{story.reduction}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{story.method}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{story.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mantenha-se <span className="text-gradient-fire">informado</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Acompanhe as ultimas noticias sobre incendios florestais e medidas de prevencao.
            </p>
            <Link
              href="/noticias"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Ver Noticias
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
