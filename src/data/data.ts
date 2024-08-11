export interface Feedback {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    message: string;
  }
  export const feedbackData: Feedback[] = [
    {
      id: 1,
      name: "Zoey Lang",
      avatar: "https://nextui.org/avatars/avatar-1.png",
      rating: 4,
      message:"The pasta was delicious, cooked perfectly with a great balance of flavors."
    },
    {
      id: 2,
      name: "John Doe",
      avatar: "https://nextui.org/avatars/avatar-2.png",
      rating: 5,
      message:
        "The steak was absolutely phenomenal, cooked to perfection and seasoned just right. From the first bite, it was clear that this was a high-quality cut of meat. The char on the outside was crisp and flavorful, while the inside remained tender and juicy. The accompanying sides were well thought out, complementing the steak without overpowering it. The mashed potatoes were creamy with just the right amount of butter, and the grilled vegetables were fresh and perfectly seasoned. This meal was a true culinary experience, one that I will be thinking about for a long time. Worth every penny!",
    },
    {
      id: 3,
      name: "Jane Smith",
      avatar: "https://nextui.org/avatars/avatar-3.png",
      rating: 3,
      message:
        "The burger was good, but the bun was a bit too soft for my liking. The patty itself was flavorful and cooked to my preference, with a nice sear on the outside. The toppings were fresh and added a nice crunch to each bite, but the softness of the bun made it difficult to hold together. I also found that the sauce was a bit too tangy for my taste, overpowering the flavor of the beef. While it wasn’t the best burger I’ve had, it was still enjoyable, just not something I would go out of my way to order again.",
    },
    {
      id: 4,
      name: "Alice Johnson",
      avatar: "https://nextui.org/avatars/avatar-4.png",
      rating: 4,
      message:
        "The sushi was fresh and flavorful, with a nice variety of rolls that offered a good balance of textures and tastes. The fish was incredibly fresh, almost as if it had just been caught, and the rice was seasoned perfectly, holding everything together without being too sticky. The presentation was beautiful, with each piece of sushi carefully arranged on the plate, making it almost too pretty to eat. However, I did feel that the soy sauce was a bit too salty, which slightly overwhelmed the delicate flavors of the sushi. Overall, it was a great dining experience, and I would definitely recommend it to sushi lovers.",
    },
    {
      id: 5,
      name: "Bob Lee",
      avatar: "https://nextui.org/avatars/avatar-5.png",
      rating: 4,
      message:
        "The pizza had a crispy crust and the toppings were generous, making for a hearty and satisfying meal. The sauce was rich and flavorful, with a nice balance of sweetness and acidity. The cheese was melted to perfection, creating that perfect stretch with each bite. I also appreciated the variety of toppings available, allowing for a customized pizza experience. However, I did find that the crust was a bit too thick in some areas, making it a bit chewy. Despite this, the overall flavor and quality of the pizza were excellent, and I would definitely recommend it to others looking for a good pizza experience.",
    },
    {
      id: 6,
      name: "Clara Davis",
      avatar: "https://nextui.org/avatars/avatar-6.png",
      rating: 5,
      message:
        "The dessert was a showstopper! The chocolate cake was rich and decadent, with layers of moist cake and smooth, creamy frosting. The presentation was exquisite, with a drizzle of chocolate sauce and a sprinkle of powdered sugar that made it almost too beautiful to eat. The cake itself was perfectly balanced, not too sweet, with just the right amount of bitterness from the dark chocolate. I also loved the addition of fresh berries, which added a pop of color and a burst of freshness that complemented the richness of the cake. It was the perfect way to end the meal, and I would highly recommend it to anyone with a sweet tooth. The attention to detail in this dessert truly set it apart, making it a memorable and delightful experience.",
    },
  ];
  