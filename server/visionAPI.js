// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
const img = require('./image')

// Creates a client
const client = new vision.ImageAnnotatorClient({
    keyFilename: "../../one-time-password-95a0ab9f1f99.json"
});
let array = [];
let finalArray = [];
const fileName = '../../images/output.png';
// console.log(fileName)

const api = async function() {

// Read a local image as a text document
    const [result] = await client.documentTextDetection(fileName);
    const fullTextAnnotation = result.fullTextAnnotation;
    array.push(fullTextAnnotation.text)
    console.log(`Full text: ${fullTextAnnotation.text}`);
    fullTextAnnotation.pages.forEach(page => {
        page.blocks.forEach(block => {
            console.log(`Block confidence: ${block.confidence}`);
            block.paragraphs.forEach(paragraph => {
                console.log(`Paragraph confidence: ${paragraph.confidence}`);
                paragraph.words.forEach(word => {
                    const wordText = word.symbols.map(s => s.text).join('');
                    console.log(`Word text: ${wordText}`);
                    console.log(`Word confidence: ${word.confidence}`);
                    word.symbols.forEach(symbol => {
                        console.log(`Symbol text: ${symbol.text}`);
                        console.log(`Symbol confidence: ${symbol.confidence}`);
                    });
                });
            });
        });
    });


    //remove excess fat
    for(var i = 0; i < array.length; ++i)
        array[i] = array[i].replace(/(\r\n|\n|\r)/gm,"");

        //seperate by a mark // example "#"
        array = array.join('').split('#');

        let j = 0;
        while(j < array.length){
            if(array[j].length > 0 ){
                finalArray.push(array[j])
            }
            j++;
        }



    console.log(finalArray);
}

api();




// })();

module.exports = api;
