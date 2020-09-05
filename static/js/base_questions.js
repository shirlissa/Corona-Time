var WELCOME_PAGE = {name:"welcome", questions:[
    {
        type: "text",
        name: "Name",
        startWithNewLine: true,
        isRequired:true,
        title: "שם:",
        placeHolder:"אנא כתוב/כתבי את שמך כאן"

    }
]
}

var BASE_QUESTIONS_MANUALLY_ONLY = [

    {
        type:"radiogroup",
        name:"<ID>_corona_in_the_pic",
        startWithNewLine: true,
        isRequired:true,
        title:"אנא סמן/י 'כן' אם את/ה חושב/ת שיש קורונה בתמונה, ו'לא' אם את חושבת שאין",
        choices:[
        {text:"כן",value:"corona_in_the_frame"},
        {text:"לא", value:"no_corona"},
        {text:"לא בטוח/ה", value:"not_sure_corona"}
        ]
    },

    {
        type: "text",
        name: "<ID>_number_of_coronas",
        "visibleIf": "{<ID>_corona_in_the_pic}='corona_in_the_frame'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והצלחת לזהות קורונה בתמונה, אנא כתוב/כיתבי כמה בקבוקי קורנה מצאת",
        placeHolder:"אנא כתוב/כתבי כאן את מספר בקבוקי הקורנה בתמונה"
    },
    {
        type: "text",
        name: "<ID>_general_comment_not_sure",
        "visibleIf": "{<ID>_corona_in_the_pic}='not_sure_corona'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והחלטת שאינך בטוח/ה בנוגע להמצאות קורונה בתמונה, אנא כתוב/כיתבי מדוע.",
        placeHolder:"אנא כתוב/כתבי את תגובתך כאן"
    },


        {
        type: "html",
        name: "info",
//        html: "<table><body><row><td><img src='/Content/Images/examples/26178-20160417.jpg' width='100px' /></td><td style='padding:20px'>You may put here any html code. For example images, <b>text</b> or <a href='https://surveyjs.io/create-survey'  target='_blank'>links</a></td></row></body></table>"
//        html: "<table><body dir='rtl'><row><td></td><td style='padding:20px'><p>אם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך ברצונך לשנות אותו.. </p><b>text</b> or <a href='https://surveyjs.io/create-survey'  target='_blank'>links</a></td></row></body></table>"
        html: "<table> <body dir='rtl'> <br></br><row> האם תרצה/תרצי לשנות את הפילטר? <p><a" +
            " href='http://localhost:8080/?run_prediction=2&id=shir2&questions=MANUALLY&v=<v>'>ברצוני לשנות את הפילטר" +
            " באופן ידני</a></td></p></row></body></table>"
        }
]

