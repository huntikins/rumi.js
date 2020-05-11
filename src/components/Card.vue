<template>
  <div class="flip-card" :id="id">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="front" :alt="altFront" style="width:250px;height:363px;" />
      </div>
      <div class="flip-card-back">
        <img
          :src="back"
          alt="back cover of card"
          style="width:250px;height:363px;"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "front", "back", "altFront"]
};
</script>

<style lang="scss">
.flip-card {
  background-color: transparent;
  width: 250px;
  height: 363px;
  perspective: 1000px;
  display: inline-flex;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:active .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 25px;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-front > img {
  border-radius: 25px;
  border: 1px solid black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

.flip-card-back > img {
  border-radius: 25px;
  border: 1px solid black;
}
</style>
