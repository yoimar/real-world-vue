<template>
  <div>
    <h1>Events Listing - Real World Vue 2</h1>
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: { EventCard },
  data() {
    return {
      events: [],
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => console.log(error.response))
  },
}
</script>

<style></style>
