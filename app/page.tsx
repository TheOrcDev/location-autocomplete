"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { autocomplete } from "@/lib/google";
import { PlaceAutocompleteResult } from "@googlemaps/google-maps-services-js";
import { useEffect, useState } from "react";

export default function Home() {
  const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchPredictions = async () => {
      const predictions = await autocomplete(input);
      setPredictions(predictions ?? []);
    };
    fetchPredictions();
  }, [input]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-72 font-[family-name:var(--font-geist-sans)]">
      <Command>
        <CommandInput
          placeholder="Type a command or search..."
          value={input}
          onValueChange={setInput}
        />
        <CommandList>
          <CommandEmpty>Start typing to search...</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {predictions.map((prediction) => (
              <CommandItem key={prediction.place_id}>
                {prediction.description}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
}
