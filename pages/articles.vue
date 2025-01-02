<template>
    <NuxtLayout> 
        <h1>Les articles</h1>

        <div class="container">
            <div class="row">
                <ArticlesCard v-for="article in articles"
                    :name="article.title"
                    :picture="article.picture"
                    :link="article.path"
                />
            </div>
        </div>

    </NuxtLayout>
</template>

<script setup lang="ts">
    //list all files using api /api/list-articles
    const { data } = await useFetch('/api/getarticles')
    const articles = data
</script>