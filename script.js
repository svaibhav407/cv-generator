

const showT = () => {
    document.getElementById("divMain1").style.display = "none";
    document.getElementById("divMain2").style.display = "block";
    document.documentElement.scrollTop = 0;
}

const goback = () => {
    document.getElementById("divMain2").style.display = "none";
    document.getElementById("divMain1").style.display = "block";
}

const addSkills = () => {

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "form-control mb-2 classOfSkills");
    inputElement.setAttribute("placeholder", "Enter your skill");

    let mainEle = document.getElementById("divOfSkills");
    let buttonEle = document.getElementById("divOfAddingSkills");
    mainEle.insertBefore(inputElement, buttonEle);
}

const addLang = () => {

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "form-control mb-2 classOfLang");
    inputElement.setAttribute("placeholder", "Enter language");

    let mainEle = document.getElementById("divOfLanguages");
    let buttonEle = document.getElementById("divOfAddingLang");
    mainEle.insertBefore(inputElement, buttonEle);
}
const addEdu = () => {
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "mb-4 divofedu");

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "form-control mb-1");
    inputElement.setAttribute("id", "qual");
    inputElement.setAttribute("placeholder", "Enter Educational Qualification");

    let inputCollege = document.createElement("input");
    inputCollege.setAttribute("type", "text");
    inputCollege.setAttribute("class", "form-control mb-1");
    inputElement.setAttribute("id", "sch");
    inputCollege.setAttribute("placeholder", "Enter School/University");

    let inputCompletionYear = document.createElement("input");
    inputCompletionYear.setAttribute("type", "text");
    inputCompletionYear.setAttribute("class", "form-control mb-1 w-50");
    inputElement.setAttribute("id", "com");
    inputCompletionYear.setAttribute("placeholder", "Enter Year of Completion");

    divElement.appendChild(inputElement);
    divElement.appendChild(inputCollege);
    divElement.appendChild(inputCompletionYear);

    let mainEle = document.getElementById("divOfEducation");
    let buttonEle = document.getElementById("addEducation");
    mainEle.insertBefore(divElement, buttonEle);

}
const addWE = () => {

    let divElement = document.createElement("div");
    divElement.setAttribute("class", "mb-4 divofexp");



    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "form-control mb-1");
    inputElement.setAttribute("placeholder", "Enter your position");

    let textAreaElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    textAreaElement.setAttribute("class", " form-control mb-1");

    textAreaElement.setAttribute("placeholder", "Enter Organisation Name");

    let inputStart = document.createElement("input");
    inputStart.setAttribute("type", "text");
    inputStart.setAttribute("class", "form-control mb-1 w-25");
    inputStart.setAttribute("placeholder", "Enter Start date");

    let inputEnd = document.createElement("input");
    inputEnd.setAttribute("type", "text");
    inputEnd.setAttribute("class", "form-control mb-1 w-25");
    inputEnd.setAttribute("placeholder", "Enter End date");

    divElement.appendChild(inputElement);
    divElement.appendChild(textAreaElement);
    divElement.appendChild(inputStart);
    divElement.appendChild(inputEnd);



    let mainEle = document.getElementById("WEmain");
    let buttonEle = document.getElementById("WEadd");
    mainEle.insertBefore(divElement, buttonEle);
}

const addProjects = () => {

    let divElement = document.createElement("div");
    divElement.setAttribute("class", "mb-4 divofpro");

    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "form-control mb-1");
    inputElement.setAttribute("placeholder", "Enter project name");

    let textAreaElement = document.createElement("textarea");
    textAreaElement.setAttribute("class", "md-textarea form-control mb-1");
    textAreaElement.setAttribute("rows", 2);
    textAreaElement.setAttribute("placeholder", "Enter description about the project");

    let inputUrlElement = document.createElement("input");
    inputUrlElement.setAttribute("type", "url");
    inputUrlElement.setAttribute("class", "form-control mb-1");
    inputUrlElement.setAttribute("placeholder", "Enter project link");

    divElement.appendChild(inputElement);
    divElement.appendChild(textAreaElement);
    divElement.appendChild(inputUrlElement);


    let mainEle = document.getElementById("projectMain");
    let buttonEle = document.getElementById("projectAdd");
    mainEle.insertBefore(divElement, buttonEle);

}

