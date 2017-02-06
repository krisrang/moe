import Ember from 'ember';

export default Ember.Route.extend({
  redirect(params) {
    let path = params && params.path;
    if (path && path.indexOf('stuff') === 0) {
      let subpath = path.replace("stuff", "");
      window.location.replace("https://files.kris.moe" + subpath);
    } else if (path && path.indexOf('files') === 0) {
      let subpath = path.replace("files", "");
      window.location.replace("https://files.kris.moe/files" + subpath);
    }
  }
});
