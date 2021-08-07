<template>
  <div class="content">
    <div class="event-on">
      <a-input
        v-model:value="inputEventName"
        placeholder="输入事件名"
        style="width: 300px;"
      />
      <a-button
        type="primary"
        style="margin-left: 8px;"
        @click="handleRegisterEvent"
      >
        注册事件
      </a-button>
      <a-button
        style="margin-left: 8px;"
        @click="handleRandomEmit"
      >
        随机触发事件
      </a-button>
    </div>
    <div class="event-list">
      <div
        v-for="[key, value] of eventMap"
        :key="key"
        class="event-item"
      >
        <div class="event-item-desc">
          <div class="event-item-name">
            事件名: {{ key }} ({{ value.length }})
          </div>
          <a-button
            type="link"
            @click="handleEventEmit(key)"
          >
            触发事件
          </a-button>
          <a-button
            type="link"
            @click="handleEventOff(key)"
          >
            删除事件
          </a-button>
        </div>
        <div class="event-item-console">
          <div
            v-for="(content, cIndex) of eventConsoles.get(key)"
            :key="`${content}-${cIndex}`"
          >
            <a-typography-text type="secondary">
              {{ content }}
            </a-typography-text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue';
import { defineComponent, ref } from 'vue';
import mitt from 'mitt';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'DemoMitt',
  setup() {
    const inputEventName = ref<string>('');
    const emitter = mitt();
    const eventMap = ref<any>(new Map());
    const eventConsoles = ref<any>(new Map());

    return {
      inputEventName,
      emitter,
      eventMap,
      eventConsoles,
    };
  },
  created() {
    // 预设一些事件
    this.handleEventOn('EventA');
    this.handleEventOn('EventB');
    this.handleEventOn('EventC');
  },
  methods: {
    handleRegisterEvent() {
      const event: string = this.inputEventName.trim();
      if (!event) {
        message.warning('注册事件名不能为空');
        return;
      }

      this.handleEventOn(event);

      this.inputEventName = '';
    },
    handleEventOn(event: string) {
      this.emitter.on(event, (e) => {
        const content = `Event[${event}]: 事件触发. 随机参数: ${JSON.stringify(e)}`;
        console.log(content);

        if (!this.eventConsoles.has(event)) {
          this.eventConsoles.set(event, []);
        }

        this.eventConsoles.get(event).push(content);
      });

      if (!this.eventMap.has(event)) {
        this.eventMap.set(event, []);
      }

      this.eventMap.get(event).push('event');
    },
    handleRandomEmit() {
      const events: string[] = [];
      this.eventMap.forEach((value: [], key: string) => {
        events.push(key);
      });

      if (events.length > 0) {
        const randomIndex = Math.floor(Math.random() * events.length);
        const randomEventName = events[randomIndex];
        this.handleEventEmit(randomEventName);
        message.success(`随机触发事件[${randomEventName}]`, 1);
      } else {
        message.warning('事件列表为空, 无法随机触发事件');
      }
    },
    handleEventEmit(event: string) {
      this.emitter.emit(event, {
        time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        random: Math.floor(Math.random() * 100),
      });
    },
    handleEventOff(event: string) {
      this.emitter.off(event);

      this.eventMap.delete(event);
      this.eventConsoles.delete(event);
    },
  },
});
</script>

<style lang="scss" scoped>
.event-list {
  padding: 24px 0px;
  .event-item {
    border: 1px dashed rgba(0, 0, 0, 0.15);
    margin-bottom: 12px;
    padding: 4px 12px;
    box-sizing: border-box;
    &:hover {
      border: 1px dashed rgba(0, 0, 0, 0.85);
      background-color: rgba(0, 0, 0, 0.02);
    }
    .event-item-desc {
      display: flex;
      align-items: center;
      font-size: 15px;
      .event-item-name {
        flex: 1;
      }
    }
  }
}
</style>