var BASE_QUESTIONS_MANUALLY = [
    {
        type:"radiogroup",
        name:"<ID>_corona_in_the_pic",
        startWithNewLine: true,
        isRequired:true,
        title:"אנא סמן/י 'כן' אם את/ה חושב/ת שיש קורונה בתמונה, ו'לא' אם את חושבת שאין",
        choices:[
        {text:"כן",value:"corona_in_the_frame"},
        {text:"לא", value:"no_corona"},
        {text:"לא בטוח/ה", value:"not_sure_corona"}
        ]
    },
        {
        type: "text",
        name: "<ID>_number_of_coronas",
        "visibleIf": "{<ID>_corona_in_the_pic}='corona_in_the_frame'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והצלחת לזהות קורונה בתמונה, אנא כתוב/כיתבי כמה בקבוקי קורנה מצאת",
        placeHolder:"אנא כתוב/כתבי כאן את מספר בקבוקי הקורנה בתמונה"
    },
    {
        type: "text",
        name: "<ID>_general_comment_not_sure",
        "visibleIf": "{<ID>_corona_in_the_pic}='not_sure_corona'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והחלטת שאינך בטוח/ה בנוגע להמצאות קורונה בתמונה, אנא כתוב/כיתבי מדוע.",
        placeHolder:"אנא כתוב/כתבי את תגובתך כאן"
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter",
        isRequired:false,
        startWithNewLine: true,
        "title": "התאמת פילטר",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"פנים", value:"inside"},
        {text:"חוץ", value:"out"}
//        {text:"לא ידוע", value:"in_out_unknown"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_in",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='inside'",
        "title": "התאמת פילטר - פנים",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"inside_sport"},
        //דוכןת מסעדה
        {text:"אוכל", value:"inside_food"},
        //birthday, pool,
        {text:"מסיבה", value:"inside_party"},
        {text:"קניות", value:"inside_shopping"},
        {text:"תרבות", value:"inside_culture"}
        ]
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter_in_sport",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='inside' and {<ID>_filter_in}='inside_sport'",
        "title": "התאמת פילטר - פנים ספורט",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"אצטדיון כדורגל", value:"inside_sport_soccer"},
        {text:"מגרש כדורסל", value:"inside_sport_basketball"},
        {text:"כדורשת חופים", value:"inside_sport_beach_volleyball"},
        {text:"הוקי קרח", value:"inside_sport_hockey"},
        {text:"זירת איגרוף", value:"inside_sport_boxing"}
        ]
    },
   {
        "type": "dropdown",
        "name": "<ID>_filter_in_food",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='inside' and {<ID>_filter_in}='inside_food'",
        "title": "התאמת פילטר - פנים אוכל",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"מסעדה", value:"inside_food_restaurant"},
        {text:"פיקניק", value:"inside_food_picnic"},
        {text:"דוכני אוכל", value:"inside_food_trucks"}
        ]
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter_in_party",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='inside' and {<ID>_filter_in}='inside_party'",
        "title": "התאמת פילטר - פנים מסיבה",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"מסיבת יום-הולדת", value:"inside_party_birthday"},
        {text:"מסיבת חוף", value:"inside_party_beach"},
        {text:"פסטיבל", value:"inside_party_beach_festival"},
        {text:"חתונה", value:"inside_party_wedding"},
        {text:"מסיבת בריכה", value:"inside_party_pool"}
        ]
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter_in_shopping",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='inside' and {<ID>_filter_in}='inside_shopping'",
        "title": "התאמת פילטר - פנים קניות",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"outlet", value:"inside_shopping_outlet"},
        {text:"שוק ירקות-פירות", value:"inside_shopping_fruit_market"},
        {text:"שוק יד2", value:"inside_shopping_market"},
        {text:"קניון", value:"inside_shopping_mall"}
        ]
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter_in_culture",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='inside' and {<ID>_filter_in}='inside_culture'",
        "title": "התאמת פילטר - פנים תרבות",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"הצגה", value:"inside_culture_performance"},
        {text:"מוזאון", value:"inside_culture_museum"},
        {text:"תערוכת אמנות", value:"inside_culture_art"},
        {text:"הופעה מוזיקלית", value:"inside_culture_show"},
        {text:"סרט", value:"inside_culture_movie"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_out",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='out'",
        "title": "התאמת פילטר - חוץ",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"out_sports"},
        //דוכןת מסעדה
        {text:"אוכל", value:"out_food"},
        //birthday, pool,
        {text:"מסיבה", value:"out_party"},
        {text:"קניות", value:"out_shopping"},
        {text:"תרבות", value:"out_culture"}
        ]
    },


    {
        "type": "dropdown",
        "name": "<ID>_filter_out_sport",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='out' and {<ID>_filter_out}='out_sport'",
        "title": "התאמת פילטר - חוץ ספורט",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"אצטדיון כדורגל", value:"out_sport_soccer"},
        {text:"מגרש כדורסל", value:"out_sport_basketball"},
        {text:"כדורשת חופים", value:"out_sport_beach_volleyball"},
        {text:"הוקי קרח", value:"out_sport_hockey"},
        {text:"זירת איגרוף", value:"out_sport_boxing"}
        ]
    },
   {
        "type": "dropdown",
        "name": "<ID>_filter_out_food",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='out' and {<ID>_filter_out}='out_food'",
        "title": "התאמת פילטר - חוץ אוכל",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"מסעדה", value:"out_food_restaurant"},
        {text:"פיקניק", value:"out_food_picnic"},
        {text:"דוכני אוכל", value:"out_food_trucks"}
        ]
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter_out_party",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='out' and {<ID>_filter_out}='out_party'",
        "title": "התאמת פילטר - חוץ מסיבה",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"מסיבת יום-הולדת", value:"out_party_birthday"},
        {text:"מסיבת חוף", value:"out_party_beach"},
        {text:"פסטיבל", value:"out_party_beach_festival"},
        {text:"חתונה", value:"out_party_wedding"},
        {text:"מסיבת בריכה", value:"out_party_pool"}
        ]
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter_out_shopping",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='out' and {<ID>_filter_out}='out_shopping'",
        "title": "התאמת פילטר - חוץ קניות",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"outlet", value:"out_shopping_outlet"},
        {text:"שוק ירקות-פירות", value:"out_shopping_fruit_market"},
        {text:"שוק יד2", value:"out_shopping_market"},
        {text:"קניון", value:"out_shopping_mall"}
        ]
    },
    {
        "type": "dropdown",
        "name": "<ID>_filter_out_culture",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_filter}='out' and {<ID>_filter_out}='out_culture'",
        "title": "התאמת פילטר - חוץ תרבות",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"הצגה", value:"out_culture_performance"},
        {text:"מוזאון", value:"out_culture_museum"},
        {text:"תערוכת אמנות", value:"out_culture_art"},
        {text:"הופעה מוזיקלית", value:"out_culture_show"},
        {text:"סרט", value:"out_culture_movie"}
        ]
    },

    {
        type: "html",
        name: "info",
        "visibleIf": "{<ID>_filter_in_sport} notempty or {<ID>_filter_in_party} notempty or {<ID>_filter_in_shopping} notempty or {<ID>_filter_in_food} notempty or {<ID>_filter_in_culture} notempty or {<ID>_filter_out_sport} notempty or {<ID>_filter_out_party} notempty or {<ID>_filter_out_shopping} notempty or {<ID>_filter_out_food} notempty or {<ID>_filter_out_culture} notempty",
        html: "<table> <body dir='rtl'> <row> <a href='http://localhost:8080/?run_prediction=2&id=shir2&questions=MODEL_RIGHT&v=<v>'><b><h1>GO!</h1></b></a></td></row></body></table>"
    },

]

