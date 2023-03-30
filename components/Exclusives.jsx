import React from 'react'
import { ExclusivesItem } from './ExclusivesItem'

export const Exclusives = () => {
  return (
    <>
      <div className="mb-10">
        <div className='px-8 py-4'>
          <p className='px-4 text-2xl tracking-wide font-medium text-black/80'>SNKRS Exclusives</p>
        </div>
        <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative px-8'>
          <ExclusivesItem
            name='Nike Air Max 95'
            price='245'
            genre='Women'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/3bd37611-e4d5-4450-80ef-9b1a42be2501/air-max-95-shoes.png'
          />
          <ExclusivesItem
            name='Nike Air Max Plus OG'
            price='240'
            genre='Men'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/765bb0b5-dfa1-4882-8992-b9c0f1889532/air-max-plus-og-shoes.png'
          />
          <ExclusivesItem
            name='Nike Air Max Scorpion Flyknit SE'
            price='340'
            genre='Men'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/9efef841-ea76-49f0-ad1c-f6767453d6e2/air-max-scorpion-flyknit-se-shoes.png'
          />
          <ExclusivesItem
            name='Nike Air Max Cortez'
            price='120'
            genre='Men'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/a3734282-d3ff-4df6-96bd-bbe1227ef63c/cortez-shoes.png'
          />
          <ExclusivesItem
            name='Nike Terminator High OG'
            price='165'
            genre='Men'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/1985a880-4040-4a90-a636-5fd00db3ef77/terminator-high-og-shoes.png'
          />
          <ExclusivesItem
            name='Nike Air Max Cortez'
            price='115'
            genre='Women'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/c9d2720e-d75b-4532-96ad-350b79f4c963/cortez-shoes.png'
          />
          <ExclusivesItem
            name='Nike Terminator High'
            price='165'
            genre='Men'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/2309c6be-a253-495f-915c-0c5041c6751f/terminator-high-shoes.png'
          />
          <ExclusivesItem
            name='Air Jordan 1 Retro High'
            price='225'
            genre='Women'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/33a1ec20-a64b-49b0-ae7a-79f2bd46c3f3/air-jordan-1-retro-high-shoes.png'
          />
          <ExclusivesItem
            name='Nike Air Penny 2 x Stussy'
            price='260'
            genre='Men'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/6163fb06-2d65-415f-a803-e4265194ae0c/air-penny-2-stussy-shoes.png'
          />
          <ExclusivesItem
            name="Nike Air More Uptempo '96"
            price='225'
            genre='Men'
            img='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_441,c_limit/5174abcd-42d8-4c1d-bd3e-222d70303e51/air-more-uptempo-96-shoes.png'
          />
        </div>
      </div>
    </>
  )
}
