'use client'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Volume2, Battery, Zap, Headphones } from 'lucide-react'

interface Product {
  name: string
  logo: string
  soundQuality: number
  batteryLife: number
  comfort: number
  noiseCancellation: number
  features: string[]
  strengths: string
  weaknesses: string
  overall_performance: string
  description: string
}

const products: Product[] = [
  {
    name: 'AirPods 2',
    logo: '/placeholder.svg?height=50&width=50',
    soundQuality: 7,
    batteryLife: 8,
    comfort: 7,
    noiseCancellation: 3,
    features: ['Improved sync', 'Faster pairing', 'Better audio processing', 'Longer battery life'],
    strengths: 'Improved sync, faster pairing and switching, better audio processing, and longer battery life.',
    weaknesses: 'No new colors, no new coating, no new special waterproofing, and no changes to the exterior design.',
    overall_performance: 'The AirPods 2 have improved sync for video and gaming, faster pairing and switching between Apple devices, better audio processing, and longer battery life.',
    description: "AirPods 2 offer improved sync, faster pairing, better audio processing, and longer battery life. However, they lack new colors, coatings, waterproofing, and exterior design changes."
  },
  {
    name: 'AirPods 4',
    logo: '/placeholder.svg?height=50&width=50',
    soundQuality: 8,
    batteryLife: 8,
    comfort: 8,
    noiseCancellation: 7,
    features: ['Active noise cancellation', 'New design', 'Improved sound quality'],
    strengths: 'Active noise cancellation, new design, and improved sound quality.',
    weaknesses: 'No MagSafe, no lanyard, and no significant changes to the exterior design.',
    overall_performance: 'The AirPods 4 have active noise cancellation, a new design, and improved sound quality.',
    description: "AirPods 4 boast active noise cancellation, a new design, and improved sound quality.  However, they lack MagSafe, a lanyard, and significant exterior design changes."
  },
  {
    name: 'AirPods Pro 2',
    logo: '/placeholder.svg?height=50&width=50',
    soundQuality: 9,
    batteryLife: 9,
    comfort: 9,
    noiseCancellation: 9,
    features: ['Professional ANC', 'Better seal', 'Improved sound quality'],
    strengths: 'Professional active noise cancellation, better seal, and improved sound quality.',
    weaknesses: 'More expensive than the AirPods 4, and no significant changes to the exterior design.',
    overall_performance: 'The AirPods Pro 2 have professional active noise cancellation, a better seal, and improved sound quality.',
    description: "AirPods Pro 2 offer professional active noise cancellation, a better seal, and improved sound quality.  However, they are more expensive than AirPods 4 and lack significant exterior design changes."
  },
  {
    name: 'Samsung Galaxy Buds 2 Pro',
    logo: '/placeholder.svg?height=50&width=50',
    soundQuality: 8,
    batteryLife: 7,
    comfort: 8,
    noiseCancellation: 7,
    features: ['Great sound quality', 'Decent battery life', 'Comfortable design'],
    strengths: 'Great sound quality, decent battery life, and comfortable design.',
    weaknesses: 'Noise cancellation is not as good as the AirPods Pro 2, and the EQ feature is limited.',
    overall_performance: 'The Samsung Galaxy Buds 2 Pro have great sound quality, decent battery life, and a comfortable design.',
    description: "Samsung Galaxy Buds 2 Pro provide great sound quality, decent battery life, and a comfortable design.  However, noise cancellation is not as good as AirPods Pro 2, and the EQ feature is limited."
  },
  {
    name: 'Samsung Galaxy Buds 3',
    logo: '/placeholder.svg?height=50&width=50',
    soundQuality: 9,
    batteryLife: 8,
    comfort: 9,
    noiseCancellation: 8,
    features: ['Great sound quality', 'Decent battery life', 'Comfortable design'],
    strengths: 'Great sound quality, decent battery life, and comfortable design.',
    weaknesses: 'Noise cancellation is not as good as the AirPods Pro 2, and the EQ feature is limited.',
    overall_performance: 'The Samsung Galaxy Buds 3 have great sound quality, decent battery life, and a comfortable design.',
    description: "Samsung Galaxy Buds 3 offer great sound quality, decent battery life, and a comfortable design.  However, noise cancellation is not as good as AirPods Pro 2, and the EQ feature is limited."
  }
]