var BASE_QUESTIONS_RIGHT = [

    {
        type:"radiogroup",
        name:"<ID>_corona_in_the_pic",
        startWithNewLine: true,
        isRequired:true,
        title:"אנא סמן/י 'כן' אם את/ה חושב/ת שיש קורונה בתמונה, ו'לא' אם את חושבת שאין",
        choices:[
        {text:"כן",value:"corona_in_the_frame"},
        {text:"לא", value:"no_corona"},
        {text:"לא בטוח/ה", value:"not_sure_corona"}
        ]
    },
    {
        type: "text",
        name: "<ID>_number_of_coronas",
        "visibleIf": "{<ID>_corona_in_the_pic}='corona_in_the_frame'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והצלחת לזהות קורונה בתמונה, אנא כתוב/כיתבי כמה בקבוקי קורנה מצאת",
        placeHolder:"אנא כתוב/כתבי כאן את מספר בקבוקי הקורנה בתמונה"
    },
    {
        type: "text",
        name: "<ID>_general_comment_not_sure",
        "visibleIf": "{<ID>_corona_in_the_pic}='not_sure_corona'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והחלטת שאינך בטוח/ה בנוגע להמצאות קורונה בתמונה, אנא כתוב/כיתבי מדוע.",
        placeHolder:"אנא כתוב/כתבי את תגובתך כאן"
    },
    {
        type: "html",
        name: "info",
    //        html: "<table><body><row><td><img src='/Content/Images/examples/26178-20160417.jpg' width='100px' /></td><td style='padding:20px'>You may put here any html code. For example images, <b>text</b> or <a href='https://surveyjs.io/create-survey'  target='_blank'>links</a></td></row></body></table>"
    //        html: "<table><body dir='rtl'><row><td></td><td style='padding:20px'><p>אם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך ברצונך לשנות אותו.. </p><b>text</b> or <a href='https://surveyjs.io/create-survey'  target='_blank'>links</a></td></row></body></table>"
        html: "<table> <body dir='rtl'> <br></br><row> האם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך" +
            " ברצונך לשנות אותו. <br><b>שים/י לב, המודל צודק <PP>% מהזמן.</b></br><p><a" +
            " href='http://localhost:8080/?run_prediction=1&id=shir2&questions=MODEL_RIGHT&v=<v>'>ברצוני לשנות את" +
            " הפילטר באמצעות המודל</a></td></p><p><a" +
            " href='http://localhost:8080/?run_prediction=1&id=shir2&questions=MANUALLY&v=<v>'>ברצוני לשנות את הפילטר" +
            " באופן ידני</a></td></p></row></body></table>"

    },

//        //Transferability
//        {
//        type:"radiogroup",
//        name:"<ID>_manualy_AI_nothing",
//        startWithNewLine: true,
//        isRequired:false,
//        title:"האם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך ברצונך לשנות אותו",
//        "description":"שים/י לב, המודל אומן בעיקר על מתחמי חוץ.",
//        choices:[
//        {text:"ברצוני לשנות את הפילטר באמצעות המודל",value:"AI"},
//        {text:"ברצוני לשנות את הפילטר באופן ידני", value:"Manually"}
//        ]
//    },


    {
        "type": "dropdown",
        "name": "<ID>_filter",
        isRequired:false,
        startWithNewLine: true,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually'",
        "title": "הוספת פילטר",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"פנים", value:"inside"},
        {text:"חוץ", value:"out"}
//        {text:"לא ידוע", value:"in_out_unknown"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_in",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='inside'",
        "title": "הוספת פילטר - פנים",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"inside_sport"},
        //דוכןת מסעדה
        {text:"אוכל", value:"inside_food"},
        //birthday, pool,
        {text:"מסיבה", value:"inside_party"},
        {text:"קניות", value:"inside_shopping"},
        {text:"תרבות", value:"inside_culture"},
        {text:"פארק שעשועים", value:"inside_park"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_in_sport",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='inside' and {<ID>_filter_in}='inside_sport'",
        "title": "הוספת פילטר - ספורט",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"אצטדיון כדורגל", value:"inside_sports"},
        //דוכןת מסעדה
        {text:"מגרש כדורסל", value:"inside_food"},
        //birthday, pool,
        {text:"כדורשת חופים", value:"inside_party"},
        {text:"הוקי קרח", value:"inside_shopping"},
        {text:"זירת איגרוף", value:"inside_culture"}
        ]
    },


    {
        "type": "dropdown",
        "name": "<ID>_filter_out",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='out'",
        "title": "הוספת פילטר - חוץ",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"out_sports"},
        //דוכןת מסעדה
        {text:"אוכל", value:"out_food"},
        //birthday, pool,
        {text:"מסיבה", value:"out_party"},
        {text:"קניות", value:"out_shopping"},
        {text:"תרבות", value:"out_culture"},
        {text:"פארק שעשועים", value:"out_park"}
        ]
    }

]

