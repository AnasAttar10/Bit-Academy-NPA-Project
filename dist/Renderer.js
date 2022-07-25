class Renderer {
  constructor(scriptID, containerID, apiManager) {
    this.scriptID = scriptID;
    this.containerID = containerID;
    this.apiManager = apiManager;
  }

  render() {
    let source = $(`#handlebars-demo`).html();
    var templateScript = Handlebars.compile(source);
    var html = templateScript(this.apiManager);
    $(`#${this.containerID}`).append(html);
  }
}
