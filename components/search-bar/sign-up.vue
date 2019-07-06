<template>
  <div>
    <a-drawer
      title="TẠO TÀI KHOẢN"
      destroyOnClose
      :width="720"
      @close="onClose"
      :visible="visible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <a-row type="flex" justify="space-around" align="middle" :style="{marginBottom: '50px'}">
        <logo />
      </a-row>
      <a-form :form="form" layout="vertical" @submit="onSignUp">
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Họ">
              <a-input placeholder="Nguyễn" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="Tên">
              <a-input placeholder="Văn A" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Email">
              <a-input-group compact>
                <a-input
                  style="width: 60%"
                  suffix="@"
                  placeholder="example"
                  v-decorator="['email', {
                  rules: [{ required: true, message: 'Vui lòng nhập email' }]
                }]"
                />
                <a-auto-complete
                  style="width: 40%"
                  placeholder="gmail.com"
                  :dataSource="dataSource"
                  @search="onSearch"
                />
              </a-input-group>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item
              label="Số điện thoại"
              :validate-status="phoneValidateData.status"
              :help="phoneValidateData.msg"
              hasFeedback
            >
              <a-input
                placeholder="9147945**"
                addonBefore="+84"
                v-decorator="['telphone', {
                  rules: [{ 
                    required: true, 
                    whitespace: false,
                    min: 8,
                    validator: phoneValidator
                  }]
                }]"
              />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row type="flex" justify="end">
          <a-button html-type="submit" type="primary">ĐĂNG KÍ</a-button>
          <a-button :style="{marginLeft: '10px'}" @click="onClose" type="danger">HỦY</a-button>
        </a-row>
      </a-form>
    </a-drawer>
  </div>
</template>
<script>
import Logo from "../logo";
import {EMAIL_DOMAINS} from "../constants"
import Lodash from "lodash"

export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
      phoneValidateData: {
        status: "",
        msg: ""
      },
      dataSource: []
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
      const data = this.$data.phoneValidateData;
      Object.assign(data, {
        status: "",
        msg: ""
      });
    },
    onSignUp(e) {
      e.preventDefault();
      this.$data.form.validateFields((err, fieldsValue) => {
        if (err) {
          console.log(err);
          return;
        }
      });
      // console.log("signUp");
    },
    phoneValidator(rule, value) {
      const data = this.$data.phoneValidateData;
      const pattern1 = /((03[2|3|4|5|6|7|8|9])|(05[6|8|9])|(07[0|6|7|8|9])|(08[1|2|3|4|5|6|8|9])|(09[1|2|3|4|0|6|7|8|9]))+([0-9]{8}|[0-9]{7})\b/;
      const pattern2 = /((3[2|3|4|5|6|7|8|9])|(5[6|8|9])|(7[0|6|7|8|9])|(8[1|2|3|4|5|6|8|9])|(9[1|2|3|4|0|6|7|8|9]))+([0-9]{7}|[0-9]{6})\b/;
      if (value.length === 0) {
        return Object.assign(data, {
          status: "error",
          msg: "Trường này không được bỏ trống."
        });
      } else if (!pattern1.test(value) && !pattern2.test(value)) {
        return Object.assign(data, {
          status: "error",
          msg: "Số điện thoại chưa đúng."
        });
      } else {
        return Object.assign(data, {
          status: "success",
          msg: ""
        });
      }
    },
    onSearch(value){
      const pattern = new RegExp(value);
      this.$data.dataSource = Lodash.filter(
        EMAIL_DOMAINS,
        function(str){
          return pattern.test(str);
        })
    }
  },
  components: {
    logo: Logo
  }
};
</script>
