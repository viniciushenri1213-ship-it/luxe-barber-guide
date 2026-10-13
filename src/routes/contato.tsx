import { createFileRoute } from '@tanstack/react-router';
import { Contact, pageHead } from '@/components/barber-site';
export const Route = createFileRoute('/contato')({ head: () => pageHead('Contato e horários | Blackwood Barber', 'Veja o endereço, horários ilustrativos e contato de exemplo da barbearia fictícia Blackwood Barber.'), component: ContactPage });
function ContactPage() { return <main><Contact /></main>; }