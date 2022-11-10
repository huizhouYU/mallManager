<script>
export default {
  beforeCreate() {
    const { query } = this.$route
    const path = query.path
     const parameter = query.query
    this.$router.replace({ path: path,query:parameter })
  },
  mounted() {},
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
