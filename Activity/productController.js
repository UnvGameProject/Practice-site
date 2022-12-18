generateItemListings();

function generateItemListings() {

    for (let i = 0; i < Categories.length; i++) {
        
        switch (Categories[i]) {
            case 'cakes':
                for (let j = 1; j < cakes.length; j++) {
                    divAttributes(Categories[i], j, cakes[0], cakes_fileName[j]);
                    // console.log(cakes[j]);
                }
            break;

            case 'cookies':
                for (let j = 1; j < cookies.length; j++) {
                    divAttributes(Categories[i], j, cookies[0], cookies_fileName[j]);
                    // console.log(cookies[j]);
                }
            break;

            case 'pastries':
                for (let j = 1; j < pastries.length; j++) {
                    divAttributes(Categories[i], j, pastries[0], pastries_fileName[j]);
                    // console.log(pastries[j]);
                }
            break;

            case 'scrum':
                for (let j = 1; j < scrum.length; j++) {
                    divAttributes(Categories[i], j, scrum[0], scrum_fileName[j]);
                    // console.log(scrum[j]);
                }
            break;

            case 'tarts':
                for (let j = 1; j < tarts.length; j++) {
                    divAttributes(Categories[i], j, tarts[0], tarts_fileName[j]);
                    // console.log(tarts[j]);
                }
            break;

            case 'intern':
                for (let j = 1; j < intern.length; j++) {
                    divAttributes(Categories[i], j, intern[0], intern_fileName[j]);
                    // console.log(intern[j]);
                }
            break;

            case 'news':
                for (let j = 1; j < news.length; j++) {
                    divAttributes(Categories[i], j, news[0], news_fileName[j]);
                    // console.log(news[j]);
                }
            break;
            default: 
            console.log("something went wrong...");
            break;
        }
        
    }
    
}


function divAttributes(Category, Index, classId, filename) {
    
    let main_element = document.getElementById(`${classId}`);
    let button_wrapper = document.createElement("BUTTON");
    button_wrapper.setAttribute("type", "submit");
    button_wrapper.setAttribute("params", "test");
    let params = new URLSearchParams();
    params.set('category', Category);
    params.set('index', Index);
    button_wrapper.setAttribute("onClick", "location.href='products.html'");
    let new_element = document.createElement("IMG");
    new_element.setAttribute("CLASS", "item");

    console.dir(document.getElementById(classId));
    console.log(new_element.className);
    if (filename == undefined) {
        return;
    } else {
        new_element.setAttribute('SRC', '../res/products/'+Category+'/'+ filename);
        new_element.setAttribute('width', 'inherit');
        new_element.setAttribute('min-width', 'inherit');
        new_element.setAttribute('height', 'inherit');
        button_wrapper.appendChild(new_element);
        main_element.appendChild(button_wrapper);
        console.log(new_element.className);
    }
    
}


