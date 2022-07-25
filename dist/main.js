const fetchTeamData = function () {
  let input = $("#teamname").val();
  $.get(`/teams/${input}`, function (players) {
    // for (const player of players) {
    //   rerender("#all-players", player);
    // }
    let render = new Renderer("handlebars-demo", "all-players", {
      players: players,
    });
    render.render();
  });
};
