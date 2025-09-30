export interface PricingOption {
  id: string;
  name: string;
  badge: string;
  price: number;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export interface PricingPlan {
  type: string;
  options: PricingOption[];
}

export const pricingConfig = {
  title: "Pricing",
  description: "Harga bersesuaian dengan kebutuhan project anda.",
  monthlyLabel: "Monthly",
  yearlyLabel: "Yearly",
  dailyLabel: "Daily",
  proLabel: "Pro",
  defaultPeriod: "Template",
};

export const pricingPlans: PricingPlan[] = [
  {
    type: "Template",
    options: [
      {
        id: "free",
        name: "FREE",
        badge: "FREE",
        price: 0,
        features: ["3 - 5 Halaman", "Komponen Custom", "Responsive Design"],
        buttonText: "Get Started",
      },
      {
        id: "pro",
        name: "PRO",
        badge: "PRO",
        price: 9,
        features: [
          "Everything in FREE",
          "Live call support every month",
          "Unlimited Storage",
        ],
        buttonText: "Purchase",
        isPopular: true,
      },
      {
        id: "elite",
        name: "Elite",
        badge: "Elite",
        price: 25,
        features: [
          "Everything in PRO",
          "Advanced analytics",
          "Custom branding",
          "Unlimited users",
        ],
        buttonText: "Purchase",
      },
    ],
  },
  {
    type: "Custom",
    options: [
      {
        id: "free",
        name: "FREE",
        badge: "FREE",
        price: 0,
        features: [
          "Unlimited Integrations",
          "Windows, Linux, Mac support",
          "24/7 Support",
          "Free updates",
        ],
        buttonText: "Get Started",
      },
      {
        id: "pro",
        name: "PRO",
        badge: "PRO",
        price: 20,
        features: [
          "Everything in FREE",
          "Live call support every month",
          "Unlimited Storage",
        ],
        buttonText: "Purchase",
        isPopular: true,
      },
      {
        id: "elite",
        name: "Elite",
        badge: "Elite",
        price: 40,
        features: [
          "Everything in PRO",
          "Advanced analytics",
          "Custom branding",
          "Unlimited users",
        ],
        buttonText: "Purchase",
      },
    ],
  },
  {
    type: "Undangan",
    options: [
      {
        id: "free",
        name: "FREE",
        badge: "FREE",
        price: 0,
        features: [
          "Unlimited Integrations",
          "Windows, Linux, Mac support",
          "24/7 Support",
          "Free updates",
        ],
        buttonText: "Get Started",
      },
      {
        id: "pro",
        name: "PRO",
        badge: "PRO",
        price: 25,
        features: [
          "Everything in FREE",
          "Live call support every month",
          "Unlimited Storage",
        ],
        buttonText: "Purchase",
        isPopular: true,
      },
      {
        id: "elite",
        name: "Elite",
        badge: "Elite",
        price: 50,
        features: [
          "Everything in PRO",
          "Advanced analytics",
          "Custom branding",
          "Unlimited users",
        ],
        buttonText: "Purchase",
      },
    ],
  },
];
