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
            <ul class="nav flex-line">
                <sidebarLink to="/">Home</sidebarLink>
                <sidebarLink to="/articles">articles</sidebarLink>
                <slot name="sidebar"/>
            </ul>
        </div>
    </div>

    <div class="content flex-grow-1 p-3">
        <p v-if="isArticles">oui {{ detail }}</p>
        <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
//get url
import { useRoute } from 'vue-router'

const route = useRoute()
const uri = route.path.split('/').reverse()
const isArticles = uri[1] === 'articles'
const articleName = uri[0]
const detail = ref('')

if(isArticles) {
    const { data } = await useFetch('/api/getarticledetail/' + articleName)
    detail.value = data
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