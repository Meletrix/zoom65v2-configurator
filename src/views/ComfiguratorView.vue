<template>
  <div>
    <h1
      class="CONFIGURATOR"
      style="text-align: center; padding: 0px 0px 20px 0px"
    >
      CONFIGURATOR
    </h1>
  </div>
  <div>
    <el-row :gutter="20">
      <el-col :span="3"></el-col>
      <el-col id="image" class="select-el-col" :span="18">
        <img id="base" :src="Img.case" style="width: 100%; height: 100%" />
        <img
          id="knob"
          :src="Img.knob"
          style="position: absolute; top: 0px; height: 100%"
        />
        <img
          id="weight"
          :src="Img.weight"
          style="position: absolute; top: 0px; height: 100%"
        />
        <img
          id="backplate"
          :src="Img.backplate"
          style="position: absolute; top: 0px; height: 100%"
        />
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
  <div v-if="flag" style="padding: 18px 0 25px 0">
    <el-row :gutter="20" class="row-bg" justify="center">
      <el-col class="select-el-col" :span="4">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Case Color
          </h4>
          <el-select
            v-model="case_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_case"
          >
            <el-option
              v-for="item in case_color_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col class="select-el-col" :span="4">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Backplate Color
          </h4>
          <el-select
            v-model="backplate_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_backplate"
          >
            <el-option
              v-for="item in backplate_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col class="select-el-col" :span="4">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Weight Color
          </h4>
          <el-select
            v-model="weight_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_weight"
          >
            <el-option
              v-for="item in weight_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col class="select-el-col" :span="4">
        <div class="div_center">
          <h4
            class="select-tilte"
            style="text-align: center; padding-bottom: 15px"
          >
            Knob Color
          </h4>
          <el-select
            v-model="knob_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_knob"
          >
            <el-option
              v-for="item in knob_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
    </el-row>
  </div>
  <div v-else style="padding: 5px 0 5px 0">
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Case Color</h4>
        <el-select
          v-model="case_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_case"
        >
          <el-option
            v-for="item in case_color_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Backplate Color</h4>
        <el-select
          v-model="backplate_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_backplate"
        >
          <el-option
            v-for="item in backplate_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Weight Color</h4>
        <el-select
          v-model="weight_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_weight"
        >
          <el-option
            v-for="item in weight_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Knob Color</h4>
        <el-select
          v-model="knob_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update_knob"
        >
          <el-option
            v-for="item in knob_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
  </div>
  <div>
    <el-row :gutter="20">
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <div class="select-tilte">
          <p style="font-size: 20px; padding-bottom: 10px">
            126 Default combinations
          </p>
          &nbsp;&nbsp;• 14 case and backplate combos (the same color) <br />
          &nbsp;&nbsp;• 9 knob & weight combos (the same color) <br />
          You can choose up to 126 color ways as your default keyboard kit.
          <br />
          <p style="font-size: 20px; padding-top: 10px; padding-bottom: 10px">
            19404 DIY combinations
          </p>
          &nbsp;&nbsp;• 14 case colors <br />
          &nbsp;&nbsp;• 14 bottom plate colors <br />
          &nbsp;&nbsp;• 9 knob & weight combo <br />
          &nbsp;&nbsp;• 11 External weights
        </div>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useImgStore } from "@/stores/img";
const Img = useImgStore();
const flag = ref(window.screen.width < 1100 ? false : true);
const case_color = ref("Ivory Cream");
const backplate_color = ref("PVD Silver");
const weight_color = ref("Anodized Gold");
const knob_color = ref("Anodized Gold");

window.onload = () => {
  case_color.value = "Ivory Cream";
};

Img.case = "https://i.imgur.com/lMcwWak.png";
Img.knob = "https://i.imgur.com/Zq709lw.png";
Img.weight = "https://i.imgur.com/8Vw2qU8.png";
Img.backplate = "https://i.imgur.com/Nlta3f6.png";

