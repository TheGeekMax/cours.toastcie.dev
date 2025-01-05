<template>  
    <nav class="navbar navbar-expand-lg shadow sticky-top bg-dark text-light" data-bs-theme="dark">
        <div class="container px-4">
            <div class="d-flex align-items-center">
                <img src="/pictures/logo.png" alt="logo" class="img-fluid" width="50px">
                <h5 class="ms-2"><NuxtLink to="/" id="title-name">Toast-Courses</NuxtLink></h5>
            </div>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#top-navbar" aria-controls="top-navbar">
                <Icon name="mdi:format-list-bulleted" size="1.5em"/>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="top-navbar" aria-labelledby="top-navbarLabel">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#top-navbar" aria-controls="top-navbar">
                    <div class="d-flex justify-content-between w-100">
                        <h5>Toast-Courses</h5>
                        <span class="navbar-toggler-icon"></span>
                    </div>
                </button>
                <ul class="navbar-nav ms-lg-auto p-4 p-lg-0" id="navbar-links">
                    <SidebarLink to="/">Home</SidebarLink>
                    <SidebarLink to="/articles">Articles</SidebarLink>
                </ul>
            </div>
        </div>
    </nav>

    <div class="content flex-grow-1 p-3 container bg-dark text-light" id="content" ref="content">
        <slot />
    </div>
</template>

<style>
body{
    font-family: 'Roboto', sans-serif;
}

#title-name{
    text-decoration: none;
    color: var(--bs-light-rgb);
}

img{
    max-width: 80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

h1 {
    text-align: center;
    font-size: 3em;
    margin: 16px 0;
}

h2 {
    font-size: 2.5em;
}

h3 {
    font-size: 2em;
}

h4 {
    font-size: 1.5em;
}

#content a{
    text-decoration: none;
    color: var(--bs-dark-rgb);
}

body{
    background-color: rgb(33,37,41);
}

pre{
    display: table;
    border-radius: 3px;
    padding: 5px;
    border: 1px solid rgb(212,221,230);
    width:80%;
    min-height:50px;
    max-width: 80%;
    background-color: rgb(43,47,61);

    /* center */
    display: block;
    margin-left: auto;
    margin-right: auto;
}

code{
    white-space: pre-wrap;
    line-break: break-word;
}

@media screen and (max-width: 944px) {
    pre{
        width: 100%;
        max-width: 100%;
    }
}
</style>

<script setup lang="ts">
//get url

const route = useRoute()
const uri = route.path.split('/').reverse()
const isArticles = uri[1] === 'articles'
const name = isArticles ? uri[0] : 'Toast-Courses'

//headers
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})

useSeoMeta({
  title: name,
  description: isArticles ? 'résumé sur ' + name : 'Bienvenue sur Toast-Courses',
  ogTitle: name,
  ogDescription: isArticles ? 'résumé sur ' + name : 'Bienvenue sur Toast-Courses',
  ogImage: isArticles ? '/pictures/articleimg/'+name+'.png' : '/pictures/logo.png',
  ogUrl: 'https://cours.toastcie.dev' + route.path,
  twitterTitle: name,
  twitterDescription: isArticles ? 'résumé sur ' + name : 'Bienvenue sur Toast-Courses',
  twitterImage: isArticles ? '/pictures/articleimg/'+name+'.png' : '/pictures/logo.png',
  twitterCard: 'summary'
})

onMounted(() => {
    //get the 2nd child of test
    if(!isArticles) return

    const side = document.getElementById('navbar-links')
    
    let data = document.getElementById('content')?.querySelector('div')
    let arrContent = Array.from(data?.children)

    console.log(data)
    console.log(arrContent)
    
    const articleDetail = getArticleDetail(arrContent)
    for (let i = 0; i < articleDetail.length; i++) {
        let dropDown = createDropDown(articleDetail[i].name, articleDetail[i].details)
        side?.appendChild(dropDown)
    }

})

//for dropdown creation
let createDropDown = (name :string, details : { name: string; id: string }[]) => {
    let mainDiv = document.createElement('li')
    mainDiv.classList.add('nav-item','dropdown')
    mainDiv.classList.add('dropdown')

    //create Name button
    let nameButton = document.createElement('a')
    nameButton.classList.add('nav-link','dropdown-toggle','m-2')
    nameButton.setAttribute('type', 'button')
    nameButton.setAttribute('role', 'button')
    nameButton.setAttribute('data-bs-toggle', 'dropdown')
    nameButton.innerText = name
    mainDiv.appendChild(nameButton)

    //create dropdown menu
    let dropdownMenu = document.createElement('ul')
    dropdownMenu.classList.add('dropdown-menu')
    //dropdownMenu.setAttribute('aria-labelledby', 'dropdownMenuButton')
    for (let i = 0; i < details.length; i++) {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.classList.add('dropdown-item')
        a.href = '#' + details[i].id
        a.innerText = details[i].name
        a.addEventListener('click', dismissOffcanvas)
        li.appendChild(a)
        dropdownMenu.appendChild(li)
    }
    mainDiv.appendChild(dropdownMenu)
    return mainDiv
}

//for tag detection
const H2_NAME = "H2"
const H3_NAME = "H3"

let detectTag = (tag : HTMLElement) => {
    // return { tag : TAG (H2, H3 or other), name : NAME (inner text without comments), id: ID (id of the tag)}
    let tagName = tag.innerText
    let tagId = tag.id
    let tagType = tag.tagName === "H2" ? H2_NAME : tag.tagName === "H3" ? H3_NAME : "OTHER"
    return { tag : tagType, name : tagName, id: tagId }
}

function getArticleDetail(article: HTMLElement[]) : { name: string; details: { name: string; id: string }[]; id: string }[] {
    let index = ref(0)
    let details = ref<{ name: string; details: { name: string; id: string }[]; id:string }[]>([])

    //find the first h2

    for (let i = 0; i < article.length; i++) {
        let current = detectTag(article[i])
        if (current.tag === 'H2') {
            index.value = i
            break
        }
    }

    let currentName = ref('')
    let currentId = ref('')
    let subDetails = ref<{ name: string; id: string }[]>([])
    for (let i = index.value; i < article.length; i++) {
        let current = detectTag(article[i])
        if (current.tag === 'H2') {
            if (currentName.value !== '') {
                details.value.push({ name: currentName.value, details: subDetails.value, id : current.id })
                subDetails.value = []
            }
            currentId.value = current.id
            currentName.value = current.name
        } else if (current.tag === 'H3') {
            subDetails.value.push({ name: current.name, id: current.id })
        }
    }
    details.value.push({ name: currentName.value, details: subDetails.value, id : currentId.value })
    return details.value
}

//for closing offcanvas on click
const dismissOffcanvas = () => {
    const offcanvasElement = document.getElementById('top-navbar');
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvasInstance) {
        offcanvasInstance.hide();
    }
}
</script>
