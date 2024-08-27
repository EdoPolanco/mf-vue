import { createApp } from "vue"

import Cards from "./components/Cards.vue"

export default function placeCards(ele) {
    createApp(Cards).mount(ele);
}