const update_case = () => {
  console.log(case_color.value);
  Img.case = dict[case_color.value];
  Img.backplate = dict[default_dict[case_color.value]["backplate"]];
  Img.weight = dict[default_dict[case_color.value]["weight"]];
  Img.knob = dict[default_dict[case_color.value]["knob"]];

  console.log(Img.case);
};
const update_backplate = () => {
  console.log(backplate_color.value);
  console.log(knob_color.value);
  Img.backplate = dict[backplate_color.value];
};
const update_weight = () => {
  Img.weight = dict[weight_color.value];
};
const update_knob = () => {
  Img.knob = dict[knob_color.value];
};

const case_color_options = [
  {
    value: "Case_IvoryCream",
    label: "Ivory Cream",
  },
  {
    value: "Case_White",
    label: "White",
  },
  {
    value: "Case_Black",
    label: "Black",
  },
  {
    value: "Case_BlushPink",
    label: "Blush Pink",
  },
  {
    value: "Case_CoolGrey",
    label: "Cool Grey",
  },
  {
    value: "Case_CyberYellow",
    label: "Cyber Yellow",
  },
  {
    value: "Case_FaintBlurple",
    label: "Faint Blurple",
  },
  {
    value: "Case_GTSilver",
    label: "GT Silver",
  },
  {
    value: "Case_Lilac",
    label: "Lilac",
  },
  {
    value: "Case_Navy",
    label: "Navy",
  },
  {
    value: "Case_ScarletRed",
    label: "Scarlet Red",
  },
  {
    value: "Case_SkyBlue",
    label: "Sky Blue",
  },
  {
    value: "Case_Teal",
    label: "Teal",
  },
  {
    value: "Case_WildGreen",
    label: "Wild Green",
  },
];

const backplate_options = [
  {
    value: "Backplate_PVD_Silver",
    label: "PVD Silver",
  },
  {
    value: "Backplate_PVD_Black",
    label: "PVD Black",
  },
  {
    value: "Backplate_PVD_Gold",
    label: "PVD Gold",
  },
  {
    value: "Backplate_CF",
    label: "Carbon Fiber",
  },
  {
    value: "Backplate_Glass_BlushPink",
    label: "Glass Blush Pink",
  },
  {
    value: "Backplate_Glass_CoolGrey",
    label: "Glass Cool Grey",
  },
  {
    value: "Backplate_Glass_FaintBlurple",
    label: "Glass Faint Blurple",
  },
  {
    value: "Backplate_Glass_Lilac",
    label: "Glass Lilac",
  },
  {
    value: "Backplate_Glass_MilkyGreen",
    label: "Glass Milky Green",
  },
  {
    value: "Backplate_Glass_Navy",
    label: "Glass Navy",
  },
  {
    value: "Backplate_Glass_ScarletRed",
    label: "Glass Scarlet Red",
  },
  {
    value: "Backplate_Glass_SkyBlue",
    label: "Glass Sky Blue",
  },
  {
    value: "Backplate_Glass_Teal",
    label: "Glass Teal",
  },
  {
    value: "Backplate_Glass_WildGreen",
    label: "Glass Wild Green",
  },
];

const weight_options = [
  {
    value: "Weight_Ano_Gold",
    label: "Anodized Gold",
  },
  {
    value: "Weight_PVD_Silver",
    label: "PVD Silver",
  },
  {
    value: "Weight_PVD_Black",
    label: "PVD Black",
  },
  {
    value: "Weight_PVD_Prism",
    label: "PVD Prism",
  },
  {
    value: "Weight_PVD_Gold",
    label: "PVD Gold",
  },
  {
    value: "Weight_Ano_Black",
    label: "Anodized Black",
  },
  {
    value: "Weight_Ano_RoseGold",
    label: "Anodized RoseGold",
  },
  {
    value: "Weight_Ano_Pink",
    label: "Anodized Pink",
  },
  {
    value: "Weight_eWhite",
    label: "E-White",
  },
];