var BASE_QUESTIONS_WRONG = [

    {
        type:"radiogroup",
        name:"<ID>_corona_in_the_pic",
        startWithNewLine: true,
        isRequired:true,
        title:"אנא סמן/י 'כן' אם את/ה חושב/ת שיש קורונה בתמונה, ו'לא' אם את חושבת שאין",
        choices:[
        {text:"כן",value:"corona_in_the_frame"},
        {text:"לא", value:"no_corona"},
        {text:"לא בטוח/ה", value:"not_sure_corona"}
        ]
    },
    {
        type: "text",
        name: "<ID>_number_of_coronas",
        "visibleIf": "{<ID>_corona_in_the_pic}='corona_in_the_frame'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והצלחת לזהות קורונה בתמונה, אנא כתוב/כיתבי כמה בקבוקי קורנה מצאת",
        placeHolder:"אנא כתוב/כתבי כאן את מספר בקבוקי הקורנה בתמונה"
    },
    {
        type: "text",
        name: "<ID>_general_comment_not_sure",
        "visibleIf": "{<ID>_corona_in_the_pic}='not_sure_corona'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והחלטת שאינך בטוח/ה בנוגע להמצאות קורונה בתמונה, אנא כתוב/כיתבי מדוע.",
        placeHolder:"אנא כתוב/כתבי את תגובתך כאן"
    },
    {
        type: "html",
        name: "info",
    //        html: "<table><body><row><td><img src='/Content/Images/examples/26178-20160417.jpg' width='100px' /></td><td style='padding:20px'>You may put here any html code. For example images, <b>text</b> or <a href='https://surveyjs.io/create-survey'  target='_blank'>links</a></td></row></body></table>"
    //        html: "<table><body dir='rtl'><row><td></td><td style='padding:20px'><p>אם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך ברצונך לשנות אותו.. </p><b>text</b> or <a href='https://surveyjs.io/create-survey'  target='_blank'>links</a></td></row></body></table>"
        html: "<table> <body dir='rtl'> <br></br><row> האם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך" +
            " ברצונך לשנות אותו. <br><b>שים/י לב, המודל צודק <PP>% מהזמן.</b></br><p><a" +
            " href='http://localhost:8080/?run_prediction=0&id=shir2&questions=MODEL_RIGHT&v=<v>'>ברצוני לשנות את" +
            " הפילטר באמצעות המודל</a></td></p><p><a" +
            " href='http://localhost:8080/?run_prediction=1&id=shir2&questions=MANUALLY&v=<v>'>ברצוני לשנות את הפילטר" +
            " באופן ידני</a></td></p></row></body></table>"

    },

//        //Transferability
//        {
//        type:"radiogroup",
//        name:"<ID>_manualy_AI_nothing",
//        startWithNewLine: true,
//        isRequired:false,
//        title:"האם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך ברצונך לשנות אותו",
//        "description":"שים/י לב, המודל אומן בעיקר על מתחמי חוץ.",
//        choices:[
//        {text:"ברצוני לשנות את הפילטר באמצעות המודל",value:"AI"},
//        {text:"ברצוני לשנות את הפילטר באופן ידני", value:"Manually"}
//        ]
//    },


    {
        "type": "dropdown",
        "name": "<ID>_filter",
        isRequired:false,
        startWithNewLine: true,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually'",
        "title": "הוספת פילטר",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"פנים", value:"inside"},
        {text:"חוץ", value:"out"}
//        {text:"לא ידוע", value:"in_out_unknown"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_in",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='inside'",
        "title": "הוספת פילטר - פנים",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"inside_sport"},
        //דוכןת מסעדה
        {text:"אוכל", value:"inside_food"},
        //birthday, pool,
        {text:"מסיבה", value:"inside_party"},
        {text:"קניות", value:"inside_shopping"},
        {text:"תרבות", value:"inside_culture"},
        {text:"פארק שעשועים", value:"inside_park"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_in_sport",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='inside' and {<ID>_filter_in}='inside_sport'",
        "title": "הוספת פילטר - ספורט",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"אצטדיון כדורגל", value:"inside_sports"},
        //דוכןת מסעדה
        {text:"מגרש כדורסל", value:"inside_food"},
        //birthday, pool,
        {text:"כדורשת חופים", value:"inside_party"},
        {text:"הוקי קרח", value:"inside_shopping"},
        {text:"זירת איגרוף", value:"inside_culture"}
        ]
    },


    {
        "type": "dropdown",
        "name": "<ID>_filter_out",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='out'",
        "title": "הוספת פילטר - חוץ",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"out_sports"},
        //דוכןת מסעדה
        {text:"אוכל", value:"out_food"},
        //birthday, pool,
        {text:"מסיבה", value:"out_party"},
        {text:"קניות", value:"out_shopping"},
        {text:"תרבות", value:"out_culture"},
        {text:"פארק שעשועים", value:"out_park"}
        ]
    }
]


