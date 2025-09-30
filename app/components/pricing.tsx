"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { pricingPlans, pricingConfig } from "@/lib/static/template-price";

export default function PricingSection() {
  const [selectedPeriod, setSelectedPeriod] = useState(pricingPlans[0].type);
  const [expandedFeatures, setExpandedFeatures] = useState<{
    [key: string]: boolean;
  }>({});

  // Get current pricing options based on selected period
  const currentPricingOptions =
    pricingPlans.find((plan) => plan.type === selectedPeriod)?.options || [];

  const toggleFeatures = (optionId: string) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [optionId]: !prev[optionId],
    }));
  };
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
            {pricingConfig.title}
          </h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="text-muted-foreground max-w-lg lg:text-xl">
              {pricingConfig.description}
            </p>
            <div className="bg-muted flex h-11 w-fit shrink-0 items-center rounded-md p-1 text-lg">
              <RadioGroup
                defaultValue={pricingConfig.defaultPeriod}
                className={`h-full grid-cols-${pricingPlans.length}`}
                onValueChange={(value) => {
                  setSelectedPeriod(value);
                }}
              >
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.type}
                    className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'
                  >
                    <RadioGroupItem
                      value={plan.type}
                      id={plan.type}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={plan.type}
                      className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
                    >
                      {plan.type.charAt(0).toUpperCase() + plan.type.slice(1)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {currentPricingOptions.map((option) => (
              <div
                key={option.id}
                className={`flex w-full flex-col rounded-lg border p-6 text-left ${
                  option.isPopular ? "bg-muted" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <Badge className="mb-8 block w-fit">{option.badge}</Badge>
                  <span className="text-4xl font-medium">${option.price}</span>
                </div>

                <Separator className="my-6" />
                <div className="flex h-full flex-col justify-between gap-20">
                  <div>
                    <ul className="text-muted-foreground space-y-4">
                      {option.features
                        .slice(
                          0,
                          expandedFeatures[option.id]
                            ? option.features.length
                            : 3
                        )
                        .map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="size-4" />
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                    {option.features.length > 3 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-4 p-0 h-auto text-muted-foreground hover:text-primary"
                        onClick={() => toggleFeatures(option.id)}
                      >
                        {expandedFeatures[option.id]
                          ? "Show less"
                          : `+${option.features.length - 3} more features`}
                      </Button>
                    )}
                  </div>
                  <Button className="w-full">{option.buttonText}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
