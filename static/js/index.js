

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#AACCFF";
defaultThemeColors["$main-hover-color"] = "#AACCFF";
defaultThemeColors["$text-color"] = "#AACCFF";
defaultThemeColors["$header-color"] = "#AACCFF";

defaultThemeColors["$header-background-color"] = "#222233";
defaultThemeColors["$body-container-background-color"] = "#222233";
defaultThemeColors["$body-background-color"] = "#222233";
defaultThemeColors["$inputs-background-color"] = "#49496e";
defaultThemeColors["$border-color"] = "#222233";
//defaultThemeColors["$slider-color"] = "#313836";



Survey
    .StylesManager
    .applyTheme();


//Survey
//    .StylesManager
//    .applyTheme("orange");




async function getAvailbleImages(){
    const queryString = window.location.search;

    const result = await fetch("./predictions",{headers:{'Content-Type':'application/json'},method:"POST", body:JSON.stringify(queryString)});
//    const result = await fetch(`/tasks?${queryString}`)

    let items = await result.json();
    return items;
}


function renderImageHeader(id, image_url){
        let htmlString = "<img src='" + image_url + "' width='700px' height='450px' /><h5 class='s_image'>Image ID: " +id+ "</h5></div>";
        let image_question = {
            type: "html",
            name: id + "_image",
            html: htmlString}

    return image_question;
}

function renderGalleryHeader(id, images){

        let htmlString = `
        <div class="galleria">
        </div>
        <script>
            (function() {
                Galleria.loadTheme('./static/js/galleria/themes/azur/galleria.azur.js');
                Galleria.run('.galleria', {height:600, width:800, pauseOnInteraction:true, transition:'' ,autoplay:0, dataSource:${JSON.stringify(images)}});

            }());
        </script>
        `;

//        let html = '<div>test</div>'
        let gallery_question = {
            type: "html",
            name: id + "_image",
            html: htmlString}

        return gallery_question
}


//function renderPopUp(){
//    {% with messages = get_flashed_messages() %}
//        {% if messages %}
//            {% for message in messages %}
//                <h3>{{ message }}</h3>>
//            {% endfor %}
//        {% endif %}
//    {% endwith %}
//}


