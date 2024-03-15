import { Card } from 'flowbite-react'; 
import { Products } from '../HomeComponent'; 

export default function CardComponentProduct({ title, description, image }: Products) { 
  return (
    <Card className="max-w-sm">
      <img src={image} alt={title} className="object-cover w-full h-60" /> {/* Set image height to 60% of card height */}
      <div className="p-4">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
    </Card>
  );
}
