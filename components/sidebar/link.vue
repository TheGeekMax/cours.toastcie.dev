<template>
    <li class="nav-item">
        <NuxtLink class="btn btn-primary m-2 sidebar-link" :to="to" @click="dismissOffcanvas">
          <slot />
        </NuxtLink>
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
    },
    methods: {
      dismissOffcanvas() {
        const offcanvasElement = document.getElementById('offcanvasSidebar');
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvasInstance) {
          offcanvasInstance.hide();
        }
      }
    }
  }
</script>

<style scoped>
  .sidebar-link {
    width: 150px ;
  }
</style>