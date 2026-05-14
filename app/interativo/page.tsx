"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gamepad2, HelpCircle, Play, Image, Video, CheckCircle, XCircle,
  RotateCcw, Trophy, Star, Flame, TreePine, Shield, ArrowRight,
  ChevronRight, ChevronLeft, Sparkles
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

// Quiz Questions
const quizQuestions = [
  {
    id: 1,
    question: 'Qual é a principal causa de incêndios florestais em Portugal?',
    options: [
      { text: 'Raios', correct: false },
      { text: 'Negligência humana', correct: true },
      { text: 'Combustão espontânea', correct: false },
      { text: 'Erupções vulcânicas', correct: false }
    ],
    explanation: 'Cerca de 90% dos incêndios florestais em Portugal são causados por ações humanas, seja por negligência ou de forma intencional.'
  },
  {
    id: 2,
    question: 'Qual é o número de emergência para reportar um incêndio em Portugal?',
    options: [
      { text: '115', correct: false },
      { text: '112', correct: true },
      { text: '117', correct: false },
      { text: '911', correct: false }
    ],
    explanation: 'O 112 é o número europeu de emergência e deve ser contactado imediatamente ao avistar um incêndio.'
  },
  {
    id: 3,
    question: 'A que distância das habitações é obrigatória a limpeza de mato?',
    options: [
      { text: '10 metros', correct: false },
      { text: '25 metros', correct: false },
      { text: '50 metros', correct: true },
      { text: '100 metros', correct: false }
    ],
    explanation: 'A lei portuguesa obriga à limpeza de terrenos num raio de 50 metros em torno de edifícios e habitações isoladas.'
  },
  {
    id: 4,
    question: 'Qual foi o ano da tragédia de Pedrógão Grande?',
    options: [
      { text: '2015', correct: false },
      { text: '2016', correct: false },
      { text: '2017', correct: true },
      { text: '2018', correct: false }
    ],
    explanation: 'Os incêndios de Pedrógão Grande, em junho de 2017, causaram 66 mortos, sendo a maior tragédia de incêndios da história de Portugal.'
  },
  {
    id: 5,
    question: 'Qual destas ações NÃO contribui para prevenir incêndios?',
    options: [
      { text: 'Limpar mato seco', correct: false },
      { text: 'Fazer fogueiras em dias de risco', correct: true },
      { text: 'Apagar bem os cigarros', correct: false },
      { text: 'Denunciar comportamentos suspeitos', correct: false }
    ],
    explanation: 'Fazer fogueiras em dias de risco elevado de incêndio é uma das principais causas de fogos florestais e é proibido por lei.'
  },
  {
    id: 6,
    question: 'Que tecnologia é usada para detetar incêndios a partir do espaço?',
    options: [
      { text: 'Radares', correct: false },
      { text: 'Satélites', correct: true },
      { text: 'Sonares', correct: false },
      { text: 'Telescópios', correct: false }
    ],
    explanation: 'Satélites como o Copernicus, da Agência Espacial Europeia, monitorizam a Terra e detetam pontos de calor que podem indicar incêndios.'
  },
  {
    id: 7,
    question: 'Qual é o principal gás libertado pelos incêndios florestais?',
    options: [
      { text: 'Oxigénio', correct: false },
      { text: 'Nitrogénio', correct: false },
      { text: 'Dióxido de carbono (CO2)', correct: true },
      { text: 'Hidrogénio', correct: false }
    ],
    explanation: 'Os incêndios florestais libertam grandes quantidades de CO2, contribuindo para o aquecimento global e para as alterações climáticas.'
  },
  {
    id: 8,
    question: 'Que tipo de árvores são mais resistentes ao fogo?',
    options: [
      { text: 'Eucaliptos', correct: false },
      { text: 'Pinheiros', correct: false },
      { text: 'Sobreiros e carvalhos', correct: true },
      { text: 'Todas são igualmente vulneráveis', correct: false }
    ],
    explanation: 'Árvores autóctones como sobreiros e carvalhos têm casca mais grossa e folhas menos inflamáveis, sendo mais resistentes ao fogo que eucaliptos e pinheiros.'
  }
]

// Videos
const videos = [
  {
    title: 'Como prevenir incêndios florestais',
    thumbnail: 'https://img.youtube.com/vi/8EYwiykF2dY/maxresdefault.jpg',
    duration: 'YouTube',
    description: 'Aprenda medidas simples para prevenir incêndios na sua comunidade.',
    url: 'https://www.youtube.com/watch?v=8EYwiykF2dY'
  },
  {
    title: 'Tecnologia no combate aos incêndios',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=225&fit=crop',
    duration: '8:15',
    description: 'Descubra como drones e satélites ajudam a detetar incêndios.'
  },
  {
    title: 'Reflorestação em Portugal',
    thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=225&fit=crop',
    duration: '6:48',
    description: 'Conheça os projetos de reflorestação com espécies autóctones.'
  }
]

