export default {
  name: 'selector',

  props: {
    value: {
      type: Number,
      default: -1
    },
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  data() {
    return {
      selectedIndex: -1
    }
  },

  created() {
    this.toggleSelect(this.value)
  },

  methods: {
    toggleSelect(selectedIndex) {
      this.selectedIndex = selectedIndex;
      this.$emit('change', this.selectedIndex)
    },

    isSelected(index = -1) {
      return this.selectedIndex === index
    }
  },

  render() {
    console.log({
      selectedIndex: this.selectedIndex,
      toggleSelect: this.toggleSelect,
      isSelected: this.isSelected
    })

    return this.$scopedSlots.default({
      selectedIndex: this.selectedIndex,
      toggleSelect: this.toggleSelect,
      isSelected: this.isSelected
    })
  }
}
