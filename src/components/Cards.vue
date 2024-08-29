<template>
<div class="col-12 col-md-12 mb-3">
    <div class="card">
        <div class="card-header text-center">Seccion en Vue</div>
        <div class="card-body">
            <h1 class="text-center font-bold text-1xl">Fotos dadas por el Rover de la Nasa</h1>   
        </div>
</div>
<div class="row row-cols-3 row-cols-md-4">
    <div v-for="photo in photos.photos" :key="photo.id">
        <div class="col">
            <div class="card mb-3">
              <img :loading="lazy" :src="photo.img_src" alt="" class="card-img-top" height="150px">
              <div class="card-body">
                <h5 class="card-title">{{"Rover " + photo.rover.name}}</h5>
                <h5>Cameras</h5>
                <div  v-for="camera in photo.rover.cameras" :key="camera.name">
                    <p class="card-text"> {{camera.name}} - {{camera.full_name}}.</p>
                </div>
              </div>
            </div>
        </div>

    </div>

</div>

</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const photos = ref([]);

const getPhotos = async () => {
    const res = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=9Sjs6yIk2KzBPEf8t6yjByOnJaQNySHdo3cwXpuR")

    const data = await res.json();

    photos.value = data;
}

onMounted(() => {
    getPhotos();
})
</script>
