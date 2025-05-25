<!-- src/components/LanguageSwitcher.vue -->
<template>
  <div class="language-switcher">
    <button 
      @click="setLanguage('en')"
      :class="{ active: currentLang === 'en' }"
      aria-label="English"
    >
      EN
    </button>
    <button 
      @click="setLanguage('am')"
      :class="{ active: currentLang === 'am' }"
      aria-label="Amharic"
    >
      AM
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLang: 'en'
    }
  },
  methods: {
    setLanguage(lang) {
      this.currentLang = lang;
      document.documentElement.lang = lang;
      // Add your translation logic here
      console.log('Language switched to:', lang);
    }
  }
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  display: flex;
  gap: 8px;
  background: rgba(0,0,0,0.7);
  padding: 8px 12px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.language-switcher button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.language-switcher button.active {
  background: #536DFE;
  color: white;
}

.language-switcher button:hover {
  opacity: 0.8;
}
</style>