"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Heart,
  Users,
  Trophy,
  Play,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Brain,
  Target,
  Activity,
  Zap,
  Star,
  ArrowLeft,
  RotateCcw,
  Timer,
  Medal,
  AlertTriangle,
  ChevronRight,
  Clock,
} from "lucide-react"

const memoryCards = [
  { text: "Không Ma Túy", image: "/memory-no-drugs.png" },
  { text: "Không Ma Túy", image: "/memory-no-drugs.png" },
  { text: "Sống Khỏe Mạnh", image: "/memory-healthy-life.png" },
  { text: "Sống Khỏe Mạnh", image: "/memory-healthy-life.png" },
  { text: "Gia Đình Hỗ Trợ", image: "/memory-family-support.png" },
  { text: "Gia Đình Hỗ Trợ", image: "/memory-family-support.png" },
  { text: "Giáo Dục", image: "/memory-education.png" },
  { text: "Giáo Dục", image: "/memory-education.png" },
  { text: "Cộng Đồng An Toàn", image: "/memory-safe-community.png" },
  { text: "Cộng Đồng An Toàn", image: "/memory-safe-community.png" },
  { text: "Phòng Chống", image: "/memory-prevention.png" },
  { text: "Phòng Chống", image: "/memory-prevention.png" },
]

const knowledgeLibrary = {
  categories: [
    {
      id: "drugs",
      title: "Ma Túy",
      icon: "AlertTriangle",
      color: "red",
      articles: [
        {
          id: "drug-history",
          title: "Lịch Sử Ma Túy Và Tác Động Toàn Cầu",
          summary: "Tìm hiểu về nguồn gốc, lịch sử phát triển và tác động của ma túy trên toàn thế giới",
          image: "/article-drug-history.png",
          readTime: "8 phút",
          content: `
            <h3>Nguồn Gốc Và Lịch Sử</h3>
            <p>Ma túy đã tồn tại trong lịch sử nhân loại hàng nghìn năm. Ban đầu, nhiều chất được sử dụng trong y học cổ truyền và các nghi lễ tôn giáo. Tuy nhiên, việc lạm dụng đã biến chúng thành mối đe dọa nghiêm trọng.</p>
            
            <h3>Các Loại Ma Túy Phổ Biến</h3>
            <ul>
              <li><strong>Heroin:</strong> Được tổng hợp từ morphine, gây nghiện cực mạnh</li>
              <li><strong>Cocaine:</strong> Chất kích thích từ cây coca, tác động mạnh lên hệ thần kinh</li>
              <li><strong>Methamphetamine:</strong> Ma túy tổng hợp, phá hủy não bộ nhanh chóng</li>
              <li><strong>Ecstasy:</strong> Ma túy tổng hợp phổ biến trong giới trẻ</li>
            </ul>

            <h3>Tác Động Toàn Cầu</h3>
            <p>Theo WHO, hơn 35 triệu người trên thế giới mắc các rối loạn do sử dụng ma túy. Chi phí xã hội hàng năm lên tới hàng trăm tỷ USD cho điều trị, tội phạm và mất năng suất lao động.</p>
          `,
        },
        {
          id: "drug-causes",
          title: "Nguyên Nhân Dẫn Đến Sử Dụng Ma Túy",
          summary: "Phân tích các yếu tố tâm lý, xã hội và môi trường dẫn đến việc sử dụng ma túy",
          image: "/article-drug-causes.png",
          readTime: "6 phút",
          content: `
            <h3>Yếu Tố Tâm Lý</h3>
            <p>Stress, trầm cảm, lo âu và các vấn đề tâm lý khác thường là nguyên nhân chính khiến người ta tìm đến ma túy như một cách "tự điều trị".</p>
            
            <h3>Áp Lực Xã Hội</h3>
            <ul>
              <li>Áp lực từ bạn bè và môi trường xung quanh</li>
              <li>Mong muốn được chấp nhận trong nhóm</li>
              <li>Tò mò và muốn thử nghiệm</li>
              <li>Căng thẳng học tập và công việc</li>
            </ul>

            <h3>Yếu Tố Gia Đình</h3>
            <p>Gia đình thiếu sự quan tâm, bạo lực gia đình, hoặc có tiền sử sử dụng chất gây nghiện đều làm tăng nguy cơ con em sa vào tệ nạn.</p>
          `,
        },
      ],
    },
    {
      id: "hiv",
      title: "HIV/AIDS",
      icon: "Heart",
      color: "blue",
      articles: [
        {
          id: "hiv-basics",
          title: "HIV/AIDS: Kiến Thức Cơ Bản",
          summary: "Thông tin cơ bản về HIV/AIDS, cách lây truyền và phòng ngừa",
          image: "/article-hiv-basics.png",
          readTime: "7 phút",
          content: `
            <h3>HIV Là Gì?</h3>
            <p>HIV (Human Immunodeficiency Virus) là virus gây suy giảm miễn dịch ở người. Khi không được điều trị, HIV có thể phát triển thành AIDS (Acquired Immunodeficiency Syndrome).</p>
            
            <h3>Cách Lây Truyền</h3>
            <ul>
              <li><strong>Đường máu:</strong> Dùng chung kim tiêm, dụng cụ y tế không vô trùng</li>
              <li><strong>Đường tình dục:</strong> Quan hệ tình dục không an toàn</li>
              <li><strong>Từ mẹ sang con:</strong> Trong thai kỳ, sinh nở hoặc cho con bú</li>
            </ul>

            <h3>HIV KHÔNG LÂY QUÁ</h3>
            <p>Bắt tay, ôm, hôn má, dùng chung toilet, muỗi đốt, ho, hắt hơi hay sống chung với người nhiễm HIV.</p>
          `,
        },
      ],
    },
    {
      id: "prevention",
      title: "Phòng Chống",
      icon: "Shield",
      color: "green",
      articles: [
        {
          id: "prevention-strategies",
          title: "Chiến Lược Phòng Chống Hiệu Quả",
          summary: "Các phương pháp và chiến lược phòng chống ma túy và HIV/AIDS",
          image: "/article-prevention.png",
          readTime: "10 phút",
          content: `
            <h3>Giáo Dục Và Tuyên Truyền</h3>
            <p>Giáo dục là vũ khí mạnh nhất trong cuộc chiến chống ma túy và HIV/AIDS. Cần trang bị kiến thức đúng đắn từ sớm.</p>
            
            <h3>Xây Dựng Môi Trường Lành Mạnh</h3>
            <ul>
              <li>Tạo không gian an toàn tại gia đình và trường học</li>
              <li>Khuyến khích hoạt động thể thao, văn hóa tích cực</li>
              <li>Xây dựng mạng lưới hỗ trợ cộng đồng</li>
            </ul>

            <h3>Can Thiệp Sớm</h3>
            <p>Phát hiện và can thiệp sớm các dấu hiệu nguy cơ, cung cấp hỗ trợ tâm lý và điều trị kịp thời.</p>
          `,
        },
      ],
    },
  ],
}

