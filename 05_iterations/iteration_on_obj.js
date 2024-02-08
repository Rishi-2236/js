const mycoding=[//array
    { 
    languageName:"javascript",
    languageFileName:"js"
},//obj1
    {
    languageName:"java",
    languageFileName:"java"
},//obj2
    {
        languageName:"ruby",
    languageFileName:"rb"
},//obj3
    {
        languageName:"python",
    languageFileName:"py"
}//obj4
]
mycoding.forEach( (item)=>{//callback function

    console.log(item.languageName);
})