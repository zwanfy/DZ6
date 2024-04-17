// PHONE BLOCK

 const phoneInput = document.querySelector('#phone_input')
 const phoneButton = document.querySelector('#phone_button')
 const phoneSpan = document.querySelector('#phone_result')

 const regExp =/^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

 phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
         phoneSpan.innerHTML = 'OK'
         phoneSpan.style.color = 'green'
  } else {
        phoneSpan.innerHTML = '!NOT OK'
         phoneSpan.style.color = 'red'
     }
 }

// TAB SLIDER

const tabContentItems = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabContentParents = document.querySelector('.tab_content_items')

let currentTab = 0
// const
const hideTabContent = () => {
    tabContentItems.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentItems[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabItems.length
    showTabContent(currentTab)
}

hideTabContent()
showTabContent()
setInterval(switchTab, 3000)

tabContentParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItems, tabindex) => {
            if (event.target === tabItems) {
                hideTabContent()
                currentTab = tabindex
                showTabContent(currentTab)
            }
        })
    }
}

//CONVERTER
const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')


const converter = (element, targetElement, targetElementTwo, current) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/package.json")
            const data = await response.json()
            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElementTwo.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElementTwo.value = (element.value / data.eur).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetElementTwo.value = (element.value * data.eur2).toFixed(2)
                    break
                default:
                    break
            }
            element.value === "" && (targetElement.value = "" || (targetElementTwo.value = ""))
        } catch (e) {
            console.error(e)
        }

    }
}

converter(somInput, usdInput, eurInput, "som")
converter(usdInput, somInput, eurInput, "usd")
converter(eurInput, somInput, usdInput, "eur")