


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
    contain.setAttribute('class', 'contain');
    contain.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    hold.appendChild(contain);
  }
    document.querySelectorAll('.contain').forEach(function(contain, index) {
    contain.onclick = function() {
      let container = document.body;
      let newImg = document.createElement('div');
      container.appendChild(newImg);
      newImg.setAttribute('class', 'imgw');
      newImg.setAttribute('onclick', 'closeImg()');
      let newI = document.createElement('img');
      newI.setAttribute('src', `${URL.createObjectURL(pics[index])}`);
      newI.setAttribute('id', 'my');
      newImg.appendChild(newI);
        count = index

      


      newI.onload = function() {

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
    let newI = document.createElement('img')
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
    newI.setAttribute('src', `${URL.createObjectURL(pics[count])}`);
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

