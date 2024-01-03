<script setup>
import TheHeader from '/src/components/TheHeader.vue'
import CategoriesSection from '/src/components/CategoriesSection.vue'
import PopularSection from '/src/components/PopularSection.vue'
import CustomSection from '/src/components/CustomSection.vue'
import ArtistsSection from '/src/components/ArtistsSection.vue'
import ContactSection from '/src/components/ContactSection.vue'
import SponsorsBanner from '/src/components/SponsorsBanner.vue'
import AboutSection from '/src/components/AboutSection.vue'
</script>

<template>
  <TheHeader></TheHeader>
  <SponsorsBanner></SponsorsBanner>
  <CategoriesSection />
  <PopularSection></PopularSection>
  <CustomSection></CustomSection>
  <ArtistsSection></ArtistsSection>
  <AboutSection></AboutSection>
  <ContactSection></ContactSection>
  <TheFooter></TheFooter>
</template>