const knob_options = [
  {
    value: "Knob_Ano_Gold",
    label: "Anodized Gold",
  },
  {
    value: "Knob_PVD_Silver",
    label: "PVD Silver",
  },
  {
    value: "Knob_PVD_Black",
    label: "PVD Black",
  },
  {
    value: "Knob_PVD_Gold",
    label: "PVD Gold",
  },
  {
    value: "Knob_PVD_Prism",
    label: "PVD Prism",
  },
  {
    value: "Knob_Ano_Black",
    label: "Anodized Black",
  },
  {
    value: "Knob_Ano_RoseGold",
    label: "Anodized RoseGold",
  },
  {
    value: "Knob_Ano_Pink",
    label: "Anodized Pink",
  },
  {
    value: "Knob_Red",
    label: "Anodized Red",
  },
  {
    value: "Knob_Yellow",
    label: "E-Yellow",
  },
  {
    value: "Knob_White",
    label: "E-White",
  },
];

const dict = {
  Case_Black: "./Case/Zoom65v2_Case_Black.png",
  Case_BlushPink: "./Case/Zoom65v2_Case_BlushPink.png",
  Case_CoolGrey: "./Case/Zoom65v2_Case_CoolGrey.png",
  Case_CyberYellow: "./Case/Zoom65v2_Case_CyberYellow.png",
  Case_FaintBlurple: "./Case/Zoom65v2_Case_FaintBlurple.png",
  Case_GTSilver: "./Case/Zoom65v2_Case_GTSilver.png",
  Case_IvoryCream: "./Case/Zoom65v2_Case_IvoryCream.png",
  Case_Lilac: "./Case/Zoom65v2_Case_Lilac.png",
  Case_Navy: "./Case/Zoom65v2_Case_Navy.png",
  Case_ScarletRed: "./Case/Zoom65v2_Case_ScarletRed.png",
  Case_SkyBlue: "./Case/Zoom65v2_Case_SkyBlue.png",
  Case_Teal: "./Case/Zoom65v2_Case_Teal.png",
  Case_White: "./Case/Zoom65v2_Case_White.png",
  Case_WildGreen: "./Case/Zoom65v2_Case_WildGreen.png",

  Knob_Ano_Black: "./Knob/Zoom65v2_Knob_Ano_Black.png",
  Knob_Ano_Gold: "./Knob/Zoom65v2_Knob_Ano_Gold.png",
  Knob_Ano_Pink: "./Knob/Zoom65v2_Knob_Ano_Pink.png",
  Knob_Ano_RoseGold: "./Knob/Zoom65v2_Knob_Ano_RoseGold.png",
  Knob_PVD_Black: "./Knob/Zoom65v2_Knob_PVD_Black.png",
  Knob_PVD_Gold: "./Knob/Zoom65v2_Knob_PVD_Gold.png",
  Knob_PVD_Prism: "./Knob/Zoom65v2_Knob_PVD_Prism.png",
  Knob_PVD_Silver: "./Knob/Zoom65v2_Knob_PVD_Silver.png",
  Knob_Red: "./Knob/Zoom65v2_Knob_Red.png",
  Knob_White: "./Knob/Zoom65v2_Knob_White.png",
  Knob_Yellow: "./Knob/Zoom65v2_Knob_Yellow.png",

  Weight_Ano_Black: "./Weight/Zoom65v2_Weight_Ano_Black.png",
  Weight_Ano_Gold: "./Weight/Zoom65v2_Weight_Ano_Gold.png",
  Weight_Ano_Pink: "./Weight/Zoom65v2_Weight_Ano_Pink.png",
  Weight_Ano_RoseGold: "./Weight/Zoom65v2_Weight_Ano_RoseGold.png",
  Weight_eWhite: "./Weight/Zoom65v2_Weight_eWhite.png",
  Weight_PVD_Black: "./Weight/Zoom65v2_Weight_PVD_Black.png",
  Weight_PVD_Gold: "./Weight/Zoom65v2_Weight_PVD_Gold.png",
  Weight_PVD_Prism: "./Weight/Zoom65v2_Weight_PVD_Prism.png",
  Weight_PVD_Silver: "./Weight/Zoom65v2_Weight_PVD_Silver.png",

  Backplate_CF: "./Backplate/Zoom65v2_Backplate_CF.png",
  Backplate_Glass_BlushPink:
    "./Backplate/Zoom65v2_Backplate_Glass_BlushPink.png",
  Backplate_Glass_CoolGrey: "./Backplate/Zoom65v2_Backplate_Glass_CoolGrey.png",
  Backplate_Glass_FaintBlurple:
    "./Backplate/Zoom65v2_Backplate_Glass_FaintBlurple.png",
  Backplate_Glass_Lilac: "./Backplate/Zoom65v2_Backplate_Glass_Lilac.png",
  Backplate_Glass_MilkyGreen:
    "./Backplate/Zoom65v2_Backplate_Glass_MilkyGreen.png",
  Backplate_Glass_Navy: "./Backplate/Zoom65v2_Backplate_Glass_Navy.png",
  Backplate_Glass_ScarletRed:
    "./Backplate/Zoom65v2_Backplate_Glass_ScarletRed.png",
  Backplate_Glass_SkyBlue: "./Backplate/Zoom65v2_Backplate_Glass_SkyBlue.png",
  Backplate_Glass_Teal: "./Backplate/Zoom65v2_Backplate_Glass_Teal.png",
  Backplate_Glass_WildGreen:
    "./Backplate/Zoom65v2_Backplate_Glass_WildGreen.png",
  Backplate_PVD_Black: "./Backplate/Zoom65v2_Backplate_PVD_Black.png",
  Backplate_PVD_Gold: "./Backplate/Zoom65v2_Backplate_PVD_Gold.png",
  Backplate_PVD_Silver: "./Backplate/Zoom65v2_Backplate_PVD_Silver.png",
};

