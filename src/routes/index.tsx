import { createFileRoute } from '@tanstack/react-router';
import { Hero, Services, Gallery, Contact, pageHead } from '@/components/barber-site';
export const Route = createFileRoute('/')({ head: () => pageHead('Blackwood Barber | Seu estilo. Nossa assinatura.', 'Conheça a Blackwood Barber: cortes, barba e cuidado em cada detalhe. Barbearia fictícia em São Paulo.'), component: Index });
function Index() { return <main><Hero /><Services /><Gallery /><Contact /></main>; }
