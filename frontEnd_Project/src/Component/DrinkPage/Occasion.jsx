import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { Button } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { parseAbsoluteToLocal } from "@internationalized/date";

function Occasion() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal("2021-04-07T18:45:22Z")
  );

  return (
    <section className="w-[85%] mx-auto py-5">
        
      <div className=" bg-[#FBFCFF] w-full h-auto  lg:h-[150px] py-10 px-10 lg:ms-10 rounded-xl lg:w-[90%]">
      <h1 className="text-lg md:text-2xl  font-bold text-desc">Find the best places to eat and drink for any occasion</h1>
        <div className="grid grid-col-1 lg:grid-cols-6 gap-3 mt-5 ">
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="Location"
              placeholder="Oshodi, VI"
              className="w-full"
            >
              <AutocompleteItem value="Item1">Item1</AutocompleteItem>
              <AutocompleteItem value="Item2">Item2</AutocompleteItem>
              <AutocompleteItem value="Item3">Item3</AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <DatePicker className="max-w-[284px]" label="Date" labelPlacement="outside" />
          </div>
          <div>
            <DatePicker
               className="max-w-md"
               granularity="minute"
               hourCycle="12"
               hideTimeZone="false"
               label="time"
               labelPlacement="outside"
               value={date}
               onChange={setDate}
            />
          </div>
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="Cuisine"
              placeholder="Chinese"
              className="w-full"
            >
              <AutocompleteItem value="Item1">Item1</AutocompleteItem>
              <AutocompleteItem value="Item2">Item2</AutocompleteItem>
              <AutocompleteItem value="Item3">Item3</AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <Autocomplete
              labelPlacement="outside"
              label="People"
              placeholder="2"
              className="w-full"
            >
              <AutocompleteItem value="Item1">Item1</AutocompleteItem>
              <AutocompleteItem value="Item2">Item2</AutocompleteItem>
              <AutocompleteItem value="Item3">Item3</AutocompleteItem>
            </Autocomplete>
          </div>
          <div>
            <Button color="primary" className="p-7 w-full mt-2">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Occasion;
