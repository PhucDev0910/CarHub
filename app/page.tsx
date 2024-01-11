'use client'
import { IcCarLogo } from "@/public/icons/IcCarLogo";
import { Button, TextField } from "./components";
import { ProductCar } from "@/constants/types/homeType";
import CardProduct from '@/sections/CardProduct/CardProduct';
import { useEffect, useState } from "react";

export default function Home() {
  //Goi Api 
  const [page, setPage] = useState(0);
  const [ products, setProducts] = useState<ProductCar[]>([]);

  const getCars =  async () => {
    const res = await fetch(`
    https://gorest.co.in/public/v2/users?users?page=${page + 1}&per_page=3`);
    const data =  await res.json();
    setProducts([...products, ...data]);
    setPage(page + 1)
  }
//
  useEffect(() => {
    getCars();
  }, [])

  return (
    <>
    <div className="overflow-hidden none">
        <div className="relative w-full h-full" style={{zIndex: -1, left: '59%', bottom: '4rem'}}>
          <img src="/images/hero-bg.png" style={{height:'50rem'}}/>
        </div>
      </div>
      <div className="absolute top-0 left-101 h-4/6 flex">
          <div className="flex-1 flex items-end ">
            <div>
              <h1 className="title-homepage w-4/6">
                Find, book or rent a car, quickly and easily!
              </h1>
              <h2 className="sub-title-homepage w-4/6">            
                Diverse 4-seat and 7-seat car models
              </h2>
              <div className="mt-4">
                <Button width="140px" color="primary">Find out more</Button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-end">
            <img src="/images/g63-hero.png" />
          </div>
        </div>
        <div className="px-10">
          <div>
              <div className="title-catalogue">Car Catalouge</div>
              <div className="sub-title-homepage">Find the type of car you like</div>
          </div>
          <div className="flex mt-5" style={{columnGap: '0.5rem'}}>
            <TextField 
              color="accent"
              width="300px"
              height="40px" 
              placeholder="Enter Search Here!"
              startIcon={<IcCarLogo width="24px" height="24px" />}
            />
            <Button width="100px" height="40px" color="accent">Search</Button>
          </div>
        </div>
        <div className="px-10 py-10" style={{display: 'flex', flexWrap: 'wrap', columnGap: '4rem', rowGap: '4rem'}}>
           {( products || [] ).map((item: ProductCar, index: number) => <CardProduct key={index} iteamDetail={item} />)}
        <div className="flex w-full justify-center">
          <Button width="130px" height="40px" color="accent" onClick={getCars}>View More</Button>
          </div>
        </div>
    </>
      
  )
}
