import { Product } from '@pages/home/models'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { AspectRatio } from '@/components/ui/aspect-ratio'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="min-h-[400px]">
      <Carousel>
        <CarouselContent>
          {product.images.map((image, index) => (
            <CarouselItem key={image}>
              <AspectRatio ratio={1 / 1} className="bg-muted">
                <img
                  src={`products/${image}`}
                  alt={`${product.title} carousel image-${index + 1}`}
                  loading="lazy"
                  className="h-full w-full rounded-md object-cover transform duration-500 ease-in-out hover:scale-110"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
      </Carousel>
      <CardHeader>
        <CardTitle>
          <h2>{product.title}</h2>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          <p>{product.description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default ProductCard
