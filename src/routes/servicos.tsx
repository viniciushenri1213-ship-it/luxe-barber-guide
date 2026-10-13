import { createFileRoute } from '@tanstack/react-router';
import { Services, pageHead } from '@/components/barber-site';
export const Route = createFileRoute('/servicos')({ head: () => pageHead('Serviços | Blackwood Barber', 'Corte de cabelo, barba e experiência completa. Conheça os serviços e preços ilustrativos da Blackwood Barber.'), component: ServicesPage });
function ServicesPage() { return <main><Services /></main>; }