async function createSinglePage(options){
    let res = await fetch(`./folder/${options.image_url}`);
    let gallery = await res.json();
	// let page = {questions:[renderImageHeader("Stadium_right", 'Stadium_right//3.jpg'), renderGalleryHeader(options.id, gallery.images)]}
    let page = {questions:[renderGalleryHeader(options.id, gallery.images)]}

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const questions_val = urlParams.get('questions');
    const version = urlParams.get('v');

    var presented_prob = 0.9;
    var acctual_prob = 0.9;

    if(version == '4'){
        presented_prob = 0.9;
        acctual_prob = 0.9;
    }
    else if(version == '5'){
        presented_prob = 0.9;
        acctual_prob = 0.5;
    }
    else if(version == '6'){
        presented_prob = 0.5;
        acctual_prob = 0.5;
    }
    else if(version == '7'){
        presented_prob = 0.5;
        acctual_prob = 0.9;
    }

    //manually only - no model is suggested
    if(version == '1')
    {
            page.questions = page.questions.concat(BASE_QUESTIONS_MANUALLY_ONLY.map(q=>{

            var question_with_id = JSON.parse(JSON.stringify(q))
            if(question_with_id.visibleIf){
                question_with_id.visibleIf = question_with_id.visibleIf.replace(/<ID>/g, options.id);
            }
            if(question_with_id.html){
                question_with_id.html = question_with_id.html.replace(/<PP>/g, presented_prob*100);
            }
            question_with_id.name = question_with_id.name.replace("<ID>", options.id)

            return question_with_id
            }))
    }

    //change use cases according to the location of the scan, prediction, the AI option
    var rand = math.random()

    //the model will be right in this case
    if(rand <= acctual_prob && questions_val == '0'){
    //        alert("I am an alert box!");

            page.questions = page.questions.concat(BASE_QUESTIONS_RIGHT.map(q=>{

            var question_with_id = JSON.parse(JSON.stringify(q))
            if(question_with_id.visibleIf){
                question_with_id.visibleIf = question_with_id.visibleIf.replace(/<ID>/g, options.id);
            }
            if(question_with_id.html){
                question_with_id.html = question_with_id.html.replace(/<PP>/g, presented_prob*100);
                question_with_id.html = question_with_id.html.replace(/<v>/g, version);
            }

            question_with_id.name = question_with_id.name.replace("<ID>", options.id)


            return question_with_id
            }))
    }
    else if (questions_val == '0'){
        //        alert("I am an alert box!");

        page.questions = page.questions.concat(BASE_QUESTIONS_WRONG.map(q=>{

        var question_with_id = JSON.parse(JSON.stringify(q))
        if(question_with_id.visibleIf){
            question_with_id.visibleIf = question_with_id.visibleIf.replace(/<ID>/g, options.id);
        }
        if(question_with_id.html){
            question_with_id.html = question_with_id.html.replace(/<PP>/g, presented_prob*100);
            question_with_id.html = question_with_id.html.replace(/<v>/g, version);
        }
        question_with_id.name = question_with_id.name.replace("<ID>", options.id)


        return question_with_id
        }))
    }

    //the user chose to use AI & she was redirected to the *right* filter
    else if(questions_val == 'MODEL_RIGHT'){
        alert("The filter is *RIGHT*!");

        page.questions = page.questions.concat(BASE_QUESTIONS_RIGHT.map(q=>{

        var question_with_id = JSON.parse(JSON.stringify(q))
        if(question_with_id.visibleIf){
            question_with_id.visibleIf = question_with_id.visibleIf.replace(/<ID>/g, options.id);
        }
        if(question_with_id.html){
            question_with_id.html = question_with_id.html.replace(/<PP>/g, presented_prob*100);
            question_with_id.html = question_with_id.html.replace(/<v>/g, version);

        }
        question_with_id.name = question_with_id.name.replace("<ID>", options.id)



        return question_with_id
        }))
    }
    //the user chose to use AI & she is redirected to the *wrong* filter
    else if(questions_val == 'MODEL_WRONG'){
        alert("The filter is *WRONG*!");

        page.questions = page.questions.concat(BASE_QUESTIONS_WRONG.map(q=>{

        var question_with_id = JSON.parse(JSON.stringify(q))
        if(question_with_id.visibleIf){
            question_with_id.visibleIf = question_with_id.visibleIf.replace(/<ID>/g, options.id);
        }
        if(question_with_id.html){
            question_with_id.html = question_with_id.html.replace(/<PP>/g, presented_prob*100);
            question_with_id.html = question_with_id.html.replace(/<v>/g, version);
        }
        question_with_id.name = question_with_id.name.replace("<ID>", options.id)


        return question_with_id
        }))
    }
    else if(questions_val == 'MANUALLY'){
        page.questions = page.questions.concat(BASE_QUESTIONS_MANUALLY.map(q=>{

        var question_with_id = JSON.parse(JSON.stringify(q))
        if(question_with_id.visibleIf){
            question_with_id.visibleIf = question_with_id.visibleIf.replace(/<ID>/g, options.id);
        }
        if(question_with_id.html){
            question_with_id.html = question_with_id.html.replace(/<PP>/g, presented_prob*100);
            question_with_id.html = question_with_id.html.replace(/<v>/g, version);
        }
        question_with_id.name = question_with_id.name.replace("<ID>", options.id)

        return question_with_id
        }))
    }

;
	page.name = "page_" + options.id

	return page;
}

function renderCompletePage(whereToSend){
let completedHtml =  "<p><h2>תודה על הזמן שהקדשת עבור הניסוי!</h2></p><p><h4>אנא שתף/י אותנו במידה ויש לך איזשהן" +
    " הערות" +
    " </h4></p><p>" +

`<a href=${'mailto:' + whereToSend }>${whereToSend}</p>`
return completedHtml;
}


