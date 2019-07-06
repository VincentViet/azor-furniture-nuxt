<template>
  <div>
    <a-row type="flex" justify="start" align="middle">
      <a-col span="1"><label for="">Bộ lọc:</label></a-col>
      <a-col span="6">
        <a-row>
          <label for="">Loại:</label>
          <a-select defaultValue="0" style="width:50%">
          <a-select-option value="0">All</a-select-option>
          <a-select-option value="lucy">Lucy</a-select-option>
          <a-select-option value="disabled" disabled>Disabled</a-select-option>
          <a-select-option value="Yiminghe">yiminghe</a-select-option>
        </a-select>
        </a-row>
      </a-col>
      <a-col span=8>
        <a-row>
          <label for="">Sắp xếp:</label>
          <a-select defaultValue="0" style="width:50%">
          <a-select-option value="0">A-Z</a-select-option>
          <a-select-option value="1">Z-A</a-select-option>
          <a-select-option value="2">GIÁ TỪ CAO ĐẾN THẤP</a-select-option>
          <a-select-option value="3">GIÁ TỪ THẤP ĐẾN CAO</a-select-option>
        </a-select>
        </a-row>
      </a-col>
      <a-col span="9">
        <a-row type="flex" justify="space-around" align="middle">
          <label for="">Giá:</label>
          <a-slider :marks="marks" style="width: 70%" :tipFormatter="formatter" />
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marks: {
        0: "0",
        10: "10 triệu",
        25: "25 triệu",
        50: "50 triệu",
        75: "75 triệu",
      }
    };
  },
  methods: {
    formatter(value) {
      if (value === 0) return "0";
      return value + ",000,000";
    }
  }
};
</script>


