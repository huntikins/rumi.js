<template>
    <section class="home-hero">
        <h1>{{textTop}}<span>{{textBottom}}</span></h1>
    </section>
</template>
<script>
export default {
    props: {
        textTop: String,
        textBottom: String
    }
}
</script>