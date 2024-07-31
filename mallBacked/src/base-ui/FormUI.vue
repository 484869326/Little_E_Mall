<template>
  <div class="form">
    <ElForm
      :label-width="labelWidth"
      :model="formData"
      ref="ruleFormRef"
      :size="'default'"
      @submit.prevent
    >
      <ElRow>
        <template v-for="item in formItemsRef" :key="item.label">
          <ElCol v-bind="colLayout">
            <ElFormItem
              :label="item.label"
              :prop="item.field"
              v-show="!item.isHidden"
              :rules="!item.isHidden ? item.rules : undefined"
              :style="itemStyle"
            >
              <slot :name="item.slotName">
                <template v-if="item.type === 'input'">
                  <ElInput
                    :placeholder="item.placeholder"
                    v-model="formData[`${item.field}`]"
                  ></ElInput>
                </template>
                <template v-else-if="item.type === 'select'">
                  <ElSelect
                    :disabled="item.disabled"
                    :placeholder="item.placeholder"
                    v-model="formData[`${item.field}`]"
                    @change="
                      item.isChange ? item.isChange(formItemsRef, formData[`${item.field}`]) : ''
                    "
                    clearable
                    :remote="item.remote"
                  >
                    <template v-for="option in item.options" :key="option.value">
                      <ElOption :label="option.label" :value="option.value"></ElOption>
                    </template>
                  </ElSelect>
                </template>
                <template v-else-if="item.type === 'datepicker'">
                  <ElDatePicker
                    v-bind="item.dataOptions"
                    style="width: 100%"
                    v-model="formData[`${item.field}`]"
                    value-format="YYYY-MM-DD"
                  />
                </template>
                <template v-else-if="item.type === 'switch'">
                  <ElSwitch
                    :active-value="1"
                    :inactive-value="0"
                    v-model="formData[`${item.field}`]"
                  />
                </template>
                <template v-else-if="item.type === 'checkbox'">
                  <ElCheckboxGroup v-model="formData[`${item.field}`]">
                    <ElCheckbox label="Online activities" name="type" />
                    <ElCheckbox label="Promotion activities" name="type" />
                    <ElCheckbox label="Offline activities" name="type" />
                    <ElCheckbox label="Simple brand exposure" name="type" />
                  </ElCheckboxGroup>
                </template>
                <template v-else-if="item.type === 'radio'">
                  <ElRadioGroup v-model="formData[`${item.field}`]">
                    <ElRadio label="Sponsor" />
                    <ElRadio label="Venue" />
                  </ElRadioGroup>
                </template>
                <!-- 图片展示上传 -->
                <template v-else-if="item.type === 'upload'">
                  <DiyUpload v-model="formData[`${item.field}`]" :list-type="item.listType as any">
                  </DiyUpload>
                </template>
              </slot>
            </ElFormItem>
          </ElCol>
        </template>
      </ElRow>
      <slot name="footer"></slot>
    </ElForm>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IFormItem } from "@/types/baseUI";
import DiyUpload from "@/base-ui/UpLoadUI.vue";
import type { FormInstance } from "element-plus";
import { useVModel } from "@/hook/useVModel";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: "auto"
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: "5px 30px", boxSizing: "border-box" })
  }
});
const emit = defineEmits(["update:modelValue"]);
//校验规则ref
const ruleFormRef = ref<FormInstance>();
function validateData() {
  return new Promise((resolve) => {
    ruleFormRef.value?.validate((valid: boolean) => {
      resolve(valid);
    });
  });
}

const formItemsRef = ref([...props.formItems]);
//响应式,避免不是单向数据流
// //第一种方法
const formData = ref(props.modelValue);
watch(
  formData,
  (newValue) => {
    emit("update:modelValue", newValue);
  },
  { deep: true }
);
//第二种方法
// const formData = useVModel(props, "modelValue", emit);

function setFormDataField(field: string, value: any) {
  formData.value[field] = value;
}
defineExpose({
  validateData,
  setFormDataField
});
</script>

<style scoped lang="scss">
.form {
  padding-top: 18px;
}
</style>
