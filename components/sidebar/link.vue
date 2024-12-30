<template>
    <li class="nav-item px-3 px-lg-0">
        <NuxtLink class="nav-link active m-2" :to="to" @click="dismissOffcanvas">
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
          default: '#',
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
