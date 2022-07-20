'use strict';
const express=require('express');
const app=express();
app.get('/getString',(req,res)=>{
    analyzeSentimentOfText(req.body.str);
});
async function analyzeSentimentOfText(text) {
    // [START language_sentiment_text]
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
  
    // Detects the sentiment of the document
    const [result] = await client.analyzeSentiment({document});
  
    const sentiment = result.documentSentiment;
    console.log('Document sentiment:');
    console.log(`  Score: ${sentiment.score}`);
    console.log(`  Magnitude: ${sentiment.magnitude}`);
  
    const sentences = result.sentences;
    sentences.forEach(sentence => {
      console.log(`Sentence: ${sentence.text.content}`);
      console.log(`  Score: ${sentence.sentiment.score}`);
      console.log(`  Magnitude: ${sentence.sentiment.magnitude}`);
    });
  
    // [END language_sentiment_text]
  }
  
app.listen(3000,()=>{
    console.log("connected");
});