const quizQuestions = [
  {
    id: 1,
    question: "Ma túy gây ra tác hại gì?",
    options: ["Gây suy giảm miễn dịch", "Gây tổn hại đến não bộ", "Cả hai", "Không gây ra tác hại nào"],
    correct: 2,
    explanation: "Ma túy gây ra cả hai tác hại: suy giảm miễn dịch và tổn hại đến não bộ.",
  },
  {
    id: 2,
    question: "Nguyên tắc ABC trong phòng chống HIV là gì?",
    options: [
      "Kiêng, Chung thủy, và sử dụng Bao cao su",
      "An toàn, Kiểm soát, và Bao vệ",
      "Bảo vệ, Kiểm soát, và An toàn",
      "Chung thủy, Kiêng, và Bao cao su",
    ],
    correct: 0,
    explanation: "Nguyên tắc ABC trong phòng chống HIV là Kiêng, Chung thủy, và sử dụng Bao cao su.",
  },
]

const scenarios = [
  {
    id: 1,
    title: "Tình huống gặp bạn bè sử dụng ma túy",
    description: "Bạn đang ở một bữa tiệc và bạn bè của bạn đang sử dụng ma túy. Bạn nên làm gì?",
    image: "/scenario-drug-use.png",
    options: [
      { text: "Tham gia cùng họ", points: -10 },
      { text: "Cố gắng thuyết phục họ dừng lại", points: 10 },
      { text: "Điên loạn và đánh nhau", points: -20 },
    ],
  },
  {
    id: 2,
    title: "Tình huống gặp người nghiện HIV/AIDS",
    description: "Bạn đang ở một buổi gặp mặt và gặp một người nghiện HIV/AIDS. Bạn nên làm gì?",
    image: "/scenario-hiv.png",
    options: [
      { text: "Tránh xa họ", points: -10 },
      { text: "Hỗ trợ họ và tìm hiểu thêm về bệnh", points: 10 },
      { text: "Đánh nhau với họ", points: -20 },
    ],
  },
]