const generate = () => {

    document.documentElement.scrollTop = 0;

    let name = document.getElementById("nameInput").value;
    let nameField = document.getElementById("name");
    nameField.innerHTML = name;

    let phone = document.getElementById("phoneInput").value;
    let phoneField = document.getElementById("phone");
    phoneField.innerHTML = phone;

    let email = document.getElementById("emailInput").value;
    let emailField = document.getElementById("email");
    emailField.innerHTML = email;

    let objective = document.getElementById("aboutInput").value;
    let objectField = document.getElementById("objective");
    objectField.innerHTML = objective;

    let linkedin = document.getElementById("linkedinInput").value;
    let linkedinField = document.getElementById("linkedIn");
    linkedinField.innerHTML = linkedin;
    linkedinField.setAttribute("href", linkedin);

    let github = document.getElementById("githubInput").value;
    let githubField = document.getElementById("Github");
    githubField.innerHTML = github;
    githubField.setAttribute("href", github);

    let geeks = document.getElementById("geekInput").value;
    let geekField = document.getElementById("geeks");
    geekField.innerHTML = geeks;
    geekField.setAttribute("href", geeks);

    document.getElementById("divMain1").style.display = "none";
    document.getElementById("divMain2").style.display = "block";

    let skill = document.getElementsByClassName("classOfSkills");
    for (e of skill) {

        let skilll = e.value;
        let ultemskill = document.getElementById("ulofskill");
        let litem = document.createElement("li");
        litem.innerHTML = skilll;
        ultemskill.appendChild(litem);

    }

    let lan = document.getElementsByClassName("classOfLang");
    for (e of lan) {

        let lang = e.value;
        let spanlang = document.getElementById("temlang");
        let s = document.createElement("span");
        s.innerHTML = lang + "&nbsp&nbsp";
        spanlang.appendChild(s);


    }

    let education = document.getElementsByClassName("divofedu");
    for (e of education) {
        console.log(e);

        let first = e.firstElementChild;
        let second = first.nextElementSibling;
        let third = second.nextElementSibling;


        let li = document.createElement("li");
        let div = document.createElement("div");
        div.setAttribute("class", "card-body form-control pt-1 pb-2");
        let s1 = document.createElement("span");
        s1.setAttribute("class", "fw-bold");
        s1.innerHTML = first.value;
        let s2 = document.createElement("span");
        s2.innerHTML = " from ";
        let s3 = document.createElement("span");
        s3.innerHTML = second.value;
        let small = document.createElement("small");
        let s4 = document.createElement("span");
        s4.setAttribute("class", "fw-bold");
        s4.innerHTML = "Completion Year : ";
        let s5 = document.createElement("span");
        s5.innerHTML = third.value;
        let br = document.createElement("br");
        li.appendChild(div);
        div.appendChild(s1);
        div.appendChild(s2);
        div.appendChild(s3);
        div.appendChild(br);
        div.appendChild(small);
        small.appendChild(s4);
        small.appendChild(s5);

        document.getElementById("ulofedu").appendChild(li);
    }

    let exp = document.getElementsByClassName("divofexp");
    for (e of exp) {
        console.log(e);
        let first = e.firstElementChild;
        let second = first.nextElementSibling;
        let third = second.nextElementSibling;
        let fourth = third.nextElementSibling;


        // let ul=document.getElementById("ulofwork");
        let li = document.createElement("li");
        let div = document.createElement("div");
        div.setAttribute("class", "card-body form-control pt-1 pb-2");
        let s1 = document.createElement("span");
        s1.setAttribute("class", "fw-bold");
        s1.innerHTML = first.value;
        let s2 = document.createElement("span");
        s2.innerHTML = " at ";
        let s3 = document.createElement("span");
        s3.innerHTML = second.value;
        let br = document.createElement("br");
        let small = document.createElement("small");
        let s4 = document.createElement("span");
        s4.innerHTML = third.value;
        let s5 = document.createElement("span");
        s5.innerHTML = " - ";
        let s6 = document.createElement("span");
        s6.innerHTML = fourth.value;


        li.appendChild(div);
        div.appendChild(s1);
        div.appendChild(s2);
        div.appendChild(s3);
        div.appendChild(br);
        div.appendChild(small);
        small.appendChild(s4);
        small.appendChild(s5);
        small.appendChild(s6);
        document.getElementById("ulofwork").appendChild(li);
    }


    let pro = document.getElementsByClassName("divofpro");
    for (e of pro) {
        console.log(e);
        let first = e.firstElementChild;
        let second = first.nextElementSibling;
        let third = second.nextElementSibling;

        let li = document.createElement("li");
        let div = document.createElement("div");
        div.setAttribute("class", "card-body form-control pt-1 pb-2");
        let s1 = document.createElement("span");
        s1.setAttribute("class", "fw-bold");
        s1.innerHTML = first.value;
        let s2 = document.createElement("span");
        s2.innerHTML = " : ";
        let s3 = document.createElement("span");
        s3.innerHTML = second.value;
        let br = document.createElement("br");
        let small = document.createElement("small");
        let s4 = document.createElement("span");
        s4.setAttribute("class", "fw-bold");
        s4.innerHTML = " Project Link : ";
        let an = document.createElement("a");
        an.setAttribute("href", third.value);
        an.innerHTML = third.value;

        document.getElementById("ulofpro").appendChild(li);
        li.appendChild(div);
        div.appendChild(s1);
        div.appendChild(s2);
        div.appendChild(s3);
        div.appendChild(br);
        div.appendChild(small);
        div.appendChild(an);
        small.appendChild(s4);


    }
}

function validate() {

    if (document.myForm.nameInput.value == "") {
        alert("Please provide your name!");
        document.myForm.nameInput.focus();
        return false;
    }

    const phoneno = /^\d{10}$/;
    if (!document.myForm.phoneInput.value.match(phoneno)) {
        alert("Please provide a valid phone number!");
        document.myForm.phoneInput.focus();
        return false;
    }

    const emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!document.myForm.emailInput.value.match(emailFilter)) {
        alert("Please provide a valid E-mail ID!");
        document.myForm.emailInput.focus();
        return false;
    }

    if (document.myForm.aboutInput.value == "") {
        alert("Please mention your Career Objective!");
        document.myForm.aboutInput.focus();
        return false;
    }

    const linkedSt=document.myForm.linkedinInput.value;
    if(!validURL(linkedSt))
    {
        alert("Please enter a valid LINKEDIN URL!");
        document.myForm.linkedinInput.focus();
        return false;
    }

    const githubSt = document.myForm.githubInput.value;
    if(!validURL(githubSt))
    {
        alert("Please enter a valid GITHUB URL!");
        document.myForm.githubInput.focus();
        return false;
    }

    const geekSt = document.myForm.geekInput.value;
    if(!validURL(geekSt))
    {
        alert("Please enter a valid Geeksforgeeks URL!");
        document.myForm.geekInput.focus();
        return false;
    }

    generate();
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }

  function printout(){
      window.print();
  }