const express = require("express");
const cors = require("cors");
require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");
const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY

const configuration = new Configuration({
    apiKey: API_KEY
});

const openai = new OpenAIApi(configuration);

app.post("/completions", async (req, res) => {
    try {
        const message = req.body && req.body.message ? req.body.message : "";
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: "Create a SQL request to " + message,
                },
            ],
        });
        res.send(completion.data.choices[0].message);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