export default function AntiDrugGame() {
  const [currentScreen, setCurrentScreen] = useState("home")
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [gameProgress, setGameProgress] = useState(0)
  const [currentScenario, setCurrentScenario] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)

  const [memoryGameCards, setMemoryGameCards] = useState<any[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedCards, setMatchedCards] = useState<number[]>([])
  const [memoryScore, setMemoryScore] = useState(0)
  const [memoryMoves, setMemoryMoves] = useState(0)
  const [memoryTime, setMemoryTime] = useState(0)
  const [memoryGameActive, setMemoryGameActive] = useState(false)
  const [memoryGameComplete, setMemoryGameComplete] = useState(false)

  const [userStats, setUserStats] = useState({
    quizCompleted: 0,
    scenariosCompleted: 0,
    articlesRead: 0,
    totalScore: 0,
    memoryGamesWon: 0,
    achievements: [] as string[],
    streak: 0,
    bestMemoryTime: 0,
  })

  // ... existing state ...
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (memoryGameActive && !memoryGameComplete) {
      interval = setInterval(() => {
        setMemoryTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [memoryGameActive, memoryGameComplete])

  const initMemoryGame = () => {
    const shuffled = [...memoryCards].sort(() => Math.random() - 0.5)
    setMemoryGameCards(shuffled)
    setFlippedCards([])
    setMatchedCards([])
    setMemoryScore(0)
    setMemoryMoves(0)
    setMemoryTime(0)
    setMemoryGameActive(true)
    setMemoryGameComplete(false)
  }

  const handleMemoryCardClick = (index: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(index) || matchedCards.includes(index)) {
      return
    }

    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      setMemoryMoves((prev) => prev + 1)
      const [firstIndex, secondIndex] = newFlippedCards
      const firstCard = memoryGameCards[firstIndex]
      const secondCard = memoryGameCards[secondIndex]

      if (firstCard.text === secondCard.text) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstIndex, secondIndex])
          setFlippedCards([])
          setMemoryScore((prev) => prev + 100)

          if (matchedCards.length + 2 === memoryGameCards.length) {
            setMemoryGameComplete(true)
            setMemoryGameActive(false)
            const timeBonus = Math.max(0, 300 - memoryTime)
            const moveBonus = Math.max(0, 200 - memoryMoves * 10)
            const totalBonus = timeBonus + moveBonus
            setMemoryScore((prev) => prev + totalBonus)
            setUserStats((prev) => ({
              ...prev,
              memoryGamesWon: prev.memoryGamesWon + 1,
              totalScore: prev.totalScore + memoryScore + totalBonus,
              bestMemoryTime: prev.bestMemoryTime === 0 ? memoryTime : Math.min(prev.bestMemoryTime, memoryTime),
            }))
          }
        }, 1000)
      } else {
        setTimeout(() => {
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)

    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 10)
      setTotalPoints(totalPoints + 10)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
      setGameProgress(((currentQuestion + 1) / quizQuestions.length) * 100)
    } else {
      setUserStats((prev) => ({
        ...prev,
        quizCompleted: prev.quizCompleted + 1,
        totalScore: prev.totalScore + score,
      }))
      setCurrentScreen("quiz-complete")
    }
  }

  const handleScenarioChoice = (choiceIndex: number) => {
    const choice = scenarios[currentScenario].options[choiceIndex]
    setTotalPoints(totalPoints + choice.points)

    setTimeout(() => {
      if (currentScenario < scenarios.length - 1) {
        setCurrentScenario(currentScenario + 1)
      } else {
        setUserStats((prev) => ({
          ...prev,
          scenariosCompleted: prev.scenariosCompleted + 1,
          totalScore: prev.totalScore + totalPoints,
        }))
        setCurrentScreen("scenario-complete")
      }
    }, 3000)
  }

  const resetGame = () => {
    setCurrentScreen("home")
    setScore(0)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setGameProgress(0)
    setCurrentScenario(0)
    setTotalPoints(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-green-600 mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">Game Phòng Chống Ma Túy & HIV/AIDS</h1>
            <Heart className="h-12 w-12 text-red-500 ml-4" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Học hỏi kiến thức, rèn luyện kỹ năng và bảo vệ bản thân khỏi tác hại của ma túy và HIV/AIDS
          </p>
        </header>

        {/* Navigation */}
        {currentScreen !== "home" && (
          <div className="mb-6">
            <Button onClick={() => setCurrentScreen("home")} variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Về trang chủ
            </Button>
          </div>
        )}

        {/* Home Screen */}
        {currentScreen === "home" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/healthy-community-no-drugs.png"
                  alt="Cộng đồng khỏe mạnh"
                  className="relative mx-auto rounded-2xl shadow-2xl max-w-2xl w-full"
                />
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Phòng chống Ma túy & HIV/AIDS</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Vì một cộng đồng khỏe mạnh, không kỳ thị. Hãy cùng nhau học hỏi kiến thức và kỹ năng để bảo vệ bản thân
                và những người thân yêu.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Activity className="mr-2 h-6 w-6 text-blue-600" />
                Tiến độ học tập của bạn
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600">{userStats.quizCompleted}</div>
                  <div className="text-sm text-gray-600">Quiz hoàn thành</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600">{userStats.scenariosCompleted}</div>
                  <div className="text-sm text-gray-600">Tình huống thực hành</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600">{userStats.memoryGamesWon}</div>
                  <div className="text-sm text-gray-600">Game trí nhớ thắng</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="text-3xl font-bold text-yellow-600">{userStats.totalScore}</div>
                  <div className="text-sm text-gray-600">Tổng điểm tích lũy</div>
                </div>
              </div>
            </div>

            {/* Game Options */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-green-400 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-700">Quiz Kiến Thức</CardTitle>
                  <CardDescription>Kiểm tra hiểu biết về tác hại và cách phòng chống ma túy, HIV/AIDS</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => setCurrentScreen("quiz")}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Bắt Đầu Quiz
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-400 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-700">Tình Huống Thực Tế</CardTitle>
                  <CardDescription>Luyện tập kỹ năng đối phó với các tình huống có thể gặp phải</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => setCurrentScreen("scenario")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Thử Thách
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-400 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-purple-700">Trò Chơi Trí Nhớ</CardTitle>
                  <CardDescription>Ghép thẻ để học thuật ngữ quan trọng về phòng chống ma túy</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => {
                      initMemoryGame()
                      setCurrentScreen("memory")
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Chơi Ngay
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-400 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-orange-700">Thư Viện Kiến Thức</CardTitle>
                  <CardDescription>Khám phá kho tàng kiến thức về phòng chống ma túy và HIV/AIDS</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => setCurrentScreen("knowledge")}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Khám Phá
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Information Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-700 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Tác Hại Ma Túy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600">
                    Ma túy gây tổn hại nghiêm trọng đến não bộ, tim mạch, gan, thận và toàn bộ hệ thần kinh. Không có
                    liều lượng "an toàn" nào của ma túy.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-700 flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Phòng Chống HIV
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">
                    HIV có thể phòng ngừa 100% bằng cách thực hiện nguyên tắc ABC: Kiêng, Chung thủy, và sử dụng Bao cao
                    su.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center">
                    <Heart className="mr-2 h-5 w-5" />
                    Sống Khỏe Mạnh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-600">
                    Tập thể dục, ăn uống lành mạnh, tham gia hoạt động tích cực và xây dựng mối quan hệ tốt đẹp là chìa
                    khóa cho cuộc sống hạnh phúc.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Quiz Screen */}
        {currentScreen === "quiz" && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Quiz Kiến Thức</h2>
                  <div className="text-lg font-semibold text-blue-600">
                    Câu {currentQuestion + 1}/{quizQuestions.length}
                  </div>
                </div>
                <Progress value={gameProgress} className="mb-4" />
                <div className="text-right text-sm text-gray-600">Điểm hiện tại: {score}</div>
              </div>

              <div className="mb-8">
                <div className="mb-6">
                  <img
                    src={quizQuestions[currentQuestion].image || "/placeholder.svg"}
                    alt="Quiz illustration"
                    className="w-full max-w-md mx-auto rounded-lg shadow-md mb-4"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-6">{quizQuestions[currentQuestion].question}</h3>

                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuizAnswer(index)}
                      disabled={showExplanation}
                      variant={
                        showExplanation
                          ? index === quizQuestions[currentQuestion].correct
                            ? "default"
                            : selectedAnswer === index
                              ? "destructive"
                              : "outline"
                          : "outline"
                      }
                      className={`w-full text-left justify-start p-4 h-auto ${
                        showExplanation && index === quizQuestions[currentQuestion].correct
                          ? "bg-green-100 border-green-500 text-green-800"
                          : showExplanation &&
                              selectedAnswer === index &&
                              index !== quizQuestions[currentQuestion].correct
                            ? "bg-red-100 border-red-500 text-red-800"
                            : ""
                      }`}
                    >
                      <span className="mr-3 font-bold">{String.fromCharCode(65 + index)}.</span>
                      {option}
                    </Button>
                  ))}
                </div>
              </div>

              {showExplanation && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Giải thích:</h4>
                  <p className="text-blue-700">{quizQuestions[currentQuestion].explanation}</p>
                </div>
              )}

              {showExplanation && (
                <div className="text-center">
                  <Button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
                    {currentQuestion < quizQuestions.length - 1 ? "Câu tiếp theo" : "Hoàn thành"}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Memory Game Screen */}
        {currentScreen === "memory" && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Trò Chơi Trí Nhớ</h2>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-blue-600">
                      <Timer className="mr-1 h-4 w-4" />
                      <span className="font-semibold">{formatTime(memoryTime)}</span>
                    </div>
                    <div className="flex items-center text-green-600">
                      <Target className="mr-1 h-4 w-4" />
                      <span className="font-semibold">{memoryMoves} nước</span>
                    </div>
                    <div className="flex items-center text-purple-600">
                      <Star className="mr-1 h-4 w-4" />
                      <span className="font-semibold">{memoryScore} điểm</span>
                    </div>
                  </div>
                </div>

                {!memoryGameComplete && (
                  <div className="text-center text-gray-600 mb-4">
                    Ghép các thẻ có nội dung liên quan với nhau. Hoàn thành nhanh để được điểm thưởng!
                  </div>
                )}
              </div>

              {memoryGameComplete && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-100 to-blue-100 border border-green-300 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="h-8 w-8 text-yellow-500 mr-2" />
                    <h3 className="text-2xl font-bold text-green-800">Chúc mừng!</h3>
                  </div>
                  <p className="text-green-700 text-lg mb-2">
                    Bạn đã hoàn thành trò chơi trong {formatTime(memoryTime)} với {memoryMoves} nước đi!
                  </p>
                  <p className="text-blue-700 font-semibold">Tổng điểm: {memoryScore}</p>
                  <div className="mt-4 space-x-2">
                    <Button onClick={initMemoryGame} className="bg-purple-600 hover:bg-purple-700">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Chơi lại
                    </Button>
                    <Button onClick={() => setCurrentScreen("home")} variant="outline">
                      Về trang chủ
                    </Button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
                {memoryGameCards.map((card, index) => (
                  <div
                    key={index}
                    onClick={() => handleMemoryCardClick(index)}
                    className={`w-24 h-24 md:w-28 md:h-28 cursor-pointer rounded-lg border-2 transition-all duration-300 transform perspective-1000 ${
                      flippedCards.includes(index) || matchedCards.includes(index)
                        ? "border-blue-400 bg-white shadow-lg scale-105"
                        : "border-gray-300 bg-gradient-to-br from-blue-100 to-purple-100 hover:border-blue-300 hover:shadow-md hover:scale-102"
                    } ${matchedCards.includes(index) ? "opacity-75 ring-2 ring-green-400" : ""}`}
                  >
                    <div className="w-full h-full flex items-center justify-center p-2 relative">
                      {flippedCards.includes(index) || matchedCards.includes(index) ? (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <img
                            src={card.image || "/placeholder.svg"}
                            alt={card.text}
                            className="w-10 h-10 md:w-12 md:h-12 object-contain mb-1"
                          />
                          <span className="text-xs font-semibold text-center text-gray-700 leading-tight">
                            {card.text}
                          </span>
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded flex items-center justify-center">
                          <Brain className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {!memoryGameActive && !memoryGameComplete && (
                <div className="text-center mt-6">
                  <Button onClick={initMemoryGame} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                    <Play className="mr-2 h-5 w-5" />
                    Bắt đầu trò chơi
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}

        {currentScreen === "knowledge" && (
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Thư Viện Kiến Thức</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto">
                  Khám phá kho tàng kiến thức toàn diện về phòng chống ma túy và HIV/AIDS. Tìm hiểu sâu về nguyên nhân,
                  tác hại, cách phòng chống và điều trị.
                </p>
              </div>

              {!selectedCategory && !selectedArticle && (
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Ma Túy Category */}
                  <div
                    onClick={() => setSelectedCategory("drugs")}
                    className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                      <h3 className="text-xl font-bold text-red-800">Ma Túy</h3>
                    </div>
                    <p className="text-red-700 mb-4">
                      Tìm hiểu về các loại ma túy, tác hại và cách phòng chống hiệu quả.
                    </p>
                    <div className="text-sm text-red-600 font-semibold">12 bài viết • 45 phút đọc</div>
                  </div>

                  {/* HIV/AIDS Category */}
                  <div
                    onClick={() => setSelectedCategory("hiv")}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <Shield className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-bold text-blue-800">HIV/AIDS</h3>
                    </div>
                    <p className="text-blue-700 mb-4">
                      Kiến thức cơ bản và nâng cao về HIV/AIDS, phòng chống và điều trị.
                    </p>
                    <div className="text-sm text-blue-600 font-semibold">10 bài viết • 35 phút đọc</div>
                  </div>

                  {/* Prevention Category */}
                  <div
                    onClick={() => setSelectedCategory("prevention")}
                    className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <Heart className="h-8 w-8 text-green-600 mr-3" />
                      <h3 className="text-xl font-bold text-green-800">Phòng Chống</h3>
                    </div>
                    <p className="text-green-700 mb-4">Các biện pháp phòng chống, can thiệp và hỗ trợ cộng đồng.</p>
                    <div className="text-sm text-green-600 font-semibold">8 bài viết • 30 phút đọc</div>
                  </div>
                </div>
              )}

              {selectedCategory && !selectedArticle && (
                <div>
                  <div className="flex items-center mb-6">
                    <Button onClick={() => setSelectedCategory(null)} variant="outline" className="mr-4">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Quay lại
                    </Button>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {selectedCategory === "drugs" && "Kiến Thức Về Ma Túy"}
                      {selectedCategory === "hiv" && "Kiến Thức Về HIV/AIDS"}
                      {selectedCategory === "prevention" && "Phòng Chống & Can Thiệp"}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getArticlesByCategory(selectedCategory).map((article, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedArticle(article)}
                        className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-32 object-cover rounded-lg mb-4"
                        />
                        <h4 className="text-lg font-bold text-gray-800 mb-2">{article.title}</h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>{article.readTime}</span>
                          <span className="text-blue-600 font-semibold">Đọc thêm →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedArticle && (
                <div>
                  <div className="flex items-center mb-6">
                    <Button onClick={() => setSelectedArticle(null)} variant="outline" className="mr-4">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Quay lại danh sách
                    </Button>
                  </div>

                  <article className="max-w-4xl mx-auto">
                    <img
                      src={selectedArticle.image || "/placeholder.svg"}
                      alt={selectedArticle.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedArticle.title}</h1>
                    <div className="flex items-center text-gray-500 mb-6">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                    <div className="prose prose-lg max-w-none">
                      <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                    </div>
                  </article>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Quiz Complete Screen */}
        {currentScreen === "quiz-complete" && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <Medal className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Xuất sắc!</h2>
                <p className="text-lg text-gray-600">Bạn đã hoàn thành quiz kiến thức</p>
              </div>

              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Điểm số của bạn</div>
                <div className="text-lg text-gray-700">
                  {score}/{quizQuestions.length * 10} điểm
                </div>
              </div>

              <div className="space-x-4">
                <Button onClick={resetGame} className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Thử lại
                </Button>
                <Button onClick={() => setCurrentScreen("home")} variant="outline">
                  Về trang chủ
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Scenario Complete Screen */}
        {currentScreen === "scenario-complete" && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Hoàn thành!</h2>
                <p className="text-lg text-gray-600">Bạn đã hoàn thành tất cả tình huống thực tế</p>
              </div>

              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Tổng điểm đạt được</div>
                <div className="text-lg text-gray-700">{totalPoints} điểm</div>
              </div>

              <div className="space-x-4">
                <Button onClick={resetGame} className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Thử lại
                </Button>
                <Button onClick={() => setCurrentScreen("home")} variant="outline">
                  Về trang chủ
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 bg-gray-800 text-white rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-2 h-5 w-5" />
                Thông tin liên hệ
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>Hotline: 1900 1234</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email: info@antidrug.vn</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>Địa chỉ: Hà Nội, Việt Nam</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Đường dây hỗ trợ</h3>
              <div className="space-y-2 text-gray-300">
                <div>
                  Tư vấn ma túy: <strong>1080</strong>
                </div>
                <div>
                  Tư vấn HIV/AIDS: <strong>1900 1567</strong>
                </div>
                <div>
                  Hỗ trợ tâm lý: <strong>1900 6555</strong>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-gray-800 bg-transparent"
                >
                  <Github className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-gray-800 bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-gray-800 bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Game Phòng Chống Ma Túy & HIV/AIDS. Được phát triển với ❤️ vì cộng đồng khỏe mạnh.</p>
            <p className="text-gray-400 text-sm">
              Dự án giáo dục phi lợi nhuận nhằm nâng cao nhận thức về tác hại của ma túy và HIV/AIDS
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

const getArticlesByCategory = (category: string) => {
  const articles = {
    drugs: [
      {
        title: "Lịch Sử và Nguồn Gốc Ma Túy",
        excerpt: "Tìm hiểu về lịch sử hình thành và phát triển của các loại ma túy từ cổ đại đến hiện đại.",
        image: "/article-drug-history.png",
        readTime: "8 phút đọc",
        content: `
          <h2>Nguồn Gốc Lịch Sử</h2>
          <p>Ma túy đã tồn tại trong lịch sử nhân loại từ hàng nghìn năm trước. Ban đầu, nhiều chất được sử dụng trong y học cổ truyền và các nghi lễ tôn giáo.</p>
          
          <h3>Thời Cổ Đại</h3>
          <p>• <strong>Thuốc phiện:</strong> Được sử dụng ở Mesopotamia từ 3400 TCN</p>
          <p>• <strong>Cần sa:</strong> Xuất hiện trong y học Trung Quốc từ 2737 TCN</p>
          <p>• <strong>Coca:</strong> Được người Inca sử dụng từ 3000 TCN</p>
          
          <h3>Thời Hiện Đại</h3>
          <p>Cuộc Cách mạng Công nghiệp đã dẫn đến việc tổng hợp các chất ma túy mới:</p>
          <p>• <strong>Morphine (1804):</strong> Được Friedrich Sertürner tách chiết từ thuốc phiện</p>
          <p>• <strong>Cocaine (1859):</strong> Albert Niemann tách chiết từ lá coca</p>
          <p>• <strong>Heroin (1874):</strong> C.R. Alder Wright tổng hợp từ morphine</p>
          
          <h2>Tác Động Xã Hội</h2>
          <p>Việc lạm dụng ma túy đã gây ra nhiều vấn đề xã hội nghiêm trọng, từ các cuộc Chiến tranh Thuốc phiện ở Trung Quốc đến khủng hoảng opioid hiện tại ở Mỹ.</p>
        `,
      },
      {
        title: "Các Loại Ma Túy Phổ Biến",
        excerpt: "Phân loại và đặc điểm của các loại ma túy thường gặp hiện nay.",
        image: "/article-drug-types.png",
        readTime: "10 phút đọc",
        content: `
          <h2>Phân Loại Ma Túy</h2>
          
          <h3>1. Chất Kích Thích (Stimulants)</h3>
          <p><strong>Cocaine:</strong></p>
          <p>• Tác dụng: Tăng cường hoạt động của hệ thần kinh trung ương</p>
          <p>• Triệu chứng: Tim đập nhanh, tăng huyết áp, mất ngủ</p>
          <p>• Tác hại: Đột quỵ, nhồi máu cơ tim, rối loạn tâm thần</p>
          
          <p><strong>Methamphetamine (Ma túy đá):</strong></p>
          <p>• Tác dụng: Kích thích mạnh hệ thần kinh</p>
          <p>• Triệu chứng: Tăng năng lượng, giảm cảm giác đói, mất ngủ</p>
          <p>• Tác hại: Tổn thương não bộ, suy giảm trí nhớ, rụng răng</p>
          
          <h3>2. Chất Ức Chế (Depressants)</h3>
          <p><strong>Heroin:</strong></p>
          <p>• Tác dụng: Ức chế hệ thần kinh trung ương</p>
          <p>• Triệu chứng: Giảm đau, buồn ngủ, chậm chạp</p>
          <p>• Tác hại: Suy hô hấp, nhiễm trùng, tử vong do quá liều</p>
          
          <h3>3. Chất Gây Ảo Giác (Hallucinogens)</h3>
          <p><strong>LSD:</strong></p>
          <p>• Tác dụng: Thay đổi nhận thức và cảm giác</p>
          <p>• Triệu chứng: Ảo giác thị giác và thính giác</p>
          <p>• Tác hại: Rối loạn tâm thần, hành vi nguy hiểm</p>
          
          <h2>Dấu Hiệu Nhận Biết</h2>
          <p>• Thay đổi hành vi đột ngột</p>
          <p>• Mắt đỏ, đồng tử giãn hoặc co</p>
          <p>• Mùi lạ trên người</p>
          <p>• Sụt cân nhanh chóng</p>
          <p>• Bỏ bê công việc, học tập</p>
        `,
      },
      {
        title: "Tác Hại Của Ma Túy Đối Với Sức Khỏe",
        excerpt: "Những tác động nghiêm trọng của ma túy lên cơ thể và tinh thần con người.",
        image: "/article-drug-effects.png",
        readTime: "12 phút đọc",
        content: `
          <h2>Tác Hại Đối Với Cơ Thể</h2>
          
          <h3>Hệ Thần Kinh</h3>
          <p>• <strong>Tổn thương não bộ:</strong> Ma túy phá hủy các tế bào não, gây suy giảm trí nhớ và khả năng tư duy</p>
          <p>• <strong>Rối loạn tâm thần:</strong> Trầm cảm, lo âu, hoang tưởng, ảo giác</p>
          <p>• <strong>Nghiện:</strong> Thay đổi cấu trúc não bộ, tạo ra sự phụ thuộc</p>
          
          <h3>Hệ Tim Mạch</h3>
          <p>• <strong>Tăng huyết áp:</strong> Gây căng thẳng cho tim và mạch máu</p>
          <p>• <strong>Rối loạn nhịp tim:</strong> Tim đập không đều, có thể dẫn đến đột tử</p>
          <p>• <strong>Nhồi máu cơ tim:</strong> Nguy cơ cao ở người trẻ tuổi</p>
          
          <h3>Hệ Hô Hấp</h3>
          <p>• <strong>Tổn thương phổi:</strong> Viêm phổi, phù phổi, suy hô hấp</p>
          <p>• <strong>Ung thư:</strong> Tăng nguy cơ ung thư phổi và họng</p>
          
          <h3>Hệ Tiêu Hóa</h3>
          <p>• <strong>Loét dạ dày:</strong> Ma túy gây tổn thương niêm mạc dạ dày</p>
          <p>• <strong>Suy gan:</strong> Gan không thể xử lý độc tố</p>
          <p>• <strong>Táo bón:</strong> Đặc biệt với các chất opioid</p>
          
          <h2>Tác Hại Đối Với Tinh Thần</h2>
          
          <h3>Rối Loạn Tâm Lý</h3>
          <p>• <strong>Trầm cảm:</strong> Cảm giác buồn bã, tuyệt vọng kéo dài</p>
          <p>• <strong>Lo âu:</strong> Căng thẳng, sợ hãi không có lý do</p>
          <p>• <strong>Hoang tưởng:</strong> Nghi ngờ mọi người xung quanh</p>
          
          <h3>Thay Đổi Hành Vi</h3>
          <p>• <strong>Bạo lực:</strong> Dễ nổi giận, hành vi hung hăng</p>
          <p>• <strong>Cô lập:</strong> Tránh xa gia đình, bạn bè</p>
          <p>• <strong>Lừa dối:</strong> Nói dối để che giấu việc sử dụng ma túy</p>
          
          <h2>Tác Hại Lâu Dài</h2>
          <p>• <strong>Tổn thương não vĩnh viễn:</strong> Không thể phục hồi hoàn toàn</p>
          <p>• <strong>Suy giảm miễn dịch:</strong> Dễ mắc các bệnh nhiễm trùng</p>
          <p>• <strong>Lão hóa sớm:</strong> Cơ thể già nua nhanh chóng</p>
          <p>• <strong>Tử vong:</strong> Nguy cơ tử vong cao do quá liều hoặc biến chứng</p>
        `,
      },
      {
        title: "Nguyên Nhân Dẫn Đến Sử Dụng Ma Túy",
        excerpt: "Phân tích các yếu tố tâm lý, xã hội và môi trường dẫn đến việc sử dụng ma túy.",
        image: "/article-drug-causes.png",
        readTime: "9 phút đọc",
        content: `
          <h2>Yếu Tố Cá Nhân</h2>
          
          <h3>Tâm Lý</h3>
          <p>• <strong>Tò mò:</strong> Muốn thử nghiệm cảm giác mới</p>
          <p>• <strong>Căng thẳng:</strong> Sử dụng ma túy để giảm stress</p>
          <p>• <strong>Trầm cảm:</strong> Tìm cách thoát khỏi cảm giác buồn bã</p>
          <p>• <strong>Thiếu tự tin:</strong> Nghĩ rằng ma túy sẽ giúp tự tin hơn</p>
          
          <h3>Sinh Học</h3>
          <p>• <strong>Di truyền:</strong> Có thành viên gia đình nghiện ma túy</p>
          <p>• <strong>Rối loạn tâm thần:</strong> ADHD, rối loạn lưỡng cực</p>
          <p>• <strong>Tuổi bắt đầu:</strong> Sử dụng sớm tăng nguy cơ nghiện</p>
          
          <h2>Yếu Tố Xã Hội</h2>
          
          <h3>Gia Đình</h3>
          <p>• <strong>Thiếu sự quan tâm:</strong> Cha mẹ không theo dõi con cái</p>
          <p>• <strong>Bạo lực gia đình:</strong> Môi trường gia đình không an toàn</p>
          <p>• <strong>Ly hôn:</strong> Ảnh hưởng tâm lý đến con cái</p>
          
          <h3>Bạn Bè</h3>
          <p>• <strong>Áp lực nhóm:</strong> Muốn được chấp nhận trong nhóm</p>
          <p>• <strong>Bạn bè xấu:</strong> Tiếp xúc với những người sử dụng ma túy</p>
          <p>• <strong>Hoạt động nhóm:</strong> Tham gia các hoạt động có ma túy</p>
          
          <h3>Trường Học</h3>
          <p>• <strong>Áp lực học tập:</strong> Stress từ việc học và thi cử</p>
          <p>• <strong>Bắt nạt:</strong> Bị bạn bè bắt nạt tại trường</p>
          <p>• <strong>Thiếu hoạt động:</strong> Không có hoạt động tích cực</p>
          
          <h2>Yếu Tố Môi Trường</h2>
          
          <h3>Cộng Đồng</h3>
          <p>• <strong>Dễ tiếp cận:</strong> Ma túy dễ mua trong khu vực</p>
          <p>• <strong>Nghèo đói:</strong> Điều kiện kinh tế khó khăn</p>
          <p>• <strong>Thiếu cơ hội:</strong> Không có việc làm hoặc hoạt động tích cực</p>
          
          <h3>Truyền Thông</h3>
          <p>• <strong>Phim ảnh:</strong> Tôn vinh việc sử dụng ma túy</p>
          <p>• <strong>Âm nhạc:</strong> Ca khúc ca ngợi ma túy</p>
          <p>• <strong>Mạng xã hội:</strong> Thông tin sai lệch về ma túy</p>
          
          <h2>Các Giai Đoạn Phát Triển</h2>
          <p><strong>Giai đoạn 1:</strong> Thử nghiệm lần đầu</p>
          <p><strong>Giai đoạn 2:</strong> Sử dụng thường xuyên</p>
          <p><strong>Giai đoạn 3:</strong> Sử dụng có vấn đề</p>
          <p><strong>Giai đoạn 4:</strong> Nghiện và phụ thuộc</p>
        `,
      },
    ],
    hiv: [
      {
        title: "HIV/AIDS: Kiến Thức Cơ Bản",
        excerpt: "Tìm hiểu về virus HIV, cách lây truyền và sự khác biệt giữa HIV và AIDS.",
        image: "/article-hiv-basics.png",
        readTime: "7 phút đọc",
        content: `
          <h2>HIV là gì?</h2>
          <p>HIV (Human Immunodeficiency Virus) là virus gây suy giảm miễn dịch ở người. Virus này tấn công hệ miễn dịch, đặc biệt là tế bào CD4+ T, làm suy yếu khả năng chống lại nhiễm trùng và bệnh tật.</p>
          
          <h3>Sự Khác Biệt Giữa HIV và AIDS</h3>
          <p><strong>HIV:</strong> Là virus gây bệnh</p>
          <p><strong>AIDS:</strong> Là giai đoạn cuối của nhiễm HIV, khi hệ miễn dịch bị suy yếu nghiêm trọng</p>
          
          <h2>Cách Lây Truyền HIV</h2>
          
          <h3>Đường Lây Truyền Chính</h3>
          <p>• <strong>Quan hệ tình dục:</strong> Không sử dụng bao cao su</p>
          <p>• <strong>Máu:</strong> Dùng chung kim tiêm, dụng cụ y tế không vô trùng</p>
          <p>• <strong>Từ mẹ sang con:</strong> Trong thai kỳ, sinh nở, cho con bú</p>
          
          <h3>HIV KHÔNG Lây Qua</h3>
          <p>• Không khí, nước, thức ăn</p>
          <p>• Côn trùng cắn</p>
          <p>• Tiếp xúc thông thường: bắt tay, ôm, hôn má</p>
          <p>• Dùng chung toilet, bồn tắm</p>
          <p>• Dùng chung đồ ăn, cốc nước</p>
          
          <h2>Các Giai Đoạn Nhiễm HIV</h2>
          
          <h3>Giai Đoạn 1: Nhiễm Cấp Tính (2-4 tuần)</h3>
          <p>• Sốt, đau đầu</p>
          <p>• Phát ban</p>
          <p>• Đau họng</p>
          <p>• Sưng hạch</p>
          
          <h3>Giai Đoạn 2: Không Triệu Chứng (2-10 năm)</h3>
          <p>• Không có triệu chứng rõ ràng</p>
          <p>• Virus vẫn nhân lên</p>
          <p>• Vẫn có thể lây truyền</p>
          
          <h3>Giai Đoạn 3: AIDS</h3>
          <p>• CD4+ < 200 tế bào/ml</p>
          <p>• Nhiễm trùng cơ hội</p>
          <p>• Ung thư</p>
          <p>• Suy kiệt</p>
          
          <h2>Xét Nghiệm HIV</h2>
          <p>• <strong>Thời điểm:</strong> 3-6 tháng sau phơi nhiễm</p>
          <p>• <strong>Loại xét nghiệm:</strong> Rapid test, ELISA, Western Blot</p>
          <p>• <strong>Nơi xét nghiệm:</strong> Bệnh viện, trung tâm y tế, phòng khám</p>
          <p>• <strong>Bảo mật:</strong> Thông tin được bảo mật tuyệt đối</p>
        `,
      },
      {
        title: "Phòng Chống HIV/AIDS",
        excerpt: "Các biện pháp hiệu quả để phòng chống lây nhiễm HIV/AIDS.",
        image: "/article-prevention.png",
        readTime: "8 phút đọc",
        content: `
          <h2>Biện Pháp Phòng Chống Cơ Bản</h2>
          
          <h3>An Toàn Trong Quan Hệ Tình Dục</h3>
          <p>• <strong>Sử dụng bao cao su:</strong> Đúng cách và thường xuyên</p>
          <p>• <strong>Trung thành một vợ/chồng:</strong> Cả hai đều không nhiễm HIV</p>
          <p>• <strong>Kiêng quan hệ tình dục:</strong> Cách an toàn nhất</p>
          <p>• <strong>Xét nghiệm định kỳ:</strong> Biết tình trạng của bản thân và bạn tình</p>
          
          <h3>An Toàn Với Máu</h3>
          <p>• <strong>Không dùng chung kim tiêm:</strong> Sử dụng kim tiêm một lần</p>
          <p>• <strong>Dụng cụ y tế vô trùng:</strong> Đảm bảo khử trùng đúng cách</p>
          <p>• <strong>Xăm mình an toàn:</strong> Chọn cơ sở uy tín</p>
          <p>• <strong>Cạo râu cẩn thận:</strong> Không dùng chung dao cạo</p>
          
          <h2>Phòng Chống Lây Truyền Từ Mẹ Sang Con</h2>
          
          <h3>Trong Thai Kỳ</h3>
          <p>• <strong>Xét nghiệm HIV:</strong> Ngay khi biết có thai</p>
          <p>• <strong>Điều trị ARV:</strong> Nếu mẹ nhiễm HIV</p>
          <p>• <strong>Theo dõi định kỳ:</strong> Khám thai đều đặn</p>
          
          <h3>Khi Sinh</h3>
          <p>• <strong>Sinh mổ:</strong> Giảm nguy cơ lây truyền</p>
          <p>• <strong>Thuốc ARV cho trẻ:</strong> Ngay sau sinh</p>
          
          <h3>Sau Sinh</h3>
          <p>• <strong>Không cho con bú:</strong> Sử dụng sữa công thức</p>
          <p>• <strong>Xét nghiệm cho trẻ:</strong> Theo lịch của bác sĩ</p>
          
          <h2>PrEP - Dự Phòng Trước Phơi Nhiễm</h2>
          <p><strong>PrEP là gì:</strong> Thuốc uống hàng ngày để phòng ngừa HIV</p>
          <p><strong>Đối tượng:</strong> Người có nguy cơ cao nhiễm HIV</p>
          <p><strong>Hiệu quả:</strong> Giảm 90% nguy cơ nhiễm HIV qua đường tình dục</p>
          <p><strong>Theo dõi:</strong> Xét nghiệm định kỳ 3 tháng/lần</p>
          
          <h2>PEP - Dự Phòng Sau Phơi Nhiễm</h2>
          <p><strong>PEP là gì:</strong> Thuốc uống trong 72 giờ sau phơi nhiễm</p>
          <p><strong>Thời gian:</strong> Càng sớm càng tốt, tối đa 72 giờ</p>
          <p><strong>Thời gian điều trị:</strong> 28 ngày</p>
          <p><strong>Hiệu quả:</strong> Giảm đáng kể nguy cơ nhiễm HIV</p>
          
          <h2>Giáo Dục và Tuyên Truyền</h2>
          <p>• <strong>Nâng cao nhận thức:</strong> Hiểu biết đúng về HIV/AIDS</p>
          <p>• <strong>Xóa bỏ kỳ thị:</strong> Không phân biệt đối xử</p>
          <p>• <strong>Hỗ trợ người nhiễm:</strong> Chăm sóc và điều trị</p>
          <p>• <strong>Tư vấn:</strong> Cung cấp thông tin chính xác</p>
        `,
      },
    ],
    prevention: [
      {
        title: "Xây Dựng Cộng Đồng An Toàn",
        excerpt: "Các chiến lược xây dựng cộng đồng không ma túy và phòng chống HIV/AIDS.",
        image: "/article-community.png",
        readTime: "10 phút đọc",
        content: `
          <h2>Vai Trò Của Cộng Đồng</h2>
          
          <h3>Tạo Môi Trường An Toàn</h3>
          <p>• <strong>Giám sát cộng đồng:</strong> Theo dõi các hoạt động đáng ngờ</p>
          <p>• <strong>Báo cáo kịp thời:</strong> Thông báo cho cơ quan chức năng</p>
          <p>• <strong>Hỗ trợ lẫn nhau:</strong> Giúp đỡ những người gặp khó khăn</p>
          
          <h3>Giáo Dục Cộng Đồng</h3>
          <p>• <strong>Tổ chức hội thảo:</strong> Nâng cao nhận thức</p>
          <p>• <strong>Phát tờ rơi:</strong> Thông tin về tác hại ma túy</p>
          <p>• <strong>Hoạt động văn hóa:</strong> Tuyên truyền qua nghệ thuật</p>
          
          <h2>Chương Trình Can Thiệp</h2>
          
          <h3>Cho Trẻ Em và Thanh Thiếu Niên</h3>
          <p>• <strong>Giáo dục sớm:</strong> Từ cấp tiểu học</p>
          <p>• <strong>Hoạt động ngoại khóa:</strong> Thể thao, nghệ thuật</p>
          <p>• <strong>Tư vấn tâm lý:</strong> Hỗ trợ khi gặp khó khăn</p>
          
          <h3>Cho Người Lớn</h3>
          <p>• <strong>Đào tạo kỹ năng:</strong> Tạo việc làm</p>
          <p>• <strong>Hỗ trợ tài chính:</strong> Vay vốn khởi nghiệp</p>
          <p>• <strong>Chăm sóc sức khỏe:</strong> Khám bệnh định kỳ</p>
          
          <h2>Hệ Thống Hỗ Trợ</h2>
          
          <h3>Đường Dây Nóng</h3>
          <p>• <strong>Tư vấn 24/7:</strong> Hỗ trợ khi cần thiết</p>
          <p>• <strong>Bảo mật thông tin:</strong> Không tiết lộ danh tính</p>
          <p>• <strong>Chuyên gia:</strong> Tư vấn viên được đào tạo</p>
          
          <h3>Trung Tâm Hỗ Trợ</h3>
          <p>• <strong>Điều trị:</strong> Cai nghiện và phục hồi</p>
          <p>• <strong>Tư vấn:</strong> Tâm lý và xã hội</p>
          <p>• <strong>Tái hòa nhập:</strong> Quay lại cộng đồng</p>
          
          <h2>Đo Lường Hiệu Quả</h2>
          <p>• <strong>Thống kê:</strong> Số ca nhiễm mới</p>
          <p>• <strong>Khảo sát:</strong> Mức độ hiểu biết của cộng đồng</p>
          <p>• <strong>Đánh giá:</strong> Hiệu quả các chương trình</p>
          <p>• <strong>Cải thiện:</strong> Điều chỉnh chiến lược</p>
        `,
      },
    ],
  }
  return articles[category as keyof typeof articles] || []
}
