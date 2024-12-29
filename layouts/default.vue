<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">MyApp</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>

    <div class="offcanvas-lg offcanvas-start" data-bs-theme="dark" tabindex="-1" id="offcanvasSidebar" aria-labelledby="offcanvasSidebarLabel">
        <div class="offcanvas-header text-white">
            <h5 class="offcanvas-title" id="offcanvasSidebarLabel">Menu</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#offcanvasSidebar"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="nav flex-line" id="sidebar">
                <sidebarLink to="/">Home</sidebarLink>
                <sidebarLink to="/articles">articles</sidebarLink>
                <slot name="sidebar"/>
            </ul>
        </div>
    </div>

    <div class="content flex-grow-1 p-3" id="content" ref="content">
        <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
//get url

const route = useRoute()
const uri = route.path.split('/').reverse()
const isArticles = uri[1] === 'articles'

onMounted(async () => {
    //get the 2nd child of test
    if(!isArticles) return

    const side = document.getElementById('sidebar')
    
    let data = document.getElementById('content')?.querySelector('div')
    let arrContent = Array.from(data?.children)
    
    const articleDetail = getArticleDetail(arrContent)
    for (let i = 0; i < articleDetail.length; i++) {
        let dropDown = createDropDown(articleDetail[i].name, articleDetail[i].details)
        side?.appendChild(dropDown)
    }

})

//for dropdown creation
let createDropDown = (name :string, details : { name: string; id: string }[]) => {
    let mainDiv = document.createElement('div')
    mainDiv.classList.add('dropdown')

    //create Name button
    let nameButton = document.createElement('button')
    nameButton.classList.add('btn', 'btn-secondary', 'dropdown-toggle')
    nameButton.setAttribute('type', 'button')
    nameButton.setAttribute('data-bs-toggle', 'dropdown')
    nameButton.setAttribute('aria-expanded', 'false')
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
        li.appendChild(a)
        dropdownMenu.appendChild(li)
    }
    mainDiv.appendChild(dropdownMenu)
    return mainDiv
}

//for tag detection
const H2_NAME = "ProseH2.vue"
const H3_NAME = "ProseH3.vue"

let detectTag = (tag : HTMLElement) => {
    // return { tag : TAG (H2, H3 or other), name : NAME (inner text without comments), id: ID (id of the tag)}
    let tagName = tag.innerText
    let tagId = tag.id
    let tagType = tag.getAttribute('data-v-inspector')?.includes(H2_NAME) ? 'H2' : tag.getAttribute('data-v-inspector')?.includes(H3_NAME) ? 'H3' : 'OTHER'
    return { tag : tagType, name : tagName, id: tagId }
}

function getArticleDetail(article: HTMLElement[]) : { name: string; details: { name: string; id: string }[] }[] {
    let index = ref(0)
    let details = ref<{ name: string; details: { name: string; id: string }[] }[]>([])

    //find the first h2

    for (let i = 0; i < article.length; i++) {
        let current = detectTag(article[i])
        if (current.tag === 'H2') {
            index.value = i
            break
        }
    }

    let currentName = ref('')
    let subDetails = ref<{ name: string; id: string }[]>([])
    for (let i = index.value; i < article.length; i++) {
        let current = detectTag(article[i])
        if (current.tag === 'H2') {
            if (currentName.value !== '') {
                details.value.push({ name: currentName.value, details: subDetails.value })
                subDetails.value = []
            }
            currentName.value = current.name
        } else if (current.tag === 'H3') {
            subDetails.value.push({ name: current.name, id: current.id })
        }
    }
    details.value.push({ name: currentName.value, details: subDetails.value })
    return details.value
}
</script>


<style>
    @media (max-width: 992px) {
        .content {
            margin-left: 0;
        }

        #offcanvasSidebar {
            width: 200px; /* Adjust the width of the sidebar */
        }
    }
</style>