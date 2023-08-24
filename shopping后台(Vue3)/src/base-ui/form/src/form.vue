<template>
  <div class="form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
              v-if="!item.isHidden"
            >
              <template v-if="item.type === 'input'">
                <el-input
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                >
                  <template v-for="option in item.options" :key="option.label">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datapicker'">
                <el-date-picker
                  v-bind="item.dataOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'switch'">
                <el-switch
                  :active-value="1"
                  :inactive-value="0"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'checkbox'">
                <el-checkbox-group v-model="formData[`${item.field}`]">
                  <el-checkbox label="Online activities" name="type" />
                  <el-checkbox label="Promotion activities" name="type" />
                  <el-checkbox label="Offline activities" name="type" />
                  <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
              </template>
              <template v-else-if="item.type === 'radio'">
                <el-radio-group v-model="formData[`${item.field}`]">
                  <el-radio label="Sponsor" />
                  <el-radio label="Venue" />
                </el-radio-group>
              </template>
              <template v-else-if="item.type === 'image'">
                <DiyUpload :imageUrl="formData[`${item.field}`]"> </DiyUpload>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { IFormItem } from '../type';
import DiyUpload from '@/base-ui/upload';
export default defineComponent({
  props: {
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
      default: '100px'
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
      default: () => ({ padding: '5px 30px', boxSizing: 'border-box' })
    }
  },
  components: { DiyUpload },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    //响应式,避免不是单向数据流
    const formData = ref({ ...props.modelValue });
    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue);
      },
      { deep: true }
    );
    return { formData };
  }
});
</script>

<style scoped lang="less">
.form {
  padding-top: 18px;
}
</style>
