


const pics = [];

const get = document.querySelector('#file');
const hold = document.querySelector('.container');
let count =0

get.addEventListener('change', function() {
  const files = get.files;
  console.log(files.Type)
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    pics.push(file);
    let contain = document.createElement('div');
    let video = document.createElement('video');
    video.setAttribute('class', 'vid');
    contain.setAttribute('class', 'contain');
    video.innerHTML = `<source src="${URL.createObjectURL(file)}">`;
    video.autoplay = true
    video.muted = true
    contain.appendChild(video)
    hold.appendChild(contain);
  }
    document.querySelectorAll('.vid').forEach(function(video, index) {
    video.onclick = function() {
      let container = document.body;
      let newImg = document.createElement('div');
      container.appendChild(newImg);
      newImg.setAttribute('class', 'imgw');
      newImg.setAttribute('onclick', 'closeImg()');
      let newI = document.createElement('video');
      newI.innerHTML = `<source src="${URL.createObjectURL(pics[index])}">`;
      newI.setAttribute('id', 'my');
      newI.autoplay = true
      newI.controls = true
      newImg.appendChild(newI);
        count = index
        btn()
      


      function btn() {
        let newNextB = document.createElement("a");
    let bNext = document.createTextNode("next");
    newNextB.appendChild(bNext);
    container.appendChild(newNextB);
    newNextB.setAttribute("id", "imgnextb");
    newNextB.setAttribute("onclick", "changeimg(1)");
    newNextB.style.cssText = ("right:" + 60 + "px;");

    let newPrevB = document.createElement("a");
    let bPrev = document.createTextNode("prev");
    newPrevB.appendChild(bPrev);
    container.appendChild(newPrevB);
    newPrevB.setAttribute("id", "imgprevb");
    newPrevB.setAttribute("onclick", "changeimg(0)");
    newPrevB.style.cssText = ("left:" + 60 + "px;");
    }

    }
  })
  get.value = '';
});

function closeImg() {
  const imgw = document.querySelector('.imgw');
  const next = document.getElementById('imgnextb')
const prev = document.getElementById('imgprevb')
  if (imgw) {
    imgw.remove();
    next.remove();
    prev.remove();
  }
}

function changeimg(changeDir) {
    document.querySelector('#my').remove();

    let getImgWindow = document.querySelector('.imgw')
    let newI = document.createElement('video')
    getImgWindow.appendChild(newI)
    let num = pics.length -1
    
    if(changeDir === 1) {
        if(count === num) {
            count = 0
        }else{
            count++
        }
        
        // console.log(count)
        // console.log(pics.length -1)
    }
    else if(changeDir === 0){
        if(count < 1) {
            count = num
        }else {count--}
        
        // console.log(count)
        // console.log(pics.length)
    }
    newI.innerHTML = `<source src="${URL.createObjectURL(pics[count])}">`;
    newI.autoplay = true
      newI.controls = true
        newI.setAttribute('id', 'my');
    newI.onload = function() {
        // let imgWidth = this.width
        // let windowWidth = window.innerWidth;
        // let calcImg = ((windowWidth - imgWidth) / 2) - 80;
        
        let nextB = document.querySelector('#imgnextb')
        nextB.style.cssText = ("right:" + 60 + "px;");

        let prevB = document.querySelector('#imgprevb')
        prevB.style.cssText = ("left:" + 60 + "px;");
    }

}

