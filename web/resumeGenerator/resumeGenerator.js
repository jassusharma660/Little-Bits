function addEducation() {
  var input = document.getElementById("form_education");
  var output = document.getElementById("education_preview");
  var output_li = document.getElementsByClassName("education_preview_li");

  if(input.value.length>0) {

    var li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("education_preview_li");

    var btn = document.createElement("button");
    btn.setAttribute("onclick","deleteEducation("+output_li.length+")");
    li.append(btn);
    output.appendChild(li);
    input.value="";
  }
}

function deleteEducation(index) {
  var output = document.getElementById("education_preview");
  output.removeChild(output.childNodes[index]);
}

function createResume() {
  document.getElementById("username").innerHTML = document.getElementById("form_name").value;
  document.getElementById("title").innerHTML = document.getElementById("form_title").value;
  document.getElementById("phone").innerHTML = document.getElementById("form_phone").value;
  document.getElementById("email").innerHTML = document.getElementById("form_email").value;
  document.getElementById("profile_content").innerHTML = document.getElementById("form_profile").value;
  document.getElementById("experience_content").innerHTML = document.getElementById("form_experience").value;

  var edu = document.getElementById("education_preview");
  var ul_edu = document.createElement("ul");

  for(var i=0; i<edu.childElementCount; i++) {
    var li_edu = document.createElement("li");
    li_edu.innerHTML = edu.childNodes[i].innerText;
    ul_edu.append(li_edu);
  }
  document.getElementById("education_content").append(ul_edu);

  var skills = document.getElementById("form_skills").value.split(",");
  var ul_skills = document.createElement("ul");

  for(var i=0; i<skills.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = skills[i];
    ul_skills.append(li);
  }
  document.getElementById("skills_content").append(ul_skills);
  document.getElementById("resume_form").style.display = "none";
  document.getElementById("resume").style.display = "block";
}