var BASE_QUESTIONS_Transferability = [

    {
        type:"radiogroup",
        name:"<ID>_corona_in_the_pic",
        startWithNewLine: true,
        isRequired:true,
        title:"אנא סמן/י 'כן' אם את/ה חושב/ת שיש קורונה בתמונה, ו'לא' אם את חושבת שאין",
        choices:[
        {text:"כן",value:"corona_in_the_frame"},
        {text:"לא", value:"no_corona"},
        {text:"לא בטוח/ה", value:"not_sure_corona"}
        ]
    },


    //trust
//        {
//        type:"radiogroup",
//        name:"<ID>_manualy_AI_nothing",
//        startWithNewLine: true,
//        isRequired:false,
//        title:"האם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך ברצונך לשנות אותו",
//        "description":"שים/י לב, המודל ישנה את הפילטר רק אם רמת הוודאות שלו גבוהה מ90%, אחרת תפתח האפשרות לשינוי הפילטר באופן ידני.",
//        choices:[
//        {text:"ברצוני לשנות את הפילטר באמצעות המודל",value:"AI"},
//        {text:"ברצוני לשנות את הפילטר באופן ידני", value:"Manually"}
//        ]
//    },

        //Transferability
        {
        type:"radiogroup",
        name:"<ID>_manualy_AI_nothing",
        startWithNewLine: true,
        isRequired:false,
        title:"האם תרצה/תרצי לשנות את הפילטר? במידה וכן בחר/י באיזו דרך ברצונך לשנות אותו",
        "description":"שים/י לב, המודל אומן בעיקר על מתחמי חוץ.",
        choices:[
        {text:"ברצוני לשנות את הפילטר באמצעות המודל",value:"AI"},
        {text:"ברצוני לשנות את הפילטר באופן ידני", value:"Manually"}
        ]
    },


    {
        "type": "dropdown",
        "name": "<ID>_filter",
        isRequired:false,
        startWithNewLine: true,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually'",
        "title": "הוספת פילטר",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"פנים", value:"inside"},
        {text:"חוץ", value:"out"}
//        {text:"לא ידוע", value:"in_out_unknown"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_in",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='inside'",
        "title": "הוספת פילטר - פנים",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"inside_sport"},
        //דוכןת מסעדה
        {text:"אוכל", value:"inside_food"},
        //birthday, pool,
        {text:"מסיבה", value:"inside_party"},
        {text:"קניות", value:"inside_shopping"},
        {text:"תרבות", value:"inside_culture"},
        {text:"פארק שעשועים", value:"inside_park"}
        ]
    },

    {
        "type": "dropdown",
        "name": "<ID>_filter_in_sport",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='inside' and {<ID>_filter_in}='inside_sport'",
        "title": "הוספת פילטר - ספורט",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        {text:"אצטדיון כדורגל", value:"inside_sports"},
        //דוכןת מסעדה
        {text:"מגרש כדורסל", value:"inside_food"},
        //birthday, pool,
        {text:"כדורשת חופים", value:"inside_party"},
        {text:"הוקי קרח", value:"inside_shopping"},
        {text:"זירת איגרוף", value:"inside_culture"}
        ]
    },


    {
        "type": "dropdown",
        "name": "<ID>_filter_out",
        isRequired:false,
        startWithNewLine: false,
        "visibleIf": "{<ID>_manualy_AI_nothing}='Manually' and {<ID>_filter}='out'",
        "title": "הוספת פילטר - חוץ",
        "description":"על מנת להתאים את הפילטר אנא ציין/י את מיקום התמונה",
        "choices":[
        //אצטדיון כדורגל, מגרש כדורסל
        {text:"ספורט", value:"out_sports"},
        //דוכןת מסעדה
        {text:"אוכל", value:"out_food"},
        //birthday, pool,
        {text:"מסיבה", value:"out_party"},
        {text:"קניות", value:"out_shopping"},
        {text:"תרבות", value:"out_culture"},
        {text:"פארק שעשועים", value:"out_park"}
        ]
    },
    {
        type: "text",
        name: "<ID>_general_comment_corona_place",
        "visibleIf": "{<ID>_corona_in_the_pic}='corona_in_the_frame'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והצלחת לזהות קורונה בתמונה, אנא כתוב/כיתבי תאור קצר של מיקום הקורונה בתמונה.",
        placeHolder:"אנא כתוב/כתבי את תגובתך כאן"
    },
    {
        type: "text",
        name: "<ID>_general_comment_not_sure",
        "visibleIf": "{<ID>_corona_in_the_pic}='not_sure_corona'",
        isRequired:true,
        startWithNewLine: true,
        title: "במידה והחלטת שאינך בטוח/ה בנוגע להמצאות קורונה בתמונה, אנא כתוב/כיתבי מדוע.",
        placeHolder:"אנא כתוב/כתבי את תגובתך כאן"
    }
]

