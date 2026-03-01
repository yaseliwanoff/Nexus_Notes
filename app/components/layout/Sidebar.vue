<template>
  <aside class="sidebar-wrapper h-screen dark:bg-[#070707] border-r border-r-black/5 dark:border-r-white/5">
    <div class="sidebar-header light:light-theme dark:dark-theme">
      <NuxtLink to="/" class="sidebar-header-logo">
        Nexus
        <span class="text-blue-300">Note</span>
      </NuxtLink>
    </div>
    <div class="sidebar-content-wrapper">
      <slot />
    </div>
  </aside>
</template>

<style scoped>
.sidebar-wrapper {
  width: 450px;
  height: 100vh;
  padding: 50px;
}

.sidebar-header {
  margin-bottom: 50px;
}

.sidebar-header a {
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0;
}

.sidebar-header a .dark-theme {
  color: #ffffff;
}

.sidebar-header a .light-theme {
  color: #000000;
}

.sidebar-header a span {
  color: rgb(69, 131, 224);
}
</style>
