export const SelectTravelerOptions = [
  {
    id: 1,
    title: "Just Me",
    desc: "Solo traveler in exploration.",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "Couple",
    desc: "A romantic getaway.",
    icon: "🥂",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "Fun family trips.",
    icon: "🏠",
    people: "3-5",
  },
  {
    id: 4,
    title: "Friends",
    desc: "Journeys with your closest friends .",
    icon: "🏖️",
    people: "3-8",
  },
];

export const BudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Travel on a shoestring budget.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Balance comfort and affordability.",
    icon: "🏨",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Experience the finest travel.",
    icon: "✨",
  },
];

export const Prompt =
  "Generate Travel Plan for Location : {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotel options list with Hotel Name, Hotel address, Price, Hotel image with url, geo coordinates, rating, description and Places to visit nearby  with place name. Place Details, place image url, geo coordinates, ticket pricing. Time to travel each of location for {totalDays} Days and {totalNight}  night with each day plan with best time to visit in JSON format";
