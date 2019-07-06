<template>
  <div>
    <a-card
      style="width:100%"
      :title="title"
      :activeTabKey="tabKey"
      :headStyle="{
        fontWeight: 'bold',
        fontSize: '40px',
        background: '#000',
        color: '#fff'}"
      @tabChange="key => onTabChange(key, 'tabKey')"
    >
      <!-- <a-row type="flex" justify="space-between" class="grid">
        <a-col
          :span="4"
          v-for="(item, index) in items"
          :key="index"
          style="margin-top: 5px; margin-bottom: 10px"
          :class="['product-item', `product-${index}`]"
        >
          
        </a-col>
      </a-row>-->

      <a-button type="primary" @click="hideProducts" slot="extra">Hide</a-button>
      <a-button type="primary" @click="filters" slot="extra">Filter</a-button>
      <a-button type="primary" @click="all" slot="extra">All</a-button>

      <div class="grid">
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="['product-item', `product-item-${index}`]"
        >
          <product-card :id="item" />
        </div>
      </div>
    </a-card>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import ProductCard from "../product-card";
import Chance from "chance";

function generateRandomArray(length) {
  let seed = Date.now();
  let chance = new Chance(seed);

  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(chance.integer({ min: 100, max: 500 }));
  }

  return array;
}

let $grid = null;
// document.ready(function() {
//   $grid = $(".grid").isotope({
//     itemSelector: ".product-item",
//     layoutMode: "fitRows"
//   });
// });

export default {
  mounted() {
    $grid = $(".grid").imagesLoaded(function() {
      // init Isotope after all images have loaded
      $grid.isotope({
        itemSelector: ".product-item",
        layoutMode: "fitRows"
      });
    });
  },
  data() {
    return {
      tabList: [
        {
          key: "tab1",
          // tab: 'tab1',
          scopedSlots: { tab: "customRender" }
        },
        {
          key: "tab2",
          tab: "tab2"
        }
      ],
      contentList: {
        tab1: "content1",
        tab2: "content2"
      },
      tabListNoTitle: [
        {
          key: "article",
          tab: "article"
        },
        {
          key: "app",
          tab: "app"
        },
        {
          key: "project",
          tab: "project"
        }
      ],
      key: "tab1",
      tabKey: "article",
      items: generateRandomArray(18),
      isotope: null,
      count : this.$store.state.count
    };
  },
  methods: {
    hideProducts() {
      this.$store.commit('increment');
      console.log(this.$store.state.count)
    },
    filters() {
      // this.$data.isotope.isotope({
      //   filter: ".product-item-0"
      // });
      // console.log(this.$data.isotope);

      $grid.isotope({
        filter: ".product-item-0"
      });
    },
    all() {
      // this.$data.isotope.isotope({
      //   filter: "*"
      // });
      $grid.isotope({
        filter: "*"
      });
    }
  },
  props: {
    loading: Boolean,
    title: String,
    detailsURL: String
  },
  components: {
    "product-card": ProductCard
  }
};
</script>

<style>
.product-item {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>