export default function InterativoPage() {
  // Quiz State
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([])

  // Gallery State
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return
    
    const isCorrect = quizQuestions[currentQuestion].options[selectedAnswer].correct
    if (isCorrect) {
      setScore(score + 1)
    }
    setAnsweredQuestions([...answeredQuestions, isCorrect])
    setShowResult(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setQuizCompleted(false)
    setAnsweredQuestions([])
  }

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100
    if (percentage === 100) return 'Excelente! És um verdadeiro especialista!'
    if (percentage >= 75) return 'Muito bem! Tens ótimos conhecimentos!'
    if (percentage >= 50) return 'Bom trabalho! Continua a aprender!'
    return 'Podes melhorar! Explora mais o website para aprenderes.'
  }

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
              Área <span className="text-gradient-nature">Interativa</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Testa os teus conhecimentos, explora a galeria de imagens e descobre 
              vídeos educativos sobre incêndios florestais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 lg:py-24 bg-card">
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
                <HelpCircle className="w-6 h-6 text-primary" />
                <span className="text-primary font-semibold">Quiz</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Testa os teus <span className="text-gradient-fire">Conhecimentos</span>
              </h2>
              <p className="text-muted-foreground">
                Responde a 8 perguntas sobre incêndios florestais e vê a tua pontuação.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-background border border-border rounded-2xl p-6 lg:p-8"
            >
              {!quizStarted ? (
                // Quiz Start Screen
                <div className="text-center py-8">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Gamepad2 className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Pronto para o desafio?</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Testa os teus conhecimentos sobre incêndios florestais com este quiz de 8 perguntas.
                  </p>
                  <button
                    onClick={() => setQuizStarted(true)}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
                  >
                    <Play className="w-5 h-5" />
                    Começar Quiz
                  </button>
                </div>
              ) : quizCompleted ? (
                // Quiz Results
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <Trophy className="w-12 h-12 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Quiz Concluído!</h3>
                  <p className="text-4xl font-bold text-primary mb-4">
                    {score} / {quizQuestions.length}
                  </p>
                  <p className="text-muted-foreground mb-6">{getScoreMessage()}</p>
                  
                  {/* Score Stars */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-8 h-8 ${
                          i < Math.round((score / quizQuestions.length) * 5)
                            ? 'text-primary fill-primary'
                            : 'text-muted'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Answer Summary */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    {answeredQuestions.map((correct, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          correct ? 'bg-secondary/20' : 'bg-accent/20'
                        }`}
                      >
                        {correct ? (
                          <CheckCircle className="w-5 h-5 text-secondary" />
                        ) : (
                          <XCircle className="w-5 h-5 text-accent" />
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={resetQuiz}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Tentar Novamente
                  </button>
                </div>
              ) : (
                // Quiz Questions
                <div>
                  {/* Progress */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">
                      Pergunta {currentQuestion + 1} de {quizQuestions.length}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      Pontuação: {score}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full mb-8 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>

                  {/* Question */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentQuestion}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-foreground">
                        {quizQuestions[currentQuestion].question}
                      </h3>

                      {/* Options */}
                      <div className="space-y-3 mb-6">
                        {quizQuestions[currentQuestion].options.map((option, index) => (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={showResult}
                            className={`w-full p-4 rounded-xl text-left transition-all ${
                              showResult
                                ? option.correct
                                  ? 'bg-secondary/20 border-2 border-secondary text-foreground'
                                  : selectedAnswer === index
                                  ? 'bg-accent/20 border-2 border-accent text-foreground'
                                  : 'bg-muted border-2 border-transparent text-muted-foreground'
                                : selectedAnswer === index
                                ? 'bg-primary/20 border-2 border-primary text-foreground'
                                : 'bg-muted border-2 border-transparent text-foreground hover:bg-muted/80'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                                showResult
                                  ? option.correct
                                    ? 'bg-secondary text-secondary-foreground'
                                    : selectedAnswer === index
                                    ? 'bg-accent text-accent-foreground'
                                    : 'bg-muted-foreground/20 text-muted-foreground'
                                  : selectedAnswer === index
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-muted-foreground/20 text-muted-foreground'
                              }`}>
                                {String.fromCharCode(65 + index)}
                              </div>
                              <span>{option.text}</span>
                              {showResult && option.correct && (
                                <CheckCircle className="w-5 h-5 text-secondary ml-auto" />
                              )}
                              {showResult && !option.correct && selectedAnswer === index && (
                                <XCircle className="w-5 h-5 text-accent ml-auto" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Explanation */}
                      {showResult && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-muted rounded-xl mb-6"
                        >
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Explicação:</span>{' '}
                            {quizQuestions[currentQuestion].explanation}
                          </p>
                        </motion.div>
                      )}

                      {/* Actions */}
                      <div className="flex justify-end gap-4">
                        {!showResult ? (
                          <button
                            onClick={handleSubmitAnswer}
                            disabled={selectedAnswer === null}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                          >
                            Confirmar
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        ) : (
                          <button
                            onClick={handleNextQuestion}
                            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                          >
                            {currentQuestion < quizQuestions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Video className="w-6 h-6 text-accent" />
                <span className="text-accent font-semibold">Vídeos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vídeos <span className="text-gradient-fire">Educativos</span>
              </h2>
              <p className="text-muted-foreground">
                Aprende mais sobre incêndios florestais através destes vídeos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="group bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 rounded text-xs font-medium text-foreground">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}