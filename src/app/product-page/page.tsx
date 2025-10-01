import MainProduct from '@/components/product-main';

export const ProductRow = () => {
  return (
  <div className='p-[5%]'>
      <h2>Top Collection</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.</p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[25px]">
        <MainProduct />
        <MainProduct />
        <MainProduct />
        <MainProduct />
      </div>
   </div>
  )
}

export default function Home() {
  return (
   <div>
      <ProductRow/>
      <ProductRow/>
      <ProductRow/>
   </div>
  );
}
