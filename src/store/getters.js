const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  firstName:state => state.user.firstName,
  permission: state => state.user.permission,
  spinShow: state => state.user.spinShow
}
export default getters
