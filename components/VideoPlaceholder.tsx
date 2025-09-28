import { useState } from 'react'
import { motion } from 'framer-motion'

interface VideoPlaceholderProps {
  title?: string
  description?: string
  duration?: string
  thumbnail?: string
  videoUrl?: string
  className?: string
}

const VideoPlaceholder = ({
  title = "Demo del Producto",
  description = "Descubre cómo funciona CleanOps en menos de 3 minutos",
  duration = "2:45",
  thumbnail,
  videoUrl,
  className = ""
}: VideoPlaceholderProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}?autoplay=1&rel=0` : null
  }

  const handlePlay = () => {
    if (videoUrl) {
      setIsPlaying(true)
    } else {
      setIsPlaying(true)
      // Simular reproducción por 3 segundos
      setTimeout(() => setIsPlaying(false), 3000)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handlePlay}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Video Thumbnail/Background */}
        <div className="aspect-video relative">
          {isPlaying && videoUrl ? (
            <iframe
              src={getYouTubeEmbedUrl(videoUrl) || ''}
              title={title}
              className="w-full h-full rounded-2xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-blue-600/30 to-indigo-800/40 flex items-center justify-center">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-6 gap-4 p-8 h-full">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-white rounded"
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* CleanOps Interface Mockup */}
              <div className="relative z-10 max-w-md mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-6 bg-primary rounded w-24"></div>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                      <div className="w-6 h-6 bg-blue-500 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2 mt-1"></div>
                      </div>
                      <div className="w-12 h-5 bg-primary rounded"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/3 mt-1"></div>
                      </div>
                      <div className="w-12 h-5 bg-green-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Play Button - Hide when video is playing */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl"
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  boxShadow: isHovered
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-8 h-8 text-primary ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.div>
            </div>
          )}

          {/* Duration Badge - Hide when video is playing */}
          {!isPlaying && (
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              {duration}
            </div>
          )}

          {/* Gradient Overlay - Hide when video is playing */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </div>

        {/* Video Info - Hide when video is playing */}
        {!isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 font-display">
              {title}
            </h3>
            <p className="text-white/80 text-sm">
              {description}
            </p>
          </div>
        )}
      </motion.div>

      {/* Call to Action Below Video */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">
          ¿Quieres ver una demo personalizada para tu empresa?
        </p>
        <button
          onClick={() => window.open('/contacto', '_self')}
          className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Solicitar Demo Personalizada
        </button>
      </div>
    </div>
  )
}

export default VideoPlaceholder