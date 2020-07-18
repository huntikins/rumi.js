<template>
  <div class="dashboard__card">
    <div class="wrapper bg-dark">
      <div class="header">
        <div class="date">
          <i :class="icon + ' dashboard__card-icon'"></i>
        </div>
      </div>
      <div class="data">
        <div class="content">
          <h1 class="title">
            {{ title }}
          </h1>
          <p class="text">
            {{ description }}
          </p>
          <button @click.prevent="play" class="btn btn-bermuda btn-block">
            {{ btn }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { roomsCollection, usersCollection } from "../../js/firebase";
export default {
  props: ["icon", "title", "description", "btn"],
  data: () => {
    return {
      room: "",
      id: ""
    };
  },
  computed: {
    ...mapState(["userProfile"])
  },
  methods: {
    play() {
      let self = this;
      var card = self.btn;
      if (card === "Play Now") {
        self.id = this.userProfile.id;
        roomsCollection
          .add({
            player: [
              {
                id: this.userProfile.id,
                name: this.userProfile.username,
                avatar: this.userProfile.avatar
              }
            ]
          })
          .then(function(docRef) {
            self.room = docRef.id;
            usersCollection
              .doc(self.id)
              .set(
                {
                  rooms: [self.room]
                },
                { merge: true }
              )
              .then(function() {})
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:wght@300300;400;700");
// Variables
$regal-blue: #034378;
$san-juan: #2d4e68;
$bermuda: #77d7b9;
$white: #fff;
$black: #000;
$open-sans: "Open Sans", sans-serif;
// clear-fix mixin
@mixin cf {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
}
.btn-bermuda {
  background-color: $bermuda !important;
  color: $white;
  text-shadow: 2px 3px 2px rgba($black, 0.18);
}
.dashboard__card {
  .wrapper {
    background-color: $white;
    min-height: 540px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
  }
  .data {
    position: absolute;
    bottom: 0;
    width: 100%;
    .content {
      padding: 1em;
      position: relative;
      z-index: 1;
    }
  }
  .title {
    margin-top: 10px;
    text-shadow: 2px 3px 2px rgba($black, 0.18);
    a {
      color: $white;
    }
  }
  .text {
    height: 70px;
    margin: 0;
    text-shadow: 2px 3px 2px rgba($black, 0.18);
  }
  .header {
    @include cf;
    color: $white;
    padding: 1em;
    .date {
      position: absolute;
      top: 0;
      left: 0;
      background-color: $bermuda;
      color: $white;
      padding: 0.8em;
      span {
        display: block;
        text-align: center;
      }
      .dashboard__card-icon {
        font-weight: 700;
        font-size: 24px;
        text-shadow: 2px 3px 2px rgba($black, 0.18);
      }
      .month {
        text-transform: uppercase;
      }
      .month,
      .year {
        font-size: 12px;
      }
    }
  }
  .menu-content {
    float: right;
    li {
      margin: 0 5px;
      position: relative;
    }
    span {
      transition: all 0.3s;
      opacity: 0;
    }
  }
  .data {
    color: $white;
  }
}
</style>
