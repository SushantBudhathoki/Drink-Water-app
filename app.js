const smallCup = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const Percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCup.forEach( (cup,idx) => {
  cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){
  if(smallCup[idx].classList.contains('full') && !smallCup[idx].nextElementSibling.classList.contains('full')){
    idx-- 
  }
  smallCup.forEach((cup, idx2) => {
    if (idx2<=idx){
      cup.classList.add('full')
    }else{
      cup.classList.remove('full')
    }
  })
  updateBigCup()
}

function updateBigCup(){
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCup.length

  if (fullCups === 0){
    Percentage.style.visibility = 'hidden'
    Percentage.style.height= '0'
  } else {
    Percentage.style.visibility = 'visible'
    Percentage.style.height = `${fullCups / totalCups * 280}px`
    Percentage.innerText = `${fullCups / totalCups *100}%`
  }
  if(Percentage.innerText === '100%'){
    remained.style.visibility = 'hidden'
    remained.style.height= '0'
  }else{
    remained.style.visibility = 'visible'
    liters.innerText = `${2-(250 * fullCups /1000)}L`
  }
}

