require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // Parse the incoming request data
  const { name, amount } = JSON.parse(event.body);

  // Generate a unique product name using donor's name and the current timestamp
  const productName = `${name}-${Date.now()}`;

  try {
    // Create product
    const product = await stripe.products.create({
      name: productName,
      description: `Donation made by ${name} on ${new Date().toLocaleString()}`,
    });

    // Create price
    const price = await stripe.prices.create({
      currency: "usd",
      unit_amount: amount * 100, // convert dollar amount to cents
      product: product.id,
    });

    // Create payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      after_completion: {
        type: "redirect",
        redirect: {
          url: process.env.REDIRECT_URL,
        },
      },
    });

    // Return the payment link URL
    return {
      statusCode: 200,
      body: JSON.stringify({ url: paymentLink.url }),
    };
  } catch (error) {
    console.error("Stripe API error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
