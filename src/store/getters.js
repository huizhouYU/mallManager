const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  userid: state => state.user.userid,
  introduction: state => state.user.introduction,
  mobile: state => state.user.mobile,
  roles: state => state.user.roles,
  currentLookStoreId:state => state.user.currentLookStoreId,
  currentLookStoreName:state => state.user.currentLookStoreName,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
