console.log('Starting up');

function onInit() {
  renderPortfolio()
  contact()
}

function renderPortfolio() {
  var projects = getProjs();
  const strHtmls = projects.map(project => {

    return `<div class="col-md-4 col-sm-6 portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${project.id}')" href="#modal">
                  <div class="portfolio-hover"  >
                     <div class="portfolio-hover-content" >
                      <i class="fa fa-plus fa-3x" ></i>
                     </div>
                  </div>
              <img class="img-fluid" src="img/${project.id}.png" alt="">
              </a>
             <div class="portfolio-caption">
                <h4>${project.name}</h4>
                <p class="text-muted">Illustration</p>
             </div>
           </div>`
  })
  $('.portofolio').html(strHtmls)
}



function renderModal(projectId) {

  var project = getProject(projectId);


  var strHtmls = `<h2>${project.name}</h2>
                  <p class="${project.title}"</p>
                  <div class - "container">
                  <img class="img-fluid d-block mx-auto fill" src="img/${project.id}.png" alt="">
                  </div>
                  <p>${project.desc}</p>
                  <ul class="list-inline">
                     <li>Date: ${project.publishedAt}</li>
                     <li>Client: Coding Academy</li>
                     <li>Category:Game</li>
                 </ul>
                 <button class="btn btn-primary" data-dismiss="modal" type="button" onclick="window.location.href= '${project.url}'">
                
                 Check It Out</button>
 
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>`

  $('.modal-body').html(strHtmls)

}

function contact() {
  $('form .btn-submit').click(function () {

    var email = $('.email').val();
    var subject = $('.subject').val();
    var extra = $('.extra').val();

    var str = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${extra}`
    window.open(str)
    $('.email').val("")
    $('.subject').val("")
    $('.extra').val("")
    $('.aside').removeClass('offcanvas-aside-open')
  })
}