async function getPosts() {
  let getIndex = true;
  let index = 1;
  let result;
  var m = $("#content");

  while (true) {
    try {
      result = await $.ajax({
        type: "GET",
        url: "/data/post_" + index + ".json"
      });
      console.log(result);
      $("#content").append(
        `<div class="col-md-auto" id="card">
            <div class="card" style="width: 14.5rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.5); border: 0px;">
                <img
                class="card-img-top"
                src="images/${result.image}"
                alt="Card image cap"
                />
                <div class="card-body">
                    <div class="row justify-content-between" id="meta" style="margin-right: -15px; margin-left: -15px;">
                        <div class="col-md-auto" id="card">
                            <h7>${result.date}</h7>
                        </div>
                        <div class="col-md-auto" id="card">
                            <h7>${result.author}</h7>
                        </div>
                    </div>
                    <h5 class="card-title">${result.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${
                      result.title_secondary
                    }</h6>
                    <p class="card-text">
                        ${result.content.substring(0, 109)}...
                    </p>
                    <a href="index.html#${index}" class="card-link">Read</a>
                </div>
            </div>
        </div>`
      );
    } catch (error) {
      break;
    }
    index++;
  }
}

$(document).ready(function() {
  getPosts();
});
