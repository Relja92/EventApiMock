const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Event Management API!");
});

// Endpoint to get a list of events
app.get("/getEvents", (req, res) => {
  const events = [
    {
      id: 1,
      name: "Tech Workshop",
      address: "123 Tech St",
      city: "Techville",
      startDate: "2024-04-10",
      endDate: "2024-04-11",
      startTime: "09:00",
      endTime: "17:00",
      images: [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
      ],
      description: "A hands-on tech workshop.",
      sponsorTier: 2,
      category: "workshops",
    },
    // Add more events as needed
  ];
  res.json(events);
});

// Endpoint to get a list of event categories
app.get("/getCategories", (req, res) => {
  const categories = [
    { id: 1, name: "workshops" },
    { id: 2, name: "lectures" },
    { id: 3, name: "theaters" },
    { id: 4, name: "cinemas" },
    { id: 5, name: "night life" },
    { id: 6, name: "concerts" },
    { id: 7, name: "bazaars" },
    { id: 8, name: "night bazaars" },
    { id: 9, name: "festivals" },
    { id: 10, name: "promotions" },
    { id: 11, name: "sport events" },
    { id: 12, name: "gyms" },
    // Add more categories as needed
  ];
  res.json(categories);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
