console.log('Starting up');

function onInit() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();

    const strHtmls = projs.map((proj) => {
        return `
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/${proj.id}.png" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${proj.publishedAt}</li>
                  <li>Client: Coding Academy</li>
                  <li>Category: Game</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`


    })
    $('.modals').html(strHtmls)
}