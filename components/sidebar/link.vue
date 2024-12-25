<template>
    <li class="nav-item">
        <a class="btn btn-primary m-2 sidebar-link" href="$to" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar">
            <slot />
        </a>
    </li>
</template>

<script>
export default {
  name: 'sideLink',
  props: {
    to: {
        type: String,
        required: false,
        default: '#'
    }
  }
}
</script>

<style scoped>
.sidebar-link {
  width: 150px ;
}

/*
@media (max-width: 992px) {
  .sidebar-link {
    width: 100%; 
  }
}
*/
</style>