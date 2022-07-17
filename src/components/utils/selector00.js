export default {
  name: 'selector',

  props: {
    value: {
      type: Number,
      default: 0
    },

    options: {
      type: Array,
      default: () => ([])
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  data: () => ({
    selectedIndex: 0
  }),

  created() {
    let index = this.value
    let selectedIndex = this.options.findIndex(el => el?.value === this.options[index]?.value) || 0

    if (!this.options[selectedIndex]) {
      selectedIndex = 0
    }

    this.toggleSelect(selectedIndex)
  },

  methods: {
    toggleSelect(selectedIndex) {
      this.selectedIndex = selectedIndex;
      this.$emit('change', this.selectedIndex)
    },
  },

  render() {
    console.log({
      selectedIndex: this.selectedIndex,
      options: this.options,
      toggleSelect: this.toggleSelect
    })

    return this.$scopedSlots.default({
      selectedIndex: this.selectedIndex,
      options: this.options,
      toggleSelect: this.toggleSelect
    })
  }
}
