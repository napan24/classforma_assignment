'use strict';
const express = require('express');
const app = express();
app.post('/getString', (req, res) => {
    console.log(req.body);
    analyzeEntitiesOfText(req.body.str);
    res.send({message:"success"});
});

async function analyzeEntitiesOfText(text) {
    // [START language_entities_text]
    // Imports the Google Cloud client library
    const language = require('@google-cloud/language');

    // Creates a client
    const client = new language.LanguageServiceClient();

    /**
     * TODO(developer): Uncomment the following line to run this code.
     */
    // const text = 'Your text to analyze, e.g. Hello, world!';

    // Prepares a document, representing the provided text
    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Detects entities in the document
    const [result] = await client.analyzeEntities({ document });

    const entities = result.entities;

    console.log('Entities:');
    entities.forEach(entity => {
        console.log(entity.name);
        console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
        if (entity.metadata && entity.metadata.wikipedia_url) {
            console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
        }
    });
    // [END language_entities_text]
}

app.listen(3000, () => {
    console.log("connected");
});