const default_dict = {
  Case_Black: {
    backplate: "Backplate_PVD_Black",
    knob: "Knob_PVD_Silver",
    weight: "Weight_PVD_Silver",
  },
  Case_FaintBlurple: {
    backplate: "Backplate_Glass_FaintBlurple",
    knob: "Knob_Ano_RoseGold",
    weight: "Weight_Ano_RoseGold",
  },
  Case_IvoryCream: {
    backplate: "Backplate_PVD_Silver",
    knob: "Knob_Ano_Gold",
    weight: "Weight_Ano_Gold",
  },
  Case_WildGreen: {
    backplate: "Backplate_Glass_WildGreen",
    knob: "Knob_Ano_Gold",
    weight: "Weight_Ano_Gold",
  },
  Case_CoolGrey: {
    backplate: "Backplate_Glass_CoolGrey",
    knob: "Knob_PVD_Black",
    weight: "Weight_PVD_Black",
  },
  Case_Lilac: {
    backplate: "Backplate_Glass_Lilac",
    knob: "Knob_Ano_RoseGold",
    weight: "Weight_Ano_RoseGold",
  },
  Case_Navy: {
    backplate: "Backplate_Glass_Navy",
    knob: "Knob_PVD_Silver",
    weight: "Weight_PVD_Silver",
  },
  Case_BlushPink: {
    backplate: "Backplate_Glass_BlushPink",
    knob: "Knob_Ano_Pink",
    weight: "Weight_Ano_Pink",
  },
  Case_ScarletRed: {
    backplate: "Backplate_Glass_ScarletRed",
    knob: "Knob_White",
    weight: "Weight_eWhite",
  },
  Case_GTSilver: {
    backplate: "Backplate_PVD_Silver",
    knob: "Knob_Ano_Black",
    weight: "Weight_Ano_Black",
  },
  Case_SkyBlue: {
    backplate: "Backplate_Glass_SkyBlue",
    knob: "Knob_White",
    weight: "Weight_eWhite",
  },
  Case_Teal: {
    backplate: "Backplate_Glass_Teal",
    knob: "Knob_Ano_Gold",
    weight: "Weight_Ano_Gold",
  },
  Case_White: {
    backplate: "Backplate_PVD_Silver",
    knob: "Knob_PVD_Gold",
    weight: "Weight_PVD_Gold",
  },
  Case_CyberYellow: {
    backplate: "Backplate_PVD_Gold",
    knob: "Knob_Ano_Black",
    weight: "Weight_Ano_Black",
  },
};
</script>

<style scoped>
.select-el-col {
  display: flex;
}
.div_center {
  margin: 0 auto;
}

.CONFIGURATOR {
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #6e6d6d;
  padding-bottom: 15px;
}

.select-tilte {
  color: #797676;
  padding-top: 10px;
  padding-bottom: 10px;
}

#image {
  margin: 0 auto;
}
</style>
