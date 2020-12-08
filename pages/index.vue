<template>
  <div class="container md:h-screen relative">
    <MainTitle />
    <div
      class="started-test flex flex-col justify-evenly md:flex-row mx-auto w-4/5 md:w-full z-10 origin-center"
    >
      <GetStarted
        :categories="selectOptions"
        @from:changed="handleFromChange"
        @to:changed="handleToChange"
        @category:selected="selectCategory($event, selectOptions)"
        @response:get="getResponse"
      />
      <Chat
        :to="to"
        :from="from"
        :question="currentQuestion()"
        :respond="respond"
        :loading="loading"
      />
    </div>
    <img
      loading="lazy"
      src="../static/undraw_conversation_h12g.svg"
      alt="#"
      class="backround-image w-6/12 md:w-3/12 absolute top-2 left-1 md:top-2 md:left-3"
    >
    <img
      loading="lazy"
      src="../static/undraw_super_thank_you_obwk.svg"
      alt="#"
      class="backround-image w-6/12 md:w-3/12 absolute top-2 right-1 md:top-2 md:right-5"
    >
    <img
      loading="lazy"
      src="../static/undraw_share_opinion_jpw0.svg"
      alt="#"
      class="backround-image w-6/12 md:w-3/12 hidden md:block absolute bottom-2 right-4 md:bottom-2 md:right-15"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import MainTitle from "~/components/MainTitle.vue";
import GetStarted from "~/components/GetStarted.vue";
import Chat from "~/components/Chat.vue";

import CategoryFetcher from "@/plugins/Categories.ts";
import RespondFetcher from "@/plugins/Respond.ts";
import { Category, Respond } from "@/interfaces/BaseInterfaces.ts";

@Component({
  components: { MainTitle, GetStarted, Chat }
})
export default class Index extends Vue {
  selectOptions: Category[] = [];
  from: string = "Mike";
  to: string = "My lovely Boss";
  respond: Respond = {
    message: "Hmmm what should i say...",
    subtitle: this.from
  };

  questions: string[] = [
    "Will you work on holidays this year?",
    "Can you help me to move my stuff?",
    "Take me from the airport. I will arive at 3 AM."
  ];

  loading: boolean = false;

  async created(): Promise<void> {
    await this.fetchCategories();
  }

  get selectedCategory(): Category {
    const selected = this.selectOptions.find(
      ({ selected }: Category) => selected
    );
    if (!selected) return this.selectOptions[0];
    return selected;
  }

  async fetchCategories(): Promise<void> {
    const Categories = new CategoryFetcher({ baseUrl: "/operations" });
    const options: Category[] = await Categories.get();
    this.selectOptions = options;
    this.selectDefault(this.selectOptions);
  }

  selectDefault(options: Category[]): void {
    if (!options?.length) return;
    this.$set(options[0], "selected", true);
  }

  selectCategory(category: Category, options: Category[]): void {
    if (!category || !options?.length) return;
    options.forEach((option) => {
      this.$set(option, "selected", category.name === option.name);
    });
  }

  currentQuestion(): string {
    const i = this.randomIntegerBetween(0, this.questions.length - 1);
    const current = this.questions[i];
    return current;
  }

  randomIntegerBetween(a: number, b: number): number {
    if (typeof a !== "number" || typeof b !== "number") {
      return 0;
    }
    let minNum = a;
    let maxNum = b;
    if (a < b) {
      minNum = b;
      maxNum = a;
    }
    const min: number = Math.ceil(minNum);
    const max: number = Math.floor(maxNum);
    const randomNumber: number =
      Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

  handleFromChange(from: string): void {
    this.from = from;
  }

  handleToChange(to: string): void {
    this.to = to;
  }

  setRespond(respond: Respond): void {
    this.respond = respond;
  }

  async getResponse(): Promise<void> {
    this.loading = true;
    const baseUrl = this.selectedCategory.url;
    const entries = {
      name: this.to,
      from: this.from
    };
    const Respond = new RespondFetcher({ baseUrl, entries }, true);
    const respond = await Respond.get();
    this.setRespond(respond);
    this.loading = false;
  }
}
</script>

<style>
@media (max-width: 640px) {
  .container {
    height: 1000px !important;
  }
}
</style>
