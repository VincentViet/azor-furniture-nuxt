<template>
  <div>
    <a-card
      style="width:100%"
      :title="title"
      :tabList="tabListNoTitle"
      :activeTabKey="tabKey"
      :headStyle="{
        fontWeight: 'bold',
        fontSize: '40px'}"
      @tabChange="key => onTabChange(key, 'tabKey')"
    >
      <a-row type="flex" justify="space-between">
        <a-col
          :span="4"
          v-for="item in items"
          :key="item"
          style="margin-top: 5px; margin-bottom: 10px"
        >
          <product-card :id="item" />
        </a-col>
      </a-row>
      <a-button :href="detailsURL" slot="extra">Chi Tiết</a-button>
    </a-card>
  </div>
</template>

<script>
import ProductCard from "../product-card";
import Chance from "chance";



function generateRandomArray(length){
  let chance = new Chance();
  let array =[];
  for(let i = 0; i < length; i++){
      array.push(chance.integer({min: 100, max: 500}))
  }

  return array;
}

export default {
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
      items: generateRandomArray(18)
    };
  },
  methods: {
    onTabChange(key, type) {
      this.$data.items = generateRandomArray(18);
      this[type] = key;
    }
  },
  props: {
    loading: Boolean,
    title: String,
    detailsURL: String,
  },
  components: {
    "product-card": ProductCard
  }
};
</script>

