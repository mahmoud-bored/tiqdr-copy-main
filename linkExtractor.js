var allCardsTitles = document.querySelectorAll('div.d-flex.align-items-center.page-num-container.hide-on-mobile > h4.font-1rem')
var cardsTitlesArr = []
allCardsTitles.forEach(elmnt =>{
  cardsTitlesArr.push(elmnt.textContent.replace(/  /g,'').replace('\n', "").replace('\n', ""))
})


var allVideoLinkCards = document.querySelectorAll("li.accordion__menu-link > button")
var allVideoTitlesArr = []

allVideoLinkCards.forEach(elmnt=>{
  allVideoTitlesArr.push(elmnt.attributes["data-title"].value)
})



var vidBtn = document.querySelectorAll("button.btn.show-youtube-modal.full-width.justify-content-start")
vidBtn.forEach(elmnt=>{
  elmnt.onclick = getLink
})
var allVidLinks = []
	var allStr = ""
function getLink(){
  console.log(document.querySelector("div > iframe#vid1_youtube_api").src)
	allVidLinks.push(document.querySelector("div > iframe#vid1_youtube_api").src.replace('controls=0', '').replace("fs=0", ""))
	for(let i = 0; i < allVideoTitlesArr.length; i++){
    allStr += `"${allVideoTitlesArr[i]}": "${allVidLinks[i]}",
            `
  }
  console.log(allStr)
}

document.onkeydown = function(e) {
    var keyCode = e.keyCode;
  console.log(keyCode)
    if(keyCode == 27){
			document.elementFromPoint(20, 25).click();
    };
}




// Auto Extractor V2

const sections = {}
let sectionIndex = 0
// Get Sections
document.querySelectorAll('.col-lg-7.col-md-7.col-md-12.col-sm-12.col-12').forEach((section)=> {
  sections[sectionIndex] = {
    "tag": ["file", "file"]
  }
  // Section Title
  const sectionTitle = section.querySelector('.d-flex.align-items-center.page-num-container.hide-on-mobile > .font-1rem').innerText
  sections[sectionIndex]['title'] = sectionTitle
  
  // Add Files Objects to the SectionObj
  sections[sectionIndex][" " + `ملف ${sectionTitle} غير محلول`] = ""
  sections[sectionIndex][" " + `ملف ${sectionTitle} محلول`] = ""
  
  // Section Note
  let notes = {}
  let notesIndex = 0
  section.querySelectorAll('.ck-content.pulse-effect > *').forEach((noteElmnt)=> {
    if(noteElmnt.querySelector('*')?.tagName == "IMG"){
	
      // Get Img URL
			notes[notesIndex] = { "type": "imgSrc" }
      notes[notesIndex]["src"] = noteElmnt.querySelector('*').src
      notesIndex++
    }else if(noteElmnt.tagName === "UL"){
      // Get Ul Elements
      noteElmnt.querySelectorAll('li').forEach((noteListElmnt)=> {
        notes[notesIndex] = { "type": "text" }
  	    notes[notesIndex]['text'] = noteListElmnt.innerText
	      notesIndex++
    	})
    }else {
      // Get Any Other Text Elements
      notes[notesIndex] = { "type": "text" }
      notes[notesIndex]['text'] = noteElmnt.innerText
      notesIndex++
    }
  })
  sections[sectionIndex]['notes'] = notes
  
  // Get Sections Buttons
  section.querySelectorAll('.btn.show-youtube-modal.full-width.justify-content-start.check-video-btn').forEach((buttonElmnt)=> {
    // Button Title
    const buttonTitle = buttonElmnt.innerText.replace('play_circle_outline\n', '')
    // Button URL
		const buttonVideoUrl = `http://www.youtube.com/embed/${buttonElmnt.getAttribute('data-video-id')}`
    sections[sectionIndex][" " + buttonTitle] = buttonVideoUrl
    sections[sectionIndex]['tag'].push("video")
  })
  
  sectionIndex++

})
console.log(JSON.stringify(sections, null, 2))




















