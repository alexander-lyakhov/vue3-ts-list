export default {
  name: 'fetch',

  props: {
    url: {
      type: String
    }
  },

  data() {
    return {
      result: {},
      isLoading: false
    }
  },

  watch: {
    url: {
      async handler(url) {
        this.isLoading = true
        this.result = await fetch(url).then(res => res.json())
        this.isLoading = false

        console.log(url, this.result)
      },
      immediate: true
    }
  },

  render() {
    return this.$scopedSlots.default({
      result: this.result,
      isLoading: this.isLoading
    })
  }
}