async function handleCompletedResults(result){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const image = urlParams.get('run_prediction') + 1;
    const user = urlParams.get('id');
    const v = urlParams.get('v');

    var url = "http://localhost:8080/?run_prediction=" + image +"&id=" + user + "&questions=0&v=" + v
    location.replace(url)
}

// async function handleCompletedResults(result){
//             document
//             .querySelector('#surveyResult')
// //            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
//
//             response =  await fetch("./complete", {headers:{'Content-Type':'application/json'}, method:"POST", body:JSON.stringify(survey.data)});
//
//
//             let plainRes = result.getPlainData();
// //            let plainRes = survey.data;
//
//             plainRes.forEach(res=>{
//             if(Array.isArray(res.value)){
//                 res.value = JSON.stringify(res.value).replace(/,/g, "@")
//                 }
//             });
//
//             let groupedResults = _.groupBy(plainRes, (r=>{
//                 return r.name.slice(0, r.name.indexOf("_"))
//             }))
//
//             console.log(groupedResults)
//             exportSurvey(groupedResults)
// }

getAvailbleImages().then(async images=>{
    let results = await Promise.all(images.map(createSinglePage))
    //let pages = [WELCOME_PAGE].concat(results);
    let pages = results;

    let completedHtml = renderCompletePage('lissakshir@campus.technion.ac.il')

//window.survey = new Survey.Model({pages, completedHtml, showProgressBar:'bottom', showQuestionNumbers:'onPage'});
window.survey = new Survey.Model({pages, completedHtml,showQuestionNumbers:'onPage'});

// survey.onComplete.add(handleCompletedResults)
survey.onCurrentPageChanged.add(destroyPreviousGallery);

var storageName = "CORONA_STATE";
var timerId = 0;

function loadState(survey) {
    //Here should be the code to load the data from your database
    var storageSt = window
        .localStorage
        .getItem(storageName) || "";

    var res = {};
    if (storageSt)
        res = JSON.parse(storageSt); //Create the survey state for the demo. This line should be deleted in the real app.

    //Set the loaded data into the survey.
    if (res.currentPageNo)
        survey.currentPageNo = res.currentPageNo;
    if (res.data)
        survey.data = res.data;
    }


function destroyPreviousGallery(){
    if(Galleria){
        var gl = Galleria.get(0);
        if(gl){
        gl.destroy();
        }
    }
}
function saveState(survey) {
    var res = {
        currentPageNo: survey.currentPageNo,
        data: survey.data
    };
    window
        .localStorage
        .setItem(storageName, JSON.stringify(res));
}

 async function sendSingleAnswer(page){

    const queryString = window.location.search;
    // const chosen_image = document.querySelector("#sq_101 > div > div:nth-child(2) > div > div > div.galleria-bar > div.galleria-thumbnails-container > div.galleria-thumbnails-list > div > div.galleria-image.active > img").getAttribute('src')
    // const new_obj = {chosen_image:chosen_image};
    // const ans = Object.assign(survey.data,new_obj);

    response =  await fetch("./feedback", {headers:{'Content-Type':'application/json'}, method:"POST", body:JSON.stringify(survey.data)});
//    response =  await fetch("./feedback", {headers:{'Content-Type':'application/json'}, method:"POST", body:JSON.stringify(page)});

//    console.log(response)
}

survey
    .onValueChanged
    .add(function (survey, options) {
        saveState(survey);
        sendSingleAnswer(options.oldCurrentPage)
    });

survey
    .onCurrentPageChanged
    .add(function (survey, options) {
        saveState(survey);
        sendSingleAnswer(options.oldCurrentPage)
    });

//survey.onCurrentPageChanged(fetch(localhost:/result,image_id))

survey
    .onComplete
    .add(function (survey, options) {
        //kill the timer
        clearInterval(timerId);
        //save the data on survey complete. You may call another function to store the final results
        localStorage.clear()

    });

//Load the initial state
loadState(survey);

//save the data every 10 seconds, it night be a good idea to change it to 30-60 seconds or more.
timerId = window.setInterval(function () {
    saveState(survey);
}, 60000);

$("#surveyElement").Survey({model: survey});
})

