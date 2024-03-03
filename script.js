// Free Dictionary

//This function is to create a h1 tag
function create_h1(tagname,attrname,attrvalue,content){
    let res = document.createElement(tagname);
    res.setAttribute(attrname,attrvalue);
    res.innerHTML = content;
    return res;
}

//This function is to create a h2 tag
function create_h2(tagname,attrname,attrvalue,content){
    let res = document.createElement(tagname);
    res.setAttribute(attrname,attrvalue);
    res.innerHTML = content;
    return res;
}

//This function is to create a h4 tag
function create_h4(tagname,attrname,attrvalue,content){
    let res = document.createElement(tagname);
    res.setAttribute(attrname,attrvalue);
    res.innerHTML = content;
    return res;
}

//This function is to create a label
function create_label(tagname,attr1name,attr1value,attr2name,attr2value,content){
    let res = document.createElement(tagname);
    res.setAttribute(attr1name,attr1value);
    res.setAttribute(attr2name,attr2value);
    res.innerHTML = content;
    return res;
}

//This function is to create a input field
 function create_input(tagname,attr1name,attr1value,attr2name,attr2value,attr3name,attr3value,attr4name,attr4value){
    let res = document.createElement(tagname);
    res.setAttribute(attr1name,attr1value);
    res.setAttribute(attr2name,attr2value);
    res.setAttribute(attr3name,attr3value);
    res.setAttribute(attr4name,attr4value);
    return res;
 }


//This function is to create a button
function create_button(tagname,attr1name,attr1value,attr2name,attr2value,attr3name,attr3value,content){
    let res = document.createElement(tagname);
    res.setAttribute(attr1name,attr1value);
    res.setAttribute(attr2name,attr2value);
    res.setAttribute(attr3name,attr3value);
    res.innerHTML = content;
    return res;
}

//This function is to create a break tag
function create_break(){
    let res = document.createElement("br");
    return res;
}

//This function is to create a div tag
function create_div(tagname,attrname,attrvalue,content){
    let res = document.createElement(tagname);
    res.setAttribute(attrname,attrvalue);
    res.innerHTML = content; 
    return res;
}

//This function is to create an anchor tag
function create_anchor(tagname,attr1name,attr1value,attr2name,attr2value,content){
    var res = document.createElement(tagname);
    res.setAttribute(attr1name,attr1value);
    res.setAttribute(attr2name,attr2value);
    res.innerHTML = content;
    return res;
}

//This function is to create a div tag
function create_div_main(tagname,attrname,attrvalue){
    var res = document.createElement(tagname);
    res.setAttribute(attrname,attrvalue);
    return res;
}

//The functions create_h1 is called here and values for the parameters are passed
let heading1 = create_h1("h1","class","heading1","Dictionary");

let heading2 = create_h2("h2","class","heading2","This Dictionary is Completely Free")

let heading3 = create_h4("h4","class","heading3","A dictionary is a repository of the history of words; a living record of the evolving tapestry of human thought, culture, and expression.")

//The function create_label is called here and values for the parameters are passed
let label = create_label("label","for","search","class","word1","Word You Need to Search:")
//The function creat_break is called here to create a break tag
let br1 = create_break();

//The function creat_input is called here and values for the paramenters are passed
let input = create_input("input","type","text","id","search","class","word2","placeholder","Enter the word")
//The function create_break is called here twice to create two break tags
let br2 = create_break();
let br3 = create_break();

//The function create_button is called here and values for the parameters are passed
let button = create_button("button","type","button","class","submit","onclick","foo()","Search")

document.body.append(heading1,heading2,heading3,label,br1,input,br2,br3,button);

//This funnction gets the input given by the user and uses it to fetch data from the dictionary api and display it
//If the word given by the user is not found it prints the statement in the catch block
async function foo(){
    try{
    let word_search = document.getElementById("search").value
    let reset = document.getElementById("search").value = ""
    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word_search}`);
    //console.log(res)
    let data = await res.json();
    //console.log(data);
    let meaning = data[0].meanings;
    
    if(meaning.length>1){
    let div_main1 = create_div_main("div","class","main")
    let word = data[0].word;
    let div1 = create_div("div","class","meaning1",`<b>Word:</b> ${word}`)
    //console.log(word);

    let speech1 = data[0].meanings[0].partOfSpeech
    let div2 = create_div("div","class","meaning1",`<b>Part of Speech:</b> ${speech1}`)
    //console.log(speech1);
    let definition1 = data[0].meanings[0].definitions[0].definition;
    let div3 = create_div("div","class","meaning1",`<b>Definition:</b> ${definition1}`)
    //console.log(definition1);
    
    var speech2 = data[0].meanings[1].partOfSpeech
    let div4 = create_div("div","class","meaning1",`<b>Part of Speech:</b> ${speech2}`)
    //console.log(speech2);
    var definition2 = data[0].meanings[1].definitions[0].definition;
    let div5 = create_div("div","class","meaning1",`<b>Definition:</b> ${definition2}`)
    //console.log(definition2);

    var phonetic = data[0].phonetic;
    let div6 = create_div("div","class","meaning1",`<b>Phonetic Transcription:</b> ${phonetic}`)
    //console.log(phonetic);
    
    var url = data[0].sourceUrls[0];
    var anchor1 = create_anchor("a","href",`${url}`,"target","blank","To Know More Click Here")
    //console.log(url);

    div_main1.append(div1,div2,div3,div4,div5,div6,anchor1)
    document.body.append(div_main1);
}
else{
    let div_main2 = create_div_main("div","class","main")
    var word = data[0].word;
    let div1 = create_div("div","class","meaning1",`<b>Word:</b> ${word}`)
    //console.log(word);

    var speech1 = data[0].meanings[0].partOfSpeech
    let div2 = create_div("div","class","meaning1",`<b>Part of Speech:</b> ${speech1}`)
    //console.log(speech1);
    var definition1 = data[0].meanings[0].definitions[0].definition;
    let div3 = create_div("div","class","meaning1",`<b>Definition:</b> ${definition1}`)
    //console.log(definition1);

    var phonetic = data[0].phonetic;
    let div4 = create_div("div","class","meaning1",`<b>Phonetic Transcription:</b> ${phonetic}`)
    //console.log(phonetic);
    
    var url = data[0].sourceUrls[0];
    var anchor2 = create_anchor("a","href",`${url}`,"target","blank","To Know More Click Here")
    //console.log(url);

    div_main2.append(div1,div2,div3,div4,anchor2);
    document.body.append(div_main2);
}
}
catch(error){
    let div1 = create_div("div","class","no_data","Oops! Word Not Found")
    document.body.append(div1);
}
}
