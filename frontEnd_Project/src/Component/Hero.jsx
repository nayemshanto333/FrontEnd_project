import React from 'react';
import {Autocomplete,AutocompleteSection,AutocompleteItem} from "@nextui-org/autocomplete";
import { Button } from '@nextui-org/react';

function Hero() {
  return (
    <section className="bg-[url('hero.png')] w-full h-[70vh] bg-no-repeat bg-cover mt-4 overflow-hidden "> 
        <div className='container  mx-auto px-5'>
          <h1 className=' w-[70%] lg:w-[60%] text-white font-bold text-2xl  lg:text-6xl text-center lg:text-start  mt-[30px] lg:py-10 lg:px-10 leading-tight mx-auto'>Find amazing things to do anytime, anywhere in Lagos.</h1>





          <div className=' mt-10 w-full lg:w-[750px] h-auto lg:h-[150px] bg-[#FBFCFF] rounded-lg py-10 px-10 lg:ms-10'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
              <div>
                <Autocomplete
                labelPlacement='outside'label="Location" placeholder='Oshodi'
                className='w-full'
                >
                  <AutocompleteItem value="Item1">Item1</AutocompleteItem>
                  <AutocompleteItem value="Item2">Item2</AutocompleteItem>
                  <AutocompleteItem value="Item3">Item3</AutocompleteItem>
                </Autocomplete>
              </div>
              <div>
                <Autocomplete
                labelPlacement='outside'label="Date" placeholder='Date'
                className='w-full'
                >
                  <AutocompleteItem value="Item1">Item1</AutocompleteItem>
                  <AutocompleteItem value="Item2">Item2</AutocompleteItem>
                  <AutocompleteItem value="Item3">Item3</AutocompleteItem>
                </Autocomplete>
              </div>
              <div>
                <Autocomplete
                labelPlacement='outside'label="Activities" placeholder='Night Clubs'
                className='w-full'
                >
                  <AutocompleteItem value="Item1">Item1</AutocompleteItem>
                  <AutocompleteItem value="Item2">Item2</AutocompleteItem>
                  <AutocompleteItem value="Item3">Item3</AutocompleteItem>
                </Autocomplete>
              </div>
              <div>
                <Button color='primary' className='p-7 w-full mt-2'>Search</Button>
              </div>
              

            </div>
          </div>

        </div>
      
    </section>
  );
}

export default Hero;
