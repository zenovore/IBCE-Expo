<template>
  <div
    :class="`
      w-11/12
      md:w-9/12
      xl:w-8/12
      h-auto
      accordion
      group
      rounded-lg bg-no-repeat bg-right-top 
      ${
        open
          ? 'bg-40% bg-' + background2 + ' bg-green_65'
          : 'bg-20% bg-' + background + ' bg-green_60'
      }
    `"
    style="background-blend-mode: overlay"
    @click="openAccordion()"
  >
    <div class="flex flex-row">
      <div
        :class="`flex color-bar w-2 rounded-l-lg h-auto ${
          open ? 'bg-green_80' : 'bg-green_70'
        }`"
      ></div>
      <div class="w-[98%] flex flex-col">
        <div
          class="
            flex flex-row
            title
            px-5
            py-1
            md:py-2
            my-auto
            rounded-lg
            align-middle
            justify-between
            items-center
            cursor-pointer
          "
        >
          <h1
            class="
              text-green_110
              text-xl
              sm:text-2xl
              md:text-4xl
              first:justify-center
              font-lobster
            "
          >
            {{ title }}
          </h1>
          <h1 v-if="!open" class="text-green_110 font-sans text-[40px]">+</h1>
          <h1 v-else class="text-green_110 font-sans text-[40px]">–</h1>
        </div>
        <div
          ref="accordion"
          class="
            mx-0.5
            flex
            content
            position-absolute
            rounded-b-[0.4rem]
            py-1
            w-[inherit]
          "
        >
          <div class="flex-col text-left w-[inherit]">
            <p
              v-for="item in fileData"
              :key="item"
              ref="content"
              class="
                text-green_110
                overflow-y-hidden
                md:text-xl
                text-sm
                md:px-4
                py-[8px]
                px-2
                font-roboto
                underline
                lowercase
                first-line:capitalize
                whitespace-nowrap
                overflow-ellipsis overflow-hidden
                w-[97%]
              "
            >
              <a
                class="overflow-ellipsis overflow-hidden"
                :href="`/article/${title}/${item.id}`"
                target="_blank"
                >{{ item.judul }}</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      default:
        "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, harum. Tempora alias officia totam mollitia nisi minus ad repellat ipsum, odio vero neque accusamus magnam labore in ea autem voluptatibus!",
      type: String,
    },
    title: {
      default: "Lorem Ipsum",
      type: String,
    },
    background: {
      default: "bunga1",
      type: String,
    },
    background2: {
      default: "bunga2",
      type: String,
    },
    fileData: Object,
  },
  data() {
    return {
      open: false,
    };
  },
  mounted() {},
  methods: {
    openAccordion() {
      if (this.$refs.accordion.style.maxHeight) {
        this.$refs.accordion.style.maxHeight = null;
      } else {
        this.$refs.accordion.style.maxHeight = `${
          this.$refs.content.scrollHeight + this.$refs.accordion.scrollHeight
        }px`;
      }
      this.open = !this.open;
    },
    spliceText(text, maxChar) {
      return text.slice(0, maxChar) + (text.length > maxChar ? "..." : "");
    },
  },
};
</script>

<style scoped>
.content {
  max-height: 0;
  transition: all 0.5s;
  overflow: hidden;
}
.accordion {
  transition: all 0.5s;
}
.color-bar {
  transition: all 0.5s;
}
</style>
