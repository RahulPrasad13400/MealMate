const date = new Date().getFullYear()
const year = document.querySelector('.year')
year.textContent = date

const header = document.querySelector('.header')
const btnMobileNav = document.querySelector('.btn-mobile-nav')
btnMobileNav.addEventListener('click',function(){
    header.classList.toggle('nav-open')
})

const allLinks = document.querySelectorAll('a:link') //to select all the anchor elements with href property 
allLinks.forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault()
        const href = link.getAttribute("href")
        //Scroll to top
        if(href === '#'){ 
            window.scrollTo({
                top: 0,
                behavior : 'smooth'
            })
        }
        // scroll to respective sectitons 
        if(href !== '#' && href.startsWith('#')){
            const section = document.querySelector(href)
            section.scrollIntoView({behavior:"smooth"})
        }
        // close mobile navigation
        if(link.classList.contains('main-nav-link')){  //checking whether the selected link contains the main nav link that is a common class presemt on the nav links 
            header.classList.toggle('nav-open')
        }
    })
})

const sectionHero = document.querySelector('.section-hero')

const obs = new IntersectionObserver(function(entries){
    const ent = entries[0]
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky')
    }
    if(ent.isIntersecting === true){
        document.body.classList.remove('sticky')
    }
},{
    root : null,
    threshold : 0,
    rootMargin: '-80px',
})
obs.observe(sectionHero)

//THIS CODE SHOULD BE INCLUDED , IT IS TO SUPPORT THE GRID PROPERTY IN SAFARI BROWSERS WHICH HAS SOME PROBLEM WITH GRID GAP

function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();