const FeatureIcon: React.FC<{ feature: string }> = ({ feature }) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'Improved sync': <Zap className="w-5 h-5 text-yellow-400" />,
    'Faster pairing': <Zap className="w-5 h-5 text-blue-400" />,
    'Better audio processing': <Headphones className="w-5 h-5 text-purple-400" />,
    'Longer battery life': <Battery className="w-5 h-5 text-green-400" />,
    'Active noise cancellation': <Volume2 className="w-5 h-5 text-red-400" />,
    'New design': <Star className="w-5 h-5 text-yellow-400" />,
    'Improved sound quality': <Headphones className="w-5 h-5 text-cyan-400" />,
    'Professional ANC': <Volume2 className="w-5 h-5 text-red-500" />,
    'Better seal': <Headphones className="w-5 h-5 text-teal-400" />,
    'Great sound quality': <Headphones className="w-5 h-5 text-orange-400" />,
    'Decent battery life': <Battery className="w-5 h-5 text-green-300" />,
    'Comfortable design': <Star className="w-5 h-5 text-blue-300" />
  }

  return (
    <div className="flex items-center gap-2">
      {iconMap[feature] || <div className="w-5 h-5" />}
      <span className="text-sm">{feature}</span>
    </div>
  )
}

const RatingBadge: React.FC<{ rating: number }> = ({ rating }) => {
  let color = "bg-red-500"
  if (rating >= 8) color = "bg-green-500"
  else if (rating >= 6) color = "bg-yellow-500"

  return (
    <Badge className={`${color} text-white text-xs px-1 py-px`}>
      {rating}
    </Badge>
  )
}

export default function Component() {
  const allFeatures = Array.from(new Set(products.flatMap(p => p.features)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          Product Comparison Matrix
        </h1>
        <Tabs defaultValue="matrix" className="w-full">
          <TabsList className="w-full mb-12 bg-gray-800 p-1 rounded-full">
            <TabsTrigger 
              value="matrix" 
              className="text-xl text-gray-200 py-3 px-6 rounded-full transition-all duration-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Feature Matrix
            </TabsTrigger>
            <TabsTrigger 
              value="details" 
              className="text-xl text-gray-200 py-3 px-6 rounded-full transition-all duration-300 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              Detailed View
            </TabsTrigger>
          </TabsList>
          <TabsContent value="matrix">
            <Card className="bg-gray-800 border-purple-500 shadow-lg">
              <CardHeader className="space-y-1 pb-7">
                <CardTitle className="text-3xl text-white">Feature Comparison</CardTitle>
                <CardDescription className="text-gray-300 text-lg">Compare features across different products</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px] text-gray-300 text-lg">Product</TableHead>
                        {allFeatures.map((feature, index) => (
                          <TableHead key={index} className="text-center text-gray-300">
                            <FeatureIcon feature={feature} />
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.map((product, index) => (
                        <TableRow key={index} className="hover:bg-purple-900/50 transition-colors duration-200">
                          <TableCell className="font-medium text-white text-lg flex items-center gap-3">
                            <img src={product.logo} alt={`${product.name} logo`} className="w-10 h-10" />
                            {product.name}
                          </TableCell>
                          {allFeatures.map((feature, featureIndex) => (
                            <TableCell key={featureIndex} className="text-center">
                              {product.features.includes(feature) ? (
                                <Check className="mx-auto text-green-400 w-6 h-6" />
                              ) : (
                                <X className="mx-auto text-red-400 w-6 h-6" />
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="details">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-800 border-purple-500 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                    <CardHeader className="space-y-1 p-4">
                      <CardTitle className="text-lg text-white flex items-center gap-2">
                        <img src={product.logo} alt={`${product.name} logo`} className="w-8 h-8" />
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 space-y-2">
                      <p className="text-gray-300 text-sm line-clamp-2">{product.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Headphones className="w-4 h-4 text-cyan-400" />
                          <span className="text-gray-300">Sound:</span>
                          <RatingBadge rating={product.soundQuality} />
                        </div>
                        <div className="flex items-center gap-1">
                          <Battery className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300">Battery:</span>
                          <RatingBadge rating={product.batteryLife} />
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-300">Comfort:</span>
                          <RatingBadge rating={product.comfort} />
                        </div>
                        <div className="flex items-center gap-1">
                          <Volume2 className="w-4 h-4 text-red-400" />
                          <span className="text-gray-300">ANC:</span>
                          <RatingBadge rating={product.noiseCancellation} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}