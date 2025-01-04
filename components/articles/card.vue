<template>
    <a :href="link" class="card col-lg-4 col-12 px-lg-0 px-5 bg-dark">
        <div class="m-2">
            <img :src="picture" class="card-img-top" alt="course image">
            <div class="card-body text-center">
                <h4>{{ name }}</h4>
            </div>
        </div>
    </a>
</template>
  
<style scoped>
    .card {
        padding:10px;
        border:0;
    }

    .card>div{
        border: 2px solid rgb(212,220,234);
        border-radius: 10px;
        overflow: hidden;
    }

    .card-body{
        background-color: rgb(38,42,59);
        padding: 8px;
    }

    .card-body h4{
        font-size: 1.5em;
    }

    .card-img-top {
        max-width:100% !important;
    }
</style>

<script>
export default {
    props: {
        link: {
            type: String,
            default: "/",
            required: false
        },
        picture: {
            type: String,
            default: "/pictures/artcontent/template.png",
            required: false
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>