
import Hero from '@/components/hero';
import ProductCont from '@/components/product';
import Booking from '@/components/booking'
import Section from '@/components/section'

export default function Home() {
  return (
   <div>

    <main>
      <Hero/>
      <ProductCont/>
      <Section/>
      <Booking/>
    </main>
   </div>
  );
}
