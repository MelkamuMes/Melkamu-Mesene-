<!-- src/components/ThemeSwitcher.vue -->
<template>
  <div class="theme-switcher">
    <button 
      v-for="theme in themes" 
      :key="theme.name"
      @click="setTheme(theme.name)"
      :class="{ active: currentTheme === theme.name }"
      :aria-label="theme.label"
    >
      <v-icon small>{{ theme.icon }}</v-icon>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: 'dark',
      themes: [
        { name: 'light', label: 'Light Theme', icon: 'mdi-white-balance-sunny' },
        { name: 'dark', label: 'Dark Theme', icon: 'mdi-weather-night' },
        { name: 'bright', label: 'Bright Theme', icon: 'mdi-brightness-7' }
      ]
    }
  },
  methods: {
    setTheme(theme) {
      this.currentTheme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      // Add additional theme logic if needed
    }
  },
  mounted() {
    // Initialize with saved theme or default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.setTheme(savedTheme);
  }
}
</script>

<style scoped>
.theme-switcher {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  display: flex;
  gap: 8px;
  background: rgba(0,0,0,0.7);
  padding: 8px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.theme-switcher button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.theme-switcher button.active {
  background: #536DFE;
  color: white;
}

.theme-switcher button:hover {
  transform: scale(1.1);
}
</style>