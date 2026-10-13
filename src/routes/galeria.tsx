import { createFileRoute } from '@tanstack/react-router';
import { Gallery, pageHead } from '@/components/barber-site';
export const Route = createFileRoute('/galeria')({ head: () => pageHead('Galeria | Blackwood Barber', 'Precisão no corte, cuidado na barba e um ambiente com personalidade. Explore a galeria da Blackwood Barber.'), component: GalleryPage });
function GalleryPage() { return <main><Gallery /></main>; }